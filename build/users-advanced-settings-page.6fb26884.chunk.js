"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[9460],{98352:(A,p,n)=>{n.r(p),n.d(p,{default:()=>P});var e=n(67294),f=n(68960),v=n(49212),E=n(80831),i=n(27298),a=n(72899),y=n(22522),r=n(81912),t=n(89031);const m=[{intlLabel:{id:(0,t.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var l=n(53209);const u=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),L=l.Ry().shape({email_confirmation_redirection:l.nK().when("email_confirmation",{is:!0,then:l.Z_().matches(u).required(),otherwise:l.Z_().nullable()}),email_reset_password:l.Z_(i.translatedErrors.string).matches(u,i.translatedErrors.regex).nullable()}),T=async()=>{const{get:s}=(0,i.getFetchClient)(),{data:d}=await s((0,t.Gc)("advanced"));return d},R=s=>{const{put:d}=(0,i.getFetchClient)();return d((0,t.Gc)("advanced"),s)},w=()=>e.createElement(i.CheckPagePermissions,{permissions:r.Z.readAdvancedSettings},e.createElement(C,null)),C=()=>{const{formatMessage:s}=(0,v.useIntl)(),d=(0,i.useNotification)(),{lockApp:x,unlockApp:O}=(0,i.useOverlayBlocker)(),{notifyStatus:N}=(0,a.useNotifyAT)(),z=(0,f.useQueryClient)();(0,i.useFocusWhenNavigate)();const G=(0,e.useMemo)(()=>({update:r.Z.updateAdvancedSettings}),[]),{isLoading:I,allowedActions:{canUpdate:k}}=(0,i.useRBAC)(G),{status:Z,data:M}=(0,f.useQuery)("advanced",()=>T(),{onSuccess(){N(s({id:(0,t.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){d({type:"warning",message:{id:(0,t.OB)("notification.error"),defaultMessage:"An error occured"}})}}),H=I||Z!=="success",B=(0,f.useMutation)(c=>R(c),{async onSuccess(){await z.invalidateQueries("advanced"),d({type:"success",message:{id:(0,t.OB)("notification.success.saved"),defaultMessage:"Saved"}}),O()},onError(){d({type:"warning",message:{id:(0,t.OB)("notification.error"),defaultMessage:"An error occured"}}),O()},refetchActive:!0}),{isLoading:U}=B,D=async c=>{x();const g=c.email_confirmation?c.email_confirmation_redirection:"";await B.mutateAsync({...c,email_confirmation_redirection:g})};return H?e.createElement(a.Main,{"aria-busy":"true"},e.createElement(i.SettingsPageTitle,{name:s({id:(0,t.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(a.HeaderLayout,{title:s({id:(0,t.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(a.ContentLayout,null,e.createElement(i.LoadingIndicatorPage,null))):e.createElement(a.Main,{"aria-busy":U},e.createElement(i.SettingsPageTitle,{name:s({id:(0,t.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(E.Formik,{onSubmit:D,initialValues:M.settings,validateOnChange:!1,validationSchema:L,enableReinitialize:!0},({errors:c,values:g,handleChange:F,isSubmitting:Q})=>e.createElement(i.Form,null,e.createElement(a.HeaderLayout,{title:s({id:(0,t.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(a.Button,{loading:Q,type:"submit",disabled:!k,startIcon:e.createElement(y.Check,null),size:"S"},s({id:"global.save",defaultMessage:"Save"}))}),e.createElement(a.ContentLayout,null,e.createElement(a.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(a.Stack,{spacing:4},e.createElement(a.Typography,{variant:"delta",as:"h2"},s({id:"global.settings",defaultMessage:"Settings"})),e.createElement(a.Grid,{gap:6},e.createElement(a.GridItem,{col:6,s:12},e.createElement(a.Select,{label:s({id:(0,t.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:g.default_role,hint:s({id:(0,t.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:o=>F({target:{name:"default_role",value:o}})},M.roles.map(o=>e.createElement(a.Option,{key:o.type,value:o.type},o.name)))),m.map(o=>{let b=g[o.name];return b||(b=o.type==="bool"?!1:""),e.createElement(a.GridItem,{key:o.name,...o.size},e.createElement(i.GenericInput,{...o,value:b,error:c[o.name],disabled:o.name==="email_confirmation_redirection"&&g.email_confirmation===!1,onChange:F}))}))))))))},P=w},89031:(A,p,n)=>{n.d(p,{YX:()=>v,Gc:()=>a,OB:()=>y.Z});var e=n(96486);const v=r=>Object.keys(r).reduce((t,S)=>{const m=r[S].controllers,l=Object.keys(m).reduce((u,h)=>((0,e.isEmpty)(m[h])||(u[h]=m[h]),u),{});return(0,e.isEmpty)(l)||(t[S]={controllers:l}),t},{});var E=n(31498);const a=r=>`/${E.Z}/${r}`;var y=n(84757)}}]);
