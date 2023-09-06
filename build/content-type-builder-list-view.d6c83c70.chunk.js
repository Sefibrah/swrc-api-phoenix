"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5905],{76761:(q,A,n)=>{n.r(A),n.d(A,{default:()=>ct});var e=n(67294),l=n(68547),Z=n(96315),g=n(67109),k=n(85018),_=n(4585),N=n(29728),G=n(11047),M=n(7681),x=n(41580),K=n(53979),le=n(49066),U=n(27361),r=n.n(U),v=n(18721),f=n.n(v),p=n(18446),T=n.n(p),S=n(11700),W=n.n(S),I=n(97132),J=n(49656),ee=n(45697),o=n.n(ee),$=n(75515),ye=n(11057),he=n(63985),Ee=n(47144),te=n(18374),ke=n(49386),ve=n(26478),H=n(13588),C=n(71893),b=n(5002),X=n(72899),Ie=n(70968);const Fe=(0,C.default)(X.Flex)`
  border-radius: 50%;
  color: ${({theme:t,isActive:a})=>a?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function re({isActive:t}){return e.createElement(Fe,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}re.defaultProps={isActive:!1},re.propTypes={isActive:o().bool};const be=(0,C.default)(X.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,l.pxToRem)(8)};

  svg {
    width: ${(0,l.pxToRem)(10)};
    height: ${(0,l.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Pe=(0,C.default)(X.Flex)`
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${be} {
      display: block;
    }

    ${X.Typography} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function ie({component:t,dzName:a,index:i,isActive:c,isInDevelopmentMode:m,onClick:s}){const{modifiedData:y,removeComponentFromDynamicZone:L}=(0,H.Z)(),{schema:{displayName:w}}=r()(y,["components",t],{schema:{}}),R=h=>{h.stopPropagation(),L(a,i)};return e.createElement(Pe,{as:"button",alignItems:"center",direction:"column",className:c?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:s},e.createElement(re,{isActive:c}),e.createElement(X.Box,{marginTop:1,maxWidth:"100%"},e.createElement(X.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},w)),m&&e.createElement(be,{as:"button",onClick:R,type:"button"},e.createElement(Ie.default,null)))}ie.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},ie.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Se=ie,Te=C.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,l.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,l.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:i})=>a?`background-color: ${i.colors.primary200};`:t?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function se({customRowComponent:t,component:a,isFromDynamicZone:i,isNestedInDZComponent:c,firstLoopComponentUid:m}){const{modifiedData:s}=(0,H.Z)(),{schema:{attributes:y}}=r()(s,["components",a],{schema:{attributes:[]}});return e.createElement(Te,{isChildOfDynamicZone:i,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Ze,{customRowComponent:t,items:y,targetUid:a,firstLoopComponentUid:m||a,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:c,isSub:!0,secondLoopComponentUid:m?a:null})))}se.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},se.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ce=se,Oe=(0,C.default)(Z.default)`
  width: ${(0,l.pxToRem)(32)};
  height: ${(0,l.pxToRem)(32)};
  padding: ${(0,l.pxToRem)(9)};
  border-radius: ${(0,l.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ze=(0,C.default)(x.x)`
  height: ${(0,l.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ne=(0,C.default)(M.K)`
  width: 100%;
  overflow-x: auto;
`,Ue=(0,C.default)(x.x)`
  padding-top: ${(0,l.pxToRem)(90)};
`,We=(0,C.default)(M.K)`
  flex-shrink: 0;
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function ce({customRowComponent:t,components:a,addComponent:i,name:c,targetUid:m}){const{isInDevelopmentMode:s}=(0,H.Z)(),[y,L]=(0,e.useState)(0),{formatMessage:w}=(0,I.useIntl)(),R=d=>{y!==d&&L(d)},h=()=>{i(c)};return e.createElement(Te,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(ze,{paddingLeft:8},e.createElement(Ne,{horizontal:!0,spacing:2},s&&e.createElement("button",{type:"button",onClick:h},e.createElement(We,{spacing:1},e.createElement(Oe,null),e.createElement($.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},w({id:(0,b.Z)("button.component.add"),formatMessage:"Add a component"})))),a.map((d,u)=>e.createElement(Se,{key:d,dzName:c,index:u,component:d,isActive:y===u,isInDevelopmentMode:s,onClick:()=>R(u)})))),e.createElement(Ue,null,a.map((d,u)=>{const E={customRowComponent:t,component:d};return e.createElement(x.x,{tabId:`${u}`,key:d,style:{display:y===u?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ce,{...E,isFromDynamicZone:!0,targetUid:m,key:d}))))}))))}ce.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ce.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const je=ce,Ve=(0,C.default)(x.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,Ke=(0,C.default)(x.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,He=(0,C.default)(x.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,xe=({children:t,icon:a,color:i,...c})=>e.createElement(He,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...c},e.createElement(G.k,null,e.createElement(Ke,{color:i,"aria-hidden":!0,background:`${i}200`},a),e.createElement(x.x,{paddingLeft:3},e.createElement($.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`},t))));xe.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Xe=xe;function de({addComponentToDZ:t,customRowComponent:a,editTarget:i,firstLoopComponentUid:c,isFromDynamicZone:m,isMain:s,isNestedInDZComponent:y,isSub:L,items:w,secondLoopComponentUid:R,targetUid:h}){const{formatMessage:d}=(0,I.useIntl)(),{trackUsage:u}=(0,l.useTracking)(),{isInDevelopmentMode:E,modifiedData:j,isInContentTypeView:F}=(0,H.Z)(),{onOpenModalAddField:O}=(0,ve.Z)(),D=()=>{u("hasClickedCTBAddFieldBanner"),O({forTarget:i,targetUid:h})};return h?w.length===0&&s?e.createElement(ye.i,{colCount:2,rowCount:2},e.createElement(he.h,null,e.createElement(Ee.Tr,null,e.createElement(te.Th,null,e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{action:e.createElement(N.z,{onClick:D,size:"L",startIcon:e.createElement(Z.default,null),variant:"secondary"},d({id:(0,b.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:F?{id:(0,b.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,b.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ve,null,e.createElement(x.x,{paddingLeft:6,paddingRight:s?6:0,...s&&{style:{overflowX:"auto"}}},e.createElement("table",null,s&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,w.map(P=>{const{type:V}=P,Q=a;return e.createElement(e.Fragment,{key:P.name},e.createElement(Q,{...P,isNestedInDZComponent:y,targetUid:h,editTarget:i,firstLoopComponentUid:c,isFromDynamicZone:m,secondLoopComponentUid:R}),V==="component"&&e.createElement(Ce,{...P,customRowComponent:a,targetUid:h,isNestedInDZComponent:m,editTarget:i,firstLoopComponentUid:c}),V==="dynamiczone"&&e.createElement(je,{...P,customRowComponent:a,addComponent:t,targetUid:h}))})))),s&&E&&e.createElement(ke.c,{icon:e.createElement(Z.default,null),onClick:D},d({id:(0,b.Z)(`form.button.add.field.to.${j.contentType?j.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})),L&&E&&e.createElement(Xe,{icon:e.createElement(Z.default,null),onClick:D,color:m?"primary":"neutral"},d({id:(0,b.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(ye.i,{colCount:2,rowCount:2},e.createElement(he.h,null,e.createElement(Ee.Tr,null,e.createElement(te.Th,null,e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{colSpan:2,content:{id:(0,b.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}de.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},de.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const Ze=de;var Re=n(12028),Me=n(85893);const Ge=t=>(0,Me.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,Me.jsx)("path",{d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z",fill:"#8E8EA9"})}),Je=Ge;var Qe=n(20022);const Ye=(0,C.default)(x.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,qe=C.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,$e=t=>e.createElement(Ye,null,e.createElement(qe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));$e.propTypes={color:o().string.isRequired};const _e=$e,me=({content:t})=>W()(t);me.defaultProps={content:null},me.propTypes={content:o().string};const et=me,tt=(0,C.default)(x.x)`
  position: relative;
`;var nt=n(75104);const pe=({type:t,customField:a,repeatable:i})=>{const{formatMessage:c}=(0,I.useIntl)();let m=t;return["integer","biginteger","float","decimal"].includes(t)?m="number":["string"].includes(t)&&(m="text"),a?e.createElement($.Z,null,c({id:(0,b.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement($.Z,null,c({id:(0,b.Z)(`attribute.${m}`),defaultMessage:t}),"\xA0",i&&c({id:(0,b.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};pe.defaultProps={customField:null,repeatable:!1},pe.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const ot=pe;function ue({configurable:t,customField:a,editTarget:i,firstLoopComponentUid:c,isFromDynamicZone:m,name:s,onClick:y,relation:L,repeatable:w,secondLoopComponentUid:R,target:h,targetUid:d,type:u}){const{contentTypes:E,isInDevelopmentMode:j,removeAttribute:F}=(0,H.Z)(),{formatMessage:O}=(0,I.useIntl)(),D=u==="relation"&&L.includes("morph"),P=["integer","biginteger","float","decimal"].includes(u)?"number":u,V=r()(E,[h],{}),Q=r()(V,["schema","displayName"],""),Y=r()(V,"plugin"),fe=h?"relation":P,ne=()=>{D||t!==!1&&y(i,R||c||d,s,u,a)};let z;return R&&c?z=2:c?z=1:z=0,e.createElement(tt,{as:"tr",...(0,l.onRowClick)({fn:ne,condition:j&&t&&!D})},e.createElement("td",{style:{position:"relative"}},z!==0&&e.createElement(_e,{color:m?"primary200":"neutral150"}),e.createElement(M.K,{paddingLeft:2,spacing:4,horizontal:!0},e.createElement(nt.Z,{type:fe,customField:a}),e.createElement($.Z,{fontWeight:"bold"},s))),e.createElement("td",null,h?e.createElement($.Z,null,O({id:(0,b.Z)(`modelPage.attribute.${D?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(et,{content:Q}),"\xA0",Y&&`(${O({id:(0,b.Z)("from"),defaultMessage:"from"})}: ${Y})`)):e.createElement(ot,{type:u,customField:a,repeatable:w})),e.createElement("td",null,j?e.createElement(G.k,{justifyContent:"flex-end",...l.stopPropagation},t?e.createElement(M.K,{horizontal:!0,spacing:1},!D&&e.createElement(Re.h,{onClick:ne,label:`${O({id:"app.utils.edit",defaultMessage:"Edit"})} ${s}`,noBorder:!0,icon:e.createElement(_.Z,null)}),e.createElement(Re.h,{onClick:oe=>{oe.stopPropagation(),F(i,s,R||c||"")},label:`${O({id:"global.delete",defaultMessage:"Delete"})} ${s}`,noBorder:!0,icon:e.createElement(Qe.default,null)})):e.createElement(Je,null)):e.createElement(x.x,{height:(0,l.pxToRem)(32)})))}ue.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},ue.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const at=(0,e.memo)(ue),lt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var rt=n(98432);const it={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},ge=({disabled:t,isTemporary:a,isInContentTypeView:i,contentTypeKind:c,targetUid:m})=>{const{formatMessage:s}=(0,I.useIntl)(),{push:y}=(0,J.useHistory)(),{collectionTypesConfigurations:L,componentsConfigurations:w,singleTypesConfigurations:R}=it,h=s({id:"content-type-builder.form.button.configure-view"});let d=L;const u=()=>(a||y(i?`/content-manager/collectionType/${m}/configurations/edit`:`/content-manager/components/${m}/configurations/edit`),!1);return i&&c==="singleType"&&(d=R),i||(d=w),e.createElement(l.CheckPermissions,{permissions:d},e.createElement(N.z,{startIcon:e.createElement(rt.Z,null),variant:"tertiary",onClick:u,disabled:a||t},h))};ge.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},ge.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const st=(0,e.memo)(ge),ct=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:i,isInContentTypeView:c,submitData:m}=(0,H.Z)(),{formatMessage:s}=(0,I.useIntl)(),{trackUsage:y}=(0,l.useTracking)(),L=(0,J.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:w,onOpenModalAddField:R,onOpenModalEditField:h,onOpenModalEditSchema:d,onOpenModalEditCustomField:u}=(0,ve.Z)(),E=c?"contentType":"component",j=[E,"schema","attributes"],F=r()(a,[E,"uid"]),O=r()(a,[E,"isTemporary"],!1),D=r()(a,[E,"schema","kind"],null),P=r()(a,j,[]),V=f()(t,[E,"plugin"]),Q=!T()(a,t),Y=c?"contentType":"component",fe=B=>{w({dynamicZoneTarget:B,targetUid:F})},ne=async(B,we,Le,Ae,De)=>{const Be=lt(Ae);De?u({forTarget:B,targetUid:we,attributeName:Le,attributeType:Be,customFieldUid:De}):h({forTarget:B,targetUid:we,attributeName:Le,attributeType:Be,step:Ae==="component"?"2":null})};let z=r()(a,[E,"schema","displayName"],"");const oe=r()(a,[E,"schema","kind"],""),ae=L?.params.currentUID==="create-content-type";!z&&ae&&(z=s({id:(0,b.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const dt=()=>{const B=oe||E;B==="collectionType"&&y("willEditNameOfContentType"),B==="singleType"&&y("willEditNameOfSingleType"),d({modalType:E,forTarget:E,targetUid:F,kind:B})};return e.createElement(e.Fragment,null,e.createElement(J.Prompt,{message:s({id:(0,b.Z)("prompt.unsaved")}),when:Q}),e.createElement(K.T,{id:"title",primaryAction:i&&e.createElement(M.K,{horizontal:!0,spacing:2},!ae&&e.createElement(N.z,{startIcon:e.createElement(Z.default,null),variant:"secondary",onClick:()=>{R({forTarget:Y,targetUid:F})}},s({id:(0,b.Z)("button.attributes.add.another")})),e.createElement(N.z,{startIcon:e.createElement(k.Z,null),onClick:()=>m(),type:"submit",disabled:T()(a,t)},s({id:"global.save",defaultMessage:"Save"}))),secondaryAction:i&&!V&&!ae&&e.createElement(N.z,{startIcon:e.createElement(_.Z,null),variant:"tertiary",onClick:dt},s({id:"app.utils.edit",defaultMessage:"Edit"})),title:W()(z),subtitle:s({id:(0,b.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(l.Link,{startIcon:e.createElement(g.Z,null),to:"/plugins/content-type-builder/"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(le.D,null,e.createElement(M.K,{spacing:4},e.createElement(G.k,{justifyContent:"flex-end"},e.createElement(M.K,{horizontal:!0,spacing:2},e.createElement(st,{key:"link-to-cm-settings-view",targetUid:F,isTemporary:O,isInContentTypeView:c,contentTypeKind:D,disabled:ae}))),e.createElement(x.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Ze,{items:P,customRowComponent:B=>e.createElement(at,{...B,onClick:ne}),addComponentToDZ:fe,targetUid:F,editTarget:Y,isMain:!0})))))}},49066:(q,A,n)=>{n.d(A,{D:()=>g});var e=n(67294),l=n(45697),Z=n(41580);const g=({children:k})=>e.createElement(Z.x,{paddingLeft:10,paddingRight:10},k);g.propTypes={children:l.node.isRequired}},53979:(q,A,n)=>{n.d(A,{T:()=>K});var e=n(67294),l=n(45697),Z=n(71893),g=n(41580),k=n(11047);const _=r=>{const v=(0,e.useRef)(null),[f,p]=(0,e.useState)(!0),T=([S])=>{p(S.isIntersecting)};return(0,e.useEffect)(()=>{const S=v.current,W=new IntersectionObserver(T,r);return S&&W.observe(v.current),()=>{S&&W.disconnect()}},[v,r]),[v,f]};var N=n(79698);const G=(r,v)=>{const f=(0,N.W)(v);(0,e.useLayoutEffect)(()=>{const p=new ResizeObserver(f);return Array.isArray(r)?r.forEach(T=>{T.current&&p.observe(T.current)}):r.current&&p.observe(r.current),()=>{p.disconnect()}},[r,f])};var M=n(75515);const x=()=>{const r=(0,e.useRef)(null),[v,f]=(0,e.useState)(null),[p,T]=_({root:null,rootMargin:"0px",threshold:0});return G(p,()=>{p.current&&f(p.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{r.current&&f(r.current.getBoundingClientRect())},[r]),{containerRef:p,isVisible:T,baseHeaderLayoutRef:r,headerSize:v}},K=r=>{const{containerRef:v,isVisible:f,baseHeaderLayoutRef:p,headerSize:T}=x();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:T?.height},ref:v},f&&e.createElement(U,{ref:p,...r})),!f&&e.createElement(U,{...r,sticky:!0,width:T?.width}))};K.displayName="HeaderLayout";const le=(0,Z.default)(g.x)`
  width: ${r=>r.width}px;
`,U=e.forwardRef(({navigationAction:r,primaryAction:v,secondaryAction:f,subtitle:p,title:T,sticky:S,width:W,...I},J)=>{const ee=typeof p=="string";return S?e.createElement(le,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:W,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(k.k,{justifyContent:"space-between"},e.createElement(k.k,null,r&&e.createElement(g.x,{paddingRight:3},r),e.createElement(g.x,null,e.createElement(M.Z,{variant:"beta",as:"h1",...I},T),ee?e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},p):p),f?e.createElement(g.x,{paddingLeft:4},f):null),e.createElement(k.k,null,v?e.createElement(g.x,{paddingLeft:2},v):void 0))):e.createElement(g.x,{ref:J,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0},r?e.createElement(g.x,{paddingBottom:2},r):null,e.createElement(k.k,{justifyContent:"space-between"},e.createElement(k.k,{minWidth:0},e.createElement(M.Z,{as:"h1",variant:"alpha",...I},T),f?e.createElement(g.x,{paddingLeft:4},f):null),v),ee?e.createElement(M.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},p):p)});U.displayName="BaseHeaderLayout",U.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},U.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,sticky:l.bool,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired,width:l.number},K.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},K.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired}},67109:(q,A,n)=>{n.d(A,{Z:()=>Z});var e=n(85893);const l=g=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),Z=l},98432:(q,A,n)=>{n.d(A,{Z:()=>Z});var e=n(85893);const l=g=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g,children:(0,e.jsx)("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H5a.2.2 0 0 1-.2-.2V.2ZM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V9.8ZM5 19.2a.2.2 0 0 0-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 0 0 .2-.2v-4.4a.2.2 0 0 0-.2-.2H5Z",fill:"#212134"})}),Z=l}}]);
