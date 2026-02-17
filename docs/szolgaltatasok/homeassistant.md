---
sidebar_position: 7
---

# 💡 Okosotthon Vezérlő (Lámpák, kapcsolók távirányítása)

**Webcím:** [https://home.gyurus.hu](https://home.gyurus.hu)

## 👉 MIRE JÓ EZ?

Az okosotthon vezérlő egy **központi távirányító** minden okoseszközhöz:

✅ **Lámpák** kapcsolása telefonról, felállás nélkül  
✅ **Kapcsolók** be/kikapcsolása  
✅ **Jelenetek** indítása (pl. "Filmnézés" = minden lámpa lehalványul)  
✅ **Ellenőrzés**: minden le van-e kapcsolva, ha elmész  
✅ **Értesítések**: ha nyitva maradt egy ajtó vagy ablak

⏱️ **Mennyi idő?** 2 perc első belépés, utána pár másodperc  
📱 **Mire lesz szükség?** iPhone/iPad vagy számítógép  
📶 **Internet:** Otthonról is, kintről is működik  
🔑 **Jelszó:** Ugyanaz, mint a többi családi szolgáltatásnál


---

## 🚀 START - HÁROM LÉPÉS (iPhone/iPad)

### 1️⃣ Töltsd le az alkalmazást

1. Nyisd meg az **App Store**-t iPhone-on vagy iPad-en
2. Keress rá: **Home Assistant**
3. Töltsd le az appot (kék-fehér háziós ikon)

**Link:** [Home Assistant iOS letöltés](https://apps.apple.com/us/app/home-assistant/id1099568401)

![App Store - Home Assistant](/img/home-assistant/kep1.png)

### 2️⃣ Lépj be először

1. Nyisd meg a **Home Assistant** appot a telefonodon
2. Az app üdvözlő képernyője jelenik meg: **"Home Assistant Companion App"**
3. Koppints a **"Connect to my Home Assistant"** (Csatlakozás) gombra

![Home Assistant app indítás](/img/home-assistant/kep2.png)

4. Az app **keres a hálózaton** ("Searching on home network")
5. Ha nem találja automatikusan, koppints: **"Enter address manually"** (Cím kézi megadása)

![Keresés a hálózaton](/img/home-assistant/kep3.png)

6. **Írd be a címet:** `https://home.gyurus.hu`
7. Koppints: **Connect** (Csatlakozás)

![Cím megadása](/img/home-assistant/kep4.png)

8. Megjelenik a **bejelentkező oldal** ("Welcome home!")
9. **Koppints az "OpenID Connect"** gombra (ez a családi bejelentkezés)

![Bejelentkezési módok](/img/home-assistant/kep5.png)

10. Megkérdezi: **"Use this device's location for automations"** (Hely megosztása)
    - Ha szeretnéd, hogy tudja, mikor vagy otthon: **"Share my location"**
    - Ha nem: **"Do not share my location"**

![Helymeghatározás engedély](/img/home-assistant/kep6.png)

11. Megkérdezi: **"Let us help secure your remote connection"**
    - Válaszd: **"Most secure: Allow this app to know when you're home"**
    - Koppints: **Next**

![Biztonságos kapcsolat](/img/home-assistant/kep7.png)

12. Megkérdezi: **"What is your home network?"** (Mi az otthoni Wi-Fi neve?)
    - Írj be egy nevet (pl. "Telekom-qMLmom" vagy az otthoni Wi-Fi neve)
    - Koppints: **Next**

![Wi-Fi név megadása](/img/home-assistant/kep8.png)

### 3️⃣ Használd a távirányítót

**Lámpa be/kikapcsolása:**
- Egyszerűen **koppints** a lámpa ikonra
- Újra koppintva kikapcsolod

**Fényerő állítása:**
- **Nyomd hosszan** a lámpa ikonját
- Megjelenik egy csúszka → húzd balra (sötétebb) vagy jobbra (világosabb)

**Jelenet indítása** (pl. "Filmnézés"):
- Keresd meg a **Jelenetek / Scenes** részt
- Koppints a jelenetre (pl. "Filmnézés")
- A lámpák automatikusan lehalványulnak

---

## ✅ KÉSZ VAGY! MIT FOGSZ LÁTNI?

A **Dashboard** (vezérlőpult) megjelenik, rajta:

📦 **Csempék** → minden lámpa, kapcsoló, érzékelő egy-egy négyzet  
🎬 **Jelenetek** → előre beállított kombinációk (pl. "Filmnézés", "Jó éjt")  
🌡️ **Hőmérsékletek** → ha van termosztát vagy hőmérő otthon

**Amit látsz:**
- Sárga ikon = a lámpa/kapcsoló **be van kapcsolva**
- Szürke ikon = a lámpa/kapcsoló **ki van kapcsolva**

---

## 💡 TIPPEK

### Gyakran használt lámpák: Widget a kezdőképernyőn

Ha nem akarsz minden alkalommal belépni az appba, kitehetsz egy **gyorsgombot** (widget) az iPhone kezdőképernyőre:

1. Hosszan nyomd a kezdőképernyőt (üres hely)
2. Koppints a **+** gombra (bal felső sarok)
3. Görgess le és keresd: **Home Assistant**
4. Válassz widget méretet (kis, közepes, nagy)
5. Koppints: **Add Widget**
6. Állítsd be, mely lámpákat/kapcsolókat mutassa

**Ezután:** Az iPhone kezdőképernyőről egy koppintással kapcsolhatsz!

### Siri hangvezérlés

Ha be van állítva, a Siri-vel is irányíthatsz:

- *"Hey Siri, kapcsold fel a nappali lámpát"*
- *"Hey Siri, indítsd el a Filmnézés jelenetet"*

### Értesítések engedélyezése

Az app tud értesítést küldeni, ha:
- Nyitva maradt egy ajtó/ablak
- Mozgásérzékelő aktiválódott
- Riasztás van

**Fontos:** Ha az app rákérdez, **engedélyezd az értesítéseket**, különben nem fogsz értesülni fontos dolgokról!

---

## ❌ MI A BAJA?

### Nem nyílik meg az app / "Cannot connect"

**Próbáld ezt:**
1. Ellenőrizd: van internet kapcsolatod? (Wi-Fi vagy mobil)
2. Várj 1-2 percet és nyisd meg újra az appot
3. Ha továbbra sem megy, próbáld meg böngészőből: Safari → írd be: `https://home.gyurus.hu`

### Egy lámpa nem reagál / nem kapcsol

**Próbáld ezt:**
1. Ellenőrizd: a fizikai kapcsoló be van kapcsolva? (ha van fali kapcsoló, az is be legyen)
2. Próbáld **kétszer** megnyomni a lámpa ikonját (ki, majd be)
3. Zárd be és nyisd meg újra az appot
4. Ha továbbra sem megy → jelezd, küldj képernyőképet a Dashboard-ról

### Jelenet nem indul el

**Próbáld ezt:**
1. Koppints újra a jelenetre
2. Várj 5-10 másodpercet (néha lassan reagál)
3. Ellenőrizd: a lámpák fizikailag be vannak kapcsolva?

### "Session expired" / "Jelentkezz be újra"

**Próbáld ezt:**
1. Koppints: **Belépés**
2. Írd be újra az e-mail címedet és jelszavadat
3. Ha nem emlékszel a jelszóra → nézd meg a **Authentik (Bejelentkezés)** útmutatót, ott van jelszó-visszaállítás

---

## 💻 SZÁMÍTÓGÉPEN (Mac/PC)

A számítógépen **nincs szükség alkalmazásra**, minden a böngészőben működik.

### Első belépés számítógépen

1. Nyiss meg egy böngészőt: **Chrome, Safari, Edge**
2. Írd be a címsorba: `https://home.gyurus.hu`
3. Megjelenik a bejelentkező oldal
4. Írd be az **e-mail címedet** és **jelszavadat**
5. Koppints: **Belépés** / **Sign in**

### Használat számítógépen

**Lámpa kapcsolása:**
- Egyszerűen **kattints** a lámpa csempére (egérrel)
- Újra kattintva kikapcsolod

**Fényerő állítása:**
- Kattints a lámpa csempére
- Megjelenik a részletes panel **jobb oldalon** → csúszka a fényerőhöz

**Jelenetek:**
- Kattints a jelenetre → azonnal elindul

### Hasznos tippek számítógépen

**Könyvjelző készítése:**
- Nyomd meg: **Command+D** (Mac) vagy **Ctrl+D** (Windows)
- Így gyorsan eléred később

**Billentyű parancs:** 
- Nyomd meg a **`c`** billentyűt → megnyílik a **parancskereső**
- Írj be egy nevet (pl. "nappali lámpa") → gyors kapcsolás

**Több Dashboard:**
- Ha több vezérlőpultod van (pl. "Nappali", "Hálószoba")
- A jobb felső sarokban kattints a **legördülő menüre** → válts közöttük

---

## 📖 HASZNOS KIFEJEZÉSEK

| Magyar | Angol | Mit jelent? |
|--------|-------|-------------|
| Dashboard | Dashboard | A vezérlőpult, ahol minden látszik |
| Csempe | Card / Tile | Egy négyzet, ami egy lámpát/kapcsolót mutat |
| Jelenet | Scene | Több lámpa együttes beállítása (pl. "Filmnézés") |
| Automatizálás | Automation | Időzített vagy feltételes kapcsolás |
| Fényerő | Brightness | Mennyire világít a lámpa (0-100%) |
| Widget | Widget | Gyorsgomb az iPhone kezdőképernyőn |
| Értesítés | Notification | Üzenet, ha valami történik |
