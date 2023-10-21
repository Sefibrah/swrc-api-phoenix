"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3981],{91550:(W,b,a)=>{a.r(b),a.d(b,{default:()=>ge});var e=a(67294),h=a(49212),d=a(71893),$=a(73117),B=a(49656),s=a(27298),t=a(72899);const f=a.p+"7e9af4fb7e723fcebf1f.svg";var E=a(48474);const T=o=>Object.entries(o).every(([,i])=>Object.entries(i).every(([,l])=>l));var g=a(22522),S=a(45697),c=a.n(S),F=a(96392),J=a(89285),u=a(99872);const p=({type:o,title:i,number:l,content:m,hasLine:k})=>{const{formatMessage:y}=(0,h.useIntl)();return e.createElement(t.Box,null,e.createElement(t.Flex,null,e.createElement(t.Box,{minWidth:(0,s.pxToRem)(30),marginRight:5},e.createElement(F.Z,{type:o,number:l})),e.createElement(t.Typography,{variant:"delta",as:"h3"},y(i))),e.createElement(t.Flex,{alignItems:"flex-start"},e.createElement(t.Flex,{justifyContent:"center",minWidth:(0,s.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},k&&e.createElement(J.Z,{type:o,minHeight:o===u.lW?(0,s.pxToRem)(85):(0,s.pxToRem)(65)})),e.createElement(t.Box,{marginTop:2},o===u.lW&&m)))};p.defaultProps={content:void 0,number:void 0,type:u.VM,hasLine:!0},p.propTypes={content:c().node,number:c().number,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,type:c().oneOf([u.lW,u.hx,u.VM]),hasLine:c().bool};const R=p,A=(o,i)=>o===-1||i<o?u.hx:i>o?u.VM:u.lW,M=({sections:o,currentSectionKey:i})=>{const l=o.findIndex(m=>m.key===i);return e.createElement(t.Box,null,o.map((m,k)=>e.createElement(R,{key:m.key,title:m.title,content:m.content,number:k+1,type:A(l,k),hasLine:k!==o.length-1})))};M.defaultProps={currentSectionKey:void 0},M.propTypes={sections:c().arrayOf(c().shape({key:c().string.isRequired,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,content:c().node})).isRequired,currentSectionKey:c().string};const Z=M;var I=a(64729);const G=()=>{const{guidedTourState:o,setSkipped:i}=(0,s.useGuidedTour)(),{formatMessage:l}=(0,h.useIntl)(),{trackUsage:m}=(0,s.useTracking)(),k=Object.entries(I.Z).map(([C,x])=>({key:C,title:x.home.title,content:e.createElement(s.LinkButton,{onClick:()=>m(x.home.trackingEvent),to:x.home.cta.target,endIcon:e.createElement(g.ArrowRight,null)},l(x.home.cta.title))})),Q=k.map(C=>({isDone:Object.entries(o[C.key]).every(([,x])=>x),...C})).find(C=>!C.isDone)?.key,Y=()=>{i(!0),m("didSkipGuidedtour")};return e.createElement(t.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(t.Stack,{spacing:6},e.createElement(t.Typography,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(Z,{sections:k,currentSectionKey:Q})),e.createElement(t.Flex,{justifyContent:"flex-end"},e.createElement(t.Button,{variant:"tertiary",onClick:Y},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var n=a(78324),r=a(36182);const j=(0,d.default)(g.Discord)`
  path {
    fill: #7289da !important;
  }
`,w=(0,d.default)(g.Reddit)`
  > path:first-child {
    fill: #ff4500;
  }
`,L=(0,d.default)(g.Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,P=(0,d.default)(g.Twitter)`
  path {
    fill: #1da1f2 !important;
  }
`,K=(0,d.default)(g.Discourse)`
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
`,N=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(g.Github,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(j,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(w,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(P,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(K,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(L,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(L,null),alt:"career"}],U=(0,d.default)(n.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:o})=>o.spaces[6]};
    height: ${({theme:o})=>o.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,D=(0,d.default)(t.Grid)`
  row-gap: ${({theme:o})=>o.spaces[2]};
  column-gap: ${({theme:o})=>o.spaces[4]};
`,_=()=>{const{formatMessage:o}=(0,h.useIntl)(),{communityEdition:i}=(0,s.useAppInfos)(),l=[...N,{icon:e.createElement(L,null),link:i?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(t.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(t.Box,{paddingBottom:7},e.createElement(t.Stack,{spacing:5},e.createElement(t.Stack,{spacing:3},e.createElement(t.Typography,{variant:"delta",as:"h2",id:"join-the-community"},o({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(t.Typography,{textColor:"neutral600"},o({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(r.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(g.ExternalLink,null)},o({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(D,null,l.map(({icon:m,link:k,name:y})=>e.createElement(t.GridItem,{col:6,s:12,key:y},e.createElement(U,{size:"L",startIcon:m,variant:"tertiary",href:k,isExternal:!0},o(y))))))},ee=(0,d.default)(t.Typography)`
  word-break: break-word;
`,te=(0,d.default)(t.Stack)`
  align-items: flex-start;
`,V=({hasCreatedContentType:o,onCreateCT:i})=>{const{formatMessage:l}=(0,h.useIntl)();return e.createElement("div",null,e.createElement(t.Box,{paddingLeft:6,paddingBottom:10},e.createElement(te,{spacing:5},e.createElement(t.Typography,{as:"h1",variant:"alpha"},l(o?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ee,{textColor:"neutral600",variant:"epsilon"},l(o?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),o?e.createElement(r.r,{isExternal:!0,href:"https://strapi.io/blog"},l({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(t.Button,{size:"L",onClick:i,endIcon:e.createElement(g.ArrowRight,null)},l({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};V.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},V.propTypes={hasCreatedContentType:c().bool,onCreateCT:c().func};const ne=V,oe=a.p+"27d16aefee06412db90a.png",ae=a.p+"bb3108f7fd1e6179bde1.svg",re=a.p+"bb4d0d527bdfb161bc5a.svg",le=d.default.a`
  text-decoration: none;
`,se=(0,d.default)(t.Box)`
  background-image: url(${({backgroundImage:o})=>o});
`,ie=(0,d.default)(t.Flex)`
  background: rgba(255, 255, 255, 0.3);
`,ce=()=>{const{formatMessage:o}=(0,h.useIntl)(),{trackUsage:i}=(0,s.useTracking)();return e.createElement(le,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{i("didClickOnTryStrapiCloudSection")}},e.createElement(t.Flex,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(se,{backgroundImage:oe,hasRadius:!0,padding:3},e.createElement(ie,{width:(0,s.pxToRem)(32),height:(0,s.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ae,alt:o({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(t.Flex,{gap:1,direction:"column",alignItems:"start"},e.createElement(t.Flex,null,e.createElement(t.Typography,{fontWeight:"semiBold",variant:"pi"},o({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(t.Typography,{textColor:"neutral600"},o({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(t.Box,{src:re,position:"absolute",top:0,right:0,as:"img"}))))},O=d.default.a`
  text-decoration: none;
`,de=()=>{const{formatMessage:o}=(0,h.useIntl)(),{trackUsage:i}=(0,s.useTracking)(),l=m=>{i(m)};return e.createElement(t.Stack,{spacing:5},e.createElement(ce,null),e.createElement(O,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonReadTheDocumentationSection")},e.createElement(s.ContentBox,{title:o({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:o({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(g.InformationSquare,null),iconBackground:"primary100"})),e.createElement(O,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonCodeExampleSection")},e.createElement(s.ContentBox,{title:o({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:o({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(g.CodeSquare,null),iconBackground:"warning100"})),e.createElement(O,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonTutorialSection")},e.createElement(s.ContentBox,{title:o({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:o({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(g.PlaySquare,null),iconBackground:"secondary100"})),e.createElement(O,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonBlogSection")},e.createElement(s.ContentBox,{title:o({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:o({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(g.FeatherSquare,null),iconBackground:"alternative100"})))};var ue=function(){return window&&window.strapi&&window.strapi.isEE?a(94018).Z:a(67875).Z}(),pe=(0,d.default)(t.Box).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16),me=function(){var i=(0,E.bP)(),l=i.collectionTypes,m=i.singleTypes,k=i.isLoading,y=(0,s.useGuidedTour)(),Q=y.guidedTourState,Y=y.isGuidedTourVisible,C=y.isSkipped;ue();var x=!T(Q)&&Y&&!C,fe=(0,B.useHistory)(),he=fe.push,ke=function(q){q.preventDefault(),he("/plugins/content-type-builder/content-types/create-content-type")},Ee=(0,e.useMemo)(function(){var H=function(ye){return ye.filter(function(be){return be.isDisplayed})};return H(l).length>1||H(m).length>0},[l,m]);return k?e.createElement(s.LoadingIndicatorPage,null):e.createElement(t.Layout,null,e.createElement(h.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(H){return e.createElement($.Helmet,{title:H[0]})}),e.createElement(t.Main,null,e.createElement(pe,null,e.createElement("img",{alt:"","aria-hidden":!0,src:f})),e.createElement(t.Box,{padding:10},e.createElement(t.Grid,null,e.createElement(t.GridItem,{col:8,s:12},e.createElement(ne,{onCreateCT:ke,hasCreatedContentType:Ee}))),e.createElement(t.Grid,{gap:6},e.createElement(t.GridItem,{col:8,s:12},x?e.createElement(G,null):e.createElement(de,null)),e.createElement(t.GridItem,{col:4,s:12},e.createElement(_,null))))))};const ge=(0,e.memo)(me)},67875:(W,b,a)=>{a.d(b,{Z:()=>h});const h=()=>null},21817:(W,b,a)=>{a.d(b,{G:()=>s,Y:()=>t});var e=a(85893),h=a(67294),d=a(71893),$=a(11047),B=a(15585);const s=(0,d.default)($.k)`
  svg {
    height: ${({theme:f})=>f.spaces[3]};
    width: ${({theme:f})=>f.spaces[3]};

    > g,
    path {
      fill: ${({theme:f})=>f.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${B.BF}
`,t=h.forwardRef(({disabled:f,children:E,...v},T)=>(0,e.jsx)(s,{ref:T,"aria-disabled":f,as:"button",type:"button",disabled:f,padding:2,hasRadius:!0,background:"neutral0",borderColor:"neutral200",cursor:"pointer",...v,children:E}));t.displayName="BaseButton"},78324:(W,b,a)=>{a.d(b,{Q:()=>G});var e=a(85893),h=a(67294),d=a(71893),$=a(21817),B=a(63507);const s="success-light",t="danger-light",f="default",E="tertiary",v="secondary",T="danger",g="success",S="ghost",c=[s,t],F=[f,E,v,T,g,S,...c],J=null;var u=a(75515);const p=n=>n===s||n===t?`${n.substring(0,n.lastIndexOf("-"))}`:n===E?"neutral":n===f||n===v||F.every(r=>r!==n)?"primary":`${n}`,R=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${u.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,A=({theme:n,variant:r})=>[...c,v].includes(r)?`
      background-color: ${n.colors.neutral0};
    `:r===E?`
      background-color: ${n.colors.neutral100};
    `:r===S?`
      background-color: ${n.colors.neutral100};
    `:r===f?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${p(r)}500`]};
    background: ${n.colors[`${p(r)}500`]};
  `,M=({theme:n,variant:r})=>[...c,v].includes(r)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${p(r)}600`]};
      ${u.Z} {
        color: ${n.colors[`${p(r)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${p(r)}600`]};
        }
      }
    `:r===E?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${p(r)}600`]};
    background: ${n.colors[`${p(r)}600`]};
  `,Z=({theme:n,variant:r})=>{switch(r){case t:case s:case v:return`
          border: 1px solid ${n.colors[`${p(r)}200`]};
          background: ${n.colors[`${p(r)}100`]};
          ${u.Z} {
            color: ${n.colors[`${p(r)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${p(r)}700`]};
            }
          }
        `;case E:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${u.Z} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case S:return`
        border: 1px solid transparent;
        background: transparent;

        ${u.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case g:case T:return`
          border: 1px solid ${n.colors[`${p(r)}600`]};
          background: ${n.colors[`${p(r)}600`]};
          ${u.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}};var I=a(11047);const X=(0,d.default)($.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${R}
    &:active {
      ${R}
    }
  }

  &:hover {
    ${A}
  }

  &:active {
    ${M}
  }

  ${Z}
`,G=h.forwardRef(({variant:n="default",startIcon:r,endIcon:j,disabled:w=!1,children:L,size:P="S",as:K=B.f,...N},U)=>{const D=P==="S"?2:"10px",z=4;return(0,e.jsxs)(X,{ref:U,"aria-disabled":w,size:P,variant:n,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:D,paddingLeft:z,paddingRight:z,paddingTop:D,pointerEvents:w?"none":void 0,...N,as:K||B.f,children:[r&&(0,e.jsx)(I.k,{"aria-hidden":!0,children:r}),(0,e.jsx)(u.Z,{variant:P==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:L}),j&&(0,e.jsx)(I.k,{"aria-hidden":!0,children:j})]})});G.displayName="LinkButton"}}]);
