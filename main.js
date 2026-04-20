/* main.js — Yazılım Mühendisliği Bölümü */

/* ── Page navigation ── */
function showPage(pageId, clickedLink) {
  /* hide all pages */
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });

  /* show requested page */
  document.getElementById(pageId).classList.add('active');

  /* update nav active state */
  document.querySelectorAll('.nav-list a').forEach(function(link) {
    link.classList.remove('active');
  });

  if (clickedLink) {
    clickedLink.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Curriculum tab toggle (Lisans / Yüksek Lisans) ── */
function switchTrack(trackId, button) {
  document.querySelectorAll('.toggle-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  button.classList.add('active');

  document.querySelectorAll('.track-panel').forEach(function(panel) {
    panel.hidden = true;
  });

  document.getElementById(trackId).hidden = false;
}

/* ── Accordion rows ── */
function toggleAccordion(header) {
  var item = header.parentElement;
  var isOpen = item.classList.contains('open');

  /* close all siblings */
  item.closest('.acc-list').querySelectorAll('.acc-item').forEach(function(row) {
    row.classList.remove('open');
  });

  if (!isOpen) {
    item.classList.add('open');

    /* lazily render course pills on first open */
    var body = item.querySelector('.acc-body');
    if (!body.innerHTML.trim()) {
      var courses = item.dataset.courses.split(',').map(function(c) {
        return c.trim();
      });
      var html = '<div class="course-wrap">';
      courses.forEach(function(course) {
        html += '<span class="course-pill">' + course + '</span>';
      });
      html += '</div>';
      body.innerHTML = html;
    }
  }
}

/* ── Contact form submission ── */
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      button.textContent = 'Gönderildi ✓';
      button.style.background = '#059669';
      button.disabled = true;
    });
  }
});
