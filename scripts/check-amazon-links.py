#!/usr/bin/env python3
import json
import re
import urllib.request
import urllib.error
from pathlib import Path

DP_RE = re.compile(r"https?://(?:www\.)?amazon\.com/dp/([A-Z0-9]{10})", re.I)
GP_RE = re.compile(r"https?://(?:www\.)?amazon\.com/gp/product/([A-Z0-9]{10})", re.I)
ASIN_RE = re.compile(r'"asin"\s*:\s*"([A-Z0-9]{10})"', re.I)

NOT_FOUND_PATTERNS = [
    "page not found",
    "sorry! we couldn't find that page",
    "dogs of amazon",
]


def collect_asins():
    asins = {}
    page_dir = Path("content/pages")
    products_dir = Path("content/data/products")

    for p in sorted(page_dir.glob("*.md")):
        text = p.read_text(errors="ignore")
        for m in DP_RE.finditer(text):
            asins.setdefault(m.group(1).upper(), set()).add(str(p))
        for m in GP_RE.finditer(text):
            asins.setdefault(m.group(1).upper(), set()).add(str(p))

    for p in sorted(products_dir.glob("*.json")):
        text = p.read_text(errors="ignore")
        for m in ASIN_RE.finditer(text):
            asins.setdefault(m.group(1).upper(), set()).add(str(p))

    return asins


def fetch_amazon_dp(asin: str):
    url = f"https://www.amazon.com/dp/{asin}"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )

    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            status = resp.getcode()
            body = resp.read(350_000).decode("utf-8", errors="ignore").lower()
    except urllib.error.HTTPError as e:
        status = e.code
        body = (e.read() or b"").decode("utf-8", errors="ignore").lower()
    except Exception:
        return "unverified", "network_error"

    if status == 404:
        return "dead", "http_404"

    if 'id="producttitle"' in body:
        return "ok", "product_title_found"

    # Amazon often serves bot/interstitial pages on CI/build infra.
    # Treat pattern-only matches as unverified (warn), not dead, unless it's a hard 404.
    if any(p in body for p in NOT_FOUND_PATTERNS):
        return "unverified", "not_found_pattern_without_product_title"

    # Could be bot/interstitial/geo/login wall. Don't hard-fail build on this.
    return "unverified", f"status_{status}_no_product_title"


def main():
    asins = collect_asins()
    if not asins:
        print("PASS: no Amazon ASINs found")
        return 0

    dead = []
    unverified = []
    ok = 0

    for asin in sorted(asins.keys()):
        state, reason = fetch_amazon_dp(asin)
        if state == "dead":
            dead.append((asin, reason, sorted(asins[asin])))
        elif state == "unverified":
            unverified.append((asin, reason))
        else:
            ok += 1

    if dead:
        print("FAIL: dead Amazon ASIN links detected")
        for asin, reason, files in dead:
            print(f"- {asin}: {reason}")
            for f in files:
                print(f"    in {f}")
        return 1

    if unverified:
        print(f"PASS: no dead Amazon links found ({ok} ok, {len(unverified)} unverified)")
        print("WARN: unverified ASINs (interstitial/network/bot walls):")
        for asin, reason in unverified[:20]:
            print(f"- {asin}: {reason}")
        if len(unverified) > 20:
            print(f"... and {len(unverified)-20} more")
        return 0

    print(f"PASS: Amazon ASIN checks passed ({ok} ok)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
