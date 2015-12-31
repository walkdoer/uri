/**
 * Uri manipulation tool
 */
'use strict';
var globalParams = {};

export default class Uri{
    static config() {
        globalParams = global.params || {};
    }

    constructor(str) {
        str = str || location.origin + location.pathname;
        this._uri = str;
        this._params = {};
    }

    path() {
        return this;
    }

    params(obj) {
        Object.assign(this._params, obj);
        return this;
    }

    str() {
        var uri = this._uri;
        uri = addParams(uri, Object.assign({}, globalParams, this._params));
        return uri;
    }
}

function addParams(uri, params) {
    var paramStr = '';
    params = params || {};
    for (var prop in params) {
        if (prop && params.hasOwnProperty(prop)) {
            paramStr += '&' + prop + '=' + encodeURIComponent(params[prop]);
        }
    }
    if (uri.indexOf('?') < 0) {
        uri += '?';
    }
    return (uri + paramStr).replace('?&', '?').replace(/\?$/, '');
}