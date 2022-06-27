"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[796],{8633:function(e,n,r){r.d(n,{h:function(){return t}});var a=r(2791).createContext(null),t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null};n.Z=a},3573:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];function a(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];var t=null;return n.forEach((function(e){if(null==t){var n=e.apply(void 0,r);null!=n&&(t=n)}})),t}return(0,o.default)(a)};var a,t=r(6054),o=(a=t)&&a.__esModule?a:{default:a};e.exports=n.default},6054:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,r,a,t,o,i){var l=t||"<<anonymous>>",c=i||a;if(null==r[a])return n?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),d=6;d<s;d++)u[d-6]=arguments[d];return e.apply(void 0,[r,a,l,o,c].concat(u))}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r},e.exports=n.default},7022:function(e,n,r){var a=r(1413),t=r(5987),o=r(1694),i=r.n(o),l=r(2791),c=r(162),s=r(184),u=["bsPrefix","fluid","as","className"],d=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.fluid,l=e.as,d=void 0===l?"div":l,f=e.className,v=(0,t.Z)(e,u),p=(0,c.vE)(r,"container"),x="string"===typeof o?"-".concat(o):"-fluid";return(0,s.jsx)(d,(0,a.Z)((0,a.Z)({ref:n},v),{},{className:i()(f,o?"".concat(p).concat(x):p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},n.Z=d},2592:function(e,n,r){var a=r(1413),t=r(5987),o=r(1694),i=r.n(o),l=r(2791),c=r(2007),s=r.n(c),u=r(162),d=r(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(s().string,s().bool,s().bool,s().bool,s().bool,l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,l=e.fluid,c=e.rounded,s=e.roundedCircle,v=e.thumbnail,p=(0,t.Z)(e,f);return r=(0,u.vE)(r,"img"),(0,d.jsx)("img",(0,a.Z)((0,a.Z)({ref:n},p),{},{className:i()(o,l&&"".concat(r,"-fluid"),c&&"rounded",s&&"rounded-circle",v&&"".concat(r,"-thumbnail"))}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=v},8015:function(e,n,r){r.d(n,{Z:function(){return H}});var a=r(4942),t=r(1413),o=r(5987),i=r(1694),l=r.n(i),c=(r(3573),r(2791)),s=r(239),u=r(3808);var d=r(3201),f=c.createContext(null);f.displayName="NavContext";var v=f,p=r(8633),x=c.createContext(null),b=r(1306),m=r(885),g=r(9007),y=r(5341),Z=r(184),h=["as","active","eventKey"];function E(e){var n=e.key,r=e.onClick,a=e.active,t=e.id,o=e.role,i=e.disabled,l=(0,c.useContext)(p.Z),s=(0,c.useContext)(v),u=(0,c.useContext)(x),d=a,f={role:o};if(s){o||"tablist"!==s.role||(f.role="tab");var m=s.getControllerId(null!=n?n:null),y=s.getControlledId(null!=n?n:null);f[(0,b.PB)("event-key")]=n,f.id=m||t,!(d=null==a&&null!=n?s.activeKey===n:a)&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(f["aria-controls"]=y)}return"tab"===f.role&&(i&&(f.tabIndex=-1,f["aria-disabled"]=!0),d?f["aria-selected"]=d:f.tabIndex=-1),f.onClick=(0,g.Z)((function(e){i||(null==r||r(e),null!=n&&l&&!e.isPropagationStopped()&&l(n,e))})),[f,{isActive:d}]}var N=c.forwardRef((function(e,n){var r=e.as,a=void 0===r?y.ZP:r,t=e.active,o=e.eventKey,i=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,h),l=E(Object.assign({key:(0,p.h)(o,i.href),active:t},i)),c=(0,m.Z)(l,2),s=c[0],u=c[1];return s[(0,b.PB)("active")]=u.isActive,(0,Z.jsx)(a,Object.assign({},i,s,{ref:n}))}));N.displayName="NavItem";var w=N,C=["as","onSelect","activeKey","role","onKeyDown"];var k=function(){},P=(0,b.PB)("event-key"),j=c.forwardRef((function(e,n){var r,a,t=e.as,o=void 0===t?"div":t,i=e.onSelect,l=e.activeKey,s=e.role,f=e.onKeyDown,m=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,C),g=(0,c.useReducer)((function(e){return!e}),!1)[1],y=(0,c.useRef)(!1),h=(0,c.useContext)(p.Z),E=(0,c.useContext)(x);E&&(s=s||"tablist",l=E.activeKey,r=E.getControlledId,a=E.getControllerId);var N=(0,c.useRef)(null),w=function(e){var n=N.current;if(!n)return null;var r=(0,u.Z)(n,"[".concat(P,"]:not([aria-disabled=true])")),a=n.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;var t=r.indexOf(a);if(-1===t)return null;var o=t+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},j=function(e,n){null!=e&&(null==i||i(e,n),null==h||h(e,n))};(0,c.useEffect)((function(){if(N.current&&y.current){var e=N.current.querySelector("[".concat(P,"][aria-selected=true]"));null==e||e.focus()}y.current=!1}));var O=(0,d.Z)(n,N);return(0,Z.jsx)(p.Z.Provider,{value:j,children:(0,Z.jsx)(v.Provider,{value:{role:s,activeKey:(0,p.h)(l),getControlledId:r||k,getControllerId:a||k},children:(0,Z.jsx)(o,Object.assign({},m,{onKeyDown:function(e){if(null==f||f(e),E){var n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=w(-1);break;case"ArrowRight":case"ArrowDown":n=w(1);break;default:return}n&&(e.preventDefault(),j(n.dataset[(0,b.$F)("EventKey")]||null,e),y.current=!0,g())}},ref:O,role:s}))})})}));j.displayName="Nav";var O=Object.assign(j,{Item:w}),F=r(162),R=r(5715),K=r(6040),S=(0,r(6543).Z)("nav-item"),I=r(1396),A=["bsPrefix","className","as","active","eventKey"],D=c.forwardRef((function(e,n){var r=e.bsPrefix,a=e.className,i=e.as,c=void 0===i?I.Z:i,s=e.active,u=e.eventKey,d=(0,o.Z)(e,A);r=(0,F.vE)(r,"nav-link");var f=E((0,t.Z)({key:(0,p.h)(u,d.href),active:s},d)),v=(0,m.Z)(f,2),x=v[0],b=v[1];return(0,Z.jsx)(c,(0,t.Z)((0,t.Z)((0,t.Z)({},d),x),{},{ref:n,className:l()(a,r,d.disabled&&"disabled",b.isActive&&"active")}))}));D.displayName="NavLink",D.defaultProps={disabled:!1};var M=D,T=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],B=c.forwardRef((function(e,n){var r,i,u,d=(0,s.Ch)(e,{activeKey:"onSelect"}),f=d.as,v=void 0===f?"div":f,p=d.bsPrefix,x=d.variant,b=d.fill,m=d.justify,g=d.navbar,y=d.navbarScroll,h=d.className,E=d.activeKey,N=(0,o.Z)(d,T),w=(0,F.vE)(p,"nav"),C=!1,k=(0,c.useContext)(R.Z),P=(0,c.useContext)(K.Z);return k?(i=k.bsPrefix,C=null==g||g):P&&(u=P.cardHeaderBsPrefix),(0,Z.jsx)(O,(0,t.Z)({as:v,ref:n,activeKey:E,className:l()(h,(r={},(0,a.Z)(r,w,!C),(0,a.Z)(r,"".concat(i,"-nav"),C),(0,a.Z)(r,"".concat(i,"-nav-scroll"),C&&y),(0,a.Z)(r,"".concat(u,"-").concat(x),!!u),(0,a.Z)(r,"".concat(w,"-").concat(x),!!x),(0,a.Z)(r,"".concat(w,"-fill"),b),(0,a.Z)(r,"".concat(w,"-justified"),m),r))},N))}));B.displayName="Nav",B.defaultProps={justify:!1,fill:!1};var H=Object.assign(B,{Item:S,Link:M})},2932:function(e,n,r){r.d(n,{Z:function(){return me}});var a=r(1413),t=r(5987),o=r(1694),i=r.n(o),l=r(2791),c=r(8633),s=r(239),u=r(6543),d=r(162),f=r(184),v=["bsPrefix","className","as"],p=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,l=e.as,c=(0,t.Z)(e,v);r=(0,d.vE)(r,"navbar-brand");var s=l||(c.href?"a":"span");return(0,f.jsx)(s,(0,a.Z)((0,a.Z)({},c),{},{ref:n,className:i()(o,r)}))}));p.displayName="NavbarBrand";var x=p,b=r(4942),m=r(5427),g=r(7726),y=r(1380);var Z,h=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var r=arguments.length,a=new Array(r),t=0;t<r;t++)a[t]=arguments[t];e.apply(this,a),n.apply(this,a)}}),null)},E=r(7202),N=r(4083),w=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k(e,n){var r=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],a=C[e];return r+parseInt((0,m.Z)(n,a[0]),10)+parseInt((0,m.Z)(n,a[1]),10)}var P=(Z={},(0,b.Z)(Z,g.Wj,"collapse"),(0,b.Z)(Z,g.Ix,"collapsing"),(0,b.Z)(Z,g.d0,"collapsing"),(0,b.Z)(Z,g.cn,"collapse show"),Z),j={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:k},O=l.forwardRef((function(e,n){var r=e.onEnter,o=e.onEntering,c=e.onEntered,s=e.onExit,u=e.onExiting,d=e.className,v=e.children,p=e.dimension,x=void 0===p?"height":p,b=e.getDimensionValue,m=void 0===b?k:b,g=(0,t.Z)(e,w),Z="function"===typeof x?x():x,C=(0,l.useMemo)((function(){return h((function(e){e.style[Z]="0"}),r)}),[Z,r]),j=(0,l.useMemo)((function(){return h((function(e){var n="scroll".concat(Z[0].toUpperCase()).concat(Z.slice(1));e.style[Z]="".concat(e[n],"px")}),o)}),[Z,o]),O=(0,l.useMemo)((function(){return h((function(e){e.style[Z]=null}),c)}),[Z,c]),F=(0,l.useMemo)((function(){return h((function(e){e.style[Z]="".concat(m(Z,e),"px"),(0,E.Z)(e)}),s)}),[s,m,Z]),R=(0,l.useMemo)((function(){return h((function(e){e.style[Z]=null}),u)}),[Z,u]);return(0,f.jsx)(N.Z,(0,a.Z)((0,a.Z)({ref:n,addEndListener:y.Z},g),{},{"aria-expanded":g.role?g.in:null,onEnter:C,onEntering:j,onEntered:O,onExit:F,onExiting:R,childRef:v.ref,children:function(e,n){return l.cloneElement(v,(0,a.Z)((0,a.Z)({},n),{},{className:i()(d,v.props.className,P[e],"width"===Z&&"collapse-horizontal")}))}}))}));O.defaultProps=j;var F=O,R=r(5715),K=["children","bsPrefix"],S=l.forwardRef((function(e,n){var r=e.children,o=e.bsPrefix,i=(0,t.Z)(e,K);o=(0,d.vE)(o,"navbar-collapse");var c=(0,l.useContext)(R.Z);return(0,f.jsx)(F,(0,a.Z)((0,a.Z)({in:!(!c||!c.expanded)},i),{},{children:(0,f.jsx)("div",{ref:n,className:o,children:r})}))}));S.displayName="NavbarCollapse";var I=S,A=r(9007),D=["bsPrefix","className","children","label","as","onClick"],M=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=e.label,u=e.as,v=void 0===u?"button":u,p=e.onClick,x=(0,t.Z)(e,D);r=(0,d.vE)(r,"navbar-toggler");var b=(0,l.useContext)(R.Z)||{},m=b.onToggle,g=b.expanded,y=(0,A.Z)((function(e){p&&p(e),m&&m()}));return"button"===v&&(x.type="button"),(0,f.jsx)(v,(0,a.Z)((0,a.Z)({},x),{},{ref:n,onClick:y,"aria-label":s,className:i()(o,r,!g&&"collapsed"),children:c||(0,f.jsx)("span",{className:"".concat(r,"-icon")})}))}));M.displayName="NavbarToggle",M.defaultProps={label:"Toggle navigation"};var T=M,B=r(9815),H=new WeakMap,L=function(e,n){if(e&&n){var r=H.get(n)||new Map;H.set(n,r);var a=r.get(e);return a||((a=n.matchMedia(e)).refCount=0,r.set(a.media,a)),a}};function _(e,n){void 0===n&&(n="undefined"===typeof window?void 0:window);var r=L(e,n),a=(0,l.useState)((function(){return!!r&&r.matches})),t=a[0],o=a[1];return(0,B.Z)((function(){var r=L(e,n);if(!r)return o(!1);var a=H.get(n),t=function(){o(r.matches)};return r.refCount++,r.addListener(t),t(),function(){r.removeListener(t),r.refCount--,r.refCount<=0&&(null==a||a.delete(r.media)),r=void 0}}),[e]),t}var q,z=function(e){var n=Object.keys(e);function r(e,n){return e===n?n:e?e+" and "+n:n}function a(r){var a=function(e){return n[Math.min(n.indexOf(e)+1,n.length-1)]}(r),t=e[a];return"(max-width: "+(t="number"===typeof t?t-.2+"px":"calc("+t+" - 0.2px)")+")"}return function(n,t,o){var i,c;"object"===typeof n?(i=n,o=t,t=!0):((c={})[n]=t=t||!0,i=c);var s=(0,l.useMemo)((function(){return Object.entries(i).reduce((function(n,t){var o=t[0],i=t[1];return"up"!==i&&!0!==i||(n=r(n,function(n){var r=e[n];return"number"===typeof r&&(r+="px"),"(min-width: "+r+")"}(o))),"down"!==i&&!0!==i||(n=r(n,a(o))),n}),"")}),[JSON.stringify(i)]);return _(s,o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),U=r(6137),V=r(2709),W=(0,u.Z)("offcanvas-body"),J=["bsPrefix","className","children"],$=(q={},(0,b.Z)(q,g.d0,"show"),(0,b.Z)(q,g.cn,"show"),q),G=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=(0,t.Z)(e,J);return r=(0,d.vE)(r,"offcanvas"),(0,f.jsx)(N.Z,(0,a.Z)((0,a.Z)({ref:n,addEndListener:y.Z},s),{},{childRef:c.ref,children:function(e,n){return l.cloneElement(c,(0,a.Z)((0,a.Z)({},n),{},{className:i()(o,c.props.className,(e===g.d0||e===g.Ix)&&"".concat(r,"-toggling"),$[e])}))}}))}));G.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},G.displayName="OffcanvasToggling";var Q=G,X=r(9820),Y=r(2086),ee=["bsPrefix","className"],ne=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,l=(0,t.Z)(e,ee);return r=(0,d.vE)(r,"offcanvas-header"),(0,f.jsx)(Y.Z,(0,a.Z)((0,a.Z)({ref:n},l),{},{className:i()(o,r)}))}));ne.displayName="OffcanvasHeader",ne.defaultProps={closeLabel:"Close",closeButton:!1};var re=ne,ae=(0,r(7472).Z)("h5"),te=(0,u.Z)("offcanvas-title",{Component:ae}),oe=r(5137),ie=["bsPrefix","className","children","aria-labelledby","placement","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function le(e){return(0,f.jsx)(Q,(0,a.Z)({},e))}function ce(e){return(0,f.jsx)(V.Z,(0,a.Z)({},e))}var se=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=e["aria-labelledby"],u=e.placement,v=e.show,p=e.backdrop,x=e.keyboard,b=e.scroll,m=e.onEscapeKeyDown,g=e.onShow,y=e.onHide,Z=e.container,h=e.autoFocus,E=e.enforceFocus,N=e.restoreFocus,w=e.restoreFocusOptions,C=e.onEntered,k=e.onExit,P=e.onExiting,j=e.onEnter,O=e.onEntering,F=e.onExited,K=e.backdropClassName,S=e.manager,I=(0,t.Z)(e,ie),D=(0,l.useRef)();r=(0,d.vE)(r,"offcanvas");var M=((0,l.useContext)(R.Z)||{}).onToggle,T=(0,A.Z)((function(){null==M||M(),null==y||y()})),B=(0,l.useMemo)((function(){return{onHide:T}}),[T]);var H=(0,l.useCallback)((function(e){return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:i()("".concat(r,"-backdrop"),K)}))}),[K,r]);return(0,f.jsx)(X.Z.Provider,{value:B,children:(0,f.jsx)(U.Z,{show:v,ref:n,backdrop:p,container:Z,keyboard:x,autoFocus:h,enforceFocus:E&&!b,restoreFocus:N,restoreFocusOptions:w,onEscapeKeyDown:m,onShow:g,onHide:T,onEnter:function(e){e&&(e.style.visibility="visible");for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];null==j||j.apply(void 0,[e].concat(r))},onEntering:O,onEntered:C,onExit:k,onExiting:P,onExited:function(e){e&&(e.style.visibility="");for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];null==F||F.apply(void 0,r)},manager:S||(b?(D.current||(D.current=new oe.Z({handleContainerOverflow:!1})),D.current):(0,oe.t)()),transition:le,backdropTransition:ce,renderBackdrop:H,renderDialog:function(e){return(0,f.jsx)("div",(0,a.Z)((0,a.Z)((0,a.Z)({role:"dialog"},e),I),{},{className:i()(o,r,"".concat(r,"-").concat(u)),"aria-labelledby":s,children:c}))}})})}));se.displayName="Offcanvas",se.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var ue=Object.assign(se,{Body:W,Header:re,Title:te}),de=["className","bsPrefix","backdrop","backdropClassName","keyboard","scroll","placement","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onShow","onHide","onEscapeKeyDown","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],fe=l.forwardRef((function(e,n){var r=e.className,o=e.bsPrefix,c=e.backdrop,s=e.backdropClassName,u=e.keyboard,v=e.scroll,p=e.placement,x=e.autoFocus,b=e.enforceFocus,m=e.restoreFocus,g=e.restoreFocusOptions,y=e.onShow,Z=e.onHide,h=e.onEscapeKeyDown,E=e.onEnter,N=e.onEntering,w=e.onEntered,C=e.onExit,k=e.onExiting,P=e.onExited,j=(0,t.Z)(e,de),O=(0,l.useContext)(R.Z);o=(0,d.vE)(o,"offcanvas");var F="string"===typeof(null==O?void 0:O.expand),K=z(F?O.expand:"xs","up");return F&&K?(0,f.jsx)("div",(0,a.Z)((0,a.Z)({ref:n},j),{},{className:i()(r,o,"".concat(o,"-").concat(p))})):(0,f.jsx)(ue,(0,a.Z)({ref:n,show:!(null==O||!O.expanded),bsPrefix:o,backdrop:c,backdropClassName:s,keyboard:u,scroll:v,placement:p,autoFocus:x,enforceFocus:b,restoreFocus:m,restoreFocusOptions:g,onShow:y,onHide:Z,onEscapeKeyDown:h,onEnter:E,onEntering:N,onEntered:w,onExit:C,onExiting:k,onExited:P},j))}));fe.displayName="NavbarOffcanvas";var ve=fe,pe=["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"],xe=(0,u.Z)("navbar-text",{Component:"span"}),be=l.forwardRef((function(e,n){var r=(0,s.Ch)(e,{expanded:"onToggle"}),o=r.bsPrefix,u=r.expand,v=r.variant,p=r.bg,x=r.fixed,b=r.sticky,m=r.className,g=r.as,y=void 0===g?"nav":g,Z=r.expanded,h=r.onToggle,E=r.onSelect,N=r.collapseOnSelect,w=(0,t.Z)(r,pe),C=(0,d.vE)(o,"navbar"),k=(0,l.useCallback)((function(){null==E||E.apply(void 0,arguments),N&&Z&&(null==h||h(!1))}),[E,N,Z,h]);void 0===w.role&&"nav"!==y&&(w.role="navigation");var P="".concat(C,"-expand");"string"===typeof u&&(P="".concat(P,"-").concat(u));var j=(0,l.useMemo)((function(){return{onToggle:function(){return null==h?void 0:h(!Z)},bsPrefix:C,expanded:!!Z,expand:u}}),[C,Z,u,h]);return(0,f.jsx)(R.Z.Provider,{value:j,children:(0,f.jsx)(c.Z.Provider,{value:k,children:(0,f.jsx)(y,(0,a.Z)((0,a.Z)({ref:n},w),{},{className:i()(m,C,u&&P,v&&"".concat(C,"-").concat(v),p&&"bg-".concat(p),b&&"sticky-".concat(b),x&&"fixed-".concat(x))}))})})}));be.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},be.displayName="Navbar";var me=Object.assign(be,{Brand:x,Collapse:I,Offcanvas:ve,Text:xe,Toggle:T})},5715:function(e,n,r){var a=r(2791).createContext(null);a.displayName="NavbarContext",n.Z=a}}]);
//# sourceMappingURL=796.9ffad74b.chunk.js.map