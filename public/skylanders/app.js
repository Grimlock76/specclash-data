/* Skylander Vault — collection tracker.
   Status per figure: 0 = not owned, 1 = physical figure, 2 = self-made NFC chip. */
(function () {
  'use strict';

  var GAMES = {
    sa: { name: "Spyro's Adventure", year: 2011 },
    gi: { name: 'Giants', year: 2012 },
    sf: { name: 'Swap Force', year: 2013 },
    tt: { name: 'Trap Team', year: 2014 },
    sc: { name: 'SuperChargers', year: 2015 },
    im: { name: 'Imaginators', year: 2016 },
  };
  var GAME_ORDER = ['sa', 'gi', 'sf', 'tt', 'sc', 'im'];

  var ELEMENTS = {
    Magic: '#c084fc', Water: '#38bdf8', Air: '#a5f3fc', Fire: '#f87171',
    Earth: '#d6a35c', Life: '#4ade80', Tech: '#fb923c', Undead: '#b0b7c9',
    Light: '#fde047', Dark: '#a78bfa', Kaos: '#e879f9',
  };

  var CATS = {
    core: 'Core', giant: 'Giant', swap: 'SWAP Force', trapmaster: 'Trap Master',
    mini: 'Mini', supercharger: 'SuperCharger', vehicle: 'Vehicle',
    sensei: 'Sensei', crystal: 'Creation Crystal', other: 'Other',
  };

  var STORE_KEY = 'skylander-vault-v1';

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function figId(f) { return f.g + ':' + slug(f.n); }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var st = JSON.parse(raw);
        if (st && typeof st === 'object') {
          return { statuses: st.statuses || {}, custom: Array.isArray(st.custom) ? st.custom : [] };
        }
      }
    } catch { /* corrupted storage — start fresh */ }
    return { statuses: {}, custom: [] };
  }
  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  var state = loadState();
  var filters = { q: '', game: '', el: '', cat: '', st: '' };

  function allFigures() {
    return window.SKYLANDERS_DATA.concat(state.custom);
  }

  function statusOf(f) {
    var s = state.statuses[figId(f)];
    return s === 1 || s === 2 ? s : 0;
  }

  function setStatus(f, s) {
    var id = figId(f);
    if (s === 0) delete state.statuses[id];
    else state.statuses[id] = s;
    saveState();
    render();
  }

  // ---------- rendering ----------

  var $list = document.getElementById('list');
  var $stats = document.getElementById('stats');
  var $bar = document.getElementById('bar');

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function matchesFilters(f) {
    if (filters.game && f.g !== filters.game) return false;
    if (filters.el && f.e !== filters.el) return false;
    if (filters.cat && f.c !== filters.cat) return false;
    if (filters.st !== '' && statusOf(f) !== Number(filters.st)) return false;
    if (filters.q && f.n.toLowerCase().indexOf(filters.q) === -1) return false;
    return true;
  }

  function renderStats() {
    var figs = allFigures();
    var total = figs.length, fig = 0, nfc = 0;
    figs.forEach(function (f) {
      var s = statusOf(f);
      if (s === 1) fig++;
      else if (s === 2) nfc++;
    });
    var missing = total - fig - nfc;
    var pct = total ? Math.round(((fig + nfc) / total) * 100) : 0;

    $stats.textContent = '';
    var defs = [
      ['fig', fig, 'Figures owned'],
      ['nfc', nfc, 'NFC chips made'],
      ['', missing, 'Missing'],
      ['', pct + '%', 'Collected'],
    ];
    defs.forEach(function (d) {
      var box = el('div', 'stat' + (d[0] ? ' ' + d[0] : ''));
      box.appendChild(el('b', null, String(d[1])));
      box.appendChild(el('span', null, d[2]));
      $stats.appendChild(box);
    });

    $bar.textContent = '';
    var bf = el('div', 'b-fig');
    bf.style.width = (total ? (fig / total) * 100 : 0) + '%';
    var bn = el('div', 'b-nfc');
    bn.style.width = (total ? (nfc / total) * 100 : 0) + '%';
    $bar.appendChild(bf);
    $bar.appendChild(bn);
  }

  function renderCard(f) {
    var s = statusOf(f);
    var card = el('div', 'card' + (s ? ' st' + s : '') + (f.custom ? ' custom' : ''));

    var top = el('div', 'top');
    var chip = el('span', 'el', f.e);
    chip.style.background = ELEMENTS[f.e] || '#94a3b8';
    top.appendChild(chip);
    top.appendChild(el('span', 'cat', CATS[f.c] || f.c));
    card.appendChild(top);
    card.appendChild(el('div', 'name', f.n));

    var btns = el('div', 'btns');
    var bFig = el('button', s === 1 ? 'on-fig' : '', '🧸 Figure');
    bFig.title = 'I own the physical figure';
    bFig.addEventListener('click', function () { setStatus(f, s === 1 ? 0 : 1); });
    var bNfc = el('button', s === 2 ? 'on-nfc' : '', '📡 NFC');
    bNfc.title = 'I made my own NFC chip for it';
    bNfc.addEventListener('click', function () { setStatus(f, s === 2 ? 0 : 2); });
    btns.appendChild(bFig);
    btns.appendChild(bNfc);
    card.appendChild(btns);

    if (f.custom) {
      var del = el('button', 'del', '✕');
      del.title = 'Remove this custom entry';
      del.addEventListener('click', function () {
        var id = figId(f);
        state.custom = state.custom.filter(function (c) { return figId(c) !== id; });
        delete state.statuses[id];
        saveState();
        render();
      });
      card.appendChild(del);
    }
    return card;
  }

  function render() {
    renderStats();
    $list.textContent = '';
    var shown = 0;

    GAME_ORDER.forEach(function (g) {
      var figs = allFigures().filter(function (f) { return f.g === g && matchesFilters(f); });
      if (!figs.length) return;
      shown += figs.length;

      var done = figs.filter(function (f) { return statusOf(f) !== 0; }).length;
      var section = el('section', 'game-section');
      var head = el('div', 'game-head');
      head.appendChild(el('h2', null, GAMES[g].name + ' (' + GAMES[g].year + ')'));
      head.appendChild(el('span', 'count', done + ' / ' + figs.length + ' collected'));
      section.appendChild(head);

      var grid = el('div', 'grid');
      figs.forEach(function (f) { grid.appendChild(renderCard(f)); });
      section.appendChild(grid);
      $list.appendChild(section);
    });

    if (!shown) $list.appendChild(el('p', 'empty', 'No figures match these filters.'));
  }

  // ---------- controls ----------

  function fillSelect(sel, entries, allLabel) {
    sel.appendChild(new Option(allLabel, ''));
    entries.forEach(function (e) { sel.appendChild(new Option(e[1], e[0])); });
  }

  var $q = document.getElementById('q');
  var $fGame = document.getElementById('f-game');
  var $fEl = document.getElementById('f-el');
  var $fCat = document.getElementById('f-cat');
  var $fSt = document.getElementById('f-st');

  fillSelect($fGame, GAME_ORDER.map(function (g) { return [g, GAMES[g].name]; }), 'All games');
  fillSelect($fEl, Object.keys(ELEMENTS).map(function (e) { return [e, e]; }), 'All elements');
  fillSelect($fCat, Object.keys(CATS).map(function (c) { return [c, CATS[c]]; }), 'All types');

  $q.addEventListener('input', function () { filters.q = $q.value.trim().toLowerCase(); render(); });
  $fGame.addEventListener('change', function () { filters.game = $fGame.value; render(); });
  $fEl.addEventListener('change', function () { filters.el = $fEl.value; render(); });
  $fCat.addEventListener('change', function () { filters.cat = $fCat.value; render(); });
  $fSt.addEventListener('change', function () { filters.st = $fSt.value; render(); });

  // ---------- add custom figure ----------

  var $dlg = document.getElementById('dlg-add');
  var $form = document.getElementById('form-add');
  var $addName = document.getElementById('add-name');
  var $addGame = document.getElementById('add-game');
  var $addEl = document.getElementById('add-el');
  var $addCat = document.getElementById('add-cat');

  GAME_ORDER.forEach(function (g) { $addGame.appendChild(new Option(GAMES[g].name, g)); });
  Object.keys(ELEMENTS).forEach(function (e) { $addEl.appendChild(new Option(e, e)); });
  Object.keys(CATS).forEach(function (c) { $addCat.appendChild(new Option(CATS[c], c)); });

  document.getElementById('btn-add').addEventListener('click', function () {
    $form.reset();
    $dlg.showModal();
  });
  document.getElementById('add-cancel').addEventListener('click', function () { $dlg.close(); });

  $form.addEventListener('submit', function () {
    var name = $addName.value.trim();
    if (!name) return;
    var entry = { n: name, g: $addGame.value, e: $addEl.value, c: $addCat.value, custom: true };
    var id = figId(entry);
    var exists = allFigures().some(function (f) { return figId(f) === id; });
    if (!exists) {
      state.custom.push(entry);
      saveState();
    }
    render();
  });

  // ---------- export / import ----------

  document.getElementById('btn-export').addEventListener('click', function () {
    var blob = new Blob(
      [JSON.stringify({ app: 'skylander-vault', version: 1, exported: new Date().toISOString(), statuses: state.statuses, custom: state.custom }, null, 2)],
      { type: 'application/json' }
    );
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'skylander-vault-backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });

  var $file = document.getElementById('file-import');
  document.getElementById('btn-import').addEventListener('click', function () { $file.click(); });
  $file.addEventListener('change', function () {
    var file = $file.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (!data || typeof data !== 'object' || !data.statuses) throw new Error('bad file');
        if (!window.confirm('Replace your current collection with this backup?')) return;
        state = {
          statuses: data.statuses && typeof data.statuses === 'object' ? data.statuses : {},
          custom: Array.isArray(data.custom) ? data.custom : [],
        };
        saveState();
        render();
      } catch {
        window.alert("Couldn't read that file — it doesn't look like a Skylander Vault backup.");
      }
      $file.value = '';
    };
    reader.readAsText(file);
  });

  render();
})();
