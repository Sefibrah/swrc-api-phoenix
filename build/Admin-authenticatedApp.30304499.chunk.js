"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[801],{93858:($,M,n)=>{n.r(M),n.d(M,{default:()=>Tt});var e=n(67294),r=n(27298),I=n(68960),f=n(27361),H=n.n(f);const y={i8:"4.7.0"};var k=n(48474),d=n(49656),P=n(37424),R=n(99168),O=n(61080),U=n(38914),W=n.n(U),V=n(64729),C=n(71893),Me=n(45697),l=n.n(Me),F=n(49212),o=n(72899),v=n(22522);const Re=(0,C.default)(o.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,ne=({onClose:t,onSkip:a,children:s,hideSkip:i})=>{const{formatMessage:g}=(0,F.useIntl)();return e.createElement(o.Portal,null,e.createElement(Re,{onClick:t,padding:8,justifyContent:"center"},e.createElement(o.FocusTrap,{onEscape:t},e.createElement(o.Stack,{background:"neutral0",width:(0,r.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:p=>p.stopPropagation()},e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.IconButton,{onClick:t,"aria-label":g({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(v.Cross,null)})),e.createElement(o.Box,{paddingLeft:7,paddingRight:7,paddingBottom:i?8:0},s),!i&&e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.Button,{variant:"tertiary",onClick:a},g({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ne.propTypes={children:l().node.isRequired,onClose:l().func.isRequired,onSkip:l().func.isRequired,hideSkip:l().bool.isRequired};const Pe=ne;var ae=n(18172);const oe={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Se=(t=oe,a)=>(0,ae.default)(t,s=>{switch(a.type){case"UPDATE_MODAL":{s.stepContent=a.content,s.sectionIndex=a.newSectionIndex,s.stepIndex=a.newStepIndex,s.hasSectionAfter=a.newHasSectionAfter,s.hasStepAfter=a.newHasStepAfter;break}default:return s}}),xe=C.default.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,se=({id:t,defaultMessage:a})=>{const{formatMessage:s}=(0,F.useIntl)();return e.createElement(o.Stack,{spacing:4,paddingBottom:6},s({id:t,defaultMessage:a},{documentationLink:i=>e.createElement(o.Typography,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},i),b:i=>e.createElement(o.Typography,{fontWeight:"semiBold"},i),p:i=>e.createElement(o.Typography,null,i),light:i=>e.createElement(o.Typography,{textColor:"neutral600"},i),ul:i=>e.createElement(o.Box,{paddingLeft:6},e.createElement("ul",null,i)),li:i=>e.createElement(xe,null,i)}))};se.propTypes={id:l().string.isRequired,defaultMessage:l().string.isRequired};const Ie=se;var w=n(89285),Ae=n(96392);const Z=({number:t,last:a,type:s})=>e.createElement(o.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Ae.Z,{number:t,type:s}));Z.defaultProps={number:void 0,last:!1,type:""},Z.propTypes={number:l().number,last:l().bool,type:l().string};const ie=Z;var G=n(99872);const Q=({title:t,content:a,cta:s,onCtaClick:i,sectionIndex:g,stepIndex:p,hasSectionAfter:E})=>{const{formatMessage:m}=(0,F.useIntl)(),h=g>0,u=p>0,T=g+1;return e.createElement(e.Fragment,null,e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,r.pxToRem)(30)},h&&e.createElement(w.Z,{type:G.hx,minHeight:(0,r.pxToRem)(24)})),e.createElement(o.Typography,{variant:"sigma",textColor:"primary600"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(o.Flex,null,e.createElement(o.Flex,{marginRight:8,minWidth:(0,r.pxToRem)(30)},e.createElement(ie,{number:g+1,type:u?G.hx:G.lW})),e.createElement(o.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},m(t))),e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,r.pxToRem)(30)},E&&e.createElement(e.Fragment,null,e.createElement(w.Z,{type:G.hx}),u&&e.createElement(ie,{number:T+1,type:G.lW,last:!0}))),e.createElement(o.Box,null,e.createElement(Ie,{...a}),s&&(s.target?e.createElement(r.LinkButton,{endIcon:e.createElement(v.ArrowRight,null),onClick:i,to:s.target},m(s.title)):e.createElement(o.Button,{endIcon:e.createElement(v.ArrowRight,null),onClick:i},m(s.title))))),u&&E&&e.createElement(o.Box,{paddingTop:3},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",width:(0,r.pxToRem)(30)},e.createElement(w.Z,{type:G.hx,minHeight:(0,r.pxToRem)(24)}))))};Q.defaultProps={currentStep:null,cta:void 0},Q.propTypes={sectionIndex:l().number.isRequired,stepIndex:l().number.isRequired,hasSectionAfter:l().bool.isRequired,content:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired,cta:l().shape({target:l().string,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired})}),currentStep:l().string,onCtaClick:l().func.isRequired,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired};const Le=Q,Oe=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:s,setStepState:i,isGuidedTourVisible:g,setSkipped:p}=(0,r.useGuidedTour)(),[E,m]=(0,e.useState)(t),[{stepContent:h,sectionIndex:u,stepIndex:T,hasSectionAfter:b,hasStepAfter:A},K]=(0,e.useReducer)(Se,oe),{trackUsage:N}=(0,r.useTracking)();(0,e.useEffect)(()=>{if(!t){m(!1);return}const[D]=W()(a,t);m(!D&&g)},[t,a,g]),(0,e.useEffect)(()=>{if(t){const[D]=W()(V.Z,t),L=Object.keys(a),[x,c]=t.split("."),B=L.indexOf(x),z=Object.keys(a[x]).indexOf(c),_=B<L.length-1,ee=z<Object.keys(a[x]).length-1;K({type:"UPDATE_MODAL",content:D,newSectionIndex:B,newStepIndex:z,newHasSectionAfter:_,newHasStepAfter:ee})}},[t,a]);const S=()=>{i(t,!0),N(h.trackingEvent),s(null)},j=()=>{p(!0),s(null),N("didSkipGuidedtour")};return E&&h?e.createElement(Pe,{hideSkip:!A&&!b,onSkip:j,onClose:S},e.createElement(Le,{...h,onCtaClick:S,currentStep:t,sectionIndex:u,stepIndex:T,hasSectionAfter:b})):null};var be=n(64330),De=n(37907),Be=n(98994),Y=n(38040),re=n(51974),ke=n(45842),Fe=n(80760),Ge=n(66550);const Ne=(0,C.default)(o.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,le=(0,C.default)(d.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ce=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const s=(0,e.useRef)(),[i,g]=(0,e.useState)(!1),{logos:{menu:p}}=(0,k.um)(),[E,m]=(0,r.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,r.useAppInfos)(),{formatMessage:u}=(0,F.useIntl)(),{trackUsage:T}=(0,r.useTracking)(),{pathname:b}=(0,d.useLocation)(),A=(0,d.useHistory)(),{post:K}=(0,r.getFetchClient)(),N=h.split(" ").map(c=>c.substring(0,1)).join("").substring(0,2),S=()=>g(c=>!c),j=async()=>{await K("/admin/logout"),r.auth.clearAppStorage(),S(),A.push("/auth/login")},D=c=>{!c.currentTarget.contains(c.relatedTarget)&&c.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&g(!1)},L=(c=null)=>{T("willNavigate",{from:b,to:c})},x=u({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(be.$,{condensed:E},e.createElement(De.D,{as:d.NavLink,workplace:u({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:x,icon:e.createElement("img",{src:p.custom||p.default,alt:u({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(o.Divider,null),e.createElement(Be._,null,e.createElement(Y.O,{as:d.NavLink,to:"/content-manager",icon:e.createElement(v.Write,null),onClick:()=>L("/content-manager")},u({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(c=>{const B=c.icon;return e.createElement(Y.O,{as:d.NavLink,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null,t.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(c=>{const B=c.icon;return e.createElement(Y.O,{as:d.NavLink,badgeContent:c.notificationsCount>0&&c.notificationsCount.toString()||void 0,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null),e.createElement(ke.q,null,e.createElement(Fe.r,{id:"main-nav-user-button",ref:s,onClick:S,initials:N},h),i&&e.createElement(Ne,{onBlur:D,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(o.FocusTrap,{onEscape:S},e.createElement(o.Stack,{spacing:0},e.createElement(le,{tabIndex:0,onClick:S,to:"/me"},e.createElement(o.Typography,null,u({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(le,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(o.Typography,{textColor:"danger600"},u({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(v.Exit,null))))),e.createElement(Ge.w,{onClick:()=>m(c=>!c)},u(E?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};ce.propTypes={generalSectionLinks:l().array.isRequired,pluginsSectionLinks:l().array.isRequired};const Ue=ce,We=(0,C.default)(o.Box)`
  flex: 1;
`,de=({children:t,sideNav:a})=>{const{formatMessage:s}=(0,F.useIntl)();return e.createElement(o.Box,{background:"neutral100"},e.createElement(o.SkipToContent,null,s({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(o.Flex,{alignItems:"flex-start"},a,e.createElement(We,null,t)))};de.propTypes={children:l().node.isRequired,sideNav:l().node.isRequired};const Ke=de;var X=n(38683),je=n(36657);const $e=n.p+"19eb2dfcf2603eb55733.png",Ve=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],ue={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},ze=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:v.Book},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:v.PaperPlane}],He=(0,C.default)(o.Button)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,we=(0,C.default)(o.Flex)`
  transform: translate(-50%, -50%);
`,Ze=(0,C.default)(o.Flex)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${o.Typography}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${o.Typography}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Qe=C.default.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,pe=(0,C.default)(o.Typography)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,me=(0,C.default)(pe)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,Ye=()=>{const t=(0,e.useRef)(),[a,s]=(0,e.useState)(!1),{formatMessage:i}=(0,F.useIntl)(),{communityEdition:g}=(0,r.useAppInfos)(),p=()=>{s(m=>!m)},E=[...ze,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:v.Message,href:g?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(o.Box,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(He,{"aria-label":i(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:p,ref:t},e.createElement(o.Icon,{as:a?v.Cross:v.Question,color:"buttonNeutral0"})),a&&e.createElement(o.Portal,null,e.createElement(o.PopoverPrimitives.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(o.FocusTrap,{onEscape:p},e.createElement(o.Flex,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(pe,{fontWeight:"bold"},i({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(me,{as:"a",href:ue.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},i(ue.label))),e.createElement(o.Divider,null),Ve.map(({href:m,duration:h,label:u},T)=>e.createElement(Ze,{as:"a",href:m,target:"_blank",rel:"noreferrer noopener",key:m,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(o.Box,{paddingRight:5},e.createElement(o.Typography,{textColor:"neutral200",variant:"alpha"},T+1)),e.createElement(o.Box,{position:"relative"},e.createElement(Qe,{src:$e,alt:""}),e.createElement(we,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(o.Icon,{as:v.Play,color:"buttonNeutral0",width:3,height:3}))),e.createElement(o.Flex,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(o.Typography,{fontWeight:"bold"},i(u)),e.createElement(o.VisuallyHidden,null,":"),e.createElement(o.Typography,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(o.Stack,{spacing:2,paddingLeft:5,paddingTop:2,paddingBottom:5},E.map(({label:m,href:h,icon:u})=>e.createElement(o.Stack,{horizontal:!0,spacing:3,key:h},e.createElement(o.Icon,{as:u,color:"primary600"}),e.createElement(me,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},i(m)))))))))},Xe=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(6383),n.e(4940),n.e(994)]).then(n.bind(n,21755))),Je=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,91550))),qe=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),_e=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,43008))),ge=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),et=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),tt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),he=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(6383),n.e(5895)]).then(n.bind(n,58659))),nt=()=>{const{trackUsage:t}=(0,r.useTracking)(),a=(0,P.useDispatch)(),s=(0,P.useSelector)(i=>i.admin_app.status);(0,e.useEffect)(()=>{s==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:je.e}))},[s])},at=()=>{nt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:s}=(0,k.H9)(),{menu:i}=(0,r.useStrapiApp)(),{showTutorials:g}=(0,k.um)(),p=(0,e.useMemo)(()=>i.filter(E=>E.Component).map(({to:E,Component:m,exact:h})=>(0,X.ot)(m,E,h)),[i]);return t?e.createElement(r.LoadingIndicatorPage,null):e.createElement(R.DndProvider,{backend:O.PD},e.createElement(Ke,{sideNav:e.createElement(Ue,{generalSectionLinks:a,pluginsSectionLinks:s})},e.createElement(e.Suspense,{fallback:e.createElement(r.LoadingIndicatorPage,null)},e.createElement(d.Switch,null,e.createElement(d.Route,{path:"/",component:Je,exact:!0}),e.createElement(d.Route,{path:"/me",component:tt,exact:!0}),e.createElement(d.Route,{path:"/content-manager",component:Xe}),p,e.createElement(d.Route,{path:"/settings/:settingId",component:he}),e.createElement(d.Route,{path:"/settings",component:he,exact:!0}),e.createElement(d.Route,{path:"/marketplace"},e.createElement(_e,null)),e.createElement(d.Route,{path:"/list-plugins",exact:!0},e.createElement(qe,null)),e.createElement(d.Route,{path:"/404",component:ge}),e.createElement(d.Route,{path:"/500",component:et}),e.createElement(d.Route,{path:"",component:ge}))),e.createElement(Oe,null),g&&e.createElement(Ye,null)))},ot=t=>({plugins:Object.keys(t).reduce((a,s)=>(a[s]={...t[s]},a),{})});var st=n(92622),it=n.n(st);const Ee={plugins:null},rt=(t=Ee,a)=>(0,ae.default)(t,s=>{switch(a.type){case"SET_PLUGIN_READY":{it()(s,["plugins",a.pluginId,"isReady"],!0);break}default:return s}}),lt=()=>{const{plugins:t}=(0,r.useStrapiApp)(),[{plugins:a},s]=(0,e.useReducer)(rt,Ee,()=>ot(t)),i=(0,e.useRef)(p=>{s({type:"SET_PLUGIN_READY",pluginId:p})});if(Object.keys(a).some(p=>a[p].isReady===!1)){const p=Object.keys(a).reduce((E,m)=>{const h=a[m].initializer;if(h){const u=a[m].pluginId;E.push(e.createElement(h,{key:u,setPlugin:i.current}))}return E},[]);return e.createElement(e.Fragment,null,p,e.createElement(r.LoadingIndicatorPage,null))}return e.createElement(at,null)};var fe=n(28344);const ct=()=>({type:fe.l}),dt=t=>({type:fe.m,permissions:t}),ye=({children:t,permissions:a,refetchPermissions:s})=>{const{allPermissions:i}=(0,P.useSelector)(p=>p.rbacProvider),g=(0,P.useDispatch)();return(0,e.useEffect)(()=>(g(dt(a)),()=>{g(ct())}),[a,g]),i?e.createElement(r.RBACProviderContext.Provider,{value:{allPermissions:i,refetchPermissions:s}},t):e.createElement(r.LoadingIndicatorPage,null)};ye.propTypes={children:l().element.isRequired,permissions:l().array.isRequired,refetchPermissions:l().func.isRequired};const ut=ye;var pt=n(48456),mt=n(81249),J=n.n(mt);const Te=(t,a)=>!J().valid(t)||!J().valid(a)?!1:J().lt(t,a),Ce=y.i8,gt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:q}=(0,r.getFetchClient)(),ht=async t=>{try{const{data:{tag_name:a}}=await pt.Z.get("https://api.github.com/repos/strapi/strapi/releases/latest");return Te(Ce,a)&&gt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Ce}},Et=async()=>{try{const{data:t,headers:a}=await q("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},ft=async()=>{try{const{data:t,headers:a}=await q("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},yt=async()=>{try{const{data:{data:{roles:t}}}=await q("/admin/users/me");return t}catch(t){throw new Error(t)}},ve=y.i8,Tt=()=>{const{setGuidedTourVisibility:t}=(0,r.useGuidedTour)(),a=(0,r.useNotification)(),s=(0,e.useRef)(t),i=r.auth.getUserInfo(),g=H()(i,"username")||(0,X.Pp)(i.firstname,i.lastname),[p,E]=(0,e.useState)(g),[m,h]=(0,e.useState)(null),{showReleaseNotification:u}=(0,k.um)(),[{data:T,status:b},{data:A,isLoading:K},{data:N,status:S,refetch:j,isFetched:D,isFetching:L},{data:x}]=(0,I.useQueries)([{queryKey:"app-infos",queryFn:Et},{queryKey:"strapi-release",queryFn:()=>ht(a),enabled:u,initialData:ve},{queryKey:"admin-users-permission",queryFn:ft,initialData:[]},{queryKey:"user-roles",queryFn:yt}]),c=(0,e.useMemo)(()=>Te(ve,A),[A]);(0,e.useEffect)(()=>{x&&x.find(({code:te})=>te==="strapi-super-admin")&&T?.autoReload&&s.current(!0)},[x,T]),(0,e.useEffect)(()=>{(async()=>{const te=await(0,X.Qy)(i);h(te)})()},[i]);const z=K||(L&&D||b==="loading"||S==="loading"),_=(0,e.useMemo)(()=>({...T,userId:m,latestStrapiReleaseTag:A,setUserDisplayName:E,shouldUpdateStrapi:c,userDisplayName:p}),[T,A,c,p,m]);return z?e.createElement(r.LoadingIndicatorPage,null):b==="error"?e.createElement("div",null,"error..."):e.createElement(r.AppInfosContext.Provider,{value:_},e.createElement(ut,{permissions:N,refetchPermissions:j},e.createElement(lt,null)))}},89285:($,M,n)=>{n.d(M,{Z:()=>R});var e=n(67294),r=n(45697),I=n.n(r),f=n(27298),H=n.n(f),y=n(72899),k=n.n(y),d=n(99872);const P=({type:O,...U})=>e.createElement(y.Box,{width:(0,f.pxToRem)(2),height:"100%",background:O===d.VM?"neutral300":"primary500",hasRadius:!0,...U});P.defaultProps={type:d.VM},P.propTypes={type:I().oneOf([d.lW,d.hx,d.VM])};const R=P},96392:($,M,n)=>{n.d(M,{Z:()=>U});var e=n(67294),r=n(45697),I=n.n(r),f=n(27298),H=n.n(f),y=n(72899),k=n.n(y),d=n(22522),P=n.n(d),R=n(99872);const O=({type:W,number:V})=>W===R.hx?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Icon,{as:d.Check,"aria-hidden":!0,width:(0,f.pxToRem)(16),color:"neutral0"})):W===R.lW?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral0"},V)):e.createElement(y.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral600"},V));O.defaultProps={number:void 0,type:R.VM},O.propTypes={number:I().number,type:I().oneOf([R.lW,R.hx,R.VM])};const U=O},99872:($,M,n)=>{n.d(M,{VM:()=>I,hx:()=>r,lW:()=>e});const e="isActive",r="isDone",I="isNotDone"},64729:($,M,n)=>{n.d(M,{Z:()=>r});const r={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
