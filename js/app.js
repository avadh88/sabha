/* ====================================================
   Sabha Ayojan — app.js
   Config is embedded inline AND also fetched from
   config.json when hosted, so it works both locally
   (file://) and on a web server.
   ==================================================== */
'use strict';

/* ── EMBEDDED CONFIG (fallback for file:// opening) ──
   When hosted, config.json is fetched and overrides this.
   To update data: edit config.json on your server.
   For local use: also update the INLINE_CONFIG below.  */
const INLINE_CONFIG = {
  "organization": {
    "name": "બી.એ.પી.એસ. વૈષ્ણોદેવી સત્સંગ મંડળ",
    "subtitle": "અઠવાડિક સત્સંગ સભા આયોજન",
    "footer_note": "નોંધઃ કાગળ પેન સાથે લાવવા."
  },
  "sabha_time_slots": [
    { "label": "રાત્રે ૯:૦૦ થી ૧૦:૩૦", "start": "21:00" },
    { "label": "રાત્રે ૮:૩૦ થી ૧૦:૦૦", "start": "20:30" },
    { "label": "રાત્રે ૯:૩૦ થી ૧૧:૦૦", "start": "21:30" }
  ],
  "program_durations_minutes": [5, 7, 3, 5, 10, 15, 5, 35, 2, 3],
  "dhoon_options": [
    "જય અક્ષર પતિ પુરષોત્તમ....",
    "સ્વામિનારાયણ નામ મારા વહાલા",
    "પ્રેમે પ્રેમથી બોલો સ્વામિનારાયણ ભગવાન....",
    "લગની લાગી મુને...",
    "સ્વામિનારાયણ નામ ભજ...",
    "સ્વામિનારાયણ ધૂન",
    "જય સ્વામિનારાયણ ધૂન"
  ],
  "prarthana_options": [
    "ભાવ ધરીને બોલો જય..",
    "વંદન કરીએ પ્રભુ ભાવ ધરી..",
    "ભૂલીશ હું જગતની માયા..",
    "પૂર્વનું પુણ્ય પ્રગટ થયું જ્યારે..",
  ],
  "performers": [
    "સંગીત વૃંદ",
    "કિરણ ભાઈ સોની",
    "શ્રીનલભાઈ ઝવેરી",
    "ચિરંતનભાઈ પંચાલ",
    "રિતેશભાઈ પ્રજાપતિ",
    "અવધભાઈ પટેલ",
    "સતીષભાઈ જોષી",
    "વ્રજેશભાઈ સોની",
    "કૌશિકભાઈ જાની",
    "જિગ્નેશભાઈ પટેલ",
    "ઋષિભાઈ પટેલ",
    "પ્રભુભાઈ પટેલ",
    "ચિરાગભાઈ સુથાર",
    "સંજીભાઈ પંચાલ",
    "પ્રજ્ઞેશભાઈ દેસાઈ",
    "ધીરજભાઈ સુહાગીયા",
    "પૂજ્ય નિર્મળચરિત સ્વામી",
    "પૂજ્ય યોગીનંદન સ્વામી"
  ],
  "pravakta_options": [
    "પ્રહર્ષભાઈ પટેલ – ૯૪૨૬૮૨૪૬૫૦",
    "સુરજભાઈ જોષી – ૯૪૨૬૬૦૦૦૬૪",
    "શ્રીનલભાઈ ઝવેરી – ૯૮૭૯૯૦૦૨૧૫",
    "વ્રજેશભાઈ સોની – ૯૨૭૭૧૫૮૮૦૨",
    "આકાશભાઈ પટેલ – ૯૫૧૦૨૧૧૧૯૧",
    "રાજેશભાઈ કડીઆ – ૯૫૩૭૦૫૯૭૮૦",
    "જિગ્નેશભાઈ પટેલ – ૯૯૦૯૭૦૦૪૨૫",
    "અમિતભાઈ પટેલ – ૯૯૯૮૯૯૧૬૭૧"
  ],
  "static_content": {
    "stuti_gaan_content":   "શ્રીમત્ સદ્ગુણ..",
    "stuti_gaan_performer": "સમૂહમાં",
    "patrika_content":      "સહજાનંદ સુધા મુજબ",
    "video_content":        "ગુરૂહરી દર્શન",
    "video_performer":      "પ્રોજેક્ટરના માધ્યમથી",
    "aarti_main":  "આરતીની જાહેરાત કરી આજની સભાના પ્રસાદના યજમાન તથા જે હરિભક્તો નવા હોય તેમની જાહેરાત કરી આરતી માટે બોલાવવા",
    "aarti_note":  "આરતી ડિસ કોય યજમાને ફેરવવી નય",
    "jaherat_lines": [
      "૧) આજે જે યજમાનો એ પ્રસાદ ની સેવા કરી છે તેઓ તન મન ધન થી સુખી થાય.",
      "૨) જગતપુર મંદિર નિર્વિઘ્ને પૂર્ણ થાય.",
      "૩) મહંત સ્વામી મહારાજ નુ સ્વાસ્થ્ય સારુ રહે."
    ],
    "viday_shlok_lines": [
      "ગુણાતીતં ગુરૂં પ્રાપ્ય, બ્રહ્મ રૂપં નિજાત્મનઃ વિભાવ્ય દાસ ભાવેન, સ્વામિનારાયણં ભજે",
      "શ્રીહરિં સાક્ષરમ સર્વદેવેશ્વરં, ભક્તિધર્માત્મજં દિવ્યરૂપં પરમ,",
      "શાન્તિદં મુક્તિદં કામદં કારણં, સ્વામિનારાયણં નીલકંઠ ભજે ॥ શ્રીહરિ"
    ]
  },
  "bramvidhya_paths": [
    { "id": 25, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૨૫", "image": "https://example.com/path_25.jpg" },
    { "id": 26, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૨૬", "image": "https://example.com/path_26.jpg" },
    { "id": 27, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૨૭", "image": "https://example.com/path_27.jpg" },
    { "id": 28, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૨૮", "image": "https://example.com/path_28.jpg" },
    { "id": 29, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૨૯", "image": "https://example.com/path_29.jpg" },
    { "id": 30, "label": "બ્રહ્મવિદ્યાનો પાઠ – ૩૦", "image": "https://example.com/path_30.jpg" }
  ]
};

let CFG = null;

/* ── Gujarati helpers ─────────────────────────────── */
const GUJ_DIGITS = ['૦','૧','૨','૩','૪','૫','૬','૭','૮','૯'];
const GUJ_MONTHS = [
  'જાન્યુઆરી','ફેબ્રુઆરી','માર્ચ','એપ્રિલ','મે','જૂન',
  'જુલાઈ','ઓગસ્ટ','સપ્ટેમ્બર','ઓક્ટોબર','નવેમ્બર','ડિસેમ્બર'
];
const GUJ_DAYS  = ['રવિવાર','સોમવાર','મંગળવાર','બુધવાર','ગુરુવાર','શુક્રવાર','શનિવાર'];
const GUJ_WEEKS = ['પ્રથમ','દ્વિતીય','તૃતીય','ચતુર્થ','પંચમ'];

function toGuj(n) {
  return String(n).replace(/\d/g, d => GUJ_DIGITS[+d]);
}

function formatGujTime12(totalMins) {
  let h = Math.floor(totalMins / 60) % 24;
  const m = totalMins % 60;
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return toGuj(h) + ':' + (m < 10 ? toGuj(0) : '') + toGuj(m);
}

function calcTimeSlots12(startStr, durations) {
  const [h, m] = startStr.split(':').map(Number);
  let cur = h * 60 + m;
  return durations.map(d => {
    const from = cur, to = cur + d;
    cur = to;
    return formatGujTime12(from) + ' થી ' + formatGujTime12(to);
  });
}

function formatGujaratiDate(date) {
  return 'તારીખ : ' +
    toGuj(date.getDate()) + ' ' +
    GUJ_MONTHS[date.getMonth()] + ' ' +
    toGuj(date.getFullYear()) + ', ' +
    GUJ_DAYS[date.getDay()];
}

function getSabhaKram(date) {
  const weekIdx = Math.min(Math.ceil(date.getDate() / 7) - 1, 4);
  return GUJ_MONTHS[date.getMonth()] + ' માસની – (' + GUJ_WEEKS[weekIdx] + ' સભા)';
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const ys = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - ys) / 86400000) + 1) / 7);
}

/* ── Init: try fetch config.json, fall back to inline ─ */
async function init() {
  // Always start with inline config immediately — no blank form
  CFG = JSON.parse(JSON.stringify(INLINE_CONFIG));
  buildForm();

  // Then try to fetch config.json (works when hosted on a server)
  // If it loads successfully, rebuild the form with fresh data
  try {
    const res = await fetch('config.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const fetched = await res.json();
    CFG = fetched;
    buildForm(); // rebuild with server config
  } catch(e) {
    // Silently use inline config — normal when opening as file://
    console.info('Using inline config (file:// mode or fetch blocked):', e.message);
  }
}

/* ── Build form ───────────────────────────────────── */
function buildForm() {
  document.getElementById('org-name').textContent     = CFG.organization.name;
  document.getElementById('org-subtitle').textContent = CFG.organization.subtitle;

  // Sabha time slot dropdown
  const timeSel = document.getElementById('sabha_time');
  timeSel.innerHTML = '';
  CFG.sabha_time_slots.forEach((slot, i) => {
    const o = document.createElement('option');
    o.value = i; o.textContent = slot.label;
    timeSel.appendChild(o);
  });

  // Content / performer dropdowns
  populateSelect('dhoon_val',       CFG.dhoon_options,     true);
  populateSelect('dhoon_perf',      CFG.performers,        true);
  populateSelect('prarthana_val',   CFG.prarthana_options, true);
  populateSelect('prarthana_perf',  CFG.performers,        true);
  populateSelect('patrika_perf',    CFG.performers,        true);
  populateSelect('pravachan1_perf', CFG.performers,        true);
  populateSelect('pravachan2_perf', CFG.performers,        true);
  populateSelect('pravakta_sel',    [...CFG.pravakta_options, ...CFG.performers], true);

  // Static text
  const sc = CFG.static_content;
  setText('stuti_content',   sc.stuti_gaan_content);
  setText('stuti_performer', sc.stuti_gaan_performer);
  setText('patrika_content', sc.patrika_content);
  setText('video_content',   sc.video_content);
  setText('video_performer', sc.video_performer);
  setText('aarti_main',      sc.aarti_main);
  setText('aarti_note',      sc.aarti_note);
  setHTML('jaherat_static',  sc.jaherat_lines.join('<br>'));
  setHTML('viday_static',    sc.viday_shlok_lines.join('<br>'));

  // Populate all 10 time selects
  populateTimeSelects(0);

  buildGallery();
}

/* ── Time selects ─────────────────────────────────── */
function populateTimeSelects(slotIdx) {
  const slot  = CFG.sabha_time_slots[slotIdx] || CFG.sabha_time_slots[0];
  const slots = calcTimeSlots12(slot.start, CFG.program_durations_minutes);

  for (let i = 1; i <= 10; i++) {
    const sel = document.getElementById('time_' + i);
    if (!sel) continue;
    const wasOther = sel.value === '__other__';
    sel.innerHTML = '';

    const autoOpt = document.createElement('option');
    autoOpt.value = slots[i - 1];
    autoOpt.textContent = slots[i - 1];
    sel.appendChild(autoOpt);

    const otherOpt = document.createElement('option');
    otherOpt.value = '__other__';
    otherOpt.textContent = 'Other (અન્ય)';
    sel.appendChild(otherOpt);

    if (wasOther) sel.value = '__other__';
    const inp = document.getElementById('time_' + i + '_other');
    if (inp) inp.style.display = (sel.value === '__other__') ? 'block' : 'none';
  }
}

function onTimeSlotChange() {
  const idx = parseInt(document.getElementById('sabha_time').value) || 0;
  populateTimeSelects(idx);
}

function toggleTimeOther(n) {
  const sel = document.getElementById('time_' + n);
  const inp = document.getElementById('time_' + n + '_other');
  if (!sel || !inp) return;
  const show = sel.value === '__other__';
  inp.style.display = show ? 'block' : 'none';
  if (show) inp.focus();
}

function populateSelect(id, options, withOther) {
  const sel = document.getElementById(id);
  if (!sel) return;
  sel.innerHTML = '';
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt; o.textContent = opt;
    sel.appendChild(o);
  });
  if (withOther) {
    const o = document.createElement('option');
    o.value = '__other__'; o.textContent = 'Other (અન્ય)';
    sel.appendChild(o);
  }
}

function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val || ''; }
function setHTML(id, val) { const el = document.getElementById(id); if (el) el.innerHTML   = val || ''; }

/* ── Gallery ──────────────────────────────────────── */
let selectedGallery = null;

function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  CFG.bramvidhya_paths.forEach((path, idx) => {
    const div = document.createElement('div');
    div.className     = 'gallery-item' + (idx === 0 ? ' selected' : '');
    div.dataset.id    = path.id;
    div.dataset.image = path.image;
    div.dataset.label = path.label;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'gallery-img-wrap';

    const img = document.createElement('img');
    img.src = path.image; img.alt = path.label;
    img.loading = 'lazy'; img.style.cursor = 'zoom-in';

    const ph = document.createElement('div');
    ph.className = 'gallery-placeholder'; ph.style.display = 'none';
    ph.innerHTML = '📖<span>ઇમેજ નહીં</span>';

    img.onerror = () => { img.style.display='none'; ph.style.display='flex'; };
    img.addEventListener('click', e => { e.stopPropagation(); openLightbox(path.image, path.label); });

    imgWrap.append(img, ph);
    const lbl = document.createElement('div');
    lbl.className = 'gallery-label'; lbl.textContent = path.label;
    div.append(imgWrap, lbl);
    div.addEventListener('click', () => selectGallery(div, path));
    if (idx === 0) selectedGallery = div;
    grid.appendChild(div);
  });
  if (CFG.bramvidhya_paths.length > 0) showPreview(CFG.bramvidhya_paths[0]);
}

function selectGallery(div, path) {
  document.querySelectorAll('.gallery-item').forEach(el => el.classList.remove('selected'));
  div.classList.add('selected'); selectedGallery = div;
  showPreview(path);
}

function showPreview(path) {
  const panel   = document.getElementById('gallery-preview');
  const labelEl = document.getElementById('preview-label');
  const wrapEl  = document.getElementById('preview-img-wrap');
  panel.classList.add('visible');
  labelEl.textContent = path.label;
  wrapEl.innerHTML = '';
  if (path.image && !path.image.includes('example.com')) {
    const img = document.createElement('img');
    img.src = path.image; img.alt = path.label; img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(path.image, path.label));
    img.onerror = () => { wrapEl.innerHTML = '<div class="gallery-preview-no-img"><div class="big-icon">⚠️</div>ઇમેજ લોડ ન થઈ</div>'; };
    wrapEl.appendChild(img);
  } else {
    wrapEl.innerHTML = '<div class="gallery-preview-no-img"><div class="big-icon">🖼</div>config.json માં URL ઉમેરો</div>';
  }
}

/* ── Lightbox ─────────────────────────────────────── */
function openLightbox(src, label) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-label').textContent = label;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(e) {
  if (!e.target.closest('.lightbox-inner')) document.getElementById('lightbox').classList.remove('open');
}

/* ── Other-option toggle ──────────────────────────── */
function toggleOther(selId, inputId) {
  const sel = document.getElementById(selId);
  const inp = document.getElementById(inputId);
  if (!sel || !inp) return;
  const show = sel.value === '__other__';
  inp.style.display = show ? 'block' : 'none';
  if (show) inp.focus();
}

/* ── Date change ──────────────────────────────────── */
let kramManualEdit = false;
function onDateChange() {
  const val = document.getElementById('sabha_date').value;
  if (!val) return;
  const d    = new Date(val + 'T00:00:00');
  const auto = getSabhaKram(d);
  const hint = document.getElementById('kram_hint');
  if (hint) hint.textContent = 'આપોઆપ: ' + auto;
  if (!kramManualEdit) {
    const inp = document.getElementById('sabha_kram');
    if (inp) inp.value = auto;
  }
}

/* ── Get value ────────────────────────────────────── */
function getVal(selId, inputId) {
  const sel = document.getElementById(selId);
  if (!sel) return '';
  if (sel.value === '__other__') {
    const inp = document.getElementById(inputId);
    return inp ? inp.value.trim() : '';
  }
  return sel.value;
}

function getTimeVal(n) {
  const sel = document.getElementById('time_' + n);
  if (!sel) return '';
  if (sel.value === '__other__') {
    const inp = document.getElementById('time_' + n + '_other');
    return inp ? inp.value.trim() : '';
  }
  return sel.value;
}

/* ── Submit ───────────────────────────────────────── */
function submitForm() {
  const dateVal = document.getElementById('sabha_date').value;
  if (!dateVal) { showToast('⚠️ સભા તારીખ પસંદ કરો'); return; }

  const d        = new Date(dateVal + 'T00:00:00');
  const weekNo   = getWeekNumber(d);
  const filename = 'Sabha_' + weekNo + '.pdf';

  const timeIdx  = parseInt(document.getElementById('sabha_time').value) || 0;
  const timeSlot = CFG.sabha_time_slots[timeIdx];
  const sc       = CFG.static_content;
  const kramVal  = document.getElementById('sabha_kram').value.trim() || getSabhaKram(d);

  const p1text  = (document.getElementById('pravachan1_text').value || '').trim();
  const p2text  = (document.getElementById('pravachan2_text').value || '').trim();
  const aartiEx = (document.getElementById('aarti_extra').value     || '').trim();
  const jahEx   = (document.getElementById('jaherat_extra').value   || '').trim();
  const vidEx   = (document.getElementById('viday_extra').value     || '').trim();
  const galEl   = selectedGallery || document.querySelector('.gallery-item');

  const aartiText   = sc.aarti_main + '\n\n' + sc.aarti_note + (aartiEx ? '\n\n' + aartiEx : '');
  const jaheratText = sc.jaherat_lines.join('\n') + (jahEx ? '\n' + jahEx : '');
  const vidayText   = sc.viday_shlok_lines.join('\n') + (vidEx ? '\n\n' + vidEx : '');

  const payload = {
    filename,
    org_name:     CFG.organization.name,
    org_subtitle: CFG.organization.subtitle,
    footer_note:  CFG.organization.footer_note,
    date_display: formatGujaratiDate(d),
    time_label:   timeSlot.label,
    sabha_kram:   kramVal,
    rows: [
      { kram:'૧',  time:getTimeVal(1),  karyakram:'ધૂન',                     vigat:getVal('dhoon_val','dhoon_other'),          nam:getVal('dhoon_perf','dhoon_perf_other'),          merged:false },
      { kram:'૨',  time:getTimeVal(2),  karyakram:'પ્રાર્થના',               vigat:getVal('prarthana_val','prarthana_other'),  nam:getVal('prarthana_perf','prarthana_perf_other'), merged:false },
      { kram:'૩',  time:getTimeVal(3),  karyakram:'સ્તુતિ ગાન',             vigat:sc.stuti_gaan_content,                      nam:sc.stuti_gaan_performer,                         merged:false },
      { kram:'૪',  time:getTimeVal(4),  karyakram:'પત્રિકાસાર વાંચન',      vigat:sc.patrika_content,                         nam:getVal('patrika_perf','patrika_perf_other'),     merged:false },
      { kram:'૫',  time:getTimeVal(5),  karyakram:'વીડિયો',                 vigat:sc.video_content,                           nam:sc.video_performer,                              merged:false },
      { kram:'૬',  time:getTimeVal(6),  karyakram:'પ્રવચન–૧',              vigat:p1text,                                     nam:getVal('pravachan1_perf','pravachan1_perf_other'),merged:false },
      { kram:'૭',  time:getTimeVal(7),  karyakram:'આરતી',                   vigat:aartiText,                                  nam:'',                                              merged:true  },
      { kram:'૮',  time:getTimeVal(8),  karyakram:'પ્રવચન–૨',              vigat:p2text,                                     nam:getVal('pravachan2_perf','pravachan2_perf_other'),merged:false },
      { kram:'૯',  time:getTimeVal(9),  karyakram:'જાહેરાત /\nસંકલ્પ ધૂન', vigat:jaheratText,                               nam:'',                                              merged:true  },
      { kram:'૧૦', time:getTimeVal(10), karyakram:'વિદાય શ્લોક',            vigat:vidayText,                                  nam:'',                                              merged:true  },
    ],
    pravakta:         getVal('pravakta_sel','pravakta_other'),
    bramvidhya_label: galEl ? galEl.dataset.label : '',
    bramvidhya_image: galEl ? galEl.dataset.image : '',
  };

  try {
    sessionStorage.setItem('sabha_data', JSON.stringify(payload));
  } catch(e) {
    alert('sessionStorage error. Please allow storage in browser settings.');
    return;
  }

  const win = window.open('print.html', '_blank');
  if (!win) showToast('⚠️ Pop-up blocked — please allow pop-ups');
  else      showToast('✅ PDF વિન્ડો ખૂલ્યો: ' + filename);
}

/* ── Toast ────────────────────────────────────────── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t=document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── Start ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  init();
  const kramInp = document.getElementById('sabha_kram');
  if (kramInp) kramInp.addEventListener('input', () => { kramManualEdit = kramInp.value.length > 0; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
  });
});
