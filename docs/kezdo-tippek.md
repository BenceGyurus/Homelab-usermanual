---
id: kezdo-tippek
title: Kezdő tippek
sidebar_position: 2
---

# Authentik kezdő lépések

Ez az oldal végigvezet minden olyan alap beállításon, amire szükséged lehet: jelszócsere és a közös AirPrint nyomtató használata.

## Authentik jelszó megváltoztatása

1. Nyiss meg egy böngészőt (Mac, Windows, iPhone, iPad) és írd be: `https://auth.gyurus.hu`.
2. Jelentkezz be a családi Authentik fiókoddal (e-mail cím + jelenlegi jelszó).
3. Bejelentkezés után a jobb felső sarokban kattints a nevedre, majd válaszd a **Manage account** menüpontot.
4. A megnyíló oldalon bal oldalt kattints a **Security**, azon belül a **Change password** opcióra.
5. Írd be a jelenlegi jelszót, majd kétszer az újat (legalább 12 karakter, kis- és nagybetű + szám ajánlott).
6. Kattints a **Save** gombra. A módosítás azonnal érvényes minden szolgáltatásban.

:::info Ha nem találod a portált
Authentik belépésnél (bármelyik szolgáltatásban) a jobb felső sarokban megjelenik egy **Manage account** link. Arra kattintva ugyanebbe a felületbe jutsz, ott is átírhatod a jelszót.
:::

## Nyomtatás a 192.168.1.11-es AirPrint szerverrel

A családi nyomtató szerver a `192.168.1.11` címen fut és AirPrint kompatibilis. Fontos, hogy ugyanazon az otthoni Wi-Fi-n legyél, nincs külön jelszó. A nyomtató neve: `HP_LaserJet_P1005`.

### Nyomtatás MacBookról
1. Kapcsolódj az otthoni Wi-Fi-hálózathoz.
2. Nyisd meg a **System Settings** alkalmazást.
3. Válaszd a **Printers & Scanners** menüpontot, majd kattints a **+** jelre.
4. A **Default** fülön általában megjelenik a `HP_LaserJet_P1005 (AirPrint)` – jelöld ki, kattints az **Add** gombra.
5. Ha nem látod, menj az **IP** fülre, és töltsd ki:
   - **Address:** `192.168.1.11`
   - **Protocol:** AirPrint
   - **Name:** pl. `Gyurus-nyomtato`
   - Ezután **Add**.
6. Nyomtatáshoz bármely alkalmazásban válaszd a **File → Print** menüt, majd a listából a `HP_LaserJet_P1005` nyomtatót.

### Nyomtatás iPhone-ról vagy iPadről (AirPrint)
1. Nyisd meg a nyomtatandó dokumentumot.
2. Koppints a **Megosztás** ikonra, majd válaszd a **Print** opciót.
3. A nyomtató listában válaszd a `HP_LaserJet_P1005` eszközt (automatikusan felismeri).
4. Állítsd be a példányszámot, majd koppints a **Print** gombra.

**Ha nem jelenik meg a nyomtató:**
- Ellenőrizd, hogy ugyanarra a Wi-Fi-hálózatra csatlakoztál.
- Kapcsold be a nyomtatót (egy gombnyomás a bekapcsoló gombbal felébreszti).
- Macen próbáld meg az IP-fülről újra hozzáadni az eszközt.
