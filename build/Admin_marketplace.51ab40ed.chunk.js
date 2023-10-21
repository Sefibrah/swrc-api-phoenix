"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5516],{9226:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(53547);const d=(P,E)=>{const[i,y]=(0,e.useState)(P);return(0,e.useEffect)(()=>{const a=setTimeout(()=>{y(P)},E);return()=>{clearTimeout(a)}},[P,E]),i}},15828:(D,k,t)=>{t.r(k),t.d(k,{MarketPlacePage:()=>ke,default:()=>xt});var e=t(53547),h=t(45349),d=t(57713),P=t(26789),E=t(20107),i=t(75878),y=t(61738),a=t(50781),u=t(96073),T=t(54375),g=t(56127),A=t(64593),R=t(86896),N=t(86706),Q=t(9226);const H=()=>{const s=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[r,o]=(0,e.useState)(s),c=()=>o(!0),l=()=>o(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",c),window.addEventListener("offline",l),()=>{window.removeEventListener("online",c),window.removeEventListener("offline",l)}),[]),r};var J=t(99369),O=t(80907),B=t(2790);const U=s=>(0,B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,B.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,B.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),$e=U;var oe=t(91393);const Te=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,g.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>r("didMissMarketplacePlugin")},e.createElement(g.Y_,{title:s({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:s({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement($e,null),iconBackground:"alternative100",endAction:e.createElement(O.J,{as:oe.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=t(14020),Y=t(19442),De=t(15800),Oe=t(36002),Be=t(45697),n=t.n(Be),w=t(88972),Ze=t(92545),le=t(50614),ie=t(473);const ce=({message:s,value:r,onChange:o,possibleFilters:c,onClear:l,customizeContent:f})=>{const p=(m,M)=>`${m} (${M})`;return e.createElement(le.P,{"data-testid":`${s}-button`,label:s,placeholder:s,size:"M",onChange:o,onClear:l,value:r,customizeContent:f,multi:!0},Object.entries(c).map(([m,M])=>e.createElement(ie.W,{"data-testid":`${m}-${M}`,key:m,value:m},p(m,M))))};ce.propTypes={message:n().string.isRequired,value:n().array.isRequired,onChange:n().func.isRequired,possibleFilters:n().object.isRequired,onClear:n().func.isRequired,customizeContent:n().func.isRequired};const de=ce,pe=({source:s,onToggle:r,query:o,npmPackageType:c,possibleCategories:l,possibleCollections:f,handleSelectChange:p,handleSelectClear:m})=>{const{formatMessage:M}=(0,R.Z)();return e.createElement(Ze.J2,{source:s,onDismiss:r,padding:3,spacing:4},e.createElement(Ie,{direction:"column",alignItems:"stretch",gap:1},e.createElement(de,{message:M({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:o?.collections||[],onChange:b=>{p({collections:b})},onClear:()=>m("collections"),possibleFilters:f,customizeContent:b=>M({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:b.length})}),c==="plugin"&&e.createElement(de,{message:M({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:o?.categories||[],onChange:b=>{p({categories:b})},onClear:()=>m("categories"),possibleFilters:l,customizeContent:b=>M({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:b.length}),name:"categories"})))};pe.propTypes={onToggle:n().func.isRequired,source:n().shape({current:n().instanceOf(Element)}).isRequired,query:n().object.isRequired,npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Le=pe,Ie=(0,w.ZP)(i.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,X=({name:s,handleRemove:r})=>e.createElement(a.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(De.Z,null),onClick:r},s)),we=(0,w.ZP)(Y.z)`
  height: ${({theme:s})=>s.sizes.input.S};
`,ue=({possibleCollections:s,possibleCategories:r,npmPackageType:o,query:c,handleSelectClear:l,handleSelectChange:f})=>{const[p,m]=(0,e.useState)(!1),M=(0,e.useRef)(),{formatMessage:b}=(0,R.Z)(),x=()=>m(v=>!v),C=(v,$)=>{const L={[$]:c[$].filter(j=>j!==v)};f(L)};return e.createElement(e.Fragment,null,e.createElement(a.x,{paddingTop:1,paddingBottom:1},e.createElement(we,{variant:"tertiary",ref:M,"data-testid":"filters-button",startIcon:e.createElement(Oe.Z,null),onClick:x,size:"S"},b({id:"app.utils.filters",defaultMessage:"Filters"})),p&&e.createElement(Le,{onToggle:x,source:M,query:c,handleSelectClear:l,handleSelectChange:f,possibleCollections:s,possibleCategories:r,npmPackageType:o})),c.collections?.map(v=>e.createElement(X,{name:v,key:v,handleRemove:()=>C(v,"collections")})),o==="plugin"&&c.categories?.map(v=>e.createElement(X,{name:v,key:v,handleRemove:()=>C(v,"categories")})))};X.propTypes={name:n().string.isRequired,handleRemove:n().func.isRequired},ue.propTypes={npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,query:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const je=ue;var Ae=t(28809),Ne=t(9370),Fe=t(61585),Z=t(78549),Ue=t(58252);const Ve=w.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:s})=>s.spaces[4]};
`,Ke=(0,w.ZP)(a.x)`
  background: ${({theme:s})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${s.colors.neutral150} 100%)`};
  opacity: 0.33;
`,We=()=>e.createElement(Ve,null,Array(12).fill(null).map((s,r)=>e.createElement(Ke,{key:`empty-plugin-card-${r}`,height:"234px",hasRadius:!0}))),ge=({content:s})=>e.createElement(a.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(We,null),e.createElement(a.x,{position:"absolute",top:11,width:"100%"},e.createElement(i.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(O.J,{as:Ue.Z,color:"",width:"160px",height:"88px"}),e.createElement(a.x,{paddingTop:6},e.createElement(Z.Z,{variant:"delta",as:"p",textColor:"neutral600"},s)))));ge.propTypes={content:n().string.isRequired};const Ge=ge;var q=t(74273),me=t(80994),ze=t(60324),Qe=t(23450),He=t.n(Qe),Je=t(61473),Ye=t(8675),fe=t(70780),Xe=t(81249),he=t.n(Xe);const V=({description:s,installMessage:r,disabled:o,handleCopy:c,pluginName:l})=>e.createElement(q.u,{"data-testid":`tooltip-${l}`,description:s},e.createElement(a.x,null,e.createElement(Y.z,{size:"S",startIcon:e.createElement(fe.Z,null),variant:"secondary",disabled:o,onClick:c},r))),_=({strapiPeerDepVersion:s,strapiAppVersion:r,handleCopy:o,pluginName:c})=>{const{formatMessage:l}=(0,R.Z)(),f=he().validRange(s),p=he().satisfies(r,f),m=l({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(r){if(!f)return e.createElement(V,{installMessage:m,pluginName:c,description:l({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:r}),handleCopy:o});if(!p)return e.createElement(V,{installMessage:m,pluginName:c,description:l({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:r,versionRange:f}),disabled:!0})}return e.createElement(Y.z,{size:"S",startIcon:e.createElement(fe.Z,null),variant:"secondary",onClick:o},m)};V.defaultProps={disabled:!1,handleCopy:null},V.propTypes={description:n().string.isRequired,installMessage:n().string.isRequired,disabled:n().bool,handleCopy:n().func,pluginName:n().string.isRequired},_.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},_.propTypes={strapiAppVersion:n().string,strapiPeerDepVersion:n().string,handleCopy:n().func.isRequired,pluginName:n().string.isRequired};const qe=_,ee=({isInstalled:s,isInDevelopmentMode:r,commandToCopy:o,strapiAppVersion:c,strapiPeerDepVersion:l,pluginName:f})=>{const p=(0,g.lm)(),{formatMessage:m}=(0,R.Z)(),{trackUsage:M}=(0,g.rS)(),{copy:b}=(0,g.VP)(),x=async()=>{await b(o)&&(M("willInstallPlugin"),p({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return s?e.createElement(a.x,{paddingLeft:4},e.createElement(O.J,{as:Ye.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(Z.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},m({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):r?e.createElement(qe,{strapiAppVersion:c,strapiPeerDepVersion:l,handleCopy:x,pluginName:f}):null};ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={isInstalled:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,commandToCopy:n().string.isRequired,strapiAppVersion:n().string,strapiPeerDepVersion:n().string,pluginName:n().string.isRequired};const _e=ee;var et=t(81984),tt=t(86820),at=t(71125),nt=t(52794);const st=(0,w.ZP)(et.i)`
  width: ${(0,g.Q1)(12)};
  transform: rotate(90deg);
`,te=({githubStars:s,npmDownloads:r,npmPackageType:o})=>{const{formatMessage:c}=(0,R.Z)();return e.createElement(i.k,{gap:1},!!s&&e.createElement(e.Fragment,null,e.createElement(O.J,{as:tt.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement(O.J,{as:at.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":c({id:`admin.pages.MarketPlacePage.${o}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:s,package:o})},e.createElement(Z.Z,{variant:"pi",textColor:"neutral800"},s)),e.createElement(st,{unsetMargin:!1,background:"neutral200"})),e.createElement(O.J,{as:nt.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":c({id:`admin.pages.MarketPlacePage.${o}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:r,package:o})},e.createElement(Z.Z,{variant:"pi",textColor:"neutral800"},r)))};te.defaultProps={githubStars:0,npmDownloads:0},te.propTypes={githubStars:n().number,npmDownloads:n().number,npmPackageType:n().string.isRequired};const rt=te,ot=(0,w.ZP)(Z.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ae=({npmPackage:s,isInstalled:r,useYarn:o,isInDevelopmentMode:c,npmPackageType:l,strapiAppVersion:f})=>{const{attributes:p}=s,{formatMessage:m}=(0,R.Z)(),{trackUsage:M}=(0,g.rS)(),b=o?`yarn add ${p.npmPackageName}`:`npm install ${p.npmPackageName}`,x=m({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),C=`https://market.strapi.io/${He().plural(l)}/${p.slug}`;return e.createElement(i.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(a.x,null,e.createElement(i.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(a.x,{as:"img",src:p.logo.url,alt:`${p.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(rt,{githubStars:p.githubStars,npmDownloads:p.npmDownloads,npmPackageType:l})),e.createElement(a.x,{paddingTop:4},e.createElement(Z.Z,{as:"h3",variant:"delta"},e.createElement(i.k,{alignItems:"center"},p.name,p.validated&&!p.madeByStrapi&&e.createElement(q.u,{description:m({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(i.k,null,e.createElement(O.J,{as:ze.Z,marginLeft:2,color:"success600"}))),p.madeByStrapi&&e.createElement(q.u,{description:x},e.createElement(i.k,null,e.createElement(a.x,{as:"img",src:Je,alt:x,marginLeft:1,width:6,height:"auto"})))))),e.createElement(a.x,{paddingTop:2},e.createElement(ot,{as:"p",variant:"omega",textColor:"neutral600"},p.description))),e.createElement(i.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(me.Q,{size:"S",href:C,isExternal:!0,endIcon:e.createElement(oe.Z,null),"aria-label":m({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:p.name}),variant:"tertiary",onClick:()=>M("didPluginLearnMore")},m({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(_e,{isInstalled:r,isInDevelopmentMode:c,commandToCopy:b,strapiAppVersion:f,strapiPeerDepVersion:p.strapiVersion,pluginName:p.name})))};ae.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ae.propTypes={npmPackage:n().shape({id:n().string.isRequired,attributes:n().shape({name:n().string.isRequired,description:n().string.isRequired,slug:n().string.isRequired,npmPackageName:n().string.isRequired,npmPackageUrl:n().string.isRequired,repositoryUrl:n().string.isRequired,logo:n().object.isRequired,developerName:n().string.isRequired,validated:n().bool.isRequired,madeByStrapi:n().bool.isRequired,strapiCompatibility:n().oneOf(["v3","v4"]),strapiVersion:n().string,githubStars:n().number,npmDownloads:n().number}).isRequired}).isRequired,isInstalled:n().bool.isRequired,useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool,npmPackageType:n().string.isRequired,strapiAppVersion:n().string};const lt=ae,ne=({status:s,npmPackages:r,installedPackageNames:o,useYarn:c,isInDevelopmentMode:l,npmPackageType:f,strapiAppVersion:p,debouncedSearch:m})=>{const{formatMessage:M}=(0,R.Z)();if(s==="error")return e.createElement(i.k,{paddingTop:8},e.createElement(g.Hn,null));if(s==="loading")return e.createElement(i.k,{justifyContent:"center",paddingTop:8},e.createElement(Ae.a,null,"Loading content..."));const b=M({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:m});return r.length===0?e.createElement(Ge,{content:b}):e.createElement(Ne.r,{gap:4,"data-testid":"marketplace-results"},r.map(x=>e.createElement(Fe.P,{col:4,s:6,xs:12,style:{height:"100%"},key:x.id},e.createElement(lt,{npmPackage:x,isInstalled:o.includes(x.attributes.npmPackageName),useYarn:c,isInDevelopmentMode:l,npmPackageType:f,strapiAppVersion:p}))))};ne.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},ne.propTypes={status:n().string.isRequired,npmPackages:n().array,installedPackageNames:n().arrayOf(n().string),useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,npmPackageType:n().string.isRequired,strapiAppVersion:n().string,debouncedSearch:n().string};const Pe=ne,ve=({pagination:s})=>e.createElement(a.x,{paddingTop:4},e.createElement(i.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.tU,{pagination:s})));ve.propTypes={pagination:n().shape({page:n().number.isRequired,pageCount:n().number.isRequired,pageSize:n().number.isRequired,total:n().number.isRequired}).isRequired};const it=ve,ct=t.p+"9d5d788027e86620c234.svg";var dt=t(79371);const pt=s=>(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...s,children:(0,B.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),ut=pt,se=({isOnline:s,npmPackageType:r})=>{const{formatMessage:o}=(0,R.Z)(),{trackUsage:c}=(0,g.rS)(),l=r==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(dt.T,{title:o({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:o({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:s&&e.createElement(me.Q,{startIcon:e.createElement(ut,null),variant:"tertiary",href:`https://market.strapi.io/submit-${r}`,onClick:()=>c(l),isExternal:!0},o({id:`admin.pages.MarketPlacePage.submit.${r}.link`,defaultMessage:`Submit ${r}`}))})},Ee=se;se.defaultProps={npmPackageType:"plugin"},se.propTypes={isOnline:n().bool.isRequired,npmPackageType:n().string};const gt=()=>{const{formatMessage:s}=(0,R.Z)();return e.createElement(h.A,null,e.createElement(d.o,null,e.createElement(Ee,{isOnline:!1}),e.createElement(i.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.Q1)(120)},e.createElement(a.x,{paddingBottom:2},e.createElement(Z.Z,{textColor:"neutral700",variant:"alpha"},s({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(a.x,{paddingBottom:6},e.createElement(Z.Z,{textColor:"neutral700",variant:"epsilon"},s({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:ct,alt:"offline",style:{width:"88px",height:"88px"}}))))},mt=(0,w.ZP)(a.x)`
  font-weight: ${({theme:s})=>s.fontWeights.semiBold};

  span {
    font-size: ${({theme:s})=>s.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,Me=({sortQuery:s,handleSelectChange:r})=>{const{formatMessage:o}=(0,R.Z)(),c={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(mt,null,e.createElement(le.P,{size:"S",id:"sort-by-select",value:s,customizeContent:()=>o(c[s].selected),onChange:l=>{r({sort:l})},label:o({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(c).map(([l,f])=>e.createElement(ie.W,{key:l,value:l},o(f.option)))))};Me.propTypes={sortQuery:n().string.isRequired,handleSelectChange:n().func.isRequired};const ft=Me;var ht=t(46683),Pt=t(36232),K=t.n(Pt),be=t(88767);const ye="https://market-api.strapi.io",vt=async(s={})=>{try{const r=K().stringify(K().parse(s)),o=await fetch(`${ye}/plugins?${r}`);if(!o.ok)throw new Error("Failed to fetch marketplace plugins.");return await o.json()}catch(r){console.error(r)}return null},Et=(s,r)=>{const o=(0,g.lm)();return(0,be.useQuery)(["list-marketplace-plugins",r],()=>vt(r),{onSuccess(){s&&s()},onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Mt=async(s={})=>{try{const r=K().stringify(K().parse(s)),o=await fetch(`${ye}/providers?${r}`);if(!o.ok)throw new Error("Failed to fetch marketplace providers.");return await o.json()}catch(r){console.error(r)}return null},bt=(s,r)=>{const o=(0,g.lm)();return(0,be.useQuery)(["list-marketplace-providers",r],()=>Mt(r),{onSuccess(){s&&s()},onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function yt({npmPackageType:s,debouncedSearch:r,query:o,tabQuery:c}){const{notifyStatus:l}=(0,ht.G)(),{formatMessage:f}=(0,R.Z)(),p=f({id:"global.marketplace",defaultMessage:"Marketplace"}),m=()=>{l(f({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:p}))},M={page:o?.page||1,pageSize:o?.pageSize||24},{data:b,status:x}=Et(m,{...c.plugin,pagination:M,search:r}),{data:C,status:v}=bt(m,{...c.provider,pagination:M,search:r}),$=s==="plugin"?b:C,L=s==="plugin"?x:v,[j,W]=(0,e.useState)({}),[G,z]=(0,e.useState)({});(0,e.useEffect)(()=>{L==="success"&&W($.meta.collections),x==="success"&&z(b.meta.categories)},[b?.meta.categories,x,$?.meta.collections,L]);const{pagination:re}=L==="success"?$.meta:{};return{pluginsResponse:b,providersResponse:C,pluginsStatus:x,providersStatus:v,possibleCollections:j,possibleCategories:G,pagination:re}}const kt=yt,ke=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,g.rS)(),o=(0,e.useRef)(r),c=(0,g.lm)(),[{query:l},f]=(0,g.Kx)(),p=(0,Q.Z)(l?.search,500)||"",{autoReload:m,dependencies:M,useYarn:b,strapiVersion:x}=(0,g.L7)(),C=H(),v=l?.npmPackageType||"plugin",[$,L]=(0,e.useState)({plugin:v==="plugin"?{...l}:{},provider:v==="provider"?{...l}:{}});(0,g.go)(),(0,e.useEffect)(()=>{o.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||c({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[c,m]);const{pluginsResponse:j,providersResponse:W,pluginsStatus:G,providersStatus:z,possibleCollections:re,possibleCategories:Rt,pagination:xe}=kt({npmPackageType:v,debouncedSearch:p,query:l,tabQuery:$});if(!C)return e.createElement(gt,null);const Ct=I=>{const S=I===0?"plugin":"provider",Tt=$[S]&&Object.keys($[S]).length;f(Tt?{...$[S],search:l?.search||"",npmPackageType:S,page:1}:{npmPackageType:S,collections:[],categories:[],sort:"name:asc",page:1,search:l?.search||""})},Re=I=>{f({...I,page:1}),L(S=>({...S,[v]:{...S[v],...I}}))},$t=I=>{f({[I]:[],page:null},"remove"),L(S=>({...S,[v]:{}}))},Ce=Object.keys(M);return e.createElement(h.A,null,e.createElement(d.o,null,e.createElement(A.q,{title:s({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(Ee,{isOnline:C,npmPackageType:v}),e.createElement(P.D,null,e.createElement(E.v,{label:s({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(v),onTabChange:Ct},e.createElement(i.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(y.m,null,e.createElement(y.O,null,s({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",G==="success"?`(${j.meta.pagination.total})`:"..."),e.createElement(y.O,null,s({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",z==="success"?`(${W.meta.pagination.total})`:"...")),e.createElement(a.x,{width:"25%"},e.createElement(u.w,{name:"searchbar",onClear:()=>f({search:"",page:1}),value:l?.search,onChange:I=>f({search:I.target.value,page:1}),clearLabel:s({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(i.k,{paddingBottom:4,gap:2},e.createElement(ft,{sortQuery:l?.sort||"name:asc",handleSelectChange:Re}),e.createElement(je,{npmPackageType:v,possibleCollections:re,possibleCategories:Rt,query:l||{},handleSelectChange:Re,handleSelectClear:$t})),e.createElement(T.n,null,e.createElement(T.x,null,e.createElement(Pe,{npmPackages:j?.data,status:G,installedPackageNames:Ce,useYarn:b,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:x,debouncedSearch:p})),e.createElement(T.x,null,e.createElement(Pe,{npmPackages:W?.data,status:z,installedPackageNames:Ce,useYarn:b,isInDevelopmentMode:m,npmPackageType:"provider",debouncedSearch:p})))),xe&&e.createElement(it,{pagination:xe}),e.createElement(a.x,{paddingTop:8},e.createElement(Te,null)))))},xt=()=>{const s=(0,N.v9)(J._);return e.createElement(g.O4,{permissions:s.marketplace.main},e.createElement(ke,null))}},45349:(D,k,t)=>{t.d(k,{A:()=>i});var e=t(2790),h=t(88972),d=t(50781);const P=(0,h.ZP)(d.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:y})=>y?"auto 1fr":"1fr"};
`,E=(0,h.ZP)(d.x)`
  overflow-x: hidden;
`,i=({sideNav:y,children:a})=>(0,e.jsxs)(P,{hasSideNav:!!y,children:[y,(0,e.jsx)(E,{paddingBottom:10,children:a})]})},86820:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(2790);const h=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),d=h},71125:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(2790);const h=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),d=h},21817:(D,k,t)=>{t.d(k,{G:()=>i,Y:()=>y});var e=t(85893),h=t(53547),d=t(88972),P=t(11047),E=t(15585);const i=(0,d.ZP)(P.k)`
  svg {
    height: ${({theme:a})=>a.spaces[3]};
    width: ${({theme:a})=>a.spaces[3]};

    > g,
    path {
      fill: ${({theme:a})=>a.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${E.BF}
`,y=h.forwardRef(({disabled:a,children:u,...T},g)=>(0,e.jsx)(i,{ref:g,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:"neutral0",borderColor:"neutral200",cursor:"pointer",...T,children:u}));y.displayName="BaseButton"},78474:(D,k,t)=>{t.d(k,{G$:()=>h,Gt:()=>g,MG:()=>e,MR:()=>y,T:()=>i,TP:()=>d,Vb:()=>E,Vv:()=>u,ZC:()=>T,gK:()=>P,wG:()=>a});const e="success-light",h="danger-light",d="default",P="tertiary",E="secondary",i="danger",y="success",a="ghost",u=[e,h],T=[d,P,E,i,y,a,...u],g=["S","M","L"]},92577:(D,k,t)=>{t.d(k,{PD:()=>y,sg:()=>P,tB:()=>i,yP:()=>E});var e=t(78474),h=t(75515);const d=a=>a===e.MG||a===e.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===e.gK?"neutral":a===e.TP||a===e.Vb||e.ZC.every(u=>u!==a)?"primary":`${a}`,P=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${h.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,E=({theme:a,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${a.colors.neutral0};
    `:u===e.gK?`
      background-color: ${a.colors.neutral100};
    `:u===e.wG?`
      background-color: ${a.colors.neutral100};
    `:u===e.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${d(u)}500`]};
    background: ${a.colors[`${d(u)}500`]};
  `,i=({theme:a,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${d(u)}600`]};
      ${h.Z} {
        color: ${a.colors[`${d(u)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${d(u)}600`]};
        }
      }
    `:u===e.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${d(u)}600`]};
    background: ${a.colors[`${d(u)}600`]};
  `,y=({theme:a,variant:u})=>{switch(u){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${a.colors[`${d(u)}200`]};
          background: ${a.colors[`${d(u)}100`]};
          ${h.Z} {
            color: ${a.colors[`${d(u)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${d(u)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${h.Z} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${h.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${a.colors[`${d(u)}600`]};
          background: ${a.colors[`${d(u)}600`]};
          ${h.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},15585:(D,k,t)=>{t.d(k,{BF:()=>d,k3:()=>h});const e=P=>({theme:E,size:i})=>E.sizes[P][i],h=(P="&")=>({theme:E,hasError:i})=>`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${P}:focus-within {
        border: 1px solid ${i?E.colors.danger600:E.colors.primary600};
        box-shadow: ${i?E.colors.danger600:E.colors.primary600} 0px 0px 0px 2px;
      }
    `,d=({theme:P})=>`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${P.colors.primary600};
    }
  }
`},80994:(D,k,t)=>{t.d(k,{Q:()=>T});var e=t(85893),h=t(53547),d=t(88972),P=t(21817),E=t(63507),i=t(92577),y=t(11047),a=t(75515);const u=(0,d.ZP)(P.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${i.sg}
    &:active {
      ${i.sg}
    }
  }

  &:hover {
    ${i.yP}
  }

  &:active {
    ${i.tB}
  }

  ${i.PD}
`,T=h.forwardRef(({variant:g="default",startIcon:A,endIcon:R,disabled:N=!1,children:Q,size:F="S",as:H=E.f,...J},O)=>{const B=F==="S"?2:"10px",U=4;return(0,e.jsxs)(u,{ref:O,"aria-disabled":N,size:F,variant:g,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:B,paddingLeft:U,paddingRight:U,paddingTop:B,pointerEvents:N?"none":void 0,...J,as:H||E.f,children:[A&&(0,e.jsx)(y.k,{"aria-hidden":!0,children:A}),(0,e.jsx)(a.Z,{variant:F==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:Q}),R&&(0,e.jsx)(y.k,{"aria-hidden":!0,children:R})]})});T.displayName="LinkButton"}}]);
