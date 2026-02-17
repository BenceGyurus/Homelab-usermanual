---
sidebar_position: 8
---

# 🔑 Belépés és jelszókezelés (Authentik)

**Honlap:** [https://auth.gyurus.hu](https://auth.gyurus.hu)

:::tip 👉 MIRE JÓ EZ?
A **központi belépési rendszer** - mint egy kulcscsomó.  
**Egyetlen e-mail cím és jelszó** az összes szolgáltatáshoz (Fotók, Filmek, Fájlok, stb.).  
Itt tudod **megváltoztatni a jelszavad** és ellenőrizni, hol vagy bejelentkezve.
:::

---

## ⏱️ Mikor használd?

- 🔄 **Jelszót szeretnél módosítani**
- 👀 **Ellenőriznéd**, milyen eszközök vannak bejelentkezve
- 🚨 **Gyanús aktivitást** látsz valamelyik szolgáltatásban

---

## 🔐 MI AZ AZ AUTHENTIK?

Authentik = **"Családi belépő rendszer"**

**Hogyan működik:**
- Egyszer belépsz az **e-mail címeddel** és **jelszavaddal**
- Ezután **minden szolgáltatásnál** (Immich, Jellyfin, Seafile, stb.) ugyanezzel léphetsz be
- Ha itt **megváltoztatod a jelszót**, mindenhol érvényes lesz

**Előnyök:**
- ✅ Nem kell 10 különböző jelszót megjegyezni
- ✅ Biztonságosabb
- ✅ Ha kilépsz, mindenhol kilépsz

---

---

## 🚀 JELSZÓ MEGVÁLTOZTATÁSA

### TELEFON/TABLET (iPhone/iPad)

**1️⃣ lépés: Nyisd meg az Authentik oldalt és lépj be**

1. Nyisd meg **Safari**-t (vagy másik böngészőt)
2. Írd be: `https://auth.gyurus.hu`
3. Jelentkezz be az **e-mail címeddel** és **jelszavaddal**
4. Koppints: **Log in** (Belépés)

![Authentik bejelentkezés](/img/authentik/kep1.png)

---

**2️⃣ lépés: Beállítások megnyitása**

1. Belépés után a **"My applications"** (Alkalmazásaim) oldal nyílik meg
2. **Jobb felül** látod a **fogaskerék ikont** ⚙️ (Settings)
3. **Koppints a fogaskerék ikonra**

![Settings ikon](/img/authentik/kep2.png)

:::tip Tipp telefonon
Fordítsd el a telefont **fekvő nézetbe**, ha nem fér ki a teljes felület.  
Safari-ban **nagyíthatsz két ujjal**.
:::

---

**3️⃣ lépés: Jelszócsere**

1. A Settings (Beállítások) oldalon **görgess le**
2. Keresd meg a **"Change your password"** (Jelszó megváltoztatása) részt
3. Koppints a **"Change password"** gombra

![Change password gomb](/img/authentik/kep3.png)

4. **Töltsd ki a mezőket:**
   - **Password** (Jelszó) = az új jelszavad
   - **Password (repeat)** (Jelszó újra) = írd be újra az új jelszót

![Jelszó megadása](/img/authentik/kep4.png)

5. Koppints: **Continue** (Folytatás)

---

## ✅ KÉSZ VAGY! Mi történt?

Ha minden rendben:
- **Zöld üzenet** jelenik meg: _"Password updated successfully"_ (Jelszó sikeresen megváltoztatva)
- Az **új jelszó azonnal érvényes** minden szolgáltatásnál!
- Legközelebb már az **új jelszóval** léphetsz be

:::caution Fontos!
A többi eszközön (telefon, tablet, gép) **KI FOG** léptetni, és újra be kell lépned az **új jelszóval**.
:::

---

## 💻 SZÁMÍTÓGÉPEN

Ugyanúgy működik, csak nagyobb képernyőn:

1. Böngészőben: `https://auth.gyurus.hu`
2. Belépés
3. Jobb felül a **fogaskerék ikonra** ⚙️ kattintás (Settings)
4. Görgess le a **"Change your password"** részhez
5. Kattints a **"Change password"** gombra
6. Töltsd ki az űrlapot (Password, Password repeat)
7. **Continue** (Folytatás)

:::info Gyors elérés
Ha **bármelyik szolgáltatásnál** megnyílik az Authentik bejelentkezés, ugyanígy eléred a beállításokat!
:::

---

## 👀 ESZKÖZÖK ELLENŐRZÉSE

### Hol vagyok bejelentkezve?

Ha kíváncsi vagy, milyen eszközök használják a fiókodat:

1. Lépj be: `https://auth.gyurus.hu`
2. **Jobb felül** kattints a **fogaskerék ikonra** ⚙️ (Settings)
3. A bal oldali menüben válaszd: **Sessions** (Munkamenetek)
4. Látod a **bejelentkezett eszközök listáját**:
   - Böngésző típusa (Chrome, Safari, stb.)
   - Eszköz (iPhone, Mac, Windows)
   - Utolsó aktivitás ideje

**Ha gyanús valami:**
- Pl. egy eszközt látsz, amit nem ismersz
- Kattints a **Revoke** (Visszavonás) gombra a sor végén
- Az adott eszköz **kijelentkezik** minden szolgáltatásból!

---

## 💡 TIPPEK

### 📝 Milyen legyen a jelszó?

**Jó jelszó:**
- ✅ Legalább **12 karakter**
- ✅ **Kis- és nagybetű** vegyesen
- ✅ **Számok** (pl. 1, 2, 3)
- ✅ **Különleges karakterek** (pl. ! @ # $)

**Példa:**
- ❌ Gyenge: `jelszo123`
- ✅ Erős: `Macska2024!Eger`

**Tipp:**
- Gondolj egy **mondatra**, amiről eszedbe jut valami
- Pl.: "A kutyám Bodri 2024-ben született!" → `AkB2024bs!`

### 🔒 Biztonság

**Szabályok:**
- ❌ **NE** add ki a jelszavadat senkinek
- ❌ **NE** használd ugyanazt a jelszót más oldalakon (Facebook, Gmail, stb.)
- ✅ **IGEN** - jegyezd meg egy biztonságos helyen (jegyzetfüzet, jelszókezelő)

:::caution Fontos!
Ha **gyanús**, hogy illetéktelen kezébe került a jelszavad, **azonnal változtasd meg**!
:::

---

## ❌ MI A BAJA? - Gyakori hibák

### Elfelejtettem a jelszavamat

**Jelenleg nincs automatikus "Elfelejtett jelszó" funkció.**

**Mit csinálj:**
- Jelezd felém
- Manuálisan beállítok egy **új jelszót**
- Biztonsági okokból ez így működik

### "Wrong password" vagy "Incorrect password" hiba

**Mit jelent?**  
Rossz jelszót írtál be.

**Próbáld ezt:**
1. ✅ Ellenőrizd a **Caps Lock** (nagybetű zár) nincs-e bekapcsolva
2. ✅ Próbáld **lassan beírni** a jelszót
3. ✅ Nézd meg van-e **szóköz** a végén véletlenül

### Kijelentkeztetett mindenhonnan

**Mit jelent?**  
Megváltoztattad a jelszót, ezért automatikusan kiléptél.

**Mit csinálj:**
- Lépj be újra az **új jelszóval** mindenhol
- Ez normális és biztonságos!

---

## 🎯 TOVÁBBI INFORMÁCIÓK

Az Authentik egy **biztonsági eszköz** - vigyázz rá, mint a lakáskulcsodra!

**Ha bármi kérdésed van:**
- Jelezd bátran
- Nem baj, ha valamit nem értesz - mindenki így kezdi!


## Asztali gép (Mac/PC)

### Jelszócsere lépései gépen
1. Böngésző címsorába írd: `https://auth.gyurus.hu`
2. Jelentkezz be az Authentik fiókoddal
3. Jobb felül kattints a **fogaskerék ikonra** ⚙️ (Settings)
4. Görgess le a **"Change your password"** részhez
5. Kattints a **"Change password"** gombra
6. Add meg kétszer az új jelszót (Password, Password repeat)
7. Kattints: **Continue** (Folytatás)

:::info Gyors elérés
Ha bármelyik szolgáltatásnál megnyílik az Authentik ablak, ugyanígy eléred a beállításokat a fogaskerék ikon segítségével.
:::

## Eszközök ellenőrzése

1. Lépj be: `https://auth.gyurus.hu`
2. **Jobb felül** kattints a **fogaskerék ikonra** ⚙️ (Settings)
3. A bal oldali menüben nyisd meg a **Sessions** menüt
4. Itt látod, milyen eszközök vannak bejelentkezve (böngésző, mobil app)
5. Ha gyanús valami, kattints a **Revoke** gombra a sor végén – az adott eszköz kijelentkezik minden szolgáltatásból

## Ha elfelejtetted a jelszót

- Jelezd nekem, és manuálisan állítok be újat.
- Biztonsági okokból nincs automatikus „Elfelejtett jelszó” gomb.

:::caution Fontos
Ugyanazt a jelszót soha ne add ki külső embernek. Ha mégis gyanús hogy illetéktelenhez jutott, azonnal változtasd meg.
:::
