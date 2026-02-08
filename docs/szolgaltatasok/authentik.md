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

## Authentik jelszó megváltoztatása

1. Nyiss meg egy böngészőt (Mac, Windows, iPhone, iPad) és írd be: `https://auth.gyurus.hu`.
2. Jelentkezz be a családi Authentik fiókoddal (e-mail cím + jelenlegi jelszó).
3. Bejelentkezés után a jobb felső sarokban kattints a nevedre, majd válaszd a **Manage account** menüpontot.
4. Bal oldalt kattints a **Security**, azon belül a **Change password** opcióra.
5. Írd be a jelenlegi jelszót, majd kétszer az újat. Legalább 12 karaktert használj, legyen benne kisbetű, nagybetű és szám.
6. Kattints a **Save** gombra. Az új jelszó azonnal érvényes minden szolgáltatásnál.

:::info Ha nem találod a portált
Amikor bármelyik szolgáltatás Authentik ablakot nyit, a jobb felső sarokban megjelenik a **Manage account** link. Arra kattintva ugyanide jutsz, és ott is módosíthatod a jelszót.
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
