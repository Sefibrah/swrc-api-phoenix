(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2497],{94654:(y,$,n)=>{var e=n(21078),m=n(35161);function s(u,p){return e(m(u,p),1)}y.exports=s},35161:(y,$,n)=>{var e=n(29932),m=n(67206),s=n(69199),u=n(1469);function p(g,b){var v=u(g)?e:s;return v(g,m(b,3))}y.exports=p},17061:(y,$,n)=>{var e=n(18698).default;function m(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */y.exports=m=function(){return s},y.exports.__esModule=!0,y.exports.default=y.exports;var s={},u=Object.prototype,p=u.hasOwnProperty,g=Object.defineProperty||function(i,t,a){i[t]=a.value},b=typeof Symbol=="function"?Symbol:{},v=b.iterator||"@@iterator",C=b.asyncIterator||"@@asyncIterator",P=b.toStringTag||"@@toStringTag";function d(i,t,a){return Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),i[t]}try{d({},"")}catch{d=function(a,l,h){return a[l]=h}}function _(i,t,a,l){var h=t&&t.prototype instanceof T?t:T,c=Object.create(h.prototype),L=new oe(l||[]);return g(c,"_invoke",{value:Y(i,a,L)}),c}function f(i,t,a){try{return{type:"normal",arg:i.call(t,a)}}catch(l){return{type:"throw",arg:l}}}s.wrap=_;var E={};function T(){}function M(){}function O(){}var A={};d(A,v,function(){return this});var k=Object.getPrototypeOf,F=k&&k(k(te([])));F&&F!==u&&p.call(F,v)&&(A=F);var N=O.prototype=T.prototype=Object.create(A);function X(i){["next","throw","return"].forEach(function(t){d(i,t,function(a){return this._invoke(t,a)})})}function V(i,t){function a(h,c,L,w){var D=f(i[h],i,c);if(D.type!=="throw"){var W=D.arg,G=W.value;return G&&e(G)=="object"&&p.call(G,"__await")?t.resolve(G.__await).then(function(z){a("next",z,L,w)},function(z){a("throw",z,L,w)}):t.resolve(G).then(function(z){W.value=z,L(W)},function(z){return a("throw",z,L,w)})}w(D.arg)}var l;g(this,"_invoke",{value:function(c,L){function w(){return new t(function(D,W){a(c,L,D,W)})}return l=l?l.then(w,w):w()}})}function Y(i,t,a){var l="suspendedStart";return function(h,c){if(l==="executing")throw new Error("Generator is already running");if(l==="completed"){if(h==="throw")throw c;return ae()}for(a.method=h,a.arg=c;;){var L=a.delegate;if(L){var w=ee(L,a);if(w){if(w===E)continue;return w}}if(a.method==="next")a.sent=a._sent=a.arg;else if(a.method==="throw"){if(l==="suspendedStart")throw l="completed",a.arg;a.dispatchException(a.arg)}else a.method==="return"&&a.abrupt("return",a.arg);l="executing";var D=f(i,t,a);if(D.type==="normal"){if(l=a.done?"completed":"suspendedYield",D.arg===E)continue;return{value:D.arg,done:a.done}}D.type==="throw"&&(l="completed",a.method="throw",a.arg=D.arg)}}}function ee(i,t){var a=t.method,l=i.iterator[a];if(l===void 0)return t.delegate=null,a==="throw"&&i.iterator.return&&(t.method="return",t.arg=void 0,ee(i,t),t.method==="throw")||a!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),E;var h=f(l,i.iterator,t.arg);if(h.type==="throw")return t.method="throw",t.arg=h.arg,t.delegate=null,E;var c=h.arg;return c?c.done?(t[i.resultName]=c.value,t.next=i.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,E):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,E)}function se(i){var t={tryLoc:i[0]};1 in i&&(t.catchLoc=i[1]),2 in i&&(t.finallyLoc=i[2],t.afterLoc=i[3]),this.tryEntries.push(t)}function ne(i){var t=i.completion||{};t.type="normal",delete t.arg,i.completion=t}function oe(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(se,this),this.reset(!0)}function te(i){if(i){var t=i[v];if(t)return t.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length)){var a=-1,l=function h(){for(;++a<i.length;)if(p.call(i,a))return h.value=i[a],h.done=!1,h;return h.value=void 0,h.done=!0,h};return l.next=l}}return{next:ae}}function ae(){return{value:void 0,done:!0}}return M.prototype=O,g(N,"constructor",{value:O,configurable:!0}),g(O,"constructor",{value:M,configurable:!0}),M.displayName=d(O,P,"GeneratorFunction"),s.isGeneratorFunction=function(i){var t=typeof i=="function"&&i.constructor;return!!t&&(t===M||(t.displayName||t.name)==="GeneratorFunction")},s.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,O):(i.__proto__=O,d(i,P,"GeneratorFunction")),i.prototype=Object.create(N),i},s.awrap=function(i){return{__await:i}},X(V.prototype),d(V.prototype,C,function(){return this}),s.AsyncIterator=V,s.async=function(i,t,a,l,h){h===void 0&&(h=Promise);var c=new V(_(i,t,a,l),h);return s.isGeneratorFunction(t)?c:c.next().then(function(L){return L.done?L.value:c.next()})},X(N),d(N,P,"Generator"),d(N,v,function(){return this}),d(N,"toString",function(){return"[object Generator]"}),s.keys=function(i){var t=Object(i),a=[];for(var l in t)a.push(l);return a.reverse(),function h(){for(;a.length;){var c=a.pop();if(c in t)return h.value=c,h.done=!1,h}return h.done=!0,h}},s.values=te,oe.prototype={constructor:oe,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ne),!t)for(var a in this)a.charAt(0)==="t"&&p.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function l(W,G){return L.type="throw",L.arg=t,a.next=W,G&&(a.method="next",a.arg=void 0),!!G}for(var h=this.tryEntries.length-1;h>=0;--h){var c=this.tryEntries[h],L=c.completion;if(c.tryLoc==="root")return l("end");if(c.tryLoc<=this.prev){var w=p.call(c,"catchLoc"),D=p.call(c,"finallyLoc");if(w&&D){if(this.prev<c.catchLoc)return l(c.catchLoc,!0);if(this.prev<c.finallyLoc)return l(c.finallyLoc)}else if(w){if(this.prev<c.catchLoc)return l(c.catchLoc,!0)}else{if(!D)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return l(c.finallyLoc)}}}},abrupt:function(t,a){for(var l=this.tryEntries.length-1;l>=0;--l){var h=this.tryEntries[l];if(h.tryLoc<=this.prev&&p.call(h,"finallyLoc")&&this.prev<h.finallyLoc){var c=h;break}}c&&(t==="break"||t==="continue")&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var L=c?c.completion:{};return L.type=t,L.arg=a,c?(this.method="next",this.next=c.finallyLoc,E):this.complete(L)},complete:function(t,a){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&a&&(this.next=a),E},finish:function(t){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.finallyLoc===t)return this.complete(l.completion,l.afterLoc),ne(l),E}},catch:function(t){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc===t){var h=l.completion;if(h.type==="throw"){var c=h.arg;ne(l)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,l){return this.delegate={iterator:te(t),resultName:a,nextLoc:l},this.method==="next"&&(this.arg=void 0),E}},s}y.exports=m,y.exports.__esModule=!0,y.exports.default=y.exports},18698:y=>{function $(n){return y.exports=$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y.exports.__esModule=!0,y.exports.default=y.exports,$(n)}y.exports=$,y.exports.__esModule=!0,y.exports.default=y.exports},64687:(y,$,n)=>{var e=n(17061)();y.exports=e;try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},15861:(y,$,n)=>{"use strict";n.d($,{Z:()=>m});function e(s,u,p,g,b,v,C){try{var P=s[v](C),d=P.value}catch(_){p(_);return}P.done?u(d):Promise.resolve(d).then(g,b)}function m(s){return function(){var u=this,p=arguments;return new Promise(function(g,b){var v=s.apply(u,p);function C(d){e(v,g,b,C,P,"next",d)}function P(d){e(v,g,b,C,P,"throw",d)}C(void 0)})}}},21817:(y,$,n)=>{"use strict";n.d($,{G:()=>g,Y:()=>b});var e=n(85893),m=n(53547),s=n(88972),u=n(11047),p=n(15585);const g=(0,s.ZP)(u.k)`
  svg {
    height: ${({theme:v})=>v.spaces[3]};
    width: ${({theme:v})=>v.spaces[3]};

    > g,
    path {
      fill: ${({theme:v})=>v.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${p.BF}
`,b=m.forwardRef(({disabled:v,children:C,...P},d)=>(0,e.jsx)(g,{ref:d,"aria-disabled":v,as:"button",type:"button",disabled:v,padding:2,hasRadius:!0,background:"neutral0",borderColor:"neutral200",cursor:"pointer",...P,children:C}));b.displayName="BaseButton"},7801:(y,$,n)=>{"use strict";n.d($,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},15585:(y,$,n)=>{"use strict";n.d($,{BF:()=>s,k3:()=>m});const e=u=>({theme:p,size:g})=>p.sizes[u][g],m=(u="&")=>({theme:p,hasError:g})=>`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${u}:focus-within {
        border: 1px solid ${g?p.colors.danger600:p.colors.primary600};
        box-shadow: ${g?p.colors.danger600:p.colors.primary600} 0px 0px 0px 2px;
      }
    `,s=({theme:u})=>`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${u.colors.primary600};
    }
  }
`},36182:(y,$,n)=>{"use strict";n.d($,{r:()=>d});var e=n(53547),m=n(91393),s=n(45697),u=n(88972),p=n(63507),g=n(41580),b=n(15585),v=n(75515);const C=(0,u.ZP)(p.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:_})=>_?"none":void 0};

  svg path {
    fill: ${({disabled:_,theme:f})=>_?f.colors.neutral600:f.colors.primary600};
  }

  svg {
    font-size: ${10/16}rem;
  }

  &:hover,
  &:active {
    color: ${({theme:_})=>_.colors.primary800};
  }

  ${b.BF};
`,P=(0,u.ZP)(g.x)`
  display: flex;
`,d=e.forwardRef(({children:_,href:f,disabled:E,startIcon:T,endIcon:M,...O},A)=>e.createElement(C,{ref:A,href:f,disabled:E,...O},T&&e.createElement(P,{as:"span","aria-hidden":!0,paddingRight:2},T),e.createElement(v.Z,{textColor:E?"neutral600":"primary600"},_),M&&e.createElement(P,{as:"span","aria-hidden":!0,paddingLeft:2},M),f&&!M&&e.createElement(P,{as:"span","aria-hidden":!0,paddingLeft:2},e.createElement(m.Z,null))));d.displayName="Link",d.defaultProps={as:void 0,href:void 0,disabled:!1,startIcon:void 0,endIcon:void 0},d.propTypes={as:s.elementType,children:s.node.isRequired,disabled:s.bool,endIcon:s.element,href:s.string,startIcon:s.element}},92978:(y,$,n)=>{"use strict";n.d($,{m:()=>_});var e=n(53547),m=n(45697),s=n(88972);const u=(0,e.createContext)({gap:0,gridCols:12}),p=()=>o(u);var g=n(41580),b=n(69215);const v=(0,s.ZP)(g.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:f})=>f}, 1fr);
  ${({theme:f,gap:E})=>(0,b.Z)("gap",E,f)}
`,C=({gap:f,gridCols:E,...T})=>{const M=e.useMemo(()=>({gap:f,gridCols:E}),[f,E]);return e.createElement(u.Provider,{value:M},e.createElement(v,{gap:f,gridCols:E,...T}))};C.defaultProps={gap:0,gridCols:12},C.propTypes={gap:m.oneOfType([m.number,m.arrayOf(m.number)]),gridCols:m.number};const P=`${232/16}rem`,d=(0,s.ZP)(C)`
  width: ${P};
  background: ${({theme:f})=>f.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:f})=>f.colors.neutral200};
  z-index: 1;
`,_=({ariaLabel:f,...E})=>e.createElement(d,{"aria-label":f,as:"nav",...E});_.propTypes={ariaLabel:m.string.isRequired}},30389:(y,$,n)=>{"use strict";n.d($,{p:()=>le});var e=n(53547),m=n(34759),s=n(45697),u=n(88972),p=n(41580),g=n(70004),b=n(11047),v=n(7801),C=n(2504);const P=r=>{const x=(0,e.useRef)();return(0,e.useEffect)(()=>{x.current=r}),x.current};var d=n(85893),_=n(21817),f=n(84495),E=n(63237);const T=e.forwardRef(({label:r,noBorder:x=!1,children:R,icon:B,disabled:I=!1,onClick:j,"aria-label":K,...Z},U)=>{const S=(0,d.jsxs)(M,{"aria-disabled":I,background:I?"neutral150":void 0,borderWidth:x?0:void 0,justifyContent:"center",height:`${2}rem`,width:`${2}rem`,...Z,ref:U,onClick:H=>{!I&&j&&j(H)},children:[(0,d.jsx)(E.T,{as:"span",children:r??K}),e.cloneElement(B||R,{"aria-hidden":!0,focusable:!1})]});return r?(0,d.jsx)(f.u,{label:r,children:S}):S}),M=(0,u.ZP)(_.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:r})=>r.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:r})=>r.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,O=(0,u.ZP)(b.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${M} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`;var A=n(15800);const k=(0,e.createContext)({id:"",required:!1}),F=()=>(0,e.useContext)(k),N=(0,e.forwardRef)(({children:r,name:x,error:R,hint:B,id:I,required:j=!1,...K},Z)=>{const U=(0,C.M)(I),S=(0,e.useMemo)(()=>({name:x,id:U,error:R,hint:B,required:j}),[R,U,B,x,j]);return(0,d.jsx)(p.x,{ref:Z,...K,children:(0,d.jsx)(k.Provider,{value:S,children:r})})}),X="[@strapi/design-system]:",V=r=>{const x=r;let R=!1;if(typeof x!="function")throw new TypeError(`${X} once requires a function parameter`);return(...B)=>{R||(x(...B),R=!0)}};var Y=n(75515);const ee=V(console.warn),se=(0,e.forwardRef)(({children:r,action:x,required:R,...B},I)=>{const{id:j,required:K}=F(),Z=K||R;return R!==void 0&&ee('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,d.jsx)(Y.Z,{ref:I,variant:"pi",textColor:"neutral800",htmlFor:j,fontWeight:"bold",as:"label",...B,children:(0,d.jsxs)(b.k,{alignItems:"center",children:[r,Z&&(0,d.jsx)(ne,{textColor:"danger600",children:"*"}),x&&(0,d.jsx)(oe,{marginLeft:1,children:x})]})})}),ne=(0,u.ZP)(Y.Z)`
  line-height: 0;
`,oe=(0,u.ZP)(b.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`;var te=n(15585);const ae={S:6.5,M:10.5},i=(0,e.forwardRef)(({endAction:r,startAction:x,disabled:R=!1,onChange:B,size:I="M",...j},K)=>{const{id:Z,error:U,hint:S,name:H,required:re}=F();let J;U?J=`${Z}-error`:S&&(J=`${Z}-hint`);const Q=Boolean(U),ie=de=>{!R&&B&&B(de)};return(0,d.jsxs)(a,{justifyContent:"space-between",hasError:Q,disabled:R,children:[x?(0,d.jsx)(p.x,{paddingLeft:3,paddingRight:2,children:x}):null,(0,d.jsx)(t,{id:Z,name:H,ref:K,"aria-describedby":J,"aria-invalid":Q,"aria-disabled":R,disabled:R,"data-disabled":R?"":void 0,hasLeftAction:Boolean(x),hasRightAction:Boolean(r),onChange:ie,"aria-required":re,$size:I,...j}),r?(0,d.jsx)(p.x,{paddingLeft:2,paddingRight:3,children:r}):null]})}),t=u.ZP.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${ae[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:x})=>x?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:x})=>x?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${ae[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,a=(0,u.ZP)(b.k)`
  border: 1px solid ${({theme:r,hasError:x})=>x?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,te.k3)()}

  ${({theme:r,disabled:x})=>x?(0,u.iv)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`,l=(0,u.ZP)(b.k)`
  font-size: 1.6rem;
  padding: 0;
`,h=(0,e.forwardRef)(({label:r,children:x,...R},B)=>(0,d.jsxs)(l,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...R,as:"button",ref:B,children:[(0,d.jsx)(E.T,{as:"span",children:r}),(0,e.cloneElement)(x,{"aria-hidden":!0,focusable:!1})]})),c={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}},L=(0,u.ZP)(b.k)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,w=(0,u.ZP)(b.k)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,D=u.ZP.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${w} {
      svg path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${a} {
    border: 1px solid transparent;
  }

  ${(0,te.k3)(a)}
`,W=(0,e.forwardRef)(({name:r,size:x,children:R,value:B,onClear:I,clearLabel:j,...K},Z)=>{const U=(0,e.useRef)(null),S=B.length>0,H=J=>{I(J),U.current.focus()},re=Z||U;return e.createElement(D,null,e.createElement(N,{name:r},e.createElement(E.T,null,e.createElement(se,null,R)),e.createElement(i,{ref:re,value:B,startAction:e.createElement(w,null,e.createElement(m.Z,{"aria-hidden":!0})),size:x,endAction:S?e.createElement(h,{label:j,onClick:H},e.createElement(L,null,e.createElement(A.Z,null))):void 0,...K})))});W.displayName="Searchbar",W.defaultProps={value:"",size:"M"},W.propTypes={children:s.node.isRequired,clearLabel:s.string.isRequired,name:s.string.isRequired,onClear:s.func.isRequired,size:s.oneOf(Object.keys(c.input)),value:s.string};const G=r=>e.createElement("form",{...r,role:"search"}),z=(0,u.ZP)(g.i)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,le=({as:r,label:x,searchLabel:R,searchable:B,onChange:I,value:j,onClear:K,onSubmit:Z,id:U})=>{const[S,H]=(0,e.useState)(!1),re=P(S),J=(0,C.M)(U),Q=(0,e.useRef)(),ie=(0,e.useRef)();(0,e.useEffect)(()=>{S&&Q.current&&Q.current.focus(),re&&!S&&ie.current&&ie.current.focus()},[S,re]);const de=()=>{H(q=>!q)},ce=q=>{K(q),Q.current.focus()},ue=q=>{q.relatedTarget?.id!==J&&H(!1)},pe=q=>{q.key===v.y.ESCAPE&&H(!1)};return S?e.createElement(p.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},e.createElement(G,null,e.createElement(W,{name:"searchbar",value:j,onChange:I,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:pe,ref:Q,onBlur:ue,onClear:ce,onSubmit:Z,clearLabel:"Clear",size:"S"},R)),e.createElement(p.x,{paddingLeft:2,paddingTop:4},e.createElement(z,null))):e.createElement(p.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},e.createElement(b.k,{justifyContent:"space-between",alignItems:"flex-start"},e.createElement(Y.Z,{variant:"beta",as:r},x),B&&e.createElement(T,{ref:ie,onClick:de,label:R,icon:e.createElement(m.Z,null)})),e.createElement(p.x,{paddingTop:4},e.createElement(z,null)))};le.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},le.propTypes={as:s.string,id:s.string,label:s.string.isRequired,onChange:s.func,onClear:s.func,onSubmit:s.func,searchLabel:s.string,searchable:s.bool,value:s.string}},52305:(y,$,n)=>{"use strict";n.d($,{E:()=>_});var e=n(53547),m=n(22534),s=n(45697),u=n(88972),p=n(63507),g=n(41580),b=n(11047),v=n(75515);const C=(0,u.ZP)(g.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:f})=>f.colors.neutral800};
  svg > * {
    fill: ${({theme:f})=>f.colors.neutral600};
  }

  &.active {
    ${({theme:f})=>`
      background-color: ${f.colors.primary100};
      border-right: 2px solid ${f.colors.primary600};
      svg > * {
        fill: ${f.colors.primary700};
      }
      ${v.Z} {
        color: ${f.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,P=(0,u.ZP)(m.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:f,$active:E})=>E?f.colors.primary600:f.colors.neutral600};
  }
`,d=u.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,_=e.forwardRef(({children:f,icon:E,withBullet:T,as:M,isSubSectionChild:O,...A},k)=>e.createElement(C,{as:M,icon:E,background:"neutral100",paddingLeft:O?9:7,paddingBottom:2,paddingTop:2,ref:k,...A},e.createElement(b.k,null,E?e.createElement(d,null,E):e.createElement(P,null),e.createElement(g.x,{paddingLeft:2},e.createElement(v.Z,{as:"span"},f))),T&&e.createElement(g.x,{as:b.k,paddingRight:4},e.createElement(P,{$active:!0}))));_.displayName="SubNavLink",_.defaultProps={as:p.f,icon:null,isSubSectionChild:!1,withBullet:!1},_.propTypes={as:s.elementType,children:s.node.isRequired,icon:s.element,isSubSectionChild:s.bool,withBullet:s.bool}},29489:(y,$,n)=>{"use strict";n.d($,{D:()=>E});var e=n(53547),m=n(45697),s=n(88972),u=n(21514),p=n(41580),g=n(11047),b=n(75515);const v=(0,s.ZP)(g.k)`
  border: none;
  padding: 0;
  background: transparent;
`,C=s.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:T})=>T?"0deg":"180deg"});
`,P=({collapsable:T,label:M,onClick:O,ariaExpanded:A,ariaControls:k})=>T?e.createElement(v,{as:"button",onClick:O,"aria-expanded":A,"aria-controls":k,textAlign:"left"},e.createElement(p.x,{paddingRight:1},e.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},M)),T&&e.createElement(C,{rotated:A},e.createElement(u.Z,{"aria-hidden":!0}))):e.createElement(v,null,e.createElement(p.x,{paddingRight:1},e.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},M)));P.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},P.propTypes={ariaControls:m.string,ariaExpanded:m.bool,collapsable:m.bool,label:m.string.isRequired,onClick:m.func};var d=n(30190),_=n(2504);const f=(0,s.ZP)(p.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:T})=>T.colors.neutral500};
    }
  }
`,E=({collapsable:T,label:M,badgeLabel:O,children:A,id:k})=>{const[F,N]=(0,e.useState)(!0),X=(0,_.M)(k),V=()=>{N(Y=>!Y)};return e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(f,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},e.createElement(p.x,{position:"relative",paddingRight:O?6:0},e.createElement(P,{onClick:V,ariaExpanded:F,ariaControls:X,collapsable:T,label:M}),O&&e.createElement(d.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},O))),(!T||F)&&e.createElement("ol",{id:X},e.Children.map(A,(Y,ee)=>e.createElement("li",{key:ee},Y))))};E.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},E.propTypes={badgeLabel:m.string,children:m.node.isRequired,collapsable:m.bool,id:m.string,label:m.string.isRequired}},34446:(y,$,n)=>{"use strict";n.d($,{Z:()=>p});var e=n(53547),m=n(45697),s=n(41580),u=n(11047);const p=({children:g,spacing:b=2,horizontal:v=!1,...C})=>e.createElement(s.x,{paddingTop:2,paddingBottom:4},e.createElement(u.k,{as:"ol",gap:b,direction:v?"row":"column",alignItems:v?"center":"stretch",...C},e.Children.map(g,(P,d)=>e.createElement("li",{key:d},P))));p.propTypes={children:m.node.isRequired}}}]);
