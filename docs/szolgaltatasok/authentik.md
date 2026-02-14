---
sidebar_position: 8
---

# Authentik (Fiókkezelés)

**Webcím:** [https://auth.gyurus.hu](https://auth.gyurus.hu)

## Mire jó?

Az Authentik a központi bejelentkezési rendszer, amely az összes szolgáltatás (Immich, Seafile, Jellyfin, stb.) számára kezeli a felhasználóneveket és jelszavakat.

- Egyetlen fiókkal lépsz be minden alkalmazásba
- Innen tudod megváltoztatni a jelszavad
- Ellenőrizheted az aktív bejelentkezéseket, eszközöket

:::tip Mikor használd?
- Ha jelszót szeretnél módosítani
- Ha ellenőriznéd, milyen eszközök vannak bejelentkezve
- Ha gyanús aktivitást látsz valamelyik szolgáltatásban
:::

## iOS (telefon/tablet)

### Jelszócsere lépései telefonon
1. Nyisd meg Safariban: `https://auth.gyurus.hu` (vagy bármelyik szolgáltatás belépő oldaláról koppints a **Manage account** linkre).
2. Jelentkezz be az aktuális e-mail + jelszó párossal.
3. A jobb felső sarokban koppints a nevedre → **Manage account**.
4. A bal oldali menüben válaszd a **Security → Change password** részt.
5. Írd be a jelenlegi jelszót, majd kétszer az újat (legalább 12 karakter, kis- és nagybetű, szám).
6. Koppints a **Save** gombra – azonnal érvénybe lép minden alkalmazásnál.

:::info Tipp telefonon
Fordítsd el a telefont fekvő nézetbe, ha nem fér ki a teljes űrlap. Safari-ban nagyíthatsz két ujjal.
:::

## Asztali gép (Mac/PC)

### Jelszócsere lépései gépen
1. Böngésző címsorába írd: `https://auth.gyurus.hu`.
2. Jelentkezz be az Authentik fiókoddal.
3. Jobb felül kattints a nevedre → **Manage account**.
4. Bal oldalt **Security → Change password**.
5. Add meg a jelenlegi jelszót, majd kétszer az újat, végül **Save**.

:::info Gyors elérés
Ha bármelyik szolgáltatásnál megnyílik az Authentik ablak, a jobb felső sarokban ott a **Manage account** link – innen is eléred a fenti képernyőt.
:::

## Eszközök ellenőrzése

1. A **Manage account** nézetben nyisd meg a **Sessions** menüt.
2. Itt látod, milyen eszközök vannak bejelentkezve (böngésző, mobil app).
3. Ha gyanús valami, kattints a **Revoke** gombra a sor végén – az adott eszköz kijelentkezik minden szolgáltatásból.

## Ha elfelejtetted a jelszót

- Jelezd nekem, és manuálisan állítok be újat.
- Biztonsági okokból nincs automatikus „Elfelejtett jelszó” gomb.

:::caution Fontos
Ugyanazt a jelszót soha ne add ki külső embernek. Ha mégis gyanús hogy illetéktelenhez jutott, azonnal változtasd meg.
:::
