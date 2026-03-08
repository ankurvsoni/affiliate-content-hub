# Product Bank v1 — Desk Setup for Solopreneurs (with review perspective)

Status: **Research-backed shortlist** from Amazon Best Sellers pages + third-party test coverage + Reddit pain-language themes.

> Important: convert to final affiliate links after validating current availability, price, and your Associate tag.

## How review perspective was built
- Amazon Best Sellers / category pages for demand signal
- Third-party testing sources for failure modes (stability, noise, durability)
- Reddit pain-language for real-world constraints (desk depth, clamp fit, wobble, heat, cable mess)

---

## A) Standing desks

### 1) ErGear electric standing desk (entry)
- Intent fit: budget setup, first standing desk
- Review perspective: praised for value and easy setup; complaints on wobble at max height and thin top feel
- Who for: first-time buyers under tight budget
- Who should skip: tall users running heavy ultrawide + arm combo

### 2) FlexiSpot E2 / equivalent entry frame
- Review perspective: good motor reliability for price; cable management often added later
- Constraint: check desktop depth before purchase

### 3) VIVO electric standing desk (budget/mid)
- Review perspective: decent frame options; some reports of stability differences by size
- Constraint: prioritize 24"+ depth

### 4) FEZIBO standing desk line
- Review perspective: attractive pricing and storage variants; mixed feedback on long-term frame rigidity
- Constraint: ideal for lighter monitor setups

### 5) Uplift / premium frame route (non-budget anchor)
- Review perspective: excellent stability and accessories; higher upfront cost
- Role in content: “premium benchmark” for tradeoff context

---

## B) Ergonomic chairs

### 6) TRALT ergonomic office chair (budget mesh)
- Review perspective: good starter ergonomics; mixed comments on armrest comfort and cushion longevity
- Who for: sub-$250 buyers

### 7) GABRYLLY ergonomic chair (mid)
- Review perspective: appreciated adjustability; frequent notes about fit preference by body size
- Constraint: verify seat depth and arm range

### 8) BestOffice / super-budget chairs
- Review perspective: low cost and fast availability; durability concerns appear frequently
- Use in content: “what to avoid unless temporary”

### 9) Refurb premium route (Steelcase/Herman Miller categories)
- Review perspective: superior mechanics for long sessions; return shipping and cosmetic wear tradeoffs
- Use in content: value-vs-risk path

---

## C) Monitor arms

### 10) HUANUO dual/single monitor arm line
- Review perspective: strong value and install simplicity; occasional clamp-fit complaints
- Constraint: verify desk edge thickness + lip obstruction

### 11) VIVO monitor arm line
- Review perspective: broad options and pricing; quality varies significantly by model
- Constraint: include model-specific caveats in article

### 12) Amazon Basics premium arm
- Review perspective: often praised for stability in mid-weight monitors
- Constraint: less flexibility in some SKUs vs gas-spring premium models

### 13) North Bayou gas-spring style arms
- Review perspective: smooth movement for price; can need retensioning with heavier displays

### 14) Premium monitor arm tier (Ergotron-class benchmark)
- Review perspective: top ergonomics, longevity; expensive for budget builds

---

## D) Lighting (light bar + task lamp)

### 15) Quntis monitor light bar
- Review perspective: popular value pick; occasional monitor compatibility/glare angle complaints
- Constraint: glossy screens need careful angle setup

### 16) Baseus monitor light bar
- Review perspective: clean design and easy controls; mount fit can vary by monitor bezel thickness

### 17) BenQ ScreenBar tier (premium benchmark)
- Review perspective: strong build + consistency; premium price

### 18) ONEMIX clamp desk lamp (multi-segment)
- Review perspective: bright and flexible; clamp footprint and arm reach planning required

### 19) Generic USB light bars (category)
- Review perspective: cheap entry; QC and color consistency vary heavily

---

## E) Input comfort (mouse/keyboard)

### 20) Logitech MX Master 3S (anchor mouse)
- Review perspective: productivity favorite; some users note hand-size/weight fatigue tradeoff
- Role: benchmark for alternatives content

### 21) Vertical mouse category (Logitech/Anker/others)
- Review perspective: wrist relief for many; adaptation period and precision drop initially

### 22) Quiet mechanical keyboard category
- Review perspective: better typing feel; noise and switch choice confusion common

### 23) Low-profile keyboard category
- Review perspective: easier wrist angle for some; less tactile feedback for heavy typists

---

## F) Cable management

### 24) Adhesive cable clip kits
- Review perspective: instant organization; adhesive failure on dusty/rough undersides

### 25) Under-desk cable tray kits
- Review perspective: biggest visual cleanup impact; install effort and clearance issues

### 26) Reusable velcro tie packs
- Review perspective: best flexibility; can look messy without labeling discipline

### 27) Cable sleeves / raceways
- Review perspective: clean look; harder to troubleshoot when changing gear

---

## G) Desk accessories

### 28) Desk mats (large)
- Review perspective: cleaner mouse + typing zone; dust and edge wear vary by material

### 29) Laptop stands
- Review perspective: immediate posture gain; forces external keyboard/mouse workflow

### 30) Anti-fatigue mats
- Review perspective: helpful for standing sessions; thickness and edge curl complaints appear

---

## Perspective tags to use in each article (copy/paste blocks)

For each product mention, include these 5 micro-perspectives:
1. **Why people buy it** (1 line)
2. **What users complain about** (1 line)
3. **Best desk setup context** (small desk / dual monitor / call-heavy)
4. **Who should skip** (1 line)
5. **Risk check before buying** (fit/weight/depth/return)

---

## Linking workflow (to make this production-ready)

1. For each product candidate, capture:
   - ASIN
   - Current price band
   - Rating + review count snapshot
   - In-stock status
   - 1 backup alternative
2. Generate affiliate links with your tag.
3. Store in `products.json` + reusable shortcode blocks.
4. Auto-insert into article templates by category + budget tier.

---

## Next file to produce
`affiliate-links-v1.csv` columns:
- category
- product_name
- asin
- amazon_url
- affiliate_url
- price_band
- rating_snapshot
- review_count_snapshot
- primary_use_case
- main_tradeoff
- backup_asin
