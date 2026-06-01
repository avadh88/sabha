/* ====================================================
   Sabha Ayojan — generator.js
   Reads sessionStorage, renders Sabha PDF table,
   triggers browser print dialog.
   ==================================================== */

'use strict';

function nl2br(str) {
  if (!str) return '';
  return String(str).replace(/\n/g, '<br>');
}

function escHTML(str) {
  return String(str || '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function buildPage(data) {
  // Setting document.title makes Chrome/Edge suggest this name
  // in the "Save as PDF" filename field of the print dialog
  document.title = data.filename;

  const filenameEl = document.getElementById('pdf-filename');
  if (filenameEl) filenameEl.textContent = data.filename;

  // Set org header
  document.getElementById('org-name').textContent     = data.org_name;
  document.getElementById('org-subtitle').textContent  = data.org_subtitle;
  document.getElementById('sabha-date-val').textContent = data.date_display;
  document.getElementById('sabha-time-val').textContent = ': ' + data.time_label;

  // Sabha Kram merged row
  document.getElementById('sabha-kram-cell').textContent = data.sabha_kram;

  // Build table body rows
  const tbody = document.getElementById('sabha-tbody');
  tbody.innerHTML = '';

  data.rows.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.className = (idx % 2 === 0) ? 'row-even' : 'row-odd';

    const tdKram = document.createElement('td');
    tdKram.className = 'td-kram';
    tdKram.textContent = row.kram;

    const tdTime = document.createElement('td');
    tdTime.className = 'td-time';
    tdTime.innerHTML = nl2br(escHTML(row.time));

    const tdKary = document.createElement('td');
    tdKary.className = 'td-karyakram';
    tdKary.innerHTML = nl2br(escHTML(row.karyakram));

    if (row.merged) {
      const tdVigat = document.createElement('td');
      tdVigat.className = 'td-vigat';
      tdVigat.setAttribute('colspan', '2');
      tdVigat.innerHTML = nl2br(escHTML(row.vigat));
      tr.append(tdKram, tdTime, tdKary, tdVigat);
    } else {
      const tdVigat = document.createElement('td');
      tdVigat.className = 'td-vigat';
      tdVigat.innerHTML = nl2br(escHTML(row.vigat));

      const tdNam = document.createElement('td');
      tdNam.className = 'td-nam';
      tdNam.innerHTML = nl2br(escHTML(row.nam));

      tr.append(tdKram, tdTime, tdKary, tdVigat, tdNam);
    }

    tbody.appendChild(tr);
  });

  // Footer: Pravakta row
  document.getElementById('pravakta-val').innerHTML  = nl2br(escHTML(data.pravakta));
  document.getElementById('footer-note').textContent = data.footer_note;

  // Brahmavidhya section
  document.getElementById('bv-label').textContent = data.bramvidhya_label;
  const bvImg = document.getElementById('bv-img');
  const bvPlaceholder = document.getElementById('bv-placeholder');
  if (data.bramvidhya_image && !data.bramvidhya_image.includes('example.com')) {
    bvImg.src = data.bramvidhya_image;
    bvImg.style.display = 'block';
    if (bvPlaceholder) bvPlaceholder.style.display = 'none';
    bvImg.onerror = () => {
      bvImg.style.display = 'none';
      if (bvPlaceholder) bvPlaceholder.style.display = 'block';
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let data;
  try {
    const raw = sessionStorage.getItem('sabha_data');
    if (!raw) throw new Error('No data');
    data = JSON.parse(raw);
  } catch(e) {
    document.body.innerHTML =
      '<div style="padding:40px;font-family:sans-serif;color:#8B0000;">' +
      '<h2>⚠️ ડેટા મળ્યો નહીં</h2>' +
      '<p>ફોર્મ ભરીને ફરીથી PDF બનાવો.</p>' +
      '<a href="index.html">← ફોર્મ પર પાછા જાઓ</a></div>';
    return;
  }

  buildPage(data);

  // Auto-print after fonts are likely loaded
  window.addEventListener('load', () => {
    setTimeout(() => window.print(), 600);
  });
});
