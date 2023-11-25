import{U as h,w as u}from"./tsparticles-engine.e4b9023d.js";const p=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function w(o,r,e){const{svgData:i}=o;if(!i)return"";const n=u(r,e);if(i.includes("fill"))return i.replace(p,()=>n);const s=i.indexOf(">");return`${i.substring(0,s)} fill="${n}"${i.substring(s)}`}async function f(o){return new Promise(r=>{o.loading=!0;const e=new Image;o.element=e,e.addEventListener("load",()=>{o.loading=!1,r()}),e.addEventListener("error",()=>{o.element=void 0,o.error=!0,o.loading=!1,console.error(`${h} loading image: ${o.source}`),r()}),e.src=o.source})}async function I(o){if(o.type!=="svg"){await f(o);return}o.loading=!0;const r=await fetch(o.source);r.ok||(console.error(`${h} Image not found`),o.error=!0),o.error||(o.svgData=await r.text()),o.loading=!1}function C(o,r,e,i){var t;const n=w(o,e,((t=i.opacity)==null?void 0:t.value)??1),s={color:e,data:{...o,svgData:n},loaded:!1,ratio:r.width/r.height,replaceColor:r.replaceColor??r.replace_color,source:r.src};return new Promise(c=>{const a=new Blob([n],{type:"image/svg+xml"}),g=URL||window.URL||window.webkitURL||window,d=g.createObjectURL(a),l=new Image;l.addEventListener("load",()=>{s.loaded=!0,s.element=l,c(s),g.revokeObjectURL(d)}),l.addEventListener("error",async()=>{g.revokeObjectURL(d);const m={...o,error:!1,loading:!0};await f(m),s.loaded=!0,s.element=m.element,c(s)}),l.src=d})}class _{constructor(r){this.loadImageShape=async e=>{if(!this._engine.loadImage)throw new Error(`${h} image shape not initialized`);await this._engine.loadImage({name:e.name,replaceColor:e.replaceColor??e.replace_color??!1,src:e.src})},this._engine=r}addImage(r){this._engine.images||(this._engine.images=[]),this._engine.images.push(r)}draw(r,e,i,n){const s=e.image,t=s==null?void 0:s.element;if(!t)return;const c=(s==null?void 0:s.ratio)??1,a={x:-i,y:-i};r.globalAlpha=n,r.drawImage(t,a.x,a.y,i*2,i*2/c),r.globalAlpha=1}getSidesCount(){return 12}async init(r){const e=r.actualOptions;if(!(!e.preload||!this._engine.loadImage))for(const i of e.preload)this._engine.loadImage(i)}loadShape(r){if(r.shape!=="image"&&r.shape!=="images")return;this._engine.images||(this._engine.images=[]);const e=r.shapeData;this._engine.images.find(n=>n.name===e.name||n.source===e.src)||this.loadImageShape(e).then(()=>{this.loadShape(r)})}particleInit(r,e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const i=this._engine.images,n=e.shapeData,s=e.getFillColor(),t=i.find(a=>a.name===n.name||a.source===n.src);if(!t)return;const c=n.replaceColor??n.replace_color??t.replaceColor;if(t.loading){setTimeout(()=>{this.particleInit(r,e)});return}(async()=>{let a;t.svgData&&s?a=await C(t,n,s,e):a={color:s,data:t,element:t.element,loaded:!0,ratio:n.width&&n.height?n.width/n.height:t.ratio??1,replaceColor:c,source:n.src},a.ratio||(a.ratio=1);const g=n.fill??e.fill,d=n.close??e.close,l={image:a,fill:g,close:d};e.image=l.image,e.fill=l.fill,e.close=l.close})()}}class y{constructor(){this.src=""}load(r){r&&(r.height!==void 0&&(this.height=r.height),r.name!==void 0&&(this.name=r.name),r.replaceColor!==void 0&&(this.replaceColor=r.replaceColor),r.src!==void 0&&(this.src=r.src),r.width!==void 0&&(this.width=r.width))}}class v{constructor(r){this.id="imagePreloader",this._engine=r}getPlugin(){return{}}loadOptions(r,e){if(!e||!e.preload)return;r.preload||(r.preload=[]);const i=r.preload;for(const n of e.preload){const s=i.find(t=>t.name===n.name||t.src===n.src);if(s)s.load(n);else{const t=new y;t.load(n),i.push(t)}}}needsPlugin(){return!0}}async function L(o){o.loadImage||(o.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${h} no image source provided`);if(o.images||(o.images=[]),!o.images.find(i=>i.name===e.name||i.source===e.src))try{const i={name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-3),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};o.images.push(i),await(e.replaceColor?I:f)(i)}catch{throw new Error(`${h} ${e.name??e.src} not found`)}});const r=new v(o);await o.addPlugin(r),await o.addShape(["image","images"],new _(o))}export{L as l};