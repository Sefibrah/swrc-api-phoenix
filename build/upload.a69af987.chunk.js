"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3650],{17316:($,L,t)=>{t.r(L),t.d(L,{default:()=>xt});var e=t(67294),s=t(49656),m=t(97132),g=t(73117),a=t(68547),S=t(185),F=t(71893),R=t(36232),A=t(17034),V=t(36989),N=t(49066),G=t(41580),H=t(70004),c=t(41451),B=t(63237),y=t(12028),p=t(75515),x=t(74571),Z=t(11047),J=t(4585),Y=t(78114),ae=t(29729),k=t(50738),We=t(33012),Ke=t(78971),ze=t(11900),Qe=t(92585),je=t(24652),$e=t(11357),Ve=t(27954),He=t(45697),h=t.n(He);const se=({pagination:o})=>e.createElement(G.x,{paddingTop:6},e.createElement(Z.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.PageSizeURLQuery,null),e.createElement(a.PaginationURLQuery,{pagination:o})));se.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},se.propTypes={pagination:h().shape({page:h().number,pageCount:h().number,pageSize:h().number,total:h().number})};var oe=t(7681),M=t(49826),Ne=t(15537),Q=t(29728),Ge=t(20022),Je=t(2967);const ve=({selected:o,onSuccess:r})=>{const{formatMessage:i}=(0,m.useIntl)(),[d,u]=(0,e.useState)(!1),{isLoading:E,remove:O}=(0,Je.K)(),C=async()=>{await O(o),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"danger-light",size:"S",startIcon:e.createElement(Ge.default,null),onClick:()=>u(!0)},i({id:"global.delete",defaultMessage:"Delete"})),e.createElement(a.ConfirmDialog,{isConfirmButtonLoading:E,isOpen:d,onToggleDialog:()=>u(!1),onConfirm:C}))};ve.propTypes={selected:h().arrayOf(M.pw,M.nx).isRequired,onSuccess:h().func.isRequired};var Xe=t(32605),Ye=t(80831),ke=t(41609),we=t.n(ke),qe=t(11276),_e=t(88655),pe=t(42866),he=t(59946),et=t(24969),tt=t(36856),nt=t(19270),ye=t(23724),X=t(55994),f=t(57197);const at=()=>{const o=(0,a.useNotification)(),r=(0,ye.useQueryClient)(),i=(0,f.IF)("actions/bulk-move"),{post:d}=(0,a.useFetchClient)(),u=({destinationFolderId:C,filesAndFolders:v})=>{const P=v.reduce((D,l)=>{const{id:W,type:I}=l,j=I==="asset"?"fileIds":"folderIds";return D[j]||(D[j]=[]),D[j].push(W),D},{});return d(i,{...P,destinationFolderId:C})},E=(0,ye.useMutation)(u,{onSuccess(C){const{data:{data:v}}=C;v?.files?.length>0&&(r.refetchQueries([X.Z,"assets"],{active:!0}),r.refetchQueries([X.Z,"asset-count"],{active:!0})),r.refetchQueries([X.Z,"folders"],{active:!0}),o({type:"success",message:{id:(0,f.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...E,move:(C,v)=>E.mutateAsync({destinationFolderId:C,filesAndFolders:v})}};var st=t(66951),ot=t(20796);const le=({onClose:o,selected:r,currentFolder:i})=>{const{formatMessage:d}=(0,m.useIntl)(),{data:u,isLoading:E}=(0,ot.v)(),{move:O}=at();if(!u)return null;const C=async(D,{setErrors:l})=>{try{await O(D.destination.value,r),o()}catch(W){const I=(0,a.getAPIInnerErrors)(W,{getTrad:f.OB}),j=Object.entries(I).reduce((q,[K,T])=>(q[K||"destination"]=T.defaultMessage,q),{});we()(j)||l(j)}},v=()=>{o()};if(E)return e.createElement(pe.P,{onClose:v,labelledBy:"title"},e.createElement(he.f,null,e.createElement(Z.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(_e.a,null,d({id:(0,f.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const P={destination:{value:i?.id||"",label:i?.name||u[0].label}};return e.createElement(pe.P,{onClose:v,labelledBy:"title"},e.createElement(Ye.Formik,{validateOnChange:!1,onSubmit:C,initialValues:P},({values:D,errors:l,setFieldValue:W})=>e.createElement(a.Form,{noValidate:!0},e.createElement(et.x,null,e.createElement(p.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},d({id:(0,f.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(he.f,null,e.createElement(qe.r,{gap:4},e.createElement(x.P,{xs:12,col:12},e.createElement(oe.K,{spacing:1},e.createElement(nt.Q,{htmlFor:"folder-destination"},d({id:(0,f.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(st.Z,{options:u,onChange:I=>{W("destination",I)},defaultValue:D.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(p.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(tt.m,{startActions:e.createElement(Q.z,{onClick:v,variant:"tertiary",name:"cancel"},d({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(Q.z,{type:"submit",loading:E},d({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};le.defaultProps={currentFolder:void 0},le.propTypes={onClose:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.nx,M.pw).isRequired};const re=({selected:o,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,m.useIntl)(),[u,E]=(0,e.useState)(!1),O=()=>{E(!1),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"secondary",size:"S",startIcon:e.createElement(Xe.Z,null),onClick:()=>E(!0)},d({id:"global.move",defaultMessage:"Move"})),u&&e.createElement(le,{currentFolder:i,onClose:O,selected:o}))};re.defaultProps={currentFolder:void 0},re.propTypes={onSuccess:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.pw,M.nx).isRequired};const ie=({selected:o,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,m.useIntl)();return e.createElement(oe.K,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(p.Z,{variant:"epsilon",textColor:"neutral600"},d({id:(0,Ne.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:o.filter(({type:u})=>u==="folder").length,numberAssets:o.filter(({type:u})=>u==="asset").length})),e.createElement(ve,{selected:o,onSuccess:r}),e.createElement(re,{currentFolder:i,selected:o,onSuccess:r}))};ie.defaultProps={currentFolder:void 0},ie.propTypes={onSuccess:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.pw,M.nx).isRequired};var lt=t(65169),de=t(96315),rt=t(70088);const it=({isFiltering:o,canCreate:r,canRead:i})=>o?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:i?r?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Me=({canCreate:o,isFiltering:r,canRead:i,onActionClick:d})=>{const{formatMessage:u}=(0,m.useIntl)(),E=it({isFiltering:r,canCreate:o,canRead:i});return e.createElement(rt.i,{icon:i?null:lt.default,action:o&&!r&&e.createElement(Q.z,{variant:"secondary",startIcon:e.createElement(de.default,null),onClick:d},u({id:(0,f.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:u({...E,id:(0,f.OB)(E.id)})})};Me.propTypes={canCreate:h().bool.isRequired,canRead:h().bool.isRequired,isFiltering:h().bool.isRequired,onActionClick:h().func.isRequired};var w=t(98101),dt=t(89597),ct=t(51386),ut=t(45219),Ce=t(97581);const mt=()=>{const o=(0,e.useRef)(null),[r,i]=(0,e.useState)(!1),{formatMessage:d}=(0,m.useIntl)(),{trackUsage:u}=(0,a.useTracking)(),[{query:E},O]=(0,a.useQueryParams)(),C=E?.filters?.$and||[],v=()=>i(l=>!l),P=l=>{O({filters:{$and:l},page:1})},D=l=>{u("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),O({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"tertiary",ref:o,startIcon:e.createElement(dt.Z,null),onClick:v,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(ut.Z,{displayedFilters:Ce.Z,filters:C,onSubmit:D,onToggle:v,source:o}),e.createElement(ct.Z,{appliedFilters:C,filtersSchema:Ce.Z,onRemoveFilter:P}))};var gt=t(53979),ft=t(23620),Et=t(67109),vt=t(67851);const ce=({breadcrumbs:o,canCreate:r,folder:i,onToggleEditFolderDialog:d,onToggleUploadAssetDialog:u})=>{const{formatMessage:E}=(0,m.useIntl)(),{pathname:O}=(0,s.useLocation)(),[{query:C}]=(0,a.useQueryParams)(),v={...C,folder:i?.parent?.id??void 0};return e.createElement(gt.T,{title:E({id:(0,f.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:o&&i&&e.createElement(vt.O,{as:"nav",label:E({id:(0,f.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:o,currentFolderId:i?.id}),navigationAction:i&&e.createElement(ft.r,{startIcon:e.createElement(Et.Z,null),to:`${O}?${(0,R.stringify)(v,{encode:!1})}`},E({id:(0,f.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:r&&e.createElement(oe.K,{horizontal:!0,spacing:2},e.createElement(Q.z,{startIcon:e.createElement(de.default,null),variant:"secondary",onClick:d},E({id:(0,f.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(Q.z,{startIcon:e.createElement(de.default,null),onClick:u},E({id:(0,f.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};ce.defaultProps={breadcrumbs:!1,folder:null},ce.propTypes={breadcrumbs:h().oneOfType([M.Fv,h().bool]),canCreate:h().bool.isRequired,folder:M.nx,onToggleEditFolderDialog:h().func.isRequired,onToggleUploadAssetDialog:h().func.isRequired};var pt=t(73817),ht=t(44466),yt=t(31817),Mt=t(42047),Ct=t(16838);const Lt=(0,F.default)(G.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Le=(0,F.default)(p.Z)`
  max-width: 100%;
`,Ae=(0,F.default)(G.x)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
`,At=()=>{const{push:o}=(0,s.useHistory)(),{canRead:r,canCreate:i,canUpdate:d,canCopyLink:u,canDownload:E,isLoading:O}=(0,yt.y)(),C=(0,e.useRef)(),{formatMessage:v}=(0,m.useIntl)(),{pathname:P}=(0,s.useLocation)(),{trackUsage:D}=(0,a.useTracking)(),[{query:l},W]=(0,a.useQueryParams)(),I=Boolean(l._q||l.filters),[j,q]=(0,a.usePersistentState)(M.uf.view,M.Uk.GRID),K=j===M.Uk.GRID,{data:T,isLoading:Ot,errors:Ft}=(0,pt.L)({skipWhen:!r,query:l}),{data:Dt,isLoading:Pt,errors:Tt}=(0,ht.j)({enabled:r&&T?.pagination?.page===1&&!(0,f.rV)(l),query:l}),{data:ue,isLoading:Be,error:St}=(0,Mt.W)(l?.folder,{enabled:r&&!!l?.folder});St?.response?.status===404&&o(P);const _=Dt?.map(n=>({...n,type:"folder",folderURL:(0,f.Km)(P,l,n.id),isSelectable:d}))??[],b=_?.length||0,ee=T?.results?.map(n=>({...n,type:"asset",isSelectable:d}))||[],U=ee?.length??0,It=T?.pagination?.total,Re=Be||Pt||O||Ot,[bt,Ut]=(0,e.useState)(!1),[Zt,xe]=(0,e.useState)(!1),[Oe,me]=(0,e.useState)(void 0),[ge,Fe]=(0,e.useState)(void 0),[z,{selectOne:te,selectAll:De}]=(0,a.useSelectionState)(["type","id"],[]),Pe=z?.length>0&&z?.length!==U+b,fe=()=>Ut(n=>!n),Te=({created:n=!1}={})=>{n&&l?.page!=="1"&&W({...l,page:1}),xe(ne=>!ne)},Se=(n,ne)=>{n.target.checked&&D("didSelectAllMediaLibraryElements"),De(ne)},Ie=n=>{D("didSortMediaLibraryElements",{location:"upload",sort:n}),W({sort:n})},be=n=>{Fe(n),xe(!0)},Wt=n=>{Fe(null),Te(n),C.current&&C.current.focus()},Ue=n=>{n===U&&T.pagination.page===T.pagination.pageCount&&T.pagination.page>1&&W({...l,page:T.pagination.page-1})},Kt=()=>{De(),Ue(z.length)};return(0,a.useFocusWhenNavigate)(),e.createElement(A.A,null,e.createElement(S.o,{"aria-busy":Re},e.createElement(ce,{breadcrumbs:!Be&&(0,f.M4)(ue,{pathname:P,query:l}),canCreate:i,onToggleEditFolderDialog:Te,onToggleUploadAssetDialog:fe,folder:ue}),e.createElement(V.Z,{startActions:e.createElement(e.Fragment,null,d&&K&&(U>0||b>0)&&e.createElement(Lt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(c.C,{"aria-label":v({id:(0,f.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Pe,value:(U>0||b>0)&&z.length===U+b,onChange:n=>Se(n,[...ee,..._])})),r&&K&&e.createElement(Ve.Z,{onChangeSort:Ie}),r&&e.createElement(mt,null)),endActions:e.createElement(e.Fragment,null,e.createElement(a.CheckPermissions,{permissions:Ct.Z.configureView},e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(y.h,{forwardedAs:s.Link,to:{pathname:`${P}/configuration`,search:(0,R.stringify)(l,{encode:!1})},icon:e.createElement(Y.Z,null),label:v({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(y.h,{icon:K?e.createElement(k.Z,null):e.createElement(ae.Z,null),label:v(K?{id:"view-switch.list",defaultMessage:"List View"}:{id:"view-switch.grid",defaultMessage:"Grid View"}),onClick:()=>q(K?M.Uk.LIST:M.Uk.GRID)})),e.createElement(a.SearchURLQuery,{label:v({id:(0,f.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(N.D,null,z.length>0&&e.createElement(ie,{currentFolder:ue,selected:z,onSuccess:Kt}),Re&&e.createElement(a.LoadingIndicatorPage,null),(Ft||Tt)&&e.createElement(a.AnErrorOccurred,null),b===0&&U===0&&e.createElement(Me,{canCreate:i,canRead:r,isFiltering:I,onActionClick:fe}),r&&!K&&(U>0||b>0)&&e.createElement($e.b,{assetCount:U,folderCount:b,indeterminate:Pe,onChangeSort:Ie,onChangeFolder:n=>o((0,f.Km)(P,l,n)),onEditAsset:me,onEditFolder:be,onSelectOne:te,onSelectAll:Se,rows:[..._,...ee],selected:z,shouldDisableBulkSelect:!d,sortQuery:l?.sort??""}),r&&K&&e.createElement(e.Fragment,null,b>0&&e.createElement(je.a,{title:(I&&U>0||!I)&&v({id:(0,f.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:b})||""},_.map(n=>{const zt=!!z.filter(({type:Ee})=>Ee==="folder").find(Ee=>Ee.id===n.id),Ze=(0,f.Km)(P,l,n?.id);return e.createElement(x.P,{col:3,key:`folder-${n.id}`},e.createElement(w.Ac,{ref:ge&&n.id===ge.id?C:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:Ze,startAction:te&&n.isSelectable?e.createElement(w.MM,{"data-testid":`folder-checkbox-${n.id}`,value:zt,onChange:()=>te(n)}):null,cardActions:e.createElement(y.h,{icon:e.createElement(J.Z,null),"aria-label":v({id:(0,f.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>be(n)})},e.createElement(w.Bu,null,e.createElement(w.u6,{to:Ze},e.createElement(Z.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(Le,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(B.T,null,":")),e.createElement(Le,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},v({id:(0,f.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),U>0&&b>0&&e.createElement(G.x,{paddingTop:6,paddingBottom:4},e.createElement(H.i,null)),U>0&&e.createElement(Qe.r,{assets:ee,onEditAsset:me,onSelectAsset:te,selectedAssets:z.filter(({type:n})=>n==="asset"),title:(!I||I&&b>0)&&T?.pagination?.page===1&&v({id:(0,f.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:It})||""})),T?.pagination&&e.createElement(se,{pagination:T.pagination}))),bt&&e.createElement(We.x,{onClose:fe,trackedLocation:"upload",folderId:l?.folder}),Zt&&e.createElement(Ke.f,{onClose:Wt,folder:ge,parentFolderId:l?.folder,location:"upload"}),Oe&&e.createElement(ze.s,{onClose:n=>{n===null&&Ue(1),me(void 0)},asset:Oe,canUpdate:d,canCopyLink:u,canDownload:E,trackedLocation:"upload"}))};var Bt=t(60862);const Rt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),xt=()=>{const{config:{isLoading:o,isError:r,data:i}}=(0,Bt.Z)(),[{rawQuery:d},u]=(0,a.useQueryParams)(),{formatMessage:E}=(0,m.useIntl)(),O=E({id:(0,f.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{o||r||d||u({sort:i.sort,page:1,pageSize:i.pageSize})},[o,r,i,d,u]),(0,a.useFocusWhenNavigate)(),e.createElement(S.o,{"aria-busy":o},e.createElement(g.Helmet,{title:O}),o&&e.createElement(a.LoadingIndicatorPage,null),d?e.createElement(e.Suspense,{fallback:e.createElement(a.LoadingIndicatorPage,null)},e.createElement(s.Switch,null,e.createElement(s.Route,{exact:!0,path:`/plugins/${X.Z}`,component:At}),e.createElement(s.Route,{exact:!0,path:`/plugins/${X.Z}/configuration`,render:()=>e.createElement(Rt,{config:i})}))):null)}},36989:($,L,t)=>{t.d(L,{Z:()=>R});var e=t(67294),s=t(45697),m=t(71893),g=t(41580),a=t(11047);const S=(0,m.default)(a.k)`
  & > * + * {
    margin-left: ${({theme:A})=>A.spaces[2]};
  }

  margin-left: ${({pullRight:A})=>A?"auto":void 0};
`,F=(0,m.default)(S)`
  flex-shrink: 0;
`,R=({startActions:A,endActions:V})=>A||V?e.createElement(g.x,{paddingLeft:10,paddingRight:10},e.createElement(g.x,{paddingBottom:4},e.createElement(a.k,{justifyContent:"space-between",alignItems:"flex-start"},A&&e.createElement(S,{wrap:"wrap"},A),V&&e.createElement(F,{pullRight:!0},V)))):null;R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:s.node,startActions:s.node}},49066:($,L,t)=>{t.d(L,{D:()=>g});var e=t(67294),s=t(45697),m=t(41580);const g=({children:a})=>e.createElement(m.x,{paddingLeft:10,paddingRight:10},a);g.propTypes={children:s.node.isRequired}},53979:($,L,t)=>{t.d(L,{T:()=>N});var e=t(67294),s=t(45697),m=t(71893),g=t(41580),a=t(11047);const S=c=>{const B=(0,e.useRef)(null),[y,p]=(0,e.useState)(!0),x=([Z])=>{p(Z.isIntersecting)};return(0,e.useEffect)(()=>{const Z=B.current,J=new IntersectionObserver(x,c);return Z&&J.observe(B.current),()=>{Z&&J.disconnect()}},[B,c]),[B,y]};var F=t(98402);const R=(c,B)=>{const y=(0,F.useCallbackRef)(B);(0,e.useLayoutEffect)(()=>{const p=new ResizeObserver(y);return Array.isArray(c)?c.forEach(x=>{x.current&&p.observe(x.current)}):c.current&&p.observe(c.current),()=>{p.disconnect()}},[c,y])};var A=t(75515);const V=()=>{const c=(0,e.useRef)(null),[B,y]=(0,e.useState)(null),[p,x]=S({root:null,rootMargin:"0px",threshold:0});return R(p,()=>{p.current&&y(p.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{c.current&&y(c.current.getBoundingClientRect())},[c]),{containerRef:p,isVisible:x,baseHeaderLayoutRef:c,headerSize:B}},N=c=>{const{containerRef:B,isVisible:y,baseHeaderLayoutRef:p,headerSize:x}=V();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:x?.height},ref:B},y&&e.createElement(H,{ref:p,...c})),!y&&e.createElement(H,{...c,sticky:!0,width:x?.width}))};N.displayName="HeaderLayout";const G=(0,m.default)(g.x)`
  width: ${c=>c.width}px;
`,H=e.forwardRef(({navigationAction:c,primaryAction:B,secondaryAction:y,subtitle:p,title:x,sticky:Z,width:J,...Y},ae)=>{const k=typeof p=="string";return Z?e.createElement(G,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:J,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(a.k,{justifyContent:"space-between"},e.createElement(a.k,null,c&&e.createElement(g.x,{paddingRight:3},c),e.createElement(g.x,null,e.createElement(A.Z,{variant:"beta",as:"h1",...Y},x),k?e.createElement(A.Z,{variant:"pi",textColor:"neutral600"},p):p),y?e.createElement(g.x,{paddingLeft:4},y):null),e.createElement(a.k,null,B?e.createElement(g.x,{paddingLeft:2},B):void 0))):e.createElement(g.x,{ref:ae,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(g.x,{paddingBottom:2},c):null,e.createElement(a.k,{justifyContent:"space-between"},e.createElement(a.k,{minWidth:0},e.createElement(A.Z,{as:"h1",variant:"alpha",...Y},x),y?e.createElement(g.x,{paddingLeft:4},y):null),B),k?e.createElement(A.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},p):p)});H.displayName="BaseHeaderLayout",H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},H.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},N.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},N.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},17034:($,L,t)=>{t.d(L,{A:()=>F});var e=t(67294),s=t(45697),m=t(71893),g=t(41580);const a=(0,m.default)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:R})=>R?"auto 1fr":"1fr"};
`,S=(0,m.default)(g.x)`
  overflow-x: hidden;
`,F=({sideNav:R,children:A})=>e.createElement(a,{hasSideNav:Boolean(R)},R,e.createElement(S,{paddingBottom:10},A));F.defaultProps={sideNav:void 0},F.propTypes={children:s.node.isRequired,sideNav:s.node}},185:($,L,t)=>{t.d(L,{o:()=>a});var e=t(67294),s=t(45697),m=t(71893);const g=m.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,a=({labelledBy:S,...F})=>{const R=S||"main-content-title";return e.createElement(g,{"aria-labelledby":R,id:"main-content",tabIndex:-1,...F})};a.defaultProps={labelledBy:void 0},a.propTypes={labelledBy:s.string}},67109:($,L,t)=>{t.d(L,{Z:()=>m});var e=t(85893);const s=g=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),m=s},78114:($,L,t)=>{t.d(L,{Z:()=>m});var e=t(85893);const s=g=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",fill:"#212134"})}),m=s}}]);