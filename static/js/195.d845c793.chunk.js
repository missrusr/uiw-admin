(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},13094:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(33028),o=t(59740),i=t(9249),c=t(87371),s=t(45754),l=t(37687),a=t(56976),d=t(21237),u=t(60036),f=t(29693),p=t(14218),h=["dependencies","codePen"];function m(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,h),c=(0,r.Z)({},i);return t&&(c.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:c.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(f.Z,(0,r.Z)((0,r.Z)({},c),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:a},a),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",g=function(e){var n=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:v,children:[n&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},w="index_markdown__hcQCp",k=t(68079),x=t(96234),b=t(7896),j="esm_navbox__Zvl4q",Z="esm_active__jkS6S",_=t(60460),y=function(e){var n,t;for(n=0;n<e.length&&!e[n];n++);for(t=e.length-1;t>=0&&!e[t];t--);return e.slice(n,t+1)},S=function(e){var n=e.markdown,t=e.headingTopOffset,r=void 0===t?100:t,o=(0,a.useState)(0),i=(0,x.Z)(o,2),c=i[0],s=i[1],l=(0,a.useRef)(null),d=(0,a.useMemo)((function(){var e=n.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,r=e.match(t);if(!r)return[];var o=r.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var c=[],s=0;s<o.length;s++){for(var l=o[s],a=l.level;c.length&&c[c.length-1].level>a;)c.pop();if(0!==c.length){var d=c[c.length-1].arr.slice();d[a-1]+=1,c.push({level:a,arr:d}),l.listNo=y(d).join(".")}else{var u=new Array(i).fill(0);u[a-1]+=1,c.push({level:a,arr:u}),l.listNo=y(u).join(".")}}return o}),[n]);(0,a.useEffect)((function(){d&&(l.current&&clearTimeout(l.current),l.current=setTimeout((function(){m(),document.addEventListener("scroll",h,!1)}),500))}),[d]);var u=(0,a.useCallback)((function(){var e=[];return d&&d.forEach((function(n){var t=(0,k.Z)(document.querySelectorAll("h"+n.level)).find((function(e){return e.innerText.trim()===n.text.trim()}));t&&e.push({dataId:n.text,offsetTop:t.offsetTop,listNo:n.listNo})})),e}),[d]),f=function(e){var n=document.querySelector("#"+e);n&&"number"===typeof n.offsetTop&&function(e,n,t){if(void 0===t&&(t=0),e)if("function"===typeof e.scrollTo){var r={top:n,left:t};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=n,document.documentElement.scrollLeft=t):(e.scrollTop=n,e.scrollLeft=t)}(window,n.offsetTop-r,0)},h=(0,_.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=u().map((function(n){return(0,b.Z)({},n,{distanceToTop:Math.abs(e+r-n.offsetTop)})})),t=n.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,k.Z)(t)),i=n.find((function(e){return e.distanceToTop===o}));i&&s(i.listNo)}),200),m=function(){window.location.hash&&f(window.location.hash.replace("#",""))};return(0,p.jsx)("div",{className:j,children:d&&d.map((function(e,n){return(0,p.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:c===e.listNo?Z:"",onClick:function(){var n,t=e.text.toLowerCase().replace(" ","-");f(t),n=t,window.history.replaceState({},"",""+window.location.pathname+window.location.search+"#"+n),s(e.listNo)},children:[e.listNo," ",e.text]},n)}))})},T=["inline","node"],N=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},E=function(e){(0,s.Z)(t,e);var n=(0,l.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(u.X2,{children:[(0,p.jsx)(u.JX,{children:(0,p.jsx)(d.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:w,components:{code:function(n){var t=n.inline,i=n.node,c=(0,o.Z)(n,T),s=c,l=s.noPreview,a=s.noScroll,d=s.bgWhite,u=s.noCode,f=s.codePen,h=s.codeSandboxOption;if(t)return(0,p.jsx)("code",(0,r.Z)({},c));var v={noPreview:l,noScroll:a,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:h};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,p.jsx)("code",(0,r.Z)({},c)):(0,p.jsx)(m,{code:N(i.children),dependencies:e.dependencies,noPreview:l,noScroll:a,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:h})}}})}),(0,p.jsx)(u.JX,{fixed:!0,style:{width:150},children:(0,p.jsx)(S,{markdown:this.state.mdStr})})]}),(0,p.jsx)(g,{editorUrl:this.editorUrl})]})}}]),t}(a.Component)},34639:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(87371),o=t(9249),i=t(45754),c=t(37687),s=function(e){(0,i.Z)(s,e);var n=(0,c.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).editorUrl="/packages/uiw-admin/README.md",e.getMdStr=function(){return t.e(322).then(t.bind(t,72322))},e}return(0,r.Z)(s)}(t(13094).Z)}}]);
//# sourceMappingURL=195.d845c793.chunk.js.map