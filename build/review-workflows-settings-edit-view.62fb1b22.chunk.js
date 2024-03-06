"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4409],{28104:(Ae,O,t)=>{t.r(O),t.d(O,{default:()=>ge});var e=t(67294),f=t(32638),a=t(86706),V=t(36364),G=t(12473),T=t(96987),K=t(74863),I=t(71068),Q=t(18226),A=t(41054),b=t(36968),q=t.n(b),_=t(86896),ee=t(88767),te=t(16550),se=t(98374),oe=t(92686),ne=t(79194),ae=t(75021),g=t(11984),y=t(43390),m=t(38705),re=t(68997),le=t(85230),r=t(86978),ie=t(52258),ce=t(3848),u=t(65649),fe=t(66578);function de(){const{workflowId:E}=(0,te.UO)(),me=(0,a.v9)(V._),{formatMessage:o}=(0,_.Z)(),d=(0,a.I0)(),{put:ue}=(0,f.useFetchClient)(),{formatAPIError:we}=(0,f.useAPIErrorHandler)(),k=(0,f.useNotification)(),{isLoading:v,meta:S,workflows:C,refetch:ve}=(0,ie.n)(),{collectionTypes:U,singleTypes:Z,isLoading:R}=(0,oe.G)(),he=(0,a.v9)(u.RR),pe=(0,a.v9)(u.bH),l=(0,a.v9)(u.DV),j=(0,a.v9)(u.CA),z=(0,a.v9)(u.g$),h=(0,a.v9)(u.xU),{allowedActions:{canDelete:ye,canUpdate:D}}=(0,f.useRBAC)(me.settings["review-workflows"]),[L,M]=e.useState({}),{getFeature:Ee,isLoading:B}=(0,ae.q)(),{isLoading:P,roles:X}=(0,se.F)(void 0,{retry:!1}),[Y,w]=e.useState(!1),[ke,H]=e.useState(null),N=C.find(s=>s.id===parseInt(E,10)),J=C.filter(s=>s.id!==parseInt(E,10)).flatMap(s=>s.contentTypes),{mutateAsync:Se,isLoading:Ce}=(0,ee.useMutation)(async({workflow:s})=>{const{data:{data:n}}=await ue(`/admin/review-workflows/workflows/${s.id}`,{data:s});return n},{onSuccess(){k({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),Le=async s=>{H(null);try{return await Se({workflow:{...s,stages:s.stages.map(c=>{let p=!0;const x=he.workflow.stages.find(F=>F.id===c?.id);return x&&(p=x.permissions?.length!==c.permission?.length||!x.permissions.every(F=>!!c.permissions.find(Ie=>Ie.role===F.role))),{...c,permissions:p?c.permissions:void 0}})}})}catch(n){return n.response.data?.error?.name==="ValidationError"&&n.response.data?.error?.details?.errors?.length>0&&H(n.response.data?.error?.details?.errors.reduce((c,p)=>(q()(c,p.path,p.message),c),{})),k({type:"warning",message:we(n)}),null}},$=async()=>{await Le(l),await ve(),M({})},Me=async()=>{await $()},Te=()=>{M({})},W=(0,A.TA)({enableReinitialize:!0,initialErrors:ke,initialValues:l,async onSubmit(){const s=l.contentTypes.some(n=>J.includes(n));i?.[r.Ef]&&S?.workflowCount>parseInt(i[r.Ef],10)?w("workflow"):i?.[r._X]&&l.stages.length>parseInt(i[r._X],10)?w("stage"):j||s?(j&&M(n=>({...n,hasDeletedServerStages:!0})),s&&M(n=>({...n,hasReassignedContentTypes:!0}))):$()},validate(s){return(0,fe.V)({values:s,formatMessage:o})}});(0,ne.v)(r.sN,ce.I);const i=Ee("review-workflows");return e.useEffect(()=>(v||(d((0,g.fC)({workflow:N})),d((0,g.PP)({workflows:C}))),R||d((0,g.Pz)({collectionTypes:U,singleTypes:Z})),P||d((0,g.Lk)(X)),d((0,g.wt)(v||R||P)),()=>{d((0,g.Js)())}),[U,d,R,v,P,X,Z,N,C]),e.useEffect(()=>{!v&&!B&&(i?.[r.Ef]&&S?.workflowCount>parseInt(i[r.Ef],10)?w("workflow"):i?.[r._X]&&l.stages.length>parseInt(i[r._X],10)&&w("stage"))},[l.stages.length,B,v,i,S?.workflowCount,S.workflowsTotal]),e.useEffect(()=>{!h&&z.length===0&&k({blockTransition:!0,type:"warning",message:o({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[o,h,z,k]),e.createElement(e.Fragment,null,e.createElement(y.lx,null),e.createElement(A.Hy,{value:W},e.createElement(A.l0,{onSubmit:W.handleSubmit},e.createElement(y.h4,{navigationAction:e.createElement(y.eJ,{href:"/settings/review-workflows"}),primaryAction:D&&e.createElement(G.z,{startIcon:e.createElement(Q.Z,null),type:"submit",size:"M",disabled:!pe,loading:!Object.keys(L).length>0&&Ce},o({id:"global.save",defaultMessage:"Save"})),subtitle:!h&&o({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l.stages.length}),title:l.name}),e.createElement(y.fC,null,h?e.createElement(T.k,{justifyContent:"center"},e.createElement(K.a,null,o({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"}))):e.createElement(T.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(le.Y,{canUpdate:D}),e.createElement(re.U,{canDelete:ye,canUpdate:D,stages:W.values?.stages}))))),e.createElement(f.ConfirmDialog.Root,{isConfirmButtonLoading:h,isOpen:Object.keys(L).length>0,onToggleDialog:Te,onConfirm:Me},e.createElement(f.ConfirmDialog.Body,null,e.createElement(T.k,{direction:"column",gap:5},L.hasDeletedServerStages&&e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})),L.hasReassignedContentTypes&&e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:J.filter(s=>l.contentTypes.includes(s)).length})),e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(m.fC,{isOpen:Y==="workflow",onClose:()=>w(!1)},e.createElement(m.Dx,null,o({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(m.uT,null,o({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(m.fC,{isOpen:Y==="stage",onClose:()=>w(!1)},e.createElement(m.Dx,null,o({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(m.uT,null,o({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ge(){const E=(0,a.v9)(V._);return e.createElement(f.CheckPagePermissions,{permissions:E.settings["review-workflows"].main},e.createElement(de,null))}}}]);