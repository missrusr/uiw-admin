"use strict";(self.webpackChunk_examples_base=self.webpackChunk_examples_base||[]).push([[222],{1222:function(e,s,r){r.r(s),r.d(s,{default:function(){return f}});var n=r(3028),i=r(2867),l=r(6976),a=r(9372),t=r(2729);var d=r.p+"static/media/logo-dark.241a4efcd56ef257f0a0b143b464cf18.svg",o="index_logo__Ew1qg",c="index_footer__JzFhD",u=r(5642),h=r(800),m=r(4218),f=function(){(0,t.I0)();var e=(0,h.s0)(),s=(0,(0,u.kY)().provider)(),r=(0,t.v9)((function(e){return e.loading.effects.login.submit})),f=(0,t.v9)((function(e){return e}));console.log(f);var b=l.useState(),p=(0,i.Z)(b,2),x=p[0],g=p[1],j=(0,u.ZP)(x?["/api/login",{method:"POST",body:{username:"admin",password:"admin"}}]:null).data;return j&&j.token&&s.set("login",(0,n.Z)({},j)),l.useEffect((function(){j&&j.token&&(sessionStorage.setItem("token",j.token),sessionStorage.setItem("auth",JSON.stringify(j.authList||[])),e("/home"))}),[JSON.stringify(j)]),(0,m.jsx)(a.X2,{justify:"center",align:"middle",style:{height:"100%"},children:(0,m.jsxs)(a.JX,{span:"5",children:[(0,m.jsx)("div",{className:o,children:(0,m.jsx)("img",{src:d,alt:"Logo"})}),(0,m.jsx)(a.l0,{resetOnSubmit:!1,onSubmit:function(e){var s=e.current,r={};if(s.username||(r.username="\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01"),s.password||(r.password="\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01"),Object.keys(r).length>0){var n=new Error;throw n.filed=r,n}g({username:s.username,password:s.password})},onSubmitError:function(e){return e.filed?(0,n.Z)({},e.filed):null},fields:{username:{labelClassName:"fieldLabel",labelStyle:{width:160},labelFor:"username",children:(0,m.jsx)(a.II,{disabled:!!r,preIcon:"user",id:"username",placeholder:"\u7528\u6237\u540d: admin"})},password:{labelClassName:"fieldLabel",labelStyle:{width:60},labelFor:"password",children:(0,m.jsx)(a.II,{disabled:!!r,preIcon:"lock",id:"password",type:"password",placeholder:"\u5bc6\u7801: admin"})},terms:{style:{margin:0},validator:function(e){return!e&&"\u5fc5\u987b\u7edf\u4e00\u670d\u52a1\u6761\u6b3e"},children:(0,m.jsx)(a.XZ,{disabled:!!r,value:"1",children:"\u5df2\u9605\u8bfb\u5e76\u540c\u610f"})}},children:function(e){var s=e.fields,n=e.canSubmit;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.X2,{children:(0,m.jsx)(a.JX,{children:s.username})}),(0,m.jsx)(a.X2,{children:(0,m.jsx)(a.JX,{children:s.password})}),(0,m.jsxs)(a.X2,{style:{marginBottom:10},children:[(0,m.jsx)(a.JX,{align:"middle",children:s.terms}),(0,m.jsx)(a.JX,{children:(0,m.jsx)("a",{href:"https://uiwjs.github.io",children:"\u670d\u52a1\u6761\u6b3e"})})]}),(0,m.jsx)(a.X2,{children:(0,m.jsx)(a.JX,{children:(0,m.jsx)(a.zx,{loading:!!r,disabled:!n(),block:!0,type:"dark",htmlType:"submit",children:"\u767b\u5f55"})})})]})}}),(0,m.jsxs)("div",{className:c,children:["Copyright \xa9 2018 ",(0,m.jsx)("a",{href:"https://github.com/uiwjs/uiw",children:"@uiw"})," ","\u56e2\u961f\u51fa\u54c1"]})]})})}}}]);
//# sourceMappingURL=222.js.map