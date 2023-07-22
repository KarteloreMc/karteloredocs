"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1075],{3905:(e,a,t)=>{t.d(a,{Zo:()=>w,kt:()=>d});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},w=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,w=r(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?n.createElement(d,l(l({ref:a},w),{},{components:t})):n.createElement(d,l({ref:a},w))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3819:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,title:"Komendy"},l="Komendy - Pa\u0144stwa",r={unversionedId:"poradnik/pa\u0144stwa/komendy",id:"poradnik/pa\u0144stwa/komendy",title:"Komendy",description:"Ustawienia czatu",source:"@site/docs/poradnik/pa\u0144stwa/komendy.md",sourceDirName:"poradnik/pa\u0144stwa",slug:"/poradnik/pa\u0144stwa/komendy",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/komendy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/poradnik/pa\u0144stwa/komendy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Komendy"},sidebar:"tutorialSidebar",previous:{title:"Ochrona miasta",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/ochronamiasta"},next:{title:"Strona2",permalink:"/karteloredocs/docs/poradnik/strona2"}},s={},p=[{value:"Ustawienia czatu",id:"ustawienia-czatu",level:3},{value:"/town (lub /t)",id:"town-lub-t",level:3},{value:"/nation (or /n)",id:"nation-or-n",level:3},{value:"/ally <code>nazwa</code>",id:"ally-nazwa",level:3},{value:"/unally <code>nazwa</code>",id:"unally-nazwa",level:3},{value:"/war <code>nazwa</code>",id:"war-nazwa",level:3},{value:"/peace <code>nazwa</code>",id:"peace-nazwa",level:3},{value:"/truce",id:"truce",level:3},{value:"/nodes (or /nd)",id:"nodes-or-nd",level:3}],w={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(m,(0,n.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"komendy---pa\u0144stwa"},"Komendy - Pa\u0144stwa"),(0,i.kt)("h3",{id:"ustawienia-czatu"},"Ustawienia czatu"),(0,i.kt)("p",null,"Te ustawienia zmieniaj\u0105 tw\xf3j ",(0,i.kt)("strong",{parentName:"p"},"kana\u0142 czatu"),", tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, pa\u0144stwa lub sojuszu zobacz\u0105 wiadomo\u015b\u0107."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/globalchat (lub /gc): Ustawia czat na globalny (podstawowy, ka\u017cdy widzi wiadomo\u015bci).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/gc mute: Wycisza czat globalny."),(0,i.kt)("li",{parentName:"ul"},"/gc unmute: Odcisza czat globalny."))),(0,i.kt)("li",{parentName:"ul"},"/townchat (lub /tc): Tylko gracze w twoim mie\u015bcie widz\u0105 wiadomo\u015bci."),(0,i.kt)("li",{parentName:"ul"},"/nationchat (lub /nc): Tylko gracze w twoim pa\u0144stwie widz\u0105 wiadomo\u015bci."),(0,i.kt)("li",{parentName:"ul"},"/allychat (lub /ac): Tylko gracze z sojuszu pa\u0144stwa b\u0105d\u017a miasta$ widz\u0105 wiadomo\u015bci.")),(0,i.kt)("h3",{id:"town-lub-t"},"/town (lub /t)"),(0,i.kt)("p",null,"S\u0142u\u017cy do zarz\u0105dzania miastem gracza."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/town create ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Create a new town with the specified name at location. S\u0142u\u017cy do tworzenia nowego miasta z konkretn\u0105 nazw\u0105 i prowincj\u0105."),(0,i.kt)("li",{parentName:"ul"},"/town delete: Usuwa miasto (tylko dla lidera miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town promote ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Awansuje gracza na oficera miasta."),(0,i.kt)("li",{parentName:"ul"},"/town demote ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Degraduje gracza z pozycji oficera miasta."),(0,i.kt)("li",{parentName:"ul"},"/town leader ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Oddaje przyw\xf3dztwo nad miastem innemu cz\u0142onkowi miasta."),(0,i.kt)("li",{parentName:"ul"},"/town apply ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Pro\u015bba o do\u0142\u0105czenie do miasta."),(0,i.kt)("li",{parentName:"ul"},"/town invite ",(0,i.kt)("inlineCode",{parentName:"li"},"gracz"),": Zaprasza gracza do twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town leave: Wychodzi z miasta."),(0,i.kt)("li",{parentName:"ul"},"/town kick ",(0,i.kt)("inlineCode",{parentName:"li"},"gracz"),": Wyrzuca innego gracza z twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town spawn: Teleportuje si\u0119 do g\u0142\xf3wnego spawnpointa miasta.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/town spawn ","[outpost]",": Teleport to an outpost's spawn point."))),(0,i.kt)("li",{parentName:"ul"},"/town setspawn: Zmienia spawnpoint twojego miasta na inn\u0105 lokacje w g\u0142\xf3wnej prowincji miasta$(homechunk) (tylko dla lidera miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town list: Wy\u015bwietla list\u0119 wszystkich miast."),(0,i.kt)("li",{parentName:"ul"},"/town info: Wy\u015bwietla nazw\u0119 miasta, lidera, oficer\xf3w, residents i zaj\u0119te prowincje."),(0,i.kt)("li",{parentName:"ul"},"/town info ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla informacje innego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town online: Wy\u015bwietla graczy online twojego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town online ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla graczy online innego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town color ","[r][g]"," ","[b]",": Ustawia kolor miasta na dynmapie$ (tylko dla lidera)."),(0,i.kt)("li",{parentName:"ul"},"/town claim: Zajmuje prowincje dla twojego miasta (tylko dla lider\xf3w i oficer\xf3w)"),(0,i.kt)("li",{parentName:"ul"},"/town unclaim: Przestaje zajmowa\u0107 prowincj\u0119 w kt\xf3rej jeste\u015b."),(0,i.kt)("li",{parentName:"ul"},"/town income: Zbiera przych\xf3d miast i rafinerii (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town rename ","[nowa nazwa]",": Zmienia nazw\u0119 twojego miasta (tylko dla lidera miasta)"),(0,i.kt)("li",{parentName:"ul"},"/town map: Wy\u015bwietla map\u0119 prowincji dla gracza na czat."),(0,i.kt)("li",{parentName:"ul"},"/town minimap ","[3|4|5]",": W\u0142\u0105cza/wy\u0142\u0105cza widok chunk\xf3w prowincji na minimapie po prawej stronie. Opcjonalnie mo\u017cesz wybra\u0107 jej wielko\u015b\u0107: 3, 4, 5."),(0,i.kt)("li",{parentName:"ul"},"/town permissions ","[type][group]"," ","[allow/deny]",": Ustawia permisje dla interakcji w prowincji miasta.  Wi\u0119cej na$"),(0,i.kt)("li",{parentName:"ul"},"/town protect: Toggle protecting/unprotecting chests with mouse click. W\u0142\u0105cza chronienie lub usuwanie go na skrzynkach przyciskiem myszy."),(0,i.kt)("li",{parentName:"ul"},"/town protect show: Pokazuje chronione skrzynki z particlesami."),(0,i.kt)("li",{parentName:"ul"},"/town trust ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako zaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town untrust ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako niezaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town capital: Przesuwa stolice prowincji do miejsca w kt\xf3rym si\u0119 znajdujesz (zmienia to te\u017c lokalizacje spawnu miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town annex: Anektuje okupowane terytorium i dodaje je do twojego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town outpost: Commands to manage town outposts."),(0,i.kt)("li",{parentName:"ul"},"/town outpost list: Print list of town's outposts."),(0,i.kt)("li",{parentName:"ul"},"/town outpost setspawn: Set an outpost's spawn point. Player must be in the outpost territory.")),(0,i.kt)("h3",{id:"nation-or-n"},"/nation (or /n)"),(0,i.kt)("p",null,"Do zarz\u0105dzania pa\u0144stwem gracza."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/nation create ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Create a new nation with your town as capital. Tworzy pa\u0144stwo z twoim miastem jako stolica."),(0,i.kt)("li",{parentName:"ul"},"/nation delete: Delete your nation. Leader of capital town only."),(0,i.kt)("li",{parentName:"ul"},"/nation leave: Leave your nation. Used by town leaders only."),(0,i.kt)("li",{parentName:"ul"},"/nation capital ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Set another town in your nation as its capital"),(0,i.kt)("li",{parentName:"ul"},"/nation invite ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Invite another town to join your nation. Leader of capital town only."),(0,i.kt)("li",{parentName:"ul"},"/nation list: View list of all established nations and their towns"),(0,i.kt)("li",{parentName:"ul"},"/nation color ","[r][g]"," ","[b]",": Set territory color on dynmap for all towns in nation. Leader of capital town only."),(0,i.kt)("li",{parentName:"ul"},"/nation rename ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Renames your nation. Leader of capital town only."),(0,i.kt)("li",{parentName:"ul"},"/nation online: View your nation's online players"),(0,i.kt)("li",{parentName:"ul"},"/nation online ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": View another nation's online players"),(0,i.kt)("li",{parentName:"ul"},"/nation info ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": View nation's info"),(0,i.kt)("li",{parentName:"ul"},"/nation spawn ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Teleport to town inside your nation. May cost items to use.")),(0,i.kt)("h3",{id:"ally-nazwa"},"/ally ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Offer/accept alliance with another town or nation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/ally ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Offer/accept alliance with a town."),(0,i.kt)("li",{parentName:"ul"},"/ally ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Offer/accept alliance with a nation.")),(0,i.kt)("h3",{id:"unally-nazwa"},"/unally ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Break alliance with another town or nation. Towns will enter a truce period."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/unally ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Break alliance with a town."),(0,i.kt)("li",{parentName:"ul"},"/unally ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Break alliance with a nation.")),(0,i.kt)("h3",{id:"war-nazwa"},"/war ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Declare war on other towns or nations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/war ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Declares war on a town."),(0,i.kt)("li",{parentName:"ul"},"/war ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Declares war on a nation.")),(0,i.kt)("h3",{id:"peace-nazwa"},"/peace ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Opens peace treaty window with another town or nation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/peace ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Negotiate a peace treaty with a town."),(0,i.kt)("li",{parentName:"ul"},"/peace ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Negotiate a peace treaty with a nation.")),(0,i.kt)("h3",{id:"truce"},"/truce"),(0,i.kt)("p",null,"View your town's remaining truce times with other towns."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/truce ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": View other town's remaining truce times.")),(0,i.kt)("h3",{id:"nodes-or-nd"},"/nodes (or /nd)"),(0,i.kt)("p",null,"For printing general info about the world (e.g. resource nodes, territories, towns, nations, players). Can be used by players ingame or in console."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/nodes help: Prints list of commands"),(0,i.kt)("li",{parentName:"ul"},"/nodes resource: Prints list of all resource nodes"),(0,i.kt)("li",{parentName:"ul"},"/nodes resource ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Print detailed stats of a resource node type (income, crops, animals, ore)"),(0,i.kt)("li",{parentName:"ul"},"/nodes territory: In console, just prints total territory count. Ingame, prints info about territory player is standing in."),(0,i.kt)("li",{parentName:"ul"},"/nodes territory ","[id]",": Prints info about territory from id"),(0,i.kt)("li",{parentName:"ul"},"/nodes town: Prints list of all towns, their player count and territory count"),(0,i.kt)("li",{parentName:"ul"},"/nodes town ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints detailed info about town from ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa")," (territories, players, etc...)"),(0,i.kt)("li",{parentName:"ul"},"/nodes nation: Prints list of all nations"),(0,i.kt)("li",{parentName:"ul"},"/nodes nation ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints detailed info about nation from ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa")," (towns, allies, enemies, etc...)"),(0,i.kt)("li",{parentName:"ul"},"/nodes player ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints player info (their town and nation)"),(0,i.kt)("li",{parentName:"ul"},"/nodes war: Print if war enabled/disabled")))}u.isMDXComponent=!0}}]);