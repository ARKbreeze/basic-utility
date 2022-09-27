
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/**
 * @desc 两数相加
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 返回两数相加结果
 */
function add(num1, num2) {
  return num1 + num2;
}
/**
 * @desc 自增
 * @param {Number} num
 * @return {Number} 返回参数加一
 */


function increment(num) {
  return num + 1;
}

var index = {
  add,
  increment
};

export { index as default };
//# sourceMappingURL=index.es.js.map
