class x extends TypeError{constructor(n,r){let t;const{message:i,...c}=n,{path:f}=n,a=f.length===0?i:"At path: "+f.join(".")+" -- "+i;super(a),Object.assign(this,c),this.name=this.constructor.name,this.failures=()=>{var o;return(o=t)!=null?o:t=[n,...r()]}}}function E(e){return l(e)&&typeof e[Symbol.iterator]=="function"}function l(e){return typeof e=="object"&&e!=null}function d(e){return typeof e=="string"?JSON.stringify(e):""+e}function j(e){const{done:n,value:r}=e.next();return n?void 0:r}function S(e,n,r,t){if(e===!0)return;e===!1?e={}:typeof e=="string"&&(e={message:e});const{path:i,branch:c}=n,{type:f}=r,{refinement:a,message:o="Expected a value of type `"+f+"`"+(a?" with refinement `"+a+"`":"")+", but received: `"+d(t)+"`"}=e;return{value:t,type:f,refinement:a,key:i[i.length-1],path:i,branch:c,...e,message:o}}function*g(e,n,r,t){E(e)||(e=[e]);for(const i of e){const c=S(i,n,r,t);c&&(yield c)}}function*m(e,n,r={}){const{path:t=[],branch:i=[e],coerce:c=!1,mask:f=!1}=r,a={path:t,branch:i};if(c&&(e=n.coercer(e,a),f&&n.type!=="type"&&l(n.schema)&&l(e)&&!Array.isArray(e)))for(const s in e)n.schema[s]===void 0&&delete e[s];let o=!0;for(const s of n.validator(e,a))o=!1,yield[s,void 0];for(let[s,u,k]of n.entries(e,a)){const A=m(u,k,{path:s===void 0?t:[...t,s],branch:s===void 0?i:[...i,u],coerce:c,mask:f});for(const b of A)b[0]?(o=!1,yield[b[0],void 0]):c&&(u=b[1],s===void 0?e=u:e instanceof Map?e.set(s,u):e instanceof Set?e.add(u):l(e)&&(e[s]=u))}if(o)for(const s of n.refiner(e,a))o=!1,yield[s,void 0];o&&(yield[void 0,e])}class y{constructor(n){const{type:r,schema:t,validator:i,refiner:c,coercer:f=o=>o,entries:a=function*(){}}=n;this.type=r,this.schema=t,this.entries=a,this.coercer=f,i?this.validator=(o,s)=>{const u=i(o,s);return g(u,s,this,o)}:this.validator=()=>[],c?this.refiner=(o,s)=>{const u=c(o,s);return g(u,s,this,o)}:this.refiner=()=>[]}assert(n){return N(n,this)}create(n){return O(n,this)}is(n){return w(n,this)}mask(n){return F(n,this)}validate(n,r={}){return h(n,this,r)}}function N(e,n){const r=h(e,n);if(r[0])throw r[0]}function O(e,n){const r=h(e,n,{coerce:!0});if(r[0])throw r[0];return r[1]}function F(e,n){const r=h(e,n,{coerce:!0,mask:!0});if(r[0])throw r[0];return r[1]}function w(e,n){return!h(e,n)[0]}function h(e,n,r={}){const t=m(e,n,r),i=j(t);return i[0]?[new x(i[0],function*(){for(const f of t)f[0]&&(yield f[0])}),void 0]:[void 0,i[1]]}function p(e,n){return new y({type:e,schema:null,validator:n})}function M(){return p("any",()=>!0)}function J(e){return new y({type:"array",schema:e,*entries(n){if(e&&Array.isArray(n))for(const[r,t]of n.entries())yield[r,t,e]},coercer(n){return Array.isArray(n)?n.slice():n},validator(n){return Array.isArray(n)||"Expected an array value, but received: "+d(n)}})}function T(){return p("boolean",e=>typeof e=="boolean")}function _(e){return p("instance",n=>n instanceof e||"Expected a `"+e.name+"` instance, but received: "+d(n))}function q(e){const n=d(e),r=typeof e;return new y({type:"literal",schema:r==="string"||r==="number"||r==="boolean"?e:null,validator(t){return t===e||"Expected the literal `"+n+"`, but received: "+d(t)}})}function I(){return p("never",()=>!1)}function z(e){return new y({...e,validator:(n,r)=>n===null||e.validator(n,r),refiner:(n,r)=>n===null||e.refiner(n,r)})}function B(){return p("number",e=>typeof e=="number"&&!isNaN(e)||"Expected a number, but received: "+d(e))}function D(e){return new y({...e,validator:(n,r)=>n===void 0||e.validator(n,r),refiner:(n,r)=>n===void 0||e.refiner(n,r)})}function G(e,n){return new y({type:"record",schema:null,*entries(r){if(l(r))for(const t in r){const i=r[t];yield[t,t,e],yield[t,i,n]}},validator(r){return l(r)||"Expected an object, but received: "+d(r)}})}function H(){return p("string",e=>typeof e=="string"||"Expected a string, but received: "+d(e))}function K(e){const n=I();return new y({type:"tuple",schema:null,*entries(r){if(Array.isArray(r)){const t=Math.max(e.length,r.length);for(let i=0;i<t;i++)yield[i,r[i],e[i]||n]}},validator(r){return Array.isArray(r)||"Expected an array, but received: "+d(r)}})}function L(e){const n=Object.keys(e);return new y({type:"type",schema:e,*entries(r){if(l(r))for(const t of n)yield[t,r[t],e[t]]},validator(r){return l(r)||"Expected an object, but received: "+d(r)}})}function P(e){const n=e.map(r=>r.type).join(" | ");return new y({type:"union",schema:null,validator(r,t){const i=[];for(const c of e){const[...f]=m(r,c,t),[a]=f;if(a[0])for(const[o]of f)o&&i.push(o);else return[]}return["Expected the value to satisfy a union of `"+n+"`, but received: "+d(r),...i]}})}function Q(){return p("unknown",()=>!0)}function R(e,n,r){return new y({...e,coercer:(t,i)=>w(t,n)?e.coercer(r(t,i),i):e.coercer(t,i)})}export{L as a,J as b,R as c,z as d,T as e,P as f,M as g,O as h,_ as i,q as l,B as n,D as o,G as r,H as s,K as t,Q as u};