#!/usr/bin/env python3
from pathlib import Path

RULES = {
    'best-cable-management-kits-desk': {
        'must_any': ['cable', 'tray', 'wire', 'cord'],
        'forbid': ['standing desk', 'sit-stand', 'wobble', 'monitor configuration']
    },
    'best-standing-desk-solopreneurs': {
        'must_any': ['desk', 'standing', 'frame', 'height'],
        'forbid': ['dry shampoo', 'sandal', 'dress', 'fidget']
    },
    'best-vacuum-cleaners-home-amazon': {
        'must_any': ['vacuum', 'suction', 'floor', 'brush', 'filter'],
        'forbid': ['standing desk', 'monitor arm']
    },
}

fails = []
for p in Path('content/pages').glob('*.md'):
    txt = p.read_text().lower()
    slug = p.stem
    if slug not in RULES:
        continue
    r = RULES[slug]
    if not any(m in txt for m in r['must_any']):
        fails.append((p.name, 'missing category keywords'))
    for bad in r['forbid']:
        if bad in txt:
            fails.append((p.name, f'forbidden phrase: {bad}'))

if fails:
    print('FAIL: card consistency checks failed')
    for f, msg in fails:
        print(f'- {f}: {msg}')
    raise SystemExit(1)

print('PASS: card consistency checks passed')
