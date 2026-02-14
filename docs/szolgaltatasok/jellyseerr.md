---
sidebar_position: 4
---

# Jellyseerr (Sorozat/film kérés)

**Webcím:** [https://sorozat.gyurus.hu](https://sorozat.gyurus.hu)

## Mire jó?

A Jellyseerr egy **"kívánságlista" és kereső felület**:

- Megkeresed a filmet vagy sorozatot, amit néznél
- **1 gombbal kéred**, hogy kerüljön fel a könyvtárba
- Jelzi, ha már elérhető lejátszáshoz a Jellyfin-ben

:::tip Így működik
1. Te kérsz egy filmet/sorozatot
2. A rendszer automatikusan letölti
3. Pár óra múlva már nézheted a Jellyfin-ben!
:::

## iOS (telefon/tablet)

:::caution Első bejelentkezés
Mielőtt Jellyseerr-be lépnél, egyszer jelentkezz be a Jellyfinbe (ugyanazzal a felhasználónév/jelszó párossal). Ez aktiválja a profilodat, így az Authentik el fogja fogadni a Jellyseerr belépést.
:::

### Böngészőben (Safari)
1. Nyisd meg Safariban: **[https://sorozat.gyurus.hu](https://sorozat.gyurus.hu)**.
2. Jelentkezz be Authentikkel: a regisztrációkor megadott felhasználóneveddel és a jelszavaddal.
3. A keresőmezőbe írd be a film vagy sorozat címét.
4. Nyisd meg a találatot, koppints a **Request / Kérés** gombra.
5. Sorozatnál jelöld be az évadokat, majd erősítsd meg a kérést.

:::tip Mire lesz szükséged?
- iPhone/iPad (böngészővel)
- Stabil internetkapcsolat
- Authentik bejelentkezés
:::

:::note Ha már elérhető
Ha **Available** jelzést látsz, a tartalom már a Jellyfin-ben van – nyisd meg ott, nem kell újra kérni.
:::

<!-- KÉP HELYE: Jellyseerr kezdőképernyő iPhone-on Safari böngészőben, látszik a Search mező és néhány film poszter -->

<!-- KÉP HELYE: Egy sorozat oldala, ahol látszik a "Request" gomb és az évad választó (Season 1, Season 2 stb. checkboxokkal) -->

### Gyors ikon iPhone-on
1. Safariban nyisd meg: `https://sorozat.gyurus.hu`.
2. Koppints a **Share** ikonra (négyzet felfelé nyíllal).
3. Válaszd az **Add to Home Screen / Kezdőképernyőhöz** opciót.
4. Adj nevet (pl. "Sorozat kérés"), majd koppints **Add**.
5. Mostantól úgy működik, mint egy app ikon.

<!-- KÉP HELYE: iOS Share menü, ahol ki van emelve az "Add to Home Screen" opció -->

## Mit jelent az állapot?

Miután kértél valamit, különböző állapotokat láthatsz:

| Állapot | Mit jelent? |
|---------|-------------|
| **Requested** | Bekerült a listára, vár feldolgozásra |
| **Processing / Downloading** | Épp intézi a rendszer, töltődik le |
| **Available** | Már nézhető a Jellyfin-ben! |

:::note Türelem
Néha pár óra is lehet, mire minden elkészül (letöltés + feliratozás + könyvtár frissítés). Ha másnap sincs meg, szólj!
:::

## Mikor lesz nézhető a Jellyfin-ben?

- Ha a státusz **Available**, akkor már megnézheted a Jellyfin-ben.
- Ha még nem elérhető: hagyd futni, és nézz rá később.

## Ha nem találod, amit keresel

- **Próbáld angol címmel is** - a nemzetközi adatbázisban gyakran csak az eredeti cím van
- **Nézz rá az évszámra** - remake-eknél fontos (pl. "Dune 1984" vs "Dune 2021")
- **Ha teljesen hiányzik**: írj nekem, megnézem a beállításokat

:::info Példa
Ha a "Mintaapák" nem talál semmit, próbáld: "Modern Family"
:::

## Asztali gép (Mac/PC)

1. Chrome/Edge/Safari böngészőben nyisd meg: `https://sorozat.gyurus.hu`.
2. Jelentkezz be Authentikkel.
3. A felső keresőmező azonnal mutatja a találatokat gépelés közben.
4. Kattints a címre → **Request** gomb. Sorozatnál választhatod az egész sorozatot vagy csak pár évadot.
5. A bal oldali **Requests** menüpontban követheted az állapotot (Requested / Processing / Available).
6. Ha egy kérés **Available**, a címre kattintva rögtön átléphetsz a Jellyfin oldalára.

**Tippek asztali használathoz:**
- Tedd könyvjelzőbe vagy pineld a lapot, így egy kattintásnyira lesz.
- Több cím keresésekor nyisd őket új lapon (Ctrl/Cmd + katt), hogy megmaradjon a lista.
- A jobb felső értesítés ikon jelzi, ha elkészült egy kérelmed.

## További ötletek
- [Jellyseerr – mit tudsz csinálni?](/docs/otletek/jellyseerr-otletek): teljes sorozat kérése, részleges évad, családtag szerinti követés.
