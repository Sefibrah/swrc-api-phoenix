"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[695],{85078:(U,h,t)=>{t.r(h),t.d(h,{SettingsPage:()=>N,default:()=>F});var e=t(67294),a=t(73117),g=t(97132),i=t(68547),c=t(85018),D=t(41580),y=t(11047),p=t(20707),O=t(75515),S=t(29728),M=t(185),R=t(7681),v=t(11276),n=t(74571),l=t(53979),r=t(49066),s=t(17034),u=t(11817),x=t(18446),T=t.n(x),m=t(57197);const k=o=>o;var J=t(18172),W=t(92622),d=t.n(W);const L={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},$=(o,C)=>(0,J.default)(o,f=>{switch(C.type){case"CANCEL_CHANGES":{f.modifiedData=o.initialData;break}case"GET_DATA_SUCCEEDED":{f.isLoading=!1,f.initialData=C.data,f.modifiedData=C.data;break}case"ON_CHANGE":{d()(f,["modifiedData",...C.keys.split(".")],C.value);break}case"ON_SUBMIT":{f.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{f.initialData=o.modifiedData,f.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{f.isSubmiting=!1;break}default:return o}});var E=t(16838),b=t(25108);const N=()=>{const{formatMessage:o}=(0,g.useIntl)(),{lockApp:C,unlockApp:f}=(0,i.useOverlayBlocker)(),H=(0,i.useNotification)(),{get:j,put:G}=(0,i.useFetchClient)();(0,i.useFocusWhenNavigate)();const[{initialData:V,isLoading:Q,isSubmiting:X,modifiedData:z},I]=(0,e.useReducer)($,L,k),q=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const K=u.Z.CancelToken.source(),te=async()=>{try{const{data:{data:w}}=await j((0,m.IF)("settings"),{cancelToken:K.token});I({type:"GET_DATA_SUCCEEDED",data:w})}catch(w){b.error(w)}};return q.current&&te(),()=>{K.cancel("Operation canceled by the user."),q.current=!1}},[]);const _=T()(V,z),ee=async P=>{if(P.preventDefault(),!_){C(),I({type:"ON_SUBMIT"});try{await G((0,m.IF)("settings"),z),I({type:"SUBMIT_SUCCEEDED"}),H({type:"success",message:{id:"notification.form.success.fields"}})}catch(K){b.error(K),I({type:"ON_SUBMIT_ERROR"})}f()}},Y=({target:{name:P,value:K}})=>{I({type:"ON_CHANGE",keys:P,value:K})};return e.createElement(M.o,{tabIndex:-1},e.createElement(a.Helmet,{title:o({id:(0,m.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:ee},e.createElement(l.T,{title:o({id:(0,m.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(S.z,{disabled:_,"data-testid":"save-button",loading:X,type:"submit",startIcon:e.createElement(c.Z,null),size:"S"},o({id:"global.save",defaultMessage:"Save"})),subtitle:o({id:(0,m.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(r.D,null,Q?e.createElement(i.LoadingIndicatorPage,null):e.createElement(s.A,null,e.createElement(R.K,{spacing:12},e.createElement(D.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.K,{spacing:4},e.createElement(y.k,null,e.createElement(O.Z,{variant:"delta",as:"h2"},o({id:(0,m.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(v.r,{gap:6},e.createElement(n.P,{col:6,s:12},e.createElement(p.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:z.responsiveDimensions,hint:o({id:(0,m.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:o({id:(0,m.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:P=>{Y({target:{name:"responsiveDimensions",value:P.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(p.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:z.sizeOptimization,hint:o({id:(0,m.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:o({id:(0,m.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:P=>{Y({target:{name:"sizeOptimization",value:P.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(p.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:z.autoOrientation,hint:o({id:(0,m.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:o({id:(0,m.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:P=>{Y({target:{name:"autoOrientation",value:P.target.checked}})}}))))))))))},F=()=>e.createElement(i.CheckPagePermissions,{permissions:E.Z.settings},e.createElement(N,null))},49066:(U,h,t)=>{t.d(h,{D:()=>i});var e=t(67294),a=t(45697),g=t(41580);const i=({children:c})=>e.createElement(g.x,{paddingLeft:10,paddingRight:10},c);i.propTypes={children:a.node.isRequired}},53979:(U,h,t)=>{t.d(h,{T:()=>M});var e=t(67294),a=t(45697),g=t(71893),i=t(41580),c=t(11047);const D=n=>{const l=(0,e.useRef)(null),[r,s]=(0,e.useState)(!0),u=([x])=>{s(x.isIntersecting)};return(0,e.useEffect)(()=>{const x=l.current,T=new IntersectionObserver(u,n);return x&&T.observe(l.current),()=>{x&&T.disconnect()}},[l,n]),[l,r]};var y=t(79698);const p=(n,l)=>{const r=(0,y.W)(l);(0,e.useLayoutEffect)(()=>{const s=new ResizeObserver(r);return Array.isArray(n)?n.forEach(u=>{u.current&&s.observe(u.current)}):n.current&&s.observe(n.current),()=>{s.disconnect()}},[n,r])};var O=t(75515);const S=()=>{const n=(0,e.useRef)(null),[l,r]=(0,e.useState)(null),[s,u]=D({root:null,rootMargin:"0px",threshold:0});return p(s,()=>{s.current&&r(s.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),{containerRef:s,isVisible:u,baseHeaderLayoutRef:n,headerSize:l}},M=n=>{const{containerRef:l,isVisible:r,baseHeaderLayoutRef:s,headerSize:u}=S();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:u?.height},ref:l},r&&e.createElement(v,{ref:s,...n})),!r&&e.createElement(v,{...n,sticky:!0,width:u?.width}))};M.displayName="HeaderLayout";const R=(0,g.default)(i.x)`
  width: ${n=>n.width}px;
`,v=e.forwardRef(({navigationAction:n,primaryAction:l,secondaryAction:r,subtitle:s,title:u,sticky:x,width:T,...m},B)=>{const k=typeof s=="string";return x?e.createElement(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:T,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,null,n&&e.createElement(i.x,{paddingRight:3},n),e.createElement(i.x,null,e.createElement(O.Z,{variant:"beta",as:"h1",...m},u),k?e.createElement(O.Z,{variant:"pi",textColor:"neutral600"},s):s),r?e.createElement(i.x,{paddingLeft:4},r):null),e.createElement(c.k,null,l?e.createElement(i.x,{paddingLeft:2},l):void 0))):e.createElement(i.x,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(i.x,{paddingBottom:2},n):null,e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,{minWidth:0},e.createElement(O.Z,{as:"h1",variant:"alpha",...m},u),r?e.createElement(i.x,{paddingLeft:4},r):null),l),k?e.createElement(O.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},s):s)});v.displayName="BaseHeaderLayout",v.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},v.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},M.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},M.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(U,h,t)=>{t.d(h,{A:()=>y});var e=t(67294),a=t(45697),g=t(71893),i=t(41580);const c=(0,g.default)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,D=(0,g.default)(i.x)`
  overflow-x: hidden;
`,y=({sideNav:p,children:O})=>e.createElement(c,{hasSideNav:Boolean(p)},p,e.createElement(D,{paddingBottom:10},O));y.defaultProps={sideNav:void 0},y.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(U,h,t)=>{t.d(h,{o:()=>c});var e=t(67294),a=t(45697),g=t(71893);const i=g.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:D,...y})=>{const p=D||"main-content-title";return e.createElement(i,{"aria-labelledby":p,id:"main-content",tabIndex:-1,...y})};c.defaultProps={labelledBy:void 0},c.propTypes={labelledBy:a.string}},39785:(U,h,t)=>{t.d(h,{A:()=>R});var e=t(85893),a=t(67294),g=t(22522),i=t(71893),c=t(41580),D=t(11047),y=t(15585),p=t(75515);const O=(0,i.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,S=i.default.div`
  animation: ${O} 2s infinite linear;
  will-change: transform;
`,M=(0,i.default)(D.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:v})=>v.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:v})=>v.colors.primary600};
  }

  ${y.BF}
`,R=a.forwardRef(({children:v,startIcon:n,endIcon:l,onClick:r,disabled:s=!1,loading:u=!1,...x},T)=>{const m=r&&!s?r:void 0,B=s||u;return(0,e.jsxs)(M,{ref:T,"aria-disabled":B,onClick:m,as:"button",type:"button",...x,children:[(n||u)&&(0,e.jsx)(c.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:u?(0,e.jsx)(S,{children:(0,e.jsx)(g.Loader,{})}):n}),(0,e.jsx)(p.Z,{variant:"pi",textColor:B?"neutral600":"primary600",children:v}),l&&(0,e.jsx)(c.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:l})]})});R.displayName="TextButton"},20707:(U,h,t)=>{t.d(h,{s:()=>W});var e=t(67294),a=t(45697),g=t(71893),i=t(54574),c=t(19270),D=t(63428),y=t(96404),p=t(11047),O=t(2504),S=t(39785),M=t(75228),R=t(41580),v=t(85893),n=t(88262),l=t(75515),r=t(15585),s=t(63237);const u=g.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,x=(0,g.default)(R.x)`
  cursor: ${({disabled:d})=>d?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,r.k3)()}
`,T=(0,g.default)(p.k).attrs({hasRadius:!0})`
  background-color: ${({theme:d,checked:L,disabled:A})=>L?A?d.colors.neutral200:d.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:d,checked:L,disabled:A})=>L&&L!==null?A?d.colors.neutral300:d.colors.neutral200:A?d.colors.neutral150:d.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
`,m=g.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,B=e.forwardRef(({size:d,onLabel:L,offLabel:A,children:$,checked:E,disabled:b,onChange:N,...Z},F)=>{const{error:o,hint:C,id:f,name:H,required:j}=(0,n.U)(),G="neutral600";let V=!E&&E!==null?"danger700":G,Q=E?"primary600":G;const X=I=>{b||N(I)};let z;return o?z=`${f}-error`:C&&(z=`${f}-hint`),e.createElement(u,null,e.createElement(s.T,null,$),e.createElement(x,{hasRadius:!0,disabled:b,padding:1,display:"flex",background:b?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(T,{size:d,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:E===null?!1:!E,disabled:b},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:b?"neutral700":V},A)),e.createElement(T,{size:d,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:E===null?!1:E,disabled:b},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:b?"neutral700":Q},L)),e.createElement(m,{type:"checkbox","aria-disabled":b,"aria-describedby":z,onChange:I=>X(I),name:H,ref:F,"aria-required":j,...Z,checked:!(E===null||!E)})))});B.displayName="ToggleCheckbox",B.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},B.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(M.J.input))};const k=(0,g.default)(i.g)`
  max-width: 320px;
`,J=(0,g.default)(S.A)`
  align-self: flex-end;
  margin-left: auto;
`,W=({disabled:d,size:L,error:A,hint:$,label:E,name:b,labelAction:N,required:Z,id:F,onClear:o,clearLabel:C,checked:f,...H})=>{const j=(0,O.M)(F);return e.createElement(k,{name:b,hint:$,error:A,id:j,required:Z},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(p.k,null,e.createElement(c.Q,{action:N},E),C&&o&&f!==null&&!d&&e.createElement(J,{onClick:o},C)),e.createElement(B,{id:j,size:L,checked:f,disabled:d,...H},E),e.createElement(D.J,null),e.createElement(y.c,null)))};W.displayName="ToggleInput",W.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},W.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(M.J.input))}}}]);
