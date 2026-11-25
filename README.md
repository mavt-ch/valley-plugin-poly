# Study

Study tools for ETH and UZH students in Valley. Version 1.3.0 has one feature: a **Menu plan**.

## Menu plan

- **Left sidebar** (the fork-and-knife entry in the Icon Rail), three rows:
  1. *Menu plan* with Lunch | Dinner and the page button (corners icon).
  2. The campus tags **ETH** (ETH Zentrum), **Höngg** (ETH Hönggerberg) and **UZH** (the UZH outlets), each with the number of places that have a matching menu. A tag shows only while its campus has a place serving the meal that day.
  3. The day: arrows move a day, a click on the date comes back to today; the cash button chooses whose prices the cards show (All prices, Students, Staff, Guests); the funnel opens the filters.

  Below, one row per place: its name, how many menus it has for the day and meal (after the filters), its location (building and floor for ETH, campus and street for UZH) and, where the source publishes opening hours (ETH), *Open now* or *Closed* with the hours. A click opens the place's page, ⌘-click or the middle button opens it in a new tab; right-click offers a new tab, the place's website and Refresh.
- **Page**: a place's page names the place in its top bar (day, meal and filters stay in the sidebar), shows its location, opening and serving hours and menu count in a fixed bar below it, and every menu as one compact card: picture, line, every price on one line from students to guests ("CHF 7.90 / 10.90 / 13.90"; the tooltip names the groups, a shared price such as "All visitors" shows once) or, with a group chosen at the cash button, only that group's price (a shared price when that is what the group pays), description, allergens, then the diet, gluten-free, lactose-free and climate tags. Cards do not open or expand. The page button in the sidebar opens the chosen campus with every place and its cards. In a narrow pane the cards become rows with the picture on the left. The page shares the day, meal, filters and price with the sidebar.
- **Filters** (the funnel in the sidebar, also Settings → Study): Vegetarian (vegan included) and Vegan, then Gluten-free and Lactose-free. A menu counts as gluten-free only when its source declares its allergens and none is a gluten cereal (ETH "gluten wheat", UZH gluten-containing cereals, wheat, barley, rye, spelt, oats, kamut), lactose-free only when none is milk (ETH "milk, lactose", UZH milk); a menu without declared allergens is never called gluten- or lactose-free.

The campuses:

- **ETH** and **Höngg**: ETH's outlets sorted by postcode as ETH's own gastronomy page does: Hönggerberg 8093, 8049 and 8053; Oerlikon (8050) and Basel are not shown; everything else is Zentrum. Opening hours, serving times, prices for students, staff and guests, diet, menu type and allergens.
- **UZH**: every UZH outlet the ZFV publishes on food2050, read in the background when the menu plan opens (two pages at a time, kept for 30 minutes) so the list and the tag counts are complete. Dishes carry diet, food2050's climate rating and allergens; on the page each card also reads its dish page for the picture and the prices. food2050 publishes no opening hours.

## Data sources

- ETH: the Cookpit service behind ETH's gastronomy page, `https://idapps.ethz.ch/cookpit-pub-services/v1/` (`facilities`, `weeklyrotas`), with the client id that page sends. Missing English texts (`novalue`) are filled from the German answer.
- UZH: the food2050 pages of the ZFV, `https://app.food2050.ch/{de|en}/zfv/universitat-zurich…`. They have no public API; the plugin reads the structured payload each server-rendered page embeds (organisation page → outlets, outlet page → address and meal categories, `…/<category>/menu/weekly?week=&year=` → dishes, a dish's own page → picture and prices). Pictures come from `storage.googleapis.com/dish-images-prod/`.

Network requests run only in the backend, two at a time, to `idapps.ethz.ch`, `app.food2050.ch` and `storage.googleapis.com` (the only declared hosts); the open page's reads and pictures go before the list's background reads. Pictures reach the page as data addresses, read only once a card is on screen.

## Build and test

Node 24.19.0, npm 11.17.0.

```bash
npm install
npm test
npm run typecheck
npm run check
```

`npm run check` builds `runtime/`. Install by copying `manifest.json`, `config.json`, `icon.svg`, `LICENSE`, `README.md` and `runtime/` into a realm's `.valley/plugins/packages/local/study/`.
