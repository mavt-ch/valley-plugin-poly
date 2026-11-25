# Study

Study tools for ETH and UZH students in Valley. Version 1.0.0 has one feature: a **Menu plan**.

## Menu plan

Two surfaces show the same day and meal:

- **Left sidebar**: the fork-and-knife entry in the Icon Rail opens a compact list of outlets and dishes.
- **Page**: the page button in the sidebar header (or Open the menu plan page on an outlet's right-click menu) opens a main-workspace page with every dish as a card: its picture, line, price, description, diet and climate tags; a click shows all prices and the allergens. In a narrow pane the cards become rows with the picture on the left.

The sources:

- **ETH Hönggerberg**: every ETH outlet on the Hönggerberg campus (postcodes 8093, 8049 and 8053, the rule ETH's own gastronomy page uses), with opening times of the meal, prices for students, staff or guests (Settings → Study → Prices for), diet, menu type and allergens.
- **UZH**: every UZH outlet the ZFV publishes on food2050, grouped by campus. The mensas and the Lichthof are open by default; any other outlet is read only once you open it. Dishes carry diet, food2050's climate rating and allergens; on the page each card also reads its dish page for the picture and the prices.

Use the arrows to move a day, click the date to come back to today, switch Lunch and Dinner, fold or open an outlet (remembered), click a dish for all prices and its allergens, right-click an outlet to open its website. The refresh button reads the services again past the half-hour cache.

## Data sources

- ETH: the Cookpit service behind ETH's gastronomy page, `https://idapps.ethz.ch/cookpit-pub-services/v1/` (`facilities`, `weeklyrotas`), with the client id that page sends. Missing English texts (`novalue`) are filled from the German answer.
- UZH: the food2050 pages of the ZFV, `https://app.food2050.ch/{de|en}/zfv/universitat-zurich…`. They have no public API; the plugin reads the structured payload each server-rendered page embeds (organisation page → outlets, outlet page → meal categories, `…/<category>/menu/weekly?week=&year=` → dishes, a dish's own page → picture and prices). Pictures come from `storage.googleapis.com/dish-images-prod/`.

Network requests run only in the backend, two at a time, to `idapps.ethz.ch`, `app.food2050.ch` and `storage.googleapis.com` (the only declared hosts). Pictures reach the page as data addresses, read only once a card is on screen.

## Build and test

Node 24.19.0, npm 11.17.0.

```bash
npm install
npm test
npm run typecheck
npm run check
```

`npm run check` builds `runtime/`. Install by copying `manifest.json`, `config.json`, `icon.svg`, `LICENSE`, `README.md` and `runtime/` into a realm's `.valley/plugins/packages/local/study/`.
