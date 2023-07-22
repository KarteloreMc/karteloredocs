"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1075],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},w="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),w=p(t),u=o,m=w["".concat(s,".").concat(u)]||w[u]||c[u]||i;return t?a.createElement(m,r(r({ref:e},d),{},{components:t})):a.createElement(m,r({ref:e},d))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[w]="string"==typeof n?n:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3819:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:5,title:"Komendy"},r="Komendy - Pa\u0144stwa",l={unversionedId:"poradnik/pa\u0144stwa/komendy",id:"poradnik/pa\u0144stwa/komendy",title:"Komendy",description:"Ustawienia czatu",source:"@site/docs/poradnik/pa\u0144stwa/komendy.md",sourceDirName:"poradnik/pa\u0144stwa",slug:"/poradnik/pa\u0144stwa/komendy",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/komendy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/poradnik/pa\u0144stwa/komendy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Komendy"},sidebar:"tutorialSidebar",previous:{title:"Ochrona miasta",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/ochronamiasta"},next:{title:"Strona2",permalink:"/karteloredocs/docs/poradnik/strona2"}},s={},p=[{value:"Ustawienia czatu",id:"ustawienia-czatu",level:3},{value:"/town (lub /t)",id:"town-lub-t",level:3},{value:"/nation (or /n)",id:"nation-or-n",level:3},{value:"/ally <code>nazwa</code>",id:"ally-nazwa",level:3},{value:"/unally <code>nazwa</code>",id:"unally-nazwa",level:3},{value:"/war <code>nazwa</code>",id:"war-nazwa",level:3},{value:"/peace <code>nazwa</code>",id:"peace-nazwa",level:3},{value:"/truce",id:"truce",level:3},{value:"/nodes (or /nd)",id:"nodes-or-nd",level:3}],d={toc:p},w="wrapper";function c(n){let{components:e,...t}=n;return(0,o.kt)(w,(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"komendy---pa\u0144stwa"},"Komendy - Pa\u0144stwa"),(0,o.kt)("h3",{id:"ustawienia-czatu"},"Ustawienia czatu"),(0,o.kt)("p",null,"Te ustawienia zmieniaj\u0105 tw\xf3j ",(0,o.kt)("strong",{parentName:"p"},"kana\u0142 czatu"),", tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, pa\u0144stwa lub sojuszu zobacz\u0105 wiadomo\u015b\u0107."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/globalchat (lub /gc): Ustawia czat na globalny (podstawowy, ka\u017cdy widzi wiadomo\u015bci).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/gc mute: Wycisza czat globalny."),(0,o.kt)("li",{parentName:"ul"},"/gc unmute: Odcisza czat globalny."))),(0,o.kt)("li",{parentName:"ul"},"/townchat (lub /tc): Tylko gracze w twoim mie\u015bcie widz\u0105 wiadomo\u015bci."),(0,o.kt)("li",{parentName:"ul"},"/nationchat (lub /nc): Tylko gracze w twoim pa\u0144stwie widz\u0105 wiadomo\u015bci."),(0,o.kt)("li",{parentName:"ul"},"/allychat (lub /ac): Tylko gracze z sojuszu pa\u0144stwa b\u0105d\u017a miasta$ widz\u0105 wiadomo\u015bci.")),(0,o.kt)("h3",{id:"town-lub-t"},"/town (lub /t)"),(0,o.kt)("p",null,"S\u0142u\u017cy do zarz\u0105dzania miastem gracza."),(0,o.kt)("p",null,"/town create ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Create a new town with the specified name at location. S\u0142u\u017cy do tworzenia nowego miasta z konkretn\u0105 nazw\u0105 i prowincj\u0105.\n/town delete: Usuwa miasto (tylko dla lidera miasta).\n/town promote ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Awansuje gracza na oficera miasta.\n/town demote ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Degraduje gracza z pozycji oficera miasta.\n/town leader ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Oddaje przyw\xf3dztwo nad miastem innemu cz\u0142onkowi miasta.\n/town apply ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Pro\u015bba o do\u0142\u0105czenie do miasta.\n/town invite ",(0,o.kt)("inlineCode",{parentName:"p"},"gracz"),": Zaprasza gracza do twojego miasta (tylko dla lider\xf3w i oficer\xf3w).\n/town leave: Wychodzi z miasta.\n/town kick ",(0,o.kt)("inlineCode",{parentName:"p"},"gracz"),": Wyrzuca innego gracza z twojego miasta (tylko dla lider\xf3w i oficer\xf3w).\n/town spawn: Teleportuje si\u0119 do g\u0142\xf3wnego spawnpointa miasta."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- /town spawn [outpost]: Teleport to an outpost's spawn point.\n")),(0,o.kt)("p",null,"/town setspawn: Zmienia spawnpoint twojego miasta na inn\u0105 lokacje w g\u0142\xf3wnej prowincji miasta$(homechunk) tylko dla lidera miasta).\n/town list: Wy\u015bwietla list\u0119 wszystkich miast.\n/town info: View your town's name, leader, officers, residents, and claims.\n/town info ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": View details of another town\n/town online: View your town's online players\n/town online ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": View another town's online players\n/town color ","[r][g]"," ","[b]",": Set town territory color for dynmap. Town leader only.\n/town claim: Claim a contiguous territory for your town. Town leader and officers only.\n/town unclaim: Abandon your town's claim over a territory\n/town income: Collect income from territory bonuses. Town leader and officers only.\n/town prefix ","[prefix]",": Set personal chat prefix\n/town prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"gracz")," ","[prefix]",": Set a player's prefix (leader and officers only)\n/town suffix ","[suffix]",": Set personal chat suffix\n/town suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"gracz")," ","[suffix]",": Set a player's suffix (leader and officers only)\n/town rename ","[new name]",": Rename your town. Town leader only.\n/town map: Prints territory map into chat for player\n/town minimap ","[3|4|5]",": Turns on/off territory chunks minimap on sidebar. Optionally specify size value: 3, 4, or 5.\n/town permissions ","[type][group]"," ","[allow/deny]",": Set permissions for interacting in town territory. ","[type]"," can be: interact, build, destroy, chests, items ","[group]",' can be: nation, ally, outsider. Last entry is either "allow" or "deny"\n/town protect: Toggle protecting/unprotecting chests with mouse click.\n/town protect show: Shows protected chests with particles\n/town trust ',(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Mark player in town as trusted. Leader and officers only.\n/town untrust ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Mark player in town as untrusted. Leader and officers only.\n/town capital: Move town home territory to your current player location. (This also changes town spawn location.)\n/town annex: Annex an occupied territory and add it to your town\n/town outpost: Commands to manage town outposts.\n/town outpost list: Print list of town's outposts.\n/town outpost setspawn: Set an outpost's spawn point. Player must be in the outpost territory."),(0,o.kt)("h3",{id:"nation-or-n"},"/nation (or /n)"),(0,o.kt)("p",null,"For managing a player's nation, intended to only be used ingame by players."),(0,o.kt)("p",null,"/nation create ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Create a new nation with your town as capital.\n/nation delete: Delete your nation. Leader of capital town only.\n/nation leave: Leave your nation. Used by town leaders only.\n/nation capital ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Set another town in your nation as its capital\n/nation invite ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Invite another town to join your nation. Leader of capital town only.\n/nation list: View list of all established nations and their towns\n/nation color ","[r][g]"," ","[b]",": Set territory color on dynmap for all towns in nation. Leader of capital town only.\n/nation rename ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Renames your nation. Leader of capital town only.\n/nation online: View your nation's online players\n/nation online ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": View another nation's online players\n/nation info ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": View nation's info\n/nation spawn ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Teleport to town inside your nation. May cost items to use."),(0,o.kt)("h3",{id:"ally-nazwa"},"/ally ",(0,o.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,o.kt)("p",null,"Offer/accept alliance with another town or nation."),(0,o.kt)("p",null,"/ally ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Offer/accept alliance with a town.\n/ally ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": Offer/accept alliance with a nation."),(0,o.kt)("h3",{id:"unally-nazwa"},"/unally ",(0,o.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,o.kt)("p",null,"Break alliance with another town or nation. Towns will enter a truce period."),(0,o.kt)("p",null,"/unally ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Break alliance with a town.\n/unally ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": Break alliance with a nation."),(0,o.kt)("h3",{id:"war-nazwa"},"/war ",(0,o.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,o.kt)("p",null,"Declare war on other towns or nations."),(0,o.kt)("p",null,"/war ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Declares war on a town.\n/war ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": Declares war on a nation."),(0,o.kt)("h3",{id:"peace-nazwa"},"/peace ",(0,o.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,o.kt)("p",null,"Opens peace treaty window with another town or nation."),(0,o.kt)("p",null,"/peace ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": Negotiate a peace treaty with a town.\n/peace ",(0,o.kt)("inlineCode",{parentName:"p"},"pa\u0144stwo"),": Negotiate a peace treaty with a nation."),(0,o.kt)("h3",{id:"truce"},"/truce"),(0,o.kt)("p",null,"View your town's remaining truce times with other towns."),(0,o.kt)("p",null,"/truce ",(0,o.kt)("inlineCode",{parentName:"p"},"miasto"),": View other town's remaining truce times."),(0,o.kt)("h3",{id:"nodes-or-nd"},"/nodes (or /nd)"),(0,o.kt)("p",null,"For printing general info about the world (e.g. resource nodes, territories, towns, nations, players). Can be used by players ingame or in console."),(0,o.kt)("p",null,"/nodes help: Prints list of commands\n/nodes resource: Prints list of all resource nodes\n/nodes resource ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Print detailed stats of a resource node type (income, crops, animals, ore)\n/nodes territory: In console, just prints total territory count. Ingame, prints info about territory player is standing in.\n/nodes territory ","[id]",": Prints info about territory from id\n/nodes town: Prints list of all towns, their player count and territory count\n/nodes town ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Prints detailed info about town from ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa")," (territories, players, etc...)\n/nodes nation: Prints list of all nations\n/nodes nation ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Prints detailed info about nation from ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa")," (towns, allies, enemies, etc...)\n/nodes player ",(0,o.kt)("inlineCode",{parentName:"p"},"nazwa"),": Prints player info (their town and nation)\n/nodes war: Print if war enabled/disabled"))}c.isMDXComponent=!0}}]);