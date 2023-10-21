(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[6383],{44174:v=>{function f(a,e,n,r){for(var l=-1,s=a==null?0:a.length;++l<s;){var p=a[l];e(r,p,n(p),a)}return r}v.exports=f},81119:(v,f,a)=>{var e=a(89881);function n(r,l,s,p){return e(r,function(i,d,E){l(p,i,s(i),E)}),p}v.exports=n},55189:(v,f,a)=>{var e=a(44174),n=a(81119),r=a(67206),l=a(1469);function s(p,i){return function(d,E){var x=l(d)?e:n,h=i?i():{};return x(d,p,r(E,2),h)}}v.exports=s},94654:(v,f,a)=>{var e=a(21078),n=a(35161);function r(l,s){return e(n(l,s),1)}v.exports=r},7739:(v,f,a)=>{var e=a(89465),n=a(55189),r=Object.prototype,l=r.hasOwnProperty,s=n(function(p,i,d){l.call(p,d)?p[d].push(i):e(p,d,[i])});v.exports=s},35161:(v,f,a)=>{var e=a(29932),n=a(67206),r=a(69199),l=a(1469);function s(p,i){var d=l(p)?e:r;return d(p,n(i,3))}v.exports=s},21817:(v,f,a)=>{"use strict";a.d(f,{G:()=>p,Y:()=>i});var e=a(85893),n=a(67294),r=a(71893),l=a(11047),s=a(15585);const p=(0,r.default)(l.k)`
  svg {
    height: ${({theme:d})=>d.spaces[3]};
    width: ${({theme:d})=>d.spaces[3]};

    > g,
    path {
      fill: ${({theme:d})=>d.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,i=n.forwardRef(({disabled:d,children:E,...x},h)=>(0,e.jsx)(p,{ref:h,"aria-disabled":d,as:"button",type:"button",disabled:d,padding:2,hasRadius:!0,background:"neutral0",borderColor:"neutral200",cursor:"pointer",...x,children:E}));i.displayName="BaseButton"},92978:(v,f,a)=>{"use strict";a.d(f,{m:()=>M});var e=a(67294),n=a(45697),r=a(71893);const l=(0,e.createContext)({gap:0,gridCols:12}),s=()=>o(l);var p=a(41580),i=a(69215);const d=(0,r.default)(p.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:c})=>c}, 1fr);
  ${({theme:c,gap:g})=>(0,i.Z)("gap",g,c)}
`,E=({gap:c,gridCols:g,...$})=>{const A=e.useMemo(()=>({gap:c,gridCols:g}),[c,g]);return e.createElement(l.Provider,{value:A},e.createElement(d,{gap:c,gridCols:g,...$}))};E.defaultProps={gap:0,gridCols:12},E.propTypes={gap:n.oneOfType([n.number,n.arrayOf(n.number)]),gridCols:n.number};const x=`${232/16}rem`,h=(0,r.default)(E)`
  width: ${x};
  background: ${({theme:c})=>c.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:c})=>c.colors.neutral200};
  z-index: 1;
`,M=({ariaLabel:c,...g})=>e.createElement(h,{"aria-label":c,as:"nav",...g});M.propTypes={ariaLabel:n.string.isRequired}},75143:(v,f,a)=>{"use strict";a.d(f,{p:()=>V});var e=a(67294),n=a(22522),r=a(45697),l=a(71893),s=a(41580),p=a(70004),i=a(11047);const d={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var E=a(2504);const x=t=>{const u=(0,e.useRef)();return(0,e.useEffect)(()=>{u.current=t}),u.current};var h=a(85893),M=a(21817),c=a(81703),g=a(63237);const $=e.forwardRef(({label:t,noBorder:u=!1,children:m,icon:b,disabled:y=!1,onClick:R,"aria-label":B,...P},T)=>{const C=(0,h.jsxs)(A,{"aria-disabled":y,background:y?"neutral150":void 0,borderWidth:u?0:void 0,justifyContent:"center",height:`${2}rem`,width:`${2}rem`,...P,ref:T,onClick:D=>{!y&&R&&R(D)},children:[(0,h.jsx)(g.T,{as:"span",children:t??B}),e.cloneElement(b||m,{"aria-hidden":!0,focusable:!1})]});return t?(0,h.jsx)(c.u,{label:t,children:C}):C}),A=(0,l.default)(M.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:t})=>t.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:t})=>t.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.neutral600};
      }
    }
  }
`,O=(0,l.default)(i.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-radius: ${({theme:t})=>`${t.borderRadius} 0 0 ${t.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:t})=>`0 ${t.borderRadius} ${t.borderRadius} 0`};
  }

  & ${A} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:t})=>t.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:t})=>t.colors.neutral100};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:t})=>t.colors.neutral150};
      svg {
        path {
          fill: ${({theme:t})=>t.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:t})=>t.colors.neutral600};
        }
      }
    }
  }
`,L=(0,e.createContext)({id:"",required:!1}),j=()=>(0,e.useContext)(L),w=(0,e.forwardRef)(({children:t,name:u,error:m,hint:b,id:y,required:R=!1,...B},P)=>{const T=(0,E.M)(y),C=(0,e.useMemo)(()=>({name:u,id:T,error:m,hint:b,required:R}),[m,T,b,u,R]);return(0,h.jsx)(s.x,{ref:P,...B,children:(0,h.jsx)(L.Provider,{value:C,children:t})})}),Z="[@strapi/design-system]:",z=t=>{const u=t;let m=!1;if(typeof u!="function")throw new TypeError(`${Z} once requires a function parameter`);return(...b)=>{m||(u(...b),m=!0)}};var U=a(75515);const K=z(console.warn),G=(0,e.forwardRef)(({children:t,action:u,required:m,...b},y)=>{const{id:R,required:B}=j(),P=B||m;return m!==void 0&&K('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,h.jsx)(U.Z,{ref:y,variant:"pi",textColor:"neutral800",htmlFor:R,fontWeight:"bold",as:"label",...b,children:(0,h.jsxs)(i.k,{alignItems:"center",children:[t,P&&(0,h.jsx)(q,{textColor:"danger600",children:"*"}),u&&(0,h.jsx)(ee,{marginLeft:1,children:u})]})})}),q=(0,l.default)(U.Z)`
  line-height: 0;
`,ee=(0,l.default)(i.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`;var X=a(15585);const J={S:6.5,M:10.5},te=(0,e.forwardRef)(({endAction:t,startAction:u,disabled:m=!1,onChange:b,size:y="M",...R},B)=>{const{id:P,error:T,hint:C,name:D,required:F}=j();let S;T?S=`${P}-error`:C&&(S=`${P}-hint`);const I=Boolean(T),k=Y=>{!m&&b&&b(Y)};return(0,h.jsxs)(H,{justifyContent:"space-between",hasError:I,disabled:m,children:[u?(0,h.jsx)(s.x,{paddingLeft:3,paddingRight:2,children:u}):null,(0,h.jsx)(ae,{id:P,name:D,ref:B,"aria-describedby":S,"aria-invalid":I,"aria-disabled":m,disabled:m,"data-disabled":m?"":void 0,hasLeftAction:Boolean(u),hasRightAction:Boolean(t),onChange:k,"aria-required":F,$size:y,...R}),t?(0,h.jsx)(s.x,{paddingLeft:2,paddingRight:3,children:t}):null]})}),ae=l.default.input`
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius};
  padding-bottom: ${({$size:t})=>`${J[t]/16}rem`};
  padding-left: ${({theme:t,hasLeftAction:u})=>u?0:t.spaces[4]};
  padding-right: ${({theme:t,hasRightAction:u})=>u?0:t.spaces[4]};
  padding-top: ${({$size:t})=>`${J[t]/16}rem`};
  cursor: ${t=>t["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:t})=>t.colors.neutral800};
  font-weight: 400;
  font-size: ${t=>t.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:t})=>t.colors.neutral500};
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
`,H=(0,l.default)(i.k)`
  border: 1px solid ${({theme:t,hasError:u})=>u?t.colors.danger600:t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  background: ${({theme:t})=>t.colors.neutral0};
  ${(0,X.k3)()}

  ${({theme:t,disabled:u})=>u?(0,l.css)`
          color: ${t.colors.neutral600};
          background: ${t.colors.neutral150};
        `:void 0}
`,re=(0,l.default)(i.k)`
  font-size: 1.6rem;
  padding: 0;
`,ne=(0,e.forwardRef)(({label:t,children:u,...m},b)=>(0,h.jsxs)(re,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...m,as:"button",ref:b,children:[(0,h.jsx)(g.T,{as:"span",children:t}),(0,e.cloneElement)(u,{"aria-hidden":!0,focusable:!1})]})),oe={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}},le=(0,l.default)(i.k)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:t})=>t.colors.neutral400};
  }
`,Q=(0,l.default)(i.k)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:t})=>t.colors.neutral800};
  }
`,se=l.default.div`
  border-radius: ${({theme:t})=>t.borderRadius};
  box-shadow: ${({theme:t})=>t.shadows.filterShadow};

  &:focus-within {
    ${Q} {
      svg path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }
  }

  ${H} {
    border: 1px solid transparent;
  }

  ${(0,X.k3)(H)}
`,N=(0,e.forwardRef)(({name:t,size:u,children:m,value:b,onClear:y,clearLabel:R,...B},P)=>{const T=(0,e.useRef)(null),C=b.length>0,D=S=>{y(S),T.current.focus()},F=P||T;return e.createElement(se,null,e.createElement(w,{name:t},e.createElement(g.T,null,e.createElement(G,null,m)),e.createElement(te,{ref:F,value:b,startAction:e.createElement(Q,null,e.createElement(n.Search,{"aria-hidden":!0})),size:u,endAction:C?e.createElement(ne,{label:R,onClick:D},e.createElement(le,null,e.createElement(n.Cross,null))):void 0,...B})))});N.displayName="Searchbar",N.defaultProps={value:"",size:"M"},N.propTypes={children:r.node.isRequired,clearLabel:r.string.isRequired,name:r.string.isRequired,onClear:r.func.isRequired,size:r.oneOf(Object.keys(oe.input)),value:r.string};const ie=t=>e.createElement("form",{...t,role:"search"}),_=(0,l.default)(p.i)`
  width: ${24/16}rem;
  background-color: ${({theme:t})=>t.colors.neutral200};
`,V=({as:t,label:u,searchLabel:m,searchable:b,onChange:y,value:R,onClear:B,onSubmit:P,id:T})=>{const[C,D]=(0,e.useState)(!1),F=x(C),S=(0,E.M)(T),I=(0,e.useRef)(),k=(0,e.useRef)();(0,e.useEffect)(()=>{C&&I.current&&I.current.focus(),F&&!C&&k.current&&k.current.focus()},[C,F]);const Y=()=>{D(W=>!W)},de=W=>{B(W),I.current.focus()},ce=W=>{W.relatedTarget?.id!==S&&D(!1)},ue=W=>{W.key===d.ESCAPE&&D(!1)};return C?e.createElement(s.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},e.createElement(ie,null,e.createElement(N,{name:"searchbar",value:R,onChange:y,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:ue,ref:I,onBlur:ce,onClear:de,onSubmit:P,clearLabel:"Clear",size:"S"},m)),e.createElement(s.x,{paddingLeft:2,paddingTop:4},e.createElement(_,null))):e.createElement(s.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},e.createElement(i.k,{justifyContent:"space-between",alignItems:"flex-start"},e.createElement(U.Z,{variant:"beta",as:t},u),b&&e.createElement($,{ref:k,onClick:Y,label:m,icon:e.createElement(n.Search,null)})),e.createElement(s.x,{paddingTop:4},e.createElement(_,null)))};V.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},V.propTypes={as:r.string,id:r.string,label:r.string.isRequired,onChange:r.func,onClear:r.func,onSubmit:r.func,searchLabel:r.string,searchable:r.bool,value:r.string}},73400:(v,f,a)=>{"use strict";a.d(f,{E:()=>M});var e=a(67294),n=a(22522),r=a(45697),l=a(71893),s=a(63507),p=a(41580),i=a(11047),d=a(75515);const E=(0,l.default)(p.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:c})=>c.colors.neutral800};
  svg > * {
    fill: ${({theme:c})=>c.colors.neutral600};
  }

  &.active {
    ${({theme:c})=>`
      background-color: ${c.colors.primary100};
      border-right: 2px solid ${c.colors.primary600};
      svg > * {
        fill: ${c.colors.primary700};
      }
      ${d.Z} {
        color: ${c.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,x=(0,l.default)(n.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:c,$active:g})=>g?c.colors.primary600:c.colors.neutral600};
  }
`,h=l.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=e.forwardRef(({children:c,icon:g,withBullet:$,as:A,isSubSectionChild:O,...L},j)=>e.createElement(E,{as:A,icon:g,background:"neutral100",paddingLeft:O?9:7,paddingBottom:2,paddingTop:2,ref:j,...L},e.createElement(i.k,null,g?e.createElement(h,null,g):e.createElement(x,null),e.createElement(p.x,{paddingLeft:2},e.createElement(d.Z,{as:"span"},c))),$&&e.createElement(p.x,{as:i.k,paddingRight:4},e.createElement(x,{$active:!0}))));M.displayName="SubNavLink",M.defaultProps={as:s.f,icon:null,isSubSectionChild:!1,withBullet:!1},M.propTypes={as:r.elementType,children:r.node.isRequired,icon:r.element,isSubSectionChild:r.bool,withBullet:r.bool}},29489:(v,f,a)=>{"use strict";a.d(f,{D:()=>g});var e=a(67294),n=a(45697),r=a(71893),l=a(22522),s=a(41580),p=a(11047),i=a(75515);const d=(0,r.default)(p.k)`
  border: none;
  padding: 0;
  background: transparent;
`,E=r.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:$})=>$?"0deg":"180deg"});
`,x=({collapsable:$,label:A,onClick:O,ariaExpanded:L,ariaControls:j})=>$?e.createElement(d,{as:"button",onClick:O,"aria-expanded":L,"aria-controls":j,textAlign:"left"},e.createElement(s.x,{paddingRight:1},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},A)),$&&e.createElement(E,{rotated:L},e.createElement(l.CarretDown,{"aria-hidden":!0}))):e.createElement(d,null,e.createElement(s.x,{paddingRight:1},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},A)));x.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},x.propTypes={ariaControls:n.string,ariaExpanded:n.bool,collapsable:n.bool,label:n.string.isRequired,onClick:n.func};var h=a(30190),M=a(2504);const c=(0,r.default)(s.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:$})=>$.colors.neutral500};
    }
  }
`,g=({collapsable:$,label:A,badgeLabel:O,children:L,id:j})=>{const[w,Z]=(0,e.useState)(!0),z=(0,M.M)(j),U=()=>{Z(K=>!K)};return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(c,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},e.createElement(s.x,{position:"relative",paddingRight:O?6:0},e.createElement(x,{onClick:U,ariaExpanded:w,ariaControls:z,collapsable:$,label:A}),O&&e.createElement(h.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},O))),(!$||w)&&e.createElement("ol",{id:z},e.Children.map(L,(K,G)=>e.createElement("li",{key:G},K))))};g.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},g.propTypes={badgeLabel:n.string,children:n.node.isRequired,collapsable:n.bool,id:n.string,label:n.string.isRequired}},34446:(v,f,a)=>{"use strict";a.d(f,{Z:()=>s});var e=a(67294),n=a(45697),r=a(41580),l=a(11047);const s=({children:p,spacing:i=2,horizontal:d=!1,...E})=>e.createElement(r.x,{paddingTop:2,paddingBottom:4},e.createElement(l.k,{as:"ol",gap:i,direction:d?"row":"column",alignItems:d?"center":"stretch",...E},e.Children.map(p,(x,h)=>e.createElement("li",{key:h},x))));s.propTypes={children:n.node.isRequired}}}]);
