(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[243],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},2627:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(33028),i=t(59740),o=t(9249),l=t(87371),a=t(45754),u=t(37687),c=t(56976),s=t(21237),d=t(29693),f=t(14218),h=["dependencies","codePen"];function p(e){var n=e.dependencies,t=e.codePen,o=(0,i.Z)(e,h),l=(0,r.Z)({},o);return t&&(l.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:l.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,f.jsx)(d.Z,(0,r.Z)((0,r.Z)({},l),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:c},c),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",m=function(e){var n=(e||{}).editorUrl;return(0,f.jsxs)("div",{className:v,children:[n&&(0,f.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},g="index_markdown__hcQCp",x=["inline","node"],y=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},b=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;return(0,o.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,f.jsxs)(c.Fragment,{children:[(0,f.jsx)(s.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,o=n.node,l=(0,i.Z)(n,x),a=l,u=a.noPreview,c=a.noScroll,s=a.bgWhite,d=a.noCode,h=a.codePen,v=a.codeSandboxOption;if(t)return(0,f.jsx)("code",(0,r.Z)({},l));var m={noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:h,codeSandboxOption:v};return 0===Object.keys(m).filter((function(e){return void 0!==m[e]})).length?(0,f.jsx)("code",(0,r.Z)({},l)):(0,f.jsx)(p,{code:y(o.children),dependencies:e.dependencies,noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:h,codeSandboxOption:v})}}}),(0,f.jsx)(m,{editorUrl:this.editorUrl})]})}}]),t}(c.Component)},47921:function(e,n,t){"use strict";t.d(n,{PB:function(){return U},A9:function(){return re},QV:function(){return R},Od:function(){return c},cI:function(){return ie},x6:function(){return _}});var r=t(42542),i=t(56484),o=t(56976),l=t(32463),a=t(14218),u=["children","style","loading"],c=function(e){var n=e.children,t=e.style,o=e.loading,c=void 0!==o&&o,s=(0,i.Z)(e,u);return(0,a.jsx)(l.aN,(0,r.Z)({loading:c,style:(0,r.Z)({display:"block"},t),bgColor:"rgba(255, 255, 255, 0.4)"},s,{children:(0,a.jsx)(a.Fragment,{children:n})}))},s=t(96234),d=t(77162),f=t.n(d),h=t(61677),p=t(35642),v=t(7896),m=t(31461),g=t(47303),x=t.n(g);var y=t(4673),b=t.n(y),j=["body","headers","requestType"],S={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function Z(e,n){void 0===n&&(n={});var t=n.method||"GET",r=n,i=r.body,o=r.headers,l=r.requestType,a=void 0===l?"json":l,u=(0,m.Z)(n,j),c=i.data;(null==c?void 0:c.swr_Rest_Time)&&delete c.swr_Rest_Time;var d=(0,v.Z)({},u,{url:e,method:t,data:(0,v.Z)({},i)});if("json"===a)d.headers=(0,v.Z)({"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},o||{}),d.data=JSON.stringify(i);else if("form"===a){var f=new FormData;Object.entries(i||{}).forEach((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];f.append(t,r)})),d.headers=(0,v.Z)({Accept:"application/json"},o||{}),d.data=f}else"urlencoded"===a&&(d.headers=(0,v.Z)({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Accept:"application/json"},o||{}),d.data=b().stringify(i,{arrayFormat:"repeat"}));return/(GET)/.test(t)&&(d.url=function(e,n){var t=e,r=[];return Object.keys(n).forEach((function(e){return r.push(e+"="+n[e])})),0===Object.keys(n).length?e:(!1===/\?/.test(t)?t=t+"?"+r.join("&"):t+="&"+r.join("&"),t)}(e,(0,v.Z)({},i)),delete d.body),x().request(d).then((function(e){return e.data})).catch((function(e){var n=e.response;if(n.status>=200&&n.status<300)return n;var t=n.status,r=S[t]||n.statusText,i=new Error(r);if(i.name=n.status,n.data)return n.data;throw i}))}var k=(0,o.createContext)({}),w=function(){return(0,o.useContext)(k)};var C=["style","columns","rowSelection","onPageChange","scroll"],O=function(e){var n=e.columns,t=e.rowSelection,u=void 0===t?{}:t,c=e.onPageChange,d=e.scroll,v=void 0===d?{}:d,m=(0,i.Z)(e,C),g=(0,o.useState)(1),x=(0,s.Z)(g,2),y=x[0],b=x[1],j=(0,o.useState)({data:[],total:0}),S=(0,s.Z)(j,2),k=S[0],O=S[1],P=w(),A=P.formatData,B=P.updateStore,M=P.query,E=P.key,I=P.searchValues,T=P.SWRConfiguration,V=void 0===T?{}:T,R=u.selectKey,_=u.type,N=void 0===_?"checkbox":_,D=u.defaultSelected,J=void 0===D?[]:D,z=v.x,F="checkbox"===N,W=(0,o.useMemo)((function(){return n.map((function(e){var n=e.align,t=void 0===n?"left":n,i=e.render;return(0,r.Z)({},e,{style:{textAlign:t},render:i||function(e){return(0,a.jsx)("div",{style:{textAlign:t},children:e})}})}))}),[n]),U=(0,o.useMemo)((function(){var e={};return n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.key||n.props.key;e[r]=n.props.initialValue}})),e}),[JSON.stringify(n)]),X=(0,o.useRef)(!1),Y=(0,o.useCallback)((function(){return M?M(y,!1===X.current?U:I):{page:1,pageSize:10}}),[y,JSON.stringify(U),JSON.stringify(I)]),H=Y().pageSize||10,q=(0,p.ZP)([E,{method:"POST",body:Y()}],Z,(0,r.Z)({revalidateOnFocus:!1,revalidateOnMount:!1},V)),G=q.data,L=q.isValidating,K=q.mutate;(0,o.useEffect)((function(){K(!1)}),[K]);var Q=A&&G?A(G).data:(null==G?void 0:G.data)||(null==k?void 0:k.data),$=function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t=!1);var r=(0,o.useState)(n),i=(0,s.Z)(r,2),l=i[0],a=i[1],u=(0,o.useMemo)((function(){return new Set(l)}),[l]),c=function(e){return u.has(e)},d=function(){e.forEach((function(e){u.delete(e)})),a(Array.from(u))},f=function(e){return t&&d(),u.add(e),a(Array.from(u))},h=function(e){return u.delete(e),a(Array.from(u))},p=function(){e.forEach((function(e){u.add(e)})),a(Array.from(u))},v=(0,o.useMemo)((function(){return e.every((function(e){return!u.has(e)}))}),[e,u]),m=(0,o.useMemo)((function(){return e.every((function(e){return u.has(e)}))&&!v}),[e,u,v]),g=(0,o.useMemo)((function(){return!v&&!m}),[v,m]);return{selected:l,noneSelected:v,allSelected:m,partiallySelected:g,setSelected:a,isSelected:c,select:f,unSelect:h,toggle:function(e){c(e)?h(e):f(e)},selectAll:p,unSelectAll:d,toggleAll:function(){return m?d():p()}}}(R&&Q?Q.map((function(e){return e[R]})):[],J,"radio"===N),ee=function(){var e=(0,h.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(1);case 2:K(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=(0,o.useCallback)(function(){var e=(0,h.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c&&c(n),e.next=3,b(n);case 3:K(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[b,c]);(0,o.useEffect)((function(){var e={};n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.key||n.props.key;e[r]=n.props.initialValue}}));var t={data:null==G?void 0:G.data,total:null==G?void 0:G.total,loading:L,onSearch:ee,selection:$,pageIndex:y};X.current||(X.current=!0,t.searchValues=e),B(t),G&&O(A?A(G):G)}),[JSON.stringify(G),L,JSON.stringify(n),y,JSON.stringify($)]);var te=[{title:F?function(){return(0,a.jsx)(l.XZ,{checked:$.allSelected,onClick:function(){$.toggleAll()}})}:null,key:"checked",render:function(e,n,t){return R?F?(0,a.jsx)(l.XZ,{checked:$.isSelected(t[R]),onClick:function(){$.toggle(t[R])}}):(0,a.jsx)(l.Y8,{onChange:function(){$.toggle(t[R])},checked:$.isSelected(t[R])}):null}}];return(0,a.jsx)("div",{style:{overflow:z?"scroll":"hidden"},children:(0,a.jsx)("div",{style:{width:z||"100%"},children:(0,a.jsx)(l.iA,(0,r.Z)({columns:R?te.concat(W):W,data:Q,footer:Q&&Q.length>0&&(0,a.jsx)(l.tl,{current:y,pageSize:H,total:A&&G?A(G).total:(null==G?void 0:G.total)||(null==k?void 0:k.total),divider:!0,onChange:function(e){ne(e)}})},m))})})},P=["option"],A=function(e){var n=e.option,t=(0,i.Z)(e,P);return(0,a.jsxs)(l.Ph,(0,r.Z)({},t,{children:[(0,a.jsx)(l.Ph.Option,{value:"",children:"\u8bf7\u9009\u62e9"}),n&&n.map((function(e){return(0,a.jsx)(l.Ph.Option,{value:e.value,children:e.label},e.value)}))]}))},B=["option"],M=function(e){var n=e.option,t=(0,i.Z)(e,B);return(0,a.jsx)(l.Ee,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(l.Y8,{value:e.value,children:e.label},e.value)}))}))},E=["widgetProps","key","widget","label","initialValue"],I={input:l.II,radio:M,checkbox:l.XZ,switch:l.rs,select:A,searchSelect:l.ul,textarea:l.gx,dateInput:l.Wr,timePicker:l.jI,monthPicker:l.lH},T=function(e){var n=w(),t=n.updateStore,u=n.onSearch,c=e.columns,s=e.searchBtns,d=e.onBeforeSearch,f=(0,o.useMemo)((function(){var e={};return c.forEach((function(n){if(n.props&&Object.keys(n.props).length>0){var t=n.props,o=t.widgetProps,l=t.key,u=t.widget,c=t.label,s=t.initialValue,d=(0,i.Z)(t,E),f=l||n.key,h=I[u];e[f]=(0,r.Z)({label:c||n.title,children:(0,a.jsx)(h,(0,r.Z)({},o))},d,{initialValue:s})}})),e}),[JSON.stringify(c)]),h=function(e){var n=e.initial,i=e.current;t({searchValues:(0,r.Z)({},n,i)}),u(i)},p=4-Object.keys(f).length%5;return(0,a.jsx)(l.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,t=e.current;d&&d({initial:n,current:t}),h({initial:n,current:t})},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},onChange:function(e){var n=e.initial,i=e.current;t({searchValues:(0,r.Z)({},n,i)})},fields:f,children:function(e){var n=e.fields;e.state,e.canSubmit,e.resetForm;return(0,a.jsx)("div",{children:(0,a.jsxs)(l.X2,{gutter:12,children:[Object.keys(n).map((function(e){return(0,a.jsx)(l.JX,{fixed:!0,style:{width:"20%"},children:n[e]},e)})),Array(p).fill("").map((function(e,n){return(0,a.jsx)(l.JX,{fixed:!0,style:{width:"20%"}},n.toString())})),(0,a.jsx)(l.JX,{align:"middle",style:{textAlign:"right",marginRight:14},children:s?s.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(o.Fragment,{children:e.render},n.toString()):(0,a.jsx)(l.zx,(0,r.Z)({style:{marginRight:5}},e,{children:e.label}),n.toString())})):(0,a.jsx)(l.zx,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})]})})}})},V=["table","columns","operateButtons","searchBtns","onBeforeSearch"],R=function(e){var n=o.useRef({}),t=e.table,u=e.columns,s=e.operateButtons,d=void 0===s?[]:s,f=e.searchBtns,h=e.onBeforeSearch,p=(0,i.Z)(e,V),v=t.key,m=t.reset,g=t.refersh,x=t.updateStore,y=t.formatData,b=t.query,j=t.searchValues,S=t.loading,Z=t.onSearch,w=t.SWRConfiguration,C=t.selection,P=t.pageIndex,A=(0,o.useMemo)((function(){return{data:[],reset:m,refersh:g,key:v,updateStore:x,formatData:y,query:b,searchValues:j,onSearch:Z,SWRConfiguration:w,selection:C,pageIndex:P}}),[JSON.stringify(t)]);return(0,a.jsx)(k.Provider,{value:(0,r.Z)({},A,{updateSearchValueRef:n}),children:(0,a.jsxs)(c,{loading:S,children:[(0,a.jsx)(T,{columns:u,searchBtns:f,onBeforeSearch:h}),d.length>0&&(0,a.jsx)("div",{style:{background:"#fff",padding:10},children:d.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(o.Fragment,{children:e.render},n.toString()):(0,a.jsx)(l.zx,(0,r.Z)({},e,{children:e.label}),n.toString())}))}),(0,a.jsx)(O,(0,r.Z)({columns:u},p))]})})},_=function(e,n){void 0===n&&(n={});var t=n,i=t.formatData,l=t.query,a=t.SWRConfiguration,u=(0,o.useState)({pageIndex:1,total:1,data:[],searchValues:{},loading:!1,selection:{selected:[],noneSelected:!1,allSelected:!1,partiallySelected:!1,setSelected:function(){return null},isSelected:function(){return null},select:function(){return null},unSelect:function(){return null},toggle:function(){return null},selectAll:function(){return null},unSelectAll:function(){return null},toggleAll:function(){return null}}}),c=(0,s.Z)(u,2),d=c[0],f=c[1];return(0,r.Z)({key:e,reset:function(){},refersh:function(){},onSearch:function(){},formatData:i,query:l,updateStore:function(e){f((0,r.Z)({},d,e))},SWRConfiguration:a},d)},N=function(e){var n=e.path,t=e.disabled,r=e.children;if(AUTH){var i=function(e){if(AUTH){var n=[],t=sessionStorage.getItem("auth");return"local"===STORAGE&&(t=localStorage.getItem("auth")),t&&(n=JSON.parse(t)),!!n.find((function(n){return n===e}))}return!0}(n);return i?r:t&&o.isValidElement(r)?o.cloneElement(r,{disabled:t}):(0,a.jsx)(o.Fragment,{})}return r},D=["path","children"],J=["visible","title","onClose","width","buttons","children"],z=["label","show","path","disabled"];function F(e){var n=e.path,t=e.children,o=(0,i.Z)(e,D);return n?(0,a.jsx)(N,(0,r.Z)({path:n},o,{children:t})):(0,a.jsx)(a.Fragment,{children:t})}function W(e){var n=e.visible,t=e.title,o=void 0===t?"":t,u=e.onClose,c=void 0===u?null:u,s=e.width,d=void 0===s?800:s,f=e.buttons,h=void 0===f?[]:f,p=e.children,v=(0,i.Z)(e,J);return(0,a.jsx)(l.dy,(0,r.Z)({title:o,isOpen:n,onClose:c&&c,size:d,bodyStyle:{padding:"0 10px 45px 10px"},footer:h.map((function(e,n){var t=e.label,o=void 0===t?"":t,u=e.show,c=void 0===u||u,s=e.path,d=e.disabled,f=void 0!==d&&d,h=(0,i.Z)(e,z);return c&&(0,a.jsx)(F,{path:s,disabled:f,children:(0,a.jsx)(l.zx,(0,r.Z)({},h,{children:o}))},n)}))},v,{children:p}))}var U=(0,o.memo)(W),X=(0,o.createContext)({});var Y=function(e){var n=e.formfields,t=e.onSubmit,i=e.onChange,u=e.buttonsContainer,c=e.showSaveButton,s=void 0!==c&&c,d=e.showResetButton,f=void 0!==d&&d,h=e.saveButtonProps,p=e.resetButtonProps,v=(0,o.useContext)(X).clickRef;return(0,a.jsx)(l.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,r=e.current;return null==t?void 0:t(n,r)},onChange:function(e){var n=e.initial,t=e.current;return null==i?void 0:i(n,t)},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},fields:n,children:function(e){var n=e.fields,t=(e.state,e.canSubmit),i=e.resetForm;return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)(l.X2,{gutter:10,children:Object.keys(n).map((function(e){var t,r,i=(null==(t=n[e])||null==(r=t.props)?void 0:r.span)||"8";return(0,a.jsx)(l.JX,{span:i,children:n[e]},e)}))}),(0,a.jsxs)("div",{className:"w-form-item-center",style:(0,r.Z)({},u),children:[s?(0,a.jsx)(l.zx,(0,r.Z)({},h,{ref:v,disabled:!t(),htmlType:"submit",children:(null==h?void 0:h.label)||"\u63d0\u4ea4"})):(0,a.jsx)(l.zx,(0,r.Z)({style:{display:"none"},ref:v,disabled:!t(),htmlType:"submit"},h,{children:(null==h?void 0:h.label)||"\u63d0\u4ea4"})),(0,a.jsx)(l.zx,(0,r.Z)({style:{display:f?"flex":"none"},onClick:i},p,{children:(null==p?void 0:p.label)||"\u91cd\u7f6e"}))]})]})}})},H=t(41361),q=["uploadType","value","readonly","maxNumber"],G=function(e){var n=e.uploadType,t=e.value,u=e.readonly,c=void 0!==u&&u,d=e.maxNumber,f=(0,i.Z)(e,q),h=o.useState(!1),p=(0,s.Z)(h,2),v=p[0],m=p[1],g=o.useState(""),x=(0,s.Z)(g,2),y=x[0],b=x[1];return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)(l.S2,(0,r.Z)({uploadType:n,readonly:c,value:t,maxNumber:d,onPreview:function(e){b(null==e?void 0:e.dataURL),m(!0)}},f,{children:c?null:"card"===n?(0,a.jsx)(l.JO,{type:"plus"}):"picture"===n||"text"===n?(0,a.jsx)(l.zx,{type:"primary",children:"\u65b0\u589e"}):null})),(0,a.jsx)(l.u_,{isOpen:v,onClosed:function(){return m(!1)},width:600,confirmButtonProps:{style:{display:"none"}},children:(0,a.jsx)("img",{crossOrigin:"anonymous",src:y,alt:"",style:{width:"100%",height:"100%"}})})]})};function L(e,n,t,i){var u="";if("radio"===e||"searchSelect"===e||"select"===e){var c=t.filter((function(e){return e.value===n}))||[];c.length>0&&(u=c[0].label)}else if("checkbox"===e){var s,d=(0,H.Z)(t);try{for(d.s();!(s=d.n()).done;){var f=s.value;n.includes(f.value)&&(u+=""+f.label)}}catch(p){d.e(p)}finally{d.f()}}else if("switch"===e)u=n?"\u662f":"\u5426";else if("timePicker"===e)u=n&&(0,l.zW)("HH:mm:ss",new Date(n));else if("monthPicker"===e)u=n&&(0,l.zW)("YYYY-MM",new Date(n));else if("dateInput"===e)u=n&&(0,l.zW)((null==i?void 0:i.format)||"YYYY-MM-DD",new Date(n));else if("upload"===e){var h={readonly:!0,value:n,uploadType:null==i?void 0:i.uploadType};u=(0,a.jsx)(G,(0,r.Z)({},h))}else if("selectMultiple"===e){u=(n&&n.length>0&&n.map((function(e){return e.label}))||[]).join(";")}else u="string"===typeof n||"number"===typeof n||o.isValidElement(n)?n:"";return u}var K=function(e){var n=e.title,t=e.formDatas,i=e.readOnlyProps;return(0,a.jsx)(l.w5,(0,r.Z)({bordered:!0,title:n},i,{children:null==t?void 0:t.map((function(e,n){var t=e.hide,r=e.label,i=e.widget,o=e.initialValue,u=void 0===o?"":o,c=e.option,s=void 0===c?[]:c,d=e.readSpan,f=void 0===d?1:d,h=e.widgetProps,p=void 0===h?{}:h;return t?null:(0,a.jsx)(l.w5.Item,{span:f,label:r,children:L(i,u,s,p)},n)}))}))},Q=["option"],$=function(e){var n=e.option,t=(0,i.Z)(e,Q);return(0,a.jsx)(l.XZ.Group,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(l.XZ,{value:e.value,children:e.label},e.value)}))}))},ee=t(68079);var ne=function(e){var n=e.option,t=void 0===n?[]:n,r=e.onChange,i=e.onSelect,u=e.onSearch,c=e.onBlur,d=e.onClear,f=e.value,h=void 0===f?[]:f,p=e.loading,v=void 0===p||p,m=e.disabled,g=void 0!==m&&m,x=e.placeholder,y=void 0===x?"\u8bf7\u9009\u62e9":x,b=e.allowClear,j=void 0!==b&&b,S=e.noContent,Z=e.showSearch,k=void 0!==Z&&Z,w=e.maxCount,C=void 0===w?3:w,O=(0,o.useState)(h),P=(0,s.Z)(O,2),A=P[0],B=P[1],M=(0,o.useState)(""),E=(0,s.Z)(M,2),I=E[0],T=E[1],V=(0,o.useState)(!1),R=(0,s.Z)(V,2),_=R[0],N=R[1],D=A.length===C,J=function(e,n){var t=n.target;"search"===e&&(N(!0),T(t.value),null==u||u(t.value)),"blur"===e&&(T(""),N(!1),null==c||c()),"clean"===e&&(T(""),B([]),N(!1),null==d||d([]))},z=o.useMemo((function(){var e=A&&A.length>0&&A.map((function(e){return e.label}))||[];return _?I:e.join(";")}),[A,I,_]);function F(){return!_&&j&&A.length>0?"close":_&&v?"loading":"search"}return(0,a.jsx)(l.J2,{trigger:"focus",placement:"bottomLeft",content:t&&t.length>0?(0,a.jsx)(l.v2,{style:{minHeight:25,maxHeight:150,overflowY:"scroll",width:200},children:t.map((function(e,n){var o=A&&-1!==A.findIndex((function(n){return n.value===e.value}));return(0,a.jsx)(l.v2.Item,{style:{marginBottom:t.length-1===n?0:5},active:o,text:e.label,disabled:e.disabled,onClick:function(n){N(!1),n.preventDefault(),function(e){var n=(0,ee.Z)(A);n.find((function(n){return n.value===e.value}))||D?n=n.filter((function(n){return n.value!==e.value})):n.push(e),B(n),null==r||r(n),null==i||i(e)}(e)}},e.value)}))}):S||(0,a.jsx)(l.aN,{loading:v,color:"black",children:(0,a.jsxs)("div",{style:{padding:10,height:70,width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:12,color:"#888"},children:[(0,a.jsx)(l.JO,{type:"file-unknown",style:{fontSize:20}}),"\u6682\u65e0\u6570\u636e"]})}),visibleArrow:!1,children:(0,a.jsx)(l.II,{readOnly:!k,disabled:g,placeholder:y,value:z,onChange:function(e){return J("search",e)},onBlur:function(e){return J("blur",e)},addonAfter:(0,a.jsx)(l.JO,{type:F(),spin:v,onClick:"close"===F()?J.bind(this,"clean"):void 0})})})},te=["hide","widgetProps","key","widget","label","initialValue"];function re(e){var n,t=e.formDatas,u=void 0===t?[]:t,c=e.title,s=void 0===c?"":c,d=e.formType,f=void 0===d?"card":d,h=e.readOnly,p=void 0!==h&&h,v=e.customWidgetsList,m=void 0===v?{}:v,g=e.form,x=e.cardProps,y=void 0===x?{}:x,b=e.collapseProps,j=void 0===b?{}:b,S=e.collapsePanelProps,Z=void 0===S?{}:S,k=(0,o.useMemo)((function(){return function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={});var o=(0,r.Z)({input:l.II,radio:M,checkbox:$,switch:l.rs,select:A,searchSelect:l.ul,selectMultiple:ne,textarea:l.gx,dateInput:l.Wr,timePicker:l.jI,monthPicker:l.lH,upload:G},t),u={};return n.forEach((function(n){if(e||delete n.readSpan,n){var t=n.hide,l=void 0!==t&&t,c=n.widgetProps,s=n.key,d=n.widget,f=n.label,h=n.initialValue,p=(0,i.Z)(n,te);if(!l){var v=s,m=o[d];u[v]=(0,r.Z)({label:f,children:(0,a.jsx)(m,(0,r.Z)({},c))},p,{initialValue:h})}}})),u}(p,u,m)}),[u]),w=g||{},C=w.submitvalidate,O=w.clickRef,P=(0,o.useMemo)((function(){return{clickRef:O,submitvalidate:C}}),[g]),B=(0,r.Z)({},e,{formfields:k}),E=p?void 0:s,I=p?(0,a.jsx)(K,(0,r.Z)({},e)):(0,a.jsx)(Y,(0,r.Z)({},B));return n="card"===f?(0,a.jsx)(l.Zb,(0,r.Z)({title:E},y,{children:I})):"collapse"===f?(0,a.jsx)(l.UO,(0,r.Z)({title:E,activeKey:["1"]},j,{children:(0,a.jsx)(l.UO.Panel,(0,r.Z)({header:s},Z,{children:I}),"1")})):I,(0,a.jsx)(X.Provider,{value:P,children:n})}var ie=function(){var e=(0,o.useRef)();return{clickRef:e,submitvalidate:function(){return e.current.click()}}}},53260:function(){}}]);
//# sourceMappingURL=243.fce6bfa7.chunk.js.map