import{g as r,y as g,o as w,c as b,f as c,B as d,a as k,w as x,j as O,v as P,M as y,T as E,N as M}from"./vendor.5c522d5e.js";import{_ as B}from"./index.5d6809df.js";const R=100,v="top-left",p="top-right",_="bottom-left",h="bottom-right",f=[v,p,_,h],S={__name:"index",props:{placement:{type:String,default:"bottom-left",validator(u){const s=f.includes(u);if(!s)throw new Error(`\u4F60\u7684 placement \u5FC5\u987B\u662F ${f.join("\u3001")} \u4E2D\u7684\u4E00\u4E2A`);return s}}},setup(u){const s=u,l=r(!1);let n=null;const m=()=>{l.value=!0,n&&clearTimeout(n)},T=()=>{n=setTimeout(()=>{l.value=!1,n=null},R)},o=r(null),i=r(null),a=e=>e?{width:e.offsetWidth,height:e.offsetHeight}:{},t=r({top:0,left:0});return g(l,e=>{!e||M(()=>{switch(s.placement){case v:t.value.top=0,t.value.left=-a(i.value).width+"px";break;case p:t.value.top=0,t.value.left=a(o.value).width+"px";break;case _:t.value.top=a(o.value).height+"px",t.value.left=-a(i.value).width+"px";break;case h:t.value.top=a(o.value).height+"px",t.value.left=a(o.value).width+"px";break}})}),(e,z)=>(w(),b("div",{class:"relative",onMouseleave:T,onMouseenter:m},[c("div",{ref_key:"referenceTarget",ref:o},[d(e.$slots,"reference",{},void 0,!0)],512),k(E,{name:"slide"},{default:x(()=>[O(c("div",{ref_key:"contentTarget",ref:i,class:"absolute p-1 z-20 bg-white dark:bg-zinc-900 border rounded-md dark:border-zinc-700",style:y(t.value)},[d(e.$slots,"default",{},void 0,!0)],4),[[P,l.value&&e.$slots.default&&e.$slots.default().length>0]])]),_:3})],32))}};var H=B(S,[["__scopeId","data-v-50661245"]]);export{H as default};
