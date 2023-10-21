(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2544],{23341:(z,B,o)=>{"use strict";o.r(B),o.d(B,{CreatePage:()=>Ee,default:()=>Oe});var e=o(53547),f=o(57713),P=o(79371),E=o(75878),O=o(19442),T=o(26789),A=o(50781),b=o(78549),S=o(9370),X=o(61585),a=o(28469),N=o(20603),p=o(56127),M=o(60793),F=o(2931),g=o(94649),v=o(27361),w=o.n(v),ue=o(41609),ae=o.n(ue),ie=o(86896),C=o(86706),le=o(55168),J=o(88972),G=o(35650),_=o(99369),xe=o(18280),me=o(87561);const oe=me.Ry().shape({name:me.Z_().required(p.I0.required),description:me.Z_().required(p.I0.required)}),Pe=J.ZP.div`
  border: 1px solid ${({theme:$})=>$.colors.primary200};
  background: ${({theme:$})=>$.colors.primary100};
  padding: ${({theme:$})=>`${$.spaces[2]} ${$.spaces[4]}`};
  color: ${({theme:$})=>$.colors.primary600};
  border-radius: ${({theme:$})=>$.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ee=()=>{const $=(0,p.lm)(),{lockApp:ne,unlockApp:Y}=(0,p.o1)(),{formatMessage:I}=(0,ie.Z)(),[q,pe]=(0,e.useState)(!1),{replace:de}=(0,le.k6)(),ee=(0,e.useRef)(),{trackUsage:ce}=(0,p.rS)(),Be=(0,le.$B)("/settings/roles/duplicate/:id"),Ae=w()(Be,"params.id",null),{isLoading:Ze,data:fe}=(0,G.U_)(),{permissions:$e,isLoading:De}=(0,G.Dq)(Ae),{post:Fe,put:Le}=(0,p.kY)(),He=re=>{ne(),pe(!0),ce(Ae?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Fe("/admin/roles",re)).then(async({data:V})=>{const{permissionsToSend:U}=ee.current.getPermissions();return ce(Ae?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!ae()(U)&&await Le(`/admin/roles/${V.data.id}/permissions`,{permissions:U}),V}).then(V=>{pe(!1),$({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),pe(!1),$({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},je=`${I({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(f.o,null,e.createElement(p.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:je},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:V,errors:U,handleReset:ye,handleChange:Ce})=>e.createElement(p.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(P.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(O.z,{variant:"secondary",onClick:()=>{ye(),ee.current.resetForm()},size:"L"},I({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.z,{onClick:re,loading:q,size:"L"},I({id:"global.save",defaultMessage:"Save"}))),title:I({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:I({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.rU,{startIcon:e.createElement(M.Z,null),to:"/settings/roles"},I({id:"global.back",defaultMessage:"Back"}))}),e.createElement(T.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(A.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(A.x,null,e.createElement(A.x,null,e.createElement(b.Z,{fontWeight:"bold"},I({id:"global.details",defaultMessage:"Details"}))),e.createElement(A.x,null,e.createElement(b.Z,{variant:"pi",textColor:"neutral600"},I({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(Pe,null,I({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(S.r,{gap:4},e.createElement(X.P,{col:6},e.createElement(a.o,{name:"name",error:U.name&&I({id:U.name}),label:I({id:"global.name",defaultMessage:"Name"}),onChange:Ce,value:V.name})),e.createElement(X.P,{col:6},e.createElement(N.g,{label:I({id:"global.description",defaultMessage:"Description"}),id:"description",error:U.description&&I({id:U.description}),onChange:Ce},V.description))))),!Ze&&!De?e.createElement(A.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(xe.Z,{isFormDisabled:!1,ref:ee,permissions:$e,layout:fe})):e.createElement(A.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.dO,null))))))))};function Oe(){const $=(0,C.v9)(_._);return e.createElement(p.O4,{permissions:$.settings.roles.create},e.createElement(Ee,null))}},18280:(z,B,o)=>{"use strict";o.d(B,{Z:()=>es});var e=o(53547),f=o(20107),P=o(61738),E=o(54375),O=o(56127),T=o(18721),A=o.n(T),b=o(41609),S=o.n(b),X=o(45697),a=o.n(X),N=o(86896),p=o(50781),M=o(89734),F=o.n(M),g=o(88972),v=o(75878),w=o(62779),ue=o(84189),ae=o(3340),ie=o(27361),C=o.n(ie),le=o(57557),J=o.n(le),G=o(35650),_=o(19442),xe=o(80606);const me=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Re=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,N.Z)();return e.createElement(me,{hasConditions:r,className:n},e.createElement(_.z,{variant:s,startIcon:e.createElement(xe.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Re.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Re.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const oe=(0,g.ZP)(Re)``;var Pe=o(60881),Ee=o(18189),Oe=o(48683),$=o(78549),ne=o(45124),Y=o(63321),I=o(36773),q=o(18172),pe=o(7739),de=o.n(pe),ee=o(11700),ce=o.n(ee),Be=o(31439);const Ae=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Ze=t=>t.reduce((n,[r,s])=>(n.push({label:ce()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),fe=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),$e=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,N.Z)(),m=u=>{l(i,fe(t,u))};return e.createElement(v.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(v.k,{paddingLeft:6,style:{width:180}},e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement($.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Be.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Ae(d),options:Ze(t),disabled:n})))};$e.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const De=$e,Fe=(t,n)=>t.reduce((r,s)=>(r[s.id]=C()(n,s.id,!1),r),{}),Le=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,d=Fe(l,n);return r[i]=d,r},{}),je=(t,n,r)=>t.reduce((s,i)=>{const l=C()(n,[...i.pathToConditionsObject,"conditions"],{}),d=Le(r,l);return s[i.pathToConditionsObject.join("..")]=d,s},{}),re=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,N.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:m}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(de()(d,"category")),[d]),h=t.filter(({isDisplayed:y,hasSomeActionsSelected:k,hasAllActionsSelected:L})=>y&&(k||L)),x=(0,e.useMemo)(()=>je(h,c,u),[h,c,u]),[D,W]=(0,e.useState)(x),j=(y,k)=>{W((0,q.ZP)(L=>{L[y]||(L[y]={}),L[y].default||(L[y].default={}),L[y].default=k}))},R=()=>{const y=Object.entries(D).reduce((k,L)=>{const[Z,te]=L,K=Object.values(te).reduce((Q,H)=>({...Q,...H}),{});return k[Z]=K,k},{});m(y),i()};return e.createElement(Pe.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Ee.x,null,e.createElement(Y.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((y,k,L)=>e.createElement(I.$,{isCurrent:k===L.length-1,key:y},ce()(l({id:y,defaultMessage:y})))))),e.createElement(Oe.f,null,h.length===0&&e.createElement($.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,h.map(({actionId:y,label:k,pathToConditionsObject:L},Z)=>{const te=L.join("..");return e.createElement(De,{key:y,arrayOfOptionsGroupedByCategory:u,label:k,isFormDisabled:r,isGrey:Z%2===0,name:te,onChange:j,value:C()(D,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:R},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};re.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const V=re,U=`${120/16}rem`,ye=`${200/16}rem`,Ce=`${53/16}rem`,Ue=g.ZP.div`
  width: ${U};
`,ot=(0,g.ZP)(v.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:m,value:u})=>{const{formatMessage:h}=(0,N.Z)();return e.createElement(v.k,{alignItems:"center",paddingLeft:6,style:{width:ye,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(w.C,{name:c,"aria-label":h({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:x=>l({target:{name:c,value:x}}),indeterminate:m,value:u})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:d,"aria-expanded":r,onKeyDown:({key:x})=>(x==="Enter"||x===" ")&&d(),tabIndex:0,role:"button"}},e.createElement($.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ce()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const rt=(0,e.memo)(Ke);var Ft=o(42348),Nt=o.n(Ft),Wt=o(13218),be=o.n(Wt);const at=t=>be()(t)?Nt()(Object.values(t).map(n=>be()(n)?at(n):n)):[],ke=at,ze=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Te=t=>{const n=ze(t),r=ke(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Vt=o(21514);const Ne=(0,g.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,We=t=>`
  ${$.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ne} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...r.split(".."),s],m=S()(l)?[...c,"properties","enabled"]:c,u=m.join(".."),h=C()(n,[...c,"conditions"],null),x=ke(h).some(R=>R);if(S()(l)){const R=C()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:R,hasConditions:x,hasSomeActionsSelected:R,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const D=C()(n,m,null),{hasAllActionsSelected:W,hasSomeActionsSelected:j}=Te(D);return{actionId:s,checkboxName:u,hasAllActionsSelected:W,hasConditions:x,hasSomeActionsSelected:j,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Xe=(t,n)=>`
  ${it} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${oe} {
    display: block;
  }
  &:hover {
   ${We(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Xe(r,s)}
  }
  
`,it=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ce};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${oe} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,lt=(0,g.ZP)(v.k)`
  width: ${U};
  position: relative;
`,dt=(0,g.ZP)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Ut=(0,g.ZP)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ut=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:d})=>{const[c,m]=(0,e.useState)(!1),{formatMessage:u}=(0,N.Z)(),{modifiedData:h,onChangeParentCheckbox:x,onChangeSimpleCheckbox:D}=(0,G.$_)(),W=()=>{m(K=>!K)},j=()=>{m(!1)},R=C()(h,d.split(".."),{}),y=(0,e.useMemo)(()=>Object.keys(R).reduce((K,Q)=>(K[Q]=J()(R[Q],"conditions"),K),{}),[R]),{hasAllActionsSelected:k,hasSomeActionsSelected:L}=Te(y),Z=(0,e.useMemo)(()=>Ht(t,h,d),[t,h,d]),te=Z.some(({hasConditions:K})=>K);return e.createElement(Gt,{isActive:n},e.createElement(it,{isGrey:r},e.createElement(rt,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:d,onChange:x,onClick:l,someChecked:L,value:k,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(ue.Z,null):e.createElement(ae.Z,null))),e.createElement(v.k,{style:{flex:1}},Z.map(({actionId:K,hasConditions:Q,hasAllActionsSelected:H,hasSomeActionsSelected:he,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ve})=>Ie?se?e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(ct,null),e.createElement(w.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ve} ${i}`}),onValueChange:Se=>{x({target:{name:ve,value:Se}})},indeterminate:he,value:H})):e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(ct,null),e.createElement(w.C,{disabled:s,indeterminate:Q,name:ve,onValueChange:Se=>{D({target:{name:ve,value:Se}})},value:H})):e.createElement(Ue,{key:K}))),c&&e.createElement(V,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:Z,isFormDisabled:s,onClosed:j,onToggle:W})),e.createElement(Ut,null,e.createElement(oe,{onClick:W,hasConditions:te})))};ut.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Kt=ut,zt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,mt=()=>e.createElement(zt,null,"*"),Xt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),Yt=(0,g.ZP)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,wt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ye=t=>e.createElement(Yt,null,e.createElement(wt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Ye.defaultProps={fill:"primary200"},Ye.propTypes={fill:a().string};const Jt=(0,e.memo)(Ye),pt=(0,g.ZP)(v.k)`
  width: ${U};
  position: relative;
`,Qt=(0,g.ZP)(v.k)`
  height: ${Ce};
`,qt=(0,g.ZP)(p.x)`
  padding-left: ${31/16}rem;
`,_t=(0,g.ZP)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,en=(0,g.ZP)(v.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,tn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,N.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:h}=(0,G.$_)(),[x,D]=(0,e.useState)(null),W=R=>{D(y=>y===R?null:R)},j=(0,e.useMemo)(()=>x?t.find(({value:R})=>R===x):null,[x,t]);return e.createElement(qt,null,e.createElement(tn,null),t.map(({label:R,value:y,required:k,children:L},Z)=>{const te=Z+1<t.length,K=Array.isArray(L),Q=x===y;return e.createElement(_t,{key:y,isVisible:te},e.createElement(Qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(v.k,{style:{flex:1}},e.createElement(en,{level:r,isActive:Q,isCollapsable:K},e.createElement(ot,{alignItems:"center",isCollapsable:K,...K&&{onClick:()=>W(y),"aria-expanded":Q,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&W(y),tabIndex:0,role:"button"},title:R},e.createElement($.Z,{ellipsis:!0},ce()(R)),k&&e.createElement(mt,null),e.createElement(Ne,{$isActive:Q}))),e.createElement(v.k,{style:{flex:1}},i.map(({actionId:H,label:he,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ue,{key:H});const se=[...s.split(".."),H,"properties",d,...l.split(".."),y],ve=C()(m,se,!1);if(!L)return e.createElement(pt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${R} ${he}`}),onValueChange:Me=>{h({target:{name:se.join(".."),value:Me}})},value:ve}));const{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(pt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{key:he,disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${R} ${he}`}),onValueChange:Me=>{u({target:{name:se.join(".."),value:Me}})},value:Ve,indeterminate:Se}))})))),j&&Q&&e.createElement(p.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${y}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:d,recursiveLevel:r+1,childrenForm:j.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const nn=(0,e.memo)(we),sn=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),on=(t,n,r,s,i)=>{const d=sn(t).reduce((c,m)=>{const u=[...r.split(".."),m,"properties",s,i],h=C()(n,u,!1);return c[m]=h,c},{});return Te(d)},gt=(0,g.ZP)(v.k)`
  width: ${U};
  position: relative;
`,rn=(0,g.ZP)(v.k)`
  height: ${Ce};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,Je=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:m})=>{const{formatMessage:u}=(0,N.Z)(),[h,x]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:j,onChangeSimpleCheckbox:R}=(0,G.$_)(),y=h===s,k=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=k.length>0,Z=(0,e.useCallback)(()=>{L&&x(H=>H===s?null:s)},[L,s]),te=({target:{value:H}})=>{W(l,c,s,H)},{hasAllActionsSelected:K,hasSomeActionsSelected:Q}=(0,e.useMemo)(()=>on(d,D,l,c,s),[d,D,l,c,s]);return e.createElement(e.Fragment,null,e.createElement(rn,{alignItems:"center",isCollapsable:L,isActive:y,background:m?"neutral100":"neutral0"},e.createElement(v.k,null,e.createElement(rt,{onChange:te,onClick:Z,isCollapsable:L,isFormDisabled:r,label:n,someChecked:Q,value:K,isActive:y},i&&e.createElement(mt,null),e.createElement(Ne,{$isActive:y})),e.createElement(v.k,null,d.map(({label:H,isActionRelatedToCurrentProperty:he,actionId:Ie})=>{if(!he)return e.createElement(Ue,{key:H});const se=[...l.split(".."),Ie,"properties",c,s];if(!L){const Me=C()(D,se,!1);return e.createElement(gt,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:r,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),onValueChange:ts=>{R({target:{name:se.join(".."),value:ts}})},value:Me}))}const ve=C()(D,se,{}),{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(gt,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:r,name:se.join(".."),onValueChange:Me=>{j({target:{name:se.join(".."),value:Me}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),value:Ve,indeterminate:Se}))})))),y&&e.createElement(nn,{childrenForm:k,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};Je.defaultProps={childrenForm:[],required:!1},Je.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const an=(0,e.memo)(Je),ht=(0,g.ZP)(v.k)`
  width: ${U};
  flex-shrink: 0;
`,ln=(0,g.ZP)(v.k)`
  width: ${ye};
  height: ${Ce};
  flex-shrink: 0;
`,ft=({headers:t,label:n})=>{const{formatMessage:r}=(0,N.Z)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(v.k,null,e.createElement(ln,{alignItems:"center",paddingLeft:6},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};ft.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=ft,cn=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),un=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,yt=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>cn(t,l),[t,l]);return e.createElement(un,null,e.createElement(dn,{label:s,headers:d}),e.createElement(p.x,null,n.map(({children:c,label:m,value:u,required:h},x)=>e.createElement(an,{childrenForm:c,key:u,label:m,isFormDisabled:r,name:u,required:h,propertyActions:d,pathToData:i,propertyName:l,isOdd:x%2===0}))))};yt.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const mn=yt,pn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Ct=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:m})=>{const u=(0,e.useCallback)(()=>{d(n)},[n,d]),h=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(pn,{isActive:i},e.createElement(Kt,{availableActions:h,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:c}),i&&m.map(({label:x,value:D,children:W})=>e.createElement(mn,{availableActions:h,childrenForm:W,isFormDisabled:l,label:x,pathToData:c,propertyName:D,key:D})))};Ct.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const gn=Ct,Qe=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return s.map(({uid:c,label:m,properties:u},h)=>e.createElement(gn,{allActions:t,key:c,contentTypeName:c,label:m,isActive:i===c,isFormDisabled:n,index:h,onClickToggleCollapse:d,pathToData:`${r}..${c}`,properties:u}))};Qe.defaultProps={actions:[],subjects:[]},Qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const hn=(0,e.memo)(Qe),fn=t=>t.filter(({subjects:n})=>n&&n.length),yn=t=>t.map(({actionId:n})=>n),Cn=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=C()(n,[i,s],{}),d={[i]:ze(l)};r[s]?r[s]={...r[s],...d}:r[s]=d}),r),{}),vn=(t,n)=>{const r=yn(t),s=Cn(r,n);return Object.keys(s).reduce((l,d)=>(l[d]=Te(s[d]),l),{})},En=(0,g.ZP)(v.k)`
  width: ${U};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,N.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),d=(0,e.useMemo)(()=>fn(t),[t]),c=(0,e.useMemo)(()=>vn(d,i[r]),[i,d,r]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ye}},e.createElement(v.k,{gap:0},d.map(({label:m,actionId:u})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(w.C,{disabled:n,onValueChange:h=>{l(r,u,h)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:C()(c,[u,"hasAllActionsSelected"],!1),indeterminate:C()(c,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const bn=(0,e.memo)(qe),xn=(0,g.ZP)(p.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=F()([...s],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(bn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(hn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const Et=(0,e.memo)(vt);var Rn=o(47713);const bt=({children:t,value:n})=>e.createElement(Rn.$l.Provider,{value:n},t);bt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Pn=bt;var An=o(63128),Tn=o(27375),Sn=o(37362),xt=o(13539),Mn=o(9370),On=o(61585);const $n=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=C()(n,i,!1),d=C()(n,[...r,s.action,"conditions"],{}),c=ke(d).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Dn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:d}]=i;return s[l]=d,s},{});return ke(n).some(s=>s)},Ln=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,jn=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:h}=(0,N.Z)(),x=C()(c,i,{}),D=(0,e.useMemo)(()=>Object.keys(x).reduce((Z,te)=>(Z[te]=ze(x[te]),Z),{}),[x]),{hasAllActionsSelected:W,hasSomeActionsSelected:j}=Te(D),R=()=>{d(Z=>!Z)},y=()=>{d(!1)},k=$n(s,c,i),L=Dn(C()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(v.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(Ln,null),e.createElement(p.x,{paddingLeft:4},e.createElement(xt.X,{name:i.join(".."),disabled:n,onValueChange:Z=>{m({target:{name:i.join(".."),value:Z}})},indeterminate:j,value:W},h({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(v.k,{paddingTop:6,paddingBottom:6},e.createElement(Mn.r,{gap:2,style:{flex:1}},k.map(({checkboxName:Z,value:te,action:K,displayName:Q,hasConditions:H})=>e.createElement(On.P,{col:3,key:K},e.createElement(jn,{disabled:n,hasConditions:H},e.createElement(xt.X,{name:Z,disabled:n,onValueChange:he=>{u({target:{name:Z,value:he}})},value:te},Q))))),e.createElement(oe,{hasConditions:L,onClick:R}))),l&&e.createElement(V,{headerBreadCrumbs:[t,r],actions:k,isFormDisabled:n,onClosed:y,onToggle:R}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:m}=(0,N.Z)(),u=()=>{d(r)},h=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(An.U,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:ce()(h),description:`${m({id:"Settings.permissions.category"},{category:h})} ${n==="plugins"?"plugin":n}`}),e.createElement(Sn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:x,subCategoryName:D,subCategoryId:W})=>e.createElement(kn,{key:D,actions:x,categoryName:h,isFormDisabled:i,subCategoryName:D,pathToData:[...c,W]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const In=_e,Pt=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=d=>{i(d===s?null:d)};return e.createElement(p.x,{padding:6,background:"neutral0"},r.map(({category:d,categoryId:c,childrenForm:m},u)=>e.createElement(In,{key:d,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===d,isWhite:u%2===1,name:d,onOpenCategory:l,pathToData:[n,c]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const At=Pt;var Bn=o(82492),Zn=o.n(Bn),Fn=o(36968),ge=o.n(Fn);const Tt=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),St=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),Mt=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Mt(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Nn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:d})=>d===i);if(l){const d=C()(r,["properties",l.value],[]),c=Mt(l,d);s.properties[i]=c}return s},{properties:{}}),Wn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),Ot=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const d=l.subjects,c=Wn(t,d);if(S()(c))return i;const m=Object.keys(c).reduce((u,h)=>{const{actionId:x,applyToProperties:D}=l,R=c[h].properties.map(({value:Z})=>Z).every(Z=>(D||[]).indexOf(Z)===-1),y=Tt(s,x,h),k=St(r,C()(y,"conditions",[]));if(S()(D)||R)return ge()(u,[h,x],{properties:{enabled:y!==void 0},conditions:k}),u;const L=Nn(D,c[h],y);return ge()(u,[h,x],{...L,conditions:k}),u},{});return Zn()(i,m)},{}),Vn=(t,n,r)=>t.reduce((s,i)=>{const l=Tt(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:St(n,l?.conditions??[])},s},{}),Hn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Vn(i.actions,n,r),s),{}),$t=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const d=Hn(l,n,r);return s[i]=d,s},{}),Dt=t=>t.split(" ").join("-"),Lt=(t,n)=>Object.entries(de()(t,n)).map(([r,s])=>({category:r,categoryId:Dt(r),childrenForm:Object.entries(de()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Dt(i),actions:l}))})),Gn=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:s,singleTypes:i,plugins:Lt(l,"plugin"),settings:Lt(d,"category")},m={collectionTypes:Ot(s,s.actions||[],r,n),singleTypes:Ot(i,i.actions||[],r,n),plugins:$t(c.plugins,r,n),settings:$t(c.settings,r,n)};return{initialData:m,modifiedData:m,layouts:c}};var Un=o(50361),et=o.n(Un);const jt=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(be()(s)&&!A()(s,"conditions"))return{...n,[r]:jt(s)};if(be()(s)&&A()(s,"conditions")&&!ke(J()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),tt=jt,kt=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):be()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ge=kt,Kn={initialData:{},modifiedData:{},layouts:{}},zn=(t,n)=>(0,q.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,d=["modifiedData",s];Object.keys(C()(t,d)).forEach(c=>{const m=C()(t,[...d,c,i],void 0);if(m){let u=Ge(m,l);if(!l&&u.conditions){const h=Ge(u.conditions,!1);u={...u,conditions:h}}ge()(r,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:d}=n;let c=et()(t.modifiedData);const m=s.split(".."),u=C()(c,m,{});Object.keys(u).forEach(h=>{if(A()(u[h],`properties.${i}`)){const x=C()(u,[h,"properties",i,l]),D=[...m,h,"properties",i,l];if(!be()(x))ge()(c,D,d);else{const W=Ge(x,d);ge()(c,D,W)}}}),d||(c=tt(c)),ge()(r,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);ge()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),ge()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let d=et()(t.modifiedData);const c=C()(d,l,{}),m=Ge(c,i);ge()(d,l,m),i||(d=tt(d)),ge()(r,["modifiedData"],d);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:nt(r),properties:{}}},Yn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=Xn(l);return i.push(c),i},[]);return[...n,...s]},[]),It=t=>Object.values(t).reduce((n,r)=>{const s=Yn(r);return[...n,...s]},[]),Bt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return be()(l)?[...r,...Bt(l,`${n}${i}.`)]:(l&&!be()(l)&&r.push(`${n}${i}`),r)},[]),wn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=Bt(c),i},{action:t,subject:n,conditions:nt(r),properties:{}}),Jn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:nt(r)}),Qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,d]=i;if(!ke(d).some(u=>u))return s;if(!d?.properties?.enabled){const u=wn(l,t,d);return[...s,u]}if(!d.properties.enabled)return s;const m=Jn(l,t,d);return s.push(m),s},[]),Zt=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,d=Qn(i,l);return[...r,...d]},[]),qn=t=>{const n=It(t.plugins),r=It(t.settings),s=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...r,...s,...i]},_n=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(zn,Kn,()=>Gn(t,r)),{formatMessage:m}=(0,N.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const j=(0,O.e5)(i.collectionTypes,d.collectionTypes),R=(0,O.e5)(i.singleTypes,d.singleTypes),y={...j,...R};let k;return S()(y)?k=!1:k=Object.values(y).some(L=>Object.values(L).some(Z=>A()(Z,"conditions"))),{permissionsToSend:qn(d),didUpdateConditions:k}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(j,R,y,k)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:j,propertyName:R,rowName:y,value:k})},h=(j,R,y)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:j,actionId:R,value:y})},x=j=>{c({type:"ON_CHANGE_CONDITIONS",conditions:j})},D=(0,e.useCallback)(({target:{name:j,value:R}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:j,value:R})},[]),W=(0,e.useCallback)(({target:{name:j,value:R}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:j,value:R})},[]);return e.createElement(Pn,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:x,onChangeSimpleCheckbox:D,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:h}},e.createElement(f.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(P.m,null,_n.map(j=>e.createElement(P.O,{key:j.id},m({id:j.labelId,defaultMessage:j.defaultMessage})))),e.createElement(E.n,{style:{position:"relative"}},e.createElement(E.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(At,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(At,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const es=(0,e.memo)(st)},92100:(z,B,o)=>{"use strict";o.r(B),o.d(B,{default:()=>$});var e=o(53547),f=o(56127),P=o(86706),E=o(55168),O=o(99369),T=o(57713),A=o(79371),b=o(75878),S=o(19442),X=o(26789),a=o(50781),N=o(60793),p=o(94649),M=o(27361),F=o.n(M),g=o(86896),v=o(35650),w=o(18280),ue=o(78549),ae=o(9370),ie=o(61585),C=o(28469),le=o(20603),J=o(45697),G=o.n(J);const _=({disabled:ne,role:Y,values:I,errors:q,onChange:pe,onBlur:de})=>{const{formatMessage:ee}=(0,g.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(b.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(ue.Z,{fontWeight:"bold"},Y?Y.name:ee({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(ue.Z,{textColor:"neutral500",variant:"pi"},Y?Y.description:ee({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},ee({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(ae.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(C.o,{disabled:ne,name:"name",error:q.name&&ee({id:q.name}),label:ee({id:"global.name",defaultMessage:"Name"}),onChange:pe,onBlur:de,value:I.name||""})),e.createElement(ie.P,{col:6},e.createElement(le.g,{disabled:ne,label:ee({id:"global.description",defaultMessage:"Description"}),id:"description",error:q.name&&ee({id:q.name}),onChange:pe,onBlur:de},I.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const xe=_;var me=o(87561);const oe=me.Ry().shape({name:me.Z_().required(f.I0.required)}),Ee=()=>{const ne=(0,f.lm)(),{formatMessage:Y}=(0,g.Z)(),{params:{id:I}}=(0,E.$B)("/settings/roles/:id"),[q,pe]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:ee,unlockApp:ce}=(0,f.o1)(),{trackUsage:Be}=(0,f.rS)(),{isLoading:Ae,data:Ze}=(0,v.U_)(I),{role:fe,permissions:$e,isLoading:De,onSubmitSucceeded:Fe}=(0,v.Dq)(I),{put:Le}=(0,f.kY)(),He=async re=>{try{ee(),pe(!0);const{permissionsToSend:V,didUpdateConditions:U}=de.current.getPermissions();await Le(`/admin/roles/${I}`,re),fe.code!=="strapi-super-admin"&&(await Le(`/admin/roles/${I}/permissions`,{permissions:V}),U&&Be("didUpdateConditions")),de.current.setFormAfterSubmit(),Fe({name:re.name,description:re.description}),ne({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const U=F()(V,"response.payload.message","An error occured"),ye=F()(V,"response.payload.data.permissions[0]",U);ne({type:"warning",message:ye})}finally{pe(!1),ce()}},je=fe.code==="strapi-super-admin";return e.createElement(T.o,null,e.createElement(f.SL,{name:"Roles"}),e.createElement(p.J9,{enableReinitialize:!0,initialValues:{name:fe.name,description:fe.description},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:V,errors:U,handleChange:ye,handleBlur:Ce})=>e.createElement("form",{onSubmit:re},e.createElement(A.T,{primaryAction:e.createElement(b.k,{gap:2},e.createElement(S.z,{disabled:fe.code==="strapi-super-admin",onClick:re,loading:q,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(f.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(X.D,null,e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(xe,{isLoading:De,disabled:je,errors:U,values:V,onChange:ye,onBlur:Ce,role:fe}),!Ae&&!De?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(w.Z,{isFormDisabled:je,permissions:$e,ref:de,layout:Ze})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.dO,null)))))))},$=()=>{const ne=(0,P.v9)(O._),{isLoading:Y,allowedActions:{canRead:I,canUpdate:q}}=(0,f.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(f.dO,null):!I&&!q?e.createElement(E.l_,{to:"/"}):e.createElement(Ee,null)}},44174:z=>{function B(o,e,f,P){for(var E=-1,O=o==null?0:o.length;++E<O;){var T=o[E];e(P,T,f(T),o)}return P}z.exports=B},81119:(z,B,o)=>{var e=o(89881);function f(P,E,O,T){return e(P,function(A,b,S){E(T,A,O(A),S)}),T}z.exports=f},55189:(z,B,o)=>{var e=o(44174),f=o(81119),P=o(67206),E=o(1469);function O(T,A){return function(b,S){var X=E(b)?e:f,a=A?A():{};return X(b,T,P(S,2),a)}}z.exports=O},42348:(z,B,o)=>{var e=o(21078),f=1/0;function P(E){var O=E==null?0:E.length;return O?e(E,f):[]}z.exports=P},7739:(z,B,o)=>{var e=o(89465),f=o(55189),P=Object.prototype,E=P.hasOwnProperty,O=f(function(T,A,b){E.call(T,b)?T[b].push(A):e(T,b,[A])});z.exports=O},63128:(z,B,o)=>{"use strict";o.d(B,{U:()=>N,y:()=>X});var e=o(2790),f=o(53547),P=o(88972),E=o(7535),O=o(73879),T=o(78549),A=o(75878),b=o(50781);const S=({theme:p,expanded:M,variant:F,disabled:g,error:v})=>v?`1px solid ${p.colors.danger600} !important`:g?`1px solid ${p.colors.neutral150}`:M?`1px solid ${p.colors.primary600}`:F==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,X=(0,P.ZP)(T.Z)``,a=(0,P.ZP)(b.x)`
  border: ${S};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${X} {
      color: ${({theme:p,expanded:M})=>M?void 0:p.colors.primary700};
    }

    ${T.Z} {
      color: ${({theme:p,expanded:M})=>M?void 0:p.colors.primary600};
    }

    & > ${A.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,N=({children:p,disabled:M=!1,error:F,expanded:g=!1,hasErrorMessage:v=!0,id:w,onToggle:ue,toggle:ae,size:ie="M",variant:C="primary",shadow:le})=>{const J=(0,O.M)(w),G=f.useMemo(()=>({expanded:g,onToggle:ue,toggle:ae,id:J,size:ie,variant:C,disabled:M}),[M,g,J,ue,ie,ae,C]);return(0,e.jsxs)(E.S.Provider,{value:G,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:M,"aria-disabled":M,expanded:g,hasRadius:!0,variant:C,error:F,shadow:le,children:p}),F&&v&&(0,e.jsx)(b.x,{paddingTop:1,children:(0,e.jsx)(T.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},37362:(z,B,o)=>{"use strict";o.d(B,{v:()=>E});var e=o(2790),f=o(7535),P=o(50781);const E=({children:O,...T})=>{const{expanded:A,id:b}=(0,f.A)();if(!A)return null;const S=`accordion-content-${b}`,X=`accordion-label-${b}`,a=`accordion-desc-${b}`;return(0,e.jsx)(P.x,{role:"region",id:S,"aria-labelledby":X,"aria-describedby":a,...T,children:O})}},7535:(z,B,o)=>{"use strict";o.d(B,{A:()=>P,S:()=>f});var e=o(53547);const f=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),P=()=>(0,e.useContext)(f)},27375:(z,B,o)=>{"use strict";o.d(B,{B:()=>p});var e=o(2790),f=o(21514),P=o(88972),E=o(63128),O=o(7535);const T=({expanded:M,disabled:F,variant:g})=>{let v="neutral100";return M?v="primary100":F?v="neutral150":g==="primary"&&(v="neutral0"),v};var A=o(90139),b=o(80907),S=o(75878),X=o(78549);const a=(0,P.ZP)(A.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:M,expanded:F})=>F?M.colors.primary600:M.colors.neutral500};
    }
  }
`,N=(0,P.ZP)(S.k)`
  min-height: ${({theme:M,size:F})=>M.sizes.accordions[F]};
  border-radius: ${({theme:M,expanded:F})=>F?`${M.borderRadius} ${M.borderRadius} 0 0`:M.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:M})=>M.colors.primary600};
      }
    }
  }
`,p=({title:M,description:F,as:g="span",togglePosition:v="right",action:w,...ue})=>{const{onToggle:ae,toggle:ie,expanded:C,id:le,size:J,variant:G,disabled:_}=(0,O.A)(),xe=`accordion-content-${le}`,me=`accordion-label-${le}`,Re=`accordion-desc-${le}`,oe=J==="M"?6:4,Pe=J==="M"?oe:oe-2,Ee=T({expanded:C,disabled:_,variant:G}),Oe={as:g,fontWeight:J==="S"?"bold":void 0,id:me,textColor:C?"primary600":"neutral700",ellipsis:!0,variant:J==="M"?"delta":void 0},$=C?"primary600":"neutral600",ne=C?"primary200":"neutral200",Y=J==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{_||(ie&&!ae?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ie()):ae&&ae())},q=(0,e.jsx)(S.k,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:C?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,e.jsx)(b.J,{as:f.Z,width:J==="M"?`${11/16}rem`:`${8/16}rem`,color:C?"primary600":"neutral600"})});return(0,e.jsx)(N,{paddingBottom:Pe,paddingLeft:oe,paddingRight:oe,paddingTop:Pe,background:Ee,expanded:C,size:J,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(S.k,{gap:3,flex:1,maxWidth:"100%",children:[v==="left"&&q,(0,e.jsx)(a,{onClick:I,"aria-disabled":_,"aria-expanded":C,"aria-controls":xe,"aria-labelledby":me,"data-strapi-accordion-toggle":!0,expanded:C,type:"button",flex:1,minWidth:0,...ue,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(E.y,{...Oe,children:M}),F&&(0,e.jsx)(X.Z,{as:"p",id:Re,textColor:$,children:F})]})}),v==="right"&&(0,e.jsxs)(S.k,{gap:3,children:[q,w]}),v==="left"&&w]})})}},31439:(z,B,o)=>{"use strict";o.d(B,{Q:()=>E});var e=o(2790),f=o(88972),P=o(55482);const E=({options:T,...A})=>(0,e.jsx)(P.NU,{...A,children:T.map(b=>"children"in b?(0,e.jsx)(P.Ab,{label:b.label,values:b.children.map(S=>S.value.toString()),children:b.children.map(S=>(0,e.jsx)(O,{value:S.value,children:S.label},S.value))},b.label):(0,e.jsx)(P.ML,{value:b.value,children:b.label},b.value))}),O=(0,f.ZP)(P.ML)`
  padding-left: ${({theme:T})=>T.spaces[7]};
`},63321:(z,B,o)=>{"use strict";o.d(B,{O:()=>S});var e=o(53547),f=o(45697),P=o(88972),E=o(41580),O=o(75515);const T=()=>e.createElement(E.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1},e.createElement(O.Z,{variant:"pi",textColor:"neutral500"},"/"));T.displayName="Divider";var A=o(11047);const b=(0,P.ZP)(A.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:X})=>`calc(-1*${X.spaces[2]})`};
  }
`,S=({label:X,children:a,...N})=>{const p=e.Children.toArray(a);return e.createElement(E.x,{"aria-label":X,...N},e.createElement(b,{as:"ol",horizontal:!0},e.Children.map(p,(M,F)=>{const g=p.length>1&&F+1<p.length;return e.createElement(A.k,{inline:!0,as:"li"},M,g&&e.createElement(T,null))})))};S.displayName="Breadcrumbs",S.propTypes={children:f.oneOfType([f.arrayOf(f.node),f.node]).isRequired,label:f.string.isRequired}},36773:(z,B,o)=>{"use strict";o.d(B,{$:()=>O});var e=o(53547),f=o(45697),P=o(41580),E=o(75515);const O=({children:T,isCurrent:A,...b})=>e.createElement(P.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1},e.createElement(E.Z,{variant:"pi",textColor:"neutral800",fontWeight:A?"bold":"normal","aria-current":A,...b},T));O.displayName="Crumb",O.defaultProps={isCurrent:!1},O.propTypes={children:f.node.isRequired,isCurrent:f.bool}}}]);
