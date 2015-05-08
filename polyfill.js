goog.require('net.fetch');

if (!window['fetch']) {
  window['fetch'] = net.fetch;
  window['Response'] = net.Response;
}
