/**
 * @typedef {Object.<string, string>}
 */
var HeadersInit;

/**
 * @constructor
 * @param {HeadersInit=} init
 */
var Headers = function (init) {};

/**
 * @param {string} name
 * @param {string} value
 */
Headers.prototype.append = function (name, value) {};

/**
 * @param {string} name
 */
Headers.prototype.delete = function (name) {};

/**
 * @param {string} name
 * @return {string?}
 */
Headers.prototype.get = function (name) {};

/**
 * @param {string} name
 * @return {Array.<string>}
 */
Headers.prototype.getAll = function (name) {};

/**
 * @param {string} name
 * @return {boolean}
 */
Headers.prototype.has = function (name) {};

/**
 * @param {string} name
 * @param {string} value
 */
Headers.prototype.set = function (name, value) {};


// ========= Body ========

/**
 * @typedef {Blob|ArrayBuffer|FormData|string}
 */
var BodyInit;

/**
 * @interface
 */
var Body = function () {};

/**
 * @type {boolean}
 */
Body.prototype.bodyUsed;

/**
 * @returns {Promise.<!ArrayBuffer>}
 */
Body.prototype.arrayBuffer = function() {};

/**
 * @returns {Promise.<!Blob>}
 */
Body.prototype.blob = function () {};

/**
 * @returns {Promise.<!FormData>}
 */
Body.prototype.formData = function () {};

/**
 * @returns {Promise.<!Object>}
 */
Body.prototype.json = function () {};

/**
 * @returns {Promise.<!string>}
 */
Body.prototype.text = function () {};


// ========= Request =========

/**
 * @enum {string}
 */
var RequestContext = {};

/**
 * @enum {string}
 */
var RequestMode = {};

/**
 * @enum {string}
 */
var RequestCredentials = {};

/**
 * @enum {string}
 */
var RequestCache = {};

/**
 * @enum {string}
 */
var RequestRedirect = {};

/**
 * @typedef {{
 *  method: (string|undefined),
 *  headers: (HeadersInit|undefined),
 *  body: (BodyInit|undefined),
 *  mode: (RequestMode|undefined),
 *  credentials: (RequestCredentials|undefined),
 *  cache: (RequestCache|undefined),
 *  redirect: (RequestRedirect|undefined)
 * }}
 */
var RequestInit;

/**
 * @constructor
 *
 * @implements {Body}
 * @param {!RequestInfo} input
 * @param {RequestInit=} init
 */
var Request = function (input, init) {};

/**
 * @const
 * @type {string}
 */
Request.prototype.method;

/**
 * @const
 * @type {string}
 */
Request.prototype.url;

/**
 * @type {Headers}
 */
Request.prototype.headers;

/**
 * @type {RequestContext}
 */
Request.prototype.context;

/**
 * @type {string}
 */
Request.prototype.referrer;

/**
 * @type {RequestMode}
 */
Request.prototype.mode;

/**
 * @type {RequestCredentials}
 */
Request.prototype.credentials;

/**
 * @type {RequestCache}
 */
Request.prototype.cache;

/**
 * @type {RequestRedirect}
 */
Request.prototype.redirect;

/**
 * @returns {Request}
 */
Request.prototype.clone = function () {};

/**
 * @type {boolean}
 */
Request.prototype.bodyUsed;

/**
 * @returns {Promise.<!ArrayBuffer>}
 */
Request.prototype.arrayBuffer = function() {};

/**
 * @returns {Promise.<!Blob>}
 */
Request.prototype.blob = function () {};

/**
 * @returns {Promise.<!FormData>}
 */
Request.prototype.formData = function () {};

/**
 * @returns {Promise.<!Object>}
 */
Request.prototype.json = function () {};

/**
 * @returns {Promise.<!string>}
 */
Request.prototype.text = function () {};

/**
 * @typedef {Request|string}
 */
var RequestInfo;

// ========= Response =========

/**
 * @typedef {{
 *  status: (number|undefined),
 *  statusText: (string|undefined),
 *  headers: (HeadersInit|undefined)
 * }}
 */
var ResponseInit;

/**
 * @enum {string}
 */
var ResponseType = {};

/**
 * @constructor
 *
 * @implements {Body}
 * @param {!BodyInit} body
 * @param {ResponseInit=} init
 */
var Response = function (body, init) {};

/**
 * @type {ResponseType}
 */
Response.prototype.type;

/**
 * @type {string}
 */
Response.prototype.url;

/**
 * @type {number}
 */
Response.prototype.status;

/**
 * @type {boolean}
 */
Response.prototype.ok;

/**
 * @type {string}
 */
Response.prototype.statusText;

/**
 * @type {Headers}
 */
Response.prototype.headers;

/**
 * @returns {Response}
 */
Response.prototype.clone = function () {};

/**
 * @type {boolean}
 */
Response.prototype.bodyUsed;

/**
 * @returns {Promise.<!ArrayBuffer>}
 */
Response.prototype.arrayBuffer = function() {};

/**
 * @returns {Promise.<!Blob>}
 */
Response.prototype.blob = function () {};

/**
 * @returns {Promise.<!FormData>}
 */
Response.prototype.formData = function () {};

/**
 * @returns {Promise.<!Object>}
 */
Response.prototype.json = function () {};

/**
 * @returns {Promise.<!string>}
 */
Response.prototype.text = function () {};

/**
 * @param {!RequestInfo} input
 * @param {RequestInit=} init
 *
 * @return {Promise.<!Response>}
 */
var fetch = function(input, init) {};
