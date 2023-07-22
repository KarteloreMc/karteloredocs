---
sidebar_position: 5
title: Komendy
---
# Komendy - Państwa
### Ustawienia czatu
Te ustawienia zmieniają twój **kanał czatu**, tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, państwa lub sojuszu zobaczą wiadomość.

- /globalchat (lub /gc): Ustawia czat na globalny (podstawowy, każdy widzi wiadomości).
	- /gc mute: Wycisza czat globalny.
	- /gc unmute: Odcisza czat globalny.
- /townchat (lub /tc): Tylko gracze w twoim mieście widzą wiadomości.
- /nationchat (lub /nc): Tylko gracze w twoim państwie widzą wiadomości.
- /allychat (lub /ac): Tylko gracze z sojuszu państwa bądź miasta$ widzą wiadomości.

### /town (lub /t)
Służy do zarządzania miastem gracza.

- /town create `nazwa`: Create a new town with the specified name at location. Służy do tworzenia nowego miasta z konkretną nazwą i prowincją.
- /town delete: Usuwa miasto (tylko dla lidera miasta).
- /town promote `nazwa`: Awansuje gracza na oficera miasta.
- /town demote `nazwa`: Degraduje gracza z pozycji oficera miasta.
- /town leader `nazwa`: Oddaje przywództwo nad miastem innemu członkowi miasta.
- /town apply `miasto`: Prośba o dołączenie do miasta.
- /town invite `gracz`: Zaprasza gracza do twojego miasta (tylko dla liderów i oficerów).
- /town leave: Wychodzi z miasta.
- /town kick `gracz`: Wyrzuca innego gracza z twojego miasta (tylko dla liderów i oficerów).
- /town spawn: Teleportuje się do głównego spawnpointa miasta.
	- /town spawn [outpost]: Teleport to an outpost's spawn point.
- /town setspawn: Zmienia spawnpoint twojego miasta na inną lokacje w głównej prowincji miasta$(homechunk) (tylko dla lidera miasta).
- /town list: Wyświetla listę wszystkich miast.
- /town info: Wyświetla nazwę miasta, lidera, oficerów, residents i zajęte prowincje.
- /town info `miasto`: Wyświetla informacje innego miasta.
- /town online: Wyświetla graczy online twojego miasta.
- /town online `miasto`: Wyświetla graczy online innego miasta.
- /town color [r] [g] [b]: Ustawia kolor miasta na dynmapie$ (tylko dla lidera).
- /town claim: Zajmuje prowincje dla twojego miasta (tylko dla liderów i oficerów)
- /town unclaim: Przestaje zajmować prowincję w której jesteś.
- /town income: Zbiera przychód miast i rafinerii (tylko dla liderów i oficerów).
- /town rename [nowa nazwa]: Zmienia nazwę twojego miasta (tylko dla lidera miasta)
- /town map: Wyświetla mapę prowincji dla gracza na czat.
- /town minimap [3|4|5]: Włącza/wyłącza widok chunków prowincji na minimapie po prawej stronie. Opcjonalnie możesz wybrać jej wielkość: 3, 4, 5.
- /town permissions [type] [group] [allow/deny]: Ustawia permisje dla interakcji w prowincji miasta.  Więcej na$
- /town protect: Toggle protecting/unprotecting chests with mouse click. Włącza chronienie lub usuwanie go na skrzynkach przyciskiem myszy.
- /town protect show: Pokazuje chronione skrzynki z particlesami.
- /town trust `nazwa`: Ustawia gracza jako zaufanego (tylko dla liderów i oficerów).
- /town untrust `nazwa`: Ustawia gracza jako niezaufanego (tylko dla liderów i oficerów).
- /town capital: Przesuwa stolice prowincji do miejsca w którym się znajdujesz (zmienia to też lokalizacje spawnu miasta).
- /town annex: Anektuje okupowane terytorium i dodaje je do twojego miasta.
- /town outpost: Commands to manage town outposts.
- /town outpost list: Print list of town's outposts.
- /town outpost setspawn: Set an outpost's spawn point. Player must be in the outpost territory.
### /nation (or /n)
Do zarządzania państwem gracza.

- /nation create `nazwa`: Create a new nation with your town as capital. Tworzy państwo z twoim miastem jako stolica.
- /nation delete: Delete your nation. Leader of capital town only.
- /nation leave: Leave your nation. Used by town leaders only.
- /nation capital `miasto`: Set another town in your nation as its capital
- /nation invite `miasto`: Invite another town to join your nation. Leader of capital town only.
- /nation list: View list of all established nations and their towns
- /nation color [r] [g] [b]: Set territory color on dynmap for all towns in nation. Leader of capital town only.
- /nation rename `nazwa`: Renames your nation. Leader of capital town only.
- /nation online: View your nation's online players
- /nation online `państwo`: View another nation's online players
- /nation info `państwo`: View nation's info
- /nation spawn `miasto`: Teleport to town inside your nation. May cost items to use.
### /ally `nazwa`
Offer/accept alliance with another town or nation.

- /ally `miasto`: Offer/accept alliance with a town.
- /ally `państwo`: Offer/accept alliance with a nation.
### /unally `nazwa`
Break alliance with another town or nation. Towns will enter a truce period.

- /unally `miasto`: Break alliance with a town.
- /unally `państwo`: Break alliance with a nation.
### /war `nazwa`
Declare war on other towns or nations.

- /war `miasto`: Declares war on a town.
- /war `państwo`: Declares war on a nation.
### /peace `nazwa`
Opens peace treaty window with another town or nation.

- /peace `miasto`: Negotiate a peace treaty with a town.
- /peace `państwo`: Negotiate a peace treaty with a nation.
### /truce
View your town's remaining truce times with other towns.

- /truce `miasto`: View other town's remaining truce times.
### /nodes (or /nd)
For printing general info about the world (e.g. resource nodes, territories, towns, nations, players). Can be used by players ingame or in console.

- /nodes help: Prints list of commands
- /nodes resource: Prints list of all resource nodes
- /nodes resource `nazwa`: Print detailed stats of a resource node type (income, crops, animals, ore)
- /nodes territory: In console, just prints total territory count. Ingame, prints info about territory player is standing in.
- /nodes territory [id]: Prints info about territory from id
- /nodes town: Prints list of all towns, their player count and territory count
- /nodes town `nazwa`: Prints detailed info about town from `nazwa` (territories, players, etc...)
- /nodes nation: Prints list of all nations
- /nodes nation `nazwa`: Prints detailed info about nation from `nazwa` (towns, allies, enemies, etc...)
- /nodes player `nazwa`: Prints player info (their town and nation)
- /nodes war: Print if war enabled/disabled