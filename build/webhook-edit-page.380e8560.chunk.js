"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5162],{37948:(re,x,t)=>{t.d(x,{Z:()=>We});var e=t(67294),a=t(68547),D=t(185),O=t(23724),S=t(49656),C=t(48474),d=t(45697),i=t.n(d),X=t(67109),m=t(85018),$=t(85893);function Le(n){return(0,$.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,$.jsx)("path",{d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 012 7.07V.93z",fill:"#212134"})})}var ye=t(67838),Me=t(49066),se=t(41580),Pe=t(29728),B=t(7681),ue=t(16364),Q=t(11276),U=t(74571),w=t(80831),j=t(97132),xe=t(64777),K=t(75515),Oe=t(27821),Ae=t(41451),G=t(36213),me=t(11700),o=t.n(me);const R=({disabledEvents:n,name:r,events:s,inputValue:l,handleChange:g,handleChangeAll:h})=>{const u=s.filter(M=>!n.includes(M)),p=l.length===u.length,f=l.length>0,E=({target:{name:M}})=>{h({target:{name:M,value:!p}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(G.X,{indeterminate:f&&!p,"aria-label":"Select all entries",name:r,onChange:E,value:p},o()(r))),s.map(M=>e.createElement("td",{key:M},e.createElement(Ae.C,{disabled:n.includes(M),"aria-label":M,name:M,value:l.includes(M),onValueChange:I=>g({target:{name:M,value:I}})}))))};R.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},R.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};const k=R,L=n=>n.reduce((r,s)=>{const l=s.split(".")[0];return r[l]||(r[l]=[]),r[l].push(s),r},{}),le=Oe.default.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,oe={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},ie=({isDraftAndPublish:n})=>{const r=n?oe.headers.draftAndPublish:oe.headers.default,s=n?oe.events.draftAndPublish:oe.events.default,{formatMessage:l}=(0,j.useIntl)(),{values:g,handleChange:h}=(0,w.useFormikContext)(),u="events",p=g.events,f=[],E=L(p),M=({target:{name:v,value:ne}})=>{let F=new Set(p);ne?F.add(v):F.delete(v),h({target:{name:u,value:Array.from(F)}})},I=({target:{name:v,value:ne}})=>{let F=new Set(p);ne?s[v].forEach(z=>{f.includes(z)||F.add(z)}):s[v].forEach(z=>F.delete(z)),h({target:{name:u,value:Array.from(F)}})};return e.createElement(B.K,{spacing:1},e.createElement(xe.Q,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(le,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),r.map(v=>v==="app.utils.publish"||v==="app.utils.unpublish"?e.createElement("td",{key:v.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(K.Z,{variant:"sigma",textColor:"neutral600"},l(v))):e.createElement("td",{key:v.id},e.createElement(K.Z,{variant:"sigma",textColor:"neutral600"},l(v)))))),e.createElement("tbody",null,Object.keys(s).map(v=>e.createElement(k,{disabledEvents:f,key:v,name:v,events:s[v],inputValue:E[v],handleChange:M,handleChangeAll:I})))))};ie.propTypes={isDraftAndPublish:i().bool.isRequired};const De=ie;var ee=t(96315),J=t(11047),ge=t(39785),ke=t(38855),$e=t(90608);const pe=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],he=({name:n,onChange:r,value:s,...l})=>{const[g,h]=(0,e.useState)(s?[...pe,s]:pe),u=f=>{r({target:{name:n,value:f}})},p=f=>{h(E=>[...E,f]),r({target:{name:n,value:f}})};return e.createElement(ke.X,{...l,onChange:u,onCreateOption:p,placeholder:"",value:s},g.map(f=>e.createElement($e.O,{value:f,key:f},f)))};he.defaultProps={value:void 0},he.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};const Se=he,Ke=()=>{const{formatMessage:n}=(0,j.useIntl)(),{values:r,errors:s}=(0,w.useFormikContext)();return e.createElement(B.K,{spacing:1},e.createElement(xe.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(se.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(w.FieldArray,{validateOnChange:!1,name:"headers",render:({push:l,remove:g})=>e.createElement(Q.r,{gap:4},r.headers?.map((h,u)=>e.createElement(e.Fragment,{key:u},e.createElement(U.P,{col:6},e.createElement(w.Field,{as:Se,name:`headers.${u}.key`,"aria-label":`row ${u+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:s.headers?.[u]?.key&&n({id:s.headers[u]?.key,defaultMessage:s.headers[u]?.key})})),e.createElement(U.P,{col:6},e.createElement(J.k,{alignItems:"flex-end"},e.createElement(se.x,{style:{flex:1}},e.createElement(w.Field,{as:ue.o,"aria-label":`row ${u+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${u}.value`,error:s.headers?.[u]?.value&&n({id:s.headers[u]?.value,defaultMessage:s.headers[u]?.value})})),e.createElement(J.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:s.headers?.[u]?.value?0:5},e.createElement(a.RemoveRoundedButton,{onClick:()=>r.headers.length!==1&&g(u),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:u+1})})))))),e.createElement(U.P,{col:12},e.createElement(ge.A,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(ee.default,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var fe=t(70968),Z=t(86647);const de=Oe.default.svg(({theme:n,color:r})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[r]};
  }
`),Ee=({isPending:n,statusCode:r})=>{const{formatMessage:s}=(0,j.useIntl)();return n?e.createElement(B.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:Z.Z}),e.createElement(K.Z,null,s({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):r>=200&&r<300?e.createElement(B.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:m.Z,color:"success700"}),e.createElement(K.Z,null,s({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):r>=300?e.createElement(B.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(de,{as:fe.default,color:"danger700"}),e.createElement(K.Z,null,s({id:"Settings.error",defaultMessage:"error"})," ",r)):null};Ee.propTypes={isPending:i().bool.isRequired,statusCode:i().number},Ee.defaultProps={statusCode:void 0};const P=({statusCode:n,message:r})=>{const{formatMessage:s}=(0,j.useIntl)();return n>=200&&n<300?e.createElement(J.k,{justifyContent:"flex-end"},e.createElement(K.Z,{textColor:"neutral600",ellipsis:!0},s({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(J.k,{justifyContent:"flex-end"},e.createElement(J.k,{maxWidth:(0,a.pxToRem)(250),justifyContent:"flex-end",title:r},e.createElement(K.Z,{ellipsis:!0,textColor:"neutral600"},r))):null};P.propTypes={statusCode:i().number,message:i().string},P.defaultProps={statusCode:void 0,message:void 0};const ve=({onCancel:n})=>{const{formatMessage:r}=(0,j.useIntl)();return e.createElement(J.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(B.K,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(K.Z,{textColor:"neutral400"},r({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(de,{as:fe.default,color:"neutral400"}))))};ve.propTypes={onCancel:i().func.isRequired};const be=({isPending:n,onCancel:r,response:s})=>{const{statusCode:l,message:g}=s,{formatMessage:h}=(0,j.useIntl)();return e.createElement(se.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(Q.r,{gap:4,style:{alignItems:"center"}},e.createElement(U.P,{col:3},e.createElement(K.Z,null,h({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(U.P,{col:3},e.createElement(Ee,{isPending:n,statusCode:l})),e.createElement(U.P,{col:6},n?e.createElement(ve,{onCancel:r}):e.createElement(P,{statusCode:l,message:g}))))};be.defaultProps={isPending:!1,onCancel(){},response:{}},be.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};const Fe=be;var y=t(53209);const Re=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,N=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,T=y.Ry().shape({name:y.Z_(a.translatedErrors.string).required(a.translatedErrors.required).matches(Re,a.translatedErrors.regex),url:y.Z_(a.translatedErrors.string).required(a.translatedErrors.required).matches(N,a.translatedErrors.regex),headers:y.Vo(n=>{let r=y.IX();if(n.length===1){const{key:s,value:l}=n[0];if(!s&&!l)return r}return r.of(y.Ry().shape({key:y.Z_().required(a.translatedErrors.required),value:y.Z_().required(a.translatedErrors.required)}))}),events:y.IX()}),Y=({handleSubmit:n,data:r,triggerWebhook:s,isCreating:l,isTriggering:g,triggerResponse:h,isDraftAndPublishEvents:u})=>{const{formatMessage:p}=(0,j.useIntl)(),[f,E]=(0,e.useState)(!1);return e.createElement(w.Formik,{onSubmit:n,initialValues:{name:r?.name||"",url:r?.url||"",headers:Object.keys(r?.headers||[]).length?Object.entries(r.headers).map(([M,I])=>({key:M,value:I})):[{key:"",value:""}],events:r?.events||[]},validationSchema:T,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:M,errors:I})=>e.createElement(a.Form,{noValidate:!0},e.createElement(ye.T,{primaryAction:e.createElement(B.K,{horizontal:!0,spacing:2},e.createElement(Pe.z,{onClick:()=>{s(),E(!0)},variant:"tertiary",startIcon:e.createElement(Le,null),disabled:l||g,size:"L"},p({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(Pe.z,{startIcon:e.createElement(m.Z,null),onClick:M,type:"submit",size:"L"},p({id:"global.save",defaultMessage:"Save"}))),title:l?p({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):r?.name,navigationAction:e.createElement(a.Link,{startIcon:e.createElement(X.Z,null),to:"/settings/webhooks"},p({id:"global.back",defaultMessage:"Back"}))}),e.createElement(Me.D,null,e.createElement(B.K,{spacing:4},f&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(Fe,{isPending:g,response:h,onCancel:()=>E(!1)})),e.createElement(se.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(B.K,{spacing:6},e.createElement(Q.r,{gap:6},e.createElement(U.P,{col:6},e.createElement(w.Field,{as:ue.o,name:"name",error:I.name&&p({id:I.name}),label:p({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(U.P,{col:12},e.createElement(w.Field,{as:ue.o,name:"url",error:I.url&&p({id:I.url}),label:p({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(Ke,null),e.createElement(De,{isDraftAndPublish:u})))))))};Y.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},Y.defaultProps={data:void 0,triggerResponse:void 0};const te=Y;var ce=t(96486);const ae=n=>{const r={...n};return(0,ce.set)(r,"headers",Te(n.headers)),r},Te=n=>n.reduce((r,s)=>{const{key:l,value:g}=s;return l!==""?{...r,[l]:g}:r},{}),Ie=ae;var Ce=t(25108);const We=()=>{const{params:{id:n}}=(0,S.useRouteMatch)("/settings/webhooks/:id"),{replace:r}=(0,S.useHistory)(),{lockApp:s,unlockApp:l}=(0,a.useOverlayBlocker)(),g=(0,a.useNotification)(),h=(0,O.useQueryClient)(),{isLoading:u,collectionTypes:p}=(0,C.bP)(),{post:f}=(0,a.useFetchClient)(),E=n==="create",M=(0,e.useCallback)(async V=>{const[H,{data:Ve}]=await(0,a.to)((0,a.request)(`/admin/webhooks/${V}`,{method:"GET"}));return H?(g({type:"warning",message:{id:"notification.error"}}),null):Ve},[g]),{isLoading:I,data:v}=(0,O.useQuery)(["get-webhook",n],()=>M(n),{enabled:!E}),{isLoading:ne,data:F,isIdle:z,mutate:c}=(0,O.useMutation)(()=>f(`/admin/webhooks/${n}/trigger`)),b=()=>c(null,{onError(){g({type:"warning",message:{id:"notification.error"}})}}),W=(0,O.useMutation)(V=>(0,a.request)("/admin/webhooks",{method:"POST",body:V})),q=(0,O.useMutation)(({id:V,body:H})=>(0,a.request)(`/admin/webhooks/${V}`,{method:"PUT",body:H})),Ze=async V=>{E?(s(),W.mutate(Ie(V),{onSuccess(H){g({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${H.data.id}`),l()},onError(H){g({type:"warning",message:{id:"notification.error"}}),Ce.log(H),l()}})):(s(),q.mutate({id:n,body:Ie(V)},{onSuccess(){h.invalidateQueries(["get-webhook",n]),g({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(H){g({type:"warning",message:{id:"notification.error"}}),Ce.log(H),l()}}))},ze=(0,e.useMemo)(()=>p.some(V=>V.options.draftAndPublish===!0),[p]);return I||u?e.createElement(a.LoadingIndicatorPage,null):e.createElement(D.o,null,e.createElement(a.SettingsPageTitle,{name:"Webhooks"}),e.createElement(te,{handleSubmit:Ze,data:v,triggerWebhook:b,isCreating:E,isTriggering:ne,isTriggerIdle:z,triggerResponse:F?.data.data,isDraftAndPublishEvents:ze}))}},3672:(re,x,t)=>{t.r(x),t.d(x,{default:()=>d});var e=t(67294),a=t(68547),D=t.n(a),O=t(87751),S=t(37948);const d=()=>e.createElement(a.CheckPagePermissions,{permissions:O.Z.settings.webhooks.create},e.createElement(S.Z,null))},42122:(re,x,t)=>{t.r(x),t.d(x,{default:()=>d});var e=t(67294),a=t(68547),D=t.n(a),O=t(87751),S=t(37948);const d=()=>e.createElement(a.CheckPagePermissions,{permissions:O.Z.settings.webhooks.update},e.createElement(S.Z,null))},38855:(re,x,t)=>{t.d(x,{h:()=>G,X:()=>me});var e=t(67294),a=t(45697),D=t(41363),O=t(14085),S=t(41207),C=t(7801);const d={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},i={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function X(o=[],R=null,k=[]){const _=String(R??"").toLowerCase();return _?o.filter(L=>L.props.children.toString().toLowerCase().includes(_)&&k.indexOf(L)<0):o}function m(o,R){if(!R&&o===C.y.DOWN)return d.Open;if(o===C.y.DOWN)return d.Next;if(o===C.y.UP)return d.Previous;if(o===C.y.HOME)return d.First;if(o===C.y.END)return d.Last;if(o===C.y.ESCAPE)return d.Close;if(o===C.y.ENTER)return d.CloseSelect;if(o===C.y.BACKSPACE||o===C.y.CLEAR||o.length===1)return d.Type}function $(o,R,k){switch(k){case d.First:return 0;case d.Last:return R;case d.Previous:return Math.max(0,o-1);case d.Next:return Math.min(R,o+1);default:return o}}function Le(o){S(o,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:R,top:k,left:_})=>{R.scrollTop=k,R.scrollLeft=_})}var ye=t(11047),Me=t(81318),se=t(88533),Pe=t(41580),B=t(75515),ue=t(88655),Q=t(74020),U=t(90608),w=t(54574),j=t(64777),xe=t(63428),K=t(96404),Oe=t(7681),Ae=t(63237);const G=({children:o,clearLabel:R,creatable:k,createMessage:_,disabled:L,error:le,hasMoreItems:oe,hint:ie,id:De,label:ee,labelAction:J,loading:ge,loadingMessage:ke,noOptionsMessage:$e,onChange:Be,onClear:pe,onCreateOption:he,onInputChange:Se,onLoadMore:Ue,placeholder:Ke,required:fe,value:Z,...de})=>{const Ee=()=>o.find(c=>c.props?.value.toLowerCase()===Z.toLowerCase()).props?.children,[P,ve]=(0,e.useState)(0),[be,Fe]=(0,e.useState)(null),[y,Re]=(0,e.useState)(o),[N,we]=(0,e.useState)(!1),[T,Y]=(0,e.useState)(""),te=(0,e.useRef)(),ce=(0,e.useRef)(!1),ae=(0,e.useRef)(),Te=(0,e.useRef)(),Ie=(0,e.useRef)(),Ce=(0,e.useRef)(!0),A=(0,O.M)(De),We=`${A}-label`;if(!ee&&!de["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{Re(X(o,T))},[T,o]),(0,e.useEffect)(()=>{N&&te.current&&Le(te.current)},[P,N]),(0,e.useLayoutEffect)(()=>{Ce.current&&(Ce.current=!1)},[Z]);const n=N?`${A}-${P}`:"",r=()=>{Be(null),Y("")},s=c=>{Se&&Se(c);const b=ae.current.value;Re(X(o,b)),ve(0),Fe(null),T!==b&&Y(b),N||E(!0,!1)},l=c=>{const{key:b}=c,W=k&&T?y.length:y.length-1,q=m(b,N);switch(Z&&!T&&b===C.y.BACKSPACE&&r(),q){case d.Next:{if(P===W){h(0);break}h($(P,W,q));break}case d.Previous:{if(P===0){h(W);break}h($(P,W,q));break}case d.Last:case d.First:{if(P===W){h(0);break}h($(P,W,q));break}case d.CloseSelect:c.preventDefault(),f(P);break;case d.Close:c.preventDefault(),E(!1);break;case d.Open:E(!0);break}},g=c=>{if(c.preventDefault(),Z&&!ce.current&&Y(""),ce.current){ce.current=!1;return}E(!1,!1)},h=c=>{ve(c)},u=c=>{h(c),f(c)},p=()=>{ce.current=!0},f=c=>{const b=y[c];if(Y(""),b){Be(b.props.value),E(!1);return}k&&(he(T),E(!1))},E=(c,b=!0)=>{we(c),b&&ae.current.focus()},M=e.Children.toArray(y).map((c,b)=>{const W=P===b;return(0,e.cloneElement)(c,{id:`${A}-${b}`,"aria-selected":be===b,"aria-posinset":b+1,"aria-setsize":e.Children.toArray(y).length,ref(q){W&&(te.current=q)},onClick:()=>u(b),onMouseDown:p,isSelected:W})}),I=()=>{ae.current.focus(),pe&&pe(),r()},v=()=>{ae.current.focus(),E(!0)},ne=()=>{const c=y.findIndex(b=>b.props?.children===T);return T&&c===-1},F=c=>{c.preventDefault(),E(c,!0)};let z;return le?z=`${A}-error`:ie&&(z=`${A}-hint`),e.createElement(w.g,{hint:ie,error:le,id:A,required:fe},e.createElement(Ae.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},Z),e.createElement(Oe.K,{spacing:ee||ie||le?1:0},ee&&e.createElement(j.Q,{action:J},ee),e.createElement(Q.d8,{ref:Te,$disabled:L,hasError:le},e.createElement(Q.fv,{wrap:"wrap"},!T&&Z&&e.createElement(Q.K7,{id:`${A}-selected-value`},e.createElement(B.Z,null,Ee())),e.createElement(Q.II,{"aria-activedescendant":n,"aria-autocomplete":"list","aria-controls":`${A}-listbox`,"aria-disabled":L,"aria-expanded":N,"aria-haspopup":"listbox","aria-describedby":z,autoComplete:"off",autoCorrect:"off",id:A,onBlur:L?void 0:g,onClick:L?void 0:F,onInput:L?void 0:s,onKeyDown:L?void 0:l,placeholder:Z?"":Ke,readOnly:L,ref:ae,required:fe,role:"combobox",spellCheck:"off",type:"text",value:T})),e.createElement(ye.k,null,(Z||T)&&e.createElement(Me.zb,{id:`${A}-clear`,"aria-label":R,disabled:L,paddingLeft:3,as:"button",onClick:I,type:"button"},e.createElement(D.Cross,null)),e.createElement(Me.AV,{disabled:L,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:v,tabIndex:-1,type:"button"},e.createElement(D.CarretDown,null)))),e.createElement(xe.J,null),e.createElement(K.c,null)),N&&e.createElement(se.J2,{id:`${A}-popover`,source:Te,spacing:4,fullWidth:!0,intersectionId:`${A}-listbox-popover-intersection`,onReachEnd:oe&&!ge?Ue:void 0},e.createElement("div",{role:"listbox",ref:Ie,id:`${A}-listbox`,"aria-labelledby":ee?We:void 0},(Boolean(y.length)||k)&&e.createElement(e.Fragment,null,M,ne()&&k&&e.createElement(U.O,{isSelected:P===y.length,ref:c=>{P===y.length&&(te.current=c)},onMouseDown:p,onClick:()=>f(),taindex:0},_(T))),!y.length&&!k&&!ge&&e.createElement(Pe.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:te},e.createElement(B.Z,{textColor:"neutral800"},$e(T))),ge&&e.createElement(ye.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(ue.a,{small:!0},ke)))))},me=o=>e.createElement(G,{...o,creatable:!0});G.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:o=>`Create "${o}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,id:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},me.defaultProps=G.defaultProps,G.propTypes={"aria-label":a.string,children:a.oneOfType([a.arrayOf(a.node),a.node]),clearLabel:a.string,creatable:a.bool,createMessage:a.func,disabled:a.bool,error:a.string,hasMoreItems:a.bool,id:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),label:a.string,labelAction:a.element,loading:a.bool,loadingMessage:a.string,noOptionsMessage:a.func,onChange:a.func.isRequired,onClear:a.func,onCreateOption:a.func,onInputChange:a.func,onLoadMore:a.func,placeholder:a.string,value:a.string},me.propTypes={...G.propTypes,onCreateOption:a.func.isRequired}},90608:(re,x,t)=>{t.d(x,{O:()=>S});var e=t(67294),a=t(45697),D=t(75515),O=t(74020);const S=(0,e.forwardRef)(({isSelected:C,children:d,...i},X)=>e.createElement(O.Zq,{hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:C,ref:X,...i},e.createElement(D.Z,{textColor:C?"primary600":"neutral800",fontWeight:C?"bold":null},d)));S.defaultProps={isSelected:!1},S.propTypes={children:a.oneOfType([a.string,a.number]).isRequired,isSelected:a.bool},S.displayName="ComboboxOption"},74020:(re,x,t)=>{t.d(x,{II:()=>i,K7:()=>C,Zq:()=>X,d8:()=>S,fv:()=>d});var e=t(27821),a=t(41580),D=t(11047),O=t(15585);const S=(0,e.default)(D.k)`
  position: relative;
  border: 1px solid ${({theme:m,hasError:$})=>$?m.colors.danger600:m.colors.neutral200};
  padding-right: ${({theme:m})=>m.spaces[3]};
  padding-left: ${({theme:m})=>m.spaces[3]};
  border-radius: ${({theme:m})=>m.borderRadius};
  background: ${({theme:m})=>m.colors.neutral0};

  ${({theme:m,$disabled:$})=>$?`
    color: ${m.colors.neutral600};
    background: ${m.colors.neutral150};
  `:void 0}

  ${(0,O.k3)()}
`,C=e.default.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,d=(0,e.default)(D.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,i=e.default.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:m})=>m.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,X=(0,e.default)(a.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:m,theme:$})=>m&&`background: ${$.colors.primary100};`}

  &:hover {
    background: ${({theme:m})=>m.colors.primary100};
  }
`},86647:(re,x,t)=>{t.d(x,{Z:()=>a});var e=t(85893);function a(D){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...D,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.057 18c.552 0 1 .451 1 .997v4.006a1 1 0 01-.941.995l-.059.002c-.552 0-1-.451-1-.997v-4.006a1 1 0 01.941-.995l.06-.002zm-3.06-.736l.055.03c.478.276.64.89.367 1.364l-2.002 3.468a1 1 0 01-1.31.394l-.055-.03a1.002 1.002 0 01-.368-1.363l2.003-3.469a1 1 0 011.31-.394zm7.42.394l2.002 3.468a1 1 0 01-.314 1.331l-.053.033a1.002 1.002 0 01-1.365-.363l-2.003-3.469a1 1 0 01.314-1.33l.054-.034a1.002 1.002 0 011.364.364zm-9.548-2.66l.033.054c.276.478.11 1.091-.364 1.364L3.07 18.42a1 1 0 01-1.331-.314l-.033-.053a1.001 1.001 0 01.364-1.365l3.468-2.003a1 1 0 011.33.314zm11.79-.313l3.468 2.002a1 1 0 01.393 1.31l-.03.055c-.276.478-.89.64-1.363.367l-3.469-2.003a1 1 0 01-.394-1.309l.03-.055c.276-.479.89-.64 1.364-.367zm4.344-3.628a1 1 0 01.995.941l.002.06c0 .551-.451 1-.997 1h-4.006a1 1 0 01-.995-.942L18 12.057c0-.552.451-1 .997-1h4.006zm-18 0a1 1 0 01.995.941l.002.06c0 .551-.451 1-.998 1H.998a1 1 0 01-.996-.942L0 12.057c0-.552.451-1 .998-1h4.004zm17.454-5.059l.033.054c.277.478.11 1.091-.363 1.365l-3.469 2.002a1 1 0 01-1.33-.314l-.034-.053a1.002 1.002 0 01.364-1.365l3.468-2.003a1 1 0 011.331.314zM3.07 5.684l3.468 2.003a1 1 0 01.394 1.31l-.03.055c-.276.478-.89.64-1.364.367L2.07 7.417a1 1 0 01-.394-1.31l.03-.055c.276-.479.89-.64 1.364-.368zm14.926-4.008l.056.03c.478.276.64.89.367 1.364l-2.003 3.468a1 1 0 01-1.309.394l-.055-.03a1.002 1.002 0 01-.367-1.364l2.002-3.468a1 1 0 011.31-.394zm-10.58.394L9.42 5.538a1 1 0 01-.314 1.33l-.053.034a1.002 1.002 0 01-1.365-.364L5.684 3.07a1 1 0 01.314-1.331l.054-.033a1.002 1.002 0 011.365.364zM12.058 0c.552 0 1 .451 1 .998v4.004a1 1 0 01-.941.996L12.057 6c-.552 0-1-.451-1-.998V.998a1 1 0 01.941-.996l.06-.002z",fill:"#212134"})})}}}]);
