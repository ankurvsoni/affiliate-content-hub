# Trading Snapshot Viewer (Local)

Single-page static webapp to visualize point-in-time trading updates.

## Run locally

From this folder:

```bash
cd projects/trading-snapshot-viewer
python3 -m http.server 8080
```

Open:
- http://localhost:8080

## Update data

Edit:
- `data/snapshot.json`

The UI will reflect whatever snapshot JSON you provide.

## Notes

- No database
- No backend state
- Pure static SPA (ideal for GitHub + Vercel deploy later)
