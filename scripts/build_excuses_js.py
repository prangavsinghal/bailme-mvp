#!/usr/bin/env python3
# Reads scripts/excuses.csv and writes assets/js/excuses.js as an ES module.
# Usage: python scripts/build_excuses_js.py
# Optional: python scripts/build_excuses_js.py --input other.csv --output assets/js/excuses.js

import csv, argparse, pathlib, sys

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", default="scripts/excuses.csv")
    parser.add_argument("--output", "-o", default="assets/js/excuses.js")
    args = parser.parse_args()

    in_path = pathlib.Path(args.input)
    out_path = pathlib.Path(args.output)
    if not in_path.exists():
        print(f"Input CSV not found: {in_path}", file=sys.stderr)
        sys.exit(1)

    rows = []
    with in_path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for r in reader:
            r["id"] = int(r["id"])
            r["category"] = r["category"].strip()
            r["intent"] = r["intent"].strip()
            r["tone"] = r["tone"].strip().lower()
            r["text"] = r["text"].strip()
            rows.append(r)

    rows.sort(key=lambda x: x["id"])

    allowed_tones = {"formal","casual"}
    for r in rows:
        if r["tone"] not in allowed_tones:
            print(f"Warning: row id={r['id']} has non-standard tone '{r['tone']}'. Allowed: {allowed_tones}", file=sys.stderr)

    def js_escape(s: str) -> str:
        return s.replace("\\", "\\\\").replace("`", "\\`")

    parts = []
    for r in rows:
        parts.append(
            "  { id: %d, category: '%s', intent: '%s', tone: '%s', text: `%s` }"
            % (r["id"], r["category"].replace("'", "\\'"), r["intent"].replace("'", "\\'"),
               r["tone"], js_escape(r["text"]))
        )

    content = "export const EXCUSES = [\\n" + ",\\n".join(parts) + "\\n];\\n"

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(content, encoding="utf-8")
    print(f"Wrote {out_path} with {len(rows)} excuses.")

if __name__ == "__main__":
    main()
