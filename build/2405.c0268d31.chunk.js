(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2405],{89881:(h,y,n)=>{var a=n(47816),f=n(99291),m=f(a);h.exports=m},69199:(h,y,n)=>{var a=n(89881),f=n(98612);function m(u,d){var g=-1,l=f(u)?Array(u.length):[];return a(u,function(x,b,R){l[++g]=d(x,b,R)}),l}h.exports=m},82689:(h,y,n)=>{var a=n(29932),f=n(97786),m=n(67206),u=n(69199),d=n(71131),g=n(7518),l=n(85022),x=n(6557),b=n(1469);function R(P,O,p){O.length?O=a(O,function(E){return b(E)?function(M){return f(M,E.length===1?E[0]:E)}:E}):O=[x];var j=-1;O=a(O,g(m));var w=u(P,function(E,M,S){var C=a(O,function(Z){return Z(E)});return{criteria:C,index:++j,value:E}});return d(w,function(E,M){return l(E,M,p)})}h.exports=R},25970:(h,y,n)=>{var a=n(63012),f=n(79095);function m(u,d){return a(u,d,function(g,l){return f(u,l)})}h.exports=m},63012:(h,y,n)=>{var a=n(97786),f=n(10611),m=n(71811);function u(d,g,l){for(var x=-1,b=g.length,R={};++x<b;){var P=g[x],O=a(d,P);l(O,P)&&f(R,m(P,d),O)}return R}h.exports=u},71131:h=>{function y(n,a){var f=n.length;for(n.sort(a);f--;)n[f]=n[f].value;return n}h.exports=y},26393:(h,y,n)=>{var a=n(33448);function f(m,u){if(m!==u){var d=m!==void 0,g=m===null,l=m===m,x=a(m),b=u!==void 0,R=u===null,P=u===u,O=a(u);if(!R&&!O&&!x&&m>u||x&&b&&P&&!R&&!O||g&&b&&P||!d&&P||!l)return 1;if(!g&&!x&&!O&&m<u||O&&d&&l&&!g&&!x||R&&d&&l||!b&&l||!P)return-1}return 0}h.exports=f},85022:(h,y,n)=>{var a=n(26393);function f(m,u,d){for(var g=-1,l=m.criteria,x=u.criteria,b=l.length,R=d.length;++g<b;){var P=a(l[g],x[g]);if(P){if(g>=R)return P;var O=d[g];return P*(O=="desc"?-1:1)}}return m.index-u.index}h.exports=f},99291:(h,y,n)=>{var a=n(98612);function f(m,u){return function(d,g){if(d==null)return d;if(!a(d))return m(d,g);for(var l=d.length,x=u?l:-1,b=Object(d);(u?x--:++x<l)&&g(b[x],x,b)!==!1;);return d}}h.exports=f},92052:(h,y,n)=>{var a=n(42980),f=n(13218);function m(u,d,g,l,x,b){return f(u)&&f(d)&&(b.set(d,u),a(u,d,void 0,m,b),b.delete(d)),u}h.exports=m},66913:(h,y,n)=>{var a=n(96874),f=n(5976),m=n(92052),u=n(30236),d=f(function(g){return g.push(void 0,m),a(u,void 0,g)});h.exports=d},30236:(h,y,n)=>{var a=n(42980),f=n(21463),m=f(function(u,d,g,l){a(u,d,g,l)});h.exports=m},78718:(h,y,n)=>{var a=n(25970),f=n(99021),m=f(function(u,d){return u==null?{}:a(u,d)});h.exports=m},89734:(h,y,n)=>{var a=n(21078),f=n(82689),m=n(5976),u=n(16612),d=m(function(g,l){if(g==null)return[];var x=l.length;return x>1&&u(g,l[0],l[1])?l=[]:x>2&&u(l[0],l[1],l[2])&&(l=[l[0]]),f(g,a(l,1),[])});h.exports=d},29558:(h,y,n)=>{"use strict";n.d(y,{Z:()=>pt});var a=n(70655),f=n(67294),m=n(74806),u=n(680),d=n(25687),g=n(16284),l=n(88222),x=n(39943);function b(t,s){return Object.keys(t).reduce(function(r,e){return r[e]=(0,a.pi)({timeZone:s},t[e]),r},{})}function R(t,s){var r=Object.keys((0,a.pi)((0,a.pi)({},t),s));return r.reduce(function(e,i){return e[i]=(0,a.pi)((0,a.pi)({},t[i]||{}),s[i]||{}),e},{})}function P(t,s){if(!s)return t;var r=g.C.formats;return(0,a.pi)((0,a.pi)((0,a.pi)({},r),t),{date:R(b(r.date,s),b(t.date||{},s)),time:R(b(r.time,s),b(t.time||{},s))})}var O=function(t,s,r,e,i){var o=t.locale,c=t.formats,v=t.messages,T=t.defaultLocale,F=t.defaultFormats,L=t.fallbackOnEmptyString,B=t.onError,N=t.timeZone,J=t.defaultRichTextElements;r===void 0&&(r={id:""});var V=r.id,I=r.defaultMessage;(0,d.kG)(!!V,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(V),D=v&&Object.prototype.hasOwnProperty.call(v,A)&&v[A];if(Array.isArray(D)&&D.length===1&&D[0].type===x.wD.literal)return D[0].value;if(!e&&D&&typeof D=="string"&&!J)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(e=(0,a.pi)((0,a.pi)({},J),e||{}),c=P(c,N),F=P(F,N),!D){if(L===!1&&D==="")return D;if((!I||o&&o.toLowerCase()!==T.toLowerCase())&&B(new l.$6(r,o)),I)try{var W=s.getMessageFormat(I,T,F,i);return W.format(e)}catch(U){return B(new l.X9('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),o,r,U)),typeof I=="string"?I:A}return A}try{var W=s.getMessageFormat(D,o,c,(0,a.pi)({formatters:s},i||{}));return W.format(e)}catch(U){B(new l.X9('Error formatting message: "'.concat(A,'", using ').concat(I?"default message":"id"," as fallback."),o,r,U))}if(I)try{var W=s.getMessageFormat(I,T,F,i);return W.format(e)}catch(U){B(new l.X9('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),o,r,U))}return typeof D=="string"?D:typeof I=="string"?I:A},p=n(82644),j=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function w(t,s,r){var e=t.locale,i=t.formats,o=t.onError;r===void 0&&(r={});var c=r.format,v=c&&(0,p.TB)(i,"number",c,o)||{},T=(0,p.L6)(r,j,v);return s(e,T)}function E(t,s,r,e){e===void 0&&(e={});try{return w(t,s,e).format(r)}catch(i){t.onError(new l.Qe("Error formatting number.",t.locale,i))}return String(r)}function M(t,s,r,e){e===void 0&&(e={});try{return w(t,s,e).formatToParts(r)}catch(i){t.onError(new l.Qe("Error formatting number.",t.locale,i))}return[]}var S=n(11050),C=["numeric","style"];function Z(t,s,r){var e=t.locale,i=t.formats,o=t.onError;r===void 0&&(r={});var c=r.format,v=!!c&&(0,p.TB)(i,"relative",c,o)||{},T=(0,p.L6)(r,C,v);return s(e,T)}function z(t,s,r,e,i){i===void 0&&(i={}),e||(e="second");var o=Intl.RelativeTimeFormat;o||t.onError(new S.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,S.jK.MISSING_INTL_API));try{return Z(t,s,i).format(r,e)}catch(c){t.onError(new l.Qe("Error formatting relative time.",t.locale,c))}return String(r)}var k=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(t,s,r,e){var i=t.locale,o=t.formats,c=t.onError,v=t.timeZone;e===void 0&&(e={});var T=e.format,F=(0,a.pi)((0,a.pi)({},v&&{timeZone:v}),T&&(0,p.TB)(o,s,T,c)),L=(0,p.L6)(e,k,F);return s==="time"&&!L.hour&&!L.minute&&!L.second&&!L.timeStyle&&!L.dateStyle&&(L=(0,a.pi)((0,a.pi)({},L),{hour:"numeric",minute:"numeric"})),r(i,L)}function q(t,s){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",s,c).format(v)}catch(T){t.onError(new l.Qe("Error formatting date.",t.locale,T))}return String(v)}function _(t,s){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",s,c).format(v)}catch(T){t.onError(new l.Qe("Error formatting time.",t.locale,T))}return String(v)}function tt(t,s){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=r[2],v=c===void 0?{}:c,T=t.timeZone,F=t.locale,L=t.onError,B=(0,p.L6)(v,k,T?{timeZone:T}:{});try{return s(F,B).formatRange(i,o)}catch(N){L(new l.Qe("Error formatting date time range.",t.locale,N))}return String(i)}function et(t,s){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",s,c).formatToParts(v)}catch(T){t.onError(new l.Qe("Error formatting date.",t.locale,T))}return[]}function rt(t,s){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",s,c).formatToParts(v)}catch(T){t.onError(new l.Qe("Error formatting time.",t.locale,T))}return[]}var nt=["type"];function at(t,s,r,e){var i=t.locale,o=t.onError;e===void 0&&(e={}),Intl.PluralRules||o(new S.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,S.jK.MISSING_INTL_API));var c=(0,p.L6)(e,nt);try{return s(i,c).select(r)}catch(v){o(new l.Qe("Error formatting plural.",i,v))}return"other"}var ot=["type","style"],$=Date.now();function it(t){return"".concat($,"_").concat(t,"_").concat($)}function st(t,s,r,e){e===void 0&&(e={});var i=G(t,s,r,e).reduce(function(o,c){var v=c.value;return typeof v!="string"?o.push(v):typeof o[o.length-1]=="string"?o[o.length-1]+=v:o.push(v),o},[]);return i.length===1?i[0]:i.length===0?"":i}function G(t,s,r,e){var i=t.locale,o=t.onError;e===void 0&&(e={});var c=Intl.ListFormat;c||o(new S.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,S.jK.MISSING_INTL_API));var v=(0,p.L6)(e,ot);try{var T={},F=r.map(function(L,B){if(typeof L=="object"){var N=it(B);return T[N]=L,N}return String(L)});return s(i,v).formatToParts(F).map(function(L){return L.type==="literal"?L:(0,a.pi)((0,a.pi)({},L),{value:T[L.value]||L.value})})}catch(L){o(new l.Qe("Error formatting list.",i,L))}return r}var lt=["style","type","fallback","languageDisplay"];function ut(t,s,r,e){var i=t.locale,o=t.onError,c=Intl.DisplayNames;c||o(new S.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,S.jK.MISSING_INTL_API));var v=(0,p.L6)(e,lt);try{return s(i,v).of(r)}catch(T){o(new l.Qe("Error formatting display name.",i,T))}}function ft(t){var s=t?t[Object.keys(t)[0]]:void 0;return typeof s=="string"}function mt(t){t.onWarn&&t.defaultRichTextElements&&ft(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ct(t,s){var r=(0,p.ax)(s),e=(0,a.pi)((0,a.pi)({},p.Z0),t),i=e.locale,o=e.defaultLocale,c=e.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&c?c(new l.gb('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&c&&c(new l.gb('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(c&&c(new l.OV('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),e.locale=e.defaultLocale||"en"),mt(e),(0,a.pi)((0,a.pi)({},e),{formatters:r,formatNumber:E.bind(null,e,r.getNumberFormat),formatNumberToParts:M.bind(null,e,r.getNumberFormat),formatRelativeTime:z.bind(null,e,r.getRelativeTimeFormat),formatDate:q.bind(null,e,r.getDateTimeFormat),formatDateToParts:et.bind(null,e,r.getDateTimeFormat),formatTime:_.bind(null,e,r.getDateTimeFormat),formatDateTimeRange:tt.bind(null,e,r.getDateTimeFormat),formatTimeToParts:rt.bind(null,e,r.getDateTimeFormat),formatPlural:at.bind(null,e,r.getPluralRules),formatMessage:O.bind(null,e,r),$t:O.bind(null,e,r),formatList:st.bind(null,e,r.getListFormat),formatListToParts:G.bind(null,e,r.getListFormat),formatDisplayName:ut.bind(null,e,r.getDisplayNames)})}var dt=n(61092);function Q(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function H(t){return t&&Object.keys(t).reduce(function(s,r){var e=t[r];return s[r]=(0,dt.Gt)(e)?(0,u.dt)(e):e,s},{})}var X=function(t,s,r,e){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var c=H(e),v=O.apply(void 0,(0,a.ev)([t,s,r,c],i,!1));return Array.isArray(v)?f.Children.toArray(v):v},Y=function(t,s){var r=t.defaultRichTextElements,e=(0,a._T)(t,["defaultRichTextElements"]),i=H(r),o=ct((0,a.pi)((0,a.pi)((0,a.pi)({},u.Z0),e),{defaultRichTextElements:i}),s),c={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:i};return(0,a.pi)((0,a.pi)({},o),{formatMessage:X.bind(null,c,o.formatters),$t:X.bind(null,c,o.formatters)})},gt=function(t){(0,a.ZT)(s,t);function s(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,p.Sn)(),r.state={cache:r.cache,intl:Y(Q(r.props),r.cache),prevConfig:Q(r.props)},r}return s.getDerivedStateFromProps=function(r,e){var i=e.prevConfig,o=e.cache,c=Q(r);return(0,u.wU)(i,c)?null:{intl:Y(c,o),prevConfig:c}},s.prototype.render=function(){return(0,u.lq)(this.state.intl),f.createElement(m.zt,{value:this.state.intl},this.props.children)},s.displayName="IntlProvider",s.defaultProps=u.Z0,s}(f.PureComponent);const pt=gt},34726:(h,y,n)=>{"use strict";n.d(y,{D:()=>m});var a=n(85893),f=n(16607);const m=({children:u})=>(0,a.jsx)(f.x,{paddingLeft:10,paddingRight:10,children:u})},90731:(h,y,n)=>{"use strict";n.d(y,{T:()=>R});var a=n(85893),f=n(67294),m=n(71997);const u=p=>{const j=(0,f.useRef)(null),[w,E]=(0,f.useState)(!0),M=([S])=>{E(S.isIntersecting)};return(0,f.useEffect)(()=>{const S=j.current,C=new IntersectionObserver(M,p);return S&&C.observe(j.current),()=>{S&&C.disconnect()}},[j,p]),[j,w]};var d=n(79698);const g=(p,j)=>{const w=(0,d.W)(j);(0,f.useLayoutEffect)(()=>{const E=new ResizeObserver(w);return Array.isArray(p)?p.forEach(M=>{M.current&&E.observe(M.current)}):p.current&&E.observe(p.current),()=>{E.disconnect()}},[p,w])};var l=n(16607),x=n(96987),b=n(10574);const R=p=>{const j=(0,f.useRef)(null),[w,E]=(0,f.useState)(null),[M,S]=u({root:null,rootMargin:"0px",threshold:0});return g(M,()=>{M.current&&E(M.current.getBoundingClientRect())}),(0,f.useEffect)(()=>{j.current&&E(j.current.getBoundingClientRect())},[j]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:w?.height},ref:M,children:S&&(0,a.jsx)(O,{ref:j,...p})}),!S&&(0,a.jsx)(O,{...p,sticky:!0,width:w?.width})]})};R.displayName="HeaderLayout";const P=(0,m.ZP)(l.x)`
  width: ${({width:p})=>p?`${p/16}rem`:void 0};
  z-index: ${({theme:p})=>p.zIndices[1]};
`,O=f.forwardRef(({navigationAction:p,primaryAction:j,secondaryAction:w,subtitle:E,title:M,sticky:S,width:C,...Z},z)=>{const k=typeof E=="string";return S?(0,a.jsx)(P,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(x.k,{justifyContent:"space-between",children:[(0,a.jsxs)(x.k,{children:[p&&(0,a.jsx)(l.x,{paddingRight:3,children:p}),(0,a.jsxs)(l.x,{children:[(0,a.jsx)(b.Z,{variant:"beta",as:"h1",...Z,children:M}),k?(0,a.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:E}):E]}),w?(0,a.jsx)(l.x,{paddingLeft:4,children:w}):null]}),(0,a.jsx)(x.k,{children:j?(0,a.jsx)(l.x,{paddingLeft:2,children:j}):void 0})]})}):(0,a.jsxs)(l.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:p?6:8,background:"neutral100","data-strapi-header":!0,children:[p?(0,a.jsx)(l.x,{paddingBottom:2,children:p}):null,(0,a.jsxs)(x.k,{justifyContent:"space-between",children:[(0,a.jsxs)(x.k,{minWidth:0,children:[(0,a.jsx)(b.Z,{as:"h1",variant:"alpha",...Z,children:M}),w?(0,a.jsx)(l.x,{paddingLeft:4,children:w}):null]}),j]}),k?(0,a.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:E}):E]})})},40720:(h,y,n)=>{"use strict";n.d(y,{o:()=>d});var a=n(85893),f=n(71997),m=n(16607);const u=(0,f.ZP)(m.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,d=({labelledBy:g="main-content-title",...l})=>(0,a.jsx)(u,{"aria-labelledby":g,as:"main",id:"main-content",tabIndex:-1,...l})},47754:(h,y,n)=>{"use strict";n.d(y,{z:()=>d});var a=n(85893),f=n(71997),m=n(16607);const u=(0,f.ZP)(m.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:g})=>g.spaces[3]};
    top: ${({theme:g})=>g.spaces[3]};
  }
`,d=({children:g})=>(0,a.jsx)(u,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:g})},5907:(h,y,n)=>{"use strict";n.d(y,{$:()=>u});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},f={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var m=n(55189);const u={colors:a.color,shadows:f.shadow,...m.x}},98:(h,y,n)=>{"use strict";n.d(y,{Z:()=>m});var a=n(85893);const f=u=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:(0,a.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),m=f}}]);
