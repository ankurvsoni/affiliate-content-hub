#!/usr/bin/env python3
from pathlib import Path

ledger = Path('plans/action-ledger.md')
if not ledger.exists():
    print('FAIL: plans/action-ledger.md missing')
    raise SystemExit(1)

lines = ledger.read_text().splitlines()
pending = []
for ln in lines:
    if not ln.strip().startswith('|'):
        continue
    # skip header/separator
    if '---' in ln or 'Requested action' in ln:
        continue
    cols = [c.strip() for c in ln.strip('|').split('|')]
    if len(cols) < 4:
        continue
    status = cols[3]
    if status == 'APPROVED_PENDING':
        pending.append(cols[0] if cols else '(unknown)')

if pending:
    print('FAIL: Found APPROVED_PENDING items in action ledger:', ', '.join(pending))
    raise SystemExit(1)

print('PASS: no pending approved actions in ledger')
