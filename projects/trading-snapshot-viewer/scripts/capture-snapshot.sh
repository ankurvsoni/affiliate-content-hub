#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/screenshots"
mkdir -p "$OUT_DIR"

DATE_TAG="$(date +%F)"
OUT_FILE="$OUT_DIR/trading-snapshot-${DATE_TAG}.png"
LATEST_FILE="$OUT_DIR/latest.png"

PORT="8787"
SERVER_LOG="/tmp/trading-snapshot-server.log"

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" || true
  fi
}
trap cleanup EXIT

cd "$ROOT"
python3 -m http.server "$PORT" >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!
sleep 2

CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [[ ! -x "$CHROME_BIN" ]]; then
  echo "Chrome not found at $CHROME_BIN"
  exit 1
fi

"$CHROME_BIN" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --window-size=1600,1400 \
  --screenshot="$OUT_FILE" \
  "http://127.0.0.1:${PORT}/" >/dev/null 2>&1

cp "$OUT_FILE" "$LATEST_FILE"
echo "Saved screenshot: $OUT_FILE"
