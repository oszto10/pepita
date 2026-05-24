# The Art Museum - Sitebuild Feladat

Egy reszponzív, modern múzeumi weboldal (Collections és Tickets felületek) sitebuild feladata, amely a megadott mobil és desktop tervek alapján készült.

## Demó
Az elkészült projekt megtekinthető a GitHub Pages segítségével az alábbi linken:
**[KATTINTS IDE AZ ÉLŐ OLDAL MEGTEKINTÉSÉHEZ](https://oszto10.github.io/pepita/)**

---

## 🛠️ Alkalmazott Technológiák
* **HTML5**
* **SCSS (Sass)**
* **Flexbox & Grid** – A modern és rugalmas elrendezésekért.
* **Vanilla JavaScript (ES6+)**
* **Vite**

---

## 📐 Megvalósított Funkciók 
* **Teljesen Reszponzív Dizájn:** Mobil, tablet és desktop nézetekre optimalizált felületek.
* **Offcanvas Hamburger Menü:** Mobil nézetben kattintásra becsúszó, animált menü, amely a menün kívülre vagy a linkekre kattintva automatikusan bezáródik.
* **UX / Navigáció:** A logó szövege linkesítve lett, így a jó gyakorlatnak megfelelően bármelyik aloldalról azonnal visszanavigál a főoldalra.
* **Tiszta CSS Megoldások:** A főcím középre igazítása Flexbox helyett abszolút pozicionálással lett megoldva, így elkerültem a felesleges, üres HTML elemek használatát. Emellett a betöltéskori menüvillanást (FOUC) natív HTML `hidden` attribútummal kezeltem.

---

## 💻 Helyi Futtatás

Ha szeretnéd a saját gépeden is futtatni a projektet fejlesztői módban, futtasd le ezt a 3 parancsot egymás után a terminálodban:

```bash
git clone [https://github.com/oszto10/pepita.git](https://github.com/oszto10/pepita.git)
npm install
npm run dev