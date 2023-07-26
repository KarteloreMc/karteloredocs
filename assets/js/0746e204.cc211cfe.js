"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75],{3905:(a,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>k});var i=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,i,n=function(a,e){if(null==a)return{};var t,i,n={},l=Object.keys(a);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var p=i.createContext({}),w=function(a){var e=i.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},m=function(a){var e=w(a.components);return i.createElement(p.Provider,{value:e},a.children)},s="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(a,e){var t=a.components,n=a.mdxType,l=a.originalType,p=a.parentName,m=r(a,["components","mdxType","originalType","parentName"]),s=w(t),c=n,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return t?i.createElement(k,o(o({ref:e},m),{},{components:t})):i.createElement(k,o({ref:e},m))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=a,r[s]="string"==typeof a?a:n,o[1]=r;for(var w=2;w<l;w++)o[w]=t[w];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3819:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>w});var i=t(7462),n=(t(7294),t(3905));const l={sidebar_position:5,title:"Komendy"},o="Komendy - Pa\u0144stwa",r={unversionedId:"poradnik/pa\u0144stwa/komendy",id:"poradnik/pa\u0144stwa/komendy",title:"Komendy",description:"Ustawienia czatu",source:"@site/docs/poradnik/pa\u0144stwa/komendy.md",sourceDirName:"poradnik/pa\u0144stwa",slug:"/poradnik/pa\u0144stwa/komendy",permalink:"/poradnik/pa\u0144stwa/komendy",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Komendy"},sidebar:"defaultSidebar",previous:{title:"Ochrona miasta",permalink:"/poradnik/pa\u0144stwa/ochronamiasta"}},p={},w=[{value:"Ustawienia czatu",id:"ustawienia-czatu",level:3},{value:"/town (lub /t)",id:"town-lub-t",level:3},{value:"/nation (lub /n)",id:"nation-lub-n",level:3},{value:"/ally <code>nazwa</code>",id:"ally-nazwa",level:3},{value:"/unally <code>nazwa</code>",id:"unally-nazwa",level:3},{value:"/war <code>nazwa</code>",id:"war-nazwa",level:3},{value:"/peace <code>nazwa</code>",id:"peace-nazwa",level:3},{value:"/truce",id:"truce",level:3},{value:"/nodes (lub /nd)",id:"nodes-lub-nd",level:3},{value:"Rafinerie",id:"rafinerie",level:3},{value:"Porty",id:"porty",level:3}],m={toc:w},s="wrapper";function u(a){let{components:e,...t}=a;return(0,n.kt)(s,(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"komendy---pa\u0144stwa"},"Komendy - Pa\u0144stwa"),(0,n.kt)("h3",{id:"ustawienia-czatu"},"Ustawienia czatu"),(0,n.kt)("p",null,"Te ustawienia zmieniaj\u0105 tw\xf3j ",(0,n.kt)("strong",{parentName:"p"},"kana\u0142 czatu"),", tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, pa\u0144stwa lub sojuszu zobacz\u0105 wiadomo\u015b\u0107."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/globalchat (lub /gc): Ustawia czat na globalny (podstawowy, ka\u017cdy widzi wiadomo\u015bci).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/gc mute: Wycisza czat globalny."),(0,n.kt)("li",{parentName:"ul"},"/gc unmute: Odcisza czat globalny."))),(0,n.kt)("li",{parentName:"ul"},"/townchat (lub /tc): Tylko gracze w twoim mie\u015bcie widz\u0105 wiadomo\u015bci."),(0,n.kt)("li",{parentName:"ul"},"/nationchat (lub /nc): Tylko gracze w twoim pa\u0144stwie widz\u0105 wiadomo\u015bci."),(0,n.kt)("li",{parentName:"ul"},"/allychat (lub /ac): Tylko gracze z sojuszu pa\u0144stwa b\u0105d\u017a miasta$ widz\u0105 wiadomo\u015bci.")),(0,n.kt)("h3",{id:"town-lub-t"},"/town (lub /t)"),(0,n.kt)("p",null,"S\u0142u\u017cy do zarz\u0105dzania miastem gracza."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/town create ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Create a new town with the specified name at location. S\u0142u\u017cy do tworzenia nowego miasta z konkretn\u0105 nazw\u0105 i prowincj\u0105."),(0,n.kt)("li",{parentName:"ul"},"/town delete: Usuwa miasto (tylko dla lidera miasta)."),(0,n.kt)("li",{parentName:"ul"},"/town promote ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Awansuje gracza na oficera miasta."),(0,n.kt)("li",{parentName:"ul"},"/town demote ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Degraduje gracza z pozycji oficera miasta."),(0,n.kt)("li",{parentName:"ul"},"/town leader ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Oddaje przyw\xf3dztwo nad miastem innemu cz\u0142onkowi miasta."),(0,n.kt)("li",{parentName:"ul"},"/town apply ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Pro\u015bba o do\u0142\u0105czenie do miasta."),(0,n.kt)("li",{parentName:"ul"},"/town invite ",(0,n.kt)("inlineCode",{parentName:"li"},"gracz"),": Zaprasza gracza do twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,n.kt)("li",{parentName:"ul"},"/town leave: Wychodzi z miasta."),(0,n.kt)("li",{parentName:"ul"},"/town kick ",(0,n.kt)("inlineCode",{parentName:"li"},"gracz"),": Wyrzuca innego gracza z twojego miasta (tylko dla lider\xf3w i oficer\xf3w)."),(0,n.kt)("li",{parentName:"ul"},"/town spawn: Teleportuje si\u0119 do g\u0142\xf3wnego spawnpointa miasta."),(0,n.kt)("li",{parentName:"ul"},"/town setspawn: Zmienia spawnpoint twojego miasta na inn\u0105 lokacje w g\u0142\xf3wnej prowincji miasta$(homechunk) (tylko dla lidera miasta)."),(0,n.kt)("li",{parentName:"ul"},"/town list: Wy\u015bwietla list\u0119 wszystkich miast."),(0,n.kt)("li",{parentName:"ul"},"/town info: Wy\u015bwietla nazw\u0119 miasta, lidera, oficer\xf3w, residents i zaj\u0119te prowincje."),(0,n.kt)("li",{parentName:"ul"},"/town info ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla informacje innego miasta."),(0,n.kt)("li",{parentName:"ul"},"/town online: Wy\u015bwietla graczy online twojego miasta."),(0,n.kt)("li",{parentName:"ul"},"/town online ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla graczy online innego miasta."),(0,n.kt)("li",{parentName:"ul"},"/town color ","[r][g]"," ","[b]",": Ustawia kolor miasta na dynmapie$ (tylko dla lidera)."),(0,n.kt)("li",{parentName:"ul"},"/town claim: Zajmuje prowincje dla twojego miasta (tylko dla lider\xf3w i oficer\xf3w)"),(0,n.kt)("li",{parentName:"ul"},"/town unclaim: Przestaje zajmowa\u0107 prowincj\u0119 w kt\xf3rej jeste\u015b."),(0,n.kt)("li",{parentName:"ul"},"/town income: Zbiera przych\xf3d miast i rafinerii (tylko dla lider\xf3w i oficer\xf3w)."),(0,n.kt)("li",{parentName:"ul"},"/town rename ","[nowa nazwa]",": Zmienia nazw\u0119 twojego miasta (tylko dla lidera miasta)"),(0,n.kt)("li",{parentName:"ul"},"/town map: Wy\u015bwietla map\u0119 prowincji dla gracza na czat."),(0,n.kt)("li",{parentName:"ul"},"/town minimap ","[3|4|5]",": W\u0142\u0105cza/wy\u0142\u0105cza widok chunk\xf3w prowincji na minimapie po prawej stronie. Opcjonalnie mo\u017cesz wybra\u0107 jej wielko\u015b\u0107: 3, 4, 5."),(0,n.kt)("li",{parentName:"ul"},"/town permissions ","[type][group]"," ","[allow/deny]",": Ustawia permisje dla interakcji w prowincji miasta. (typ, grupa, zezw\xf3l/odm\xf3w)  Wi\u0119cej na$"),(0,n.kt)("li",{parentName:"ul"},"/town protect: Toggle protecting/unprotecting chests with mouse click. W\u0142\u0105cza chronienie lub usuwanie go na skrzynkach przyciskiem myszy."),(0,n.kt)("li",{parentName:"ul"},"/town protect show: Pokazuje chronione skrzynki z particlesami."),(0,n.kt)("li",{parentName:"ul"},"/town trust ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako zaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,n.kt)("li",{parentName:"ul"},"/town untrust ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Ustawia gracza jako niezaufanego (tylko dla lider\xf3w i oficer\xf3w)."),(0,n.kt)("li",{parentName:"ul"},"/town capital: Przesuwa stolice prowincji do miejsca w kt\xf3rym si\u0119 znajdujesz (zmienia to te\u017c lokalizacje spawnu miasta)."),(0,n.kt)("li",{parentName:"ul"},"/town annex: Anektuje okupowan\u0105 prowincje i dodaje je do twojego miasta.")),(0,n.kt)("h3",{id:"nation-lub-n"},"/nation (lub /n)"),(0,n.kt)("p",null,"Do zarz\u0105dzania pa\u0144stwem gracza."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/nation create ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Tworzy pa\u0144stwo z twoim miastem jako jego stolica."),(0,n.kt)("li",{parentName:"ul"},"/nation delete: Usuwa pa\u0144stwo (tylko dla lidera stolicy pa\u0144stwa)"),(0,n.kt)("li",{parentName:"ul"},"/nation leave: Wychodzi z pa\u0144stwa (tylko dla lidera miasta)."),(0,n.kt)("li",{parentName:"ul"},"/nation capital ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Ustawia inne miasto jako stolice twojego pa\u0144stwa."),(0,n.kt)("li",{parentName:"ul"},"/nation invite ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Zaprasza miasto do pa\u0144stwa (tylko dla lidera stolicy pa\u0144stwa)"),(0,n.kt)("li",{parentName:"ul"},"/nation list: Wy\u015bwietla list\u0119 wszystkich pa\u0144stw i ich miast."),(0,n.kt)("li",{parentName:"ul"},"/nation color ","[r][g]"," ","[b]",": Ustawia kolor posiadanych prowincji prze pa\u0144stwo na dynmapie (tylko dla lidera stolicy pa\u0144stwa)."),(0,n.kt)("li",{parentName:"ul"},"/nation rename ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Zmienia nazw\u0119 pa\u0144stwa (tylko dla lidera stolicy pa\u0144stwa). "),(0,n.kt)("li",{parentName:"ul"},"/nation online: Sprawdza graczy online pa\u0144stwa."),(0,n.kt)("li",{parentName:"ul"},"/nation online ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Sprawdza graczy online innego pa\u0144stwa."),(0,n.kt)("li",{parentName:"ul"},"/nation info ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Sprawdza informacje pa\u0144stwa."),(0,n.kt)("li",{parentName:"ul"},"/nation spawn ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Teleportuje si\u0119 do miasta w pa\u0144stwie. Mo\u017ce to kosztowa\u0107 przedmioty.")),(0,n.kt)("h3",{id:"ally-nazwa"},"/ally ",(0,n.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,n.kt)("p",null,"Zaoferuj/akceptuj sojusze z innymi miastami lub pa\u0144stwami."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/ally ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": zaoferuj/akceptuj sojusz z innym miastem."),(0,n.kt)("li",{parentName:"ul"},"/ally ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": zaoferuj/akceptuj sojusz z innym pa\u0144stwem.")),(0,n.kt)("h3",{id:"unally-nazwa"},"/unally ",(0,n.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,n.kt)("p",null,"Rozwi\u0105zuje sojusz z  miastem b\u0105d\u017a pa\u0144stwem. Miasta wchodz\u0105 wtedy w okres rozejmu."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/unally ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Rozwi\u0105\u017c sojusz miastem."),(0,n.kt)("li",{parentName:"ul"},"/unally ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Rozwi\u0105\u017c sojusz pa\u0144stwem.")),(0,n.kt)("h3",{id:"war-nazwa"},"/war ",(0,n.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,n.kt)("p",null,"Wypowiada wojn\u0119 innym miastom lub pa\u0144stwom."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/war ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Wypowiada wojne miastu."),(0,n.kt)("li",{parentName:"ul"},"/war ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Wypowiada wojne pa\u0144stwu.")),(0,n.kt)("h3",{id:"peace-nazwa"},"/peace ",(0,n.kt)("inlineCode",{parentName:"h3"},"nazwa")),(0,n.kt)("p",null,"Otwiera okno traktatu pokojowego z innym pa\u0144stwem b\u0105d\u017a miastem."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/peace ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Negocjuje traktat pokojowy z innym miastem."),(0,n.kt)("li",{parentName:"ul"},"/peace ",(0,n.kt)("inlineCode",{parentName:"li"},"pa\u0144stwo"),": Negocjuje traktat pokojowy z innym pa\u0144stwem.")),(0,n.kt)("h3",{id:"truce"},"/truce"),(0,n.kt)("p",null,"Wy\u015bwietla trwaj\u0105ce rozejmy miasta z innymi miastami."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/truce ",(0,n.kt)("inlineCode",{parentName:"li"},"miasto"),": Wy\u015bwietla trwaj\u0105ce rozejmy innego miasta.")),(0,n.kt)("h3",{id:"nodes-lub-nd"},"/nodes (lub /nd)"),(0,n.kt)("p",null,"Do wy\u015bwietlania og\xf3lnych informacji w Europie (prowincje z zasobami, prowincje, miasta, pa\u0144stwa, gracze)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/nodes help: Wy\u015bwietla list\u0119 wszystkich komend."),(0,n.kt)("li",{parentName:"ul"},"/nodes resource: Wy\u015bwietla list\u0119 wszystkich zasob\xf3w w prowincji. "),(0,n.kt)("li",{parentName:"ul"},"/nodes resource ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Wy\u015bwietla wyszczeg\xf3lnione statystyki typ\xf3w zasob\xf3w w prowincji (Surowce, Plony, Zwierz\u0119ta)"),(0,n.kt)("li",{parentName:"ul"},"/nodes territory: Wy\u015bwietla og\xf3lne informacje o prowincji w kt\xf3rej stoisz."),(0,n.kt)("li",{parentName:"ul"},"/nodes territory ","[id]",": Wy\u015bwietla og\xf3lne informacje innej prowincji za pomoca jego id."),(0,n.kt)("li",{parentName:"ul"},"/nodes town: Wy\u015bwietla list\u0119 wszyskich miast, dok\u0142adniej ich liczb\u0119 graczy i liczb\u0119 prowincji."),(0,n.kt)("li",{parentName:"ul"},"/nodes town ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Prints detailed info about town from ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa")," (territories, players, etc...). Wy\u015bwietla szczeg\xf3lne informacje o mie\u015bcie (prowincje, gracze, itd...)."),(0,n.kt)("li",{parentName:"ul"},"/nodes nation: Wy\u015bwietla list\u0119 wszystkich pa\u0144stw."),(0,n.kt)("li",{parentName:"ul"},"/nodes nation ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Wy\u015bwietla og\xf3lne informacje o pa\u0144stwie (miasta, sojusznicy, wrogowie, itd...)."),(0,n.kt)("li",{parentName:"ul"},"/nodes player ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Wy\u015bwietla informacje o graczu (jego miasto i pa\u0144stwo)."),(0,n.kt)("li",{parentName:"ul"},"/nodes war: Wy\u015bwietla czy wojny s\u0105 w\u0142\u0105czone/wy\u0142\u0105czone.")),(0,n.kt)("h3",{id:"rafinerie"},"Rafinerie"),(0,n.kt)("p",null,"Do wy\u015bwietlania og\xf3lnych  informacji o rafineriach."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/refinery: Otwiera menu rafinerii w prowincji na kt\xf3rej stoisz."),(0,n.kt)("li",{parentName:"ul"},"/refinery help: Wy\u015bwietla list\u0119 wszystkich komend."),(0,n.kt)("li",{parentName:"ul"},"/refinery recipe ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Wy\u015bwietla informacj\u0119 o recepturze rafinerii."),(0,n.kt)("li",{parentName:"ul"},"/reifnery type ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Wy\u015bwietla informacj\u0119 o typu rafinerii.")),(0,n.kt)("h3",{id:"porty"},"Porty"),(0,n.kt)("p",null,"Do wy\u015bwietlania og\xf3lnych informacji o portach. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/port help: Wy\u015bwietla list\u0119 wszystkich komend."),(0,n.kt)("li",{parentName:"ul"},"/port list: Lista wszystkich port\xf3w."),(0,n.kt)("li",{parentName:"ul"},"/port info ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa portu"),": Wy\u015bwietla informacj\u0119 o porcie."),(0,n.kt)("li",{parentName:"ul"},"/port allow ",(0,n.kt)("inlineCode",{parentName:"li"},"neutral/ally/enemy"),": Ustawia kto mo\u017ce teleportowa\u0107 si\u0119 do portu (neutralny, sojusznik, wr\xf3g)."),(0,n.kt)("li",{parentName:"ul"},"/port fee: Ustawia cen\u0119 teleportowania si\u0119 do portu."),(0,n.kt)("li",{parentName:"ul"},"/port warp ",(0,n.kt)("inlineCode",{parentName:"li"},"nazwa"),": Teleport do portu.")))}u.isMDXComponent=!0}}]);