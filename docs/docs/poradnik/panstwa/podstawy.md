---
sidebar_position: 1
title: Państwa - Podstawy
---


## Jak działa plugin?
- Mapa jest podzielona na prowincje wyświetlane na naszej [dynmapie](https://mapa.kartelore.pl/), takie jak w grze Europa Universalis 4.
- Każda prowincja ma swój unikalny zasób:
	- **Surowce**: wykopuj dane rudy z kamienia (złoto, węgiel, ...)
	- **Plony**: z większym powodzeniem wyrastaj dane plony w prowincji (pszenica, ziemniaki, ...)
	- **Zwierzęta**: z większym powodzeniem rozmnażaj dane zwierzęta w prowincji (owce, krowy, ...)
- Gracze tworzą miasta i zajmują prowincje, by korzystać z zasobów tych prowincji.
- Podczas wojny możesz przejmować prowincje innych miast.

:::info Informacja
Szansa na wydropienie surowca z danej rudy wynosi jedynie 50%, więc żeby zdobyć dany surowiec czasami trzeba handlować. Przez to plugin znacznie pogłębia handel miedzy graczami.
:::

## Jak stworzyć miasto?
1. Udaj się do prowincji gdzie chcesz stworzyć miasto.
2. Wpisz komendę `/t create [nazwa miasta]`, zamień [nazwa miasta] na nazwę miasta, którą chcesz ustawić.
3. Zaproś do swojego miasta graczy używając komendy /t invite [nazwa gracza].
4. Zwiąż się sojuszem z innymi miastami, używając /ally [nazwa miasta].

:::info Informacja
Aby zobaczyć układ prowincji na mapie możesz użyć komend `/t map`, `/t minimap` lub wejść na stronę [dynmapy serwera](https://mapa.kartelore.pl/).
:::

## Jak zajmować prowincje?
- Aby zająć prowincje, udaj się na nią i na jej obszarze użyj komendy `/t claim`,
- Jeżeli po jakimś czasie chcesz pozbyć się prowincji wpisz `/t unclaim`

:::info  Informacja
Zajęcie prowincji nie jest darmowe, kosztuje ono **power**. Co 30 minut każdy gracz, który należy do miasta otrzymuje 1 power. Nowo stworzone miasto otrzymuje 30 powera. Każda osoba, która dołącza do miasta może maksymalnie dodać 48 powera - po 24 godzinach gry. Cena prowincji w powerze wyświetlona jest na stronie [mapy serwera](https://mapa.kartelore.pl/) po wybraniu trzeciej opcji z zakładki **Opcje Mapy:**. Zajęcie pierwszej prowincji (jeżeli ta kosztuje więcej niż 30 powera) jest bezwarunkowe, jednak wiąże się z dużą karą surowcową. Zajęcie kolejnych prowincji wymaga od miasta posiadania powera większego od kosztu wszystkich zajętych już prowincji.
:::

## Jak sprawdzić zasoby prowincji?
Zasoby prowincji można sprawdzić na 2 sposoby albo przez wpisanie komendy `/nodes territory`, albo poprzez wejście na stronę [mapy serwera](https://mapa.kartelore.pl/), wybranie prowincji lewym przyciskiem myszy oraz najechanie na ikonkę surowca w lewym dolnym rogu.

## Przychód Miasta
Każda prowincja z ustalonym income, co godzinę generuje surowce, które można odebrać używając komendy `/t income`. Używając tej komendy można odebrać zasoby z całego miasta bez konieczności przemieszczania się do poszczególnych prowincji. Podczas okupacji, okupant otrzymuje jedynie 40% zasobów prowincji.

## Co to jest państwo?
W użytym przez nas pluginie państwo to związek miast. Gracze państwa mogą korzystać z zasobów innych miast państwa oraz mogą na terenie tych miast budować i niszczyć bloki. Gracze danego miasta w państwie nie mogą odbierać **income`u** innego państwa.

## Jak stworzyć państwo
1. Aby stworzyć państwo użyj komendy `/n create [nazwapaństwa]`, zamień [nazwapanstwa] na nazwę państwa która Ci odpowiada.
2. Zaproś inne miasta do swojego państwa używając komendy `/n invite [nazwa_miasta]`, zamień [nazwa_miasta] na nazwę miasta, które chcesz zaprosić do swojego państwa.










