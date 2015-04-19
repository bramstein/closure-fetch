goog.require('net.fetch');

if (!window['fetch']) {
  window['fetch'] = net.fetch;
  window['Response'] = net.Response;
  window['Response']['prototype']['arrayBuffer'] = net.Response.prototype.arrayBuffer;
}
