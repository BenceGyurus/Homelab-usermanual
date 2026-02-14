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
- Chromecast / Cast támogatás Android TV-re

:::tip Mikor használd?
Ha filmet vagy sorozatot akarsz nézni a családi könyvtárból - akár utazás közben is, mobilneten!
:::

## iOS (telefon/tablet)

### App telepítése
- **[Jellyfin Mobile](https://apps.apple.com/us/app/jellyfin-mobile/id1480192618?mt=8)** – hivatalos kliens.
- **[Swiftfin](https://apps.apple.com/ca/app/swiftfin/id1604098728)** – Apple eszközökön gyorsabb, ha a Jellyfin Mobile akadozik.

:::tip Melyiket válaszd?
Kezdd a **Jellyfin Mobile**-lal. Ha lejátszási hiba vagy felirat gond van, próbáld ki a **Swiftfin**-t.
:::

### Első belépés telefonon
1. Nyisd meg az appot (Jellyfin vagy Swiftfin).
2. Írd be a szervercímet: `https://tv.gyurus.hu` majd koppints **Connect**.
3. Az **Authentik** ablakban add meg a regisztrációkor választott felhasználónevedet (nem az e-mail címedet) és a jelszavadat.
4. Ha több profil látszik, válaszd a sajátodat.

### Film vagy sorozat nézése
- Kezdőképernyőn látod a **Continue Watching** sort és az ajánlókat.
- Kereséshez koppints a nagyító ikonra és írd be a címet.
- Lejátszáshoz koppints a borítóra → **Play / Lejátszás**.
- Feliratnál: lejátszás közben koppints, válaszd a **Subtitles** ikont és állíts magyarra.
- Hangsávnál: ugyanitt az **Audio** ikonra koppints.

## Asztali gép (Mac/PC)

### Böngészős használat
1. Nyiss Chrome/Edge/Safarit és írd be: `https://tv.gyurus.hu`.
2. Jelentkezz be Authentikkel.
3. A felület ugyanaz, mint mobilon: **Continue Watching**, **Latest Movies**, **Latest Shows**.
4. Film indításához kattints a borítóra → **Play**; felirat/hangsáv a lejátszó alján állítható.
5. AirPlay/Chromecast ikon a lejátszó jobb felső sarkában található.

### Tippek számítógépen
- Használd a szóközt Play/Pause-ra, a nyíl gombokat ugráshoz.
- Nyiss új lapot jobb gombbal a filmkártyán, hogy ne veszítsd el a listát.
- Külső felirat feltöltéséhez a lejátszóban válaszd a **Subtitles → Upload** opciót.

## TV beállítás

### Android TV / Google TV
1. Nyisd meg a **Google Play Áruházat** az Android TV-n.
2. Keresd meg a **Jellyfin for Android TV** alkalmazást (színes háromszög ikon), majd telepítsd.
3. Indítás után válaszd az **Add Server** opciót, írd be: `https://tv.gyurus.hu`, majd kattints **Connect**.
4. A képernyőn megjelenő Authentik űrlapon add meg a regisztrációkor választott felhasználónevedet és a jelszavadat a TV-n látható billentyűzettel.
5. Válaszd ki a profilodat – megjelenik a TV-re optimalizált menü (**Folytatás**, **Filmek**, **Sorozatok**).
6. A távirányító navigációs gyűrűjével mozogj, az OK gombbal indítsd a lejátszást, a vissza gombbal lépj vissza.

### Cast / Chromecast
- **Android telefonról:** a Jellyfin Android appban koppints a jobb felső **Cast** ikonra, válaszd ki az Android TV-t vagy Chromecastot, majd indítsd a filmet.
- **Chrome böngészőből (Mac/PC):** kattints a három pontra → **Cast**, válaszd ki a TV-t, majd a Jellyfin lapot tükrözd.
- **iPhone/iPad:** jelenleg nincs AirPlay támogatás, ezért TV-n való lejátszáshoz használj Android TV-s Jellyfin appot vagy külső Chromecast eszközt.

### HDMI kábel
Ha nincs Cast, egyszerűen csatlakoztasd a laptopot HDMI-vel a TV-hez, nyisd meg a Jellyfin oldalt és teljes képernyőn játszd le a tartalmat.

:::tip TV nézet finomhangolása
A Jellyfin beállításokban (Settings → Display) kapcsold be a **TV mode / Large display** opciót, így nagyobb betűket és egyszerűbb menüt kapsz tévén.
:::

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

:::info Segítség asztali gépen
Ha sok lap van megnyitva, tedd a Jellyfin ablakot külön Desktopra vagy teljes képernyőre – így kevesebb zavaró tényező lesz és stabilabb a lejátszás.
:::

## További ötletek
- [Jellyfin – mit tudsz csinálni?](/docs/otletek/jellyfin-otletek): AirPlay, gyerekbarát profil, gyors felirat/hangsáv váltás.
