---
sidebar_position: 1
---

# Immich (Fotók)

**Webcím:** [https://photos.gyurus.hu](https://photos.gyurus.hu)

## Mire jó?

Az Immich egy "saját Google Photos" jellegű fotótár:

- **Automatikus fotó- és videómentés** iPhone-ról a szerverre
- Albumok, keresés, arcok/helyek (ha be van kapcsolva)
- Megosztás családtagokkal

:::tip Fontos
Ez a legjobb módja annak, hogy a telefonodon lévő fotók biztonságban legyenek - ha elvész vagy tönkremegy a telefon, a képek megmaradnak a szerveren!
:::

## App telepítése

Töltsd le az Immich appot az App Store-ból:

**[Immich iOS letöltés](https://get.immich.app/ios)**

<!-- KÉP HELYE: App Store oldala az "Immich" alkalmazásnak, látszik a Letöltés gomb és az app ikonja (kék színű, fényképező ikon) -->

## Mire lesz szükséged?

- iPhone vagy iPad internetkapcsolattal (Wi-Fi ajánlott az első feltöltéshez)
- A saját családi felhasználód (Authentik belépés: e-mail + jelszó)
- iOS engedély: a Fotókhoz hozzáférés (válaszd majd az **Összes fotó** opciót)

:::tip Mit fogsz látni belépéskor?
Az Immich egy böngészős belépő oldalt fog megnyitni (Authentik). Ez normális: itt kell beírni az e-mail címet és a jelszót.
:::

## Első belépés (app)

1. Telepítés után nyisd meg az **Immich** appot
2. A **Server URL / Szerver cím** mezőbe írd be:
   ```
   https://photos.gyurus.hu
   ```
3. Koppints: **Continue / Tovább**
4. Át fog dobni az **Authentik** belépésre
5. A belépő oldalon:
   - írd be az **e-mail címedet**
   - írd be a **jelszavadat**
   - koppints: **Belépés / Sign in**
6. Sikeres belépés után visszakerülsz az Immich appba, és megjelennek a menük

<!-- KÉP HELYE: Immich "Server URL" képernyő, ahol látszik a `https://photos.gyurus.hu` beírva a szövegmezőbe -->

<!-- KÉP HELYE: Authentik belépés az Immich appon belül (email/jelszó mezők és Belépés gomb) -->

:::note Ha nem dob át automatikusan
Nézd meg, nem jelent-e meg egy "Open in browser / Megnyitás böngészőben" gomb - koppints rá!
:::

## Automatikus mentés bekapcsolása

**Ez a legfontosabb lépés!** Ha ezt beállítod, minden fotód és videód automatikusan felmegy a szerverre.

1. Immich appban: **Settings / Beállítások**
2. **Backup / Mentés** (vagy "Upload") rész
3. Kapcsold be: **Automatic backup**
4. Engedélyezd a Fotók hozzáférést, amikor kéri (válaszd: **All Photos / Összes fotó**)
5. Ha van választási lehetőség:
   - **Wi-Fi only** (csak Wi-Fi): kevesebb mobilnet
   - **Background upload** (háttérfeltöltés): gyorsabb, de több akku

<!-- KÉP HELYE: iOS engedélykérés "Photos Access" ablak, ahol 3 opció látszik: All Photos, Limited Access, Don't Allow -->

<!-- KÉP HELYE: Immich Backup beállítások képernyő, ahol látszanak a kapcsolók (Automatic backup, Wi-Fi only stb.) -->

:::tip Javaslat
Ha sok a videó, érdemes először Wi-Fi-n hagyni feltölteni, és közben töltőre tenni a telefont.
:::

:::note iOS tipp (ha néha leáll a feltöltés)
Az iPhone időnként "elaltat" appokat a háttérben. Ha azt látod, hogy napokig nem tölt fel, nyisd meg az Immich appot pár percre, és hagyd elöl.
:::

## Napi használat

### Feltöltés ellenőrzése
A képernyőn általában látszik egy jelzés, ha dolgozik (sync/feltöltés ikon a tetején).

<!-- KÉP HELYE: Immich főképernyő, ahol látszik a feltöltési állapot ikon a jobb felső sarokban (szinkronizálás közben) -->

### Album készítése
1. Menj a **Photos** részbe
2. Koppints **Select** (vagy hosszan nyomj egy képet)
3. Jelöld ki a képeket
4. Koppints: **Add to album**
5. Válassz meglévő albumot vagy hozz létre újat

### Megosztás
1. Albumon belül koppints a **Share** gombra
2. Válassz: személy hozzáadása vagy megosztható link (ha elérhető)

### Keresés
1. Koppints a **Search** ikonra (nagyító)
2. Írj be személyt/helyet/tárgyat
3. A rendszer megkeresi a találatokat

## Gyakori hibák és megoldások

### Nem tölt fel
- Nyisd meg az appot Wi-Fi-n
- Hagyd pár percig elöl (ne a háttérben)
- Ellenőrizd, hogy van-e elég hely a szerveren

### Csak "Korlátozott hozzáférés" van beállítva
Ha korábban véletlenül nem az **Összes fotó** opciót választottad:

1. iOS **Beállítások** -> **Immich**
2. **Photos / Fotók**
3. Válaszd: **Összes fotó**

### Kijelentkeztetett
- Nyisd meg újra az appot
- Lépj be Authentik-en

### Nincs hozzáférés a fotókhoz
1. Menj az iOS **Beállítások** appba
2. Keresd meg: **Immich**
3. **Photos** -> válaszd: **All Photos**

:::info Segítség
Ha továbbra sem megy: küldj egy képernyőképet a hibaüzenetről, és megmondom, mit kell állítani!
:::
