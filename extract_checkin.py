#!/usr/bin/env python3
import json
import sys
import os

os.chdir(r'C:\Users\66bar\.claude\projects\C--Users-66bar-WebstormProjects-HealEase--client')

files_to_process = [
    '1e81ef44-aa76-443f-a81a-b5cdcb7f7241.jsonl',
    '32e2dfc9-f85d-4c2d-8516-c61a54e409f5.jsonl',
    '493c4d25-e4af-4a74-b5f5-e49668d6a761.jsonl',
]

extracted = {}

for fname in files_to_process:
    print(f"Processing {fname}...", file=sys.stderr)
    try:
        with open(fname, 'r', encoding='utf-8', errors='ignore') as f:
            for line_num, line in enumerate(f, 1):
                if not line.strip():
                    continue
                try:
                    data = json.loads(line)
                    if data.get('toolUseResult', {}).get('file', {}).get('filePath'):
                        fpath = data['toolUseResult']['file']['filePath']
                        content = data['toolUseResult']['file'].get('content', '')

                        # Normalize path
                        if 'HealEase--client' in fpath:
                            fpath = fpath.split('HealEase--client')[1].lstrip('\\').replace('\\', '/')

                        # Filter for check-in related files
                        keywords = ['check-in', 'checkin', 'mood', 'insight', 'aipanel']
                        if any(x in fpath.lower() for x in keywords):
                            if fpath not in extracted:
                                extracted[fpath] = {'content': content, 'source': fname}
                                print(f"  Found: {fpath}", file=sys.stderr)
                except:
                    pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

# Print what we found
print("\n=== FOUND FILES ===")
for fpath in sorted(extracted.keys()):
    print(fpath)

# Save to file
with open('extracted_files.json', 'w') as f:
    json.dump(extracted, f, indent=2)
    print(f"\nSaved extracted files to extracted_files.json", file=sys.stderr)