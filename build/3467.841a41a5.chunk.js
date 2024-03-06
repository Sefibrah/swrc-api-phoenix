"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3467],{3414:(S,M,e)=>{e.d(M,{Z:()=>R});var t=e(67294),T=e(90731),c=e(96987),o=e(12473),s=e(32638),a=e(18226),d=e(97695),g=e(45697),n=e.n(g),m=e(86896),E=e(75975),i=e(29204);const l=(O,v,N,r)=>{const[U,A]=(0,t.useState)(!1),k=(0,s.useNotification)(),{post:W}=(0,s.useFetchClient)(),{formatAPIError:I}=(0,s.useAPIErrorHandler)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:C}}}=await W(`${O}${v}/regenerate`);A(!1),N(C)}catch(C){A(!1),r?r(C):C instanceof i.d7&&k({type:"warning",message:I(C)})}},isLoadingConfirmation:U}},p=({onRegenerate:O,idToRegenerate:v,backUrl:N,onError:r})=>{const{formatMessage:U}=(0,m.Z)(),[A,k]=(0,t.useState)(!1),{regenerateData:W,isLoadingConfirmation:I}=l(N,v,O,r),Z=async()=>{W(),k(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(E.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>k(!0),name:"regenerate"},U({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.ConfirmDialog,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(E.Z,null),isConfirmButtonLoading:I,isOpen:A,onToggleDialog:()=>k(!1),onConfirm:Z,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};p.defaultProps={onRegenerate(){},onError:void 0},p.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const y=p,u=({title:O,token:v,setToken:N,canEditInputs:r,canRegenerate:U,isSubmitting:A,backUrl:k,regenerateUrl:W,onErrorRegenerate:I})=>{const{formatMessage:Z}=(0,m.Z)(),C=G=>{N({...v,accessKey:G})};return t.createElement(T.T,{title:v?.name||Z(O),primaryAction:r?t.createElement(c.k,{gap:2},U&&v?.id&&t.createElement(y,{backUrl:W,onRegenerate:C,idToRegenerate:v?.id,onError:I}),t.createElement(o.z,{disabled:A,loading:A,startIcon:t.createElement(a.Z,null),type:"submit",size:"S"},Z({id:"global.save",defaultMessage:"Save"}))):U&&v?.id&&t.createElement(y,{onRegenerate:C,idToRegenerate:v?.id,backUrl:W}),navigationAction:t.createElement(s.Link,{startIcon:t.createElement(d.Z,null),to:k},Z({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};u.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},u.defaultProps={token:void 0,onErrorRegenerate:void 0};const R=u},89982:(S,M,e)=>{e.d(M,{Z:()=>m});var t=e(67294),T=e(59586),c=e(40933),o=e(71068),s=e(45697),a=e.n(s),d=e(86896),g=e(51352);const n=({token:E,errors:i,values:l,onChange:p,isCreating:y})=>{const{formatMessage:u}=(0,d.Z)();return t.createElement(t.Fragment,null,t.createElement(T.P,{name:"lifespan",label:u({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:l.lifespan!==null?l.lifespan:"0",error:i.lifespan?u(i.lifespan?.id?i.lifespan:{id:i.lifespan,defaultMessage:i.lifespan}):null,onChange:R=>{p({target:{name:"lifespan",value:R}})},required:!0,disabled:!y,placeholder:"Select"},t.createElement(c.W,{value:"604800000"},u({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(c.W,{value:"2592000000"},u({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(c.W,{value:"7776000000"},u({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(c.W,{value:"0"},u({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!y&&`${u({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,g.IX)(E?.createdAt,parseInt(l.lifespan,10))}`))};n.propTypes={errors:a().shape({lifespan:a().string}),onChange:a().func.isRequired,values:a().shape({lifespan:a().oneOfType([a().number,a().string])}).isRequired,isCreating:a().bool.isRequired,token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},n.defaultProps={errors:{},token:{}};const m=n},81384:(S,M,e)=>{e.d(M,{Z:()=>m});var t=e(67294),T=e(96208),c=e(32638),o=e(43838),s=e(46374),a=e(45697),d=e.n(a),g=e(86896);const n=({token:E,tokenType:i})=>{const{formatMessage:l}=(0,g.Z)(),p=(0,c.useNotification)(),{trackUsage:y}=(0,c.useTracking)(),{copy:u}=(0,c.useClipboard)(),R=O=>async()=>{await u(O)&&(y("didCopyTokenKey",{tokenType:i}),p({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(c.ContentBox,{endAction:E&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(T.h,{label:l({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:R(E),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:E||l({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:l(E?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.Z,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:d().string,tokenType:d().string.isRequired};const m=n},37651:(S,M,e)=>{e.d(M,{Z:()=>d});var t=e(67294),T=e(457),c=e(45697),o=e.n(c),s=e(86896);const a=({errors:g,values:n,onChange:m,canEditInputs:E})=>{const{formatMessage:i}=(0,s.Z)();return t.createElement(T.g,{label:i({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:g.description?i(g.description?.id?g.description:{id:g.description,defaultMessage:g.description}):null,onChange:m,disabled:!E},n.description)};a.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},a.defaultProps={errors:{}};const d=a},72028:(S,M,e)=>{e.d(M,{Z:()=>d});var t=e(67294),T=e(38670),c=e(45697),o=e.n(c),s=e(86896);const a=({errors:g,values:n,onChange:m,canEditInputs:E})=>{const{formatMessage:i}=(0,s.Z)();return t.createElement(T.o,{name:"name",error:g.name?i(g.name?.id?g.name:{id:g.name,defaultMessage:g.name}):null,label:i({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:m,value:n.name,disabled:!E,required:!0})};a.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},a.defaultProps={errors:{}};const d=a},32381:(S,M,e)=>{e.d(M,{Z:()=>g});var t=e(67294),T=e(59586),c=e(40933),o=e(45697),s=e.n(o),a=e(86896);const d=({name:n,errors:m,values:E,onChange:i,canEditInputs:l,options:p,label:y})=>{const{formatMessage:u}=(0,a.Z)();return t.createElement(T.P,{name:n,label:u({id:y.id,defaultMessage:y.defaultMessage}),value:E&&E[n],error:m[n]?u(m[n]?.id?m[n]:{id:m[n],defaultMessage:m[n]}):null,onChange:i,placeholder:"Select",required:!0,disabled:!l},p&&p.map(({value:R,label:O})=>t.createElement(c.W,{key:R,value:R},u(O))))};d.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},d.defaultProps={name:"type",errors:{},options:[]};const g=d},81966:(S,M,e)=>{e.d(M,{Z:()=>t,f:()=>T});const t="api-token",T="transfer-token"},51352:(S,M,e)=>{e.d(M,{IX:()=>s,fK:()=>n,mk:()=>E});var t=e(66115),T=e(77349),c=e(51991);const s=(i,l,p="en")=>{if(l&&typeof l=="number"){const y=l/24/60/60/1e3;return(0,t.Z)((0,T.Z)(new Date(i),y),"PPP",{locale:c[p]})}return"Unlimited"};var a=e(32638),d=e(87561);const n=d.Ry().shape({name:d.Z_(a.translatedErrors.string).max(100).required(a.translatedErrors.required),type:d.Z_(a.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(a.translatedErrors.required),description:d.Z_().nullable(),lifespan:d.Rx().integer().min(0).nullable().defined(a.translatedErrors.required)}),E=i=>{const l={allActionsIds:[],permissions:[]};return l.permissions=Object.keys(i).map(p=>({apiId:p,label:p.split("::")[1],controllers:Object.keys(i[p].controllers).map(y=>({controller:y,actions:i[p].controllers[y].map(u=>{const R=`${p}.${y}.${u}`;return p.includes("api::")&&l.allActionsIds.push(R),{action:u,actionId:R}}).flat()})).flat()})),l}},43467:(S,M,e)=>{e.d(M,{Z:()=>ne});var t=e(67294),T=e(40720),c=e(34726),o=e(96987),s=e(32638),a=e(41054),d=e(86896),g=e(88767),n=e(86706),m=e(16550),E=e(96854),i=e(36364),l=e(81966),p=e(3414),y=e(81384),u=e(16607),R=e(71068),O=e(31988),v=e(6498),N=e(45697),r=e.n(N),U=e(89982),A=e(37651),k=e(72028),W=e(32381);const I=({errors:L,onChange:B,canEditInputs:F,isCreating:h,values:x,transferToken:P})=>{const{formatMessage:$}=(0,d.Z)(),J=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return t.createElement(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(R.Z,{variant:"delta",as:"h2"},$({id:"global.details",defaultMessage:"Details"})),t.createElement(O.r,{gap:5},t.createElement(v.P,{key:"name",col:6,xs:12},t.createElement(k.Z,{errors:L,values:x,canEditInputs:F,onChange:B})),t.createElement(v.P,{key:"description",col:6,xs:12},t.createElement(A.Z,{errors:L,values:x,canEditInputs:F,onChange:B})),t.createElement(v.P,{key:"lifespan",col:6,xs:12},t.createElement(U.Z,{isCreating:h,errors:L,values:x,onChange:B,token:P})),t.createElement(v.P,{key:"permissions",col:6,xs:12},t.createElement(W.Z,{name:"permissions",values:x,errors:L,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:z=>{B({target:{name:"permissions",value:z}})},options:J,canEditInputs:F})))))};I.propTypes={errors:r().shape({name:r().string,description:r().string,lifespan:r().string,type:r().string}),onChange:r().func.isRequired,canEditInputs:r().bool.isRequired,values:r().shape({name:r().string,description:r().string,lifespan:r().oneOfType([r().number,r().string]),type:r().string}).isRequired,isCreating:r().bool.isRequired,transferToken:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},I.defaultProps={errors:{},transferToken:{}};const Z=I;var C=e(90731),G=e(12473),q=e(18226);const j=({transferTokenName:L})=>{const{formatMessage:B}=(0,d.Z)();return(0,s.useFocusWhenNavigate)(),t.createElement(T.o,{"aria-busy":"true"},t.createElement(s.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(C.T,{primaryAction:t.createElement(G.z,{disabled:!0,startIcon:t.createElement(q.Z,null),type:"button",size:"L"},B({id:"global.save",defaultMessage:"Save"})),title:L||B({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(c.D,null,t.createElement(s.LoadingIndicatorPage,null)))};j.defaultProps={transferTokenName:null},j.propTypes={transferTokenName:r().string};const w=j;var V=e(87561);const ee=V.Ry().shape({name:V.Z_(s.translatedErrors.string).max(100).required(s.translatedErrors.required),description:V.Z_().nullable(),lifespan:V.Rx().integer().min(0).nullable().defined(s.translatedErrors.required),permissions:V.Z_(s.translatedErrors.string).required(s.translatedErrors.required)}),te="Name already taken",ne=()=>{(0,s.useFocusWhenNavigate)();const{formatMessage:L}=(0,d.Z)(),{lockApp:B,unlockApp:F}=(0,s.useOverlayBlocker)(),h=(0,s.useNotification)(),x=(0,m.k6)(),[P,$]=(0,t.useState)(x.location.state?.transferToken.accessKey?{...x.location.state.transferToken}:null),{trackUsage:J}=(0,s.useTracking)(),z=(0,t.useRef)(J),{setCurrentStep:se}=(0,s.useGuidedTour)(),ae=(0,n.v9)(i._),{allowedActions:{canCreate:re,canUpdate:oe,canRegenerate:ie}}=(0,s.useRBAC)(ae.settings["transfer-tokens"]),{params:{id:X}}=(0,m.$B)("/settings/transfer-tokens/:id"),{get:le,post:de,put:ce}=(0,s.useFetchClient)(),D=X==="create",{formatAPIError:b}=(0,s.useAPIErrorHandler)();(0,t.useEffect)(()=>{z.current(D?"didAddTokenFromList":"didEditTokenFromList",{tokenType:l.f})},[D]);const{status:ge}=(0,g.useQuery)(["transfer-token",X],async()=>{const{data:{data:f}}=await le(`/admin/transfer/tokens/${X}`);return $({...f}),f},{enabled:!D&&!P,onError(f){f.response.data.error.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:b(f)})}}),ue=async(f,H)=>{z.current(D?"willCreateToken":"willEditToken",{tokenType:l.f}),B();const Q=f.lifespan&&parseInt(f.lifespan,10)&&f.lifespan!=="0"?parseInt(f.lifespan,10):null,Y=f.permissions.split("-");try{const{data:{data:K}}=D?await de("/admin/transfer/tokens",{...f,lifespan:Q,permissions:Y}):await ce(`/admin/transfer/tokens/${X}`,{name:f.name,description:f.description,permissions:Y});F(),D&&(x.replace(`/settings/transfer-tokens/${K.id}`,{transferToken:K}),se("transferTokens.success")),$({...K}),h({type:"success",message:L(D?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),z.current(D?"didCreateToken":"didEditToken",{type:P?.permissions,tokenType:l.f})}catch(K){const fe=(0,E.Iz)(K.response.data);H.setErrors(fe),K?.response?.data?.error?.message===te?h({type:"warning",message:K.response.data.message||"notification.error.tokennamenotunique"}):K?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:K?.response?.data?.message||"notification.error"}),F()}},_=oe&&!D||re&&D;if(!D&&!P&&ge!=="success")return t.createElement(w,{transferTokenName:P?.name});const pe=f=>{f?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:b(f)})};return t.createElement(T.o,null,t.createElement(s.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(a.J9,{validationSchema:ee,validateOnChange:!1,initialValues:{name:P?.name||"",description:P?.description||"",lifespan:P?.lifespan?P.lifespan.toString():P?.lifespan,permissions:P?.permissions.join("-")},enableReinitialize:!0,onSubmit:(f,H)=>ue(f,H)},({errors:f,handleChange:H,isSubmitting:Q,values:Y})=>t.createElement(s.Form,null,t.createElement(p.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:P,setToken:$,canEditInputs:_,canRegenerate:ie,isSubmitting:Q,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:pe}),t.createElement(c.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(P?.name)&&t.createElement(y.Z,{token:P?.accessKey,tokenType:l.f}),t.createElement(Z,{errors:f,onChange:H,canEditInputs:_,isCreating:D,values:Y,transferToken:P}))))))}}}]);