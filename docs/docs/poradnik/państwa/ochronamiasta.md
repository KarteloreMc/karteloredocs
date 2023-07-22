---
sidebar_position: 4
title: Ochrona miasta
---

# Ochrona miasta
- Ustaw permisje miasta (na budowanie, skrzynki, drzwi, itd...) używając `/t permissions [type] [group] [allow/deny]`.
- Nie ma indywidualnych permisji dla gracza, chunka bądz prowincji.
- Ochroń poszczególne skrzynki dla zaufanych graczy używając `/t protect` i klikając skrzynkę.
## Permisje
Ustaw permisje dla interakcji wykonywanych w mieście (budowanie, niszczenie, używanie drzwi, otwieranie skrzynek, itd...) używając poniższej komendy. Aby zobaczyć obecne permisje użyj `/t permissions`.
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
- **outsider**: inni gracze

### Przykład 1: daj graczom w państwie możliwość używania skrzynek
1. `/t permissions interact nation allow`
2. `/t permissions chests chests nation allow`

W zależności jak permisje są zrobione, na początku będziesz musiał dać im permisję `interact` (pozwala na używanie myszki, otwieranie drzwi, ...). Potem dajesz dodatkowe permisje do używania skrzyni.

### Przykład 2: Zezwól sojusznikom na budowanie/niszczenie (ale nie na otwieranie/niszczenie skrzyń)
1. `/t permissions interact ally allow`
2. `/t permissions build ally allow`
3. `/t permissions destroy ally allow`

Sojusznicy nie będą mogli otwierać albo niszczyć skrzyń. Do tego wymagana jest dodatkowa permisja `chests`.

## Ochrona skrzyń
Miasta mogą chronić poszczególne skrzynie, dzięki czemu tylko liderzy, oficerowie, i zaufani gracze mogą je otwierać. Możesz używać tego aby zachować rezerwy, które randomowe państwa nie mogą zabrać.
Użyj `/t protect` następnie kliknij na skrzynie które chcesz ochronić. Kliknij na blok który nie jest skrzynią lub wpisz jeszcze raz `/t protect` by przerwać wybieranie skrzyń. 

### Bloki które mogą być ochronione:
- Skrzynie
- Skrzynka pułapka
- Piecyki

### Działanie ochronionych bloków:
- Hoppery nie mogą zostać użyte do zabierania przedmiotów.
- Niezaufani gracze nie mogą otwierać lub zamykać tych skrzyń.
- Kiedy ochroniona skrzynka zostanie zniszczona, ochrona zostanie usunięta.

Lider państwa i oficerzy mogą nałożyć zaufanie na gracza (`/t trust [gracz]`) lub je usunąć (`/t untrust [player]`). domyślnie config Nowi gracze w mieście nie są zaufani.

Możesz też użyć `/t protect show` w grze aby zobaczyć ochronione skrzynki:
zdjecie





