import{_ as U,d as H,I as V,h as i,G as z,C as M,i as Y,J as G,r as o,x as J,w as a,o as L,a as u,b as n,K as B,s as T,L as C,p as $,g as j,f as O,B as Q}from"./index.d351a02f.js";import{_ as X}from"./index.f4d755bc.js";const s=v=>($("data-v-7b3f8aa9"),v=v(),j(),v),Z=s(()=>n("div",{style:{height:"80px"}},null,-1)),ee=s(()=>n("div",{style:{width:"80px"}},null,-1)),te=s(()=>n("div",{class:"title"},"\u6CE8\u518C",-1)),ue=s(()=>n("div",{style:{height:"15px"}},null,-1)),le=s(()=>n("div",{style:{width:"80px"}},null,-1)),ae=s(()=>n("div",{class:"subtitle"},"\u52A0\u5165\u8BBA\u575B\uFF0C\u83B7\u5F97\u66F4\u591A\u529F\u80FD\u548C\u7279\u6743",-1)),oe=s(()=>n("div",{style:{height:"20px"}},null,-1)),ne=s(()=>n("div",{style:{width:"80px"}},null,-1)),se={style:{width:"400px"}},re=O(" \u6CE8\u518C "),de=H({setup(v){const E=V(()=>["@buaa.edu.cn","@126.com","@gmail.com","@163.com","@qq.com"].map(l=>{const r=(e.value.email===null||e.value.email===void 0?"":e.value.email).split("@")[0];return{label:r+l,value:r+l}})),b=i(null),x=i(null),e=i({name:null,email:void 0,password:null,reenteredPassword:null}),P={name:[{required:!0,validator(l,t){return t?!0:new Error("\u9700\u8981\u7528\u6237\u540D")},trigger:["input","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:(l,t)=>!!e.value.password&&e.value.password.startsWith(t)&&e.value.password.length>=t.length,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:"input"},{validator:(l,t)=>t===e.value.password,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]},D=()=>{var l;e.value.reenteredPassword&&((l=x.value)==null||l.validate({trigger:"password-input"}))},A=z(),f=M(),I=l=>{var t;l.preventDefault(),(t=b.value)==null||t.validate(r=>{r?(console.log(r),f.error("\u6CE8\u518C\u5931\u8D25")):(Q.post("/user/register",{username:e.value.name,password1:e.value.password,password2:e.value.reenteredPassword,email:e.value.email}).then(function(c){var p;console.log(c.data),(p=c.data)!=null&&p.status?(f.success("\u6CE8\u518C\u6210\u529F"),A.push("/login")):f.error("\u6CE8\u518C\u5931\u8D25")}),console.log("yes"))})},g=i(500),h=i(500),_=i(500),m=i(500);return Y(()=>{let l=document.body.parentNode;l!=null&&(l.style.overflowY="hidden"),_.value=document.documentElement.clientWidth,m.value=document.documentElement.clientHeight,window.onresize=()=>{_.value=document.documentElement.clientWidth,m.value=document.documentElement.clientHeight,h.value=_.value*.54,g.value=m.value*.907},h.value=_.value*.54,g.value=m.value*.907}),G(()=>{let l=document.body.parentNode;l!=null&&(l.style.overflowY="auto")}),(l,t)=>{const r=o("n-image"),c=o("n-gi"),p=o("n-space"),y=o("n-input"),w=o("n-form-item"),k=o("n-auto-complete"),S=o("n-button"),W=o("n-col"),R=o("n-row"),q=o("n-form"),K=o("n-grid"),F=o("n-layout-content"),N=o("n-layout");return L(),J(N,null,{default:a(()=>[u(X),u(F,{"content-style":"background:#FAFAFA"},{default:a(()=>[u(K,{cols:"2"},{default:a(()=>[u(c,null,{default:a(()=>[u(r,{"preview-disabled":"",width:h.value,height:g.value,src:"login/1 56.png"},null,8,["width","height"])]),_:1}),u(c,null,{default:a(()=>[Z,u(p,null,{default:a(()=>[ee,te]),_:1}),ue,u(p,null,{default:a(()=>[le,ae]),_:1}),oe,u(p,null,{default:a(()=>[ne,n("div",se,[u(q,{size:"large","show-label":!1,ref_key:"formRef",ref:b,model:e.value,rules:P},{default:a(()=>[u(w,{path:"name",label:"\u7528\u6237\u540D"},{default:a(()=>[u(y,{value:e.value.name,"onUpdate:value":t[0]||(t[0]=d=>e.value.name=d),placeholder:"\u7528\u6237\u540D",onKeydown:t[1]||(t[1]=B(C(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),u(w,{path:"email",label:"\u90AE\u7BB1"},{default:a(()=>[u(k,{value:e.value.email,"onUpdate:value":t[2]||(t[2]=d=>e.value.email=d),options:T(E),"blur-after-select":"",placeholder:"\u90AE\u7BB1"},null,8,["value","options"])]),_:1}),u(w,{path:"password",label:"\u5BC6\u7801"},{default:a(()=>[u(y,{value:e.value.password,"onUpdate:value":t[3]||(t[3]=d=>e.value.password=d),type:"password",onInput:D,onKeydown:t[4]||(t[4]=B(C(()=>{},["prevent"]),["enter"])),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),u(w,{ref_key:"rPasswordFormItemRef",ref:x,first:"",path:"reenteredPassword",label:"\u91CD\u590D\u5BC6\u7801"},{default:a(()=>[u(y,{value:e.value.reenteredPassword,"onUpdate:value":t[5]||(t[5]=d=>e.value.reenteredPassword=d),disabled:e.value.password==""||e.value.password==null,type:"password",onKeydown:t[6]||(t[6]=B(C(()=>{},["prevent"]),["enter"])),placeholder:"\u786E\u8BA4\u5BC6\u7801"},null,8,["value","disabled"])]),_:1},512),u(R,{gutter:[0,24]},{default:a(()=>[u(W,{span:24},{default:a(()=>[n("div",null,[u(S,{size:"large",block:"",disabled:e.value.name===null||e.value.password==null||e.value.reenteredPassword==null||e.value.reenteredPassword!=e.value.password,round:"",type:"warning",onClick:I},{default:a(()=>[re]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1})]),_:1})]),_:1}),u(F,{"content-style":"padding: 24px;"})]),_:1})}}});var _e=U(de,[["__scopeId","data-v-7b3f8aa9"]]);export{_e as default};
