"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2282],{88407:(O,b,s)=>{s.r(b),s.d(b,{ProvidersPage:()=>de,default:()=>Le});var t=s(53547),r=s(45349),a=s(57713),l=s(79371),h=s(26789),e=s(51541),n=s(42403),p=s(6090),f=s(62351),y=s(78549),L=s(22996),u=s(94487),c=s(37527),o=s(56127),d=s(36670),i=s(11700),x=s.n(i),P=s(86896),Z=s(88767),K=s(60881),X=s(18189),H=s(48683),pe=s(75878),ge=s(9370),fe=s(61585),ve=s(45124),ne=s(19442),be=s(94620),ye=s(77295),$e=s(94649),xe=s(45697),m=s.n(xe),Ee=s(65184),Pe=s(28469);const Q=({description:E,disabled:z,intlLabel:S,error:R,name:B,onChange:U,placeholder:$,providerToEditName:I,type:A,value:j})=>{const{formatMessage:T}=(0,P.Z)(),D=B==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:j,w=T({id:S.id,defaultMessage:S.defaultMessage},{provider:I,...S.values}),C=E?T({id:E.id,defaultMessage:E.defaultMessage},{provider:I,...E.values}):"";if(A==="bool")return t.createElement(Ee.s,{"aria-label":B,checked:j,disabled:z,hint:C,label:w,name:B,offLabel:T({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:T({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:W=>{U({target:{name:B,value:W.target.checked}})}});const q=$?T({id:$.id,defaultMessage:$.defaultMessage},{...$.values}):"",_=R?T({id:R,defaultMessage:R}):"";return t.createElement(Pe.o,{"aria-label":B,disabled:z,error:_,label:w,name:B,onChange:U,placeholder:q,type:A,value:D})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:m().shape({id:m().string.isRequired,defaultMessage:m().string.isRequired,values:m().object}),disabled:m().bool,error:m().string,intlLabel:m().shape({id:m().string.isRequired,defaultMessage:m().string.isRequired,values:m().object}).isRequired,name:m().string.isRequired,onChange:m().func.isRequired,placeholder:m().shape({id:m().string.isRequired,defaultMessage:m().string.isRequired,values:m().object}),providerToEditName:m().string.isRequired,type:m().string.isRequired,value:m().oneOfType([m().bool,m().string])};const Me=Q,k=({headerBreadcrumbs:E,initialData:z,isSubmiting:S,layout:R,isOpen:B,onSubmit:U,onToggle:$,providerToEditName:I})=>{const{formatMessage:A}=(0,P.Z)();return B?t.createElement(K.P,{onClose:$,labelledBy:"title"},t.createElement(X.x,null,t.createElement(be.O,{label:E.join(", ")},E.map((j,T,D)=>t.createElement(ye.$,{isCurrent:T===D.length-1,key:j},j)))),t.createElement($e.J9,{onSubmit:j=>U(j),initialValues:z,validationSchema:R.schema,validateOnChange:!1},({errors:j,handleChange:T,values:D})=>t.createElement(o.l0,null,t.createElement(H.f,null,t.createElement(pe.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(ge.r,{gap:5},R.form.map(w=>w.map(C=>t.createElement(fe.P,{key:C.name,col:C.size,xs:12},t.createElement(Me,{...C,error:j[C.name],onChange:T,value:D[C.name],providerToEditName:I}))))))),t.createElement(ve.m,{startActions:t.createElement(ne.z,{variant:"tertiary",onClick:$,type:"button"},A({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ne.z,{type:"submit",loading:S},A({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:m().arrayOf(m().string).isRequired,initialData:m().object,layout:m().shape({form:m().arrayOf(m().array),schema:m().object}).isRequired,isOpen:m().bool.isRequired,isSubmiting:m().bool.isRequired,onSubmit:m().func.isRequired,onToggle:m().func.isRequired,providerToEditName:m().string};const Te=k;var se=s(99771),M=s(62111),g=s(87561);const ae={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ie={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},F={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},le={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:F,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:F,size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:F,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:F,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:F,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),subdomain:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()})})}},de=()=>{const{formatMessage:E,locale:z}=(0,P.Z)(),S=(0,Z.useQueryClient)(),{trackUsage:R}=(0,o.rS)(),[B,U]=t.useState(!1),[$,I]=t.useState(null),A=(0,o.lm)(),{lockApp:j,unlockApp:T}=(0,o.o1)(),{get:D,put:w}=(0,o.kY)(),{formatAPIError:C}=(0,o.So)(),q=(0,o.Xe)(z,{sensitivity:"base"});(0,o.go)();const{isLoading:_,allowedActions:{canUpdate:W}}=(0,o.ss)({update:se._.updateProviders}),{isLoading:Oe,data:ee}=(0,Z.useQuery)(["users-permissions","get-providers"],async()=>{const{data:v}=await D("/users-permissions/providers");return v},{initialData:{}}),ce=(0,Z.useMutation)(v=>w("/users-permissions/providers",v),{async onSuccess(){await S.invalidateQueries(["users-permissions","providers"]),A({type:"success",message:{id:(0,M.OB)("notification.success.submit")}}),R("didEditAuthenticationProvider"),te(),T()},onError(v){A({type:"warning",message:C(v)}),T()},refetchActive:!1}),V=Object.entries(ee).reduce((v,[N,Ce])=>{const{icon:he,enabled:Ze,subdomain:Ae}=Ce;return v.push({name:N,icon:he==="envelope"?["fas","envelope"]:["fab",he],enabled:Ze,subdomain:Ae}),v},[]).sort((v,N)=>q.compare(v.name,N.name)),je=Oe||_,ue=t.useMemo(()=>$?!!V.find(N=>N.name===$)?.subdomain:!1,[V,$]),Be=t.useMemo(()=>$==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[$,ue]),te=()=>{U(v=>!v)},me=v=>{W&&(I(v.name),te())},Re=async v=>{j(),R("willEditAuthenticationProvider"),ce.mutate({providers:{...ee,[$]:v}})};return t.createElement(r.A,null,t.createElement(o.SL,{name:E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),t.createElement(a.o,null,t.createElement(l.T,{title:E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),je?t.createElement(o.dO,null):t.createElement(h.D,null,t.createElement(e.i,{colCount:3,rowCount:V.length+1},t.createElement(n.h,null,t.createElement(p.Tr,null,t.createElement(f.Th,null,t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},E({id:"global.name",defaultMessage:"Name"}))),t.createElement(f.Th,null,t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(f.Th,null,t.createElement(y.Z,{variant:"sigma"},t.createElement(L.T,null,E({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(u.p,null,V.map(v=>t.createElement(p.Tr,{key:v.name,...(0,o.X7)({fn:()=>me(v),condition:W})},t.createElement(f.Td,{width:"45%"},t.createElement(y.Z,{fontWeight:"semiBold",textColor:"neutral800"},v.name)),t.createElement(f.Td,{width:"65%"},t.createElement(y.Z,{textColor:v.enabled?"success600":"danger600","data-testid":`enable-${v.name}`},v.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(f.Td,{...o.UW},W&&t.createElement(c.h,{onClick:()=>me(v),noBorder:!0,icon:t.createElement(d.Z,null),label:"Edit"})))))))),t.createElement(Te,{initialData:ee[$],isOpen:B,isSubmiting:ce.isLoading,layout:Be,headerBreadcrumbs:[E({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),x()($)],onToggle:te,onSubmit:Re,providerToEditName:$}))},Le=()=>t.createElement(o.O4,{permissions:se._.readProviders},t.createElement(de,null))},62111:(O,b,s)=>{s.d(b,{YX:()=>l,OB:()=>h.Z});var t=s(41609),r=s.n(t);const l=e=>Object.keys(e).reduce((n,p)=>{const f=e[p].controllers,y=Object.keys(f).reduce((L,u)=>(r()(f[u])||(L[u]=f[u]),L),{});return r()(y)||(n[p]={controllers:y}),n},{});var h=s(74871)},26789:(O,b,s)=>{s.d(b,{D:()=>a});var t=s(2790),r=s(50781);const a=({children:l})=>(0,t.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:l})},79371:(O,b,s)=>{s.d(b,{T:()=>y});var t=s(2790),r=s(53547),a=s(88972);const l=c=>{const o=(0,r.useRef)(null),[d,i]=(0,r.useState)(!0),x=([P])=>{i(P.isIntersecting)};return(0,r.useEffect)(()=>{const P=o.current,Z=new IntersectionObserver(x,c);return P&&Z.observe(o.current),()=>{P&&Z.disconnect()}},[o,c]),[o,d]};var h=s(79698);const e=(c,o)=>{const d=(0,h.W)(o);(0,r.useLayoutEffect)(()=>{const i=new ResizeObserver(d);return Array.isArray(c)?c.forEach(x=>{x.current&&i.observe(x.current)}):c.current&&i.observe(c.current),()=>{i.disconnect()}},[c,d])};var n=s(50781),p=s(75878),f=s(78549);const y=c=>{const o=(0,r.useRef)(null),[d,i]=(0,r.useState)(null),[x,P]=l({root:null,rootMargin:"0px",threshold:0});return e(x,()=>{x.current&&i(x.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{o.current&&i(o.current.getBoundingClientRect())},[o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:d?.height},ref:x,children:P&&(0,t.jsx)(u,{ref:o,...c})}),!P&&(0,t.jsx)(u,{...c,sticky:!0,width:d?.width})]})};y.displayName="HeaderLayout";const L=(0,a.ZP)(n.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,u=r.forwardRef(({navigationAction:c,primaryAction:o,secondaryAction:d,subtitle:i,title:x,sticky:P,width:Z,...K},X)=>{const H=typeof i=="string";return P?(0,t.jsx)(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{children:[c&&(0,t.jsx)(n.x,{paddingRight:3,children:c}),(0,t.jsxs)(n.x,{children:[(0,t.jsx)(f.Z,{variant:"beta",as:"h1",...K,children:x}),H?(0,t.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:i}):i]}),d?(0,t.jsx)(n.x,{paddingLeft:4,children:d}):null]}),(0,t.jsx)(p.k,{children:o?(0,t.jsx)(n.x,{paddingLeft:2,children:o}):void 0})]})}):(0,t.jsxs)(n.x,{ref:X,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(n.x,{paddingBottom:2,children:c}):null,(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{minWidth:0,children:[(0,t.jsx)(f.Z,{as:"h1",variant:"alpha",...K,children:x}),d?(0,t.jsx)(n.x,{paddingLeft:4,children:d}):null]}),o]}),H?(0,t.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:i}):i]})})},45349:(O,b,s)=>{s.d(b,{A:()=>e});var t=s(2790),r=s(88972),a=s(50781);const l=(0,r.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,h=(0,r.ZP)(a.x)`
  overflow-x: hidden;
`,e=({sideNav:n,children:p})=>(0,t.jsxs)(l,{hasSideNav:!!n,children:[n,(0,t.jsx)(h,{paddingBottom:10,children:p})]})},57713:(O,b,s)=>{s.d(b,{o:()=>h});var t=s(2790),r=s(88972),a=s(50781);const l=(0,r.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:e="main-content-title",...n})=>(0,t.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},56832:(O,b,s)=>{s.d(b,{x:()=>h});var t=s(88972),r=s(63215),a=s(47430);const l={color:!0,cursor:!0,height:!0,width:!0},h=t.ZP.div.withConfig({shouldForwardProp:(e,n)=>!l[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,a.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,a.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,a.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,r.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,r.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,r.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,r.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,r.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,r.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,r.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,r.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,r.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:p})=>n?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,a.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:p,borderWidth:f})=>{if(n&&!p&&typeof f>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,a.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,a.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,a.$)(n.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:n})=>(0,a.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},25350:(O,b,s)=>{s.d(b,{Z:()=>o});var t=s(88972);const r="alpha",a="beta",l="delta",h="epsilon",e="omega",n="pi",p="sigma",f=[r,a,l,h,e,n,p],y=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,L=({variant:d=e,theme:i})=>{switch(d){case r:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case a:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case l:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case h:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case e:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case n:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case p:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}};var u=s(47430);const c={fontSize:!0,fontWeight:!0},o=t.ZP.span.withConfig({shouldForwardProp:(d,i)=>!c[d]&&i(d)})`
  ${L}
  ${y}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:i})=>(0,u.$)(d.fontWeights,i,void 0)};
  font-size: ${({theme:d,fontSize:i})=>(0,u.$)(d.fontSizes,i,void 0)};
  line-height: ${({theme:d,lineHeight:i})=>(0,u.$)(d.lineHeights,i,i)};
  color: ${({theme:d,textColor:i})=>d.colors[i||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},63215:(O,b,s)=>{s.d(b,{Z:()=>t});const t=(r,a,l)=>{if(!a)return;let h=Array.isArray(a)?a:[];if(!Array.isArray(a)&&typeof a=="object"&&(h=[a?.desktop,a?.tablet,a?.mobile]),h.length>0)return h.reduce((p,f,y)=>{if(f)switch(y){case 0:return`${p}${r}: ${l.spaces[f]};`;case 1:return`${p}${l.mediaQueries.tablet}{${r}: ${l.spaces[f]};}`;case 2:return`${p}${l.mediaQueries.mobile}{${r}: ${l.spaces[f]};}`;default:return p}return p},"");const e=l.spaces[a]||a;return`${r}: ${e};`}},47430:(O,b,s)=>{s.d(b,{$:()=>a});function t(l,h){return typeof l=="string"?!1:h in l}function r(l){return l&&typeof l=="object"&&!Array.isArray(l)}function a(l,h,e){return h&&t(l,h)?l[h]:e}},94620:(O,b,s)=>{s.d(b,{O:()=>L});var t=s(85893),r=s(53547),a=s(88972),l=s(56832),h=s(25350);const e=()=>(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=s(63215);const p={direction:!0},f=(0,a.ZP)(l.x).withConfig({shouldForwardProp:(u,c)=>!p[u]&&c(u)})`
  align-items: ${({alignItems:u="center"})=>u};
  display: ${({display:u="flex",inline:c})=>c?"inline-flex":u};
  flex-direction: ${({direction:u="row"})=>u};
  flex-shrink: ${({shrink:u})=>u};
  flex-wrap: ${({wrap:u})=>u};
  ${({gap:u,theme:c})=>(0,n.Z)("gap",u,c)};
  justify-content: ${({justifyContent:u})=>u};
`,y=(0,a.ZP)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,L=({label:u,children:c,...o})=>{const d=r.Children.toArray(c);return(0,t.jsx)(l.x,{"aria-label":u,...o,children:(0,t.jsx)(y,{as:"ol",children:r.Children.map(d,(i,x)=>{const P=d.length>1&&x+1<d.length;return(0,t.jsxs)(f,{inline:!0,as:"li",children:[i,P&&(0,t.jsx)(e,{})]})})})})};L.displayName="Breadcrumbs"},77295:(O,b,s)=>{s.d(b,{$:()=>l});var t=s(85893),r=s(56832),a=s(25350);const l=({children:h,isCurrent:e=!1,...n})=>(0,t.jsx)(r.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(a.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:h})});l.displayName="Crumb"}}]);
