"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1222],{91222:(Y,v,s)=>{s.d(v,{ProtectedEditPage:()=>Z});var t=s(92132),I=s(21272),r=s(94061),P=s(83997),m=s(85829),g=s(85963),B=s(90151),h=s(68074),A=s(7537),R=s(5287),c=s(38413),T=s(55356),U=s(4198),W=s(21610),o=s(65536),K=s(46270),f=s(61535),p=s(54894),j=s(46725),G=s(28183),u=s(12083),e=s(56740),H=s(17493),$=s(63074),ns=s(15126),is=s(63299),rs=s(67014),Es=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ps=s(5790),Ms=s(35223),Ds=s(96854),Os=s(74930),ms=s(2600),gs=s(48940),hs=s(41286),As=s(56336),Rs=s(13426),Cs=s(84624),Ls=s(77965),vs=s(54257),Is=s(71210),Bs=s(51187),cs=s(39404),Ts=s(58692),Us=s(501),Ws=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),us=s(14664),xs=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),Fs=s(22957),Vs=s(93179),zs=s(73055),Ys=s(15747),Gs=s(85306),Hs=s(26509),$s=s(32058),Qs=s(81185),Js=s(82261),Xs=s(412),Zs=s(94710);const Q=({disabled:n,role:_,values:D,errors:a,onChange:E,onBlur:C})=>{const{formatMessage:i}=(0,p.A)();return(0,t.jsx)(r.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(P.s,{justifyContent:"space-between",children:[(0,t.jsxs)(r.a,{children:[(0,t.jsx)(r.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:_?_.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(r.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:_?_.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(g.$,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:_.usersCount})})]}),(0,t.jsxs)(B.x,{gap:4,children:[(0,t.jsx)(h.E,{col:6,children:(0,t.jsx)(A.k,{disabled:n,name:"name",error:a.name&&i({id:a.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:E,onBlur:C,required:!0,value:D.name||""})}),(0,t.jsx)(h.E,{col:6,children:(0,t.jsx)(R.T,{disabled:n,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:a.name&&i({id:a.name}),onChange:E,onBlur:C,children:D.description||""})})]})]})})},J=u.Ik().shape({name:u.Yj().required(o.translatedErrors.required),description:u.Yj().optional()}),X=()=>{const n=(0,o.useNotification)(),{formatMessage:_}=(0,p.A)(),a=(0,j.W5)("/settings/roles/:id")?.params.id,E=I.useRef(null),{lockApp:C,unlockApp:i}=(0,o.useOverlayBlocker)(),{trackUsage:b}=(0,o.useTracking)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.useAPIErrorHandler)(),{isLoading:k,data:F}=(0,e.A)({role:a??""}),{roles:w,isLoading:V,refetch:q}=(0,H.u)({id:a},{refetchOnMountOrArgChange:!0}),M=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:a},{skip:!a,refetchOnMountOrArgChange:!0}),[as]=(0,e.G)(),[_s]=(0,e.E)();if(!a)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(x,L)=>{try{C();const{permissionsToSend:O,didUpdateConditions:y}=E.current?.getPermissions()??{},d=await as({id:a,...x});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?L.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(M.code!=="strapi-super-admin"&&O){const l=await _s({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?L.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}E.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{i()}},z=!V&&M.code==="strapi-super-admin";return(0,t.jsxs)(c.g,{children:[(0,t.jsx)(o.SettingsPageTitle,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:M.name??"",description:M.description??""},onSubmit:os,validationSchema:J,validateOnChange:!1,children:({handleSubmit:x,values:L,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:x,children:[(0,t.jsx)(T.Q,{primaryAction:(0,t.jsx)(P.s,{gap:2,children:(0,t.jsx)(g.$,{type:"submit",disabled:M.code==="strapi-super-admin",loading:l,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})}),title:_({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:G.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(U.s,{children:(0,t.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(Q,{disabled:z,errors:O,values:L,onChange:y,onBlur:d,role:M}),!k&&!V&&!ts&&F?(0,t.jsx)(r.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)($.P,{isFormDisabled:z,permissions:ss,ref:E,layout:F})}):(0,t.jsx)(r.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.LoadingIndicatorPage,{})})]})})]})})]})},Z=()=>{const n=(0,e.j)(E=>E.admin_app.permissions.settings?.roles),{isLoading:_,allowedActions:{canRead:D,canUpdate:a}}=(0,o.useRBAC)(n);return _?(0,t.jsx)(o.LoadingIndicatorPage,{}):!D&&!a?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(X,{})}},17493:(Y,v,s)=>{s.d(v,{u:()=>m});var t=s(21272),I=s(65536),r=s(54894),P=s(56740);const m=(g={},B)=>{const{locale:h}=(0,r.A)(),A=(0,I.useCollator)(h,{sensitivity:"base"}),{data:R,error:c,isError:T,isLoading:U,refetch:W}=(0,P.z)(g,B);return{roles:t.useMemo(()=>[...R??[]].sort((K,f)=>A.compare(K.name,f.name)),[R,A]),error:c,isError:T,isLoading:U,refetch:W}}}}]);