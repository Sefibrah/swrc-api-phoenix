"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3981],{91550:(R,k,n)=>{n.r(k),n.d(k,{default:()=>Be});var e=n(53547),s=n(50781),I=n(45349),j=n(57713),S=n(9370),v=n(61585),i=n(56127),W=n(64593),D=n(44012),O=n(55168),c=n(88972),d=n(75878),g=n(78549),B=n(19442),H=n(69858),E=n(86896),w=n(64729),F=n(45697),r=n.n(F),p=n(99872),Q=n(89285),z=n(96392);const b=({type:t,title:a,number:o,content:l,hasLine:m})=>{const{formatMessage:u}=(0,E.Z)();return e.createElement(s.x,null,e.createElement(d.k,null,e.createElement(s.x,{minWidth:(0,i.Q1)(30),marginRight:5},e.createElement(z.Z,{type:t,number:o})),e.createElement(g.Z,{variant:"delta",as:"h3"},u(a))),e.createElement(d.k,{alignItems:"flex-start"},e.createElement(d.k,{justifyContent:"center",minWidth:(0,i.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement(Q.Z,{type:t,minHeight:t===p.lW?(0,i.Q1)(85):(0,i.Q1)(65)})),e.createElement(s.x,{marginTop:2},t===p.lW&&l)))};b.defaultProps={content:void 0,number:void 0,type:p.VM,hasLine:!0},b.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([p.lW,p.hx,p.VM]),hasLine:r().bool};const A=b,N=(t,a)=>t===-1||a<t?p.hx:a>t?p.VM:p.lW,P=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(l=>l.key===a);return e.createElement(s.x,null,t.map((l,m)=>e.createElement(A,{key:l.key,title:l.title,content:l.content,number:m+1,type:N(o,m),hasLine:m!==t.length-1})))};P.defaultProps={currentSectionKey:void 0},P.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const V=P,Y=()=>{const{guidedTourState:t,setSkipped:a}=(0,i.c1)(),{formatMessage:o}=(0,E.Z)(),{trackUsage:l}=(0,i.rS)(),m=Object.entries(w.Z).map(([f,h])=>({key:f,title:h.home.title,content:e.createElement(i.Qj,{onClick:()=>l(h.home.trackingEvent),to:h.home.cta.target,endIcon:e.createElement(H.Z,null)},o(h.home.cta.title))})),M=m.map(f=>({isDone:Object.entries(t[f.key]).every(([,h])=>h),...f})).find(f=>!f.isDone)?.key,L=()=>{a(!0),l("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(g.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(V,{sections:m,currentSectionKey:M})),e.createElement(d.k,{justifyContent:"flex-end"},e.createElement(B.z,{variant:"tertiary",onClick:L},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},$=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var K=n(39645);const U=n.p+"7e9af4fb7e723fcebf1f.svg";var J=n(28077),X=n(37855),q=n(12951),_=n(2204);const ee=n.p+"27d16aefee06412db90a.png",te=n.p+"bb4d0d527bdfb161bc5a.svg",ne=n.p+"bb3108f7fd1e6179bde1.svg",oe=c.ZP.a`
  text-decoration: none;
`,ae=(0,c.ZP)(s.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,ie=(0,c.ZP)(d.k)`
  background: rgba(255, 255, 255, 0.3);
`,re=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,i.rS)();return e.createElement(oe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{a("didClickOnTryStrapiCloudSection")}},e.createElement(d.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(ae,{backgroundImage:ee,hasRadius:!0,padding:3},e.createElement(ie,{width:(0,i.Q1)(32),height:(0,i.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ne,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(d.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(d.k,null,e.createElement(g.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(g.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:te,position:"absolute",top:0,right:0,as:"img"}))))},C=c.ZP.a`
  text-decoration: none;
`,le=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,i.rS)(),o=l=>{a(l)};return e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(re,null),e.createElement(C,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(i.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(J.Z,null),iconBackground:"primary100"})),e.createElement(C,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(i.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(X.Z,null),iconBackground:"warning100"})),e.createElement(C,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(i.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(q.Z,null),iconBackground:"secondary100"})),e.createElement(C,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(i.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(_.Z,null),iconBackground:"alternative100"})))};var x=n(36182);const se=(0,c.ZP)(g.Z)`
  word-break: break-word;
`,Z=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,E.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(d.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(g.Z,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(se,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(x.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(B.z,{size:"L",onClick:a,endIcon:e.createElement(H.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};Z.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},Z.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const ce=Z;var de=n(80994),me=n(88514),pe=n(93768),ue=n(34012),ge=n(52551),fe=n(93570),he=n(86820),Ee=n(91393);const ye=(0,c.ZP)(me.Z)`
  path {
    fill: #7289da !important;
  }
`,ke=(0,c.ZP)(pe.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,T=(0,c.ZP)(ue.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,ve=(0,c.ZP)(ge.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Ce=(0,c.ZP)(fe.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(he.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ye,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ke,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(ve,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Ce,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(T,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(T,null),alt:"career"}],be=(0,c.ZP)(de.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Pe=(0,c.ZP)(S.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ze=()=>{const{formatMessage:t}=(0,E.Z)(),{communityEdition:a}=(0,i.L7)(),o=[...Se,{icon:e.createElement(T,null),link:a?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(g.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(g.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(x.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Ee.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Pe,null,o.map(({icon:l,link:m,name:u})=>e.createElement(v.P,{col:6,s:12,key:u.id},e.createElement(be,{size:"L",startIcon:l,variant:"tertiary",href:m,isExternal:!0},t(u))))))};var Te=function(){return window&&window.strapi&&window.strapi.isEE?n(94018).Z:n(67875).Z}(),Me=(0,c.ZP)(s.x).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16),Le=function(){var a=(0,K.G)(),o=a.collectionTypes,l=a.singleTypes,m=a.isLoading,u=(0,i.c1)(),M=u.guidedTourState,L=u.isGuidedTourVisible,f=u.isSkipped;Te();var h=!$(M)&&L&&!f,He=(0,O.k6)(),xe=He.push,Ge=function(G){G.preventDefault(),xe("/plugins/content-type-builder/content-types/create-content-type")},Re=(0,e.useMemo)(function(){var y=function(Ie){return Ie.filter(function(je){return je.isDisplayed})};return y(o).length>1||y(l).length>0},[o,l]);return m?e.createElement(i.dO,null):e.createElement(I.A,null,e.createElement(D.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(y){return e.createElement(W.q,{title:y[0]})}),e.createElement(j.o,null,e.createElement(Me,null,e.createElement("img",{alt:"","aria-hidden":!0,src:U})),e.createElement(s.x,{padding:10},e.createElement(S.r,null,e.createElement(v.P,{col:8,s:12},e.createElement(ce,{onCreateCT:Ge,hasCreatedContentType:Re}))),e.createElement(S.r,{gap:6},e.createElement(v.P,{col:8,s:12},h?e.createElement(Y,null):e.createElement(le,null)),e.createElement(v.P,{col:4,s:12},e.createElement(Ze,null))))))};const Be=(0,e.memo)(Le)},67875:(R,k,n)=>{n.d(k,{Z:()=>s});const s=()=>null}}]);
