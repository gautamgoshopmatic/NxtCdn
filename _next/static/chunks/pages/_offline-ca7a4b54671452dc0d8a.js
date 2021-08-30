(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{5596:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(5061),a=n(6156),l=n(8481),o=n(2122),i=n(7294),c=n(4184),s=n.n(c),u=n(6032),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=i.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function p(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var a=function(r){var a=i.useContext(u.E_).getPrefixCls,l=r.prefixCls,c=a(t,l);return i.createElement(e,(0,o.Z)({prefixCls:c,tagName:n},r))};return a.displayName=r,a}}var m=function(e){var t=e.prefixCls,n=e.className,r=e.children,a=e.tagName,l=d(e,["prefixCls","className","children","tagName"]),c=s()(t,n);return i.createElement(a,(0,o.Z)({className:c},l),r)},v=p({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t,n=i.useContext(u.E_).direction,c=i.useState([]),p=(0,l.Z)(c,2),m=p[0],v=p[1],h=e.prefixCls,g=e.className,x=e.children,y=e.hasSider,N=e.tagName,C=d(e,["prefixCls","className","children","hasSider","tagName"]),w=s()(h,(t={},(0,a.Z)(t,"".concat(h,"-has-sider"),"boolean"===typeof y?y:m.length>0),(0,a.Z)(t,"".concat(h,"-rtl"),"rtl"===n),t),g);return i.createElement(f.Provider,{value:{siderHook:{addSider:function(e){v((function(t){return[].concat((0,r.Z)(t),[e])}))},removeSider:function(e){v((function(t){return t.filter((function(t){return t!==e}))}))}}}},i.createElement(N,(0,o.Z)({className:w},C),x))})),h=p({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(m),g=p({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(m),x=p({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(m),y=v,N=n(8423),C=n(8991),w={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},E=n(65),Z=function(e,t){return i.createElement(E.Z,(0,C.Z)((0,C.Z)({},e),{},{ref:t,icon:w}))};Z.displayName="BarsOutlined";var b=i.forwardRef(Z),S=n(8812),O=n(7724),_=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},j=i.createContext({}),z=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),H=i.forwardRef((function(e,t){var n=e.prefixCls,r=e.className,c=e.trigger,d=e.children,p=e.defaultCollapsed,m=void 0!==p&&p,v=e.theme,h=void 0===v?"dark":v,g=e.style,x=void 0===g?{}:g,y=e.collapsible,C=void 0!==y&&y,w=e.reverseArrow,E=void 0!==w&&w,Z=e.width,H=void 0===Z?200:Z,F=e.collapsedWidth,W=void 0===F?80:F,L=e.zeroWidthTriggerStyle,T=e.breakpoint,B=e.onCollapse,I=e.onBreakpoint,M=k(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),R=(0,i.useContext)(f).siderHook,A=(0,i.useState)("collapsed"in M?M.collapsed:m),X=(0,l.Z)(A,2),D=X[0],q=X[1],G=(0,i.useState)(!1),J=(0,l.Z)(G,2),K=J[0],Q=J[1];(0,i.useEffect)((function(){"collapsed"in M&&q(M.collapsed)}),[M.collapsed]);var U=function(e,t){"collapsed"in M||q(e),null===B||void 0===B||B(e,t)},V=(0,i.useRef)();V.current=function(e){Q(e.matches),null===I||void 0===I||I(e.matches),D!==e.matches&&U(e.matches,"responsive")},(0,i.useEffect)((function(){function e(e){return V.current(e)}var t;if("undefined"!==typeof window){var n=window.matchMedia;if(n&&T&&T in P){t=n("(max-width: ".concat(P[T],")"));try{t.addEventListener("change",e)}catch(r){t.addListener(e)}e(t)}}return function(){try{null===t||void 0===t||t.removeEventListener("change",e)}catch(r){null===t||void 0===t||t.removeListener(e)}}}),[]),(0,i.useEffect)((function(){var e=z("ant-sider-");return R.addSider(e),function(){return R.removeSider(e)}}),[]);var Y=function(){U(!D,"clickTrigger")},$=(0,i.useContext)(u.E_).getPrefixCls;return i.createElement(j.Provider,{value:{siderCollapsed:D}},function(){var e,l=$("layout-sider",n),u=(0,N.Z)(M,["collapsed"]),f=D?W:H,p=_(f)?"".concat(f,"px"):String(f),m=0===parseFloat(String(W||0))?i.createElement("span",{onClick:Y,className:s()("".concat(l,"-zero-width-trigger"),"".concat(l,"-zero-width-trigger-").concat(E?"right":"left")),style:L},c||i.createElement(b,null)):null,v={expanded:E?i.createElement(S.Z,null):i.createElement(O.Z,null),collapsed:E?i.createElement(O.Z,null):i.createElement(S.Z,null)}[D?"collapsed":"expanded"],g=null!==c?m||i.createElement("div",{className:"".concat(l,"-trigger"),onClick:Y,style:{width:p}},c||v):null,y=(0,o.Z)((0,o.Z)({},x),{flex:"0 0 ".concat(p),maxWidth:p,minWidth:p,width:p}),w=s()(l,"".concat(l,"-").concat(h),(e={},(0,a.Z)(e,"".concat(l,"-collapsed"),!!D),(0,a.Z)(e,"".concat(l,"-has-trigger"),C&&null!==c&&!m),(0,a.Z)(e,"".concat(l,"-below"),!!K),(0,a.Z)(e,"".concat(l,"-zero-width"),0===parseFloat(p)),e),r);return i.createElement("aside",(0,o.Z)({className:w},u,{style:y,ref:t}),i.createElement("div",{className:"".concat(l,"-children")},d),C||K&&m?g:null)}())}));H.displayName="Sider";var F=H,W=y;W.Header=h,W.Footer=g,W.Content=x,W.Sider=F;var L=W},2998:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return s},default:function(){return u}});var r=n(5893),a=n(5596),l=n(4494),o=n(1369),i=n(452),c=n(7715),s=!0;function u(e){var t=e.initState,n=(0,l.I0)();return t&&n((0,o.D)(t.templateFactory)),(0,r.jsxs)(a.Z,{className:"layout",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("img",{alt:"404 page",height:"auto",width:"100%",src:"404 pixar.png"}),(0,r.jsx)(c.Z,{})]})}},6109:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_offline",function(){return n(2998)}])}},function(e){e.O(0,[774,597,773,355,452,326],(function(){return t=6109,e(e.s=t);var t}));var t=e.O();_N_E=t}]);