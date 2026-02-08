---
sidebar_position: 3
---

# Jellyfin (TV/Film/Sorozat)

**Webcím:** [https://tv.gyurus.hu](https://tv.gyurus.hu)

## Mire jó?

A Jellyfin a **saját Netflix-szerű lejátszónk**:

- Filmek, sorozatok, esetleg zene
- **Folytatás ott, ahol abbahagytad** - minden eszközön
- Felirat/hangsáv választás
- AirPlay támogatás Apple TV-re

:::tip Mikor használd?
Ha filmet vagy sorozatot akarsz nézni a családi könyvtárból - akár utazás közben is, mobilneten!
:::

## App telepítése

Két jó opció van iOS-re:

### 1. Hivatalos Jellyfin app
**[Jellyfin Mobile letöltés](https://apps.apple.com/us/app/jellyfin-mobile/id1480192618?mt=8)**

### 2. Swiftfin (ajánlott Apple eszközökön)
**[Swiftfin letöltés](https://apps.apple.com/ca/app/swiftfin/id1604098728)**

<!-- KÉP HELYE: App Store oldal a Jellyfin Mobile és/vagy Swiftfin appnál, látszik az ikon és a Letöltés gomb -->

:::tip Melyiket válasszam?
Próbáld először a **hivatalos Jellyfin appot**. Ha valami nehezen megy (lejátszási hiba, felirat csúszás), próbáld ki a **Swiftfin**-t - az Apple eszközökön gyakran jobban működik.
:::

## Mire lesz szükséged?

- iPhone/iPad és internet
- A saját családi felhasználód (Authentik belépés: e-mail + jelszó)

:::tip Mit fogsz látni belépéskor?
Az app egy böngészős belépő oldalt fog megnyitni (Authentik). Ez normális.
:::

## Első belépés (app)

1. Nyisd meg a **Jellyfin** vagy **Swiftfin** appot
2. Szervercímnek írd be:
   ```
   https://tv.gyurus.hu
   ```
3. Koppints: **Connect / Csatlakozás**
4. Belépés **Authentik**-en keresztül
5. Válaszd ki a profilodat/fiókodat (ha kérdezi)

<!-- KÉP HELYE: Jellyfin/Swiftfin "Add server" képernyő `https://tv.gyurus.hu` URL-lel a mezőbe beírva -->

## Nézés alapok

### Mit fogsz látni a kezdőoldalon?

- **Kezdőlap/Home**: ajánlók és frissen hozzáadott tartalmak
- **Folytatás/Continue watching**: ott folytatja, ahol abbahagytad
- **Keresés**: nagyító ikon (jobb felső sarok vagy alul)

### Keresés
- Koppints a **nagyító ikonra**
- Írd be a film/sorozat címét

### Lejátszás
1. Nyisd meg a címet
2. Koppints: **Play / Lejátszás**

### Felirat választás
1. Lejátszás közben koppints a képernyőre
2. Keresd a **Subtitles / Feliratok** gombot
3. Válassz nyelvet (pl. Hungarian / Magyar)

<!-- KÉP HELYE: Lejátszó képernyő, ahol látszik a Subtitles/Audio menü kinyitva, nyelv opciókkal -->

### Hangsáv választás
1. Lejátszás közben koppints a képernyőre
2. Keresd az **Audio / Hang** gombot
3. Válassz (pl. Hungarian 5.1 / Magyar)

### AirPlay / Cast
Ha van Apple TV-d vagy AirPlay-képes TV-d:
1. Lejátszás közben keresd az **AirPlay ikont**
2. Válaszd ki a cél eszközt
3. A videó áttevődik a TV-re

## Ha akadozik a videó

:::caution Ellenőrizd ezeket:
1. **Wi-Fi jobb, mint mobilnet** - ha otthon vagy, csatlakozz Wi-Fi-re
2. **Zárd be a többi appot** - a háttérben futó appok lassíthatnak
3. **Próbáld lejjebb venni a minőséget** (ha van ilyen opció a lejátszóban)
4. **Próbáld a másik klienst** (Jellyfin vagy Swiftfin - válts a kettő között)
:::

### Ha csak otthon megy
Ha azt tapasztalod, hogy mobilneten nem indul, de otthoni Wi-Fi-n igen, szólj: lehet, hogy a távoli elérésen kell finomhangolni.

### Ha hibaüzenet jelenik meg
Pl. "Playback error" vagy "Unable to play":
1. Készíts róla képernyőképet
2. Küldd el nekem
3. Megnézem, mit kell állítani a szerveren (pl. transzkódolás)

:::info Segítség
Ha gyakran akadozik: szólj nekem, és megnézem a szerver beállításait!
:::

## Használat asztali gépen (böngészőből)

1. Nyiss meg egy böngészőt (Chrome, Edge, Safari) és látogasd meg: `https://tv.gyurus.hu`.
2. Lépj be Authentik fiókoddal.
3. A kezdőképernyő megegyezik az appéval: **Continue Watching**, **Latest Movies**, **Latest Shows** szekciók.
4. Válassz ki egy címet, kattints a **Play** ikonra; a lejátszás közben a képernyő alján lévő ikonokkal állíthatod a feliratot, hangsávot, minőséget.
5. A böngészőben is működik az AirPlay / Chromecast ikon (jobb felső sarok), így egyszerűen küldheted TV-re.
6. Ha sok tabot tartasz nyitva, érdemes a Jellyfin oldalt külön ablakban futtatni – így stabilabban megy a lejátszás.

**Tippek böngészőhöz:**
- Jobb gombbal a film/sorozat kártyán új fülön nyithatod meg, így a keresés közben sem veszíted el a listát.
- A `?` billentyű megnyomásával megjelenik a billentyűparancs lista (pause/play = szóköz, ugrás = nyíl gombok).
- Ha külső feliratot szeretnél, a lejátszóban kattints a **Subtitles → Upload** opcióra, és töltsd fel a `.srt` fájlt.
