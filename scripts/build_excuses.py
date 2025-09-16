#!/usr/bin/env python3
"""Generate assets/js/excuses.js from data/excuses.csv"""

import csv, json, pathlib

csv_path = pathlib.Path(__file__).parent.parent / "data" / "excuses.csv"
out_path = pathlib.Path(__file__).parent.parent / "assets" / "js" / "excuses.js"

rows = []
with open(csv_path, newline='', encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for r in reader:
        r["id"] = int(r["id"])
        rows.append(r)

js_array = "export const EXCUSES = " + json.dumps(rows, ensure_ascii=False, indent=2) + ";\n"

out_path.write_text(js_array, encoding="utf-8")
print(f"Wrote {out_path} with {len(rows)} excuses")
