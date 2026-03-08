#!/usr/bin/env python3
import json
import sys
import os
from pathlib import Path

# Read extracted files
with open(r'C:\Users\66bar\.claude\projects\C--Users-66bar-WebstormProjects-HealEase--client\extracted_files.json', 'r') as f:
    extracted = json.load(f)

# Target directory
target_dir = Path(r'C:\Users\66bar\WebstormProjects\HealEase--client')
os.chdir(target_dir)

restored_count = 0
failed_count = 0

for file_path, file_data in extracted.items():
    content = file_data['content']
    source = file_data['source']

    full_path = target_dir / file_path

    # Skip tests and docs for now
    if '__tests__' in file_path or file_path.startswith('docs/'):
        print(f"SKIP: {file_path}", file=sys.stderr)
        continue

    try:
        # Create directories
        full_path.parent.mkdir(parents=True, exist_ok=True)

        # Write file
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"RESTORE: {file_path}")
        restored_count += 1
    except Exception as e:
        print(f"ERROR: {file_path}: {e}", file=sys.stderr)
        failed_count += 1

print(f"\n\n=== SUMMARY ===", file=sys.stderr)
print(f"Restored: {restored_count}", file=sys.stderr)
print(f"Failed: {failed_count}", file=sys.stderr)
print(f"Skipped: {len(extracted) - restored_count - failed_count}", file=sys.stderr)