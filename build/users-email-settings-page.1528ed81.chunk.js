"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8418],{95972:(D,E,t)=>{t.r(E),t.d(E,{default:()=>oe});var e=t(67294),s=t(23724),p=t(97132),a=t(68547),m=t(14087),M=t(185),O=t(53979),f=t(49066),g=t(81912),l=t(89031);const r=async()=>{const{get:d}=(0,a.getFetchClient)(),{data:h}=await d((0,l.Gc)("email-templates"));return h},P=d=>{const{put:h}=(0,a.getFetchClient)();return h((0,l.Gc)("email-templates"),d)};var v=t(45697),n=t.n(v),u=t(11057),c=t(63985),o=t(47144),i=t(18374),R=t(550),L=t(63237),I=t(75515),Z=t(12028),U=t(52624),$=t(4585),Q=t(30815),J=t(85018);const H=({canUpdate:d,onEditClick:h})=>{const{formatMessage:y}=(0,p.useIntl)();return e.createElement(u.i,{colCount:3,rowCount:3},e.createElement(c.h,null,e.createElement(o.Tr,null,e.createElement(i.Th,{width:"1%"},e.createElement(L.T,null,y({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(i.Th,null,e.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},y({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(i.Th,{width:"1%"},e.createElement(L.T,null,y({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(R.p,null,e.createElement(o.Tr,{...(0,a.onRowClick)({fn:()=>h("reset_password")})},e.createElement(i.Td,null,e.createElement(U.J,null,e.createElement(Q.Z,{"aria-label":y({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(i.Td,null,e.createElement(I.Z,null,y({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(i.Td,{...a.stopPropagation},e.createElement(Z.h,{onClick:()=>h("reset_password"),label:y({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement($.Z,null)}))),e.createElement(o.Tr,{...(0,a.onRowClick)({fn:()=>h("email_confirmation")})},e.createElement(i.Td,null,e.createElement(U.J,null,e.createElement(J.Z,{"aria-label":y({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(i.Td,null,e.createElement(I.Z,null,y({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(i.Td,{...a.stopPropagation},e.createElement(Z.h,{onClick:()=>h("email_confirmation"),label:y({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement($.Z,null)})))))};H.propTypes={canUpdate:n().bool.isRequired,onEditClick:n().func.isRequired};const X=H;var Y=t(80831),w=t(42866),k=t(24969),q=t(59946),_=t(36856),ee=t(11276),j=t(74571),K=t(29728),F=t(2407),te=t(64256),C=t(53209);const ae=C.Ry().shape({options:C.Ry().shape({from:C.Ry().shape({name:C.Z_().required(a.translatedErrors.required),email:C.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required)}).required(),response_email:C.Z_().email(a.translatedErrors.email),object:C.Z_().required(a.translatedErrors.required),message:C.Z_().required(a.translatedErrors.required)}).required(a.translatedErrors.required)}),N=({template:d,onToggle:h,onSubmit:y})=>{const{formatMessage:T}=(0,p.useIntl)();return e.createElement(w.P,{onClose:h,labelledBy:`${T({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,l.OB)(d.display),defaultMessage:d.display})}`},e.createElement(k.x,null,e.createElement(F.O,{label:`${T({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,l.OB)(d.display),defaultMessage:d.display})}`},e.createElement(F.$,null,T({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(F.$,null,T({id:(0,l.OB)(d.display),defaultMessage:d.display})))),e.createElement(Y.Formik,{onSubmit:y,initialValues:d,validateOnChange:!1,validationSchema:ae,enableReinitialize:!0},({errors:B,values:x,handleChange:b,isSubmitting:S})=>e.createElement(a.Form,null,e.createElement(q.f,null,e.createElement(ee.r,{gap:5},e.createElement(j.P,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:b,value:x.options.from.name,error:B?.options?.from?.name,type:"text"})),e.createElement(j.P,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:b,value:x.options.from.email,error:B?.options?.from?.email,type:"text"})),e.createElement(j.P,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:b,value:x.options.response_email,error:B?.options?.response_email,type:"text"})),e.createElement(j.P,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:b,value:x.options.object,error:B?.options?.object,type:"text"})),e.createElement(j.P,{col:12,s:12},e.createElement(te.g,{label:T({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:b,value:x.options.message,error:B?.options?.message&&T({id:B.options.message,defaultMessage:B.options.message})})))),e.createElement(_.m,{startActions:e.createElement(K.z,{onClick:h,variant:"tertiary"},"Cancel"),endActions:e.createElement(K.z,{loading:S,type:"submit"},"Finish")}))))};N.propTypes={template:n().shape({display:n().string,icon:n().string,options:n().shape({from:n().shape({name:n().string,email:n().string}),message:n().string,object:n().string,response_email:n().string})}).isRequired,onSubmit:n().func.isRequired,onToggle:n().func.isRequired};const ne=N,le=()=>e.createElement(a.CheckPagePermissions,{permissions:g.Z.readEmailTemplates},e.createElement(se,null)),se=()=>{const{formatMessage:d}=(0,p.useIntl)(),{trackUsage:h}=(0,a.useTracking)(),{notifyStatus:y}=(0,m.G)(),T=(0,a.useNotification)(),{lockApp:B,unlockApp:x}=(0,a.useOverlayBlocker)(),b=(0,e.useRef)(h),S=(0,s.useQueryClient)();(0,a.useFocusWhenNavigate)();const[ie,re]=(0,e.useState)(!1),[G,de]=(0,e.useState)(null),me=(0,e.useMemo)(()=>({update:g.Z.updateEmailTemplates}),[]),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.useRBAC)(me),{status:pe,data:V}=(0,s.useQuery)("email-templates",()=>r(),{onSuccess(){y(d({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",W=()=>{re(A=>!A)},ge=A=>{de(A),W()},z=(0,s.useMutation)(A=>P({"email-templates":A}),{async onSuccess(){await S.invalidateQueries("email-templates"),T({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),b.current("didEditEmailTemplates"),x(),W()},onError(){T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),x()},refetchActive:!0}),{isLoading:fe}=z,ve=A=>{B(),b.current("willEditEmailTemplates");const he={...V,[G]:A};z.mutate(he)};return Ee?e.createElement(M.o,{"aria-busy":"true"},e.createElement(a.SettingsPageTitle,{name:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.T,{title:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(f.D,null,e.createElement(a.LoadingIndicatorPage,null))):e.createElement(M.o,{"aria-busy":fe},e.createElement(a.SettingsPageTitle,{name:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.T,{title:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(f.D,null,e.createElement(X,{onEditClick:ge,canUpdate:ue}),ie&&e.createElement(ne,{template:V[G],onToggle:W,onSubmit:ve})))},oe=le},89031:(D,E,t)=>{t.d(E,{YX:()=>p,Gc:()=>M,OB:()=>O.Z});var e=t(96486);const p=f=>Object.keys(f).reduce((g,l)=>{const r=f[l].controllers,P=Object.keys(r).reduce((v,n)=>((0,e.isEmpty)(r[n])||(v[n]=r[n]),v),{});return(0,e.isEmpty)(P)||(g[l]={controllers:P}),g},{});var a=t(31498);const M=f=>`/${a.Z}/${f}`;var O=t(84757)},2407:(D,E,t)=>{t.d(E,{$:()=>g,O:()=>l});var e=t(85893),s=t(22522),p=t(71893),a=t(41580),m=t(11047),M=t(75515),O=t(63237);const f=(0,p.default)(m.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:r})=>r.colors.neutral500};
    }
  }
  :last-of-type ${a.x} {
    display: none;
  }
  :last-of-type ${M.Z} {
    color: ${({theme:r})=>r.colors.neutral800};
    font-weight: ${({theme:r})=>r.fontWeights.bold};
  }
`,g=({children:r})=>(0,e.jsxs)(f,{inline:!0,as:"li",children:[(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral600",children:r}),(0,e.jsx)(a.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(s.ChevronRight,{})})]});g.displayName="Crumb";const l=({children:r,label:P,...v})=>(0,e.jsxs)(m.k,{...v,children:[(0,e.jsx)(O.T,{children:P}),(0,e.jsx)("ol",{"aria-hidden":!0,children:r})]});l.displayName="Breadcrumbs"},49066:(D,E,t)=>{t.d(E,{D:()=>a});var e=t(67294),s=t(45697),p=t(41580);const a=({children:m})=>e.createElement(p.x,{paddingLeft:10,paddingRight:10},m);a.propTypes={children:s.node.isRequired}},53979:(D,E,t)=>{t.d(E,{T:()=>r});var e=t(67294),s=t(45697),p=t(71893),a=t(41580),m=t(11047);const M=n=>{const u=(0,e.useRef)(null),[c,o]=(0,e.useState)(!0),i=([R])=>{o(R.isIntersecting)};return(0,e.useEffect)(()=>{const R=u.current,L=new IntersectionObserver(i,n);return R&&L.observe(u.current),()=>{R&&L.disconnect()}},[u,n]),[u,c]};var O=t(98402);const f=(n,u)=>{const c=(0,O.useCallbackRef)(u);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(c);return Array.isArray(n)?n.forEach(i=>{i.current&&o.observe(i.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,c])};var g=t(75515);const l=()=>{const n=(0,e.useRef)(null),[u,c]=(0,e.useState)(null),[o,i]=M({root:null,rootMargin:"0px",threshold:0});return f(o,()=>{o.current&&c(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&c(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:i,baseHeaderLayoutRef:n,headerSize:u}},r=n=>{const{containerRef:u,isVisible:c,baseHeaderLayoutRef:o,headerSize:i}=l();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:i?.height},ref:u},c&&e.createElement(v,{ref:o,...n})),!c&&e.createElement(v,{...n,sticky:!0,width:i?.width}))};r.displayName="HeaderLayout";const P=(0,p.default)(a.x)`
  width: ${n=>n.width}px;
`,v=e.forwardRef(({navigationAction:n,primaryAction:u,secondaryAction:c,subtitle:o,title:i,sticky:R,width:L,...I},Z)=>{const U=typeof o=="string";return R?e.createElement(P,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:L,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,null,n&&e.createElement(a.x,{paddingRight:3},n),e.createElement(a.x,null,e.createElement(g.Z,{variant:"beta",as:"h1",...I},i),U?e.createElement(g.Z,{variant:"pi",textColor:"neutral600"},o):o),c?e.createElement(a.x,{paddingLeft:4},c):null),e.createElement(m.k,null,u?e.createElement(a.x,{paddingLeft:2},u):void 0))):e.createElement(a.x,{ref:Z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(a.x,{paddingBottom:2},n):null,e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,{minWidth:0},e.createElement(g.Z,{as:"h1",variant:"alpha",...I},i),c?e.createElement(a.x,{paddingLeft:4},c):null),u),U?e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});v.displayName="BaseHeaderLayout",v.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},v.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},r.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},r.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},185:(D,E,t)=>{t.d(E,{o:()=>m});var e=t(67294),s=t(45697),p=t(71893);const a=p.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,m=({labelledBy:M,...O})=>{const f=M||"main-content-title";return e.createElement(a,{"aria-labelledby":f,id:"main-content",tabIndex:-1,...O})};m.defaultProps={labelledBy:void 0},m.propTypes={labelledBy:s.string}},30815:(D,E,t)=>{t.d(E,{Z:()=>p});var e=t(85893);const s=a=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z",fill:"#212134"})}),p=s}}]);
