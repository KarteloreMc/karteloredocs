---
sidebar_position: 4
title: Ochrona miasta
---

![Ochrona miasta](./img/ochronamiasta.png)
# Ochrona miasta
Użyty przez nas plugin na miasta oferuje szeroką gamę zabezpieczeń dla twojego miasta, dzięki czemu nie musisz na każdym kroku obawiać sie o utrate swojego postępu.

## Permisje
Ustaw permisje dla interakcji wykonywanych w mieście (budowanie, niszczenie, używanie drzwi, otwieranie skrzynek, itd...) używając poniższej komendy. Aby zobaczyć obecne permisje użyj `/t permissions`. Nie ma indywidualnych permisji dla gracza, chunka bądz prowincji.
`/t permissions [type] [group] [allow/deny]`
## Typy permisji:
- **interact:** Używanie bloków (drzwi, przyciski, ...) **wymagane do wszystkiego niżej!**
- **build:** stawianie bloków
- **destroy:** niszczenie bloków
- **chests:** otwieranie skrzynek
- **income**: zezwalanie na otwieranie skrzynki `/t income`
## Grupy permisji:
- **town:** gracze z twojego miasta
- **trusted:** zaufani gracze w mieście (używając `/t trust [nazwa gracza])`
- **nation:** gracze z miast twojego państwa
- **ally:** gracze z sojuszniczych miast
- **outsider**: wszyscy pozostali gracze

### Przykład 1: 
Daj graczom w państwie możliwość używania skrzynek
1. `/t permissions interact nation allow`
2. `/t permissions chests nation allow`

W zależności jak permisje są zrobione, na początku będziesz musiał dać im permisję `interact` (pozwala na używanie myszki, otwieranie drzwi, ...). Potem dajesz dodatkowe permisje do używania skrzyni.

### Przykład 2: 
Zezwól sojusznikom na budowanie/niszczenie (ale nie na otwieranie/niszczenie skrzyń)
1. `/t permissions interact ally allow`
2. `/t permissions build ally allow`
3. `/t permissions destroy ally allow`

Sojusznicy nie będą mogli otwierać albo niszczyć skrzyń. Do tego wymagana jest dodatkowa permisja `chests`.

## Ochrona skrzyń
Miasta mogą chronić poszczególne **skrzynie**, dzięki czemu tylko liderzy, oficerowie, i zaufani gracze mogą je otwierać. Możesz użyć tego do stworzenia szczelnego sejfu na twoje wartościowe rzeczy, gdyż gracze z innego państwa nie będą mogli do takowego sejfu zajrzeć.
Aby ochronić skrzynie użyj `/t protect` następnie kliknij na skrzynie które chcesz ochronić. Kliknij na blok, który nie jest skrzynią lub wpisz jeszcze raz `/t protect` by przerwać wybieranie skrzyń. 

### Bloki które mogą być ochronione:
- Skrzynia
- Skrzynkia pułapka
- Piecyk

### Działanie ochronionych bloków:
- Hoppery nie mogą zostać użyte do zabierania przedmiotów.
- Niezaufani gracze nie mogą otwierać lub zamykać tych skrzyń.
- Kiedy ochroniona skrzynka zostanie zniszczona, ochrona zostanie usunięta.

Lider państwa i oficerzy mogą nałożyć zaufanie na gracza (`/t trust [gracz]`) lub je usunąć (`/t untrust [player]`). Domyślnie gracze przybywający do miasta nie są na liście graczy zaufanych.

:::info Informacja
Możesz też użyć `/t protect show` w grze aby zobaczyć ochronione skrzynki.
:::
zdjecie





