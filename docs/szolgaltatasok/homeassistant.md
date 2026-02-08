---
sidebar_position: 7
---

# Home Assistant (Okosotthon)

**Webcím:** [https://home.gyurus.hu](https://home.gyurus.hu)

## Mire jó?

A Home Assistant az **otthoni okoseszközök "központi távirányítója"**:

- Lámpák, kapcsolók, termosztát, konnektorok
- **Jelenetek** (pl. "Filmnézés", "Éjszaka")
- **Automatizálások** (pl. ha elmész otthonról, kapcsoljon le)
- Értesítések (pl. nyitva maradt ajtó)

:::tip Mikor használd?
- Lámpát szeretnél kapcsolni anélkül, hogy felállnál
- Ellenőrizni akarod, hogy minden le van-e kapcsolva
- Jeleneteket akarsz indítani (pl. "Filmnézés" = lámpák lehalkítása)
:::

## App telepítése

Töltsd le a Home Assistant appot az App Store-ból:

**[Home Assistant iOS letöltés](https://apps.apple.com/us/app/home-assistant/id1099568401)**

<!-- KÉP HELYE: App Store oldala a "Home Assistant" appnak, látszik a kék-fehér ikon és a Letöltés gomb -->

## Első belépés (app)

1. Nyisd meg a **Home Assistant** appot
2. Ha kér szervercímet, írd be:
   ```
   https://home.gyurus.hu
   ```
3. Koppints: **Continue / Next**
4. Átirányít **Authentik** belépésre
5. A belépő oldalon írd be az **e-mail címedet** és a **jelszavadat**, majd koppints: **Belépés / Sign in**
6. Visszakerülsz az appba, és betölt a **Dashboard** (kezdőoldal)

<!-- KÉP HELYE: Home Assistant "Connect to server" képernyő a `https://home.gyurus.hu` URL-lel a mezőbe beírva -->

<!-- KÉP HELYE: A családi "Dashboard" kezdőképernyő, ahol látszanak a lámpa gombok, kapcsoló kártyák -->

## Alap használat

### Kapcsoló/lámpa be/ki
- Egyszerűen **koppints** a lámpa vagy kapcsoló kártyájára
- Újra koppintva kikapcsol

### Részletek megtekintése
- **Hosszan nyomva** tartsd a kártyát
- Megjelenik a részletes nézet (pl. fényerő csúszka lámpánál)

<!-- KÉP HELYE: Egy lámpa "more info" ablaka (hosszú nyomás után), ahol látszik a fényerő csúszka és a ki/be gomb -->

### Jelenet indítása
1. Keresd a **Scenes / Jelenetek** részt a Dashboard-on
2. Koppints a kiválasztott jelenetre (pl. "Filmnézés")
3. A rendszer végrehajtja a beállításokat

### Kedvencek
- Ha van csillag / "favorite" lehetőség, a gyakran használt dolgokat tedd ki a főképernyőre

## Hasznos iOS extrák

### Widget
Kitehetsz **gyorsgombokat** az iOS kezdőképernyőre:

1. Hosszan nyomd a kezdőképernyőt
2. Koppints a **+** gombra (bal felső sarok)
3. Keresd meg: **Home Assistant**
4. Válassz widget méretet
5. Állítsd be, melyik kapcsolókat/lámpákat mutassa

<!-- KÉP HELYE: iOS widget választás képernyő, ahol látszik a Home Assistant widget különböző méretekben -->

### Siri parancsok
Ha be vannak állítva, **Siri**-vel is vezérelhetsz:
- "Hey Siri, kapcsold fel a nappali lámpát"
- "Hey Siri, indítsd el Filmnézés jelenetet"

### Értesítések
Az app küldhet **értesítéseket**, pl:
- Nyitva maradt ajtó
- Riasztás
- Mozgásérzékelő aktiválódott

:::tip Ajánlott beállítás
Ha az app rákérdez, engedélyezd az **értesítéseket**, különben nem fogsz szólni, ha valami fontos történik.
:::

## Ha nem nyílik meg

:::caution Ellenőrizd ezeket:
1. **Csak otthonról érhető el?** - Ha igen, csatlakozz az otthoni Wi-Fi-re
2. **Próbáld böngészőből**: Safari -> `https://home.gyurus.hu`
3. **"Cannot connect" hiba**: várj 1-2 percet és próbáld újra
:::

### Ha sokszor előfordul
Szólj nekem, és megnézem:
- A szerver állapotát
- A távoli elérés beállításait

:::info Segítség
Ha valami nem működik (pl. egy lámpa nem reagál): küldj képernyőképet a Dashboard-ról és a hibaüzenetről!
:::

## Használat asztali gépen (böngészőből)

1. Nyiss meg egy böngészőt (Chrome, Edge, Safari) és írd be: `https://home.gyurus.hu`.
2. Jelentkezz be Authentikkel.
3. A **Dashboard** ugyanaz, mint az appban: csempék, jelenetek, grafikonok. Egérrel kattints a csempékre a be/ki kapcsoláshoz.
4. Hosszú kattintás helyett itt azonnal megjelenik a részletes panel (fényerő csúszka, ventilátor sebesség stb.).
5. Ha szeretnéd, hogy külön ablakban fusson, tedd könyvjelzőbe, vagy Safari/Chrome-ban használd a **Install as app / Add to Dock** funkciót.
6. A bal oldali menüből elérhetők az automatizálások, beállítások – így asztaliról könnyebb nagyobb módosításokat végezni.

**Tippek böngészőhöz:**
- Engedélyezd az értesítéseket, így a Mac/PC is szól, ha mozgás vagy riasztás történik.
- Ha több dashboardod van (pl. "Nappali", "Hálószoba"), a jobb felső legördülővel gyorsan válthatsz köztük.
- A `c` billentyű lenyomásával megnyílik a parancskereső (Command Palette), ahol név alapján gyorsan megtalálsz érzékelőket, automatizmusokat.
