#!/usr/bin/env python3
import json
import sys
import os

os.chdir(r'C:\Users\66bar\.claude\projects\C--Users-66bar-WebstormProjects-HealEase--client')

files_to_check = [
    '1e81ef44-aa76-443f-a81a-b5cdcb7f7241.jsonl',
    '28a70774-3068-4f4b-ac5c-7a0ebce384fe.jsonl',
    '32e2dfc9-f85d-4c2d-8516-c61a54e409f5.jsonl',
    '4e71c5bb-caae-48db-9886-8411602f264c.jsonl'
]

found = {}

for fname in files_to_check:
    print(f"Checking {fname}...", file=sys.stderr)
    try:
        with open(fname, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                try:
                    data = json.loads(line)
                    if data.get('toolUseResult', {}).get('file', {}).get('filePath'):
                        fpath = data['toolUseResult']['file']['filePath']
                        content = data['toolUseResult']['file'].get('content', '')

                        if 'HealEase--client' in fpath:
                            fpath = fpath.split('HealEase--client')[1]
                            if fpath.startswith('\\'):
                                fpath = fpath[1:]
                            fpath = fpath.replace('\\', '/')

                        if ('SuggestedActivities.tsx' in fpath or 'CheckInStats.tsx' in fpath):
                            if fpath not in found and len(content) > 200:
                                found[fpath] = content
                                print(f"Found: {fpath} ({len(content)} bytes)", file=sys.stderr)
                except:
                    pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

# Output the files
for fpath in sorted(found.keys()):
    print(f"\n\n{'='*80}")
    print(f"FILE: {fpath}")
    print('='*80)
    print(found[fpath])
