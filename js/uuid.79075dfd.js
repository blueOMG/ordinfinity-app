import{a as J}from"./@babel.ab050653.js";var E,Q=new Uint8Array(16);function G(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(Q)}const Y=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function M(f){return typeof f=="string"&&Y.test(f)}var u=[];for(var N=0;N<256;++N)u.push((N+256).toString(16).substr(1));function S(f){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(u[f[o+0]]+u[f[o+1]]+u[f[o+2]]+u[f[o+3]]+"-"+u[f[o+4]]+u[f[o+5]]+"-"+u[f[o+6]]+u[f[o+7]]+"-"+u[f[o+8]]+u[f[o+9]]+"-"+u[f[o+10]]+u[f[o+11]]+u[f[o+12]]+u[f[o+13]]+u[f[o+14]]+u[f[o+15]]).toLowerCase();if(!M(r))throw TypeError("Stringified UUID is invalid");return r}var H,k,q=0,V=0;function Z(f,o,r){var n=o&&r||0,e=o||new Array(16);f=f||{};var a=f.node||H,t=f.clockseq!==void 0?f.clockseq:k;if(a==null||t==null){var v=f.random||(f.rng||G)();a==null&&(a=H=[v[0]|1,v[1],v[2],v[3],v[4],v[5]]),t==null&&(t=k=(v[6]<<8|v[7])&16383)}var c=f.msecs!==void 0?f.msecs:Date.now(),g=f.nsecs!==void 0?f.nsecs:V+1,m=c-q+(g-V)/1e4;if(m<0&&f.clockseq===void 0&&(t=t+1&16383),(m<0||c>q)&&f.nsecs===void 0&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");q=c,V=g,k=t,c+=122192928e5;var A=((c&268435455)*1e4+g)%4294967296;e[n++]=A>>>24&255,e[n++]=A>>>16&255,e[n++]=A>>>8&255,e[n++]=A&255;var p=c/4294967296*1e4&268435455;e[n++]=p>>>8&255,e[n++]=p&255,e[n++]=p>>>24&15|16,e[n++]=p>>>16&255,e[n++]=t>>>8|128,e[n++]=t&255;for(var w=0;w<6;++w)e[n+w]=a[w];return o||S(e)}function K(f){if(!M(f))throw TypeError("Invalid UUID");var o,r=new Uint8Array(16);return r[0]=(o=parseInt(f.slice(0,8),16))>>>24,r[1]=o>>>16&255,r[2]=o>>>8&255,r[3]=o&255,r[4]=(o=parseInt(f.slice(9,13),16))>>>8,r[5]=o&255,r[6]=(o=parseInt(f.slice(14,18),16))>>>8,r[7]=o&255,r[8]=(o=parseInt(f.slice(19,23),16))>>>8,r[9]=o&255,r[10]=(o=parseInt(f.slice(24,36),16))/1099511627776&255,r[11]=o/4294967296&255,r[12]=o>>>24&255,r[13]=o>>>16&255,r[14]=o>>>8&255,r[15]=o&255,r}function b(f){f=unescape(encodeURIComponent(f));for(var o=[],r=0;r<f.length;++r)o.push(f.charCodeAt(r));return o}var j="6ba7b810-9dad-11d1-80b4-00c04fd430c8",z="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function P(f,o,r){function n(e,a,t,v){if(typeof e=="string"&&(e=b(e)),typeof a=="string"&&(a=K(a)),a.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+e.length);if(c.set(a),c.set(e,a.length),c=r(c),c[6]=c[6]&15|o,c[8]=c[8]&63|128,t){v=v||0;for(var g=0;g<16;++g)t[v+g]=c[g];return t}return S(c)}try{n.name=f}catch{}return n.DNS=j,n.URL=z,n}function B(f){if(typeof f=="string"){var o=unescape(encodeURIComponent(f));f=new Uint8Array(o.length);for(var r=0;r<o.length;++r)f[r]=o.charCodeAt(r)}return W(_(i(f),f.length*8))}function W(f){for(var o=[],r=f.length*32,n="0123456789abcdef",e=0;e<r;e+=8){var a=f[e>>5]>>>e%32&255,t=parseInt(n.charAt(a>>>4&15)+n.charAt(a&15),16);o.push(t)}return o}function X(f){return(f+64>>>9<<4)+14+1}function _(f,o){f[o>>5]|=128<<o%32,f[X(o)-1]=o;for(var r=1732584193,n=-271733879,e=-1732584194,a=271733878,t=0;t<f.length;t+=16){var v=r,c=n,g=e,m=a;r=d(r,n,e,a,f[t],7,-680876936),a=d(a,r,n,e,f[t+1],12,-389564586),e=d(e,a,r,n,f[t+2],17,606105819),n=d(n,e,a,r,f[t+3],22,-1044525330),r=d(r,n,e,a,f[t+4],7,-176418897),a=d(a,r,n,e,f[t+5],12,1200080426),e=d(e,a,r,n,f[t+6],17,-1473231341),n=d(n,e,a,r,f[t+7],22,-45705983),r=d(r,n,e,a,f[t+8],7,1770035416),a=d(a,r,n,e,f[t+9],12,-1958414417),e=d(e,a,r,n,f[t+10],17,-42063),n=d(n,e,a,r,f[t+11],22,-1990404162),r=d(r,n,e,a,f[t+12],7,1804603682),a=d(a,r,n,e,f[t+13],12,-40341101),e=d(e,a,r,n,f[t+14],17,-1502002290),n=d(n,e,a,r,f[t+15],22,1236535329),r=l(r,n,e,a,f[t+1],5,-165796510),a=l(a,r,n,e,f[t+6],9,-1069501632),e=l(e,a,r,n,f[t+11],14,643717713),n=l(n,e,a,r,f[t],20,-373897302),r=l(r,n,e,a,f[t+5],5,-701558691),a=l(a,r,n,e,f[t+10],9,38016083),e=l(e,a,r,n,f[t+15],14,-660478335),n=l(n,e,a,r,f[t+4],20,-405537848),r=l(r,n,e,a,f[t+9],5,568446438),a=l(a,r,n,e,f[t+14],9,-1019803690),e=l(e,a,r,n,f[t+3],14,-187363961),n=l(n,e,a,r,f[t+8],20,1163531501),r=l(r,n,e,a,f[t+13],5,-1444681467),a=l(a,r,n,e,f[t+2],9,-51403784),e=l(e,a,r,n,f[t+7],14,1735328473),n=l(n,e,a,r,f[t+12],20,-1926607734),r=s(r,n,e,a,f[t+5],4,-378558),a=s(a,r,n,e,f[t+8],11,-2022574463),e=s(e,a,r,n,f[t+11],16,1839030562),n=s(n,e,a,r,f[t+14],23,-35309556),r=s(r,n,e,a,f[t+1],4,-1530992060),a=s(a,r,n,e,f[t+4],11,1272893353),e=s(e,a,r,n,f[t+7],16,-155497632),n=s(n,e,a,r,f[t+10],23,-1094730640),r=s(r,n,e,a,f[t+13],4,681279174),a=s(a,r,n,e,f[t],11,-358537222),e=s(e,a,r,n,f[t+3],16,-722521979),n=s(n,e,a,r,f[t+6],23,76029189),r=s(r,n,e,a,f[t+9],4,-640364487),a=s(a,r,n,e,f[t+12],11,-421815835),e=s(e,a,r,n,f[t+15],16,530742520),n=s(n,e,a,r,f[t+2],23,-995338651),r=h(r,n,e,a,f[t],6,-198630844),a=h(a,r,n,e,f[t+7],10,1126891415),e=h(e,a,r,n,f[t+14],15,-1416354905),n=h(n,e,a,r,f[t+5],21,-57434055),r=h(r,n,e,a,f[t+12],6,1700485571),a=h(a,r,n,e,f[t+3],10,-1894986606),e=h(e,a,r,n,f[t+10],15,-1051523),n=h(n,e,a,r,f[t+1],21,-2054922799),r=h(r,n,e,a,f[t+8],6,1873313359),a=h(a,r,n,e,f[t+15],10,-30611744),e=h(e,a,r,n,f[t+6],15,-1560198380),n=h(n,e,a,r,f[t+13],21,1309151649),r=h(r,n,e,a,f[t+4],6,-145523070),a=h(a,r,n,e,f[t+11],10,-1120210379),e=h(e,a,r,n,f[t+2],15,718787259),n=h(n,e,a,r,f[t+9],21,-343485551),r=U(r,v),n=U(n,c),e=U(e,g),a=U(a,m)}return[r,n,e,a]}function i(f){if(f.length===0)return[];for(var o=f.length*8,r=new Uint32Array(X(o)),n=0;n<o;n+=8)r[n>>5]|=(f[n/8]&255)<<n%32;return r}function U(f,o){var r=(f&65535)+(o&65535),n=(f>>16)+(o>>16)+(r>>16);return n<<16|r&65535}function r0(f,o){return f<<o|f>>>32-o}function D(f,o,r,n,e,a){return U(r0(U(U(o,f),U(n,a)),e),r)}function d(f,o,r,n,e,a,t){return D(o&r|~o&n,f,o,e,a,t)}function l(f,o,r,n,e,a,t){return D(o&n|r&~n,f,o,e,a,t)}function s(f,o,r,n,e,a,t){return D(o^r^n,f,o,e,a,t)}function h(f,o,r,n,e,a,t){return D(r^(o|~n),f,o,e,a,t)}var f0=P("v3",48,B);const n0=f0;function e0(f,o,r){f=f||{};var n=f.random||(f.rng||G)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,o){r=r||0;for(var e=0;e<16;++e)o[r+e]=n[e];return o}return S(n)}function a0(f,o,r,n){switch(f){case 0:return o&r^~o&n;case 1:return o^r^n;case 2:return o&r^o&n^r&n;case 3:return o^r^n}}function $(f,o){return f<<o|f>>>32-o}function t0(f){var o=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof f=="string"){var n=unescape(encodeURIComponent(f));f=[];for(var e=0;e<n.length;++e)f.push(n.charCodeAt(e))}else Array.isArray(f)||(f=Array.prototype.slice.call(f));f.push(128);for(var a=f.length/4+2,t=Math.ceil(a/16),v=new Array(t),c=0;c<t;++c){for(var g=new Uint32Array(16),m=0;m<16;++m)g[m]=f[c*64+m*4]<<24|f[c*64+m*4+1]<<16|f[c*64+m*4+2]<<8|f[c*64+m*4+3];v[c]=g}v[t-1][14]=(f.length-1)*8/Math.pow(2,32),v[t-1][14]=Math.floor(v[t-1][14]),v[t-1][15]=(f.length-1)*8&4294967295;for(var A=0;A<t;++A){for(var p=new Uint32Array(80),w=0;w<16;++w)p[w]=v[A][w];for(var I=16;I<80;++I)p[I]=$(p[I-3]^p[I-8]^p[I-14]^p[I-16],1);for(var y=r[0],R=r[1],C=r[2],T=r[3],L=r[4],x=0;x<80;++x){var O=Math.floor(x/20),F=$(y,5)+a0(O,R,C,T)+L+o[O]+p[x]>>>0;L=T,T=C,C=$(R,30)>>>0,R=y,y=F}r[0]=r[0]+y>>>0,r[1]=r[1]+R>>>0,r[2]=r[2]+C>>>0,r[3]=r[3]+T>>>0,r[4]=r[4]+L>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var o0=P("v5",80,t0);const c0=o0,v0="00000000-0000-0000-0000-000000000000";function u0(f){if(!M(f))throw TypeError("Invalid UUID");return parseInt(f.substr(14,1),16)}const d0=Object.freeze(Object.defineProperty({__proto__:null,NIL:v0,parse:K,stringify:S,v1:Z,v3:n0,v4:e0,v5:c0,validate:M,version:u0},Symbol.toStringTag,{value:"Module"})),s0=J(d0);export{s0 as r};
