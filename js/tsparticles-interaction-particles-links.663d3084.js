import{C as P,R as z,O as C,P as F,y as O,g as q,k as L,v as _,x as m,G as M,H as R,I as S,B as I,z as D}from"./tsparticles-engine.e4b9023d.js";class W extends P{constructor(i,n,e,t){super(i,n,e),this.canvasSize=t,this.canvasSize={...t}}contains(i){const{width:n,height:e}=this.canvasSize,{x:t,y:s}=i;return super.contains(i)||super.contains({x:t-n,y:s})||super.contains({x:t-n,y:s-e})||super.contains({x:t,y:s-e})}intersects(i){if(super.intersects(i))return!0;const n=i,e=i,t={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(e.radius!==void 0){const s=new P(t.x,t.y,e.radius*2);return super.intersects(s)}else if(n.size!==void 0){const s=new z(t.x,t.y,n.size.width*2,n.size.height*2);return super.intersects(s)}return!1}}class B{constructor(){this.blur=5,this.color=new C,this.color.value="#000",this.enable=!1}load(i){i&&(i.blur!==void 0&&(this.blur=i.blur),this.color=C.create(this.color,i.color),i.enable!==void 0&&(this.enable=i.enable))}}class E{constructor(){this.enable=!1,this.frequency=1}load(i){i&&(i.color!==void 0&&(this.color=C.create(this.color,i.color)),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity))}}class j{constructor(){this.blink=!1,this.color=new C,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new B,this.triangles=new E,this.width=1,this.warp=!1}load(i){i&&(i.id!==void 0&&(this.id=i.id),i.blink!==void 0&&(this.blink=i.blink),this.color=C.create(this.color,i.color),i.consent!==void 0&&(this.consent=i.consent),i.distance!==void 0&&(this.distance=i.distance),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity),this.shadow.load(i.shadow),this.triangles.load(i.triangles),i.width!==void 0&&(this.width=i.width),i.warp!==void 0&&(this.warp=i.warp))}}function G(c,i,n,e,t){const{dx:s,dy:o,distance:d}=q(c,i);if(!t||d<=n)return d;const f={x:Math.abs(s),y:Math.abs(o)},h={x:Math.min(f.x,e.width-f.x),y:Math.min(f.y,e.height-f.y)};return Math.sqrt(h.x**2+h.y**2)}class H extends F{constructor(i){super(i),this._setColor=n=>{if(!n.options.links)return;const e=this.linkContainer,t=n.options.links;let s=t.id===void 0?e.particles.linksColor:e.particles.linksColors.get(t.id);if(s)return;const o=t.color;s=O(o,t.blink,t.consent),t.id===void 0?e.particles.linksColor=s:e.particles.linksColors.set(t.id,s)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}async interact(i){if(!i.options.links)return;i.links=[];const n=i.getPosition(),e=this.container,t=e.canvas.size;if(n.x<0||n.y<0||n.x>t.width||n.y>t.height)return;const s=i.options.links,o=s.opacity,d=i.retina.linksDistance??0,f=s.warp,h=f?new W(n.x,n.y,d,t):new P(n.x,n.y,d),g=e.particles.quadTree.query(h);for(const l of g){const a=l.options.links;if(i===l||!(a!=null&&a.enable)||s.id!==a.id||l.spawning||l.destroyed||!l.links||i.links.some(k=>k.destination===l)||l.links.some(k=>k.destination===i))continue;const r=l.getPosition();if(r.x<0||r.y<0||r.x>t.width||r.y>t.height)continue;const u=G(n,r,d,t,f&&a.warp);if(u>d)continue;const w=(1-u/d)*o;this._setColor(i),i.links.push({destination:l,opacity:w})}}isEnabled(i){var n;return!!((n=i.options.links)!=null&&n.enable)}loadParticlesOptions(i,...n){i.links||(i.links=new j);for(const e of n)i.links.load((e==null?void 0:e.links)??(e==null?void 0:e.lineLinked)??(e==null?void 0:e.line_linked))}reset(){}}async function K(c){await c.addInteractor("particlesLinks",i=>new H(i))}function N(c){let i=!1;const{begin:n,end:e,maxDistance:t,context:s,canvasSize:o,width:d,backgroundMask:f,colorLine:h,opacity:g,links:l}=c;if(L(n,e)<=t)_(s,n,e),i=!0;else if(l.warp){let r,u;const w={x:e.x-o.width,y:e.y},k=q(n,w);if(k.distance<=t){const y=n.y-k.dy/k.dx*n.x;r={x:0,y},u={x:o.width,y}}else{const y={x:e.x,y:e.y-o.height},p=q(n,y);if(p.distance<=t){const x=-(n.y-p.dy/p.dx*n.x)/(p.dy/p.dx);r={x,y:0},u={x,y:o.height}}else{const b={x:e.x-o.width,y:e.y-o.height},x=q(n,b);if(x.distance<=t){const T=n.y-x.dy/x.dx*n.x;r={x:-T/(x.dy/x.dx),y:T},u={x:r.x+o.width,y:r.y+o.height}}}}r&&u&&(_(s,n,r),_(s,e,u),i=!0)}if(!i)return;s.lineWidth=d,f.enable&&(s.globalCompositeOperation=f.composite),s.strokeStyle=m(h,g);const{shadow:a}=l;if(a.enable){const r=M(a.color);r&&(s.shadowBlur=a.blur,s.shadowColor=m(r))}s.stroke()}function V(c){const{context:i,pos1:n,pos2:e,pos3:t,backgroundMask:s,colorTriangle:o,opacityTriangle:d}=c;R(i,n,e,t),s.enable&&(i.globalCompositeOperation=s.composite),i.fillStyle=m(o,d),i.fill()}function A(c){return c.sort((i,n)=>i-n),c.join("_")}function v(c,i){const n=A(c.map(t=>t.id));let e=i.get(n);return e===void 0&&(e=S(),i.set(n,e)),e}class J{constructor(i){this.container=i,this._drawLinkLine=(n,e)=>{const t=this.container,s=t.actualOptions,o=e.destination,d=n.getPosition(),f=o.getPosition();let h=e.opacity;t.canvas.draw(g=>{var y;if(!n.options.links)return;let l;const a=(y=n.options.twinkle)==null?void 0:y.lines;if(a!=null&&a.enable){const p=a.frequency,b=M(a.color);S()<p&&b&&(l=b,h=I(a.opacity))}const r=n.options.links;if(!l){const p=(r==null?void 0:r.id)!==void 0?t.particles.linksColors.get(r.id):t.particles.linksColor;l=D(n,o,p)}if(!l)return;const u=n.retina.linksWidth??0,w=n.retina.linksDistance??0,{backgroundMask:k}=s;N({context:g,width:u,begin:d,end:f,maxDistance:w,canvasSize:t.canvas.size,links:r,backgroundMask:k,colorLine:l,opacity:h})})},this._drawLinkTriangle=(n,e,t)=>{if(!n.options.links)return;const s=this.container,o=s.actualOptions,d=e.destination,f=t.destination,h=n.options.links.triangles,g=h.opacity??(e.opacity+t.opacity)/2;g<=0||s.canvas.draw(l=>{const a=n.getPosition(),r=d.getPosition(),u=f.getPosition(),w=n.retina.linksDistance??0;if(L(a,r)>w||L(u,r)>w||L(u,a)>w)return;let k=M(h.color);if(!k){const y=n.options.links,p=(y==null?void 0:y.id)!==void 0?s.particles.linksColors.get(y.id):s.particles.linksColor;k=D(n,d,p)}k&&V({context:l,pos1:a,pos2:r,pos3:u,backgroundMask:o.backgroundMask,colorTriangle:k,opacityTriangle:g})})},this._drawTriangles=(n,e,t,s)=>{var f,h,g;const o=t.destination;if(!((f=n.links)!=null&&f.triangles.enable&&((h=o.options.links)!=null&&h.triangles.enable)))return;const d=(g=o.links)==null?void 0:g.filter(l=>{const a=this._getLinkFrequency(o,l.destination);return o.options.links&&a<=o.options.links.frequency&&s.findIndex(r=>r.destination===l.destination)>=0});if(d!=null&&d.length)for(const l of d){const a=l.destination;this._getTriangleFrequency(e,o,a)>n.links.triangles.frequency||this._drawLinkTriangle(e,t,l)}},this._getLinkFrequency=(n,e)=>v([n,e],this._freqs.links),this._getTriangleFrequency=(n,e,t)=>v([n,e,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(i,n){const{links:e,options:t}=n;if(!e||e.length<=0)return;const s=e.filter(o=>t.links&&this._getLinkFrequency(n,o.destination)<=t.links.frequency);for(const o of s)this._drawTriangles(t,n,o,s),o.opacity>0&&(n.retina.linksWidth??0)>0&&this._drawLinkLine(n,o)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:e}=i,{distance:t,width:s}=i.options.links;e.linksDistance=t*n,e.linksWidth=s*n}particleDestroyed(i){i.links=[]}}class Q{constructor(){this.id="links"}getPlugin(i){return new J(i)}loadOptions(){}needsPlugin(){return!0}}async function U(c){const i=new Q;await c.addPlugin(i)}async function Z(c){await K(c),await U(c)}export{Z as l};
