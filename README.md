# Sabha Ayojan System
**અઠવાડિક સત્સંગ સભા આયોજન — PDF Generator**

---

## 📁 File Structure
```
sabha-ayojan/
├── index.html          ← Main form
├── print.html          ← PDF print template
├── config.json         ← Data config (used when hosted)
├── css/style.css
├── js/
│   ├── app.js          ← Form logic + INLINE_CONFIG embedded
│   └── generator.js    ← PDF renderer
└── images/             ← Brahmavidhya path images
```

---

## 🚀 How to use

### Option A — Local (double-click index.html)
Works immediately. All dropdown data is **embedded inside app.js**
as `INLINE_CONFIG`. No server needed.

> ⚠️ Pop-up must be allowed for the PDF window to open.
> If PDF page says "no data", enable pop-ups for this site.

### Option B — Hosted (recommended for team use)
Upload all files to Netlify / GitHub Pages / any web server.
The app will load `config.json` from the server automatically,
overriding the inline data.

---

## ⚙️ Editing dropdown data

### When using locally (Option A)
Edit **BOTH** files to keep them in sync:
1. `config.json` — for reference / hosted use
2. `js/app.js` — find `const INLINE_CONFIG = {` near the top and edit the same values there

### When hosted (Option B)
Edit only `config.json` on your server and reload the page.

### What you can change
| Key | What it controls |
|---|---|
| `organization` | Header name, subtitle, footer note |
| `sabha_time_slots` | Time slot options + start time |
| `program_durations_minutes` | Duration of each of the 10 rows |
| `dhoon_options` | ધૂન dropdown choices |
| `prarthana_options` | પ્રાર્થના dropdown choices |
| `performers` | Shared name dropdown (all rows) |
| `pravakta_options` | Pravakta dropdown with phone numbers |
| `static_content` | Fixed text: stuti, video, aarti, jaherat, viday |
| `bramvidhya_paths` | Gallery images (use https:// URLs) |

---

## 🖨 Saving as PDF
1. Fill the form → click **Sabha PDF બનાવો**
2. Print preview opens
3. `Ctrl+P` (or click Print button) → **Save as PDF**
4. File saves as `Sabha_22.pdf` (week number auto-set as filename)

**Use Chrome or Edge** for best Gujarati font rendering in PDF.

# sabha
