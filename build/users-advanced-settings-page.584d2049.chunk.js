"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[9460],{58350:(L,g,t)=>{t.r(g),t.d(g,{default:()=>N});var e=t(67294),i=t(334),v=t(40720),f=t(90731),x=t(34726),y=t(12473),o=t(16607),h=t(96987),p=t(10574),M=t(31988),O=t(6498),B=t(59586),a=t(40933),n=t(23246),d=t(18226),r=t(41054),l=t(86896),c=t(88767),S=t(84419),s=t(99688);const j=[{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,s.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var b=t(87561);const C=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=b.Ry().shape({email_confirmation_redirection:b.nK().when("email_confirmation",{is:!0,then:b.Z_().matches(C).required(),otherwise:b.Z_().nullable()}),email_reset_password:b.Z_(n.I0.string).matches(C,n.I0.regex).nullable()}),w=()=>e.createElement(n.O4,{permissions:S._.readAdvancedSettings},e.createElement(H,null)),H=()=>{const{formatMessage:E}=(0,l.Z)(),R=(0,n.lm)(),{lockApp:U,unlockApp:I}=(0,n.o1)(),{notifyStatus:K}=(0,i.G)(),G=(0,c.useQueryClient)(),{get:V,put:$}=(0,n.kY)(),{formatAPIError:Q}=(0,n.So)();(0,n.go)();const{isLoading:X,allowedActions:{canUpdate:z}}=(0,n.ss)({update:S._.updateAdvancedSettings}),{isLoading:Y,data:A}=(0,c.useQuery)(["users-permissions","advanced"],async()=>{const{data:m}=await V("/users-permissions/advanced");return m},{onSuccess(){K(E({id:(0,s.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){R({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}})}}),J=X||Y,D=(0,c.useMutation)(m=>$("/users-permissions/advanced",m),{async onSuccess(){await G.invalidateQueries(["users-permissions","advanced"]),R({type:"success",message:{id:(0,s.OB)("notification.success.saved"),defaultMessage:"Saved"}}),I()},onError(m){R({type:"warning",message:Q(m)}),I()},refetchActive:!0}),{isLoading:k}=D,q=async m=>{U(),D.mutate({...m,email_confirmation_redirection:m.email_confirmation?m.email_confirmation_redirection:""})};return J?e.createElement(v.o,{"aria-busy":"true"},e.createElement(n.SL,{name:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(f.T,{title:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(x.D,null,e.createElement(n.dO,null))):e.createElement(v.o,{"aria-busy":k},e.createElement(n.SL,{name:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(r.J9,{onSubmit:q,initialValues:A.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0},({errors:m,values:T,handleChange:Z,isSubmitting:_,dirty:ee})=>e.createElement(n.l0,null,e.createElement(f.T,{title:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(y.z,{loading:_,type:"submit",disabled:z?!ee:!z,startIcon:e.createElement(d.Z,null),size:"S"},E({id:"global.save",defaultMessage:"Save"}))}),e.createElement(x.D,null,e.createElement(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(p.Z,{variant:"delta",as:"h2"},E({id:"global.settings",defaultMessage:"Settings"})),e.createElement(M.r,{gap:6},e.createElement(O.P,{col:6,s:12},e.createElement(B.P,{label:E({id:(0,s.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:T.default_role,hint:E({id:(0,s.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:u=>Z({target:{name:"default_role",value:u}})},A.roles.map(u=>e.createElement(a.W,{key:u.type,value:u.type},u.name)))),j.map(u=>{let P=T[u.name];return P||(P=u.type==="bool"?!1:""),e.createElement(O.P,{key:u.name,...u.size},e.createElement(n.jm,{...u,value:P,error:m[u.name],disabled:u.name==="email_confirmation_redirection"&&T.email_confirmation===!1,onChange:Z}))}))))))))},N=w},99688:(L,g,t)=>{t.d(g,{YX:()=>f,OB:()=>x.Z});var e=t(41609),i=t.n(e);const f=y=>Object.keys(y).reduce((o,h)=>{const p=y[h].controllers,M=Object.keys(p).reduce((O,B)=>(i()(p[B])||(O[B]=p[B]),O),{});return i()(M)||(o[h]={controllers:M}),o},{});var x=t(58655)},34726:(L,g,t)=>{t.d(g,{D:()=>v});var e=t(85893),i=t(16607);const v=({children:f})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:f})},90731:(L,g,t)=>{t.d(g,{T:()=>M});var e=t(85893),i=t(67294),v=t(71997);const f=a=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(!0),l=([c])=>{r(c.isIntersecting)};return(0,i.useEffect)(()=>{const c=n.current,S=new IntersectionObserver(l,a);return c&&S.observe(n.current),()=>{c&&S.disconnect()}},[n,a]),[n,d]};var x=t(79698);const y=(a,n)=>{const d=(0,x.W)(n);(0,i.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(a)?a.forEach(l=>{l.current&&r.observe(l.current)}):a.current&&r.observe(a.current),()=>{r.disconnect()}},[a,d])};var o=t(16607),h=t(96987),p=t(10574);const M=a=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(null),[l,c]=f({root:null,rootMargin:"0px",threshold:0});return y(l,()=>{l.current&&r(l.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:l,children:c&&(0,e.jsx)(B,{ref:n,...a})}),!c&&(0,e.jsx)(B,{...a,sticky:!0,width:d?.width})]})};M.displayName="HeaderLayout";const O=(0,v.ZP)(o.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,B=i.forwardRef(({navigationAction:a,primaryAction:n,secondaryAction:d,subtitle:r,title:l,sticky:c,width:S,...s},F)=>{const j=typeof r=="string";return c?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{children:[a&&(0,e.jsx)(o.x,{paddingRight:3,children:a}),(0,e.jsxs)(o.x,{children:[(0,e.jsx)(p.Z,{variant:"beta",as:"h1",...s,children:l}),j?(0,e.jsx)(p.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(h.k,{children:n?(0,e.jsx)(o.x,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(o.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(o.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{minWidth:0,children:[(0,e.jsx)(p.Z,{as:"h1",variant:"alpha",...s,children:l}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),n]}),j?(0,e.jsx)(p.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},40720:(L,g,t)=>{t.d(g,{o:()=>x});var e=t(85893),i=t(71997),v=t(16607);const f=(0,i.ZP)(v.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,x=({labelledBy:y="main-content-title",...o})=>(0,e.jsx)(f,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...o})}}]);
