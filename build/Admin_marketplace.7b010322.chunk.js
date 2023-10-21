"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5516],{43008:(ce,I,i)=>{i.r(I),i.d(I,{MarketPlacePage:()=>ye,default:()=>Ve});var e=i(67294),k=i(49212),F=i(73117),C=i(63852),g=i(27298),t=i(72899),x=i(45697),a=i.n(x),f=i(22522),b=i(71893);const N=(0,b.default)(t.Box)`
  background: ${({theme:n})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${n.colors.neutral150} 100%)`};
  opacity: 0.33;
`,j=()=>e.createElement(t.GridLayout,null,Array(12).fill(null).map((n,s)=>e.createElement(N,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),L=({content:n})=>e.createElement(t.Box,{position:"relative"},e.createElement(j,null),e.createElement(t.Box,{position:"absolute",top:11,width:"100%"},e.createElement(t.Flex,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(t.Icon,{as:f.EmptyStateDocument,color:"",width:"160px",height:"88px"}),e.createElement(t.Box,{paddingTop:6},e.createElement(t.Typography,{variant:"delta",as:"p",textColor:"neutral600"},n)))));L.propTypes={content:a().string.isRequired};const w=L;var q=i(78324);const z=({isOnline:n,npmPackageType:s})=>{const{formatMessage:l}=(0,k.useIntl)(),{trackUsage:o}=(0,g.useTracking)(),d=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(t.HeaderLayout,{title:l({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:l({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:n&&e.createElement(q.Q,{startIcon:e.createElement(f.Upload,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>o(d),isExternal:!0},l({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},M=z;z.defaultProps={npmPackageType:"plugin"},z.propTypes={isOnline:a().bool.isRequired,npmPackageType:a().string};var E=i(68960),O=i(48456);const K="https://market-api.strapi.io",Y=async(n={})=>{const{data:s}=await O.Z.get(`${K}/providers`,{params:n});return s},V=(n,s)=>{const l=(0,g.useNotification)();return(0,E.useQuery)(["list-marketplace-providers",s],()=>Y(s),{onSuccess(){n&&n()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},J="https://market-api.strapi.io",U=async(n={})=>{const{data:s}=await O.Z.get(`${J}/plugins`,{params:n});return{...s,data:s.data.filter(o=>o.attributes.strapiCompatibility==="v4")}},p=(n,s)=>{const l=(0,g.useNotification)();return(0,E.useQuery)(["list-marketplace-plugins",s],()=>U(s),{onSuccess(){n&&n()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};var G=i(87751);const W=i.p+"9d5d788027e86620c234.svg",A=()=>{const n=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,l]=(0,e.useState)(n),o=()=>l(!0),d=()=>l(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",o),window.addEventListener("offline",d),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",d)}),[]),s},X=()=>{const{formatMessage:n}=(0,k.useIntl)(),{trackUsage:s}=(0,g.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.ContentBox,{title:n({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:n({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(f.GlassesSquare,null),iconBackground:"alternative100",endAction:e.createElement(t.Icon,{as:f.ExternalLink,color:"neutral600",width:3,height:3,marginLeft:2})}))};var _=i(23450),H=i.n(_),Q=i(61473),Be=i(81249),ge=i.n(Be);const Z=({description:n,installMessage:s,disabled:l,handleCopy:o,pluginName:d})=>e.createElement(t.Tooltip,{"data-testid":`tooltip-${d}`,description:n},e.createElement(t.Box,null,e.createElement(t.Button,{size:"S",startIcon:e.createElement(f.Duplicate,null),variant:"secondary",disabled:l,onClick:o},s))),ee=({strapiPeerDepVersion:n,strapiAppVersion:s,handleCopy:l,pluginName:o})=>{const{formatMessage:d}=(0,k.useIntl)(),m=ge().validRange(n),u=ge().satisfies(s,m),c=d({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!m)return e.createElement(Z,{installMessage:c,pluginName:o,description:d({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:l});if(!u)return e.createElement(Z,{installMessage:c,pluginName:o,description:d({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:m}),disabled:!0})}return e.createElement(t.Button,{size:"S",startIcon:e.createElement(f.Duplicate,null),variant:"secondary",onClick:l},c)};Z.defaultProps={disabled:!1,handleCopy:null},Z.propTypes={description:a().string.isRequired,installMessage:a().string.isRequired,disabled:a().bool,handleCopy:a().func,pluginName:a().string.isRequired},ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={strapiAppVersion:a().string,strapiPeerDepVersion:a().string,handleCopy:a().func.isRequired,pluginName:a().string.isRequired};const Ie=ee,te=({isInstalled:n,isInDevelopmentMode:s,commandToCopy:l,strapiAppVersion:o,strapiPeerDepVersion:d,pluginName:m})=>{const u=(0,g.useNotification)(),{formatMessage:c}=(0,k.useIntl)(),{trackUsage:h}=(0,g.useTracking)(),P=()=>{navigator.clipboard.writeText(l),h("willInstallPlugin"),u({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})};return n?e.createElement(t.Box,{paddingLeft:4},e.createElement(t.Icon,{as:f.Check,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(t.Typography,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(Ie,{strapiAppVersion:o,strapiPeerDepVersion:d,handleCopy:P,pluginName:m}):null};te.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},te.propTypes={isInstalled:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,commandToCopy:a().string.isRequired,strapiAppVersion:a().string,strapiPeerDepVersion:a().string,pluginName:a().string.isRequired};const Ne=te,Le=(0,b.default)(t.Divider)`
  width: ${(0,g.pxToRem)(12)};
  transform: rotate(90deg);
`,ae=({githubStars:n,npmDownloads:s,npmPackageType:l})=>{const{formatMessage:o}=(0,k.useIntl)();return e.createElement(t.Stack,{horizontal:!0,spacing:1},!!n&&e.createElement(e.Fragment,null,e.createElement(t.Icon,{as:f.Github,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement(t.Icon,{as:f.Star,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${l}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:n,package:l})},e.createElement(t.Typography,{variant:"pi",textColor:"neutral800",lineHeight:16},n)),e.createElement(Le,{unsetMargin:!1,background:"neutral200"})),e.createElement(t.Icon,{as:f.Download,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${l}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:l})},e.createElement(t.Typography,{variant:"pi",textColor:"neutral800",lineHeight:16},s)))};ae.defaultProps={githubStars:0,npmDownloads:0},ae.propTypes={githubStars:a().number,npmDownloads:a().number,npmPackageType:a().string.isRequired};const we=ae,De=(0,b.default)(t.Typography)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ne=({npmPackage:n,isInstalled:s,useYarn:l,isInDevelopmentMode:o,npmPackageType:d,strapiAppVersion:m})=>{const{attributes:u}=n,{formatMessage:c}=(0,k.useIntl)(),{trackUsage:h}=(0,g.useTracking)(),P=l?`yarn add ${u.npmPackageName}`:`npm install ${u.npmPackageName}`,T=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),$=`https://market.strapi.io/${H().plural(d)}/${u.slug}`;return e.createElement(t.Flex,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(t.Box,null,e.createElement(t.Flex,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(t.Box,{as:"img",src:u.logo.url,alt:`${u.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(we,{githubStars:u.githubStars,npmDownloads:u.npmDownloads,npmPackageType:d})),e.createElement(t.Box,{paddingTop:4},e.createElement(t.Typography,{as:"h3",variant:"delta"},e.createElement(t.Flex,{alignItems:"center"},u.name,u.validated&&!u.madeByStrapi&&e.createElement(t.Tooltip,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(t.Flex,null,e.createElement(t.Icon,{as:f.CheckCircle,marginLeft:2,color:"success600"}))),u.madeByStrapi&&e.createElement(t.Tooltip,{description:T},e.createElement(t.Flex,null,e.createElement(t.Box,{as:"img",src:Q,alt:T,marginLeft:1,width:6,height:"auto"})))))),e.createElement(t.Box,{paddingTop:2},e.createElement(De,{as:"p",variant:"omega",textColor:"neutral600"},u.description))),e.createElement(t.Stack,{horizontal:!0,spacing:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(q.Q,{size:"S",href:$,isExternal:!0,endIcon:e.createElement(f.ExternalLink,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:u.name}),variant:"tertiary",onClick:()=>h("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Ne,{isInstalled:s,isInDevelopmentMode:o,commandToCopy:P,strapiAppVersion:m,strapiPeerDepVersion:u.strapiVersion,pluginName:u.name})))};ne.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ne.propTypes={npmPackage:a().shape({id:a().string.isRequired,attributes:a().shape({name:a().string.isRequired,description:a().string.isRequired,slug:a().string.isRequired,npmPackageName:a().string.isRequired,npmPackageUrl:a().string.isRequired,repositoryUrl:a().string.isRequired,logo:a().object.isRequired,developerName:a().string.isRequired,validated:a().bool.isRequired,madeByStrapi:a().bool.isRequired,strapiCompatibility:a().oneOf(["v3","v4"]),strapiVersion:a().string,githubStars:a().number,npmDownloads:a().number}).isRequired}).isRequired,isInstalled:a().bool.isRequired,useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const Fe=ne,se=({npmPackages:n,installedPackageNames:s,useYarn:l,isInDevelopmentMode:o,npmPackageType:d,strapiAppVersion:m})=>{const u=(0,e.useCallback)(c=>s.includes(c),[s]);return e.createElement(t.Grid,{gap:4},n.map(c=>e.createElement(t.GridItem,{col:4,s:6,xs:12,style:{height:"100%"},key:c.id},e.createElement(Fe,{npmPackage:c,isInstalled:u(c.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:o,npmPackageType:d,strapiAppVersion:m}))))};se.defaultProps={installedPackageNames:[],strapiAppVersion:null},se.propTypes={npmPackages:a().array.isRequired,installedPackageNames:a().arrayOf(a().string),useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const me=se,Oe=(0,b.default)(t.Box)`
  font-weight: ${({theme:n})=>n.fontWeights.semiBold};

  span {
    font-size: ${({theme:n})=>n.fontSizes[1]};
  }
`,fe=({sortQuery:n,handleSelectChange:s})=>{const{formatMessage:l}=(0,k.useIntl)(),o={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(Oe,null,e.createElement(t.Select,{size:"S",id:"sort-by-select",value:n,customizeContent:()=>l(o[n].selected),onChange:d=>{s({sort:d})}},Object.entries(o).map(([d,m])=>e.createElement(t.Option,{key:d,value:d},l(m.option)))))};fe.propTypes={sortQuery:a().string.isRequired,handleSelectChange:a().func.isRequired};const Ae=fe,he=({message:n,value:s,onChange:l,possibleFilters:o,onClear:d,customizeContent:m})=>{const u=(c,h)=>`${c} (${h})`;return e.createElement(t.Select,{"data-testid":`${n}-button`,"aria-label":n,placeholder:n,size:"M",onChange:l,onClear:d,value:s,customizeContent:m,multi:!0},Object.entries(o).map(([c,h])=>e.createElement(t.Option,{"data-testid":`${c}-${h}`,key:c,value:c},u(c,h))))};he.propTypes={message:a().string.isRequired,value:a().array.isRequired,onChange:a().func.isRequired,possibleFilters:a().object.isRequired,onClear:a().func.isRequired,customizeContent:a().func.isRequired};const Pe=he,Ee=({source:n,onToggle:s,query:l,npmPackageType:o,possibleCategories:d,possibleCollections:m,handleSelectChange:u,handleSelectClear:c})=>{const{formatMessage:h}=(0,k.useIntl)();return e.createElement(t.Popover,{source:n,padding:3,spacing:4,onBlur:()=>{}},e.createElement(t.FocusTrap,{onEscape:s},e.createElement(t.Stack,{spacing:1},e.createElement(t.Box,null,e.createElement(Pe,{message:h({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:l?.collections||[],onChange:P=>{u({collections:P})},onClear:()=>c("collections"),possibleFilters:m,customizeContent:P=>h({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:P.length})})),o==="plugin"&&e.createElement(t.Box,null,e.createElement(Pe,{message:h({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:l?.categories||[],onChange:P=>{u({categories:P})},onClear:()=>c("categories"),possibleFilters:d,customizeContent:P=>h({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:P.length}),name:"categories"})))))};Ee.propTypes={onToggle:a().func.isRequired,source:a().shape({current:a().instanceOf(Element)}).isRequired,query:a().object.isRequired,npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const je=Ee,re=({name:n,handleRemove:s})=>e.createElement(t.Box,{padding:1},e.createElement(t.Tag,{icon:e.createElement(f.Cross,null),onClick:s},n)),qe=(0,b.default)(t.Button)`
  height: ${({theme:n})=>n.sizes.input.S};
`,ke=({possibleCollections:n,possibleCategories:s,npmPackageType:l,query:o,handleSelectClear:d,handleSelectChange:m})=>{const[u,c]=(0,e.useState)(!1),h=(0,e.useRef)(),{formatMessage:P}=(0,k.useIntl)(),T=()=>c(y=>!y),$=(y,D)=>{const v={[D]:o[D].filter(B=>B!==y)};m(v)};return e.createElement(e.Fragment,null,e.createElement(t.Box,{paddingTop:1,paddingBottom:1},e.createElement(qe,{variant:"tertiary",ref:h,"data-testid":"filters-button",startIcon:e.createElement(f.Filter,null),onClick:T,size:"S"},P({id:"app.utils.filters",defaultMessage:"Filters"})),u&&e.createElement(je,{onToggle:T,source:h,query:o,handleSelectClear:d,handleSelectChange:m,possibleCollections:n,possibleCategories:s,npmPackageType:l})),o.collections?.map(y=>e.createElement(re,{name:y,key:y,handleRemove:()=>$(y,"collections")})),l==="plugin"&&o.categories?.map(y=>e.createElement(re,{name:y,key:y,handleRemove:()=>$(y,"categories")})))};re.propTypes={name:a().string.isRequired,handleRemove:a().func.isRequired},ke.propTypes={npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,query:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const ze=ke,be=(n,s)=>(0,C.ZP)(n,s,{keys:[{threshold:C.ZP.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:C.ZP.rankings.WORD_STARTS_WITH,key:"attributes.description"}],baseSort:(l,o)=>l.index<o.index?-1:1}),ye=()=>{const{formatMessage:n}=(0,k.useIntl)(),{trackUsage:s}=(0,g.useTracking)(),{notifyStatus:l}=(0,t.useNotifyAT)(),o=(0,e.useRef)(s),d=(0,g.useNotification)(),[m,u]=(0,e.useState)(""),[{query:c},h]=(0,g.useQueryParams)(),{autoReload:P,dependencies:T,useYarn:$,strapiVersion:y}=(0,g.useAppInfos)(),D=A(),v=c?.npmPackageType||"plugin",[B,ve]=(0,e.useState)({plugin:v==="plugin"?{...c}:{},provider:v==="provider"?{...c}:{}});(0,g.useFocusWhenNavigate)();const Ue=n({id:"global.marketplace",defaultMessage:"Marketplace"}),Me=()=>{l(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:Ue}))},{status:Re,data:Te}=V(Me,B.provider),{status:xe,data:le}=p(Me,B.plugin),Ge=[xe,Re].includes("loading"),We=[xe,Re].includes("error");if((0,e.useEffect)(()=>{o.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{P||d({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[d,P]),!D)return e.createElement(t.Layout,null,e.createElement(t.Main,null,e.createElement(M,{isOnline:D}),e.createElement(t.Flex,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",style:{paddingTop:"120px"}},e.createElement(t.Box,{paddingBottom:2},e.createElement(t.Typography,{textColor:"neutral700",variant:"alpha"},n({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(t.Box,{paddingBottom:6},e.createElement(t.Typography,{textColor:"neutral700",variant:"epsilon"},n({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:W,alt:"offline",style:{width:"88px",height:"88px"}}))));if(We)return e.createElement(t.Layout,null,e.createElement(t.ContentLayout,null,e.createElement(t.Box,{paddingTop:8},e.createElement(g.AnErrorOccurred,null))));if(Ge)return e.createElement(t.Layout,null,e.createElement(t.Main,{"aria-busy":!0},e.createElement(g.LoadingIndicatorPage,null)));const ie=be(le.data,m),oe=be(Te.data,m),Se=n({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:m}),He=S=>{const R=S===0?"plugin":"provider",Ye=B[R]&&Object.keys(B[R]).length;h(Ye?{...B[R],npmPackageType:R}:{npmPackageType:R,collections:[],categories:[],sort:"name:asc"})},Ce=S=>{h(S),ve(R=>({...R,[v]:{...R[v],...S}}))},Qe=S=>{h({[S]:[]},"remove"),ve(R=>({...R,[v]:{}}))},$e=Object.keys(T),Ze=v==="plugin"?le.meta.collections:Te.meta.collections,Ke=le.meta.categories;return e.createElement(t.Layout,null,e.createElement(t.Main,null,e.createElement(F.Helmet,{title:n({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(M,{isOnline:D,npmPackageType:v}),e.createElement(t.ContentLayout,null,e.createElement(t.Box,{width:"25%",paddingBottom:4},e.createElement(t.Searchbar,{name:"searchbar",onClear:()=>u(""),value:m,onChange:S=>u(S.target.value),clearLabel:n({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:n({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},n({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"}))),e.createElement(t.TabGroup,{label:n({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(v),onTabChange:He},e.createElement(t.Box,{paddingBottom:4},e.createElement(t.Tabs,null,e.createElement(t.Tab,null,n({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ","(",ie.length,")"),e.createElement(t.Tab,null,n({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ","(",oe.length,")"))),e.createElement(t.Flex,{paddingBottom:4,gap:2},e.createElement(Ae,{sortQuery:c?.sort||"name:asc",handleSelectChange:Ce}),e.createElement(ze,{npmPackageType:v,possibleCollections:Ze,possibleCategories:Ke,query:c||{},handleSelectChange:Ce,handleSelectClear:Qe})),e.createElement(t.TabPanels,null,e.createElement(t.TabPanel,null,m.length>0&&!ie.length?e.createElement(w,{content:Se}):e.createElement(me,{npmPackages:ie,installedPackageNames:$e,useYarn:$,isInDevelopmentMode:P,npmPackageType:"plugin",strapiAppVersion:y})),e.createElement(t.TabPanel,null,m.length>0&&!oe.length?e.createElement(w,{content:Se}):e.createElement(me,{npmPackages:oe,installedPackageNames:$e,useYarn:$,isInDevelopmentMode:P,npmPackageType:"provider"})))),e.createElement(t.Box,{paddingTop:7},e.createElement(X,null)))))},Ve=()=>e.createElement(g.CheckPagePermissions,{permissions:G.Z.marketplace.main},e.createElement(ye,null))},21817:(ce,I,i)=>{i.d(I,{G:()=>t,Y:()=>x});var e=i(85893),k=i(67294),F=i(71893),C=i(11047),g=i(15585);const t=(0,F.default)(C.k)`
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

  ${g.BF}
`,x=k.forwardRef(({disabled:a,children:f,...b},N)=>(0,e.jsx)(t,{ref:N,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:"neutral0",borderColor:"neutral200",cursor:"pointer",...b,children:f}));x.displayName="BaseButton"},78324:(ce,I,i)=>{i.d(I,{Q:()=>U});var e=i(85893),k=i(67294),F=i(71893),C=i(21817),g=i(63507);const t="success-light",x="danger-light",a="default",f="tertiary",b="secondary",N="danger",j="success",L="ghost",w=[t,x],q=[a,f,b,N,j,L,...w],z=null;var M=i(75515);const E=r=>r===t||r===x?`${r.substring(0,r.lastIndexOf("-"))}`:r===f?"neutral":r===a||r===b||q.every(p=>p!==r)?"primary":`${r}`,O=({theme:r})=>`
    border: 1px solid ${r.colors.neutral200};
    background: ${r.colors.neutral150};
    ${M.Z} {
      color: ${r.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${r.colors.neutral600};
      }
    }
  `,K=({theme:r,variant:p})=>[...w,b].includes(p)?`
      background-color: ${r.colors.neutral0};
    `:p===f?`
      background-color: ${r.colors.neutral100};
    `:p===L?`
      background-color: ${r.colors.neutral100};
    `:p===a?`
      border: 1px solid ${r.colors.buttonPrimary500};
      background: ${r.colors.buttonPrimary500};
    `:`
    border: 1px solid ${r.colors[`${E(p)}500`]};
    background: ${r.colors[`${E(p)}500`]};
  `,Y=({theme:r,variant:p})=>[...w,b].includes(p)?`
      background-color: ${r.colors.neutral0};
      border: 1px solid ${r.colors[`${E(p)}600`]};
      ${M.Z} {
        color: ${r.colors[`${E(p)}600`]};
      }
      svg {
        > g, path {
          fill: ${r.colors[`${E(p)}600`]};
        }
      }
    `:p===f?`
      background-color: ${r.colors.neutral150};
    `:`
    border: 1px solid ${r.colors[`${E(p)}600`]};
    background: ${r.colors[`${E(p)}600`]};
  `,de=({theme:r,variant:p})=>{switch(p){case x:case t:case b:return`
          border: 1px solid ${r.colors[`${E(p)}200`]};
          background: ${r.colors[`${E(p)}100`]};
          ${M.Z} {
            color: ${r.colors[`${E(p)}700`]};
          }
          svg {
            > g, path {
              fill: ${r.colors[`${E(p)}700`]};
            }
          }
        `;case f:return`
          border: 1px solid ${r.colors.neutral200};
          background: ${r.colors.neutral0};
          ${M.Z} {
            color: ${r.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${r.colors.neutral800};
            }
          }
        `;case L:return`
        border: 1px solid transparent;
        background: transparent;

        ${M.Z} {
          color: ${r.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${r.colors.neutral500};
          }
        }
      `;case j:case N:return`
          border: 1px solid ${r.colors[`${E(p)}600`]};
          background: ${r.colors[`${E(p)}600`]};
          ${M.Z} {
            color: ${r.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${r.colors.buttonNeutral0};
            }
          }
        `}};var V=i(11047);const J=(0,F.default)(C.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${O}
    &:active {
      ${O}
    }
  }

  &:hover {
    ${K}
  }

  &:active {
    ${Y}
  }

  ${de}
`,U=k.forwardRef(({variant:r="default",startIcon:p,endIcon:G,disabled:W=!1,children:ue,size:A="S",as:pe=g.f,...X},_)=>{const H=A==="S"?2:"10px",Q=4;return(0,e.jsxs)(J,{ref:_,"aria-disabled":W,size:A,variant:r,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:H,paddingLeft:Q,paddingRight:Q,paddingTop:H,pointerEvents:W?"none":void 0,...X,as:pe||g.f,children:[p&&(0,e.jsx)(V.k,{"aria-hidden":!0,children:p}),(0,e.jsx)(M.Z,{variant:A==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:ue}),G&&(0,e.jsx)(V.k,{"aria-hidden":!0,children:G})]})});U.displayName="LinkButton"}}]);
