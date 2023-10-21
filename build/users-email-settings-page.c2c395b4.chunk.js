"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8418],{6477:(B,g,s)=>{s.r(g),s.d(g,{default:()=>le});var t=s(53547),o=s(46683),i=s(57713),r=s(79371),u=s(26789),e=s(56127),a=s(86896),p=s(88767),f=s(99771),d=s(62111),b=s(60881),c=s(18189),m=s(48683),h=s(9370),l=s(61585),n=s(20603),E=s(45124),v=s(19442),R=s(94620),Z=s(77295),D=s(94649),S=s(45697),y=s.n(S),C=s(87561);const Y=C.Ry().shape({options:C.Ry().shape({from:C.Ry().shape({name:C.Z_().required(e.I0.required),email:C.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:C.Z_().email(e.I0.email),object:C.Z_().required(e.I0.required),message:C.Z_().required(e.I0.required)}).required(e.I0.required)}),W=({template:$,onToggle:P,onSubmit:x})=>{const{formatMessage:M}=(0,a.Z)();return t.createElement(b.P,{onClose:P,labelledBy:`${M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,d.OB)($.display),defaultMessage:$.display})}`},t.createElement(c.x,null,t.createElement(R.O,{label:`${M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,d.OB)($.display),defaultMessage:$.display})}`},t.createElement(Z.$,null,M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(Z.$,{isCurrent:!0},M({id:(0,d.OB)($.display),defaultMessage:$.display})))),t.createElement(D.J9,{onSubmit:x,initialValues:$,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:O,values:A,handleChange:L,isSubmitting:U})=>t.createElement(e.l0,null,t.createElement(m.f,null,t.createElement(h.r,{gap:5},t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:L,value:A.options.from.name,error:O?.options?.from?.name,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:L,value:A.options.from.email,error:O?.options?.from?.email,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:L,value:A.options.response_email,error:O?.options?.response_email,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:L,value:A.options.object,error:O?.options?.object,type:"text"})),t.createElement(l.P,{col:12,s:12},t.createElement(n.g,{label:M({id:(0,d.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:L,value:A.options.message,error:O?.options?.message&&M({id:O.options.message,defaultMessage:O.options.message})})))),t.createElement(E.m,{startActions:t.createElement(v.z,{onClick:P,variant:"tertiary"},"Cancel"),endActions:t.createElement(v.z,{loading:U,type:"submit"},"Finish")}))))};W.propTypes={template:y().shape({display:y().string,icon:y().string,options:y().shape({from:y().shape({name:y().string,email:y().string}),message:y().string,object:y().string,response_email:y().string})}).isRequired,onSubmit:y().func.isRequired,onToggle:y().func.isRequired};const k=W;var q=s(51541),_=s(42403),I=s(6090),j=s(62351),w=s(22996),z=s(78549),ee=s(94487),H=s(80907),K=s(37527),te=s(61378),N=s(36670),ae=s(8675);const Q=({canUpdate:$,onEditClick:P})=>{const{formatMessage:x}=(0,a.Z)();return t.createElement(q.i,{colCount:3,rowCount:3},t.createElement(_.h,null,t.createElement(I.Tr,null,t.createElement(j.Th,{width:"1%"},t.createElement(w.T,null,x({id:(0,d.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(j.Th,null,t.createElement(z.Z,{variant:"sigma",textColor:"neutral600"},x({id:(0,d.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(j.Th,{width:"1%"},t.createElement(w.T,null,x({id:(0,d.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(ee.p,null,t.createElement(I.Tr,{...(0,e.X7)({fn:()=>P("reset_password")})},t.createElement(j.Td,null,t.createElement(H.J,null,t.createElement(te.Z,{"aria-label":x({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(j.Td,null,t.createElement(z.Z,null,x({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>P("reset_password"),label:x({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)}))),t.createElement(I.Tr,{...(0,e.X7)({fn:()=>P("email_confirmation")})},t.createElement(j.Td,null,t.createElement(H.J,null,t.createElement(ae.Z,{"aria-label":x({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(j.Td,null,t.createElement(z.Z,null,x({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>P("email_confirmation"),label:x({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)})))))};Q.propTypes={canUpdate:y().bool.isRequired,onEditClick:y().func.isRequired};const se=Q,ne=()=>t.createElement(e.O4,{permissions:f._.readEmailTemplates},t.createElement(ie,null)),ie=()=>{const{formatMessage:$}=(0,a.Z)(),{trackUsage:P}=(0,e.rS)(),{notifyStatus:x}=(0,o.G)(),M=(0,e.lm)(),{lockApp:O,unlockApp:A}=(0,e.o1)(),L=(0,p.useQueryClient)(),{get:U,put:oe}=(0,e.kY)(),{formatAPIError:V}=(0,e.So)();(0,e.go)();const[re,de]=t.useState(!1),[G,me]=t.useState(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,e.ss)({update:f._.updateEmailTemplates}),{isLoading:pe,data:X}=(0,p.useQuery)(["users-permissions","email-templates"],async()=>{const{data:T}=await U("/users-permissions/email-templates");return T},{onSuccess(){x($({id:(0,d.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(T){M({type:"warning",message:V(T)})}}),ge=ce||pe,F=()=>{de(T=>!T)},fe=T=>{me(T),F()},J=(0,p.useMutation)(T=>oe("/users-permissions/email-templates",{"email-templates":T}),{async onSuccess(){await L.invalidateQueries(["users-permissions","email-templates"]),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),P("didEditEmailTemplates"),A(),F()},onError(T){M({type:"warning",message:V(T)}),A()},refetchActive:!0}),he=T=>{O(),P("willEditEmailTemplates");const Ee={...X,[G]:T};J.mutate(Ee)};return ge?t.createElement(i.o,{"aria-busy":"true"},t.createElement(e.SL,{name:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(u.D,null,t.createElement(e.dO,null))):t.createElement(i.o,{"aria-busy":J.isLoading},t.createElement(e.SL,{name:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(u.D,null,t.createElement(se,{onEditClick:fe,canUpdate:ue}),re&&t.createElement(k,{template:X[G],onToggle:F,onSubmit:he})))},le=ne},62111:(B,g,s)=>{s.d(g,{YX:()=>r,OB:()=>u.Z});var t=s(41609),o=s.n(t);const r=e=>Object.keys(e).reduce((a,p)=>{const f=e[p].controllers,d=Object.keys(f).reduce((b,c)=>(o()(f[c])||(b[c]=f[c]),b),{});return o()(d)||(a[p]={controllers:d}),a},{});var u=s(74871)},26789:(B,g,s)=>{s.d(g,{D:()=>i});var t=s(2790),o=s(50781);const i=({children:r})=>(0,t.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:r})},79371:(B,g,s)=>{s.d(g,{T:()=>d});var t=s(2790),o=s(53547),i=s(88972);const r=m=>{const h=(0,o.useRef)(null),[l,n]=(0,o.useState)(!0),E=([v])=>{n(v.isIntersecting)};return(0,o.useEffect)(()=>{const v=h.current,R=new IntersectionObserver(E,m);return v&&R.observe(h.current),()=>{v&&R.disconnect()}},[h,m]),[h,l]};var u=s(79698);const e=(m,h)=>{const l=(0,u.W)(h);(0,o.useLayoutEffect)(()=>{const n=new ResizeObserver(l);return Array.isArray(m)?m.forEach(E=>{E.current&&n.observe(E.current)}):m.current&&n.observe(m.current),()=>{n.disconnect()}},[m,l])};var a=s(50781),p=s(75878),f=s(78549);const d=m=>{const h=(0,o.useRef)(null),[l,n]=(0,o.useState)(null),[E,v]=r({root:null,rootMargin:"0px",threshold:0});return e(E,()=>{E.current&&n(E.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{h.current&&n(h.current.getBoundingClientRect())},[h]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:l?.height},ref:E,children:v&&(0,t.jsx)(c,{ref:h,...m})}),!v&&(0,t.jsx)(c,{...m,sticky:!0,width:l?.width})]})};d.displayName="HeaderLayout";const b=(0,i.ZP)(a.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,c=o.forwardRef(({navigationAction:m,primaryAction:h,secondaryAction:l,subtitle:n,title:E,sticky:v,width:R,...Z},D)=>{const S=typeof n=="string";return v?(0,t.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:R,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{children:[m&&(0,t.jsx)(a.x,{paddingRight:3,children:m}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(f.Z,{variant:"beta",as:"h1",...Z,children:E}),S?(0,t.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:n}):n]}),l?(0,t.jsx)(a.x,{paddingLeft:4,children:l}):null]}),(0,t.jsx)(p.k,{children:h?(0,t.jsx)(a.x,{paddingLeft:2,children:h}):void 0})]})}):(0,t.jsxs)(a.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,t.jsx)(a.x,{paddingBottom:2,children:m}):null,(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{minWidth:0,children:[(0,t.jsx)(f.Z,{as:"h1",variant:"alpha",...Z,children:E}),l?(0,t.jsx)(a.x,{paddingLeft:4,children:l}):null]}),h]}),S?(0,t.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:n}):n]})})},57713:(B,g,s)=>{s.d(g,{o:()=>u});var t=s(2790),o=s(88972),i=s(50781);const r=(0,o.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:e="main-content-title",...a})=>(0,t.jsx)(r,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...a})},56832:(B,g,s)=>{s.d(g,{x:()=>u});var t=s(88972),o=s(63215),i=s(47430);const r={color:!0,cursor:!0,height:!0,width:!0},u=t.ZP.div.withConfig({shouldForwardProp:(e,a)=>!r[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,i.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,i.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,i.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,o.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,o.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,o.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,o.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,o.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,o.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,o.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,o.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,o.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:p})=>a?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,i.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:p,borderWidth:f})=>{if(a&&!p&&typeof f>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,i.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:a})=>(0,i.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},25350:(B,g,s)=>{s.d(g,{Z:()=>h});var t=s(88972);const o="alpha",i="beta",r="delta",u="epsilon",e="omega",a="pi",p="sigma",f=[o,i,r,u,e,a,p],d=({ellipsis:l=!1})=>l&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,b=({variant:l=e,theme:n})=>{switch(l){case o:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case i:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case r:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case u:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case a:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case p:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var c=s(47430);const m={fontSize:!0,fontWeight:!0},h=t.ZP.span.withConfig({shouldForwardProp:(l,n)=>!m[l]&&n(l)})`
  ${b}
  ${d}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:l,fontWeight:n})=>(0,c.$)(l.fontWeights,n,void 0)};
  font-size: ${({theme:l,fontSize:n})=>(0,c.$)(l.fontSizes,n,void 0)};
  line-height: ${({theme:l,lineHeight:n})=>(0,c.$)(l.lineHeights,n,n)};
  color: ${({theme:l,textColor:n})=>l.colors[n||"neutral800"]};
  text-align: ${({textAlign:l})=>l};
  text-decoration: ${({textDecoration:l})=>l};
  text-transform: ${({textTransform:l})=>l};
`},63215:(B,g,s)=>{s.d(g,{Z:()=>t});const t=(o,i,r)=>{if(!i)return;let u=Array.isArray(i)?i:[];if(!Array.isArray(i)&&typeof i=="object"&&(u=[i?.desktop,i?.tablet,i?.mobile]),u.length>0)return u.reduce((p,f,d)=>{if(f)switch(d){case 0:return`${p}${o}: ${r.spaces[f]};`;case 1:return`${p}${r.mediaQueries.tablet}{${o}: ${r.spaces[f]};}`;case 2:return`${p}${r.mediaQueries.mobile}{${o}: ${r.spaces[f]};}`;default:return p}return p},"");const e=r.spaces[i]||i;return`${o}: ${e};`}},47430:(B,g,s)=>{s.d(g,{$:()=>i});function t(r,u){return typeof r=="string"?!1:u in r}function o(r){return r&&typeof r=="object"&&!Array.isArray(r)}function i(r,u,e){return u&&t(r,u)?r[u]:e}},94620:(B,g,s)=>{s.d(g,{O:()=>b});var t=s(85893),o=s(53547),i=s(88972),r=s(56832),u=s(25350);const e=()=>(0,t.jsx)(r.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(u.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=s(63215);const p={direction:!0},f=(0,i.ZP)(r.x).withConfig({shouldForwardProp:(c,m)=>!p[c]&&m(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:m})=>m?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:m})=>(0,a.Z)("gap",c,m)};
  justify-content: ${({justifyContent:c})=>c};
`,d=(0,i.ZP)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,b=({label:c,children:m,...h})=>{const l=o.Children.toArray(m);return(0,t.jsx)(r.x,{"aria-label":c,...h,children:(0,t.jsx)(d,{as:"ol",children:o.Children.map(l,(n,E)=>{const v=l.length>1&&E+1<l.length;return(0,t.jsxs)(f,{inline:!0,as:"li",children:[n,v&&(0,t.jsx)(e,{})]})})})})};b.displayName="Breadcrumbs"},77295:(B,g,s)=>{s.d(g,{$:()=>r});var t=s(85893),o=s(56832),i=s(25350);const r=({children:u,isCurrent:e=!1,...a})=>(0,t.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:u})});r.displayName="Crumb"}}]);
