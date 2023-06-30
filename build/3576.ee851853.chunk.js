(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3576],{44174:u=>{function p(e,t,n,a){for(var l=-1,o=e==null?0:e.length;++l<o;){var s=e[l];t(a,s,n(s),e)}return a}u.exports=p},81119:(u,p,e)=>{var t=e(89881);function n(a,l,o,s){return t(a,function(i,r,m){l(s,i,o(i),m)}),s}u.exports=n},55189:(u,p,e)=>{var t=e(44174),n=e(81119),a=e(67206),l=e(1469);function o(s,i){return function(r,m){var h=l(r)?t:n,E=i?i():{};return h(r,s,a(m,2),E)}}u.exports=o},94654:(u,p,e)=>{var t=e(21078),n=e(35161);function a(l,o){return t(n(l,o),1)}u.exports=a},7739:(u,p,e)=>{var t=e(89465),n=e(55189),a=Object.prototype,l=a.hasOwnProperty,o=n(function(s,i,r){l.call(s,r)?s[r].push(i):t(s,r,[i])});u.exports=o},35161:(u,p,e)=>{var t=e(29932),n=e(67206),a=e(69199),l=e(1469);function o(s,i){var r=l(s)?t:a;return r(s,n(i,3))}u.exports=o},48734:(u,p,e)=>{"use strict";e.d(p,{U:()=>M,y:()=>h});var t=e(85893),n=e(67294),a=e(71893),l=e(13819),o=e(41580),s=e(11047),i=e(2504),r=e(75515);const m=({theme:d,expanded:v,variant:c,disabled:g,error:_})=>_?`1px solid ${d.colors.danger600} !important`:g?`1px solid ${d.colors.neutral150}`:v?`1px solid ${d.colors.primary600}`:c==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,h=(0,a.default)(r.Z)``,E=(0,a.default)(o.x)`
  border: ${m};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${h} {
      color: ${({theme:d,expanded:v})=>v?void 0:d.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:d,expanded:v})=>v?void 0:d.colors.primary600};
    }

    & > ${s.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,M=({children:d,disabled:v=!1,error:c,expanded:g=!1,hasErrorMessage:_=!0,id:x,onToggle:y,toggle:B,size:O="M",variant:D="primary",shadow:f})=>{const P=(0,i.M)(x),C=n.useMemo(()=>({expanded:g,onToggle:y,toggle:B,id:P,size:O,variant:D,disabled:v}),[v,g,P,y,O,B,D]);return(0,t.jsxs)(l.S.Provider,{value:C,children:[(0,t.jsx)(E,{"data-strapi-expanded":g,disabled:v,"aria-disabled":v,expanded:g,hasRadius:!0,variant:D,error:c,shadow:f,children:d}),c&&_&&(0,t.jsx)(o.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:c})})]})}},63081:(u,p,e)=>{"use strict";e.d(p,{v:()=>l});var t=e(85893),n=e(13819),a=e(41580);const l=({children:o,...s})=>{const{expanded:i,id:r}=(0,n.A)();if(!i)return null;const m=`accordion-content-${r}`,h=`accordion-label-${r}`,E=`accordion-desc-${r}`;return(0,t.jsx)(a.x,{role:"region",id:m,"aria-labelledby":h,"aria-describedby":E,...s,children:o})}},13819:(u,p,e)=>{"use strict";e.d(p,{A:()=>a,S:()=>n});var t=e(67294);const n=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),a=()=>(0,t.useContext)(n)},74756:(u,p,e)=>{"use strict";e.d(p,{B:()=>v});var t=e(85893),n=e(22522),a=e(71893),l=e(48734),o=e(13819);const s=({expanded:c,disabled:g,variant:_})=>{let x="neutral100";return c?x="primary100":g?x="neutral150":_==="primary"&&(x="neutral0"),x};var i=e(11047),r=e(52624),m=e(39785),h=e(75515),E=e(25108);const M=(0,a.default)(m.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:c,expanded:g})=>g?c.colors.primary600:c.colors.neutral500};
    }
  }
`,d=(0,a.default)(i.k)`
  min-height: ${({theme:c,size:g})=>c.sizes.accordions[g]};
  border-radius: ${({theme:c,expanded:g})=>g?`${c.borderRadius} ${c.borderRadius} 0 0`:c.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:c})=>c.colors.primary600};
      }
    }
  }
`,v=({title:c,description:g,as:_="span",togglePosition:x="right",action:y,...B})=>{const{onToggle:O,toggle:D,expanded:f,id:P,size:C,variant:L,disabled:T}=(0,o.A)(),$=`accordion-content-${P}`,j=`accordion-label-${P}`,A=`accordion-desc-${P}`,b=C==="M"?6:4,I=C==="M"?b:b-2,W=s({expanded:f,disabled:T,variant:L}),U={as:_,fontWeight:C==="S"?"bold":void 0,id:j,textColor:f?"primary600":"neutral700",ellipsis:!0,variant:C==="M"?"delta":void 0},K=f?"primary600":"neutral600",R=f?"primary200":"neutral200",S=C==="M"?`${32/16}rem`:`${24/16}rem`,Z=()=>{T||(D&&!O?(E.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):O&&O())},F=(0,t.jsx)(i.k,{justifyContent:"center",borderRadius:"50%",height:S,width:S,transform:f?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:R,cursor:T?"not-allowed":"pointer",onClick:Z,shrink:0,children:(0,t.jsx)(r.J,{as:n.CarretDown,width:C==="M"?`${11/16}rem`:`${8/16}rem`,color:f?"primary600":"neutral600"})});return(0,t.jsx)(d,{paddingBottom:I,paddingLeft:b,paddingRight:b,paddingTop:I,background:W,expanded:f,size:C,justifyContent:"space-between",cursor:T?"not-allowed":"",children:(0,t.jsxs)(i.k,{gap:3,flex:1,maxWidth:"100%",children:[x==="left"&&F,(0,t.jsx)(M,{onClick:Z,"aria-disabled":T,"aria-expanded":f,"aria-controls":$,"aria-labelledby":j,"data-strapi-accordion-toggle":!0,expanded:f,type:"button",flex:1,minWidth:0,...B,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.y,{...U,children:c}),g&&(0,t.jsx)(h.Z,{as:"p",id:A,textColor:K,children:g})]})}),x==="right"&&(0,t.jsxs)(i.k,{gap:3,children:[F,y]}),x==="left"&&y]})})}},2407:(u,p,e)=>{"use strict";e.d(p,{$:()=>m,O:()=>h});var t=e(85893),n=e(22522),a=e(71893),l=e(41580),o=e(11047),s=e(75515),i=e(63237);const r=(0,a.default)(o.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:E})=>E.colors.neutral500};
    }
  }
  :last-of-type ${l.x} {
    display: none;
  }
  :last-of-type ${s.Z} {
    color: ${({theme:E})=>E.colors.neutral800};
    font-weight: ${({theme:E})=>E.fontWeights.bold};
  }
`,m=({children:E})=>(0,t.jsxs)(r,{inline:!0,as:"li",children:[(0,t.jsx)(s.Z,{variant:"pi",textColor:"neutral600",children:E}),(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(n.ChevronRight,{})})]});m.displayName="Crumb";const h=({children:E,label:M,...d})=>(0,t.jsxs)(o.k,{...d,children:[(0,t.jsx)(i.T,{children:M}),(0,t.jsx)("ol",{"aria-hidden":!0,children:E})]});h.displayName="Breadcrumbs"},36989:(u,p,e)=>{"use strict";e.d(p,{Z:()=>r});var t=e(67294),n=e(45697),a=e(71893),l=e(41580),o=e(11047);const s=(0,a.default)(o.k)`
  & > * + * {
    margin-left: ${({theme:m})=>m.spaces[2]};
  }

  margin-left: ${({pullRight:m})=>m?"auto":void 0};
`,i=(0,a.default)(s)`
  flex-shrink: 0;
`,r=({startActions:m,endActions:h})=>m||h?t.createElement(l.x,{paddingLeft:10,paddingRight:10},t.createElement(l.x,{paddingBottom:4},t.createElement(o.k,{justifyContent:"space-between",alignItems:"flex-start"},m&&t.createElement(s,{wrap:"wrap"},m),h&&t.createElement(i,{pullRight:!0},h)))):null;r.defaultProps={endActions:void 0,startActions:void 0},r.propTypes={endActions:n.node,startActions:n.node}},53192:(u,p,e)=>{"use strict";e.d(p,{m:()=>i});var t=e(67294),n=e(45697),a=e(71893),l=e(11276);const o=`${232/16}rem`,s=(0,a.default)(l.r)`
  width: ${o};
  background: ${({theme:r})=>r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
  z-index: 1;
`,i=({ariaLabel:r,...m})=>t.createElement(s,{"aria-label":r,as:"nav",...m});i.propTypes={ariaLabel:n.string.isRequired}},60984:(u,p,e)=>{"use strict";e.d(p,{p:()=>g});var t=e(67294),n=e(22522),a=e(45697),l=e(71893),o=e(41580),s=e(70004),i=e(11047),r=e(7801),m=e(2504);const h=_=>{const x=(0,t.useRef)();return(0,t.useEffect)(()=>{x.current=_}),x.current};var E=e(12028),M=e(49123),d=e(8509),v=e(75515);const c=(0,l.default)(s.i)`
  width: ${24/16}rem;
  background-color: ${({theme:_})=>_.colors.neutral200};
`,g=({as:_,label:x,searchLabel:y,searchable:B,onChange:O,value:D,onClear:f,onSubmit:P,id:C})=>{const[L,T]=(0,t.useState)(!1),$=h(L),j=(0,m.M)(C),A=(0,t.useRef)(),b=(0,t.useRef)();(0,t.useEffect)(()=>{L&&A.current&&A.current.focus(),$&&!L&&b.current&&b.current.focus()},[L,$]);const I=()=>{T(R=>!R)},W=R=>{f(R),A.current.focus()},U=R=>{R.relatedTarget?.id!==j&&T(!1)},K=R=>{R.key===r.y.ESCAPE&&T(!1)};return L?t.createElement(o.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},t.createElement(d.U,null,t.createElement(M.w,{name:"searchbar",value:D,onChange:O,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:K,ref:A,onBlur:U,onClear:W,onSubmit:P,clearLabel:"Clear",size:"S"},y)),t.createElement(o.x,{paddingLeft:2,paddingTop:4},t.createElement(c,null))):t.createElement(o.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},t.createElement(i.k,{justifyContent:"space-between",alignItems:"flex-start"},t.createElement(v.Z,{variant:"beta",as:_},x),B&&t.createElement(E.h,{ref:b,onClick:I,label:y,icon:t.createElement(n.Search,null)})),t.createElement(o.x,{paddingTop:4},t.createElement(c,null)))};g.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},g.propTypes={as:a.string,id:a.string,label:a.string.isRequired,onChange:a.func,onClear:a.func,onSubmit:a.func,searchLabel:a.string,searchable:a.bool,value:a.string}},73400:(u,p,e)=>{"use strict";e.d(p,{E:()=>M});var t=e(67294),n=e(22522),a=e(45697),l=e(71893),o=e(63507),s=e(41580),i=e(11047),r=e(75515);const m=(0,l.default)(s.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:d})=>d.colors.neutral800};
  svg > * {
    fill: ${({theme:d})=>d.colors.neutral600};
  }

  &.active {
    ${({theme:d})=>`
      background-color: ${d.colors.primary100};
      border-right: 2px solid ${d.colors.primary600};
      svg > * {
        fill: ${d.colors.primary700};
      }
      ${r.Z} {
        color: ${d.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,h=(0,l.default)(n.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:d,$active:v})=>v?d.colors.primary600:d.colors.neutral600};
  }
`,E=l.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=t.forwardRef(({children:d,icon:v,withBullet:c,as:g,isSubSectionChild:_,...x},y)=>t.createElement(m,{as:g,icon:v,background:"neutral100",paddingLeft:_?9:7,paddingBottom:2,paddingTop:2,ref:y,...x},t.createElement(i.k,null,v?t.createElement(E,null,v):t.createElement(h,null),t.createElement(s.x,{paddingLeft:2},t.createElement(r.Z,{as:"span"},d))),c&&t.createElement(s.x,{as:i.k,paddingRight:4},t.createElement(h,{$active:!0}))));M.displayName="SubNavLink",M.defaultProps={as:o.f,icon:null,isSubSectionChild:!1,withBullet:!1},M.propTypes={as:a.elementType,children:a.node.isRequired,icon:a.element,isSubSectionChild:a.bool,withBullet:a.bool}},29489:(u,p,e)=>{"use strict";e.d(p,{D:()=>v});var t=e(67294),n=e(45697),a=e(71893),l=e(22522),o=e(41580),s=e(11047),i=e(75515);const r=(0,a.default)(s.k)`
  border: none;
  padding: 0;
  background: transparent;
`,m=a.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:c})=>c?"0deg":"180deg"});
`,h=({collapsable:c,label:g,onClick:_,ariaExpanded:x,ariaControls:y})=>c?t.createElement(r,{as:"button",onClick:_,"aria-expanded":x,"aria-controls":y,textAlign:"left"},t.createElement(o.x,{paddingRight:1},t.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},g)),c&&t.createElement(m,{rotated:x},t.createElement(l.CarretDown,{"aria-hidden":!0}))):t.createElement(r,null,t.createElement(o.x,{paddingRight:1},t.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},g)));h.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},h.propTypes={ariaControls:n.string,ariaExpanded:n.bool,collapsable:n.bool,label:n.string.isRequired,onClick:n.func};var E=e(30190),M=e(2504);const d=(0,a.default)(o.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:c})=>c.colors.neutral500};
    }
  }
`,v=({collapsable:c,label:g,badgeLabel:_,children:x,id:y})=>{const[B,O]=(0,t.useState)(!0),D=(0,M.M)(y),f=()=>{O(P=>!P)};return t.createElement(s.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(d,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.createElement(o.x,{position:"relative",paddingRight:_?6:0},t.createElement(h,{onClick:f,ariaExpanded:B,ariaControls:D,collapsable:c,label:g}),_&&t.createElement(E.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},_))),(!c||B)&&t.createElement("ol",{id:D},t.Children.map(x,(P,C)=>t.createElement("li",{key:C},P))))};v.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},v.propTypes={badgeLabel:n.string,children:n.node.isRequired,collapsable:n.bool,id:n.string,label:n.string.isRequired}},34446:(u,p,e)=>{"use strict";e.d(p,{Z:()=>o});var t=e(67294),n=e(45697),a=e(41580),l=e(11047);const o=({children:s,spacing:i=2,horizontal:r=!1,...m})=>t.createElement(a.x,{paddingTop:2,paddingBottom:4},t.createElement(l.k,{as:"ol",gap:i,direction:r?"row":"column",alignItems:r?"center":"stretch",...m},t.Children.map(s,(h,E)=>t.createElement("li",{key:E},h))));o.propTypes={children:n.node.isRequired}},67109:(u,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=l=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),a=n},17772:(u,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=l=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{d:"M16.235 2.824a1.412 1.412 0 0 1 0-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 0 1-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 0 1-1.996-1.996l8.178-8.178h-2.945Zm4.942 10.588a1.412 1.412 0 0 1 2.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 0 1 0 2.824H2.824v18.353h18.353v-7.765Z",fill:"#32324D"})}),a=n}}]);
