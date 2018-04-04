(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=E(a(186)),n=E(a(53)),r=E(a(51)),i=E(a(52)),d=E(a(50)),o=E(a(49)),u=a(1),f=E(u),s=E(a(238)),c=E(a(175)),m=a(174),p=E(a(176)),h=a(403),v=a(272),g=E(a(270)),y=E(a(267));function E(e){return e&&e.__esModule?e:{default:e}}var b=m.Layout.Row,x=m.Layout.Col,_={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:24}},k=function(e){function t(e){(0,r.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.onClick=function(e){a.setState({btnactive:e})},a.onClickDate=function(e){a.setState({dateactive:e})},a.state={btnactive:0,dateactive:0},a}return(0,o.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return f.default.createElement(p.default,{title:"数据分析",showBreadcrumb:!1},f.default.createElement(b,null,f.default.createElement(x,_,f.default.createElement(h.ChartCard,{bordered:!1,title:"总销售额",action:f.default.createElement(m.Tooltip,{content:"指标说明",className:y.default.tooltip},f.default.createElement(m.Icon,{type:"information-o"})),total:(0,h.yuan)(126560),footer:f.default.createElement(h.Field,{label:"日均销售额",value:"￥"+(0,s.default)(12423).format("0,0")}),contentHeight:46},f.default.createElement(g.default,{flag:"up",style:{marginRight:16}},"周同比",f.default.createElement("span",{className:y.default.trendText},"12%")),f.default.createElement(g.default,{flag:"down"},"日环比",f.default.createElement("span",{className:y.default.trendText},"11%")))),f.default.createElement(x,_,f.default.createElement(h.ChartCard,{bordered:!1,title:"访问量",action:f.default.createElement(m.Tooltip,{content:"指标说明",className:y.default.tooltip},f.default.createElement(m.Icon,{type:"information-o"})),total:(0,s.default)(8846).format("0,0"),footer:f.default.createElement(h.Field,{label:"日访问量",value:(0,s.default)(1234).format(0,0)}),contentHeight:46},f.default.createElement(h.MiniArea,{color:"#975FE4",height:46,data:v.visitData}))),f.default.createElement(x,_,f.default.createElement(h.ChartCard,{bordered:!1,title:"支付笔数",action:f.default.createElement(m.Tooltip,{content:"指标说明",className:y.default.tooltip},f.default.createElement(m.Icon,{type:"information-o"})),total:(0,s.default)(6560).format("0,0"),footer:f.default.createElement(h.Field,{label:"转化率",value:"60%"}),contentHeight:46},f.default.createElement(h.MiniBar,{height:46,data:v.visitData}))),f.default.createElement(x,_,f.default.createElement(h.ChartCard,{bordered:!1,title:"运营活动效果",action:f.default.createElement(m.Tooltip,{title:"指标说明"},f.default.createElement(m.Icon,{type:"info-circle-o"})),total:"78%",footer:f.default.createElement("div",{style:{whiteSpace:"nowrap",overflow:"hidden"}},f.default.createElement(g.default,{flag:"up",style:{marginRight:16}},"周同比",f.default.createElement("span",{className:y.default.trendText},"12%")),f.default.createElement(g.default,{flag:"down"},"日环比",f.default.createElement("span",{className:y.default.trendText},"11%"))),contentHeight:46},f.default.createElement(h.MiniProgress,{percent:78,strokeWidth:8,target:80,color:"#13C2C2"}))),f.default.createElement(x,{span:"24"},f.default.createElement(m.Card,{bordered:!1,bodyStyle:{padding:0},style:{margin:"0 9px"}},f.default.createElement("div",{className:y.default.salesCard},f.default.createElement(b,{className:y.default.row},["销售额","访问量"].map(function(t,a){return f.default.createElement(x,{span:"4",key:a},f.default.createElement("div",{className:(0,c.default)(y.default.tabModal,(0,l.default)({},""+y.default.moduleActive,e.state.btnactive===a)),onClick:e.onClick.bind(e,a)},f.default.createElement("div",null,t)))}),f.default.createElement("div",{className:y.default.datePicker},["今天","本周","本月","本年"].map(function(t,a){return f.default.createElement("span",{key:a,className:(0,c.default)((0,l.default)({},""+y.default.dateActive,e.state.dateactive===a)),onClick:e.onClickDate.bind(e,a)},t)}),f.default.createElement(m.DatePicker,{showToday:!0,style:{width:125}}),f.default.createElement(m.DatePicker,{showToday:!0,style:{width:125}}))),this.state.btnactive?f.default.createElement(b,{type:"flex"},f.default.createElement(x,{xl:16,lg:12,md:12,sm:24,xs:24},f.default.createElement("div",{className:y.default.salesBar},f.default.createElement(h.Bar,{height:295,title:"销售额趋势",data:v.salesData}))),f.default.createElement(x,{xl:8,lg:12,md:12,sm:24,xs:24},f.default.createElement("div",{className:y.default.salesRank},f.default.createElement("h4",{className:y.default.rankingTitle},"门店销售额排名"),f.default.createElement("ul",{className:y.default.rankingList},v.rankingListData.map(function(e,t){return f.default.createElement("li",{key:e.title},f.default.createElement("span",{className:t<3?y.default.active:""},t+1),f.default.createElement("span",null,e.title),f.default.createElement("span",null,(0,s.default)(e.total).format("0,0")))}))))):f.default.createElement(b,{type:"flex"},f.default.createElement(x,{xl:16,lg:12,md:12,sm:24,xs:24},f.default.createElement("div",{className:y.default.salesBar},f.default.createElement(h.Bar,{height:296,title:"销售额趋势",data:v.salesData}))),f.default.createElement(x,{xl:8,lg:12,md:12,sm:24,xs:24},f.default.createElement("div",{className:y.default.salesRank},f.default.createElement("h4",{className:y.default.rankingTitle},"门店销售额排名"),f.default.createElement("ul",{className:y.default.rankingList},v.rankingListData.map(function(e,t){return f.default.createElement("li",{key:e.title},f.default.createElement("span",{className:t<3?y.default.active:""},t+1),f.default.createElement("span",null,e.title),f.default.createElement("span",null,(0,s.default)(e.total).format("0,0")))}))))))))))}}]),t}(u.Component);t.default=k},198:function(e,t,a){e.exports={miniChart:"miniChart1JeLS",chartContent:"chartContent1JeLS",chartLoading:"chartLoading1JeLS"}},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=!0;for(var l in e)"function"==typeof e[l]&&"function"==typeof t[l]?e[l].toString()!==t[l].toString&&(a=!1):e[l]!==t[l]&&(a=!1);return a}},267:function(e,t,a){e.exports={trendText:"trendText3pU2g",rankingList:"rankingList3pU2g",active:"active3pU2g",salesCard:"salesCard3pU2g",row:"row3pU2g",datePicker:"datePicker3pU2g",dateActive:"dateActive3pU2g",tabModal:"tabModal3pU2g",moduleActive:"moduleActive3pU2g",salesBar:"salesBar3pU2g",salesRank:"salesRank3pU2g",salesExtra:"salesExtra3pU2g",rankingTitle:"rankingTitle3pU2g",salesExtraWrap:"salesExtraWrap3pU2g"}},269:function(e,t,a){e.exports={trendItem:"trendItem2b5N_",up:"up2b5N_",down:"down2b5N_",trendItemGrey:"trendItemGrey2b5N_"}},270:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(28)),n=f(a(186)),r=f(a(173)),i=f(a(1)),d=a(174),o=f(a(175)),u=f(a(269));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.colorful,a=void 0===t||t,f=e.flag,s=e.children,c=e.className,m=(0,r.default)(e,["colorful","flag","children","className"]),p=(0,o.default)(u.default.trendItem,(0,n.default)({},u.default.trendItemGrey,!a),c);return i.default.createElement("div",(0,l.default)({},m,{className:p,title:"string"==typeof s?s:""}),i.default.createElement("span",{className:u.default.value},s),f&&i.default.createElement("span",{className:u.default[f]},i.default.createElement(d.Icon,{type:"caret-"+f})))}},272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rankingListData=t.salesData=t.visitData=void 0;for(var l=a(271),n=[],r=(new Date).getTime(),i=[7,5,4,2,4,7,5,6,5,9,6,3,1,5,3,6,5],d=0;d<i.length;d+=1)n.push({x:l.DateTime.fromMillis(r+864e5*d).toFormat("yyyy-LL-dd"),y:i[d]});for(var o=[],u=0;u<12;u+=1)o.push({x:u+1+"月",y:Math.floor(1e3*Math.random())+200});for(var f=[],s=0;s<7;s+=1)f.push({title:"\b\b明珠路 "+s+" 号店",total:323234});t.visitData=n,t.salesData=o,t.rankingListData=f},274:function(e,t,a){e.exports={miniProgress:"miniProgress38I3S",tooltip:"tooltip38I3S","w-tooltip-children":"w-tooltip-children38I3S",progressWrap:"progressWrap38I3S",progress:"progress38I3S",target:"target38I3S"}},275:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(1)),n=a(174),r=i(a(274));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.target,a=e.color,i=void 0===a?"rgb(19, 194, 194)":a,d=e.strokeWidth,o=e.percent;return l.default.createElement("div",{className:r.default.miniProgress},l.default.createElement(n.Tooltip,{content:"目标值:"+t+"%",className:r.default.tooltip},l.default.createElement("div",{className:r.default.target,style:{left:t?t+"%":null}},l.default.createElement("span",{style:{backgroundColor:i||null}}),l.default.createElement("span",{style:{backgroundColor:i||null}}))),l.default.createElement("div",{className:r.default.progressWrap},l.default.createElement("div",{className:r.default.progress,style:{backgroundColor:i||null,width:o?o+"%":null,height:d||null}})))}},277:function(e,t,a){e.exports={field:"field14ri-"}},278:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(28)),n=d(a(173)),r=d(a(1)),i=d(a(277));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.label,a=e.value,d=(0,n.default)(e,["label","value"]);return r.default.createElement("div",(0,l.default)({className:i.default.field},d),r.default.createElement("span",null,t),r.default.createElement("span",null,a))}},280:function(e,t,a){e.exports={card:"card2mo34",chartCard:"chartCard2mo34",chartTop:"chartTop2mo34",chartTopMargin:"chartTopMargin2mo34",chartTopHasMargin:"chartTopHasMargin2mo34",metaWrap:"metaWrap2mo34",avatar:"avatar2mo34",meta:"meta2mo34",action:"action2mo34",total:"total2mo34",content:"content2mo34",contentFixed:"contentFixed2mo34",footer:"footer2mo34",footerMargin:"footerMargin2mo34"}},281:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(28)),n=s(a(186)),r=s(a(173)),i=s(a(1)),d=s(a(175)),o=s(a(0)),u=a(174),f=s(a(280));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.contentHeight,a=e.title,o=e.avatar,s=e.action,c=e.total,m=e.footer,p=e.children,h=(0,r.default)(e,["contentHeight","title","avatar","action","total","footer","children"]),v=i.default.createElement("div",{className:f.default.chartCard},i.default.createElement("div",{className:(0,d.default)(f.default.chartTop,(0,n.default)({},f.default.chartTopMargin,!p&&!m))},i.default.createElement("div",{className:f.default.avatar},o),i.default.createElement("div",{className:f.default.metaWrap},i.default.createElement("div",{className:f.default.meta},i.default.createElement("span",{className:f.default.title},a),i.default.createElement("span",{className:f.default.action},s)),void 0!==c&&i.default.createElement("div",{className:f.default.total,dangerouslySetInnerHTML:{__html:c}}))),p&&i.default.createElement("div",{className:f.default.content,style:{height:t||"auto"}},i.default.createElement("div",{className:t&&f.default.contentFixed},p)),m&&i.default.createElement("div",{className:(0,d.default)(f.default.footer,(0,n.default)({},f.default.footerMargin,!p))},m));return i.default.createElement(u.Card,(0,l.default)({bodyStyle:{padding:"20px 24px 8px 24px"},className:f.default.card},h),v)};t.default=c,c.propTypes={total:o.default.oneOfType([o.default.element,o.default.number,o.default.string]),contentHeight:o.default.number},c.defaultProps={}},282:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=p(a(53)),n=p(a(51)),r=p(a(52)),i=p(a(50)),d=p(a(49)),o=a(1),u=p(o),f=p(a(204)),s=p(a(0)),c=p(a(199)),m=p(a(198));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.renderChart(this.props.data)}},{key:"componentWillReceiveProps",value:function(e){(0,c.default)(this.props,e)||this.renderChart(e.data)}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.destroy()}},{key:"handleRef",value:function(e){this.node=e}},{key:"renderChart",value:function(e){var t=this.props,a=t.height,l=void 0===a?0:a,n=t.fit,r=void 0===n||n,i=t.color,d=void 0===i?"#1890FF":i;if(e&&!(e&&e.length<1)){this.node.innderHTML="";var o=new(0,f.default.Frame)(e),u=new f.default.Chart({container:this.node,forceFit:r,height:l+54,plotCfg:{margin:[36,5,30,5]},legend:null});u.axis(!1),u.source(o,{x:{type:"cat"},y:{min:0}}),u.tooltip({title:null,crosshairs:!1,map:{name:"x"}}),u.interval().position("x*y").color(d),u.render(),this.chart=u}}},{key:"render",value:function(){var e=this.props.height;return u.default.createElement("div",{className:m.default.miniChart,style:{height:e}},u.default.createElement("div",{className:m.default.chartContent},u.default.createElement("div",{ref:this.handleRef.bind(this)})))}}]),t}(o.PureComponent);t.default=h,h.propTypes={color:s.default.bool,height:s.default.number,data:s.default.array},h.defaultProps={}},283:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=h(a(28)),n=h(a(53)),r=h(a(51)),i=h(a(52)),d=h(a(50)),o=h(a(49)),u=a(1),f=h(u),s=h(a(204)),c=h(a(0)),m=h(a(199)),p=h(a(198));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.renderChart(this.props.data)}},{key:"componentWillReceiveProps",value:function(e){(0,m.default)(this.props,e)||this.renderChart(e.data)}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.destroy()}},{key:"handleRef",value:function(e){this.node=e}},{key:"renderChart",value:function(e){var t=this.props,a=t.height,n=void 0===a?0:a,r=t.fit,i=void 0===r||r,d=t.color,o=t.borderWidth,u=void 0===o?2:o,f=t.line,c=t.xAxis,m=t.yAxis,p=t.animate,h=void 0===p||p,v=this.props.borderColor||d;if(e&&!(e&&e.length<1)){this.node.innerHTML="";var g=new s.default.Chart({container:this.node,forceFit:i,height:n+54,animate:h,plotCfg:{margin:[36,5,30,5]},legend:null});c||m||g.axis(!1),c?g.axis("x",c):g.axis("x",!1),m?g.axis("y",m):g.axis("y",!1);var y={x:(0,l.default)({type:"cat",range:[0,1]},c),y:(0,l.default)({min:0},m)};g.tooltip({title:null,crosshairs:!1,map:{title:null,name:"x",value:"y"}});var E=g.createView();if(E.source(e,y),E.area().position("x*y").color(d).shape("smooth").style({fillOpacity:1}),f){var b=g.createView();b.source(e.dataConfig),b.line().position("x*y").color(v).size(u).shape("smooth"),b.tooltip(!1)}g.render(),this.chart=g}}},{key:"render",value:function(){var e=this.props.height;return f.default.createElement("div",{className:p.default.miniChart,style:{height:e}},f.default.createElement("div",{className:p.default.chartContent},f.default.createElement("div",{ref:this.handleRef.bind(this)})))}}]),t}(u.PureComponent);t.default=v,v.propTypes={color:c.default.string,height:c.default.number,borderColor:c.default.string,line:c.default.bool,animate:c.default.bool,xAxis:c.default.shape({title:c.default.any,line:c.default.any,gridAlign:c.default.any,labels:c.default.any,tickLine:c.default.any,grid:c.default.any}),yAxis:c.default.shape({title:c.default.any,line:c.default.any,gridAlign:c.default.any,labels:c.default.any,tickLine:c.default.any,grid:c.default.any}),data:c.default.array},v.defaultProps={borderColor:"#1890FF",color:"rgba(24, 144, 255, 0.2)"}},401:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,r,i=b(a(400)),d=b(a(53)),o=b(a(51)),u=b(a(52)),f=b(a(50)),s=b(a(49)),c=a(1),m=b(c),p=b(a(204)),h=b(a(397)),v=b(a(286)),g=b(a(0)),y=b(a(199)),E=b(a(198));function b(e){return e&&e.__esModule?e:{default:e}}var x,_,k,C,N,M,P=(l=(0,v.default)(),n=(0,h.default)(200),r=function(e){function t(e){(0,o.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return a.state={autoHideXLables:!1},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.renderChart(this.props.data)}},{key:"componentWillReceiveProps",value:function(e){(0,y.default)(this.props,e)||this.renderChart(e.data)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize),this.chart&&this.chart.destroy(),this.resize.cancel()}},{key:"resize",value:function(){if(this.node){var e=this.node.parentNode.clientWidth,t=this.props,a=t.data,l=void 0===a?[]:a,n=t.autoLabel;if(void 0===n||n){var r=30*l.length,i=this.state.autoHideXLabels;e<=r?i||(this.setState({autoHideXLabels:!0}),this.renderChart(l)):i&&(this.setState({autoHideXLabels:!1}),this.renderChart(l))}}}},{key:"handleRef",value:function(e){this.node=e}},{key:"renderChart",value:function(e){var t=this.state.autoHideXLables,a=this.props,l=a.height,n=void 0===l?0:l,r=a.fit,i=void 0===r||r,d=a.color,o=void 0===d?"rgba(24, 144, 255, 0.85)":d,u=a.margin,f=void 0===u?[32,0,t?8:32,40]:u;if(e&&!(e&&e.length<1)){this.node.innerHTML="";var s=new(0,p.default.Frame)(e),c=new p.default.Chart({container:this.node,forceFit:i,height:n-22,legend:null,plotCfg:{margin:f}});t?c.axis("x",{title:!1,tickLine:!1,labels:!1}):c.axis("x",{title:!1}),c.axis("y",{title:!1,line:!1,tickLine:!1}),c.source(s,{x:{type:"cat"},y:{min:0}}),c.tooltip({title:null,crosshairs:!1,map:{name:"x"}}),c.interval().position("x*y").color(o).style({fillOpacity:1}),c.render(),this.chart=c}}},{key:"render",value:function(){var e=this.props,t=e.height,a=e.title;return m.default.createElement("div",{className:E.default.chart,style:{height:t}},m.default.createElement("div",null,a&&m.default.createElement("h4",null,a),m.default.createElement("div",{ref:this.handleRef.bind(this)})))}}]),t}(c.PureComponent),x=r.prototype,_="resize",k=[l,n],C=(0,i.default)(r.prototype,"resize"),N=r.prototype,M={},Object.keys(C).forEach(function(e){M[e]=C[e]}),M.enumerable=!!M.enumerable,M.configurable=!!M.configurable,("value"in M||M.initializer)&&(M.writable=!0),M=k.slice().reverse().reduce(function(e,t){return t(x,_,e)||e},M),N&&void 0!==M.initializer&&(M.value=M.initializer?M.initializer.call(N):void 0,M.initializer=void 0),void 0===M.initializer&&(Object.defineProperty(x,_,M),M=null),r);t.default=P,P.propTypes={color:g.default.bool,margin:g.default.array,height:g.default.number,data:g.default.array,autoLabel:g.default.bool},P.defaultProps={}},402:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(238),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e){return"&yen; "+(0,r.default)(e).format("0,0")}},403:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(402);Object.defineProperty(t,"yuan",{enumerable:!0,get:function(){return f(l).default}});var n=a(401);Object.defineProperty(t,"Bar",{enumerable:!0,get:function(){return f(n).default}});var r=a(283);Object.defineProperty(t,"MiniArea",{enumerable:!0,get:function(){return f(r).default}});var i=a(282);Object.defineProperty(t,"MiniBar",{enumerable:!0,get:function(){return f(i).default}});var d=a(281);Object.defineProperty(t,"ChartCard",{enumerable:!0,get:function(){return f(d).default}});var o=a(278);Object.defineProperty(t,"Field",{enumerable:!0,get:function(){return f(o).default}});var u=a(275);function f(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MiniProgress",{enumerable:!0,get:function(){return f(u).default}})}}]);