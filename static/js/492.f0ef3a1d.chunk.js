(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[492],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},2627:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(33028),o=t(59740),i=t(9249),d=t(87371),c=t(45754),s=t(37687),a=t(56976),l=t(26956),u=t(44819),p=t(14218),h=["dependencies","codePen"];function f(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,h),d=(0,r.Z)({},i);return t&&(d.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:d.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(u.Z,(0,r.Z)((0,r.Z)({},d),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:a},a),style:{marginBottom:0}}))}var m="index_footer__Fp4ea",k=function(e){var n=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:m,children:[n&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},v="index_markdown__hcQCp",b=["inline","node"],g=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},x=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,d.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(l.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:v,components:{code:function(n){var t=n.inline,i=n.node,d=(0,o.Z)(n,b),c=d,s=c.noPreview,a=c.noScroll,l=c.bgWhite,u=c.noCode,h=c.codePen,m=c.codeSandboxOption;if(t)return(0,p.jsx)("code",(0,r.Z)({},d));var k={noPreview:s,noScroll:a,bgWhite:l,noCode:u,codePen:h,codeSandboxOption:m};return 0===Object.keys(k).filter((function(e){return void 0!==k[e]})).length?(0,p.jsx)("code",(0,r.Z)({},d)):(0,p.jsx)(f,{code:g(i.children),dependencies:e.dependencies,noPreview:s,noScroll:a,bgWhite:l,noCode:u,codePen:h,codeSandboxOption:m})}}}),(0,p.jsx)(k,{editorUrl:this.editorUrl})]})}}]),t}(a.Component)},70122:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(87371),o=t(9249),i=t(45754),d=t(37687),c=function(e){(0,i.Z)(c,e);var n=(0,d.Z)(c);function c(){var e;(0,o.Z)(this,c);for(var r=arguments.length,i=new Array(r),d=0;d<r;d++)i[d]=arguments[d];return(e=n.call.apply(n,[this].concat(i))).editorUrl="/packages/components/src/ProForm/README.md",e.getMdStr=function(){return t.e(523).then(t.bind(t,81523))},e}return(0,r.Z)(c)}(t(2627).Z)}}]);
//# sourceMappingURL=492.f0ef3a1d.chunk.js.map