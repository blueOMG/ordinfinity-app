import{A as a,E as p,B as l,D as h}from"./tsparticles-engine.e4b9023d.js";class f{constructor(){this.default=!0,this.groups=[],this.quantity=4}get particles_nb(){return this.quantity}set particles_nb(t){this.quantity=a(t)}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(e=>e)),this.groups.length||(this.default=!0);const n=t.quantity??t.particles_nb;n!==void 0&&(this.quantity=a(n))}}class d extends p{constructor(t){super(t),this.handleClickMode=n=>{if(n!=="push")return;const e=this.container,o=e.actualOptions,i=o.interactivity.modes.push;if(!i)return;const r=l(i.quantity);if(r<=0)return;const u=h([void 0,...i.groups]),c=u!==void 0?e.actualOptions.particles.groups[u]:void 0;e.particles.push(r,e.interactivity.mouse,c,u)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(t,...n){t.push||(t.push=new f);for(const e of n)t.push.load(e==null?void 0:e.push)}reset(){}}async function y(s){await s.addInteractor("externalPush",t=>new d(t))}export{y as l};