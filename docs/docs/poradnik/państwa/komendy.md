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
### /nation (or /n)
Do zarządzania państwem gracza.

- /nation create `nazwa`: Tworzy państwo z twoim miastem jako jego stolica.
- /nation delete: Usuwa państwo (tylko dla lidera stolicy państwa)
- /nation leave: Wychodzi z państwa (tylko dla lidera miasta).
- /nation capital `miasto`: Ustawia inne miasto jako stolice twojego państwa.
- /nation invite `miasto`: Zaprasza miasto do państwa (tylko dla lidera stolicy państwa)
- /nation list: Wyświetla listę wszystkich państw i ich miast.
- /nation color [r] [g] [b]: Ustawia kolor posiadanych prowincji prze państwo na dynmapie (tylko dla lidera stolicy państwa).
- /nation rename `nazwa`: Zmienia nazwę państwa (tylko dla lidera stolicy państwa). 
- /nation online: Sprawdza graczy online państwa.
- /nation online `państwo`: Sprawdza graczy online innego państwa.
- /nation info `państwo`: Sprawdza informacje państwa.
- /nation spawn `miasto`: Teleportuje się do miasta w państwie. Może to kosztować przedmioty.
### /ally `nazwa`
Zaoferuj/akceptuj sojusze z innymi miastami lub państwami.

- /ally `miasto`: zaoferuj/akceptuj sojusz z innym miastem.
- /ally `państwo`: zaoferuj/akceptuj sojusz z innym państwem.
### /unally `nazwa`
Rozwiązuje sojusz z  miastem bądź państwem. Miasta wchodzą wtedy w okres rozejmu.

- /unally `miasto`: Rozwiąż sojusz miastem.
- /unally `państwo`: Rozwiąż sojusz państwem.
### /war `nazwa`
Wypowiada wojnę innym miastom lub państwom.

- /war `miasto`: Wypowiada wojne miastu.
- /war `państwo`: Wypowiada wojne państwu.
### /peace `nazwa`
Otwiera okno traktatu pokojowego z innym państwem bądź miastem.

- /peace `miasto`: Negocjuje traktat pokojowy z innym miastem.
- /peace `państwo`: Negocjuje traktat pokojowy z innym państwem.
### /truce
Wyświetla trwające rozejmy miasta z innymi miastami.

- /truce `miasto`: Wyświetla trwające rozejmy innego miasta.
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

### rafinerie


### porty
