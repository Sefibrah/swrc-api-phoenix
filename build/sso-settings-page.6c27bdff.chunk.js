"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[302],{40316:(Q,C,e)=>{e.r(C),e.d(C,{SingleSignOn:()=>l,default:()=>d});var t=e(67294),a=e(68547),u=e(85018),I=e(17034),P=e(53979),$=e(49066),F=e(29728),b=e(185),A=e(7681),B=e(75515),L=e(20707),j=e(91216),K=e(82562),D=e(11276),E=e(74571),W=e(97132),Z=e(18446),k=e.n(Z),H=e(38683),S=e(48474),O=e(87751),g=e(53209);const G=g.Ry().shape({autoRegister:g.Xg().required(a.translatedErrors.required),defaultRole:g.nK().when("autoRegister",(n,o)=>n?o.required(a.translatedErrors.required):o.nullable())}),f={...O.Z.settings.sso,readRoles:O.Z.settings.roles.read},l=()=>{const{formatMessage:n}=(0,W.useIntl)(),{isLoading:o,allowedActions:{canUpdate:i,canReadRoles:R}}=(0,a.useRBAC)(f),[{formErrors:c,initialData:y,isLoading:p,modifiedData:h,showHeaderButtonLoader:m},z,{handleChange:v,handleSubmit:M}]=(0,S.G4)((0,H.IF)("providers/options"),G,()=>{},["autoRegister","defaultRole"]),{roles:J}=(0,S.bF)(R);(0,a.useFocusWhenNavigate)();const N=o||p;(0,t.useEffect)(()=>{if(c.defaultRole){const s='[name="defaultRole"]';document.querySelector(s).focus()}},[c]);const T=k()(y,h);return t.createElement(I.A,null,t.createElement(a.SettingsPageTitle,{name:"SSO"}),t.createElement(b.o,{tabIndex:-1},t.createElement("form",{onSubmit:s=>{if(T){s.preventDefault();return}M(s)}},t.createElement(P.T,{primaryAction:t.createElement(F.z,{"data-testid":"save-button",disabled:T,loading:m,startIcon:t.createElement(u.Z,null),type:"submit",size:"L"},n({id:"global.save",defaultMessage:"Save"})),title:n({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:n({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement($.D,null,N?t.createElement(a.LoadingIndicatorPage,null):t.createElement(A.K,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(B.Z,{variant:"delta",as:"h2"},n({id:"global.settings",defaultMessage:"Settings"})),t.createElement(D.r,{gap:4},t.createElement(E.P,{col:6,m:6,s:12},t.createElement(L.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!i,checked:h.autoRegister,hint:n({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:n({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:n({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:n({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{v({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(E.P,{col:6,m:6,s:12},t.createElement(j.P,{disabled:!i,hint:n({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:c.defaultRole?n({id:c.defaultRole.id,defaultMessage:c.defaultRole.id}):"",label:n({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{v({target:{name:"defaultRole",value:s}})},placeholder:n({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:h.defaultRole},J.map(({id:s,name:x})=>t.createElement(K.W,{key:s,value:s.toString()},x))))))))))},d=()=>t.createElement(a.CheckPagePermissions,{permissions:f.main},t.createElement(l,null))},20707:(Q,C,e)=>{e.d(C,{s:()=>f});var t=e(67294),a=e(45697),u=e(71893),I=e(54574),P=e(19270),$=e(63428),F=e(96404),b=e(11047),A=e(2504),B=e(39785),L=e(75228),j=e(41580),K=e(85893),D=e(88262),E=e(75515),W=e(15585),Z=e(63237);const k=u.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,H=(0,u.default)(j.x)`
  cursor: ${({disabled:l})=>l?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,W.k3)()}
`,S=(0,u.default)(b.k).attrs({hasRadius:!0})`
  background-color: ${({theme:l,checked:r,disabled:d})=>r?d?l.colors.neutral200:l.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:l,checked:r,disabled:d})=>r&&r!==null?d?l.colors.neutral300:l.colors.neutral200:d?l.colors.neutral150:l.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:l})=>`${l==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:l})=>`${l==="S"?"2px":"6px"}`};
`,O=u.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,g=t.forwardRef(({size:l,onLabel:r,offLabel:d,children:n,checked:o,disabled:i,onChange:R,...c},y)=>{const{error:p,hint:h,id:m,name:z,required:v}=(0,D.U)(),M="neutral600";let J=!o&&o!==null?"danger700":M,N=o?"primary600":M;const T=x=>{i||R(x)};let s;return p?s=`${m}-error`:h&&(s=`${m}-hint`),t.createElement(k,null,t.createElement(Z.T,null,n),t.createElement(H,{hasRadius:!0,disabled:i,padding:1,display:"flex",background:i?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},t.createElement(S,{size:l,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:o===null?!1:!o,disabled:i},t.createElement(E.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":J},d)),t.createElement(S,{size:l,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:o===null?!1:o,disabled:i},t.createElement(E.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":N},r)),t.createElement(O,{type:"checkbox","aria-disabled":i,"aria-describedby":s,onChange:x=>T(x),name:z,ref:y,"aria-required":v,...c,checked:!(o===null||!o)})))});g.displayName="ToggleCheckbox",g.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},g.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(L.J.input))};const U=(0,u.default)(I.g)`
  max-width: 320px;
`,G=(0,u.default)(B.A)`
  align-self: flex-end;
  margin-left: auto;
`,f=({disabled:l,size:r,error:d,hint:n,label:o,name:i,labelAction:R,required:c,id:y,onClear:p,clearLabel:h,checked:m,...z})=>{const v=(0,A.M)(y);return t.createElement(U,{name:i,hint:n,error:d,id:v,required:c},t.createElement(b.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(b.k,null,t.createElement(P.Q,{action:R},o),h&&p&&m!==null&&!l&&t.createElement(G,{onClick:p},h)),t.createElement(g,{id:v,size:r,checked:m,disabled:l,...z},o),t.createElement($.J,null),t.createElement(F.c,null)))};f.displayName="ToggleInput",f.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},f.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(L.J.input))}}}]);
