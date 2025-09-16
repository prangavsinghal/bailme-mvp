# Bail Me — Multipage Static Webapp
Pure static site. See folder structure and run with `python3 -m http.server 8080`.


## Content pipeline (CSV → JS)
- Edit `data/excuses.csv` in Excel/Google Sheets.
- Run the generator:

```bash
cd scripts
python build_excuses.py
```

This overwrites `assets/js/excuses.js` with the CSV data.

## Content pipeline (CSV → JS)
Edit `scripts/excuses.csv` (headers: id,category,intent,tone,text) and run **one** of:

### Python (recommended)
```bash
python scripts/build_excuses_js.py
```

### Node (optional, no dependencies)
```bash
node scripts/build_excuses_js.mjs
```

Both write to `assets/js/excuses.js`. Commit and push to update the live site.
