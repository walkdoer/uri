/**
 * Uri manipulation tool
 */
'use strict';
var globalParams = {};

export default class Uri {
    static config() {
        globalParams = global.params || {};
    }

    constructor(str) {
        this._uri = str || location.origin;
        if (!str) {
            this._path = location.pathname;
        }
        this._params = {};
    }

    path(pathStr) {
        if (!pathStr) {
            return;
        }
        let isAbsolute = isAbsolutePath(pathStr);
        let arr = pathStr.split('/');
        if (!isAbsolute) {
            arr = this._path.split('/').concat(arr);
        }
        let newPath = normalizePathArray(arr, !isAbsolute);
        this._path = '/' + newPath.join('/');
        return this;
    }

    params(obj) {
        Object.assign(this._params, obj);
        return this;
    }

    str() {
        var uri = this._uri + this._path;
        uri = addParams(uri, Object.assign({}, globalParams, this._params));
        return uri;
    }
}

function normalizePathArray(parts, allowAboveRoot) {
    let res = [];
    for (let i = 0; i < parts.length; i++) {
        let p = parts[i];

        // ignore empty parts
        if (!p || p === '.')
            continue;

        if (p === '..') {
            if (res.length && res[res.length - 1] !== '..') {
                res.pop();
            } else if (allowAboveRoot) {
                res.push('..');
            }
        } else {
            res.push(p);
        }
    }

    return res;
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


function isAbsolutePath(path) {
    return !!path && path[0] === '/';
}