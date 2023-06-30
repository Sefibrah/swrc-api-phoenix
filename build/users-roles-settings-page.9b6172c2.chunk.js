(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8853],{20400:(M,D,t)=>{"use strict";t.r(D),t.d(D,{default:()=>Tt});var e=t(67294),i=t(49656),s=t(68547),o=t(31498),l=t(81912),f=t(29728),m=t(17034),g=t(53979),P=t(36989),b=t(49066),L=t(185),B=t(11057),x=t(63985),p=t(47144),E=t(18374),h=t(63237),d=t(75515),O=t(14087),I=t(96315),U=t(97132),k=t(23724),K=t(63852),j=t(89031);const X=async(n,r)=>{try{const{get:a}=(0,s.getFetchClient)(),{data:c}=await a((0,j.Gc)("roles"));return r("The roles have loaded successfully"),c}catch{throw n({type:"warning",message:{id:"notification.error"}}),new Error("error")}},G=async(n,r)=>{try{const{del:a}=(0,s.getFetchClient)();await a(`${(0,j.Gc)("roles")}/${n}`)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var ue=t(45697),$=t.n(ue),ae=t(12028),J=t(11047),me=t(550),_=t(4585),re=t(20022);const ne=({sortedRoles:n,canDelete:r,permissions:a,setRoleToDelete:c,onDelete:v})=>{const{formatMessage:u}=(0,U.useIntl)(),{push:R}=(0,i.useHistory)(),[A,T]=v,C=y=>r&&!["public","authenticated"].includes(y.type),S=y=>{c(y),T(!A)},Z=y=>{R(`/settings/${o.Z}/roles/${y}`)};return e.createElement(me.p,null,n?.map(y=>e.createElement(p.Tr,{key:y.name,...(0,s.onRowClick)({fn:()=>Z(y.id)})},e.createElement(E.Td,{width:"20%"},e.createElement(d.Z,null,y.name)),e.createElement(E.Td,{width:"50%"},e.createElement(d.Z,null,y.description)),e.createElement(E.Td,{width:"30%"},e.createElement(d.Z,null,`${y.nb_users} ${u({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(E.Td,null,e.createElement(J.k,{justifyContent:"end",...s.stopPropagation},e.createElement(s.CheckPermissions,{permissions:a.updateRole},e.createElement(ae.h,{onClick:()=>Z(y.id),noBorder:!0,icon:e.createElement(_.Z,null),label:u({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${y.name}`})})),C(y)&&e.createElement(s.CheckPermissions,{permissions:a.deleteRole},e.createElement(ae.h,{onClick:()=>S(y.id),noBorder:!0,icon:e.createElement(re.default,null),label:u({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${y.name}`})})))))))},ge=ne;ne.defaultProps={canDelete:!1},ne.propTypes={onDelete:$().array.isRequired,permissions:$().object.isRequired,setRoleToDelete:$().func.isRequired,sortedRoles:$().array.isRequired,canDelete:$().bool};const pe=()=>{const{trackUsage:n}=(0,s.useTracking)(),{formatMessage:r}=(0,U.useIntl)(),{push:a}=(0,i.useHistory)(),c=(0,s.useNotification)(),{notifyStatus:v}=(0,O.G)(),[{query:u}]=(0,s.useQueryParams)(),R=u?._q||"",[A,T]=(0,e.useState)(!1),[C,S]=(0,e.useState)(!1),[Z,y]=(0,e.useState)();(0,s.useFocusWhenNavigate)();const N=(0,k.useQueryClient)(),V=(0,e.useMemo)(()=>({create:l.Z.createRole,read:l.Z.readRoles,update:l.Z.updateRole,delete:l.Z.deleteRole}),[]),{isLoading:F,allowedActions:{canRead:W,canDelete:Q}}=(0,s.useRBAC)(V),{isLoading:te,data:{roles:Ue},isFetching:Dt}=(0,k.useQuery)("get-roles",()=>X(c,v),{initialData:{},enabled:W}),$e=te||Dt,Mt=()=>{n("willCreateRole"),a(`/settings/${o.Z}/roles/new`)},bt=()=>{T(!A)},Lt={roles:{id:(0,j.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,j.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ot=r({id:"global.roles",defaultMessage:"Roles"}),Bt=(0,k.useMutation)(Zt=>G(Zt,c),{async onSuccess(){await N.invalidateQueries("get-roles")}}),St=async()=>{S(!0),await Bt.mutateAsync(Z),T(!A),S(!1)},de=(0,K.ZP)(Ue||[],R,{keys:["name","description"]}),Ut=R&&!de.length?"search":"roles",$t=4,jt=(Ue?.length||0)+1;return e.createElement(m.A,null,e.createElement(s.SettingsPageTitle,{name:Ot}),e.createElement(L.o,{"aria-busy":$e},e.createElement(g.T,{title:r({id:"global.roles",defaultMessage:"Roles"}),subtitle:r({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(s.CheckPermissions,{permissions:l.Z.createRole},e.createElement(f.z,{onClick:Mt,startIcon:e.createElement(I.default,null),size:"S"},r({id:(0,j.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(P.Z,{startActions:e.createElement(s.SearchURLQuery,{label:r({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(b.D,null,!W&&e.createElement(s.NoPermissions,null),($e||F)&&e.createElement(s.LoadingIndicatorPage,null),W&&de&&de?.length?e.createElement(B.i,{colCount:$t,rowCount:jt},e.createElement(x.h,null,e.createElement(p.Tr,null,e.createElement(E.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.name",defaultMessage:"Name"}))),e.createElement(E.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.description",defaultMessage:"Description"}))),e.createElement(E.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.users",defaultMessage:"Users"}))),e.createElement(E.Th,null,e.createElement(h.T,null,r({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(ge,{sortedRoles:de,canDelete:Q,permissions:l.Z,setRoleToDelete:y,onDelete:[A,T]})):e.createElement(s.EmptyStateLayout,{content:Lt[Ut]})),e.createElement(s.ConfirmDialog,{isConfirmButtonLoading:C,onConfirm:St,onToggleDialog:bt,isOpen:A})))},oe=()=>e.createElement(s.CheckPagePermissions,{permissions:l.Z.accessRoles},e.createElement(pe,null));var se=t(80831),w=t(7681),z=t(41580),ve=t(16364),Re=t(64256),je=t(67109),Ce=t(85018),ie=t(11276),Y=t(74571),q=t(84757),H=t(96486);const Pe=(0,e.createContext)({}),xe=({children:n,value:r})=>e.createElement(Pe.Provider,{value:r},n),he=()=>(0,e.useContext)(Pe);xe.propTypes={children:$().node.isRequired,value:$().object.isRequired};var le=t(71893),Ze=t(35161),Ie=t.n(Ze),ke=t(13217),Fe=t.n(ke);const Ke=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ne=(0,le.default)(z.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`;function fe({route:n}){const{formatMessage:r}=(0,U.useIntl)(),{method:a,handler:c,path:v}=n,u=v?Fe()(v.split("/")):[],[R="",A=""]=c?c.split("."):[],T=Ke(n.method);return e.createElement(w.K,{spacing:2},e.createElement(d.Z,{variant:"delta",as:"h3"},r({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,R),e.createElement(d.Z,{variant:"delta",textColor:"primary600"},".",A)),e.createElement(w.K,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},e.createElement(Ne,{background:T.background,borderColor:T.border,padding:2},e.createElement(d.Z,{fontWeight:"bold",textColor:T.text},a)),e.createElement(z.x,{paddingLeft:2,paddingRight:2},Ie()(u,C=>e.createElement(d.Z,{key:C,textColor:C.includes(":")?"neutral600":"neutral900"},"/",C)))))}fe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},fe.propTypes={route:$().shape({handler:$().string,method:$().string,path:$().string})};const We=fe,Ge=()=>{const{formatMessage:n}=(0,U.useIntl)(),{selectedAction:r,routes:a}=he(),c=(0,H.without)(r.split("."),"controllers"),v=(0,H.get)(a,c[0]),u=c.slice(1).join("."),R=(0,H.isEmpty)(v)?[]:v.filter(A=>A.handler.endsWith(u));return e.createElement(Y.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},r?e.createElement(w.K,{spacing:2},R.map((A,T)=>e.createElement(We,{key:T,route:A}))):e.createElement(w.K,{spacing:2},e.createElement(d.Z,{variant:"delta",as:"h3"},n({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},n({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var we=t(48734),ze=t(74756),He=t(63081),Ve=t(11700),Qe=t.n(Ve);function Xe(n){switch(n){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Qe()(n.replace("api::","").replace("plugin::",""))}}const Ye=Xe;var Je=t(89734),Ae=t.n(Je),Te=t(36213),_e=t(78114);const De=(0,le.css)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,qe=(0,le.default)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&De}
  &:hover {
    ${De}
  }
`,et=le.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,Me=({subCategory:n})=>{const{formatMessage:r}=(0,U.useIntl)(),{onChange:a,onChangeSelectAll:c,onSelectedAction:v,selectedAction:u,modifiedData:R}=he(),A=(0,e.useMemo)(()=>(0,H.get)(R,n.name,{}),[R,n]),T=(0,e.useMemo)(()=>Object.values(A).every(y=>y.enabled===!0),[A]),C=(0,e.useMemo)(()=>Object.values(A).some(y=>y.enabled===!0)&&!T,[A,T]),S=(0,e.useCallback)(({target:{name:y}})=>{c({target:{name:y,value:!T}})},[T,c]),Z=(0,e.useCallback)(y=>u===y,[u]);return e.createElement(z.x,null,e.createElement(J.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(z.x,{paddingRight:4},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},n.label)),e.createElement(et,null),e.createElement(z.x,{paddingLeft:4},e.createElement(Te.X,{name:n.name,value:T,onValueChange:y=>S({target:{name:n.name,value:y}}),indeterminate:C},r({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(J.k,{paddingTop:6,paddingBottom:6},e.createElement(ie.r,{gap:2,style:{flex:1}},n.actions.map(y=>{const N=`${y.name}.enabled`;return e.createElement(Y.P,{col:6,key:y.name},e.createElement(qe,{isActive:Z(y.name),padding:2,hasRadius:!0},e.createElement(Te.X,{value:(0,H.get)(R,N,!1),name:N,onValueChange:V=>a({target:{name:N,value:V}})},y.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>v(y.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(_e.Z,null))))}))))};Me.propTypes={subCategory:$().object.isRequired};const tt=Me,be=({name:n,permissions:r})=>{const a=(0,e.useMemo)(()=>Ae()(Object.values(r.controllers).reduce((c,v,u)=>{const R=`${n}.controllers.${Object.keys(r.controllers)[u]}`,A=Ae()(Object.keys(v).reduce((T,C)=>[...T,{...v[C],label:C,name:`${R}.${C}`}],[]),"label");return[...c,{actions:A,label:Object.keys(r.controllers)[u],name:R}]},[]),"label"),[n,r]);return e.createElement(z.x,{padding:6},a.map(c=>e.createElement(tt,{key:c.name,subCategory:c})))};be.propTypes={name:$().string.isRequired,permissions:$().object.isRequired};const nt=be,st=(n,r)=>{const a=Object.keys(r).sort().map(c=>({name:c,isOpen:!1}));return{...n,collapses:a}};var ce=t(18172);const at={collapses:[]},rt=(n,r)=>(0,ce.default)(n,a=>{switch(r.type){case"TOGGLE_COLLAPSE":{a.collapses=n.collapses.map((c,v)=>v===r.index?{...c,isOpen:!c.isOpen}:{...c,isOpen:!1});break}default:return a}}),ot=()=>{const{modifiedData:n}=he(),{formatMessage:r}=(0,U.useIntl)(),[{collapses:a},c]=(0,e.useReducer)(rt,at,u=>st(u,n)),v=u=>c({type:"TOGGLE_COLLAPSE",index:u});return e.createElement(w.K,{spacing:1},a.map((u,R)=>e.createElement(we.U,{expanded:u.isOpen,onToggle:()=>v(R),key:u.name,variant:R%2===0?"secondary":void 0},e.createElement(ze.B,{title:Ye(u.name),description:r({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:u.name}),variant:R%2?"primary":"secondary"}),e.createElement(He.v,null,e.createElement(z.x,null,e.createElement(nt,{permissions:n[u.name],name:u.name}))))))},it={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},lt=(n,r)=>(0,ce.default)(n,a=>{switch(r.type){case"ON_CHANGE":{const c=r.keys.length,v=r.keys[c-1]==="enabled";if(r.value&&v){const u=(0,H.take)(r.keys,c-1).join(".");a.selectedAction=u}(0,H.set)(a,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_SELECT_ALL":{const c=["modifiedData",...r.keys],v=(0,H.get)(n,c,{}),u=Object.keys(v).reduce((R,A)=>(R[A]={...v[A],enabled:r.value},R),{});(0,H.set)(a,c,u);break}case"ON_RESET":{a.modifiedData=n.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=n.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:c}=r;a.selectedAction=c===n.selectedAction?"":c;break}default:return a}}),ct=(n,r,a)=>({...n,initialData:r,modifiedData:r,routes:a}),Le=(0,e.forwardRef)(({permissions:n,routes:r},a)=>{const{formatMessage:c}=(0,U.useIntl)(),[v,u]=(0,e.useReducer)(lt,it,S=>ct(S,n,r));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:v.modifiedData}},resetForm(){u({type:"ON_RESET"})},setFormAfterSubmit(){u({type:"ON_SUBMIT_SUCCEEDED"})}}));const C={...v,onChange:({target:{name:S,value:Z}})=>u({type:"ON_CHANGE",keys:S.split("."),value:Z==="empty__string_value"?"":Z}),onChangeSelectAll:({target:{name:S,value:Z}})=>u({type:"ON_CHANGE_SELECT_ALL",keys:S.split("."),value:Z}),onSelectedAction:S=>u({type:"SELECT_ACTION",actionToSelect:S})};return e.createElement(xe,{value:C},e.createElement(ie.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(Y.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(w.K,{spacing:6},e.createElement(w.K,{spacing:2},e.createElement(d.Z,{variant:"delta",as:"h2"},c({id:(0,q.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},c({id:(0,q.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(ot,null))),e.createElement(Ge,null)))});Le.propTypes={permissions:$().object.isRequired,routes:$().object.isRequired};const Oe=(0,e.memo)(Le),wt={isLoading:!0,modifiedData:{}},zt=(n,r)=>produce(n,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=r.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=r.data;break}default:return a}}),Ht=null;var dt=t(25108);const Vt=(n,r)=>{const{isLoading:a,allowedActions:c}=useRBAC(r),[{isLoading:v,modifiedData:u},R]=useReducer(reducer,initialState),A=useNotification(),T=useRef(!0),C=new AbortController,{signal:S}=C;useEffect(()=>(a||(async()=>{try{R({type:"GET_DATA"});const N=await request(getRequestURL(n),{method:"GET",signal:S});R({type:"GET_DATA_SUCCEEDED",data:N})}catch(N){T.current&&(R({type:"GET_DATA_ERROR"}),dt.error(N),A({type:"warning",message:{id:"notification.error"}}))}})(),()=>{C.abort(),T.current=!1}),[a,n]);const Z=useCallback(y=>{R({type:"ON_SUBMIT_SUCCEEDED",data:y})},[]);return{allowedActions:c,dispatchSubmitSucceeded:Z,isLoading:v,isLoadingForPermissions:a,modifiedData:u}},Qt=null,Xt={roles:[],isLoading:!0},Yt=(n,r)=>produce(n,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=r.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Jt=null,_t=(n=!0)=>{const[{roles:r,isLoading:a},c]=useReducer(reducer,initialState,()=>init(initialState,n)),v=useNotification(),u=useRef(!0),R=new AbortController,{signal:A}=R;useEffect(()=>(n&&T(),()=>{R.abort(),u.current=!1}),[n]);const T=async()=>{try{c({type:"GET_DATA"});const{roles:C}=await request(`/${pluginId}/roles`,{method:"GET",signal:A});c({type:"GET_DATA_SUCCEEDED",data:C})}catch(C){const S=get(C,["response","payload","message"],"An error occured");u.current&&(c({type:"GET_DATA_ERROR"}),S!=="Forbidden"&&v({type:"warning",message:S}))}};return{roles:r,isLoading:a,getData:T}},qt=null,ut=(n,r)=>({...n,isLoading:r}),Be={permissions:{},routes:{},isLoading:!0},mt=(n,r)=>(0,ce.default)(n,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.permissions={},a.routes={};break}case"GET_DATA_SUCCEEDED":{a.permissions=r.permissions,a.routes=r.routes,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Se=(n=!0)=>{const r=(0,s.useNotification)(),[{permissions:a,routes:c,isLoading:v},u]=(0,e.useReducer)(mt,Be,()=>ut(Be,n)),R=(0,s.useFetchClient)(),A=(0,e.useCallback)(async()=>{try{u({type:"GET_DATA"});const[{permissions:T},{routes:C}]=await Promise.all([`/${o.Z}/permissions`,`/${o.Z}/routes`].map(async S=>(await R.get(S)).data));u({type:"GET_DATA_SUCCEEDED",permissions:(0,j.YX)(T),routes:C})}catch(T){const C=(0,H.get)(T,["response","payload","message"],"An error occured");u({type:"GET_DATA_ERROR"}),C!=="Forbidden"&&r({type:"warning",message:C})}},[r]);return(0,e.useEffect)(()=>{n&&A()},[A,n]),{permissions:a,routes:c,getData:A,isLoading:v}},gt={role:{},isLoading:!0},pt=(n,r)=>(0,ce.default)(n,a=>{switch(r.type){case"GET_DATA_SUCCEEDED":{a.role=r.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=r.name,a.role.description=r.description;break}default:return a}});var Et=t(25108);const ht=n=>{const[r,a]=(0,e.useReducer)(pt,gt),c=(0,s.useNotification)(),v=(0,e.useRef)(null),{get:u}=(0,s.useFetchClient)();(0,e.useEffect)(()=>(v.current=!0,n?R(n):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>v.current=!1),[n]);const R=async T=>{try{const{data:{role:C}}=await u(`/${o.Z}/roles/${T}`);v.current&&a({type:"GET_DATA_SUCCEEDED",role:C})}catch(C){Et.error(C),a({type:"GET_DATA_ERROR"}),c({type:"warning",message:{id:"notification.error"}})}},A=(0,e.useCallback)(T=>{a({type:"ON_SUBMIT_SUCCEEDED",...T})},[]);return{...r,onSubmitSucceeded:A}};var ee=t(53209);const ft=ee.Ry().shape({name:ee.Z_().required(s.translatedErrors.required),description:ee.Z_().required(s.translatedErrors.required)});var yt=t(25108);const vt=()=>{const{formatMessage:n}=(0,U.useIntl)(),[r,a]=(0,e.useState)(!1),c=(0,s.useNotification)(),{lockApp:v,unlockApp:u}=(0,s.useOverlayBlocker)(),{params:{id:R}}=(0,i.useRouteMatch)(`/settings/${o.Z}/roles/:id`),{isLoading:A,routes:T}=Se(),{role:C,onSubmitSucceeded:S,isLoading:Z}=ht(R),y=(0,e.useRef)(),{put:N}=(0,s.useFetchClient)(),V=async F=>{v(),a(!0);try{const W=y.current.getPermissions();await N(`/${o.Z}/roles/${R}`,{...F,...W,users:[]}),S({name:F.name,description:F.description}),c({type:"success",message:{id:(0,q.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(W){yt.error(W),c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),u()};return Z?e.createElement(s.LoadingIndicatorPage,null):e.createElement(L.o,null,e.createElement(s.SettingsPageTitle,{name:"Roles"}),e.createElement(se.Formik,{enableReinitialize:!0,initialValues:{name:C.name,description:C.description},onSubmit:V,validationSchema:ft},({handleSubmit:F,values:W,handleChange:Q,errors:te})=>e.createElement(s.Form,{noValidate:!0,onSubmit:F},e.createElement(g.T,{primaryAction:!A&&e.createElement(f.z,{disabled:C.code==="strapi-super-admin",type:"submit",loading:r,startIcon:e.createElement(Ce.Z,null)},n({id:"global.save",defaultMessage:"Save"})),title:C.name,subtitle:C.description,navigationAction:e.createElement(s.Link,{startIcon:e.createElement(je.Z,null),to:"/settings/users-permissions/roles"},n({id:"global.back",defaultMessage:"Back"}))}),e.createElement(b.D,null,e.createElement(w.K,{spacing:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(w.K,{spacing:4},e.createElement(d.Z,{variant:"delta",as:"h2"},n({id:(0,q.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:W.name||"",onChange:Q,label:n({id:"global.name",defaultMessage:"Name"}),error:te.name?n({id:te.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(Re.g,{name:"description",value:W.description||"",onChange:Q,label:n({id:"global.description",defaultMessage:"Description"}),error:te.description?n({id:te.description,defaultMessage:"Invalid value"}):null}))))),!A&&e.createElement(Oe,{ref:y,permissions:C.permissions,routes:T}))))))},Rt=()=>e.createElement(s.CheckPagePermissions,{permissions:l.Z.updateRole},e.createElement(vt,null)),Ct=ee.Ry().shape({name:ee.Z_().required(s.translatedErrors.required),description:ee.Z_().required(s.translatedErrors.required)});var Pt=t(25108);const xt=()=>{const{formatMessage:n}=(0,U.useIntl)(),[r,a]=(0,e.useState)(!1),c=(0,s.useNotification)(),{goBack:v}=(0,i.useHistory)(),{lockApp:u,unlockApp:R}=(0,s.useOverlayBlocker)(),{isLoading:A,permissions:T,routes:C}=Se(),{trackUsage:S}=(0,s.useTracking)(),Z=(0,e.useRef)(),{post:y}=(0,s.useFetchClient)(),N=async V=>{u(),a(!0);try{const F=Z.current.getPermissions();await y(`/${o.Z}/roles`,{...V,...F,users:[]}),S("didCreateRole"),c({type:"success",message:{id:(0,q.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),v()}catch(F){Pt.error(F),c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),R()};return e.createElement(L.o,null,e.createElement(s.SettingsPageTitle,{name:"Roles"}),e.createElement(se.Formik,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:N,validationSchema:Ct},({handleSubmit:V,values:F,handleChange:W,errors:Q})=>e.createElement(s.Form,{noValidate:!0,onSubmit:V},e.createElement(g.T,{primaryAction:!A&&e.createElement(f.z,{type:"submit",loading:r,startIcon:e.createElement(Ce.Z,null)},n({id:"global.save",defaultMessage:"Save"})),title:n({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:n({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(b.D,null,e.createElement(w.K,{spacing:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(w.K,{spacing:4},e.createElement(d.Z,{variant:"delta",as:"h2"},n({id:(0,q.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:F.name||"",onChange:W,label:n({id:"global.name",defaultMessage:"Name"}),error:Q.name?n({id:Q.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(Re.g,{name:"description",value:F.description||"",onChange:W,label:n({id:"global.description",defaultMessage:"Description"}),error:Q.description?n({id:Q.description,defaultMessage:"Invalid value"}):null}))))),!A&&e.createElement(Oe,{ref:Z,permissions:T,routes:C}))))))},At=()=>e.createElement(s.CheckPagePermissions,{permissions:l.Z.createRole},e.createElement(xt,null)),Tt=()=>e.createElement(s.CheckPagePermissions,{permissions:l.Z.accessRoles},e.createElement(i.Switch,null,e.createElement(i.Route,{path:`/settings/${o.Z}/roles/new`,component:At,exact:!0}),e.createElement(i.Route,{path:`/settings/${o.Z}/roles/:id`,component:Rt,exact:!0}),e.createElement(i.Route,{path:`/settings/${o.Z}/roles`,component:oe,exact:!0}),e.createElement(i.Route,{path:"",component:s.NotFound})))},89031:(M,D,t)=>{"use strict";t.d(D,{YX:()=>s,Gc:()=>f,OB:()=>m.Z});var e=t(96486);const s=g=>Object.keys(g).reduce((P,b)=>{const L=g[b].controllers,B=Object.keys(L).reduce((x,p)=>((0,e.isEmpty)(L[p])||(x[p]=L[p]),x),{});return(0,e.isEmpty)(B)||(P[b]={controllers:B}),P},{});var o=t(31498);const f=g=>`/${o.Z}/${g}`;var m=t(84757)},89881:(M,D,t)=>{var e=t(47816),i=t(99291),s=i(e);M.exports=s},69199:(M,D,t)=>{var e=t(89881),i=t(98612);function s(o,l){var f=-1,m=i(o)?Array(o.length):[];return e(o,function(g,P,b){m[++f]=l(g,P,b)}),m}M.exports=s},82689:(M,D,t)=>{var e=t(29932),i=t(97786),s=t(67206),o=t(69199),l=t(71131),f=t(7518),m=t(85022),g=t(6557),P=t(1469);function b(L,B,x){B.length?B=e(B,function(h){return P(h)?function(d){return i(d,h.length===1?h[0]:h)}:h}):B=[g];var p=-1;B=e(B,f(s));var E=o(L,function(h,d,O){var I=e(B,function(U){return U(h)});return{criteria:I,index:++p,value:h}});return l(E,function(h,d){return m(h,d,x)})}M.exports=b},71131:M=>{function D(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}M.exports=D},26393:(M,D,t)=>{var e=t(33448);function i(s,o){if(s!==o){var l=s!==void 0,f=s===null,m=s===s,g=e(s),P=o!==void 0,b=o===null,L=o===o,B=e(o);if(!b&&!B&&!g&&s>o||g&&P&&L&&!b&&!B||f&&P&&L||!l&&L||!m)return 1;if(!f&&!g&&!B&&s<o||B&&l&&m&&!f&&!g||b&&l&&m||!P&&m||!L)return-1}return 0}M.exports=i},85022:(M,D,t)=>{var e=t(26393);function i(s,o,l){for(var f=-1,m=s.criteria,g=o.criteria,P=m.length,b=l.length;++f<P;){var L=e(m[f],g[f]);if(L){if(f>=b)return L;var B=l[f];return L*(B=="desc"?-1:1)}}return s.index-o.index}M.exports=i},99291:(M,D,t)=>{var e=t(98612);function i(s,o){return function(l,f){if(l==null)return l;if(!e(l))return s(l,f);for(var m=l.length,g=o?m:-1,P=Object(l);(o?g--:++g<m)&&f(P[g],g,P)!==!1;);return l}}M.exports=i},35161:(M,D,t)=>{var e=t(29932),i=t(67206),s=t(69199),o=t(1469);function l(f,m){var g=o(f)?e:s;return g(f,i(m,3))}M.exports=l},89734:(M,D,t)=>{var e=t(21078),i=t(82689),s=t(5976),o=t(16612),l=s(function(f,m){if(f==null)return[];var g=m.length;return g>1&&o(f,m[0],m[1])?m=[]:g>2&&o(m[0],m[1],m[2])&&(m=[m[0]]),i(f,e(m,1),[])});M.exports=l},13217:(M,D,t)=>{var e=t(14259);function i(s){var o=s==null?0:s.length;return o?e(s,1,o):[]}M.exports=i},48734:(M,D,t)=>{"use strict";t.d(D,{U:()=>B,y:()=>b});var e=t(85893),i=t(67294),s=t(71893),o=t(13819),l=t(41580),f=t(11047),m=t(2504),g=t(75515);const P=({theme:x,expanded:p,variant:E,disabled:h,error:d})=>d?`1px solid ${x.colors.danger600} !important`:h?`1px solid ${x.colors.neutral150}`:p?`1px solid ${x.colors.primary600}`:E==="primary"?`1px solid ${x.colors.neutral0}`:`1px solid ${x.colors.neutral100}`,b=(0,s.default)(g.Z)``,L=(0,s.default)(l.x)`
  border: ${P};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:x})=>x.colors.primary600};

    ${b} {
      color: ${({theme:x,expanded:p})=>p?void 0:x.colors.primary700};
    }

    ${g.Z} {
      color: ${({theme:x,expanded:p})=>p?void 0:x.colors.primary600};
    }

    & > ${f.k} {
      background: ${({theme:x})=>x.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:x})=>x.colors.primary200};
    }
  }
`,B=({children:x,disabled:p=!1,error:E,expanded:h=!1,hasErrorMessage:d=!0,id:O,onToggle:I,toggle:U,size:k="M",variant:K="primary",shadow:j})=>{const X=(0,m.M)(O),G=i.useMemo(()=>({expanded:h,onToggle:I,toggle:U,id:X,size:k,variant:K,disabled:p}),[p,h,X,I,k,U,K]);return(0,e.jsxs)(o.S.Provider,{value:G,children:[(0,e.jsx)(L,{"data-strapi-expanded":h,disabled:p,"aria-disabled":p,expanded:h,hasRadius:!0,variant:K,error:E,shadow:j,children:x}),E&&d&&(0,e.jsx)(l.x,{paddingTop:1,children:(0,e.jsx)(g.Z,{variant:"pi",textColor:"danger600",children:E})})]})}},63081:(M,D,t)=>{"use strict";t.d(D,{v:()=>o});var e=t(85893),i=t(13819),s=t(41580);const o=({children:l,...f})=>{const{expanded:m,id:g}=(0,i.A)();if(!m)return null;const P=`accordion-content-${g}`,b=`accordion-label-${g}`,L=`accordion-desc-${g}`;return(0,e.jsx)(s.x,{role:"region",id:P,"aria-labelledby":b,"aria-describedby":L,...f,children:l})}},13819:(M,D,t)=>{"use strict";t.d(D,{A:()=>s,S:()=>i});var e=t(67294);const i=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),s=()=>(0,e.useContext)(i)},74756:(M,D,t)=>{"use strict";t.d(D,{B:()=>p});var e=t(85893),i=t(22522),s=t(71893),o=t(48734),l=t(13819);const f=({expanded:E,disabled:h,variant:d})=>{let O="neutral100";return E?O="primary100":h?O="neutral150":d==="primary"&&(O="neutral0"),O};var m=t(11047),g=t(52624),P=t(39785),b=t(75515),L=t(25108);const B=(0,s.default)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:E,expanded:h})=>h?E.colors.primary600:E.colors.neutral500};
    }
  }
`,x=(0,s.default)(m.k)`
  min-height: ${({theme:E,size:h})=>E.sizes.accordions[h]};
  border-radius: ${({theme:E,expanded:h})=>h?`${E.borderRadius} ${E.borderRadius} 0 0`:E.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:E})=>E.colors.primary600};
      }
    }
  }
`,p=({title:E,description:h,as:d="span",togglePosition:O="right",action:I,...U})=>{const{onToggle:k,toggle:K,expanded:j,id:X,size:G,variant:ue,disabled:$}=(0,l.A)(),ae=`accordion-content-${X}`,J=`accordion-label-${X}`,me=`accordion-desc-${X}`,_=G==="M"?6:4,re=G==="M"?_:_-2,ne=f({expanded:j,disabled:$,variant:ue}),ge={as:d,fontWeight:G==="S"?"bold":void 0,id:J,textColor:j?"primary600":"neutral700",ellipsis:!0,variant:G==="M"?"delta":void 0},ye=j?"primary600":"neutral600",pe=j?"primary200":"neutral200",Ee=G==="M"?`${32/16}rem`:`${24/16}rem`,oe=()=>{$||(K&&!k?(L.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),K()):k&&k())},se=(0,e.jsx)(m.k,{justifyContent:"center",borderRadius:"50%",height:Ee,width:Ee,transform:j?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:pe,cursor:$?"not-allowed":"pointer",onClick:oe,shrink:0,children:(0,e.jsx)(g.J,{as:i.CarretDown,width:G==="M"?`${11/16}rem`:`${8/16}rem`,color:j?"primary600":"neutral600"})});return(0,e.jsx)(x,{paddingBottom:re,paddingLeft:_,paddingRight:_,paddingTop:re,background:ne,expanded:j,size:G,justifyContent:"space-between",cursor:$?"not-allowed":"",children:(0,e.jsxs)(m.k,{gap:3,flex:1,maxWidth:"100%",children:[O==="left"&&se,(0,e.jsx)(B,{onClick:oe,"aria-disabled":$,"aria-expanded":j,"aria-controls":ae,"aria-labelledby":J,"data-strapi-accordion-toggle":!0,expanded:j,type:"button",flex:1,minWidth:0,...U,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.y,{...ge,children:E}),h&&(0,e.jsx)(b.Z,{as:"p",id:me,textColor:ye,children:h})]})}),O==="right"&&(0,e.jsxs)(m.k,{gap:3,children:[se,I]}),O==="left"&&I]})})}},36989:(M,D,t)=>{"use strict";t.d(D,{Z:()=>g});var e=t(67294),i=t(45697),s=t(71893),o=t(41580),l=t(11047);const f=(0,s.default)(l.k)`
  & > * + * {
    margin-left: ${({theme:P})=>P.spaces[2]};
  }

  margin-left: ${({pullRight:P})=>P?"auto":void 0};
`,m=(0,s.default)(f)`
  flex-shrink: 0;
`,g=({startActions:P,endActions:b})=>P||b?e.createElement(o.x,{paddingLeft:10,paddingRight:10},e.createElement(o.x,{paddingBottom:4},e.createElement(l.k,{justifyContent:"space-between",alignItems:"flex-start"},P&&e.createElement(f,{wrap:"wrap"},P),b&&e.createElement(m,{pullRight:!0},b)))):null;g.defaultProps={endActions:void 0,startActions:void 0},g.propTypes={endActions:i.node,startActions:i.node}},49066:(M,D,t)=>{"use strict";t.d(D,{D:()=>o});var e=t(67294),i=t(45697),s=t(41580);const o=({children:l})=>e.createElement(s.x,{paddingLeft:10,paddingRight:10},l);o.propTypes={children:i.node.isRequired}},53979:(M,D,t)=>{"use strict";t.d(D,{T:()=>L});var e=t(67294),i=t(45697),s=t(71893),o=t(41580),l=t(11047);const f=p=>{const E=(0,e.useRef)(null),[h,d]=(0,e.useState)(!0),O=([I])=>{d(I.isIntersecting)};return(0,e.useEffect)(()=>{const I=E.current,U=new IntersectionObserver(O,p);return I&&U.observe(E.current),()=>{I&&U.disconnect()}},[E,p]),[E,h]};var m=t(98402);const g=(p,E)=>{const h=(0,m.useCallbackRef)(E);(0,e.useLayoutEffect)(()=>{const d=new ResizeObserver(h);return Array.isArray(p)?p.forEach(O=>{O.current&&d.observe(O.current)}):p.current&&d.observe(p.current),()=>{d.disconnect()}},[p,h])};var P=t(75515);const b=()=>{const p=(0,e.useRef)(null),[E,h]=(0,e.useState)(null),[d,O]=f({root:null,rootMargin:"0px",threshold:0});return g(d,()=>{d.current&&h(d.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{p.current&&h(p.current.getBoundingClientRect())},[p]),{containerRef:d,isVisible:O,baseHeaderLayoutRef:p,headerSize:E}},L=p=>{const{containerRef:E,isVisible:h,baseHeaderLayoutRef:d,headerSize:O}=b();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:O?.height},ref:E},h&&e.createElement(x,{ref:d,...p})),!h&&e.createElement(x,{...p,sticky:!0,width:O?.width}))};L.displayName="HeaderLayout";const B=(0,s.default)(o.x)`
  width: ${p=>p.width}px;
`,x=e.forwardRef(({navigationAction:p,primaryAction:E,secondaryAction:h,subtitle:d,title:O,sticky:I,width:U,...k},K)=>{const j=typeof d=="string";return I?e.createElement(B,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:U,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,null,p&&e.createElement(o.x,{paddingRight:3},p),e.createElement(o.x,null,e.createElement(P.Z,{variant:"beta",as:"h1",...k},O),j?e.createElement(P.Z,{variant:"pi",textColor:"neutral600"},d):d),h?e.createElement(o.x,{paddingLeft:4},h):null),e.createElement(l.k,null,E?e.createElement(o.x,{paddingLeft:2},E):void 0))):e.createElement(o.x,{ref:K,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:p?6:8,background:"neutral100","data-strapi-header":!0},p?e.createElement(o.x,{paddingBottom:2},p):null,e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,{minWidth:0},e.createElement(P.Z,{as:"h1",variant:"alpha",...k},O),h?e.createElement(o.x,{paddingLeft:4},h):null),E),j?e.createElement(P.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},d):d)});x.displayName="BaseHeaderLayout",x.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},x.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,sticky:i.bool,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired,width:i.number},L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},L.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired}},185:(M,D,t)=>{"use strict";t.d(D,{o:()=>l});var e=t(67294),i=t(45697),s=t(71893);const o=s.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:f,...m})=>{const g=f||"main-content-title";return e.createElement(o,{"aria-labelledby":g,id:"main-content",tabIndex:-1,...m})};l.defaultProps={labelledBy:void 0},l.propTypes={labelledBy:i.string}},39785:(M,D,t)=>{"use strict";t.d(D,{A:()=>B});var e=t(85893),i=t(67294),s=t(22522),o=t(71893),l=t(41580),f=t(11047),m=t(15585),g=t(75515);const P=(0,o.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,b=o.default.div`
  animation: ${P} 2s infinite linear;
  will-change: transform;
`,L=(0,o.default)(f.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:x})=>x.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:x})=>x.colors.primary600};
  }

  ${m.BF}
`,B=i.forwardRef(({children:x,startIcon:p,endIcon:E,onClick:h,disabled:d=!1,loading:O=!1,...I},U)=>{const k=h&&!d?h:void 0,K=d||O;return(0,e.jsxs)(L,{ref:U,"aria-disabled":K,onClick:k,as:"button",type:"button",...I,children:[(p||O)&&(0,e.jsx)(l.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:O?(0,e.jsx)(b,{children:(0,e.jsx)(s.Loader,{})}):p}),(0,e.jsx)(g.Z,{variant:"pi",textColor:K?"neutral600":"primary600",children:x}),E&&(0,e.jsx)(l.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:E})]})});B.displayName="TextButton"},67109:(M,D,t)=>{"use strict";t.d(D,{Z:()=>s});var e=t(85893);const i=o=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),s=i},78114:(M,D,t)=>{"use strict";t.d(D,{Z:()=>s});var e=t(85893);const i=o=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",fill:"#212134"})}),s=i}}]);
