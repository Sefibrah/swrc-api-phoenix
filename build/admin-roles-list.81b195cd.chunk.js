"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3455],{98374:(w,M,t)=>{t.d(M,{F:()=>A});var e=t(67294),n=t(32638),P=t(86896),O=t(88767);const A=(F={},b={})=>{const{id:x="",...Z}=F,{get:K}=(0,n.useFetchClient)(),{locale:V}=(0,P.Z)(),B=(0,n.useCollator)(V,{sensitivity:"base"}),{data:E,error:r,isError:g,isLoading:$,refetch:H}=(0,O.useQuery)(["roles",x,Z],async()=>{const{data:f}=await K(`/admin/roles/${x??""}`,{params:Z});return f},b);return{roles:e.useMemo(()=>{let f=[];return E&&(Array.isArray(E.data)?f=E.data:f=[E.data]),[...f].sort((Q,I)=>B.compare(Q.name,I.name))},[E,B]),error:r,isError:g,isLoading:$,refetch:H}}},7513:(w,M,t)=>{t.r(M),t.d(M,{default:()=>ue});var e=t(67294),n=t(32638),P=t(86706),O=t(36364),A=t(40720),F=t(90731),b=t(12473),x=t(55040),Z=t(34726),K=t(5923),V=t(38454),B=t(3547),E=t(29299),r=t(69398),g=t(71068),$=t(22304),H=t(35752),Y=t(43838),f=t(2382),Q=t(54425),I=t(83598),j=t(86896),q=t(16550),_=t(98374);const ee=()=>"todo empty role";var te=t(96987),le=t(16607),ne=t(96208),ae=t(45697),h=t.n(ae);const z=({id:a,name:i,description:s,usersCount:R,icons:o,rowIndex:L,canUpdate:c})=>{const{formatMessage:T}=(0,j.Z)(),[,p]=o,d=T({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:R});return e.createElement(E.Tr,{"aria-rowindex":L,key:a,...c?(0,n.onRowClick)({fn:p.onClick}):{}},e.createElement(r.Td,{maxWidth:(0,n.pxToRem)(130)},e.createElement(g.Z,{ellipsis:!0,textColor:"neutral800"},i)),e.createElement(r.Td,{maxWidth:(0,n.pxToRem)(250)},e.createElement(g.Z,{ellipsis:!0,textColor:"neutral800"},s)),e.createElement(r.Td,null,e.createElement(g.Z,{textColor:"neutral800"},d)),e.createElement(r.Td,null,e.createElement(te.k,{justifyContent:"flex-end",...n.stopPropagation},o.map((u,v)=>u?e.createElement(le.x,{key:u.label,paddingLeft:v===0?0:1},e.createElement(ne.h,{onClick:u.onClick,label:u.label,noBorder:!0,icon:u.icon})):null))))};z.propTypes={id:h().number.isRequired,name:h().string.isRequired,description:h().string.isRequired,usersCount:h().number.isRequired,icons:h().array.isRequired,rowIndex:h().number.isRequired,canUpdate:h().bool},z.defaultProps={canUpdate:!1};const se=z;var oe=t(18172);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(a,i)=>(0,oe.ZP)(a,s=>{switch(i.type){case"ON_REMOVE_ROLES":{s.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{s.shouldRefetchData=!0,s.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{s.shouldRefetchData=!1,s.roleToDelete=null,s.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{s.roleToDelete=i.id;break}default:return s}}),ce=({canCreate:a,canDelete:i,canUpdate:s,refetchRoles:R})=>{const{formatMessage:o}=(0,j.Z)(),{formatAPIError:L}=(0,n.useAPIErrorHandler)(),c=(0,n.useNotification)(),[T,p]=(0,e.useState)(!1),{push:d}=(0,q.k6)(),[{selectedRoles:u,showModalConfirmButtonLoading:v,roleToDelete:G},y]=(0,e.useReducer)(ie,re),{post:J}=(0,n.getFetchClient)(),X=async()=>{try{y({type:"ON_REMOVE_ROLES"}),await J("/admin/roles/batch-delete",{ids:[G]}),await R(),y({type:"RESET_DATA_TO_DELETE"})}catch(l){c({type:"warning",message:L(l)})}D()},S=(0,e.useCallback)(l=>{d(`/settings/roles/duplicate/${l}`)},[d]),W=()=>d("/settings/roles/new"),N=(0,e.useCallback)(l=>{y({type:"SET_ROLE_TO_DELETE",id:l}),D()},[]),D=()=>p(l=>!l),m=(0,e.useCallback)(l=>{d(`/settings/roles/${l}`)},[d]),U=(0,e.useCallback)((l,C)=>{l.preventDefault(),l.stopPropagation(),C.usersCount?c({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):N(C.id)},[c,N]),k=(0,e.useCallback)((l,C)=>{l.preventDefault(),l.stopPropagation(),S(C.id)},[S]),me=(0,e.useCallback)(l=>[...a?[{onClick:C=>k(C,l),label:o({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(Y.Z,null)}]:[],...s?[{onClick:()=>m(l.id),label:o({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(f.Z,null)}]:[],...i?[{onClick:C=>U(C,l),label:o({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(Q.Z,null)}]:[]],[o,U,k,m,a,s,i]);return{handleNewRoleClick:W,getIcons:me,selectedRoles:u,isWarningDeleteAllOpened:T,showModalConfirmButtonLoading:v,handleToggleModal:D,handleDeleteData:X}},de=()=>{const{formatMessage:a}=(0,j.Z)();(0,n.useFocusWhenNavigate)();const i=(0,P.v9)(O._),[{query:s}]=(0,n.useQueryParams)(),{isLoading:R,allowedActions:{canCreate:o,canDelete:L,canRead:c,canUpdate:T}}=(0,n.useRBAC)(i.settings.roles),{roles:p,isLoading:d,refetch:u}=(0,_.F)({filters:s?._q?{name:{$containsi:s._q}}:void 0},{cacheTime:0,enabled:!R&&c}),{handleNewRoleClick:v,getIcons:G,isWarningDeleteAllOpened:y,showModalConfirmButtonLoading:J,handleToggleModal:X,handleDeleteData:S}=ce({refetchRoles:u,canCreate:o,canDelete:L,canUpdate:T}),W=p.length+1,N=6;if(R)return e.createElement(A.o,null,e.createElement(n.LoadingIndicatorPage,null));const D=a({id:"global.roles",defaultMessage:"roles"});return e.createElement(A.o,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(F.T,{primaryAction:o?e.createElement(b.z,{onClick:v,startIcon:e.createElement(I.Z,null),size:"S"},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:D,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),c&&e.createElement(x.Z,{startActions:e.createElement(n.SearchURLQuery,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:D})})}),c&&e.createElement(Z.D,null,e.createElement(K.i,{colCount:N,rowCount:W,footer:o?e.createElement(V.c,{onClick:v,icon:e.createElement(I.Z,null)},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(B.h,null,e.createElement(E.Tr,{"aria-rowindex":1},e.createElement(r.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(r.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.description",defaultMessage:"Description"}))),e.createElement(r.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.users",defaultMessage:"Users"}))),e.createElement(r.Th,null,e.createElement($.T,null,a({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(H.p,null,p?.map((m,U)=>e.createElement(se,{key:m.id,id:m.id,name:m.name,description:m.description,usersCount:m.usersCount,icons:G(m),rowIndex:U+2,canUpdate:T})))),!W&&!d&&e.createElement(ee,null)),e.createElement(n.ConfirmDialog,{isOpen:y,onConfirm:S,isConfirmButtonLoading:J,onToggleDialog:X}))},ue=()=>{const a=(0,P.v9)(O._);return e.createElement(n.CheckPagePermissions,{permissions:a.settings.roles.main},e.createElement(de,null))}}}]);