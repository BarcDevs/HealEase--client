#!/usr/bin/env python3
import json
import os
from pathlib import Path
import sys

os.chdir(r'C:\Users\66bar\.claude\projects\C--Users-66bar-WebstormProjects-HealEase--client')

# Get ALL JSONL files
jsonl_files = sorted([f for f in os.listdir('.') if f.endswith('.jsonl')])
print(f"Found {len(jsonl_files)} conversation files", file=sys.stderr)

extracted_full = {}

for fname in jsonl_files:
    print(f"Scanning {fname}...", file=sys.stderr)
    try:
        with open(fname, 'r', encoding='utf-8', errors='ignore') as f:
            for line_num, line in enumerate(f, 1):
                if not line.strip():
                    continue
                try:
                    data = json.loads(line)

                    # Check toolUseResult with file content
                    if data.get('toolUseResult', {}).get('file', {}).get('filePath'):
                        fpath = data['toolUseResult']['file']['filePath']
                        content = data['toolUseResult']['file'].get('content', '')

                        # Normalize path
                        if 'HealEase--client' in fpath:
                            fpath = fpath.split('HealEase--client')[1]
                            if fpath.startswith('\\'):
                                fpath = fpath[1:]
                            fpath = fpath.replace('\\', '/')

                        # Keep ALL files
                        if fpath not in extracted_full:
                            extracted_full[fpath] = {
                                'content': content,
                                'source': fname,
                                'size': len(content)
                            }
                except:
                    pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

# Keywords to search for
keywords = ['check-in', 'checkin', 'mood', 'insight', 'activity', 'aipanel',
            'endpoints', 'defaults', 'slider', 'skeleton', 'separator', 'textarea', 'chart',
            'topactivities', 'selectedactivities', 'suggestedactivities', 'chartconfig']

relevant = {}
for fpath, data in extracted_full.items():
    lower_path = fpath.lower()
    if any(kw in lower_path for kw in keywords):
        relevant[fpath] = data

# Print summary
print(f"\nTotal files in history: {len(extracted_full)}", file=sys.stderr)
print(f"Check-in/UI related files: {len(relevant)}", file=sys.stderr)
print("\n=== FOUND RELEVANT FILES ===", file=sys.stderr)
for fpath in sorted(relevant.keys()):
    print(f"{fpath}", file=sys.stderr)

# Save to JSON
with open('all_extracted.json', 'w') as f:
    json.dump(relevant, f, indent=2)
    print(f"\nSaved to all_extracted.json", file=sys.stderr)

# Also save ui components
ui_keywords = ['slider', 'skeleton', 'separator', 'textarea', 'chart']
ui_files = {}
for fpath, data in extracted_full.items():
    if fpath.startswith('src/components/ui/') and any(kw in fpath.lower() for kw in ui_keywords):
        ui_files[fpath] = data

print(f"\nUI Components found: {len(ui_files)}", file=sys.stderr)
with open('ui_extracted.json', 'w') as f:
    json.dump(ui_files, f, indent=2)
