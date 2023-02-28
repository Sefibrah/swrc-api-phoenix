(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8853],{20400:(M,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>Tt});var e=t(67294),l=t(49656),n=t(68547),o=t(31498),i=t(81912),g=t(29728),p=t(17034),E=t(67838),T=t(36989),O=t(49066),b=t(185),h=t(11057),L=t(63985),f=t(47144),D=t(18374),m=t(63237),c=t(75515),B=t(14087),U=t(96315),$=t(97132),K=t(23724),W=t(63852),I=t(89031);const w=async(s,r)=>{try{const{get:a}=(0,n.getFetchClient)(),{data:d}=await a((0,I.Gc)("roles"));return r("The roles have loaded successfully"),d}catch{throw s({type:"warning",message:{id:"notification.error"}}),new Error("error")}},se=async(s,r)=>{try{const{del:a}=(0,n.getFetchClient)();await a(`${(0,I.Gc)("roles")}/${s}`)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var V=t(45697),Z=t.n(V),Y=t(12028),ae=t(11047),oe=t(550),me=t(4585),_=t(20022);const q=({sortedRoles:s,canDelete:r,permissions:a,setRoleToDelete:d,onDelete:v})=>{const{formatMessage:u}=(0,$.useIntl)(),{push:R}=(0,l.useHistory)(),[P,x]=v,C=y=>r&&!["public","authenticated"].includes(y.type),S=y=>{d(y),x(!P)},j=y=>{R(`/settings/${o.Z}/roles/${y}`)};return e.createElement(oe.p,null,s?.map(y=>e.createElement(f.Tr,{key:y.name,...(0,n.onRowClick)({fn:()=>j(y.id)})},e.createElement(D.Td,{width:"20%"},e.createElement(c.Z,null,y.name)),e.createElement(D.Td,{width:"50%"},e.createElement(c.Z,null,y.description)),e.createElement(D.Td,{width:"30%"},e.createElement(c.Z,null,`${y.nb_users} ${u({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(D.Td,null,e.createElement(ae.k,{justifyContent:"end",...n.stopPropagation},e.createElement(n.CheckPermissions,{permissions:a.updateRole},e.createElement(Y.h,{onClick:()=>j(y.id),noBorder:!0,icon:e.createElement(me.Z,null),label:u({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${y.name}`})})),C(y)&&e.createElement(n.CheckPermissions,{permissions:a.deleteRole},e.createElement(Y.h,{onClick:()=>S(y.id),noBorder:!0,icon:e.createElement(_.default,null),label:u({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${y.name}`})})))))))},ge=q;q.defaultProps={canDelete:!1},q.propTypes={onDelete:Z().array.isRequired,permissions:Z().object.isRequired,setRoleToDelete:Z().func.isRequired,sortedRoles:Z().array.isRequired,canDelete:Z().bool};const pe=()=>{const{trackUsage:s}=(0,n.useTracking)(),{formatMessage:r}=(0,$.useIntl)(),{push:a}=(0,l.useHistory)(),d=(0,n.useNotification)(),{notifyStatus:v}=(0,B.G)(),[{query:u}]=(0,n.useQueryParams)(),R=u?._q||"",[P,x]=(0,e.useState)(!1),[C,S]=(0,e.useState)(!1),[j,y]=(0,e.useState)();(0,n.useFocusWhenNavigate)();const N=(0,K.useQueryClient)(),Q=(0,e.useMemo)(()=>({create:i.Z.createRole,read:i.Z.readRoles,update:i.Z.updateRole,delete:i.Z.deleteRole}),[]),{isLoading:F,allowedActions:{canRead:G,canDelete:X}}=(0,n.useRBAC)(Q),{isLoading:ne,data:{roles:Ue},isFetching:Dt}=(0,K.useQuery)("get-roles",()=>w(d,v),{initialData:{},enabled:G}),$e=ne||Dt,Mt=()=>{s("willCreateRole"),a(`/settings/${o.Z}/roles/new`)},bt=()=>{x(!P)},Lt={roles:{id:(0,I.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,I.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ot=r({id:"global.roles",defaultMessage:"Roles"}),Bt=(0,K.useMutation)(Zt=>se(Zt,d),{async onSuccess(){await N.invalidateQueries("get-roles")}}),St=async()=>{S(!0),await Bt.mutateAsync(j),x(!P),S(!1)},ue=(0,W.ZP)(Ue||[],R,{keys:["name","description"]}),Ut=R&&!ue.length?"search":"roles",$t=4,jt=(Ue?.length||0)+1;return e.createElement(p.A,null,e.createElement(n.SettingsPageTitle,{name:Ot}),e.createElement(b.o,{"aria-busy":$e},e.createElement(E.T,{title:r({id:"global.roles",defaultMessage:"Roles"}),subtitle:r({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.CheckPermissions,{permissions:i.Z.createRole},e.createElement(g.z,{onClick:Mt,startIcon:e.createElement(U.default,null),size:"S"},r({id:(0,I.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(T.Z,{startActions:e.createElement(n.SearchURLQuery,{label:r({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(O.D,null,!G&&e.createElement(n.NoPermissions,null),($e||F)&&e.createElement(n.LoadingIndicatorPage,null),G&&ue&&ue?.length?e.createElement(h.i,{colCount:$t,rowCount:jt},e.createElement(L.h,null,e.createElement(f.Tr,null,e.createElement(D.Th,null,e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.name",defaultMessage:"Name"}))),e.createElement(D.Th,null,e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.description",defaultMessage:"Description"}))),e.createElement(D.Th,null,e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.users",defaultMessage:"Users"}))),e.createElement(D.Th,null,e.createElement(m.T,null,r({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(ge,{sortedRoles:ue,canDelete:X,permissions:i.Z,setRoleToDelete:y,onDelete:[P,x]})):e.createElement(n.EmptyStateLayout,{content:Lt[Ut]})),e.createElement(n.ConfirmDialog,{isConfirmButtonLoading:C,onConfirm:St,onToggleDialog:bt,isOpen:P})))},ie=()=>e.createElement(n.CheckPagePermissions,{permissions:i.Z.accessRoles},e.createElement(pe,null));var re=t(80831),k=t(7681),z=t(41580),ve=t(16364),Re=t(64256),je=t(67109),Ce=t(85018),le=t(11276),J=t(74571),ee=t(84757),H=t(96486);const Pe=(0,e.createContext)({}),xe=({children:s,value:r})=>e.createElement(Pe.Provider,{value:r},s),Ee=()=>(0,e.useContext)(Pe);xe.propTypes={children:Z().node.isRequired,value:Z().object.isRequired};var ce=t(27821),Ze=t(35161),Ie=t.n(Ze),ke=t(13217),Fe=t.n(ke);const Ke=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ne=(0,ce.default)(z.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function he({route:s}){const{formatMessage:r}=(0,$.useIntl)(),{method:a,handler:d,path:v}=s,u=v?Fe()(v.split("/")):[],[R="",P=""]=d?d.split("."):[],x=Ke(s.method);return e.createElement(k.K,{spacing:2},e.createElement(c.Z,{variant:"delta",as:"h3"},r({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,R),e.createElement(c.Z,{variant:"delta",textColor:"primary600"},".",P)),e.createElement(k.K,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},e.createElement(Ne,{background:x.background,borderColor:x.border,padding:2},e.createElement(c.Z,{fontWeight:"bold",textColor:x.text},a)),e.createElement(z.x,{paddingLeft:2,paddingRight:2},Ie()(u,C=>e.createElement(c.Z,{key:C,textColor:C.includes(":")?"neutral600":"neutral900"},"/",C)))))}he.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},he.propTypes={route:Z().shape({handler:Z().string,method:Z().string,path:Z().string})};const Ge=he,We=()=>{const{formatMessage:s}=(0,$.useIntl)(),{selectedAction:r,routes:a}=Ee(),d=(0,H.without)(r.split("."),"controllers"),v=(0,H.get)(a,d[0]),u=d.slice(1).join("."),R=(0,H.isEmpty)(v)?[]:v.filter(P=>P.handler.endsWith(u));return e.createElement(J.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},r?e.createElement(k.K,{spacing:2},R.map((P,x)=>e.createElement(Ge,{key:x,route:P}))):e.createElement(k.K,{spacing:2},e.createElement(c.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(c.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var we=t(48734),ze=t(74756),He=t(63081),Ve=t(11700),Qe=t.n(Ve);function Xe(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Qe()(s.replace("api::","").replace("plugin::",""))}}const Ye=Xe;var Je=t(89734),Ae=t.n(Je),Te=t(36213),_e=t(78114);const De=ce.css`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,qe=(0,ce.default)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&De}
  &:hover {
    ${De}
  }
`,et=ce.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Me=({subCategory:s})=>{const{formatMessage:r}=(0,$.useIntl)(),{onChange:a,onChangeSelectAll:d,onSelectedAction:v,selectedAction:u,modifiedData:R}=Ee(),P=(0,e.useMemo)(()=>(0,H.get)(R,s.name,{}),[R,s]),x=(0,e.useMemo)(()=>Object.values(P).every(y=>y.enabled===!0),[P]),C=(0,e.useMemo)(()=>Object.values(P).some(y=>y.enabled===!0)&&!x,[P,x]),S=(0,e.useCallback)(({target:{name:y}})=>{d({target:{name:y,value:!x}})},[x,d]),j=(0,e.useCallback)(y=>u===y,[u]);return e.createElement(z.x,null,e.createElement(ae.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(z.x,{paddingRight:4},e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(et,null),e.createElement(z.x,{paddingLeft:4},e.createElement(Te.X,{name:s.name,value:x,onValueChange:y=>S({target:{name:s.name,value:y}}),indeterminate:C},r({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(ae.k,{paddingTop:6,paddingBottom:6},e.createElement(le.r,{gap:2,style:{flex:1}},s.actions.map(y=>{const N=`${y.name}.enabled`;return e.createElement(J.P,{col:6,key:y.name},e.createElement(qe,{isActive:j(y.name),padding:2,hasRadius:!0},e.createElement(Te.X,{value:(0,H.get)(R,N,!1),name:N,onValueChange:Q=>a({target:{name:N,value:Q}})},y.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>v(y.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(_e.Z,null))))}))))};Me.propTypes={subCategory:Z().object.isRequired};const tt=Me,be=({name:s,permissions:r})=>{const a=(0,e.useMemo)(()=>Ae()(Object.values(r.controllers).reduce((d,v,u)=>{const R=`${s}.controllers.${Object.keys(r.controllers)[u]}`,P=Ae()(Object.keys(v).reduce((x,C)=>[...x,{...v[C],label:C,name:`${R}.${C}`}],[]),"label");return[...d,{actions:P,label:Object.keys(r.controllers)[u],name:R}]},[]),"label"),[s,r]);return e.createElement(z.x,{padding:6},a.map(d=>e.createElement(tt,{key:d.name,subCategory:d})))};be.propTypes={name:Z().string.isRequired,permissions:Z().object.isRequired};const nt=be,st=(s,r)=>{const a=Object.keys(r).sort().map(d=>({name:d,isOpen:!1}));return{...s,collapses:a}};var de=t(18172);const at={collapses:[]},rt=(s,r)=>(0,de.default)(s,a=>{switch(r.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((d,v)=>v===r.index?{...d,isOpen:!d.isOpen}:{...d,isOpen:!1});break}default:return a}}),ot=()=>{const{modifiedData:s}=Ee(),{formatMessage:r}=(0,$.useIntl)(),[{collapses:a},d]=(0,e.useReducer)(rt,at,u=>st(u,s)),v=u=>d({type:"TOGGLE_COLLAPSE",index:u});return e.createElement(k.K,{spacing:1},a.map((u,R)=>e.createElement(we.U,{expanded:u.isOpen,onToggle:()=>v(R),key:u.name,variant:R%2===0?"secondary":void 0},e.createElement(ze.B,{title:Ye(u.name),description:r({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:u.name}),variant:R%2?"primary":"secondary"}),e.createElement(He.v,null,e.createElement(z.x,null,e.createElement(nt,{permissions:s[u.name],name:u.name}))))))},it={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},lt=(s,r)=>(0,de.default)(s,a=>{switch(r.type){case"ON_CHANGE":{const d=r.keys.length,v=r.keys[d-1]==="enabled";if(r.value&&v){const u=(0,H.take)(r.keys,d-1).join(".");a.selectedAction=u}(0,H.set)(a,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_SELECT_ALL":{const d=["modifiedData",...r.keys],v=(0,H.get)(s,d,{}),u=Object.keys(v).reduce((R,P)=>(R[P]={...v[P],enabled:r.value},R),{});(0,H.set)(a,d,u);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:d}=r;a.selectedAction=d===s.selectedAction?"":d;break}default:return a}}),ct=(s,r,a)=>({...s,initialData:r,modifiedData:r,routes:a}),Le=(0,e.forwardRef)(({permissions:s,routes:r},a)=>{const{formatMessage:d}=(0,$.useIntl)(),[v,u]=(0,e.useReducer)(lt,it,S=>ct(S,s,r));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:v.modifiedData}},resetForm(){u({type:"ON_RESET"})},setFormAfterSubmit(){u({type:"ON_SUBMIT_SUCCEEDED"})}}));const C={...v,onChange:({target:{name:S,value:j}})=>u({type:"ON_CHANGE",keys:S.split("."),value:j==="empty__string_value"?"":j}),onChangeSelectAll:({target:{name:S,value:j}})=>u({type:"ON_CHANGE_SELECT_ALL",keys:S.split("."),value:j}),onSelectedAction:S=>u({type:"SELECT_ACTION",actionToSelect:S})};return e.createElement(xe,{value:C},e.createElement(le.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(J.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.K,{spacing:6},e.createElement(k.K,{spacing:2},e.createElement(c.Z,{variant:"delta",as:"h2"},d({id:(0,ee.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(c.Z,{as:"p",textColor:"neutral600"},d({id:(0,ee.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(ot,null))),e.createElement(We,null)))});Le.propTypes={permissions:Z().object.isRequired,routes:Z().object.isRequired};const Oe=(0,e.memo)(Le),wt={isLoading:!0,modifiedData:{}},zt=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=r.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=r.data;break}default:return a}}),Ht=null;var dt=t(25108);const Vt=(s,r)=>{const{isLoading:a,allowedActions:d}=useRBAC(r),[{isLoading:v,modifiedData:u},R]=useReducer(reducer,initialState),P=useNotification(),x=useRef(!0),C=new AbortController,{signal:S}=C;useEffect(()=>(a||(async()=>{try{R({type:"GET_DATA"});const N=await request(getRequestURL(s),{method:"GET",signal:S});R({type:"GET_DATA_SUCCEEDED",data:N})}catch(N){x.current&&(R({type:"GET_DATA_ERROR"}),dt.error(N),P({type:"warning",message:{id:"notification.error"}}))}})(),()=>{C.abort(),x.current=!1}),[a,s]);const j=useCallback(y=>{R({type:"ON_SUBMIT_SUCCEEDED",data:y})},[]);return{allowedActions:d,dispatchSubmitSucceeded:j,isLoading:v,isLoadingForPermissions:a,modifiedData:u}},Qt=null,Xt={roles:[],isLoading:!0},Yt=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=r.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Jt=null,_t=(s=!0)=>{const[{roles:r,isLoading:a},d]=useReducer(reducer,initialState,()=>init(initialState,s)),v=useNotification(),u=useRef(!0),R=new AbortController,{signal:P}=R;useEffect(()=>(s&&x(),()=>{R.abort(),u.current=!1}),[s]);const x=async()=>{try{d({type:"GET_DATA"});const{roles:C}=await request(`/${pluginId}/roles`,{method:"GET",signal:P});d({type:"GET_DATA_SUCCEEDED",data:C})}catch(C){const S=get(C,["response","payload","message"],"An error occured");u.current&&(d({type:"GET_DATA_ERROR"}),S!=="Forbidden"&&v({type:"warning",message:S}))}};return{roles:r,isLoading:a,getData:x}},qt=null,ut=(s,r)=>({...s,isLoading:r}),Be={permissions:{},routes:{},isLoading:!0},mt=(s,r)=>(0,de.default)(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.permissions={},a.routes={};break}case"GET_DATA_SUCCEEDED":{a.permissions=r.permissions,a.routes=r.routes,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Se=(s=!0)=>{const r=(0,n.useNotification)(),[{permissions:a,routes:d,isLoading:v},u]=(0,e.useReducer)(mt,Be,()=>ut(Be,s)),R=(0,n.useFetchClient)(),P=(0,e.useCallback)(async()=>{try{u({type:"GET_DATA"});const[{permissions:x},{routes:C}]=await Promise.all([`/${o.Z}/permissions`,`/${o.Z}/routes`].map(async S=>(await R.get(S)).data));u({type:"GET_DATA_SUCCEEDED",permissions:(0,I.YX)(x),routes:C})}catch(x){const C=(0,H.get)(x,["response","payload","message"],"An error occured");u({type:"GET_DATA_ERROR"}),C!=="Forbidden"&&r({type:"warning",message:C})}},[r]);return(0,e.useEffect)(()=>{s&&P()},[P,s]),{permissions:a,routes:d,getData:P,isLoading:v}},gt={role:{},isLoading:!0},pt=(s,r)=>(0,de.default)(s,a=>{switch(r.type){case"GET_DATA_SUCCEEDED":{a.role=r.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=r.name,a.role.description=r.description;break}default:return a}});var Et=t(25108);const ht=s=>{const[r,a]=(0,e.useReducer)(pt,gt),d=(0,n.useNotification)(),v=(0,e.useRef)(null),{get:u}=(0,n.useFetchClient)();(0,e.useEffect)(()=>(v.current=!0,s?R(s):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>v.current=!1),[s]);const R=async x=>{try{const{data:{role:C}}=await u(`/${o.Z}/roles/${x}`);v.current&&a({type:"GET_DATA_SUCCEEDED",role:C})}catch(C){Et.error(C),a({type:"GET_DATA_ERROR"}),d({type:"warning",message:{id:"notification.error"}})}},P=(0,e.useCallback)(x=>{a({type:"ON_SUBMIT_SUCCEEDED",...x})},[]);return{...r,onSubmitSucceeded:P}};var te=t(53209);const ft=te.Ry().shape({name:te.Z_().required(n.translatedErrors.required),description:te.Z_().required(n.translatedErrors.required)});var yt=t(25108);const vt=()=>{const{formatMessage:s}=(0,$.useIntl)(),[r,a]=(0,e.useState)(!1),d=(0,n.useNotification)(),{lockApp:v,unlockApp:u}=(0,n.useOverlayBlocker)(),{params:{id:R}}=(0,l.useRouteMatch)(`/settings/${o.Z}/roles/:id`),{isLoading:P,routes:x}=Se(),{role:C,onSubmitSucceeded:S,isLoading:j}=ht(R),y=(0,e.useRef)(),{put:N}=(0,n.useFetchClient)(),Q=async F=>{v(),a(!0);try{const G=y.current.getPermissions();await N(`/${o.Z}/roles/${R}`,{...F,...G,users:[]}),S({name:F.name,description:F.description}),d({type:"success",message:{id:(0,ee.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(G){yt.error(G),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),u()};return j?e.createElement(n.LoadingIndicatorPage,null):e.createElement(b.o,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(re.Formik,{enableReinitialize:!0,initialValues:{name:C.name,description:C.description},onSubmit:Q,validationSchema:ft},({handleSubmit:F,values:G,handleChange:X,errors:ne})=>e.createElement(n.Form,{noValidate:!0,onSubmit:F},e.createElement(E.T,{primaryAction:!P&&e.createElement(g.z,{disabled:C.code==="strapi-super-admin",type:"submit",loading:r,startIcon:e.createElement(Ce.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:C.name,subtitle:C.description,navigationAction:e.createElement(n.Link,{startIcon:e.createElement(je.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(O.D,null,e.createElement(k.K,{spacing:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.K,{spacing:4},e.createElement(c.Z,{variant:"delta",as:"h2"},s({id:(0,ee.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(le.r,{gap:4},e.createElement(J.P,{col:6},e.createElement(ve.o,{name:"name",value:G.name||"",onChange:X,label:s({id:"global.name",defaultMessage:"Name"}),error:ne.name?s({id:ne.name,defaultMessage:"Invalid value"}):null})),e.createElement(J.P,{col:6},e.createElement(Re.g,{name:"description",value:G.description||"",onChange:X,label:s({id:"global.description",defaultMessage:"Description"}),error:ne.description?s({id:ne.description,defaultMessage:"Invalid value"}):null}))))),!P&&e.createElement(Oe,{ref:y,permissions:C.permissions,routes:x}))))))},Rt=()=>e.createElement(n.CheckPagePermissions,{permissions:i.Z.updateRole},e.createElement(vt,null)),Ct=te.Ry().shape({name:te.Z_().required(n.translatedErrors.required),description:te.Z_().required(n.translatedErrors.required)});var Pt=t(25108);const xt=()=>{const{formatMessage:s}=(0,$.useIntl)(),[r,a]=(0,e.useState)(!1),d=(0,n.useNotification)(),{goBack:v}=(0,l.useHistory)(),{lockApp:u,unlockApp:R}=(0,n.useOverlayBlocker)(),{isLoading:P,permissions:x,routes:C}=Se(),{trackUsage:S}=(0,n.useTracking)(),j=(0,e.useRef)(),{post:y}=(0,n.useFetchClient)(),N=async Q=>{u(),a(!0);try{const F=j.current.getPermissions();await y(`/${o.Z}/roles`,{...Q,...F,users:[]}),S("didCreateRole"),d({type:"success",message:{id:(0,ee.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),v()}catch(F){Pt.error(F),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),R()};return e.createElement(b.o,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(re.Formik,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:N,validationSchema:Ct},({handleSubmit:Q,values:F,handleChange:G,errors:X})=>e.createElement(n.Form,{noValidate:!0,onSubmit:Q},e.createElement(E.T,{primaryAction:!P&&e.createElement(g.z,{type:"submit",loading:r,startIcon:e.createElement(Ce.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(O.D,null,e.createElement(k.K,{spacing:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.K,{spacing:4},e.createElement(c.Z,{variant:"delta",as:"h2"},s({id:(0,ee.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(le.r,{gap:4},e.createElement(J.P,{col:6},e.createElement(ve.o,{name:"name",value:F.name||"",onChange:G,label:s({id:"global.name",defaultMessage:"Name"}),error:X.name?s({id:X.name,defaultMessage:"Invalid value"}):null})),e.createElement(J.P,{col:6},e.createElement(Re.g,{name:"description",value:F.description||"",onChange:G,label:s({id:"global.description",defaultMessage:"Description"}),error:X.description?s({id:X.description,defaultMessage:"Invalid value"}):null}))))),!P&&e.createElement(Oe,{ref:j,permissions:x,routes:C}))))))},At=()=>e.createElement(n.CheckPagePermissions,{permissions:i.Z.createRole},e.createElement(xt,null)),Tt=()=>e.createElement(n.CheckPagePermissions,{permissions:i.Z.accessRoles},e.createElement(l.Switch,null,e.createElement(l.Route,{path:`/settings/${o.Z}/roles/new`,component:At,exact:!0}),e.createElement(l.Route,{path:`/settings/${o.Z}/roles/:id`,component:Rt,exact:!0}),e.createElement(l.Route,{path:`/settings/${o.Z}/roles`,component:ie,exact:!0}),e.createElement(l.Route,{path:"",component:n.NotFound})))},89031:(M,A,t)=>{"use strict";t.d(A,{YX:()=>n,Gc:()=>g,OB:()=>p.Z});var e=t(96486);const n=E=>Object.keys(E).reduce((T,O)=>{const b=E[O].controllers,h=Object.keys(b).reduce((L,f)=>((0,e.isEmpty)(b[f])||(L[f]=b[f]),L),{});return(0,e.isEmpty)(h)||(T[O]={controllers:h}),T},{});var o=t(31498);const g=E=>`/${o.Z}/${E}`;var p=t(84757)},89881:(M,A,t)=>{var e=t(47816),l=t(99291),n=l(e);M.exports=n},69199:(M,A,t)=>{var e=t(89881),l=t(98612);function n(o,i){var g=-1,p=l(o)?Array(o.length):[];return e(o,function(E,T,O){p[++g]=i(E,T,O)}),p}M.exports=n},82689:(M,A,t)=>{var e=t(29932),l=t(97786),n=t(67206),o=t(69199),i=t(71131),g=t(7518),p=t(85022),E=t(6557),T=t(1469);function O(b,h,L){h.length?h=e(h,function(m){return T(m)?function(c){return l(c,m.length===1?m[0]:m)}:m}):h=[E];var f=-1;h=e(h,g(n));var D=o(b,function(m,c,B){var U=e(h,function($){return $(m)});return{criteria:U,index:++f,value:m}});return i(D,function(m,c){return p(m,c,L)})}M.exports=O},71131:M=>{function A(t,e){var l=t.length;for(t.sort(e);l--;)t[l]=t[l].value;return t}M.exports=A},26393:(M,A,t)=>{var e=t(33448);function l(n,o){if(n!==o){var i=n!==void 0,g=n===null,p=n===n,E=e(n),T=o!==void 0,O=o===null,b=o===o,h=e(o);if(!O&&!h&&!E&&n>o||E&&T&&b&&!O&&!h||g&&T&&b||!i&&b||!p)return 1;if(!g&&!E&&!h&&n<o||h&&i&&p&&!g&&!E||O&&i&&p||!T&&p||!b)return-1}return 0}M.exports=l},85022:(M,A,t)=>{var e=t(26393);function l(n,o,i){for(var g=-1,p=n.criteria,E=o.criteria,T=p.length,O=i.length;++g<T;){var b=e(p[g],E[g]);if(b){if(g>=O)return b;var h=i[g];return b*(h=="desc"?-1:1)}}return n.index-o.index}M.exports=l},99291:(M,A,t)=>{var e=t(98612);function l(n,o){return function(i,g){if(i==null)return i;if(!e(i))return n(i,g);for(var p=i.length,E=o?p:-1,T=Object(i);(o?E--:++E<p)&&g(T[E],E,T)!==!1;);return i}}M.exports=l},35161:(M,A,t)=>{var e=t(29932),l=t(67206),n=t(69199),o=t(1469);function i(g,p){var E=o(g)?e:n;return E(g,l(p,3))}M.exports=i},89734:(M,A,t)=>{var e=t(21078),l=t(82689),n=t(5976),o=t(16612),i=n(function(g,p){if(g==null)return[];var E=p.length;return E>1&&o(g,p[0],p[1])?p=[]:E>2&&o(p[0],p[1],p[2])&&(p=[p[0]]),l(g,e(p,1),[])});M.exports=i},13217:(M,A,t)=>{var e=t(14259);function l(n){var o=n==null?0:n.length;return o?e(n,1,o):[]}M.exports=l},48734:(M,A,t)=>{"use strict";t.d(A,{U:()=>b,y:()=>T});var e=t(85893),l=t(27821),n=t(75515),o=t(14085),i=t(41580),g=t(11047),p=t(13819);const E=({theme:h,expanded:L,variant:f,disabled:D,error:m})=>m?`1px solid ${h.colors.danger600} !important`:D?`1px solid ${h.colors.neutral150}`:L?`1px solid ${h.colors.primary600}`:f==="primary"?`1px solid ${h.colors.neutral0}`:`1px solid ${h.colors.neutral100}`,T=(0,l.default)(n.Z)``,O=(0,l.default)(i.x)`
  border: ${E};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:h})=>h.colors.primary600};

    ${T} {
      color: ${({theme:h,expanded:L})=>L?void 0:h.colors.primary700};
    }

    ${n.Z} {
      color: ${({theme:h,expanded:L})=>L?void 0:h.colors.primary600};
    }

    & > ${g.k} {
      background: ${({theme:h})=>h.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:h})=>h.colors.primary200};
    }
  }
`,b=({children:h,disabled:L=!1,error:f,expanded:D=!1,hasErrorMessage:m=!0,id:c,onToggle:B,toggle:U,size:$="M",variant:K="primary",shadow:W})=>{const I=(0,o.M)(c);return(0,e.jsxs)(p.S.Provider,{value:{expanded:D,onToggle:B,toggle:U,id:I,size:$,variant:K,disabled:L},children:[(0,e.jsx)(O,{"data-strapi-expanded":D,disabled:L,"aria-disabled":L,expanded:D,hasRadius:!0,variant:K,error:f,shadow:W,children:h}),f&&m&&(0,e.jsx)(i.x,{paddingTop:1,children:(0,e.jsx)(n.Z,{variant:"pi",textColor:"danger600",children:f})})]})}},63081:(M,A,t)=>{"use strict";t.d(A,{v:()=>o});var e=t(85893),l=t(41580),n=t(13819);const o=({children:i,...g})=>{const{expanded:p,id:E}=(0,n.A)();if(!p)return null;const T=`accordion-content-${E}`,O=`accordion-label-${E}`,b=`accordion-desc-${E}`;return(0,e.jsx)(l.x,{role:"region",id:T,"aria-labelledby":O,"aria-describedby":b,...g,children:i})}},13819:(M,A,t)=>{"use strict";t.d(A,{A:()=>n,S:()=>l});var e=t(67294);const l=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(l)},74756:(M,A,t)=>{"use strict";t.d(A,{B:()=>D});var e=t(85893),l=t(41363),n=t(27821),o=t(39785),i=t(75515),g=t(11047),p=t(7681),E=t(52624),T=t(48734),O=t(13819);const b=({expanded:m,disabled:c,variant:B})=>{let U="neutral100";return m?U="primary100":c?U="neutral150":B==="primary"&&(U="neutral0"),U};var h=t(25108);const L=(0,n.default)(o.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:m,expanded:c})=>c?m.colors.primary600:m.colors.neutral500};
    }
  }
`,f=(0,n.default)(g.k)`
  min-height: ${({theme:m,size:c})=>m.sizes.accordions[c]};
  border-radius: ${({theme:m,expanded:c})=>c?`${m.borderRadius} ${m.borderRadius} 0 0`:m.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.primary600};
      }
    }
  }
`,D=({title:m,description:c,as:B="span",togglePosition:U="right",action:$,...K})=>{const{onToggle:W,toggle:I,expanded:w,id:se,size:V,variant:Z,disabled:Y}=(0,O.A)(),ae=`accordion-content-${se}`,oe=`accordion-label-${se}`,me=`accordion-desc-${se}`,_=V==="M"?6:4,q=V==="M"?_:_-2,ge=b({expanded:w,disabled:Y,variant:Z}),fe={as:B,fontWeight:V==="S"?"bold":void 0,id:oe,textColor:w?"primary600":"neutral700",ellipsis:!0,variant:V==="M"?"delta":void 0},pe=w?"primary600":"neutral600",ye=w?"primary200":"neutral200",ie=V==="M"?`${32/16}rem`:`${24/16}rem`,re=()=>{Y||(I&&!W?(h.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),I()):W&&W())},k=(0,e.jsx)(g.k,{justifyContent:"center",borderRadius:"50%",height:ie,width:ie,transform:w?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ye,cursor:Y?"not-allowed":"pointer",onClick:re,shrink:0,children:(0,e.jsx)(E.J,{as:l.CarretDown,width:V==="M"?`${11/16}rem`:`${8/16}rem`,color:w?"primary600":"neutral600"})});return(0,e.jsx)(f,{paddingBottom:q,paddingLeft:_,paddingRight:_,paddingTop:q,background:ge,expanded:w,size:V,justifyContent:"space-between",cursor:Y?"not-allowed":"",children:(0,e.jsxs)(p.K,{horizontal:!0,spacing:3,flex:1,maxWidth:"100%",children:[U==="left"&&k,(0,e.jsx)(L,{onClick:re,"aria-disabled":Y,"aria-expanded":w,"aria-controls":ae,"aria-labelledby":oe,"data-strapi-accordion-toggle":!0,expanded:w,type:"button",flex:1,minWidth:0,...K,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.y,{...fe,children:m}),c&&(0,e.jsx)(i.Z,{as:"p",id:me,textColor:pe,children:c})]})}),U==="right"&&(0,e.jsxs)(p.K,{horizontal:!0,spacing:3,children:[k,$]}),U==="left"&&$]})})}},36989:(M,A,t)=>{"use strict";t.d(A,{Z:()=>E});var e=t(67294),l=t(45697),n=t(27821),o=t(41580),i=t(11047);const g=(0,n.default)(i.k)`
  & > * + * {
    margin-left: ${({theme:T})=>T.spaces[2]};
  }

  margin-left: ${({pullRight:T})=>T?"auto":void 0};
`,p=(0,n.default)(g)`
  flex-shrink: 0;
`,E=({startActions:T,endActions:O})=>T||O?e.createElement(o.x,{paddingLeft:10,paddingRight:10},e.createElement(o.x,{paddingBottom:4},e.createElement(i.k,{justifyContent:"space-between",alignItems:"flex-start"},T&&e.createElement(g,{wrap:"wrap"},T),O&&e.createElement(p,{pullRight:!0},O)))):null;E.defaultProps={endActions:void 0,startActions:void 0},E.propTypes={endActions:l.node,startActions:l.node}},49066:(M,A,t)=>{"use strict";t.d(A,{D:()=>o});var e=t(67294),l=t(45697),n=t(41580);const o=({children:i})=>e.createElement(n.x,{paddingLeft:10,paddingRight:10},i);o.propTypes={children:l.node.isRequired}},67838:(M,A,t)=>{"use strict";t.d(A,{T:()=>b});var e=t(67294),l=t(27821),n=t(45697),o=t(75515),i=t(41580),g=t(11047);const p=f=>{const D=(0,e.useRef)(null),[m,c]=(0,e.useState)(!0),B=([U])=>{c(U.isIntersecting)};return(0,e.useEffect)(()=>{const U=D.current,$=new IntersectionObserver(B,f);return U&&$.observe(D.current),()=>{U&&$.disconnect()}},[D,f]),[D,m]};var E=t(98402);const T=(f,D)=>{const m=(0,E.useCallbackRef)(D);(0,e.useLayoutEffect)(()=>{const c=new ResizeObserver(m);return Array.isArray(f)?f.forEach(B=>{B.current&&c.observe(B.current)}):f.current&&c.observe(f.current),()=>{c.disconnect()}},[f,m])},O=()=>{const f=(0,e.useRef)(null),[D,m]=(0,e.useState)(null),[c,B]=p({root:null,rootMargin:"0px",threshold:0});return T(c,()=>{c.current&&m(c.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{f.current&&m(f.current.getBoundingClientRect())},[f]),{containerRef:c,isVisible:B,baseHeaderLayoutRef:f,headerSize:D}},b=f=>{const{containerRef:D,isVisible:m,baseHeaderLayoutRef:c,headerSize:B}=O();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:B?.height},ref:D},m&&e.createElement(L,{ref:c,...f})),!m&&e.createElement(L,{...f,sticky:!0,width:B?.width}))};b.displayName="HeaderLayout";const h=(0,l.default)(i.x)`
  width: ${f=>f.width}px;
`,L=e.forwardRef(({navigationAction:f,primaryAction:D,secondaryAction:m,subtitle:c,title:B,sticky:U,width:$,...K},W)=>{const I=typeof c=="string";return U?e.createElement(h,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:$,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,null,f&&e.createElement(i.x,{paddingRight:3},f),e.createElement(i.x,null,e.createElement(o.Z,{variant:"beta",as:"h1",...K},B),I?e.createElement(o.Z,{variant:"pi",textColor:"neutral600"},c):c),m?e.createElement(i.x,{paddingLeft:4},m):null),e.createElement(g.k,null,D?e.createElement(i.x,{paddingLeft:2},D):void 0))):e.createElement(i.x,{ref:W,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0},f?e.createElement(i.x,{paddingBottom:2},f):null,e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,null,e.createElement(o.Z,{as:"h1",variant:"alpha",...K},B),m?e.createElement(i.x,{paddingLeft:4},m):null),D),I?e.createElement(o.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},c):c)});L.displayName="BaseHeaderLayout",L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},L.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},b.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},b.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},185:(M,A,t)=>{"use strict";t.d(A,{o:()=>i});var e=t(67294),l=t(45697),n=t(27821);const o=n.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:g,...p})=>{const E=g||"main-content-title";return e.createElement(o,{"aria-labelledby":E,id:"main-content",tabIndex:-1,...p})};i.defaultProps={labelledBy:void 0},i.propTypes={labelledBy:l.string}},39785:(M,A,t)=>{"use strict";t.d(A,{A:()=>h});var e=t(85893),l=t(67294),n=t(27821),o=t(41363),i=t(41580),g=t(75515),p=t(11047),E=t(15585);const T=n.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,O=n.default.div`
  animation: ${T} 2s infinite linear;
  will-change: transform;
`,b=(0,n.default)(p.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:L})=>L.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:L})=>L.colors.primary600};
  }

  ${E.BF}
`,h=l.forwardRef(({children:L,startIcon:f,endIcon:D,onClick:m,disabled:c=!1,loading:B=!1,...U},$)=>{const K=m&&!c?m:void 0,W=c||B;return(0,e.jsxs)(b,{ref:$,"aria-disabled":W,onClick:K,as:"button",type:"button",...U,children:[(f||B)&&(0,e.jsx)(i.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:B?(0,e.jsx)(O,{children:(0,e.jsx)(o.Loader,{})}):f}),(0,e.jsx)(g.Z,{variant:"pi",textColor:W?"neutral600":"primary600",children:L}),D&&(0,e.jsx)(i.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:D})]})});h.displayName="TextButton"},67109:(M,A,t)=>{"use strict";t.d(A,{Z:()=>l});var e=t(85893);function l(n){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"})})}},78114:(M,A,t)=>{"use strict";t.d(A,{Z:()=>l});var e=t(85893);function l(n){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"})})}}}]);