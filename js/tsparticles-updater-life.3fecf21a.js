import{K as l,B as o,I as f,A as d,S as r}from"./tsparticles-engine.e4b9023d.js";class h extends l{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class m extends l{constructor(){super(),this.random.minimumValue=1e-4,this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class w{constructor(){this.count=0,this.delay=new h,this.duration=new m}load(e){e&&(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class g{constructor(e){this.container=e}init(e){const i=this.container,n=e.options,s=n.life;s&&(e.life={delay:i.retina.reduceFactor?o(s.delay.value)*(s.delay.sync?1:f())/i.retina.reduceFactor*1e3:0,delayTime:0,duration:i.retina.reduceFactor?o(s.duration.value)*(s.duration.sync?1:f())/i.retina.reduceFactor*1e3:0,time:0,count:s.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e,...i){e.life||(e.life=new w);for(const n of i)e.life.load(n==null?void 0:n.life)}update(e,i){if(!this.isEnabled(e)||!e.life)return;const n=e.life;let s=!1;if(e.spawning)if(n.delayTime+=i.value,n.delayTime>=e.life.delay)s=!0,e.spawning=!1,n.delayTime=0,n.time=0;else return;if(n.duration===-1||e.spawning||(s?n.time=0:n.time+=i.value,n.time<n.duration))return;if(n.time=0,e.life.count>0&&e.life.count--,e.life.count===0){e.destroy();return}const a=this.container.canvas.size,c=d(0,a.width),y=d(0,a.width);e.position.x=r(c),e.position.y=r(y),e.spawning=!0,n.delayTime=0,n.time=0,e.reset();const u=e.options.life;u&&(n.delay=o(u.delay.value)*1e3,n.duration=o(u.duration.value)*1e3)}}async function R(t){await t.addParticleUpdater("life",e=>new g(e))}export{R as l};
