var Tg=Object.defineProperty;var Ag=(n,e,t)=>e in n?Tg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var He=(n,e,t)=>Ag(n,typeof e!="symbol"?e+"":e,t);var Ye="#12120f",wt="#ffffff",nc=[{id:"green",family:"semantic",labelKey:"color.green",light:"#549c83",dark:"#549c83",onLight:Ye,onDark:Ye},{id:"red",family:"semantic",labelKey:"color.red",light:"#d33542",dark:"#d33542",onLight:wt,onDark:wt},{id:"amber",family:"semantic",labelKey:"color.amber",light:"#ff9f0a",dark:"#ff9f0a",onLight:Ye,onDark:Ye},{id:"blue",family:"semantic",labelKey:"color.blue",light:"#0075b2",dark:"#90cfff",onLight:wt,onDark:Ye},{id:"yellow",family:"semantic",labelKey:"color.yellow",light:"#ad8500",dark:"#e6c45c",onLight:Ye,onDark:Ye},{id:"orange",family:"semantic",labelKey:"color.orange",light:"#bf5200",dark:"#fc8c50",onLight:wt,onDark:Ye},{id:"purple",family:"semantic",labelKey:"color.purple",light:"#8149c0",dark:"#c095fc",onLight:wt,onDark:Ye},{id:"pink",family:"semantic",labelKey:"color.pink",light:"#c52f9a",dark:"#da3aaa",onLight:wt,onDark:Ye},{id:"brown",family:"semantic",labelKey:"color.brown",light:"#78490b",dark:"#c7925c",onLight:wt,onDark:Ye},{id:"black",family:"semantic",labelKey:"color.black",light:"#0d0d0f",dark:"#3a3a3c",onLight:wt,onDark:wt},{id:"white",family:"semantic",labelKey:"color.white",light:"#fbfbfd",dark:"#f4f4f6",onLight:Ye,onDark:Ye},{id:"gray",family:"semantic",labelKey:"color.gray",light:"#717881",dark:"#c3cbd5",onLight:wt,onDark:Ye},{id:"violet",family:"semantic",labelKey:"color.violet",light:"#873aa6",dark:"#c17fde",onLight:wt,onDark:Ye},{id:"cyan",family:"semantic",labelKey:"color.cyan",light:"#008e9b",dark:"#68dfed",onLight:Ye,onDark:Ye},{id:"magenta",family:"semantic",labelKey:"color.magenta",light:"#b02184",dark:"#ec7bc0",onLight:wt,onDark:Ye},{id:"indigo",family:"semantic",labelKey:"color.indigo",light:"#5140b4",dark:"#9b97f7",onLight:wt,onDark:Ye},{id:"muted-green",family:"muted",labelKey:"color.mutedGreen",light:"#325c4c",dark:"#99ccaa",onLight:wt,onDark:Ye},{id:"muted-red",family:"muted",labelKey:"color.mutedRed",light:"#9f5c54",dark:"#e4a197",onLight:wt,onDark:Ye},{id:"muted-gold",family:"muted",labelKey:"color.mutedGold",light:"#918349",dark:"#ddce93",onLight:Ye,onDark:Ye},{id:"muted-blue",family:"muted",labelKey:"color.mutedBlue",light:"#5a7ea3",dark:"#84acd6",onLight:Ye,onDark:Ye},{id:"muted-violet",family:"muted",labelKey:"color.mutedViolet",light:"#826299",dark:"#c7aade",onLight:wt,onDark:Ye},{id:"primary-blue",family:"accent",labelKey:"color.primaryBlue",light:"#2a66db",dark:"#90b7ff",onLight:wt,onDark:Ye},{id:"teal",family:"accent",labelKey:"color.teal",light:"#007066",dark:"#5dcdbf",onLight:wt,onDark:Ye},{id:"gold",family:"accent",labelKey:"color.gold",light:"#866200",dark:"#d8b262",onLight:wt,onDark:Ye},{id:"rose",family:"accent",labelKey:"color.rose",light:"#861a50",dark:"#dd7aa1",onLight:wt,onDark:Ye},{id:"maroon",family:"categorical",labelKey:"color.maroon",light:"#75061c",dark:"#e66d71",onLight:wt,onDark:Ye},{id:"coral",family:"categorical",labelKey:"color.coral",light:"#d6673f",dark:"#ffad90",onLight:Ye,onDark:Ye},{id:"sand",family:"categorical",labelKey:"color.sand",light:"#a8885e",dark:"#f2d6b1",onLight:Ye,onDark:Ye},{id:"olive",family:"categorical",labelKey:"color.olive",light:"#636d11",dark:"#b0be60",onLight:wt,onDark:Ye},{id:"lime",family:"categorical",labelKey:"color.lime",light:"#5b9a25",dark:"#a8eb7a",onLight:Ye,onDark:Ye},{id:"forest",family:"categorical",labelKey:"color.forest",light:"#215e29",dark:"#6caa71",onLight:wt,onDark:Ye},{id:"mint",family:"categorical",labelKey:"color.mint",light:"#00856d",dark:"#a4f0dc",onLight:wt,onDark:Ye},{id:"sky",family:"categorical",labelKey:"color.sky",light:"#3397c7",dark:"#aae0ff",onLight:Ye,onDark:Ye},{id:"navy",family:"categorical",labelKey:"color.navy",light:"#223f94",dark:"#6f92e5",onLight:wt,onDark:Ye},{id:"plum",family:"categorical",labelKey:"color.plum",light:"#a552a3",dark:"#f1a6ee",onLight:wt,onDark:Ye},{id:"slate",family:"categorical",labelKey:"color.slate",light:"#50627a",dark:"#aab9cc",onLight:wt,onDark:Ye}],Cg=["semantic","muted","accent","categorical"];var l1=new Map(nc.map(n=>[n.id,n])),Pg={semantic:"Semantic",muted:"Muted",accent:"Accent & brand",categorical:"Categorical"},Ig=new Map(nc.map(n=>[n.id,n.labelKey.replace(/^color\./,"").replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())])),Rg=/^[a-z][a-z0-9-]{0,47}$/,Ng={version:4,families:Cg.map(n=>({id:n,name:Pg[n]})),colors:nc.map(n=>({id:n.id,familyId:n.family,name:Ig.get(n.id)??n.id,light:n.light,dark:n.dark})),archived:[]},Lg=n=>({version:4,families:n.families.map(e=>({...e})),colors:n.colors.map(e=>({...e})),archived:n.archived.map(e=>({...e}))});var c1=Lg(Ng);var tc="palette:";function kg(n){return n.startsWith(tc)&&Rg.test(n.slice(tc.length))}function Yd(n){return kg(n)?n.slice(tc.length):void 0}function es(n){let e=Yd(n);return e?`var(--color-${e})`:n}function co(n){let e=Yd(n);return e?`var(--color-${e}-on)`:"var(--title-color)"}var Kd=["eth","hoengg","uzh"],jd=["students","internalStudents","internal","external","all"],Jd=n=>[...n].sort((e,t)=>jd.indexOf(e.group)-jd.indexOf(t.group)),Dg={students:["students"],internal:["internal"],external:["external"],internalStudents:["internal","students"],all:["students","internal","external"]},Qd=(n,e)=>n.find(t=>t.group===e)??n.find(t=>Dg[t.group].includes(e)),Og="idapps.ethz.ch",d1=`https://${Og}/cookpit-pub-services/v1`;var zg=/^\d{4}-\d{2}-\d{2}$/,eh=n=>typeof n=="string"&&zg.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),th=n=>new Date(`${n}T00:00:00Z`),Fg=n=>n.toISOString().slice(0,10),ts=(n,e)=>{let t=th(n);return t.setUTCDate(t.getUTCDate()+e),Fg(t)},Ug=n=>th(n).getUTCDay()||7,Ci=n=>ts(n,1-Ug(n));function uo(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var nh=(n=new Date)=>n.getHours()*60+n.getMinutes()>=870?"dinner":"lunch",ih=n=>n.toLowerCase().startsWith("de")?"de":"en";var Bg=n=>typeof n=="string"&&/^universitat-zurich(,[a-z0-9-]+)*\/[a-z0-9-]+$/.test(n);var rh=n=>n.vegetarian||n.vegan||n.glutenFree||n.lactoseFree;function Hg(n,e){return!(e.vegan&&n.diet!=="vegan"||e.vegetarian&&!n.diet||e.glutenFree&&n.gluten!==!1||e.lactoseFree&&n.lactose!==!1)}var er=(n,e,t)=>n.days.find(i=>i.date===e)?.services.find(i=>i.service===t),ho=(n,e,t,i)=>(er(n,e,t)?.dishes??[]).filter(r=>Hg(r,i));function ic(n,e,t){let i=n.days.find(s=>s.date===e);if(!i?.hours.length)return null;let r=er(n,e,t)?.from??"";return i.hours.find(s=>r&&s.from<=r&&r<s.to)??i.hours[0]}function sh(n,e,t=new Date){if(e!==uo(t))return null;let i=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`;return n.from<=i&&i<n.to?"open":"closed"}var rc=n=>`place:${n}`;function oh(n){let e=/^place:(eth|uzh):(.+)$/.exec(n??"");if(!e)return null;let t=e[1],i=e[2];return(t==="eth"?!/^\d+$/.test(i):!Bg(i))?null:{source:t,key:i,id:`${t}:${i}`}}function ah(n){return`CHF ${n.toFixed(2)}`}var D,Qe;function lh(n){Qe=n,D=n.React}var ns={"manifest.name":"Poly","manifest.description":"ETH and UZH in Valley: the eLink shuttle between ETH Zentrum and H\xF6nggerberg, today's menu plan of ETH Zentrum, ETH H\xF6nggerberg and the UZH outlets, a campus map of ETH's buildings with their floors and rooms, in 2D and in the Stadt Z\xFCrich 3D model, ETH News with the Zukunftsblog, Globe and the media releases, read in Valley, and your subjects' Polybox links.","menu.title":"Menu plan",refresh:"Refresh",openWebsite:"Open website","day.previous":"Previous day","day.next":"Next day","day.backToToday":"Back to today","day.today":"Today","week.previous":"Previous week","week.next":"Next week","week.label":"Week","service.label":"Meal","service.lunch":"Lunch","service.dinner":"Dinner",loading:"Loading menus\u2026","empty.lunch":"No place serves lunch on this day.","empty.dinner":"No place serves dinner on this day.","empty.location":"Nothing on the menu for this meal.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarian","climate.LOW":"Low climate impact","climate.MEDIUM":"Medium climate impact","climate.HIGH":"High climate impact","price.students":"Students","price.internal":"Staff","price.external":"Guests",allergens:"Allergens","allergens.none":"No allergens declared","credit.eth":"Menus from ETH Zurich Gastronomy.","credit.uzh":"Menus from the ZFV on food2050.","error.networkError":"The menu service could not be reached.","error.serviceError":"The menu service answered with an error.","error.formatError":"The menu service sent data Poly could not read.","error.notFound":"The menu service has no such page.","error.invalidInput":"Poly asked for a menu in a way the service does not know.","error.unavailable":"Poly is reloading.",openPage:"Open the menu plan page","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH outlets","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Open now \xB7 {hours}","hours.closed":"Closed \xB7 {hours}","hours.open":"Open {hours}","service.time.lunch":"Lunch {hours}","service.time.dinner":"Dinner {hours}",filter:"Filter","filter.vegetarian":"Vegetarian","filter.vegan":"Vegan","filter.glutenFree":"Gluten-free","filter.clear":"Clear filters","empty.filtered":"No menu matches the filters.","loading.uzh":"Reading the UZH outlets\u2026",openInNewTab:"Open in new tab","settings.onlyVegetarian.title":"Only vegetarian","settings.onlyVegetarian.description":"Show only vegetarian and vegan menus, in the place list counts and on the page.","settings.onlyVegan.title":"Only vegan","settings.onlyVegan.description":"Show only vegan menus.","settings.onlyGlutenFree.title":"Only gluten-free","settings.onlyGlutenFree.description":"Show only menus whose declared allergens contain no gluten cereal. A menu without declared allergens is not shown.","settings.campus.title":"Campus","settings.campus.description":"The tag chosen in the menu plan: Favorites or a campus.","settings.day.title":"Day","settings.day.description":"The day and meal the menu plan shows; a past day falls back to today.","price.internalStudents":"Staff & students","price.all":"All visitors","filter.lactoseFree":"Lactose-free","settings.onlyLactoseFree.title":"Only lactose-free","settings.onlyLactoseFree.description":"Show only menus whose declared allergens contain no milk. A menu without declared allergens is not shown.",prices:"Prices","prices.all":"All prices","settings.prices.title":"Prices shown","settings.prices.description":"Which prices the menu cards show: all of them from students to guests, or one group's.","campus.favorites":"Favorites","campus.favorites.title":"Favorite places","favorite.add":"Add {name} to favorites","favorite.remove":"Remove {name} from favorites","empty.favorites":"None of your favorite places has a menu for this meal on this day.","credit.both":"Menus from ETH Zurich Gastronomy and from the ZFV on food2050.","settings.favorites.title":"Favorite places","settings.favorites.description":"The places starred in the menu plan.","mode.label":"Sidebar tabs","settings.mode.title":"Sidebar tab","settings.mode.description":"The sidebar tab shown: the eLink shuttle, the menu plan, the campus map, ETH News or Polybox.","settings.tabOrder.title":"Sidebar tab order","settings.tabOrder.description":"The order of the sidebar's feature tabs, changed by dragging a tab or with Option and an arrow key.","city.display.color":"Colour","city.display.surfaces":"Surfaces","city.display.height":"Height","city.display.ground":"Ground","city.display.groundHint":"An approximate ground surface derived from the base heights of the buildings","city.building.title":"Building","city.building.close":"Close","city.building.egid":"EGID","city.building.height":"Height","city.building.ground":"Ground","city.building.roof":"Roof top","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"a.s.l.","city.model.title":"Model","city.model.date":"Data as of","city.model.buildings":"Buildings","city.model.triangles":"Triangles","city.model.tiles":"Tiles loaded","city.model.groundNote":"Buildings: Stadt Z\xFCrich 3D city model, LoD2 roof model, open government data. The ground is approximated from the buildings' base heights.","city.model.source":"Source","city.model.loading":"Loading the city model\u2026","city.model.errorTitle":"The city model could not be read","city.model.errorText":"Poly could not load the files of its 3D city model. Update Poly or install it again.","city.model.missingTitle":"No city model installed","city.model.missingText":"This copy of Poly was built without its city model. Add it to the package's runtime/assets/model/ with the update script in the plugin's folder, then build again:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"The 3D view could not start","city.view.loadingTiles":"Loading {{count}} tiles\u2026","city.settings.model":"City model","city.settings.modelMissing":"Not installed. The model belongs in {{folder}}.","city.settings.colorMode":"Colour","city.settings.showGround":"Ground","city.settings.camera":"Camera","city.footer.building":"Building","city.footer.tiles":"Tiles","city.footer.buildings":"Buildings","city.footer.date":"Data as of","settings.building.title":"Building","settings.building.description":"The ETH building selected on the campus map, by its code.","settings.level.title":"Floor","settings.level.description":"The floor of the selected building whose rooms the campus map shows.","settings.campusView.title":"Campus view","settings.campusView.description":"What the campus page shows: the 2D campus map or the 3D city model.","campusMap.title":"Campus map","campusMap.openPage":"Open the campus map page","campusMap.command.open":"Open the campus map","campusMap.map.attribution":"Map \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap contributors \xB7 Buildings \xA9 ETH Z\xFCrich","campusMap.map.loading":"Loading the map\u2026","campusMap.map.failed":"The map could not start","campusMap.floors.label":"Floors of {{code}}","campusMap.floors.show":"Show floor {{floor}}","campusMap.floors.loading":"Loading the rooms\u2026","campusMap.floors.failed":"The rooms could not be read","campusMap.floors.one":"1 floor with rooms","campusMap.floors.other":"{{count}} floors with rooms","campusMap.floors.none":"No floor plans published","campusMap.floors.reading":"Reading the floors\u2026","campusMap.room.close":"Close","campusMap.room.type":"Room type","campusMap.room.use":"Use","campusMap.legend.label":"Room types","campusMap.room.kind.teaching":"Teaching","campusMap.room.kind.lab":"Lab","campusMap.room.kind.office":"Office","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilets","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Other","campusMap.view.label":"View","campusMap.view.map":"Map","campusMap.view.3d":"3D","campusMap.view.outside":"This building is outside the Stadt Z\xFCrich 3D model","campusMap.outlines.failed":"The building outlines could not be read","campusMap.building.link":"ETH building page","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Other sites","campusMap.search.placeholder":"Search buildings, rooms, streets","campusMap.search.clear":"Clear the search","campusMap.search.none":"No building matches.","campusMap.credit":"Buildings, floors and rooms from ETH Z\xFCrich's campus map. Base map: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap contributors.","campusMap.map.zoomIn":"Zoom in","campusMap.map.zoomOut":"Zoom out","elink.title":"eLink","elink.openPage":"Open the eLink timetable","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 run","elink.runs.other":"{count} runs","elink.firstLast":"First {first} \xB7 Last {last}","elink.in":"in {minutes} min","elink.delay":"{minutes} min late","elink.ended":"No more departures today.","elink.weekend":"No eLink on weekends.","elink.noService":"No eLink runs on this day.","elink.showDay":"Show {day}","elink.loading":"Loading the eLink timetable\u2026","elink.credit":"Timetable data by transport.opendata.ch","elink.error.networkError":"transport.opendata.ch could not be reached.","elink.error.serviceError":"transport.opendata.ch answered with an error.","elink.error.formatError":"transport.opendata.ch sent data Poly could not read.","elink.error.invalidInput":"Poly asked transport.opendata.ch for a day it does not know.","elink.settings.date.title":"eLink day","elink.settings.date.description":"The day the eLink tab shows; a past day falls back to today.","campusMap.group.rooms":"Rooms","campusMap.rooms.searching":"Searching rooms\u2026","campusMap.rooms.failed":"The rooms could not be searched","campusMap.rooms.none":"No room matches.","campusMap.view.show3d":"Show in 3D","campusMap.view.show2d":"Show the 2D map","elink.showTimetable":"Show timetable","elink.arrival":"Arrives at {stop} at {time}","campusMap.building.clear":"Clear the selection","campusMap.properties.tab":"3D city","campusMap.properties.only3d":"The 3D city facts show here while the campus page shows 3D.","campusMap.properties.buildingTab":"Building","campusMap.properties.building":"Building","campusMap.properties.room":"Room","campusMap.properties.code":"Code","campusMap.properties.address":"Address","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Floors","campusMap.properties.floor":"Floor","campusMap.properties.kind":"Kind","campusMap.properties.none":"Select a building on the campus map or in the sidebar to see it here.","campusMap.group.zurich":"Z\xFCrich","news.title":"ETH News","news.openPage":"Open ETH News","news.feeds":"News feeds","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Globe magazine","news.feed.media":"Media releases","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Media","news.recent.one":"1 article this week","news.recent.other":"{count} articles this week","news.search":"Search articles","news.search.clear":"Clear search","news.loading":"Loading ETH News\u2026","news.empty":"This feed has no articles.","news.empty.search":"No article matches the search.","news.credit":"News by ETH Zurich, from its RSS feeds on ethz.ch","news.yesterday":"Yesterday","news.openWebsite":"Open on ethz.ch","news.video":"Video","news.by":"by {author}","news.source":"Source: ETH Zurich,","news.error.networkError":"ethz.ch could not be reached.","news.error.serviceError":"ethz.ch answered with an error.","news.error.notFound":"ethz.ch no longer has this article.","news.error.formatError":"ethz.ch sent a page Poly could not read.","news.error.invalidInput":"Poly asked ethz.ch for an address it does not know.","news.error.unavailable":"Poly is being reloaded; try again in a moment.","news.settings.feed.title":"News feed","news.settings.feed.description":"The ETH News feed the News tab shows: every article, the Zukunftsblog, Globe, the media releases or the Saved folder.","news.tags.clear":"Clear","news.tags.none":"These articles have no tags.","news.tags.add":"Select {tag}","news.tags.remove":"Deselect {tag}","news.empty.tags":"No article has the chosen tags.","news.settings.tags.title":"News tags","news.settings.tags.description":"The tags the News tab's article list is filtered by; an article with any of them is shown.","news.tags.show":"Show tags","news.tags.hide":"Show articles","news.tags.search":"Search tags","news.tags.count":"{count} tags","news.tags.articles.one":"1 article","news.tags.articles.other":"{count} articles","news.tags.noMatch":"No tag matches the search.","news.tag.saved":"Saved","news.saved.title":"Saved","news.saved.add":"Save","news.saved.remove":"Remove from Saved","news.saved.removeOne":"Remove \u201C{title}\u201D from Saved","news.saved.empty":"No saved articles yet. An article is saved with the bookmark on its page or from its right-click menu.","news.settings.saved.title":"Saved articles","news.settings.saved.description":"The ETH News articles in the Saved folder, newest saved first, with what their rows need without the network.","polybox.title":"Polybox","polybox.openPage":"Open the Polybox overview","polybox.empty":"No subjects yet. Paste a Polybox share link into the field above; it is named after the share.","polybox.untitled":"Untitled","polybox.invalid":"Not a Polybox share link (https://polybox.ethz.ch/index.php/s/\u2026)","polybox.settings.links.title":"Polybox links","polybox.settings.links.description":"The subjects and their Polybox share links, added in the Polybox tab.","polybox.paste":"Paste a Polybox link","polybox.clear":"Clear","polybox.openInNewTab":"Open in new tab","polybox.openWebsite":"Open in Polybox","polybox.rename":"Rename","polybox.removeSubject":"Remove","polybox.folderEmpty":"This folder is empty.","polybox.openFolder":"Open {name}","polybox.openFile":"Open {name} in Valley","polybox.path":"Folder","polybox.error.networkError":"Polybox could not be read. Check the connection; right after a Valley update, restart Valley.","polybox.error.serviceError":"Polybox answered with an error.","polybox.error.notFound":"This share or folder no longer exists.","polybox.error.polyboxLocked":"This share needs a password or is no longer shared.","polybox.error.formatError":"Polybox sent a folder Poly could not read.","polybox.error.invalidInput":"This is not a Polybox share link.","polybox.error.unavailable":"Poly is reloading.","polybox.error.tooLarge":"This file is too large to download.","polybox.opening":"Opening {name}\u2026","polybox.menu.system":"Open with default app","polybox.menu.valley":"Open in Valley","polybox.settings.view.title":"Polybox view","polybox.settings.view.description":"How a Polybox folder shows its entries: as a list or as a grid.","polybox.view.grid":"Show as grid","polybox.view.list":"Show as list","polybox.password.needed":"This share is protected by a password. Enter it once; Valley keeps it encrypted for this share.","polybox.password.stale":"The saved password no longer opens this share. Enter the current one.","polybox.password.rejected":"Polybox did not accept this password.","polybox.password.placeholder":"Password","polybox.password.unlock":"Unlock","polybox.error.polyboxPassword":"This share needs a password.","polybox.error.polyboxWrongPassword":"The saved password no longer opens this share.","polybox.copyLink":"Copy link","polybox.copied":"Link copied","polybox.copyFailed":"The link could not be copied.","polybox.column.name":"Name","polybox.column.created":"Date created","polybox.column.modified":"Date modified","polybox.column.size":"Size","polybox.sort.label":"Sort","polybox.sort.asc":"Sort by {column}, ascending","polybox.sort.desc":"Sort by {column}, descending","polybox.settings.sort.title":"Polybox sort","polybox.settings.sort.description":"Which column a Polybox folder is sorted by, ascending or descending; folders stay first."};function ch(n,e){return(ns[n]??n).replace(/\{\{([^}]+)\}\}/g,(i,r)=>String(e?.[r]??""))}var sc=ch;function uh(n){sc=(e,t)=>{let i=n.ui.t(e,t);return i===e?ch(e,t):i}}function tt(n,e){return sc(`city.${n}`,e)}function Ne(n,e){return sc(`campusMap.${n}`,e)}var dh=[{code:"AGS",street:"Streulistrasse 74 a",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AGS",campus:"other",center:[8.564558,47.36295]},{code:"AMA",street:"Auf der Mauer 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AMA",campus:"zentrum",center:[8.544891,47.378357]},{code:"AND",street:"Andreasstrasse 15",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AND",campus:"other",center:[8.548765,47.413209]},{code:"AUA",street:"Austrasse 54",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUA",campus:"other",center:[8.519441,47.364088]},{code:"AUB",street:"Austrasse 56",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUB",campus:"other",center:[8.51929,47.363856]},{code:"AWA",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWA",campus:"other",center:[9.800295,46.581909]},{code:"AWC",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWC",campus:"other",center:[9.800547,46.581267]},{code:"AWD",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWD",campus:"other",center:[9.799927,46.581795]},{code:"AWS",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWS",campus:"other",center:[9.800964,46.581634]},{code:"BAA",street:"Lengghalde 5",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BAA",campus:"other",center:[8.574235,47.352412]},{code:"BEA",street:"Im Ergel 1 (Partnerhaus)",zip:"5404",city:"Baden",canton:"AG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEA",campus:"other",center:[8.278762,47.455668]},{code:"BEF",street:"Effingerstr. 6a",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEF",campus:"other",center:[7.43645,46.946003]},{code:"BGU",street:"Gutenbergstrasse 31",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BGU",campus:"other",center:[7.434804,46.943831]},{code:"BHA",street:"Hirschengraben 3",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BHA",campus:"other",center:[7.438359,46.946886]},{code:"BIR",street:"Kasernenstrasse",zip:"8903",city:"Birmensdorf ZH",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BIR",campus:"other",center:[8.430662,47.358831]},{code:"BOT",street:"Zollikerstrasse 107",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BOT",campus:"other",center:[8.56009,47.3589]},{code:"BRA",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRA",campus:"other",center:[8.494936,46.497495]},{code:"BRB",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRB",campus:"other",center:[8.49545,46.496919]},{code:"BSS",street:"Klingelbergstrasse 48",zip:"4056",city:"Basel",canton:"BS",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BSS",campus:"other",center:[7.580967,47.562894]},{code:"BUC",street:"Stationsstrasse 1",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BUC",campus:"other",center:[8.438246,47.452837]},{code:"CAB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CAB",campus:"zentrum",center:[8.54893,47.378346]},{code:"CHN",street:"Universit\xE4tstrasse 16",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CHN",campus:"zentrum",center:[8.548577,47.379266]},{code:"CLA",street:"Tannenstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLA",campus:"zentrum",center:[8.546735,47.377744]},{code:"CLD",street:"Clausiusstrasse 37",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLD",campus:"zentrum",center:[8.545901,47.378759]},{code:"CLE",street:"Clausiusstrasse 32",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLE",campus:"zentrum",center:[8.546581,47.378801]},{code:"CLF",street:"Clausiusstrasse 34",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLF",campus:"zentrum",center:[8.546526,47.378973]},{code:"CLG",street:"Clausiusstrasse 36",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLG",campus:"zentrum",center:[8.546486,47.379051]},{code:"CLI",street:"Clausiusstrasse 72",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLI",campus:"zentrum",center:[8.544858,47.381803]},{code:"CLP",street:"Clausiusstrasse 45",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLP",campus:"other",center:[8.545641,47.379597]},{code:"CLT",street:"Clausiusstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLT",campus:"zentrum",center:[8.546114,47.378782]},{code:"CLX",street:"Clausiusstrasse 35",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLX",campus:"zentrum",center:[8.546059,47.378901]},{code:"CNB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNB",campus:"zentrum",center:[8.549656,47.37822]},{code:"CNS",street:"Sp\xF6ndlistrasse",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNS",campus:"other",center:[8.549561,47.378535]},{code:"DEB",street:"Kriesbachstrasse 42",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEB",campus:"other",center:[8.614968,47.40313]},{code:"DEC",street:"\xDCberlandstrasse 129",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEC",campus:"other",center:[8.612018,47.403841]},{code:"DFA",street:"Wangenstrasse 72",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFA",campus:"other",center:[8.631796,47.405875]},{code:"DFB",street:"Wangenstrasse 64",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFB",campus:"other",center:[8.629443,47.404471]},{code:"DUA",street:"Ueberlandstrasse 17",zip:"8953",city:"Dietikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DUA",campus:"other",center:[8.406183,47.408228]},{code:"EBW",street:"Breitweg 4",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EBW",campus:"other",center:[8.580077,47.369226]},{code:"EEA",street:"Embraport 3",zip:"8424",city:"Embrach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EEA",campus:"other",center:[8.591135,47.517744]},{code:"EHA",street:"Eschikon 35",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHA",campus:"other",center:[8.680582,47.4486]},{code:"EHB",street:"Eschikon 27",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHB",campus:"other",center:[8.681123,47.448075]},{code:"EHC",street:"Eschikon 29",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHC",campus:"other",center:[8.680477,47.447699]},{code:"EHD",street:"Eschikon 37",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHD",campus:"other",center:[8.679805,47.448099]},{code:"EHG",street:"Eschikon 43",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHG",campus:"other",center:[8.679018,47.448675]},{code:"ELA",street:"Luegetenstrasse 11",zip:"8840",city:"Einsiedeln",canton:"SZ",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ELA",campus:"other",center:[8.747629,47.125113]},{code:"ERA",street:"Rapier-Platz Kanzel 1",zip:"4952",city:"Eriswil",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ERA",campus:"other",center:[7.873167,47.070999]},{code:"ETA",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETA",campus:"zentrum",center:[8.552969,47.377838]},{code:"ETF",street:"Sternwartstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETF",campus:"zentrum",center:[8.552291,47.377401]},{code:"ETL",street:"Physikstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETL",campus:"zentrum",center:[8.552492,47.378517]},{code:"ETZ",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETZ",campus:"zentrum",center:[8.552758,47.377657]},{code:"FDA",street:"Fr\xFCeb\xFCel",zip:"8318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FDA",campus:"other",center:[8.537501,47.113629]},{code:"FGH",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGH",campus:"other",center:[8.682228,47.449217]},{code:"FGP",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGP",campus:"other",center:[8.681846,47.449879]},{code:"FGS",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGS",campus:"other",center:[8.681435,47.449489]},{code:"FHE",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FHE",campus:"other",center:[8.536285,47.112711]},{code:"FMG",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FMG",campus:"other",center:[8.682371,47.449489]},{code:"FRB",street:"Freudenbergstrasse 112",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRB",campus:"other",center:[8.555466,47.38549]},{code:"FRL",street:"Eschikon 32.2",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRL",campus:"other",center:[8.683034,47.449169]},{code:"FRM",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRM",campus:"other",center:[8.537,47.113446]},{code:"FRN",street:"Freudenbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRN",campus:"other",center:[8.555417,47.385]},{code:"FSA",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSA",campus:"other",center:[8.535987,47.113121]},{code:"FSS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSS",campus:"other",center:[8.536474,47.11358]},{code:"FST",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FST",campus:"other",center:[8.68292,47.44996]},{code:"FTL",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FTL",campus:"other",center:[8.682639,47.449909]},{code:"FUA",street:"Furtbachstrasse 22",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FUA",campus:"other",center:[8.432826,47.449463]},{code:"FVG",street:"Fr\xFCeb\xFCel 4",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVG",campus:"other",center:[8.536165,47.112334]},{code:"FVS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVS",campus:"other",center:[8.536572,47.112973]},{code:"FWM",street:"Fr\xFCeb\xFCel 3",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWM",campus:"other",center:[8.536719,47.112487]},{code:"FWN",street:"Fr\xFCeb\xFCel 1",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWN",campus:"other",center:[8.53711,47.112681]},{code:"FWO",street:"Fr\xFCeb\xFCel 2",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWO",campus:"other",center:[8.537255,47.112404]},{code:"GEP",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GEP",campus:"zentrum",center:[8.546412,47.376638]},{code:"GLC",street:"Gloriastrasse 37/ 39",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLC",campus:"zentrum",center:[8.553365,47.377698]},{code:"GLO",street:"Gloriastrasse 82",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLO",campus:"other",center:[8.558339,47.375201]},{code:"GMA",street:"Adlisbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GMA",campus:"other",center:[8.588216,47.371575]},{code:"HAA",street:"H\xE4ldeliweg 15/17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAA",campus:"zentrum",center:[8.554284,47.377102]},{code:"HAC",street:"H\xE4ldeliweg 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAC",campus:"zentrum",center:[8.554498,47.377278]},{code:"HAD",street:"Haldenbachstrasse 44",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAD",campus:"zentrum",center:[8.550852,47.381008]},{code:"HAW",street:"Haldeneggsteig 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAW",campus:"zentrum",center:[8.54462,47.380745]},{code:"HCA",street:"Hochstrasse 56",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCA",campus:"zentrum",center:[8.554793,47.378652]},{code:"HCB",street:"Hochstrasse 58",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCB",campus:"zentrum",center:[8.555052,47.37849]},{code:"HCI",street:"Vladimir-Prelog-Weg 1-5 / 10",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCI",campus:"hoengg",center:[8.508295,47.406936]},{code:"HCP",street:"Leopold-Ruzicka-Weg 4",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCP",campus:"hoengg",center:[8.508242,47.406012]},{code:"HDB",street:"H\xF6nggerbergring 37",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HDB",campus:"hoengg",center:[8.508765,47.410919]},{code:"HEA",street:"Heinrichstrasse 237",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEA",campus:"other",center:[8.522586,47.388643]},{code:"HEZ",street:"Schafmattstrasse 23",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEZ",campus:"hoengg",center:[8.511873,47.410632]},{code:"HG",street:"R\xE4mistrasse 101",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HG",campus:"zentrum",center:[8.547737,47.376369]},{code:"HGP",street:"H\xF6nggerbergring 47",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HGP",campus:"hoengg",center:[8.509611,47.410434]},{code:"HIA",street:"H\xF6nggerbergring 26",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIA",campus:"hoengg",center:[8.505659,47.410106]},{code:"HIB",street:"Stefano-Franscini-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIB",campus:"hoengg",center:[8.50588,47.408789]},{code:"HIF",street:"Laura-Hezner-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIF",campus:"hoengg",center:[8.506263,47.409783]},{code:"HIG",street:"H\xF6nggerbergring 20",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIG",campus:"other",center:[8.50516,47.408977]},{code:"HIL",street:"Stefano-Franscini-Platz 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIL",campus:"hoengg",center:[8.506855,47.408691]},{code:"HIN",street:"Othmar-Amman-Weg 11",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIN",campus:"hoengg",center:[8.505418,47.409054]},{code:"HIT",street:"Wolfgang-Pauli-Strasse 27",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIT",campus:"hoengg",center:[8.508131,47.41034]},{code:"HKK",street:"H\xF6nggerbergring 39",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HKK",campus:"hoengg",center:[8.50908,47.410855]},{code:"HOA",street:"Hottingerstrasse 10",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HOA",campus:"other",center:[8.550108,47.370104]},{code:"HPF",street:"Otto-Stern-Weg 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPF",campus:"hoengg",center:[8.509324,47.40971]},{code:"HPG",street:"John-von-Neumann-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPG",campus:"other",center:[8.50925,47.408515]},{code:"HPH",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPH",campus:"hoengg",center:[8.509252,47.407606]},{code:"HPI",street:"Wolfgang-Pauli-Strasse 14",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPI",campus:"hoengg",center:[8.507994,47.408381]},{code:"HPK",street:"Otto-Stern-Weg 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPK",campus:"hoengg",center:[8.510944,47.409199]},{code:"HPL",street:"Otto-Stern-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPL",campus:"hoengg",center:[8.511481,47.408993]},{code:"HPM",street:"Otto-Stern-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPM",campus:"hoengg",center:[8.51031,47.409529]},{code:"HPP",street:"H\xF6nggerbergring 64",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPP",campus:"hoengg",center:[8.510958,47.407812]},{code:"HPR",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPR",campus:"hoengg",center:[8.509779,47.407833]},{code:"HPS",street:"Robert-Gnehm-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPS",campus:"hoengg",center:[8.511216,47.406826]},{code:"HPT",street:"Auguste-Piccard-Hof 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPT",campus:"hoengg",center:[8.50866,47.40879]},{code:"HPV",street:"Robert-Gnehm-Weg 15",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPV",campus:"hoengg",center:[8.510216,47.407307]},{code:"HPW",street:"H\xF6nggerbergring 62",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPW",campus:"hoengg",center:[8.511248,47.408548]},{code:"HPY",street:"H\xF6nggerbergring 62b",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPY",campus:"hoengg",center:[8.511166,47.408382]},{code:"HPZ",street:"John-von-Neumann-Weg 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPZ",campus:"hoengg",center:[8.510196,47.408303]},{code:"HRG",street:"Hirschengraben 62",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HRG",campus:"zentrum",center:[8.545944,47.375119]},{code:"HSA",street:"Z\xFCrichbergstrasse 196",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HSA",campus:"other",center:[8.574021,47.383471]},{code:"HWA",street:"Paul-Feyerabend-Hof 1",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWA",campus:"hoengg",center:[8.505263,47.407062]},{code:"HWB",street:"Paul-Feyerabend-Hof 5",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWB",campus:"hoengg",center:[8.506032,47.40685]},{code:"HWC",street:"Paul-Feyerabend-Hof 3",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWC",campus:"hoengg",center:[8.505782,47.407249]},{code:"HWW",street:"Peter-Debye-Weg 13/15/17",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWW",campus:"hoengg",center:[8.504474,47.407489]},{code:"HXE",street:"Wolfgang-Pauli-Strasse 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HXE",campus:"hoengg",center:[8.506307,47.407468]},{code:"HZA",street:"Schauenbergstrasse 94",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZA",campus:"hoengg",center:[8.505177,47.4121]},{code:"HZB",street:"Schauenbergstrasse 92",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZB",campus:"hoengg",center:[8.50549,47.412218]},{code:"HZC",street:"Schauenbergstrasse 90",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZC",campus:"hoengg",center:[8.505645,47.412415]},{code:"HZD",street:"Schauenbergstrasse 96",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZD",campus:"hoengg",center:[8.505702,47.411686]},{code:"IFW",street:"Haldeneggsteig 4",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=IFW",campus:"zentrum",center:[8.544592,47.380252]},{code:"KO2",street:"Karl Schmid-Strasse 4",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KO2",campus:"other",center:[8.548079,47.375049]},{code:"KOL",street:"R\xE4mistrasse 71",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KOL",campus:"other",center:[8.548613,47.374526]},{code:"KUB",street:"K\xFCrbergstrasse 20",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KUB",campus:"other",center:[8.507093,47.399458]},{code:"LCA",street:"Via Trevano 131",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCA",campus:"other",center:[8.959782,46.02485]},{code:"LCP",street:"Via Chiosso 7a",zip:"6948",city:"Porza",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCP",campus:"other",center:[8.963449,46.027021]},{code:"LEE",street:"Leonhardstrasse 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEE",campus:"zentrum",center:[8.546148,47.378121]},{code:"LEH",street:"Leonhardshalde 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEH",campus:"zentrum",center:[8.545592,47.376736]},{code:"LEO",street:"Leonhardstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEO",campus:"zentrum",center:[8.546534,47.377552]},{code:"LFG",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFG",campus:"zentrum",center:[8.548705,47.377824]},{code:"LFH",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFH",campus:"zentrum",center:[8.549125,47.377872]},{code:"LFO",street:"Schmelzbergstrasse 9",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFO",campus:"zentrum",center:[8.550172,47.377801]},{code:"LFV",street:"Schmelzbergstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFV",campus:"zentrum",center:[8.549823,47.37772]},{code:"LFW",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFW",campus:"zentrum",center:[8.549048,47.377497]},{code:"LGA",street:"Lengghalde 2",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LGA",campus:"other",center:[8.573685,47.351348]},{code:"LHT",street:"Lerchenhalde 37",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHT",campus:"other",center:[8.509426,47.413229]},{code:"LHV",street:"Lerchenhalde 39",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHV",campus:"other",center:[8.509283,47.413385]},{code:"LHX",street:"Lerchenhalde 41",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHX",campus:"other",center:[8.509199,47.413555]},{code:"LHZ",street:"Lerchenhalde 43",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHZ",campus:"other",center:[8.509049,47.41367]},{code:"LRA",street:"Lerchenrain 1",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRA",campus:"other",center:[8.508515,47.413787]},{code:"LRG",street:"Lerchenrain 7",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRG",campus:"other",center:[8.50803,47.413942]},{code:"LRI",street:"Lerchenrain 9",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRI",campus:"other",center:[8.507888,47.414105]},{code:"LRL",street:"Lerchenrain 11",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRL",campus:"other",center:[8.50768,47.414174]},{code:"LRN",street:"Lerchenrain 13",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRN",campus:"other",center:[8.507528,47.414276]},{code:"LRO",street:"Lerchenrain bei 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRO",campus:"other",center:[8.506916,47.414388]},{code:"LRR",street:"Lerchenrain 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRR",campus:"other",center:[8.507127,47.414553]},{code:"LSH",street:"Limmerenfirn",zip:"8783",city:"Linthal",canton:"GL",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LSH",campus:"other",center:[8.992092,46.817011]},{code:"LUI",street:"Via Giuseppe Buffi 13",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LUI",campus:"other",center:[8.957668,46.01016]},{code:"M2R",street:"Moussonstrasse 2/4",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=M2R",campus:"other",center:[8.554328,47.375433]},{code:"ML",street:"Sonneggstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ML",campus:"zentrum",center:[8.547569,47.377744]},{code:"MM",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MM",campus:"zentrum",center:[8.546799,47.376105]},{code:"MVA",street:"Strada Collina",zip:"6612",city:"Ascona",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MVA",campus:"other",center:[8.762855,46.15857]},{code:"NEL",street:"Nelkenstrasse 11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NEL",campus:"zentrum",center:[8.546435,47.382079]},{code:"NID",street:"Niederdorfstr. 88",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NID",campus:"other",center:[8.544131,47.376163]},{code:"NMA",street:"Murzlenstrasse 80",zip:"8166",city:"Niederweningen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NMA",campus:"other",center:[8.367587,47.510676]},{code:"NO",street:"Sonneggstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NO",campus:"zentrum",center:[8.547062,47.378469]},{code:"NW",street:"Clausiusstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NW",campus:"zentrum",center:[8.546351,47.378457]},{code:"OAT",street:"Andreasstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OAT",campus:"other",center:[8.547248,47.413042]},{code:"OCT",street:"Binzm\xFChlestrasse 130",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OCT",campus:"other",center:[8.537076,47.413426]},{code:"ODA",street:"D\xF6rflistrasse 120",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ODA",campus:"other",center:[8.547325,47.411173]},{code:"ONA",street:"Neunbrunnenstrasse 50",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ONA",campus:"other",center:[8.539774,47.417441]},{code:"PFA",street:"Technopark-Strasse 1",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PFA",campus:"other",center:[8.515598,47.38984]},{code:"PLB",street:"Plattenstrasse 28",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PLB",campus:"zentrum",center:[8.55315,47.373692]},{code:"RDA",street:"Althardstrasse 257",zip:"8105",city:"Regensdorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RDA",campus:"other",center:[8.46102,47.44373]},{code:"RIA",street:"Rickenstrasse 18/ 20",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RIA",campus:"other",center:[8.539964,47.417874]},{code:"RSA",street:"S\xE4umerstrasse 4/ Postfach 9000",zip:"8803",city:"R\xFCschlikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RSA",campus:"other",center:[8.544512,47.3102]},{code:"RZ",street:"Clausiusstrasse 59",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RZ",campus:"zentrum",center:[8.545116,47.380301]},{code:"SEC",street:"Scheuchzerstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEC",campus:"zentrum",center:[8.545095,47.382667]},{code:"SEI",street:"Seilergraben 45/ 49",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEI",campus:"other",center:[8.545321,47.375224]},{code:"SEL",street:"Seilergraben 53/ 55",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEL",campus:"other",center:[8.545129,47.375482]},{code:"SEW",street:"Scheuchzerstrasse 68/70",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEW",campus:"other",center:[8.545392,47.38666]},{code:"SLA",street:"Schorenstrasse 16",zip:"8603",city:"Schwerzenbach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SLA",campus:"other",center:[8.655288,47.384651]},{code:"SOH",street:"Sonneggstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOH",campus:"zentrum",center:[8.546828,47.379161]},{code:"SOI",street:"Sonneggstrasse 28",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOI",campus:"zentrum",center:[8.546662,47.380056]},{code:"SOK",street:"Sonneggstrasse 23",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOK",campus:"zentrum",center:[8.546647,47.379332]},{code:"SOL",street:"Sonneggstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOL",campus:"zentrum",center:[8.546222,47.379983]},{code:"SON",street:"Sonneggstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SON",campus:"zentrum",center:[8.546437,47.379603]},{code:"SOP",street:"Sonneggstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOP",campus:"zentrum",center:[8.546536,47.379555]},{code:"SOQ",street:"Sonneggstrasse 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOQ",campus:"zentrum",center:[8.546945,47.378943]},{code:"SOR",street:"Sonneggstrasse 19",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOR",campus:"zentrum",center:[8.546923,47.379179]},{code:"SOX",street:"Sonneggstrasse 74",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOX",campus:"zentrum",center:[8.544958,47.382388]},{code:"SSA",street:"S\xFCdstrasse 1",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SSA",campus:"other",center:[8.464873,47.400131]},{code:"STB",street:"Stampfenbachstrasse 69",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STB",campus:"zentrum",center:[8.541664,47.381525]},{code:"STC",street:"Stampfenbachstrasse 67",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STC",campus:"zentrum",center:[8.541796,47.381361]},{code:"STD",street:"Stampfenbachstrasse 48",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STD",campus:"zentrum",center:[8.543144,47.38049]},{code:"STF",street:"Stampfenbachstrasse 114",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STF",campus:"other",center:[8.540807,47.383945]},{code:"STW",street:"Schmelzbergstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STW",campus:"zentrum",center:[8.550542,47.378049]},{code:"SWS",street:"Wagistrasse 18",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SWS",campus:"other",center:[8.458623,47.398947]},{code:"TAN",street:"Tannenstrasse 1",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TAN",campus:"zentrum",center:[8.546721,47.377174]},{code:"TUS",street:"Turnerstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TUS",campus:"other",center:[8.543935,47.38474]},{code:"UNG",street:"Universit\xE4tstrasse 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNG",campus:"zentrum",center:[8.547909,47.378866]},{code:"UNH",street:"Universit\xE4tstrasse 25",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNH",campus:"zentrum",center:[8.547906,47.379247]},{code:"UNO",street:"Universit\xE4tstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNO",campus:"zentrum",center:[8.547904,47.380407]},{code:"USM",street:"R\xE4mistrasse 92",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=USM",campus:"other",center:[8.550852,47.376134]},{code:"VOG",street:"Vogelsangstrasse 11",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=VOG",campus:"zentrum",center:[8.55006,47.381992]},{code:"WEC",street:"Weinbergstrasse 9/11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEC",campus:"zentrum",center:[8.54407,47.377957]},{code:"WEG",street:"Weinbergstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEG",campus:"other",center:[8.544066,47.379059]},{code:"WEH",street:"Weinbergstrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEH",campus:"zentrum",center:[8.54396,47.379469]},{code:"WEP",street:"Weinbergstrasse 109",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEP",campus:"other",center:[8.541884,47.385775]},{code:"WES",street:"Weinbergstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WES",campus:"zentrum",center:[8.543881,47.380217]},{code:"WET",street:"Weinbergstrasse 43",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WET",campus:"other",center:[8.543834,47.380345]},{code:"WEV",street:"Weinbergstrasse 56/ 58",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEV",campus:"zentrum",center:[8.544162,47.381703]},{code:"WHA",street:"Hertistrasse 23",zip:"8304",city:"Wallisellen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WHA",campus:"other",center:[8.576675,47.414567]},{code:"WIL",street:"Wilfriedstrasse 6",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WIL",campus:"other",center:[8.554042,47.370092]},{code:"WKA",street:"Klosterstrasse 40",zip:"8406",city:"Winterthur",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WKA",campus:"other",center:[8.707646,47.486436]},{code:"WPW",street:"Walcheplatz 12",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WPW",campus:"zentrum",center:[8.543095,47.378453]},{code:"WWA",street:"Wasserwerkstrasse 10 / 12",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WWA",campus:"zentrum",center:[8.540735,47.383]},{code:"Y15",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y15",campus:"other",center:[8.549866,47.397466]},{code:"Y17",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y17",campus:"other",center:[8.550605,47.397252]},{code:"Y21",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y21",campus:"other",center:[8.548226,47.397106]},{code:"Y27",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y27",campus:"other",center:[8.550137,47.396578]},{code:"Y32",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y32",campus:"other",center:[8.549131,47.398237]},{code:"Y35",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y35",campus:"other",center:[8.550185,47.397922]},{code:"Y36",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y36",campus:"other",center:[8.55052,47.397815]},{code:"Y55",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y55",campus:"other",center:[8.550489,47.398428]},{code:"Y59",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y59",campus:"other",center:[8.551939,47.398172]},{code:"Y63",street:"Strickhofstrasse 35",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y63",campus:"other",center:[8.549895,47.395513]},{code:"ZAL",street:"Alte Landstrasse 98",zip:"8702",city:"Zollikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZAL",campus:"other",center:[8.575287,47.33708]},{code:"ZLA",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLA",campus:"other",center:[8.64507,47.308061]},{code:"ZLB",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLB",campus:"other",center:[8.645534,47.308093]},{code:"ZLC",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLC",campus:"other",center:[8.644606,47.308051]},{code:"ZUE",street:"Z\xFCrichbergstrasse 18",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZUE",campus:"zentrum",center:[8.552801,47.373184]}];var hh=/^[A-Z0-9]{1,6}$/,oc=/^ETH\.[A-Z0-9]{1,6}\.[A-Z0-9]{1,6}$/,Wg="arcgis-prd-web.ethz.ch",ac=`https://${Wg}/server/rest/services`,b1=`${ac}/EGDB_EN/Facilities_EN/FeatureServer/5/query`,x1=`${ac}/EGDB_EN/Levels_EN/FeatureServer/2/query`,v1=`${ac}/EGDB_EN/Units_EN/FeatureServer/1/query`;function ph(n){let e=[...n].sort((s,o)=>s.order-o.order),t=new Map,i=0;for(let s of e.filter(o=>o.order>=0))t.set(s.id,i),i+=s.height;let r=0;for(let s of e.filter(o=>o.order<0).reverse())r-=s.height,t.set(s.id,r);return t}function fh(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function lc(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?[e,t,i,r]:null}function mh(n,e){let t=n.normalize("NFC").toUpperCase().replace(/[^A-Z0-9ÄÖÜ. ]+/g," ").trim().replace(/\s+/g," ");if(!t)return null;let i=/^(?:([A-Z0-9]{1,6}) )?([A-Z]{1,2}) ?([0-9][0-9.]{0,9})?$/.exec(t);if(i){let a=i[1]??e??"";if(hh.test(a)&&(i[1]||i[3]))return{building:a,floor:i[2],number:i[3]??""}}let[r,...s]=t.split(" "),o=s.filter(a=>/^[A-ZÄÖÜ]{3,20}$/.test(a));return hh.test(r)&&o.length&&o.length===s.length?{building:r,words:o}:null}var gh=(n,e)=>n.startsWith(`${e} `)?n.slice(e.length+1):n;var Zg=["zentrum","hoengg","other"],po=dh,$g=new Map(po.map(n=>[n.code,n])),tr=n=>typeof n=="string"?$g.get(n)??null:null,Xn=n=>[n.street,[n.zip,n.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");function Pi(n){return n.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase().replace(/([aou])e/g,"$1")}function yh(n,e=po){let t=Pi(n).split(/[\s,]+/).filter(Boolean);if(!t.length)return e;let i=[];for(let r of e){let s=Pi(r.code),o=`${s} ${Pi(Xn(r))} ${Pi(r.canton)}`;if(!t.every(l=>o.includes(l)))continue;let a=t[0];i.push({building:r,score:s===a?0:s.startsWith(a)?1:s.includes(a)?2:3})}return i.sort((r,s)=>r.score-s.score||r.building.code.localeCompare(s.building.code)).map(r=>r.building)}function bh(n){return Zg.map(e=>({group:e,buildings:n.filter(t=>t.campus===e)})).filter(e=>e.buildings.length)}function nr(n,e){let t=(n*3600-169028.66)/1e4,i=(e*3600-26782.5)/1e4,r=260007237e-2+211455.93*i-10938.51*i*t-.36*i*t*t-44.54*i**3,s=120014707e-2+308807.95*t+3745.25*i*i+76.63*t*t-194.56*i*i*t+119.79*t**3;return[r,s]}var cc=[{id:"hb",name:"Z\xFCrich HB",latitude:47.37818,longitude:8.54019,distance:900},{id:"lindenhof",name:"Lindenhof",latitude:47.37292,longitude:8.54083,distance:600},{id:"grossmuenster",name:"Grossm\xFCnster",latitude:47.3701,longitude:8.54405,distance:450},{id:"fraumuenster",name:"Fraum\xFCnster",latitude:47.36985,longitude:8.54107,distance:450},{id:"bellevue",name:"Bellevue / Opernhaus",latitude:47.36532,longitude:8.54683,distance:700},{id:"eth",name:"ETH Zentrum",latitude:47.37635,longitude:8.54786,distance:650},{id:"uzh",name:"Universit\xE4t Z\xFCrich",latitude:47.3745,longitude:8.54855,distance:650},{id:"kunsthaus",name:"Kunsthaus",latitude:47.37017,longitude:8.54817,distance:500},{id:"prime",name:"Prime Tower",latitude:47.3861,longitude:8.51713,distance:800},{id:"letzigrund",name:"Letzigrund",latitude:47.38277,longitude:8.5041,distance:800},{id:"hoengg",name:"ETH H\xF6nggerberg",latitude:47.40828,longitude:8.5076,distance:900},{id:"oerlikon",name:"Bahnhof Oerlikon",latitude:47.4118,longitude:8.54396,distance:800},{id:"hallenstadion",name:"Hallenstadion",latitude:47.41162,longitude:8.55194,distance:800},{id:"altstetten",name:"Bahnhof Altstetten",latitude:47.3913,longitude:8.489,distance:800},{id:"zuerichhorn",name:"Z\xFCrichhorn",latitude:47.3546,longitude:8.5522,distance:900}];function xh(n){let e=new DataView(n);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="Z3DT")throw new Error("Not a Z\xFCrich 3D tile");let i=e.getUint32(4,!0);if(i!==1&&i!==2)throw new Error(`Unsupported tile version ${i}`);let r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getUint32(16,!0),a=[e.getFloat64(24,!0),e.getFloat64(32,!0),e.getFloat64(40,!0)],l=[e.getFloat32(48,!0),e.getFloat32(52,!0),e.getFloat32(56,!0)];if(i===2)return{vertexCount:r,indexCount:s,origin:a,step:l,...Xg(new Uint8Array(n),r,s,o,e.getUint32(20,!0))};let c=new Uint16Array(n,64,r*3),u=Math.ceil(r*6/4)*4,h=new Uint8Array(n,64+u,r),d=64+u+Math.ceil(r/4)*4,f=o===4?new Uint32Array(n,d,s):new Uint16Array(n,d,s);return{vertexCount:r,indexCount:s,origin:a,step:l,positions:c,kinds:h,indices:f}}function Xg(n,e,t,i,r){if(n.length<64+e*7+r)throw new Error("Truncated Z\xFCrich 3D tile");let s=new Uint16Array(e*3),o=64;for(let h=0;h<3;h++){let d=0,f=o+e;for(let y=0,w=h;y<e;y++,w+=3){let g=n[o+y]|n[f+y]<<8;d=d+(g>>>1^-(g&1))&65535,s[w]=d}o+=e*2}let a=n.slice(o,o+e);o+=e;let l=o+r,c=i===4?new Uint32Array(t):new Uint16Array(t),u=0;for(let h=0;h<t;h++){if(o>=l)throw new Error("Truncated Z\xFCrich 3D tile");let d=n[o++],f=d&127;for(let w=128;d>=128;w*=128){if(o>=l)throw new Error("Truncated Z\xFCrich 3D tile");d=n[o++],f+=(d&127)*w}let y=u-f;if(y<0||y>=e)throw new Error("Invalid Z\xFCrich 3D tile");c[h]=y,f===0&&u++}return{positions:s,kinds:a,indices:c}}function vh(n){let e=n;return!!e&&e.format==="zurich3d-tiles"&&(e.version===1||e.version===2)&&Array.isArray(e.tiles)&&Array.isArray(e.bounds)}function _h(n,e){let t=0,i=n.length-1;for(;t<=i;){let r=t+i>>1,s=n[r];if(e<s[1])i=r-1;else if(e>=s[1]+s[2])t=r+1;else return s}return null}async function wh(n){let e=new Response(n).body;if(!e)throw new Error("Empty tile");return new Response(e.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}var Sh=Uint8Array.fromBase64;function Mh(n){if(Sh)return Sh(n);let e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}var A1=new TextDecoder;var Eh="valleyPolyModel",qg=/^(?:index\.json|ground\.bin|tiles\/-?\d{1,6}_-?\d{1,6}\.(?:bin\.gz|json))$/,is=class extends Error{},dc=new Map,uc=new Map;function Yg(n){let e=n;typeof e[Eh]!="function"&&(e[Eh]=(t,i)=>{typeof t=="string"&&typeof i=="string"&&dc.get(t)?.(i)})}function hc(n,e=document){if(!qg.test(n))return Promise.reject(new Error("invalidPath"));let t=uc.get(n);if(t)return t;let i=new Promise((r,s)=>{e.defaultView&&Yg(e.defaultView);let o=null;dc.set(n,c=>{o=c});let a=e.createElement("script"),l=()=>{dc.delete(n),uc.delete(n),a.remove()};a.onload=()=>{if(l(),o===null){s(new Error(`${n}: not a packaged model file`));return}try{r(Mh(o).buffer)}catch(c){s(c)}},a.onerror=()=>{l(),s(new is(n))},a.src=Qe.assets.url(`model/${n}.js`),(e.head??e.documentElement).appendChild(a)});return uc.set(n,i),i}var pc=new Set,mo={status:"loading",error:null,folder:"plugins/data/poly/model/",index:null,selected:null,loadedTiles:0,loadingTiles:0,colorMode:"surfaces",showGround:!0,flyRequest:0,flyTarget:null};function Ii(){return mo}function Mn(n){mo={...mo,...n};for(let e of pc)e()}function mc(n){return pc.add(n),()=>pc.delete(n)}function Ri(){return Qe.React.useSyncExternalStore(mc,Ii)}var fc="package";async function Th(n,e){let t=[],i=0;for(;;){let o=await Qe.backend.call("model.read",{path:n,offset:i},{encoding:"bytes"});if(!o.byteLength||(t.push(new Uint8Array(o)),i+=o.byteLength,e!==void 0?i>=e:o.byteLength<2*1024*1024))break}if(t.length===1)return t[0].buffer;let r=new Uint8Array(i),s=0;for(let o of t)r.set(o,s),s+=o.byteLength;return r.buffer}function Ah(n){return console.warn("Poly: the city model could not be read",n),new Error(tt("model.errorText"))}async function Ch(n,e){try{return fc==="realm"?await Th(n,e):await hc(n)}catch(t){throw Ah(t)}}var fo=null;function go(n=!1){return fo&&!n||(Mn({status:"loading",error:null}),fo=(async()=>{try{let e=await Qe.backend.call("model.status").catch(()=>null);fc=e?.installed?"realm":"package";let t=e?.installed?e.folder:"runtime/assets/model/",i;try{i=fc==="realm"?await Th("index.json"):await hc("index.json")}catch(s){if(s instanceof is){Mn({status:"missing",folder:t,index:null});return}throw s}let r=JSON.parse(new TextDecoder().decode(i));if(!vh(r))throw new Error("index.json is not a Z\xFCrich 3D model index");Mn({status:"ready",index:r,folder:t})}catch(e){Mn({status:"error",error:Ah(e).message})}})()),fo}function gc(){let n=Qe.settings.get();Mn({colorMode:n.colorMode==="height"?"height":"surfaces",showGround:n.showGround!==!1})}function Ph(n){Mn({colorMode:n}),Qe.settings.set("colorMode",n)}function Ih(n){Mn({showGround:n}),Qe.settings.set("showGround",n)}function Rh(n,e,t){Mn({flyTarget:{east:n,north:e,distance:t},flyRequest:mo.flyRequest+1}),Qe.settings.get().campusView!=="3d"&&Qe.settings.set("campusView","3d");let i=Qe.getState().activePluginTab;(i?.pluginId!==Qe.pluginId||!Ni(i.instanceId))&&Un(Ne("title"))}var yc=new Set,jg=()=>({outlines:null,outlinesStatus:"idle",levels:null,levelsStatus:"idle",rooms:new Map,roomsStatus:new Map,room:null,focus:0,focusOn:null,place:null}),Yt=jg();var yo={center:[8.5485,47.3768],zoom:15.6},Nh=n=>{yo=n},Kg=()=>Yt;function Wt(n){Yt={...Yt,...n};for(let e of yc)e()}function Jg(n){return yc.add(n),()=>yc.delete(n)}var Li=()=>Qe.React.useSyncExternalStore(Jg,Kg);function bc(n=Qe.settings.get()){let e=tr(n.building),t=typeof n.level=="string"&&oc.test(n.level)&&e&&n.level.split(".")[1]===e.code?n.level:"";return{building:e,level:t,view:n.campusView==="3d"?"3d":"map"}}function ki(){let n=Qe.React,[e,t]=n.useState(()=>bc());return n.useEffect(()=>Qe.settings.subscribe(()=>t(i=>{let r=bc();return r.building===i.building&&r.level===i.level&&r.view===i.view?i:r})),[]),e}var xc=n=>{console.warn(`[poly] campus: ${n instanceof Error?n.message:String(n)}`)};function Lh(n=!1){!n&&Yt.outlinesStatus!=="idle"&&Yt.outlinesStatus!=="error"||(Wt({outlinesStatus:"loading"}),Qe.backend.call("campus.outlines",{fresh:n}).then(e=>Wt({outlines:e,outlinesStatus:"ready"}),e=>{xc(e),Wt({outlinesStatus:"error"})}))}function bo(n=!1){!n&&Yt.levelsStatus!=="idle"&&Yt.levelsStatus!=="error"||(Wt({levelsStatus:"loading"}),Qe.backend.call("campus.levels",{fresh:n}).then(e=>{let t=new Map;for(let i of e)t.set(i.code,[...t.get(i.code)??[],i]);Wt({levels:t,levelsStatus:"ready"})},e=>{xc(e),Wt({levelsStatus:"error"})}))}function xo(n){let e=Yt.roomsStatus.get(n);e==="loading"||e==="ready"||(Wt({roomsStatus:new Map(Yt.roomsStatus).set(n,"loading")}),Qe.backend.call("campus.rooms",{level:n}).then(t=>Wt({rooms:new Map(Yt.rooms).set(n,t),roomsStatus:new Map(Yt.roomsStatus).set(n,"ready")}),t=>{xc(t),Wt({roomsStatus:new Map(Yt.roomsStatus).set(n,"error")})}))}var Ni=n=>n==="campus"||n==="city"||!!(n?.startsWith("campus-")||n?.startsWith("city-"));function vo(){let n=Qe.getState().activePluginTab;return n?.pluginId===Qe.pluginId&&Ni(n.instanceId)}function Un(n,e=!1){Qe.workspace.openMainTab({instanceId:e?`campus-${Date.now().toString(36)}`:"campus",title:n,newTab:e})}function Di(n,e,t=!0){n===(Qe.settings.get().building||null)&&!t||(Qe.settings.set("building",n??""),Qe.settings.set("level",""),Wt({room:null,...t?{focus:Yt.focus+1,focusOn:n}:{}}),t&&n&&!vo()&&Un(e))}function vc(n,e){let t=n.level.split(".")[1]??"";!oc.test(n.level)||!t||(Qe.settings.set("building",t),Qe.settings.set("level",n.level),Wt({room:n,focus:Yt.focus+1,focusOn:t}),xo(n.level),vo()||Un(e))}var ir=new Map;function kh(n){let e=JSON.stringify(n),t=ir.get(e);return t||(t=Qe.backend.call("campus.searchRooms",{query:n}),ir.set(e,t),t.catch(()=>ir.delete(e)),ir.size>100&&ir.delete(ir.keys().next().value)),t}function Dh(n){Qe.settings.set("level",n),Wt({room:null}),n&&xo(n)}var Qg=n=>Math.min(Math.max(17-Math.log2(Math.max(n,50)/450),13),19);function Oh(n,e,t){if(t==="3d"){let[s,o]=nr(n.latitude,n.longitude);Rh(s,o,n.distance);return}let i=[n.longitude,n.latitude],r=Qg(n.distance);yo={center:i,zoom:r},Wt({place:{center:i,zoom:r,request:(Yt.place?.request??0)+1}}),vo()||Un(e)}function zh(n,e){Qe.settings.set("campusView",n),Wt({focus:Yt.focus+1,focusOn:bc().building?.code??null}),e&&!vo()&&Un(e)}var ui=(n,e)=>D.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...e},n.map(t=>D.createElement("path",{key:t,d:t}))),Fh=["M19 10c0 4.6-7 11-7 11s-7-6.4-7-11a7 7 0 0 1 14 0Z","M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0"],ey=["M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13","M20 20l-4.8-4.8"],Uh=["M18 6 6 18","M6 6l12 12"],ty=["M9 6l6 6-6 6"],ny=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],iy=["M4 21h16","M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17","M14.5 12.5v.01"],ry=250;function sy({building:n}){let e=Li(),t=e.levels?.get(n.code)?.length??0;return D.createElement("section",{className:"poly-building","aria-label":n.code},D.createElement("div",{className:"poly-building-code"},n.code),D.createElement("button",{type:"button",className:"poly-icon-btn poly-building-close",title:Ne("building.clear"),"aria-label":Ne("building.clear"),onClick:()=>Di(null,Ne("title"),!1)},ui(Uh)),D.createElement("div",{className:"poly-building-address"},Xn(n)),D.createElement("div",{className:"poly-building-meta"},Ne(`group.${n.campus}`)," \xB7 ",e.levelsStatus==="ready"?t?Ne(t===1?"floors.one":"floors.other",{count:t}):Ne("floors.none"):Ne("floors.reading")),D.createElement("a",{className:"poly-building-link",href:n.link,target:"_blank",rel:"noreferrer"},ui(ny),D.createElement("span",null,Ne("building.link"))))}function Bh(){let n=ki(),e=Li(),[t,i]=D.useState(""),[r,s]=D.useState(()=>new Set(["other","zurich"])),[o,a]=D.useState(null),l=D.useRef(null);D.useEffect(()=>{bo()},[]);let c=D.useMemo(()=>yh(t),[t]),u=D.useMemo(()=>{let E=mh(t,n.building?.code);return E&&tr(E.building)?E:null},[t,n.building]),h=u?JSON.stringify(u):"";D.useEffect(()=>{if(!u){a(null);return}let E=!0;a(O=>({key:h,status:"loading",rooms:O?.rooms??[]}));let P=setTimeout(()=>{kh(u).then(O=>{E&&a({key:h,status:"ready",rooms:O})},()=>{E&&a({key:h,status:"error",rooms:[]})})},ry);return()=>{E=!1,clearTimeout(P)}},[h]);let d=bh(c),f=D.useMemo(()=>{let E=Pi(t.trim());return E?cc.filter(P=>Pi(P.name).includes(E)):cc},[t]),y=t.trim().length>0,w=Ne("title"),g=o?.key===h?o:null,p=E=>s(P=>{let O=new Set(P);return O.has(E)?O.delete(E):O.add(E),O}),C=E=>y||!r.has(E),N=(E,P)=>D.createElement("button",{type:"button",className:`poly-group-head ${C(E)?"open":""}`,"aria-expanded":C(E),onClick:()=>p(E)},D.createElement("span",{className:"poly-group-chevron"},ui(ty)),D.createElement("span",{className:"poly-group-name"},Ne(`group.${E}`)),P!==void 0&&D.createElement("span",{className:"poly-group-count"},P)),S=()=>{let E=g?.rooms[0];E?vc(E,w):c[0]&&Di(c[0].code,w)};return D.createElement(D.Fragment,null,D.createElement("div",{className:"poly-bar poly-search-bar"},D.createElement("div",{className:"search-field-row"},D.createElement("div",{className:"search-field"},D.createElement("span",{className:"search-field-icon"},ui(ey)),D.createElement("input",{ref:l,className:"search-field-input",value:t,placeholder:Ne("search.placeholder"),"aria-label":Ne("search.placeholder"),onChange:E=>i(E.target.value),onKeyDown:E=>{E.key==="Enter"&&S(),E.key==="Escape"&&i("")}}),t&&D.createElement("button",{type:"button",className:"search-field-action",title:Ne("search.clear"),"aria-label":Ne("search.clear"),onClick:()=>i("")},ui(Uh))))),D.createElement("div",{className:"poly-list poly-campus-list"},u&&D.createElement("div",{className:"poly-group","data-group":"rooms"},N("rooms",g?.status==="ready"?g.rooms.length:void 0),g?.status==="loading"&&!g.rooms.length&&D.createElement("div",{className:"poly-note"},Ne("rooms.searching")),g?.status==="error"&&D.createElement("div",{className:"poly-note error"},Ne("rooms.failed")),g?.status==="ready"&&!g.rooms.length&&D.createElement("div",{className:"poly-note"},Ne("rooms.none")),g?.rooms.map(E=>D.createElement("button",{key:E.id,type:"button","data-room":E.id,className:`poly-building-row ${E.id===e.room?.id?"active":""}`,onClick:()=>vc(E,w)},D.createElement("span",{className:"poly-building-icon"},ui(iy)),D.createElement("span",{className:"poly-building-row-meta"},D.createElement("span",{className:"poly-building-row-code"},E.name),D.createElement("span",{className:"poly-building-row-sub"},[E.type,E.use].filter((P,O,v)=>P&&v.indexOf(P)===O).join(" \xB7 ")))))),d.map(({group:E,buildings:P})=>D.createElement("div",{key:E,className:"poly-group","data-group":E},N(E,P.length),C(E)&&P.map(O=>D.createElement("button",{key:O.code,type:"button","data-building":O.code,className:`poly-building-row ${O.code===n.building?.code?"active":""}`,onClick:()=>Di(O.code,w)},D.createElement("span",{className:"poly-building-icon"},ui(Fh)),D.createElement("span",{className:"poly-building-row-meta"},D.createElement("span",{className:"poly-building-row-code"},O.code),D.createElement("span",{className:"poly-building-row-sub"},Xn(O))))))),f.length>0&&D.createElement("div",{className:"poly-group","data-group":"zurich"},N("zurich",f.length),C("zurich")&&f.map(E=>D.createElement("button",{key:E.id,type:"button","data-place":E.id,className:"poly-building-row",onClick:()=>Oh(E,w,n.view)},D.createElement("span",{className:"poly-building-icon"},ui(Fh)),D.createElement("span",{className:"poly-building-row-meta"},D.createElement("span",{className:"poly-building-row-code"},E.name))))),!c.length&&!u&&!f.length&&D.createElement("div",{className:"poly-note"},Ne("search.none")),D.createElement("div",{className:"poly-credit"},Ne("credit"))),n.building&&D.createElement(sy,{building:n.building}))}var _n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,tu=1,_p=2;var Bs=1,wp=2,Ur=3,wi=0,an=1,Vt=2,Wn=0,Br=1,nu=2,iu=3,ru=4,Sp=5;var $i=100,Mp=101,Ep=102,Tp=103,Ap=104,Cp=200,Pp=201,Ip=202,Rp=203,su=204,ou=205,Np=206,Lp=207,kp=208,Dp=209,Op=210,zp=211,Fp=212,Up=213,Bp=214,Yo=0,jo=1,Ko=2,wr=3,Jo=4,Qo=5,ea=6,ta=7,Pa=0,Hp=1,Vp=2,Ln=0,au=1,lu=2,cu=3,uu=4,du=5,hu=6,pu=7;var fu=300,Si=301,Xi=302,Ia=303,Ra=304,Hs=306,Sr=1e3,Hn=1001,na=1002,Bt=1003,Gp=1004;var Vs=1005;var Zt=1006,Na=1007;var Mi=1008;var hn=1009,mu=1010,gu=1011,Hr=1012,La=1013,kn=1014,Dn=1015,On=1016,ka=1017,Da=1018,Vr=1020,yu=35902,bu=35899,xu=1021,vu=1022,wn=1023,Vn=1026,Ei=1027,_u=1028,Oa=1029,Ti=1030,za=1031;var Fa=1033,Gs=33776,Ws=33777,Zs=33778,$s=33779,Ua=35840,Ba=35841,Ha=35842,Va=35843,Ga=36196,Wa=37492,Za=37496,$a=37488,Xa=37489,Xs=37490,qa=37491,Ya=37808,ja=37809,Ka=37810,Ja=37811,Qa=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,ol=37819,al=37820,ll=37821,cl=36492,ul=36494,dl=36495,hl=36283,pl=36284,qs=36285,fl=36286;var ms=2300,ia=2301,Xo=2302,Wc=2303,Zc=2400,$c=2401,Xc=2402;var Wp=3200;var ml=0,Zp=1,ri="",rn="srgb",gs="srgb-linear",ys="linear",pt="srgb";var qo=7680,wu=7681;var Su=517;var $p=519,Xp=512,qp=513,Yp=514,gl=515,jp=516,Kp=517,yl=518,Jp=519,Mu=35044;var Eu="300 es",Pn=2e3,Mr=2001;function oy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qp(){let n=bs("canvas");return n.style.display="block",n}var Hh={},Er=null;function xs(...n){let e="THREE."+n.shift();Er?Er("log",e,...n):console.log(e,...n)}function ef(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=ef(n);let e="THREE."+n.shift();if(Er)Er("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=ef(n);let e="THREE."+n.shift();if(Er)Er("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Hi(...n){let e=n.join(" ");e in Hh||(Hh[e]=!0,Ze(...n))}function tf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var nf={[Yo]:jo,[Ko]:ea,[Jo]:ta,[wr]:Qo,[jo]:Yo,[ea]:Ko,[ta]:Jo,[Qo]:wr},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,ps=Math.PI/180,Tr=180/Math.PI;function ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function ly(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cy(n,e,t){return n!==e?(t-n)/(e-n):0}function fs(n,e,t){return(1-t)*n+t*e}function uy(n,e,t,i){return fs(n,e,1-Math.exp(-t*i))}function dy(n,e=1){return e-Math.abs(Tu(n,e*2)-e)}function hy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function py(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function my(n,e){return n+Math.random()*(e-n)}function gy(n){return n*(.5-Math.random())}function yy(n){n!==void 0&&(Vh=n);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function by(n){return n*ps}function xy(n){return n*Tr}function vy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _y(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sy(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*y,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*y,a*c);break;case"ZYZ":n.set(l*y,l*f,a*u,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Au={DEG2RAD:ps,RAD2DEG:Tr,generateUUID:ei,clamp:it,euclideanModulo:Tu,mapLinear:ly,inverseLerp:cy,lerp:fs,damp:uy,pingpong:dy,smoothstep:hy,smootherstep:py,randInt:fy,randFloat:my,randFloatSpread:gy,seededRandom:yy,degToRad:by,radToDeg:xy,isPowerOfTwo:vy,ceilPowerOfTwo:_y,floorPowerOfTwo:wy,setQuaternionFromProperEuler:Sy,normalize:mt,denormalize:Cn},Nu=class Nu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;var Be=Nu,on=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],f=s[o+1],y=s[o+2],w=s[o+3];if(h!==w||l!==d||c!==f||u!==y){let g=l*d+c*f+u*y+h*w;g<0&&(d=-d,f=-f,y=-y,w=-w,g=-g);let p=1-a;if(g<.9995){let C=Math.acos(g),N=Math.sin(C);p=Math.sin(p*C)/N,a=Math.sin(a*C)/N,l=l*p+d*a,c=c*p+f*a,u=u*p+y*a,h=h*p+w*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+y*a,h=h*p+w*a;let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],y=s[o+3];return e[t]=a*y+u*h+l*f-c*d,e[t+1]=l*y+u*d+c*h-a*f,e[t+2]=c*y+u*f+a*d-l*h,e[t+3]=u*y-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h-d*f*y;break;case"YXZ":this._x=d*u*h+c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h+d*f*y;break;case"ZXY":this._x=d*u*h-c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h-d*f*y;break;case"ZYX":this._x=d*u*h-c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h+d*f*y;break;case"YZX":this._x=d*u*h+c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h-d*f*y;break;case"XZY":this._x=d*u*h-c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h+d*f*y;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lu=class Lu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lu.prototype.isVector3=!0;var $=Lu,_c=new $,Gh=new on,ku=class ku{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],y=i[8],w=r[0],g=r[3],p=r[6],C=r[1],N=r[4],S=r[7],E=r[2],P=r[5],O=r[8];return s[0]=o*w+a*C+l*E,s[3]=o*g+a*N+l*P,s[6]=o*p+a*S+l*O,s[1]=c*w+u*C+h*E,s[4]=c*g+u*N+h*P,s[7]=c*p+u*S+h*O,s[2]=d*w+f*C+y*E,s[5]=d*g+f*N+y*P,s[8]=d*p+f*S+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,y=t*h+i*d+r*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return e[0]=h*w,e[1]=(r*c-u*i)*w,e[2]=(a*i-r*o)*w,e[3]=d*w,e[4]=(u*t-r*l)*w,e[5]=(r*s-a*t)*w,e[6]=f*w,e[7]=(i*l-c*t)*w,e[8]=(o*t-i*s)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ku.prototype.isMatrix3=!0;var je=ku,wc=new je,Wh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){let n={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gs]:{primaries:e,whitePoint:i,transfer:ys,toXYZ:Wh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Wh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var ot=My();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rr,ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=bs("canvas")),rr.width=e.width,rr.height=e.height;let r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ey=0,Ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sc(r[o].image)):s.push(Sc(r[o]))}else s=Sc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ra.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Ty=0,Mc=new $,$t=class n extends In{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Hn,r=Hn,s=Zt,o=Mi,a=wn,l=hn,c=n.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ei(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=fu;$t.DEFAULT_ANISOTROPY=1;var Du=class Du{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],y=l[9],w=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+w)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let N=(c+1)/2,S=(f+1)/2,E=(p+1)/2,P=(u+d)/4,O=(h+w)/4,v=(y+g)/4;return N>S&&N>E?N<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(N),r=P/i,s=O/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=O/s,r=v/s),this.set(i,r,s,t),this}let C=Math.sqrt((g-y)*(g-y)+(h-w)*(h-w)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(g-y)/C,this.y=(h-w)/C,this.z=(d-u)/C,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Du.prototype.isVector4=!0;var Ct=Du,sa=class extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new $t(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ar(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends sa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vs=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ca=class Ca{constructor(e,t,i,r,s,o,a,l,c,u,h,d,f,y,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,f,y,w,g)}set(e,t,i,r,s,o,a,l,c,u,h,d,f,y,w,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=y,p[11]=w,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,y=a*u,w=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+y*c,t[5]=d-w*c,t[9]=-a*l,t[2]=w-d*c,t[6]=y+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,y=c*u,w=c*h;t[0]=d+w*a,t[4]=y*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-y,t[6]=w+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,y=c*u,w=c*h;t[0]=d-w*a,t[4]=-o*h,t[8]=y+f*a,t[1]=f+y*a,t[5]=o*u,t[9]=w-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,y=a*u,w=a*h;t[0]=l*u,t[4]=y*c-f,t[8]=d*c+w,t[1]=l*h,t[5]=w*c+d,t[9]=f*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,y=a*l,w=a*c;t[0]=l*u,t[4]=w-d*h,t[8]=y*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+y,t[10]=d-w*h}else if(e.order==="XZY"){let d=o*l,f=o*c,y=a*l,w=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+w,t[5]=o*u,t[9]=f*h-y,t[2]=y*h-f,t[6]=a*u,t[10]=w*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,Cy)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),di.crossVectors(i,fn),di.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),di.crossVectors(i,fn)),di.normalize(),_o.crossVectors(fn,di),r[0]=di.x,r[4]=_o.x,r[8]=fn.x,r[1]=di.y,r[5]=_o.y,r[9]=fn.y,r[2]=di.z,r[6]=_o.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],y=i[2],w=i[6],g=i[10],p=i[14],C=i[3],N=i[7],S=i[11],E=i[15],P=r[0],O=r[4],v=r[8],M=r[12],L=r[1],B=r[5],W=r[9],q=r[13],z=r[2],X=r[6],ee=r[10],ne=r[14],me=r[3],te=r[7],le=r[11],F=r[15];return s[0]=o*P+a*L+l*z+c*me,s[4]=o*O+a*B+l*X+c*te,s[8]=o*v+a*W+l*ee+c*le,s[12]=o*M+a*q+l*ne+c*F,s[1]=u*P+h*L+d*z+f*me,s[5]=u*O+h*B+d*X+f*te,s[9]=u*v+h*W+d*ee+f*le,s[13]=u*M+h*q+d*ne+f*F,s[2]=y*P+w*L+g*z+p*me,s[6]=y*O+w*B+g*X+p*te,s[10]=y*v+w*W+g*ee+p*le,s[14]=y*M+w*q+g*ne+p*F,s[3]=C*P+N*L+S*z+E*me,s[7]=C*O+N*B+S*X+E*te,s[11]=C*v+N*W+S*ee+E*le,s[15]=C*M+N*q+S*ne+E*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],y=e[3],w=e[7],g=e[11],p=e[15],C=l*f-c*d,N=a*f-c*h,S=a*d-l*h,E=o*f-c*u,P=o*d-l*u,O=o*h-a*u;return t*(w*C-g*N+p*S)-i*(y*C-g*E+p*P)+r*(y*N-w*E+p*O)-s*(y*S-w*P+g*O)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],y=e[12],w=e[13],g=e[14],p=e[15],C=t*a-i*o,N=t*l-r*o,S=t*c-s*o,E=i*l-r*a,P=i*c-s*a,O=r*c-s*l,v=u*w-h*y,M=u*g-d*y,L=u*p-f*y,B=h*g-d*w,W=h*p-f*w,q=d*p-f*g,z=C*q-N*W+S*B+E*L-P*M+O*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/z;return e[0]=(a*q-l*W+c*B)*X,e[1]=(r*W-i*q-s*B)*X,e[2]=(w*O-g*P+p*E)*X,e[3]=(d*P-h*O-f*E)*X,e[4]=(l*L-o*q-c*M)*X,e[5]=(t*q-r*L+s*M)*X,e[6]=(g*S-y*O-p*N)*X,e[7]=(u*O-d*S+f*N)*X,e[8]=(o*W-a*L+c*v)*X,e[9]=(i*L-t*W-s*v)*X,e[10]=(y*P-w*S+p*C)*X,e[11]=(h*S-u*P-f*C)*X,e[12]=(a*M-o*B-l*v)*X,e[13]=(t*B-i*M+r*v)*X,e[14]=(w*N-y*E-g*C)*X,e[15]=(u*E-h*N+d*C)*X,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,y=s*h,w=o*u,g=o*h,p=a*h,C=l*c,N=l*u,S=l*h,E=i.x,P=i.y,O=i.z;return r[0]=(1-(w+p))*E,r[1]=(f+S)*E,r[2]=(y-N)*E,r[3]=0,r[4]=(f-S)*P,r[5]=(1-(d+p))*P,r[6]=(g+C)*P,r[7]=0,r[8]=(y+N)*O,r[9]=(g-C)*O,r[10]=(1-(d+w))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=sr.set(r[0],r[1],r[2]).length(),a=sr.set(r[4],r[5],r[6]).length(),l=sr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),En.copy(this);let c=1/o,u=1/a,h=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Pn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===Pn)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Mr)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Pn,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r),y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===Pn)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===Mr)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ca.prototype.isMatrix4=!0;var xt=Ca,sr=new $,En=new xt,Ay=new $(0,0,0),Cy=new $(1,1,1),di=new $,_o=new $,fn=new $,$h=new xt,Xh=new on,ni=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Py=0,qh=new $,or=new on,qn=new xt,wo=new $,rs=new $,Iy=new $,Ry=new on,Yh=new $(1,0,0),jh=new $(0,1,0),Kh=new $(0,0,1),Jh={type:"added"},Ny={type:"removed"},ar={type:"childadded",child:null},Ec={type:"childremoved",child:null},Ht=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new $,t=new ni,i=new on,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(rs,wo,this.up):qn.lookAt(wo,rs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(qn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),ar.child=e,this.dispatchEvent(ar),ar.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ny),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new $(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bi=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let w of e.hand.values()){let g=t.getJointPose(w,i),p=this._getHandJoint(c,w);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,y=.005;c.inputState.pinching&&d>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Tu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tc(o,s,e+1/3),this.g=Tc(o,s,e),this.b=Tc(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let i=rf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return ot.workingToColorSpace(Kt.copy(this),e),Math.round(it(Kt.r*255,0,255))*65536+Math.round(it(Kt.g*255,0,255))*256+Math.round(it(Kt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=rn){ot.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(So);let i=fs(hi.h,So.h,t),r=fs(hi.s,So.s,t),s=fs(hi.l,So.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ze;ze.NAMES=rf;var _s=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new $,Yn=new $,Ac=new $,jn=new $,lr=new $,cr=new $,Qh=new $,Cc=new $,Pc=new $,Ic=new $,Rc=new Ct,Nc=new Ct,Lc=new Ct,Qn=class n{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Tn.subVectors(r,t),Yn.subVectors(i,t),Ac.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Yn),l=Tn.dot(Ac),c=Yn.dot(Yn),u=Yn.dot(Ac),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,y=(o*u-a*l)*d;return s.set(1-f-y,y,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Rc.setScalar(0),Nc.setScalar(0),Lc.setScalar(0),Rc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Nc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;lr.subVectors(r,i),cr.subVectors(s,i),Cc.subVectors(e,i);let l=lr.dot(Cc),c=cr.dot(Cc);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,r);let u=lr.dot(Pc),h=cr.dot(Pc);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(lr,o);Ic.subVectors(e,s);let f=lr.dot(Ic),y=cr.dot(Ic);if(y>=0&&f<=y)return t.copy(s);let w=f*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(cr,a);let g=u*y-f*h;if(g<=0&&h-u>=0&&f-y>=0)return Qh.subVectors(s,r),a=(h-u)/(h-u+(f-y)),t.copy(r).addScaledVector(Qh,a);let p=1/(g+w+d);return o=w*p,a=d*p,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Eo.subVectors(this.max,ss),ur.subVectors(e.a,ss),dr.subVectors(e.b,ss),hr.subVectors(e.c,ss),pi.subVectors(dr,ur),fi.subVectors(hr,dr),Oi.subVectors(ur,hr);let t=[0,-pi.z,pi.y,0,-fi.z,fi.y,0,-Oi.z,Oi.y,pi.z,0,-pi.x,fi.z,0,-fi.x,Oi.z,0,-Oi.x,-pi.y,pi.x,0,-fi.y,fi.x,0,-Oi.y,Oi.x,0];return!kc(t,ur,dr,hr,Eo)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,ur,dr,hr,Eo))?!1:(To.crossVectors(pi,fi),t=[To.x,To.y,To.z],kc(t,ur,dr,hr,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new $,new $,new $,new $,new $,new $,new $,new $],An=new $,Mo=new gi,ur=new $,dr=new $,hr=new $,pi=new $,fi=new $,Oi=new $,ss=new $,Eo=new $,To=new $,zi=new $;function kc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zi.fromArray(n,s);let a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Dt=new $,Ao=new Be,ky=0,gt=class extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ss=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ms=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var un=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dy=new gi,os=new $,Dc=new $,Vi=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);let t=os.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Dc)),this.expandByPoint(os.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oy=0,vn=new xt,Oc=new Ht,pr=new $,mn=new gi,as=new gi,Ut=new $,It=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?Ms:Ss)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(mn.min,as.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,as.max),mn.expandByPoint(Ut)):(mn.expandByPoint(as.min),mn.expandByPoint(as.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Ut.add(pr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new $,l[v]=new $;let c=new $,u=new $,h=new $,d=new Be,f=new Be,y=new Be,w=new $,g=new $;function p(v,M,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,L),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,M),y.fromBufferAttribute(s,L),u.sub(c),h.sub(c),f.sub(d),y.sub(d);let B=1/(f.x*y.y-y.x*f.y);isFinite(B)&&(w.copy(u).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(B),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-y.x).multiplyScalar(B),a[v].add(w),a[M].add(w),a[L].add(w),l[v].add(g),l[M].add(g),l[L].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let v=0,M=C.length;v<M;++v){let L=C[v],B=L.start,W=L.count;for(let q=B,z=B+W;q<z;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let N=new $,S=new $,E=new $,P=new $;function O(v){E.fromBufferAttribute(r,v),P.copy(E);let M=a[v];N.copy(M),N.sub(E.multiplyScalar(E.dot(M))).normalize(),S.crossVectors(P,M);let B=S.dot(l[v])<0?-1:1;o.setXYZW(v,N.x,N.y,N.z,B)}for(let v=0,M=C.length;v<M;++v){let L=C[v],B=L.start,W=L.count;for(let q=B,z=B+W;q<z;q+=3)O(e.getX(q+0)),O(e.getX(q+1)),O(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let d=0,f=e.count;d<f;d+=3){let y=e.getX(d+0),w=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,y=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?f=l[w]*a.data.stride+a.offset:f=l[w]*u;for(let p=0;p<u;p++)d[y++]=c[f++]}return new gt(d,u,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new $,Gi=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zc=new $,zy=new $,Fy=new je,sn=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=zc.subVectors(i,t).cross(zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(zc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Fy.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Uy=0,Gn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Br,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ou,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new sn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rr=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,ls=new $,mr=new $,gr=new $,yr=new Be,cs=new Be,sf=new xt,Co=new $,us=new $,Po=new $,ep=new Be,Fc=new Be,tp=new Be,Es=class extends Ht{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ir(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Gi(i,3,0,!1)),fr.setAttribute("uv",new Gi(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Io(Co.set(-.5,-.5,0),gr,o,mr,r,s),Io(us.set(.5,-.5,0),gr,o,mr,r,s),Io(Po.set(.5,.5,0),gr,o,mr,r,s),ep.set(0,0),Fc.set(1,0),tp.set(1,1);let a=e.ray.intersectTriangle(Co,us,Po,!1,ls);if(a===null&&(Io(us.set(-.5,.5,0),gr,o,mr,r,s),Fc.set(0,1),a=e.ray.intersectTriangle(Co,Po,us,!1,ls),a===null))return;let l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||t.push({distance:l,point:ls.clone(),uv:Qn.getInterpolation(ls,Co,us,Po,ep,Fc,tp,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Io(n,e,t,i,r,s){yr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(cs.x=s*yr.x-r*yr.y,cs.y=r*yr.x+s*yr.y):cs.copy(yr),n.copy(e),n.x+=cs.x,n.y+=cs.y,n.applyMatrix4(sf)}var Jn=new $,Uc=new $,Ro=new $,No=new $,yi=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uc.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),No.copy(this.origin).sub(Uc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=No.dot(this.direction),l=-No.dot(Ro),c=No.lengthSq(),u=Math.abs(1-o*o),h,d,f,y;if(u>0)if(h=o*l-a,d=o*a-l,y=s*u,h>=0)if(d>=-y)if(d<=y){let w=1/u;h*=w,d*=w,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Uc).addScaledVector(Ro,d),f}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);let i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,y=t.x-o.x,w=t.y-o.y,g=t.z-o.z,p=i.x-o.x,C=i.y-o.y,N=i.z-o.z,S=Math.abs(l),E=Math.abs(c),P=Math.abs(u),O,v,M,L,B,W,q,z,X,ee,ne,me;if(S>=E&&S>=P?(M=l,W=h,X=y,me=p,l>=0?(O=c,v=u,L=d,B=f,q=w,z=g,ee=C,ne=N):(O=u,v=c,L=f,B=d,q=g,z=w,ee=N,ne=C)):E>=P?(M=c,W=d,X=w,me=C,c>=0?(O=u,v=l,L=f,B=h,q=g,z=y,ee=N,ne=p):(O=l,v=u,L=h,B=f,q=y,z=g,ee=p,ne=N)):(M=u,W=f,X=g,me=N,u>=0?(O=l,v=c,L=h,B=d,q=y,z=w,ee=p,ne=C):(O=c,v=l,L=d,B=h,q=w,z=y,ee=C,ne=p)),M===0)return null;let te=O/M,le=v/M,F=1/M,de=L-te*W,pe=B-le*W,Me=q-te*X,Ee=z-le*X,Ie=ee-te*me,Y=ne-le*me,ie=Ie*Ee-Y*Me,xe=de*Y-pe*Ie,Te=Me*pe-Ee*de;if(r){if(ie<0||xe<0||Te<0)return null}else if((ie<0||xe<0||Te<0)&&(ie>0||xe>0||Te>0))return null;let ve=ie+xe+Te;if(ve===0)return null;let Ve=F*(ie*W+xe*X+Te*me);return(ve>0?Ve<0:Ve>0)?null:this.at(Ve/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},np=new xt,Fi=new yi,Lo=new Vi,ip=new $,ko=new $,Do=new $,Oo=new $,Bc=new $,zo=new $,rp=new $,Fo=new $,Rt=class extends Ht{constructor(e=new It,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Bc.fromBufferAttribute(h,e),o?zo.addScaledVector(Bc,u):zo.addScaledVector(Bc.sub(t),u))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(Lo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Lo,ip)===null||Fi.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(np),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=d.length;y<w;y++){let g=d[y],p=o[g.materialIndex],C=Math.max(g.start,f.start),N=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=C,E=N;S<E;S+=3){let P=a.getX(S),O=a.getX(S+1),v=a.getX(S+2);r=Uo(this,p,e,i,c,u,h,P,O,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let y=Math.max(0,f.start),w=Math.min(a.count,f.start+f.count);for(let g=y,p=w;g<p;g+=3){let C=a.getX(g),N=a.getX(g+1),S=a.getX(g+2);r=Uo(this,o,e,i,c,u,h,C,N,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=d.length;y<w;y++){let g=d[y],p=o[g.materialIndex],C=Math.max(g.start,f.start),N=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=C,E=N;S<E;S+=3){let P=S,O=S+1,v=S+2;r=Uo(this,p,e,i,c,u,h,P,O,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let y=Math.max(0,f.start),w=Math.min(l.count,f.start+f.count);for(let g=y,p=w;g<p;g+=3){let C=g,N=g+1,S=g+2;r=Uo(this,o,e,i,c,u,h,C,N,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function By(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:n}}function Uo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ko),n.getVertexPosition(l,Do),n.getVertexPosition(c,Oo);let u=By(n,e,t,i,ko,Do,Oo,rp);if(u){let h=new $;Qn.getBarycoord(rp,ko,Do,Oo,h),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new $,materialIndex:0};Qn.getNormal(ko,Do,Oo,d.normal),u.face=d,u.barycoord=h}return u}var aa=class extends $t{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Bt,u=Bt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=new Vi,Hy=new Be(.5,.5),Bo=new $,Nr=class{constructor(e=new sn,t=new sn,i=new sn,r=new sn,s=new sn,o=new sn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],y=s[8],w=s[9],g=s[10],p=s[11],C=s[12],N=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,f-u,p-y,E-C).normalize(),r[1].setComponents(c+o,f+u,p+y,E+C).normalize(),r[2].setComponents(c+a,f+h,p+w,E+N).normalize(),r[3].setComponents(c-a,f-h,p-w,E-N).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,f-d,p-g,E-S).normalize();else if(r[4].setComponents(c-l,f-d,p-g,E-S).normalize(),t===Pn)r[5].setComponents(c+l,f+d,p+g,E+S).normalize();else if(t===Mr)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);let t=Hy.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new $,ca=new $,sp=new xt,ds=new yi,Ho=new Vi,Hc=new $,op=new $,ua=class extends Ht{constructor(e=new It,t=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)la.fromBufferAttribute(t,r-1),ca.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=la.distanceTo(ca);e.setAttribute("lineDistance",new un(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;sp.copy(r).invert(),ds.copy(e.ray).applyMatrix4(sp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let w=f,g=y-1;w<g;w+=c){let p=u.getX(w),C=u.getX(w+1),N=Vo(this,e,ds,l,p,C,w);N&&t.push(N)}if(this.isLineLoop){let w=u.getX(y-1),g=u.getX(f),p=Vo(this,e,ds,l,w,g,y-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=f,g=y-1;w<g;w+=c){let p=Vo(this,e,ds,l,w,w+1,w);p&&t.push(p)}if(this.isLineLoop){let w=Vo(this,e,ds,l,y-1,f,y-1);w&&t.push(w)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Vo(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(la.fromBufferAttribute(a,r),ca.fromBufferAttribute(a,s),t.distanceSqToSegment(la,ca,Hc,op)>i)return;Hc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Hc);if(!(c<e.near||c>e.far))return{distance:c,point:op.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ap=new $,lp=new $,Ts=class extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ap.fromBufferAttribute(t,r),lp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ap.distanceTo(lp);e.setAttribute("lineDistance",new un(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var As=class extends $t{constructor(e=[],t=Si,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kr=class extends $t{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends $t{constructor(e,t,i=kn,r,s,o,a=Bt,l=Bt,c,u=Vn,h=1){if(u!==Vn&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},da=class extends bi{constructor(e,t=kn,i=Si,r,s,o=Bt,a=Bt,l,c=Vn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cs=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dr=class n extends It{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(h,2));function y(w,g,p,C,N,S,E,P,O,v,M){let L=S/O,B=E/v,W=S/2,q=E/2,z=P/2,X=O+1,ee=v+1,ne=0,me=0,te=new $;for(let le=0;le<ee;le++){let F=le*B-q;for(let de=0;de<X;de++){let pe=de*L-W;te[w]=pe*C,te[g]=F*N,te[p]=z,c.push(te.x,te.y,te.z),te[w]=0,te[g]=0,te[p]=P>0?1:-1,u.push(te.x,te.y,te.z),h.push(de/O),h.push(1-le/v),ne+=1}}for(let le=0;le<v;le++)for(let F=0;F<O;F++){let de=d+F+X*le,pe=d+F+X*(le+1),Me=d+(F+1)+X*(le+1),Ee=d+(F+1)+X*le;l.push(de,pe,Ee),l.push(pe,Me,Ee),me+=6}a.addGroup(f,me,M),f+=me,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vy(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=of(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Xy(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let u=a,h=l;for(let d=t;d<r;d+=t){let f=n[d],y=n[d+1];f<a&&(a=f),y<l&&(l=y),f>u&&(u=f),y>h&&(h=y)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ps(s,o,t,a,l,c,0),o}function of(n,e,t,i,r){let s;if(r===r0(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=cp(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=cp(o/i|0,n[o],n[o+1],s);return s&&Or(s,s.next)&&(Rs(s),s=s.next),s}function Wi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Or(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ps(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Jy(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Wy(n,i,r,s):Gy(n)){e.push(l.i,n.i,c.i),Rs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Zy(Wi(n),e),Ps(n,e,t,i,r,s,2)):o===2&&$y(n,e,t,i,r,s):Ps(Wi(n),e,t,i,r,s,1);break}}}function Gy(n){let e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c),y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=d&&y.y>=h&&y.y<=f&&hs(r,a,s,l,o,c,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Wy(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Pt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=Math.min(a,l,c),y=Math.min(u,h,d),w=Math.max(a,l,c),g=Math.max(u,h,d),p=qc(f,y,e,t,i),C=qc(w,g,e,t,i),N=n.prevZ,S=n.nextZ;for(;N&&N.z>=p&&S&&S.z<=C;){if(N.x>=f&&N.x<=w&&N.y>=y&&N.y<=g&&N!==r&&N!==o&&hs(a,u,l,h,c,d,N.x,N.y)&&Pt(N.prev,N,N.next)>=0||(N=N.prevZ,S.x>=f&&S.x<=w&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&hs(a,u,l,h,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;N&&N.z>=p;){if(N.x>=f&&N.x<=w&&N.y>=y&&N.y<=g&&N!==r&&N!==o&&hs(a,u,l,h,c,d,N.x,N.y)&&Pt(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;S&&S.z<=C;){if(S.x>=f&&S.x<=w&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&hs(a,u,l,h,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Zy(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Or(i,r)&&lf(i,t,t.next,r)&&Is(i,r)&&Is(r,i)&&(e.push(i.i,t.i,r.i),Rs(t),Rs(t.next),t=n=r),t=t.next}while(t!==n);return Wi(t)}function $y(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=cf(o,a);o=Wi(o,o.next),l=Wi(l,l.next),Ps(o,e,t,i,r,s,0),Ps(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Xy(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=of(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(e0(c))}r.sort(qy);for(let s=0;s<r.length;s++)t=Yy(r[s],t);return t}function qy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Yy(n,e){let t=jy(n,e);if(!t)return e;let i=cf(t,n);return Wi(i,i.next),Wi(t,t.next)}function jy(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(Or(n,t))return t;do{if(Or(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&af(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);Is(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Ky(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Ky(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function Jy(n,e,t,i){let r=n;do r.z===0&&(r.z=qc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Qy(r)}function Qy(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function qc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function e0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function af(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function hs(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&af(n,e,t,i,r,s,o,a)}function t0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!n0(n,e)&&(Is(n,e)&&Is(e,n)&&i0(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Or(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Or(n,e){return n.x===e.x&&n.y===e.y}function lf(n,e,t,i){let r=Wo(Pt(n,e,t)),s=Wo(Pt(n,e,i)),o=Wo(Pt(t,i,n)),a=Wo(Pt(t,i,e));return!!(r!==s&&o!==a||r===0&&Go(n,t,e)||s===0&&Go(n,i,e)||o===0&&Go(t,n,i)||a===0&&Go(t,e,i))}function Go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Wo(n){return n>0?1:n<0?-1:0}function n0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&lf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Is(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function i0(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function cf(n,e){let t=Yc(n.i,n.x,n.y),i=Yc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function cp(n,e,t,i){let r=Yc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Rs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var jc=class{static triangulate(e,t,i=2){return Vy(e,t,i)}},Ns=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];up(e),dp(i,e);let o=e.length;t.forEach(up);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,dp(i,t[l]);let a=jc.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function up(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function dp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ls=class n extends It{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],y=[],w=[],g=[];for(let p=0;p<u;p++){let C=p*d-o;for(let N=0;N<c;N++){let S=N*h-s;y.push(S,-C,0),w.push(0,0,1),g.push(N/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let N=C+c*p,S=C+c*(p+1),E=C+1+c*(p+1),P=C+1+c*p;f.push(N,S,P),f.push(S,E,P)}this.setIndex(f),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(w,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function qi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(hp(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(hp(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=qi(n[t]);for(let r in i)e[r]=i[r]}return e}function hp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function s0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var uf={clone:qi,merge:Qt},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ha=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ii=class extends Gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fa=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends xi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:s=e,a=2*t-i;break;case Xc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=e,l=2*i-t;break;case Xc:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,y=(i-t)/(r-t),w=y*y,g=w*y,p=-d*g+2*d*w-d*y,C=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*y+1,N=(-1-f)*g+(1.5+f)*w+.5*y,S=f*g-f*w;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+C*o[c+E]+N*o[l+E]+S*o[h+E];return s}},ga=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},ya=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ba=class extends xi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let y=(i-t)/(r-t),w=1-y;for(let g=0;g!==a;++g)s[g]=o[c+g]*w+o[l+g]*y;return s}let d=a*2,f=e-1;for(let y=0;y!==a;++y){let w=o[c+y],g=o[l+y],p=f*d+y*2,C=h[p],N=h[p+1],S=e*d+y*2,E=u[S],P=u[S+1],O=c0(i,t,C,E,r);s[y]=df(O,w,N,P,g)}return s}};function df(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function l0(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function c0(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=df(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=l0(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Vc(e.settings)&&(i.settings={inTangents:br(e.settings.inTangents,Array),outTangents:br(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break;case Wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Vc(this.settings)&&(pp(this.settings.inTangents,e),pp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ay(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Xo,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let y=0;y!==i;++y){let w=t[h+y];if(w!==t[d+y]||w!==t[f+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function pp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ia;var vi=class extends yn{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ms;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};xa.prototype.ValueTypeName="color";var va=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};va.prototype.ValueTypeName="number";var _a=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(s,0,o,c-a,o,c,l);return s}},ks=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends yn{constructor(e,t,i){super(e,t,i)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=ms;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};wa.prototype.ValueTypeName="vector";var Sa=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],y=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hf=new Sa,Ma=class{constructor(e){this.manager=e!==void 0?e:hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Os=class extends Ds{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gc=new xt,fp=new $,mp=new $,Ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new $,$o=new on,Bn=new $,zs=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,$o,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zo,$o,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new $,gp=new Be,yp=new Be,Jt=class extends zs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,gp,yp),t.subVectors(yp,gp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zr=class extends zs{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends Ea{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xr=-90,vr=1,Ta=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(xr,vr,e,t);r.layers=this.layers,this.add(r);let s=new Jt(xr,vr,e,t);s.layers=this.layers,this.add(s);let o=new Jt(xr,vr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(xr,vr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(xr,vr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(xr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Aa=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pu="\\[\\]\\.:\\/",u0=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",d0="[^"+Pu.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",Iu),p0=/(WCOD+)?/.source.replace("WCOD",d0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),g0=new RegExp("^"+h0+p0+f0+m0+"$"),y0=["material","materials","bones","map"],Jc=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){let t=g0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);y0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Jc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var bp=new xt,Zi=class{constructor(e,t,i=0,r=1/0){this.ray=new yi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(e,t=!0,i=[]){return Qc(e,this,i,t),i.sort(xp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Qc(e[r],this,i,t);return i.sort(xp),i}};function xp(n,e){return n.distance-e.distance}function Qc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Qc(s[o],e,t,!0)}}var Fr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ou=class Ou{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ou.prototype.isMatrix2=!0;var eu=Ou;var Us=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ru(n,e,t,i){let r=b0(i);switch(t){case xu:return n*e;case _u:return n*e/r.components*r.byteLength;case Oa:return n*e/r.components*r.byteLength;case Ti:return n*e*2/r.components*r.byteLength;case za:return n*e*2/r.components*r.byteLength;case vu:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Fa:return n*e*4/r.components*r.byteLength;case Gs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:case Va:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Ha:return Math.max(n,8)*Math.max(e,8)/2;case Ga:case Wa:case $a:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:case Xs:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qs:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b0(n){switch(n){case hn:case mu:return{byteLength:1,components:1};case Hr:case gu:case On:return{byteLength:2,components:1};case ka:case Da:return{byteLength:2,components:4};case kn:case La:case Dn:return{byteLength:4,components:1};case yu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kf(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v0(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<h.length;f++){let y=h[d],w=h[f];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++d,h[d]=w)}h.length=d+1;for(let f=0,y=h.length;f<y;f++){let w=h[f];n.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:_0,alphahash_pars_fragment:w0,alphamap_fragment:S0,alphamap_pars_fragment:M0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:I0,begin_vertex:R0,beginnormal_vertex:N0,bsdfs:L0,iridescence_fragment:k0,bumpmap_pars_fragment:D0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:U0,color_fragment:B0,color_pars_fragment:H0,color_pars_vertex:V0,color_vertex:G0,common:W0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:$0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:j0,colorspace_fragment:K0,colorspace_pars_fragment:J0,envmap_fragment:Q0,envmap_common_pars_fragment:eb,envmap_pars_fragment:tb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:pb,envmap_vertex:ib,fog_vertex:rb,fog_pars_vertex:sb,fog_fragment:ob,fog_pars_fragment:ab,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:db,lights_pars_begin:hb,lights_toon_fragment:fb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:yb,lights_physical_fragment:bb,lights_physical_pars_fragment:xb,lights_fragment_begin:vb,lights_fragment_maps:_b,lights_fragment_end:wb,lightprobes_pars_fragment:Sb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Ab,map_fragment:Cb,map_pars_fragment:Pb,map_particle_fragment:Ib,map_particle_pars_fragment:Rb,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Lb,morphinstance_vertex:kb,morphcolor_vertex:Db,morphnormal_vertex:Ob,morphtarget_pars_vertex:zb,morphtarget_vertex:Fb,normal_fragment_begin:Ub,normal_fragment_maps:Bb,normal_pars_fragment:Hb,normal_pars_vertex:Vb,normal_vertex:Gb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:Xb,iridescence_pars_fragment:qb,opaque_fragment:Yb,packing:jb,premultiplied_alpha_fragment:Kb,project_vertex:Jb,dithering_fragment:Qb,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:dx,specularmap_pars_fragment:hx,tonemapping_fragment:px,tonemapping_pars_fragment:fx,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:yx,uv_pars_vertex:bx,uv_vertex:xx,worldpos_vertex:vx,background_vert:_x,background_frag:wx,backgroundCube_vert:Sx,backgroundCube_frag:Mx,cube_vert:Ex,cube_frag:Tx,depth_vert:Ax,depth_frag:Cx,distance_vert:Px,distance_frag:Ix,equirect_vert:Rx,equirect_frag:Nx,linedashed_vert:Lx,linedashed_frag:kx,meshbasic_vert:Dx,meshbasic_frag:Ox,meshlambert_vert:zx,meshlambert_frag:Fx,meshmatcap_vert:Ux,meshmatcap_frag:Bx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Zx,meshphysical_frag:$x,meshtoon_vert:Xx,meshtoon_frag:qx,points_vert:Yx,points_frag:jx,shadow_vert:Kx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:ev},Ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},$n={basic:{uniforms:Qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([Ae.points,Ae.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([Ae.common,Ae.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([Ae.sprite,Ae.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Qt([Ae.common,Ae.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Qt([Ae.lights,Ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};$n.physical={uniforms:Qt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var bl={r:0,b:0,g:0},tv=new xt,Df=new je;Df.set(-1,0,0,0,1,0,0,0,1);function nv(n,e,t,i,r,s){let o=new ze(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){let S=C.backgroundBlurriness>0;N=e.get(N,S)}return N}function y(C){let N=!1,S=f(C);S===null?g(o,a):S&&S.isColor&&(g(S,1),N=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(C,N){let S=f(N);S&&(S.isCubeTexture||S.mapping===Hs)?(c===void 0&&(c=new Rt(new Dr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:qi($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(N.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Df),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Rt(new Ls(2,2),new gn({name:"BackgroundMaterial",uniforms:qi($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function g(C,N){C.getRGB(bl,Cu(n)),t.buffers.color.setClear(bl.r,bl.g,bl.b,N,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,N=1){o.set(C),a=N,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,g(o,a)},render:y,addToRenderList:w,dispose:p}}function iv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(B,W,q,z,X){let ee=!1,ne=h(B,z,q,W);s!==ne&&(s=ne,c(s.object)),ee=f(B,z,q,X),ee&&y(B,z,q,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(B,W,q,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function u(B){return n.deleteVertexArray(B)}function h(B,W,q,z){let X=z.wireframe===!0,ee=i[W.id];ee===void 0&&(ee={},i[W.id]=ee);let ne=B.isInstancedMesh===!0?B.id:0,me=ee[ne];me===void 0&&(me={},ee[ne]=me);let te=me[q.id];te===void 0&&(te={},me[q.id]=te);let le=te[X];return le===void 0&&(le=d(l()),te[X]=le),le}function d(B){let W=[],q=[],z=[];for(let X=0;X<t;X++)W[X]=0,q[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:z,object:B,attributes:{},index:null}}function f(B,W,q,z){let X=s.attributes,ee=W.attributes,ne=0,me=q.getAttributes();for(let te in me)if(me[te].location>=0){let F=X[te],de=ee[te];if(de===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),F===void 0||F.attribute!==de||de&&F.data!==de.data)return!0;ne++}return s.attributesNum!==ne||s.index!==z}function y(B,W,q,z){let X={},ee=W.attributes,ne=0,me=q.getAttributes();for(let te in me)if(me[te].location>=0){let F=ee[te];F===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));let de={};de.attribute=F,F&&F.data&&(de.data=F.data),X[te]=de,ne++}s.attributes=X,s.attributesNum=ne,s.index=z}function w(){let B=s.newAttributes;for(let W=0,q=B.length;W<q;W++)B[W]=0}function g(B){p(B,0)}function p(B,W){let q=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;q[B]=1,z[B]===0&&(n.enableVertexAttribArray(B),z[B]=1),X[B]!==W&&(n.vertexAttribDivisor(B,W),X[B]=W)}function C(){let B=s.newAttributes,W=s.enabledAttributes;for(let q=0,z=W.length;q<z;q++)W[q]!==B[q]&&(n.disableVertexAttribArray(q),W[q]=0)}function N(B,W,q,z,X,ee,ne){ne===!0?n.vertexAttribIPointer(B,W,q,X,ee):n.vertexAttribPointer(B,W,q,z,X,ee)}function S(B,W,q,z){w();let X=z.attributes,ee=q.getAttributes(),ne=W.defaultAttributeValues;for(let me in ee){let te=ee[me];if(te.location>=0){let le=X[me];if(le===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){let F=le.normalized,de=le.itemSize,pe=e.get(le);if(pe===void 0)continue;let Me=pe.buffer,Ee=pe.type,Ie=pe.bytesPerElement,Y=Ee===n.INT||Ee===n.UNSIGNED_INT||le.gpuType===La;if(le.isInterleavedBufferAttribute){let ie=le.data,xe=ie.stride,Te=le.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)p(te.location+ve,ie.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<te.locationSize;ve++)g(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ve=0;ve<te.locationSize;ve++)N(te.location+ve,de/te.locationSize,Ee,F,xe*Ie,(Te+de/te.locationSize*ve)*Ie,Y)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)p(te.location+ie,le.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<te.locationSize;ie++)g(te.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ie=0;ie<te.locationSize;ie++)N(te.location+ie,de/te.locationSize,Ee,F,de*Ie,de/te.locationSize*ie*Ie,Y)}}else if(ne!==void 0){let F=ne[me];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(te.location,F);break;case 3:n.vertexAttrib3fv(te.location,F);break;case 4:n.vertexAttrib4fv(te.location,F);break;default:n.vertexAttrib1fv(te.location,F)}}}}C()}function E(){M();for(let B in i){let W=i[B];for(let q in W){let z=W[q];for(let X in z){let ee=z[X];for(let ne in ee)u(ee[ne].object),delete ee[ne];delete z[X]}}delete i[B]}}function P(B){if(i[B.id]===void 0)return;let W=i[B.id];for(let q in W){let z=W[q];for(let X in z){let ee=z[X];for(let ne in ee)u(ee[ne].object),delete ee[ne];delete z[X]}}delete i[B.id]}function O(B){for(let W in i){let q=i[W];for(let z in q){let X=q[z];if(X[B.id]===void 0)continue;let ee=X[B.id];for(let ne in ee)u(ee[ne].object),delete ee[ne];delete X[B.id]}}}function v(B){for(let W in i){let q=i[W],z=B.isInstancedMesh===!0?B.id:0,X=q[z];if(X!==void 0){for(let ee in X){let ne=X[ee];for(let me in ne)u(ne[me].object),delete ne[me];delete X[ee]}delete q[z],Object.keys(q).length===0&&delete i[W]}}}function M(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfObject:v,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:g,disableUnusedAttributes:C}}function rv(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function sv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(O){return!(O!==wn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){let v=O===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==hn&&O!==Dn&&!v&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:S,maxSamples:E,samples:P}}function ov(n){let e=this,t=null,i=0,r=!1,s=!1,o=new sn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let y=h.clippingPlanes,w=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||y===null||y.length===0||s&&!g)s?u(null):c();else{let C=s?0:i,N=C*4,S=p.clippingState||null;l.value=S,S=u(y,d,N,f);for(let E=0;E!==N;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,y){let w=h!==null?h.length:0,g=null;if(w!==0){if(g=l.value,y!==!0||g===null){let p=f+w*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<p)&&(g=new Float32Array(p));for(let N=0,S=f;N!==w;++N,S+=4)o.copy(h[N]).applyMatrix4(C,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}var Wr=4,av=6,lv=20,cv=256,Ys=new zr,pf=new ze,zu=null,Fu=0,Uu=0,Bu=!1,uv=new $,Yi=new $,vl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=uv}=s;zu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Fu,Uu),this._renderer.xr.enabled=Bu,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:On,format:wn,colorSpace:gs,depthBuffer:!1},r=ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dv(s)),this._blurMaterial=pv(s,e,t),this._ggxMaterial=hv(s,e,t)}return r}_compileMaterial(e){let t=new Rt(new It,e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,i,r,s){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(pf),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Dr,new Rn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,g=w.material,p=!1,C=e.background;C?C.isColor&&(g.color.copy(C),e.background=null,p=!0):(g.color.copy(pf),p=!0);for(let N=0;N<6;N++){let S=N%3;S===0?(l.up.set(0,c[N],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[N],s.y,s.z)):S===1?(l.up.set(0,0,c[N]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[N],s.z)):(l.up.set(0,c[N],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[N]));let E=this._cubeSize;Gr(r,S*E,N>2?E:0,E,E),h.setRenderTarget(r),p&&h.render(w,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=C}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Si||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ys)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:y}=this,w=this._sizeLods[i],g=3*w*(i>y-Wr?i-y+Wr:0),p=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=y-t,Gr(s,g,p,3*w,2*w),r.setRenderTarget(s),r.render(a,Ys),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,Gr(e,g,p,3*w,2*w),r.setRenderTarget(e),r.render(a,Ys)}_blur(e,t,i,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Wr?r-this._lodMax+Wr:0),d=4*(this._cubeSize-u);Gr(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(l,Ys)}};function dv(n){let e=[],t=[],i=n,r=n-Wr+1+av;for(let s=0;s<r;s++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,y=new Float32Array(f*d*h),w=new Float32Array(f*d*h);for(let p=0;p<h;p++){let C=p%3*2/3-1,N=p>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(S,f*d*p);for(let E=0;E<d;E++){let P=u[E*2]*2-1,O=u[E*2+1]*2-1;p===0?Yi.set(1,O,P):p===1?Yi.set(-P,1,-O):p===2?Yi.set(-P,O,1):p===3?Yi.set(-1,O,-P):p===4?Yi.set(-P,-1,O):Yi.set(P,O,-1),Yi.toArray(w,(p*d+E)*f)}}let g=new It;g.setAttribute("position",new gt(y,f)),g.setAttribute("outputDirection",new gt(w,f)),t.push(new Rt(g,null)),i>Wr&&i--}return{lodMeshes:t,sizeLods:e}}function ff(n,e,t){let i=new dn(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hv(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function pv(n,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function mf(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function gf(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _l=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new As(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dr(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Wn});s.uniforms.tEquirect.value=t;let o=new Rt(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Zt),new Ta(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function fv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ia||f===Ra)if(e.has(d)){let y=e.get(d).texture;return a(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let w=new _l(y.height);return w.fromEquirectangularTexture(n,d),e.set(d,w),d.addEventListener("dispose",c),a(w.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,y=f===Ia||f===Ra,w=f===Si||f===Xi;if(y||w){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new vl(n)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let C=d.image;return y&&C&&C.height>0||w&&C&&l(C)?(i===null&&(i=new vl(n)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===Ia?d.mapping=Si:f===Ra&&(d.mapping=Xi),d}function l(d){let f=0,y=6;for(let w=0;w<y;w++)d[w]!==void 0&&f++;return f===y}function c(d){let f=d.target;f.removeEventListener("dispose",c);let y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let y=t.get(f);y!==void 0&&(t.delete(f),y.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function mv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Hi("WebGLRenderer: "+i+" extension not supported."),r}}}function gv(n,e,t,i){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,y=h.attributes.position,w=0;if(y===void 0)return;if(f!==null){let C=f.array;w=f.version;for(let N=0,S=C.length;N<S;N+=3){let E=C[N+0],P=C[N+1],O=C[N+2];d.push(E,P,P,O,O,E)}}else{let C=y.array;w=y.version;for(let N=0,S=C.length/3-1;N<S;N+=3){let E=N+0,P=N+1,O=N+2;d.push(E,P,P,O,O,E)}}let g=new(y.count>=65535?Ms:Ss)(d,1);g.version=w;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function yv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,h*o,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let w=0;for(let g=0;g<f;g++)w+=d[g];t.update(w,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xv(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let M=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],N=0;f===!0&&(N=1),y===!0&&(N=2),w===!0&&(N=3);let S=a.attributes.position.count*N,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let P=new Float32Array(S*E*4*h),O=new vs(P,S,E,h);O.type=Dn,O.needsUpdate=!0;let v=N*4;for(let L=0;L<h;L++){let B=g[L],W=p[L],q=C[L],z=S*E*4*L;for(let X=0;X<B.count;X++){let ee=X*v;f===!0&&(r.fromBufferAttribute(B,X),P[z+ee+0]=r.x,P[z+ee+1]=r.y,P[z+ee+2]=r.z,P[z+ee+3]=0),y===!0&&(r.fromBufferAttribute(W,X),P[z+ee+4]=r.x,P[z+ee+5]=r.y,P[z+ee+6]=r.z,P[z+ee+7]=0),w===!0&&(r.fromBufferAttribute(q,X),P[z+ee+8]=r.x,P[z+ee+9]=r.y,P[z+ee+10]=r.z,P[z+ee+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:O,size:new Be(S,E)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let w=0;w<c.length;w++)f+=c[w];let y=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function vv(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var _v={[au]:"LINEAR_TONE_MAPPING",[lu]:"REINHARD_TONE_MAPPING",[cu]:"CINEON_TONE_MAPPING",[uu]:"ACES_FILMIC_TONE_MAPPING",[hu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function wv(n,e,t,i,r,s){let o=new dn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new It;c.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new un([0,2,0,0,2,0],2));let u=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Rt(c,u),d=new zr(-1,1,1,-1,0,1),f=null,y=null,w=!1,g,p=null,C=[],N=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let P=0;P<C.length;P++){let O=C[P];O.setSize&&O.setSize(S,E)}},this.setEffects=function(S){C=S,N=C.length>0&&C[0].isRenderPass===!0;let E=o.width,P=o.height;C.length>0&&a===null&&(a=new dn(E,P,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new dn(E,P,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<C.length;O++){let v=C[O];v.setSize&&v.setSize(E,P)}},this.begin=function(S,E){if(w||S.toneMapping===Ln&&C.length===0)return!1;if(p=E,E!==null){let P=E.width,O=E.height;(o.width!==P||o.height!==O)&&this.setSize(P,O)}return N===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return N},this.end=function(S,E){S.toneMapping=g,w=!0;let P=o,O=a;for(let v=0;v<C.length;v++){let M=C[v];M.enabled!==!1&&(M.render(S,O,P,E),M.needsSwap!==!1&&(P=O,O=O===a?l:a))}if(f!==S.outputColorSpace||y!==S.toneMapping){f=S.outputColorSpace,y=S.toneMapping,u.defines={},ot.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");let v=_v[y];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=P.texture,S.setRenderTarget(p),S.render(h,d),p=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Of=new $t,Gu=new bi(1,1),zf=new vs,Ff=new oa,Uf=new As,yf=[],bf=[],xf=new Float32Array(16),vf=new Float32Array(9),_f=new Float32Array(4);function $r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=yf[r];if(s===void 0&&(s=new Float32Array(r),yf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),zt(t,i)}}function Cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;vf.set(i),n.uniformMatrix3fv(this.addr,!1,vf),zt(t,i)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;xf.set(i),n.uniformMatrix4fv(this.addr,!1,xf),zt(t,i)}}function Iv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Fv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=t.isReversedDepthBuffer()?yl:gl,s=Gu):s=Of,t.setTexture2D(e||s,r)}function Uv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ff,r)}function Bv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uf,r)}function Hv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zf,r)}function Vv(n){switch(n){case 5126:return Sv;case 35664:return Mv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Rv;case 35668:case 35672:return Nv;case 35669:case 35673:return Lv;case 5125:return kv;case 36294:return Dv;case 36295:return Ov;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Gv(n,e){n.uniform1fv(this.addr,e)}function Wv(n,e){let t=$r(e,this.size,2);n.uniform2fv(this.addr,t)}function Zv(n,e){let t=$r(e,this.size,3);n.uniform3fv(this.addr,t)}function $v(n,e){let t=$r(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){let t=$r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qv(n,e){let t=$r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yv(n,e){let t=$r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jv(n,e){n.uniform1iv(this.addr,e)}function Kv(n,e){n.uniform2iv(this.addr,e)}function Jv(n,e){n.uniform3iv(this.addr,e)}function Qv(n,e){n.uniform4iv(this.addr,e)}function e_(n,e){n.uniform1uiv(this.addr,e)}function t_(n,e){n.uniform2uiv(this.addr,e)}function n_(n,e){n.uniform3uiv(this.addr,e)}function i_(n,e){n.uniform4uiv(this.addr,e)}function r_(n,e,t){let i=this.cache,r=e.length,s=Ml(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gu:o=Of;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function s_(n,e,t){let i=this.cache,r=e.length,s=Ml(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ff,s[o])}function o_(n,e,t){let i=this.cache,r=e.length,s=Ml(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Uf,s[o])}function a_(n,e,t){let i=this.cache,r=e.length,s=Ml(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zf,s[o])}function l_(n){switch(n){case 5126:return Gv;case 35664:return Wv;case 35665:return Zv;case 35666:return $v;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return jv;case 35667:case 35671:return Kv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}var Wu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vv(t.type)}},Zu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l_(t.type)}},$u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function c_(n,e,t){let i=n.name,r=i.length;for(Hu.lastIndex=0;;){let s=Hu.exec(i),o=Hu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wf(t,c===void 0?new Wu(a,n,e):new Zu(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new $u(a),wf(t,h)),t=h}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);c_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Sf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var u_=37297,d_=0;function h_(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Mf=new je;function p_(n){ot._getMatrix(Mf,ot.workingColorSpace,n);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ef(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+h_(n.getShaderSource(e),a)}else return s}function f_(n,e){let t=p_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var m_={[au]:"Linear",[lu]:"Reinhard",[cu]:"Cineon",[uu]:"ACESFilmic",[hu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function g_(n,e){let t=m_[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xl=new $;function y_(){ot.getLuminanceCoefficients(xl);let n=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function x_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function Tf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(n){return n.replace(__,S_)}var w_=new Map;function S_(n,e){let t=nt[e];if(t===void 0){let i=w_.get(e);if(i!==void 0)t=nt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xu(t)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(n){return n.replace(M_,E_)}function E_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var T_={[Bs]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function A_(n){return T_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C_={[Si]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function P_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":C_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var I_={[Xi]:"ENVMAP_MODE_REFRACTION"};function R_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":I_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N_={[Pa]:"ENVMAP_BLENDING_MULTIPLY",[Hp]:"ENVMAP_BLENDING_MIX",[Vp]:"ENVMAP_BLENDING_ADD"};function L_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":N_[n.combine]||"ENVMAP_BLENDING_NONE"}function k_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D_(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=A_(t),c=P_(t),u=R_(t),h=L_(t),d=k_(t),f=b_(t),y=x_(s),w=r.createProgram(),g,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ln?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Xu(o),o=Tf(o,t),o=Af(o,t),a=Xu(a),a=Tf(a,t),a=Af(a,t),o=Cf(o),a=Cf(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let N=C+g+o,S=C+p+a,E=Sf(r,r.VERTEX_SHADER,N),P=Sf(r,r.FRAGMENT_SHADER,S);r.attachShader(w,E),r.attachShader(w,P),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function O(B){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(w)||"",q=r.getShaderInfoLog(E)||"",z=r.getShaderInfoLog(P)||"",X=W.trim(),ee=q.trim(),ne=z.trim(),me=!0,te=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,w,E,P);else{let le=Ef(r,E,"vertex"),F=Ef(r,P,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+le+`
`+F)}else X!==""?Ze("WebGLProgram: Program Info Log:",X):(ee===""||ne==="")&&(te=!1);te&&(B.diagnostics={runnable:me,programLog:X,vertexShader:{log:ee,prefix:g},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(E),r.deleteShader(P),v=new Zr(r,w),M=v_(r,w)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,u_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=E,this.fragmentShader=P,this}var O_=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yu(e),t.set(e,i)),i}},Yu=class{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}};function z_(n){return n===Ti||n===Xs||n===qs}function F_(n,e,t,i,r,s){let o=new Cr,a=new qu,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function w(v,M,L,B,W,q){let z=B.fog,X=W.geometry,ee=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,me=e.get(v.envMap||ee,ne),te=me&&me.mapping===Hs?me.image.height:null,le=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=F!==void 0?F.length:0,pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let Me,Ee,Ie,Y;if(le){let St=$n[le];Me=St.vertexShader,Ee=St.fragmentShader}else{Me=v.vertexShader,Ee=v.fragmentShader;let St=a.getVertexShaderStage(v),dt=a.getFragmentShaderStage(v);a.update(v,St,dt),Ie=St.id,Y=dt.id}let ie=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Te=W.isInstancedMesh===!0,ve=W.isBatchedMesh===!0,Ve=!!v.map,at=!!v.matcap,Ke=!!me,We=!!v.aoMap,st=!!v.lightMap,Je=!!v.bumpMap&&v.wireframe===!1,ct=!!v.normalMap,ut=!!v.displacementMap,R=!!v.emissiveMap,U=!!v.metalnessMap,ae=!!v.roughnessMap,A=v.anisotropy>0,he=v.clearcoat>0,ye=v.dispersion>0,T=v.retroreflectivity>0,m=v.iridescence>0,b=v.sheen>0,x=v.transmission>0,I=A&&!!v.anisotropyMap,V=he&&!!v.clearcoatMap,Z=he&&!!v.clearcoatNormalMap,G=he&&!!v.clearcoatRoughnessMap,j=m&&!!v.iridescenceMap,ce=m&&!!v.iridescenceThicknessMap,re=b&&!!v.sheenColorMap,ue=b&&!!v.sheenRoughnessMap,be=!!v.specularMap,Re=!!v.specularColorMap,we=!!v.specularIntensityMap,se=x&&!!v.transmissionMap,k=x&&!!v.thicknessMap,fe=!!v.gradientMap,oe=!!v.alphaMap,_e=v.alphaTest>0,Se=!!v.alphaHash,ge=!!v.extensions,Ge=Ln;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let Fe={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:Me,fragmentShader:Ee,defines:v.defines,customVertexShaderID:Ie,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ve,batchingColor:ve&&W._colorsTexture!==null,instancing:Te,instancingColor:Te&&W.instanceColor!==null,instancingMorph:Te&&W.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:at,envMap:Ke,envMapMode:Ke&&me.mapping,envMapCubeUVHeight:te,aoMap:We,lightMap:st,bumpMap:Je,normalMap:ct,displacementMap:ut,emissiveMap:R,normalMapObjectSpace:ct&&v.normalMapType===Zp,normalMapTangentSpace:ct&&v.normalMapType===ml,packedNormalMap:ct&&v.normalMapType===ml&&z_(v.normalMap.format),metalnessMap:U,roughnessMap:ae,anisotropy:A,anisotropyMap:I,clearcoat:he,clearcoatMap:V,clearcoatNormalMap:Z,clearcoatRoughnessMap:G,dispersion:ye,retroreflection:T,iridescence:m,iridescenceMap:j,iridescenceThicknessMap:ce,sheen:b,sheenColorMap:re,sheenRoughnessMap:ue,specularMap:be,specularColorMap:Re,specularIntensityMap:we,transmission:x,transmissionMap:se,thicknessMap:k,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Br&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:_e,alphaHash:Se,combine:v.combine,mapUv:Ve&&y(v.map.channel),aoMapUv:We&&y(v.aoMap.channel),lightMapUv:st&&y(v.lightMap.channel),bumpMapUv:Je&&y(v.bumpMap.channel),normalMapUv:ct&&y(v.normalMap.channel),displacementMapUv:ut&&y(v.displacementMap.channel),emissiveMapUv:R&&y(v.emissiveMap.channel),metalnessMapUv:U&&y(v.metalnessMap.channel),roughnessMapUv:ae&&y(v.roughnessMap.channel),anisotropyMapUv:I&&y(v.anisotropyMap.channel),clearcoatMapUv:V&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Z&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:re&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&y(v.sheenRoughnessMap.channel),specularMapUv:be&&y(v.specularMap.channel),specularColorMapUv:Re&&y(v.specularColorMap.channel),specularIntensityMapUv:we&&y(v.specularIntensityMap.channel),transmissionMapUv:se&&y(v.transmissionMap.channel),thicknessMapUv:k&&y(v.thicknessMap.channel),alphaMapUv:oe&&y(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ct||A),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Ve||oe),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:R&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(M,v),C(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function C(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function N(v){let M=f[v.type],L;if(M){let B=$n[M];L=uf.clone(B.uniforms)}else L=v.uniforms;return L}function S(v,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new D_(n,M,v,r),c.push(L),u.set(M,L)),L}function E(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function P(v){a.remove(v)}function O(){a.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:N,acquireProgram:S,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:O}}function U_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function If(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,y,w,g,p){let C=n[e];return C===void 0?(C={id:d.id,object:d,geometry:f,material:y,materialVariant:o(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:p},n[e]=C):(C.id=d.id,C.object=d,C.geometry=f,C.material=y,C.materialVariant=o(d),C.groupOrder=w,C.renderOrder=d.renderOrder,C.z=g,C.group=p),e++,C}function l(d,f,y,w,g,p,C){C.reversedDepth===!0&&(g=-g);let N=a(d,f,y,w,g,p);y.transmission>0?i.push(N):y.transparent===!0?r.push(N):t.push(N)}function c(d,f,y,w,g,p){let C=a(d,f,y,w,g,p);y.transmission>0?i.unshift(C):y.transparent===!0?r.unshift(C):t.unshift(C)}function u(d,f){t.length>1&&t.sort(d||B_),i.length>1&&i.sort(f||If),r.length>1&&r.sort(f||If)}function h(){for(let d=e,f=n.length;d<f;d++){let y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function H_(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Rf,n.set(i,[o])):r>=s.length?(o=new Rf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new ze};break;case"SpotLight":t={position:new $,direction:new $,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function G_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var W_=0;function Z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $_(n){let e=new V_,t=G_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let r=new $,s=new xt,o=new xt;function a(c){let u=0,h=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let f=0,y=0,w=0,g=0,p=0,C=0,N=0,S=0,E=0,P=0,O=0,v=0,M=0,L=0;c.sort(Z_);for(let W=0,q=c.length;W<q;W++){let z=c[W],X=z.color,ee=z.intensity,ne=z.distance,me=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ti?me=z.shadow.map.texture:me=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=X.r*ee,h+=X.g*ee,d+=X.b*ee;else if(z.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(z.sh.coefficients[te],ee);L++}else if(z.isSunLight){let te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let le=z.shadow,F=t.get(z);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[y]=F,i.sunShadowMap[y]=me;let de=le.getViewportCount();for(let pe=0;pe<de;pe++)i.sunShadowMatrix[w+pe]=le.getMatrix(pe),i.sunShadowCascade[w+pe]=le._cascadeData[pe];w+=de,y++}i.sun[f]=te,f++}else if(z.isDirectionalLight){let te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let le=z.shadow,F=t.get(z);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=me,i.directionalShadowMatrix[g]=z.shadow.matrix,E++}i.directional[g]=te,g++}else if(z.isSpotLight){let te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(X).multiplyScalar(ee),te.distance=ne,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,i.spot[C]=te;let le=z.shadow;if(z.map&&(i.spotLightMap[v]=z.map,v++,le.updateMatrices(z),z.castShadow&&M++),i.spotLightMatrix[C]=le.matrix,z.castShadow){let F=t.get(z);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,i.spotShadow[C]=F,i.spotShadowMap[C]=me,O++}C++}else if(z.isRectAreaLight){let te=e.get(z);te.color.copy(X).multiplyScalar(ee),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),i.rectArea[N]=te,N++}else if(z.isPointLight){let te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){let le=z.shadow,F=t.get(z);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,F.shadowCameraNear=le.camera.near,F.shadowCameraFar=le.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=z.shadow.matrix,P++}i.point[p]=te,p++}else if(z.isHemisphereLight){let te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(ee),te.groundColor.copy(z.groundColor).multiplyScalar(ee),i.hemi[S]=te,S++}}N>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let B=i.hash;(B.sunLength!==f||B.directionalLength!==g||B.pointLength!==p||B.spotLength!==C||B.rectAreaLength!==N||B.hemiLength!==S||B.numSunShadows!==y||B.numDirectionalShadows!==E||B.numPointShadows!==P||B.numSpotShadows!==O||B.numSpotMaps!==v||B.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=C,i.rectArea.length=N,i.point.length=p,i.hemi.length=S,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=P,i.pointShadowMap.length=P,i.pointShadowMatrix.length=P,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=L,B.sunLength=f,B.directionalLength=g,B.pointLength=p,B.spotLength=C,B.rectAreaLength=N,B.hemiLength=S,B.numSunShadows=y,B.numDirectionalShadows=E,B.numPointShadows=P,B.numSpotShadows=O,B.numSpotMaps=v,B.numLightProbes=L,i.version=W_++)}function l(c,u){let h=0,d=0,f=0,y=0,w=0,g=0,p=u.matrixWorldInverse;for(let C=0,N=c.length;C<N;C++){let S=c[C];if(S.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),h++}else if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(S.isSpotLight){let E=i.spot[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),y++}else if(S.isRectAreaLight){let E=i.rectArea[w];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),w++}else if(S.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Nf(n){let e=new $_(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function X_(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Nf(n),e.set(r,[a])):s>=o.length?(a=new Nf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j_=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],K_=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Lf=new xt,js=new $,Vu=new $;function J_(n,e,t){let i=new Nr,r=new Be,s=new Be,o=new Ct,a=new pa,l=new fa,c={},u=t.maxTextureSize,h={[wi]:an,[an]:wi,[Vt]:Vt},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new It;y.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Rt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let p=this.type;this.render=function(P,O,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===wp&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let M=n.getRenderTarget(),L=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Wn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let q=p!==this.type;q&&O.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=P.length;z<X;z++){let ee=P[z],ne=ee.shadow;if(ne===void 0){Ze("WebGLShadowMap:",ee,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);let me=ne.getFrameExtents();r.multiply(me),s.copy(ne.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,ne.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,ne.mapSize.y=s.y));let te=n.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=te,ne.map===null||q===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===Ur){if(ee.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new dn(r.x,r.y,{format:Ti,type:On,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),ne.map.texture.name=ee.name+".shadowMap",ne.map.depthTexture=new bi(r.x,r.y,Dn),ne.map.depthTexture.name=ee.name+".shadowMapDepth",ne.map.depthTexture.format=Vn,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Bt,ne.map.depthTexture.magFilter=Bt}else ee.isPointLight?(ne.map=new _l(r.x),ne.map.depthTexture=new da(r.x,kn)):(ne.map=new dn(r.x,r.y),ne.map.depthTexture=new bi(r.x,r.y,kn)),ne.map.depthTexture.name=ee.name+".shadowMap",ne.map.depthTexture.format=Vn,this.type===Bs?(ne.map.depthTexture.compareFunction=te?yl:gl,ne.map.depthTexture.minFilter=Zt,ne.map.depthTexture.magFilter=Zt):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Bt,ne.map.depthTexture.magFilter=Bt);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==r.x||ne.map.height!==r.y)&&ne.map.setSize(r.x,r.y);let le=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();ee.isPointLight!==!0&&ne.updateMatrices(ee,v);for(let F=0;F<le;F++){let de=ne.getCamera(F);if(ee.isPointLight){let pe=ne.camera,Me=ne.matrix,Ee=ee.distance||pe.far;Ee!==pe.far&&(pe.far=Ee,pe.updateProjectionMatrix()),js.setFromMatrixPosition(ee.matrixWorld),pe.position.copy(js),Vu.copy(pe.position),Vu.add(j_[F]),pe.up.copy(K_[F]),pe.lookAt(Vu),pe.updateMatrixWorld(),Me.makeTranslation(-js.x,-js.y,-js.z),Lf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Lf,pe.coordinateSystem,pe.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)n.setRenderTarget(ne.map,F),n.clear();else{F===0&&(n.setRenderTarget(ne.map),n.clear());let pe=ne.getViewport(F);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),W.viewport(o)}i=ne.getFrustum(F),S(O,v,de,ee,this.type)}ne.isPointLightShadow!==!0&&this.type===Ur&&C(ne,v),ne.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,L,B)};function C(P,O){let v=e.update(w);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null?P.mapPass=new dn(r.x,r.y,{format:Ti,type:On}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value.set(P.map.width,P.map.height),d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(O,null,v,d,w,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(O,null,v,f,w,null)}function N(P,O,v,M){let L=null,B=v.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)L=B;else if(L=v.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let W=L.uuid,q=O.uuid,z=c[W];z===void 0&&(z={},c[W]=z);let X=z[q];X===void 0&&(X=L.clone(),z[q]=X,O.addEventListener("dispose",E)),L=X}if(L.visible=O.visible,L.wireframe=O.wireframe,M===Ur?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:h[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let W=n.properties.get(L);W.light=v}return L}function S(P,O,v,M,L){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===Ur)&&(!P.frustumCulled||P.intersectsFrustum(i))){P.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,P.matrixWorld);let q=e.update(P),z=P.material;if(Array.isArray(z)){let X=q.groups;for(let ee=0,ne=X.length;ee<ne;ee++){let me=X[ee],te=z[me.materialIndex];if(te&&te.visible){let le=N(P,te,M,L);P.onBeforeShadow(n,P,O,v,q,le,me),n.renderBufferDirect(v,null,q,le,P,me),P.onAfterShadow(n,P,O,v,q,le,me)}}}else if(z.visible){let X=N(P,z,M,L);P.onBeforeShadow(n,P,O,v,q,X,null),n.renderBufferDirect(v,null,q,X,P,null),P.onAfterShadow(n,P,O,v,q,X,null)}}let W=P.children;for(let q=0,z=W.length;q<z;q++)S(W[q],O,v,M,L)}function E(P){P.target.removeEventListener("dispose",E);for(let v in c){let M=c[v],L=P.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function Q_(n,e){function t(){let k=!1,fe=new Ct,oe=null,_e=new Ct(0,0,0,0);return{setMask:function(Se){oe!==Se&&!k&&(n.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){k=Se},setClear:function(Se,ge,Ge,Fe,St){St===!0&&(Se*=Fe,ge*=Fe,Ge*=Fe),fe.set(Se,ge,Ge,Fe),_e.equals(fe)===!1&&(n.clearColor(Se,ge,Ge,Fe),_e.copy(fe))},reset:function(){k=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,oe=null,_e=null,Se=null;return{setReversed:function(ge){if(fe!==ge){let Ge=e.get("EXT_clip_control");ge?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),fe=ge;let Fe=Se;Se=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(ge){ge?ie(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ge){oe!==ge&&!k&&(n.depthMask(ge),oe=ge)},setFunc:function(ge){if(fe&&(ge=nf[ge]),_e!==ge){switch(ge){case Yo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case ea:n.depthFunc(n.GREATER);break;case ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ge}},setLocked:function(ge){k=ge},setClear:function(ge){Se!==ge&&(Se=ge,fe&&(ge=1-ge),n.clearDepth(ge))},reset:function(){k=!1,oe=null,_e=null,Se=null,fe=!1}}}function r(){let k=!1,fe=null,oe=null,_e=null,Se=null,ge=null,Ge=null,Fe=null,St=null;return{setTest:function(dt){k||(dt?ie(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(dt){fe!==dt&&!k&&(n.stencilMask(dt),fe=dt)},setFunc:function(dt,Sn,zn){(oe!==dt||_e!==Sn||Se!==zn)&&(n.stencilFunc(dt,Sn,zn),oe=dt,_e=Sn,Se=zn)},setOp:function(dt,Sn,zn){(ge!==dt||Ge!==Sn||Fe!==zn)&&(n.stencilOp(dt,Sn,zn),ge=dt,Ge=Sn,Fe=zn)},setLocked:function(dt){k=dt},setClear:function(dt){St!==dt&&(n.clearStencil(dt),St=dt)},reset:function(){k=!1,fe=null,oe=null,_e=null,Se=null,ge=null,Ge=null,Fe=null,St=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,y=[],w=null,g=!1,p=null,C=null,N=null,S=null,E=null,P=null,O=null,v=new ze(0,0,0),M=0,L=!1,B=null,W=null,q=null,z=null,X=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,me=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(te)[1]),ne=me>=1):te.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ne=me>=2);let le=null,F={},de=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Me=new Ct().fromArray(de),Ee=new Ct().fromArray(pe);function Ie(k,fe,oe,_e){let Se=new Uint8Array(4),ge=n.createTexture();n.bindTexture(k,ge),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<oe;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(fe+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ge}let Y={};Y[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(wr),Je(!1),ct(tu),ie(n.CULL_FACE),We(Wn);function ie(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function xe(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function Te(k,fe){return d[k]!==fe?(n.bindFramebuffer(k,fe),d[k]=fe,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function ve(k,fe){let oe=y,_e=!1;if(k){oe=f.get(fe),oe===void 0&&(oe=[],f.set(fe,oe));let Se=k.textures;if(oe.length!==Se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ge=Se.length;ge<Ge;ge++)oe[ge]=n.COLOR_ATTACHMENT0+ge;oe.length=Se.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function Ve(k){return w!==k?(n.useProgram(k),w=k,!0):!1}let at={[$i]:n.FUNC_ADD,[Mp]:n.FUNC_SUBTRACT,[Ep]:n.FUNC_REVERSE_SUBTRACT};at[Tp]=n.MIN,at[Ap]=n.MAX;let Ke={[Cp]:n.ZERO,[Pp]:n.ONE,[Ip]:n.SRC_COLOR,[su]:n.SRC_ALPHA,[Op]:n.SRC_ALPHA_SATURATE,[kp]:n.DST_COLOR,[Np]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[ou]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA,[zp]:n.CONSTANT_COLOR,[Fp]:n.ONE_MINUS_CONSTANT_COLOR,[Up]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function We(k,fe,oe,_e,Se,ge,Ge,Fe,St,dt){if(k===Wn){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),k!==Sp){if(k!==p||dt!==L){if((C!==$i||E!==$i)&&(n.blendEquation(n.FUNC_ADD),C=$i,E=$i),dt)switch(k){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",k);break}else switch(k){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case iu:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",k);break}N=null,S=null,P=null,O=null,v.set(0,0,0),M=0,p=k,L=dt}return}Se=Se||fe,ge=ge||oe,Ge=Ge||_e,(fe!==C||Se!==E)&&(n.blendEquationSeparate(at[fe],at[Se]),C=fe,E=Se),(oe!==N||_e!==S||ge!==P||Ge!==O)&&(n.blendFuncSeparate(Ke[oe],Ke[_e],Ke[ge],Ke[Ge]),N=oe,S=_e,P=ge,O=Ge),(Fe.equals(v)===!1||St!==M)&&(n.blendColor(Fe.r,Fe.g,Fe.b,St),v.copy(Fe),M=St),p=k,L=!1}function st(k,fe){k.side===Vt?xe(n.CULL_FACE):ie(n.CULL_FACE);let oe=k.side===an;fe&&(oe=!oe),Je(oe),k.blending===Br&&k.transparent===!1?We(Wn):We(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let _e=k.stencilWrite;a.setTest(_e),_e&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),R(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){B!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),B=k)}function ct(k){k!==vp?(ie(n.CULL_FACE),k!==W&&(k===tu?n.cullFace(n.BACK):k===_p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),W=k}function ut(k){k!==q&&(ne&&n.lineWidth(k),q=k)}function R(k,fe,oe){k?(ie(n.POLYGON_OFFSET_FILL),(z!==fe||X!==oe)&&(z=fe,X=oe,o.getReversed()&&(fe=-fe),n.polygonOffset(fe,oe))):xe(n.POLYGON_OFFSET_FILL)}function U(k){k?ie(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ae(k){k===void 0&&(k=n.TEXTURE0+ee-1),le!==k&&(n.activeTexture(k),le=k)}function A(k,fe,oe){oe===void 0&&(le===null?oe=n.TEXTURE0+ee-1:oe=le);let _e=F[oe];_e===void 0&&(_e={type:void 0,texture:void 0},F[oe]=_e),(_e.type!==k||_e.texture!==fe)&&(le!==oe&&(n.activeTexture(oe),le=oe),n.bindTexture(k,fe||Y[k]),_e.type=k,_e.texture=fe)}function he(){let k=F[le];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function m(){try{n.texSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function b(){try{n.texSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function x(){try{n.compressedTexSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function I(){try{n.compressedTexSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function V(){try{n.texStorage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function Z(){try{n.texStorage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function G(){try{n.texImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function j(){try{n.texImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function ce(k){return h[k]!==void 0?h[k]:n.getParameter(k)}function re(k,fe){h[k]!==fe&&(n.pixelStorei(k,fe),h[k]=fe)}function ue(k){Me.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function be(k){Ee.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ee.copy(k))}function Re(k,fe){let oe=c.get(fe);oe===void 0&&(oe=new WeakMap,c.set(fe,oe));let _e=oe.get(k);_e===void 0&&(_e=n.getUniformBlockIndex(fe,k.name),oe.set(k,_e))}function we(k,fe){let _e=c.get(fe).get(k);l.get(fe)!==_e&&(n.uniformBlockBinding(fe,_e,k.__bindingPointIndex),l.set(fe,_e))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,F={},d={},f=new WeakMap,y=[],w=null,g=!1,p=null,C=null,N=null,S=null,E=null,P=null,O=null,v=new ze(0,0,0),M=0,L=!1,B=null,W=null,q=null,z=null,X=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:xe,bindFramebuffer:Te,drawBuffers:ve,useProgram:Ve,setBlending:We,setMaterial:st,setFlipSided:Je,setCullFace:ct,setLineWidth:ut,setPolygonOffset:R,setScissorTest:U,activeTexture:ae,bindTexture:A,unbindTexture:he,compressedTexImage2D:ye,compressedTexImage3D:T,texImage2D:G,texImage3D:j,pixelStorei:re,getParameter:ce,updateUBOMapping:Re,uniformBlockBinding:we,texStorage2D:V,texStorage3D:Z,texSubImage2D:m,texSubImage3D:b,compressedTexSubImage2D:x,compressedTexSubImage3D:I,scissor:ue,viewport:be,reset:se}}function ew(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set,d,f=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,m){return y?new OffscreenCanvas(T,m):bs("canvas")}function g(T,m,b){let x=1,I=ye(T);if((I.width>b||I.height>b)&&(x=b/Math.max(I.width,I.height)),x<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let V=Math.floor(x*I.width),Z=Math.floor(x*I.height);d===void 0&&(d=w(V,Z));let G=m?w(V,Z):d;return G.width=V,G.height=Z,G.getContext("2d").drawImage(T,0,0,V,Z),Ze("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+V+"x"+Z+")."),G}else return"data"in T&&Ze("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),T;return T}function p(T){return T.generateMipmaps}function C(T){n.generateMipmap(T)}function N(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,m,b,x,I,V=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z;x&&(Z=e.get("EXT_texture_norm16"),Z||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=m;if(m===n.RED&&(b===n.FLOAT&&(G=n.R32F),b===n.HALF_FLOAT&&(G=n.R16F),b===n.UNSIGNED_BYTE&&(G=n.R8),b===n.UNSIGNED_SHORT&&Z&&(G=Z.R16_EXT),b===n.SHORT&&Z&&(G=Z.R16_SNORM_EXT)),m===n.RED_INTEGER&&(b===n.UNSIGNED_BYTE&&(G=n.R8UI),b===n.UNSIGNED_SHORT&&(G=n.R16UI),b===n.UNSIGNED_INT&&(G=n.R32UI),b===n.BYTE&&(G=n.R8I),b===n.SHORT&&(G=n.R16I),b===n.INT&&(G=n.R32I)),m===n.RG&&(b===n.FLOAT&&(G=n.RG32F),b===n.HALF_FLOAT&&(G=n.RG16F),b===n.UNSIGNED_BYTE&&(G=n.RG8),b===n.UNSIGNED_SHORT&&Z&&(G=Z.RG16_EXT),b===n.SHORT&&Z&&(G=Z.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(b===n.UNSIGNED_BYTE&&(G=n.RG8UI),b===n.UNSIGNED_SHORT&&(G=n.RG16UI),b===n.UNSIGNED_INT&&(G=n.RG32UI),b===n.BYTE&&(G=n.RG8I),b===n.SHORT&&(G=n.RG16I),b===n.INT&&(G=n.RG32I)),m===n.RGB_INTEGER&&(b===n.UNSIGNED_BYTE&&(G=n.RGB8UI),b===n.UNSIGNED_SHORT&&(G=n.RGB16UI),b===n.UNSIGNED_INT&&(G=n.RGB32UI),b===n.BYTE&&(G=n.RGB8I),b===n.SHORT&&(G=n.RGB16I),b===n.INT&&(G=n.RGB32I)),m===n.RGBA_INTEGER&&(b===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),b===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),b===n.UNSIGNED_INT&&(G=n.RGBA32UI),b===n.BYTE&&(G=n.RGBA8I),b===n.SHORT&&(G=n.RGBA16I),b===n.INT&&(G=n.RGBA32I)),m===n.RGB&&(b===n.UNSIGNED_SHORT&&Z&&(G=Z.RGB16_EXT),b===n.SHORT&&Z&&(G=Z.RGB16_SNORM_EXT),b===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),b===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),m===n.RGBA){let j=V?ys:ot.getTransfer(I);b===n.FLOAT&&(G=n.RGBA32F),b===n.HALF_FLOAT&&(G=n.RGBA16F),b===n.UNSIGNED_BYTE&&(G=j===pt?n.SRGB8_ALPHA8:n.RGBA8),b===n.UNSIGNED_SHORT&&Z&&(G=Z.RGBA16_EXT),b===n.SHORT&&Z&&(G=Z.RGBA16_SNORM_EXT),b===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),b===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(T,m){let b;return T?m===null||m===kn||m===Vr?b=n.DEPTH24_STENCIL8:m===Dn?b=n.DEPTH32F_STENCIL8:m===Hr&&(b=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===kn||m===Vr?b=n.DEPTH_COMPONENT24:m===Dn?b=n.DEPTH_COMPONENT32F:m===Hr&&(b=n.DEPTH_COMPONENT16),b}function P(T,m){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==Zt?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function O(T){let m=T.target;m.removeEventListener("dispose",O),M(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&h.delete(m)}function v(T){let m=T.target;m.removeEventListener("dispose",v),B(m)}function M(T){let m=i.get(T);if(m.__webglInit===void 0)return;let b=T.source,x=f.get(b);if(x){let I=x[m.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(T),Object.keys(x).length===0&&f.delete(b)}i.remove(T)}function L(T){let m=i.get(T);n.deleteTexture(m.__webglTexture);let b=T.source,x=f.get(b);delete x[m.__cacheKey],o.memory.textures--}function B(T){let m=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let x=0;x<6;x++){if(Array.isArray(m.__webglFramebuffer[x]))for(let I=0;I<m.__webglFramebuffer[x].length;I++)n.deleteFramebuffer(m.__webglFramebuffer[x][I]);else n.deleteFramebuffer(m.__webglFramebuffer[x]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[x])}else{if(Array.isArray(m.__webglFramebuffer))for(let x=0;x<m.__webglFramebuffer.length;x++)n.deleteFramebuffer(m.__webglFramebuffer[x]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let x=0;x<m.__webglColorRenderbuffer.length;x++)m.__webglColorRenderbuffer[x]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[x]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let b=T.textures;for(let x=0,I=b.length;x<I;x++){let V=i.get(b[x]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(b[x])}i.remove(T)}let W=0;function q(){W=0}function z(){return W}function X(T){W=T}function ee(){let T=W;return T>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,T}function ne(T){let m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function me(T,m){let b=i.get(T);if(T.isVideoTexture&&A(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&b.__version!==T.version){let x=T.image;if(x===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(x.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(b,T,m);return}}else T.isExternalTexture&&(b.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,b.__webglTexture,n.TEXTURE0+m)}function te(T,m){let b=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&b.__version!==T.version){xe(b,T,m);return}else T.isExternalTexture&&(b.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,b.__webglTexture,n.TEXTURE0+m)}function le(T,m){let b=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&b.__version!==T.version){xe(b,T,m);return}t.bindTexture(n.TEXTURE_3D,b.__webglTexture,n.TEXTURE0+m)}function F(T,m){let b=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&b.__version!==T.version){Te(b,T,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+m)}let de={[Sr]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},pe={[Bt]:n.NEAREST,[Gp]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Me={[Xp]:n.NEVER,[Jp]:n.ALWAYS,[qp]:n.LESS,[gl]:n.LEQUAL,[Yp]:n.EQUAL,[yl]:n.GEQUAL,[jp]:n.GREATER,[Kp]:n.NOTEQUAL};function Ee(T,m){if(m.type===Dn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Zt||m.magFilter===Na||m.magFilter===Vs||m.magFilter===Mi||m.minFilter===Zt||m.minFilter===Na||m.minFilter===Vs||m.minFilter===Mi)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,de[m.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,de[m.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,de[m.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[m.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[m.minFilter]),m.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Bt||m.minFilter!==Vs&&m.minFilter!==Mi||m.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let b=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ie(T,m){let b=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",O));let x=m.source,I=f.get(x);I===void 0&&(I={},f.set(x,I));let V=ne(m);if(V!==T.__cacheKey){I[V]===void 0&&(I[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,b=!0),I[V].usedTimes++;let Z=I[T.__cacheKey];Z!==void 0&&(I[T.__cacheKey].usedTimes--,Z.usedTimes===0&&L(m)),T.__cacheKey=V,T.__webglTexture=I[V].texture}return b}function Y(T,m,b){return Math.floor(Math.floor(T/b)/m)}function ie(T,m,b,x){let V=T.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,b,x,m.data);else{V.sort((re,ue)=>re.start-ue.start);let Z=0;for(let re=1;re<V.length;re++){let ue=V[Z],be=V[re],Re=ue.start+ue.count,we=Y(be.start,m.width,4),se=Y(ue.start,m.width,4);be.start<=Re+1&&we===se&&Y(be.start+be.count-1,m.width,4)===we?ue.count=Math.max(ue.count,be.start+be.count-ue.start):(++Z,V[Z]=be)}V.length=Z+1;let G=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let re=0,ue=V.length;re<ue;re++){let be=V[re],Re=Math.floor(be.start/4),we=Math.ceil(be.count/4),se=Re%m.width,k=Math.floor(Re/m.width),fe=we,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,se,k,fe,oe,b,x,m.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,G),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function xe(T,m,b){let x=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(x=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(x=n.TEXTURE_3D);let I=Ie(T,m),V=m.source;t.bindTexture(x,T.__webglTexture,n.TEXTURE0+b);let Z=i.get(V);if(V.version!==Z.__version||I===!0){if(t.activeTexture(n.TEXTURE0+b),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),_e=m.colorSpace===ri?null:ot.getPrimaries(m.colorSpace),Se=m.colorSpace===ri||oe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let j=g(m.image,!1,r.maxTextureSize);j=he(m,j);let ce=s.convert(m.format,m.colorSpace),re=s.convert(m.type),ue=S(m.internalFormat,ce,re,m.normalized,m.colorSpace,m.isVideoTexture);Ee(x,m);let be,Re=m.mipmaps,we=m.isVideoTexture!==!0,se=Z.__version===void 0||I===!0,k=V.dataReady,fe=P(m,j);if(m.isDepthTexture)ue=E(m.format===Ei,m.type),se&&(we?t.texStorage2D(n.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ue,j.width,j.height,0,ce,re,null));else if(m.isDataTexture)if(Re.length>0){we&&se&&t.texStorage2D(n.TEXTURE_2D,fe,ue,Re[0].width,Re[0].height);for(let oe=0,_e=Re.length;oe<_e;oe++)be=Re[oe],we?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,be.width,be.height,ce,re,be.data):t.texImage2D(n.TEXTURE_2D,oe,ue,be.width,be.height,0,ce,re,be.data);m.generateMipmaps=!1}else we?(se&&t.texStorage2D(n.TEXTURE_2D,fe,ue,j.width,j.height),k&&ie(m,j,ce,re)):t.texImage2D(n.TEXTURE_2D,0,ue,j.width,j.height,0,ce,re,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){we&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ue,Re[0].width,Re[0].height,j.depth);for(let oe=0,_e=Re.length;oe<_e;oe++)if(be=Re[oe],m.format!==wn)if(ce!==null)if(we){if(k)if(m.layerUpdates.size>0){let Se=Ru(be.width,be.height,m.format,m.type);for(let ge of m.layerUpdates){let Ge=be.data.subarray(ge*Se/be.data.BYTES_PER_ELEMENT,(ge+1)*Se/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ge,be.width,be.height,1,ce,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,j.depth,ce,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,ue,be.width,be.height,j.depth,0,be.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,j.depth,ce,re,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,ue,be.width,be.height,j.depth,0,ce,re,be.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{we&&se&&t.texStorage2D(n.TEXTURE_2D,fe,ue,Re[0].width,Re[0].height);for(let oe=0,_e=Re.length;oe<_e;oe++)be=Re[oe],m.format!==wn?ce!==null?we?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,be.width,be.height,ce,be.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,ue,be.width,be.height,0,be.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,be.width,be.height,ce,re,be.data):t.texImage2D(n.TEXTURE_2D,oe,ue,be.width,be.height,0,ce,re,be.data)}else if(m.isDataArrayTexture)if(we){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ue,j.width,j.height,j.depth),k)if(m.layerUpdates.size>0){let oe=Ru(j.width,j.height,m.format,m.type);for(let _e of m.layerUpdates){let Se=j.data.subarray(_e*oe/j.data.BYTES_PER_ELEMENT,(_e+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,j.width,j.height,1,ce,re,Se)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,re,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,ce,re,j.data);else if(m.isData3DTexture)we?(se&&t.texStorage3D(n.TEXTURE_3D,fe,ue,j.width,j.height,j.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,re,j.data)):t.texImage3D(n.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,ce,re,j.data);else if(m.isFramebufferTexture){if(se)if(we)t.texStorage2D(n.TEXTURE_2D,fe,ue,j.width,j.height);else{let oe=j.width,_e=j.height;for(let Se=0;Se<fe;Se++)t.texImage2D(n.TEXTURE_2D,Se,ue,oe,_e,0,ce,re,null),oe>>=1,_e>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),j.parentNode!==oe){oe.appendChild(j),h.add(m),oe.onpaint=_e=>{let Se=_e.changedElements;for(let ge of h)Se.includes(ge.image)&&(ge.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Se=n.RGBA,ge=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,ge,Ge,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(we&&se){let oe=ye(Re[0]);t.texStorage2D(n.TEXTURE_2D,fe,ue,oe.width,oe.height)}for(let oe=0,_e=Re.length;oe<_e;oe++)be=Re[oe],we?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce,re,be):t.texImage2D(n.TEXTURE_2D,oe,ue,ce,re,be);m.generateMipmaps=!1}else if(we){if(se){let oe=ye(j);t.texStorage2D(n.TEXTURE_2D,fe,ue,oe.width,oe.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,re,j)}else t.texImage2D(n.TEXTURE_2D,0,ue,ce,re,j);p(m)&&C(x),Z.__version=V.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Te(T,m,b){if(m.image.length!==6)return;let x=Ie(T,m),I=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+b);let V=i.get(I);if(I.version!==V.__version||x===!0){t.activeTexture(n.TEXTURE0+b);let Z=ot.getPrimaries(ot.workingColorSpace),G=m.colorSpace===ri?null:ot.getPrimaries(m.colorSpace),j=m.colorSpace===ri||Z===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=m.isCompressedTexture||m.image[0].isCompressedTexture,re=m.image[0]&&m.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!ce&&!re?ue[ge]=g(m.image[ge],!0,r.maxCubemapSize):ue[ge]=re?m.image[ge].image:m.image[ge],ue[ge]=he(m,ue[ge]);let be=ue[0],Re=s.convert(m.format,m.colorSpace),we=s.convert(m.type),se=S(m.internalFormat,Re,we,m.normalized,m.colorSpace),k=m.isVideoTexture!==!0,fe=V.__version===void 0||x===!0,oe=I.dataReady,_e=P(m,be);Ee(n.TEXTURE_CUBE_MAP,m);let Se;if(ce){k&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,se,be.width,be.height);for(let ge=0;ge<6;ge++){Se=ue[ge].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){let Fe=Se[Ge];m.format!==wn?Re!==null?k?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,Fe.width,Fe.height,Re,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,se,Fe.width,Fe.height,0,Fe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,Fe.width,Fe.height,Re,we,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,se,Fe.width,Fe.height,0,Re,we,Fe.data)}}}else{if(Se=m.mipmaps,k&&fe){Se.length>0&&_e++;let ge=ye(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,se,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(re){k?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,Re,we,ue[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,se,ue[ge].width,ue[ge].height,0,Re,we,ue[ge].data);for(let Ge=0;Ge<Se.length;Ge++){let St=Se[Ge].image[ge].image;k?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,St.width,St.height,Re,we,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,se,St.width,St.height,0,Re,we,St.data)}}else{k?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Re,we,ue[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,se,Re,we,ue[ge]);for(let Ge=0;Ge<Se.length;Ge++){let Fe=Se[Ge];k?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Re,we,Fe.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,se,Re,we,Fe.image[ge])}}}p(m)&&C(n.TEXTURE_CUBE_MAP),V.__version=I.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function ve(T,m,b,x,I,V){let Z=s.convert(b.format,b.colorSpace),G=s.convert(b.type),j=S(b.internalFormat,Z,G,b.normalized,b.colorSpace),ce=i.get(m),re=i.get(b);if(re.__renderTarget=m,!ce.__hasExternalTextures){let ue=Math.max(1,m.width>>V),be=Math.max(1,m.height>>V);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,V,j,ue,be,m.depth,0,Z,G,null):t.texImage2D(I,V,j,ue,be,0,Z,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ae(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,x,I,re.__webglTexture,0,U(m)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,x,I,re.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(T,m,b){if(n.bindRenderbuffer(n.RENDERBUFFER,T),m.depthBuffer){let x=m.depthTexture,I=x&&x.isDepthTexture?x.type:null,V=E(m.stencilBuffer,I),Z=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(m),V,m.width,m.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(m),V,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,V,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,T)}else{let x=m.textures;for(let I=0;I<x.length;I++){let V=x[I],Z=s.convert(V.format,V.colorSpace),G=s.convert(V.type),j=S(V.internalFormat,Z,G,V.normalized,V.colorSpace);ae(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(m),j,m.width,m.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(m),j,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,j,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(T,m,b){let x=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let I=i.get(m.depthTexture);if(I.__renderTarget=m,(!I.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),x){if(I.__webglInit===void 0&&(I.__webglInit=!0,m.depthTexture.addEventListener("dispose",O)),I.__webglTexture===void 0){I.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,m.depthTexture);let ce=s.convert(m.depthTexture.format),re=s.convert(m.depthTexture.type),ue;m.depthTexture.format===Vn?ue=n.DEPTH_COMPONENT24:m.depthTexture.format===Ei&&(ue=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,m.width,m.height,0,ce,re,null)}}else me(m.depthTexture,0);let V=I.__webglTexture,Z=U(m),G=x?n.TEXTURE_CUBE_MAP_POSITIVE_X+b:n.TEXTURE_2D,j=m.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Vn)ae(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,G,V,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,j,G,V,0);else if(m.depthTexture.format===Ei)ae(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,G,V,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,j,G,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(T){let m=i.get(T),b=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){let x=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),x){let I=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,x.removeEventListener("dispose",I)};x.addEventListener("dispose",I),m.__depthDisposeCallback=I}m.__boundDepthTexture=x}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(b)for(let x=0;x<6;x++)at(m.__webglFramebuffer[x],T,x);else{let x=T.texture.mipmaps;x&&x.length>0?at(m.__webglFramebuffer[0],T,0):at(m.__webglFramebuffer,T,0)}else if(b){m.__webglDepthbuffer=[];for(let x=0;x<6;x++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[x]),m.__webglDepthbuffer[x]===void 0)m.__webglDepthbuffer[x]=n.createRenderbuffer(),Ve(m.__webglDepthbuffer[x],T,!1);else{let I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer[x];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,V)}}else{let x=T.texture.mipmaps;if(x&&x.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ve(m.__webglDepthbuffer,T,!1);else{let I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(T,m,b){let x=i.get(T);m!==void 0&&ve(x.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),b!==void 0&&Ke(T)}function st(T){let m=T.texture,b=i.get(T),x=i.get(m);T.addEventListener("dispose",v);let I=T.textures,V=T.isWebGLCubeRenderTarget===!0,Z=I.length>1;if(Z||(x.__webglTexture===void 0&&(x.__webglTexture=n.createTexture()),x.__version=m.version,o.memory.textures++),V){b.__webglFramebuffer=[];for(let G=0;G<6;G++)if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer[G]=[];for(let j=0;j<m.mipmaps.length;j++)b.__webglFramebuffer[G][j]=n.createFramebuffer()}else b.__webglFramebuffer[G]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer=[];for(let G=0;G<m.mipmaps.length;G++)b.__webglFramebuffer[G]=n.createFramebuffer()}else b.__webglFramebuffer=n.createFramebuffer();if(Z)for(let G=0,j=I.length;G<j;G++){let ce=i.get(I[G]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ae(T)===!1){b.__webglMultisampledFramebuffer=n.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let G=0;G<I.length;G++){let j=I[G];b.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,b.__webglColorRenderbuffer[G]);let ce=s.convert(j.format,j.colorSpace),re=s.convert(j.type),ue=S(j.internalFormat,ce,re,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),be=U(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,b.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(b.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(b.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,m);for(let G=0;G<6;G++)if(m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ve(b.__webglFramebuffer[G][j],T,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,j);else ve(b.__webglFramebuffer[G],T,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);p(m)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let G=0,j=I.length;G<j;G++){let ce=I[G],re=i.get(ce),ue=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Ee(ue,ce),ve(b.__webglFramebuffer,T,ce,n.COLOR_ATTACHMENT0+G,ue,0),p(ce)&&C(ue)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(G=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(G,x.__webglTexture),Ee(G,m),m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ve(b.__webglFramebuffer[j],T,m,n.COLOR_ATTACHMENT0,G,j);else ve(b.__webglFramebuffer,T,m,n.COLOR_ATTACHMENT0,G,0);p(m)&&C(G),t.unbindTexture()}T.depthBuffer&&Ke(T)}function Je(T){let m=T.textures;for(let b=0,x=m.length;b<x;b++){let I=m[b];if(p(I)){let V=N(T),Z=i.get(I).__webglTexture;t.bindTexture(V,Z),C(V),t.unbindTexture()}}}let ct=[],ut=[];function R(T){if(T.samples>0){if(ae(T)===!1){let m=T.textures,b=T.width,x=T.height,I=n.COLOR_BUFFER_BIT,V=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=i.get(T),G=m.length>1;if(G)for(let ce=0;ce<m.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let j=T.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let ce=0;ce<m.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),G){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let re=i.get(m[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,b,x,0,0,b,x,I,n.NEAREST),l===!0&&(ct.length=0,ut.length=0,ct.push(n.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ct.push(V),ut.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let ce=0;ce<m.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let re=i.get(m[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let m=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function U(T){return Math.min(r.maxSamples,T.samples)}function ae(T){let m=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function A(T){let m=o.render.frame;u.get(T)!==m&&(u.set(T,m),T.update())}function he(T,m){let b=T.colorSpace,x=T.format,I=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||b!==gs&&b!==ri&&(ot.getTransfer(b)===pt?(x!==wn||I!==hn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",b)),m}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=q,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=me,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=F,this.rebindTextures=We,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tw(n,e){function t(i,r=ri){let s,o=ot.getTransfer(r);if(i===hn)return n.UNSIGNED_BYTE;if(i===ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mu)return n.BYTE;if(i===gu)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===La)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===xu)return n.ALPHA;if(i===vu)return n.RGB;if(i===wn)return n.RGBA;if(i===Vn)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===_u)return n.RED;if(i===Oa)return n.RED_INTEGER;if(i===Ti)return n.RG;if(i===za)return n.RG_INTEGER;if(i===Fa)return n.RGBA_INTEGER;if(i===Gs||i===Ws||i===Zs||i===$s)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Ba||i===Ha||i===Va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Wa||i===Za||i===$a||i===Xa||i===Xs||i===qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ga||i===Wa)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Za)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$a)return s.COMPRESSED_R11_EAC;if(i===Xa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xs)return s.COMPRESSED_RG11_EAC;if(i===qa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ya||i===ja||i===Ka||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ul||i===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hl||i===pl||i===qs||i===fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Cs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends In{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,y=null,w=typeof XRWebGLBinding<"u",g=new ju,p={},C=t.getContextAttributes(),N=null,S=null,E=[],P=[],O=new Be,v=null,M=null,L=new Jt;L.viewport=new Ct;let B=new Jt;B.viewport=new Ct;let W=[L,B],q=new Aa,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=E[Y];return ie===void 0&&(ie=new Pr,E[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=E[Y];return ie===void 0&&(ie=new Pr,E[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=E[Y];return ie===void 0&&(ie=new Pr,E[Y]=ie),ie.getHandSpace()};function ee(Y){let ie=P.indexOf(Y.inputSource);if(ie===-1)return;let xe=E[ie];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ne(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",me);for(let Y=0;Y<E.length;Y++){let ie=P[Y];ie!==null&&(P[Y]=null,E[Y].disconnect(ie))}z=null,X=null,g.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(N),f=null,d=null,h=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(O.width,O.height,!1),M!==null){let Y=M.camera;Y.fov=M.fov,Y.zoom=M.zoom,Y.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&w&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",me),C.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,ve=null;C.depth&&(ve=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=C.stencil?Ei:Vn,Te=C.stencil?Vr:kn);let Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new dn(d.textureWidth,d.textureHeight,{format:wn,type:hn,depthTexture:new bi(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new dn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function me(Y){for(let ie=0;ie<Y.removed.length;ie++){let xe=Y.removed[ie],Te=P.indexOf(xe);Te>=0&&(P[Te]=null,E[Te].disconnect(xe))}for(let ie=0;ie<Y.added.length;ie++){let xe=Y.added[ie],Te=P.indexOf(xe);if(Te===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=P.length){P.push(xe),Te=Ve;break}else if(P[Ve]===null){P[Ve]=xe,Te=Ve;break}if(Te===-1)break}let ve=E[Te];ve&&ve.connect(xe)}}let te=new $,le=new $;function F(Y,ie,xe){te.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Te=te.distanceTo(le),ve=ie.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,at=ve[14]/(ve[10]-1),Ke=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],st=(ve[9]-1)/ve[5],Je=(ve[8]-1)/ve[0],ct=(Ve[8]+1)/Ve[0],ut=at*Je,R=at*ct,U=Te/(-Je+ct),ae=U*-Je;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(U),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let A=at+U,he=Ke+U,ye=ut-ae,T=R+(Te-ae),m=We*Ke/he*A,b=st*Ke/he*A;Y.projectionMatrix.makePerspective(ye,T,m,b,A,he),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,xe=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),q.near=B.near=L.near=ie,q.far=B.far=L.far=xe,(z!==q.near||X!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,X=q.far),q.layers.mask=Y.layers.mask|6,L.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;let Te=Y.parent,ve=q.cameras;de(q,Te);for(let Ve=0;Ve<ve.length;Ve++)de(ve[Ve],Te);ve.length===2?F(q,L,B):q.projectionMatrix.copy(L.projectionMatrix),M===null&&Y.isPerspectiveCamera&&(M={camera:Y,fov:Y.fov,zoom:Y.zoom}),pe(Y,q,Te)};function pe(Y,ie,xe){xe===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(Y){return p[Y]};let Me=null;function Ee(Y,ie){if(u=ie.getViewerPose(c||o),y=ie,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Te=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Te=!0);for(let Ke=0;Ke<xe.length;Ke++){let We=xe[Ke],st=null;if(f!==null)st=f.getViewport(We);else{let ct=h.getViewSubImage(d,We);st=ct.viewport,Ke===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let Je=W[Ke];Je===void 0&&(Je=new Jt,Je.layers.enable(Ke),Je.viewport=new Ct,W[Ke]=Je),Je.matrix.fromArray(We.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(We.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),Ke===0&&(q.matrix.copy(Je.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Te===!0&&q.cameras.push(Je)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){h=i.getBinding();let Ke=h.getDepthInformation(xe[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,r.renderState)}if(ve&&ve.includes("camera-access")&&w){e.state.unbindTexture(),h=i.getBinding();for(let Ke=0;Ke<xe.length;Ke++){let We=xe[Ke].camera;if(We){let st=p[We];st||(st=new Cs,p[We]=st);let Je=h.getCameraImage(We);st.sourceTexture=Je}}}}for(let xe=0;xe<E.length;xe++){let Te=P[xe],ve=E[xe];Te!==null&&ve!==void 0&&ve.update(Te,ie,c||o)}Me&&Me(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}let Ie=new kf;Ie.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}},rw=new xt,Bf=new je;Bf.set(-1,0,0,0,1,0,0,0,1);function sw(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Cu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,C,N,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),y(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),w(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,C,N):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let C=e.get(p),N=C.envMap,S=C.envMapRotation;N&&(g.envMap.value=N,g.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(S)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Bf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,C,N){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=N*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,C){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function w(g,p){let C=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ow(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let P=E.program;i.uniformBlockBinding(S,P)}function c(S,E){let P=r[S.id];P===void 0&&(g(S),P=u(S),r[S.id]=P,S.addEventListener("dispose",C));let O=E.program;i.updateUBOMapping(S,O);let v=e.render.frame;s[S.id]!==v&&(d(S),s[S.id]=v)}function u(S){let E=h();S.__bindingPointIndex=E;let P=n.createBuffer(),O=S.__size,v=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,O,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,P),P}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let E=r[S.id],P=S.uniforms,O=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,M=P.length;v<M;v++){let L=P[v];if(Array.isArray(L))for(let B=0,W=L.length;B<W;B++)f(L[B],v,B,O);else f(L,v,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,P,O){if(w(S,E,P,O)===!0){let v=S.__offset,M=S.value;if(Array.isArray(M)){let L=0;for(let B=0;B<M.length;B++){let W=M[B],q=p(W);y(W,S.__data,L),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(M,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,S.__data)}}function y(S,E,P){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,P)}function w(S,E,P,O){let v=S.value,M=E+"_"+P;if(O[M]===void 0)return typeof v=="number"||typeof v=="boolean"?O[M]=v:ArrayBuffer.isView(v)?O[M]=v.slice():O[M]=v.clone(),!0;{let L=O[M];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return O[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(S){let E=S.uniforms,P=0,O=16;for(let M=0,L=E.length;M<L;M++){let B=Array.isArray(E[M])?E[M]:[E[M]];for(let W=0,q=B.length;W<q;W++){let z=B[W],X=Array.isArray(z.value)?z.value:[z.value];for(let ee=0,ne=X.length;ee<ne;ee++){let me=X[ee],te=p(me),le=P%O,F=le%te.boundary,de=le+F;P+=F,de!==0&&O-de<te.storage&&(P+=O-de),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=P,P+=te.storage}}}let v=P%O;return v>0&&(P+=O-v),S.__size=P,S.__cache={},this}function p(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",S),E}function C(S){let E=S.target;E.removeEventListener("dispose",C);let P=o.indexOf(E.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function N(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:N}}var aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function lw(){return Zn===null&&(Zn=new aa(aw,16,16,Ti,On),Zn.name="DFG_LUT",Zn.minFilter=Zt,Zn.magFilter=Zt,Zn.wrapS=Hn,Zn.wrapT=Hn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var wl=class{constructor(e={}){let{canvas:t=Qp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;let w=f,g=new Set([Fa,za,Oa]),p=new Set([hn,kn,Hr,Vr,ka,Da]),C=new Uint32Array(4),N=new Int32Array(4),S=new $,E=null,P=null,O=[],v=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,B=!1,W=null,q=null,z=null,X=null;this._outputColorSpace=rn;let ee=0,ne=0,me=null,te=-1,le=null,F=new Ct,de=new Ct,pe=null,Me=new ze(0),Ee=0,Ie=t.width,Y=t.height,ie=1,xe=null,Te=null,ve=new Ct(0,0,Ie,Y),Ve=new Ct(0,0,Ie,Y),at=!1,Ke=new Nr,We=!1,st=!1,Je=new xt,ct=new $,ut=new Ct,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},U=!1;function ae(){return me===null?ie:1}let A=i;function he(_,H){return t.getContext(_,H)}let ye,T,m,b,x,I,V,Z,G,j,ce,re,ue,be,Re,we,se,k,fe,oe,_e,Se,ge;try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),A===null){let H="webgl2";if(A=he(H,_),A===null)throw he(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(_){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),$e("WebGLRenderer: "+_.message),_}function Ge(){ye=new mv(A),ye.init(),_e=new tw(A,ye),T=new sv(A,ye,e,_e),m=new Q_(A,ye),T.reversedDepthBuffer&&d&&m.buffers.depth.setReversed(!0),q=A.createFramebuffer(),z=A.createFramebuffer(),X=A.createFramebuffer(),b=new bv(A),x=new U_,I=new ew(A,ye,m,x,T,_e,b),V=new fv(L),Z=new v0(A),Se=new iv(A,Z),G=new gv(A,Z,b,Se),j=new vv(A,G,Z,Se,b),k=new xv(A,T,I),Re=new ov(x),ce=new F_(L,V,ye,T,Se,Re),re=new sw(L,x),ue=new H_,be=new X_(ye),se=new nv(L,V,m,j,y,l),we=new J_(L,j,T),ge=new ow(A,b,T,m),fe=new rv(A,ye,b),oe=new yv(A,ye,b),b.programs=ce.programs,L.capabilities=T,L.extensions=ye,L.properties=x,L.renderLists=ue,L.shadowMap=we,L.state=m,L.info=b}w!==hn&&(M=new wv(w,t.width,t.height,a,r,s));let Fe=new Ku(L,A);this.xr=Fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=ye.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ye.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(_){_!==void 0&&(ie=_,this.setSize(Ie,Y,!1))},this.getSize=function(_){return _.set(Ie,Y)},this.setSize=function(_,H,Q=!0){if(Fe.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=_,Y=H,t.width=Math.floor(_*ie),t.height=Math.floor(H*ie),Q===!0&&(t.style.width=_+"px",t.style.height=H+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,_,H)},this.getDrawingBufferSize=function(_){return _.set(Ie*ie,Y*ie).floor()},this.setDrawingBufferSize=function(_,H,Q){Ie=_,Y=H,ie=Q,t.width=Math.floor(_*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,_,H)},this.setEffects=function(_){if(w===hn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let H=0;H<_.length;H++)if(_[H].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(F)},this.getViewport=function(_){return _.copy(ve)},this.setViewport=function(_,H,Q,K){_.isVector4?ve.set(_.x,_.y,_.z,_.w):ve.set(_,H,Q,K),m.viewport(F.copy(ve).multiplyScalar(ie).round())},this.getScissor=function(_){return _.copy(Ve)},this.setScissor=function(_,H,Q,K){_.isVector4?Ve.set(_.x,_.y,_.z,_.w):Ve.set(_,H,Q,K),m.scissor(de.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(_){m.setScissorTest(at=_)},this.setOpaqueSort=function(_){xe=_},this.setTransparentSort=function(_){Te=_},this.getClearColor=function(_){return _.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(_=!0,H=!0,Q=!0){let K=0;if(_){let J=!1;if(me!==null){let Pe=me.texture.format;J=g.has(Pe)}if(J){let Pe=me.texture.type,ke=p.has(Pe),Ce=se.getClearColor(),De=se.getClearAlpha(),Ue=Ce.r,et=Ce.g,rt=Ce.b;ke?(C[0]=Ue,C[1]=et,C[2]=rt,C[3]=De,A.clearBufferuiv(A.COLOR,0,C)):(N[0]=Ue,N[1]=et,N[2]=rt,N[3]=De,A.clearBufferiv(A.COLOR,0,N))}else K|=A.COLOR_BUFFER_BIT}H&&(K|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),W=_},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),se.dispose(),ue.dispose(),be.dispose(),x.dispose(),V.dispose(),j.dispose(),Se.dispose(),ge.dispose(),ce.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Bd),Fe.removeEventListener("sessionend",Hd),Ai.stop()};function St(_){_.preventDefault(),xs("WebGLRenderer: Context Lost."),B=!0}function dt(){xs("WebGLRenderer: Context Restored."),B=!1;let _=b.autoReset,H=we.enabled,Q=we.autoUpdate,K=we.needsUpdate,J=we.type;Ge(),b.autoReset=_,we.enabled=H,we.autoUpdate=Q,we.needsUpdate=K,we.type=J}function Sn(_){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function zn(_){let H=_.target;H.removeEventListener("dispose",zn),xg(H)}function xg(_){vg(_),x.remove(_)}function vg(_){let H=x.get(_).programs;H!==void 0&&(H.forEach(function(Q){ce.releaseProgram(Q)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,H,Q,K,J,Pe){H===null&&(H=R);let ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ce=Sg(_,H,Q,K,J);m.setMaterial(K,ke);let De=Q.index,Ue=1;if(K.wireframe===!0){if(De=G.getWireframeAttribute(Q),De===void 0)return;Ue=2}let et=Q.drawRange,rt=Q.attributes.position,Oe=et.start*Ue,ht=(et.start+et.count)*Ue;Pe!==null&&(Oe=Math.max(Oe,Pe.start*Ue),ht=Math.min(ht,(Pe.start+Pe.count)*Ue)),De!==null?(Oe=Math.max(Oe,0),ht=Math.min(ht,De.count)):rt!=null&&(Oe=Math.max(Oe,0),ht=Math.min(ht,rt.count));let kt=ht-Oe;if(kt<0||kt===1/0)return;Se.setup(J,K,Ce,Q,De);let Et,_t=fe;if(De!==null&&(Et=Z.get(De),_t=oe,_t.setIndex(Et)),J.isMesh)K.wireframe===!0?(m.setLineWidth(K.wireframeLinewidth*ae()),_t.setMode(A.LINES)):_t.setMode(A.TRIANGLES);else if(J.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),m.setLineWidth(qt*ae()),J.isLineSegments?_t.setMode(A.LINES):J.isLineLoop?_t.setMode(A.LINE_LOOP):_t.setMode(A.LINE_STRIP)}else J.isPoints?_t.setMode(A.POINTS):J.isSprite&&_t.setMode(A.TRIANGLES);if(J.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))_t.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let qt=J._multiDrawStarts,Le=J._multiDrawCounts,tn=J._multiDrawCount,lt=De?Z.get(De).bytesPerElement:1,xn=x.get(K).currentProgram.getUniforms();for(let Fn=0;Fn<tn;Fn++)xn.setValue(A,"_gl_DrawID",Fn),_t.render(qt[Fn]/lt,Le[Fn])}else if(J.isInstancedMesh)_t.renderInstances(Oe,kt,J.count);else if(Q.isInstancedBufferGeometry){let qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Le=Math.min(Q.instanceCount,qt);_t.renderInstances(Oe,kt,Le)}else _t.render(Oe,kt)};function Ud(_,H,Q,K){W!==null&&_.isNodeMaterial&&W.setObject(K,_),We===!0&&Re.setState(_,Q,!1),_.transparent===!0&&_.side===Vt&&_.forceSinglePass===!1?(_.side=an,_.needsUpdate=!0,lo(_,H,K),_.side=wi,_.needsUpdate=!0,lo(_,H,K),_.side=Vt):lo(_,H,K)}this.compile=function(_,H,Q=null){Q===null&&(Q=_),W!==null&&W.renderStart(_,H,Q),P=be.get(Q),P.init(H),v.push(P),Q.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),_!==Q&&_.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights(),W!==null&&W.updateLights(P.state.lightsArray),st=this.localClippingEnabled,We=Re.init(this.clippingPlanes,st),We===!0&&Re.setGlobalState(this.clippingPlanes,H),W!==null&&we.render(P.state.shadowsArray,Q,H);let K=new Set;return _.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){let Ce=Pe[ke];Ud(Ce,Q,H,J),K.add(Ce)}else Ud(Pe,Q,H,J),K.add(Pe)}),P=v.pop(),W!==null&&W.renderEnd(),K},this.compileAsync=function(_,H,Q=null){let K=this.compile(_,H,Q);return new Promise(J=>{function Pe(){if(K.forEach(function(ke){let De=x.get(ke).currentProgram;(De===void 0||De.isReady())&&K.delete(ke)}),K.size===0){J(_);return}setTimeout(Pe,10)}ye.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ql=null;function _g(_){Ql&&Ql(_)}function Bd(){Ai.stop()}function Hd(){Ai.start()}let Ai=new kf;Ai.setAnimationLoop(_g),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(_){Ql=_,Fe.setAnimationLoop(_),_===null?Ai.stop():Ai.start()},Fe.addEventListener("sessionstart",Bd),Fe.addEventListener("sessionend",Hd),this.render=function(_,H){if(H!==void 0&&H.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(_,H);let Q=Fe.enabled===!0&&Fe.isPresenting===!0,K=M!==null&&(me===null||Q)&&M.begin(L,me);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(H),H=Fe.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,H,me),P=be.get(_,v.length),P.init(H),P.state.textureUnits=I.getTextureUnits(),v.push(P),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ke.setFromProjectionMatrix(Je,Pn,H.reversedDepth),st=this.localClippingEnabled,We=Re.init(this.clippingPlanes,st),E=ue.get(_,O.length),E.init(),O.push(E),Fe.enabled===!0&&Fe.isPresenting===!0){let ke=L.xr.getDepthSensingMesh();ke!==null&&ec(ke,H,-1/0,L.sortObjects)}ec(_,H,0,L.sortObjects),E.finish(),W!==null&&W.updateLights(P.state.lightsArray),L.sortObjects===!0&&E.sort(xe,Te),U=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,U&&se.addToRenderList(E,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Re.beginShadows();let J=P.state.shadowsArray;if(we.render(J,_,H),We===!0&&Re.endShadows(),(K&&M.hasRenderPass())===!1){let ke=E.opaque,Ce=E.transmissive;if(P.setupLights(),H.isArrayCamera){let De=H.cameras;if(Ce.length>0)for(let Ue=0,et=De.length;Ue<et;Ue++){let rt=De[Ue];Gd(ke,Ce,_,rt)}U&&se.render(_);for(let Ue=0,et=De.length;Ue<et;Ue++){let rt=De[Ue];Vd(E,_,rt,rt.viewport)}}else Ce.length>0&&Gd(ke,Ce,_,H),U&&se.render(_),Vd(E,_,H)}me!==null&&ne===0&&(I.updateMultisampleRenderTarget(me),I.updateRenderTargetMipmap(me)),K&&M.end(L),_.isScene===!0&&_.onAfterRender(L,_,H),Se.resetDefaultState(),te=-1,le=null,v.pop(),v.length>0?(P=v[v.length-1],I.setTextureUnits(P.state.textureUnits),We===!0&&Re.setGlobalState(L.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?E=O[O.length-1]:E=null,W!==null&&W.renderEnd()};function ec(_,H,Q,K){if(_.visible===!1)return;if(_.layers.test(H.layers)){if(_.isGroup)Q=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(H);else if(_.isLightProbeGrid)P.pushLightProbeGrid(_);else if(_.isLight)P.pushLight(_),_.castShadow&&P.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Ke)){K&&ut.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Je);let ke=j.update(_),Ce=_.material;Ce.visible&&E.push(_,ke,Ce,Q,ut.z,null,H)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Ke))){let ke=j.update(_),Ce=_.material;if(K&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ut.copy(_.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ut.copy(ke.boundingSphere.center)),ut.applyMatrix4(_.matrixWorld).applyMatrix4(Je)),Array.isArray(Ce)){let De=ke.groups;for(let Ue=0,et=De.length;Ue<et;Ue++){let rt=De[Ue],Oe=Ce[rt.materialIndex];Oe&&Oe.visible&&E.push(_,ke,Oe,Q,ut.z,rt,H)}}else Ce.visible&&E.push(_,ke,Ce,Q,ut.z,null,H)}}let Pe=_.children;for(let ke=0,Ce=Pe.length;ke<Ce;ke++)ec(Pe[ke],H,Q,K)}function Vd(_,H,Q,K){let{opaque:J,transmissive:Pe,transparent:ke}=_;P.setupLightsView(Q),We===!0&&Re.setGlobalState(L.clippingPlanes,Q),K&&m.viewport(F.copy(K)),J.length>0&&ao(J,H,Q),Pe.length>0&&ao(Pe,H,Q),ke.length>0&&ao(ke,H,Q),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Gd(_,H,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[K.id]===void 0){let Oe=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[K.id]=new dn(1,1,{generateMipmaps:!0,type:Oe?On:hn,minFilter:Mi,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Pe=P.state.transmissionRenderTarget[K.id],ke=K.viewport||F;Pe.setSize(ke.z*L.transmissionResolutionScale,ke.w*L.transmissionResolutionScale);let Ce=L.getRenderTarget(),De=L.getActiveCubeFace(),Ue=L.getActiveMipmapLevel();L.setRenderTarget(Pe),L.getClearColor(Me),Ee=L.getClearAlpha(),Ee<1&&L.setClearColor(16777215,.5),L.clear(),U&&se.render(Q);let et=L.toneMapping;L.toneMapping=Ln;let rt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),P.setupLightsView(K),We===!0&&Re.setGlobalState(L.clippingPlanes,K),ao(_,Q,K),I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ht=0,kt=H.length;ht<kt;ht++){let Et=H[ht],{object:_t,geometry:qt,material:Le,group:tn}=Et;if(Le.side===Vt&&_t.layers.test(K.layers)){let lt=Le.side;Le.side=an,Le.needsUpdate=!0,Wd(_t,Q,K,qt,Le,tn),Le.side=lt,Le.needsUpdate=!0,Oe=!0}}Oe===!0&&(I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe))}L.setRenderTarget(Ce,De,Ue),L.setClearColor(Me,Ee),rt!==void 0&&(K.viewport=rt),L.toneMapping=et}function ao(_,H,Q){let K=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Pe=_.length;J<Pe;J++){let ke=_[J],{object:Ce,geometry:De,group:Ue}=ke,et=ke.material;et.allowOverride===!0&&K!==null&&(et=K),Ce.layers.test(Q.layers)&&Wd(Ce,H,Q,De,et,Ue)}}function Wd(_,H,Q,K,J,Pe){W!==null&&J.isNodeMaterial&&W.setObject(_,J),_.onBeforeRender(L,H,Q,K,J,Pe),_.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),J.onBeforeRender(L,H,Q,K,_,Pe),J.transparent===!0&&J.side===Vt&&J.forceSinglePass===!1?(J.side=an,J.needsUpdate=!0,L.renderBufferDirect(Q,H,K,J,_,Pe),J.side=wi,J.needsUpdate=!0,L.renderBufferDirect(Q,H,K,J,_,Pe),J.side=Vt):L.renderBufferDirect(Q,H,K,J,_,Pe),_.onAfterRender(L,H,Q,K,J,Pe)}function lo(_,H,Q){H.isScene!==!0&&(H=R);let K=x.get(_),J=P.state.lights,Pe=P.state.shadowsArray,ke=J.state.version,Ce=ce.getParameters(_,J.state,Pe,H,Q,P.state.lightProbeGridArray),De=ce.getProgramCacheKey(Ce),Ue=K.programs;K.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;let et=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;K.envMap=V.get(_.envMap||K.environment,et),K.envMapRotation=K.environment!==null&&_.envMap===null?H.environmentRotation:_.envMapRotation,Ue===void 0&&(_.addEventListener("dispose",zn),Ue=new Map,K.programs=Ue);let rt=Ue.get(De);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===ke)return $d(_,Ce),rt}else Ce.uniforms=ce.getUniforms(_),W!==null&&_.isNodeMaterial&&W.build(_,Q,Ce),_.onBeforeCompile(Ce,L),rt=ce.acquireProgram(Ce,De),Ue.set(De,rt),K.uniforms=Ce.uniforms;let Oe=K.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Oe.clippingPlanes=Re.uniform),$d(_,Ce),K.needsLights=Eg(_),K.lightsStateVersion=ke,K.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.sunLights.value=J.state.sun,Oe.sunLightShadows.value=J.state.sunShadow,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.sunShadowMatrix.value=J.state.sunShadowMatrix,Oe.sunShadowCascade.value=J.state.sunShadowCascade,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=P.state.lightProbeGridArray.length>0,K.currentProgram=rt,K.uniformsList=null,rt}function Zd(_){if(_.uniformsList===null){let H=_.currentProgram.getUniforms();_.uniformsList=Zr.seqWithValue(H.seq,_.uniforms)}return _.uniformsList}function $d(_,H){let Q=x.get(_);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function wg(_,H){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let Q=0,K=_.length;Q<K;Q++){let J=_[Q];if(J.texture!==null&&J.boundingBox.containsPoint(S))return J}return null}function Sg(_,H,Q,K,J){H.isScene!==!0&&(H=R),I.resetTextureUnits();let Pe=H.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Ce=me===null?L.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ot.workingColorSpace,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ue=V.get(K.envMap||ke,De),et=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,kt=!!Q.morphAttributes.color,Et=Ln;K.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Et=L.toneMapping);let _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,qt=_t!==void 0?_t.length:0,Le=x.get(K),tn=P.state.lights;if(We===!0&&(st===!0||_!==le)){let Mt=_===le&&K.id===te;Re.setState(K,_,Mt)}let lt=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==tn.state.version||Le.outputColorSpace!==Ce||J.isBatchedMesh&&Le.batching===!1||!J.isBatchedMesh&&Le.batching===!0||J.isBatchedMesh&&Le.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Le.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Le.instancing===!1||!J.isInstancedMesh&&Le.instancing===!0||J.isSkinnedMesh&&Le.skinning===!1||!J.isSkinnedMesh&&Le.skinning===!0||J.isInstancedMesh&&Le.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Le.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Le.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Le.instancingMorph===!1&&J.morphTexture!==null||Le.envMap!==Ue||K.fog===!0&&Le.fog!==Pe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Re.numPlanes||Le.numIntersection!==Re.numIntersection)||Le.vertexAlphas!==et||Le.vertexTangents!==rt||Le.morphTargets!==Oe||Le.morphNormals!==ht||Le.morphColors!==kt||Le.toneMapping!==Et||Le.morphTargetsCount!==qt||!!Le.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Le.__version=K.version);let xn=Le.currentProgram;lt===!0&&(xn=lo(K,H,J),W&&K.isNodeMaterial&&W.onUpdateProgram(K,xn,Le));let Fn=!1,ai=!1,Ji=!1,bt=xn.getUniforms(),Nt=Le.uniforms;if(m.useProgram(xn.program)&&(Fn=!0,ai=!0,Ji=!0),K.id!==te&&(te=K.id,ai=!0),Le.needsLights){let Mt=wg(P.state.lightProbeGridArray,J);Le.lightProbeGrid!==Mt&&(Le.lightProbeGrid=Mt,ai=!0)}if(Fn||le!==_){m.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),bt.setValue(A,"projectionMatrix",_.projectionMatrix),bt.setValue(A,"viewMatrix",_.matrixWorldInverse);let ci=bt.map.cameraPosition;ci!==void 0&&ci.setValue(A,ct.setFromMatrixPosition(_.matrixWorld)),T.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),le!==_&&(le=_,ai=!0,Ji=!0)}if(Le.needsLights&&(tn.state.sunShadowMap.length>0&&bt.setValue(A,"sunShadowMap",tn.state.sunShadowMap,I),tn.state.directionalShadowMap.length>0&&bt.setValue(A,"directionalShadowMap",tn.state.directionalShadowMap,I),tn.state.spotShadowMap.length>0&&bt.setValue(A,"spotShadowMap",tn.state.spotShadowMap,I),tn.state.pointShadowMap.length>0&&bt.setValue(A,"pointShadowMap",tn.state.pointShadowMap,I)),J.isSkinnedMesh){bt.setOptional(A,J,"bindMatrix"),bt.setOptional(A,J,"bindMatrixInverse");let Mt=J.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),bt.setValue(A,"boneTexture",Mt.boneTexture,I))}J.isBatchedMesh&&(bt.setOptional(A,J,"batchingTexture"),bt.setValue(A,"batchingTexture",J._matricesTexture,I),bt.setOptional(A,J,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",J._indirectTexture,I),bt.setOptional(A,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",J._colorsTexture,I));let li=Q.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&k.update(J,Q,xn),(ai||Le.receiveShadow!==J.receiveShadow)&&(Le.receiveShadow=J.receiveShadow,bt.setValue(A,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(Nt.envMapIntensity.value=H.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=lw()),ai){if(bt.setValue(A,"toneMappingExposure",L.toneMappingExposure),Le.needsLights&&Mg(Nt,Ji),Pe&&K.fog===!0&&re.refreshFogUniforms(Nt,Pe),re.refreshMaterialUniforms(Nt,K,ie,Y,P.state.transmissionRenderTarget[_.id]),Le.needsLights&&Le.lightProbeGrid){let Mt=Le.lightProbeGrid;Nt.probesSH.value=Mt.texture,Nt.probesMin.value.copy(Mt.boundingBox.min),Nt.probesMax.value.copy(Mt.boundingBox.max),Nt.probesResolution.value.copy(Mt.resolution)}Zr.upload(A,Zd(Le),Nt,I)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zr.upload(A,Zd(Le),Nt,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(A,"center",J.center),bt.setValue(A,"modelViewMatrix",J.modelViewMatrix),bt.setValue(A,"normalMatrix",J.normalMatrix),bt.setValue(A,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Mt=K.uniformsGroups;for(let ci=0,Qi=Mt.length;ci<Qi;ci++){let qd=Mt[ci];ge.update(qd,xn),ge.bind(qd,xn)}}return xn}function Mg(_,H){_.ambientLightColor.needsUpdate=H,_.lightProbe.needsUpdate=H,_.sunLights.needsUpdate=H,_.sunLightShadows.needsUpdate=H,_.directionalLights.needsUpdate=H,_.directionalLightShadows.needsUpdate=H,_.pointLights.needsUpdate=H,_.pointLightShadows.needsUpdate=H,_.spotLights.needsUpdate=H,_.spotLightShadows.needsUpdate=H,_.rectAreaLights.needsUpdate=H,_.hemisphereLights.needsUpdate=H}function Eg(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(_,H,Q){let K=x.get(_);K.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),x.get(_.texture).__webglTexture=H,x.get(_.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,H){let Q=x.get(_);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(_,H=0,Q=0){me=_,ee=H,ne=Q;let K=null,J=!1,Pe=!1;if(_){let Ce=x.get(_);if(Ce.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(A.FRAMEBUFFER,Ce.__webglFramebuffer),F.copy(_.viewport),de.copy(_.scissor),pe=_.scissorTest,m.viewport(F),m.scissor(de),m.setScissorTest(pe),te=-1;return}else if(Ce.__webglFramebuffer===void 0)I.setupRenderTarget(_);else if(Ce.__hasExternalTextures)I.rebindTextures(_,x.get(_.texture).__webglTexture,x.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let et=_.depthTexture;if(Ce.__boundDepthTexture!==et){if(et!==null&&x.has(et)&&(_.width!==et.image.width||_.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(_)}}let De=_.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Pe=!0);let Ue=x.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?K=Ue[H][Q]:K=Ue[H],J=!0):_.samples>0&&I.useMultisampledRTT(_)===!1?K=x.get(_).__webglMultisampledFramebuffer:Array.isArray(Ue)?K=Ue[Q]:K=Ue,F.copy(_.viewport),de.copy(_.scissor),pe=_.scissorTest}else F.copy(ve).multiplyScalar(ie).floor(),de.copy(Ve).multiplyScalar(ie).floor(),pe=at;if(Q!==0&&(K=q),m.bindFramebuffer(A.FRAMEBUFFER,K)&&m.drawBuffers(_,K),m.viewport(F),m.scissor(de),m.setScissorTest(pe),J){let Ce=x.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Q)}else if(Pe){let Ce=H;for(let De=0;De<_.textures.length;De++){let Ue=x.get(_.textures[De]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+De,Ue.__webglTexture,Q,Ce)}}else if(_!==null&&Q!==0){let Ce=x.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ce.__webglTexture,Q)}te=-1};function Xd(_){let H=x.get(_);return(H.__readFormat!==_.format||H.__readType!==_.type)&&(H.__readFormat=_.format,H.__readType=_.type,H.__formatReadable=T.textureFormatReadable(_.format),H.__typeReadable=T.textureTypeReadable(_.type)),H}this.readRenderTargetPixels=function(_,H,Q,K,J,Pe,ke,Ce=0){if(!(_&&_.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=x.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ke!==void 0&&(De=De[ke]),De){m.bindFramebuffer(A.FRAMEBUFFER,De);try{let Ue=_.textures[Ce],et=Ue.format,rt=Ue.type;_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ce);let Oe=Xd(Ue);if(Oe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=_.width-K&&Q>=0&&Q<=_.height-J&&A.readPixels(H,Q,K,J,_e.convert(et),_e.convert(rt),Pe)}finally{let Ue=me!==null?x.get(me).__webglFramebuffer:null;m.bindFramebuffer(A.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(_,H,Q,K,J,Pe,ke,Ce=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=x.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ke!==void 0&&(De=De[ke]),De)if(H>=0&&H<=_.width-K&&Q>=0&&Q<=_.height-J){m.bindFramebuffer(A.FRAMEBUFFER,De);let Ue=_.textures[Ce],et=Ue.format,rt=Ue.type;_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ce);let Oe=Xd(Ue);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ht),A.bufferData(A.PIXEL_PACK_BUFFER,Pe.byteLength,A.STREAM_READ),A.readPixels(H,Q,K,J,_e.convert(et),_e.convert(rt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let kt=me!==null?x.get(me).__webglFramebuffer:null;m.bindFramebuffer(A.FRAMEBUFFER,kt);let Et=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await tf(A,Et,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ht),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Pe),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(ht),A.deleteSync(Et),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,H=null,Q=0){let K=Math.pow(2,-Q),J=Math.floor(_.image.width*K),Pe=Math.floor(_.image.height*K),ke=H!==null?H.x:0,Ce=H!==null?H.y:0;I.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,ke,Ce,J,Pe),m.unbindTexture()},this.copyTextureToTexture=function(_,H,Q=null,K=null,J=0,Pe=0){let ke,Ce,De,Ue,et,rt,Oe,ht,kt,Et=_.isCompressedTexture?_.mipmaps[Pe]:_.image;if(Q!==null)ke=Q.max.x-Q.min.x,Ce=Q.max.y-Q.min.y,De=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,et=Q.min.y,rt=Q.isBox3?Q.min.z:0;else{let Nt=Math.pow(2,-J);ke=Math.floor(Et.width*Nt),Ce=Math.floor(Et.height*Nt),_.isDataArrayTexture?De=Et.depth:_.isData3DTexture?De=Math.floor(Et.depth*Nt):De=1,Ue=0,et=0,rt=0}K!==null?(Oe=K.x,ht=K.y,kt=K.z):(Oe=0,ht=0,kt=0);let _t=_e.convert(H.format),qt=_e.convert(H.type),Le;H.isData3DTexture?(I.setTexture3D(H,0),Le=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Le=A.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Le=A.TEXTURE_2D),m.activeTexture(A.TEXTURE0),m.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),m.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),m.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=m.getParameter(A.UNPACK_ROW_LENGTH),lt=m.getParameter(A.UNPACK_IMAGE_HEIGHT),xn=m.getParameter(A.UNPACK_SKIP_PIXELS),Fn=m.getParameter(A.UNPACK_SKIP_ROWS),ai=m.getParameter(A.UNPACK_SKIP_IMAGES);m.pixelStorei(A.UNPACK_ROW_LENGTH,Et.width),m.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et.height),m.pixelStorei(A.UNPACK_SKIP_PIXELS,Ue),m.pixelStorei(A.UNPACK_SKIP_ROWS,et),m.pixelStorei(A.UNPACK_SKIP_IMAGES,rt);let Ji=_.isDataArrayTexture||_.isData3DTexture,bt=H.isDataArrayTexture||H.isData3DTexture;if(_.isDepthTexture){let Nt=x.get(_),li=x.get(H),Mt=x.get(Nt.__renderTarget),ci=x.get(li.__renderTarget);m.bindFramebuffer(A.READ_FRAMEBUFFER,Mt.__webglFramebuffer),m.bindFramebuffer(A.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Qi=0;Qi<De;Qi++)Ji&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,x.get(_).__webglTexture,J,rt+Qi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,x.get(H).__webglTexture,Pe,kt+Qi)),A.blitFramebuffer(Ue,et,ke,Ce,Oe,ht,ke,Ce,A.DEPTH_BUFFER_BIT,A.NEAREST);m.bindFramebuffer(A.READ_FRAMEBUFFER,null),m.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(J!==0||_.isRenderTargetTexture||x.has(_)){let Nt=x.get(_),li=x.get(H);m.bindFramebuffer(A.READ_FRAMEBUFFER,z),m.bindFramebuffer(A.DRAW_FRAMEBUFFER,X);for(let Mt=0;Mt<De;Mt++)Ji?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,J,rt+Mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Nt.__webglTexture,J),bt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,li.__webglTexture,Pe,kt+Mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,li.__webglTexture,Pe),J!==0?A.blitFramebuffer(Ue,et,ke,Ce,Oe,ht,ke,Ce,A.COLOR_BUFFER_BIT,A.NEAREST):bt?A.copyTexSubImage3D(Le,Pe,Oe,ht,kt+Mt,Ue,et,ke,Ce):A.copyTexSubImage2D(Le,Pe,Oe,ht,Ue,et,ke,Ce);m.bindFramebuffer(A.READ_FRAMEBUFFER,null),m.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else bt?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(Le,Pe,Oe,ht,kt,ke,Ce,De,_t,qt,Et.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Le,Pe,Oe,ht,kt,ke,Ce,De,_t,Et.data):A.texSubImage3D(Le,Pe,Oe,ht,kt,ke,Ce,De,_t,qt,Et):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Pe,Oe,ht,ke,Ce,_t,qt,Et.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Pe,Oe,ht,Et.width,Et.height,_t,Et.data):A.texSubImage2D(A.TEXTURE_2D,Pe,Oe,ht,ke,Ce,_t,qt,Et);m.pixelStorei(A.UNPACK_ROW_LENGTH,tn),m.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt),m.pixelStorei(A.UNPACK_SKIP_PIXELS,xn),m.pixelStorei(A.UNPACK_SKIP_ROWS,Fn),m.pixelStorei(A.UNPACK_SKIP_IMAGES,ai),Pe===0&&H.generateMipmaps&&A.generateMipmap(Le),m.unbindTexture()},this.initRenderTarget=function(_){x.get(_).__webglFramebuffer===void 0&&I.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?I.setTextureCube(_,0):_.isData3DTexture?I.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?I.setTexture2DArray(_,0):I.setTexture2D(_,0),m.unbindTexture()},this.resetState=function(){ee=0,ne=0,me=null,m.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Hf={type:"change"},Qu={type:"start"},Gf={type:"end"},El=new yi,Vf=new sn,cw=Math.cos(70*Au.DEG2RAD),Ft=new $,pn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ju=1e-6,Tl=class extends Us{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new on,this._lastTargetPosition=new $,this._quat=new on().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new $,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new $,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dw.bind(this),this._onPointerDown=uw.bind(this),this._onPointerUp=hw.bind(this),this._onContextMenu=xw.bind(this),this._onMouseWheel=mw.bind(this),this._onKeyDown=gw.bind(this),this._onTouchStart=yw.bind(this),this._onTouchMove=bw.bind(this),this._onMouseDown=pw.bind(this),this._onMouseMove=fw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=_w.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=yt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hf),this.update(),this.state=yt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(El.origin.copy(this.object.position),El.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(El.direction))<cw?this.object.lookAt(this.target):(Vf.setFromNormalAndCoplanarPoint(this.object.up,this.target),El.intersectPlane(Vf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ju||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ju||this._lastTargetPosition.distanceToSquared(this.target)>Ju?(this.dispatchEvent(Hf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function uw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gf),this.state=yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case _n.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case _n.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Qu)}function fw(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mw(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(Qu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gf))}function gw(n){this.enabled!==!1&&this._handleKeyDown(n)}function yw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Nn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case Nn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Nn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Qu)}function bw(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function xw(n){this.enabled!==!1&&n.preventDefault()}function vw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _w(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ed=new sn,Al=new Zi,Xr=new Be,td=new $,Cl=class extends Tl{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:_n.PAN,MIDDLE:_n.DOLLY,RIGHT:_n.ROTATE},this.touches={ONE:Nn.PAN,TWO:Nn.DOLLY_ROTATE},this._panWorldStart=new $}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ed.setFromNormalAndCoplanarPoint(this.object.up,this.target);let i=this.domElement.getBoundingClientRect();Xr.x=(e.clientX-i.left)/i.width*2-1,Xr.y=-((e.clientY-i.top)/i.height)*2+1,Al.setFromCamera(Xr,this.object),Al.ray.intersectPlane(ed,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let i=this.domElement.getBoundingClientRect();Xr.x=(e.clientX-i.left)/i.width*2-1,Xr.y=-((e.clientY-i.top)/i.height)*2+1,Al.setFromCamera(Xr,this.object),Al.ray.intersectPlane(ed,td)&&(td.sub(this._panWorldStart),this._panOffset.copy(td).negate(),this.update())}};var rd={stencilWrite:!0,stencilRef:1,stencilFunc:Su},ln=8,Wf=96,ww=64,Sw=4;function Mw(n){return n<450?16:n<1300?15:n<3600?14:13}function Ew(n,e,t){let i=2**n;return[e/i*360-180,Math.atan(Math.sinh(Math.PI*(1-2*t/i)))*180/Math.PI]}function nd(n,e,t){let i=2**n,r=t*Math.PI/180;return[(e+180)/360*i,(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i]}function id(n,e){let t=(n-26e5)/1e6,i=(e-12e5)/1e6,r=2.6779094+4.728982*t+.791484*t*i+.1306*t*i*i-.0436*t**3,s=16.9023892+3.238272*i-.270978*t*t-.002528*i*i-.0447*t*t*i-.014*i**3;return[r*100/36,s*100/36]}function Tw(n,e,t,i,r=ww){let[s,o]=id(e-i,t-i),[a,l]=id(e+i,t+i),[c,u]=nd(n,s,l),[h,d]=nd(n,a,o),[f,y]=nd(n,...id(e,t)),w=2**n,g=[];for(let p=Math.max(0,Math.floor(c));p<=Math.min(w-1,Math.floor(h));p++)for(let C=Math.max(0,Math.floor(u));C<=Math.min(w-1,Math.floor(d));C++)g.push({tile:[p,C],distance:Math.hypot(p+.5-f,C+.5-y)});return g.sort((p,C)=>p.distance-C.distance).slice(0,r).map(p=>p.tile)}var Pl=class{constructor(e){He(this,"options",e);He(this,"patches",new Map);He(this,"wanted",new Set);He(this,"running",0);He(this,"dark",!1);He(this,"visible",!0);He(this,"generation",0);He(this,"clock",0);He(this,"disposed",!1)}update(e,t,i,r){if(this.disposed||!this.visible)return;let s=Mw(i),o=Tw(s,e,t,Math.min(r,s===13?7e3:r));this.wanted=new Set(o.map(([l,c])=>`${s}/${l}/${c}`)),this.clock++;let a=!1;for(let[l,c]of this.patches){let u=this.wanted.has(l);c.mesh&&c.mesh.visible!==u&&(c.mesh.visible=u,a=!0),u&&(c.used=this.clock)}for(let[l,c]of o)this.request(s,l,c);this.evict(),a&&this.options.changed()}setDark(e){e!==this.dark&&(this.dark=e,this.clear())}setVisible(e){this.visible=e;for(let t of this.patches.values())t.mesh&&(t.mesh.visible=e&&this.wanted.has(t.key));this.options.changed()}reshape(){for(let e of this.patches.values()){if(!e.mesh)continue;let[t,i,r]=e.key.split("/").map(Number);e.mesh.geometry.dispose(),e.mesh.geometry=this.geometry(t,i,r)}this.options.changed()}clear(){this.generation++;for(let e of[...this.patches.keys()])this.drop(e);this.options.changed()}dispose(){this.disposed=!0,this.clear()}request(e,t,i){let r=`${e}/${t}/${i}`;if(this.patches.has(r)||this.running>=Sw)return;let s={key:r,mesh:null,texture:null,loading:!0,failed:!1,used:this.clock};this.patches.set(r,s),this.running++;let o=this.generation;this.options.load(e,t,i,this.dark).then(async a=>{let l=await this.options.win.createImageBitmap(new Blob([new Uint8Array(a).slice()]));if(this.disposed||o!==this.generation||this.patches.get(r)!==s){l.close();return}let c=new $t(l);c.colorSpace=rn,c.flipY=!1,c.anisotropy=4,c.needsUpdate=!0;let u=new Rt(this.geometry(e,t,i),new Rn({map:c,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,...rd}));u.matrixAutoUpdate=!1,u.renderOrder=-1,u.visible=this.visible&&this.wanted.has(r),s.mesh=u,s.texture=c,this.options.scene.add(u)}).catch(()=>{s.failed=!0}).finally(()=>{if(s.loading=!1,this.running--,!(this.disposed||o!==this.generation)){for(let a of this.wanted)if(!this.patches.has(a)){let[l,c,u]=a.split("/").map(Number);this.request(l,c,u);break}this.options.changed()}})}geometry(e,t,i){let r=new Float32Array((ln+1)*(ln+1)*3),s=new Float32Array((ln+1)*(ln+1)*2);for(let c=0;c<=ln;c++)for(let u=0;u<=ln;u++){let h=u/ln,d=c/ln,[f,y]=Ew(e,t+h,i+d),[w,g]=nr(y,f),p=this.options.toScene(w,g,this.options.height(w,g)-.6),C=c*(ln+1)+u;r.set([p.x,p.y,p.z],C*3),s.set([h,d],C*2)}let o=new Uint16Array(ln*ln*6),a=0;for(let c=0;c<ln;c++)for(let u=0;u<ln;u++){let h=c*(ln+1)+u,d=h+1,f=h+ln+1,y=f+1;o.set([h,f,d,d,f,y],a),a+=6}let l=new It;return l.setAttribute("position",new gt(r,3)),l.setAttribute("uv",new gt(s,2)),l.setIndex(new gt(o,1)),l.computeBoundingSphere(),l}drop(e){let t=this.patches.get(e);t&&(t.mesh&&(this.options.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()),t.texture?.dispose(),t.texture?.image?.close?.(),this.patches.delete(e))}evict(){for(let[t,i]of this.patches)i.failed&&!this.wanted.has(t)&&this.drop(t);if(this.patches.size<=Wf)return;let e=[...this.patches.values()].filter(t=>!t.loading&&!this.wanted.has(t.key)).sort((t,i)=>t.used-i.used);for(let t of e.slice(0,this.patches.size-Wf))this.drop(t.key)}};function Js(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?{minX:e,minY:t,maxX:i,maxY:r}:null}var Il=(n,e)=>n.minX<=e.maxX&&n.maxX>=e.minX&&n.minY<=e.maxY&&n.maxY>=e.minY;function Aw(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function Zf(n){let e=0;for(let t=0,i=n.length-1;t<n.length;i=t++)e+=(n[i][0]-n[t][0])*(n[i][1]+n[t][1]);return Math.abs(e/2)}var Cw=n=>n.reduce((e,[t,...i])=>e+(t?Zf(t)-i.reduce((r,s)=>r+Zf(s),0):0),0);function Pw(n,e,t,i,r){let s=Math.min(Math.max(Math.ceil(Math.sqrt(i/2)),1),24),o=0;for(let a=0;a<s;a++)for(let l=0;l<s-a;l++)for(let c=1;c<=(l<s-a-1?2:1);c++){let u=(a+c/3)/s,h=(l+c/3)/s,d=[n[0]+(e[0]-n[0])*u+(t[0]-n[0])*h,n[1]+(e[1]-n[1])*u+(t[1]-n[1])*h];r.some(f=>Aw(d,f))&&o++}return o/(s*s)}function Iw(n,e,t){let i=Js(t),r=Cw(t),s=[0,0,0],o=[0,0,0];for(let l=n[1];l<n[1]+n[2];l++){let c=e.indices[l*3],u=e.kinds[c];if(u!==1&&u!==2)continue;let h=e.point(c),d=e.point(e.indices[l*3+1]),f=e.point(e.indices[l*3+2]),y=Math.abs((d[0]-h[0])*(f[1]-h[1])-(f[0]-h[0])*(d[1]-h[1]))/2;if(y<.01)continue;s[u]+=y,i&&Il(i,{minX:Math.min(h[0],d[0],f[0]),minY:Math.min(h[1],d[1],f[1]),maxX:Math.max(h[0],d[0],f[0]),maxY:Math.max(h[1],d[1],f[1])})&&(o[u]+=y*Pw(h,d,f,y,t))}let a=s[2]>0?2:1;return{share:s[a]?o[a]/s[a]:0,cover:r?o[a]/r:0,inside:o[a]}}var Rw=n=>n.inside>=1&&(n.share>=.5||n.cover>=.3);function $f(n,e,t){let i=Js(t);return i?n.filter(r=>Il(i,{minX:r[3],minY:r[4],maxX:r[6],maxY:r[7]})&&Rw(Iw(r,e,t))):[]}var sd=220,Nw=6,si=400,od={east:2683250,north:1247900,distance:1600},Lw=new on().setFromAxisAngle(new $(1,0,0),-Math.PI/2);function kw(n,e){let[t,i,r]=n.origin,[s,o,a]=n.step,l=new xt().compose(new $(t-e[0],r-si,e[1]-i),Lw,new $(s,o,a)),c=new Uint16Array(n.vertexCount*4);for(let h=0,d=0;h<c.length;h+=4,d+=3)c[h]=n.positions[d],c[h+1]=n.positions[d+1],c[h+2]=n.positions[d+2];let u=new It;return u.setAttribute("position",new Gi(new Ir(c,4),3,0)),u.setAttribute("color",new gt(new Uint8Array(n.vertexCount*4).fill(255),4,!0)),u.setIndex(new gt(n.indices,1)),u.computeBoundingSphere(),{geometry:u,matrix:l}}function ad(n,e){return n.matrixAutoUpdate=!1,n.matrix.copy(e),n.matrixWorld.copy(e),n}function Dw(n,e){let t=n.trim(),i=t.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);if(i)return new ze(Number(i[1]),Number(i[2]),Number(i[3]));let r=t.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);return r?new ze(Number(r[1])/255,Number(r[2])/255,Number(r[3])/255):/^#[0-9a-f]{3,8}$/i.test(t)?new ze(t.slice(0,7)):new ze(e)}function Ow(n){return .2126*n.r+.7152*n.g+.0722*n.b}var Rl=class{constructor(e,t,i){He(this,"container",e);He(this,"events",t);He(this,"doc");He(this,"win");He(this,"canvas");He(this,"renderer");He(this,"scene",new ws);He(this,"camera",new Jt(45,1,1,2e4));He(this,"controls");He(this,"material",new ii({vertexColors:!0,flatShading:!0,side:Vt}));He(this,"groundMaterial",new ii({side:Vt,...rd}));He(this,"highlightMaterial",new ii({flatShading:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));He(this,"ghostMaterial",new ii({flatShading:!0,side:Vt,transparent:!0,opacity:.16,depthWrite:!1}));He(this,"hiddenMaterial",new Rn({visible:!1}));He(this,"floorMaterial",new ii({vertexColors:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));He(this,"floorLineMaterial",new Lr({transparent:!0,opacity:.55}));He(this,"floorMaskMaterial",new Rn({colorWrite:!1,depthWrite:!1,depthTest:!1,side:Vt,stencilWrite:!0,stencilRef:1,stencilZPass:wu}));He(this,"area",null);He(this,"areaMeshes",new Map);He(this,"floorMeshes",[]);He(this,"tiles",new Map);He(this,"loading",new Set);He(this,"failed",new Set);He(this,"raycaster",new Zi);He(this,"observers",[]);He(this,"palette");He(this,"index",null);He(this,"origin",[2683e3,1247e3]);He(this,"ground",null);He(this,"colorMode","surfaces");He(this,"highlight",null);He(this,"frame",0);He(this,"lastTileUpdate",0);He(this,"fly",null);He(this,"cameraTimer",0);He(this,"disposed",!1);He(this,"pointerDown",null);He(this,"groundMap");He(this,"pendingCamera");He(this,"groundVisible",!0);He(this,"groundReady",!1);He(this,"pendingPlace",null);He(this,"schedule",()=>{this.frame||this.disposed||(this.frame=this.win.requestAnimationFrame(this.tick))});He(this,"tick",e=>{if(this.frame=0,this.disposed)return;let t=!1;if(this.fly){let o=Math.min((e-this.fly.start)/this.fly.duration,1),a=o<.5?4*o*o*o:1-(-2*o+2)**3/2;this.camera.position.lerpVectors(this.fly.from,this.fly.to,a),this.controls.target.lerpVectors(this.fly.fromTarget,this.fly.toTarget,a),o>=1&&(this.fly=null,this.saveCameraSoon()),t=!0}t=this.controls.update()||t;let i=this.camera.position.distanceTo(this.controls.target),r=this.viewRadius(i);this.camera.near=Math.max(.5,i/800),this.camera.far=r*1.6+i*2,this.camera.updateProjectionMatrix();let s=this.scene.fog;s.near=r*.55+i*.5,s.far=r*1.05+i,this.renderer.render(this.scene,this.camera),(e-this.lastTileUpdate>200||!t)&&(this.lastTileUpdate=e,this.updateTiles(r)),t&&this.schedule()});He(this,"selectedKey",null);He(this,"selectedBuilding",null);He(this,"saveCameraSoon",()=>{this.win.clearTimeout(this.cameraTimer),this.cameraTimer=this.win.setTimeout(()=>{this.disposed||!this.index||this.events.onCamera({position:this.fromScene(this.camera.position),target:this.fromScene(this.controls.target)})},800)});this.doc=e.ownerDocument,this.win=this.doc.defaultView??window;let r=t.tile;this.groundMap=r?new Pl({scene:this.scene,win:this.win,load:r,changed:()=>this.schedule(),toScene:(a,l,c)=>this.toScene(a,l,c),height:(a,l)=>this.groundHeight(a,l)}):null,this.canvas=this.doc.createElement("canvas"),this.canvas.className="z3d-canvas",e.appendChild(this.canvas),this.renderer=new wl({canvas:this.canvas,antialias:!0,stencil:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(this.win.devicePixelRatio||1,2)),this.controls=new Cl(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!1,this.controls.zoomToCursor=!0,this.controls.minDistance=15,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.48,this.controls.addEventListener("change",this.schedule),this.controls.addEventListener("end",this.saveCameraSoon);let s=new Os(16777215,9077880,1.6),o=new Fs(16777215,1.9);o.position.set(-.45,.8,.35),this.scene.add(s,o),this.scene.fog=new _s(0,3e3,8e3),this.readTheme(),this.pendingCamera=i,this.listen(),this.resize()}setIndex(e){if(this.index===e)return;if(this.clearTiles(),this.groundMap?.clear(),this.index=e,!e){this.schedule();return}this.origin=[Math.round((e.bounds[0]+e.bounds[3])/2),Math.round((e.bounds[1]+e.bounds[4])/2)];let t=this.pendingCamera;this.pendingCamera=null,t?(this.camera.position.copy(this.toScene(t.position[0],t.position[1],t.position[2])),this.controls.target.copy(this.toScene(t.target[0],t.target[1],t.target[2]))):this.place(od.east,od.north,od.distance,!1),this.controls.update(),this.groundReady=!1,this.loadGround(e),this.schedule()}setColorMode(e){if(this.colorMode!==e){this.colorMode=e;for(let t of this.tiles.values())this.paint(t);this.schedule()}}setShowGround(e){this.groundVisible=e,this.ground&&(this.ground.mesh.visible=e&&!this.groundMap),this.groundMap?.setVisible(e),this.lastTileUpdate=0,this.schedule()}flyTo(e,t,i){this.place(e,t,i,!0)}zoomBy(e){let t=this.controls.target.clone(),i=this.camera.position.clone().sub(t),r=Math.min(Math.max(i.length()*(e>0?.6:1/.6),this.controls.minDistance),this.controls.maxDistance),s=t.clone().add(i.normalize().multiplyScalar(r));this.fly={from:this.camera.position.clone(),to:s,fromTarget:t.clone(),toTarget:t,start:this.win.performance.now(),duration:350},this.schedule()}clearSelection(){this.select(null)}setArea(e){if(this.clearArea(),this.area=e,e)for(let t of this.tiles.values())this.applyArea(t);this.syncHighlight(),this.buildFloor(),this.schedule()}flyToArea(e,t=!1){let i=1/0,r=1/0,s=-1/0,o=-1/0;for(let l of e)for(let[c,u]of l[0]??[])i=Math.min(i,c),r=Math.min(r,u),s=Math.max(s,c),o=Math.max(o,u);if(!Number.isFinite(i))return;let a=Math.max(s-i,o-r);this.place((i+s)/2,(r+o)/2,Math.min(Math.max(a*(t?2:2.4),t?90:140),1600),!0)}areaBuildings(){return[...this.areaMeshes.values()].flatMap(e=>e.userData.buildings)}applyArea(e){if(!this.area||this.areaMeshes.has(e.entry.key))return!1;let t=e.mesh.geometry,i=t.getIndex();if(!i||!this.tileReaches(e.entry,this.area.polygons))return!1;let r=i.array,s=t.getAttribute("position"),[o,a]=e.origin,[l,c]=e.step,u=$f(e.buildings,{indices:r,kinds:e.kinds,point:p=>[o+s.getX(p)*l,a+s.getY(p)*c]},this.area.polygons);if(!u.length)return!1;let h=u.map(p=>[p[1]*3,p[2]*3]).sort((p,C)=>p[0]-C[0]),d=new r.constructor(h.reduce((p,[,C])=>p+C,0)),f=0;for(let[p,C]of h)d.set(r.subarray(p,p+C),f),f+=C;let y=new It;y.setAttribute("position",t.getAttribute("position")),y.setIndex(new gt(d,1));let w=!!this.area.floor,g=ad(new Rt(y,w?this.ghostMaterial:this.highlightMaterial),e.matrix);if(g.renderOrder=w?2:0,g.userData.buildings=u,this.areaMeshes.set(e.entry.key,g),this.scene.add(g),w){t.clearGroups();let p=0;for(let[C,N]of h)C>p&&t.addGroup(p,C-p,0),t.addGroup(C,N,1),p=C+N;p<r.length&&t.addGroup(p,r.length-p,0),e.mesh.material=[this.material,this.hiddenMaterial]}return!0}tileReaches(e,t){let i=Js(t);return!!i&&Il(i,{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[3],maxY:e.bounds[4]})}syncHighlight(){if(!this.highlight)return;let{key:e,building:t}=this.highlight,i=this.area?.floor?this.areaMeshes.get(e)?.userData.buildings:void 0;this.highlight.mesh.visible=!i?.some(r=>r[1]===t[1])}removeAreaMesh(e){let t=this.areaMeshes.get(e);if(!t)return;this.scene.remove(t),t.geometry.dispose(),this.areaMeshes.delete(e);let i=this.tiles.get(e);i&&(i.mesh.geometry.clearGroups(),i.mesh.material=this.material)}clearArea(){for(let e of[...this.areaMeshes.keys()])this.removeAreaMesh(e);this.clearFloor()}clearFloor(){for(let e of this.floorMeshes){this.scene.remove(e);let t=e.userData.dispose;t?t():e.geometry.dispose()}this.floorMeshes=[]}hatchTexture(){let e=this.doc.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.strokeStyle=`#${this.palette.accent.getHexString()}`,t.lineWidth=16;for(let r of[-64,0,64])t.beginPath(),t.moveTo(r,64),t.lineTo(r+64,0),t.stroke();let i=new kr(e);return i.wrapS=i.wrapT=Sr,i}labelSprite(e,t){let i=this.doc.createElement("canvas"),r=i.getContext("2d"),s=`700 56px ${this.win.getComputedStyle(this.container).fontFamily||"system-ui, sans-serif"}`;r.font=s,i.width=Math.ceil(r.measureText(e).width+40),i.height=84,r.font=s,r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=12,r.strokeStyle="rgba(0, 0, 0, 0.75)",r.fillStyle="#ffffff",r.strokeText(e,i.width/2,i.height/2),r.fillText(e,i.width/2,i.height/2);let o=new kr(i),a=new Rr({map:o,depthTest:!1,transparent:!0}),l=new Es(a);return l.scale.set(t*i.width/i.height,t,1),l.renderOrder=4,l.userData.dispose=()=>{o.dispose(),a.dispose()},l}floorBase(e){let t=this.areaBuildings();if(t.length)return Math.min(...t.map(s=>s[5]));let i=Js(e);if(!i||!this.groundReady)return null;let r=this.index?.tiles.filter(s=>this.tileReaches(s,e))??[];return!r.length||r.some(s=>!this.tiles.has(s.key)&&!this.failed.has(s.key))?null:this.groundHeight((i.minX+i.maxX)/2,(i.minY+i.maxY)/2)}buildFloor(){this.clearFloor();let e=this.area?.floor,t=e?this.floorBase(this.area.polygons):null;if(!e||t===null){this.schedule();return}let i=t+e.elevation+.2,r=[],s=[],o=[],a=[],l=null,c=new ze;for(let u of e.rooms){if(c.set(u.color),u.picked&&u.label){let h=u.polygons[0]?.[0]??[],d=h.map(([g])=>g-this.origin[0]),f=h.map(([,g])=>g-this.origin[1]),y=Math.max(...d)-Math.min(...d),w=Math.max(...f)-Math.min(...f);h.length&&(l={text:u.label,x:(Math.max(...d)+Math.min(...d))/2,y:(Math.max(...f)+Math.min(...f))/2,size:Math.min(Math.max(Math.min(y,w)*.35,2.5),7)})}for(let h of u.polygons){let d=h.map(g=>{let p=g.map(([C,N])=>new Be(C-this.origin[0],N-this.origin[1]));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(g=>g.length>=3);if(!d.length)continue;let[f,...y]=d,w=[f,...y].flat();for(let[g,p,C]of Ns.triangulateShape(f,y))for(let N of[g,p,C]){let S=w[N];r.push(S.x,i-si,-S.y),s.push(c.r,c.g,c.b),u.picked&&a.push(S.x,i-si+.08,-S.y)}for(let g of d)for(let p=0;p<g.length;p++){let C=g[p],N=g[(p+1)%g.length];o.push(C.x,i-si+.05,-C.y,N.x,i-si+.05,-N.y)}}}if(r.length){let u=new It;u.setAttribute("position",new gt(new Float32Array(r),3)),u.setAttribute("color",new gt(new Float32Array(s),3)),u.computeVertexNormals();let h=new Rt(u,this.floorMaterial);h.renderOrder=1;let d=new Rt(u,this.floorMaskMaterial);d.renderOrder=-2,d.userData.dispose=()=>{},this.floorMeshes.push(h,d)}if(o.length){let u=new It;u.setAttribute("position",new gt(new Float32Array(o),3));let h=new Ts(u,this.floorLineMaterial);h.renderOrder=1,this.floorMeshes.push(h)}if(a.length){let u=new It;u.setAttribute("position",new gt(new Float32Array(a),3));let h=new Float32Array(a.length/3*2);for(let w=0,g=0;w<a.length;w+=3,g+=2)h[g]=a[w]/1.5,h[g+1]=-a[w+2]/1.5;u.setAttribute("uv",new gt(h,2));let d=this.hatchTexture(),f=new Rn({map:d,transparent:!0,depthWrite:!1,side:Vt,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),y=new Rt(u,f);y.renderOrder=3,y.userData.dispose=()=>{u.dispose(),d.dispose(),f.dispose()},this.floorMeshes.push(y)}if(l){let u=this.labelSprite(l.text,l.size);u.position.set(l.x,i-si+l.size*.6+.5,-l.y),this.floorMeshes.push(u)}for(let u of this.floorMeshes)this.scene.add(u);this.schedule()}dispose(){this.disposed=!0,this.frame&&this.win.cancelAnimationFrame(this.frame),this.win.clearTimeout(this.cameraTimer);for(let e of this.observers)e();this.controls.dispose(),this.clearTiles(),this.ground&&(this.ground.mesh.geometry.dispose(),this.ground=null),this.material.dispose(),this.groundMaterial.dispose(),this.groundMap?.dispose(),this.highlightMaterial.dispose(),this.clearArea();for(let e of[this.ghostMaterial,this.hiddenMaterial,this.floorMaterial,this.floorLineMaterial,this.floorMaskMaterial])e.dispose();this.renderer.dispose(),this.canvas.remove()}toScene(e,t,i){return new $(e-this.origin[0],i-si,-(t-this.origin[1]))}fromScene(e){return[Math.round((e.x+this.origin[0])*100)/100,Math.round((this.origin[1]-e.z)*100)/100,Math.round((e.y+si)*100)/100]}groundHeight(e,t){let i=this.ground;if(!i)return this.index?Math.max(this.index.bounds[2],400):410;let r=Math.min(Math.max((e-i.originX)/i.cell,0),i.columns-1),s=Math.min(Math.max((t-i.originY)/i.cell,0),i.rows-1),o=Math.floor(r),a=Math.floor(s),l=Math.min(o+1,i.columns-1),c=Math.min(a+1,i.rows-1),u=r-o,h=s-a,d=(y,w)=>i.heights[w*i.columns+y],f=(d(o,a)*(1-u)+d(l,a)*u)*(1-h)+(d(o,c)*(1-u)+d(l,c)*u)*h;return Number.isNaN(f)?Math.max(this.index?.bounds[2]??400,400):f}groundSettled(){this.groundReady=!0,this.area?.floor&&this.buildFloor();let e=this.pendingPlace;this.pendingPlace=null,e&&this.place(e[0],e[1],e[2],!0)}place(e,t,i,r){if(r&&this.index&&!this.groundReady){this.pendingPlace=[e,t,i];return}let s=this.toScene(e,t,this.groundHeight(e,t)),o=this.camera.position.clone().sub(this.controls.target);(o.lengthSq()<1||o.y/o.length()>.95||o.y/o.length()<.25)&&o.set(.35,.75,.55),o.normalize().multiplyScalar(i);let a=s.clone().add(o);if(!r){this.camera.position.copy(a),this.controls.target.copy(s),this.schedule();return}this.fly={from:this.camera.position.clone(),to:a,fromTarget:this.controls.target.clone(),toTarget:s,start:this.win.performance.now(),duration:1200},this.schedule()}viewRadius(e){return Math.min(Math.max(e*2.6,1300),7500)}updateTiles(e){let t=this.index;if(!t)return;let i=this.controls.target,r=i.x+this.origin[0],s=this.origin[1]-i.z;this.groundMap?.update(r,s,this.camera.position.distanceTo(i),e);let o=t.tileSize/2,a=c=>Math.hypot(c.x*t.tileSize+o-r,c.y*t.tileSize+o-s),l=t.tiles.map(c=>({entry:c,distance:a(c)})).filter(c=>c.distance<=e).sort((c,u)=>c.distance-u.distance);for(let[c,u]of this.tiles)a(u.entry)>e*1.4&&this.unload(c);if(this.tiles.size>sd){let c=[...this.tiles.values()].sort((u,h)=>a(h.entry)-a(u.entry));for(let u of c.slice(0,this.tiles.size-sd))this.unload(u.entry.key)}for(let{entry:c}of l){if(this.loading.size>=Nw)break;if(!(this.tiles.has(c.key)||this.loading.has(c.key)||this.failed.has(c.key))){if(this.tiles.size+this.loading.size>=sd)break;this.load(c)}}this.events.onTiles(this.tiles.size,this.loading.size)}async load(e){let t=this.index;this.loading.add(e.key);try{let[i,r]=await Promise.all([this.events.read(`tiles/${e.key}.bin.gz`,e.bytes),this.events.read(`tiles/${e.key}.json`)]);if(this.disposed||this.index!==t)return;let s=xh(await wh(i)),o=JSON.parse(new TextDecoder().decode(r));if(this.disposed||this.index!==t)return;let{geometry:a,matrix:l}=kw(s,this.origin),c=ad(new Rt(a,this.material),l),u={entry:e,mesh:c,buildings:o,kinds:s.kinds,matrix:l,origin:[s.origin[0],s.origin[1]],step:[s.step[0],s.step[1]]};this.paint(u),this.tiles.set(e.key,u),this.scene.add(c),this.selectedKey===e.key&&this.selectedBuilding&&this.showHighlight(u,this.selectedBuilding);let h=this.applyArea(u);this.syncHighlight(),this.area?.floor&&(h||!this.areaMeshes.size)&&this.buildFloor()}catch(i){this.failed.add(e.key),this.events.onError(i instanceof Error?i.message:String(i)),this.area?.floor&&!this.areaMeshes.size&&this.buildFloor()}finally{this.loading.delete(e.key),this.lastTileUpdate=0,this.schedule()}}unload(e){let t=this.tiles.get(e);t&&(this.highlight?.key===e&&this.removeHighlight(),this.removeAreaMesh(e),this.scene.remove(t.mesh),t.mesh.geometry.dispose(),this.tiles.delete(e))}clearTiles(){for(let e of[...this.tiles.keys()])this.unload(e);this.failed.clear(),this.events.onTiles(0,this.loading.size)}paint(e){let t=e.mesh.geometry.getAttribute("color"),i=t.array,{kinds:r}=e,s=this.palette,o=this.colorMode==="height",a=(u,h)=>{i[u*4]=h.r*255,i[u*4+1]=h.g*255,i[u*4+2]=h.b*255},l=o?this.ramp(0,!1,new ze):s.wall,c=o?this.ramp(0,!0,new ze):s.roof;for(let u=0;u<r.length;u++)a(u,r[u]===1?c:r[u]===2?s.footprint:l);if(o){let u=e.mesh.geometry.getIndex().array,h=new ze,d=new ze;for(let f of e.buildings){let y=f[8]-f[5];this.ramp(y,!1,h),this.ramp(y,!0,d);let w=(f[1]+f[2])*3;for(let g=f[1]*3;g<w;g++){let p=u[g],C=r[p];C!==2&&a(p,C===1?d:h)}}}t.needsUpdate=!0}ramp(e,t,i){let r=this.palette.ramp,s=Math.min(Math.max(e/60,0),1)*(r.length-1),o=Math.floor(s);return i.copy(r[o]).lerp(r[Math.min(o+1,r.length-1)],s-o),t&&i.offsetHSL(0,0,.05),i}async loadGround(e){let t=e.ground;if(!t){this.groundSettled();return}try{let i=await this.events.read(t.file,t.columns*t.rows*4);if(this.disposed||this.index!==e)return;let r=new Float32Array(i.slice(0,t.columns*t.rows*4)),s=new Float32Array(t.columns*t.rows*3);for(let u=0;u<t.rows;u++)for(let h=0;h<t.columns;h++){let d=u*t.columns+h;s[d*3]=t.originX+h*t.cell-this.origin[0],s[d*3+1]=Number.isNaN(r[d])?0:r[d]-si-.4,s[d*3+2]=this.origin[1]-(t.originY+u*t.cell)}let o=new Uint32Array((t.columns-1)*(t.rows-1)*6),a=0;for(let u=0;u<t.rows-1;u++)for(let h=0;h<t.columns-1;h++){let d=u*t.columns+h,f=d+1,y=d+t.columns,w=y+1;Number.isNaN(r[d])||Number.isNaN(r[f])||Number.isNaN(r[y])||Number.isNaN(r[w])||(o[a++]=d,o[a++]=y,o[a++]=f,o[a++]=f,o[a++]=y,o[a++]=w)}let l=new It;l.setAttribute("position",new gt(s,3)),l.setIndex(new gt(o.subarray(0,a),1)),l.computeVertexNormals();let c=new Rt(l,this.groundMaterial);c.matrixAutoUpdate=!1,c.visible=this.groundVisible&&!this.groundMap,c.renderOrder=-1,this.ground={mesh:c,heights:r,...t},this.groundMap?.reshape(),this.scene.add(c),this.schedule(),this.groundSettled()}catch(i){this.events.onError(i instanceof Error?i.message:String(i)),this.groundSettled()}}select(e){this.removeHighlight(),this.selectedKey=e?.tile.entry.key??null,this.selectedBuilding=e?.building??null,e&&this.showHighlight(e.tile,e.building);let t=e?.building;this.events.onSelect(t?{egid:t[0],ground:t[5],roof:t[8],height:Math.round((t[8]-t[5])*10)/10,triangles:t[2],center:[(t[3]+t[6])/2,(t[4]+t[7])/2]}:null,e?.at),this.schedule()}showHighlight(e,t){let i=e.mesh.geometry,r=i.getIndex();if(!r)return;let s=new It;s.setAttribute("position",i.getAttribute("position")),s.setIndex(new gt(r.array.slice(t[1]*3,(t[1]+t[2])*3),1));let o=ad(new Rt(s,this.highlightMaterial),e.matrix);this.highlight={mesh:o,key:e.entry.key,building:t},this.syncHighlight(),this.scene.add(o)}removeHighlight(){this.highlight&&(this.scene.remove(this.highlight.mesh),this.highlight.mesh.geometry.dispose(),this.highlight=null)}pick(e,t){let i=this.canvas.getBoundingClientRect(),r=new Be((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let s=[...this.tiles.values()].map(h=>h.mesh),[o]=this.raycaster.intersectObjects(s,!1);if(!o||o.faceIndex==null){this.select(null);return}let a=[...this.tiles.values()].find(h=>h.mesh===o.object),l=a?_h(a.buildings,o.faceIndex):null,[c,u]=this.fromScene(o.point.addScaledVector(this.raycaster.ray.direction,1));this.select(a&&l?{tile:a,building:l,at:[c,u]}:null)}readTheme(){let e=this.doc.createElement("span");e.style.display="none",this.container.appendChild(e);let t=(o,a)=>(e.style.color=`var(${o}, ${a})`,Dw(this.win.getComputedStyle(e).color,a)),i=t("--pane-bg","#181818"),r=t("--accent-color","#3b82f6");e.remove();let s=Ow(i)<.4;this.groundMap?.setDark(s),this.palette=s?{background:i,accent:r,wall:new ze("#8f8d88"),roof:new ze("#a77561"),footprint:new ze("#4a4946"),ground:new ze("#2b2b2a"),ramp:["#56657a","#6f8a8c","#a3a07c","#c08b63","#c9665a"].map(o=>new ze(o))}:{background:i,accent:r,wall:new ze("#d9d6d0"),roof:new ze("#b97a5f"),footprint:new ze("#b5b2ab"),ground:new ze("#e4e1da"),ramp:["#8ea2bd","#97b7b3","#d0c896","#dda57a","#d9756a"].map(o=>new ze(o))},this.renderer.setClearColor(i),this.scene.fog.color.copy(i),this.groundMaterial.color.copy(this.palette.ground),this.highlightMaterial.color.copy(r),this.ghostMaterial.color.copy(r),this.floorLineMaterial.color.copy(s?new ze("#d6d3cc"):new ze("#3a3a38"));for(let o of this.tiles.values())this.paint(o);this.schedule()}listen(){let e=this.win.ResizeObserver??ResizeObserver,t=new e(()=>this.resize());t.observe(this.container),this.observers.push(()=>t.disconnect());let i=this.win.MutationObserver??MutationObserver,r=new i(()=>this.readTheme());r.observe(this.doc.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.doc.body&&r.observe(this.doc.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.observers.push(()=>r.disconnect());let s=this.win.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>this.readTheme();s?.addEventListener("change",o),this.observers.push(()=>s?.removeEventListener("change",o));let a=h=>{h.button===0&&(this.pointerDown={x:h.clientX,y:h.clientY,time:h.timeStamp})},l=h=>{let d=this.pointerDown;this.pointerDown=null,!(!d||h.button!==0)&&Math.hypot(h.clientX-d.x,h.clientY-d.y)<4&&h.timeStamp-d.time<500&&this.pick(h.clientX,h.clientY)},c=h=>{h.preventDefault(),this.events.onError("WebGL context lost")},u=()=>this.schedule();this.canvas.addEventListener("pointerdown",a),this.canvas.addEventListener("pointerup",l),this.canvas.addEventListener("webglcontextlost",c),this.canvas.addEventListener("webglcontextrestored",u),this.observers.push(()=>{this.canvas.removeEventListener("pointerdown",a),this.canvas.removeEventListener("pointerup",l),this.canvas.removeEventListener("webglcontextlost",c),this.canvas.removeEventListener("webglcontextrestored",u)})}resize(){let e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.schedule()}};function Nl(){return D.createElement(D.Fragment,null,D.createElement("strong",null,tt("model.missingTitle")),D.createElement("span",null,tt("model.missingText")),D.createElement("code",null,"npm run update-model && npm run build"))}var Ll=null;function Xf(n){Ll?.zoomBy(n)}function zw(){let n=Qe.settings.get().camera;return n&&Array.isArray(n.position)&&Array.isArray(n.target)?n:null}function qf({area:n,focus:e,onPick:t}){let i=Ri(),r=D.useRef(null),s=D.useRef(null),[o,a]=D.useState(null),l=D.useRef(t);l.current=t,D.useEffect(()=>{go()},[]),D.useEffect(()=>{let u=r.current;if(!u)return;let h;try{h=new Rl(u,{read:Ch,onTiles:(d,f)=>{let y=Ii();(y.loadedTiles!==d||y.loadingTiles!==f)&&Mn({loadedTiles:d,loadingTiles:f})},onSelect:(d,f)=>{Mn({selected:d}),l.current?.(d?[...f?[f]:[],d.center]:[])},onCamera:d=>{Qe.settings.set("camera",d)},onError:d=>a(d),tile:(d,f,y,w)=>Qe.backend.call("campus.tile",{z:d,x:f,y,dark:w},{encoding:"bytes"})},zw())}catch(d){a(d instanceof Error?d.message:String(d));return}return s.current=h,Ll=h,()=>{Ll===h&&(Ll=null),s.current=null,h.dispose()}},[]),D.useEffect(()=>{s.current?.setIndex(i.status==="ready"?i.index:null)},[i.status,i.index]),D.useEffect(()=>{s.current?.setColorMode(i.colorMode)},[i.colorMode]),D.useEffect(()=>{s.current?.setShowGround(i.showGround)},[i.showGround]),D.useEffect(()=>{s.current?.setArea(n)},[n]);let c=D.useRef(0);return D.useEffect(()=>{!e||e===c.current||!n||i.status!=="ready"||(c.current=e,s.current?.flyToArea(n.focus??n.polygons,!!n.floor))},[e,i.status,n?1:0]),D.useEffect(()=>{let u=Ii().flyTarget;i.flyRequest&&u&&s.current?.flyTo(u.east,u.north,u.distance)},[i.flyRequest]),D.useEffect(()=>{let u=d=>{d.key==="Escape"&&Ii().selected&&s.current?.clearSelection()},h=r.current?.ownerDocument;return h?.addEventListener("keydown",u),()=>h?.removeEventListener("keydown",u)},[]),D.createElement("div",{className:"z3d-stage",ref:r},i.status==="loading"&&D.createElement("div",{className:"z3d-message"},tt("model.loading")),i.status==="missing"&&D.createElement("div",{className:"z3d-message"},D.createElement(Nl,null)),i.status==="error"&&D.createElement("div",{className:"z3d-message"},D.createElement("strong",null,tt("model.errorTitle")),D.createElement("span",{className:"z3d-error"},i.error)),o&&i.status==="ready"&&i.loadedTiles===0&&D.createElement("div",{className:"z3d-message"},D.createElement("strong",null,tt("view.failed")),D.createElement("span",{className:"z3d-error"},o)),i.status==="ready"&&i.loadingTiles>0&&D.createElement("div",{className:"z3d-status",role:"status"},tt("view.loadingTiles",{count:i.loadingTiles})))}var eo={teaching:"#4a90d9",lab:"#9a6dd7",office:"#4caf72",circulation:"#b9bdc2",toilet:"#3fb8c6",service:"#8d9298",other:"#e09a3e"},Fw="#f1f0ec",Uw=["teaching","lab","office","circulation","toilet","service","other"],Ol=null,kl=new WeakMap;function Bw(n){let e=kl.get(n);if(e)return e;let t=new Promise((i,r)=>{let s=n.createElement("script");s.type="module",s.src=Qe.assets.url("campus-map.js"),s.onload=()=>{let o=n.defaultView?.valleyPolyCampusMap;o?i(o):(kl.delete(n),s.remove(),r(new Error("mapUnavailable")))},s.onerror=()=>{kl.delete(n),s.remove(),r(new Error("mapUnavailable"))},n.head.appendChild(s)});return kl.set(n,t),t}var Qs=n=>n.map(e=>e.map(t=>t.map(([i,r])=>nr(r,i))));function Hw(n,e){return e.find(t=>t.polygons.some(i=>fh(n,i)))?.code??null}function Vw(n){let e=po.filter(r=>r.campus===n),t=e.map(r=>r.center[0]),i=e.map(r=>r.center[1]);return[Math.min(...t),Math.min(...i),Math.max(...t),Math.max(...i)]}function Gw({outlines:n,selected:e,rooms:t,room:i,focus:r,place:s}){let o=D.useRef(null),a=D.useRef(null),[l,c]=D.useState("loading"),u=D.useRef({outlines:n,selected:e,rooms:t});return u.current={outlines:n,selected:e,rooms:t},D.useEffect(()=>{let h=o.current;if(!h)return;let d=!0,f=null;Bw(h.ownerDocument).then(p=>{if(!d)return;f=p.createCampusMap({container:h,camera:yo,roomColors:eo,tile:(N,S,E,P)=>Qe.backend.call("campus.tile",{z:N,x:S,y:E,dark:P},{encoding:"bytes"}),onSelect:N=>Di(N,Ne("title"),!1),onRoom:N=>Wt({room:N}),onCamera:Nh}),a.current=f,Ol=f;let C=u.current;C.outlines&&f.setOutlines(C.outlines),f.setSelected(C.selected),f.setRooms(C.rooms),c("ready")},()=>{d&&c("error")});let y=h.ownerDocument,w=y.defaultView?.MutationObserver,g=w?new w(()=>a.current?.refreshTheme()):null;return g?.observe(y.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),y.body&&g?.observe(y.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),()=>{d=!1,g?.disconnect(),Ol===f&&(Ol=null),f?.dispose(),a.current=null}},[]),D.useEffect(()=>{n&&a.current?.setOutlines(n)},[n,l]),D.useEffect(()=>{a.current?.setSelected(e)},[e,l]),D.useEffect(()=>{a.current?.setRooms(t)},[t,l]),D.useEffect(()=>{a.current?.setRoom(i?.id??null)},[i,t,l]),D.useEffect(()=>{s&&l==="ready"&&a.current?.flyTo({center:s.center,zoom:s.zoom})},[s?.request,l]),D.useEffect(()=>{if(!r||l!=="ready")return;let h=i?lc(i.polygons):null;if(h){a.current?.fit(h,19.5);return}let d=e?n?.find(w=>w.code===e):null,f=d?lc(d.polygons):null,y=tr(e);f?a.current?.fit(f):y?a.current?.flyTo({center:y.center,zoom:17.5}):a.current?.fit(Vw("zentrum"),16.5)},[r,l,n?1:0]),D.createElement("div",{className:"poly-map-stage",ref:o},l==="loading"&&D.createElement("div",{className:"z3d-message"},Ne("map.loading")),l==="error"&&D.createElement("div",{className:"z3d-message"},D.createElement("span",{className:"z3d-error"},Ne("map.failed"))))}var Dl=n=>D.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},n.map(e=>D.createElement("path",{key:e,d:e})));function Ww({view:n}){let e=Ri(),t=l=>n==="3d"?Xf(l):Ol?.zoomBy(l),i=e.colorMode==="height",r=`${tt("display.color")}: ${tt(i?"display.height":"display.surfaces")}`,s=`${tt("display.ground")} \xB7 ${tt("display.groundHint")}`,o=n==="3d"?"map":"3d",a=Ne(o==="3d"?"view.show3d":"view.show2d");return D.createElement("div",{className:"poly-map-controls","data-tooltip-placement":"left"},D.createElement("button",{type:"button",className:"poly-round-btn",title:Ne("map.zoomIn"),"aria-label":Ne("map.zoomIn"),onClick:()=>t(1)},Dl(["M12 5v14","M5 12h14"])),D.createElement("button",{type:"button",className:"poly-round-btn",title:Ne("map.zoomOut"),"aria-label":Ne("map.zoomOut"),onClick:()=>t(-1)},Dl(["M5 12h14"])),D.createElement("button",{type:"button",className:"poly-round-btn poly-round-text",title:a,"aria-label":a,"data-view":o,onClick:()=>zh(o)},o==="3d"?"3D":"2D"),n==="3d"&&D.createElement(D.Fragment,null,D.createElement("button",{type:"button",className:`poly-round-btn ${i?"active":""}`,"data-control":"colour","aria-pressed":i,title:r,"aria-label":r,onClick:()=>Ph(i?"surfaces":"height")},Dl(["M5 20V12","M10 20V7","M15 20V10","M20 20V4","M3 20h18"])),D.createElement("button",{type:"button",className:`poly-round-btn ${e.showGround?"active":""}`,"data-control":"ground","aria-pressed":e.showGround,title:s,"aria-label":tt("display.ground"),onClick:()=>Ih(!e.showGround)},Dl(["M3 17l5-6 4 4 3-3 6 5","M3 20h18"]))))}function Zw({levels:n,level:e,code:t}){return n.length?D.createElement("div",{className:"poly-floors",role:"group","aria-label":Ne("floors.label",{code:t})},n.map(i=>D.createElement("button",{key:i.id,type:"button",className:i.id===e?"active":"","aria-pressed":i.id===e,title:Ne("floors.show",{floor:i.name}),onClick:()=>Dh(i.id===e?"":i.id)},i.name))):null}function $w({room:n}){return D.createElement("div",{className:"z3d-card poly-room-card",role:"dialog","aria-label":n.name},D.createElement("div",{className:"z3d-card-head"},D.createElement("span",null,n.name),D.createElement("button",{type:"button",className:"z3d-card-close",title:Ne("room.close"),"aria-label":Ne("room.close"),onClick:()=>Wt({room:null})},D.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true"},D.createElement("path",{d:"M18 6 6 18"}),D.createElement("path",{d:"m6 6 12 12"})))),D.createElement("dl",{className:"z3d-facts"},n.type&&D.createElement(D.Fragment,null,D.createElement("dt",null,Ne("room.type")),D.createElement("dd",{title:n.type},n.type)),n.use&&D.createElement(D.Fragment,null,D.createElement("dt",null,Ne("room.use")),D.createElement("dd",{title:n.use},n.use))))}function Xw(){return D.createElement("div",{className:"poly-legend","aria-label":Ne("legend.label")},Uw.map(n=>D.createElement("span",{key:n},D.createElement("i",{style:{background:eo[n]}}),Ne(`room.kind.${n}`))))}function Yf(){let n=ki(),e=Li();D.useEffect(()=>{Lh(),bo()},[]);let t=n.building,i=t?.code??null,r=D.useRef(0);e.focusOn===i&&(r.current=e.focus);let s=i?e.outlines?.find(w=>w.code===i)??null:null,o=i&&e.levels?.get(i)||[],a=o.some(w=>w.id===n.level)?n.level:"";D.useEffect(()=>{a&&xo(a)},[a]);let l=a?e.rooms.get(a)??null:null,c=a?e.roomsStatus.get(a):void 0,u=D.useMemo(()=>(e.outlines??[]).map(w=>({code:w.code,polygons:Qs(w.polygons)})),[e.outlines]),h=D.useMemo(()=>{if(!s)return null;let w=u.find(C=>C.code===s.code)?.polygons??Qs(s.polygons),g=a?ph(o).get(a):void 0,p=e.room&&e.room.level===a?e.room:null;return{polygons:w,floor:l&&g!==void 0?{elevation:g,rooms:l.map(C=>C.id===p?.id?{color:Fw,polygons:Qs(C.polygons),picked:!0,label:gh(C.name,i??"")}:{color:eo[C.kind],polygons:Qs(C.polygons)})}:null,focus:p?Qs(p.polygons):null}},[s,u,a,l,o,e.room]),d=Ri(),f=t?`${t.code} \xB7 ${Xn(t)}`:Ne("title"),y=n.view==="3d"&&t&&t.city!=="Z\xFCrich";return D.createElement("div",{className:"poly-page poly-campus-page"},D.createElement("div",{className:"poly-bar poly-page-head"},D.createElement("h1",{className:"poly-page-title",title:f},f)),D.createElement("div",{className:"poly-campus-body"},n.view==="map"?D.createElement(Gw,{outlines:e.outlines,selected:i,rooms:l,room:e.room,focus:r.current,place:e.place}):D.createElement(qf,{area:h,focus:r.current,onPick:w=>{let g=w.map(p=>Hw(p,u)).find(Boolean);g&&g!==i&&Di(g,Ne("title"),!1)}}),i&&D.createElement(Zw,{levels:o,level:a,code:i}),D.createElement(Ww,{view:n.view}),D.createElement("div",{className:"poly-notes",role:"status"},a&&c==="loading"&&D.createElement("span",null,Ne("floors.loading")),a&&c==="error"&&D.createElement("span",{className:"z3d-error"},Ne("floors.failed")),e.outlinesStatus==="error"&&D.createElement("span",{className:"z3d-error"},Ne("outlines.failed")),y&&D.createElement("span",null,Ne("view.outside"))),D.createElement("div",{className:"poly-map-foot"},l&&l.length>0&&D.createElement(Xw,null),(n.view==="map"||d.status==="ready")&&D.createElement("div",{className:"z3d-attribution"},n.view==="map"?Ne("map.attribution"):`${tt("model.attribution")} \xB7 ${Ne("map.attribution")}`)),e.room&&D.createElement($w,{room:e.room})))}var ld={zentrum:"8591123",haldenegg:"8591174",hoengg:"8591122",hb:"8587348",hbQuai:"8587349"},nP=[ld.zentrum,ld.hoengg,ld.hb];var qw=/^\d{4}-\d{2}-\d{2}$/,jf=n=>typeof n=="string"&&qw.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),cd=n=>{let e=new Date(`${n}T00:00:00Z`).getUTCDay();return e===0||e===6};function ud(n,e,t=new Date){let[i,r,s]=n.split("-").map(Number),[o,a]=e.time.split(":").map(Number),l=new Date(i,r-1,s,o,a+(e.delay??0));return Math.floor((l.getTime()-t.getTime())/6e4)}var dd=(n,e,t=new Date)=>e.filter(i=>ud(n,i,t)>=0);function Kf(n){let e=[];for(let t of n)t.stops.length>e.length&&(e=t.stops.map(i=>i.name));return e}var hd="elink",Jf=n=>n===hd;var em=["M5 16V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z","M5 11h14","M9 6h6","M8 14h.01","M16 14h.01","M7 17v3","M17 17v3"],tm=`
.elink-list { flex: 1; min-height: 0; overflow-y: auto; }
.elink-group { padding: 10px 12px 8px; }
.elink-group + .elink-group { border-top: 1px solid var(--border-light); }
.elink-head { display: flex; align-items: baseline; gap: 8px; min-width: 0; margin-bottom: 4px; }
.elink-title { flex: 1; min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-span { flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
/* A departure-board row: line badge, destination, time, minutes until it leaves. */
.elink-row { display: grid; grid-template-columns: max-content minmax(0, 1fr) max-content 34px; align-items: center; gap: 8px; min-height: 26px; font-variant-numeric: tabular-nums; }
.elink-line { display: inline-grid; place-items: center; min-width: 22px; height: 20px; padding: 0 4px; box-sizing: border-box; border-radius: 3px; background: #fff; color: #000; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35); font-weight: 700; font-size: var(--small-font-size); line-height: 1; }
.elink-to { min-width: 0; color: var(--text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-time { color: var(--text-secondary); font-size: var(--small-font-size); white-space: nowrap; }
.elink-delay { margin-left: 3px; color: var(--tint-orange-text, var(--text-secondary)); font-weight: 600; }
.elink-minutes { color: var(--title-color); font-weight: 600; text-align: right; white-space: nowrap; }
.elink-row.past { opacity: 0.45; }
.elink-row.next .elink-minutes { color: var(--accent-color); }
.elink-note { color: var(--text-secondary); font-size: var(--small-font-size); }
.elink-link { padding: 0; border: 0; background: transparent; color: var(--accent-color); font: inherit; font-size: var(--small-font-size); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.elink-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 2px; }
.elink-empty { display: grid; gap: 6px; padding: 14px 12px; color: var(--text-secondary); font-size: var(--small-font-size); }
.elink-empty strong { color: var(--title-color); font-size: var(--normal-font-size, 1rem); }
.elink-credit { padding: 10px 12px 12px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
/* The page: the directions side by side as plain columns of rows, no cards; each row adds the arrival. */
.elink-columns { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px 32px; align-items: start; }
.elink-columns .elink-group { padding: 0 0 16px; border: 0; }
.elink-columns .elink-route { margin: -2px 0 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.elink-columns .elink-row { grid-template-columns: max-content minmax(0, 1fr) max-content max-content 34px; border-bottom: 1px solid var(--border-light); }
.elink-arrival { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); white-space: nowrap; }
.elink-columns .elink-row.next { background: var(--accent-tint-bg); }
.poly-page .elink-credit { padding: 20px 0 0; }
`,Yw=5,jw=["M15 6l-6 6 6 6"],Kw=["M9 6l6 6-6 6"],Qf=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],qr=(n=new Date)=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,zl=(n,e)=>{let t=new Date(`${n}T00:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)},Jw=n=>{let e=zl(n,1);for(;cd(e);)e=zl(e,1);return e},Qw=(n,e=new Date)=>jf(n)&&n>=qr(e)?n:qr(e);function nm(n,e){let t=n.React,i=t.createElement,r=({shapes:M})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...M.map(L=>i("path",{key:L,d:L}))),s=(M,L)=>Object.entries(L).reduce((B,[W,q])=>B.replace(`{${W}}`,String(q)),M),o=M=>{let L=`elink.error.${M instanceof Error?M.message:""}`;return e(L)===L?e("elink.error.serviceError"):e(L)},a=M=>M===1?e("elink.runs.one"):s(e("elink.runs.other"),{count:M}),l=()=>n.ui.language()||"en",c=(M,L)=>new Intl.DateTimeFormat(l(),{...L,timeZone:"UTC"}).format(new Date(`${M}T00:00:00Z`)),u=M=>c(M,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),h=(M=!1)=>n.workspace.openMainTab({instanceId:hd,title:e("elink.title"),newTab:M}),d=M=>{n.settings.set("elinkDate",M)};function f(){let[,M]=t.useState(0);t.useEffect(()=>{let B=()=>M(z=>z+1),W=[n.ui.onLanguageChanged(B),n.settings.subscribe(B)],q=setInterval(B,2e4);return()=>{for(let z of W)z();clearInterval(q)}},[]);let L=new Date;return{date:Qw(n.settings.get().elinkDate,L),now:L}}function y(M,L){let[B,W]=t.useState({key:"",data:null,error:"",loading:!0});return t.useEffect(()=>{let q=!0;return W(z=>({key:M,data:z.key===M?z.data:null,error:"",loading:!0})),n.backend.call("elink.day",{date:M,fresh:L>0}).then(z=>{q&&W({key:M,data:z,error:"",loading:!1})},z=>{q&&W({key:M,data:null,error:o(z),loading:!1})}),()=>{q=!1}},[M,L]),B}function w(){let[M,L]=t.useState(0),[B,W]=t.useState(!1);return{revision:M,refreshing:B,refresh:()=>{W(!0),L(z=>z+1),setTimeout(()=>W(!1),600)}}}let g=M=>(M?.directions??[]).filter(L=>L.departures.length>0),p=M=>s(e("elink.firstLast"),{first:M[0].time,last:M.at(-1).time});function C({run:M,date:L,now:B,isToday:W,next:q,arrival:z}){let X=M.stops.at(-1),ee=W?ud(L,M,B):null,ne=ee!==null&&ee>=0&&ee<60,me=M.stops.map(te=>te.time?`${te.name} ${te.time}`:te.name).join(" \xB7 ");return i("div",{className:`elink-row${ee!==null&&ee<0?" past":""}${q?" next":""}`,"data-trip":M.trip,title:me},i("span",{className:"elink-line"},M.line),i("span",{className:"elink-to"},X.name),i("span",{className:"elink-time"},M.time,M.delay&&M.delay>0?i("span",{className:"elink-delay",title:s(e("elink.delay"),{minutes:M.delay})},`+${M.delay}`):null),z?i("span",{className:"elink-arrival",title:s(e("elink.arrival"),{time:X.time,stop:X.name})},X.time?`\u2192 ${X.time}`:""):null,i("span",{className:"elink-minutes","aria-label":ne?s(e("elink.in"),{minutes:ee}):void 0},ne?`${ee}'`:""))}function N({date:M}){let L=Jw(M);return i("div",{className:"elink-empty",role:"status"},i("strong",null,e(cd(M)?"elink.weekend":"elink.noService")),i("span",null,i("button",{type:"button",className:"elink-link",onClick:()=>d(L)},s(e("elink.showDay"),{day:c(L,{weekday:"long",day:"numeric",month:"long"})}))))}function S({direction:M,date:L,now:B,isToday:W}){let q=M.departures,z=(W?dd(L,q,B):q).slice(0,Yw);return i("section",{className:"elink-group","data-direction":M.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${M.id}`)),i("span",{className:"elink-span",title:p(q)},`${q[0].time}\u2013${q.at(-1).time}`)),z.length?z.map((X,ee)=>i(C,{key:`${X.trip}:${X.time}`,run:X,date:L,now:B,isToday:W,next:W&&ee===0})):i("div",{className:"elink-note"},`${e("elink.ended")} `,i("button",{type:"button",className:"elink-link",onClick:X=>h(n.ui.hasModKey(X))},e("elink.showTimetable"))))}function E({date:M,refresh:L,refreshing:B}){let W=M===qr(),q=`${c(M,{weekday:"short"})} ${c(M,{day:"numeric"})}`;return i("div",{className:"poly-bar"},i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("day.previous"),"aria-label":e("day.previous"),disabled:W,onClick:()=>d(zl(M,-1))},i(r,{shapes:jw})),i("button",{type:"button",className:`poly-day-label${W?" today":""}`,title:`${u(M)} \xB7 ${e(W?"day.today":"day.backToToday")}`,"aria-current":W?"date":void 0,onClick:()=>d(qr())},q),i("button",{type:"button",className:"poly-icon-btn",title:e("day.next"),"aria-label":e("day.next"),onClick:()=>d(zl(M,1))},i(r,{shapes:Kw}))),i("button",{type:"button",className:`poly-icon-btn${B?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:L},i(r,{shapes:Qf})))}function P(){let{date:M,now:L}=f(),{revision:B,refreshing:W,refresh:q}=w(),z=y(M,B),X=g(z.data),ee=M===qr(L),ne=z.error?i("div",{className:"poly-note error",role:"alert"},z.error):z.data?X.length?i(t.Fragment,null,...X.map(me=>i(S,{key:me.id,direction:me,date:M,now:L,isToday:ee}))):i(N,{date:M}):i("div",{className:"poly-note"},e("elink.loading"));return i(t.Fragment,null,i(E,{date:M,refresh:q,refreshing:W}),i("div",{className:"elink-list"},ne,i("div",{className:"elink-credit"},e("elink.credit"))))}function O({direction:M,date:L,now:B,isToday:W}){let q=M.departures,z=W?dd(L,q,B)[0]:void 0;return i("section",{className:"elink-group","data-direction":M.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${M.id}`)),i("span",{className:"elink-span"},`${a(q.length)} \xB7 ${p(q)}`)),i("div",{className:"elink-route"},Kf(q).join(" \xB7 ")),q.map(X=>i(C,{key:`${X.trip}:${X.time}`,run:X,date:L,now:B,isToday:W,next:X===z,arrival:!0})))}function v({instanceId:M}){let{date:L,now:B}=f(),{revision:W,refreshing:q,refresh:z}=w(),X=y(L,W),ee=g(X.data),ne=L===qr(B);t.useEffect(()=>{n.workspace.setMainTabTitle(e("elink.title"),M)},[M,n.ui.language()]);let me=X.error?i("div",{className:"poly-note error",role:"alert"},X.error):X.data?ee.length?i("div",{className:"elink-columns"},ee.map(te=>i(O,{key:te.id,direction:te,date:L,now:B,isToday:ne}))):i(N,{date:L}):i("div",{className:"poly-note"},e("elink.loading"));return i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:"poly-bar-balance","aria-hidden":!0}),i("h1",{className:"poly-page-title"},`${e("elink.title")} \xB7 ${u(L)}`),i("button",{type:"button",className:`poly-icon-btn${q?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:z},i(r,{shapes:Qf}))),i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},me,i("div",{className:"elink-credit"},e("elink.credit")))))}return{ElinkPanelBody:P,ElinkPage:v,openElink:h}}var no=["news","zukunftsblog","globe","media"];var eS=n=>no.includes(n),tS=n=>eS(n)?n:"news";var nS=/^https:\/\/ethz\.ch\/(en|de)\/news-(?:and-events|und-veranstaltungen)\/eth-news\/news\/\d{4}\/\d{2}\/[A-Za-z0-9._%-]+\.html$/,Fl=n=>typeof n=="string"&&nS.test(n),iS=n=>typeof n=="string"&&(/^https:\/\/ethz\.ch\/(en|de)\/news-(?:and-events|und-veranstaltungen)\/eth-news\/news\/\d{4}\/\d{2}\/[A-Za-z0-9._%-]+\/_jcr_content\/[A-Za-z0-9._%/-]+\.(?:jpe?g|png|webp|gif)$/i.test(n)||/^https:\/\/ethz\.ch\/bin\/ethz\/components\/previewImage\/youtube\/[A-Za-z0-9_-]+\.jpg$/.test(n)),pd="news",im=n=>n===pd||fd(n)!==null,Ul=n=>`news:${n}`,fd=n=>typeof n=="string"&&n.startsWith("news:")&&Fl(n.slice(5))?n.slice(5):null;var rm=n=>n==="saved"?"saved":tS(n),sm=500,to=(n,e)=>typeof n=="string"?n.slice(0,e):"";function om(n){if(!n||typeof n!="object")return null;let e=n,t=to(e.title,400);return!Fl(e.url)||e.url.length>400||!t?null:{url:e.url,title:t,summary:to(e.summary,2e3),published:to(e.published,40),author:to(e.author,200),topics:Array.isArray(e.topics)?[...new Set(e.topics.filter(i=>typeof i=="string"&&i.length>0).map(i=>i.slice(0,200)))].slice(0,30):[],picture:iS(e.picture)&&e.picture.length<=600?e.picture:"",savedAt:to(e.savedAt,40)}}function md(n){if(!Array.isArray(n))return[];let e=new Set,t=[];for(let i of n){let r=om(i);!r||e.has(r.url)||(e.add(r.url),t.push(r))}return t.sort((i,r)=>(Date.parse(r.savedAt)||0)-(Date.parse(i.savedAt)||0)).slice(0,sm)}var Bl=(n,e)=>n.some(t=>t.url===e),am=(n,e)=>[e,...n.filter(t=>t.url!==e.url)].slice(0,sm),lm=(n,e)=>n.filter(t=>t.url!==e);function gd(n,e,t){let{entry:i,article:r}=e;return om({url:n,title:i?.title||r?.title||"",summary:i?.summary||r?.lead||"",published:i?.published||r?.date||"",author:i?.author||r?.author||"",topics:i?.topics.length?i.topics:r?.topics??[],picture:r?.picture?.src??"",savedAt:t})}var Hl=n=>({id:n.url,url:n.url,title:n.title,summary:n.summary,published:n.published,author:n.author,topics:n.topics});var Gl=["M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V18a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z","M16 9h2.5A1.5 1.5 0 0 1 20 10.5V18a2 2 0 0 1-4 0","M7 8h6","M7 11.5h6","M7 15h3.5"],rS={news:Gl,zukunftsblog:["M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16z","M13.5 6.5l4 4","M14 20h6"],globe:["M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0","M3.6 9h16.8","M3.6 15h16.8","M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9","M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9"],media:["M4 10v4a1 1 0 0 0 1 1h2.5L13 19V5L7.5 9H5a1 1 0 0 0-1 1z","M16.5 9a4 4 0 0 1 0 6","M19 6.5a7.5 7.5 0 0 1 0 11","M7.5 15l1 4.5"]},cm={news:"palette:primary-blue",zukunftsblog:"palette:orange",globe:"palette:teal",media:"palette:rose"},Vl=["M7 3.5h10A1.5 1.5 0 0 1 18.5 5v15.5L12 16.3l-6.5 4.2V5A1.5 1.5 0 0 1 7 3.5z"],sS="palette:violet",oS=["M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13","M20 20l-4.8-4.8"],aS=["M6 6l12 12","M18 6L6 18"],um=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],dm=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],lS=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],cS=["M9 7.5v9l7.5-4.5z"],uS=["M9 6l6 6-6 6"],dS=["M3.5 4.5v6.3a1 1 0 0 0 .3.7l8.7 8.7a1.5 1.5 0 0 0 2.1 0l5.3-5.3a1.5 1.5 0 0 0 0-2.1L11.2 4.1a1 1 0 0 0-.7-.3H4.3a.8.8 0 0 0-.8.7z","M8 8.5h.01"],hS=7*864e5,mm=`
/* The article list follows Email's message list: full width, a hairline under each row, Contacts' selection. */
.news-list { flex: 1; min-height: 0; overflow-y: auto; }
.news-row { display: grid; grid-template-columns: minmax(0, 1fr) max-content; gap: 2px 8px; width: 100%; box-sizing: border-box; margin: 0; padding: 9px 12px 10px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.news-row:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.news-row.active { background: var(--accent-tint-bg); }
.news-row.active .news-row-title { color: var(--accent-color); }
.news-row:focus-visible, .news-card:focus-visible, .news-video:focus-visible, .news-link:focus-visible, .news-inline-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.news-row-title { grid-column: 1; min-width: 0; color: var(--title-color); font-weight: 600; line-height: 1.3; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; overflow-wrap: anywhere; }
.news-row-date { grid-column: 2; grid-row: 1; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.news-row-date.new { color: var(--accent-color); font-weight: 600; }
.news-row-summary { grid-column: 1 / -1; min-width: 0; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.35; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
/* Tags sit under the title and the description everywhere (27 Nov, on request): Contacts' 6px tag chips; one line in the list. */
/* Chips that do not fit wrap onto a hidden line, so none is cut mid-word; a single long one ellipsizes. */
.news-tags-line { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 4px; min-width: 0; height: 18px; margin-top: 3px; overflow: hidden; }
.news-tags-line .news-topic { box-sizing: border-box; height: 18px; max-width: 100%; line-height: 18px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-card .news-tags-line { height: 40px; }
@media (prefers-reduced-motion: reduce) { .news-row { transition: none; } }
/* The four feed tags keep their glyph and full name at natural width; a narrow sidebar scrolls the row sideways (27 Nov, on request: "don't squish \u2026 make it x-scrollable"). */
.news-tags .poly-tile { flex: 0 0 auto; justify-content: center; gap: 5px; padding: 0 9px; }
/* Saved sits beside the tag button as an icon button; filled bookmark in its violet while open. */
.news-search-bar .poly-icon-btn.saved-on { background: var(--accent-tint-bg); color: var(--news-saved-color); }
.news-search-bar .poly-icon-btn.saved-on svg { fill: currentColor; }
.poly-panel .poly-bar.news-search-bar { padding: 0 var(--space-2, 8px); }
.news-search-bar .search-field-row { flex: 1; min-width: 0; }
.news-search-bar { gap: 4px; }
.news-topic { border: 0; font-family: inherit; cursor: pointer; }
.news-topic:hover { background: color-mix(in srgb, var(--title-color) 12%, var(--hover-bg)); color: var(--text-color); }
.news-topic.on { background: var(--accent-tint-bg); color: var(--accent-color); }
.news-topic:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 1px; }
.poly-icon-btn.filtered:not(.active) { color: var(--accent-color); }
/* Saved rows (27 Nov): drawn like the feed's rows, with the filled bookmark that removes one at the row's end. */
.news-saved-item { position: relative; }
.news-saved-item .news-tags-line { padding-right: 28px; }
.news-saved-item > .news-unsave { position: absolute; right: 8px; bottom: 6px; }
.news-unsave { display: flex; align-items: center; justify-content: center; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--accent-color); cursor: pointer; }
.news-unsave:hover { background: var(--hover-bg); }
.news-unsave svg { width: 15px; height: 15px; }
.news-unsave:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-icon-btn.news-save.on { color: var(--accent-color); }
.poly-page-head .poly-bar-balance.triple { width: calc(var(--shell-control-toolbar, 24px) * 3 + 16px); }
/* The tag view: every tag of the feed as chips in place of the list; chosen ones in the accent tint. */
.news-tag-view { padding: 10px 12px 4px; }
.news-tag-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 8px; color: var(--text-secondary); font-size: var(--small-font-size); }
.news-cloud { display: flex; flex-wrap: wrap; gap: 6px; }
.news-cloud .news-topic { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; height: 26px; padding: 0 9px; font-size: var(--small-font-size); line-height: 1; }
.news-cloud .news-topic > span:first-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-cloud-count { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.news-cloud .news-topic.on .news-cloud-count { color: inherit; opacity: 0.8; }
.news-text-btn { padding: 0; border: 0; background: transparent; color: var(--accent-color); font: inherit; text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.news-search-bar .search-field-icon { display: grid; place-items: center; }
.news-search-bar .search-field-icon svg, .news-search-bar .search-field-action svg { width: 14px; height: 14px; }
/* The feed page: picture cards like the menu cards, the newest first and wider. */
.news-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
.news-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; padding: 0; border: 1px solid var(--border-light); border-radius: 8px; background: var(--container-color, transparent); color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: border-color 120ms ease-out, background-color 120ms ease-out; }
.news-card:hover { border-color: color-mix(in srgb, var(--title-color) 22%, var(--border-light)); background: color-mix(in srgb, var(--title-color) 3%, var(--container-color, transparent)); }
.news-card.active { border-color: var(--accent-color); }
.news-card-image { position: relative; aspect-ratio: 16 / 9; background: var(--hover-bg); display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.news-card-image > svg { width: 30px; height: 30px; opacity: 0.5; }
.news-card-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.news-card-body { display: grid; gap: 4px; padding: 10px 12px 12px; }
.news-card-top { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
.news-card-author { flex: 1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.news-card-date { flex-shrink: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.news-card-title { color: var(--title-color); font-size: 1rem; font-weight: 600; line-height: 1.3; overflow-wrap: anywhere; }
.news-card-summary { color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.4; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
@container (min-width: 760px) {
  .news-cards > .news-card:first-child { grid-column: span 2; flex-direction: row; }
  .news-cards > .news-card:first-child .news-card-image { flex: 0 0 58%; aspect-ratio: 16 / 10; }
  .news-cards > .news-card:first-child .news-card-body { align-content: start; padding: 16px 18px; }
  .news-cards > .news-card:first-child .news-card-title { font-size: 1.3rem; }
  .news-cards > .news-card:first-child .news-card-summary { -webkit-line-clamp: 6; font-size: var(--normal-font-size, 1rem); }
}
@container (max-width: 560px) {
  .news-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .news-card { flex-direction: row; }
  .news-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 100px; }
  .news-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
@media (prefers-reduced-motion: reduce) { .news-card { transition: none; } }
/* An article: one reading column in Valley's type, the picture full width, boxes as quiet callouts. */
.news-article { max-width: 720px; margin: 0 auto; padding: 26px 24px 40px; color: var(--text-color); line-height: 1.6; user-select: text; }
.news-topics { display: flex; flex-wrap: wrap; gap: 4px; margin: -2px 0 12px; }
.news-topic { padding: 0 7px; border-radius: 6px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.7; }
.news-article .news-title { margin: 0 0 12px; color: var(--title-color); font-size: 1.75rem; font-weight: 700; line-height: 1.2; overflow-wrap: anywhere; }
.news-lead { margin: 0 0 12px; color: var(--title-color); font-size: 1.08rem; line-height: 1.55; }
.news-meta { display: flex; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 18px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); }
.news-figure { margin: 18px 0; }
.news-figure-frame { position: relative; display: grid; place-items: center; min-height: 120px; overflow: hidden; border-radius: 6px; background: var(--hover-bg); color: var(--text-tertiary, var(--text-secondary)); }
.news-figure-frame.empty { aspect-ratio: 3 / 2; min-height: 0; }
.news-figure-frame img { display: block; width: 100%; height: auto; animation: news-in 180ms ease-out; }
.news-figure figcaption { margin-top: 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); line-height: 1.45; }
.news-article h2 { margin: 26px 0 8px; color: var(--title-color); font-size: 1.22rem; line-height: 1.3; }
.news-article h3 { margin: 20px 0 6px; color: var(--title-color); font-size: 1.05rem; line-height: 1.35; }
.news-article p { margin: 0 0 12px; }
.news-article ul.news-bullets { margin: 0 0 12px; padding-left: 20px; }
.news-article ul.news-bullets li { margin: 0 0 6px; }
.news-quote { margin: 18px 0; padding: 2px 0 2px 16px; border-left: 3px solid var(--accent-color); color: var(--title-color); font-size: 1.08rem; font-style: italic; }
.news-box { margin: 20px 0; padding: 12px 16px 4px; border-radius: 6px; background: var(--surface-color-alt, var(--hover-bg)); }
.news-box > :first-child { margin-top: 0; }
.news-box h2 { font-size: 1.05rem; }
.news-inline-link { color: var(--link-color, var(--accent-color)); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.news-video { display: block; width: 100%; margin: 18px 0; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.news-video .news-figure-frame { aspect-ratio: 16 / 9; }
.news-video img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.news-play { position: absolute; display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%; background: rgba(0, 0, 0, 0.6); color: #fff; }
.news-play svg { width: 26px; height: 26px; fill: currentColor; }
.news-video:hover .news-play { background: rgba(0, 0, 0, 0.75); }
.news-video-caption { display: block; margin-top: 6px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); }
.news-links { margin: 18px 0; }
.news-links-title { margin: 0 0 4px; color: var(--title-color); font-weight: 600; }
.news-link { display: flex; align-items: center; gap: 6px; width: 100%; padding: 5px 0; border: 0; border-bottom: 1px solid var(--border-light); background: transparent; color: var(--link-color, var(--accent-color)); font: inherit; text-align: left; cursor: pointer; }
.news-link svg { width: 14px; height: 14px; flex-shrink: 0; }
.news-link:hover span { text-decoration: underline; }
.news-source { margin-top: 28px; padding-top: 12px; border-top: 1px solid var(--border-light); color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
/* Smooth arrival (27 Nov): what was read fades in; placeholders appear only after a pause and never pulse. */
@keyframes news-in { from { opacity: 0; } to { opacity: 1; } }
.news-appear { animation: news-in 180ms ease-out; }
.news-card-image img { animation: news-in 180ms ease-out; }
.news-placeholder { pointer-events: none; animation: news-in 240ms ease-out; }
.news-bar { display: block; height: 10px; border-radius: 4px; background: var(--hover-bg); }
.news-row.news-placeholder { cursor: default; }
.news-row.news-placeholder .news-bar.title { grid-column: 1; width: 80%; height: 12px; margin: 3px 0; }
.news-row.news-placeholder .news-bar.date { grid-column: 2; grid-row: 1; width: 44px; margin-top: 4px; }
.news-row.news-placeholder .news-bar.text { grid-column: 1 / -1; width: 100%; }
.news-row.news-placeholder .news-bar.short { grid-column: 1 / -1; width: 55%; }
.news-card.news-placeholder .news-card-body { gap: 8px; }
.news-card.news-placeholder .news-bar.date { width: 30%; } .news-card.news-placeholder .news-bar.title { width: 85%; height: 14px; } .news-card.news-placeholder .news-bar.text { width: 100%; }
.news-article .news-placeholder { display: grid; gap: 12px; }
.news-bar.heading { width: 75%; height: 26px; } .news-article .news-bar.text { width: 100%; height: 14px; } .news-article .news-bar.short { width: 60%; height: 14px; }
@media (prefers-reduced-motion: reduce) { .news-appear, .news-placeholder, .news-card-image img, .news-figure-frame img { animation: none; } }
@container (max-width: 560px) { .news-article { padding: 16px 14px 32px; } .news-article .news-title { font-size: 1.4rem; } }
`,io=(n,e,t)=>{let i=Date.parse(n);return Number.isNaN(i)?"":new Intl.DateTimeFormat(e,{timeZone:"Europe/Zurich",...t}).format(new Date(i))},hm=(n,e=Date.now())=>{let t=Date.parse(n);return!Number.isNaN(t)&&e-t<hS&&t<=e+864e5};function pS(n,e){let t=e.toLocaleLowerCase().split(/\s+/).filter(Boolean);return t.length?n.filter(i=>{let r=[i.title,i.summary,i.author,...i.topics].join(" ").toLocaleLowerCase();return t.every(s=>r.includes(s))}):n}var pm=(n,e)=>e.length?n.filter(t=>e.some(i=>t.topics.includes(i))):n;function fS(n,e="en"){let t=new Map;for(let i of n)for(let r of i.topics)t.set(r,(t.get(r)??0)+1);return[...t].map(([i,r])=>({tag:i,count:r})).sort((i,r)=>r.count-i.count||i.tag.localeCompare(r.tag,e))}var fm=n=>Array.isArray(n)?[...new Set(n.filter(e=>typeof e=="string"&&e.length>0))]:[];function gm(n,e){let t=n.React,i=t.createElement,r=({shapes:b,filled:x})=>i("svg",{viewBox:"0 0 24 24",fill:x?"currentColor":"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...b.map(I=>i("path",{key:I,d:I}))),s=(b,x)=>Object.entries(x).reduce((I,[V,Z])=>I.replace(`{${V}}`,String(Z)),b),o=b=>{let x=`news.error.${b instanceof Error?b.message:""}`;return e(x)===x?e("news.error.serviceError"):e(x)},a=()=>(n.ui.language()||"en").toLowerCase().startsWith("de")?"de":"en",l=()=>n.ui.language()||"en",c=b=>e(`news.feed.${b}`);function u(b){let x=Date.parse(b);if(Number.isNaN(x))return"";let I=G=>io(new Date(G).toISOString(),"en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}),V=Date.now();if(I(x)===I(V))return e("day.today");if(I(x)===I(V-864e5))return e("news.yesterday");let Z=io(b,"en",{year:"numeric"})===io(new Date(V).toISOString(),"en",{year:"numeric"});return io(b,l(),Z?{day:"numeric",month:"short"}:{day:"numeric",month:"short",year:"numeric"})}let h=b=>io(b,l(),{day:"numeric",month:"long",year:"numeric"});function d(){let[,b]=t.useState(0);t.useEffect(()=>{let I=()=>b(Z=>Z+1),V=[n.ui.onLanguageChanged(I),n.settings.subscribe(I)];return()=>{for(let Z of V)Z()}},[]);let x=n.settings.get();return{source:rm(x.newsFeed),tags:fm(x.newsTags),saved:md(x.newsSaved),language:a()}}let f=b=>{let x=fm(n.settings.get().newsTags);n.settings.set("newsTags",x.includes(b)?x.filter(I=>I!==b):[...x,b].slice(-20))},y=()=>{n.settings.set("newsTags",[])},w=new Map,g=new Map,p=new Map,C=new Map,N=new Map,S=(b,x)=>{let I=N.get(b);if(I)return I;let V=x().finally(()=>N.delete(b));return N.set(b,V),V},E=(b,x,I,V)=>{for(b.delete(x),b.set(x,I);b.size>V;)b.delete(b.keys().next().value)},P=(b,x,I)=>S(`feed:${x}:${b}:${I}`,()=>n.backend.call("news.feed",{feed:b,language:x,fresh:I}).then(V=>{E(w,`${x}:${b}`,V,8);for(let Z of V)E(C,Z.url,Z,1e3);return V})),O=(b,x)=>S(`article:${b}:${x}`,()=>n.backend.call("news.article",{url:b,fresh:x}).then(I=>(E(g,b,I,60),I))),v=b=>S(`picture:${b}`,()=>n.backend.call("image",{url:b}).then(x=>(E(p,b,x,80),x))),M=b=>{g.has(b)&&p.has(g.get(b).picture?.src??"")||O(b,!1).then(x=>x.picture?v(x.picture.src):void 0).catch(()=>{})},L=()=>md(n.settings.get().newsSaved),B=b=>{let x=gd(b,{entry:C.get(b),article:g.get(b)},new Date().toISOString());x&&(n.settings.set("newsSaved",am(L(),x)),!x.picture&&O(b,!1).then(I=>{let V=L(),Z=V.find(j=>j.url===b),G=Z&&gd(b,{entry:Hl(Z),article:I},Z.savedAt);G?.picture&&n.settings.set("newsSaved",V.map(j=>j.url===b?G:j))}).catch(()=>{}))},W=b=>{n.settings.set("newsSaved",lm(L(),b))},q=b=>Bl(L(),b)?W(b):B(b);function z(b,x,I,V){let Z=b!==null&&x===0?V?.get(b):void 0,[G,j]=t.useState(()=>Z!==void 0?{key:b,data:Z,error:"",loading:!1}:{key:null,data:null,error:"",loading:b!==null});return t.useEffect(()=>{if(b===null)return;let ce=x===0?V?.get(b):void 0;if(ce!==void 0){j({key:b,data:ce,error:"",loading:!1});return}let re=!0;return j(ue=>({key:b,data:ue.key===b?ue.data:null,error:"",loading:!0})),I(x>0).then(ue=>{re&&j({key:b,data:ue,error:"",loading:!1})},ue=>{re&&j({key:b,data:null,error:o(ue),loading:!1})}),()=>{re=!1}},[b,x]),G.key===b?G:Z!==void 0?{data:Z,error:"",loading:!1}:{data:null,error:"",loading:b!==null}}function X(b=350){let[x,I]=t.useState(!1);return t.useEffect(()=>{let V=setTimeout(()=>I(!0),b);return()=>clearTimeout(V)},[]),x}function ee(){let[b,x]=t.useState(0),[I,V]=t.useState(!1);return{revision:b,refreshing:I,refresh:()=>{V(!0),x(G=>G+1),setTimeout(()=>V(!1),600)}}}function ne(b,x,I,V){let Z=b==="saved"?null:b,G=z(Z?`${I}:${Z}`:null,V,j=>P(Z,I,j),w);return Z?G:{data:x.map(Hl),error:"",loading:!1}}function me(b,x,I){let V=()=>Object.fromEntries(no.flatMap(ce=>w.has(`${x}:${ce}`)?[[ce,w.get(`${x}:${ce}`)]]:[])),Z=`${x}:${I}`,[G,j]=t.useState(()=>({key:Z,byFeed:I===0?V():{}}));return t.useEffect(()=>{let ce=!0;j(re=>re.key===Z?re:{key:Z,byFeed:I===0?V():{}});for(let re of[b,...no.filter(ue=>ue!==b)])I===0&&w.has(`${x}:${re}`)||P(re,x,I>0).then(ue=>{ce&&j(be=>({key:Z,byFeed:{...be.key===Z?be.byFeed:{},[re]:ue}}))},()=>{});return()=>{ce=!1}},[Z]),G.key===Z?G.byFeed:{}}function te(b){let[x,I]=t.useState(!1);return t.useEffect(()=>{let V=b.current,Z=V?.ownerDocument.defaultView?.IntersectionObserver;if(!V||x)return;if(!Z){I(!0);return}let G=new Z(j=>{j.at(-1)?.isIntersecting&&(I(!0),G.disconnect())},{rootMargin:"300px"});return G.observe(V),()=>G.disconnect()},[x]),x}let le=b=>z(b,0,()=>v(b),p);function F(){let b=()=>{let V=n.getState().activePluginTab;return V?.pluginId===n.pluginId?V.instanceId:void 0},[x,I]=t.useState(b);return t.useEffect(()=>n.subscribe(()=>I(b())),[]),x}let de=(b=!1)=>n.workspace.openMainTab({instanceId:pd,title:e("news.title"),newTab:b}),pe=(b,x,I=!1)=>n.workspace.openMainTab({instanceId:Ul(b),title:x,newTab:I}),Me=(b,x,I=!1)=>Fl(b)?pe(b,x,I):void n.links.open(b),Ee=async(b,x,I)=>{b.preventDefault();let V=Bl(L(),x.url),Z=await n.ui.openMenu([{id:"tab",label:e("openInNewTab"),icon:i(r,{shapes:lS})},{id:"website",label:e("news.openWebsite"),icon:i(r,{shapes:dm})},{type:"separator"},{id:"save",label:e(V?"news.saved.remove":"news.saved.add"),icon:i(r,{shapes:Vl,filled:!V})},...I?[{type:"separator"},{id:"refresh",label:e("refresh"),icon:i(r,{shapes:um})}]:[]],{x:b.clientX,y:b.clientY});Z==="tab"&&pe(x.url,x.title,!0),Z==="website"&&n.links.open(x.url),Z==="save"&&(E(C,x.url,C.get(x.url)??x,1e3),q(x.url)),Z==="refresh"&&I?.()},Ie=(b,x)=>({onPointerEnter:()=>M(b.url),onFocus:()=>M(b.url),onClick:I=>pe(b.url,b.title,n.ui.hasModKey(I)),onAuxClick:I=>{I.button===1&&(I.preventDefault(),pe(b.url,b.title,!0))},onContextMenu:I=>{Ee(I,b,x)}});function Y({chosen:b,byFeed:x}){let I=Date.now(),V=Z=>{let G=Z.currentTarget;G.scrollWidth>G.clientWidth&&Math.abs(Z.deltaY)>Math.abs(Z.deltaX)&&(G.scrollLeft+=Z.deltaY)};return i("nav",{className:"poly-bar poly-tiles news-tags","aria-label":e("news.feeds"),onWheel:V},...no.map(Z=>{let G=x[Z],j=G?G.filter(re=>hm(re.published,I)).length:null,ce=j===null?c(Z):`${c(Z)} \xB7 ${j===1?e("news.recent.one"):s(e("news.recent.other"),{count:j})}`;return i("button",{key:Z,type:"button",className:`poly-tile${Z===b?" active":""}`,"aria-pressed":Z===b,"data-feed":Z,title:ce,"aria-label":ce,style:{"--poly-tile-color":es(cm[Z]),"--poly-tile-on":co(cm[Z])},onClick:()=>{n.settings.set("newsFeed",Z)}},i("span",{className:"poly-tile-icon"},i(r,{shapes:rS[Z]})),i("span",null,e(`news.tag.${Z}`)))}))}function ie({open:b,chosen:x,toggle:I}){let V=b?e("news.tags.hide"):x.length?`${e("news.tags.show")} \xB7 ${x.join(", ")}`:e("news.tags.show");return i("button",{type:"button",className:`poly-icon-btn${b?" active":""}${x.length?" filtered":""}`,title:V,"aria-label":V,"aria-pressed":b,"data-tag-view":!0,onClick:I},i(r,{shapes:dS}))}function xe({entries:b,chosen:x,query:I}){let V=I.toLocaleLowerCase().split(/\s+/).filter(Boolean),Z=fS(b,l()),G=x.filter(re=>!Z.some(ue=>ue.tag===re)).map(re=>({tag:re,count:0})),j=[...Z,...G].filter(re=>V.every(ue=>re.tag.toLocaleLowerCase().includes(ue))),ce=pm(b,x).length;return i("div",{className:"news-tag-view news-appear"},i("div",{className:"news-tag-head"},i("span",null,x.length?ce===1?e("news.tags.articles.one"):s(e("news.tags.articles.other"),{count:ce}):s(e("news.tags.count"),{count:Z.length})),x.length?i("button",{type:"button",className:"news-text-btn",onClick:y},e("news.tags.clear")):null),j.length?i("div",{className:"news-cloud",role:"group","aria-label":e("news.tags.show")},j.map(re=>{let ue=x.includes(re.tag);return i("button",{key:re.tag,type:"button",className:`news-topic${ue?" on":""}`,"aria-pressed":ue,"data-tag":re.tag,title:s(e(ue?"news.tags.remove":"news.tags.add"),{tag:re.tag}),onClick:()=>f(re.tag)},i("span",null,re.tag),i("span",{className:"news-cloud-count"},String(re.count)))})):i("div",{className:"poly-note"},e(I?"news.tags.noMatch":"news.tags.none")))}function Te({open:b,count:x}){let I=`${e("news.saved.title")} \xB7 ${x===1?e("news.tags.articles.one"):s(e("news.tags.articles.other"),{count:x})}`;return i("button",{type:"button",className:`poly-icon-btn${b?" saved-on":""}`,title:I,"aria-label":I,"aria-pressed":b,"data-feed":"saved",style:{"--news-saved-color":es(sS)},onClick:()=>{n.settings.set("newsFeed",b?"news":"saved")}},i(r,{shapes:Vl}))}function ve({query:b,setQuery:x,tagView:I,chosen:V,toggleTags:Z,savedOpen:G,savedCount:j}){let ce=e(I?"news.tags.search":"news.search");return i("div",{className:"poly-bar news-search-bar"},i("div",{className:"search-field-row"},i("div",{className:"search-field"},i("span",{className:"search-field-icon"},i(r,{shapes:oS})),i("input",{className:"search-field-input",value:b,placeholder:ce,"aria-label":ce,onChange:re=>x(re.target.value),onKeyDown:re=>{re.key==="Escape"&&x("")}}),b?i("button",{type:"button",className:"search-field-action",title:e("news.search.clear"),"aria-label":e("news.search.clear"),onClick:()=>x("")},i(r,{shapes:aS})):null)),i(ie,{open:I,chosen:V,toggle:Z}),i(Te,{open:G,count:j}))}let Ve=({topics:b,line:x,chosen:I})=>b.length?i("span",{className:x?"news-tags-line":"news-topics"},b.map(V=>{let Z=I.includes(V),G=s(e(Z?"news.tags.remove":"news.tags.add"),{tag:V});return x?i("span",{key:V,className:`news-topic${Z?" on":""}`,title:G,onClick:j=>{j.stopPropagation(),f(V)}},V):i("button",{key:V,type:"button",className:`news-topic${Z?" on":""}`,title:G,"aria-pressed":Z,onClick:()=>f(V)},V)})):null;function at({entry:b,active:x,refresh:I,chosen:V}){return i("button",{type:"button",className:`news-row${x?" active":""}`,"data-article":b.url,"aria-current":x?"page":void 0,title:b.author?`${b.title}
${b.author}`:b.title,...Ie(b,I)},i("span",{className:"news-row-title"},b.title),i("span",{className:`news-row-date${hm(b.published)?" new":""}`,title:h(b.published)},u(b.published)),b.summary?i("span",{className:"news-row-summary"},b.summary):null,i(Ve,{topics:b.topics,line:!0,chosen:V}))}function Ke(b){let x=s(e("news.saved.removeOne"),{title:b.entry.title});return i("div",{className:"news-saved-item"},i(at,b),i("button",{type:"button",className:"news-unsave",title:x,"aria-label":x,onClick:()=>W(b.entry.url)},i(r,{shapes:Vl,filled:!0})))}function We(){return X()?i("div",{className:"news-placeholders","aria-busy":!0,"aria-label":e("news.loading")},...[0,1,2,3,4].map(x=>i("div",{key:x,className:"news-row news-placeholder"},i("span",{className:"news-bar title"}),i("span",{className:"news-bar date"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar short"})))):null}function st(){let{source:b,tags:x,saved:I,language:V}=d(),{revision:Z,refresh:G}=ee(),[j,ce]=t.useState(""),[re,ue]=t.useState(!1),[be,Re]=t.useState(""),we=me(b==="saved"?"news":b,V,Z),se=ne(b,I,V,Z),k=F(),fe=se.data??[],oe=pS(pm(fe,x),j),_e=j?e("news.empty.search"):x.length?e("news.empty.tags"):e(b==="saved"?"news.saved.empty":"news.empty"),Se=se.error?i("div",{className:"poly-note error",role:"alert"},se.error):se.data?re?i(xe,{entries:fe,chosen:x,query:be}):oe.length?i("div",{className:"news-appear"},...oe.map(ge=>i(b==="saved"?Ke:at,{key:ge.id,entry:ge,active:k===Ul(ge.url),refresh:G,chosen:x}))):i("div",{className:"poly-note"},_e,x.length?i(t.Fragment,null," ",i("button",{type:"button",className:"news-text-btn",onClick:y},e("news.tags.clear"))):null):i(We,null);return i(t.Fragment,null,i(Y,{chosen:b,byFeed:we}),i(ve,{query:re?be:j,setQuery:re?Re:ce,tagView:re,chosen:x,toggleTags:()=>ue(ge=>!ge),savedOpen:b==="saved",savedCount:I.length}),i("div",{className:"news-list"},Se,i("div",{className:"poly-credit"},e("news.credit"))))}function Je({entry:b,active:x,revision:I,chosen:V,stored:Z=""}){let G=t.useRef(null),j=te(G),ce=z(j&&!Z?b.url:null,I,ue=>O(b.url,ue),g),re=le(Z?j?Z:null:ce.data?.picture?.src??null);return i("button",{ref:G,type:"button",className:`news-card${x?" active":""}`,"data-article":b.url,...Ie(b)},i("span",{className:"news-card-image"},i(r,{shapes:Gl}),re.data?i("img",{src:re.data,alt:ce.data?.picture?.alt??"",draggable:!1}):null),i("span",{className:"news-card-body"},i("span",{className:"news-card-top"},i("span",{className:"news-card-author"},b.author),i("span",{className:"news-card-date",title:h(b.published)},u(b.published))),i("span",{className:"news-card-title"},b.title),b.summary?i("span",{className:"news-card-summary"},b.summary):null,i(Ve,{topics:b.topics,line:!0,chosen:V})))}function ct(){return X()?i("div",{className:"news-cards","aria-busy":!0,"aria-label":e("news.loading")},...[0,1,2,3,4].map(x=>i("div",{key:x,className:"news-card news-placeholder"},i("span",{className:"news-card-image"}),i("span",{className:"news-card-body"},i("span",{className:"news-bar date"}),i("span",{className:"news-bar title"}),i("span",{className:"news-bar text"}))))):null}let ut=({title:b,actions:x})=>i("div",{className:"poly-bar poly-page-head"},i("span",{className:`poly-bar-balance${x.length>2?" triple":x.length>1?" double":""}`,"aria-hidden":!0}),i("h1",{className:"poly-page-title"},b),...x),R=(b,x)=>i("button",{key:"refresh",type:"button",className:`poly-icon-btn${b?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:x},i(r,{shapes:um}));function U({instanceId:b}){let{source:x,tags:I,saved:V,language:Z}=d(),{revision:G,refreshing:j,refresh:ce}=ee(),re=ne(x,V,Z,G),ue=F();t.useEffect(()=>{n.workspace.setMainTabTitle(e("news.title"),b)},[b,n.ui.language()]);let be=new Map(V.map(we=>[we.url,we.picture])),Re=re.error?i("div",{className:"poly-note error",role:"alert"},re.error):re.data?re.data.length?i("div",{className:"news-cards news-appear"},re.data.map(we=>i(Je,{key:we.id,entry:we,active:ue===Ul(we.url),revision:G,chosen:I,stored:x==="saved"?be.get(we.url):void 0}))):i("div",{className:"poly-note"},e(x==="saved"?"news.saved.empty":"news.empty")):i(ct,null);return i("div",{className:"poly-page"},i(ut,{title:x==="saved"?e("news.saved.title"):c(x),actions:[R(j,ce)]}),i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},Re,i("div",{className:"poly-credit"},e("news.credit")))))}function ae({parts:b}){return i(t.Fragment,null,...b.map((x,I)=>{let V=x.strong?i("strong",null,x.text):x.text;if(!x.href)return i(t.Fragment,{key:I},V);let Z=x.href;return i("a",{key:I,className:"news-inline-link",href:Z,title:Z,onClick:G=>{G.preventDefault(),Me(Z,x.text,n.ui.hasModKey(G))},onAuxClick:G=>{G.button===1&&(G.preventDefault(),Me(Z,x.text,!0))}},V)}))}function A({picture:b}){let x=t.useRef(null),I=te(x),V=le(I?b.src:null);return i("figure",{ref:x,className:"news-figure"},i("div",{className:`news-figure-frame${V.data?"":" empty"}`},V.data?i("img",{src:V.data,alt:b.alt,draggable:!1}):null),b.caption?i("figcaption",null,b.caption):null)}function he({block:b}){let x=t.useRef(null),I=te(x),V=le(I&&b.preview?b.preview:null),Z=b.caption?`${e("news.video")}: ${b.caption}`:e("news.video");return i("button",{ref:x,type:"button",className:"news-video",title:b.url,"aria-label":Z,onClick:()=>{n.links.open(b.url)}},i("span",{className:"news-figure-frame"},V.data?i("img",{src:V.data,alt:"",draggable:!1}):null,i("span",{className:"news-play"},i(r,{shapes:cS}))),i("span",{className:"news-video-caption"},b.caption||e("news.video")))}function ye({blocks:b}){return i(t.Fragment,null,...b.map((x,I)=>{switch(x.type){case"heading":return i(x.level===2?"h2":"h3",{key:I},x.text);case"paragraph":return i("p",{key:I},i(ae,{parts:x.parts}));case"quote":return i("blockquote",{key:I,className:"news-quote"},i(ae,{parts:x.parts}));case"list":return i("ul",{key:I,className:"news-bullets"},x.items.map((V,Z)=>i("li",{key:Z},i(ae,{parts:V}))));case"figure":return i(A,{key:I,picture:x.picture});case"video":return i(he,{key:I,block:x});case"box":return i("aside",{key:I,className:"news-box"},i(ye,{blocks:x.blocks}));case"links":return i("div",{key:I,className:"news-links"},x.title?i("div",{className:"news-links-title"},x.title):null,x.items.map((V,Z)=>i("button",{key:Z,type:"button",className:"news-link",title:V.href,onClick:G=>Me(V.href,V.text,n.ui.hasModKey(G))},i(r,{shapes:uS}),i("span",null,V.text))))}}))}function T({instanceId:b,url:x}){let{revision:I,refreshing:V,refresh:Z}=ee(),{tags:G,saved:j}=d(),ce=z(x,I,Se=>O(x,Se),g),re=ce.data,ue=j.find(Se=>Se.url===x),be=C.get(x)??(ue?Hl(ue):void 0),Re=X(),we=re??(be?{title:be.title,lead:be.summary,date:be.published,author:be.author,topics:be.topics,picture:null}:null);t.useEffect(()=>{n.workspace.setMainTabTitle(we?.title||e("news.title"),b)},[b,we?.title,n.ui.language()]);let se=Bl(j,x),k=e(se?"news.saved.remove":"news.saved.add"),fe=i("button",{key:"save",type:"button",className:`poly-icon-btn news-save${se?" on":""}`,title:k,"aria-label":k,"aria-pressed":se,disabled:!se&&!we,onClick:()=>q(x)},i(r,{shapes:Vl,filled:se})),oe=i("button",{key:"website",type:"button",className:"poly-icon-btn",title:e("news.openWebsite"),"aria-label":e("news.openWebsite"),onClick:()=>{n.links.open(x)}},i(r,{shapes:dm})),_e=!we&&ce.error?i("div",{className:"poly-note error",role:"alert"},ce.error):we?i("article",{className:"news-article",lang:/^https:\/\/ethz\.ch\/de\//.test(x)?"de":"en","aria-busy":re?void 0:!0},i("h2",{className:"news-title"},we.title),we.lead?i("p",{className:"news-lead"},we.lead):null,i(Ve,{topics:we.topics,chosen:G}),i("div",{className:"news-meta"},we.date?i("span",null,h(we.date)):null,we.author?i("span",null,s(e("news.by"),{author:we.author})):null),ce.error?i("div",{className:"poly-note error",role:"alert"},ce.error):re?i("div",{className:"news-appear"},re.picture?i(A,{picture:re.picture}):null,i(ye,{blocks:re.blocks}),i("div",{className:"news-source"},e("news.source")," ",i("a",{className:"news-inline-link",href:x,onClick:Se=>{Se.preventDefault(),n.links.open(x)}},new URL(x).host))):i("div",{className:"news-figure"},i("div",{className:"news-figure-frame empty"}))):Re?i("div",{className:"news-article","aria-busy":!0,"aria-label":e("news.loading")},i("div",{className:"news-placeholder"},i("span",{className:"news-bar heading"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar short"}))):null;return i("div",{className:"poly-page"},i(ut,{title:e("news.title"),actions:[fe,oe,R(V,Z)]}),i("div",{className:"poly-list"},_e))}function m({instanceId:b}){let x=fd(b);return x?i(T,{instanceId:b,url:x,key:x}):i(U,{instanceId:b})}return{NewsPanelBody:st,NewsPage:m,openNews:de}}var ji="polybox",mS=/^[A-Za-z0-9]{6,64}$/,gS=n=>typeof n=="string"&&mS.test(n),vd=n=>`${ji}:${n}`,_d=n=>typeof n=="string"&&n.startsWith(`${ji}:`)&&gS(n.slice(ji.length+1))?n.slice(ji.length+1):null,xm=n=>n===ji||_d(n)!==null;var Zl=(n,e="")=>`https://polybox.ethz.ch/index.php/s/${n}${e?`?${new URLSearchParams({path:`/${e}`})}`:""}`;var vm={key:"name",dir:"asc"},yS=["name","created","modified","size"];function _m(n){let e=n&&typeof n=="object"?n:{};return yS.includes(e.key)&&(e.dir==="asc"||e.dir==="desc")?{key:e.key,dir:e.dir}:vm}var yd=(n,e)=>n.name.localeCompare(e.name,void 0,{numeric:!0,sensitivity:"base"}),ym=n=>{let e=n?Date.parse(n):NaN;return Number.isFinite(e)?e:null};function wm(n,e=vm){let t=e.dir==="desc"?-1:1,i=r=>e.key==="size"?r.isFolder?null:r.size??null:e.key==="created"?ym(r.created):e.key==="modified"?ym(r.modified):null;return[...n].sort((r,s)=>{if(r.isFolder!==s.isFolder)return r.isFolder?-1:1;if(e.key==="name")return t*yd(r,s);let o=i(r),a=i(s);return o===null||a===null?o===a?yd(r,s):o===null?1:-1:t*(o-a)||yd(r,s)})}var $l=200,Wl=200,xd=2e3,bS=/^https:\/\/polybox\.ethz\.ch\/(?:index\.php\/)?s\/([A-Za-z0-9]{6,64})(?:[/?#]\S*)?$/,bd=/(?:https?:\/\/|(?=polybox\.ethz\.ch\/))\S+/i;function bm(n){let e=n.trim();return/^polybox\.ethz\.ch\//i.test(e)?`https://${e}`:e}function en(n){return bS.exec(n.trim())?.[1]??null}function wd(n){return Array.isArray(n)?n.flatMap(e=>{if(!e||typeof e!="object")return[];let{name:t,url:i}=e;if(typeof t!="string"||typeof i!="string")return[];let r={name:t.trim().slice(0,Wl),url:i.trim().slice(0,xd)};return r.name||r.url?[r]:[]}).slice(0,$l):[]}function Sm(n){return n.split(/\r?\n/).flatMap(e=>{if(!e.trim())return[];let t=e.includes("	")?e.split("	").map(s=>s.trim()).filter(Boolean):null;if(t){let s=t.findIndex(l=>bd.test(l)),o=s>=0?bm(bd.exec(t[s])[0]):"";return[{name:t.filter((l,c)=>c!==s).join(" ").slice(0,Wl),url:o.slice(0,xd)}]}let i=bd.exec(e);return i?[{name:(e.slice(0,i.index)+" "+e.slice(i.index+i[0].length)).replace(/[\s:;,|–—-]+$/u,"").replace(/^[\s:;,|–—-]+/u,"").replace(/\s+/g," ").trim().slice(0,Wl),url:bm(i[0]).slice(0,xd)}]:[{name:e.trim().slice(0,Wl),url:""}]}).slice(0,$l)}var Yr=["M10.99 7.13A4.4 4.4 0 0 1 19.6 8.41A2.4 2.4 0 0 1 19.4 13.2","M5.4 19.5A2.8 2.8 0 0 1 5.11 13.91A5.2 5.2 0 0 1 15.49 14.05A2.8 2.8 0 1 1 16.4 19.5z"],Mm=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],Em=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],xS=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],vS=["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1","M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],_S=["M6 6l12 12","M18 6L6 18"],wS=["M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16z","M13.5 6.5l4 4"],SS=["M4 7h16","M10 11v6","M14 11v6","M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12","M9 7V4h6v3"],MS=["M9 9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z","M15 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4"],ES=["M5 12.5l4.5 4.5L19 7.5"],Tm=["M14.5 5l-5 14"],TS=["M12 19V5","M6 11l6-6 6 6"],AS=["M12 5v14","M6 13l6 6 6-6"],Sd=["M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"],Am=["M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z","M14 3.5V8h4.5"],CS=[...Am,"M8.5 13h7","M8.5 16.5h5"],PS=["M4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z","M13 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z","M4 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z","M13 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"],IS=["M9 6h11","M9 12h11","M9 18h11","M4.5 6h.01","M4.5 12h.01","M4.5 18h.01"],RS=["M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z","M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"],Md="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z",NS={viewBox:"0 0 512 512",d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"},LS={viewBox:"0 0 384 512",d:Md},kS={viewBox:"0 0 384 512",d:`${Md}m250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z`},DS={viewBox:"0 0 384 512",d:`${Md}m32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z`},OS=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M8.5 10a1.5 1.5 0 1 0 0-.01","M20 15l-4.5-4.5L6 20"],Cm=`
.poly-panel .poly-bar.pbx-add-bar { padding: 0 var(--space-2, 8px); }
.pbx-add-bar .search-field-row { flex: 1; min-width: 0; }
.pbx-add-bar .search-field-icon { display: grid; place-items: center; }
.pbx-add-bar .search-field-icon svg { width: 14px; height: 14px; }
.pbx-add-note { padding: 6px 12px; color: var(--tint-red-text, var(--text-secondary)); font-size: var(--smaller-font-size); border-bottom: 1px solid var(--border-light); }
.pbx-list { flex: 1; min-height: 0; overflow-y: auto; }
.pbx-row { display: grid; grid-template-columns: 15px minmax(0, 1fr); align-items: center; gap: 2px 10px; width: 100%; box-sizing: border-box; margin: 0; padding: 9px 12px 10px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-row:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-row.active { background: var(--accent-tint-bg); }
.pbx-row.active .pbx-row-name { color: var(--accent-color); }
.pbx-row:focus-visible, .pbx-file:focus-visible, .pbx-crumb:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-row-icon { grid-row: 1 / 3; display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-row-icon svg { width: 15px; height: 15px; }
.pbx-row-name { min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-row-name.pending { color: var(--text-tertiary, var(--text-secondary)); font-weight: 400; }
.pbx-row-meta { min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-rename { width: 100%; min-width: 0; box-sizing: border-box; height: 22px; margin: -2px 0; padding: 0 4px; border: 1px solid var(--accent-color); border-radius: 3px; outline: 0; background: var(--background-color, transparent); color: var(--title-color); font: inherit; font-weight: 600; }
@media (prefers-reduced-motion: reduce) { .pbx-row, .pbx-file { transition: none; } }
.pbx-empty { padding: 14px 12px; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.45; }
/*
 * A subject's page (28 Nov, on request): the title bar names the share's Polybox link, the second bar is the folder path as
 * left-aligned breadcrumbs, then the entries edge to edge as list rows of exactly one header height or as a grid.
 */
.poly-page-head .poly-bar-balance.triple { width: calc(var(--shell-control-toolbar, 24px) * 3 + 16px); }
.poly-icon-btn.pbx-copy.done { color: var(--tint-green-text, var(--accent-color)); }
/* The path is centred in its bar (28 Nov, on request: "still make the breadcrumb centered"). */
.poly-page .poly-bar.pbx-path { justify-content: center; padding: 0 12px; overflow: hidden; }
.pbx-crumbs { display: flex; align-items: center; gap: 2px; min-width: 0; overflow: hidden; white-space: nowrap; }
.pbx-crumb { display: inline-flex; align-items: center; gap: 6px; flex-shrink: 1; min-width: 0; max-width: 320px; height: var(--search-field-height, 26px); padding: 0 6px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); cursor: pointer; }
.pbx-crumb-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.pbx-crumb.root { justify-content: center; width: var(--search-field-height, 26px); padding: 0; color: var(--text-secondary); }
.pbx-crumb.root svg, .pbx-crumb-sep svg { display: block; width: 14px; height: 14px; }
.pbx-crumb.root[aria-current="page"] { color: var(--title-color); }
.pbx-crumb:hover { background: var(--hover-bg); color: var(--text-color); }
.pbx-crumb[aria-current="page"] { color: var(--title-color); font-weight: 600; cursor: default; background: transparent; }
.pbx-crumb-sep { display: grid; place-items: center; flex-shrink: 0; width: 14px; height: var(--search-field-height, 26px); color: var(--text-tertiary, var(--text-secondary)); }
.pbx-files { padding: 0 0 32px; }
.pbx-files > .poly-note { padding: 8px 12px; }
.pbx-file, .pbx-columns { display: grid; grid-template-columns: 18px minmax(0, 1fr) var(--pbx-date-col, 128px) var(--pbx-date-col, 128px) 84px; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; height: var(--app-bar-height); padding: 0 12px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-file:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-file[aria-busy="true"] { cursor: progress; opacity: 0.6; }
.pbx-file-icon { display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-file.folder .pbx-file-icon { color: var(--accent-color); }
.pbx-file-icon svg { width: 16px; height: 16px; }
.pbx-file-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pbx-file.folder .pbx-file-name { color: var(--title-color); font-weight: 600; }
.pbx-file-date, .pbx-file-size { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; text-align: center; overflow: hidden; text-overflow: ellipsis; }
/* The column titles (28 Nov, on request: "filename | date created | date last modified | file size"), on the rows' grid. */
.poly-page .poly-bar.pbx-columns { display: grid; padding: 0 12px; gap: 12px; }
.pbx-col { display: flex; align-items: center; justify-content: center; gap: 4px; min-width: 0; height: 26px; margin: 0; padding: 0 8px; border: 0; border-radius: var(--radius-m, 6px); transition: background-color 120ms ease-out, color 120ms ease-out; background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--smaller-font-size); font-weight: 600; white-space: nowrap; cursor: pointer; }
.pbx-col:hover { color: var(--text-color); background: var(--hover-bg); }
.pbx-col.active { color: var(--title-color); }
.pbx-col:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-col-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.pbx-col-arrow { display: grid; place-items: center; flex-shrink: 0; }
.pbx-col-arrow svg { width: 12px; height: 12px; }
.pbx-col.name { grid-column: 1 / 3; justify-self: start; justify-content: flex-start; margin-left: -8px; }
@media (prefers-reduced-motion: reduce) { .pbx-col { transition: none; } }
.pbx-col + .pbx-col { position: relative; overflow: visible; }
.pbx-col + .pbx-col::before { content: ''; position: absolute; left: -6px; top: 4px; bottom: 4px; border-left: 1px solid var(--border-light); }
@container (max-width: 720px) { .pbx-file, .pbx-columns { grid-template-columns: 18px minmax(0, 1fr) var(--pbx-date-col, 128px) 84px; } .pbx-file-date.created, .pbx-col.created { display: none; } }
@container (max-width: 520px) { .pbx-file, .pbx-columns { grid-template-columns: 18px minmax(0, 1fr) 72px; } .pbx-file-date, .pbx-col.created, .pbx-col.modified { display: none; } }
.pbx-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(132px, 1fr)); gap: 6px; padding: 12px 12px 32px; }
.pbx-grid > .poly-note { grid-column: 1 / -1; padding: 0; }
.pbx-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 0; box-sizing: border-box; padding: 16px 8px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--text-color); font: inherit; text-align: center; cursor: pointer; transition: background-color 120ms ease-out; }
.pbx-tile:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
.pbx-tile:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.pbx-tile[aria-busy="true"] { cursor: progress; opacity: 0.6; }
.pbx-tile-icon { display: grid; place-items: center; height: 52px; margin-bottom: 4px; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-tile-icon svg { width: 44px; height: 44px; }
.pbx-tile.folder .pbx-tile-icon { color: var(--accent-color); }
.pbx-tile.folder .pbx-tile-icon svg { width: 52px; height: 52px; }
.pbx-tile-name { display: -webkit-box; max-width: 100%; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; font-size: var(--small-font-size); line-height: 1.3; overflow-wrap: anywhere; }
.pbx-tile.folder .pbx-tile-name { color: var(--title-color); font-weight: 600; }
.pbx-tile-meta { color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .pbx-tile { transition: none; } }
.pbx-lock { display: flex; flex-direction: column; align-items: center; gap: 10px; max-width: 360px; margin: 48px auto 0; padding: 0 16px; text-align: center; }
.pbx-lock-icon { display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.pbx-lock-icon svg { width: 28px; height: 28px; }
.pbx-lock-text { margin: 0; color: var(--text-secondary); font-size: var(--small-font-size); line-height: 1.45; }
.pbx-lock-row { display: flex; gap: 6px; width: 100%; }
.pbx-lock-input { flex: 1; min-width: 0; box-sizing: border-box; height: var(--search-field-height, 26px); padding: 0 8px; border: 1px solid var(--border-color, var(--border-light)); border-radius: var(--radius-sm, 4px); outline: 0; background: var(--background-color, transparent); color: var(--text-color); font: inherit; font-size: var(--small-font-size); }
.pbx-lock-input:focus { border-color: var(--accent-color); }
.pbx-lock-btn { flex-shrink: 0; height: var(--search-field-height, 26px); padding: 0 12px; border: 0; border-radius: var(--radius-sm, 4px); background: var(--accent-color); color: #fff; font: inherit; font-size: var(--small-font-size); font-weight: 600; cursor: pointer; }
.pbx-lock-btn:disabled { opacity: 0.5; cursor: default; }
.pbx-lock-btn:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 2px; }
.pbx-lock-note { color: var(--tint-red-text, var(--text-secondary)); font-size: var(--small-font-size); }
`,zS=n=>n==="grid"?"grid":"list";function Pm(n,e){let t=n.React,i=t.createElement,r=({shapes:F})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...F.map(de=>i("path",{key:de,d:de}))),s=({glyph:F})=>i("svg",{viewBox:F.viewBox,fill:"currentColor","aria-hidden":!0},i("path",{d:F.d})),o=(F,de)=>Object.entries(de).reduce((pe,[Me,Ee])=>pe.replace(`{${Me}}`,String(Ee)),F),a=F=>{let de=`polybox.error.${F instanceof Error?F.message:""}`;return e(de)===de?e("polybox.error.serviceError"):e(de)},l=()=>wd(n.settings.get().polyboxLinks),c=F=>{n.settings.set("polyboxLinks",wd(F))},u=F=>F.name||en(F.url)||e("polybox.untitled"),h=(F,de=!1)=>{let pe=en(F.url);pe&&n.workspace.openMainTab({instanceId:vd(pe),title:u(F),newTab:de})},d=F=>{c(l().filter(pe=>pe.url!==F.url));let de=en(F.url);de&&!l().some(pe=>en(pe.url)===de)&&n.backend.call("polybox.forget",{token:de}).catch(()=>{})},f=!1,y=()=>{f||(f=!0,n.backend.call("polybox.forget",{keep:l().map(F=>en(F.url)).filter(Boolean)}).catch(()=>{f=!1}))},w=(F=!1)=>n.workspace.openMainTab({instanceId:ji,title:e("polybox.title"),newTab:F}),g=new Set,p=()=>{for(let F of l()){let de=en(F.url);!de||F.name||g.has(de)||(g.add(de),n.backend.call("polybox.title",{token:de}).then(pe=>{if(!pe)return;let Me=l();Me.some(Ee=>en(Ee.url)===de&&!Ee.name)&&c(Me.map(Ee=>en(Ee.url)===de&&!Ee.name?{...Ee,name:pe}:Ee))},()=>{}))}},C=F=>{let de=Sm(F),pe=l(),Me=new Set(pe.map(Y=>en(Y.url))),Ee=[],Ie=0;for(let Y of de){let ie=en(Y.url);if(!ie){Ie++;continue}Me.has(ie)||(Me.add(ie),Ee.push({name:Y.name,url:Y.url}))}return Ee.length&&(c([...pe,...Ee].slice(0,$l)),queueMicrotask(p)),Ie};function N(){let[,F]=t.useState(0);return t.useEffect(()=>{let de=()=>F(Me=>Me+1),pe=[n.ui.onLanguageChanged(de),n.settings.subscribe(de)];return p(),y(),()=>{for(let Me of pe)Me()}},[]),l()}function S(){let F=()=>{let Me=n.getState().activePluginTab;return Me?.pluginId===n.pluginId?Me.instanceId:void 0},[de,pe]=t.useState(F);return t.useEffect(()=>n.subscribe(()=>pe(F())),[]),de}function E(){let[F,de]=t.useState(""),[pe,Me]=t.useState(""),Ee=Y=>{if(!Y.trim())return;let ie=C(Y);Me(ie?e("polybox.invalid"):""),de(ie?Y:"")},Ie=e("polybox.paste");return i(t.Fragment,null,i("div",{className:"poly-bar pbx-add-bar"},i("div",{className:"search-field-row"},i("div",{className:"search-field"},i("span",{className:"search-field-icon"},i(r,{shapes:vS})),i("input",{className:"search-field-input",value:F,placeholder:Ie,"aria-label":Ie,spellCheck:!1,onChange:Y=>{de(Y.target.value),Me("")},onPaste:Y=>{let ie=Y.clipboardData?.getData("text/plain")??"";ie.trim()&&(Y.preventDefault(),Ee(ie))},onKeyDown:Y=>{Y.key==="Enter"?(Y.preventDefault(),Ee(F)):Y.key==="Escape"&&(de(""),Me(""))}}),F?i("button",{type:"button",className:"search-field-action",title:e("polybox.clear"),"aria-label":e("polybox.clear"),onClick:()=>{de(""),Me("")}},i(r,{shapes:_S})):null))),pe?i("div",{className:"pbx-add-note",role:"alert"},pe):null)}function P({link:F,index:de,active:pe,renaming:Me,setRenaming:Ee}){let Ie=en(F.url),Y=Te=>{Ee(null);let ve=l();ve[de]?.url===F.url&&Te.trim()!==F.name&&c(ve.map((Ve,at)=>at===de?{...Ve,name:Te.trim()}:Ve))},ie=async Te=>{Te.preventDefault();let ve=await n.ui.openMenu([{id:"tab",label:e("polybox.openInNewTab"),icon:i(r,{shapes:Em}),enabled:!!Ie},{id:"website",label:e("polybox.openWebsite"),icon:i(r,{shapes:Mm}),enabled:!!Ie},{type:"separator"},{id:"rename",label:e("polybox.rename"),icon:i(r,{shapes:wS})},{id:"remove",label:e("polybox.removeSubject"),icon:i(r,{shapes:SS})}],{x:Te.clientX,y:Te.clientY});ve==="tab"&&h(F,!0),ve==="website"&&Ie&&n.links.open(Zl(Ie)),ve==="rename"&&Ee(de),ve==="remove"&&d(F)},xe=Me?i("input",{className:"pbx-rename",defaultValue:F.name||"",placeholder:u(F),autoFocus:!0,maxLength:200,"aria-label":e("polybox.rename"),onClick:Te=>Te.stopPropagation(),onKeyDown:Te=>{Te.stopPropagation(),Te.key==="Enter"&&Y(Te.target.value),Te.key==="Escape"&&Ee(null)},onBlur:Te=>Y(Te.target.value)}):i("span",{className:`pbx-row-name${F.name?"":" pending"}`},u(F));return i(Me?"div":"button",{type:Me?void 0:"button",className:`pbx-row${pe?" active":""}`,"data-subject":Ie??"","aria-current":pe?"page":void 0,onClick:Me?void 0:Te=>h(F,n.ui.hasModKey(Te)),onAuxClick:Te=>{Te.button===1&&!Me&&(Te.preventDefault(),h(F,!0))},onDoubleClick:Me?void 0:()=>Ee(de),onContextMenu:Me?void 0:Te=>{ie(Te)}},i("span",{className:"pbx-row-icon"},i(r,{shapes:Yr})),xe,i("span",{className:"pbx-row-meta"},Ie?`polybox.ethz.ch \xB7 ${Ie}`:e("polybox.invalid")))}function O(){let F=N(),de=S(),[pe,Me]=t.useState(null);return i(t.Fragment,null,i(E,null),i("div",{className:"pbx-list"},F.length?F.map((Ee,Ie)=>i(P,{key:Ee.url,link:Ee,index:Ie,active:!!en(Ee.url)&&de===vd(en(Ee.url)),renaming:pe===Ie,setRenaming:Me})):i("div",{className:"pbx-empty"},e("polybox.empty"))))}let v=new Map,M=new Map;function L(F,de,pe){let Me=`${F}:${de}`,[Ee,Ie]=t.useState(()=>({files:v.get(Me)??null,error:"",code:"",loading:!v.has(Me)}));return t.useEffect(()=>{let Y=!0,ie=v.get(Me);return Ie({files:ie??null,error:"",code:"",loading:!ie||pe>0}),n.backend.call("polybox.list",{token:F,path:de,fresh:pe>0}).then(xe=>{v.set(Me,xe),Y&&Ie({files:xe,error:"",code:"",loading:!1})},xe=>{Y&&Ie({files:ie??null,error:a(xe),code:xe instanceof Error?xe.message:"",loading:!1})}),()=>{Y=!1}},[Me,pe]),Ee}let B=(F,de)=>{if(F===void 0)return"";let pe=["B","KB","MB","GB"],Me=F,Ee=0;for(;Me>=1e3&&Ee<pe.length-1;)Me/=1e3,Ee++;return`${new Intl.NumberFormat(de,{maximumFractionDigits:Ee&&Me<10?1:0}).format(Me)} ${pe[Ee]}`},W=(F,de)=>F?new Intl.DateTimeFormat(de,{day:"numeric",month:"short",year:"numeric"}).format(new Date(F)):"",q=F=>F.type==="application/pdf"||/\.pdf$/i.test(F.name),z=F=>!!F.type?.startsWith("image/"),X=F=>F.isFolder?Sd:q(F)?CS:z(F)?OS:Am,ee=F=>F.isFolder?NS:q(F)?kS:z(F)?DS:LS;function ne({token:F,stale:de,onUnlocked:pe}){let[Me,Ee]=t.useState(""),[Ie,Y]=t.useState(!1),[ie,xe]=t.useState(""),Te=async Ve=>{if(Ve.preventDefault(),!(!Me||Ie)){Y(!0),xe("");try{let at=await n.backend.call("polybox.unlock",{token:F,password:Me});if(at.ok){Ee(""),pe();return}xe(e(at.reason==="rejected"?"polybox.password.rejected":"polybox.error.networkError"))}catch(at){xe(a(at))}finally{Y(!1)}}},ve=e("polybox.password.placeholder");return i("form",{className:"pbx-lock",onSubmit:Ve=>{Te(Ve)}},i("span",{className:"pbx-lock-icon"},i(r,{shapes:RS})),i("p",{className:"pbx-lock-text"},e(de?"polybox.password.stale":"polybox.password.needed")),i("div",{className:"pbx-lock-row"},i("input",{className:"pbx-lock-input",type:"password",value:Me,placeholder:ve,"aria-label":ve,autoFocus:!0,autoComplete:"off",spellCheck:!1,disabled:Ie,onChange:Ve=>{Ee(Ve.target.value),xe("")}}),i("button",{type:"submit",className:"pbx-lock-btn",disabled:Ie||!Me},e("polybox.password.unlock"))),ie?i("div",{className:"pbx-lock-note",role:"alert"},ie):null)}function me({token:F,instanceId:de,navigation:pe}){let Ee=N().find(se=>en(se.url)===F),Ie=Ee?u(Ee):F,[Y,ie]=t.useState(()=>M.get(F)??{stack:[""],index:0}),xe=Y.stack[Y.index]??"",Te=se=>{let k=n.getState();pe?.setController({canGoBack:se.index>0||k.canGoBack===!0,canGoForward:se.index<se.stack.length-1||k.canGoForward===!0,goBack:()=>{let fe=M.get(F)??se;fe.index>0?ve({...fe,index:fe.index-1}):n.workspace.goBack()},goForward:()=>{let fe=M.get(F)??se;fe.index<fe.stack.length-1?ve({...fe,index:fe.index+1}):n.workspace.goForward()}})},ve=se=>{M.set(F,se),ie(se),Te(se)},Ve=se=>{se!==xe&&ve({stack:[...Y.stack.slice(0,Y.index+1),se].slice(-100),index:Math.min(Y.index+1,99)})};t.useEffect(()=>{Te(Y)}),t.useEffect(()=>()=>pe?.setController(null),[]);let[at,Ke]=t.useState(0),We=L(F,xe,at),st=n.ui.language()||"en";t.useEffect(()=>{n.workspace.setMainTabTitle(Ie,de)},[de,Ie]);let Je=xe?xe.split("/"):[],ct=[{label:"/",path:""},...Je.map((se,k)=>({label:se,path:Je.slice(0,k+1).join("/")}))],ut=_m(n.settings.get().polyboxSort),R=We.files?wm(We.files,ut):null,U=se=>{n.settings.set("polyboxSort",{key:se,dir:ut.key===se&&ut.dir==="asc"?"desc":"asc"})},[ae,A]=t.useState(""),[he,ye]=t.useState(""),T={missing:"notFound","not-a-file":"notFound","plugin-unavailable":"unavailable"},m=async(se,k)=>{A(se.path),ye("");try{let fe=await n.backend.call("polybox.keep",{token:F,path:se.path});if(k==="valley"||k==="tab"){let oe=`plugins/data/${n.pluginId}/`,_e=fe.indexOf(oe);if(_e<0)throw new Error("formatError");let Se=await n.files.openOwnData(fe.slice(_e+oe.length),{newTab:k==="tab",title:se.name});if(Se.status==="refused")throw new Error(T[Se.reason]??"serviceError")}else k==="system"?n.files.openWithDefaultApp(fe):n.files.revealInFinder(fe)}catch(fe){ye(a(fe))}finally{A(fe=>fe===se.path?"":fe)}},b=(se,k)=>{se.isFolder?Ve(se.path):m(se,n.ui.hasModKey(k)?"tab":"valley")},x=async(se,k)=>{se.preventDefault();let fe=k.isFolder?[{id:"folder",label:o(e("polybox.openFolder"),{name:k.name}),icon:i(r,{shapes:Sd})},{type:"separator"},{id:"website",label:e("polybox.openWebsite"),icon:i(r,{shapes:Yr})}]:[{id:"valley",label:e("polybox.menu.valley"),icon:i(r,{shapes:X(k)})},{id:"tab",label:e("polybox.openInNewTab"),icon:i(r,{shapes:Em})},{id:"system",label:e("polybox.menu.system"),icon:i(r,{shapes:Mm})},{id:"finder",label:n.files.revealLabel(),icon:i(r,{shapes:Sd})},{type:"separator"},{id:"website",label:e("polybox.openWebsite"),icon:i(r,{shapes:Yr})}],oe=await n.ui.openMenu(fe,{x:se.clientX,y:se.clientY});oe==="folder"?Ve(k.path):oe==="website"?n.links.open(Zl(F,k.isFolder?k.path:k.path.split("/").slice(0,-1).join("/"))):(oe==="valley"||oe==="tab"||oe==="system"||oe==="finder")&&m(k,oe)},I=zS(n.settings.get().polyboxView),V=We.code==="polyboxPassword"||We.code==="polyboxWrongPassword",Z=()=>{for(let se of[...v.keys()])se.startsWith(`${F}:`)&&v.delete(se);g.delete(F),p(),Ke(se=>se+1)},G=(se,k)=>({key:se.path,type:"button",className:`${k}${se.isFolder?" folder":""}`,"data-path":se.path,title:se.isFolder?o(e("polybox.openFolder"),{name:se.name}):o(e("polybox.openFile"),{name:se.name}),"aria-busy":ae===se.path||void 0,disabled:ae===se.path,onClick:fe=>b(se,fe),onAuxClick:fe=>{fe.button===1&&!se.isFolder&&(fe.preventDefault(),m(se,"tab"))},onContextMenu:fe=>{x(fe,se)}}),j=V&&!R?i(ne,{token:F,stale:We.code==="polyboxWrongPassword",onUnlocked:Z}):We.error&&!R?i("div",{className:"poly-note error",role:"alert"},We.error):R?R.length?I==="grid"?i(t.Fragment,null,R.map(se=>i("button",G(se,"pbx-tile"),i("span",{className:"pbx-tile-icon"},i(s,{glyph:ee(se)})),i("span",{className:"pbx-tile-name"},se.name),i("span",{className:"pbx-tile-meta"},se.isFolder?W(se.modified,st):B(se.size,st))))):i(t.Fragment,null,R.map(se=>i("button",G(se,"pbx-file"),i("span",{className:"pbx-file-icon"},i(r,{shapes:X(se)})),i("span",{className:"pbx-file-name"},se.name),i("span",{className:"pbx-file-date created"},W(se.created,st)),i("span",{className:"pbx-file-date modified"},W(se.modified,st)),i("span",{className:"pbx-file-size"},se.isFolder?"":B(se.size,st))))):i("div",{className:"poly-note"},e("polybox.folderEmpty")):We.loading?null:i("div",{className:"poly-note"},e("polybox.folderEmpty")),ce=Zl(F),[re,ue]=t.useState(!1);t.useEffect(()=>{if(!re)return;let se=setTimeout(()=>ue(!1),1500);return()=>clearTimeout(se)},[re]);let be=()=>{n.ui.writeClipboardText(ce).then(()=>ue(!0),()=>ye(e("polybox.copyFailed")))},Re=e(re?"polybox.copied":"polybox.copyLink"),we=e(I==="grid"?"polybox.view.list":"polybox.view.grid");return i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:"poly-bar-balance triple","aria-hidden":!0}),i("h1",{className:"poly-page-title",title:Ie},Ie),i("button",{type:"button",className:"poly-icon-btn",title:we,"aria-label":we,"aria-pressed":I==="grid",onClick:()=>{n.settings.set("polyboxView",I==="grid"?"list":"grid")}},i(r,{shapes:I==="grid"?IS:PS})),i("button",{type:"button",className:`poly-icon-btn pbx-copy${re?" done":""}`,title:`${Re} (${ce})`,"aria-label":Re,onClick:be},i(r,{shapes:re?ES:MS})),i("button",{type:"button",className:`poly-icon-btn${We.loading&&at>0?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:()=>Ke(se=>se+1)},i(r,{shapes:xS}))),i("div",{className:"poly-bar pbx-path"},i("nav",{className:"pbx-crumbs","aria-label":e("polybox.path")},...ct.flatMap((se,k)=>[k>1?i("span",{key:`sep${k}`,className:"pbx-crumb-sep","aria-hidden":!0},i(r,{shapes:Tm})):null,i("button",{key:se.path||"/",type:"button",className:`pbx-crumb${k?"":" root"}`,"aria-current":k===ct.length-1?"page":void 0,title:k?se.label:Ie,"aria-label":k?void 0:Ie,onClick:()=>{k<ct.length-1&&Ve(se.path)}},k?i("span",{className:"pbx-crumb-label"},se.label):i(r,{shapes:Tm}))]))),I==="list"&&R?.length?i("div",{className:"poly-bar pbx-columns",role:"toolbar","aria-label":e("polybox.sort.label")},...["name","created","modified","size"].map(se=>{let k=ut.key===se,fe=e(`polybox.column.${se}`);return i("button",{key:se,type:"button",className:`pbx-col ${se}${k?" active":""}`,"aria-sort":k?ut.dir==="asc"?"ascending":"descending":void 0,title:o(e(k&&ut.dir==="asc"?"polybox.sort.desc":"polybox.sort.asc"),{column:fe}),onClick:()=>U(se)},i("span",{className:"pbx-col-label"},fe),k?i("span",{className:"pbx-col-arrow","aria-hidden":!0},i(r,{shapes:ut.dir==="asc"?TS:AS})):null)})):null,i("div",{className:"poly-list"},i("div",{className:I==="grid"&&R?.length?"pbx-grid":"pbx-files"},j,We.error&&R?i("div",{className:"poly-note error",role:"alert"},We.error):null,he?i("div",{className:"poly-note error",role:"alert"},he):null)))}function te({instanceId:F}){let de=N();return t.useEffect(()=>{n.workspace.setMainTabTitle(e("polybox.title"),F)},[F,n.ui.language()]),i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("h1",{className:"poly-page-title"},e("polybox.title"))),i("div",{className:"poly-list"},i("div",{className:"pbx-files"},de.length?de.map(pe=>i("button",{key:pe.url,type:"button",className:"pbx-file folder",onClick:Me=>h(pe,n.ui.hasModKey(Me))},i("span",{className:"pbx-file-icon"},i(r,{shapes:Yr})),i("span",{className:"pbx-file-name"},u(pe)),i("span",{className:"pbx-file-date"},en(pe.url)??""),i("span",{className:"pbx-file-size"}))):i("div",{className:"poly-note"},e("polybox.empty")))))}function le({instanceId:F,navigation:de}){let pe=_d(F);return pe?i(me,{key:pe,token:pe,instanceId:F,navigation:de}):i(te,{instanceId:F})}return{PolyboxPanelBody:O,PolyboxPage:le,openPolybox:w}}var Dm=`
.poly-panel, .poly-page { display: flex; flex-direction: column; height: 100%; min-height: 0; overflow: hidden; }
.poly-page { background: var(--background-color, transparent); container-type: inline-size; }
.poly-bar { display: flex; align-items: center; gap: 6px; height: var(--app-bar-height); box-sizing: border-box; padding: 0 6px; border-bottom: 1px solid var(--border-light); flex-shrink: 0; }
.poly-page .poly-bar { gap: 8px; padding: 0 12px; }
/* The host draws back/forward at the start and its menu at the end of the page's first row. */
.poly-page .poly-bar.poly-page-head { padding-left: calc(var(--plugin-navigation-offset, 60px) + var(--space-2, 6px)); padding-right: calc(var(--plugin-actions-offset, 36px) + var(--space-2, 6px)); }
.poly-spacer { flex: 1; min-width: 0; }
.poly-actions { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.poly-seg { display: flex; flex: 0 0 auto; min-width: 0; gap: 2px; padding: 2px; border-radius: var(--shell-control-radius, 6px); background: var(--hover-bg); }
.poly-seg button { flex: 0 0 auto; height: calc(var(--shell-control-toolbar, 24px) - 4px); padding: 0 7px; border: 0; border-radius: calc(var(--shell-control-radius, 6px) - 2px); background: transparent; color: var(--text-secondary); font: inherit; font-size: var(--small-font-size); white-space: nowrap; cursor: pointer; }
.poly-page .poly-seg button { height: calc(var(--search-field-height, 26px) - 4px); padding: 0 10px; }
.poly-seg button:hover { color: var(--text-color); }
.poly-panel .poly-bar:not(.poly-tiles) { gap: 2px; }
.poly-panel .poly-bar .poly-seg { margin: 0 2px; }
.poly-panel .poly-bar .poly-seg button { padding: 0 6px; }
.poly-seg button.active { background: var(--background-color, var(--container-color)); color: var(--title-color); box-shadow: 0 0 0 1px var(--border-light); }
.poly-seg button:focus-visible, .poly-icon-btn:focus-visible, .poly-day-label:focus-visible, .poly-place:focus-visible, .poly-card:focus-visible, .poly-tile:focus-visible, .poly-place-link:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-day { display: flex; align-items: center; gap: 2px; flex: 1; min-width: 0; }
.poly-day-label { flex: 1; min-width: 0; height: var(--search-field-height, 26px); padding: 0 2px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
.poly-day-label:hover { background: var(--hover-bg); }
.poly-day-label.today { color: var(--accent-color); }
/* The menu plan's week: Monday to Sunday with their dates between the week chevrons; today in the accent colour, the chosen day filled. */
.poly-week-days { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; flex: 1; min-width: 0; }
.poly-week-day { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-width: 0; height: 32px; padding: 0; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--text-secondary); font: inherit; line-height: 1; cursor: pointer; }
.poly-week-day:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-week-name { max-width: 100%; overflow: hidden; font-size: var(--smaller-font-size); white-space: nowrap; }
.poly-week-date { color: var(--title-color); font-size: var(--small-font-size); font-weight: 600; font-variant-numeric: tabular-nums; }
.poly-week-day.today, .poly-week-day.today .poly-week-date { color: var(--accent-color); }
.poly-week-day.selected { background: var(--accent-tint-bg); }
.poly-week-day.selected:not(.today) { color: var(--title-color); }
.poly-week-day:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-icon-btn:disabled { opacity: 0.4; cursor: default; background: transparent; }
.poly-groups { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }
.poly-divider { width: 1px; height: 16px; margin: 0 3px; background: var(--border-light); flex-shrink: 0; }
.poly-icon-btn { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--text-secondary); cursor: pointer; }
.poly-icon-btn:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-icon-btn.active { background: var(--accent-tint-bg); color: var(--title-color); }
.poly-icon-btn svg { width: var(--shell-glyph-default, 15px); height: var(--shell-glyph-default, 15px); }
.poly-icon-btn.spinning svg { animation: poly-spin 0.9s linear infinite; }
@keyframes poly-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .poly-icon-btn.spinning svg { animation: none; } }
/* Campus tags: To-Do's smart-list chips (icon tinted in the tag's colour, filled when active) with the 6px corners of Contacts' group tags. */
.poly-tiles { gap: 4px; padding: 0 5px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; }
.poly-tiles::-webkit-scrollbar { display: none; }
.poly-tile { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; box-sizing: border-box; height: 28px; padding: 0 10px; border: 1px solid var(--border-light); border-radius: 6px; background: var(--surface-color-alt); color: var(--text-secondary); font-family: var(--interface-font); font-size: var(--small-font-size); line-height: 1; cursor: pointer; }
.poly-tile:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-tile-icon { display: grid; place-items: center; width: 15px; height: 15px; flex-shrink: 0; color: var(--poly-tile-color, var(--text-tertiary)); }
.poly-tile-icon svg { width: 15px; height: 15px; }
.poly-tile-count { color: var(--text-tertiary); font-size: var(--smaller-font-size); font-variant-numeric: tabular-nums; }
.poly-tile.active { background: var(--poly-tile-color, var(--accent-color)); border-color: var(--poly-tile-color, var(--accent-color)); color: var(--poly-tile-on, var(--title-color)); }
.poly-tile.active .poly-tile-icon, .poly-tile.active .poly-tile-count { color: inherit; }
.poly-list { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 6px 12px; }
.poly-page .poly-list, .poly-panel .poly-list { padding: 0; }
.poly-page-inner { max-width: 1240px; margin: 0 auto; padding: 18px 24px 36px; }
.poly-note { padding: 8px 10px; color: var(--text-secondary); font-size: var(--small-font-size); }
.poly-page .poly-note { padding: 8px 2px; }
.poly-note.error { color: var(--tint-red-text, var(--text-secondary)); }
.poly-campus { padding: 10px 8px 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
/* Place rows follow Email's message list (full width, no inset or rounding, a hairline between rows) and Contacts' selection (accent tint, accent name). */
.poly-place { display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: baseline; gap: 2px 8px; width: 100%; box-sizing: border-box; margin: 0; padding: 10px 12px; border: 0; border-bottom: 1px solid var(--border-light); border-radius: 0; background: transparent; color: var(--text-color); font: inherit; text-align: left; cursor: pointer; transition: background-color 120ms ease-out; }
.poly-place:hover { background: color-mix(in srgb, var(--title-color) 5%, transparent); }
/* Each row carries a favourite star at its right edge, outside the row button; filled yellow when it is a favourite. */
.poly-place-item { position: relative; }
.poly-place-item .poly-place { padding-right: 38px; }
.poly-place-item > .poly-star { position: absolute; top: 8px; right: 8px; }
.poly-star { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: var(--shell-control-toolbar, 24px); height: var(--shell-control-toolbar, 24px); padding: 0; border: 0; border-radius: var(--shell-control-radius, 4px); background: transparent; color: var(--text-tertiary, var(--text-secondary)); cursor: pointer; }
.poly-star:hover { background: var(--hover-bg); color: var(--text-color); }
.poly-star svg { width: 15px; height: 15px; }
.poly-star.on, .poly-star.on:hover { color: var(--color-yellow, #e5b33a); }
.poly-star.on svg { fill: currentColor; }
.poly-star:focus-visible { outline: 2px solid var(--accent-color); outline-offset: -2px; }
.poly-place.active { background: var(--accent-tint-bg); }
.poly-place.active .poly-place-name { color: var(--accent-color); }
@media (prefers-reduced-motion: reduce) { .poly-place { transition: none; } }
.poly-panel .poly-note { padding: 10px 12px; }
.poly-panel .poly-credit { padding: 10px 12px 12px; }
.poly-place-name { min-width: 0; color: var(--title-color); font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-place-count { color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; white-space: nowrap; }
.poly-place-count.pending { color: var(--text-tertiary, var(--text-secondary)); }
.poly-place-meta { grid-column: 1 / -1; min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-open { color: var(--tint-green-text, var(--text-secondary)); }
.poly-closed { color: var(--text-secondary); }
/* The page's first bar names the place (or the campus) only; day, meal and filters live in the sidebar. */
.poly-page-title { flex: 1; min-width: 0; margin: 0; color: var(--title-color); font-size: var(--normal-font-size, 1rem); font-weight: 600; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-page-head .poly-bar-balance { width: var(--shell-control-toolbar, 24px); flex-shrink: 0; }
.poly-page-head .poly-bar-balance.double { width: calc(var(--shell-control-toolbar, 24px) * 2 + 8px); }
/* A place's facts: a fixed, centred second bar (37px + 1px line) that never scrolls or wraps; the location gives way first. */
.poly-page .poly-bar.poly-facts { padding: 0; overflow: hidden; }
.poly-facts-inner { display: flex; align-items: center; justify-content: center; gap: 14px; width: 100%; padding: 0 24px; box-sizing: border-box; overflow: hidden; white-space: nowrap; color: var(--text-secondary); font-size: var(--small-font-size); }
.poly-facts-inner > span { flex-shrink: 0; }
.poly-facts-inner > .poly-facts-where { flex-shrink: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.poly-section + .poly-section { margin-top: 22px; }
.poly-place-link { display: flex; align-items: baseline; gap: 10px; width: 100%; padding: 4px 2px 8px; border: 0; border-radius: var(--radius-sm, 4px); background: transparent; color: var(--title-color); font: inherit; text-align: left; cursor: pointer; }
.poly-place-link:hover .poly-place-link-name { text-decoration: underline; }
.poly-place-link-name { font-size: 1.15rem; font-weight: 600; }
.poly-place-link-meta { min-width: 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--small-font-size); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* Line and prices share a row; when the line's name does not fit beside the prices, the prices drop to their own row (right-aligned) instead of cutting the name. */
.poly-dish-top { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 8px; min-width: 0; }
.poly-dish-top .poly-dish-price { margin-left: auto; }
.poly-dish-line { flex: 1 1 auto; min-width: 0; max-width: 100%; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); text-transform: uppercase; letter-spacing: 0.04em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-dish-price { flex-shrink: 0; color: var(--text-secondary); font-size: var(--small-font-size); font-variant-numeric: tabular-nums; }
.poly-dish-name { color: var(--title-color); font-weight: 600; overflow-wrap: anywhere; }
.poly-dish-description { color: var(--text-secondary); font-size: var(--small-font-size); overflow-wrap: anywhere; }
.poly-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
.poly-tag { padding: 0 6px; border-radius: 999px; background: var(--hover-bg); color: var(--text-secondary); font-size: var(--smaller-font-size); line-height: 1.6; }
.poly-tag.vegan, .poly-tag.vegetarian, .poly-tag.glutenFree, .poly-tag.lactoseFree, .poly-tag.LOW { background: var(--tint-green-bg, var(--hover-bg)); color: var(--tint-green-text, var(--text-secondary)); }
.poly-tag.HIGH { background: var(--tint-orange-bg, var(--hover-bg)); color: var(--tint-orange-text, var(--text-secondary)); }
.poly-dish-allergens { margin-top: 2px; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); overflow-wrap: anywhere; }
.poly-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; padding: 2px 0 4px; }
.poly-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; border: 1px solid var(--border-light); border-radius: 8px; background: var(--container-color, transparent); color: var(--text-color); }
.poly-card-image { position: relative; aspect-ratio: 3 / 2; background: var(--hover-bg); display: grid; place-items: center; color: var(--text-tertiary, var(--text-secondary)); }
.poly-card-image svg { width: 30px; height: 30px; opacity: 0.6; }
.poly-card-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.poly-card-body { display: grid; gap: 3px; padding: 10px 12px 12px; }
.poly-card .poly-dish-name { font-size: 1rem; }
.poly-card .poly-dish-description { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
/* A narrow page lays each card out as a row: picture left, text right. */
@container (max-width: 560px) {
  .poly-page-inner { padding: 10px 12px 28px; }
  .poly-facts-inner { padding: 0 12px; }
  .poly-cards { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .poly-card { flex-direction: row; align-items: stretch; }
  .poly-card-image { flex: 0 0 112px; aspect-ratio: auto; min-height: 112px; }
  .poly-card-body { flex: 1; min-width: 0; padding: 8px 10px; }
}
.poly-credit { padding: 10px 8px 0; color: var(--text-tertiary, var(--text-secondary)); font-size: var(--smaller-font-size); }
.poly-page .poly-credit { padding: 28px 2px 0; }
`,FS=["M15 6l-6 6 6 6"],US=["M9 6l6 6-6 6"],Im=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],BS=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],HS=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],Om=["M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3","M8 3v18","M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17"],VS=["M3.5 11.5h17a8.5 6.5 0 0 1-17 0z","M9 20.5h6","M12 11.5c0-3.6 2.1-6.2 6.3-6.8 0 3.9-2.5 6.4-6.3 6.8","M12 11.5l3.2-3.2","M9.6 11.5c-.3-2.1-1.7-3.5-3.8-3.8"],GS={students:["M2.5 9.5L12 5.5l9.5 4-9.5 4z","M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4","M21.5 9.5v5"],internal:["M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z","M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2","M3 13h18"],external:["M8.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0","M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"]},Rm="M4 4l16 16",WS={vegetarian:["M5 19c0-8 5-13.5 14-14 0 9-5 14-13 14","M5 19l7.5-7.5"],vegan:["M12 20v-8","M12 12c0-3.3-2.7-6-6-6H4v1c0 3.3 2.7 6 6 6h2","M12 10c0-3.3 2.7-6 6-6h2v1c0 3.3-2.7 6-6 6h-2"],glutenFree:["M12 21V8","M12 8c-1.7-.8-2.8-2.4-2.8-4.5 1.7.8 2.8 2.4 2.8 4.5z","M12 8c1.7-.8 2.8-2.4 2.8-4.5-1.7.8-2.8 2.4-2.8 4.5z","M12 13.5c-1.9-.6-3.3-2.1-3.5-4.2 1.9.6 3.3 2.1 3.5 4.2z","M12 13.5c1.9-.6 3.3-2.1 3.5-4.2-1.9.6-3.3 2.1-3.5 4.2z",Rm],lactoseFree:["M8.5 3h7","M9 3v3L7 9.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5L15 6V3","M7 12.5h10",Rm]},zm={eth:["M1 18.5h22","M1.75 18.5v-5.5h5.75","M16.5 13h5.75v5.5","M7.5 18.5V10h9v8.5","M6.5 10h11","M12 10V6","M10.5 18.5v-2a1.5 1.5 0 0 1 3 0v2","M9.75 12.75h.01","M12 12.75h.01","M14.25 12.75h.01","M3.6 15.75h.01","M5.75 15.75h.01","M18.25 15.75h.01","M20.4 15.75h.01"],hoengg:["M3 19h18","M3 19l6-9 4 5 3-3 5 7","M15 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0"],uzh:["M2 20h20","M3 20v-6l1.5-2h4","M15.5 12h4l1.5 2v6","M8.5 20v-9h7v9","M8.5 11a3.5 3.5 0 0 1 7 0","M12 7.5V6","M10.5 20v-2.5a1.5 1.5 0 0 1 3 0V20","M5.5 16.5h.01","M18.5 16.5h.01"]},Ed=["elink","menu","campus","news","polybox"],ZS={elink:em,menu:Om,campus:zm.eth,news:Gl,polybox:Yr};function $S(n){let e=Array.isArray(n)?n.filter(i=>Ed.includes(i)):[],t=[...new Set(e)];return[...t,...Ed.filter(i=>!t.includes(i))]}function Nm(n,e,t){let i=n.filter(r=>r!==e);return i.splice(Math.max(0,Math.min(t,i.length)),0,e),i}var XS=n=>n==="elink"||n==="news"||n==="polybox"?n:n==="campus"||n==="city"?"campus":"menu",Fm=["M12 3.6l2.6 5.25 5.8.85-4.2 4.1 1 5.8L12 16.85 6.8 19.6l1-5.8-4.2-4.1 5.8-.85z"],Lm=["favorites",...Kd],qS={favorites:Fm,...zm},km={favorites:"palette:yellow",eth:"palette:primary-blue",hoengg:"palette:green",uzh:"palette:violet"},YS=["all","students","internal","external"],Xl=[["vegetarian","onlyVegetarian"],["vegan","onlyVegan"],["glutenFree","onlyGlutenFree"],["lactoseFree","onlyLactoseFree"]];function Um(n,{t:e}){let t=n.React,i=t.createElement,r=({shapes:R})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...R.map(U=>i("path",{key:U,d:U}))),s=R=>{let U=`error.${R instanceof Error?R.message:""}`;return e(U)===U?e("error.serviceError"):e(U)},o=(R,U)=>Object.entries(U).reduce((ae,[A,he])=>ae.replace(`{${A}}`,String(he)),R),a=R=>Array.isArray(R)?R.filter(U=>typeof U=="string"):[],l=R=>R===1?e("menus.one"):o(e("menus.other"),{count:R});function c(R){let U=R&&typeof R=="object"?R:{},ae=uo();return!eh(U.date)||U.date<Ci(ae)?{date:ae,service:nh()}:{date:U.date,service:U.service==="dinner"?"dinner":"lunch"}}function u(){let[,R]=t.useState(0);t.useEffect(()=>{let ae=()=>R(he=>he+1),A=[n.ui.onLanguageChanged(ae),n.settings.subscribe(ae)];return()=>{for(let he of A)he()}},[]);let U=n.settings.get();return{language:ih(n.ui.language()),locale:n.ui.language()||"en",mode:XS(U.mode),tabOrder:$S(U.tabOrder),campus:Lm.includes(U.campus)?U.campus:"hoengg",favorites:a(U.favorites),prices:YS.includes(U.prices)?U.prices:"all",filters:{vegetarian:U.onlyVegetarian===!0,vegan:U.onlyVegan===!0,glutenFree:U.onlyGlutenFree===!0,lactoseFree:U.onlyLactoseFree===!0},...c(U.day)}}let h=R=>{n.settings.set("day",R)};function d(R,U,ae){let[A,he]=t.useState({data:null,error:"",loading:R!==null});return t.useEffect(()=>{if(R===null)return;let ye=!0;return he(T=>({data:T.data,error:"",loading:!0})),ae(U>0).then(T=>{ye&&he({data:T,error:"",loading:!1})},T=>{ye&&he({data:null,error:s(T),loading:!1})}),()=>{ye=!1}},[R,U]),A}function f(R){let[U,ae]=t.useState(!1);return t.useEffect(()=>{let A=R.current,he=A?.ownerDocument.defaultView?.IntersectionObserver;if(!A||U)return;if(!he){ae(!0);return}let ye=new he(T=>{T.at(-1)?.isIntersecting&&(ae(!0),ye.disconnect())},{rootMargin:"300px"});return ye.observe(A),()=>ye.disconnect()},[U]),U}let y=(R,U,ae=!0)=>{let A=Ci(R.date);return d(ae?`${R.language}:${A}`:null,U,he=>n.backend.call("eth.week",{monday:A,language:R.language,fresh:he}))};function w(R,U){let ae=Ci(R.date),A=d(R.language,U,x=>n.backend.call("uzh.outlets",{language:R.language,fresh:x})),[he,ye]=t.useState({key:"",byPath:new Map}),T=`${R.language}:${ae}:${U}`;t.useEffect(()=>{let x=A.data;if(!x)return;let I=!0;ye({key:T,byPath:new Map(x.map(V=>[V.path,{data:null,error:"",loading:!0}]))});for(let V of x)n.backend.call("uzh.week",{path:V.path,monday:ae,language:R.language,fresh:U>0,background:!0}).then(Z=>({data:Z,error:"",loading:!1}),Z=>({data:null,error:s(Z),loading:!1})).then(Z=>{I&&ye(G=>G.key===T?{key:T,byPath:new Map(G.byPath).set(V.path,Z)}:G)});return()=>{I=!1}},[A.data,T]);let m=he.key===T?he.byPath:new Map,b=A.data?m.size<A.data.length||[...m.values()].some(x=>x.loading):!A.error;return{outlets:A,byPath:m,pending:b}}let g=(R,U,ae)=>new Intl.DateTimeFormat(U,{...ae,timeZone:"UTC"}).format(new Date(`${R}T00:00:00Z`)),p=(R,U)=>g(R,U,{weekday:"long",day:"numeric",month:"long",year:"numeric"});function C(R){return[...R.diet?[{key:R.diet,label:e(`diet.${R.diet}`)}]:[],...R.gluten===!1?[{key:"glutenFree",label:e("filter.glutenFree")}]:[],...R.lactose===!1?[{key:"lactoseFree",label:e("filter.lactoseFree")}]:[],...R.classes.map(U=>({key:"",label:U})),...R.climate?[{key:R.climate,label:e(`climate.${R.climate}`)}]:[]]}function N(R,U){let ae=U==="all"?void 0:Qd(R,U),A=U==="all"?Jd(R):ae?[ae]:[];return{short:A.length?`CHF ${A.map(he=>he.price.toFixed(2)).join(" / ")}`:"",long:A.map(he=>`${e(`price.${he.group}`)} ${ah(he.price)}`).join(" \xB7 ")}}let S=({dish:R})=>{let U=C(R);return U.length?i("span",{className:"poly-tags"},U.map(ae=>i("span",{key:`${ae.key}:${ae.label}`,className:`poly-tag ${ae.key}`},ae.label))):null};function E({dish:R,shown:U,revision:ae}){let A=t.useRef(null),he=f(A),ye=d(he&&R.detail?R.detail:null,ae,I=>n.backend.call("uzh.dish",{url:R.detail,fresh:I})),T=R.image||ye.data?.image||"",m=d(he&&T?T:null,0,()=>n.backend.call("image",{url:T})),b=R.prices.length?R.prices:ye.data?.prices??[],x=N(b,U);return i("div",{ref:A,className:"poly-card","data-dish":R.id},i("span",{className:"poly-card-image"},i(r,{shapes:Om}),m.data?i("img",{src:m.data,alt:R.name,draggable:!1}):null),i("span",{className:"poly-card-body"},i("span",{className:"poly-dish-top"},i("span",{className:"poly-dish-line"},R.line),x.short?i("span",{className:"poly-dish-price",title:x.long,"aria-label":x.long},x.short):null),i("span",{className:"poly-dish-name"},R.name),R.description?i("span",{className:"poly-dish-description"},R.description):null,i("span",{className:"poly-dish-allergens"},R.allergens.length?`${e("allergens")}: ${R.allergens.join(", ")}`:e("allergens.none")),i(S,{dish:R})))}function P({location:R,date:U,service:ae}){let A=ic(R,U,ae);if(!A)return null;let he=`${A.from}\u2013${A.to}`,ye=sh(A,U);return ye==="open"?i("span",{className:"poly-open"},o(e("hours.openNow"),{hours:he})):ye==="closed"?i("span",{className:"poly-closed"},o(e("hours.closed"),{hours:he})):i("span",null,o(e("hours.open"),{hours:he}))}let O=R=>[R.area,R.place].filter(Boolean).join(" \xB7 "),v=(R,U)=>n.workspace.openMainTab({instanceId:rc(R.id),title:R.name,newTab:U}),M=async(R,U,ae)=>{R.preventDefault();let A=await n.ui.openMenu([{id:"tab",label:e("openInNewTab"),icon:i(r,{shapes:HS})},{id:"website",label:e("openWebsite"),icon:i(r,{shapes:BS}),enabled:!!U.url},{type:"separator"},{id:"refresh",label:e("refresh"),icon:i(r,{shapes:Im})}],{x:R.clientX,y:R.clientY});A==="tab"&&v(U,!0),A==="website"&&U.url&&n.links.open(U.url),A==="refresh"&&ae()};function L({preferences:R}){return i("div",{className:"poly-groups",role:"group","aria-label":e("prices")},...["students","internal","external"].map(U=>{let ae=R.prices===U,A=`${e("prices")} \xB7 ${e(`price.${U}`)}`;return i("button",{key:U,type:"button",className:`poly-icon-btn${ae?" active":""}`,title:A,"aria-label":A,"aria-pressed":ae,onClick:()=>{n.settings.set("prices",ae?"all":U)}},i(r,{shapes:GS[U]}))}))}function B({preferences:R}){let U=rh(R.filters),ae=async he=>{let ye=await n.ui.openMenu([...Xl.flatMap(([m],b)=>[...b===2?[{type:"separator"}]:[],{id:m,type:"checkbox",label:e(`filter.${m}`),icon:i(r,{shapes:WS[m]}),checked:R.filters[m]}]),...U?[{type:"separator"},{id:"clear",label:e("filter.clear")}]:[]],{anchor:he.currentTarget,align:"end"});if(!ye)return;if(ye==="clear"){for(let[,m]of Xl)n.settings.set(m,!1);return}let T=Xl.find(([m])=>m===ye);T&&n.settings.set(T[1],!R.filters[T[0]])},A=U?`${e("filter")} \xB7 ${Xl.filter(([he])=>R.filters[he]).map(([he])=>e(`filter.${he}`)).join(", ")}`:e("filter");return i("button",{type:"button",className:`poly-icon-btn${U?" active":""}`,title:A,"aria-label":A,"aria-haspopup":"menu",onClick:ae},i(r,{shapes:VS}))}let W=(R,U,ae,A)=>i("button",{key:R,type:"button",className:R===U?"active":"","aria-pressed":R===U,onClick:()=>A(R)},ae),q=({preferences:R})=>i("div",{className:"poly-seg",role:"group","aria-label":e("service.label")},W("lunch",R.service,e("service.lunch"),U=>h({date:R.date,service:U})),W("dinner",R.service,e("service.dinner"),U=>h({date:R.date,service:U})));function z({preferences:R}){let{date:U,service:ae,locale:A}=R,he=uo(),ye=Ci(U),T=ye<=Ci(he);return i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("week.previous"),"aria-label":e("week.previous"),disabled:T,onClick:()=>{let m=ts(U,-7);h({date:m<he?he:m,service:ae})}},i(r,{shapes:FS})),i("div",{className:"poly-week-days",role:"group","aria-label":e("week.label")},...Array.from({length:7},(m,b)=>{let x=ts(ye,b),I=x===he;return i("button",{key:x,type:"button",className:`poly-week-day${I?" today":""}${x===U?" selected":""}`,title:I?`${p(x,A)} \xB7 ${e("day.today")}`:p(x,A),"aria-label":p(x,A),"aria-pressed":x===U,"aria-current":I?"date":void 0,onClick:()=>h({date:x,service:ae})},i("span",{className:"poly-week-name"},g(x,A,{weekday:"short"})),i("span",{className:"poly-week-date"},g(x,A,{day:"numeric"})))})),i("button",{type:"button",className:"poly-icon-btn",title:e("week.next"),"aria-label":e("week.next"),onClick:()=>h({date:ts(U,7),service:ae})},i(r,{shapes:US})))}function X(){let[R,U]=t.useState(0),[ae,A]=t.useState(!1);return{revision:R,refreshing:ae,refresh:()=>{A(!0),U(ye=>ye+1),setTimeout(()=>A(!1),600)}}}function ee(R,U){let ae=y(R,U),A=w(R,U),{date:he,service:ye,filters:T}=R,m=re=>!!er(re,he,ye),b=(ae.data??[]).filter(m).sort((re,ue)=>re.name.localeCompare(ue.name,R.locale)),x=(A.outlets.data??[]).flatMap(re=>{let ue=A.byPath.get(re.path)?.data;return ue&&m(ue)?[ue]:[]}),V={favorites:[...b,...x].filter(re=>R.favorites.includes(re.id)).sort((re,ue)=>re.name.localeCompare(ue.name,R.locale)),eth:b.filter(re=>re.campus==="eth"),hoengg:b.filter(re=>re.campus==="hoengg"),uzh:x},Z=re=>ho(re,he,ye,T).length,G=ae.loading&&!ae.data,j={favorites:G||A.pending,eth:G,hoengg:G,uzh:A.pending},ce={favorites:"",eth:ae.error,hoengg:ae.error,uzh:A.outlets.error};return{byTag:V,count:Z,pending:j,error:ce,hasFavorites:R.favorites.length>0}}function ne(R,U){let ae=Lm.filter(he=>he==="favorites"?R.hasFavorites:R.pending[he]||R.byTag[he].length>0),A=ae.length?ae:[U];return{visible:A,active:A.includes(U)?U:A[0]}}function me({places:R,visible:U,active:ae}){return i("nav",{className:"poly-bar poly-tiles","aria-label":e("campus.label")},U.map(A=>{let he=R.byTag[A].filter(T=>R.count(T)>0).length,ye=e(`campus.${A}`);return i("button",{key:A,type:"button",className:`poly-tile${A===ae?" active":""}`,"aria-pressed":A===ae,title:e(`campus.${A}.title`),"aria-label":`${e(`campus.${A}.title`)} ${he}`,style:{"--poly-tile-color":es(km[A]),"--poly-tile-on":co(km[A])},onClick:()=>{n.settings.set("campus",A)}},i("span",{className:"poly-tile-icon"},i(r,{shapes:qS[A]})),i("span",null,ye),i("span",{className:"poly-tile-count"},R.pending[A]&&!he?"\u2026":String(he)))}))}function te(){let R=()=>{let A=n.getState().activePluginTab;return A?.pluginId===n.pluginId?A.instanceId:void 0},[U,ae]=t.useState(R);return t.useEffect(()=>n.subscribe(()=>ae(R())),[]),U}let le=(R,U)=>{n.settings.set("favorites",R.favorites.includes(U)?R.favorites.filter(ae=>ae!==U):[...R.favorites,U].slice(-200))};function F({location:R,preferences:U}){let ae=U.favorites.includes(R.id),A=o(e(ae?"favorite.remove":"favorite.add"),{name:R.name});return i("button",{type:"button",className:`poly-star${ae?" on":""}`,"aria-pressed":ae,title:A,"aria-label":A,onClick:()=>le(U,R.id)},i(r,{shapes:Fm}))}function de({location:R,preferences:U,count:ae,active:A,tag:he,refresh:ye}){let T=i(P,{location:R,date:U.date,service:U.service}),m=[he==="favorites"&&R.source==="eth"?e(`campus.${R.campus}`):"",O(R)].filter(Boolean).join(" \xB7 ");return i("div",{className:"poly-place-item"},i("button",{type:"button",className:`poly-place${A?" active":""}`,"data-place":R.id,"aria-current":A?"page":void 0,onClick:b=>v(R,n.ui.hasModKey(b)),onAuxClick:b=>{b.button===1&&(b.preventDefault(),v(R,!0))},onContextMenu:b=>{M(b,R,ye)}},i("span",{className:"poly-place-name"},R.name),i("span",{className:"poly-place-count"},l(ae)),i("span",{className:"poly-place-meta"},m,m&&ic(R,U.date,U.service)?" \xB7 ":null,T)),i(F,{location:R,preferences:U}))}function pe(R,U,ae,A){return R.pending[U]&&!ae.length?e(U==="uzh"?"loading.uzh":"loading"):ae.length?R.pending[U]?e("loading.uzh"):"":R.byTag[U].length?e("empty.filtered"):e(U==="favorites"?"empty.favorites":`empty.${A.service}`)}function Me({places:R,campus:U,preferences:ae,refresh:A}){let he=te();if(R.error[U])return i("div",{className:"poly-note error",role:"alert"},R.error[U]);let ye=R.byTag[U].filter(b=>R.count(b)>0),T=ye.map(b=>i(de,{key:b.id,location:b,preferences:ae,count:R.count(b),active:he===rc(b.id),tag:U,refresh:A})),m=pe(R,U,ye,ae);return i(t.Fragment,null,...T,m?i("div",{className:"poly-note"},m):null)}let Ee=R=>e(R==="elink"?"elink.title":R==="campus"?"campusMap.title":R==="news"?"news.title":R==="polybox"?"polybox.title":"menu.title"),Ie=nm(n,e),Y=gm(n,e),ie=Pm(n,e);function xe({preferences:R}){let[U,ae]=t.useState(null),A=t.useRef(!1),he=U?.order??R.tabOrder,ye=m=>{m.join()!==R.tabOrder.join()&&n.settings.set("tabOrder",m)},T=(m,b)=>{if(m.button!==0)return;let x=m.currentTarget,I=x.parentElement;if(!I)return;let V=m.clientX,Z=x.getBoundingClientRect().width+(parseFloat(getComputedStyle(I).columnGap)||0),G=R.tabOrder.indexOf(b),j=R.tabOrder,ce=!1;A.current=!1;let re=x.ownerDocument.defaultView??window,ue=Re=>{let we=Re.clientX-V;if(!ce&&Math.abs(we)<4)return;ce||(ce=!0,A.current=!0,x.setPointerCapture?.(Re.pointerId));let se=Math.max(0,Math.min(Ed.length-1,G+Math.round(we/Z)));j=Nm(R.tabOrder,b,se),ae({mode:b,order:j,offset:we-(j.indexOf(b)-G)*Z})},be=()=>{re.removeEventListener("pointermove",ue),re.removeEventListener("pointerup",be),re.removeEventListener("pointercancel",be),ae(null),ce&&ye(j)};re.addEventListener("pointermove",ue),re.addEventListener("pointerup",be),re.addEventListener("pointercancel",be)};return i("div",{className:"poly-tabs",role:"tablist","aria-label":e("mode.label")},he.map((m,b)=>i("button",{key:m,type:"button",role:"tab",className:`poly-tab ${m===R.mode?"active":""} ${U?.mode===m?"dragging":""}`,"aria-selected":m===R.mode,tabIndex:m===R.mode?0:-1,title:Ee(m),"aria-label":Ee(m),"data-mode":m,style:U?.mode===m?{transform:`translateX(${U.offset}px)`}:void 0,onPointerDown:x=>T(x,m),onClick:()=>{if(A.current){A.current=!1;return}n.settings.set("mode",m)},onKeyDown:x=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(x.key))return;x.preventDefault();let I=x.key==="Home"?0:x.key==="End"?he.length-1:x.altKey?Math.max(0,Math.min(he.length-1,b+(x.key==="ArrowLeft"?-1:1))):(b+(x.key==="ArrowLeft"?-1:1)+he.length)%he.length,V=x.currentTarget;if(x.altKey){ye(Nm(he,m,I)),V.ownerDocument.defaultView?.requestAnimationFrame(()=>V.parentElement?.querySelector(`[data-mode="${m}"]`)?.focus());return}n.settings.set("mode",he[I]),V.parentElement?.children[I]?.focus()}},i(r,{shapes:ZS[m]}))))}function Te({preferences:R}){let U=R.mode,ae=he=>U==="elink"?Ie.openElink(he):U==="campus"?Un(e("campusMap.title"),he):U==="news"?Y.openNews(he):U==="polybox"?ie.openPolybox(he):n.workspace.openMainTab({newTab:he}),A=e(U==="elink"?"elink.openPage":U==="campus"?"campusMap.openPage":U==="news"?"news.openPage":U==="polybox"?"polybox.openPage":"openPage");return i("div",{className:"panel-header"},i("span",{className:"panel-title"},Ee(R.mode)),i("div",{className:"poly-actions"},i("button",{type:"button",className:"plugin-open-page",title:A,"aria-label":A,onClick:he=>ae(n.ui.hasModKey(he)),onAuxClick:he=>{he.button===1&&(he.preventDefault(),ae(!0))}})))}function ve({preferences:R}){let{revision:U,refresh:ae}=X(),A=ee(R,U),{visible:he,active:ye}=ne(A,R.campus);return i(t.Fragment,null,i(me,{places:A,visible:he,active:ye}),i("div",{className:"poly-bar poly-week"},i(z,{preferences:R})),i("div",{className:"poly-bar"},i(q,{preferences:R}),i("div",{className:"poly-spacer"}),i(L,{preferences:R}),i("div",{className:"poly-divider","aria-hidden":!0}),i(B,{preferences:R})),i("div",{className:"poly-list"},i(Me,{places:A,campus:ye,preferences:R,refresh:ae}),i("div",{className:"poly-credit"},e(ye==="uzh"?"credit.uzh":ye==="favorites"?"credit.both":"credit.eth"))))}function Ve(){let R=u();return t.useEffect(()=>{n.settings.get().mode==="city"&&n.settings.set("mode","campus")},[]),i("div",{className:"poly-panel"},i(Te,{preferences:R}),i(xe,{preferences:R}),R.mode==="elink"?i(Ie.ElinkPanelBody,null):R.mode==="campus"?i(Bh,null):R.mode==="news"?i(Y.NewsPanelBody,null):R.mode==="polybox"?i(ie.PolyboxPanelBody,null):i(ve,{preferences:R}))}function at({location:R,preferences:U,revision:ae}){let A=ho(R,U.date,U.service,U.filters);return A.length?i("div",{className:"poly-cards"},A.map(he=>i(E,{key:he.id,dish:he,shown:U.prices,revision:ae}))):i("div",{className:"poly-note"},er(R,U.date,U.service)?e("empty.filtered"):e("empty.location"))}function Ke({location:R,preferences:U}){let ae=er(R,U.date,U.service),A=ho(R,U.date,U.service,U.filters).length;return i("div",{className:"poly-facts-inner"},O(R)?i("span",{className:"poly-facts-where",title:O(R)},O(R)):null,i(P,{location:R,date:U.date,service:U.service}),ae?.from&&ae.to?i("span",null,o(e(`service.time.${U.service}`),{hours:`${ae.from}\u2013${ae.to}`})):null,ae?i("span",null,l(A)):null)}let We=(...R)=>i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},...R));function st({place:R,preferences:U,revision:ae,onTitle:A,onLocation:he}){let ye=Ci(U.date),T=y(U,ae,R.source==="eth"),m=d(R.source==="uzh"?`${U.language}:${R.key}:${ye}`:null,ae,V=>n.backend.call("uzh.week",{path:R.key,monday:ye,language:U.language,fresh:V})),b=R.source==="eth"?T:m,x=R.source==="eth"?T.data?.find(V=>V.id===R.id)??null:m.data;t.useEffect(()=>{x&&A(x.name),he(x)},[x]);let I=i("div",{className:"poly-bar poly-facts"},x?i(Ke,{location:x,preferences:U}):null);return b.error?i(t.Fragment,null,I,We(i("div",{className:"poly-note error",role:"alert"},b.error))):x?i(t.Fragment,null,I,We(i(at,{location:x,preferences:U,revision:ae}),i("div",{className:"poly-credit"},e(x.source==="uzh"?"credit.uzh":"credit.eth")))):i(t.Fragment,null,I,We(i("div",{className:"poly-note"},b.loading?e("loading"):e("error.notFound"))))}function Je({preferences:R,revision:U,refresh:ae,onTitle:A}){let he=ee(R,U),{active:ye}=ne(he,R.campus),T=e(`campus.${ye}.title`);if(t.useEffect(()=>{A(T)},[T]),he.error[ye])return We(i("div",{className:"poly-note error",role:"alert"},he.error[ye]));let m=he.byTag[ye].filter(b=>he.count(b)>0);return We(...m.map(b=>i("section",{key:b.id,className:"poly-section","data-place":b.id},i("button",{type:"button",className:"poly-place-link",onClick:x=>v(b,n.ui.hasModKey(x)),onAuxClick:x=>{x.button===1&&(x.preventDefault(),v(b,!0))},onContextMenu:x=>{M(x,b,ae)}},i("span",{className:"poly-place-link-name"},b.name),i("span",{className:"poly-place-link-meta"},O(b))),i(at,{location:b,preferences:R,revision:U}))),pe(he,ye,m,R)?i("div",{className:"poly-note"},pe(he,ye,m,R)):null,i("div",{className:"poly-credit"},e(ye==="uzh"?"credit.uzh":ye==="favorites"?"credit.both":"credit.eth")))}function ct({instanceId:R}){let U=u(),{revision:ae,refreshing:A,refresh:he}=X(),ye=oh(R),[T,m]=t.useState(""),[b,x]=t.useState(null);return t.useEffect(()=>{n.workspace.setMainTabTitle(ye&&T||e("menu.title"),R)},[R,T,n.ui.language()]),i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:`poly-bar-balance${ye?" double":""}`,"aria-hidden":!0}),i("h1",{className:"poly-page-title"},T),ye&&b?i(F,{location:b,preferences:U}):ye?i("span",{className:"poly-bar-balance","aria-hidden":!0}):null,i("button",{type:"button",className:`poly-icon-btn${A?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:he},i(r,{shapes:Im}))),ye?i(st,{place:ye,preferences:U,revision:ae,onTitle:m,onLocation:x}):i(Je,{preferences:U,revision:ae,refresh:he,onTitle:m}))}n.registerView("poly.panel",Ve);let ut=R=>Jf(R.instanceId)?i(Ie.ElinkPage,R):Ni(R.instanceId)?i(Yf,null):im(R.instanceId)?i(Y.NewsPage,R):xm(R.instanceId)?i(ie.PolyboxPage,R):i(ct,R);n.registerView("poly.page",ut)}var Td="poly-city-styles",jS=`
.z3d-panel { display:flex; flex-direction:column; height:100%; min-height:0; }
.z3d-panel-body { flex:1 1 auto; min-height:0; overflow-y:auto; overflow-anchor:none; padding:6px; display:flex; flex-direction:column; gap:12px; }
.z3d-section-title { padding:0 6px 4px; font-size:var(--smaller-font-size); font-weight:600; color:var(--text-tertiary); }
.z3d-list { display:flex; flex-direction:column; gap:1px; }
.z3d-row { display:flex; align-items:center; gap:8px; width:100%; min-height:28px; padding:0 6px; box-sizing:border-box; border:none; border-radius:4px;
  background:transparent; color:var(--text-color); font:inherit; font-size:var(--smaller-font-size); text-align:left; cursor:pointer; }
.z3d-row:hover { background:var(--hover-bg); }
.z3d-row:focus-visible { outline:2px solid var(--accent-color); outline-offset:-2px; }
.z3d-row svg { width:14px; height:14px; flex:none; color:var(--text-tertiary); }
.z3d-row-name { flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.z3d-facts { display:grid; grid-template-columns:auto minmax(0, 1fr); gap:4px 12px; padding:0 6px; font-size:var(--smaller-font-size); }
.z3d-facts dt { color:var(--text-tertiary); }
.z3d-facts dd { margin:0; color:var(--text-color); text-align:right; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-variant-numeric:tabular-nums; }
.z3d-option { display:flex; align-items:center; justify-content:space-between; gap:8px; min-height:30px; padding:0 6px; font-size:var(--smaller-font-size); color:var(--text-color); }
.z3d-segments { display:inline-flex; align-items:center; height:24px; padding:2px; box-sizing:border-box; border-radius:var(--radius-sm); background:var(--container-color-light); }
.z3d-segment { height:20px; padding:0 8px; border:none; border-radius:calc(var(--radius-sm) - 1px); background:transparent; color:var(--text-secondary); font:inherit; font-size:var(--smaller-font-size); cursor:pointer; }
.z3d-segment:hover { color:var(--text-color); }
.z3d-segment[aria-pressed='true'] { background:var(--accent-tint-bg); color:var(--title-color); }
.z3d-segment:focus-visible { outline:2px solid var(--accent-color); outline-offset:-2px; }
.z3d-note { padding:0 6px; font-size:var(--smaller-font-size); line-height:1.45; color:var(--text-secondary); }
.z3d-note code, .z3d-message code { font-family:var(--font-monospace, monospace); font-size:0.95em; word-break:break-all; }
.z3d-note a, .z3d-attribution a { color:var(--link-color, var(--accent-color)); text-decoration:none; }
.z3d-error { color:var(--text-error, var(--tint-red-text, #d44)); }

.z3d-page { position:relative; display:flex; flex-direction:column; height:100%; min-height:0; background:var(--pane-bg); }
.z3d-header { position:relative; display:flex; align-items:center; flex:none; height:var(--app-bar-height); box-sizing:border-box;
  border-bottom:var(--chrome-border-width, 1px) solid var(--border-light); background:var(--pane-bg); font-size:0.8125rem; user-select:none; }
.z3d-header-title { position:absolute; left:50%; transform:translateX(-50%); display:flex; align-items:center; gap:7px; min-width:0;
  max-width:max(0px, calc(100% - 2 * (var(--plugin-navigation-offset, 60px) + var(--space-button, 8px) + var(--shell-control-toolbar, 26px))));
  color:var(--title-color); font-weight:600; }
.z3d-header-title svg { width:14px; height:14px; flex:none; color:var(--text-tertiary); }
.z3d-header-text { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.z3d-header-btn { position:absolute; top:50%; transform:translateY(-50%); display:flex; align-items:center; justify-content:center;
  width:var(--shell-control-toolbar, 26px); height:var(--shell-control-toolbar, 26px); padding:0; border:none; border-radius:var(--shell-control-radius, 6px);
  background:transparent; color:var(--text-secondary); cursor:pointer; }
.z3d-header-btn:hover { background:var(--hover-bg); color:var(--title-color); }
.z3d-header-btn svg { width:15px; height:15px; }
.z3d-header-reset { right:calc(var(--plugin-actions-offset, 36px) + var(--space-button, 8px) + 2px); }
.z3d-stage { position:relative; flex:1 1 auto; min-height:0; overflow:hidden; }
.z3d-canvas { position:absolute; inset:0; width:100%; height:100%; display:block; outline:none; touch-action:none; }
.z3d-message { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; padding:24px;
  text-align:center; font-size:var(--smaller-font-size); color:var(--text-secondary); pointer-events:none; }
.z3d-message strong { color:var(--title-color); font-size:0.875rem; }
.z3d-message > * { max-width:520px; pointer-events:auto; }
.z3d-card { position:absolute; left:10px; bottom:10px; min-width:200px; max-width:min(320px, calc(100% - 20px)); padding:8px 0; box-sizing:border-box;
  border:1px solid var(--border-light); border-radius:var(--radius-md, 6px); background:var(--menu-bg, var(--pane-bg)); box-shadow:var(--shadow-menu, none); }
.z3d-card-head { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:0 6px 6px 12px; font-size:var(--smaller-font-size); font-weight:600; color:var(--title-color); }
.z3d-card .z3d-facts { padding:0 12px; }
.z3d-card-close { display:flex; align-items:center; justify-content:center; width:20px; height:20px; padding:0; border:none; border-radius:4px; background:transparent; color:var(--text-tertiary); cursor:pointer; }
.z3d-card-close:hover { background:var(--hover-bg); color:var(--title-color); }
.z3d-card-close svg { width:12px; height:12px; }
.z3d-status { position:absolute; right:10px; top:10px; padding:2px 8px; border-radius:4px; background:var(--menu-bg, var(--pane-bg)); color:var(--text-tertiary);
  font-size:var(--smaller-font-size); pointer-events:none; }
.z3d-attribution { position:absolute; right:8px; bottom:8px; padding:1px 6px; border-radius:4px; background:var(--menu-bg, var(--pane-bg)); font-size:0.6875rem; color:var(--text-secondary); pointer-events:none; }
`;function Bm(){let n=document.getElementById(Td);n||(n=document.createElement("style"),n.id=Td,document.head.appendChild(n)),n.textContent=jS;let e=n;return()=>{document.getElementById(Td)===e&&e.remove()}}var jr="valley";var CP=`.${jr}`,PP=`app.${jr}`;var KS=[`.${jr}`,".git"],JS=[".obsidian",".trash"];var NP=new Set(KS.map(n=>n.toLowerCase()));var LP=new Set(JS.map(n=>n.toLowerCase()));function QS(n){return n.trim().replace(/\\/g,"/").replace(/\/{2,}/g,"/").replace(/^\.?\/+/,"").replace(/\/+$/,"")}var eM=/^[a-zA-Z]:/;function Vm(n){if(typeof n!="string")return"";let e=QS(n);return!e||e==="."||eM.test(e)||e.split("/").some(t=>t==="..")?"":e}var Lt=`.${jr}`,tM="plugins",ro=`${Lt}/${tM}`,ql=`${ro}/packages`,UP=`${ql}/core`,BP=`${ql}/github`,HP=`${ql}/local`,VP=`${ql}/community`,GP=`${ro}/community.json`,WP=`${ro}/data`;var ZP=`${ro}/enabled.json`,$P=`${ro}/sources.json`,XP=`${Lt}/state`,Gt=`${Lt}/settings`,Hm=`${Lt}/data`,Ad=`${Lt}/recovery`;var Cd=`${Lt}/accounts`,Kr=`${Lt}/ai`,qP=`${Kr}/connections.json`,YP=`${Kr}/defaults.json`,jP=`${Kr}/budgets.json`,KP=`${Kr}/usage.sqlite`,JP=`${Kr}/security/guards.json`,QP=`${Kr}/security/activity.sqlite`,eI=`${Cd}/providers`,tI=`${Cd}/providers.lock.json`,nM=`${Lt}/trash`,nI=`${nM}/items`,Pd=`${Lt}/cache`,iI=`${Pd}/accounts`,Gm=`${Pd}/search`,rI=`${Pd}/providers`;var sI=`${Gm}/index.jsonl`,oI=`${Gm}/content-index.bin`,aI=`${Ad}/drafts`,lI=`${Ad}/transactions`,cI=`${Ad}/retired`;var oi="design",iM="themes",Wm=`${Lt}/${oi}/${iM}`,uI=`${Wm}/local`,dI=`${Wm}/community`;var hI={app:`${Gt}/app.json`,appearance:`${Lt}/${oi}/appearance.json`,"icon-rail":`${Lt}/${oi}/icon-rail.json`,"tab-rail":`${Lt}/${oi}/tab-rail.json`,"footer-rail":`${Lt}/${oi}/footer-rail.json`,"plugin-startup":`${Lt}/${oi}/right-sidebar-startup.json`,"new-tab":`${Lt}/${oi}/new-tab.json`,pallette:`${Lt}/${oi}/palette.json`,group:`${Hm}/groups.json`,units:`${Hm}/units.json`,metadata:`${Gt}/file-viewers.json`,notification:`${Gt}/notification-types.json`,"notification-settings":`${Gt}/notification.json`,preferences:`${Gt}/preferences.json`,"link-actions":`${Gt}/link-actions.json`,markdown:`${Gt}/markdown.json`,editor:`${Gt}/editor.json`,"editor-vim":`${Gt}/editor-vim.json`,"markdown-todo":`${Gt}/markdown-todo.json`,"markdown-codeblocks":`${Gt}/markdown-codeblocks.json`,"markdown-template":`${Gt}/markdown-template.json`,"markdown-embeed":`${Gt}/markdown-embeed.json`,files:`${Gt}/file.json`,"file-sorter":`${Gt}/file-sorter.json`,search:`${Gt}/search.json`,"search-tag":`${Gt}/search-tag.json`,"search-content":`${Gt}/search-content.json`,design:`${Lt}/${oi}/appearance.json`,accounts:`${Cd}/connections.json`};var rM=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),Zm=16384;var $m=new Set(["__proto__","prototype","constructor"]);function Xm(n){let e=0;for(let t of n){let i=t.codePointAt(0);e+=i<=127?1:i<=2047?2:i<=65535?3:4}return e}function Rd(n){let e=new WeakSet,t=0,i=(s,o)=>{if(++t>8192||o>32)throw new Error("Bookmark state is too complex");if(s===null||typeof s=="boolean")return s;if(typeof s=="string"){if(Xm(s)>Zm)throw new Error("Bookmark state is too large");return s}if(typeof s=="number")return Number.isFinite(s)?Object.is(s,-0)?0:s:void 0;if(!s||typeof s!="object"||e.has(s))return;let a=Array.isArray(s),l=Object.getPrototypeOf(s);if(!(!a&&l!==null&&(Object.getPrototypeOf(l)!==null||typeof Object.getOwnPropertyDescriptor(l,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(l,"constructor").value)!=="function Object() { [native code] }"))){e.add(s);try{let c=Reflect.ownKeys(s);if(c.length+t>8192||c.some(d=>typeof d=="string"&&$m.has(d)))throw new Error("Invalid or excessive bookmark state keys");let u=Object.getOwnPropertyDescriptors(s);if(a){let d=u.length?.value;if(!Number.isSafeInteger(d)||d>8192)throw new Error("Bookmark state is too complex");return Array.from({length:d},(f,y)=>{let w=u[String(y)];return w&&"value"in w?i(w.value,o+1)??null:null})}let h={};for(let d of Object.keys(u).sort()){if($m.has(d))throw new Error("Invalid bookmark state key");let f=u[d];if(!f.enumerable||!("value"in f)){t++;continue}let y=i(f.value,o+1);y!==void 0&&(h[d]=y)}return h}finally{e.delete(s)}}},r=i(n,0);if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Invalid bookmark state");if(Xm(JSON.stringify(r))>Zm)throw new Error("Bookmark state is too large");return r}function jm(n){if(typeof n!="string"||n.length>4096||/[\u0000-\u001f]/.test(n)||/^(?:[\\/]|[A-Za-z]:)/.test(n))throw new Error("Invalid bookmark path");let e=Vm(n);if(!e)throw new Error("Invalid bookmark path");return e}function Id(n,e,t){if(typeof n!="string"||n.length>e||/[\u0000-\u001f]/.test(n))throw new Error(`Invalid bookmark ${t}`);return n.trim().normalize("NFC")}function qm(n){let t=(n.target?["path","filePath","file"].flatMap(r=>typeof n.target.state[r]=="string"?[n.target.state[r]]:[]):[n.folderPath]).join(" "),i=/\.[^./]+$/.exec(t)?.[0]??"";return[n.title,n.description,t,i,n.providerName,n.target?.pluginId].filter(Boolean).join(" ").normalize("NFC").toLowerCase()}function Nd(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid plugin bookmark");let e=n;if(e.kind!=="plugin"||typeof e.pluginId!="string"||!/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(e.pluginId)||!rM.has(e.surface))throw new Error("Invalid plugin bookmark target");if(e.instanceId!==void 0&&(typeof e.instanceId!="string"||e.instanceId.length>512))throw new Error("Invalid bookmark instance");if(e.itemId!==void 0&&(typeof e.itemId!="string"||!e.itemId||e.itemId.length>2048||/[\u0000-\u001f]/.test(e.itemId)))throw new Error("Invalid bookmark item");if(!e.state||typeof e.state!="object"||Array.isArray(e.state))throw new Error("Invalid bookmark state");let t=Rd(e.state);return t.path!==void 0&&(t.path=jm(t.path)),{kind:"plugin",pluginId:e.pluginId,surface:e.surface,state:t,...e.instanceId===void 0?{}:{instanceId:e.instanceId},...e.itemId===void 0?{}:{itemId:e.itemId}}}var sM=/^[A-Za-z0-9_-]{1,64}$/;function Ym(n,e){if(typeof n!="string"||!sM.test(n))throw new Error(`Invalid bookmark ${e}`);return n}function Km(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark");let e=n,t=Id(e.title,512,"title"),i={...e.description===void 0?{}:{description:Id(e.description,1024,"description")},...e.providerName===void 0?{}:{providerName:Id(e.providerName,256,"provider name")},...typeof e.createdAt=="number"&&Number.isSafeInteger(e.createdAt)&&e.createdAt>=0?{createdAt:e.createdAt}:{}},r=e.group===void 0?{}:{group:Ym(e.group,"group")};if(e.groupId!==void 0){let a=Ym(e.groupId,"group id");if(!t||e.target!==void 0)throw new Error("Invalid bookmark group");return{folderPath:"",title:t,groupId:a,...i}}if(e.target!==void 0){let a={folderPath:"",title:t,target:Nd(e.target),...i,...r};return{...a,searchText:qm(a)}}if(typeof e.folderPath!="string")throw new Error("Invalid bookmark path");let o={folderPath:jm(e.folderPath),title:t,...i,...r};return{...o,searchText:qm(o)}}function so(n){let e=0,t=s=>!!(s&&typeof s=="object"&&!Array.isArray(s)),i=s=>s.length>0&&s.length<=256&&!["__proto__","prototype","constructor"].includes(s),r=(s,o)=>{if(++e>2048||o>32||!t(s)||typeof s.type!="string")return!1;let a=(...l)=>Object.keys(s).every(c=>c==="type"||l.includes(c));return["unknown","null","boolean","number","string","function"].includes(s.type)?a():s.type==="literal"?a("value")&&(s.value===null||["string","boolean"].includes(typeof s.value)||typeof s.value=="number"&&Number.isFinite(s.value)):s.type==="array"?a("items","maxItems")&&(s.maxItems===void 0||Number.isSafeInteger(s.maxItems)&&s.maxItems>=0&&s.maxItems<=1e5)&&r(s.items,o+1):s.type==="tuple"?a("items","minItems")&&Array.isArray(s.items)&&s.items.length<=64&&(s.minItems===void 0||Number.isSafeInteger(s.minItems)&&s.minItems>=0&&s.minItems<=s.items.length)&&s.items.every(l=>r(l,o+1)):s.type==="union"?a("anyOf")&&Array.isArray(s.anyOf)&&s.anyOf.length>0&&s.anyOf.length<=32&&s.anyOf.every(l=>r(l,o+1)):s.type==="object"?a("properties","required","additionalProperties")&&t(s.properties)&&Object.entries(s.properties).every(([l,c])=>i(l)&&r(c,o+1))&&(s.required===void 0||Array.isArray(s.required)&&s.required.every(l=>typeof l=="string"&&Object.hasOwn(s.properties,l)))&&(s.additionalProperties===void 0||typeof s.additionalProperties=="boolean"):!1};return r(n,0)}var oM=new Map;function vt(n,e,t,i,r,s,o,a,l="owner"){let c=Object.freeze({id:n,kind:e,version:t,cardinality:i,validate:r,identities:s,identityScope:l,serviceCalls:o,serviceMetadata:a});return oM.set(`${e}:${n}@${t}`,c),c}var kd=256;var Xe=n=>!!n&&typeof n=="object"&&!Array.isArray(n),At=(n,e)=>typeof n[e]=="function",Ki=n=>n===void 0,Jr=n=>typeof n=="boolean",qe=n=>typeof n=="string",cn=n=>n===void 0||qe(n),aM=n=>n===void 0||typeof n=="number",lM=n=>n===void 0||typeof n=="boolean",ft=(n,e)=>n.length===e.length&&e.every((t,i)=>t(n[i])),Xt=n=>Xe(n)&&typeof n.ok=="boolean"&&(n.error===void 0||typeof n.error=="string"),Qm=n=>Xe(n),tg=n=>Xe(n)&&qe(n.id)&&qe(n.title)&&qe(n.date)&&(n.documentRef===void 0||Xe(n.documentRef)&&qe(n.documentRef.pluginId)&&qe(n.documentRef.sourceId)&&qe(n.documentRef.itemId)),cM=n=>Xe(n)&&qe(n.date)&&cn(n.startTime)&&cn(n.endTime)&&cn(n.sourceId)&&cn(n.itemId),uM=n=>Xe(n)&&qe(n.url)&&cn(n.title)&&lM(n.newTab),dM=n=>Xe(n)&&qe(n.query),ng=n=>Xe(n)&&qe(n.name)&&cn(n.context)&&Number.isFinite(n.lng)&&Number.isFinite(n.lat),hM=n=>Array.isArray(n)&&n.every(ng),pM=n=>n===null||ng(n),fM=n=>n===void 0||Xe(n)&&cn(n.approvalToken)&&(n.cancellation===void 0||Xe(n.cancellation)),mM=n=>typeof n=="string"||Xe(n)&&typeof n.text=="string",gM=n=>Xe(n)&&typeof n.name=="string"&&n.name.trim().length>0&&typeof n.description=="string"&&Xe(n.parameters)&&(n.sideEffect==="read"||n.sideEffect==="write")&&cn(n.commandId)&&(n.commandDispatch===void 0||n.commandDispatch==="dynamic")&&(n.timeoutMs===void 0||Number.isSafeInteger(n.timeoutMs)&&Number(n.timeoutMs)>0&&Number(n.timeoutMs)<=3e5),ig=n=>Xe(n)&&qe(n.id)&&qe(n.label)&&cn(n.labelKey)&&cn(n.description)&&(n.danger===void 0||typeof n.danger=="boolean")&&(n.enabled===void 0||typeof n.enabled=="boolean")&&(n.submenu===void 0||Array.isArray(n.submenu)&&n.submenu.every(ig)),rg={list:{args:n=>n.length===0,result:n=>Array.isArray(n)&&n.every(tg)},create:{args:n=>ft(n,[qe,Qm]),result:Jr},update:{args:n=>ft(n,[qe,Qm]),result:Jr},remove:{args:n=>ft(n,[qe]),result:Jr},open:{args:n=>ft(n,[qe]),result:Ki},configure:{args:n=>n.length===0,result:Ki},actions:{args:n=>ft(n,[qe]),result:n=>Array.isArray(n)&&n.every(ig)},runAction:{args:n=>ft(n,[qe,qe]),result:Jr}},sg=n=>Xe(n)&&qe(n.name)&&qe(n.version)&&cn(n.description)&&cn(n.author)&&(n.localized===void 0||Xe(n.localized)&&Object.values(n.localized).every(e=>Xe(e)&&qe(e.name)&&cn(e.description))),yM=vt("calendar.itemSource","service","1.3.0","many",n=>Xe(n)&&At(n,"list")&&(n.integration===void 0||sg(n.integration)),void 0,rg,n=>n.integration),Yl=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n)&&Number.isFinite(Date.parse(`${n}T00:00:00Z`))&&new Date(`${n}T00:00:00Z`).toISOString().slice(0,10)===n,Ld=n=>typeof n=="string"&&n.length>0&&n.length<=8192,bM=n=>Xe(n)&&Yl(n.startDate)&&Yl(n.endDate)&&n.startDate<=n.endDate&&typeof n.limit=="number"&&Number.isInteger(n.limit)&&n.limit>0&&n.limit<=kd&&(n.cursor===void 0||Ld(n.cursor)),xM=n=>Xe(n)&&Ld(n.revision)&&(n.cursor===void 0||Ld(n.cursor))&&Array.isArray(n.items)&&n.items.length<=kd&&n.items.every(e=>tg(e)&&Yl(e.date)&&(e.endDate===void 0||Yl(e.endDate)&&e.endDate>=e.date))&&new Set(n.items.map(e=>e.id)).size===n.items.length,vM=vt("calendar.itemSource","service","2.0.0","many",n=>Xe(n)&&At(n,"list")&&(n.integration===void 0||sg(n.integration)),void 0,{...rg,list:{args:n=>ft(n,[bM]),result:xM}},n=>n.integration),_M=vt("calendar.itemSourceRevision","state","1.0.0","many",n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0),wM=vt("calendar.navigator","service","1.0.0","one",n=>Xe(n)&&At(n,"openDate"),void 0,{openDate:{args:n=>ft(n,[cM]),result:Ki}}),SM=vt("calendar.panelSelection","state","1.0.0","one",n=>Xe(n)&&(n.selectedDate===null||typeof n.selectedDate=="string")&&(n.rangeStart===null||typeof n.rangeStart=="string")&&(n.rangeEnd===null||typeof n.rangeEnd=="string")),MM=vt("web.activeContext","state","1.0.0","one",n=>Xe(n)&&typeof n.instanceId=="string"&&typeof n.url=="string"&&typeof n.title=="string");function eg(n){return Xe(n)&&typeof n.id=="string"&&typeof n.displayName=="string"&&(n.avatarUrl===void 0||typeof n.avatarUrl=="string")&&Array.isArray(n.emails)&&n.emails.every(e=>Xe(e)&&typeof e.address=="string"&&(e.label===void 0||typeof e.label=="string"))}var EM=vt("contacts.directory","service","1.0.0","one",n=>Xe(n)&&["search","resolveEmails","open"].every(e=>At(n,e)),void 0,{search:{args:n=>n.length===2&&typeof n[0]=="string"&&n[0].length<=1e3&&Number.isInteger(n[1])&&Number(n[1])>0&&Number(n[1])<=50,result:n=>Array.isArray(n)&&n.length<=50&&n.every(eg)},resolveEmails:{args:n=>n.length===1&&Array.isArray(n[0])&&n[0].length<=200&&n[0].every(e=>typeof e=="string"&&e.length<=1e3),result:n=>Array.isArray(n)&&n.every(e=>Xe(e)&&typeof e.address=="string"&&Array.isArray(e.contacts)&&e.contacts.every(eg))},open:{args:n=>n.length>=1&&n.length<=2&&typeof n[0]=="string"&&(n[1]===void 0||Xe(n[1])&&(n[1].newTab===void 0||typeof n[1].newTab=="boolean")),result:Ki}}),TM=vt("contacts.directoryRevision","state","1.0.0","one",n=>Number.isSafeInteger(n)&&Number(n)>=0),AM=vt("web.navigator","service","1.0.0","one",n=>Xe(n)&&At(n,"open"),void 0,{open:{args:n=>ft(n,[uM]),result:Ki}}),CM=vt("selection.textAction","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&typeof n.label=="string"&&Array.isArray(n.surfaces)&&At(n,"run"),n=>[n.id]),PM=vt("geo.navigator","service","1.0.0","one",n=>Xe(n)&&At(n,"open"),void 0,{open:{args:n=>ft(n,[dM]),result:Ki}}),IM=vt("geo.search","service","1.0.0","one",n=>Xe(n)&&At(n,"search")&&At(n,"reverse"),void 0,{search:{args:n=>ft(n,[qe]),result:hM},reverse:{args:n=>ft(n,[e=>Number.isFinite(e),e=>Number.isFinite(e)]),result:pM}}),RM=vt("agent.toolProvider","service","1.0.0","many",n=>Xe(n)&&Array.isArray(n.tools)&&n.tools.every(gM)&&At(n,"execute"),n=>n.tools.map(e=>e.name),{execute:{args:n=>ft(n,[qe,Xe,fM]),result:mM}},n=>({tools:n.tools}),"global"),NM=vt("guard.runtime","service","1.0.0","one",n=>Xe(n)&&["resolve","requestApproval","consumeToken","audit"].every(e=>At(n,e)),void 0,{resolve:{args:n=>ft(n,[Xe]),result:Xe},requestApproval:{args:n=>ft(n,[Xe]),result:Jr},consumeToken:{args:n=>n.length>=1&&n.length<=2&&qe(n[0])&&cn(n[1]),result:Jr},audit:{args:n=>ft(n,[Xe]),result:Ki}}),LM=vt("browser.automation","service","1.0.0","one",n=>Xe(n)&&["list","open","switch","close","snapshot","readText","readHtml","screenshot","navigate","back","forward","reload","click","type","select","scroll","pressKey"].every(e=>At(n,e)),void 0,{list:{args:n=>n.length===0,result:Xt},open:{args:n=>ft(n,[qe]),result:Xt},switch:{args:n=>ft(n,[qe]),result:Xt},close:{args:n=>ft(n,[qe]),result:Xt},snapshot:{args:n=>ft(n,[qe]),result:Xt},readText:{args:n=>n.length>=1&&n.length<=2&&qe(n[0])&&aM(n[1]),result:Xt},readHtml:{args:n=>ft(n,[qe]),result:Xt},screenshot:{args:n=>ft(n,[qe]),result:Xt},click:{args:n=>ft(n,[qe,e=>typeof e=="number"]),result:Xt},type:{args:n=>n.length>=3&&n.length<=4&&qe(n[0])&&typeof n[1]=="number"&&qe(n[2])&&(n[3]===void 0||typeof n[3]=="boolean"),result:Xt},select:{args:n=>ft(n,[qe,e=>typeof e=="number",qe]),result:Xt},scroll:{args:n=>ft(n,[qe,e=>typeof e=="number",e=>typeof e=="number"]),result:Xt},pressKey:{args:n=>ft(n,[qe,qe]),result:Xt},navigate:{args:n=>ft(n,[qe,qe]),result:Xt},back:{args:n=>ft(n,[qe]),result:Xt},forward:{args:n=>ft(n,[qe]),result:Xt},reload:{args:n=>ft(n,[qe]),result:Xt}}),kM=vt("fileTree.contextItem","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&typeof n.label=="string"&&cn(n.labelKey)&&At(n,"run"),n=>[n.id]),DM=vt("newTab.entry","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"run"),n=>[n.id]),OM=vt("search.resultAction","extension","1.0.0","many",n=>Xe(n)&&typeof n.cardKind=="string"&&At(n,"open"),n=>[n.cardKind]),zM=vt("search.resultCard","extension","1.0.0","many",n=>Xe(n)&&typeof n.cardKind=="string"&&At(n,"render")&&At(n,"open"),n=>[n.cardKind]),jl=vt("metadataPanel.segment","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"render"),n=>[n.id]),og=vt("workspace.surface","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace","footer"].includes(String(n.surface))&&At(n,"getSnapshot")&&At(n,"subscribe")&&At(n,"restore"),n=>[n.id]),FM=vt("metadata.plugin","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"facts"),n=>[n.id]),UM=vt("workspace.viewState","extension","1.0.0","many",n=>Xe(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace"].includes(String(n.surface))&&At(n,"capture")&&At(n,"restore")&&At(n,"subscribe"),n=>[n.id]);var Kl=n=>{if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark data");let e=Object.getPrototypeOf(n);if(e!==null&&(Object.getPrototypeOf(e)!==null||typeof Object.getOwnPropertyDescriptor(e,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(e,"constructor").value)!=="function Object() { [native code] }"))throw new Error("Invalid bookmark prototype");let t=Object.create(null),i=Reflect.ownKeys(n);if(i.length>32)throw new Error("Invalid bookmark descriptor");for(let r of i){if(typeof r!="string")continue;if(["__proto__","prototype","constructor"].includes(r))throw new Error("Invalid bookmark key");let s=Object.getOwnPropertyDescriptor(n,r);s?.enumerable&&"value"in s&&(t[r]=s.value)}return t},Dd=n=>!!(n&&typeof n=="object"&&!Array.isArray(n)),ag=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),lg=n=>Dd(n)&&typeof n.surface=="string"&&ag.has(n.surface)&&(n.instanceId===void 0||typeof n.instanceId=="string"&&n.instanceId.length<=512&&!/[\u0000-\u001f]/.test(n.instanceId));function Od(n){let e=Kl(n);if(!lg(e))throw new Error("Invalid bookmark descriptor");let t=Nd({kind:"plugin",pluginId:"provider",surface:e.surface,instanceId:e.instanceId,itemId:e.itemId,state:e.state}),i=Km({folderPath:"",title:e.title,description:e.description,target:t});if(!i.title||typeof i.description!="string")throw new Error("Bookmark presentation is required");return{surface:t.surface,title:i.title,description:i.description,state:t.state,...t.instanceId===void 0?{}:{instanceId:t.instanceId},...t.itemId===void 0?{}:{itemId:t.itemId}}}function zd(n){try{let e=Od(n),t=Kl(n);return JSON.stringify(e.state)===JSON.stringify(Rd(t.state))}catch{return!1}}function BM(n){try{let e=Kl(n);if(e.status==="unavailable"||e.status==="invalid")return{status:e.status};if(e.status==="ready")return{status:"ready",bookmark:Od(e.bookmark)}}catch{}return{status:"invalid"}}var HM=n=>{try{let e=Kl(n);return e.status==="unavailable"||e.status==="invalid"||e.status==="ready"&&zd(e.bookmark)}catch{return!1}},VM=n=>Dd(n)&&["restored","missing","unavailable","invalid"].includes(String(n.status)),GM=vt("workspace.bookmark","service","1.0.0","many",n=>Dd(n)&&typeof n.id=="string"&&ag.has(String(n.surface))&&so(n.stateSchema)&&(n.itemStateSchema===void 0||so(n.itemStateSchema))&&typeof n.capture=="function"&&typeof n.restore=="function",n=>[n.surface],{capture:{args:n=>n.length===1&&lg(n[0]),result:HM,sanitizeResult:BM},restore:{args:n=>n.length===1&&zd(n[0]),result:VM}},n=>({surface:n.surface,stateSchema:n.stateSchema,...n.itemStateSchema?{itemStateSchema:n.itemStateSchema}:{}}));var oo=n=>!!n&&typeof n=="object"&&!Array.isArray(n),cg=n=>typeof n=="string"&&/^[a-zA-Z0-9][a-zA-Z0-9._:-]{0,127}$/.test(n);function ug(n){if(!oo(n)||!cg(n.id)||typeof n.label!="string"||!n.label.trim()||n.label.length>256||n.labelKey!==void 0&&typeof n.labelKey!="string"||!Array.isArray(n.items)||n.items.length>128||!Array.isArray(n.defaultItems)||typeof n.getSnapshot!="function"||typeof n.subscribe!="function"||n.invoke!==void 0&&typeof n.invoke!="function"||n.invokeAutomation!==void 0&&typeof n.invokeAutomation!="function"||n.pluginViews!==void 0&&typeof n.pluginViews!="boolean"||n.fileExtensions!==void 0&&(!Array.isArray(n.fileExtensions)||!n.fileExtensions.every(t=>typeof t=="string"&&/^\.[a-zA-Z0-9][a-zA-Z0-9.+_-]{0,63}$/.test(t))))return!1;let e=new Set;for(let t of n.items){if(!oo(t)||!cg(t.id)||e.has(t.id)||typeof t.label!="string"||!t.label.trim()||t.label.length>256||t.labelKey!==void 0&&typeof t.labelKey!="string"||t.available!==void 0&&typeof t.available!="boolean"||!["text","badge","button","select","toggle","range","thumbnail"].includes(String(t.kind)))return!1;e.add(t.id)}if(n.automation!==void 0){if(!oo(n.automation)||Object.keys(n.automation).some(t=>t!=="actions")||!oo(n.automation.actions)||typeof n.invokeAutomation!="function"||Object.keys(n.automation.actions).length>128)return!1;for(let[t,i]of Object.entries(n.automation.actions))if(!e.has(t)||!oo(i)||!["button","number","string","boolean"].includes(String(i.type))||Object.keys(i).some(r=>!["type","integer","maxLength"].includes(r))||i.integer!==void 0&&(i.type!=="number"||typeof i.integer!="boolean")||i.maxLength!==void 0&&(i.type!=="string"||!Number.isSafeInteger(i.maxLength)||Number(i.maxLength)<1||Number(i.maxLength)>65536))return!1}return n.defaultItems.every(t=>typeof t=="string"&&e.has(t))&&new Set(n.defaultItems).size===n.defaultItems.length}var Fd=vt("workspace.details","extension","1.0.0","many",ug,n=>[`provider:${n.id}`,...n.items.map(e=>`item:${e.id}`)]);var VI=[Lt,`${Lt}/**/secrets.json`,".git","**/.env","**/.env.*"];var s2=1024*1024;var l2=Object.freeze({activePerBackend:8,retainedPerBackend:32,activePerClient:4,retainedPerClient:16,active:64,retained:256,valueBytes:4190208,retainedBytes:67108864,controlRequests:17,controlTimeoutMs:5e3,pollMs:1e3});var c2=globalThis.Buffer;var $M=Object.freeze({schemaBytes:65536,schemaNodes:4096,schemaDepth:32,valueBytes:10*1024*1024,handles:256,pending:32,timeoutMs:2e3});function bn(n,e=0){return new Intl.NumberFormat(Qe.ui.language(),{maximumFractionDigits:e,minimumFractionDigits:e}).format(n)}function Qr(n,e=1){return`${bn(n,e)} m`}function Jl(n){let e=new Date(`${n}T12:00:00Z`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat(Qe.ui.language(),{dateStyle:"long"}).format(e)}var XM=["building","tiles","buildings","date"],qM=["building","tiles"];function YM(n){let e=n.index,t={},i=n.selected;return t.building=i?{text:`${tt("footer.building")} \xB7 ${i.egid??"\u2014"} \xB7 ${Qr(i.height)}`}:{available:!1},t.tiles=e?{text:`${tt("footer.tiles")} \xB7 ${bn(n.loadedTiles)} / ${bn(e.stats.tiles)}`}:{available:!1},t.buildings=e?{text:`${tt("footer.buildings")} \xB7 ${bn(e.stats.buildings)}`}:{available:!1},t.date=e?{text:`${tt("footer.date")} \xB7 ${Jl(e.source.date)}`}:{available:!1},t}function dg(n){let e=0,t={id:"poly.city.details",label:"Campus map",labelKey:"campusMap.title",pluginViews:!0,items:XM.map(i=>({id:i,label:tt(`footer.${i}`),labelKey:`city.footer.${i}`,kind:"text"})),defaultItems:[...qM],subscribe:i=>mc(()=>{e++,i()}),getSnapshot:()=>({items:YM(Ii()),revision:String(e)})};return n.interop.extensions.provide(Fd,t)}var hg=`
/* Row 2 of the sidebar: the feature tabs, drawn exactly like Map's sidebar tab row (.map-tabs / .map-tab). */
.poly-tabs { display:flex; align-items:center; gap:var(--space-1, 4px); width:100%; box-sizing:border-box;
  height:var(--app-bar-height); padding:0 var(--space-2, 8px); flex-shrink:0;
  background:var(--container-color); border-bottom:1px solid var(--border-light); }
.poly-tab { display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; padding:0;
  width:var(--shell-control-action, 30px); height:var(--shell-control-toolbar, 26px);
  border:none; border-radius:var(--shell-control-radius, var(--radius-sm)); background:transparent; color:var(--text-secondary);
  cursor:pointer; -webkit-app-region:no-drag; }
.poly-tab svg { width:var(--shell-glyph-medium, 16px); height:var(--shell-glyph-medium, 16px); }
.poly-tab:hover { background:var(--hover-bg); color:var(--text-color); }
.poly-tab.active { background:var(--accent-tint-bg); color:var(--title-color); }
.poly-tab { touch-action:none; }
.poly-tab.dragging { position:relative; z-index:1; cursor:grabbing; }
.poly-tab:focus-visible { outline:2px solid var(--accent-color); outline-offset:-2px; }

/* Campus sidebar: the search row (shared .search-field, centred in one 38px row), the selected building, the groups. */
.poly-panel .poly-bar.poly-search-bar { padding:0 var(--space-2, 8px); }
.poly-search-bar .search-field-row { flex:1; min-width:0; }
.poly-search-bar .search-field-icon { display:grid; place-items:center; }
.poly-search-bar .search-field-icon svg, .poly-search-bar .search-field-action svg { width:14px; height:14px; }
.poly-campus-list { overflow-anchor:none; }
/* The selected building: a plain strip at the bottom of the sidebar, 2 \xD7 37px, a hairline above, no box or margin; only \xD7 to clear it. */
.poly-building { position:relative; display:flex; flex-direction:column; justify-content:center; gap:0; flex-shrink:0; height:calc(var(--app-bar-height, 38px) * 2 - 2px);
  box-sizing:border-box; margin:0; padding:0 38px 0 10px; border-top:1px solid var(--border-light); min-width:0; overflow:hidden; line-height:1.25; }
.poly-building > :not(.poly-building-close) { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.poly-building-close { position:absolute; top:6px; right:6px; }
.poly-building-code { color:var(--title-color); font-size:0.8125rem; font-weight:600; }
.poly-building-address { color:var(--text-color); font-size:var(--small-font-size); }
.poly-building-meta { color:var(--text-tertiary, var(--text-secondary)); font-size:var(--smaller-font-size); }
.poly-building-link { display:inline-flex; align-items:center; gap:5px; align-self:flex-start; max-width:100%; color:var(--link-color, var(--accent-color)); font-size:var(--small-font-size); text-decoration:none; }
.poly-building-link:hover span { text-decoration:underline; }
.poly-building-link svg { width:12px; height:12px; flex-shrink:0; }
.poly-group-head:focus-visible, .poly-building-row:focus-visible, .poly-building-link:focus-visible { outline:2px solid var(--accent-color); outline-offset:-2px; }
.poly-building-icon { display:grid; place-items:center; flex-shrink:0; color:var(--accent-color); }
.poly-building-icon svg { width:15px; height:15px; }
/* Group heads like Map's section heads; a row per building like Map's list rows. */
.poly-group-head { display:flex; align-items:center; gap:6px; width:100%; padding:6px 10px; border:0; background:transparent; color:var(--text-secondary);
  font:inherit; font-size:0.6875rem; font-weight:600; text-transform:uppercase; letter-spacing:.03em; text-align:left; cursor:pointer; }
.poly-group-head:hover { background:var(--hover-bg); }
.poly-group-chevron { display:grid; place-items:center; width:12px; transition:transform 120ms ease-out; }
.poly-group-chevron svg { width:12px; height:12px; }
.poly-group-head.open .poly-group-chevron { transform:rotate(90deg); }
.poly-group-name { flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.poly-group-count { font-variant-numeric:tabular-nums; color:var(--text-tertiary, var(--text-secondary)); }
.poly-building-row { display:flex; align-items:center; gap:8px; width:100%; min-width:0; padding:5px 10px; border:0; background:transparent;
  color:inherit; font:inherit; text-align:left; cursor:pointer; }
.poly-building-row:hover { background:var(--hover-bg); }
.poly-building-row.active { background:var(--accent-tint-bg); }
.poly-building-row.active .poly-building-row-code { color:var(--accent-tint-text, var(--accent-color)); }
.poly-building-row-meta { flex:1; display:flex; flex-direction:column; min-width:0; }
.poly-building-row-code { font-size:0.8125rem; color:var(--text-color); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.poly-building-row-sub { font-size:0.6875rem; color:var(--text-tertiary, var(--text-secondary)); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.poly-group .z3d-options { padding:2px 0 10px; }
@media (prefers-reduced-motion: reduce) { .poly-group-chevron { transition:none; } }

/* Campus page: header, then the 2D map or the 3D stage with its overlays. */
.poly-campus-body { position:relative; flex:1 1 auto; min-height:0; overflow:hidden; display:flex; flex-direction:column; }
.poly-campus-body > .z3d-stage, .poly-map-stage { position:relative; flex:1 1 auto; min-height:0; overflow:hidden; }
.poly-map-stage .maplibregl-canvas:focus-visible { outline:none; }
/* MapLibre adds its canvas after the credit line, so the credit needs its own layer to stay visible. */
.poly-map-foot { position:absolute; left:10px; right:8px; bottom:8px; z-index:2; display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:6px 10px; pointer-events:none; }
.poly-map-foot > .z3d-attribution { position:static; margin-left:auto; max-width:100%; }
/* Map's round controls (.map-overlay-controls / .map-round-btn): 34px circles stacked at the top right, opaque in every state. */
.poly-map-controls { position:absolute; top:12px; right:12px; z-index:3; display:flex; flex-direction:column; gap:8px; align-items:center; }
.poly-round-btn { display:grid; place-items:center; width:34px; height:34px; padding:0; border-radius:50%;
  border:1px solid var(--border-medium); background:var(--surface-color); color:var(--text-color);
  cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,.18); flex:0 0 auto; font:inherit; }
.poly-round-btn svg { width:16px; height:16px; }
.poly-round-btn:hover { background:var(--container-color-light); }
/* Switched on: the tab strip's selected look laid over the opaque surface, like Map's round buttons. */
.poly-round-btn.active, .poly-round-btn.active:hover { color:var(--title-color); background:linear-gradient(var(--accent-tint-bg), var(--accent-tint-bg)), var(--surface-color); }
.poly-round-btn:focus-visible { outline:2px solid var(--accent-color); outline-offset:1px; }
.poly-round-text { font-size:var(--small-font-size); font-weight:600; letter-spacing:.02em; }
.poly-floors { position:absolute; left:10px; top:10px; z-index:2; display:flex; flex-direction:column; gap:2px; max-height:calc(100% - 20px); overflow-y:auto;
  padding:3px; border:1px solid var(--border-light); border-radius:var(--radius-md, 6px); background:var(--menu-bg, var(--pane-bg)); box-shadow:var(--shadow-menu, none); scrollbar-width:none; }
.poly-floors button { flex-shrink:0; min-width:32px; height:24px; padding:0 6px; border:0; border-radius:4px; background:transparent; color:var(--text-secondary);
  font:inherit; font-size:var(--small-font-size); font-weight:600; font-variant-numeric:tabular-nums; cursor:pointer; }
.poly-floors button:hover { background:var(--hover-bg); color:var(--text-color); }
.poly-floors button.active { background:var(--accent-tint-bg); color:var(--title-color); }
.poly-floors button:focus-visible { outline:2px solid var(--accent-color); outline-offset:-2px; }
.poly-notes { position:absolute; left:50%; top:10px; z-index:2; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:4px; pointer-events:none; }
.poly-notes > span { padding:2px 8px; border-radius:4px; background:var(--menu-bg, var(--pane-bg)); color:var(--text-secondary); font-size:var(--smaller-font-size); white-space:nowrap; }
.poly-legend { display:flex; flex-wrap:wrap; gap:4px 10px; min-width:0; max-width:100%; padding:4px 8px; box-sizing:border-box;
  border-radius:4px; background:var(--menu-bg, var(--pane-bg)); color:var(--text-secondary); font-size:0.6875rem; pointer-events:none; }
.poly-legend span { display:inline-flex; align-items:center; gap:4px; white-space:nowrap; }
.poly-legend i { width:9px; height:9px; border-radius:2px; opacity:.8; }
.poly-properties-kind { display:inline-flex; align-items:center; gap:5px; }
.poly-properties-kind i { width:9px; height:9px; border-radius:2px; opacity:.8; }
.poly-campus-body .poly-room-card { left:auto; right:58px; bottom:auto; top:12px; z-index:3; }
.z3d-options { display:flex; flex-direction:column; gap:16px; padding:12px 6px 6px; }
.z3d-options .z3d-facts + .z3d-note { margin-top:10px; }
.z3d-options .z3d-note { margin-bottom:0; }
.z3d-options .z3d-note + .z3d-note { margin-top:6px; }
`;var jM="https://www.stadt-zuerich.ch/de/planen-und-bauen/bauvorschriften-und-planerische-grundlagen/planbezug-datenbezug/3d-stadtmodell.html";function pg(){let n=Ri();D.useEffect(()=>{go()},[]);let e=n.index;return D.createElement("div",{className:"z3d-options"},n.status==="missing"&&D.createElement("div",{className:"z3d-note"},D.createElement(Nl,null)),n.status==="error"&&D.createElement("div",{className:"z3d-note z3d-error"},n.error),n.selected&&D.createElement("section",null,D.createElement("div",{className:"z3d-section-title"},tt("building.title")),D.createElement("dl",{className:"z3d-facts"},D.createElement("dt",null,tt("building.egid")),D.createElement("dd",null,n.selected.egid??"\u2014"),D.createElement("dt",null,tt("building.height")),D.createElement("dd",null,Qr(n.selected.height)),D.createElement("dt",null,tt("building.ground")),D.createElement("dd",null,Qr(n.selected.ground)," ",tt("unit.asl")),D.createElement("dt",null,tt("building.roof")),D.createElement("dd",null,Qr(n.selected.roof)," ",tt("unit.asl")),D.createElement("dt",null,tt("building.position")),D.createElement("dd",null,bn(n.selected.center[0])," / ",bn(n.selected.center[1])),D.createElement("dt",null,tt("building.triangles")),D.createElement("dd",null,bn(n.selected.triangles)))),e&&D.createElement("section",null,D.createElement("div",{className:"z3d-section-title"},tt("model.title")),D.createElement("dl",{className:"z3d-facts"},D.createElement("dt",null,tt("model.date")),D.createElement("dd",null,Jl(e.source.date)),D.createElement("dt",null,tt("model.buildings")),D.createElement("dd",null,bn(e.stats.buildings)),D.createElement("dt",null,tt("model.triangles")),D.createElement("dd",null,bn(e.stats.triangles)),D.createElement("dt",null,tt("model.tiles")),D.createElement("dd",null,bn(n.loadedTiles)," / ",bn(e.stats.tiles))),D.createElement("p",{className:"z3d-note"},tt("model.groundNote")," ",D.createElement("a",{href:jM,target:"_blank",rel:"noreferrer"},tt("model.source"))),D.createElement("p",{className:"z3d-note"},Ne("map.attribution"))))}var KM=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5"/><path d="M12 12v9"/></svg>')}`,JM=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16"/><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"/><path d="M10.5 21v-4h3v4"/></svg>')}`;function QM(){let n=ki(),e=Li(),t=n.building;if(!t)return D.createElement("p",{className:"z3d-note poly-properties-note"},Ne("properties.none"));let i=e.levels?.get(t.code)??[],r=i.find(l=>l.id===n.level),s=e.room&&e.room.level.split(".")[1]===t.code?e.room:null,o=s?i.find(l=>l.id===s.level):void 0,a=e.levelsStatus==="ready"?i.length?String(i.length):Ne("floors.none"):Ne("floors.reading");return D.createElement("div",{className:"z3d-options"},D.createElement("section",null,D.createElement("div",{className:"z3d-section-title"},Ne("properties.building")),D.createElement("dl",{className:"z3d-facts"},D.createElement("dt",null,Ne("properties.code")),D.createElement("dd",null,t.code),D.createElement("dt",null,Ne("properties.address")),D.createElement("dd",{title:Xn(t)},Xn(t)),D.createElement("dt",null,Ne("properties.campus")),D.createElement("dd",null,Ne(`group.${t.campus}`)),D.createElement("dt",null,Ne("properties.floors")),D.createElement("dd",null,a),r&&D.createElement(D.Fragment,null,D.createElement("dt",null,Ne("properties.floor")),D.createElement("dd",null,r.name||r.id.split(".").pop()))),t.link&&D.createElement("p",{className:"z3d-note"},D.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer"},Ne("building.link")))),s&&D.createElement("section",null,D.createElement("div",{className:"z3d-section-title"},Ne("properties.room")),D.createElement("dl",{className:"z3d-facts"},D.createElement("dt",null,Ne("properties.room")),D.createElement("dd",null,s.name),D.createElement("dt",null,Ne("properties.floor")),D.createElement("dd",null,o?.name||s.level.split(".").pop()),s.type&&D.createElement(D.Fragment,null,D.createElement("dt",null,Ne("room.type")),D.createElement("dd",{title:s.type},s.type)),s.use&&D.createElement(D.Fragment,null,D.createElement("dt",null,Ne("room.use")),D.createElement("dd",{title:s.use},s.use)),D.createElement("dt",null,Ne("properties.kind")),D.createElement("dd",null,D.createElement("span",{className:"poly-properties-kind"},D.createElement("i",{style:{background:eo[s.kind]}}),Ne(`room.kind.${s.kind}`))))))}function e1(){return ki().view==="3d"?D.createElement(pg,null):D.createElement("p",{className:"z3d-note poly-properties-note"},Ne("properties.only3d"))}function fg(n){let e=i=>Ni(i.tab?.instanceId??i.subject?.instanceId),t=[n.interop.extensions.provide(jl,{id:"poly.building",label:"Building",labelKey:"campusMap.properties.buildingTab",icon:JM,pluginSurfaces:["main_workspace"],render:i=>e(i)?D.createElement(QM,null):null}),n.interop.extensions.provide(jl,{id:"poly.city3d",label:"3D city",labelKey:"campusMap.properties.tab",icon:KM,pluginSurfaces:["main_workspace"],render:i=>e(i)?D.createElement(e1,null):null})];return()=>{for(let i of t)i()}}var mg={"manifest.name":"Poly","manifest.description":"ETH und UZH in Valley: der eLink-Shuttle zwischen ETH Zentrum und H\xF6nggerberg, der Men\xFCplan von ETH Zentrum, ETH H\xF6nggerberg und den UZH-Mensen, ein Campusplan der ETH-Geb\xE4ude mit ihren Geschossen und R\xE4umen, in 2D und im 3D-Stadtmodell der Stadt Z\xFCrich, die ETH-News mit Zukunftsblog, \xABGlobe\xBB und den Medienmitteilungen, in Valley gelesen, und die Polybox-Links deiner F\xE4cher.","menu.title":"Men\xFCplan",refresh:"Aktualisieren",openWebsite:"Website \xF6ffnen","day.previous":"Vorheriger Tag","day.next":"N\xE4chster Tag","day.backToToday":"Zur\xFCck zu heute","day.today":"Heute","week.previous":"Vorherige Woche","week.next":"N\xE4chste Woche","week.label":"Woche","service.label":"Mahlzeit","service.lunch":"Mittag","service.dinner":"Abend",loading:"Men\xFCs werden geladen \u2026","empty.lunch":"An diesem Tag gibt es nirgends ein Mittagessen.","empty.dinner":"An diesem Tag gibt es nirgends ein Abendessen.","empty.location":"F\xFCr diese Mahlzeit steht nichts auf dem Men\xFC.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarisch","climate.LOW":"Geringe Klimawirkung","climate.MEDIUM":"Mittlere Klimawirkung","climate.HIGH":"Hohe Klimawirkung","price.students":"Studierende","price.internal":"Mitarbeitende","price.external":"G\xE4ste",allergens:"Allergene","allergens.none":"Keine Allergene angegeben","credit.eth":"Men\xFCs von ETH Z\xFCrich Gastronomie.","credit.uzh":"Men\xFCs der ZFV auf food2050.","error.networkError":"Der Men\xFCdienst ist nicht erreichbar.","error.serviceError":"Der Men\xFCdienst hat mit einem Fehler geantwortet.","error.formatError":"Der Men\xFCdienst hat Daten geschickt, die Poly nicht lesen kann.","error.notFound":"Diese Seite gibt es beim Men\xFCdienst nicht.","error.invalidInput":"Poly hat ein Men\xFC auf eine Art angefragt, die der Dienst nicht kennt.","error.unavailable":"Poly wird neu geladen.",openPage:"Men\xFCplan-Seite \xF6ffnen","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH-Betriebe","menus.one":"1 Men\xFC","menus.other":"{count} Men\xFCs","hours.openNow":"Jetzt ge\xF6ffnet \xB7 {hours}","hours.closed":"Geschlossen \xB7 {hours}","hours.open":"Ge\xF6ffnet {hours}","service.time.lunch":"Mittag {hours}","service.time.dinner":"Abend {hours}",filter:"Filter","filter.vegetarian":"Vegetarisch","filter.vegan":"Vegan","filter.glutenFree":"Glutenfrei","filter.clear":"Filter zur\xFCcksetzen","empty.filtered":"Kein Men\xFC passt zu den Filtern.","loading.uzh":"Die UZH-Betriebe werden gelesen\u2026",openInNewTab:"In neuem Tab \xF6ffnen","settings.onlyVegetarian.title":"Nur vegetarisch","settings.onlyVegetarian.description":"Nur vegetarische und vegane Men\xFCs zeigen, in den Zahlen der Ortsliste und auf der Seite.","settings.onlyVegan.title":"Nur vegan","settings.onlyVegan.description":"Nur vegane Men\xFCs zeigen.","settings.onlyGlutenFree.title":"Nur glutenfrei","settings.onlyGlutenFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene kein glutenhaltiges Getreide enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.","settings.campus.title":"Campus","settings.campus.description":"Der im Men\xFCplan gew\xE4hlte Tag: Favoriten oder ein Campus.","settings.day.title":"Tag","settings.day.description":"Tag und Mahlzeit, die der Men\xFCplan zeigt; ein vergangener Tag wird zu heute.","price.internalStudents":"Mitarbeitende & Studierende","price.all":"Alle Besucher","filter.lactoseFree":"Laktosefrei","settings.onlyLactoseFree.title":"Nur laktosefrei","settings.onlyLactoseFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene keine Milch enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.",prices:"Preise","prices.all":"Alle Preise","settings.prices.title":"Angezeigte Preise","settings.prices.description":"Welche Preise die Men\xFCkarten zeigen: alle, von Studierenden bis G\xE4ste, oder die einer Gruppe.","campus.favorites":"Favoriten","campus.favorites.title":"Lieblingsorte","favorite.add":"{name} zu den Favoriten hinzuf\xFCgen","favorite.remove":"{name} aus den Favoriten entfernen","empty.favorites":"Keiner deiner Lieblingsorte hat an diesem Tag ein Men\xFC f\xFCr diese Mahlzeit.","credit.both":"Men\xFCs von ETH Z\xFCrich Gastronomie und vom ZFV auf food2050.","settings.favorites.title":"Lieblingsorte","settings.favorites.description":"Die im Men\xFCplan mit einem Stern markierten Orte.","mode.label":"Seitenleisten-Tabs","settings.mode.title":"Seitenleisten-Tab","settings.mode.description":"Der gezeigte Tab der Seitenleiste: der eLink-Shuttle, der Men\xFCplan, der Campusplan, ETH-News oder Polybox.","settings.tabOrder.title":"Reihenfolge der Seitenleisten-Tabs","settings.tabOrder.description":"Die Reihenfolge der Tabs in der Seitenleiste; \xE4ndern durch Ziehen eines Tabs oder mit Wahltaste und Pfeiltaste.","city.display.color":"Farbe","city.display.surfaces":"Fl\xE4chen","city.display.height":"H\xF6he","city.display.ground":"Gel\xE4nde","city.display.groundHint":"Ein angen\xE4hertes Gel\xE4nde aus den Sockelh\xF6hen der Geb\xE4ude","city.building.title":"Geb\xE4ude","city.building.close":"Schliessen","city.building.egid":"EGID","city.building.height":"H\xF6he","city.building.ground":"Terrain","city.building.roof":"Dachfirst","city.building.position":"LV95 E / N","city.building.triangles":"Dreiecke","city.unit.asl":"m \xFC. M.","city.model.title":"Modell","city.model.date":"Datenstand","city.model.buildings":"Geb\xE4ude","city.model.triangles":"Dreiecke","city.model.tiles":"Geladene Kacheln","city.model.groundNote":"Geb\xE4ude: 3D-Stadtmodell der Stadt Z\xFCrich, Dachmodell LoD2, Open Government Data. Das Gel\xE4nde ist aus den Sockelh\xF6hen der Geb\xE4ude angen\xE4hert.","city.model.source":"Quelle","city.model.loading":"Stadtmodell wird geladen \u2026","city.model.errorTitle":"Das Stadtmodell konnte nicht gelesen werden","city.model.errorText":"Poly konnte die Dateien seines 3D-Stadtmodells nicht laden. Aktualisiere Poly oder installiere es neu.","city.model.missingTitle":"Kein Stadtmodell installiert","city.model.missingText":"Diese Kopie von Poly wurde ohne Stadtmodell gebaut. F\xFCge es mit dem Update-Skript im Plugin-Ordner in runtime/assets/model/ des Pakets ein und baue es neu:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"Die 3D-Ansicht konnte nicht starten","city.view.loadingTiles":"{{count}} Kacheln werden geladen \u2026","city.settings.model":"Stadtmodell","city.settings.modelMissing":"Nicht installiert. Das Modell geh\xF6rt nach {{folder}}.","city.settings.colorMode":"Farbe","city.settings.showGround":"Gel\xE4nde","city.settings.camera":"Kamera","city.footer.building":"Geb\xE4ude","city.footer.tiles":"Kacheln","city.footer.buildings":"Geb\xE4ude","city.footer.date":"Datenstand","settings.building.title":"Geb\xE4ude","settings.building.description":"Das im Campusplan gew\xE4hlte ETH-Geb\xE4ude, mit seinem K\xFCrzel.","settings.level.title":"Geschoss","settings.level.description":"Das Geschoss des gew\xE4hlten Geb\xE4udes, dessen R\xE4ume der Campusplan zeigt.","settings.campusView.title":"Campusansicht","settings.campusView.description":"Was die Campusseite zeigt: den 2D-Campusplan oder das 3D-Stadtmodell.","campusMap.title":"Campusplan","campusMap.openPage":"Seite des Campusplans \xF6ffnen","campusMap.command.open":"Campusplan \xF6ffnen","campusMap.map.attribution":"Karte \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap-Mitwirkende \xB7 Geb\xE4ude \xA9 ETH Z\xFCrich","campusMap.map.loading":"Karte wird geladen \u2026","campusMap.map.failed":"Die Karte konnte nicht starten","campusMap.floors.label":"Geschosse von {{code}}","campusMap.floors.show":"Geschoss {{floor}} zeigen","campusMap.floors.loading":"R\xE4ume werden geladen \u2026","campusMap.floors.failed":"Die R\xE4ume konnten nicht gelesen werden","campusMap.floors.one":"1 Geschoss mit R\xE4umen","campusMap.floors.other":"{{count}} Geschosse mit R\xE4umen","campusMap.floors.none":"Keine Geschosspl\xE4ne ver\xF6ffentlicht","campusMap.floors.reading":"Geschosse werden gelesen \u2026","campusMap.room.close":"Schliessen","campusMap.room.type":"Raumtyp","campusMap.room.use":"Nutzung","campusMap.legend.label":"Raumtypen","campusMap.room.kind.teaching":"Lehre","campusMap.room.kind.lab":"Labor","campusMap.room.kind.office":"B\xFCro","campusMap.room.kind.circulation":"Verkehrsfl\xE4che","campusMap.room.kind.toilet":"Toiletten","campusMap.room.kind.service":"Betrieb","campusMap.room.kind.other":"Andere","campusMap.view.label":"Ansicht","campusMap.view.map":"Karte","campusMap.view.3d":"3D","campusMap.view.outside":"Dieses Geb\xE4ude liegt ausserhalb des 3D-Stadtmodells der Stadt Z\xFCrich","campusMap.outlines.failed":"Die Geb\xE4udeumrisse konnten nicht gelesen werden","campusMap.building.link":"Geb\xE4udeseite der ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Weitere Standorte","campusMap.search.placeholder":"Geb\xE4ude, R\xE4ume, Strassen suchen","campusMap.search.clear":"Suche l\xF6schen","campusMap.search.none":"Kein Geb\xE4ude passt.","campusMap.credit":"Geb\xE4ude, Geschosse und R\xE4ume aus dem Campusplan der ETH Z\xFCrich. Grundkarte: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap-Mitwirkende.","campusMap.map.zoomIn":"Vergr\xF6ssern","campusMap.map.zoomOut":"Verkleinern","elink.title":"eLink","elink.openPage":"eLink-Fahrplan \xF6ffnen","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 Fahrt","elink.runs.other":"{count} Fahrten","elink.firstLast":"Erste {first} \xB7 Letzte {last}","elink.in":"in {minutes} Min.","elink.delay":"{minutes} Min. versp\xE4tet","elink.ended":"Heute keine Abfahrten mehr.","elink.weekend":"Am Wochenende f\xE4hrt kein eLink.","elink.noService":"An diesem Tag f\xE4hrt kein eLink.","elink.showDay":"{day} zeigen","elink.loading":"eLink-Fahrplan wird geladen \u2026","elink.credit":"Fahrplandaten von transport.opendata.ch","elink.error.networkError":"transport.opendata.ch ist nicht erreichbar.","elink.error.serviceError":"transport.opendata.ch hat mit einem Fehler geantwortet.","elink.error.formatError":"transport.opendata.ch hat Daten geschickt, die Poly nicht lesen kann.","elink.error.invalidInput":"Poly hat transport.opendata.ch nach einem unbekannten Tag gefragt.","elink.settings.date.title":"eLink-Tag","elink.settings.date.description":"Der Tag, den der eLink-Tab zeigt; ein vergangener Tag wird zu heute.","campusMap.group.rooms":"R\xE4ume","campusMap.rooms.searching":"R\xE4ume werden gesucht \u2026","campusMap.rooms.failed":"Die R\xE4ume konnten nicht gesucht werden","campusMap.rooms.none":"Kein Raum passt.","campusMap.view.show3d":"In 3D zeigen","campusMap.view.show2d":"2D-Karte zeigen","elink.showTimetable":"Fahrplan zeigen","elink.arrival":"Ankunft {stop} um {time}","campusMap.building.clear":"Auswahl aufheben","campusMap.properties.tab":"3D-Stadt","campusMap.properties.only3d":"Die Angaben zur 3D-Stadt erscheinen hier, solange die Campusseite 3D zeigt.","campusMap.properties.buildingTab":"Geb\xE4ude","campusMap.properties.building":"Geb\xE4ude","campusMap.properties.room":"Raum","campusMap.properties.code":"K\xFCrzel","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Geschosse","campusMap.properties.floor":"Geschoss","campusMap.properties.kind":"Art","campusMap.properties.none":"W\xE4hle ein Geb\xE4ude auf der Campuskarte oder in der Seitenleiste, um es hier zu sehen.","campusMap.group.zurich":"Z\xFCrich","news.title":"ETH-News","news.openPage":"ETH-News \xF6ffnen","news.feeds":"News-Feeds","news.feed.news":"ETH-News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Magazin \xABGlobe\xBB","news.feed.media":"Medienmitteilungen","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Medien","news.recent.one":"1 Artikel diese Woche","news.recent.other":"{count} Artikel diese Woche","news.search":"Artikel suchen","news.search.clear":"Suche l\xF6schen","news.loading":"ETH-News werden geladen\u2026","news.empty":"Dieser Feed hat keine Artikel.","news.empty.search":"Kein Artikel passt zur Suche.","news.credit":"News der ETH Z\xFCrich, aus ihren RSS-Feeds auf ethz.ch","news.yesterday":"Gestern","news.openWebsite":"Auf ethz.ch \xF6ffnen","news.video":"Video","news.by":"von {author}","news.source":"Quelle: ETH Z\xFCrich,","news.error.networkError":"ethz.ch ist nicht erreichbar.","news.error.serviceError":"ethz.ch hat mit einem Fehler geantwortet.","news.error.notFound":"ethz.ch hat diesen Artikel nicht mehr.","news.error.formatError":"ethz.ch hat eine Seite geschickt, die Poly nicht lesen kann.","news.error.invalidInput":"Poly hat ethz.ch nach einer unbekannten Adresse gefragt.","news.error.unavailable":"Poly wird neu geladen; bitte gleich noch einmal versuchen.","news.settings.feed.title":"News-Feed","news.settings.feed.description":"Der ETH-News-Feed, den der News-Tab zeigt: alle Artikel, der Zukunftsblog, Globe, die Medienmitteilungen oder der Ordner \xABGemerkt\xBB.","news.tags.clear":"Zur\xFCcksetzen","news.tags.none":"Diese Artikel haben keine Tags.","news.tags.add":"{tag} ausw\xE4hlen","news.tags.remove":"{tag} abw\xE4hlen","news.empty.tags":"Kein Artikel hat die gew\xE4hlten Tags.","news.settings.tags.title":"News-Tags","news.settings.tags.description":"Die Tags, nach denen die Artikelliste des News-Tabs gefiltert wird; ein Artikel mit einem davon wird gezeigt.","news.tags.show":"Tags zeigen","news.tags.hide":"Artikel zeigen","news.tags.search":"Tags suchen","news.tags.count":"{count} Tags","news.tags.articles.one":"1 Artikel","news.tags.articles.other":"{count} Artikel","news.tags.noMatch":"Kein Tag passt zur Suche.","news.tag.saved":"Gemerkt","news.saved.title":"Gemerkt","news.saved.add":"Merken","news.saved.remove":"Aus \xABGemerkt\xBB entfernen","news.saved.removeOne":"\xAB{title}\xBB aus \xABGemerkt\xBB entfernen","news.saved.empty":"Noch keine gemerkten Artikel. Ein Artikel wird mit dem Lesezeichen auf seiner Seite oder \xFCber sein Kontextmen\xFC gemerkt.","news.settings.saved.title":"Gemerkte Artikel","news.settings.saved.description":"Die ETH-News-Artikel im Ordner \xABGemerkt\xBB, die zuletzt gemerkten zuerst, mit allem, was ihre Zeilen ohne Netzwerk brauchen.","polybox.title":"Polybox","polybox.openPage":"Polybox-\xDCbersicht \xF6ffnen","polybox.empty":"Noch keine F\xE4cher. F\xFCge oben einen Polybox-Freigabelink ein; er wird nach der Freigabe benannt.","polybox.untitled":"Ohne Namen","polybox.invalid":"Kein Polybox-Freigabelink (https://polybox.ethz.ch/index.php/s/\u2026)","polybox.settings.links.title":"Polybox-Links","polybox.settings.links.description":"Die F\xE4cher und ihre Polybox-Freigabelinks, hinzugef\xFCgt im Polybox-Tab.","polybox.paste":"Polybox-Link einf\xFCgen","polybox.clear":"Leeren","polybox.openInNewTab":"In neuem Tab \xF6ffnen","polybox.openWebsite":"In Polybox \xF6ffnen","polybox.rename":"Umbenennen","polybox.removeSubject":"Entfernen","polybox.folderEmpty":"Dieser Ordner ist leer.","polybox.openFolder":"{name} \xF6ffnen","polybox.openFile":"{name} in Valley \xF6ffnen","polybox.path":"Ordner","polybox.error.networkError":"Polybox konnte nicht gelesen werden. Pr\xFCfe die Verbindung; direkt nach einem Valley-Update Valley neu starten.","polybox.error.serviceError":"Polybox hat mit einem Fehler geantwortet.","polybox.error.notFound":"Diese Freigabe oder dieser Ordner existiert nicht mehr.","polybox.error.polyboxLocked":"Diese Freigabe braucht ein Passwort oder ist nicht mehr freigegeben.","polybox.error.formatError":"Polybox hat einen Ordner geschickt, den Poly nicht lesen kann.","polybox.error.invalidInput":"Das ist kein Polybox-Freigabelink.","polybox.error.unavailable":"Poly wird neu geladen.","polybox.error.tooLarge":"Diese Datei ist zu gross zum Herunterladen.","polybox.opening":"{name} wird ge\xF6ffnet \u2026","polybox.menu.system":"Mit Standard-App \xF6ffnen","polybox.menu.valley":"In Valley \xF6ffnen","polybox.settings.view.title":"Polybox-Ansicht","polybox.settings.view.description":"Wie ein Polybox-Ordner seine Eintr\xE4ge zeigt: als Liste oder als Raster.","polybox.view.grid":"Als Raster anzeigen","polybox.view.list":"Als Liste anzeigen","polybox.password.needed":"Diese Freigabe ist mit einem Passwort gesch\xFCtzt. Gib es einmal ein; Valley speichert es verschl\xFCsselt f\xFCr diese Freigabe.","polybox.password.stale":"Das gespeicherte Passwort \xF6ffnet diese Freigabe nicht mehr. Gib das aktuelle ein.","polybox.password.rejected":"Polybox hat dieses Passwort nicht akzeptiert.","polybox.password.placeholder":"Passwort","polybox.password.unlock":"Entsperren","polybox.error.polyboxPassword":"Diese Freigabe braucht ein Passwort.","polybox.error.polyboxWrongPassword":"Das gespeicherte Passwort \xF6ffnet diese Freigabe nicht mehr.","polybox.copyLink":"Link kopieren","polybox.copied":"Link kopiert","polybox.copyFailed":"Der Link konnte nicht kopiert werden.","polybox.column.name":"Name","polybox.column.created":"Erstellt","polybox.column.modified":"Ge\xE4ndert","polybox.column.size":"Gr\xF6sse","polybox.sort.label":"Sortieren","polybox.sort.asc":"Nach {column} aufsteigend sortieren","polybox.sort.desc":"Nach {column} absteigend sortieren","polybox.settings.sort.title":"Polybox-Sortierung","polybox.settings.sort.description":"Nach welcher Spalte ein Polybox-Ordner sortiert ist, auf- oder absteigend; Ordner bleiben zuoberst."};var gg={"manifest.name":"Poly","manifest.description":"ETH y UZH en Valley: la lanzadera eLink entre ETH Zentrum y H\xF6nggerberg, el men\xFA del d\xEDa de ETH Zentrum, ETH H\xF6nggerberg y los comedores de la UZH, un mapa del campus con los edificios de la ETH, sus plantas y salas, en 2D y en el modelo 3D de la ciudad de Z\xFArich, ETH News con el Zukunftsblog, Globe y los comunicados de prensa, le\xEDdos en Valley, y los enlaces de Polybox de tus asignaturas.","menu.title":"Men\xFA",refresh:"Actualizar",openWebsite:"Abrir sitio web","day.previous":"D\xEDa anterior","day.next":"D\xEDa siguiente","day.backToToday":"Volver a hoy","day.today":"Hoy","week.previous":"Semana anterior","week.next":"Semana siguiente","week.label":"Semana","service.label":"Comida","service.lunch":"Almuerzo","service.dinner":"Cena",loading:"Cargando men\xFAs\u2026","empty.lunch":"Ning\xFAn lugar sirve almuerzo este d\xEDa.","empty.dinner":"Ning\xFAn lugar sirve cena este d\xEDa.","empty.location":"Nada en el men\xFA para esta comida.","diet.vegan":"Vegano","diet.vegetarian":"Vegetariano","climate.LOW":"Impacto clim\xE1tico bajo","climate.MEDIUM":"Impacto clim\xE1tico medio","climate.HIGH":"Impacto clim\xE1tico alto","price.students":"Estudiantes","price.internal":"Personal","price.external":"Invitados",allergens:"Al\xE9rgenos","allergens.none":"Sin al\xE9rgenos declarados","credit.eth":"Men\xFAs de ETH Zurich Gastronom\xEDa.","credit.uzh":"Men\xFAs de la ZFV en food2050.","error.networkError":"No se pudo contactar con el servicio de men\xFAs.","error.serviceError":"El servicio de men\xFAs respondi\xF3 con un error.","error.formatError":"El servicio de men\xFAs envi\xF3 datos que Poly no puede leer.","error.notFound":"El servicio de men\xFAs no tiene esa p\xE1gina.","error.invalidInput":"Poly pidi\xF3 un men\xFA de una forma que el servicio no conoce.","error.unavailable":"Poly se est\xE1 recargando.",openPage:"Abrir la p\xE1gina del men\xFA","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"Locales de la UZH","menus.one":"1 men\xFA","menus.other":"{count} men\xFAs","hours.openNow":"Abierto ahora \xB7 {hours}","hours.closed":"Cerrado \xB7 {hours}","hours.open":"Abierto {hours}","service.time.lunch":"Almuerzo {hours}","service.time.dinner":"Cena {hours}",filter:"Filtro","filter.vegetarian":"Vegetariano","filter.vegan":"Vegano","filter.glutenFree":"Sin gluten","filter.clear":"Quitar filtros","empty.filtered":"Ning\xFAn men\xFA coincide con los filtros.","loading.uzh":"Leyendo los locales de la UZH\u2026",openInNewTab:"Abrir en una pesta\xF1a nueva","settings.onlyVegetarian.title":"Solo vegetariano","settings.onlyVegetarian.description":"Mostrar solo men\xFAs vegetarianos y veganos, en los recuentos de la lista de lugares y en la p\xE1gina.","settings.onlyVegan.title":"Solo vegano","settings.onlyVegan.description":"Mostrar solo men\xFAs veganos.","settings.onlyGlutenFree.title":"Solo sin gluten","settings.onlyGlutenFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen cereales con gluten. Un men\xFA sin al\xE9rgenos declarados no se muestra.","settings.campus.title":"Campus","settings.campus.description":"La etiqueta elegida en el men\xFA: Favoritos o un campus.","settings.day.title":"D\xEDa","settings.day.description":"El d\xEDa y la comida que muestra el men\xFA; un d\xEDa pasado vuelve a hoy.","price.internalStudents":"Personal y estudiantes","price.all":"Todos los visitantes","filter.lactoseFree":"Sin lactosa","settings.onlyLactoseFree.title":"Solo sin lactosa","settings.onlyLactoseFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen leche. Un men\xFA sin al\xE9rgenos declarados no se muestra.",prices:"Precios","prices.all":"Todos los precios","settings.prices.title":"Precios mostrados","settings.prices.description":"Qu\xE9 precios muestran las tarjetas del men\xFA: todos, de estudiantes a invitados, o los de un grupo.","campus.favorites":"Favoritos","campus.favorites.title":"Lugares favoritos","favorite.add":"A\xF1adir {name} a favoritos","favorite.remove":"Quitar {name} de favoritos","empty.favorites":"Ninguno de tus lugares favoritos tiene men\xFA para esta comida este d\xEDa.","credit.both":"Men\xFAs de ETH Zurich Gastronomy y del ZFV en food2050.","settings.favorites.title":"Lugares favoritos","settings.favorites.description":"Los lugares marcados con estrella en el men\xFA.","mode.label":"Pesta\xF1as de la barra lateral","settings.mode.title":"Pesta\xF1a de la barra lateral","settings.mode.description":"La pesta\xF1a que muestra la barra lateral: la lanzadera eLink, el men\xFA, el mapa del campus, ETH News o Polybox.","settings.tabOrder.title":"Orden de las pesta\xF1as de la barra lateral","settings.tabOrder.description":"El orden de las pesta\xF1as de la barra lateral; se cambia arrastrando una pesta\xF1a o con Opci\xF3n y una flecha.","city.display.color":"Color","city.display.surfaces":"Superficies","city.display.height":"Altura","city.display.ground":"Terreno","city.display.groundHint":"Un terreno aproximado a partir de las cotas de base de los edificios","city.building.title":"Edificio","city.building.close":"Cerrar","city.building.egid":"EGID","city.building.height":"Altura","city.building.ground":"Suelo","city.building.roof":"Cumbrera","city.building.position":"LV95 E / N","city.building.triangles":"Tri\xE1ngulos","city.unit.asl":"m s. n. m.","city.model.title":"Modelo","city.model.date":"Datos de","city.model.buildings":"Edificios","city.model.triangles":"Tri\xE1ngulos","city.model.tiles":"Teselas cargadas","city.model.groundNote":"Edificios: modelo 3D de la ciudad de Z\xFArich, modelo de tejados LoD2, datos abiertos. El terreno se aproxima a partir de las cotas de base de los edificios.","city.model.source":"Fuente","city.model.loading":"Cargando el modelo de la ciudad\u2026","city.model.errorTitle":"No se pudo leer el modelo de la ciudad","city.model.errorText":"Poly no pudo cargar los archivos de su modelo 3D de la ciudad. Actualiza Poly o vuelve a instalarlo.","city.model.missingTitle":"No hay ning\xFAn modelo de la ciudad instalado","city.model.missingText":"Esta copia de Poly se cre\xF3 sin su modelo de la ciudad. A\xF1\xE1delo a runtime/assets/model/ del paquete con el script de actualizaci\xF3n de la carpeta del plugin y vuelve a compilarlo:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"No se pudo iniciar la vista 3D","city.view.loadingTiles":"Cargando {{count}} teselas\u2026","city.settings.model":"Modelo de la ciudad","city.settings.modelMissing":"No instalado. El modelo va en {{folder}}.","city.settings.colorMode":"Color","city.settings.showGround":"Terreno","city.settings.camera":"C\xE1mara","city.footer.building":"Edificio","city.footer.tiles":"Teselas","city.footer.buildings":"Edificios","city.footer.date":"Datos de","settings.building.title":"Edificio","settings.building.description":"El edificio de la ETH elegido en el mapa del campus, por su c\xF3digo.","settings.level.title":"Planta","settings.level.description":"La planta del edificio elegido cuyas salas muestra el mapa del campus.","settings.campusView.title":"Vista del campus","settings.campusView.description":"Lo que muestra la p\xE1gina del campus: el mapa 2D o el modelo 3D de la ciudad.","campusMap.title":"Mapa del campus","campusMap.openPage":"Abrir la p\xE1gina del mapa del campus","campusMap.command.open":"Abrir el mapa del campus","campusMap.map.attribution":"Mapa \xA9 Esri, HERE, Garmin, \xA9 colaboradores de OpenStreetMap \xB7 Edificios \xA9 ETH Z\xFCrich","campusMap.map.loading":"Cargando el mapa\u2026","campusMap.map.failed":"No se pudo iniciar el mapa","campusMap.floors.label":"Plantas de {{code}}","campusMap.floors.show":"Mostrar la planta {{floor}}","campusMap.floors.loading":"Cargando las salas\u2026","campusMap.floors.failed":"No se pudieron leer las salas","campusMap.floors.one":"1 planta con salas","campusMap.floors.other":"{{count}} plantas con salas","campusMap.floors.none":"No hay planos de plantas publicados","campusMap.floors.reading":"Leyendo las plantas\u2026","campusMap.room.close":"Cerrar","campusMap.room.type":"Tipo de sala","campusMap.room.use":"Uso","campusMap.legend.label":"Tipos de sala","campusMap.room.kind.teaching":"Docencia","campusMap.room.kind.lab":"Laboratorio","campusMap.room.kind.office":"Oficina","campusMap.room.kind.circulation":"Circulaci\xF3n","campusMap.room.kind.toilet":"Aseos","campusMap.room.kind.service":"Servicio","campusMap.room.kind.other":"Otros","campusMap.view.label":"Vista","campusMap.view.map":"Mapa","campusMap.view.3d":"3D","campusMap.view.outside":"Este edificio est\xE1 fuera del modelo 3D de la ciudad de Z\xFArich","campusMap.outlines.failed":"No se pudieron leer los contornos de los edificios","campusMap.building.link":"P\xE1gina del edificio de la ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Otras sedes","campusMap.search.placeholder":"Buscar edificios, salas, calles","campusMap.search.clear":"Borrar la b\xFAsqueda","campusMap.search.none":"Ning\xFAn edificio coincide.","campusMap.credit":"Edificios, plantas y salas del mapa del campus de la ETH Z\xFCrich. Mapa base: Esri Light/Dark Gray Canvas, \xA9 colaboradores de OpenStreetMap.","campusMap.map.zoomIn":"Acercar","campusMap.map.zoomOut":"Alejar","elink.title":"eLink","elink.openPage":"Abrir el horario de eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 viaje","elink.runs.other":"{count} viajes","elink.firstLast":"Primero {first} \xB7 \xDAltimo {last}","elink.in":"en {minutes} min","elink.delay":"{minutes} min de retraso","elink.ended":"Hoy no hay m\xE1s salidas.","elink.weekend":"El eLink no circula los fines de semana.","elink.noService":"El eLink no circula este d\xEDa.","elink.showDay":"Mostrar {day}","elink.loading":"Cargando el horario de eLink\u2026","elink.credit":"Datos de horarios de transport.opendata.ch","elink.error.networkError":"No se pudo acceder a transport.opendata.ch.","elink.error.serviceError":"transport.opendata.ch respondi\xF3 con un error.","elink.error.formatError":"transport.opendata.ch envi\xF3 datos que Poly no puede leer.","elink.error.invalidInput":"Poly pidi\xF3 a transport.opendata.ch un d\xEDa que no conoce.","elink.settings.date.title":"D\xEDa de eLink","elink.settings.date.description":"El d\xEDa que muestra la pesta\xF1a eLink; un d\xEDa pasado vuelve a hoy.","campusMap.group.rooms":"Salas","campusMap.rooms.searching":"Buscando salas\u2026","campusMap.rooms.failed":"No se pudieron buscar las salas","campusMap.rooms.none":"Ninguna sala coincide.","campusMap.view.show3d":"Mostrar en 3D","campusMap.view.show2d":"Mostrar el mapa 2D","elink.showTimetable":"Mostrar horario","elink.arrival":"Llega a {stop} a las {time}","campusMap.building.clear":"Quitar la selecci\xF3n","campusMap.properties.tab":"Ciudad 3D","campusMap.properties.only3d":"Los datos de la ciudad 3D aparecen aqu\xED mientras la p\xE1gina del campus muestra 3D.","campusMap.properties.buildingTab":"Edificio","campusMap.properties.building":"Edificio","campusMap.properties.room":"Sala","campusMap.properties.code":"C\xF3digo","campusMap.properties.address":"Direcci\xF3n","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Plantas","campusMap.properties.floor":"Planta","campusMap.properties.kind":"Tipo","campusMap.properties.none":"Selecciona un edificio en el mapa del campus o en la barra lateral para verlo aqu\xED.","campusMap.group.zurich":"Z\xFArich","news.title":"ETH News","news.openPage":"Abrir ETH News","news.feeds":"Canales de noticias","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Revista Globe","news.feed.media":"Comunicados de prensa","news.tag.news":"Noticias","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Prensa","news.recent.one":"1 art\xEDculo esta semana","news.recent.other":"{count} art\xEDculos esta semana","news.search":"Buscar art\xEDculos","news.search.clear":"Borrar b\xFAsqueda","news.loading":"Cargando ETH News\u2026","news.empty":"Este canal no tiene art\xEDculos.","news.empty.search":"Ning\xFAn art\xEDculo coincide con la b\xFAsqueda.","news.credit":"Noticias de la ETH Z\xFArich, de sus canales RSS en ethz.ch","news.yesterday":"Ayer","news.openWebsite":"Abrir en ethz.ch","news.video":"V\xEDdeo","news.by":"por {author}","news.source":"Fuente: ETH Z\xFArich,","news.error.networkError":"No se pudo acceder a ethz.ch.","news.error.serviceError":"ethz.ch respondi\xF3 con un error.","news.error.notFound":"ethz.ch ya no tiene este art\xEDculo.","news.error.formatError":"ethz.ch envi\xF3 una p\xE1gina que Poly no puede leer.","news.error.invalidInput":"Poly pidi\xF3 a ethz.ch una direcci\xF3n desconocida.","news.error.unavailable":"Poly se est\xE1 recargando; int\xE9ntalo de nuevo en un momento.","news.settings.feed.title":"Canal de noticias","news.settings.feed.description":"El canal de ETH News que muestra la pesta\xF1a News: todos los art\xEDculos, el Zukunftsblog, Globe, los comunicados de prensa o la carpeta Guardados.","news.tags.clear":"Borrar","news.tags.none":"Estos art\xEDculos no tienen etiquetas.","news.tags.add":"Seleccionar {tag}","news.tags.remove":"Deseleccionar {tag}","news.empty.tags":"Ning\xFAn art\xEDculo tiene las etiquetas elegidas.","news.settings.tags.title":"Etiquetas de noticias","news.settings.tags.description":"Las etiquetas que filtran la lista de art\xEDculos de la pesta\xF1a News; se muestra un art\xEDculo que lleve alguna.","news.tags.show":"Mostrar etiquetas","news.tags.hide":"Mostrar art\xEDculos","news.tags.search":"Buscar etiquetas","news.tags.count":"{count} etiquetas","news.tags.articles.one":"1 art\xEDculo","news.tags.articles.other":"{count} art\xEDculos","news.tags.noMatch":"Ninguna etiqueta coincide con la b\xFAsqueda.","news.tag.saved":"Guardados","news.saved.title":"Guardados","news.saved.add":"Guardar","news.saved.remove":"Quitar de Guardados","news.saved.removeOne":"Quitar \xAB{title}\xBB de Guardados","news.saved.empty":"A\xFAn no hay art\xEDculos guardados. Un art\xEDculo se guarda con el marcador de su p\xE1gina o desde su men\xFA contextual.","news.settings.saved.title":"Art\xEDculos guardados","news.settings.saved.description":"Los art\xEDculos de ETH News de la carpeta Guardados, los \xFAltimos guardados primero, con lo que sus filas necesitan sin red.","polybox.title":"Polybox","polybox.openPage":"Abrir la vista de Polybox","polybox.empty":"A\xFAn no hay asignaturas. Pega un enlace compartido de Polybox en el campo de arriba; toma el nombre del recurso compartido.","polybox.untitled":"Sin t\xEDtulo","polybox.invalid":"No es un enlace compartido de Polybox (https://polybox.ethz.ch/index.php/s/\u2026)","polybox.settings.links.title":"Enlaces de Polybox","polybox.settings.links.description":"Las asignaturas y sus enlaces compartidos de Polybox, a\xF1adidos en la pesta\xF1a Polybox.","polybox.paste":"Pega un enlace de Polybox","polybox.clear":"Borrar","polybox.openInNewTab":"Abrir en una pesta\xF1a nueva","polybox.openWebsite":"Abrir en Polybox","polybox.rename":"Cambiar nombre","polybox.removeSubject":"Quitar","polybox.folderEmpty":"Esta carpeta est\xE1 vac\xEDa.","polybox.openFolder":"Abrir {name}","polybox.openFile":"Abrir {name} en Valley","polybox.path":"Carpeta","polybox.error.networkError":"No se pudo leer Polybox. Comprueba la conexi\xF3n; justo despu\xE9s de actualizar Valley, rein\xEDcialo.","polybox.error.serviceError":"Polybox respondi\xF3 con un error.","polybox.error.notFound":"Este recurso compartido o carpeta ya no existe.","polybox.error.polyboxLocked":"Este recurso compartido pide una contrase\xF1a o ya no se comparte.","polybox.error.formatError":"Polybox envi\xF3 una carpeta que Poly no puede leer.","polybox.error.invalidInput":"No es un enlace compartido de Polybox.","polybox.error.unavailable":"Poly se est\xE1 recargando.","polybox.error.tooLarge":"Este archivo es demasiado grande para descargarlo.","polybox.opening":"Abriendo {name}\u2026","polybox.menu.system":"Abrir con la app predeterminada","polybox.menu.valley":"Abrir en Valley","polybox.settings.view.title":"Vista de Polybox","polybox.settings.view.description":"C\xF3mo muestra una carpeta de Polybox su contenido: en lista o en cuadr\xEDcula.","polybox.view.grid":"Mostrar en cuadr\xEDcula","polybox.view.list":"Mostrar en lista","polybox.password.needed":"Este recurso compartido est\xE1 protegido con contrase\xF1a. Introd\xFAcela una vez; Valley la guarda cifrada para este recurso.","polybox.password.stale":"La contrase\xF1a guardada ya no abre este recurso compartido. Introduce la actual.","polybox.password.rejected":"Polybox no acept\xF3 esta contrase\xF1a.","polybox.password.placeholder":"Contrase\xF1a","polybox.password.unlock":"Desbloquear","polybox.error.polyboxPassword":"Este recurso compartido necesita una contrase\xF1a.","polybox.error.polyboxWrongPassword":"La contrase\xF1a guardada ya no abre este recurso compartido.","polybox.copyLink":"Copiar enlace","polybox.copied":"Enlace copiado","polybox.copyFailed":"No se pudo copiar el enlace.","polybox.column.name":"Nombre","polybox.column.created":"Fecha de creaci\xF3n","polybox.column.modified":"Fecha de modificaci\xF3n","polybox.column.size":"Tama\xF1o","polybox.sort.label":"Ordenar","polybox.sort.asc":"Ordenar por {column}, ascendente","polybox.sort.desc":"Ordenar por {column}, descendente","polybox.settings.sort.title":"Orden de Polybox","polybox.settings.sort.description":"La columna por la que se ordena una carpeta de Polybox, ascendente o descendente; las carpetas quedan primero."};var yg={"manifest.name":"Poly","manifest.description":"L'ETH et l'UZH dans Valley : la navette eLink entre l'ETH Zentrum et H\xF6nggerberg, le menu du jour de l'ETH Zentrum, de l'ETH H\xF6nggerberg et des restaurants de l'UZH, un plan du campus des b\xE2timents de l'ETH avec leurs \xE9tages et salles, en 2D et dans la maquette 3D de la ville de Zurich, ETH News avec le Zukunftsblog, Globe et les communiqu\xE9s de presse, lus dans Valley, et les liens Polybox de vos mati\xE8res.","menu.title":"Menu",refresh:"Actualiser",openWebsite:"Ouvrir le site web","day.previous":"Jour pr\xE9c\xE9dent","day.next":"Jour suivant","day.backToToday":"Revenir \xE0 aujourd'hui","day.today":"Aujourd'hui","week.previous":"Semaine pr\xE9c\xE9dente","week.next":"Semaine suivante","week.label":"Semaine","service.label":"Repas","service.lunch":"Midi","service.dinner":"Soir",loading:"Chargement des menus\u2026","empty.lunch":"Aucun lieu ne sert de d\xE9jeuner ce jour-l\xE0.","empty.dinner":"Aucun lieu ne sert de d\xEEner ce jour-l\xE0.","empty.location":"Rien au menu pour ce repas.","diet.vegan":"V\xE9g\xE9talien","diet.vegetarian":"V\xE9g\xE9tarien","climate.LOW":"Faible impact climatique","climate.MEDIUM":"Impact climatique moyen","climate.HIGH":"Fort impact climatique","price.students":"\xC9tudiants","price.internal":"Personnel","price.external":"Invit\xE9s",allergens:"Allerg\xE8nes","allergens.none":"Aucun allerg\xE8ne d\xE9clar\xE9","credit.eth":"Menus d'ETH Zurich Gastronomie.","credit.uzh":"Menus de la ZFV sur food2050.","error.networkError":"Le service des menus est injoignable.","error.serviceError":"Le service des menus a r\xE9pondu par une erreur.","error.formatError":"Le service des menus a envoy\xE9 des donn\xE9es que Poly ne peut pas lire.","error.notFound":"Le service des menus n'a pas cette page.","error.invalidInput":"Poly a demand\xE9 un menu d'une fa\xE7on que le service ne conna\xEEt pas.","error.unavailable":"Poly se recharge.",openPage:"Ouvrir la page du menu","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"\xC9tablissements de l'UZH","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Ouvert \xB7 {hours}","hours.closed":"Ferm\xE9 \xB7 {hours}","hours.open":"Ouvert {hours}","service.time.lunch":"Midi {hours}","service.time.dinner":"Soir {hours}",filter:"Filtre","filter.vegetarian":"V\xE9g\xE9tarien","filter.vegan":"V\xE9gane","filter.glutenFree":"Sans gluten","filter.clear":"Effacer les filtres","empty.filtered":"Aucun menu ne correspond aux filtres.","loading.uzh":"Lecture des \xE9tablissements de l'UZH\u2026",openInNewTab:"Ouvrir dans un nouvel onglet","settings.onlyVegetarian.title":"V\xE9g\xE9tarien uniquement","settings.onlyVegetarian.description":"Afficher uniquement les menus v\xE9g\xE9tariens et v\xE9ganes, dans les comptes de la liste des lieux et sur la page.","settings.onlyVegan.title":"V\xE9gane uniquement","settings.onlyVegan.description":"Afficher uniquement les menus v\xE9ganes.","settings.onlyGlutenFree.title":"Sans gluten uniquement","settings.onlyGlutenFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent aucune c\xE9r\xE9ale avec gluten. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.","settings.campus.title":"Campus","settings.campus.description":"L\u2019\xE9tiquette choisie dans le menu : Favoris ou un campus.","settings.day.title":"Jour","settings.day.description":"Le jour et le repas affich\xE9s ; un jour pass\xE9 revient \xE0 aujourd'hui.","price.internalStudents":"Personnel et \xE9tudiants","price.all":"Tous les visiteurs","filter.lactoseFree":"Sans lactose","settings.onlyLactoseFree.title":"Sans lactose uniquement","settings.onlyLactoseFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent pas de lait. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.",prices:"Prix","prices.all":"Tous les prix","settings.prices.title":"Prix affich\xE9s","settings.prices.description":"Les prix affich\xE9s sur les cartes du menu : tous, des \xE9tudiants aux invit\xE9s, ou ceux d'un groupe.","campus.favorites":"Favoris","campus.favorites.title":"Lieux favoris","favorite.add":"Ajouter {name} aux favoris","favorite.remove":"Retirer {name} des favoris","empty.favorites":"Aucun de vos lieux favoris n'a de menu pour ce repas ce jour-l\xE0.","credit.both":"Menus de la gastronomie de l\u2019ETH Zurich et du ZFV sur food2050.","settings.favorites.title":"Lieux favoris","settings.favorites.description":"Les lieux marqu\xE9s d\u2019une \xE9toile dans le menu.","mode.label":"Onglets de la barre lat\xE9rale","settings.mode.title":"Onglet de la barre lat\xE9rale","settings.mode.description":"L'onglet affich\xE9 dans la barre lat\xE9rale : la navette eLink, le menu, le plan du campus, ETH News ou Polybox.","settings.tabOrder.title":"Ordre des onglets de la barre lat\xE9rale","settings.tabOrder.description":"L'ordre des onglets de la barre lat\xE9rale, modifi\xE9 en faisant glisser un onglet ou avec Option et une fl\xE8che.","city.display.color":"Couleur","city.display.surfaces":"Surfaces","city.display.height":"Hauteur","city.display.ground":"Terrain","city.display.groundHint":"Un terrain approximatif d\xE9riv\xE9 des altitudes de base des b\xE2timents","city.building.title":"B\xE2timent","city.building.close":"Fermer","city.building.egid":"EGID","city.building.height":"Hauteur","city.building.ground":"Sol","city.building.roof":"Fa\xEEte","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"m","city.model.title":"Mod\xE8le","city.model.date":"Donn\xE9es du","city.model.buildings":"B\xE2timents","city.model.triangles":"Triangles","city.model.tiles":"Tuiles charg\xE9es","city.model.groundNote":"B\xE2timents : mod\xE8le 3D de la ville de Zurich, mod\xE8le de toits LoD2, donn\xE9es publiques ouvertes. Le terrain est approch\xE9 \xE0 partir des altitudes de base des b\xE2timents.","city.model.source":"Source","city.model.loading":"Chargement du mod\xE8le de la ville\u2026","city.model.errorTitle":"Le mod\xE8le de la ville n'a pas pu \xEAtre lu","city.model.errorText":"Poly n'a pas pu charger les fichiers de son mod\xE8le 3D de la ville. Mettez Poly \xE0 jour ou r\xE9installez-le.","city.model.missingTitle":"Aucun mod\xE8le de la ville install\xE9","city.model.missingText":"Cette copie de Poly a \xE9t\xE9 construite sans son mod\xE8le de la ville. Ajoutez-le dans runtime/assets/model/ du paquet avec le script de mise \xE0 jour du dossier du plugin, puis reconstruisez-le :","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"La vue 3D n'a pas pu d\xE9marrer","city.view.loadingTiles":"Chargement de {{count}} tuiles\u2026","city.settings.model":"Mod\xE8le de la ville","city.settings.modelMissing":"Non install\xE9. Le mod\xE8le doit se trouver dans {{folder}}.","city.settings.colorMode":"Couleur","city.settings.showGround":"Terrain","city.settings.camera":"Cam\xE9ra","city.footer.building":"B\xE2timent","city.footer.tiles":"Tuiles","city.footer.buildings":"B\xE2timents","city.footer.date":"Donn\xE9es du","settings.building.title":"B\xE2timent","settings.building.description":"Le b\xE2timent de l'ETH choisi sur le plan du campus, par son code.","settings.level.title":"\xC9tage","settings.level.description":"L'\xE9tage du b\xE2timent choisi dont le plan du campus montre les salles.","settings.campusView.title":"Vue du campus","settings.campusView.description":"Ce que montre la page du campus : le plan 2D ou la maquette 3D de la ville.","campusMap.title":"Plan du campus","campusMap.openPage":"Ouvrir la page du plan du campus","campusMap.command.open":"Ouvrir le plan du campus","campusMap.map.attribution":"Carte \xA9 Esri, HERE, Garmin, \xA9 contributeurs OpenStreetMap \xB7 B\xE2timents \xA9 ETH Z\xFCrich","campusMap.map.loading":"Chargement de la carte\u2026","campusMap.map.failed":"La carte n'a pas pu d\xE9marrer","campusMap.floors.label":"\xC9tages de {{code}}","campusMap.floors.show":"Afficher l'\xE9tage {{floor}}","campusMap.floors.loading":"Chargement des salles\u2026","campusMap.floors.failed":"Les salles n'ont pas pu \xEAtre lues","campusMap.floors.one":"1 \xE9tage avec salles","campusMap.floors.other":"{{count}} \xE9tages avec salles","campusMap.floors.none":"Aucun plan d'\xE9tage publi\xE9","campusMap.floors.reading":"Lecture des \xE9tages\u2026","campusMap.room.close":"Fermer","campusMap.room.type":"Type de salle","campusMap.room.use":"Usage","campusMap.legend.label":"Types de salle","campusMap.room.kind.teaching":"Enseignement","campusMap.room.kind.lab":"Laboratoire","campusMap.room.kind.office":"Bureau","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilettes","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Autres","campusMap.view.label":"Vue","campusMap.view.map":"Carte","campusMap.view.3d":"3D","campusMap.view.outside":"Ce b\xE2timent est hors de la maquette 3D de la ville de Zurich","campusMap.outlines.failed":"Les contours des b\xE2timents n'ont pas pu \xEAtre lus","campusMap.building.link":"Page du b\xE2timent de l'ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Autres sites","campusMap.search.placeholder":"Rechercher b\xE2timents, salles, rues","campusMap.search.clear":"Effacer la recherche","campusMap.search.none":"Aucun b\xE2timent ne correspond.","campusMap.credit":"B\xE2timents, \xE9tages et salles du plan du campus de l'ETH Z\xFCrich. Fond de carte : Esri Light/Dark Gray Canvas, \xA9 contributeurs OpenStreetMap.","campusMap.map.zoomIn":"Zoom avant","campusMap.map.zoomOut":"Zoom arri\xE8re","elink.title":"eLink","elink.openPage":"Ouvrir l\u2019horaire eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 course","elink.runs.other":"{count} courses","elink.firstLast":"Premi\xE8re {first} \xB7 Derni\xE8re {last}","elink.in":"dans {minutes} min","elink.delay":"{minutes} min de retard","elink.ended":"Plus de d\xE9parts aujourd\u2019hui.","elink.weekend":"Pas d\u2019eLink le week-end.","elink.noService":"Pas d\u2019eLink ce jour-l\xE0.","elink.showDay":"Afficher {day}","elink.loading":"Chargement de l\u2019horaire eLink\u2026","elink.credit":"Donn\xE9es horaires de transport.opendata.ch","elink.error.networkError":"transport.opendata.ch est injoignable.","elink.error.serviceError":"transport.opendata.ch a r\xE9pondu par une erreur.","elink.error.formatError":"transport.opendata.ch a envoy\xE9 des donn\xE9es que Poly ne sait pas lire.","elink.error.invalidInput":"Poly a demand\xE9 \xE0 transport.opendata.ch un jour inconnu.","elink.settings.date.title":"Jour eLink","elink.settings.date.description":"Le jour affich\xE9 par l\u2019onglet eLink ; un jour pass\xE9 revient \xE0 aujourd\u2019hui.","campusMap.group.rooms":"Salles","campusMap.rooms.searching":"Recherche des salles\u2026","campusMap.rooms.failed":"Les salles n'ont pas pu \xEAtre recherch\xE9es","campusMap.rooms.none":"Aucune salle ne correspond.","campusMap.view.show3d":"Afficher en 3D","campusMap.view.show2d":"Afficher la carte 2D","elink.showTimetable":"Afficher l\u2019horaire","elink.arrival":"Arriv\xE9e \xE0 {stop} \xE0 {time}","campusMap.building.clear":"Effacer la s\xE9lection","campusMap.properties.tab":"Ville 3D","campusMap.properties.only3d":"Les donn\xE9es de la ville 3D apparaissent ici tant que la page du campus affiche la 3D.","campusMap.properties.buildingTab":"B\xE2timent","campusMap.properties.building":"B\xE2timent","campusMap.properties.room":"Salle","campusMap.properties.code":"Code","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"\xC9tages","campusMap.properties.floor":"\xC9tage","campusMap.properties.kind":"Cat\xE9gorie","campusMap.properties.none":"S\xE9lectionnez un b\xE2timent sur le plan du campus ou dans la barre lat\xE9rale pour le voir ici.","campusMap.group.zurich":"Zurich","news.title":"ETH News","news.openPage":"Ouvrir ETH News","news.feeds":"Flux d'actualit\xE9s","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Magazine Globe","news.feed.media":"Communiqu\xE9s de presse","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Presse","news.recent.one":"1 article cette semaine","news.recent.other":"{count} articles cette semaine","news.search":"Rechercher des articles","news.search.clear":"Effacer la recherche","news.loading":"Chargement d'ETH News\u2026","news.empty":"Ce flux n'a aucun article.","news.empty.search":"Aucun article ne correspond \xE0 la recherche.","news.credit":"Actualit\xE9s de l'ETH Zurich, depuis ses flux RSS sur ethz.ch","news.yesterday":"Hier","news.openWebsite":"Ouvrir sur ethz.ch","news.video":"Vid\xE9o","news.by":"par {author}","news.source":"Source : ETH Zurich,","news.error.networkError":"ethz.ch est injoignable.","news.error.serviceError":"ethz.ch a r\xE9pondu par une erreur.","news.error.notFound":"ethz.ch n'a plus cet article.","news.error.formatError":"ethz.ch a envoy\xE9 une page que Poly ne sait pas lire.","news.error.invalidInput":"Poly a demand\xE9 \xE0 ethz.ch une adresse inconnue.","news.error.unavailable":"Poly est en cours de rechargement ; r\xE9essayez dans un instant.","news.settings.feed.title":"Flux d'actualit\xE9s","news.settings.feed.description":"Le flux ETH News affich\xE9 par l'onglet News : tous les articles, le Zukunftsblog, Globe, les communiqu\xE9s de presse ou le dossier Enregistr\xE9s.","news.tags.clear":"Effacer","news.tags.none":"Ces articles n'ont pas de tags.","news.tags.add":"S\xE9lectionner {tag}","news.tags.remove":"D\xE9s\xE9lectionner {tag}","news.empty.tags":"Aucun article n'a les tags choisis.","news.settings.tags.title":"Tags des actualit\xE9s","news.settings.tags.description":"Les tags qui filtrent la liste d'articles de l'onglet News ; un article qui en porte un est affich\xE9.","news.tags.show":"Afficher les tags","news.tags.hide":"Afficher les articles","news.tags.search":"Rechercher des tags","news.tags.count":"{count} tags","news.tags.articles.one":"1 article","news.tags.articles.other":"{count} articles","news.tags.noMatch":"Aucun tag ne correspond \xE0 la recherche.","news.tag.saved":"Enregistr\xE9s","news.saved.title":"Enregistr\xE9s","news.saved.add":"Enregistrer","news.saved.remove":"Retirer des Enregistr\xE9s","news.saved.removeOne":"Retirer \xAB {title} \xBB des Enregistr\xE9s","news.saved.empty":"Aucun article enregistr\xE9 pour l'instant. Un article s'enregistre avec le signet de sa page ou depuis son menu contextuel.","news.settings.saved.title":"Articles enregistr\xE9s","news.settings.saved.description":"Les articles ETH News du dossier Enregistr\xE9s, les derniers enregistr\xE9s d'abord, avec ce dont leurs lignes ont besoin sans r\xE9seau.","polybox.title":"Polybox","polybox.openPage":"Ouvrir l'aper\xE7u Polybox","polybox.empty":"Aucune mati\xE8re pour l'instant. Collez un lien de partage Polybox dans le champ ci-dessus ; il prend le nom du partage.","polybox.untitled":"Sans titre","polybox.invalid":"Pas un lien de partage Polybox (https://polybox.ethz.ch/index.php/s/\u2026)","polybox.settings.links.title":"Liens Polybox","polybox.settings.links.description":"Les mati\xE8res et leurs liens de partage Polybox, ajout\xE9s dans l'onglet Polybox.","polybox.paste":"Coller un lien Polybox","polybox.clear":"Effacer","polybox.openInNewTab":"Ouvrir dans un nouvel onglet","polybox.openWebsite":"Ouvrir dans Polybox","polybox.rename":"Renommer","polybox.removeSubject":"Supprimer","polybox.folderEmpty":"Ce dossier est vide.","polybox.openFolder":"Ouvrir {name}","polybox.openFile":"Ouvrir {name} dans Valley","polybox.path":"Dossier","polybox.error.networkError":"Impossible de lire Polybox. V\xE9rifiez la connexion ; juste apr\xE8s une mise \xE0 jour de Valley, red\xE9marrez Valley.","polybox.error.serviceError":"Polybox a r\xE9pondu par une erreur.","polybox.error.notFound":"Ce partage ou ce dossier n'existe plus.","polybox.error.polyboxLocked":"Ce partage demande un mot de passe ou n'est plus partag\xE9.","polybox.error.formatError":"Polybox a envoy\xE9 un dossier que Poly ne peut pas lire.","polybox.error.invalidInput":"Ce n'est pas un lien de partage Polybox.","polybox.error.unavailable":"Poly se recharge.","polybox.error.tooLarge":"Ce fichier est trop volumineux pour \xEAtre t\xE9l\xE9charg\xE9.","polybox.opening":"Ouverture de {name}\u2026","polybox.menu.system":"Ouvrir avec l'app par d\xE9faut","polybox.menu.valley":"Ouvrir dans Valley","polybox.settings.view.title":"Affichage Polybox","polybox.settings.view.description":"Comment un dossier Polybox affiche son contenu : en liste ou en grille.","polybox.view.grid":"Afficher en grille","polybox.view.list":"Afficher en liste","polybox.password.needed":"Ce partage est prot\xE9g\xE9 par un mot de passe. Saisissez-le une fois ; Valley le conserve chiffr\xE9 pour ce partage.","polybox.password.stale":"Le mot de passe enregistr\xE9 n\u2019ouvre plus ce partage. Saisissez le mot de passe actuel.","polybox.password.rejected":"Polybox n\u2019a pas accept\xE9 ce mot de passe.","polybox.password.placeholder":"Mot de passe","polybox.password.unlock":"D\xE9verrouiller","polybox.error.polyboxPassword":"Ce partage demande un mot de passe.","polybox.error.polyboxWrongPassword":"Le mot de passe enregistr\xE9 n\u2019ouvre plus ce partage.","polybox.copyLink":"Copier le lien","polybox.copied":"Lien copi\xE9","polybox.copyFailed":"Le lien n\u2019a pas pu \xEAtre copi\xE9.","polybox.column.name":"Nom","polybox.column.created":"Date de cr\xE9ation","polybox.column.modified":"Date de modification","polybox.column.size":"Taille","polybox.sort.label":"Trier","polybox.sort.asc":"Trier par {column}, ordre croissant","polybox.sort.desc":"Trier par {column}, ordre d\xE9croissant","polybox.settings.sort.title":"Tri Polybox","polybox.settings.sort.description":"La colonne selon laquelle un dossier Polybox est tri\xE9, en ordre croissant ou d\xE9croissant ; les dossiers restent en t\xEAte."};var bg={"manifest.name":"Poly","manifest.description":"Valley \u4E2D\u7684 ETH \u4E0E UZH\uFF1AETH Zentrum \u4E0E H\xF6nggerberg \u4E4B\u95F4\u7684 eLink \u73ED\u8F66\u3001ETH Zentrum\u3001ETH H\xF6nggerberg \u548C UZH \u5404\u9910\u5385\u7684\u4ECA\u65E5\u83DC\u5355\u3001ETH \u5EFA\u7B51\u53CA\u5176\u697C\u5C42\u548C\u623F\u95F4\u7684\u6821\u56ED\u5730\u56FE\uFF08\u53EF\u5728 2D \u548C\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u4E2D\u67E5\u770B\uFF09\u3001\u5728 Valley \u4E2D\u9605\u8BFB\u7684 ETH \u65B0\u95FB\u3001Zukunftsblog\u3001Globe \u548C\u65B0\u95FB\u7A3F\uFF0C\u4EE5\u53CA\u4F60\u5404\u79D1\u76EE\u7684 Polybox \u94FE\u63A5\u3002","menu.title":"\u83DC\u5355",refresh:"\u5237\u65B0",openWebsite:"\u6253\u5F00\u7F51\u7AD9","day.previous":"\u524D\u4E00\u5929","day.next":"\u540E\u4E00\u5929","day.backToToday":"\u56DE\u5230\u4ECA\u5929","day.today":"\u4ECA\u5929","week.previous":"\u4E0A\u4E00\u5468","week.next":"\u4E0B\u4E00\u5468","week.label":"\u5468","service.label":"\u9910\u6B21","service.lunch":"\u5348\u9910","service.dinner":"\u665A\u9910",loading:"\u6B63\u5728\u52A0\u8F7D\u83DC\u5355\u2026","empty.lunch":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u5348\u9910\u3002","empty.dinner":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u665A\u9910\u3002","empty.location":"\u8FD9\u4E00\u9910\u6CA1\u6709\u83DC\u54C1\u3002","diet.vegan":"\u7EAF\u7D20","diet.vegetarian":"\u7D20\u98DF","climate.LOW":"\u6C14\u5019\u5F71\u54CD\u4F4E","climate.MEDIUM":"\u6C14\u5019\u5F71\u54CD\u4E2D\u7B49","climate.HIGH":"\u6C14\u5019\u5F71\u54CD\u9AD8","price.students":"\u5B66\u751F","price.internal":"\u5458\u5DE5","price.external":"\u8BBF\u5BA2",allergens:"\u8FC7\u654F\u539F","allergens.none":"\u672A\u6807\u6CE8\u8FC7\u654F\u539F","credit.eth":"\u83DC\u5355\u6765\u81EA ETH Zurich Gastronomy\u3002","credit.uzh":"\u83DC\u5355\u6765\u81EA food2050 \u4E0A\u7684 ZFV\u3002","error.networkError":"\u65E0\u6CD5\u8FDE\u63A5\u83DC\u5355\u670D\u52A1\u3002","error.serviceError":"\u83DC\u5355\u670D\u52A1\u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","error.formatError":"\u83DC\u5355\u670D\u52A1\u53D1\u9001\u4E86 Poly \u65E0\u6CD5\u8BFB\u53D6\u7684\u6570\u636E\u3002","error.notFound":"\u83DC\u5355\u670D\u52A1\u6CA1\u6709\u8FD9\u4E2A\u9875\u9762\u3002","error.invalidInput":"Poly \u8BF7\u6C42\u83DC\u5355\u7684\u65B9\u5F0F\u4E0D\u88AB\u8BE5\u670D\u52A1\u652F\u6301\u3002","error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\u3002",openPage:"\u6253\u5F00\u83DC\u5355\u9875\u9762","campus.label":"\u6821\u533A","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH \u9910\u5385","menus.one":"1 \u4EFD\u83DC\u5355","menus.other":"{count} \u4EFD\u83DC\u5355","hours.openNow":"\u8425\u4E1A\u4E2D \xB7 {hours}","hours.closed":"\u5DF2\u5173\u95ED \xB7 {hours}","hours.open":"\u8425\u4E1A {hours}","service.time.lunch":"\u5348\u9910 {hours}","service.time.dinner":"\u665A\u9910 {hours}",filter:"\u7B5B\u9009","filter.vegetarian":"\u7D20\u98DF","filter.vegan":"\u7EAF\u7D20","filter.glutenFree":"\u65E0\u9EB8\u8D28","filter.clear":"\u6E05\u9664\u7B5B\u9009","empty.filtered":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u83DC\u5355\u3002","loading.uzh":"\u6B63\u5728\u8BFB\u53D6 UZH \u9910\u5385\u2026",openInNewTab:"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00","settings.onlyVegetarian.title":"\u4EC5\u7D20\u98DF","settings.onlyVegetarian.description":"\u4EC5\u663E\u793A\u7D20\u98DF\u548C\u7EAF\u7D20\u83DC\u5355\uFF0C\u5305\u62EC\u5730\u70B9\u5217\u8868\u7684\u8BA1\u6570\u548C\u9875\u9762\u3002","settings.onlyVegan.title":"\u4EC5\u7EAF\u7D20","settings.onlyVegan.description":"\u4EC5\u663E\u793A\u7EAF\u7D20\u83DC\u5355\u3002","settings.onlyGlutenFree.title":"\u4EC5\u65E0\u9EB8\u8D28","settings.onlyGlutenFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u542B\u9EB8\u8D28\u8C37\u7269\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002","settings.campus.title":"\u6821\u533A","settings.campus.description":"\u83DC\u5355\u4E2D\u9009\u62E9\u7684\u6807\u7B7E\uFF1A\u6536\u85CF\u6216\u67D0\u4E2A\u6821\u533A\u3002","settings.day.title":"\u65E5\u671F","settings.day.description":"\u83DC\u5355\u663E\u793A\u7684\u65E5\u671F\u548C\u9910\u6B21\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","price.internalStudents":"\u5458\u5DE5\u548C\u5B66\u751F","price.all":"\u6240\u6709\u8BBF\u5BA2","filter.lactoseFree":"\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.title":"\u4EC5\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u725B\u5976\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002",prices:"\u4EF7\u683C","prices.all":"\u6240\u6709\u4EF7\u683C","settings.prices.title":"\u663E\u793A\u7684\u4EF7\u683C","settings.prices.description":"\u83DC\u5355\u5361\u7247\u663E\u793A\u7684\u4EF7\u683C\uFF1A\u4ECE\u5B66\u751F\u5230\u8BBF\u5BA2\u7684\u5168\u90E8\u4EF7\u683C\uFF0C\u6216\u67D0\u4E00\u7EC4\u7684\u4EF7\u683C\u3002","campus.favorites":"\u6536\u85CF","campus.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","favorite.add":"\u5C06 {name} \u52A0\u5165\u6536\u85CF","favorite.remove":"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664 {name}","empty.favorites":"\u4F60\u6536\u85CF\u7684\u5730\u70B9\u8FD9\u4E00\u5929\u90FD\u6CA1\u6709\u8FD9\u4E00\u9910\u7684\u83DC\u5355\u3002","credit.both":"\u83DC\u5355\u6765\u81EA ETH Zurich \u9910\u996E\u670D\u52A1\u548C food2050 \u4E0A\u7684 ZFV\u3002","settings.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","settings.favorites.description":"\u83DC\u5355\u4E2D\u52A0\u4E86\u661F\u6807\u7684\u5730\u70B9\u3002","mode.label":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.title":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.description":"\u4FA7\u8FB9\u680F\u663E\u793A\u7684\u6807\u7B7E\uFF1AeLink \u73ED\u8F66\u3001\u83DC\u5355\u3001\u6821\u56ED\u5730\u56FE\u3001ETH \u65B0\u95FB\u6216 Polybox\u3002","settings.tabOrder.title":"\u4FA7\u8FB9\u680F\u6807\u7B7E\u987A\u5E8F","settings.tabOrder.description":"\u4FA7\u8FB9\u680F\u529F\u80FD\u6807\u7B7E\u7684\u987A\u5E8F\uFF0C\u53EF\u62D6\u52A8\u6807\u7B7E\u6216\u6309 Option \u52A0\u65B9\u5411\u952E\u66F4\u6539\u3002","city.display.color":"\u989C\u8272","city.display.surfaces":"\u8868\u9762","city.display.height":"\u9AD8\u5EA6","city.display.ground":"\u5730\u9762","city.display.groundHint":"\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u7684\u5730\u9762","city.building.title":"\u5EFA\u7B51","city.building.close":"\u5173\u95ED","city.building.egid":"EGID","city.building.height":"\u9AD8\u5EA6","city.building.ground":"\u5730\u9762","city.building.roof":"\u5C4B\u9876\u6700\u9AD8\u70B9","city.building.position":"LV95 E / N","city.building.triangles":"\u4E09\u89D2\u5F62","city.unit.asl":"\u6D77\u62D4","city.model.title":"\u6A21\u578B","city.model.date":"\u6570\u636E\u65E5\u671F","city.model.buildings":"\u5EFA\u7B51","city.model.triangles":"\u4E09\u89D2\u5F62","city.model.tiles":"\u5DF2\u52A0\u8F7D\u56FE\u5757","city.model.groundNote":"\u5EFA\u7B51\uFF1A\u82CF\u9ECE\u4E16\u5E02 3D \u57CE\u5E02\u6A21\u578B\uFF0CLoD2 \u5C4B\u9876\u6A21\u578B\uFF0C\u5F00\u653E\u653F\u5E9C\u6570\u636E\u3002\u5730\u9762\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u3002","city.model.source":"\u6765\u6E90","city.model.loading":"\u6B63\u5728\u52A0\u8F7D\u57CE\u5E02\u6A21\u578B\u2026","city.model.errorTitle":"\u65E0\u6CD5\u8BFB\u53D6\u57CE\u5E02\u6A21\u578B","city.model.errorText":"Poly \u65E0\u6CD5\u52A0\u8F7D\u5176\u4E09\u7EF4\u57CE\u5E02\u6A21\u578B\u7684\u6587\u4EF6\u3002\u8BF7\u66F4\u65B0 Poly \u6216\u91CD\u65B0\u5B89\u88C5\u3002","city.model.missingTitle":"\u672A\u5B89\u88C5\u57CE\u5E02\u6A21\u578B","city.model.missingText":"\u6B64 Poly \u526F\u672C\u6784\u5EFA\u65F6\u672A\u5305\u542B\u57CE\u5E02\u6A21\u578B\u3002\u8BF7\u5728\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\u4F7F\u7528\u66F4\u65B0\u811A\u672C\u5C06\u5176\u6DFB\u52A0\u5230\u8F6F\u4EF6\u5305\u7684 runtime/assets/model/\uFF0C\u7136\u540E\u91CD\u65B0\u6784\u5EFA\uFF1A","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"\u65E0\u6CD5\u542F\u52A8 3D \u89C6\u56FE","city.view.loadingTiles":"\u6B63\u5728\u52A0\u8F7D {{count}} \u4E2A\u56FE\u5757\u2026","city.settings.model":"\u57CE\u5E02\u6A21\u578B","city.settings.modelMissing":"\u672A\u5B89\u88C5\u3002\u6A21\u578B\u5E94\u4F4D\u4E8E {{folder}}\u3002","city.settings.colorMode":"\u989C\u8272","city.settings.showGround":"\u5730\u9762","city.settings.camera":"\u76F8\u673A","city.footer.building":"\u5EFA\u7B51","city.footer.tiles":"\u56FE\u5757","city.footer.buildings":"\u5EFA\u7B51\u6570","city.footer.date":"\u6570\u636E\u65E5\u671F","settings.building.title":"\u5EFA\u7B51","settings.building.description":"\u5728\u6821\u56ED\u5730\u56FE\u4E2D\u9009\u4E2D\u7684 ETH \u5EFA\u7B51\uFF08\u6309\u4EE3\u7801\uFF09\u3002","settings.level.title":"\u697C\u5C42","settings.level.description":"\u6821\u56ED\u5730\u56FE\u663E\u793A\u5176\u623F\u95F4\u7684\u6240\u9009\u5EFA\u7B51\u697C\u5C42\u3002","settings.campusView.title":"\u6821\u56ED\u89C6\u56FE","settings.campusView.description":"\u6821\u56ED\u9875\u9762\u663E\u793A\u7684\u5185\u5BB9\uFF1A2D \u6821\u56ED\u5730\u56FE\u6216 3D \u57CE\u5E02\u6A21\u578B\u3002","campusMap.title":"\u6821\u56ED\u5730\u56FE","campusMap.openPage":"\u6253\u5F00\u6821\u56ED\u5730\u56FE\u9875\u9762","campusMap.command.open":"\u6253\u5F00\u6821\u56ED\u5730\u56FE","campusMap.map.attribution":"\u5730\u56FE \xA9 Esri\u3001HERE\u3001Garmin\u3001\xA9 OpenStreetMap \u8D21\u732E\u8005 \xB7 \u5EFA\u7B51 \xA9 ETH Z\xFCrich","campusMap.map.loading":"\u6B63\u5728\u52A0\u8F7D\u5730\u56FE\u2026","campusMap.map.failed":"\u5730\u56FE\u65E0\u6CD5\u542F\u52A8","campusMap.floors.label":"{{code}} \u7684\u697C\u5C42","campusMap.floors.show":"\u663E\u793A {{floor}} \u5C42","campusMap.floors.loading":"\u6B63\u5728\u52A0\u8F7D\u623F\u95F4\u2026","campusMap.floors.failed":"\u65E0\u6CD5\u8BFB\u53D6\u623F\u95F4","campusMap.floors.one":"1 \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.other":"{{count}} \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.none":"\u672A\u516C\u5E03\u697C\u5C42\u5E73\u9762\u56FE","campusMap.floors.reading":"\u6B63\u5728\u8BFB\u53D6\u697C\u5C42\u2026","campusMap.room.close":"\u5173\u95ED","campusMap.room.type":"\u623F\u95F4\u7C7B\u578B","campusMap.room.use":"\u7528\u9014","campusMap.legend.label":"\u623F\u95F4\u7C7B\u578B","campusMap.room.kind.teaching":"\u6559\u5B66","campusMap.room.kind.lab":"\u5B9E\u9A8C\u5BA4","campusMap.room.kind.office":"\u529E\u516C\u5BA4","campusMap.room.kind.circulation":"\u4EA4\u901A\u7A7A\u95F4","campusMap.room.kind.toilet":"\u536B\u751F\u95F4","campusMap.room.kind.service":"\u8BBE\u5907","campusMap.room.kind.other":"\u5176\u4ED6","campusMap.view.label":"\u89C6\u56FE","campusMap.view.map":"\u5730\u56FE","campusMap.view.3d":"3D","campusMap.view.outside":"\u8BE5\u5EFA\u7B51\u4E0D\u5728\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u8303\u56F4\u5185","campusMap.outlines.failed":"\u65E0\u6CD5\u8BFB\u53D6\u5EFA\u7B51\u8F6E\u5ED3","campusMap.building.link":"ETH \u5EFA\u7B51\u9875\u9762","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"\u5176\u4ED6\u6821\u533A","campusMap.search.placeholder":"\u641C\u7D22\u5EFA\u7B51\u3001\u623F\u95F4\u3001\u8857\u9053","campusMap.search.clear":"\u6E05\u9664\u641C\u7D22","campusMap.search.none":"\u6CA1\u6709\u5339\u914D\u7684\u5EFA\u7B51\u3002","campusMap.credit":"\u5EFA\u7B51\u3001\u697C\u5C42\u548C\u623F\u95F4\u6765\u81EA ETH Z\xFCrich \u6821\u56ED\u5730\u56FE\u3002\u5E95\u56FE\uFF1AEsri Light/Dark Gray Canvas\uFF0C\xA9 OpenStreetMap \u8D21\u732E\u8005\u3002","campusMap.map.zoomIn":"\u653E\u5927","campusMap.map.zoomOut":"\u7F29\u5C0F","elink.title":"eLink","elink.openPage":"\u6253\u5F00 eLink \u65F6\u523B\u8868","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 \u73ED","elink.runs.other":"{count} \u73ED","elink.firstLast":"\u9996\u73ED {first} \xB7 \u672B\u73ED {last}","elink.in":"{minutes} \u5206\u949F\u540E","elink.delay":"\u665A\u70B9 {minutes} \u5206\u949F","elink.ended":"\u4ECA\u5929\u5DF2\u65E0\u73ED\u6B21\u3002","elink.weekend":"\u5468\u672B\u6CA1\u6709 eLink\u3002","elink.noService":"\u8FD9\u4E00\u5929\u6CA1\u6709 eLink\u3002","elink.showDay":"\u67E5\u770B{day}","elink.loading":"\u6B63\u5728\u52A0\u8F7D eLink \u65F6\u523B\u8868\u2026","elink.credit":"\u65F6\u523B\u8868\u6570\u636E\u6765\u81EA transport.opendata.ch","elink.error.networkError":"\u65E0\u6CD5\u8FDE\u63A5 transport.opendata.ch\u3002","elink.error.serviceError":"transport.opendata.ch \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","elink.error.formatError":"transport.opendata.ch \u53D1\u9001\u7684\u6570\u636E Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","elink.error.invalidInput":"Poly \u5411 transport.opendata.ch \u8BF7\u6C42\u4E86\u672A\u77E5\u7684\u65E5\u671F\u3002","elink.settings.date.title":"eLink \u65E5\u671F","elink.settings.date.description":"eLink \u6807\u7B7E\u663E\u793A\u7684\u65E5\u671F\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","campusMap.group.rooms":"\u623F\u95F4","campusMap.rooms.searching":"\u6B63\u5728\u641C\u7D22\u623F\u95F4\u2026","campusMap.rooms.failed":"\u65E0\u6CD5\u641C\u7D22\u623F\u95F4","campusMap.rooms.none":"\u6CA1\u6709\u5339\u914D\u7684\u623F\u95F4\u3002","campusMap.view.show3d":"\u4EE5 3D \u663E\u793A","campusMap.view.show2d":"\u663E\u793A 2D \u5730\u56FE","elink.showTimetable":"\u67E5\u770B\u65F6\u523B\u8868","elink.arrival":"{time} \u5230\u8FBE {stop}","campusMap.building.clear":"\u53D6\u6D88\u9009\u62E9","campusMap.properties.tab":"3D \u57CE\u5E02","campusMap.properties.only3d":"\u6821\u56ED\u9875\u9762\u663E\u793A 3D \u65F6\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A 3D \u57CE\u5E02\u4FE1\u606F\u3002","campusMap.properties.buildingTab":"\u5EFA\u7B51","campusMap.properties.building":"\u5EFA\u7B51","campusMap.properties.room":"\u623F\u95F4","campusMap.properties.code":"\u4EE3\u7801","campusMap.properties.address":"\u5730\u5740","campusMap.properties.campus":"\u6821\u533A","campusMap.properties.floors":"\u697C\u5C42\u6570","campusMap.properties.floor":"\u697C\u5C42","campusMap.properties.kind":"\u7C7B\u522B","campusMap.properties.none":"\u5728\u6821\u56ED\u5730\u56FE\u6216\u4FA7\u8FB9\u680F\u4E2D\u9009\u62E9\u4E00\u680B\u5EFA\u7B51\u5373\u53EF\u5728\u6B64\u67E5\u770B\u3002","campusMap.group.zurich":"\u82CF\u9ECE\u4E16","news.title":"ETH \u65B0\u95FB","news.openPage":"\u6253\u5F00 ETH \u65B0\u95FB","news.feeds":"\u65B0\u95FB\u6E90","news.feed.news":"ETH \u65B0\u95FB","news.feed.zukunftsblog":"Zukunftsblog \u535A\u5BA2","news.feed.globe":"Globe \u6742\u5FD7","news.feed.media":"\u65B0\u95FB\u7A3F","news.tag.news":"\u65B0\u95FB","news.tag.zukunftsblog":"\u535A\u5BA2","news.tag.globe":"Globe","news.tag.media":"\u65B0\u95FB\u7A3F","news.recent.one":"\u672C\u5468 1 \u7BC7\u6587\u7AE0","news.recent.other":"\u672C\u5468 {count} \u7BC7\u6587\u7AE0","news.search":"\u641C\u7D22\u6587\u7AE0","news.search.clear":"\u6E05\u9664\u641C\u7D22","news.loading":"\u6B63\u5728\u52A0\u8F7D ETH \u65B0\u95FB\u2026","news.empty":"\u6B64\u65B0\u95FB\u6E90\u6CA1\u6709\u6587\u7AE0\u3002","news.empty.search":"\u6CA1\u6709\u4E0E\u641C\u7D22\u5339\u914D\u7684\u6587\u7AE0\u3002","news.credit":"\u65B0\u95FB\u6765\u81EA\u82CF\u9ECE\u4E16\u8054\u90A6\u7406\u5DE5\u5B66\u9662\u5728 ethz.ch \u4E0A\u7684 RSS \u6E90","news.yesterday":"\u6628\u5929","news.openWebsite":"\u5728 ethz.ch \u4E0A\u6253\u5F00","news.video":"\u89C6\u9891","news.by":"\u4F5C\u8005\uFF1A{author}","news.source":"\u6765\u6E90\uFF1A\u82CF\u9ECE\u4E16\u8054\u90A6\u7406\u5DE5\u5B66\u9662\uFF0C","news.error.networkError":"\u65E0\u6CD5\u8BBF\u95EE ethz.ch\u3002","news.error.serviceError":"ethz.ch \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","news.error.notFound":"ethz.ch \u4E0A\u5DF2\u6CA1\u6709\u8FD9\u7BC7\u6587\u7AE0\u3002","news.error.formatError":"ethz.ch \u53D1\u9001\u7684\u9875\u9762 Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","news.error.invalidInput":"Poly \u5411 ethz.ch \u8BF7\u6C42\u4E86\u672A\u77E5\u7684\u5730\u5740\u3002","news.error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002","news.settings.feed.title":"\u65B0\u95FB\u6E90","news.settings.feed.description":"News \u6807\u7B7E\u9875\u663E\u793A\u7684 ETH News \u65B0\u95FB\u6E90\uFF1A\u5168\u90E8\u6587\u7AE0\u3001Zukunftsblog\u3001Globe\u3001\u65B0\u95FB\u7A3F\u6216\u201C\u5DF2\u6536\u85CF\u201D\u6587\u4EF6\u5939\u3002","news.tags.clear":"\u6E05\u9664","news.tags.none":"\u8FD9\u4E9B\u6587\u7AE0\u6CA1\u6709\u6807\u7B7E\u3002","news.tags.add":"\u9009\u62E9 {tag}","news.tags.remove":"\u53D6\u6D88\u9009\u62E9 {tag}","news.empty.tags":"\u6CA1\u6709\u6587\u7AE0\u5E26\u6709\u6240\u9009\u6807\u7B7E\u3002","news.settings.tags.title":"\u65B0\u95FB\u6807\u7B7E","news.settings.tags.description":"\u7528\u4E8E\u7B5B\u9009 News \u6807\u7B7E\u6587\u7AE0\u5217\u8868\u7684\u6807\u7B7E\uFF1B\u5E26\u6709\u5176\u4E2D\u4EFB\u4E00\u6807\u7B7E\u7684\u6587\u7AE0\u4F1A\u663E\u793A\u3002","news.tags.show":"\u663E\u793A\u6807\u7B7E","news.tags.hide":"\u663E\u793A\u6587\u7AE0","news.tags.search":"\u641C\u7D22\u6807\u7B7E","news.tags.count":"{count} \u4E2A\u6807\u7B7E","news.tags.articles.one":"1 \u7BC7\u6587\u7AE0","news.tags.articles.other":"{count} \u7BC7\u6587\u7AE0","news.tags.noMatch":"\u6CA1\u6709\u4E0E\u641C\u7D22\u5339\u914D\u7684\u6807\u7B7E\u3002","news.tag.saved":"\u5DF2\u6536\u85CF","news.saved.title":"\u5DF2\u6536\u85CF","news.saved.add":"\u6536\u85CF","news.saved.remove":"\u4ECE\u201C\u5DF2\u6536\u85CF\u201D\u4E2D\u79FB\u9664","news.saved.removeOne":"\u4ECE\u201C\u5DF2\u6536\u85CF\u201D\u4E2D\u79FB\u9664\u201C{title}\u201D","news.saved.empty":"\u8FD8\u6CA1\u6709\u6536\u85CF\u7684\u6587\u7AE0\u3002\u53EF\u901A\u8FC7\u6587\u7AE0\u9875\u9762\u4E0A\u7684\u4E66\u7B7E\u6216\u53F3\u952E\u83DC\u5355\u6536\u85CF\u6587\u7AE0\u3002","news.settings.saved.title":"\u5DF2\u6536\u85CF\u7684\u6587\u7AE0","news.settings.saved.description":"\u201C\u5DF2\u6536\u85CF\u201D\u6587\u4EF6\u5939\u4E2D\u7684 ETH News \u6587\u7AE0\uFF0C\u6700\u8FD1\u6536\u85CF\u7684\u5728\u524D\uFF0C\u5E76\u4FDD\u5B58\u79BB\u7EBF\u663E\u793A\u5176\u884C\u6240\u9700\u7684\u5185\u5BB9\u3002","polybox.title":"Polybox","polybox.openPage":"\u6253\u5F00 Polybox \u6982\u89C8","polybox.empty":"\u8FD8\u6CA1\u6709\u79D1\u76EE\u3002\u8BF7\u628A Polybox \u5171\u4EAB\u94FE\u63A5\u7C98\u8D34\u5230\u4E0A\u65B9\u8F93\u5165\u6846\uFF0C\u79D1\u76EE\u4F1A\u4EE5\u5171\u4EAB\u540D\u79F0\u547D\u540D\u3002","polybox.untitled":"\u672A\u547D\u540D","polybox.invalid":"\u4E0D\u662F Polybox \u5171\u4EAB\u94FE\u63A5\uFF08https://polybox.ethz.ch/index.php/s/\u2026\uFF09","polybox.settings.links.title":"Polybox \u94FE\u63A5","polybox.settings.links.description":"\u79D1\u76EE\u53CA\u5176 Polybox \u5171\u4EAB\u94FE\u63A5\uFF0C\u5728 Polybox \u6807\u7B7E\u4E2D\u6DFB\u52A0\u3002","polybox.paste":"\u7C98\u8D34 Polybox \u94FE\u63A5","polybox.clear":"\u6E05\u9664","polybox.openInNewTab":"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00","polybox.openWebsite":"\u5728 Polybox \u4E2D\u6253\u5F00","polybox.rename":"\u91CD\u547D\u540D","polybox.removeSubject":"\u79FB\u9664","polybox.folderEmpty":"\u6B64\u6587\u4EF6\u5939\u4E3A\u7A7A\u3002","polybox.openFolder":"\u6253\u5F00 {name}","polybox.openFile":"\u5728 Valley \u4E2D\u6253\u5F00 {name}","polybox.path":"\u6587\u4EF6\u5939","polybox.error.networkError":"\u65E0\u6CD5\u8BFB\u53D6 Polybox\u3002\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF1B\u521A\u66F4\u65B0 Valley \u540E\u8BF7\u91CD\u65B0\u542F\u52A8 Valley\u3002","polybox.error.serviceError":"Polybox \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","polybox.error.notFound":"\u6B64\u5171\u4EAB\u6216\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\u3002","polybox.error.polyboxLocked":"\u6B64\u5171\u4EAB\u9700\u8981\u5BC6\u7801\uFF0C\u6216\u5DF2\u4E0D\u518D\u5171\u4EAB\u3002","polybox.error.formatError":"Polybox \u53D1\u9001\u7684\u6587\u4EF6\u5939 Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","polybox.error.invalidInput":"\u8FD9\u4E0D\u662F Polybox \u5171\u4EAB\u94FE\u63A5\u3002","polybox.error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\u3002","polybox.error.tooLarge":"\u6B64\u6587\u4EF6\u592A\u5927\uFF0C\u65E0\u6CD5\u4E0B\u8F7D\u3002","polybox.opening":"\u6B63\u5728\u6253\u5F00 {name}\u2026","polybox.menu.system":"\u7528\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00","polybox.menu.valley":"\u5728 Valley \u4E2D\u6253\u5F00","polybox.settings.view.title":"Polybox \u89C6\u56FE","polybox.settings.view.description":"Polybox \u6587\u4EF6\u5939\u663E\u793A\u5185\u5BB9\u7684\u65B9\u5F0F\uFF1A\u5217\u8868\u6216\u7F51\u683C\u3002","polybox.view.grid":"\u4EE5\u7F51\u683C\u663E\u793A","polybox.view.list":"\u4EE5\u5217\u8868\u663E\u793A","polybox.password.needed":"\u6B64\u5171\u4EAB\u53D7\u5BC6\u7801\u4FDD\u62A4\u3002\u8F93\u5165\u4E00\u6B21\u5373\u53EF\uFF1BValley \u4F1A\u4E3A\u6B64\u5171\u4EAB\u52A0\u5BC6\u4FDD\u5B58\u3002","polybox.password.stale":"\u5DF2\u4FDD\u5B58\u7684\u5BC6\u7801\u65E0\u6CD5\u518D\u6253\u5F00\u6B64\u5171\u4EAB\u3002\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801\u3002","polybox.password.rejected":"Polybox \u672A\u63A5\u53D7\u6B64\u5BC6\u7801\u3002","polybox.password.placeholder":"\u5BC6\u7801","polybox.password.unlock":"\u89E3\u9501","polybox.error.polyboxPassword":"\u6B64\u5171\u4EAB\u9700\u8981\u5BC6\u7801\u3002","polybox.error.polyboxWrongPassword":"\u5DF2\u4FDD\u5B58\u7684\u5BC6\u7801\u65E0\u6CD5\u518D\u6253\u5F00\u6B64\u5171\u4EAB\u3002","polybox.copyLink":"\u590D\u5236\u94FE\u63A5","polybox.copied":"\u94FE\u63A5\u5DF2\u590D\u5236","polybox.copyFailed":"\u65E0\u6CD5\u590D\u5236\u94FE\u63A5\u3002","polybox.column.name":"\u540D\u79F0","polybox.column.created":"\u521B\u5EFA\u65E5\u671F","polybox.column.modified":"\u4FEE\u6539\u65E5\u671F","polybox.column.size":"\u5927\u5C0F","polybox.sort.label":"\u6392\u5E8F","polybox.sort.asc":"\u6309{column}\u5347\u5E8F\u6392\u5E8F","polybox.sort.desc":"\u6309{column}\u964D\u5E8F\u6392\u5E8F","polybox.settings.sort.title":"Polybox \u6392\u5E8F","polybox.settings.sort.description":"Polybox \u6587\u4EF6\u5939\u6309\u54EA\u4E00\u5217\u5347\u5E8F\u6216\u964D\u5E8F\u6392\u5E8F\uFF1B\u6587\u4EF6\u5939\u59CB\u7EC8\u5728\u524D\u3002"};function s1(n){let e=n.ui.registerCatalogs({en:ns,de:mg,es:gg,fr:yg,"zh-CN":bg}),t=u=>{let h=n.ui.t(u);return h===u?ns[u]??u:h};lh(n),uh(n);let i=Bm(),r=document.createElement("style");r.id="poly-styles",r.textContent=Dm+hg+tm+mm+Cm,document.getElementById(r.id)?.remove(),document.head.appendChild(r),gc();let s=n.settings.subscribe(gc);Um(n,{t});let o=dg(n),a=fg(n),l={type:"object",additionalProperties:!1,required:["shown"],properties:{shown:{type:"boolean"}}},c=[n.commands.register({id:"open",label:"Open the campus map",labelKey:"campusMap.command.open",sideEffect:"read",outputSchema:l,run:()=>(Un(t("campusMap.title")),{shown:!0})})];return()=>{for(let u of c)u();o(),a(),s(),e(),i(),r.remove()}}var o1={register:s1},VR=o1;export{VR as default,s1 as register};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
