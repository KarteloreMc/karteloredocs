"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1075],{3905:(a,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>c});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=n.createContext({}),p=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},m=function(a){var e=p(a.components);return n.createElement(s.Provider,{value:e},a.children)},w="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,o=a.originalType,s=a.parentName,m=r(a,["components","mdxType","originalType","parentName"]),w=p(t),d=i,c=w["".concat(s,".").concat(d)]||w[d]||u[d]||o;return t?n.createElement(c,l(l({ref:e},m),{},{components:t})):n.createElement(c,l({ref:e},m))}));function c(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=a,r[w]="string"==typeof a?a:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3819:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,title:"Komendy"},l="Komendy - Pa\u0144stwa",r={unversionedId:"poradnik/pa\u0144stwa/komendy",id:"poradnik/pa\u0144stwa/komendy",title:"Komendy",description:"Ustawienia czatu",source:"@site/docs/poradnik/pa\u0144stwa/komendy.md",sourceDirName:"poradnik/pa\u0144stwa",slug:"/poradnik/pa\u0144stwa/komendy",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/komendy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/poradnik/pa\u0144stwa/komendy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Komendy"},sidebar:"tutorialSidebar",previous:{title:"Ochrona miasta",permalink:"/karteloredocs/docs/poradnik/pa\u0144stwa/ochronamiasta"},next:{title:"Strona2",permalink:"/karteloredocs/docs/poradnik/strona2"}},s={},p=[{value:"Ustawienia czatu",id:"ustawienia-czatu",level:3},{value:"/town (lub /t)",id:"town-lub-t",level:3},{value:"/nation (or /n)",id:"nation-or-n",level:3},{value:"/ally <code>nazwa</code>",id:"ally-nazwa",level:3},{value:"/unally <code>nazwa</code>",id:"unally-nazwa",level:3},{value:"/war <code>nazwa</code>",id:"war-nazwa",level:3},{value:"/peace <code>nazwa</code>",id:"peace-nazwa",level:3},{value:"/truce",id:"truce",level:3},{value:"/nodes (or /nd)",id:"nodes-or-nd",level:3},{value:"rafinerie",id:"rafinerie",level:3},{value:"porty",id:"porty",level:3}],m={toc:p},w="wrapper";function u(a){let{components:e,...t}=a;return(0,i.kt)(w,(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"komendy---pa\u0144stwa"},"Komendy - Pa\u0144stwa"),(0,i.kt)("h3",{id:"ustawienia-czatu"},"Ustawienia czatu"),(0,i.kt)("p",null,"Te ustawienia zmieniaj\u0105 tw\xf3j ",(0,i.kt)("strong",{parentName:"p"},"kana\u0142 czatu"),", tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, pa\u0144stwa lub sojuszu zobacz\u0105 wiadomo\u015b\u0107."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/globalchat (lub /gc): Ustawia czat na globalny (podstawowy, ka\u017cdy widzi wiadomo\u015bci).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/gc mute: Wycisza czat globalny."),(0,i.kt)("li",{parentName:"ul"},"/gc unmute: Odcisza czat globalny."))),(0,i.kt)("li",{parentName:"ul"},"/townchat (lub /tc): Tylko gracze w twoim mie\u015bcie widz\u0105 wiadomo\u015bci."),(0,i.kt)("li",{parentName:"ul"},"/nationchat (lub /nc): Tylko gracze w twoim pa\u0144stwie widz\u0105 wiadomo\u015bci."),(0,i.kt)("li",{parentName:"ul"},"/allychat (lub /ac): Tylko gracze z sojuszu pa\u0144stwa b\u0105d\u017a miasta$ widz\u0105 wiadomo\u015bci.")),(0,i.kt)("h3",{id:"town-lub-t"},"/town (lub /t)"),(0,i.kt)("p",null,"S\u0142u\u017cy do zarz\u0105dzania miastem gracza."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/town create ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Create a new town with the specified name at location. S\u0142u\u017cy do tworzenia nowego miasta z konkretn\u0105 nazw\u0105 i prowincj\u0105."),(0,i.kt)("li",{parentName:"ul"},"/town delete: Usuwa miasto (tylko dla lidera miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town promote ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Awansuje gracza na oficera miasta."),(0,i.kt)("li",{parentName:"ul"},"/town demote ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Degraduje gracza z pozycji oficera miasta."),(0,i.kt)("li",{parentName:"ul"},"/town leader ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Oddaje przyw\xf3dztwo nad miastem innemu cz\u0142onkowi miasta."),(0,i.kt)("li",{parentName:"ul"},"/town apply ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Pro\u015bba o do\u0142\u0105czenie do miasta."),(0,i.kt)("li",{parentName:"ul"},"/town invite ",(0,i.kt)("inlineCode",{parentName:"li"},"gracz"),": Zaprasza gracza do twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town leave: Wychodzi z miasta."),(0,i.kt)("li",{parentName:"ul"},"/town kick ",(0,i.kt)("inlineCode",{parentName:"li"},"gracz"),": Wyrzuca innego gracza z twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town spawn: Teleportuje si\u0119 do g\u0142\xf3wnego spawnpointa miasta.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/town spawn ","[outpost]",": Teleport to an outpost's spawn point."))),(0,i.kt)("li",{parentName:"ul"},"/town setspawn: Zmienia spawnpoint twojego miasta na inn\u0105 lokacje w g\u0142\xf3wnej prowincji miasta$(homechunk) (tylko dla lidera miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town list: Wy\u015bwietla list\u0119 wszystkich miast."),(0,i.kt)("li",{parentName:"ul"},"/town info: Wy\u015bwietla nazw\u0119 miasta, lidera, oficer\xf3w, residents i zaj\u0119te prowincje."),(0,i.kt)("li",{parentName:"ul"},"/town info ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla informacje innego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town online: Wy\u015bwietla graczy online twojego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town online ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla graczy online innego miasta."),(0,i.kt)("li",{parentName:"ul"},"/town color ","[r][g]"," ","[b]",": Ustawia kolor miasta na dynmapie$ (tylko dla lidera)."),(0,i.kt)("li",{parentName:"ul"},"/town claim: Zajmuje prowincje dla twojego miasta (tylko dla lider\xf3w i oficer\xf3w)"),(0,i.kt)("li",{parentName:"ul"},"/town unclaim: Przestaje zajmowa\u0107 prowincj\u0119 w kt\xf3rej jeste\u015b."),(0,i.kt)("li",{parentName:"ul"},"/town income: Zbiera przych\xf3d miast i rafinerii (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town rename ","[nowa nazwa]",": Zmienia nazw\u0119 twojego miasta (tylko dla lidera miasta)"),(0,i.kt)("li",{parentName:"ul"},"/town map: Wy\u015bwietla map\u0119 prowincji dla gracza na czat."),(0,i.kt)("li",{parentName:"ul"},"/town minimap ","[3|4|5]",": W\u0142\u0105cza/wy\u0142\u0105cza widok chunk\xf3w prowincji na minimapie po prawej stronie. Opcjonalnie mo\u017cesz wybra\u0107 jej wielko\u015b\u0107: 3, 4, 5."),(0,i.kt)("li",{parentName:"ul"},"/town permissions ","[type][group]"," ","[allow/deny]",": Ustawia permisje dla interakcji w prowincji miasta.  Wi\u0119cej na$"),(0,i.kt)("li",{parentName:"ul"},"/town protect: Toggle protecting/unprotecting chests with mouse click. W\u0142\u0105cza chronienie lub usuwanie go na skrzynkach przyciskiem myszy."),(0,i.kt)("li",{parentName:"ul"},"/town protect show: Pokazuje chronione skrzynki z particlesami."),(0,i.kt)("li",{parentName:"ul"},"/town trust ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako zaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town untrust ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako niezaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,i.kt)("li",{parentName:"ul"},"/town capital: Przesuwa stolice prowincji do miejsca w kt\xf3rym si\u0119 znajdujesz (zmienia to te\u017c lokalizacje spawnu miasta)."),(0,i.kt)("li",{parentName:"ul"},"/town annex: Anektuje okupowane terytorium i dodaje je do twojego miasta.")),(0,i.kt)("h3",{id:"nation-or-n"},"/nation (or /n)"),(0,i.kt)("p",null,"Do zarz\u0105dzania pa\u0144stwem gracza."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/nation create ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Tworzy pa\u0144stwo z twoim miastem jako jego stolica."),(0,i.kt)("li",{parentName:"ul"},"/nation delete: Usuwa pa\u0144stwo (tylko dla lidera stolicy pa\u0144stwa)"),(0,i.kt)("li",{parentName:"ul"},"/nation leave: Wychodzi z pa\u0144stwa (tylko dla lidera miasta)."),(0,i.kt)("li",{parentName:"ul"},"/nation capital ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Ustawia inne miasto jako stolice twojego pa\u0144stwa."),(0,i.kt)("li",{parentName:"ul"},"/nation invite ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Zaprasza miasto do pa\u0144stwa (tylko dla lidera stolicy pa\u0144stwa)"),(0,i.kt)("li",{parentName:"ul"},"/nation list: Wy\u015bwietla list\u0119 wszystkich pa\u0144stw i ich miast."),(0,i.kt)("li",{parentName:"ul"},"/nation color ","[r][g]"," ","[b]",": Ustawia kolor posiadanych prowincji prze pa\u0144stwo na dynmapie (tylko dla lidera stolicy pa\u0144stwa)."),(0,i.kt)("li",{parentName:"ul"},"/nation rename ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Zmienia nazw\u0119 pa\u0144stwa (tylko dla lidera stolicy pa\u0144stwa). "),(0,i.kt)("li",{parentName:"ul"},"/nation online: Sprawdza graczy online pa\u0144stwa."),(0,i.kt)("li",{parentName:"ul"},"/nation online ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Sprawdza graczy online innego pa\u0144stwa."),(0,i.kt)("li",{parentName:"ul"},"/nation info ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Sprawdza informacje pa\u0144stwa."),(0,i.kt)("li",{parentName:"ul"},"/nation spawn ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Teleportuje si\u0119 do miasta w pa\u0144stwie. Mo\u017ce to kosztowa\u0107 przedmioty.")),(0,i.kt)("h3",{id:"ally-nazwa"},"/ally ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Zaoferuj/akceptuj sojusze z innymi miastami lub pa\u0144stwami."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/ally ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": zaoferuj/akceptuj sojusz z innym miastem."),(0,i.kt)("li",{parentName:"ul"},"/ally ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": zaoferuj/akceptuj sojusz z innym pa\u0144stwem.")),(0,i.kt)("h3",{id:"unally-nazwa"},"/unally ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Rozwi\u0105zuje sojusz z  miastem b\u0105d\u017a pa\u0144stwem. Miasta wchodz\u0105 wtedy w okres rozejmu."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/unally ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Rozwi\u0105\u017c sojusz miastem."),(0,i.kt)("li",{parentName:"ul"},"/unally ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Rozwi\u0105\u017c sojusz pa\u0144stwem.")),(0,i.kt)("h3",{id:"war-nazwa"},"/war ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Wypowiada wojn\u0119 innym miastom lub pa\u0144stwom."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/war ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wypowiada wojne miastu."),(0,i.kt)("li",{parentName:"ul"},"/war ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Wypowiada wojne pa\u0144stwu.")),(0,i.kt)("h3",{id:"peace-nazwa"},"/peace ",(0,i.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,i.kt)("p",null,"Otwiera okno traktatu pokojowego z innym pa\u0144stwem b\u0105d\u017a miastem."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/peace ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Negocjuje traktat pokojowy z innym miastem."),(0,i.kt)("li",{parentName:"ul"},"/peace ",(0,i.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Negocjuje traktat pokojowy z innym pa\u0144stwem.")),(0,i.kt)("h3",{id:"truce"},"/truce"),(0,i.kt)("p",null,"Wy\u015bwietla trwaj\u0105ce rozejmy miasta z innymi miastami."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/truce ",(0,i.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla trwaj\u0105ce rozejmy innego miasta.")),(0,i.kt)("h3",{id:"nodes-or-nd"},"/nodes (or /nd)"),(0,i.kt)("p",null,"For printing general info about the world (e.g. resource nodes, territories, towns, nations, players). Can be used by players ingame or in console. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/nodes help: Prints list of commands"),(0,i.kt)("li",{parentName:"ul"},"/nodes resource: Prints list of all resource nodes"),(0,i.kt)("li",{parentName:"ul"},"/nodes resource ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Print detailed stats of a resource node type (income, crops, animals, ore)"),(0,i.kt)("li",{parentName:"ul"},"/nodes territory: In console, just prints total territory count. Ingame, prints info about territory player is standing in."),(0,i.kt)("li",{parentName:"ul"},"/nodes territory ","[id]",": Prints info about territory from id"),(0,i.kt)("li",{parentName:"ul"},"/nodes town: Prints list of all towns, their player count and territory count"),(0,i.kt)("li",{parentName:"ul"},"/nodes town ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints detailed info about town from ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa")," (territories, players, etc...)"),(0,i.kt)("li",{parentName:"ul"},"/nodes nation: Prints list of all nations"),(0,i.kt)("li",{parentName:"ul"},"/nodes nation ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints detailed info about nation from ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa")," (towns, allies, enemies, etc...)"),(0,i.kt)("li",{parentName:"ul"},"/nodes player ",(0,i.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints player info (their town and nation)"),(0,i.kt)("li",{parentName:"ul"},"/nodes war: Print if war enabled/disabled")),(0,i.kt)("h3",{id:"rafinerie"},"rafinerie"),(0,i.kt)("h3",{id:"porty"},"porty"))}u.isMDXComponent=!0}}]);