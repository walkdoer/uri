module.exports=function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return r[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=r,t.c=n,t.p="/build/",t(0)}([function(r,t,n){r.exports=n(1)},function(r,t){"use strict";function n(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function e(r){for(var t=e.options,n=t.parser[t.strictMode?"strict":"loose"].exec(r),o={},a=14;a--;)o[t.key[a]]=n[a]||"";return o[t.q.name]={},o[t.key[12]].replace(t.q.parser,function(r,n,e){n&&(o[t.q.name][n]=e)}),o}function o(r,t){for(var n=[],e=0;e<r.length;e++){var o=r[e];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o))}return n}function a(r,t){var n="";t=t||{};for(var e in t)e&&t.hasOwnProperty(e)&&(n+="&"+e+"="+encodeURIComponent(t[e]));return r.indexOf("?")<0&&(r+="?"),(r+n).replace("?&","?").replace(/\?$/,"")}function i(){var r=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t={};return r.split("&").filter(function(r){return!!r}).forEach(function(r){var n=r.split("="),e=s(n,2),o=e[0],a=e[1];t[o]=a}),t}function u(r){return!!r&&"/"===r[0]}var s=function(){function r(r,t){var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(s){o=!0,a=s}finally{try{!e&&u["return"]&&u["return"]()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function r(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}}(),f={},l=["source","protocol","authority","userInfo","user","password","host","port","relative","pathname","directory","file","query","anchor"];e.options={strictMode:!1,key:l,q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r.exports=function(){function r(t){var o=this;n(this,r),t||(t=location?location.href:"");var a=e(t);return l.forEach(function(r){o[r]=a[r]}),this.params=i(this.query),this}return c(r,null,[{key:"config",value:function(r){f=r.params||{}}}]),c(r,[{key:"path",value:function(r){if(r){var t=u(r),n=r.split("/");t||(n=this.pathname.split("/").concat(n));var e=o(n,!t);return this.pathname="/"+e.join("/"),this}}},{key:"setParams",value:function(r){return Object.assign(this.params,r),this}},{key:"str",value:function(){var r=this.protocol+"://"+this.host+(this.port?":"+this.port:"")+this.pathname;return r=a(r,Object.assign({},f,this.params))}}]),r}()}]);
//# sourceMappingURL=uri.js.map