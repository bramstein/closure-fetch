goog.provide('net.fetch');

goog.require('net.Body');
goog.require('net.Response');

goog.scope(function () {
  var Body = net.Body,
      Response = net.Response;

  /**
   * @param {string} input
   * @param {net.RequestInit=} opt_init
   * @return {Promise.<net.Response>}
   */
  net.fetchImpl = function (input, opt_init) {
    var init = opt_init || /** @type {net.RequestInit} */ ({
      method: 'GET',
      headers: {},
      body: null
    });

    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        resolve(new Response(/** @type {net.BodyInit} */ (request.response), {
          status: request.status,
          statusText: request.statusText
        }));
      };

      request.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      request.open(init.method, input);

      // If we didn't need to support IE9 we could use Blob here
      // and convert it to whatever response type we need.
      request.responseType = 'arraybuffer';

      if (init.headers) {
        Object.keys(/** @type {!Object} */ (init.headers)).forEach(function (header) {
          request.setRequestHeader(header, init.headers[header]);
        });
      }

      request.send(init.body);
    });
  };

  net.fetch = window['fetch'] || net.fetchImpl;
});
