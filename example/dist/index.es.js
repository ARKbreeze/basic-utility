
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function add(num1, num2) {
  return num1 + num2;
}

function increment(num) {
  return num + 1;
}

var index = {
  add,
  increment
};

export { index as default };
//# sourceMappingURL=index.es.js.map
