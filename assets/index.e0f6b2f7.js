import{_ as K,d as V,i as M,n as j,r as c,v as L,j as T,k as Y,D as J,b as o,s as O,w as a,o as $,e as u,f as l,a5 as y,a6 as b,u as G,p as Q,m as X,g as Z,l as x}from"./index.97b0744c.js";import{_ as ee}from"./index.8bb1800e.js";import"./index.2d9ac2c0.js";const d=m=>(Q("data-v-2df25c97"),m=m(),X(),m),te=d(()=>l("div",{style:{height:"80px"}},null,-1)),ue=d(()=>l("div",{style:{width:"80px"}},null,-1)),ne=d(()=>l("div",{class:"title"},"\u6CE8\u518C",-1)),ae=d(()=>l("div",{style:{height:"15px"}},null,-1)),oe=d(()=>l("div",{style:{width:"80px"}},null,-1)),le=d(()=>l("div",{class:"subtitle"},"\u52A0\u5165\u58A8\u4E66\uFF0C\u4E0E\u56E2\u961F\u4E00\u8D77\u9AD8\u6548\u5408\u4F5C",-1)),se=d(()=>l("div",{style:{height:"20px"}},null,-1)),re=d(()=>l("div",{style:{width:"80px"}},null,-1)),de={style:{width:"400px"}},ie=Z(" \u6CE8\u518C "),pe=V({setup(m){const P=M(),F=j(()=>["@buaa.edu.cn","@126.com","@gmail.com","@163.com","@qq.com"].map(n=>{const v=(e.value.email===null||e.value.email===void 0?"":e.value.email).split("@")[0];return{label:v+n,value:v+n}})),B=c(null),C=c(null),e=c({name:null,email:void 0,password:null,reenteredPassword:null}),D={name:[{required:!0,validator(n,t){return t?!0:new Error("\u9700\u8981\u7528\u6237\u540D")},trigger:["input","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:(n,t)=>!!e.value.password&&e.value.password.startsWith(t)&&e.value.password.length>=t.length,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:"input"},{validator:(n,t)=>t===e.value.password,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]},k=()=>{var n;e.value.reenteredPassword&&((n=C.value)==null||n.validate({trigger:"password-input"}))},I=L(),R=T(),S=n=>{var t;n.preventDefault(),(t=B.value)==null||t.validate(v=>{v||x({url:x.defaults.baseURL+"/register",method:"post",headers:{"Content-Type":"application/json",Authorization:P.token},data:{username:e.value.name,password:e.value.password},transformRequest:[function(r,i){let s=JSON.stringify(r);return console.log(s),s}]}).then(function(r){var i,s;console.log(r.data),(i=r.data)!=null&&i.success?I.push("logIn"):R.error((s=r.data)==null?void 0:s.message)})})},g=c(500),h=c(500),_=c(500),f=c(500);return Y(()=>{let n=document.body.parentNode;n!=null&&(n.style.overflowY="hidden"),_.value=document.documentElement.clientWidth,f.value=document.documentElement.clientHeight,window.onresize=()=>{_.value=document.documentElement.clientWidth,f.value=document.documentElement.clientHeight,h.value=_.value*.54,g.value=f.value*.907},h.value=_.value*.54,g.value=f.value*.907}),J(()=>{let n=document.body.parentNode;n!=null&&(n.style.overflowY="auto")}),(n,t)=>{const v=o("n-image"),r=o("n-gi"),i=o("n-space"),s=o("n-input"),w=o("n-form-item"),U=o("n-auto-complete"),A=o("n-button"),W=o("n-col"),q=o("n-row"),N=o("n-form"),z=o("n-grid"),E=o("n-layout-content"),H=o("n-layout");return $(),O(H,null,{default:a(()=>[u(ee,{Login:!1,Register:!0}),u(E,{"content-style":"background:rgb(245,181,68,0.1);"},{default:a(()=>[u(z,{cols:"2"},{default:a(()=>[u(r,null,{default:a(()=>[u(v,{"preview-disabled":"",width:h.value,height:g.value,src:"svg\\signUp\\Illustration.svg"},null,8,["width","height"])]),_:1}),u(r,null,{default:a(()=>[te,u(i,null,{default:a(()=>[ue,ne]),_:1}),ae,u(i,null,{default:a(()=>[oe,le]),_:1}),se,u(i,null,{default:a(()=>[re,l("div",de,[u(N,{size:"large","show-label":!1,ref_key:"formRef",ref:B,model:e.value,rules:D},{default:a(()=>[u(w,{path:"name",label:"\u7528\u6237\u540D"},{default:a(()=>[u(s,{value:e.value.name,"onUpdate:value":t[0]||(t[0]=p=>e.value.name=p),placeholder:"\u7528\u6237\u540D",onKeydown:t[1]||(t[1]=y(b(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),u(w,{path:"email",label:"\u90AE\u7BB1"},{default:a(()=>[u(U,{value:e.value.email,"onUpdate:value":t[2]||(t[2]=p=>e.value.email=p),options:G(F),"blur-after-select":"",placeholder:"\u90AE\u7BB1"},null,8,["value","options"])]),_:1}),u(w,{path:"password",label:"\u5BC6\u7801"},{default:a(()=>[u(s,{value:e.value.password,"onUpdate:value":t[3]||(t[3]=p=>e.value.password=p),type:"password",onInput:k,onKeydown:t[4]||(t[4]=y(b(()=>{},["prevent"]),["enter"])),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),u(w,{ref_key:"rPasswordFormItemRef",ref:C,first:"",path:"reenteredPassword",label:"\u91CD\u590D\u5BC6\u7801"},{default:a(()=>[u(s,{value:e.value.reenteredPassword,"onUpdate:value":t[5]||(t[5]=p=>e.value.reenteredPassword=p),disabled:e.value.password==""||e.value.password==null,type:"password",onKeydown:t[6]||(t[6]=y(b(()=>{},["prevent"]),["enter"])),placeholder:"\u786E\u8BA4\u5BC6\u7801"},null,8,["value","disabled"])]),_:1},512),u(q,{gutter:[0,24]},{default:a(()=>[u(W,{span:24},{default:a(()=>[l("div",null,[u(A,{size:"large",block:"",disabled:e.value.name===null||e.value.password==null||e.value.reenteredPassword==null||e.value.reenteredPassword!=e.value.password,round:"",type:"warning",onClick:S},{default:a(()=>[ie]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1})]),_:1})]),_:1}),u(E,{"content-style":"padding: 24px;"})]),_:1})}}});var we=K(pe,[["__scopeId","data-v-2df25c97"]]);export{we as default};
