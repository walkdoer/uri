/**
 * Uri manipulation tool
 */

let globalParams = {};

/** uri parser */
function parseUri (str) {
    var o   = parseUri.options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
};

var propArr = ["source","protocol","authority","userInfo","user","password","host","port","relative","pathname","directory","file","query","anchor"];

parseUri.options = {
    strictMode: false,
    key: propArr,
    q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};

export default class Uri {
    static config(options) {
        globalParams = options.params || {};
    }

    constructor(str) {
        if (!str) {
            str = location ? location.href  : '';
        }
        let result = parseUri(str);
        propArr.forEach((prop) => {
            this[prop] = result[prop];
        });
        this._params = parseQuery(this.query);
        return this;
    }

    path(pathStr) {
        if (!pathStr) {
            return;
        }
        let isAbsolute = isAbsolutePath(pathStr);
        let arr = pathStr.split('/');
        if (!isAbsolute) {
            arr = this.pathname.split('/').concat(arr);
        }
        let newPath = normalizePathArray(arr, !isAbsolute);
        this.pathname = '/' + newPath.join('/');
        return this;
    }

    params(obj) {
        Object.assign(this._params, obj);
        return this;
    }

    str() {
        var uri = `${this.protocol}://${this.host}${this.port ? ':' + this.port : ''}${this.pathname}`;
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

function parseQuery(query='') {
    let res = {};
    query.split('&')
        .filter((val) => (!!val))
        .forEach((kvStr) => {
            let [key, value] = kvStr.split('=');
            res[key] = value;
        });
    return res;
}


function isAbsolutePath(path) {
    return !!path && path[0] === '/';
}