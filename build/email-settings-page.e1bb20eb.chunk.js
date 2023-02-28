"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1495],{82781:(b,f,t)=>{t.r(f),t.d(f,{default:()=>Q});var e=t(67294),p=t(97132),a=t(68547),g=t(185),d=t(49066),m=t(7681),T=t(41580),x=t(11276),v=t(74571),A=t(75515),h=t(16364),B=t(29728),y=t(14087),s=t(23293),c=t(45697),l=t.n(c),o=t(27821),u=t(91216),E=t(82562),i=t(47560);const R=o.default.a`
  color: ${({theme:n})=>n.colors.primary600};
`,C=({config:n})=>{const{formatMessage:r}=(0,p.useIntl)();return e.createElement(m.K,{spacing:4},e.createElement(m.K,{spacing:1},e.createElement(A.Z,{variant:"delta",as:"h2"},r({id:(0,i.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),e.createElement(A.Z,null,r({id:(0,i.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(R,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},r({id:(0,i.Z)("link"),defaultMessage:"Link"}))}))),e.createElement(x.r,{gap:5},e.createElement(v.P,{col:6,s:12},e.createElement(h.o,{name:"shipper-email",label:r({id:(0,i.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:r({id:(0,i.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:n.settings.defaultFrom})),e.createElement(v.P,{col:6,s:12},e.createElement(h.o,{name:"response-email",label:r({id:(0,i.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:r({id:(0,i.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:n.settings.defaultReplyTo})),e.createElement(v.P,{col:6,s:12},e.createElement(u.P,{name:"email-provider",label:r({id:(0,i.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:n.provider},e.createElement(E.W,{value:n.provider},n.provider)))))};C.propTypes={config:l().shape({provider:l().string,settings:l().shape({defaultFrom:l().string,defaultReplyTo:l().string})}).isRequired};const Z=C;var D=t(53209);const O=D.Ry().shape({email:D.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required)});var N=t(61321),V=t(11817);const I=V.Z.create({baseURL:""});I.interceptors.request.use(async n=>(n.headers={Authorization:`Bearer ${a.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},n),n=>{Promise.reject(n)}),I.interceptors.response.use(n=>n,n=>{throw n.response?.status===401&&(a.auth.clearAppStorage(),window.location.reload()),n});const F=(0,a.wrapAxiosInstance)(I),$=async()=>{const{data:n}=await F.get("/email/settings");return n.config},G=async n=>{await F.post("/email/test",n)};var k=t(67838);const j=()=>{const{formatMessage:n}=(0,p.useIntl)();return e.createElement(e.Fragment,null,e.createElement(a.SettingsPageTitle,{name:n({id:(0,i.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),e.createElement(k.T,{id:"title",title:n({id:(0,i.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:n({id:(0,i.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))},Y=()=>e.createElement(a.CheckPagePermissions,{permissions:N.Z.settings},e.createElement(J,null)),J=()=>{const n=(0,a.useNotification)(),{formatMessage:r}=(0,p.useIntl)(),{lockApp:X,unlockApp:q}=(0,a.useOverlayBlocker)(),{notifyStatus:K}=(0,y.G)();(0,a.useFocusWhenNavigate)();const[P,_]=(0,e.useState)({}),[ee,w]=(0,e.useState)(!1),[z,H]=(0,e.useState)(!1),[S,W]=(0,e.useState)(""),[te,U]=(0,e.useState)(!1),[ae,ne]=(0,e.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,e.useEffect)(()=>{w(!0),$().then(M=>{K(r({id:(0,i.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ne(M);const L=M?.settings?.testAddress;L&&W(L)}).catch(()=>n({type:"warning",message:r({id:(0,i.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>w(!1))},[r,n,K]),(0,e.useEffect)(()=>{P.email&&document.querySelector("#test-address-input").focus()},[P]),(0,e.useEffect)(()=>{O.validate({email:S},{abortEarly:!1}).then(()=>U(!0)).catch(()=>U(!1))},[S]);const se=M=>{W(()=>M.target.value)},ie=async M=>{M.preventDefault();try{await O.validate({email:S},{abortEarly:!1}),H(!0),X(),G({to:S}).then(()=>{n({type:"success",message:r({id:(0,i.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:S})})}).catch(()=>{n({type:"warning",message:r({id:(0,i.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:S})})}).finally(()=>{H(!1),q()})}catch(L){_((0,a.getYupInnerErrors)(L))}};return ee?e.createElement(g.o,{labelledBy:"title","aria-busy":"true"},e.createElement(j,null),e.createElement(d.D,null,e.createElement(a.LoadingIndicatorPage,null))):e.createElement(g.o,{labelledBy:"title","aria-busy":z},e.createElement(j,null),e.createElement(d.D,null,e.createElement("form",{onSubmit:ie},e.createElement(m.K,{spacing:7},e.createElement(T.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(Z,{config:ae})),e.createElement(T.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(m.K,{spacing:4},e.createElement(A.Z,{variant:"delta",as:"h2"},r({id:(0,i.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),e.createElement(x.r,{gap:5,alignItems:"end"},e.createElement(v.P,{col:6,s:12},e.createElement(h.o,{id:"test-address-input",name:"test-address",onChange:se,label:r({id:(0,i.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:S,error:P.email?.id&&r({id:(0,i.Z)(`${P.email?.id}`),defaultMessage:"This is an invalid email"}),placeholder:r({id:(0,i.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),e.createElement(v.P,{col:7,s:12},e.createElement(B.z,{loading:z,disabled:!te,type:"submit",startIcon:e.createElement(s.Z,null)},r({id:(0,i.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},Q=Y},49066:(b,f,t)=>{t.d(f,{D:()=>g});var e=t(67294),p=t(45697),a=t(41580);const g=({children:d})=>e.createElement(a.x,{paddingLeft:10,paddingRight:10},d);g.propTypes={children:p.node.isRequired}},67838:(b,f,t)=>{t.d(f,{T:()=>h});var e=t(67294),p=t(27821),a=t(45697),g=t(75515),d=t(41580),m=t(11047);const T=s=>{const c=(0,e.useRef)(null),[l,o]=(0,e.useState)(!0),u=([E])=>{o(E.isIntersecting)};return(0,e.useEffect)(()=>{const E=c.current,i=new IntersectionObserver(u,s);return E&&i.observe(c.current),()=>{E&&i.disconnect()}},[c,s]),[c,l]};var x=t(98402);const v=(s,c)=>{const l=(0,x.useCallbackRef)(c);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(l);return Array.isArray(s)?s.forEach(u=>{u.current&&o.observe(u.current)}):s.current&&o.observe(s.current),()=>{o.disconnect()}},[s,l])},A=()=>{const s=(0,e.useRef)(null),[c,l]=(0,e.useState)(null),[o,u]=T({root:null,rootMargin:"0px",threshold:0});return v(o,()=>{o.current&&l(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{s.current&&l(s.current.getBoundingClientRect())},[s]),{containerRef:o,isVisible:u,baseHeaderLayoutRef:s,headerSize:c}},h=s=>{const{containerRef:c,isVisible:l,baseHeaderLayoutRef:o,headerSize:u}=A();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:u?.height},ref:c},l&&e.createElement(y,{ref:o,...s})),!l&&e.createElement(y,{...s,sticky:!0,width:u?.width}))};h.displayName="HeaderLayout";const B=(0,p.default)(d.x)`
  width: ${s=>s.width}px;
`,y=e.forwardRef(({navigationAction:s,primaryAction:c,secondaryAction:l,subtitle:o,title:u,sticky:E,width:i,...R},C)=>{const Z=typeof o=="string";return E?e.createElement(B,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:i,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,null,s&&e.createElement(d.x,{paddingRight:3},s),e.createElement(d.x,null,e.createElement(g.Z,{variant:"beta",as:"h1",...R},u),Z?e.createElement(g.Z,{variant:"pi",textColor:"neutral600"},o):o),l?e.createElement(d.x,{paddingLeft:4},l):null),e.createElement(m.k,null,c?e.createElement(d.x,{paddingLeft:2},c):void 0))):e.createElement(d.x,{ref:C,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0},s?e.createElement(d.x,{paddingBottom:2},s):null,e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,null,e.createElement(g.Z,{as:"h1",variant:"alpha",...R},u),l?e.createElement(d.x,{paddingLeft:4},l):null),c),Z?e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});y.displayName="BaseHeaderLayout",y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},y.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},h.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},h.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},185:(b,f,t)=>{t.d(f,{o:()=>d});var e=t(67294),p=t(45697),a=t(27821);const g=a.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,d=({labelledBy:m,...T})=>{const x=m||"main-content-title";return e.createElement(g,{"aria-labelledby":x,id:"main-content",tabIndex:-1,...T})};d.defaultProps={labelledBy:void 0},d.propTypes={labelledBy:p.string}},23293:(b,f,t)=>{t.d(f,{Z:()=>p});var e=t(85893);function p(a){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,e.jsx)("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),(0,e.jsx)("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),(0,e.jsx)("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"})]})}}}]);
