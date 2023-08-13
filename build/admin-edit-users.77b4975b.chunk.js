"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4263],{22282:(B,o,e)=>{e.r(o),e.d(o,{default:()=>ve});var t=e(67294),a=e(68547),s=e(49656),g=e(96486),r=e(87751),f=e(87462),n=e(15861),h=e(64687),i=e.n(h),l=e(97132),d=e(45697),L=e.n(d),_=e(78718),Z=e.n(_),W=e(27361),K=e.n(W),A=e(57557),x=e.n(A),C=e(23724),T=e(80831),z=e(41580),N=e(29728),j=e(11276),X=e(74571),D=e(53979),H=e(49066),G=e(75515),Y=e(185),F=e(7681),Q=e(67109),P=e(85018),w=e(38683);const de=async U=>{const{get:I}=(0,a.getFetchClient)(),{data:v}=await I(`/admin/users/${U}`);return v.data},ce=async(U,I)=>{const{put:v}=(0,a.getFetchClient)(),{data:R}=await v(`/admin/users/${U}`,I);return R.data},me=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ue=e(17405),ge=e(81288),Ee=e(25108),pe=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),ee=["email","firstname","lastname","username","isActive","roles"],te=function(I){var v=I.canUpdate,R=(0,l.useIntl)(),c=R.formatMessage,J=(0,s.useRouteMatch)("/settings/users/:id"),S=J.params.id,Me=(0,s.useHistory)(),he=Me.push,Pe=(0,a.useAppInfos)(),Le=Pe.setUserDisplayName,k=(0,a.useNotification)(),ae=(0,a.useOverlayBlocker)(),De=ae.lockApp,Oe=ae.unlockApp;(0,a.useFocusWhenNavigate)();var se=(0,C.useQuery)(["user",S],function(){return de(S)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(m){var u=m.response.status;u===403&&(k({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),he("/")),Ee.log(m.response.status)}}),ye=se.status,M=se.data,Ae=function(){var E=(0,n.Z)(i().mark(function m(u,O){var $,b,y,q,oe;return i().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return De(),p.prev=1,p.next=4,ce(S,x()(u,"confirmPassword"));case 4:$=p.sent,k({type:"success",message:c({id:"notification.success.saved",defaultMessage:"Saved"})}),b=a.auth.getUserInfo(),S.toString()===b.id.toString()&&(a.auth.setUserInfo($),y=K()(u,"username")||(0,w.Pp)(u.firstname,u.lastname),Le(y)),O.setValues(Z()(u,ee)),p.next=17;break;case 11:p.prev=11,p.t0=p.catch(1),q=(0,w.Iz)(p.t0.response.data),oe=Object.keys(q).reduce(function(le,ie){return le[ie]=q[ie].id,le},{}),O.setErrors(oe),k({type:"warning",message:K()(p.t0,"response.data.message","notification.error")});case 17:Oe();case 18:case"end":return p.stop()}},m,null,[[1,11]])}));return function(u,O){return E.apply(this,arguments)}}(),ne=ye!=="success",Ce=ne?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},V=Object.keys(Z()(M,ee)).reduce(function(E,m){return m==="roles"?(E[m]=(M?.roles||[]).map(function(u){var O=u.id;return O}),E):(E[m]=M?.[m],E)},{}),Te=V.username||(0,w.Pp)(V.firstname,V.lastname),re=c(Ce,{name:Te});return ne?t.createElement(Y.o,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(D.T,{primaryAction:t.createElement(N.z,{disabled:!0,startIcon:t.createElement(P.Z,null),type:"button",size:"L"},c({id:"global.save",defaultMessage:"Save"})),title:re,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(Q.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},c({id:"global.back",defaultMessage:"Back"}))}),t.createElement(H.D,null,t.createElement(a.LoadingIndicatorPage,null))):t.createElement(Y.o,null,t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(T.Formik,{onSubmit:Ae,initialValues:V,validateOnChange:!1,validationSchema:ue.YM},function(E){var m=E.errors,u=E.values,O=E.handleChange,$=E.isSubmitting;return t.createElement(a.Form,null,t.createElement(D.T,{primaryAction:t.createElement(N.z,{disabled:$||!v,startIcon:t.createElement(P.Z,null),loading:$,type:"submit",size:"L"},c({id:"global.save",defaultMessage:"Save"})),title:re,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(Q.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},c({id:"global.back",defaultMessage:"Back"}))}),t.createElement(H.D,null,M?.registrationToken&&t.createElement(z.x,{paddingBottom:6},t.createElement(pe,{registrationToken:M.registrationToken})),t.createElement(F.K,{spacing:7},t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(F.K,{spacing:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(j.r,{gap:5},me.map(function(b){return b.map(function(y){return t.createElement(X.P,(0,f.Z)({key:y.name},y.size),t.createElement(a.GenericInput,(0,f.Z)({},y,{disabled:!v,error:m[y.name],onChange:O,value:u[y.name]||""})))})})))),t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(F.K,{spacing:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:"global.roles",defaultMessage:"User's role"})),t.createElement(j.r,{gap:5},t.createElement(X.P,{col:6,xs:12},t.createElement(ge.Z,{disabled:!v,error:m.roles,onChange:O,value:u.roles}))))))))}))};te.propTypes={canUpdate:L().bool.isRequired};const fe=te,ve=()=>{const U=(0,a.useNotification)(),I=(0,t.useMemo)(()=>({read:r.Z.settings.users.read,update:r.Z.settings.users.update}),[]),{isLoading:v,allowedActions:{canRead:R,canUpdate:c}}=(0,a.useRBAC)(I),{state:J}=(0,s.useLocation)(),S=(0,g.get)(J,"from","/");return(0,t.useEffect)(()=>{v||!R&&!c&&U({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[v,R,c,U]),v?t.createElement(a.LoadingIndicatorPage,null):!R&&!c?t.createElement(s.Redirect,{to:S}):t.createElement(fe,{canUpdate:c})}},82464:(B,o,e)=>{e.d(o,{Z:()=>_});var t=e(67294),a=e(45697),s=e.n(a),g=e(12028),r=e(68547),f=e.n(r),n=e(65186),h=e(74855),i=e.n(h),l=e(97132);const d=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),L=({children:Z,target:W})=>{const K=(0,r.useNotification)(),{formatMessage:A}=(0,l.useIntl)(),x=()=>{K({type:"info",message:{id:"notification.link-copied"}})},C=A({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(r.ContentBox,{endAction:t.createElement(h.CopyToClipboard,{onCopy:x,text:W},t.createElement(g.h,{label:C,noBorder:!0,icon:t.createElement(n.Z,null)})),title:W,titleEllipsis:!0,subtitle:Z,icon:t.createElement(d,null),iconBackground:"neutral100"})};L.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const _=L},31605:(B,o,e)=>{e.d(o,{Z:()=>h});var t=e(67294),a=e(97132),s=e(45697),g=e.n(s),r=e(63871),f=e(82464);const n=({registrationToken:i})=>{const{formatMessage:l}=(0,a.useIntl)(),d=`${window.location.origin}${r.Z}auth/register?registrationToken=${i}`;return t.createElement(f.Z,{target:d},l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:g().string};const h=n},81288:(B,o,e)=>{e.d(o,{Z:()=>x});var t=e(67294),a=e(45697),s=e.n(a),g=e(97132),r=e(91216),f=e(82562),n=e(23724),h=e.n(n),i=e(71893),l=e(86647),d=e(68547),L=e.n(d);const _=(0,i.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Z=i.default.div`
  animation: ${_} 2s infinite linear;
`,W=()=>t.createElement(Z,null,t.createElement(l.Z,null)),K=async()=>{const{get:C}=(0,d.getFetchClient)(),{data:T}=await C("/admin/roles");return T.data},A=({disabled:C,error:T,onChange:z,value:N})=>{const{status:j,data:X}=(0,n.useQuery)(["roles"],K,{staleTime:5e4}),{formatMessage:D}=(0,g.useIntl)(),H=T?D({id:T,defaultMessage:T}):"",G=D({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Y=D({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),F=D({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Q=j==="loading"?t.createElement(W,null):void 0;return t.createElement(r.P,{id:"roles",disabled:C,error:H,hint:Y,label:G,name:"roles",onChange:P=>{z({target:{name:"roles",value:P}})},placeholder:F,multi:!0,startIcon:Q,value:N,withTags:!0,required:!0},(X||[]).map(P=>t.createElement(f.W,{key:P.id,value:P.id},D({id:`global.${P.code}`,defaultMessage:P.name}))))};A.defaultProps={disabled:!1,error:void 0},A.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const x=A},17405:(B,o,e)=>{e.d(o,{YM:()=>i,Rw:()=>r});var t=e(53209),a=e(68547);const s={firstname:t.Z_().trim().required(a.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(a.translatedErrors.email).lowercase().required(a.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(l,d)=>l?d.required(a.translatedErrors.required):d)},r={...s,currentPassword:t.Z_().when(["password","confirmPassword"],(l,d,L)=>l||d?L.required(a.translatedErrors.required):L),preferedLanguage:t.Z_().nullable()},n={roles:t.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)},i=t.Ry().shape({...s,isActive:t.Xg(),...n})},12201:(B,o,e)=>{e.d(o,{Z:()=>h});var t=e(67294),a=e(97132),s=e(45697),g=e.n(s),r=e(63871),f=e(82464);const n=({registrationToken:i})=>{const{formatMessage:l}=(0,a.useIntl)();return i?t.createElement(f.Z,{target:`${window.location.origin}${r.Z}auth/register?registrationToken=${i}`},l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(f.Z,{target:`${window.location.origin}${r.Z}auth/login`},l({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:g().string};const h=n},86647:(B,o,e)=>{e.d(o,{Z:()=>s});var t=e(85893);const a=g=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.057 18c.552 0 1 .451 1 .997v4.006a1 1 0 0 1-.941.995l-.059.002c-.552 0-1-.451-1-.997v-4.006a1 1 0 0 1 .941-.995l.06-.002Zm-3.06-.736.055.03c.478.276.64.89.367 1.364l-2.002 3.468a1 1 0 0 1-1.31.394l-.055-.03a1.002 1.002 0 0 1-.368-1.363l2.003-3.469a1 1 0 0 1 1.31-.394Zm7.42.394 2.002 3.468a1 1 0 0 1-.314 1.331l-.053.033a1.002 1.002 0 0 1-1.365-.363l-2.003-3.469a1 1 0 0 1 .314-1.33l.054-.034a1.002 1.002 0 0 1 1.364.364Zm-9.548-2.66.033.054c.276.478.11 1.091-.364 1.364L3.07 18.42a1 1 0 0 1-1.331-.314l-.033-.053a1.001 1.001 0 0 1 .364-1.365l3.468-2.003a1 1 0 0 1 1.33.314Zm11.79-.313 3.468 2.002a1 1 0 0 1 .393 1.31l-.03.055c-.276.478-.89.64-1.363.367l-3.469-2.003a1 1 0 0 1-.394-1.309l.03-.055c.276-.479.89-.64 1.364-.367Zm4.344-3.628a1 1 0 0 1 .995.941l.002.06c0 .551-.451 1-.997 1h-4.006a1 1 0 0 1-.995-.942L18 12.057c0-.552.451-1 .997-1h4.006Zm-18 0a1 1 0 0 1 .995.941l.002.06c0 .551-.451 1-.998 1H.998a1 1 0 0 1-.996-.942L0 12.057c0-.552.451-1 .998-1h4.004Zm17.454-5.059.033.054c.277.478.11 1.091-.363 1.365l-3.469 2.002a1 1 0 0 1-1.33-.314l-.034-.053a1.002 1.002 0 0 1 .364-1.365l3.468-2.003a1 1 0 0 1 1.331.314ZM3.07 5.684l3.468 2.003a1 1 0 0 1 .394 1.31l-.03.055c-.276.478-.89.64-1.364.367L2.07 7.417a1 1 0 0 1-.394-1.31l.03-.055c.276-.479.89-.64 1.364-.368Zm14.926-4.008.056.03c.478.276.64.89.367 1.364l-2.003 3.468a1 1 0 0 1-1.309.394l-.055-.03a1.002 1.002 0 0 1-.367-1.364l2.002-3.468a1 1 0 0 1 1.31-.394Zm-10.58.394L9.42 5.538a1 1 0 0 1-.314 1.33l-.053.034a1.002 1.002 0 0 1-1.365-.364L5.684 3.07a1 1 0 0 1 .314-1.331l.054-.033a1.002 1.002 0 0 1 1.365.364ZM12.058 0c.552 0 1 .451 1 .998v4.004a1 1 0 0 1-.941.996L12.057 6c-.552 0-1-.451-1-.998V.998a1 1 0 0 1 .941-.996l.06-.002Z",fill:"#212134"})}),s=a}}]);