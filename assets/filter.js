// Filtro por programa. Sem JavaScript, a página mostra tudo (é o comportamento seguro).
// Os blocos <div class="only" data-programmes="HE DEP"> só aparecem ao programa escolhido.
(function () {
  var select = document.getElementById('programme-select');
  if (!select) return;
  var KEY = 'eu-grants-wiki-programme';
  var note = document.getElementById('filter-note');

  function stored() {
    try { return window.localStorage.getItem(KEY) || 'all'; } catch (e) { return 'all'; }
  }
  function store(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) { /* sem armazenamento: tudo bem */ }
  }

  function apply(code) {
    var blocks = document.querySelectorAll('.only[data-programmes]');
    var hidden = 0;
    blocks.forEach(function (el) {
      var codes = el.getAttribute('data-programmes').split(' ');
      var show = code === 'all' || codes.indexOf(code) !== -1;
      el.classList.toggle('hidden-by-filter', !show);
      if (!show) hidden += 1;
    });
    if (note) {
      if (code === 'all') {
        note.textContent = '';
      } else {
        var label = select.options[select.selectedIndex].text;
        note.textContent = 'Showing the rules for ' + label + '. ' + (hidden === 0
          ? 'Nothing on this page is specific to other programmes.'
          : hidden + (hidden === 1 ? ' block' : ' blocks') + ' that apply only to other programmes ' +
            (hidden === 1 ? 'is' : 'are') + ' hidden.');
      }
    }
  }

  var initial = stored();
  var found = Array.prototype.some.call(select.options, function (o) { return o.value === initial; });
  select.value = found ? initial : 'all';
  apply(select.value);
  select.addEventListener('change', function () {
    store(select.value);
    apply(select.value);
  });
})();
