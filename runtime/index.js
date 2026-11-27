var Gm=Object.defineProperty;var Wm=(n,e,t)=>e in n?Gm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ue=(n,e,t)=>Wm(n,typeof e!="symbol"?e+"":e,t);var Ze="#12120f",_t="#ffffff",Zl=[{id:"green",family:"semantic",labelKey:"color.green",light:"#549c83",dark:"#549c83",onLight:Ze,onDark:Ze},{id:"red",family:"semantic",labelKey:"color.red",light:"#d33542",dark:"#d33542",onLight:_t,onDark:_t},{id:"amber",family:"semantic",labelKey:"color.amber",light:"#ff9f0a",dark:"#ff9f0a",onLight:Ze,onDark:Ze},{id:"blue",family:"semantic",labelKey:"color.blue",light:"#0075b2",dark:"#90cfff",onLight:_t,onDark:Ze},{id:"yellow",family:"semantic",labelKey:"color.yellow",light:"#ad8500",dark:"#e6c45c",onLight:Ze,onDark:Ze},{id:"orange",family:"semantic",labelKey:"color.orange",light:"#bf5200",dark:"#fc8c50",onLight:_t,onDark:Ze},{id:"purple",family:"semantic",labelKey:"color.purple",light:"#8149c0",dark:"#c095fc",onLight:_t,onDark:Ze},{id:"pink",family:"semantic",labelKey:"color.pink",light:"#c52f9a",dark:"#da3aaa",onLight:_t,onDark:Ze},{id:"brown",family:"semantic",labelKey:"color.brown",light:"#78490b",dark:"#c7925c",onLight:_t,onDark:Ze},{id:"black",family:"semantic",labelKey:"color.black",light:"#0d0d0f",dark:"#3a3a3c",onLight:_t,onDark:_t},{id:"white",family:"semantic",labelKey:"color.white",light:"#fbfbfd",dark:"#f4f4f6",onLight:Ze,onDark:Ze},{id:"gray",family:"semantic",labelKey:"color.gray",light:"#717881",dark:"#c3cbd5",onLight:_t,onDark:Ze},{id:"violet",family:"semantic",labelKey:"color.violet",light:"#873aa6",dark:"#c17fde",onLight:_t,onDark:Ze},{id:"cyan",family:"semantic",labelKey:"color.cyan",light:"#008e9b",dark:"#68dfed",onLight:Ze,onDark:Ze},{id:"magenta",family:"semantic",labelKey:"color.magenta",light:"#b02184",dark:"#ec7bc0",onLight:_t,onDark:Ze},{id:"indigo",family:"semantic",labelKey:"color.indigo",light:"#5140b4",dark:"#9b97f7",onLight:_t,onDark:Ze},{id:"muted-green",family:"muted",labelKey:"color.mutedGreen",light:"#325c4c",dark:"#99ccaa",onLight:_t,onDark:Ze},{id:"muted-red",family:"muted",labelKey:"color.mutedRed",light:"#9f5c54",dark:"#e4a197",onLight:_t,onDark:Ze},{id:"muted-gold",family:"muted",labelKey:"color.mutedGold",light:"#918349",dark:"#ddce93",onLight:Ze,onDark:Ze},{id:"muted-blue",family:"muted",labelKey:"color.mutedBlue",light:"#5a7ea3",dark:"#84acd6",onLight:Ze,onDark:Ze},{id:"muted-violet",family:"muted",labelKey:"color.mutedViolet",light:"#826299",dark:"#c7aade",onLight:_t,onDark:Ze},{id:"primary-blue",family:"accent",labelKey:"color.primaryBlue",light:"#2a66db",dark:"#90b7ff",onLight:_t,onDark:Ze},{id:"teal",family:"accent",labelKey:"color.teal",light:"#007066",dark:"#5dcdbf",onLight:_t,onDark:Ze},{id:"gold",family:"accent",labelKey:"color.gold",light:"#866200",dark:"#d8b262",onLight:_t,onDark:Ze},{id:"rose",family:"accent",labelKey:"color.rose",light:"#861a50",dark:"#dd7aa1",onLight:_t,onDark:Ze},{id:"maroon",family:"categorical",labelKey:"color.maroon",light:"#75061c",dark:"#e66d71",onLight:_t,onDark:Ze},{id:"coral",family:"categorical",labelKey:"color.coral",light:"#d6673f",dark:"#ffad90",onLight:Ze,onDark:Ze},{id:"sand",family:"categorical",labelKey:"color.sand",light:"#a8885e",dark:"#f2d6b1",onLight:Ze,onDark:Ze},{id:"olive",family:"categorical",labelKey:"color.olive",light:"#636d11",dark:"#b0be60",onLight:_t,onDark:Ze},{id:"lime",family:"categorical",labelKey:"color.lime",light:"#5b9a25",dark:"#a8eb7a",onLight:Ze,onDark:Ze},{id:"forest",family:"categorical",labelKey:"color.forest",light:"#215e29",dark:"#6caa71",onLight:_t,onDark:Ze},{id:"mint",family:"categorical",labelKey:"color.mint",light:"#00856d",dark:"#a4f0dc",onLight:_t,onDark:Ze},{id:"sky",family:"categorical",labelKey:"color.sky",light:"#3397c7",dark:"#aae0ff",onLight:Ze,onDark:Ze},{id:"navy",family:"categorical",labelKey:"color.navy",light:"#223f94",dark:"#6f92e5",onLight:_t,onDark:Ze},{id:"plum",family:"categorical",labelKey:"color.plum",light:"#a552a3",dark:"#f1a6ee",onLight:_t,onDark:Ze},{id:"slate",family:"categorical",labelKey:"color.slate",light:"#50627a",dark:"#aab9cc",onLight:_t,onDark:Ze}],Zm=["semantic","muted","accent","categorical"];var QM=new Map(Zl.map(n=>[n.id,n])),$m={semantic:"Semantic",muted:"Muted",accent:"Accent & brand",categorical:"Categorical"},Xm=new Map(Zl.map(n=>[n.id,n.labelKey.replace(/^color\./,"").replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())])),qm=/^[a-z][a-z0-9-]{0,47}$/,Ym={version:4,families:Zm.map(n=>({id:n,name:$m[n]})),colors:Zl.map(n=>({id:n.id,familyId:n.family,name:Xm.get(n.id)??n.id,light:n.light,dark:n.dark})),archived:[]},jm=n=>({version:4,families:n.families.map(e=>({...e})),colors:n.colors.map(e=>({...e})),archived:n.archived.map(e=>({...e}))});var eS=jm(Ym);var Wl="palette:";function Km(n){return n.startsWith(Wl)&&qm.test(n.slice(Wl.length))}function Id(n){return Km(n)?n.slice(Wl.length):void 0}function ro(n){let e=Id(n);return e?`var(--color-${e})`:n}function so(n){let e=Id(n);return e?`var(--color-${e}-on)`:"var(--title-color)"}var Pd=["eth","hoengg","uzh"],Rd=["students","internalStudents","internal","external","all"],Nd=n=>[...n].sort((e,t)=>Rd.indexOf(e.group)-Rd.indexOf(t.group)),Jm={students:["students"],internal:["internal"],external:["external"],internalStudents:["internal","students"],all:["students","internal","external"]},Ld=(n,e)=>n.find(t=>t.group===e)??n.find(t=>Jm[t.group].includes(e)),Qm="idapps.ethz.ch",nS=`https://${Qm}/cookpit-pub-services/v1`;var eg=/^\d{4}-\d{2}-\d{2}$/,Dd=n=>typeof n=="string"&&eg.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),kd=n=>new Date(`${n}T00:00:00Z`),tg=n=>n.toISOString().slice(0,10),Kr=(n,e)=>{let t=kd(n);return t.setUTCDate(t.getUTCDate()+e),tg(t)},ng=n=>kd(n).getUTCDay()||7,Ai=n=>Kr(n,1-ng(n));function oo(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var Od=(n=new Date)=>n.getHours()*60+n.getMinutes()>=870?"dinner":"lunch",Ud=n=>n.toLowerCase().startsWith("de")?"de":"en";var ig=n=>typeof n=="string"&&/^universitat-zurich(,[a-z0-9-]+)*\/[a-z0-9-]+$/.test(n);var zd=n=>n.vegetarian||n.vegan||n.glutenFree||n.lactoseFree;function rg(n,e){return!(e.vegan&&n.diet!=="vegan"||e.vegetarian&&!n.diet||e.glutenFree&&n.gluten!==!1||e.lactoseFree&&n.lactose!==!1)}var Ji=(n,e,t)=>n.days.find(i=>i.date===e)?.services.find(i=>i.service===t),ao=(n,e,t,i)=>(Ji(n,e,t)?.dishes??[]).filter(r=>rg(r,i));function $l(n,e,t){let i=n.days.find(s=>s.date===e);if(!i?.hours.length)return null;let r=Ji(n,e,t)?.from??"";return i.hours.find(s=>r&&s.from<=r&&r<s.to)??i.hours[0]}function Fd(n,e,t=new Date){if(e!==oo(t))return null;let i=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`;return n.from<=i&&i<n.to?"open":"closed"}var Xl=n=>`place:${n}`;function Bd(n){let e=/^place:(eth|uzh):(.+)$/.exec(n??"");if(!e)return null;let t=e[1],i=e[2];return(t==="eth"?!/^\d+$/.test(i):!ig(i))?null:{source:t,key:i,id:`${t}:${i}`}}function Hd(n){return`CHF ${n.toFixed(2)}`}var N,qe;function Vd(n){qe=n,N=n.React}var Jr={"manifest.name":"Poly","manifest.description":"ETH and UZH in Valley: the eLink shuttle between ETH Zentrum and H\xF6nggerberg, today's menu plan of ETH Zentrum, ETH H\xF6nggerberg and the UZH outlets, a campus map of ETH's buildings with their floors and rooms, in 2D and in the Stadt Z\xFCrich 3D model, and ETH News with the Zukunftsblog, Globe and the media releases, read in Valley.","menu.title":"Menu plan",refresh:"Refresh",openWebsite:"Open website","day.previous":"Previous day","day.next":"Next day","day.backToToday":"Back to today","day.today":"Today","week.previous":"Previous week","week.next":"Next week","week.label":"Week","service.label":"Meal","service.lunch":"Lunch","service.dinner":"Dinner",loading:"Loading menus\u2026","empty.lunch":"No place serves lunch on this day.","empty.dinner":"No place serves dinner on this day.","empty.location":"Nothing on the menu for this meal.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarian","climate.LOW":"Low climate impact","climate.MEDIUM":"Medium climate impact","climate.HIGH":"High climate impact","price.students":"Students","price.internal":"Staff","price.external":"Guests",allergens:"Allergens","allergens.none":"No allergens declared","credit.eth":"Menus from ETH Zurich Gastronomy.","credit.uzh":"Menus from the ZFV on food2050.","error.networkError":"The menu service could not be reached.","error.serviceError":"The menu service answered with an error.","error.formatError":"The menu service sent data Poly could not read.","error.notFound":"The menu service has no such page.","error.invalidInput":"Poly asked for a menu in a way the service does not know.","error.unavailable":"Poly is reloading.",openPage:"Open the menu plan page","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH outlets","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Open now \xB7 {hours}","hours.closed":"Closed \xB7 {hours}","hours.open":"Open {hours}","service.time.lunch":"Lunch {hours}","service.time.dinner":"Dinner {hours}",filter:"Filter","filter.vegetarian":"Vegetarian","filter.vegan":"Vegan","filter.glutenFree":"Gluten-free","filter.clear":"Clear filters","empty.filtered":"No menu matches the filters.","loading.uzh":"Reading the UZH outlets\u2026",openInNewTab:"Open in new tab","settings.onlyVegetarian.title":"Only vegetarian","settings.onlyVegetarian.description":"Show only vegetarian and vegan menus, in the place list counts and on the page.","settings.onlyVegan.title":"Only vegan","settings.onlyVegan.description":"Show only vegan menus.","settings.onlyGlutenFree.title":"Only gluten-free","settings.onlyGlutenFree.description":"Show only menus whose declared allergens contain no gluten cereal. A menu without declared allergens is not shown.","settings.campus.title":"Campus","settings.campus.description":"The tag chosen in the menu plan: Favorites or a campus.","settings.day.title":"Day","settings.day.description":"The day and meal the menu plan shows; a past day falls back to today.","price.internalStudents":"Staff & students","price.all":"All visitors","filter.lactoseFree":"Lactose-free","settings.onlyLactoseFree.title":"Only lactose-free","settings.onlyLactoseFree.description":"Show only menus whose declared allergens contain no milk. A menu without declared allergens is not shown.",prices:"Prices","prices.all":"All prices","settings.prices.title":"Prices shown","settings.prices.description":"Which prices the menu cards show: all of them from students to guests, or one group's.","campus.favorites":"Favorites","campus.favorites.title":"Favorite places","favorite.add":"Add {name} to favorites","favorite.remove":"Remove {name} from favorites","empty.favorites":"None of your favorite places has a menu for this meal on this day.","credit.both":"Menus from ETH Zurich Gastronomy and from the ZFV on food2050.","settings.favorites.title":"Favorite places","settings.favorites.description":"The places starred in the menu plan.","mode.label":"Sidebar tabs","settings.mode.title":"Sidebar tab","settings.mode.description":"The sidebar tab shown: the eLink shuttle, the menu plan, the campus map or ETH News.","settings.tabOrder.title":"Sidebar tab order","settings.tabOrder.description":"The order of the sidebar's feature tabs, changed by dragging a tab or with Option and an arrow key.","city.display.color":"Colour","city.display.surfaces":"Surfaces","city.display.height":"Height","city.display.ground":"Ground","city.display.groundHint":"An approximate ground surface derived from the base heights of the buildings","city.building.title":"Building","city.building.close":"Close","city.building.egid":"EGID","city.building.height":"Height","city.building.ground":"Ground","city.building.roof":"Roof top","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"a.s.l.","city.model.title":"Model","city.model.date":"Data as of","city.model.buildings":"Buildings","city.model.triangles":"Triangles","city.model.tiles":"Tiles loaded","city.model.groundNote":"Buildings: Stadt Z\xFCrich 3D city model, LoD2 roof model, open government data. The ground is approximated from the buildings' base heights.","city.model.source":"Source","city.model.loading":"Loading the city model\u2026","city.model.errorTitle":"The city model could not be read","city.model.errorText":"Poly could not load the files of its 3D city model. Update Poly or install it again.","city.model.missingTitle":"No city model installed","city.model.missingText":"This copy of Poly was built without its city model. Add it to the package's runtime/assets/model/ with the update script in the plugin's folder, then build again:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"The 3D view could not start","city.view.loadingTiles":"Loading {{count}} tiles\u2026","city.settings.model":"City model","city.settings.modelMissing":"Not installed. The model belongs in {{folder}}.","city.settings.colorMode":"Colour","city.settings.showGround":"Ground","city.settings.camera":"Camera","city.footer.building":"Building","city.footer.tiles":"Tiles","city.footer.buildings":"Buildings","city.footer.date":"Data as of","settings.building.title":"Building","settings.building.description":"The ETH building selected on the campus map, by its code.","settings.level.title":"Floor","settings.level.description":"The floor of the selected building whose rooms the campus map shows.","settings.campusView.title":"Campus view","settings.campusView.description":"What the campus page shows: the 2D campus map or the 3D city model.","campusMap.title":"Campus map","campusMap.openPage":"Open the campus map page","campusMap.command.open":"Open the campus map","campusMap.map.attribution":"Map \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap contributors \xB7 Buildings \xA9 ETH Z\xFCrich","campusMap.map.loading":"Loading the map\u2026","campusMap.map.failed":"The map could not start","campusMap.floors.label":"Floors of {{code}}","campusMap.floors.show":"Show floor {{floor}}","campusMap.floors.loading":"Loading the rooms\u2026","campusMap.floors.failed":"The rooms could not be read","campusMap.floors.one":"1 floor with rooms","campusMap.floors.other":"{{count}} floors with rooms","campusMap.floors.none":"No floor plans published","campusMap.floors.reading":"Reading the floors\u2026","campusMap.room.close":"Close","campusMap.room.type":"Room type","campusMap.room.use":"Use","campusMap.legend.label":"Room types","campusMap.room.kind.teaching":"Teaching","campusMap.room.kind.lab":"Lab","campusMap.room.kind.office":"Office","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilets","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Other","campusMap.view.label":"View","campusMap.view.map":"Map","campusMap.view.3d":"3D","campusMap.view.outside":"This building is outside the Stadt Z\xFCrich 3D model","campusMap.outlines.failed":"The building outlines could not be read","campusMap.building.link":"ETH building page","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Other sites","campusMap.search.placeholder":"Search buildings, rooms, streets","campusMap.search.clear":"Clear the search","campusMap.search.none":"No building matches.","campusMap.credit":"Buildings, floors and rooms from ETH Z\xFCrich's campus map. Base map: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap contributors.","campusMap.map.zoomIn":"Zoom in","campusMap.map.zoomOut":"Zoom out","elink.title":"eLink","elink.openPage":"Open the eLink timetable","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 run","elink.runs.other":"{count} runs","elink.firstLast":"First {first} \xB7 Last {last}","elink.in":"in {minutes} min","elink.delay":"{minutes} min late","elink.ended":"No more departures today.","elink.weekend":"No eLink on weekends.","elink.noService":"No eLink runs on this day.","elink.showDay":"Show {day}","elink.loading":"Loading the eLink timetable\u2026","elink.credit":"Timetable data by transport.opendata.ch","elink.error.networkError":"transport.opendata.ch could not be reached.","elink.error.serviceError":"transport.opendata.ch answered with an error.","elink.error.formatError":"transport.opendata.ch sent data Poly could not read.","elink.error.invalidInput":"Poly asked transport.opendata.ch for a day it does not know.","elink.settings.date.title":"eLink day","elink.settings.date.description":"The day the eLink tab shows; a past day falls back to today.","campusMap.group.rooms":"Rooms","campusMap.rooms.searching":"Searching rooms\u2026","campusMap.rooms.failed":"The rooms could not be searched","campusMap.rooms.none":"No room matches.","campusMap.view.show3d":"Show in 3D","campusMap.view.show2d":"Show the 2D map","elink.showTimetable":"Show timetable","elink.arrival":"Arrives at {stop} at {time}","campusMap.building.clear":"Clear the selection","campusMap.properties.tab":"3D city","campusMap.properties.only3d":"The 3D city facts show here while the campus page shows 3D.","campusMap.properties.buildingTab":"Building","campusMap.properties.building":"Building","campusMap.properties.room":"Room","campusMap.properties.code":"Code","campusMap.properties.address":"Address","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Floors","campusMap.properties.floor":"Floor","campusMap.properties.kind":"Kind","campusMap.properties.none":"Select a building on the campus map or in the sidebar to see it here.","campusMap.group.zurich":"Z\xFCrich","news.title":"ETH News","news.openPage":"Open ETH News","news.feeds":"News feeds","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Globe magazine","news.feed.media":"Media releases","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Media","news.recent.one":"1 article this week","news.recent.other":"{count} articles this week","news.search":"Search articles","news.search.clear":"Clear search","news.loading":"Loading ETH News\u2026","news.empty":"This feed has no articles.","news.empty.search":"No article matches the search.","news.credit":"News by ETH Zurich, from its RSS feeds on ethz.ch","news.yesterday":"Yesterday","news.openWebsite":"Open on ethz.ch","news.video":"Video","news.by":"by {author}","news.source":"Source: ETH Zurich,","news.error.networkError":"ethz.ch could not be reached.","news.error.serviceError":"ethz.ch answered with an error.","news.error.notFound":"ethz.ch no longer has this article.","news.error.formatError":"ethz.ch sent a page Poly could not read.","news.error.invalidInput":"Poly asked ethz.ch for an address it does not know.","news.error.unavailable":"Poly is being reloaded; try again in a moment.","news.settings.feed.title":"News feed","news.settings.feed.description":"The ETH News feed the News tab shows: every article, the Zukunftsblog, Globe or the media releases.","news.tags.clear":"Clear","news.tags.none":"These articles have no tags.","news.tags.add":"Select {tag}","news.tags.remove":"Deselect {tag}","news.empty.tags":"No article has the chosen tags.","news.settings.tags.title":"News tags","news.settings.tags.description":"The tags the News tab's article list is filtered by; an article with any of them is shown.","news.tags.show":"Show tags","news.tags.hide":"Show articles","news.tags.search":"Search tags","news.tags.count":"{count} tags","news.tags.articles.one":"1 article","news.tags.articles.other":"{count} articles","news.tags.noMatch":"No tag matches the search."};function Gd(n,e){return(Jr[n]??n).replace(/\{\{([^}]+)\}\}/g,(i,r)=>String(e?.[r]??""))}var ql=Gd;function Wd(n){ql=(e,t)=>{let i=n.ui.t(e,t);return i===e?Gd(e,t):i}}function Qe(n,e){return ql(`city.${n}`,e)}function Me(n,e){return ql(`campusMap.${n}`,e)}var Zd=[{code:"AGS",street:"Streulistrasse 74 a",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AGS",campus:"other",center:[8.564558,47.36295]},{code:"AMA",street:"Auf der Mauer 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AMA",campus:"zentrum",center:[8.544891,47.378357]},{code:"AND",street:"Andreasstrasse 15",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AND",campus:"other",center:[8.548765,47.413209]},{code:"AUA",street:"Austrasse 54",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUA",campus:"other",center:[8.519441,47.364088]},{code:"AUB",street:"Austrasse 56",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUB",campus:"other",center:[8.51929,47.363856]},{code:"AWA",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWA",campus:"other",center:[9.800295,46.581909]},{code:"AWC",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWC",campus:"other",center:[9.800547,46.581267]},{code:"AWD",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWD",campus:"other",center:[9.799927,46.581795]},{code:"AWS",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWS",campus:"other",center:[9.800964,46.581634]},{code:"BAA",street:"Lengghalde 5",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BAA",campus:"other",center:[8.574235,47.352412]},{code:"BEA",street:"Im Ergel 1 (Partnerhaus)",zip:"5404",city:"Baden",canton:"AG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEA",campus:"other",center:[8.278762,47.455668]},{code:"BEF",street:"Effingerstr. 6a",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEF",campus:"other",center:[7.43645,46.946003]},{code:"BGU",street:"Gutenbergstrasse 31",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BGU",campus:"other",center:[7.434804,46.943831]},{code:"BHA",street:"Hirschengraben 3",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BHA",campus:"other",center:[7.438359,46.946886]},{code:"BIR",street:"Kasernenstrasse",zip:"8903",city:"Birmensdorf ZH",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BIR",campus:"other",center:[8.430662,47.358831]},{code:"BOT",street:"Zollikerstrasse 107",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BOT",campus:"other",center:[8.56009,47.3589]},{code:"BRA",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRA",campus:"other",center:[8.494936,46.497495]},{code:"BRB",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRB",campus:"other",center:[8.49545,46.496919]},{code:"BSS",street:"Klingelbergstrasse 48",zip:"4056",city:"Basel",canton:"BS",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BSS",campus:"other",center:[7.580967,47.562894]},{code:"BUC",street:"Stationsstrasse 1",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BUC",campus:"other",center:[8.438246,47.452837]},{code:"CAB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CAB",campus:"zentrum",center:[8.54893,47.378346]},{code:"CHN",street:"Universit\xE4tstrasse 16",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CHN",campus:"zentrum",center:[8.548577,47.379266]},{code:"CLA",street:"Tannenstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLA",campus:"zentrum",center:[8.546735,47.377744]},{code:"CLD",street:"Clausiusstrasse 37",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLD",campus:"zentrum",center:[8.545901,47.378759]},{code:"CLE",street:"Clausiusstrasse 32",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLE",campus:"zentrum",center:[8.546581,47.378801]},{code:"CLF",street:"Clausiusstrasse 34",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLF",campus:"zentrum",center:[8.546526,47.378973]},{code:"CLG",street:"Clausiusstrasse 36",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLG",campus:"zentrum",center:[8.546486,47.379051]},{code:"CLI",street:"Clausiusstrasse 72",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLI",campus:"zentrum",center:[8.544858,47.381803]},{code:"CLP",street:"Clausiusstrasse 45",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLP",campus:"other",center:[8.545641,47.379597]},{code:"CLT",street:"Clausiusstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLT",campus:"zentrum",center:[8.546114,47.378782]},{code:"CLX",street:"Clausiusstrasse 35",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLX",campus:"zentrum",center:[8.546059,47.378901]},{code:"CNB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNB",campus:"zentrum",center:[8.549656,47.37822]},{code:"CNS",street:"Sp\xF6ndlistrasse",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNS",campus:"other",center:[8.549561,47.378535]},{code:"DEB",street:"Kriesbachstrasse 42",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEB",campus:"other",center:[8.614968,47.40313]},{code:"DEC",street:"\xDCberlandstrasse 129",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEC",campus:"other",center:[8.612018,47.403841]},{code:"DFA",street:"Wangenstrasse 72",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFA",campus:"other",center:[8.631796,47.405875]},{code:"DFB",street:"Wangenstrasse 64",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFB",campus:"other",center:[8.629443,47.404471]},{code:"DUA",street:"Ueberlandstrasse 17",zip:"8953",city:"Dietikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DUA",campus:"other",center:[8.406183,47.408228]},{code:"EBW",street:"Breitweg 4",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EBW",campus:"other",center:[8.580077,47.369226]},{code:"EEA",street:"Embraport 3",zip:"8424",city:"Embrach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EEA",campus:"other",center:[8.591135,47.517744]},{code:"EHA",street:"Eschikon 35",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHA",campus:"other",center:[8.680582,47.4486]},{code:"EHB",street:"Eschikon 27",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHB",campus:"other",center:[8.681123,47.448075]},{code:"EHC",street:"Eschikon 29",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHC",campus:"other",center:[8.680477,47.447699]},{code:"EHD",street:"Eschikon 37",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHD",campus:"other",center:[8.679805,47.448099]},{code:"EHG",street:"Eschikon 43",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHG",campus:"other",center:[8.679018,47.448675]},{code:"ELA",street:"Luegetenstrasse 11",zip:"8840",city:"Einsiedeln",canton:"SZ",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ELA",campus:"other",center:[8.747629,47.125113]},{code:"ERA",street:"Rapier-Platz Kanzel 1",zip:"4952",city:"Eriswil",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ERA",campus:"other",center:[7.873167,47.070999]},{code:"ETA",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETA",campus:"zentrum",center:[8.552969,47.377838]},{code:"ETF",street:"Sternwartstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETF",campus:"zentrum",center:[8.552291,47.377401]},{code:"ETL",street:"Physikstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETL",campus:"zentrum",center:[8.552492,47.378517]},{code:"ETZ",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETZ",campus:"zentrum",center:[8.552758,47.377657]},{code:"FDA",street:"Fr\xFCeb\xFCel",zip:"8318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FDA",campus:"other",center:[8.537501,47.113629]},{code:"FGH",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGH",campus:"other",center:[8.682228,47.449217]},{code:"FGP",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGP",campus:"other",center:[8.681846,47.449879]},{code:"FGS",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGS",campus:"other",center:[8.681435,47.449489]},{code:"FHE",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FHE",campus:"other",center:[8.536285,47.112711]},{code:"FMG",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FMG",campus:"other",center:[8.682371,47.449489]},{code:"FRB",street:"Freudenbergstrasse 112",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRB",campus:"other",center:[8.555466,47.38549]},{code:"FRL",street:"Eschikon 32.2",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRL",campus:"other",center:[8.683034,47.449169]},{code:"FRM",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRM",campus:"other",center:[8.537,47.113446]},{code:"FRN",street:"Freudenbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRN",campus:"other",center:[8.555417,47.385]},{code:"FSA",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSA",campus:"other",center:[8.535987,47.113121]},{code:"FSS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSS",campus:"other",center:[8.536474,47.11358]},{code:"FST",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FST",campus:"other",center:[8.68292,47.44996]},{code:"FTL",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FTL",campus:"other",center:[8.682639,47.449909]},{code:"FUA",street:"Furtbachstrasse 22",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FUA",campus:"other",center:[8.432826,47.449463]},{code:"FVG",street:"Fr\xFCeb\xFCel 4",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVG",campus:"other",center:[8.536165,47.112334]},{code:"FVS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVS",campus:"other",center:[8.536572,47.112973]},{code:"FWM",street:"Fr\xFCeb\xFCel 3",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWM",campus:"other",center:[8.536719,47.112487]},{code:"FWN",street:"Fr\xFCeb\xFCel 1",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWN",campus:"other",center:[8.53711,47.112681]},{code:"FWO",street:"Fr\xFCeb\xFCel 2",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWO",campus:"other",center:[8.537255,47.112404]},{code:"GEP",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GEP",campus:"zentrum",center:[8.546412,47.376638]},{code:"GLC",street:"Gloriastrasse 37/ 39",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLC",campus:"zentrum",center:[8.553365,47.377698]},{code:"GLO",street:"Gloriastrasse 82",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLO",campus:"other",center:[8.558339,47.375201]},{code:"GMA",street:"Adlisbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GMA",campus:"other",center:[8.588216,47.371575]},{code:"HAA",street:"H\xE4ldeliweg 15/17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAA",campus:"zentrum",center:[8.554284,47.377102]},{code:"HAC",street:"H\xE4ldeliweg 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAC",campus:"zentrum",center:[8.554498,47.377278]},{code:"HAD",street:"Haldenbachstrasse 44",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAD",campus:"zentrum",center:[8.550852,47.381008]},{code:"HAW",street:"Haldeneggsteig 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAW",campus:"zentrum",center:[8.54462,47.380745]},{code:"HCA",street:"Hochstrasse 56",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCA",campus:"zentrum",center:[8.554793,47.378652]},{code:"HCB",street:"Hochstrasse 58",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCB",campus:"zentrum",center:[8.555052,47.37849]},{code:"HCI",street:"Vladimir-Prelog-Weg 1-5 / 10",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCI",campus:"hoengg",center:[8.508295,47.406936]},{code:"HCP",street:"Leopold-Ruzicka-Weg 4",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCP",campus:"hoengg",center:[8.508242,47.406012]},{code:"HDB",street:"H\xF6nggerbergring 37",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HDB",campus:"hoengg",center:[8.508765,47.410919]},{code:"HEA",street:"Heinrichstrasse 237",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEA",campus:"other",center:[8.522586,47.388643]},{code:"HEZ",street:"Schafmattstrasse 23",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEZ",campus:"hoengg",center:[8.511873,47.410632]},{code:"HG",street:"R\xE4mistrasse 101",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HG",campus:"zentrum",center:[8.547737,47.376369]},{code:"HGP",street:"H\xF6nggerbergring 47",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HGP",campus:"hoengg",center:[8.509611,47.410434]},{code:"HIA",street:"H\xF6nggerbergring 26",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIA",campus:"hoengg",center:[8.505659,47.410106]},{code:"HIB",street:"Stefano-Franscini-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIB",campus:"hoengg",center:[8.50588,47.408789]},{code:"HIF",street:"Laura-Hezner-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIF",campus:"hoengg",center:[8.506263,47.409783]},{code:"HIG",street:"H\xF6nggerbergring 20",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIG",campus:"other",center:[8.50516,47.408977]},{code:"HIL",street:"Stefano-Franscini-Platz 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIL",campus:"hoengg",center:[8.506855,47.408691]},{code:"HIN",street:"Othmar-Amman-Weg 11",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIN",campus:"hoengg",center:[8.505418,47.409054]},{code:"HIT",street:"Wolfgang-Pauli-Strasse 27",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIT",campus:"hoengg",center:[8.508131,47.41034]},{code:"HKK",street:"H\xF6nggerbergring 39",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HKK",campus:"hoengg",center:[8.50908,47.410855]},{code:"HOA",street:"Hottingerstrasse 10",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HOA",campus:"other",center:[8.550108,47.370104]},{code:"HPF",street:"Otto-Stern-Weg 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPF",campus:"hoengg",center:[8.509324,47.40971]},{code:"HPG",street:"John-von-Neumann-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPG",campus:"other",center:[8.50925,47.408515]},{code:"HPH",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPH",campus:"hoengg",center:[8.509252,47.407606]},{code:"HPI",street:"Wolfgang-Pauli-Strasse 14",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPI",campus:"hoengg",center:[8.507994,47.408381]},{code:"HPK",street:"Otto-Stern-Weg 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPK",campus:"hoengg",center:[8.510944,47.409199]},{code:"HPL",street:"Otto-Stern-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPL",campus:"hoengg",center:[8.511481,47.408993]},{code:"HPM",street:"Otto-Stern-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPM",campus:"hoengg",center:[8.51031,47.409529]},{code:"HPP",street:"H\xF6nggerbergring 64",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPP",campus:"hoengg",center:[8.510958,47.407812]},{code:"HPR",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPR",campus:"hoengg",center:[8.509779,47.407833]},{code:"HPS",street:"Robert-Gnehm-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPS",campus:"hoengg",center:[8.511216,47.406826]},{code:"HPT",street:"Auguste-Piccard-Hof 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPT",campus:"hoengg",center:[8.50866,47.40879]},{code:"HPV",street:"Robert-Gnehm-Weg 15",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPV",campus:"hoengg",center:[8.510216,47.407307]},{code:"HPW",street:"H\xF6nggerbergring 62",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPW",campus:"hoengg",center:[8.511248,47.408548]},{code:"HPY",street:"H\xF6nggerbergring 62b",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPY",campus:"hoengg",center:[8.511166,47.408382]},{code:"HPZ",street:"John-von-Neumann-Weg 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPZ",campus:"hoengg",center:[8.510196,47.408303]},{code:"HRG",street:"Hirschengraben 62",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HRG",campus:"zentrum",center:[8.545944,47.375119]},{code:"HSA",street:"Z\xFCrichbergstrasse 196",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HSA",campus:"other",center:[8.574021,47.383471]},{code:"HWA",street:"Paul-Feyerabend-Hof 1",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWA",campus:"hoengg",center:[8.505263,47.407062]},{code:"HWB",street:"Paul-Feyerabend-Hof 5",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWB",campus:"hoengg",center:[8.506032,47.40685]},{code:"HWC",street:"Paul-Feyerabend-Hof 3",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWC",campus:"hoengg",center:[8.505782,47.407249]},{code:"HWW",street:"Peter-Debye-Weg 13/15/17",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWW",campus:"hoengg",center:[8.504474,47.407489]},{code:"HXE",street:"Wolfgang-Pauli-Strasse 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HXE",campus:"hoengg",center:[8.506307,47.407468]},{code:"HZA",street:"Schauenbergstrasse 94",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZA",campus:"hoengg",center:[8.505177,47.4121]},{code:"HZB",street:"Schauenbergstrasse 92",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZB",campus:"hoengg",center:[8.50549,47.412218]},{code:"HZC",street:"Schauenbergstrasse 90",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZC",campus:"hoengg",center:[8.505645,47.412415]},{code:"HZD",street:"Schauenbergstrasse 96",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZD",campus:"hoengg",center:[8.505702,47.411686]},{code:"IFW",street:"Haldeneggsteig 4",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=IFW",campus:"zentrum",center:[8.544592,47.380252]},{code:"KO2",street:"Karl Schmid-Strasse 4",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KO2",campus:"other",center:[8.548079,47.375049]},{code:"KOL",street:"R\xE4mistrasse 71",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KOL",campus:"other",center:[8.548613,47.374526]},{code:"KUB",street:"K\xFCrbergstrasse 20",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KUB",campus:"other",center:[8.507093,47.399458]},{code:"LCA",street:"Via Trevano 131",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCA",campus:"other",center:[8.959782,46.02485]},{code:"LCP",street:"Via Chiosso 7a",zip:"6948",city:"Porza",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCP",campus:"other",center:[8.963449,46.027021]},{code:"LEE",street:"Leonhardstrasse 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEE",campus:"zentrum",center:[8.546148,47.378121]},{code:"LEH",street:"Leonhardshalde 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEH",campus:"zentrum",center:[8.545592,47.376736]},{code:"LEO",street:"Leonhardstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEO",campus:"zentrum",center:[8.546534,47.377552]},{code:"LFG",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFG",campus:"zentrum",center:[8.548705,47.377824]},{code:"LFH",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFH",campus:"zentrum",center:[8.549125,47.377872]},{code:"LFO",street:"Schmelzbergstrasse 9",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFO",campus:"zentrum",center:[8.550172,47.377801]},{code:"LFV",street:"Schmelzbergstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFV",campus:"zentrum",center:[8.549823,47.37772]},{code:"LFW",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFW",campus:"zentrum",center:[8.549048,47.377497]},{code:"LGA",street:"Lengghalde 2",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LGA",campus:"other",center:[8.573685,47.351348]},{code:"LHT",street:"Lerchenhalde 37",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHT",campus:"other",center:[8.509426,47.413229]},{code:"LHV",street:"Lerchenhalde 39",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHV",campus:"other",center:[8.509283,47.413385]},{code:"LHX",street:"Lerchenhalde 41",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHX",campus:"other",center:[8.509199,47.413555]},{code:"LHZ",street:"Lerchenhalde 43",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHZ",campus:"other",center:[8.509049,47.41367]},{code:"LRA",street:"Lerchenrain 1",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRA",campus:"other",center:[8.508515,47.413787]},{code:"LRG",street:"Lerchenrain 7",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRG",campus:"other",center:[8.50803,47.413942]},{code:"LRI",street:"Lerchenrain 9",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRI",campus:"other",center:[8.507888,47.414105]},{code:"LRL",street:"Lerchenrain 11",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRL",campus:"other",center:[8.50768,47.414174]},{code:"LRN",street:"Lerchenrain 13",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRN",campus:"other",center:[8.507528,47.414276]},{code:"LRO",street:"Lerchenrain bei 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRO",campus:"other",center:[8.506916,47.414388]},{code:"LRR",street:"Lerchenrain 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRR",campus:"other",center:[8.507127,47.414553]},{code:"LSH",street:"Limmerenfirn",zip:"8783",city:"Linthal",canton:"GL",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LSH",campus:"other",center:[8.992092,46.817011]},{code:"LUI",street:"Via Giuseppe Buffi 13",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LUI",campus:"other",center:[8.957668,46.01016]},{code:"M2R",street:"Moussonstrasse 2/4",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=M2R",campus:"other",center:[8.554328,47.375433]},{code:"ML",street:"Sonneggstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ML",campus:"zentrum",center:[8.547569,47.377744]},{code:"MM",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MM",campus:"zentrum",center:[8.546799,47.376105]},{code:"MVA",street:"Strada Collina",zip:"6612",city:"Ascona",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MVA",campus:"other",center:[8.762855,46.15857]},{code:"NEL",street:"Nelkenstrasse 11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NEL",campus:"zentrum",center:[8.546435,47.382079]},{code:"NID",street:"Niederdorfstr. 88",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NID",campus:"other",center:[8.544131,47.376163]},{code:"NMA",street:"Murzlenstrasse 80",zip:"8166",city:"Niederweningen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NMA",campus:"other",center:[8.367587,47.510676]},{code:"NO",street:"Sonneggstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NO",campus:"zentrum",center:[8.547062,47.378469]},{code:"NW",street:"Clausiusstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NW",campus:"zentrum",center:[8.546351,47.378457]},{code:"OAT",street:"Andreasstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OAT",campus:"other",center:[8.547248,47.413042]},{code:"OCT",street:"Binzm\xFChlestrasse 130",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OCT",campus:"other",center:[8.537076,47.413426]},{code:"ODA",street:"D\xF6rflistrasse 120",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ODA",campus:"other",center:[8.547325,47.411173]},{code:"ONA",street:"Neunbrunnenstrasse 50",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ONA",campus:"other",center:[8.539774,47.417441]},{code:"PFA",street:"Technopark-Strasse 1",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PFA",campus:"other",center:[8.515598,47.38984]},{code:"PLB",street:"Plattenstrasse 28",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PLB",campus:"zentrum",center:[8.55315,47.373692]},{code:"RDA",street:"Althardstrasse 257",zip:"8105",city:"Regensdorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RDA",campus:"other",center:[8.46102,47.44373]},{code:"RIA",street:"Rickenstrasse 18/ 20",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RIA",campus:"other",center:[8.539964,47.417874]},{code:"RSA",street:"S\xE4umerstrasse 4/ Postfach 9000",zip:"8803",city:"R\xFCschlikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RSA",campus:"other",center:[8.544512,47.3102]},{code:"RZ",street:"Clausiusstrasse 59",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RZ",campus:"zentrum",center:[8.545116,47.380301]},{code:"SEC",street:"Scheuchzerstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEC",campus:"zentrum",center:[8.545095,47.382667]},{code:"SEI",street:"Seilergraben 45/ 49",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEI",campus:"other",center:[8.545321,47.375224]},{code:"SEL",street:"Seilergraben 53/ 55",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEL",campus:"other",center:[8.545129,47.375482]},{code:"SEW",street:"Scheuchzerstrasse 68/70",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEW",campus:"other",center:[8.545392,47.38666]},{code:"SLA",street:"Schorenstrasse 16",zip:"8603",city:"Schwerzenbach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SLA",campus:"other",center:[8.655288,47.384651]},{code:"SOH",street:"Sonneggstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOH",campus:"zentrum",center:[8.546828,47.379161]},{code:"SOI",street:"Sonneggstrasse 28",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOI",campus:"zentrum",center:[8.546662,47.380056]},{code:"SOK",street:"Sonneggstrasse 23",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOK",campus:"zentrum",center:[8.546647,47.379332]},{code:"SOL",street:"Sonneggstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOL",campus:"zentrum",center:[8.546222,47.379983]},{code:"SON",street:"Sonneggstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SON",campus:"zentrum",center:[8.546437,47.379603]},{code:"SOP",street:"Sonneggstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOP",campus:"zentrum",center:[8.546536,47.379555]},{code:"SOQ",street:"Sonneggstrasse 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOQ",campus:"zentrum",center:[8.546945,47.378943]},{code:"SOR",street:"Sonneggstrasse 19",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOR",campus:"zentrum",center:[8.546923,47.379179]},{code:"SOX",street:"Sonneggstrasse 74",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOX",campus:"zentrum",center:[8.544958,47.382388]},{code:"SSA",street:"S\xFCdstrasse 1",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SSA",campus:"other",center:[8.464873,47.400131]},{code:"STB",street:"Stampfenbachstrasse 69",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STB",campus:"zentrum",center:[8.541664,47.381525]},{code:"STC",street:"Stampfenbachstrasse 67",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STC",campus:"zentrum",center:[8.541796,47.381361]},{code:"STD",street:"Stampfenbachstrasse 48",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STD",campus:"zentrum",center:[8.543144,47.38049]},{code:"STF",street:"Stampfenbachstrasse 114",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STF",campus:"other",center:[8.540807,47.383945]},{code:"STW",street:"Schmelzbergstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STW",campus:"zentrum",center:[8.550542,47.378049]},{code:"SWS",street:"Wagistrasse 18",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SWS",campus:"other",center:[8.458623,47.398947]},{code:"TAN",street:"Tannenstrasse 1",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TAN",campus:"zentrum",center:[8.546721,47.377174]},{code:"TUS",street:"Turnerstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TUS",campus:"other",center:[8.543935,47.38474]},{code:"UNG",street:"Universit\xE4tstrasse 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNG",campus:"zentrum",center:[8.547909,47.378866]},{code:"UNH",street:"Universit\xE4tstrasse 25",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNH",campus:"zentrum",center:[8.547906,47.379247]},{code:"UNO",street:"Universit\xE4tstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNO",campus:"zentrum",center:[8.547904,47.380407]},{code:"USM",street:"R\xE4mistrasse 92",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=USM",campus:"other",center:[8.550852,47.376134]},{code:"VOG",street:"Vogelsangstrasse 11",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=VOG",campus:"zentrum",center:[8.55006,47.381992]},{code:"WEC",street:"Weinbergstrasse 9/11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEC",campus:"zentrum",center:[8.54407,47.377957]},{code:"WEG",street:"Weinbergstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEG",campus:"other",center:[8.544066,47.379059]},{code:"WEH",street:"Weinbergstrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEH",campus:"zentrum",center:[8.54396,47.379469]},{code:"WEP",street:"Weinbergstrasse 109",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEP",campus:"other",center:[8.541884,47.385775]},{code:"WES",street:"Weinbergstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WES",campus:"zentrum",center:[8.543881,47.380217]},{code:"WET",street:"Weinbergstrasse 43",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WET",campus:"other",center:[8.543834,47.380345]},{code:"WEV",street:"Weinbergstrasse 56/ 58",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEV",campus:"zentrum",center:[8.544162,47.381703]},{code:"WHA",street:"Hertistrasse 23",zip:"8304",city:"Wallisellen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WHA",campus:"other",center:[8.576675,47.414567]},{code:"WIL",street:"Wilfriedstrasse 6",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WIL",campus:"other",center:[8.554042,47.370092]},{code:"WKA",street:"Klosterstrasse 40",zip:"8406",city:"Winterthur",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WKA",campus:"other",center:[8.707646,47.486436]},{code:"WPW",street:"Walcheplatz 12",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WPW",campus:"zentrum",center:[8.543095,47.378453]},{code:"WWA",street:"Wasserwerkstrasse 10 / 12",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WWA",campus:"zentrum",center:[8.540735,47.383]},{code:"Y15",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y15",campus:"other",center:[8.549866,47.397466]},{code:"Y17",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y17",campus:"other",center:[8.550605,47.397252]},{code:"Y21",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y21",campus:"other",center:[8.548226,47.397106]},{code:"Y27",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y27",campus:"other",center:[8.550137,47.396578]},{code:"Y32",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y32",campus:"other",center:[8.549131,47.398237]},{code:"Y35",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y35",campus:"other",center:[8.550185,47.397922]},{code:"Y36",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y36",campus:"other",center:[8.55052,47.397815]},{code:"Y55",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y55",campus:"other",center:[8.550489,47.398428]},{code:"Y59",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y59",campus:"other",center:[8.551939,47.398172]},{code:"Y63",street:"Strickhofstrasse 35",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y63",campus:"other",center:[8.549895,47.395513]},{code:"ZAL",street:"Alte Landstrasse 98",zip:"8702",city:"Zollikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZAL",campus:"other",center:[8.575287,47.33708]},{code:"ZLA",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLA",campus:"other",center:[8.64507,47.308061]},{code:"ZLB",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLB",campus:"other",center:[8.645534,47.308093]},{code:"ZLC",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLC",campus:"other",center:[8.644606,47.308051]},{code:"ZUE",street:"Z\xFCrichbergstrasse 18",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZUE",campus:"zentrum",center:[8.552801,47.373184]}];var $d=/^[A-Z0-9]{1,6}$/,Yl=/^ETH\.[A-Z0-9]{1,6}\.[A-Z0-9]{1,6}$/,ag="arcgis-prd-web.ethz.ch",jl=`https://${ag}/server/rest/services`,cS=`${jl}/EGDB_EN/Facilities_EN/FeatureServer/5/query`,uS=`${jl}/EGDB_EN/Levels_EN/FeatureServer/2/query`,dS=`${jl}/EGDB_EN/Units_EN/FeatureServer/1/query`;function Xd(n){let e=[...n].sort((s,o)=>s.order-o.order),t=new Map,i=0;for(let s of e.filter(o=>o.order>=0))t.set(s.id,i),i+=s.height;let r=0;for(let s of e.filter(o=>o.order<0).reverse())r-=s.height,t.set(s.id,r);return t}function qd(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function Kl(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?[e,t,i,r]:null}function Yd(n,e){let t=n.normalize("NFC").toUpperCase().replace(/[^A-Z0-9ÄÖÜ. ]+/g," ").trim().replace(/\s+/g," ");if(!t)return null;let i=/^(?:([A-Z0-9]{1,6}) )?([A-Z]{1,2}) ?([0-9][0-9.]{0,9})?$/.exec(t);if(i){let a=i[1]??e??"";if($d.test(a)&&(i[1]||i[3]))return{building:a,floor:i[2],number:i[3]??""}}let[r,...s]=t.split(" "),o=s.filter(a=>/^[A-ZÄÖÜ]{3,20}$/.test(a));return $d.test(r)&&o.length&&o.length===s.length?{building:r,words:o}:null}var jd=(n,e)=>n.startsWith(`${e} `)?n.slice(e.length+1):n;var lg=["zentrum","hoengg","other"],lo=Zd,cg=new Map(lo.map(n=>[n.code,n])),Qi=n=>typeof n=="string"?cg.get(n)??null:null,$n=n=>[n.street,[n.zip,n.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");function Ci(n){return n.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase().replace(/([aou])e/g,"$1")}function Kd(n,e=lo){let t=Ci(n).split(/[\s,]+/).filter(Boolean);if(!t.length)return e;let i=[];for(let r of e){let s=Ci(r.code),o=`${s} ${Ci($n(r))} ${Ci(r.canton)}`;if(!t.every(l=>o.includes(l)))continue;let a=t[0];i.push({building:r,score:s===a?0:s.startsWith(a)?1:s.includes(a)?2:3})}return i.sort((r,s)=>r.score-s.score||r.building.code.localeCompare(s.building.code)).map(r=>r.building)}function Jd(n){return lg.map(e=>({group:e,buildings:n.filter(t=>t.campus===e)})).filter(e=>e.buildings.length)}function er(n,e){let t=(n*3600-169028.66)/1e4,i=(e*3600-26782.5)/1e4,r=260007237e-2+211455.93*i-10938.51*i*t-.36*i*t*t-44.54*i**3,s=120014707e-2+308807.95*t+3745.25*i*i+76.63*t*t-194.56*i*i*t+119.79*t**3;return[r,s]}var Jl=[{id:"hb",name:"Z\xFCrich HB",latitude:47.37818,longitude:8.54019,distance:900},{id:"lindenhof",name:"Lindenhof",latitude:47.37292,longitude:8.54083,distance:600},{id:"grossmuenster",name:"Grossm\xFCnster",latitude:47.3701,longitude:8.54405,distance:450},{id:"fraumuenster",name:"Fraum\xFCnster",latitude:47.36985,longitude:8.54107,distance:450},{id:"bellevue",name:"Bellevue / Opernhaus",latitude:47.36532,longitude:8.54683,distance:700},{id:"eth",name:"ETH Zentrum",latitude:47.37635,longitude:8.54786,distance:650},{id:"uzh",name:"Universit\xE4t Z\xFCrich",latitude:47.3745,longitude:8.54855,distance:650},{id:"kunsthaus",name:"Kunsthaus",latitude:47.37017,longitude:8.54817,distance:500},{id:"prime",name:"Prime Tower",latitude:47.3861,longitude:8.51713,distance:800},{id:"letzigrund",name:"Letzigrund",latitude:47.38277,longitude:8.5041,distance:800},{id:"hoengg",name:"ETH H\xF6nggerberg",latitude:47.40828,longitude:8.5076,distance:900},{id:"oerlikon",name:"Bahnhof Oerlikon",latitude:47.4118,longitude:8.54396,distance:800},{id:"hallenstadion",name:"Hallenstadion",latitude:47.41162,longitude:8.55194,distance:800},{id:"altstetten",name:"Bahnhof Altstetten",latitude:47.3913,longitude:8.489,distance:800},{id:"zuerichhorn",name:"Z\xFCrichhorn",latitude:47.3546,longitude:8.5522,distance:900}];function Qd(n){let e=new DataView(n);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="Z3DT")throw new Error("Not a Z\xFCrich 3D tile");let i=e.getUint32(4,!0);if(i!==1&&i!==2)throw new Error(`Unsupported tile version ${i}`);let r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getUint32(16,!0),a=[e.getFloat64(24,!0),e.getFloat64(32,!0),e.getFloat64(40,!0)],l=[e.getFloat32(48,!0),e.getFloat32(52,!0),e.getFloat32(56,!0)];if(i===2)return{vertexCount:r,indexCount:s,origin:a,step:l,...ug(new Uint8Array(n),r,s,o,e.getUint32(20,!0))};let c=new Uint16Array(n,64,r*3),u=Math.ceil(r*6/4)*4,h=new Uint8Array(n,64+u,r),d=64+u+Math.ceil(r/4)*4,m=o===4?new Uint32Array(n,d,s):new Uint16Array(n,d,s);return{vertexCount:r,indexCount:s,origin:a,step:l,positions:c,kinds:h,indices:m}}function ug(n,e,t,i,r){if(n.length<64+e*7+r)throw new Error("Truncated Z\xFCrich 3D tile");let s=new Uint16Array(e*3),o=64;for(let h=0;h<3;h++){let d=0,m=o+e;for(let y=0,w=h;y<e;y++,w+=3){let g=n[o+y]|n[m+y]<<8;d=d+(g>>>1^-(g&1))&65535,s[w]=d}o+=e*2}let a=n.slice(o,o+e);o+=e;let l=o+r,c=i===4?new Uint32Array(t):new Uint16Array(t),u=0;for(let h=0;h<t;h++){if(o>=l)throw new Error("Truncated Z\xFCrich 3D tile");let d=n[o++],m=d&127;for(let w=128;d>=128;w*=128){if(o>=l)throw new Error("Truncated Z\xFCrich 3D tile");d=n[o++],m+=(d&127)*w}let y=u-m;if(y<0||y>=e)throw new Error("Invalid Z\xFCrich 3D tile");c[h]=y,m===0&&u++}return{positions:s,kinds:a,indices:c}}function eh(n){let e=n;return!!e&&e.format==="zurich3d-tiles"&&(e.version===1||e.version===2)&&Array.isArray(e.tiles)&&Array.isArray(e.bounds)}function th(n,e){let t=0,i=n.length-1;for(;t<=i;){let r=t+i>>1,s=n[r];if(e<s[1])i=r-1;else if(e>=s[1]+s[2])t=r+1;else return s}return null}async function nh(n){let e=new Response(n).body;if(!e)throw new Error("Empty tile");return new Response(e.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}var ih=Uint8Array.fromBase64;function rh(n){if(ih)return ih(n);let e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}var xS=new TextDecoder;var sh="valleyPolyModel",dg=/^(?:index\.json|ground\.bin|tiles\/-?\d{1,6}_-?\d{1,6}\.(?:bin\.gz|json))$/,Qr=class extends Error{},ec=new Map,Ql=new Map;function hg(n){let e=n;typeof e[sh]!="function"&&(e[sh]=(t,i)=>{typeof t=="string"&&typeof i=="string"&&ec.get(t)?.(i)})}function tc(n,e=document){if(!dg.test(n))return Promise.reject(new Error("invalidPath"));let t=Ql.get(n);if(t)return t;let i=new Promise((r,s)=>{e.defaultView&&hg(e.defaultView);let o=null;ec.set(n,c=>{o=c});let a=e.createElement("script"),l=()=>{ec.delete(n),Ql.delete(n),a.remove()};a.onload=()=>{if(l(),o===null){s(new Error(`${n}: not a packaged model file`));return}try{r(rh(o).buffer)}catch(c){s(c)}},a.onerror=()=>{l(),s(new Qr(n))},a.src=qe.assets.url(`model/${n}.js`),(e.head??e.documentElement).appendChild(a)});return Ql.set(n,i),i}var nc=new Set,uo={status:"loading",error:null,folder:"plugins/data/poly/model/",index:null,selected:null,loadedTiles:0,loadingTiles:0,colorMode:"surfaces",showGround:!0,flyRequest:0,flyTarget:null};function Ii(){return uo}function Mn(n){uo={...uo,...n};for(let e of nc)e()}function rc(n){return nc.add(n),()=>nc.delete(n)}function Ri(){return qe.React.useSyncExternalStore(rc,Ii)}var ic="package";async function oh(n,e){let t=[],i=0;for(;;){let o=await qe.backend.call("model.read",{path:n,offset:i},{encoding:"bytes"});if(!o.byteLength||(t.push(new Uint8Array(o)),i+=o.byteLength,e!==void 0?i>=e:o.byteLength<2*1024*1024))break}if(t.length===1)return t[0].buffer;let r=new Uint8Array(i),s=0;for(let o of t)r.set(o,s),s+=o.byteLength;return r.buffer}function ah(n){return console.warn("Poly: the city model could not be read",n),new Error(Qe("model.errorText"))}async function lh(n,e){try{return ic==="realm"?await oh(n,e):await tc(n)}catch(t){throw ah(t)}}var co=null;function ho(n=!1){return co&&!n||(Mn({status:"loading",error:null}),co=(async()=>{try{let e=await qe.backend.call("model.status").catch(()=>null);ic=e?.installed?"realm":"package";let t=e?.installed?e.folder:"runtime/assets/model/",i;try{i=ic==="realm"?await oh("index.json"):await tc("index.json")}catch(s){if(s instanceof Qr){Mn({status:"missing",folder:t,index:null});return}throw s}let r=JSON.parse(new TextDecoder().decode(i));if(!eh(r))throw new Error("index.json is not a Z\xFCrich 3D model index");Mn({status:"ready",index:r,folder:t})}catch(e){Mn({status:"error",error:ah(e).message})}})()),co}function sc(){let n=qe.settings.get();Mn({colorMode:n.colorMode==="height"?"height":"surfaces",showGround:n.showGround!==!1})}function ch(n){Mn({colorMode:n}),qe.settings.set("colorMode",n)}function uh(n){Mn({showGround:n}),qe.settings.set("showGround",n)}function dh(n,e,t){Mn({flyTarget:{east:n,north:e,distance:t},flyRequest:uo.flyRequest+1}),qe.settings.get().campusView!=="3d"&&qe.settings.set("campusView","3d");let i=qe.getState().activePluginTab;(i?.pluginId!==qe.pluginId||!Pi(i.instanceId))&&zn(Me("title"))}var oc=new Set,pg=()=>({outlines:null,outlinesStatus:"idle",levels:null,levelsStatus:"idle",rooms:new Map,roomsStatus:new Map,room:null,focus:0,focusOn:null,place:null}),Yt=pg();var po={center:[8.5485,47.3768],zoom:15.6},hh=n=>{po=n},fg=()=>Yt;function Wt(n){Yt={...Yt,...n};for(let e of oc)e()}function mg(n){return oc.add(n),()=>oc.delete(n)}var Ni=()=>qe.React.useSyncExternalStore(mg,fg);function ac(n=qe.settings.get()){let e=Qi(n.building),t=typeof n.level=="string"&&Yl.test(n.level)&&e&&n.level.split(".")[1]===e.code?n.level:"";return{building:e,level:t,view:n.campusView==="3d"?"3d":"map"}}function Li(){let n=qe.React,[e,t]=n.useState(()=>ac());return n.useEffect(()=>qe.settings.subscribe(()=>t(i=>{let r=ac();return r.building===i.building&&r.level===i.level&&r.view===i.view?i:r})),[]),e}var lc=n=>{console.warn(`[poly] campus: ${n instanceof Error?n.message:String(n)}`)};function ph(n=!1){!n&&Yt.outlinesStatus!=="idle"&&Yt.outlinesStatus!=="error"||(Wt({outlinesStatus:"loading"}),qe.backend.call("campus.outlines",{fresh:n}).then(e=>Wt({outlines:e,outlinesStatus:"ready"}),e=>{lc(e),Wt({outlinesStatus:"error"})}))}function fo(n=!1){!n&&Yt.levelsStatus!=="idle"&&Yt.levelsStatus!=="error"||(Wt({levelsStatus:"loading"}),qe.backend.call("campus.levels",{fresh:n}).then(e=>{let t=new Map;for(let i of e)t.set(i.code,[...t.get(i.code)??[],i]);Wt({levels:t,levelsStatus:"ready"})},e=>{lc(e),Wt({levelsStatus:"error"})}))}function mo(n){let e=Yt.roomsStatus.get(n);e==="loading"||e==="ready"||(Wt({roomsStatus:new Map(Yt.roomsStatus).set(n,"loading")}),qe.backend.call("campus.rooms",{level:n}).then(t=>Wt({rooms:new Map(Yt.rooms).set(n,t),roomsStatus:new Map(Yt.roomsStatus).set(n,"ready")}),t=>{lc(t),Wt({roomsStatus:new Map(Yt.roomsStatus).set(n,"error")})}))}var Pi=n=>n==="campus"||n==="city"||!!(n?.startsWith("campus-")||n?.startsWith("city-"));function go(){let n=qe.getState().activePluginTab;return n?.pluginId===qe.pluginId&&Pi(n.instanceId)}function zn(n,e=!1){qe.workspace.openMainTab({instanceId:e?`campus-${Date.now().toString(36)}`:"campus",title:n,newTab:e})}function Di(n,e,t=!0){n===(qe.settings.get().building||null)&&!t||(qe.settings.set("building",n??""),qe.settings.set("level",""),Wt({room:null,...t?{focus:Yt.focus+1,focusOn:n}:{}}),t&&n&&!go()&&zn(e))}function cc(n,e){let t=n.level.split(".")[1]??"";!Yl.test(n.level)||!t||(qe.settings.set("building",t),qe.settings.set("level",n.level),Wt({room:n,focus:Yt.focus+1,focusOn:t}),mo(n.level),go()||zn(e))}var tr=new Map;function fh(n){let e=JSON.stringify(n),t=tr.get(e);return t||(t=qe.backend.call("campus.searchRooms",{query:n}),tr.set(e,t),t.catch(()=>tr.delete(e)),tr.size>100&&tr.delete(tr.keys().next().value)),t}function mh(n){qe.settings.set("level",n),Wt({room:null}),n&&mo(n)}var gg=n=>Math.min(Math.max(17-Math.log2(Math.max(n,50)/450),13),19);function gh(n,e,t){if(t==="3d"){let[s,o]=er(n.latitude,n.longitude);dh(s,o,n.distance);return}let i=[n.longitude,n.latitude],r=gg(n.distance);po={center:i,zoom:r},Wt({place:{center:i,zoom:r,request:(Yt.place?.request??0)+1}}),go()||zn(e)}function yh(n,e){qe.settings.set("campusView",n),Wt({focus:Yt.focus+1,focusOn:ac().building?.code??null}),e&&!go()&&zn(e)}var ci=(n,e)=>N.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...e},n.map(t=>N.createElement("path",{key:t,d:t}))),xh=["M19 10c0 4.6-7 11-7 11s-7-6.4-7-11a7 7 0 0 1 14 0Z","M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0"],yg=["M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13","M20 20l-4.8-4.8"],bh=["M18 6 6 18","M6 6l12 12"],xg=["M9 6l6 6-6 6"],bg=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],vg=["M4 21h16","M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17","M14.5 12.5v.01"],_g=250;function wg({building:n}){let e=Ni(),t=e.levels?.get(n.code)?.length??0;return N.createElement("section",{className:"poly-building","aria-label":n.code},N.createElement("div",{className:"poly-building-code"},n.code),N.createElement("button",{type:"button",className:"poly-icon-btn poly-building-close",title:Me("building.clear"),"aria-label":Me("building.clear"),onClick:()=>Di(null,Me("title"),!1)},ci(bh)),N.createElement("div",{className:"poly-building-address"},$n(n)),N.createElement("div",{className:"poly-building-meta"},Me(`group.${n.campus}`)," \xB7 ",e.levelsStatus==="ready"?t?Me(t===1?"floors.one":"floors.other",{count:t}):Me("floors.none"):Me("floors.reading")),N.createElement("a",{className:"poly-building-link",href:n.link,target:"_blank",rel:"noreferrer"},ci(bg),N.createElement("span",null,Me("building.link"))))}function vh(){let n=Li(),e=Ni(),[t,i]=N.useState(""),[r,s]=N.useState(()=>new Set(["other","zurich"])),[o,a]=N.useState(null),l=N.useRef(null);N.useEffect(()=>{fo()},[]);let c=N.useMemo(()=>Kd(t),[t]),u=N.useMemo(()=>{let E=Yd(t,n.building?.code);return E&&Qi(E.building)?E:null},[t,n.building]),h=u?JSON.stringify(u):"";N.useEffect(()=>{if(!u){a(null);return}let E=!0;a(D=>({key:h,status:"loading",rooms:D?.rooms??[]}));let C=setTimeout(()=>{fh(u).then(D=>{E&&a({key:h,status:"ready",rooms:D})},()=>{E&&a({key:h,status:"error",rooms:[]})})},_g);return()=>{E=!1,clearTimeout(C)}},[h]);let d=Jd(c),m=N.useMemo(()=>{let E=Ci(t.trim());return E?Jl.filter(C=>Ci(C.name).includes(E)):Jl},[t]),y=t.trim().length>0,w=Me("title"),g=o?.key===h?o:null,p=E=>s(C=>{let D=new Set(C);return D.has(E)?D.delete(E):D.add(E),D}),A=E=>y||!r.has(E),R=(E,C)=>N.createElement("button",{type:"button",className:`poly-group-head ${A(E)?"open":""}`,"aria-expanded":A(E),onClick:()=>p(E)},N.createElement("span",{className:"poly-group-chevron"},ci(xg)),N.createElement("span",{className:"poly-group-name"},Me(`group.${E}`)),C!==void 0&&N.createElement("span",{className:"poly-group-count"},C)),M=()=>{let E=g?.rooms[0];E?cc(E,w):c[0]&&Di(c[0].code,w)};return N.createElement(N.Fragment,null,N.createElement("div",{className:"poly-bar poly-search-bar"},N.createElement("div",{className:"search-field-row"},N.createElement("div",{className:"search-field"},N.createElement("span",{className:"search-field-icon"},ci(yg)),N.createElement("input",{ref:l,className:"search-field-input",value:t,placeholder:Me("search.placeholder"),"aria-label":Me("search.placeholder"),onChange:E=>i(E.target.value),onKeyDown:E=>{E.key==="Enter"&&M(),E.key==="Escape"&&i("")}}),t&&N.createElement("button",{type:"button",className:"search-field-action",title:Me("search.clear"),"aria-label":Me("search.clear"),onClick:()=>i("")},ci(bh))))),N.createElement("div",{className:"poly-list poly-campus-list"},u&&N.createElement("div",{className:"poly-group","data-group":"rooms"},R("rooms",g?.status==="ready"?g.rooms.length:void 0),g?.status==="loading"&&!g.rooms.length&&N.createElement("div",{className:"poly-note"},Me("rooms.searching")),g?.status==="error"&&N.createElement("div",{className:"poly-note error"},Me("rooms.failed")),g?.status==="ready"&&!g.rooms.length&&N.createElement("div",{className:"poly-note"},Me("rooms.none")),g?.rooms.map(E=>N.createElement("button",{key:E.id,type:"button","data-room":E.id,className:`poly-building-row ${E.id===e.room?.id?"active":""}`,onClick:()=>cc(E,w)},N.createElement("span",{className:"poly-building-icon"},ci(vg)),N.createElement("span",{className:"poly-building-row-meta"},N.createElement("span",{className:"poly-building-row-code"},E.name),N.createElement("span",{className:"poly-building-row-sub"},[E.type,E.use].filter((C,D,v)=>C&&v.indexOf(C)===D).join(" \xB7 ")))))),d.map(({group:E,buildings:C})=>N.createElement("div",{key:E,className:"poly-group","data-group":E},R(E,C.length),A(E)&&C.map(D=>N.createElement("button",{key:D.code,type:"button","data-building":D.code,className:`poly-building-row ${D.code===n.building?.code?"active":""}`,onClick:()=>Di(D.code,w)},N.createElement("span",{className:"poly-building-icon"},ci(xh)),N.createElement("span",{className:"poly-building-row-meta"},N.createElement("span",{className:"poly-building-row-code"},D.code),N.createElement("span",{className:"poly-building-row-sub"},$n(D))))))),m.length>0&&N.createElement("div",{className:"poly-group","data-group":"zurich"},R("zurich",m.length),A("zurich")&&m.map(E=>N.createElement("button",{key:E.id,type:"button","data-place":E.id,className:"poly-building-row",onClick:()=>gh(E,w,n.view)},N.createElement("span",{className:"poly-building-icon"},ci(xh)),N.createElement("span",{className:"poly-building-row-meta"},N.createElement("span",{className:"poly-building-row-code"},E.name))))),!c.length&&!u&&!m.length&&N.createElement("div",{className:"poly-note"},Me("search.none")),N.createElement("div",{className:"poly-credit"},Me("credit"))),n.building&&N.createElement(wg,{building:n.building}))}var vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,Wc=1,tp=2;var Os=1,np=2,Ur=3,_i=0,on=1,Vt=2,Gn=0,zr=1,Zc=2,$c=3,Xc=4,ip=5;var Zi=100,rp=101,sp=102,op=103,ap=104,lp=200,cp=201,up=202,dp=203,qc=204,Yc=205,hp=206,pp=207,fp=208,mp=209,gp=210,yp=211,xp=212,bp=213,vp=214,Zo=0,$o=1,Xo=2,vr=3,qo=4,Yo=5,jo=6,Ko=7,Ea=0,_p=1,wp=2,Nn=0,jc=1,Kc=2,Jc=3,Qc=4,eu=5,tu=6,nu=7;var iu=300,wi=301,$i=302,Ta=303,Aa=304,Us=306,_r=1e3,Bn=1001,Jo=1002,Bt=1003,Mp=1004;var zs=1005;var Zt=1006,Ca=1007;var Mi=1008;var dn=1009,ru=1010,su=1011,Fr=1012,Ia=1013,Ln=1014,Dn=1015,kn=1016,Ra=1017,Pa=1018,Br=1020,ou=35902,au=35899,lu=1021,cu=1022,_n=1023,Hn=1026,Si=1027,uu=1028,Na=1029,Ei=1030,La=1031;var Da=1033,Fs=33776,Bs=33777,Hs=33778,Vs=33779,ka=35840,Oa=35841,Ua=35842,za=35843,Fa=36196,Ba=37492,Ha=37496,Va=37488,Ga=37489,Gs=37490,Wa=37491,Za=37808,$a=37809,Xa=37810,qa=37811,Ya=37812,ja=37813,Ka=37814,Ja=37815,Qa=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,sl=36492,ol=36494,al=36495,ll=36283,cl=36284,Ws=36285,ul=36286;var ds=2300,Qo=2301,Go=2302,Lc=2303,Dc=2400,kc=2401,Oc=2402;var Sp=3200;var dl=0,Ep=1,ii="",nn="srgb",hs="srgb-linear",ps="linear",dt="srgb";var Wo=7680,du=7681;var hu=517;var Tp=519,Ap=512,Cp=513,Ip=514,hl=515,Rp=516,Pp=517,pl=518,Np=519,pu=35044;var fu="300 es",Cn=2e3,wr=2001;function Mg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lp(){let n=fs("canvas");return n.style.display="block",n}var _h={},Mr=null;function ms(...n){let e="THREE."+n.shift();Mr?Mr("log",e,...n):console.log(e,...n)}function Dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=Dp(n);let e="THREE."+n.shift();if(Mr)Mr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Be(...n){n=Dp(n);let e="THREE."+n.shift();if(Mr)Mr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bi(...n){let e=n.join(" ");e in _h||(_h[e]=!0,Fe(...n))}function kp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Op={[Zo]:$o,[Xo]:jo,[qo]:Ko,[vr]:Yo,[$o]:Zo,[jo]:Xo,[Ko]:qo,[Yo]:vr},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,cs=Math.PI/180,Sr=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function mu(n,e){return(n%e+e)%e}function Eg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Tg(n,e,t){return n!==e?(t-n)/(e-n):0}function us(n,e,t){return(1-t)*n+t*e}function Ag(n,e,t,i){return us(n,e,1-Math.exp(-t*i))}function Cg(n,e=1){return e-Math.abs(mu(n,e*2)-e)}function Ig(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ng(n,e){return n+Math.random()*(e-n)}function Lg(n){return n*(.5-Math.random())}function Dg(n){n!==void 0&&(wh=n);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kg(n){return n*cs}function Og(n){return n*Sr}function Ug(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function zg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bg(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*y,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*y,a*c);break;case"ZYZ":n.set(l*y,l*m,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gu={DEG2RAD:cs,RAD2DEG:Sr,generateUUID:Qn,clamp:tt,euclideanModulo:mu,mapLinear:Eg,inverseLerp:Tg,lerp:us,damp:Ag,pingpong:Cg,smoothstep:Ig,smootherstep:Rg,randInt:Pg,randFloat:Ng,randFloatSpread:Lg,seededRandom:Dg,degToRad:kg,radToDeg:Og,isPowerOfTwo:Ug,ceilPowerOfTwo:zg,floorPowerOfTwo:Fg,setQuaternionFromProperEuler:Bg,normalize:pt,denormalize:An},_u=class _u{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_u.prototype.isVector2=!0;var ke=_u,sn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],m=s[o+1],y=s[o+2],w=s[o+3];if(h!==w||l!==d||c!==m||u!==y){let g=l*d+c*m+u*y+h*w;g<0&&(d=-d,m=-m,y=-y,w=-w,g=-g);let p=1-a;if(g<.9995){let A=Math.acos(g),R=Math.sin(A);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R,l=l*p+d*a,c=c*p+m*a,u=u*p+y*a,h=h*p+w*a}else{l=l*p+d*a,c=c*p+m*a,u=u*p+y*a,h=h*p+w*a;let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+u*h+l*m-c*d,e[t+1]=l*y+u*d+c*h-a*m,e[t+2]=c*y+u*m+a*d-l*h,e[t+3]=u*y-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*y,this._y=c*m*h-d*u*y,this._z=c*u*y+d*m*h,this._w=c*u*h-d*m*y;break;case"YXZ":this._x=d*u*h+c*m*y,this._y=c*m*h-d*u*y,this._z=c*u*y-d*m*h,this._w=c*u*h+d*m*y;break;case"ZXY":this._x=d*u*h-c*m*y,this._y=c*m*h+d*u*y,this._z=c*u*y+d*m*h,this._w=c*u*h-d*m*y;break;case"ZYX":this._x=d*u*h-c*m*y,this._y=c*m*h+d*u*y,this._z=c*u*y-d*m*h,this._w=c*u*h+d*m*y;break;case"YZX":this._x=d*u*h+c*m*y,this._y=c*m*h+d*u*y,this._z=c*u*y-d*m*h,this._w=c*u*h-d*m*y;break;case"XZY":this._x=d*u*h-c*m*y,this._y=c*m*h-d*u*y,this._z=c*u*y+d*m*h,this._w=c*u*h+d*m*y;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wu=class wu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wu.prototype.isVector3=!0;var G=wu,uc=new G,Mh=new sn,Mu=class Mu{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],y=i[8],w=r[0],g=r[3],p=r[6],A=r[1],R=r[4],M=r[7],E=r[2],C=r[5],D=r[8];return s[0]=o*w+a*A+l*E,s[3]=o*g+a*R+l*C,s[6]=o*p+a*M+l*D,s[1]=c*w+u*A+h*E,s[4]=c*g+u*R+h*C,s[7]=c*p+u*M+h*D,s[2]=d*w+m*A+y*E,s[5]=d*g+m*R+y*C,s[8]=d*p+m*M+y*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,y=t*h+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return e[0]=h*w,e[1]=(r*c-u*i)*w,e[2]=(a*i-r*o)*w,e[3]=d*w,e[4]=(u*t-r*l)*w,e[5]=(r*s-a*t)*w,e[6]=m*w,e[7]=(i*l-c*t)*w,e[8]=(o*t-i*s)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(e,t)),this}rotate(e){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;var $e=Mu,dc=new $e,Sh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hg(){let n={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hs]:{primaries:e,whitePoint:i,transfer:ps,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var st=Hg();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var nr,ea=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=fs("canvas")),nr.width=e.width,nr.height=e.height;let r=nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hc(r[o].image)):s.push(hc(r[o]))}else s=hc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ea.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Gg=0,pc=new G,$t=class n extends In{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bn,r=Bn,s=Zt,o=Mi,a=_n,l=dn,c=n.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Qn(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=iu;$t.DEFAULT_ANISOTROPY=1;var Su=class Su{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],y=l[9],w=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+w)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(m+1)/2,E=(p+1)/2,C=(u+d)/4,D=(h+w)/4,v=(y+g)/4;return R>M&&R>E?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=C/i,s=D/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=D/s,r=v/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-y)*(g-y)+(h-w)*(h-w)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-y)/A,this.y=(h-w)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Su.prototype.isVector4=!0;var Ct=Su,ta=class extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new $t(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends ta{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gs=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sa=class Sa{constructor(e,t,i,r,s,o,a,l,c,u,h,d,m,y,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,m,y,w,g)}set(e,t,i,r,s,o,a,l,c,u,h,d,m,y,w,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=y,p[11]=w,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*h,y=a*u,w=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+y*c,t[5]=d-w*c,t[9]=-a*l,t[2]=w-d*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,y=c*u,w=c*h;t[0]=d+w*a,t[4]=y*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=w+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,y=c*u,w=c*h;t[0]=d-w*a,t[4]=-o*h,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=w-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,y=a*u,w=a*h;t[0]=l*u,t[4]=y*c-m,t[8]=d*c+w,t[1]=l*h,t[5]=w*c+d,t[9]=m*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,y=a*l,w=a*c;t[0]=l*u,t[4]=w-d*h,t[8]=y*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+y,t[10]=d-w*h}else if(e.order==="XZY"){let d=o*l,m=o*c,y=a*l,w=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+w,t[5]=o*u,t[9]=m*h-y,t[2]=y*h-m,t[6]=a*u,t[10]=w*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Zg)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(i,pn),ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(i,pn)),ui.normalize(),yo.crossVectors(pn,ui),r[0]=ui.x,r[4]=yo.x,r[8]=pn.x,r[1]=ui.y,r[5]=yo.y,r[9]=pn.y,r[2]=ui.z,r[6]=yo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],y=i[2],w=i[6],g=i[10],p=i[14],A=i[3],R=i[7],M=i[11],E=i[15],C=r[0],D=r[4],v=r[8],S=r[12],L=r[1],U=r[5],H=r[9],Z=r[13],k=r[2],W=r[6],J=r[10],Q=r[14],ce=r[3],K=r[7],oe=r[11],ue=r[15];return s[0]=o*C+a*L+l*k+c*ce,s[4]=o*D+a*U+l*W+c*K,s[8]=o*v+a*H+l*J+c*oe,s[12]=o*S+a*Z+l*Q+c*ue,s[1]=u*C+h*L+d*k+m*ce,s[5]=u*D+h*U+d*W+m*K,s[9]=u*v+h*H+d*J+m*oe,s[13]=u*S+h*Z+d*Q+m*ue,s[2]=y*C+w*L+g*k+p*ce,s[6]=y*D+w*U+g*W+p*K,s[10]=y*v+w*H+g*J+p*oe,s[14]=y*S+w*Z+g*Q+p*ue,s[3]=A*C+R*L+M*k+E*ce,s[7]=A*D+R*U+M*W+E*K,s[11]=A*v+R*H+M*J+E*oe,s[15]=A*S+R*Z+M*Q+E*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],y=e[3],w=e[7],g=e[11],p=e[15],A=l*m-c*d,R=a*m-c*h,M=a*d-l*h,E=o*m-c*u,C=o*d-l*u,D=o*h-a*u;return t*(w*A-g*R+p*M)-i*(y*A-g*E+p*C)+r*(y*R-w*E+p*D)-s*(y*M-w*C+g*D)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],y=e[12],w=e[13],g=e[14],p=e[15],A=t*a-i*o,R=t*l-r*o,M=t*c-s*o,E=i*l-r*a,C=i*c-s*a,D=r*c-s*l,v=u*w-h*y,S=u*g-d*y,L=u*p-m*y,U=h*g-d*w,H=h*p-m*w,Z=d*p-m*g,k=A*Z-R*H+M*U+E*L-C*S+D*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/k;return e[0]=(a*Z-l*H+c*U)*W,e[1]=(r*H-i*Z-s*U)*W,e[2]=(w*D-g*C+p*E)*W,e[3]=(d*C-h*D-m*E)*W,e[4]=(l*L-o*Z-c*S)*W,e[5]=(t*Z-r*L+s*S)*W,e[6]=(g*M-y*D-p*R)*W,e[7]=(u*D-d*M+m*R)*W,e[8]=(o*H-a*L+c*v)*W,e[9]=(i*L-t*H-s*v)*W,e[10]=(y*C-w*M+p*A)*W,e[11]=(h*M-u*C-m*A)*W,e[12]=(a*S-o*U-l*v)*W,e[13]=(t*U-i*S+r*v)*W,e[14]=(w*R-y*E-g*A)*W,e[15]=(u*E-h*R+d*A)*W,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,y=s*h,w=o*u,g=o*h,p=a*h,A=l*c,R=l*u,M=l*h,E=i.x,C=i.y,D=i.z;return r[0]=(1-(w+p))*E,r[1]=(m+M)*E,r[2]=(y-R)*E,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+p))*C,r[6]=(g+A)*C,r[7]=0,r[8]=(y+R)*D,r[9]=(g-A)*D,r[10]=(1-(d+w))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ir.set(r[0],r[1],r[2]).length(),a=ir.set(r[4],r[5],r[6]).length(),l=ir.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Sn.copy(this);let c=1/o,u=1/a,h=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Cn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r),y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===Cn)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===wr)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Cn,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r),y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===Cn)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===wr)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sa.prototype.isMatrix4=!0;var xt=Sa,ir=new G,Sn=new xt,Wg=new G(0,0,0),Zg=new G(1,1,1),ui=new G,yo=new G,pn=new G,Th=new xt,Ah=new sn,ti=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$g=0,Ch=new G,rr=new sn,Xn=new xt,xo=new G,es=new G,Xg=new G,qg=new sn,Ih=new G(1,0,0),Rh=new G(0,1,0),Ph=new G(0,0,1),Nh={type:"added"},Yg={type:"removed"},sr={type:"childadded",child:null},fc={type:"childremoved",child:null},Ht=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new G,t=new ti,i=new sn,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(es,xo,this.up):Xn.lookAt(xo,es,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Xn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),sr.child=e,this.dispatchEvent(sr),sr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let w of e.hand.values()){let g=t.getJointPose(w,i),p=this._getHandJoint(c,w);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},bo={h:0,s:0,l:0};function mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=mu(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mc(o,s,e+1/3),this.g=mc(o,s,e),this.b=mc(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let i=Up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return st.workingToColorSpace(Kt.copy(this),e),Math.round(tt(Kt.r*255,0,255))*65536+Math.round(tt(Kt.g*255,0,255))*256+Math.round(tt(Kt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=nn){st.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(bo);let i=us(di.h,bo.h,t),r=us(di.s,bo.s,t),s=us(di.l,bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Pe;Pe.NAMES=Up;var ys=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xs=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new G,qn=new G,gc=new G,Yn=new G,or=new G,ar=new G,Lh=new G,yc=new G,xc=new G,bc=new G,vc=new Ct,_c=new Ct,wc=new Ct,Jn=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),qn.subVectors(i,t),gc.subVectors(e,t);let o=En.dot(En),a=En.dot(qn),l=En.dot(gc),c=qn.dot(qn),u=qn.dot(gc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,y=(o*u-a*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return vc.setScalar(0),_c.setScalar(0),wc.setScalar(0),vc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,i),wc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vc,s.x),o.addScaledVector(_c,s.y),o.addScaledVector(wc,s.z),o}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),qn.subVectors(e,t),En.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;or.subVectors(r,i),ar.subVectors(s,i),yc.subVectors(e,i);let l=or.dot(yc),c=ar.dot(yc);if(l<=0&&c<=0)return t.copy(i);xc.subVectors(e,r);let u=or.dot(xc),h=ar.dot(xc);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(or,o);bc.subVectors(e,s);let m=or.dot(bc),y=ar.dot(bc);if(y>=0&&m<=y)return t.copy(s);let w=m*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(ar,a);let g=u*y-m*h;if(g<=0&&h-u>=0&&m-y>=0)return Lh.subVectors(s,r),a=(h-u)/(h-u+(m-y)),t.copy(r).addScaledVector(Lh,a);let p=1/(g+w+d);return o=w*p,a=d*p,t.copy(i).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),_o.subVectors(this.max,ts),lr.subVectors(e.a,ts),cr.subVectors(e.b,ts),ur.subVectors(e.c,ts),hi.subVectors(cr,lr),pi.subVectors(ur,cr),ki.subVectors(lr,ur);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-ki.z,ki.y,hi.z,0,-hi.x,pi.z,0,-pi.x,ki.z,0,-ki.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-ki.y,ki.x,0];return!Mc(t,lr,cr,ur,_o)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,lr,cr,ur,_o))?!1:(wo.crossVectors(hi,pi),t=[wo.x,wo.y,wo.z],Mc(t,lr,cr,ur,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,vo=new mi,lr=new G,cr=new G,ur=new G,hi=new G,pi=new G,ki=new G,ts=new G,_o=new G,wo=new G,Oi=new G;function Mc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Oi.fromArray(n,s);let a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var kt=new G,Mo=new ke,Kg=0,ft=class extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vs=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var cn=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jg=new mi,ns=new G,Sc=new G,Hi=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);let t=ns.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Sc)),this.expandByPoint(ns.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qg=0,bn=new xt,Ec=new Ht,dr=new G,fn=new mi,is=new mi,Ft=new G,Rt=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?vs:bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,is.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,is.max),fn.expandByPoint(Ft)):(fn.expandByPoint(is.min),fn.expandByPoint(is.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),Ft.add(dr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new G,l[v]=new G;let c=new G,u=new G,h=new G,d=new ke,m=new ke,y=new ke,w=new G,g=new G;function p(v,S,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,L),d.fromBufferAttribute(s,v),m.fromBufferAttribute(s,S),y.fromBufferAttribute(s,L),u.sub(c),h.sub(c),m.sub(d),y.sub(d);let U=1/(m.x*y.y-y.x*m.y);isFinite(U)&&(w.copy(u).multiplyScalar(y.y).addScaledVector(h,-m.y).multiplyScalar(U),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(U),a[v].add(w),a[S].add(w),a[L].add(w),l[v].add(g),l[S].add(g),l[L].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let v=0,S=A.length;v<S;++v){let L=A[v],U=L.start,H=L.count;for(let Z=U,k=U+H;Z<k;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let R=new G,M=new G,E=new G,C=new G;function D(v){E.fromBufferAttribute(r,v),C.copy(E);let S=a[v];R.copy(S),R.sub(E.multiplyScalar(E.dot(S))).normalize(),M.crossVectors(C,S);let U=M.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,U)}for(let v=0,S=A.length;v<S;++v){let L=A[v],U=L.start,H=L.count;for(let Z=U,k=U+H;Z<k;Z+=3)D(e.getX(Z+0)),D(e.getX(Z+1)),D(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),w=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,y=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?m=l[w]*a.data.stride+a.offset:m=l[w]*u;for(let p=0;p<u;p++)d[y++]=c[m++]}return new ft(d,u,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pu,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},tn=new G,Vi=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ms("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ms("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tc=new G,ey=new G,ty=new $e,rn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Tc.subVectors(i,t).cross(ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Tc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ty.getNormalMatrix(e),r=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ny=0,Vn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=zr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ir=class extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,rs=new G,pr=new G,fr=new G,mr=new ke,ss=new ke,zp=new xt,So=new G,os=new G,Eo=new G,Dh=new ke,Ac=new ke,kh=new ke,_s=class extends Ht{constructor(e=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cr(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Vi(i,3,0,!1)),hr.setAttribute("uv",new Vi(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-fr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;To(So.set(-.5,-.5,0),fr,o,pr,r,s),To(os.set(.5,-.5,0),fr,o,pr,r,s),To(Eo.set(.5,.5,0),fr,o,pr,r,s),Dh.set(0,0),Ac.set(1,0),kh.set(1,1);let a=e.ray.intersectTriangle(So,os,Eo,!1,rs);if(a===null&&(To(os.set(-.5,.5,0),fr,o,pr,r,s),Ac.set(0,1),a=e.ray.intersectTriangle(So,Eo,os,!1,rs),a===null))return;let l=e.ray.origin.distanceTo(rs);l<e.near||l>e.far||t.push({distance:l,point:rs.clone(),uv:Jn.getInterpolation(rs,So,os,Eo,Dh,Ac,kh,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function To(n,e,t,i,r,s){mr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ss.x=s*mr.x-r*mr.y,ss.y=r*mr.x+s*mr.y):ss.copy(mr),n.copy(e),n.x+=ss.x,n.y+=ss.y,n.applyMatrix4(zp)}var Kn=new G,Cc=new G,Ao=new G,Co=new G,gi=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Co.copy(this.origin).sub(Cc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=Co.dot(this.direction),l=-Co.dot(Ao),c=Co.lengthSq(),u=Math.abs(1-o*o),h,d,m,y;if(u>0)if(h=o*l-a,d=o*a-l,y=s*u,h>=0)if(d>=-y)if(d<=y){let w=1/u;h*=w,d*=w,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cc).addScaledVector(Ao,d),m}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,m=e.z-o.z,y=t.x-o.x,w=t.y-o.y,g=t.z-o.z,p=i.x-o.x,A=i.y-o.y,R=i.z-o.z,M=Math.abs(l),E=Math.abs(c),C=Math.abs(u),D,v,S,L,U,H,Z,k,W,J,Q,ce;if(M>=E&&M>=C?(S=l,H=h,W=y,ce=p,l>=0?(D=c,v=u,L=d,U=m,Z=w,k=g,J=A,Q=R):(D=u,v=c,L=m,U=d,Z=g,k=w,J=R,Q=A)):E>=C?(S=c,H=d,W=w,ce=A,c>=0?(D=u,v=l,L=m,U=h,Z=g,k=y,J=R,Q=p):(D=l,v=u,L=h,U=m,Z=y,k=g,J=p,Q=R)):(S=u,H=m,W=g,ce=R,u>=0?(D=l,v=c,L=h,U=d,Z=y,k=w,J=p,Q=A):(D=c,v=l,L=d,U=h,Z=w,k=y,J=A,Q=p)),S===0)return null;let K=D/S,oe=v/S,ue=1/S,Oe=L-K*H,Ce=U-oe*H,lt=Z-K*W,Ke=k-oe*W,nt=J-K*ce,te=Q-oe*ce,ae=nt*Ke-te*lt,Se=Oe*te-Ce*nt,Ve=lt*Ce-Ke*Oe;if(r){if(ae<0||Se<0||Ve<0)return null}else if((ae<0||Se<0||Ve<0)&&(ae>0||Se>0||Ve>0))return null;let we=ae+Se+Ve;if(we===0)return null;let Xe=ue*(ae*H+Se*W+Ve*ce);return(we>0?Xe<0:Xe>0)?null:this.at(Xe/we,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oh=new xt,Ui=new gi,Io=new Hi,Uh=new G,Ro=new G,Po=new G,No=new G,Ic=new G,Lo=new G,zh=new G,Do=new G,Pt=class extends Ht{constructor(e=new Rt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Ic.fromBufferAttribute(h,e),o?Lo.addScaledVector(Ic,u):Lo.addScaledVector(Ic.sub(t),u))}t.add(Lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Io.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Io,Uh)===null||Ui.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Oh.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Oh),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=d.length;y<w;y++){let g=d[y],p=o[g.materialIndex],A=Math.max(g.start,m.start),R=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,E=R;M<E;M+=3){let C=a.getX(M),D=a.getX(M+1),v=a.getX(M+2);r=ko(this,p,e,i,c,u,h,C,D,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let y=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let g=y,p=w;g<p;g+=3){let A=a.getX(g),R=a.getX(g+1),M=a.getX(g+2);r=ko(this,o,e,i,c,u,h,A,R,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=d.length;y<w;y++){let g=d[y],p=o[g.materialIndex],A=Math.max(g.start,m.start),R=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,E=R;M<E;M+=3){let C=M,D=M+1,v=M+2;r=ko(this,p,e,i,c,u,h,C,D,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let y=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let g=y,p=w;g<p;g+=3){let A=g,R=g+1,M=g+2;r=ko(this,o,e,i,c,u,h,A,R,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function iy(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:n}}function ko(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ro),n.getVertexPosition(l,Po),n.getVertexPosition(c,No);let u=iy(n,e,t,i,Ro,Po,No,zh);if(u){let h=new G;Jn.getBarycoord(zh,Ro,Po,No,h),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,l,c,h,new ke)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,l,c,h,new ke)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};Jn.getNormal(Ro,Po,No,d.normal),u.face=d,u.barycoord=h}return u}var ia=class extends $t{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Bt,u=Bt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=new Hi,ry=new ke(.5,.5),Oo=new G,Rr=class{constructor(e=new rn,t=new rn,i=new rn,r=new rn,s=new rn,o=new rn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],m=s[7],y=s[8],w=s[9],g=s[10],p=s[11],A=s[12],R=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-o,m-u,p-y,E-A).normalize(),r[1].setComponents(c+o,m+u,p+y,E+A).normalize(),r[2].setComponents(c+a,m+h,p+w,E+R).normalize(),r[3].setComponents(c-a,m-h,p-w,E-R).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,p-g,E-M).normalize();else if(r[4].setComponents(c-l,m-d,p-g,E-M).normalize(),t===Cn)r[5].setComponents(c+l,m+d,p+g,E+M).normalize();else if(t===wr)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=ry.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pr=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ra=new G,sa=new G,Fh=new xt,as=new gi,Uo=new Hi,Rc=new G,Bh=new G,oa=class extends Ht{constructor(e=new Rt,t=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ra.fromBufferAttribute(t,r-1),sa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ra.distanceTo(sa);e.setAttribute("lineDistance",new cn(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Fh.copy(r).invert(),as.copy(e.ray).applyMatrix4(Fh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let m=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let w=m,g=y-1;w<g;w+=c){let p=u.getX(w),A=u.getX(w+1),R=zo(this,e,as,l,p,A,w);R&&t.push(R)}if(this.isLineLoop){let w=u.getX(y-1),g=u.getX(m),p=zo(this,e,as,l,w,g,y-1);p&&t.push(p)}}else{let m=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=m,g=y-1;w<g;w+=c){let p=zo(this,e,as,l,w,w+1,w);p&&t.push(p)}if(this.isLineLoop){let w=zo(this,e,as,l,y-1,m,y-1);w&&t.push(w)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zo(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(ra.fromBufferAttribute(a,r),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(ra,sa,Rc,Bh)>i)return;Rc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Rc);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Hh=new G,Vh=new G,ws=class extends oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Hh.fromBufferAttribute(t,r),Vh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hh.distanceTo(Vh);e.setAttribute("lineDistance",new cn(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ms=class extends $t{constructor(e=[],t=wi,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nr=class extends $t{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends $t{constructor(e,t,i=Ln,r,s,o,a=Bt,l=Bt,c,u=Hn,h=1){if(u!==Hn&&u!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},aa=class extends yi{constructor(e,t=Ln,i=wi,r,s,o=Bt,a=Bt,l,c=Hn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ss=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lr=class n extends Rt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function y(w,g,p,A,R,M,E,C,D,v,S){let L=M/D,U=E/v,H=M/2,Z=E/2,k=C/2,W=D+1,J=v+1,Q=0,ce=0,K=new G;for(let oe=0;oe<J;oe++){let ue=oe*U-Z;for(let Oe=0;Oe<W;Oe++){let Ce=Oe*L-H;K[w]=Ce*A,K[g]=ue*R,K[p]=k,c.push(K.x,K.y,K.z),K[w]=0,K[g]=0,K[p]=C>0?1:-1,u.push(K.x,K.y,K.z),h.push(Oe/D),h.push(1-oe/v),Q+=1}}for(let oe=0;oe<v;oe++)for(let ue=0;ue<D;ue++){let Oe=d+ue+W*oe,Ce=d+ue+W*(oe+1),lt=d+(ue+1)+W*(oe+1),Ke=d+(ue+1)+W*oe;l.push(Oe,Ce,Ke),l.push(Ce,lt,Ke),ce+=6}a.addGroup(m,ce,S),m+=ce,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sy(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Fp(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=uy(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let u=a,h=l;for(let d=t;d<r;d+=t){let m=n[d],y=n[d+1];m<a&&(a=m),y<l&&(l=y),m>u&&(u=m),y>h&&(h=y)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Es(s,o,t,a,l,c,0),o}function Fp(n,e,t,i,r){let s;if(r===_y(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Gh(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Gh(o/i|0,n[o],n[o+1],s);return s&&Dr(s,s.next)&&(As(s),s=s.next),s}function Gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Dr(t,t.next)||It(t.prev,t,t.next)===0)){if(As(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Es(n,e,t,i,r,s,o){if(!n)return;!o&&s&&my(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?ay(n,i,r,s):oy(n)){e.push(l.i,n.i,c.i),As(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ly(Gi(n),e),Es(n,e,t,i,r,s,2)):o===2&&cy(n,e,t,i,r,s):Es(Gi(n),e,t,i,r,s,1);break}}}function oy(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),m=Math.max(a,l,c),y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=d&&y.y>=h&&y.y<=m&&ls(r,a,s,l,o,c,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ay(n,e,t,i){let r=n.prev,s=n,o=n.next;if(It(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,m=Math.min(a,l,c),y=Math.min(u,h,d),w=Math.max(a,l,c),g=Math.max(u,h,d),p=Uc(m,y,e,t,i),A=Uc(w,g,e,t,i),R=n.prevZ,M=n.nextZ;for(;R&&R.z>=p&&M&&M.z<=A;){if(R.x>=m&&R.x<=w&&R.y>=y&&R.y<=g&&R!==r&&R!==o&&ls(a,u,l,h,c,d,R.x,R.y)&&It(R.prev,R,R.next)>=0||(R=R.prevZ,M.x>=m&&M.x<=w&&M.y>=y&&M.y<=g&&M!==r&&M!==o&&ls(a,u,l,h,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;R&&R.z>=p;){if(R.x>=m&&R.x<=w&&R.y>=y&&R.y<=g&&R!==r&&R!==o&&ls(a,u,l,h,c,d,R.x,R.y)&&It(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;M&&M.z<=A;){if(M.x>=m&&M.x<=w&&M.y>=y&&M.y<=g&&M!==r&&M!==o&&ls(a,u,l,h,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ly(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Dr(i,r)&&Hp(i,t,t.next,r)&&Ts(i,r)&&Ts(r,i)&&(e.push(i.i,t.i,r.i),As(t),As(t.next),t=n=r),t=t.next}while(t!==n);return Gi(t)}function cy(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xy(o,a)){let l=Vp(o,a);o=Gi(o,o.next),l=Gi(l,l.next),Es(o,e,t,i,r,s,0),Es(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function uy(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Fp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(yy(c))}r.sort(dy);for(let s=0;s<r.length;s++)t=hy(r[s],t);return t}function dy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function hy(n,e){let t=py(n,e);if(!t)return e;let i=Vp(t,n);return Gi(i,i.next),Gi(t,t.next)}function py(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(Dr(n,t))return t;do{if(Dr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Bp(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);Ts(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&fy(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function fy(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function my(n,e,t,i){let r=n;do r.z===0&&(r.z=Uc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,gy(r)}function gy(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Uc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function yy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bp(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ls(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Bp(n,e,t,i,r,s,o,a)}function xy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!by(n,e)&&(Ts(n,e)&&Ts(e,n)&&vy(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Dr(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Dr(n,e){return n.x===e.x&&n.y===e.y}function Hp(n,e,t,i){let r=Bo(It(n,e,t)),s=Bo(It(n,e,i)),o=Bo(It(t,i,n)),a=Bo(It(t,i,e));return!!(r!==s&&o!==a||r===0&&Fo(n,t,e)||s===0&&Fo(n,i,e)||o===0&&Fo(t,n,i)||a===0&&Fo(t,e,i))}function Fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bo(n){return n>0?1:n<0?-1:0}function by(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Hp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ts(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function vy(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vp(n,e){let t=zc(n.i,n.x,n.y),i=zc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Gh(n,e,t,i){let r=zc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function As(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _y(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Fc=class{static triangulate(e,t,i=2){return sy(e,t,i)}},Cs=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Wh(e),Zh(i,e);let o=e.length;t.forEach(Wh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Zh(i,t[l]);let a=Fc.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Wh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Is=class n extends Rt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,m=[],y=[],w=[],g=[];for(let p=0;p<u;p++){let A=p*d-o;for(let R=0;R<c;R++){let M=R*h-s;y.push(M,-A,0),w.push(0,0,1),g.push(R/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let R=A+c*p,M=A+c*(p+1),E=A+1+c*(p+1),C=A+1+c*p;m.push(R,M,C),m.push(M,E,C)}this.setIndex(m),this.setAttribute("position",new cn(y,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Xi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if($h(r))r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($h(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=Xi(n[t]);for(let r in i)e[r]=i[r]}return e}function $h(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Gp={clone:Xi,merge:Qt},My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ni=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ca=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends xi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case kc:s=e,a=2*t-i;break;case Oc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:o=e,l=2*i-t;break;case Oc:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-t)/(r-t),w=y*y,g=w*y,p=-d*g+2*d*w-d*y,A=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*y+1,R=(-1-m)*g+(1.5+m)*w+.5*y,M=m*g-m*w;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+A*o[c+E]+R*o[l+E]+M*o[h+E];return s}},ha=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},pa=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends xi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let y=(i-t)/(r-t),w=1-y;for(let g=0;g!==a;++g)s[g]=o[c+g]*w+o[l+g]*y;return s}let d=a*2,m=e-1;for(let y=0;y!==a;++y){let w=o[c+y],g=o[l+y],p=m*d+y*2,A=h[p],R=h[p+1],M=e*d+y*2,E=u[M],C=u[M+1],D=Ty(i,t,A,E,r);s[y]=Wp(D,w,R,C,g)}return s}};function Wp(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function Ey(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Ty(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Wp(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=Ey(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var gn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Pc(e.settings)&&(i.settings={inTangents:gr(e.settings.inTangents,Array),outTangents:gr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break;case Lc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Pc(this.settings)&&(Xh(this.settings.inTangents,e),Xh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Be("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Sg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Go,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,d=h-i,m=h+i;for(let y=0;y!==i;++y){let w=t[h+y];if(w!==t[d+y]||w!==t[m+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Pc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Xh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Qo;var bi=class extends gn{constructor(e,t,i){super(e,t,i)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ds;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};ma.prototype.ValueTypeName="color";var ga=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};ga.prototype.ValueTypeName="number";var ya=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Rs=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends gn{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ds;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};xa.prototype.ValueTypeName="vector";var ba=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],y=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zp=new ba,va=class{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ns=class extends Ps{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nc=new xt,qh=new G,Yh=new G,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(qh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Nc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===wr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ho=new G,Vo=new sn,Fn=new G,Ls=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Vo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ho,Vo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new G,jh=new ke,Kh=new ke,Jt=class extends Ls{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Kh),t.subVectors(Kh,jh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var kr=class extends Ls{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bc=class extends _a{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var yr=-90,xr=1,wa=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(yr,xr,e,t);r.layers=this.layers,this.add(r);let s=new Jt(yr,xr,e,t);s.layers=this.layers,this.add(s);let o=new Jt(yr,xr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(yr,xr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(yr,xr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(yr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Ma=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xu="\\[\\]\\.:\\/",Ay=new RegExp("["+xu+"]","g"),bu="[^"+xu+"]",Cy="[^"+xu.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",bu),Ry=/(WCOD+)?/.source.replace("WCOD",Cy),Py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),Ly=new RegExp("^"+Iy+Ry+Py+Ny+"$"),Dy=["material","materials","bones","map"],Hc=class{constructor(e,t,i){let r=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ay,"")}static parseTrackName(e){let t=Ly.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Dy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Hc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GS=new Float32Array(1);var Jh=new xt,Wi=class{constructor(e,t,i=0,r=1/0){this.ray=new gi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,i=[]){return Vc(e,this,i,t),i.sort(Qh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vc(e[r],this,i,t);return i.sort(Qh),i}};function Qh(n,e){return n.distance-e.distance}function Vc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Vc(s[o],e,t,!0)}}var Or=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Eu=class Eu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Eu.prototype.isMatrix2=!0;var Gc=Eu;var ks=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vu(n,e,t,i){let r=ky(i);switch(t){case lu:return n*e;case uu:return n*e/r.components*r.byteLength;case Na:return n*e/r.components*r.byteLength;case Ei:return n*e*2/r.components*r.byteLength;case La:return n*e*2/r.components*r.byteLength;case cu:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Da:return n*e*4/r.components*r.byteLength;case Fs:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(e,8)/4;case ka:case Ua:return Math.max(n,8)*Math.max(e,8)/2;case Fa:case Ba:case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Gs:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sl:case ol:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ws:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ky(n){switch(n){case dn:case ru:return{byteLength:1,components:1};case Fr:case su:case kn:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case Ln:case Ia:case Dn:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Uy(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<h.length;m++){let y=h[d],w=h[m];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++d,h[d]=w)}h.length=d+1;for(let m=0,y=h.length;m<y;m++){let w=h[m];n.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
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
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$y=`#ifdef USE_BATCHING
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
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,eb=`#define LAMBERT
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define MATCAP
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
}`,ib=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,sb=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,lb=`#define STANDARD
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
}`,cb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,db=`#define TOON
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
}`,hb=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,mb=`uniform vec3 color;
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
}`,gb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:zy,alphahash_pars_fragment:Fy,alphamap_fragment:By,alphamap_pars_fragment:Hy,alphatest_fragment:Vy,alphatest_pars_fragment:Gy,aomap_fragment:Wy,aomap_pars_fragment:Zy,batching_pars_vertex:$y,batching_vertex:Xy,begin_vertex:qy,beginnormal_vertex:Yy,bsdfs:jy,iridescence_fragment:Ky,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:r0,color_pars_vertex:s0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:h0,emissivemap_pars_fragment:p0,colorspace_fragment:f0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:y0,envmap_pars_fragment:x0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:R0,envmap_vertex:v0,fog_vertex:_0,fog_pars_vertex:w0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:T0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:C0,lights_pars_begin:I0,lights_toon_fragment:P0,lights_toon_pars_fragment:N0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:k0,lights_physical_pars_fragment:O0,lights_fragment_begin:U0,lights_fragment_maps:z0,lights_fragment_end:F0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:Z0,map_pars_fragment:$0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:j0,morphinstance_vertex:K0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:sx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:hx,packing:px,premultiplied_alpha_fragment:fx,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:yx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:vx,shadowmap_pars_vertex:_x,shadowmap_vertex:wx,shadowmask_pars_fragment:Mx,skinbase_vertex:Sx,skinning_pars_vertex:Ex,skinning_vertex:Tx,skinnormal_vertex:Ax,specularmap_fragment:Cx,specularmap_pars_fragment:Ix,tonemapping_fragment:Rx,tonemapping_pars_fragment:Px,transmission_fragment:Nx,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:kx,uv_vertex:Ox,worldpos_vertex:Ux,background_vert:zx,background_frag:Fx,backgroundCube_vert:Bx,backgroundCube_frag:Hx,cube_vert:Vx,cube_frag:Gx,depth_vert:Wx,depth_frag:Zx,distance_vert:$x,distance_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:jx,linedashed_frag:Kx,meshbasic_vert:Jx,meshbasic_frag:Qx,meshlambert_vert:eb,meshlambert_frag:tb,meshmatcap_vert:nb,meshmatcap_frag:ib,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:ab,meshphysical_vert:lb,meshphysical_frag:cb,meshtoon_vert:ub,meshtoon_frag:db,points_vert:hb,points_frag:pb,shadow_vert:fb,shadow_frag:mb,sprite_vert:gb,sprite_frag:yb},ye={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Zn={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Zn.physical={uniforms:Qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var fl={r:0,b:0,g:0},xb=new xt,mf=new $e;mf.set(-1,0,0,0,1,0,0,0,1);function bb(n,e,t,i,r,s){let o=new Pe(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function m(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let M=A.backgroundBlurriness>0;R=e.get(R,M)}return R}function y(A){let R=!1,M=m(A);M===null?g(o,a):M&&M.isColor&&(g(M,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(A,R){let M=m(R);M&&(M.isCubeTexture||M.mapping===Us)?(c===void 0&&(c=new Pt(new Lr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Xi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mf),c.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,(u!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pt(new Is(2,2),new mn({name:"BackgroundMaterial",uniforms:Xi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,R){A.getRGB(fl,yu(n)),t.buffers.color.setClear(fl.r,fl.g,fl.b,R,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,g(o,a)},render:y,addToRenderList:w,dispose:p}}function vb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(U,H,Z,k,W){let J=!1,Q=h(U,k,Z,H);s!==Q&&(s=Q,c(s.object)),J=m(U,k,Z,W),J&&y(U,k,Z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(U,H,Z,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,H,Z,k){let W=k.wireframe===!0,J=i[H.id];J===void 0&&(J={},i[H.id]=J);let Q=U.isInstancedMesh===!0?U.id:0,ce=J[Q];ce===void 0&&(ce={},J[Q]=ce);let K=ce[Z.id];K===void 0&&(K={},ce[Z.id]=K);let oe=K[W];return oe===void 0&&(oe=d(l()),K[W]=oe),oe}function d(U){let H=[],Z=[],k=[];for(let W=0;W<t;W++)H[W]=0,Z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:k,object:U,attributes:{},index:null}}function m(U,H,Z,k){let W=s.attributes,J=H.attributes,Q=0,ce=Z.getAttributes();for(let K in ce)if(ce[K].location>=0){let ue=W[K],Oe=J[K];if(Oe===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Oe=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Oe=U.instanceColor)),ue===void 0||ue.attribute!==Oe||Oe&&ue.data!==Oe.data)return!0;Q++}return s.attributesNum!==Q||s.index!==k}function y(U,H,Z,k){let W={},J=H.attributes,Q=0,ce=Z.getAttributes();for(let K in ce)if(ce[K].location>=0){let ue=J[K];ue===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor));let Oe={};Oe.attribute=ue,ue&&ue.data&&(Oe.data=ue.data),W[K]=Oe,Q++}s.attributes=W,s.attributesNum=Q,s.index=k}function w(){let U=s.newAttributes;for(let H=0,Z=U.length;H<Z;H++)U[H]=0}function g(U){p(U,0)}function p(U,H){let Z=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;Z[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),W[U]!==H&&(n.vertexAttribDivisor(U,H),W[U]=H)}function A(){let U=s.newAttributes,H=s.enabledAttributes;for(let Z=0,k=H.length;Z<k;Z++)H[Z]!==U[Z]&&(n.disableVertexAttribArray(Z),H[Z]=0)}function R(U,H,Z,k,W,J,Q){Q===!0?n.vertexAttribIPointer(U,H,Z,W,J):n.vertexAttribPointer(U,H,Z,k,W,J)}function M(U,H,Z,k){w();let W=k.attributes,J=Z.getAttributes(),Q=H.defaultAttributeValues;for(let ce in J){let K=J[ce];if(K.location>=0){let oe=W[ce];if(oe===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){let ue=oe.normalized,Oe=oe.itemSize,Ce=e.get(oe);if(Ce===void 0)continue;let lt=Ce.buffer,Ke=Ce.type,nt=Ce.bytesPerElement,te=Ke===n.INT||Ke===n.UNSIGNED_INT||oe.gpuType===Ia;if(oe.isInterleavedBufferAttribute){let ae=oe.data,Se=ae.stride,Ve=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let we=0;we<K.locationSize;we++)p(K.location+we,ae.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let we=0;we<K.locationSize;we++)g(K.location+we);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let we=0;we<K.locationSize;we++)R(K.location+we,Oe/K.locationSize,Ke,ue,Se*nt,(Ve+Oe/K.locationSize*we)*nt,te)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae,oe.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let ae=0;ae<K.locationSize;ae++)R(K.location+ae,Oe/K.locationSize,Ke,ue,Oe*nt,Oe/K.locationSize*ae*nt,te)}}else if(Q!==void 0){let ue=Q[ce];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(K.location,ue);break;case 3:n.vertexAttrib3fv(K.location,ue);break;case 4:n.vertexAttrib4fv(K.location,ue);break;default:n.vertexAttrib1fv(K.location,ue)}}}}A()}function E(){S();for(let U in i){let H=i[U];for(let Z in H){let k=H[Z];for(let W in k){let J=k[W];for(let Q in J)u(J[Q].object),delete J[Q];delete k[W]}}delete i[U]}}function C(U){if(i[U.id]===void 0)return;let H=i[U.id];for(let Z in H){let k=H[Z];for(let W in k){let J=k[W];for(let Q in J)u(J[Q].object),delete J[Q];delete k[W]}}delete i[U.id]}function D(U){for(let H in i){let Z=i[H];for(let k in Z){let W=Z[k];if(W[U.id]===void 0)continue;let J=W[U.id];for(let Q in J)u(J[Q].object),delete J[Q];delete W[U.id]}}}function v(U){for(let H in i){let Z=i[H],k=U.isInstancedMesh===!0?U.id:0,W=Z[k];if(W!==void 0){for(let J in W){let Q=W[J];for(let ce in Q)u(Q[ce].object),delete Q[ce];delete W[J]}delete Z[k],Object.keys(Z).length===0&&delete i[H]}}}function S(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:g,disableUnusedAttributes:A}}function _b(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function wb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==_n&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let v=D===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==dn&&D!==Dn&&!v&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:C}}function Mb(n){let e=this,t=null,i=0,r=!1,s=!1,o=new rn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let y=h.clippingPlanes,w=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||y===null||y.length===0||s&&!g)s?u(null):c();else{let A=s?0:i,R=A*4,M=p.clippingState||null;l.value=M,M=u(y,d,R,m);for(let E=0;E!==R;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,y){let w=h!==null?h.length:0,g=null;if(w!==0){if(g=l.value,y!==!0||g===null){let p=m+w*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,M=m;R!==w;++R,M+=4)o.copy(h[R]).applyMatrix4(A,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}var Vr=4,Sb=6,Eb=20,Tb=256,Zs=new kr,$p=new Pe,Tu=null,Au=0,Cu=0,Iu=!1,Ab=new G,qi=new G,gl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Ab}=s;Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,Cu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:kn,format:_n,colorSpace:hs,depthBuffer:!1},r=Xp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cb(s)),this._blurMaterial=Rb(s,e,t),this._ggxMaterial=Ib(s,e,t)}return r}_compileMaterial(e){let t=new Pt(new Rt,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r,s){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor($p),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Lr,new Rn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,g=w.material,p=!1,A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,p=!0):(g.color.copy($p),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));let E=this._cubeSize;Hr(r,M*E,R>2?E:0,E,E),h.setRenderTarget(r),p&&h.render(w,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===wi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,m=h*d,{_lodMax:y}=this,w=this._sizeLods[i],g=3*w*(i>y-Vr?i-y+Vr:0),p=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-t,Hr(s,g,p,3*w,2*w),r.setRenderTarget(s),r.render(a,Zs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,Hr(e,g,p,3*w,2*w),r.setRenderTarget(e),r.render(a,Zs)}_blur(e,t,i,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Vr?r-this._lodMax+Vr:0),d=4*(this._cubeSize-u);Hr(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(l,Zs)}};function Cb(n){let e=[],t=[],i=n,r=n-Vr+1+Sb;for(let s=0;s<r;s++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,m=3,y=new Float32Array(m*d*h),w=new Float32Array(m*d*h);for(let p=0;p<h;p++){let A=p%3*2/3-1,R=p>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(M,m*d*p);for(let E=0;E<d;E++){let C=u[E*2]*2-1,D=u[E*2+1]*2-1;p===0?qi.set(1,D,C):p===1?qi.set(-C,1,-D):p===2?qi.set(-C,D,1):p===3?qi.set(-1,D,-C):p===4?qi.set(-C,-1,D):qi.set(C,D,-1),qi.toArray(w,(p*d+E)*m)}}let g=new Rt;g.setAttribute("position",new ft(y,m)),g.setAttribute("outputDirection",new ft(w,m)),t.push(new Pt(g,null)),i>Vr&&i--}return{lodMeshes:t,sizeLods:e}}function Xp(n,e,t){let i=new un(n,e,t);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ib(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rb(n,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function qp(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Yp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ms(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Gn});s.uniforms.tEquirect.value=t;let o=new Pt(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Zt),new wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function Pb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===Ta||m===Aa)if(e.has(d)){let y=e.get(d).texture;return a(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let w=new yl(y.height);return w.fromEquirectangularTexture(n,d),e.set(d,w),d.addEventListener("dispose",c),a(w.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let m=d.mapping,y=m===Ta||m===Aa,w=m===wi||m===$i;if(y||w){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new gl(n)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let A=d.image;return y&&A&&A.height>0||w&&A&&l(A)?(i===null&&(i=new gl(n)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,m){return m===Ta?d.mapping=wi:m===Aa&&(d.mapping=$i),d}function l(d){let m=0,y=6;for(let w=0;w<y;w++)d[w]!==void 0&&m++;return m===y}function c(d){let m=d.target;m.removeEventListener("dispose",c);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function u(d){let m=d.target;m.removeEventListener("dispose",u);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Nb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Bi("WebGLRenderer: "+i+" extension not supported."),r}}}function Lb(n,e,t,i){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(h){let d=[],m=h.index,y=h.attributes.position,w=0;if(y===void 0)return;if(m!==null){let A=m.array;w=m.version;for(let R=0,M=A.length;R<M;R+=3){let E=A[R+0],C=A[R+1],D=A[R+2];d.push(E,C,C,D,D,E)}}else{let A=y.array;w=y.version;for(let R=0,M=A.length/3-1;R<M;R+=3){let E=R+0,C=R+1,D=R+2;d.push(E,C,C,D,D,E)}}let g=new(y.count>=65535?vs:bs)(d,1);g.version=w;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Db(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*o,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let w=0;for(let g=0;g<m;g++)w+=d[g];t.update(w,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ob(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],R=0;m===!0&&(R=1),y===!0&&(R=2),w===!0&&(R=3);let M=a.attributes.position.count*R,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*E*4*h),D=new gs(C,M,E,h);D.type=Dn,D.needsUpdate=!0;let v=R*4;for(let L=0;L<h;L++){let U=g[L],H=p[L],Z=A[L],k=M*E*4*L;for(let W=0;W<U.count;W++){let J=W*v;m===!0&&(r.fromBufferAttribute(U,W),C[k+J+0]=r.x,C[k+J+1]=r.y,C[k+J+2]=r.z,C[k+J+3]=0),y===!0&&(r.fromBufferAttribute(H,W),C[k+J+4]=r.x,C[k+J+5]=r.y,C[k+J+6]=r.z,C[k+J+7]=0),w===!0&&(r.fromBufferAttribute(Z,W),C[k+J+8]=r.x,C[k+J+9]=r.y,C[k+J+10]=r.z,C[k+J+11]=Z.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new ke(M,E)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Ub(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return d}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var zb={[jc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[tu]:"AGX_TONE_MAPPING",[nu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function Fb(n,e,t,i,r,s){let o=new un(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Rt;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(c,u),d=new kr(-1,1,1,-1,0,1),m=null,y=null,w=!1,g,p=null,A=[],R=!1;this.setSize=function(M,E){o.setSize(M,E),a!==null&&a.setSize(M,E),l!==null&&l.setSize(M,E);for(let C=0;C<A.length;C++){let D=A[C];D.setSize&&D.setSize(M,E)}},this.setEffects=function(M){A=M,R=A.length>0&&A[0].isRenderPass===!0;let E=o.width,C=o.height;A.length>0&&a===null&&(a=new un(E,C,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new un(E,C,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<A.length;D++){let v=A[D];v.setSize&&v.setSize(E,C)}},this.begin=function(M,E){if(w||M.toneMapping===Nn&&A.length===0)return!1;if(p=E,E!==null){let C=E.width,D=E.height;(o.width!==C||o.height!==D)&&this.setSize(C,D)}return R===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Nn,!0},this.hasRenderPass=function(){return R},this.end=function(M,E){M.toneMapping=g,w=!0;let C=o,D=a;for(let v=0;v<A.length;v++){let S=A[v];S.enabled!==!1&&(S.render(M,D,C,E),S.needsSwap!==!1&&(C=D,D=D===a?l:a))}if(m!==M.outputColorSpace||y!==M.toneMapping){m=M.outputColorSpace,y=M.toneMapping,u.defines={},st.getTransfer(m)===dt&&(u.defines.SRGB_TRANSFER="");let v=zb[y];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,M.setRenderTarget(p),M.render(h,d),p=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var gf=new $t,Nu=new yi(1,1),yf=new gs,xf=new na,bf=new Ms,jp=[],Kp=[],Jp=new Float32Array(16),Qp=new Float32Array(9),ef=new Float32Array(4);function Wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=jp[r];if(s===void 0&&(s=new Float32Array(r),jp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function Vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Wb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;ef.set(i),n.uniformMatrix2fv(this.addr,!1,ef),Ut(t,i)}}function Zb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;Qp.set(i),n.uniformMatrix3fv(this.addr,!1,Qp),Ut(t,i)}}function $b(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;Jp.set(i),n.uniformMatrix4fv(this.addr,!1,Jp),Ut(t,i)}}function Xb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function jb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Kb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Qb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function tv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Nu.compareFunction=t.isReversedDepthBuffer()?pl:hl,s=Nu):s=gf,t.setTexture2D(e||s,r)}function nv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xf,r)}function iv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bf,r)}function rv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yf,r)}function sv(n){switch(n){case 5126:return Bb;case 35664:return Hb;case 35665:return Vb;case 35666:return Gb;case 35674:return Wb;case 35675:return Zb;case 35676:return $b;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Kb;case 36294:return Jb;case 36295:return Qb;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function ov(n,e){n.uniform1fv(this.addr,e)}function av(n,e){let t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function lv(n,e){let t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function cv(n,e){let t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function uv(n,e){let t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dv(n,e){let t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hv(n,e){let t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pv(n,e){n.uniform1iv(this.addr,e)}function fv(n,e){n.uniform2iv(this.addr,e)}function mv(n,e){n.uniform3iv(this.addr,e)}function gv(n,e){n.uniform4iv(this.addr,e)}function yv(n,e){n.uniform1uiv(this.addr,e)}function xv(n,e){n.uniform2uiv(this.addr,e)}function bv(n,e){n.uniform3uiv(this.addr,e)}function vv(n,e){n.uniform4uiv(this.addr,e)}function _v(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Nu:o=gf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function wv(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xf,s[o])}function Mv(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bf,s[o])}function Sv(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yf,s[o])}function Ev(n){switch(n){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return uv;case 35675:return dv;case 35676:return hv;case 5124:case 35670:return pv;case 35667:case 35671:return fv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return yv;case 36294:return xv;case 36295:return bv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}var Lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sv(t.type)}},Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Ru=/(\w+)(\])?(\[|\.)?/g;function tf(n,e){n.seq.push(e),n.map[e.id]=e}function Tv(n,e,t){let i=n.name,r=i.length;for(Ru.lastIndex=0;;){let s=Ru.exec(i),o=Ru.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tf(t,c===void 0?new Lu(a,n,e):new Du(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ku(a),tf(t,h)),t=h}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Tv(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function nf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Av=37297,Cv=0;function Iv(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var rf=new $e;function Rv(n){st._getMatrix(rf,st.workingColorSpace,n);let e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ps:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Iv(n.getShaderSource(e),a)}else return s}function Pv(n,e){let t=Rv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Nv={[jc]:"Linear",[Kc]:"Reinhard",[Jc]:"Cineon",[Qc]:"ACESFilmic",[tu]:"AgX",[nu]:"Neutral",[eu]:"Custom"};function Lv(n,e){let t=Nv[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ml=new G;function Dv(){st.getLuminanceCoefficients(ml);let n=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Ov(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Uv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xs(n){return n!==""}function of(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(n){return n.replace(zv,Bv)}var Fv=new Map;function Bv(n,e){let t=et[e];if(t===void 0){let i=Fv.get(e);if(i!==void 0)t=et[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ou(t)}var Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(n){return n.replace(Hv,Vv)}function Vv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Gv={[Os]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function Wv(n){return Gv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[wi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function $v(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xv={[$i]:"ENVMAP_MODE_REFRACTION"};function qv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yv={[Ea]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[wp]:"ENVMAP_BLENDING_ADD"};function jv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yv[n.combine]||"ENVMAP_BLENDING_NONE"}function Kv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Jv(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Wv(t),c=$v(t),u=qv(t),h=jv(t),d=Kv(t),m=kv(t),y=Ov(s),w=r.createProgram(),g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),Dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Ou(o),o=of(o,t),o=af(o,t),a=Ou(a),a=of(a,t),a=af(a,t),o=lf(o),a=lf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=A+g+o,M=A+p+a,E=nf(r,r.VERTEX_SHADER,R),C=nf(r,r.FRAGMENT_SHADER,M);r.attachShader(w,E),r.attachShader(w,C),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function D(U){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(w)||"",Z=r.getShaderInfoLog(E)||"",k=r.getShaderInfoLog(C)||"",W=H.trim(),J=Z.trim(),Q=k.trim(),ce=!0,K=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,w,E,C);else{let oe=sf(r,E,"vertex"),ue=sf(r,C,"fragment");Be("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+oe+`
`+ue)}else W!==""?Fe("WebGLProgram: Program Info Log:",W):(J===""||Q==="")&&(K=!1);K&&(U.diagnostics={runnable:ce,programLog:W,vertexShader:{log:J,prefix:g},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(E),r.deleteShader(C),v=new Gr(r,w),S=Uv(r,w)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,Av)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=E,this.fragmentShader=C,this}var Qv=0,Uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zu(e),t.set(e,i)),i}},zu=class{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}};function e_(n){return n===Ei||n===Gs||n===Ws}function t_(n,e,t,i,r,s){let o=new Tr,a=new Uu,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function w(v,S,L,U,H,Z){let k=U.fog,W=H.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ce=e.get(v.envMap||J,Q),K=ce&&ce.mapping===Us?ce.image.height:null,oe=m[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=ue!==void 0?ue.length:0,Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let lt,Ke,nt,te;if(oe){let wt=Zn[oe];lt=wt.vertexShader,Ke=wt.fragmentShader}else{lt=v.vertexShader,Ke=v.fragmentShader;let wt=a.getVertexShaderStage(v),ct=a.getFragmentShaderStage(v);a.update(v,wt,ct),nt=wt.id,te=ct.id}let ae=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,Xe=!!v.map,At=!!v.matcap,Ge=!!ce,rt=!!v.aoMap,at=!!v.lightMap,je=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,P=!!v.displacementMap,B=!!v.emissiveMap,ie=!!v.metalnessMap,T=!!v.roughnessMap,x=v.anisotropy>0,$=v.clearcoat>0,X=v.dispersion>0,b=v.retroreflectivity>0,f=v.iridescence>0,I=v.sheen>0,O=v.transmission>0,V=x&&!!v.anisotropyMap,re=$&&!!v.clearcoatMap,le=$&&!!v.clearcoatNormalMap,ee=$&&!!v.clearcoatRoughnessMap,ne=f&&!!v.iridescenceMap,de=f&&!!v.iridescenceThicknessMap,ve=I&&!!v.sheenColorMap,pe=I&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Ae=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ye=O&&!!v.transmissionMap,F=O&&!!v.thicknessMap,me=!!v.gradientMap,se=!!v.alphaMap,ge=v.alphaTest>0,_e=!!v.alphaHash,he=!!v.extensions,ze=Nn;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Ne={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:Ke,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:At,envMap:Ge,envMapMode:Ge&&ce.mapping,envMapCubeUVHeight:K,aoMap:rt,lightMap:at,bumpMap:je,normalMap:gt,displacementMap:P,emissiveMap:B,normalMapObjectSpace:gt&&v.normalMapType===Ep,normalMapTangentSpace:gt&&v.normalMapType===dl,packedNormalMap:gt&&v.normalMapType===dl&&e_(v.normalMap.format),metalnessMap:ie,roughnessMap:T,anisotropy:x,anisotropyMap:V,clearcoat:$,clearcoatMap:re,clearcoatNormalMap:le,clearcoatRoughnessMap:ee,dispersion:X,retroreflection:b,iridescence:f,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:I,sheenColorMap:ve,sheenRoughnessMap:pe,specularMap:fe,specularColorMap:Ae,specularIntensityMap:Le,transmission:O,transmissionMap:Ye,thicknessMap:F,gradientMap:me,opaque:v.transparent===!1&&v.blending===zr&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:ge,alphaHash:_e,combine:v.combine,mapUv:Xe&&y(v.map.channel),aoMapUv:rt&&y(v.aoMap.channel),lightMapUv:at&&y(v.lightMap.channel),bumpMapUv:je&&y(v.bumpMap.channel),normalMapUv:gt&&y(v.normalMap.channel),displacementMapUv:P&&y(v.displacementMap.channel),emissiveMapUv:B&&y(v.emissiveMap.channel),metalnessMapUv:ie&&y(v.metalnessMap.channel),roughnessMapUv:T&&y(v.roughnessMap.channel),anisotropyMapUv:V&&y(v.anisotropyMap.channel),clearcoatMapUv:re&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(v.sheenRoughnessMap.channel),specularMapUv:fe&&y(v.specularMap.channel),specularColorMapUv:Ae&&y(v.specularColorMap.channel),specularIntensityMapUv:Le&&y(v.specularIntensityMap.channel),transmissionMapUv:Ye&&y(v.transmissionMap.channel),thicknessMapUv:F&&y(v.thicknessMap.channel),alphaMapUv:se&&y(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(gt||x),vertexNormals:!!W.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(Xe||se),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:B&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(S,v),A(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function A(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let S=m[v.type],L;if(S){let U=Zn[S];L=Gp.clone(U.uniforms)}else L=v.uniforms;return L}function M(v,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new Jv(n,S,v,r),c.push(L),u.set(S,L)),L}function E(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){a.remove(v)}function D(){a.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:D}}function n_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function i_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,y,w,g,p){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:m,material:y,materialVariant:o(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:p},n[e]=A):(A.id=d.id,A.object=d,A.geometry=m,A.material=y,A.materialVariant=o(d),A.groupOrder=w,A.renderOrder=d.renderOrder,A.z=g,A.group=p),e++,A}function l(d,m,y,w,g,p,A){A.reversedDepth===!0&&(g=-g);let R=a(d,m,y,w,g,p);y.transmission>0?i.push(R):y.transparent===!0?r.push(R):t.push(R)}function c(d,m,y,w,g,p){let A=a(d,m,y,w,g,p);y.transmission>0?i.unshift(A):y.transparent===!0?r.unshift(A):t.unshift(A)}function u(d,m){t.length>1&&t.sort(d||i_),i.length>1&&i.sort(m||uf),r.length>1&&r.sort(m||uf)}function h(){for(let d=e,m=n.length;d<m;d++){let y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function r_(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new df,n.set(i,[o])):r>=s.length?(o=new df,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function s_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Pe};break;case"SpotLight":t={position:new G,direction:new G,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function o_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var a_=0;function l_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c_(n){let e=new s_,t=o_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let r=new G,s=new xt,o=new xt;function a(c){let u=0,h=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,y=0,w=0,g=0,p=0,A=0,R=0,M=0,E=0,C=0,D=0,v=0,S=0,L=0;c.sort(l_);for(let H=0,Z=c.length;H<Z;H++){let k=c[H],W=k.color,J=k.intensity,Q=k.distance,ce=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ei?ce=k.shadow.map.texture:ce=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=W.r*J,h+=W.g*J,d+=W.b*J;else if(k.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(k.sh.coefficients[K],J);L++}else if(k.isSunLight){let K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let oe=k.shadow,ue=t.get(k);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),i.sunShadow[y]=ue,i.sunShadowMap[y]=ce;let Oe=oe.getViewportCount();for(let Ce=0;Ce<Oe;Ce++)i.sunShadowMatrix[w+Ce]=oe.getMatrix(Ce),i.sunShadowCascade[w+Ce]=oe._cascadeData[Ce];w+=Oe,y++}i.sun[m]=K,m++}else if(k.isDirectionalLight){let K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let oe=k.shadow,ue=t.get(k);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=k.shadow.matrix,E++}i.directional[g]=K,g++}else if(k.isSpotLight){let K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(W).multiplyScalar(J),K.distance=Q,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,i.spot[A]=K;let oe=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,oe.updateMatrices(k),k.castShadow&&S++),i.spotLightMatrix[A]=oe.matrix,k.castShadow){let ue=t.get(k);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.spotShadow[A]=ue,i.spotShadowMap[A]=ce,D++}A++}else if(k.isRectAreaLight){let K=e.get(k);K.color.copy(W).multiplyScalar(J),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),i.rectArea[R]=K,R++}else if(k.isPointLight){let K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){let oe=k.shadow,ue=t.get(k);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,i.pointShadow[p]=ue,i.pointShadowMap[p]=ce,i.pointShadowMatrix[p]=k.shadow.matrix,C++}i.point[p]=K,p++}else if(k.isHemisphereLight){let K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(J),K.groundColor.copy(k.groundColor).multiplyScalar(J),i.hemi[M]=K,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let U=i.hash;(U.sunLength!==m||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==A||U.rectAreaLength!==R||U.hemiLength!==M||U.numSunShadows!==y||U.numDirectionalShadows!==E||U.numPointShadows!==C||U.numSpotShadows!==D||U.numSpotMaps!==v||U.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=A,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+v-S,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=L,U.sunLength=m,U.directionalLength=g,U.pointLength=p,U.spotLength=A,U.rectAreaLength=R,U.hemiLength=M,U.numSunShadows=y,U.numDirectionalShadows=E,U.numPointShadows=C,U.numSpotShadows=D,U.numSpotMaps=v,U.numLightProbes=L,i.version=a_++)}function l(c,u){let h=0,d=0,m=0,y=0,w=0,g=0,p=u.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){let M=c[A];if(M.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),h++}else if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(M.isSpotLight){let E=i.spot[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),y++}else if(M.isRectAreaLight){let E=i.rectArea[w];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),w++}else if(M.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function hf(n){let e=new c_(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function u_(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new hf(n),e.set(r,[a])):s>=o.length?(a=new hf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
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
}`,p_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],f_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],pf=new xt,$s=new G,Pu=new G;function m_(n,e,t){let i=new Rr,r=new ke,s=new ke,o=new Ct,a=new ca,l=new ua,c={},u=t.maxTextureSize,h={[_i]:on,[on]:_i,[Vt]:Vt},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:d_,fragmentShader:h_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new Rt;y.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Pt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let p=this.type;this.render=function(C,D,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===np&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let S=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Gn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=p!==this.type;Z&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=C.length;k<W;k++){let J=C[k],Q=J.shadow;if(Q===void 0){Fe("WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);let ce=Q.getFrameExtents();r.multiply(ce),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,Q.mapSize.y=s.y));let K=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=K,Q.map===null||Z===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ur){if(J.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new un(r.x,r.y,{format:Ei,type:kn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),Q.map.texture.name=J.name+".shadowMap",Q.map.depthTexture=new yi(r.x,r.y,Dn),Q.map.depthTexture.name=J.name+".shadowMapDepth",Q.map.depthTexture.format=Hn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt}else J.isPointLight?(Q.map=new yl(r.x),Q.map.depthTexture=new aa(r.x,Ln)):(Q.map=new un(r.x,r.y),Q.map.depthTexture=new yi(r.x,r.y,Ln)),Q.map.depthTexture.name=J.name+".shadowMap",Q.map.depthTexture.format=Hn,this.type===Os?(Q.map.depthTexture.compareFunction=K?pl:hl,Q.map.depthTexture.minFilter=Zt,Q.map.depthTexture.magFilter=Zt):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);let oe=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();J.isPointLight!==!0&&Q.updateMatrices(J,v);for(let ue=0;ue<oe;ue++){let Oe=Q.getCamera(ue);if(J.isPointLight){let Ce=Q.camera,lt=Q.matrix,Ke=J.distance||Ce.far;Ke!==Ce.far&&(Ce.far=Ke,Ce.updateProjectionMatrix()),$s.setFromMatrixPosition(J.matrixWorld),Ce.position.copy($s),Pu.copy(Ce.position),Pu.add(p_[ue]),Ce.up.copy(f_[ue]),Ce.lookAt(Pu),Ce.updateMatrixWorld(),lt.makeTranslation(-$s.x,-$s.y,-$s.z),pf.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(pf,Ce.coordinateSystem,Ce.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(Q.map),n.clear());let Ce=Q.getViewport(ue);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),H.viewport(o)}i=Q.getFrustum(ue),M(D,v,Oe,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Ur&&A(Q,v),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,L,U)};function A(C,D){let v=e.update(w);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new un(r.x,r.y,{format:Ei,type:kn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,v,d,w,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,v,m,w,null)}function R(C,D,v,S){let L=null,U=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)L=U;else if(L=v.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=L.uuid,Z=D.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let W=k[Z];W===void 0&&(W=L.clone(),k[Z]=W,D.addEventListener("dispose",E)),L=W}if(L.visible=D.visible,L.wireframe=D.wireframe,S===Ur?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:h[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let H=n.properties.get(L);H.light=v}return L}function M(C,D,v,S,L){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&L===Ur)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let Z=e.update(C),k=C.material;if(Array.isArray(k)){let W=Z.groups;for(let J=0,Q=W.length;J<Q;J++){let ce=W[J],K=k[ce.materialIndex];if(K&&K.visible){let oe=R(C,K,S,L);C.onBeforeShadow(n,C,D,v,Z,oe,ce),n.renderBufferDirect(v,null,Z,oe,C,ce),C.onAfterShadow(n,C,D,v,Z,oe,ce)}}}else if(k.visible){let W=R(C,k,S,L);C.onBeforeShadow(n,C,D,v,Z,W,null),n.renderBufferDirect(v,null,Z,W,C,null),C.onAfterShadow(n,C,D,v,Z,W,null)}}let H=C.children;for(let Z=0,k=H.length;Z<k;Z++)M(H[Z],D,v,S,L)}function E(C){C.target.removeEventListener("dispose",E);for(let v in c){let S=c[v],L=C.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function g_(n,e){function t(){let F=!1,me=new Ct,se=null,ge=new Ct(0,0,0,0);return{setMask:function(_e){se!==_e&&!F&&(n.colorMask(_e,_e,_e,_e),se=_e)},setLocked:function(_e){F=_e},setClear:function(_e,he,ze,Ne,wt){wt===!0&&(_e*=Ne,he*=Ne,ze*=Ne),me.set(_e,he,ze,Ne),ge.equals(me)===!1&&(n.clearColor(_e,he,ze,Ne),ge.copy(me))},reset:function(){F=!1,se=null,ge.set(-1,0,0,0)}}}function i(){let F=!1,me=!1,se=null,ge=null,_e=null;return{setReversed:function(he){if(me!==he){let ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),me=he;let Ne=_e;_e=null,this.setClear(Ne)}},getReversed:function(){return me},setTest:function(he){he?ae(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(he){se!==he&&!F&&(n.depthMask(he),se=he)},setFunc:function(he){if(me&&(he=Op[he]),ge!==he){switch(he){case Zo:n.depthFunc(n.NEVER);break;case $o:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case jo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=he}},setLocked:function(he){F=he},setClear:function(he){_e!==he&&(_e=he,me&&(he=1-he),n.clearDepth(he))},reset:function(){F=!1,se=null,ge=null,_e=null,me=!1}}}function r(){let F=!1,me=null,se=null,ge=null,_e=null,he=null,ze=null,Ne=null,wt=null;return{setTest:function(ct){F||(ct?ae(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ct){me!==ct&&!F&&(n.stencilMask(ct),me=ct)},setFunc:function(ct,wn,On){(se!==ct||ge!==wn||_e!==On)&&(n.stencilFunc(ct,wn,On),se=ct,ge=wn,_e=On)},setOp:function(ct,wn,On){(he!==ct||ze!==wn||Ne!==On)&&(n.stencilOp(ct,wn,On),he=ct,ze=wn,Ne=On)},setLocked:function(ct){F=ct},setClear:function(ct){wt!==ct&&(n.clearStencil(ct),wt=ct)},reset:function(){F=!1,me=null,se=null,ge=null,_e=null,he=null,ze=null,Ne=null,wt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d={},m=new WeakMap,y=[],w=null,g=!1,p=null,A=null,R=null,M=null,E=null,C=null,D=null,v=new Pe(0,0,0),S=0,L=!1,U=null,H=null,Z=null,k=null,W=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,ce=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=ce>=1):K.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=ce>=2);let oe=null,ue={},Oe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),lt=new Ct().fromArray(Oe),Ke=new Ct().fromArray(Ce);function nt(F,me,se,ge){let _e=new Uint8Array(4),he=n.createTexture();n.bindTexture(F,he),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<se;ze++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(me+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return he}let te={};te[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(vr),je(!1),gt(Wc),ae(n.CULL_FACE),rt(Gn);function ae(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Se(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ve(F,me){return d[F]!==me?(n.bindFramebuffer(F,me),d[F]=me,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function we(F,me){let se=y,ge=!1;if(F){se=m.get(me),se===void 0&&(se=[],m.set(me,se));let _e=F.textures;if(se.length!==_e.length||se[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ze=_e.length;he<ze;he++)se[he]=n.COLOR_ATTACHMENT0+he;se.length=_e.length,ge=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ge=!0);ge&&n.drawBuffers(se)}function Xe(F){return w!==F?(n.useProgram(F),w=F,!0):!1}let At={[Zi]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};At[op]=n.MIN,At[ap]=n.MAX;let Ge={[lp]:n.ZERO,[cp]:n.ONE,[up]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[dp]:n.ONE_MINUS_SRC_COLOR,[Yc]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[pp]:n.ONE_MINUS_DST_ALPHA,[yp]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(F,me,se,ge,_e,he,ze,Ne,wt,ct){if(F===Gn){g===!0&&(Se(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),F!==ip){if(F!==p||ct!==L){if((A!==Zi||E!==Zi)&&(n.blendEquation(n.FUNC_ADD),A=Zi,E=Zi),ct)switch(F){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",F);break}else switch(F){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $c:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",F);break}R=null,M=null,C=null,D=null,v.set(0,0,0),S=0,p=F,L=ct}return}_e=_e||me,he=he||se,ze=ze||ge,(me!==A||_e!==E)&&(n.blendEquationSeparate(At[me],At[_e]),A=me,E=_e),(se!==R||ge!==M||he!==C||ze!==D)&&(n.blendFuncSeparate(Ge[se],Ge[ge],Ge[he],Ge[ze]),R=se,M=ge,C=he,D=ze),(Ne.equals(v)===!1||wt!==S)&&(n.blendColor(Ne.r,Ne.g,Ne.b,wt),v.copy(Ne),S=wt),p=F,L=!1}function at(F,me){F.side===Vt?Se(n.CULL_FACE):ae(n.CULL_FACE);let se=F.side===on;me&&(se=!se),je(se),F.blending===zr&&F.transparent===!1?rt(Gn):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ge=F.stencilWrite;a.setTest(ge),ge&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),B(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){U!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),U=F)}function gt(F){F!==ep?(ae(n.CULL_FACE),F!==H&&(F===Wc?n.cullFace(n.BACK):F===tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),H=F}function P(F){F!==Z&&(Q&&n.lineWidth(F),Z=F)}function B(F,me,se){F?(ae(n.POLYGON_OFFSET_FILL),(k!==me||W!==se)&&(k=me,W=se,o.getReversed()&&(me=-me),n.polygonOffset(me,se))):Se(n.POLYGON_OFFSET_FILL)}function ie(F){F?ae(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function T(F){F===void 0&&(F=n.TEXTURE0+J-1),oe!==F&&(n.activeTexture(F),oe=F)}function x(F,me,se){se===void 0&&(oe===null?se=n.TEXTURE0+J-1:se=oe);let ge=ue[se];ge===void 0&&(ge={type:void 0,texture:void 0},ue[se]=ge),(ge.type!==F||ge.texture!==me)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(F,me||te[F]),ge.type=F,ge.texture=me)}function $(){let F=ue[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{n.compressedTexImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function f(){try{n.texSubImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function I(){try{n.texSubImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function V(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function re(){try{n.texStorage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function le(){try{n.texStorage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function ee(){try{n.texImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function ne(){try{n.texImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function de(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function ve(F,me){h[F]!==me&&(n.pixelStorei(F,me),h[F]=me)}function pe(F){lt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),lt.copy(F))}function fe(F){Ke.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ke.copy(F))}function Ae(F,me){let se=c.get(me);se===void 0&&(se=new WeakMap,c.set(me,se));let ge=se.get(F);ge===void 0&&(ge=n.getUniformBlockIndex(me,F.name),se.set(F,ge))}function Le(F,me){let ge=c.get(me).get(F);l.get(me)!==ge&&(n.uniformBlockBinding(me,ge,F.__bindingPointIndex),l.set(me,ge))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},oe=null,ue={},d={},m=new WeakMap,y=[],w=null,g=!1,p=null,A=null,R=null,M=null,E=null,C=null,D=null,v=new Pe(0,0,0),S=0,L=!1,U=null,H=null,Z=null,k=null,W=null,lt.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Se,bindFramebuffer:Ve,drawBuffers:we,useProgram:Xe,setBlending:rt,setMaterial:at,setFlipSided:je,setCullFace:gt,setLineWidth:P,setPolygonOffset:B,setScissorTest:ie,activeTexture:T,bindTexture:x,unbindTexture:$,compressedTexImage2D:X,compressedTexImage3D:b,texImage2D:ee,texImage3D:ne,pixelStorei:ve,getParameter:de,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:re,texStorage3D:le,texSubImage2D:f,texSubImage3D:I,compressedTexSubImage2D:O,compressedTexSubImage3D:V,scissor:pe,viewport:fe,reset:Ye}}function y_(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,h=new Set,d,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,f){return y?new OffscreenCanvas(b,f):fs("canvas")}function g(b,f,I){let O=1,V=X(b);if((V.width>I||V.height>I)&&(O=I/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let re=Math.floor(O*V.width),le=Math.floor(O*V.height);d===void 0&&(d=w(re,le));let ee=f?w(re,le):d;return ee.width=re,ee.height=le,ee.getContext("2d").drawImage(b,0,0,re,le),Fe("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+re+"x"+le+")."),ee}else return"data"in b&&Fe("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),b;return b}function p(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,f,I,O,V,re=!1){if(b!==null){if(n[b]!==void 0)return n[b];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le;O&&(le=e.get("EXT_texture_norm16"),le||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=f;if(f===n.RED&&(I===n.FLOAT&&(ee=n.R32F),I===n.HALF_FLOAT&&(ee=n.R16F),I===n.UNSIGNED_BYTE&&(ee=n.R8),I===n.UNSIGNED_SHORT&&le&&(ee=le.R16_EXT),I===n.SHORT&&le&&(ee=le.R16_SNORM_EXT)),f===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(ee=n.R8UI),I===n.UNSIGNED_SHORT&&(ee=n.R16UI),I===n.UNSIGNED_INT&&(ee=n.R32UI),I===n.BYTE&&(ee=n.R8I),I===n.SHORT&&(ee=n.R16I),I===n.INT&&(ee=n.R32I)),f===n.RG&&(I===n.FLOAT&&(ee=n.RG32F),I===n.HALF_FLOAT&&(ee=n.RG16F),I===n.UNSIGNED_BYTE&&(ee=n.RG8),I===n.UNSIGNED_SHORT&&le&&(ee=le.RG16_EXT),I===n.SHORT&&le&&(ee=le.RG16_SNORM_EXT)),f===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(ee=n.RG8UI),I===n.UNSIGNED_SHORT&&(ee=n.RG16UI),I===n.UNSIGNED_INT&&(ee=n.RG32UI),I===n.BYTE&&(ee=n.RG8I),I===n.SHORT&&(ee=n.RG16I),I===n.INT&&(ee=n.RG32I)),f===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),I===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),I===n.UNSIGNED_INT&&(ee=n.RGB32UI),I===n.BYTE&&(ee=n.RGB8I),I===n.SHORT&&(ee=n.RGB16I),I===n.INT&&(ee=n.RGB32I)),f===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),I===n.UNSIGNED_INT&&(ee=n.RGBA32UI),I===n.BYTE&&(ee=n.RGBA8I),I===n.SHORT&&(ee=n.RGBA16I),I===n.INT&&(ee=n.RGBA32I)),f===n.RGB&&(I===n.UNSIGNED_SHORT&&le&&(ee=le.RGB16_EXT),I===n.SHORT&&le&&(ee=le.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),f===n.RGBA){let ne=re?ps:st.getTransfer(V);I===n.FLOAT&&(ee=n.RGBA32F),I===n.HALF_FLOAT&&(ee=n.RGBA16F),I===n.UNSIGNED_BYTE&&(ee=ne===dt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&le&&(ee=le.RGBA16_EXT),I===n.SHORT&&le&&(ee=le.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(b,f){let I;return b?f===null||f===Ln||f===Br?I=n.DEPTH24_STENCIL8:f===Dn?I=n.DEPTH32F_STENCIL8:f===Fr&&(I=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===Ln||f===Br?I=n.DEPTH_COMPONENT24:f===Dn?I=n.DEPTH_COMPONENT32F:f===Fr&&(I=n.DEPTH_COMPONENT16),I}function C(b,f){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==Zt?Math.log2(Math.max(f.width,f.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?f.mipmaps.length:1}function D(b){let f=b.target;f.removeEventListener("dispose",D),S(f),f.isVideoTexture&&u.delete(f),f.isHTMLTexture&&h.delete(f)}function v(b){let f=b.target;f.removeEventListener("dispose",v),U(f)}function S(b){let f=i.get(b);if(f.__webglInit===void 0)return;let I=b.source,O=m.get(I);if(O){let V=O[f.__cacheKey];V.usedTimes--,V.usedTimes===0&&L(b),Object.keys(O).length===0&&m.delete(I)}i.remove(b)}function L(b){let f=i.get(b);n.deleteTexture(f.__webglTexture);let I=b.source,O=m.get(I);delete O[f.__cacheKey],o.memory.textures--}function U(b){let f=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(f.__webglFramebuffer[O]))for(let V=0;V<f.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(f.__webglFramebuffer[O][V]);else n.deleteFramebuffer(f.__webglFramebuffer[O]);f.__webglDepthbuffer&&n.deleteRenderbuffer(f.__webglDepthbuffer[O])}else{if(Array.isArray(f.__webglFramebuffer))for(let O=0;O<f.__webglFramebuffer.length;O++)n.deleteFramebuffer(f.__webglFramebuffer[O]);else n.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&n.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&n.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let O=0;O<f.__webglColorRenderbuffer.length;O++)f.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(f.__webglColorRenderbuffer[O]);f.__webglDepthRenderbuffer&&n.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let I=b.textures;for(let O=0,V=I.length;O<V;O++){let re=i.get(I[O]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(I[O])}i.remove(b)}let H=0;function Z(){H=0}function k(){return H}function W(b){H=b}function J(){let b=H;return b>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,b}function Q(b){let f=[];return f.push(b.wrapS),f.push(b.wrapT),f.push(b.wrapR||0),f.push(b.magFilter),f.push(b.minFilter),f.push(b.anisotropy),f.push(b.internalFormat),f.push(b.format),f.push(b.type),f.push(b.generateMipmaps),f.push(b.premultiplyAlpha),f.push(b.flipY),f.push(b.unpackAlignment),f.push(b.colorSpace),f.join()}function ce(b,f){let I=i.get(b);if(b.isVideoTexture&&x(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&I.__version!==b.version){let O=b.image;if(O===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(I,b,f);return}}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+f)}function K(b,f){let I=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Se(I,b,f);return}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+f)}function oe(b,f){let I=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Se(I,b,f);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+f)}function ue(b,f){let I=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&I.__version!==b.version){Ve(I,b,f);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+f)}let Oe={[_r]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},Ce={[Bt]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},lt={[Ap]:n.NEVER,[Np]:n.ALWAYS,[Cp]:n.LESS,[hl]:n.LEQUAL,[Ip]:n.EQUAL,[pl]:n.GEQUAL,[Rp]:n.GREATER,[Pp]:n.NOTEQUAL};function Ke(b,f){if(f.type===Dn&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===Zt||f.magFilter===Ca||f.magFilter===zs||f.magFilter===Mi||f.minFilter===Zt||f.minFilter===Ca||f.minFilter===zs||f.minFilter===Mi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Oe[f.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Oe[f.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Oe[f.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ce[f.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ce[f.minFilter]),f.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,lt[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Bt||f.minFilter!==zs&&f.minFilter!==Mi||f.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||i.get(f).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,r.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy}}}function nt(b,f){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,f.addEventListener("dispose",D));let O=f.source,V=m.get(O);V===void 0&&(V={},m.set(O,V));let re=Q(f);if(re!==b.__cacheKey){V[re]===void 0&&(V[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),V[re].usedTimes++;let le=V[b.__cacheKey];le!==void 0&&(V[b.__cacheKey].usedTimes--,le.usedTimes===0&&L(f)),b.__cacheKey=re,b.__webglTexture=V[re].texture}return I}function te(b,f,I){return Math.floor(Math.floor(b/I)/f)}function ae(b,f,I,O){let re=b.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,f.width,f.height,I,O,f.data);else{re.sort((ve,pe)=>ve.start-pe.start);let le=0;for(let ve=1;ve<re.length;ve++){let pe=re[le],fe=re[ve],Ae=pe.start+pe.count,Le=te(fe.start,f.width,4),Ye=te(pe.start,f.width,4);fe.start<=Ae+1&&Le===Ye&&te(fe.start+fe.count-1,f.width,4)===Le?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++le,re[le]=fe)}re.length=le+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,f.width);for(let ve=0,pe=re.length;ve<pe;ve++){let fe=re[ve],Ae=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Ye=Ae%f.width,F=Math.floor(Ae/f.width),me=Le,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ye,F,me,se,I,O,f.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Se(b,f,I){let O=n.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),f.isData3DTexture&&(O=n.TEXTURE_3D);let V=nt(b,f),re=f.source;t.bindTexture(O,b.__webglTexture,n.TEXTURE0+I);let le=i.get(re);if(re.version!==le.__version||V===!0){if(t.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),ge=f.colorSpace===ii?null:st.getPrimaries(f.colorSpace),_e=f.colorSpace===ii||se===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,f.unpackAlignment);let ne=g(f.image,!1,r.maxTextureSize);ne=$(f,ne);let de=s.convert(f.format,f.colorSpace),ve=s.convert(f.type),pe=M(f.internalFormat,de,ve,f.normalized,f.colorSpace,f.isVideoTexture);Ke(O,f);let fe,Ae=f.mipmaps,Le=f.isVideoTexture!==!0,Ye=le.__version===void 0||V===!0,F=re.dataReady,me=C(f,ne);if(f.isDepthTexture)pe=E(f.format===Si,f.type),Ye&&(Le?t.texStorage2D(n.TEXTURE_2D,1,pe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,pe,ne.width,ne.height,0,de,ve,null));else if(f.isDataTexture)if(Ae.length>0){Le&&Ye&&t.texStorage2D(n.TEXTURE_2D,me,pe,Ae[0].width,Ae[0].height);for(let se=0,ge=Ae.length;se<ge;se++)fe=Ae[se],Le?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,fe.width,fe.height,de,ve,fe.data):t.texImage2D(n.TEXTURE_2D,se,pe,fe.width,fe.height,0,de,ve,fe.data);f.generateMipmaps=!1}else Le?(Ye&&t.texStorage2D(n.TEXTURE_2D,me,pe,ne.width,ne.height),F&&ae(f,ne,de,ve)):t.texImage2D(n.TEXTURE_2D,0,pe,ne.width,ne.height,0,de,ve,ne.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Le&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,pe,Ae[0].width,Ae[0].height,ne.depth);for(let se=0,ge=Ae.length;se<ge;se++)if(fe=Ae[se],f.format!==_n)if(de!==null)if(Le){if(F)if(f.layerUpdates.size>0){let _e=vu(fe.width,fe.height,f.format,f.type);for(let he of f.layerUpdates){let ze=fe.data.subarray(he*_e/fe.data.BYTES_PER_ELEMENT,(he+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,he,fe.width,fe.height,1,de,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,ne.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,pe,fe.width,fe.height,ne.depth,0,fe.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,ne.depth,de,ve,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,pe,fe.width,fe.height,ne.depth,0,de,ve,fe.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Le&&Ye&&t.texStorage2D(n.TEXTURE_2D,me,pe,Ae[0].width,Ae[0].height);for(let se=0,ge=Ae.length;se<ge;se++)fe=Ae[se],f.format!==_n?de!==null?Le?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,pe,fe.width,fe.height,0,fe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,fe.width,fe.height,de,ve,fe.data):t.texImage2D(n.TEXTURE_2D,se,pe,fe.width,fe.height,0,de,ve,fe.data)}else if(f.isDataArrayTexture)if(Le){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,pe,ne.width,ne.height,ne.depth),F)if(f.layerUpdates.size>0){let se=vu(ne.width,ne.height,f.format,f.type);for(let ge of f.layerUpdates){let _e=ne.data.subarray(ge*se/ne.data.BYTES_PER_ELEMENT,(ge+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,de,ve,_e)}f.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,ve,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,ne.width,ne.height,ne.depth,0,de,ve,ne.data);else if(f.isData3DTexture)Le?(Ye&&t.texStorage3D(n.TEXTURE_3D,me,pe,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,ve,ne.data)):t.texImage3D(n.TEXTURE_3D,0,pe,ne.width,ne.height,ne.depth,0,de,ve,ne.data);else if(f.isFramebufferTexture){if(Ye)if(Le)t.texStorage2D(n.TEXTURE_2D,me,pe,ne.width,ne.height);else{let se=ne.width,ge=ne.height;for(let _e=0;_e<me;_e++)t.texImage2D(n.TEXTURE_2D,_e,pe,se,ge,0,de,ve,null),se>>=1,ge>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ne.parentNode!==se){se.appendChild(ne),h.add(f),se.onpaint=ge=>{let _e=ge.changedElements;for(let he of h)_e.includes(he.image)&&(he.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let _e=n.RGBA,he=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,he,ze,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Le&&Ye){let se=X(Ae[0]);t.texStorage2D(n.TEXTURE_2D,me,pe,se.width,se.height)}for(let se=0,ge=Ae.length;se<ge;se++)fe=Ae[se],Le?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,de,ve,fe):t.texImage2D(n.TEXTURE_2D,se,pe,de,ve,fe);f.generateMipmaps=!1}else if(Le){if(Ye){let se=X(ne);t.texStorage2D(n.TEXTURE_2D,me,pe,se.width,se.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ve,ne)}else t.texImage2D(n.TEXTURE_2D,0,pe,de,ve,ne);p(f)&&A(O),le.__version=re.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function Ve(b,f,I){if(f.image.length!==6)return;let O=nt(b,f),V=f.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);let re=i.get(V);if(V.version!==re.__version||O===!0){t.activeTexture(n.TEXTURE0+I);let le=st.getPrimaries(st.workingColorSpace),ee=f.colorSpace===ii?null:st.getPrimaries(f.colorSpace),ne=f.colorSpace===ii||le===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,f.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let de=f.isCompressedTexture||f.image[0].isCompressedTexture,ve=f.image[0]&&f.image[0].isDataTexture,pe=[];for(let he=0;he<6;he++)!de&&!ve?pe[he]=g(f.image[he],!0,r.maxCubemapSize):pe[he]=ve?f.image[he].image:f.image[he],pe[he]=$(f,pe[he]);let fe=pe[0],Ae=s.convert(f.format,f.colorSpace),Le=s.convert(f.type),Ye=M(f.internalFormat,Ae,Le,f.normalized,f.colorSpace),F=f.isVideoTexture!==!0,me=re.__version===void 0||O===!0,se=V.dataReady,ge=C(f,fe);Ke(n.TEXTURE_CUBE_MAP,f);let _e;if(de){F&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ye,fe.width,fe.height);for(let he=0;he<6;he++){_e=pe[he].mipmaps;for(let ze=0;ze<_e.length;ze++){let Ne=_e[ze];f.format!==_n?Ae!==null?F?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,Ye,Ne.width,Ne.height,0,Ne.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,Ne.width,Ne.height,Ae,Le,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,Ye,Ne.width,Ne.height,0,Ae,Le,Ne.data)}}}else{if(_e=f.mipmaps,F&&me){_e.length>0&&ge++;let he=X(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(ve){F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,pe[he].width,pe[he].height,Ae,Le,pe[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,pe[he].width,pe[he].height,0,Ae,Le,pe[he].data);for(let ze=0;ze<_e.length;ze++){let wt=_e[ze].image[he].image;F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,wt.width,wt.height,Ae,Le,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,Ye,wt.width,wt.height,0,Ae,Le,wt.data)}}else{F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae,Le,pe[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,Ae,Le,pe[he]);for(let ze=0;ze<_e.length;ze++){let Ne=_e[ze];F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Ae,Le,Ne.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,Ye,Ae,Le,Ne.image[he])}}}p(f)&&A(n.TEXTURE_CUBE_MAP),re.__version=V.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function we(b,f,I,O,V,re){let le=s.convert(I.format,I.colorSpace),ee=s.convert(I.type),ne=M(I.internalFormat,le,ee,I.normalized,I.colorSpace),de=i.get(f),ve=i.get(I);if(ve.__renderTarget=f,!de.__hasExternalTextures){let pe=Math.max(1,f.width>>re),fe=Math.max(1,f.height>>re);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,re,ne,pe,fe,f.depth,0,le,ee,null):t.texImage2D(V,re,ne,pe,fe,0,le,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),T(f)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,V,ve.__webglTexture,0,ie(f)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,V,ve.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(b,f,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),f.depthBuffer){let O=f.depthTexture,V=O&&O.isDepthTexture?O.type:null,re=E(f.stencilBuffer,V),le=f.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;T(f)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(f),re,f.width,f.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(f),re,f.width,f.height):n.renderbufferStorage(n.RENDERBUFFER,re,f.width,f.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,b)}else{let O=f.textures;for(let V=0;V<O.length;V++){let re=O[V],le=s.convert(re.format,re.colorSpace),ee=s.convert(re.type),ne=M(re.internalFormat,le,ee,re.normalized,re.colorSpace);T(f)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(f),ne,f.width,f.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(f),ne,f.width,f.height):n.renderbufferStorage(n.RENDERBUFFER,ne,f.width,f.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(b,f,I){let O=f.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=i.get(f.depthTexture);if(V.__renderTarget=f,(!V.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),O){if(V.__webglInit===void 0&&(V.__webglInit=!0,f.depthTexture.addEventListener("dispose",D)),V.__webglTexture===void 0){V.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,f.depthTexture);let de=s.convert(f.depthTexture.format),ve=s.convert(f.depthTexture.type),pe;f.depthTexture.format===Hn?pe=n.DEPTH_COMPONENT24:f.depthTexture.format===Si&&(pe=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,f.width,f.height,0,de,ve,null)}}else ce(f.depthTexture,0);let re=V.__webglTexture,le=ie(f),ee=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,ne=f.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(f.depthTexture.format===Hn)T(f)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,re,0);else if(f.depthTexture.format===Si)T(f)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(b){let f=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==b.depthTexture){let O=b.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),O){let V=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,O.removeEventListener("dispose",V)};O.addEventListener("dispose",V),f.__depthDisposeCallback=V}f.__boundDepthTexture=O}if(b.depthTexture&&!f.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)At(f.__webglFramebuffer[O],b,O);else{let O=b.texture.mipmaps;O&&O.length>0?At(f.__webglFramebuffer[0],b,0):At(f.__webglFramebuffer,b,0)}else if(I){f.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,f.__webglFramebuffer[O]),f.__webglDepthbuffer[O]===void 0)f.__webglDepthbuffer[O]=n.createRenderbuffer(),Xe(f.__webglDepthbuffer[O],b,!1);else{let V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,re)}}else{let O=b.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=n.createRenderbuffer(),Xe(f.__webglDepthbuffer,b,!1);else{let V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(b,f,I){let O=i.get(b);f!==void 0&&we(O.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ge(b)}function at(b){let f=b.texture,I=i.get(b),O=i.get(f);b.addEventListener("dispose",v);let V=b.textures,re=b.isWebGLCubeRenderTarget===!0,le=V.length>1;if(le||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=f.version,o.memory.textures++),re){I.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer[ee]=[];for(let ne=0;ne<f.mipmaps.length;ne++)I.__webglFramebuffer[ee][ne]=n.createFramebuffer()}else I.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer=[];for(let ee=0;ee<f.mipmaps.length;ee++)I.__webglFramebuffer[ee]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(le)for(let ee=0,ne=V.length;ee<ne;ee++){let de=i.get(V[ee]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&T(b)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ee=0;ee<V.length;ee++){let ne=V[ee];I.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ee]);let de=s.convert(ne.format,ne.colorSpace),ve=s.convert(ne.type),pe=M(ne.internalFormat,de,ve,ne.normalized,ne.colorSpace,b.isXRRenderTarget===!0),fe=ie(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,I.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,f);for(let ee=0;ee<6;ee++)if(f.mipmaps&&f.mipmaps.length>0)for(let ne=0;ne<f.mipmaps.length;ne++)we(I.__webglFramebuffer[ee][ne],b,f,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else we(I.__webglFramebuffer[ee],b,f,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(f)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ee=0,ne=V.length;ee<ne;ee++){let de=V[ee],ve=i.get(de),pe=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ve.__webglTexture),Ke(pe,de),we(I.__webglFramebuffer,b,de,n.COLOR_ATTACHMENT0+ee,pe,0),p(de)&&A(pe)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,O.__webglTexture),Ke(ee,f),f.mipmaps&&f.mipmaps.length>0)for(let ne=0;ne<f.mipmaps.length;ne++)we(I.__webglFramebuffer[ne],b,f,n.COLOR_ATTACHMENT0,ee,ne);else we(I.__webglFramebuffer,b,f,n.COLOR_ATTACHMENT0,ee,0);p(f)&&A(ee),t.unbindTexture()}b.depthBuffer&&Ge(b)}function je(b){let f=b.textures;for(let I=0,O=f.length;I<O;I++){let V=f[I];if(p(V)){let re=R(b),le=i.get(V).__webglTexture;t.bindTexture(re,le),A(re),t.unbindTexture()}}}let gt=[],P=[];function B(b){if(b.samples>0){if(T(b)===!1){let f=b.textures,I=b.width,O=b.height,V=n.COLOR_BUFFER_BIT,re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),ee=f.length>1;if(ee)for(let de=0;de<f.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let ne=b.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let de=0;de<f.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[de]);let ve=i.get(f[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,I,O,0,0,I,O,V,n.NEAREST),l===!0&&(gt.length=0,P.length=0,gt.push(n.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(gt.push(re),P.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<f.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,le.__webglColorRenderbuffer[de]);let ve=i.get(f[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let f=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[f])}}}function ie(b){return Math.min(r.maxSamples,b.samples)}function T(b){let f=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function x(b){let f=o.render.frame;u.get(b)!==f&&(u.set(b,f),b.update())}function $(b,f){let I=b.colorSpace,O=b.format,V=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==hs&&I!==ii&&(st.getTransfer(I)===dt?(O!==_n||V!==dn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",I)),f}function X(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=ue,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function x_(n,e){function t(i,r=ii){let s,o=st.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===Ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ru)return n.BYTE;if(i===su)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Ia)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===lu)return n.ALPHA;if(i===cu)return n.RGB;if(i===_n)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===uu)return n.RED;if(i===Na)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===Fs||i===Bs||i===Hs||i===Vs)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Oa||i===Ua||i===za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Ba||i===Ha||i===Va||i===Ga||i===Gs||i===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fa||i===Ba)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ha)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Va)return s.COMPRESSED_R11_EAC;if(i===Ga)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return s.COMPRESSED_RG11_EAC;if(i===Wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===$a||i===Xa||i===qa||i===Ya||i===ja||i===Ka||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Za)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===ol||i===al)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sl)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===Ws||i===ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ws)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ss(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:b_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends In{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,y=null,w=typeof XRWebGLBinding<"u",g=new Fu,p={},A=t.getContextAttributes(),R=null,M=null,E=[],C=[],D=new ke,v=null,S=null,L=new Jt;L.viewport=new Ct;let U=new Jt;U.viewport=new Ct;let H=[L,U],Z=new Ma,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=E[te];return ae===void 0&&(ae=new Ar,E[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=E[te];return ae===void 0&&(ae=new Ar,E[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=E[te];return ae===void 0&&(ae=new Ar,E[te]=ae),ae.getHandSpace()};function J(te){let ae=C.indexOf(te.inputSource);if(ae===-1)return;let Se=E[ae];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ce);for(let te=0;te<E.length;te++){let ae=C[te];ae!==null&&(C[te]=null,E[te].disconnect(ae))}k=null,W=null,g.reset();for(let te in p)delete p[te];if(e.setRenderTarget(R),m=null,d=null,h=null,r=null,M=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),S!==null){let te=S.camera;te.fov=S.fov,te.zoom=S.zoom,te.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&w&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ce),A.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ve=null,we=null;A.depth&&(we=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Si:Hn,Ve=A.stencil?Br:Ln);let Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new un(d.textureWidth,d.textureHeight,{format:_n,type:dn,depthTexture:new yi(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new un(m.framebufferWidth,m.framebufferHeight,{format:_n,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ce(te){for(let ae=0;ae<te.removed.length;ae++){let Se=te.removed[ae],Ve=C.indexOf(Se);Ve>=0&&(C[Ve]=null,E[Ve].disconnect(Se))}for(let ae=0;ae<te.added.length;ae++){let Se=te.added[ae],Ve=C.indexOf(Se);if(Ve===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=C.length){C.push(Se),Ve=Xe;break}else if(C[Xe]===null){C[Xe]=Se,Ve=Xe;break}if(Ve===-1)break}let we=E[Ve];we&&we.connect(Se)}}let K=new G,oe=new G;function ue(te,ae,Se){K.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);let Ve=K.distanceTo(oe),we=ae.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,At=we[14]/(we[10]-1),Ge=we[14]/(we[10]+1),rt=(we[9]+1)/we[5],at=(we[9]-1)/we[5],je=(we[8]-1)/we[0],gt=(Xe[8]+1)/Xe[0],P=At*je,B=At*gt,ie=Ve/(-je+gt),T=ie*-je;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(T),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),we[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let x=At+ie,$=Ge+ie,X=P-T,b=B+(Ve-T),f=rt*Ge/$*x,I=at*Ge/$*x;te.projectionMatrix.makePerspective(X,b,f,I,x,$),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Oe(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,Se=te.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),Z.near=U.near=L.near=ae,Z.far=U.far=L.far=Se,(k!==Z.near||W!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),k=Z.near,W=Z.far),Z.layers.mask=te.layers.mask|6,L.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;let Ve=te.parent,we=Z.cameras;Oe(Z,Ve);for(let Xe=0;Xe<we.length;Xe++)Oe(we[Xe],Ve);we.length===2?ue(Z,L,U):Z.projectionMatrix.copy(L.projectionMatrix),S===null&&te.isPerspectiveCamera&&(S={camera:te,fov:te.fov,zoom:te.zoom}),Ce(te,Z,Ve)};function Ce(te,ae,Se){Se===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Sr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(te){return p[te]};let lt=null;function Ke(te,ae){if(u=ae.getViewerPose(c||o),y=ae,u!==null){let Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ve=!1;Se.length!==Z.cameras.length&&(Z.cameras.length=0,Ve=!0);for(let Ge=0;Ge<Se.length;Ge++){let rt=Se[Ge],at=null;if(m!==null)at=m.getViewport(rt);else{let gt=h.getViewSubImage(d,rt);at=gt.viewport,Ge===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let je=H[Ge];je===void 0&&(je=new Jt,je.layers.enable(Ge),je.viewport=new Ct,H[Ge]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(at.x,at.y,at.width,at.height),Ge===0&&(Z.matrix.copy(je.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ve===!0&&Z.cameras.push(je)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){h=i.getBinding();let Ge=h.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(we&&we.includes("camera-access")&&w){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<Se.length;Ge++){let rt=Se[Ge].camera;if(rt){let at=p[rt];at||(at=new Ss,p[rt]=at);let je=h.getCameraImage(rt);at.sourceTexture=je}}}}for(let Se=0;Se<E.length;Se++){let Ve=C[Se],we=E[Se];Ve!==null&&we!==void 0&&we.update(Ve,ae,c||o)}lt&&lt(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),y=null}let nt=new ff;nt.setAnimationLoop(Ke),this.setAnimationLoop=function(te){lt=te},this.dispose=function(){}}},__=new xt,vf=new $e;vf.set(-1,0,0,0,1,0,0,0,1);function w_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,yu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),y(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),w(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,A,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let A=e.get(p),R=A.envMap,M=A.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function w(g,p){let A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function M_(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let C=E.program;i.uniformBlockBinding(M,C)}function c(M,E){let C=r[M.id];C===void 0&&(g(M),C=u(M),r[M.id]=C,M.addEventListener("dispose",A));let D=E.program;i.updateUBOMapping(M,D);let v=e.render.frame;s[M.id]!==v&&(d(M),s[M.id]=v)}function u(M){let E=h();M.__bindingPointIndex=E;let C=n.createBuffer(),D=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,D,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,C),C}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let E=r[M.id],C=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,S=C.length;v<S;v++){let L=C[v];if(Array.isArray(L))for(let U=0,H=L.length;U<H;U++)m(L[U],v,U,D);else m(L,v,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,E,C,D){if(w(M,E,C,D)===!0){let v=M.__offset,S=M.value;if(Array.isArray(S)){let L=0;for(let U=0;U<S.length;U++){let H=S[U],Z=p(H);y(H,M.__data,L),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function y(M,E,C){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,C)}function w(M,E,C,D){let v=M.value,S=E+"_"+C;if(D[S]===void 0)return typeof v=="number"||typeof v=="boolean"?D[S]=v:ArrayBuffer.isView(v)?D[S]=v.slice():D[S]=v.clone(),!0;{let L=D[S];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return D[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(M){let E=M.uniforms,C=0,D=16;for(let S=0,L=E.length;S<L;S++){let U=Array.isArray(E[S])?E[S]:[E[S]];for(let H=0,Z=U.length;H<Z;H++){let k=U[H],W=Array.isArray(k.value)?k.value:[k.value];for(let J=0,Q=W.length;J<Q;J++){let ce=W[J],K=p(ce),oe=C%D,ue=oe%K.boundary,Oe=oe+ue;C+=ue,Oe!==0&&D-Oe<K.storage&&(C+=D-Oe),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=K.storage}}}let v=C%D;return v>0&&(C+=D-v),M.__size=C,M.__cache={},this}function p(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",M),E}function A(M){let E=M.target;E.removeEventListener("dispose",A);let C=o.indexOf(E.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function R(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:R}}var S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function E_(){return Wn===null&&(Wn=new ia(S_,16,16,Ei,kn),Wn.name="DFG_LUT",Wn.minFilter=Zt,Wn.magFilter=Zt,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var xl=class{constructor(e={}){let{canvas:t=Lp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=dn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;let w=m,g=new Set([Da,La,Na]),p=new Set([dn,Ln,Fr,Br,Ra,Pa]),A=new Uint32Array(4),R=new Int32Array(4),M=new G,E=null,C=null,D=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,H=null,Z=null,k=null,W=null;this._outputColorSpace=nn;let J=0,Q=0,ce=null,K=-1,oe=null,ue=new Ct,Oe=new Ct,Ce=null,lt=new Pe(0),Ke=0,nt=t.width,te=t.height,ae=1,Se=null,Ve=null,we=new Ct(0,0,nt,te),Xe=new Ct(0,0,nt,te),At=!1,Ge=new Rr,rt=!1,at=!1,je=new xt,gt=new G,P=new Ct,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function T(){return ce===null?ae:1}let x=i;function $(_,z){return t.getContext(_,z)}let X,b,f,I,O,V,re,le,ee,ne,de,ve,pe,fe,Ae,Le,Ye,F,me,se,ge,_e,he;try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",wn,!1),x===null){let z="webgl2";if(x=$(z,_),x===null)throw $(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(_){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Be("WebGLRenderer: "+_.message),_}function ze(){X=new Nb(x),X.init(),ge=new x_(x,X),b=new wb(x,X,e,ge),f=new g_(x,X),b.reversedDepthBuffer&&d&&f.buffers.depth.setReversed(!0),Z=x.createFramebuffer(),k=x.createFramebuffer(),W=x.createFramebuffer(),I=new kb(x),O=new n_,V=new y_(x,X,f,O,b,ge,I),re=new Pb(L),le=new Uy(x),_e=new vb(x,le),ee=new Lb(x,le,I,_e),ne=new Ub(x,ee,le,_e,I),F=new Ob(x,b,V),Ae=new Mb(O),de=new t_(L,re,X,b,_e,Ae),ve=new w_(L,O),pe=new r_,fe=new u_(X),Ye=new bb(L,re,f,ne,y,l),Le=new m_(L,ne,b),he=new M_(x,I,b,f),me=new _b(x,X,I),se=new Db(x,X,I),I.programs=de.programs,L.capabilities=b,L.extensions=X,L.properties=O,L.renderLists=pe,L.shadowMap=Le,L.state=f,L.info=I}w!==dn&&(S=new Fb(w,t.width,t.height,a,r,s));let Ne=new Bu(L,x);this.xr=Ne,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){let _=X.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=X.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(_){_!==void 0&&(ae=_,this.setSize(nt,te,!1))},this.getSize=function(_){return _.set(nt,te)},this.setSize=function(_,z,j=!0){if(Ne.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=_,te=z,t.width=Math.floor(_*ae),t.height=Math.floor(z*ae),j===!0&&(t.style.width=_+"px",t.style.height=z+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,_,z)},this.getDrawingBufferSize=function(_){return _.set(nt*ae,te*ae).floor()},this.setDrawingBufferSize=function(_,z,j){nt=_,te=z,ae=j,t.width=Math.floor(_*j),t.height=Math.floor(z*j),this.setViewport(0,0,_,z)},this.setEffects=function(_){if(w===dn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let z=0;z<_.length;z++)if(_[z].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ue)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,z,j,q){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,z,j,q),f.viewport(ue.copy(we).multiplyScalar(ae).round())},this.getScissor=function(_){return _.copy(Xe)},this.setScissor=function(_,z,j,q){_.isVector4?Xe.set(_.x,_.y,_.z,_.w):Xe.set(_,z,j,q),f.scissor(Oe.copy(Xe).multiplyScalar(ae).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(_){f.setScissorTest(At=_)},this.setOpaqueSort=function(_){Se=_},this.setTransparentSort=function(_){Ve=_},this.getClearColor=function(_){return _.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(_=!0,z=!0,j=!0){let q=0;if(_){let Y=!1;if(ce!==null){let be=ce.texture.format;Y=g.has(be)}if(Y){let be=ce.texture.type,Te=p.has(be),xe=Ye.getClearColor(),Ie=Ye.getClearAlpha(),De=xe.r,Je=xe.g,it=xe.b;Te?(A[0]=De,A[1]=Je,A[2]=it,A[3]=Ie,x.clearBufferuiv(x.COLOR,0,A)):(R[0]=De,R[1]=Je,R[2]=it,R[3]=Ie,x.clearBufferiv(x.COLOR,0,R))}else q|=x.COLOR_BUFFER_BIT}z&&(q|=x.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),H=_},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Ye.dispose(),pe.dispose(),fe.dispose(),O.dispose(),re.dispose(),ne.dispose(),_e.dispose(),he.dispose(),de.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",vd),Ne.removeEventListener("sessionend",_d),Ti.stop()};function wt(_){_.preventDefault(),ms("WebGLRenderer: Context Lost."),U=!0}function ct(){ms("WebGLRenderer: Context Restored."),U=!1;let _=I.autoReset,z=Le.enabled,j=Le.autoUpdate,q=Le.needsUpdate,Y=Le.type;ze(),I.autoReset=_,Le.enabled=z,Le.autoUpdate=j,Le.needsUpdate=q,Le.type=Y}function wn(_){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function On(_){let z=_.target;z.removeEventListener("dispose",On),Om(z)}function Om(_){Um(_),O.remove(_)}function Um(_){let z=O.get(_).programs;z!==void 0&&(z.forEach(function(j){de.releaseProgram(j)}),_.isShaderMaterial&&de.releaseShaderCache(_))}this.renderBufferDirect=function(_,z,j,q,Y,be){z===null&&(z=B);let Te=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,xe=Bm(_,z,j,q,Y);f.setMaterial(q,Te);let Ie=j.index,De=1;if(q.wireframe===!0){if(Ie=ee.getWireframeAttribute(j),Ie===void 0)return;De=2}let Je=j.drawRange,it=j.attributes.position,Re=Je.start*De,ut=(Je.start+Je.count)*De;be!==null&&(Re=Math.max(Re,be.start*De),ut=Math.min(ut,(be.start+be.count)*De)),Ie!==null?(Re=Math.max(Re,0),ut=Math.min(ut,Ie.count)):it!=null&&(Re=Math.max(Re,0),ut=Math.min(ut,it.count));let Dt=ut-Re;if(Dt<0||Dt===1/0)return;_e.setup(Y,q,xe,j,Ie);let St,vt=me;if(Ie!==null&&(St=le.get(Ie),vt=se,vt.setIndex(St)),Y.isMesh)q.wireframe===!0?(f.setLineWidth(q.wireframeLinewidth*T()),vt.setMode(x.LINES)):vt.setMode(x.TRIANGLES);else if(Y.isLine){let qt=q.linewidth;qt===void 0&&(qt=1),f.setLineWidth(qt*T()),Y.isLineSegments?vt.setMode(x.LINES):Y.isLineLoop?vt.setMode(x.LINE_LOOP):vt.setMode(x.LINE_STRIP)}else Y.isPoints?vt.setMode(x.POINTS):Y.isSprite&&vt.setMode(x.TRIANGLES);if(Y.isBatchedMesh)if(X.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let qt=Y._multiDrawStarts,Ee=Y._multiDrawCounts,en=Y._multiDrawCount,ot=Ie?le.get(Ie).bytesPerElement:1,xn=O.get(q).currentProgram.getUniforms();for(let Un=0;Un<en;Un++)xn.setValue(x,"_gl_DrawID",Un),vt.render(qt[Un]/ot,Ee[Un])}else if(Y.isInstancedMesh)vt.renderInstances(Re,Dt,Y.count);else if(j.isInstancedBufferGeometry){let qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ee=Math.min(j.instanceCount,qt);vt.renderInstances(Re,Dt,Ee)}else vt.render(Re,Dt)};function bd(_,z,j,q){H!==null&&_.isNodeMaterial&&H.setObject(q,_),rt===!0&&Ae.setState(_,j,!1),_.transparent===!0&&_.side===Vt&&_.forceSinglePass===!1?(_.side=on,_.needsUpdate=!0,io(_,z,q),_.side=_i,_.needsUpdate=!0,io(_,z,q),_.side=Vt):io(_,z,q)}this.compile=function(_,z,j=null){j===null&&(j=_),H!==null&&H.renderStart(_,z,j),C=fe.get(j),C.init(z),v.push(C),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),_!==j&&_.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights(),H!==null&&H.updateLights(C.state.lightsArray),at=this.localClippingEnabled,rt=Ae.init(this.clippingPlanes,at),rt===!0&&Ae.setGlobalState(this.clippingPlanes,z),H!==null&&Le.render(C.state.shadowsArray,j,z);let q=new Set;return _.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Te=0;Te<be.length;Te++){let xe=be[Te];bd(xe,j,z,Y),q.add(xe)}else bd(be,j,z,Y),q.add(be)}),C=v.pop(),H!==null&&H.renderEnd(),q},this.compileAsync=function(_,z,j=null){let q=this.compile(_,z,j);return new Promise(Y=>{function be(){if(q.forEach(function(Te){let Ie=O.get(Te).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Te)}),q.size===0){Y(_);return}setTimeout(be,10)}X.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Vl=null;function zm(_){Vl&&Vl(_)}function vd(){Ti.stop()}function _d(){Ti.start()}let Ti=new ff;Ti.setAnimationLoop(zm),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(_){Vl=_,Ne.setAnimationLoop(_),_===null?Ti.stop():Ti.start()},Ne.addEventListener("sessionstart",vd),Ne.addEventListener("sessionend",_d),this.render=function(_,z){if(z!==void 0&&z.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(_,z);let j=Ne.enabled===!0&&Ne.isPresenting===!0,q=S!==null&&(ce===null||j)&&S.begin(L,ce);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(z),z=Ne.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,z,ce),C=fe.get(_,v.length),C.init(z),C.state.textureUnits=V.getTextureUnits(),v.push(C),je.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(je,Cn,z.reversedDepth),at=this.localClippingEnabled,rt=Ae.init(this.clippingPlanes,at),E=pe.get(_,D.length),E.init(),D.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){let Te=L.xr.getDepthSensingMesh();Te!==null&&Gl(Te,z,-1/0,L.sortObjects)}Gl(_,z,0,L.sortObjects),E.finish(),H!==null&&H.updateLights(C.state.lightsArray),L.sortObjects===!0&&E.sort(Se,Ve),ie=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,ie&&Ye.addToRenderList(E,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ae.beginShadows();let Y=C.state.shadowsArray;if(Le.render(Y,_,z),rt===!0&&Ae.endShadows(),(q&&S.hasRenderPass())===!1){let Te=E.opaque,xe=E.transmissive;if(C.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(xe.length>0)for(let De=0,Je=Ie.length;De<Je;De++){let it=Ie[De];Md(Te,xe,_,it)}ie&&Ye.render(_);for(let De=0,Je=Ie.length;De<Je;De++){let it=Ie[De];wd(E,_,it,it.viewport)}}else xe.length>0&&Md(Te,xe,_,z),ie&&Ye.render(_),wd(E,_,z)}ce!==null&&Q===0&&(V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce)),q&&S.end(L),_.isScene===!0&&_.onAfterRender(L,_,z),_e.resetDefaultState(),K=-1,oe=null,v.pop(),v.length>0?(C=v[v.length-1],V.setTextureUnits(C.state.textureUnits),rt===!0&&Ae.setGlobalState(L.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,H!==null&&H.renderEnd()};function Gl(_,z,j,q){if(_.visible===!1)return;if(_.layers.test(z.layers)){if(_.isGroup)j=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(z);else if(_.isLightProbeGrid)C.pushLightProbeGrid(_);else if(_.isLight)C.pushLight(_),_.castShadow&&C.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Ge)){q&&P.setFromMatrixPosition(_.matrixWorld).applyMatrix4(je);let Te=ne.update(_),xe=_.material;xe.visible&&E.push(_,Te,xe,j,P.z,null,z)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Ge))){let Te=ne.update(_),xe=_.material;if(q&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),P.copy(_.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),P.copy(Te.boundingSphere.center)),P.applyMatrix4(_.matrixWorld).applyMatrix4(je)),Array.isArray(xe)){let Ie=Te.groups;for(let De=0,Je=Ie.length;De<Je;De++){let it=Ie[De],Re=xe[it.materialIndex];Re&&Re.visible&&E.push(_,Te,Re,j,P.z,it,z)}}else xe.visible&&E.push(_,Te,xe,j,P.z,null,z)}}let be=_.children;for(let Te=0,xe=be.length;Te<xe;Te++)Gl(be[Te],z,j,q)}function wd(_,z,j,q){let{opaque:Y,transmissive:be,transparent:Te}=_;C.setupLightsView(j),rt===!0&&Ae.setGlobalState(L.clippingPlanes,j),q&&f.viewport(ue.copy(q)),Y.length>0&&no(Y,z,j),be.length>0&&no(be,z,j),Te.length>0&&no(Te,z,j),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Md(_,z,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[q.id]===void 0){let Re=X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[q.id]=new un(1,1,{generateMipmaps:!0,type:Re?kn:dn,minFilter:Mi,samples:Math.max(4,b.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let be=C.state.transmissionRenderTarget[q.id],Te=q.viewport||ue;be.setSize(Te.z*L.transmissionResolutionScale,Te.w*L.transmissionResolutionScale);let xe=L.getRenderTarget(),Ie=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(be),L.getClearColor(lt),Ke=L.getClearAlpha(),Ke<1&&L.setClearColor(16777215,.5),L.clear(),ie&&Ye.render(j);let Je=L.toneMapping;L.toneMapping=Nn;let it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),C.setupLightsView(q),rt===!0&&Ae.setGlobalState(L.clippingPlanes,q),no(_,j,q),V.updateMultisampleRenderTarget(be),V.updateRenderTargetMipmap(be),X.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ut=0,Dt=z.length;ut<Dt;ut++){let St=z[ut],{object:vt,geometry:qt,material:Ee,group:en}=St;if(Ee.side===Vt&&vt.layers.test(q.layers)){let ot=Ee.side;Ee.side=on,Ee.needsUpdate=!0,Sd(vt,j,q,qt,Ee,en),Ee.side=ot,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(V.updateMultisampleRenderTarget(be),V.updateRenderTargetMipmap(be))}L.setRenderTarget(xe,Ie,De),L.setClearColor(lt,Ke),it!==void 0&&(q.viewport=it),L.toneMapping=Je}function no(_,z,j){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,be=_.length;Y<be;Y++){let Te=_[Y],{object:xe,geometry:Ie,group:De}=Te,Je=Te.material;Je.allowOverride===!0&&q!==null&&(Je=q),xe.layers.test(j.layers)&&Sd(xe,z,j,Ie,Je,De)}}function Sd(_,z,j,q,Y,be){H!==null&&Y.isNodeMaterial&&H.setObject(_,Y),_.onBeforeRender(L,z,j,q,Y,be),_.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),Y.onBeforeRender(L,z,j,q,_,be),Y.transparent===!0&&Y.side===Vt&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,L.renderBufferDirect(j,z,q,Y,_,be),Y.side=_i,Y.needsUpdate=!0,L.renderBufferDirect(j,z,q,Y,_,be),Y.side=Vt):L.renderBufferDirect(j,z,q,Y,_,be),_.onAfterRender(L,z,j,q,Y,be)}function io(_,z,j){z.isScene!==!0&&(z=B);let q=O.get(_),Y=C.state.lights,be=C.state.shadowsArray,Te=Y.state.version,xe=de.getParameters(_,Y.state,be,z,j,C.state.lightProbeGridArray),Ie=de.getProgramCacheKey(xe),De=q.programs;q.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Je=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;q.envMap=re.get(_.envMap||q.environment,Je),q.envMapRotation=q.environment!==null&&_.envMap===null?z.environmentRotation:_.envMapRotation,De===void 0&&(_.addEventListener("dispose",On),De=new Map,q.programs=De);let it=De.get(Ie);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===Te)return Td(_,xe),it}else xe.uniforms=de.getUniforms(_),H!==null&&_.isNodeMaterial&&H.build(_,j,xe),_.onBeforeCompile(xe,L),it=de.acquireProgram(xe,Ie),De.set(Ie,it),q.uniforms=xe.uniforms;let Re=q.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Re.clippingPlanes=Ae.uniform),Td(_,xe),q.needsLights=Vm(_),q.lightsStateVersion=Te,q.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.sunLights.value=Y.state.sun,Re.sunLightShadows.value=Y.state.sunShadow,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.sunShadowMatrix.value=Y.state.sunShadowMatrix,Re.sunShadowCascade.value=Y.state.sunShadowCascade,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotLightMatrix.value=Y.state.spotLightMatrix,Re.spotLightMap.value=Y.state.spotLightMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=C.state.lightProbeGridArray.length>0,q.currentProgram=it,q.uniformsList=null,it}function Ed(_){if(_.uniformsList===null){let z=_.currentProgram.getUniforms();_.uniformsList=Gr.seqWithValue(z.seq,_.uniforms)}return _.uniformsList}function Td(_,z){let j=O.get(_);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Fm(_,z){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let j=0,q=_.length;j<q;j++){let Y=_[j];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function Bm(_,z,j,q,Y){z.isScene!==!0&&(z=B),V.resetTextureUnits();let be=z.fog,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,xe=ce===null?L.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:st.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,De=re.get(q.envMap||Te,Ie),Je=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,it=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,Dt=!!j.morphAttributes.color,St=Nn;q.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(St=L.toneMapping);let vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,qt=vt!==void 0?vt.length:0,Ee=O.get(q),en=C.state.lights;if(rt===!0&&(at===!0||_!==oe)){let Mt=_===oe&&q.id===K;Ae.setState(q,_,Mt)}let ot=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==en.state.version||Ee.outputColorSpace!==xe||Y.isBatchedMesh&&Ee.batching===!1||!Y.isBatchedMesh&&Ee.batching===!0||Y.isBatchedMesh&&Ee.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ee.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ee.instancing===!1||!Y.isInstancedMesh&&Ee.instancing===!0||Y.isSkinnedMesh&&Ee.skinning===!1||!Y.isSkinnedMesh&&Ee.skinning===!0||Y.isInstancedMesh&&Ee.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ee.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ee.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ee.instancingMorph===!1&&Y.morphTexture!==null||Ee.envMap!==De||q.fog===!0&&Ee.fog!==be||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ae.numPlanes||Ee.numIntersection!==Ae.numIntersection)||Ee.vertexAlphas!==Je||Ee.vertexTangents!==it||Ee.morphTargets!==Re||Ee.morphNormals!==ut||Ee.morphColors!==Dt||Ee.toneMapping!==St||Ee.morphTargetsCount!==qt||!!Ee.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ee.__version=q.version);let xn=Ee.currentProgram;ot===!0&&(xn=io(q,z,Y),H&&q.isNodeMaterial&&H.onUpdateProgram(q,xn,Ee));let Un=!1,oi=!1,ji=!1,yt=xn.getUniforms(),Nt=Ee.uniforms;if(f.useProgram(xn.program)&&(Un=!0,oi=!0,ji=!0),q.id!==K&&(K=q.id,oi=!0),Ee.needsLights){let Mt=Fm(C.state.lightProbeGridArray,Y);Ee.lightProbeGrid!==Mt&&(Ee.lightProbeGrid=Mt,oi=!0)}if(Un||oe!==_){f.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),yt.setValue(x,"projectionMatrix",_.projectionMatrix),yt.setValue(x,"viewMatrix",_.matrixWorldInverse);let li=yt.map.cameraPosition;li!==void 0&&li.setValue(x,gt.setFromMatrixPosition(_.matrixWorld)),b.logarithmicDepthBuffer&&yt.setValue(x,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(x,"isOrthographic",_.isOrthographicCamera===!0),oe!==_&&(oe=_,oi=!0,ji=!0)}if(Ee.needsLights&&(en.state.sunShadowMap.length>0&&yt.setValue(x,"sunShadowMap",en.state.sunShadowMap,V),en.state.directionalShadowMap.length>0&&yt.setValue(x,"directionalShadowMap",en.state.directionalShadowMap,V),en.state.spotShadowMap.length>0&&yt.setValue(x,"spotShadowMap",en.state.spotShadowMap,V),en.state.pointShadowMap.length>0&&yt.setValue(x,"pointShadowMap",en.state.pointShadowMap,V)),Y.isSkinnedMesh){yt.setOptional(x,Y,"bindMatrix"),yt.setOptional(x,Y,"bindMatrixInverse");let Mt=Y.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(x,"boneTexture",Mt.boneTexture,V))}Y.isBatchedMesh&&(yt.setOptional(x,Y,"batchingTexture"),yt.setValue(x,"batchingTexture",Y._matricesTexture,V),yt.setOptional(x,Y,"batchingIdTexture"),yt.setValue(x,"batchingIdTexture",Y._indirectTexture,V),yt.setOptional(x,Y,"batchingColorTexture"),Y._colorsTexture!==null&&yt.setValue(x,"batchingColorTexture",Y._colorsTexture,V));let ai=j.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&F.update(Y,j,xn),(oi||Ee.receiveShadow!==Y.receiveShadow)&&(Ee.receiveShadow=Y.receiveShadow,yt.setValue(x,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Nt.envMapIntensity.value=z.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=E_()),oi){if(yt.setValue(x,"toneMappingExposure",L.toneMappingExposure),Ee.needsLights&&Hm(Nt,ji),be&&q.fog===!0&&ve.refreshFogUniforms(Nt,be),ve.refreshMaterialUniforms(Nt,q,ae,te,C.state.transmissionRenderTarget[_.id]),Ee.needsLights&&Ee.lightProbeGrid){let Mt=Ee.lightProbeGrid;Nt.probesSH.value=Mt.texture,Nt.probesMin.value.copy(Mt.boundingBox.min),Nt.probesMax.value.copy(Mt.boundingBox.max),Nt.probesResolution.value.copy(Mt.resolution)}Gr.upload(x,Ed(Ee),Nt,V)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gr.upload(x,Ed(Ee),Nt,V),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(x,"center",Y.center),yt.setValue(x,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(x,"normalMatrix",Y.normalMatrix),yt.setValue(x,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Mt=q.uniformsGroups;for(let li=0,Ki=Mt.length;li<Ki;li++){let Cd=Mt[li];he.update(Cd,xn),he.bind(Cd,xn)}}return xn}function Hm(_,z){_.ambientLightColor.needsUpdate=z,_.lightProbe.needsUpdate=z,_.sunLights.needsUpdate=z,_.sunLightShadows.needsUpdate=z,_.directionalLights.needsUpdate=z,_.directionalLightShadows.needsUpdate=z,_.pointLights.needsUpdate=z,_.pointLightShadows.needsUpdate=z,_.spotLights.needsUpdate=z,_.spotLightShadows.needsUpdate=z,_.rectAreaLights.needsUpdate=z,_.hemisphereLights.needsUpdate=z}function Vm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(_,z,j){let q=O.get(_);q.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),O.get(_.texture).__webglTexture=z,O.get(_.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,z){let j=O.get(_);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(_,z=0,j=0){ce=_,J=z,Q=j;let q=null,Y=!1,be=!1;if(_){let xe=O.get(_);if(xe.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(x.FRAMEBUFFER,xe.__webglFramebuffer),ue.copy(_.viewport),Oe.copy(_.scissor),Ce=_.scissorTest,f.viewport(ue),f.scissor(Oe),f.setScissorTest(Ce),K=-1;return}else if(xe.__webglFramebuffer===void 0)V.setupRenderTarget(_);else if(xe.__hasExternalTextures)V.rebindTextures(_,O.get(_.texture).__webglTexture,O.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Je=_.depthTexture;if(xe.__boundDepthTexture!==Je){if(Je!==null&&O.has(Je)&&(_.width!==Je.image.width||_.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(_)}}let Ie=_.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let De=O.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(De[z])?q=De[z][j]:q=De[z],Y=!0):_.samples>0&&V.useMultisampledRTT(_)===!1?q=O.get(_).__webglMultisampledFramebuffer:Array.isArray(De)?q=De[j]:q=De,ue.copy(_.viewport),Oe.copy(_.scissor),Ce=_.scissorTest}else ue.copy(we).multiplyScalar(ae).floor(),Oe.copy(Xe).multiplyScalar(ae).floor(),Ce=At;if(j!==0&&(q=Z),f.bindFramebuffer(x.FRAMEBUFFER,q)&&f.drawBuffers(_,q),f.viewport(ue),f.scissor(Oe),f.setScissorTest(Ce),Y){let xe=O.get(_.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,j)}else if(be){let xe=z;for(let Ie=0;Ie<_.textures.length;Ie++){let De=O.get(_.textures[Ie]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Ie,De.__webglTexture,j,xe)}}else if(_!==null&&j!==0){let xe=O.get(_.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,xe.__webglTexture,j)}K=-1};function Ad(_){let z=O.get(_);return(z.__readFormat!==_.format||z.__readType!==_.type)&&(z.__readFormat=_.format,z.__readType=_.type,z.__formatReadable=b.textureFormatReadable(_.format),z.__typeReadable=b.textureTypeReadable(_.type)),z}this.readRenderTargetPixels=function(_,z,j,q,Y,be,Te,xe=0){if(!(_&&_.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){f.bindFramebuffer(x.FRAMEBUFFER,Ie);try{let De=_.textures[xe],Je=De.format,it=De.type;_.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+xe);let Re=Ad(De);if(Re.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=_.width-q&&j>=0&&j<=_.height-Y&&x.readPixels(z,j,q,Y,ge.convert(Je),ge.convert(it),be)}finally{let De=ce!==null?O.get(ce).__webglFramebuffer:null;f.bindFramebuffer(x.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(_,z,j,q,Y,be,Te,xe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie)if(z>=0&&z<=_.width-q&&j>=0&&j<=_.height-Y){f.bindFramebuffer(x.FRAMEBUFFER,Ie);let De=_.textures[xe],Je=De.format,it=De.type;_.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+xe);let Re=Ad(De);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,ut),x.bufferData(x.PIXEL_PACK_BUFFER,be.byteLength,x.STREAM_READ),x.readPixels(z,j,q,Y,ge.convert(Je),ge.convert(it),0),x.bindBuffer(x.PIXEL_PACK_BUFFER,null);let Dt=ce!==null?O.get(ce).__webglFramebuffer:null;f.bindFramebuffer(x.FRAMEBUFFER,Dt);let St=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await kp(x,St,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,ut),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,be),x.bindBuffer(x.PIXEL_PACK_BUFFER,null),x.deleteBuffer(ut),x.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,z=null,j=0){let q=Math.pow(2,-j),Y=Math.floor(_.image.width*q),be=Math.floor(_.image.height*q),Te=z!==null?z.x:0,xe=z!==null?z.y:0;V.setTexture2D(_,0),x.copyTexSubImage2D(x.TEXTURE_2D,j,0,0,Te,xe,Y,be),f.unbindTexture()},this.copyTextureToTexture=function(_,z,j=null,q=null,Y=0,be=0){let Te,xe,Ie,De,Je,it,Re,ut,Dt,St=_.isCompressedTexture?_.mipmaps[be]:_.image;if(j!==null)Te=j.max.x-j.min.x,xe=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Je=j.min.y,it=j.isBox3?j.min.z:0;else{let Nt=Math.pow(2,-Y);Te=Math.floor(St.width*Nt),xe=Math.floor(St.height*Nt),_.isDataArrayTexture?Ie=St.depth:_.isData3DTexture?Ie=Math.floor(St.depth*Nt):Ie=1,De=0,Je=0,it=0}q!==null?(Re=q.x,ut=q.y,Dt=q.z):(Re=0,ut=0,Dt=0);let vt=ge.convert(z.format),qt=ge.convert(z.type),Ee;z.isData3DTexture?(V.setTexture3D(z,0),Ee=x.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(V.setTexture2DArray(z,0),Ee=x.TEXTURE_2D_ARRAY):(V.setTexture2D(z,0),Ee=x.TEXTURE_2D),f.activeTexture(x.TEXTURE0),f.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,z.flipY),f.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),f.pixelStorei(x.UNPACK_ALIGNMENT,z.unpackAlignment);let en=f.getParameter(x.UNPACK_ROW_LENGTH),ot=f.getParameter(x.UNPACK_IMAGE_HEIGHT),xn=f.getParameter(x.UNPACK_SKIP_PIXELS),Un=f.getParameter(x.UNPACK_SKIP_ROWS),oi=f.getParameter(x.UNPACK_SKIP_IMAGES);f.pixelStorei(x.UNPACK_ROW_LENGTH,St.width),f.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St.height),f.pixelStorei(x.UNPACK_SKIP_PIXELS,De),f.pixelStorei(x.UNPACK_SKIP_ROWS,Je),f.pixelStorei(x.UNPACK_SKIP_IMAGES,it);let ji=_.isDataArrayTexture||_.isData3DTexture,yt=z.isDataArrayTexture||z.isData3DTexture;if(_.isDepthTexture){let Nt=O.get(_),ai=O.get(z),Mt=O.get(Nt.__renderTarget),li=O.get(ai.__renderTarget);f.bindFramebuffer(x.READ_FRAMEBUFFER,Mt.__webglFramebuffer),f.bindFramebuffer(x.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Ki=0;Ki<Ie;Ki++)ji&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,O.get(_).__webglTexture,Y,it+Ki),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,O.get(z).__webglTexture,be,Dt+Ki)),x.blitFramebuffer(De,Je,Te,xe,Re,ut,Te,xe,x.DEPTH_BUFFER_BIT,x.NEAREST);f.bindFramebuffer(x.READ_FRAMEBUFFER,null),f.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(Y!==0||_.isRenderTargetTexture||O.has(_)){let Nt=O.get(_),ai=O.get(z);f.bindFramebuffer(x.READ_FRAMEBUFFER,k),f.bindFramebuffer(x.DRAW_FRAMEBUFFER,W);for(let Mt=0;Mt<Ie;Mt++)ji?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Nt.__webglTexture,Y,it+Mt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Nt.__webglTexture,Y),yt?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,ai.__webglTexture,be,Dt+Mt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ai.__webglTexture,be),Y!==0?x.blitFramebuffer(De,Je,Te,xe,Re,ut,Te,xe,x.COLOR_BUFFER_BIT,x.NEAREST):yt?x.copyTexSubImage3D(Ee,be,Re,ut,Dt+Mt,De,Je,Te,xe):x.copyTexSubImage2D(Ee,be,Re,ut,De,Je,Te,xe);f.bindFramebuffer(x.READ_FRAMEBUFFER,null),f.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else yt?_.isDataTexture||_.isData3DTexture?x.texSubImage3D(Ee,be,Re,ut,Dt,Te,xe,Ie,vt,qt,St.data):z.isCompressedArrayTexture?x.compressedTexSubImage3D(Ee,be,Re,ut,Dt,Te,xe,Ie,vt,St.data):x.texSubImage3D(Ee,be,Re,ut,Dt,Te,xe,Ie,vt,qt,St):_.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,be,Re,ut,Te,xe,vt,qt,St.data):_.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,be,Re,ut,St.width,St.height,vt,St.data):x.texSubImage2D(x.TEXTURE_2D,be,Re,ut,Te,xe,vt,qt,St);f.pixelStorei(x.UNPACK_ROW_LENGTH,en),f.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ot),f.pixelStorei(x.UNPACK_SKIP_PIXELS,xn),f.pixelStorei(x.UNPACK_SKIP_ROWS,Un),f.pixelStorei(x.UNPACK_SKIP_IMAGES,oi),be===0&&z.generateMipmaps&&x.generateMipmap(Ee),f.unbindTexture()},this.initRenderTarget=function(_){O.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?V.setTextureCube(_,0):_.isData3DTexture?V.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?V.setTexture2DArray(_,0):V.setTexture2D(_,0),f.unbindTexture()},this.resetState=function(){J=0,Q=0,ce=null,f.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var _f={type:"change"},Vu={type:"start"},Mf={type:"end"},_l=new gi,wf=new rn,T_=Math.cos(70*gu.DEG2RAD),zt=new G,hn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hu=1e-6,wl=class extends ks{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vn.ROTATE,MIDDLE:vn.DOLLY,RIGHT:vn.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new sn,this._lastTargetPosition=new G,this._quat=new sn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Or,this._sphericalDelta=new Or,this._scale=1,this._panOffset=new G,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new G,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C_.bind(this),this._onPointerDown=A_.bind(this),this._onPointerUp=I_.bind(this),this._onContextMenu=O_.bind(this),this._onMouseWheel=N_.bind(this),this._onKeyDown=L_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=k_.bind(this),this._onMouseDown=R_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=U_.bind(this),this._interceptControlUp=z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_f),this.update(),this.state=mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=zt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<T_?this.object.lookAt(this.target):(wf.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(wf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Hu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hu||this._lastTargetPosition.distanceToSquared(this.target)>Hu?(this.dispatchEvent(_f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;zt.copy(r).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function A_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function C_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function I_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mf),this.state=mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case vn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case vn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vu)}function P_(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function N_(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mf))}function L_(n){this.enabled!==!1&&this._handleKeyDown(n)}function D_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vu)}function k_(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function O_(n){this.enabled!==!1&&n.preventDefault()}function U_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gu=new rn,Ml=new Wi,Zr=new ke,Wu=new G,Sl=class extends wl{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:vn.PAN,MIDDLE:vn.DOLLY,RIGHT:vn.ROTATE},this.touches={ONE:Pn.PAN,TWO:Pn.DOLLY_ROTATE},this._panWorldStart=new G}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target);let i=this.domElement.getBoundingClientRect();Zr.x=(e.clientX-i.left)/i.width*2-1,Zr.y=-((e.clientY-i.top)/i.height)*2+1,Ml.setFromCamera(Zr,this.object),Ml.ray.intersectPlane(Gu,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let i=this.domElement.getBoundingClientRect();Zr.x=(e.clientX-i.left)/i.width*2-1,Zr.y=-((e.clientY-i.top)/i.height)*2+1,Ml.setFromCamera(Zr,this.object),Ml.ray.intersectPlane(Gu,Wu)&&(Wu.sub(this._panWorldStart),this._panOffset.copy(Wu).negate(),this.update())}};var Xu={stencilWrite:!0,stencilRef:1,stencilFunc:hu},an=8,Sf=96,F_=64,B_=4;function H_(n){return n<450?16:n<1300?15:n<3600?14:13}function V_(n,e,t){let i=2**n;return[e/i*360-180,Math.atan(Math.sinh(Math.PI*(1-2*t/i)))*180/Math.PI]}function Zu(n,e,t){let i=2**n,r=t*Math.PI/180;return[(e+180)/360*i,(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i]}function $u(n,e){let t=(n-26e5)/1e6,i=(e-12e5)/1e6,r=2.6779094+4.728982*t+.791484*t*i+.1306*t*i*i-.0436*t**3,s=16.9023892+3.238272*i-.270978*t*t-.002528*i*i-.0447*t*t*i-.014*i**3;return[r*100/36,s*100/36]}function G_(n,e,t,i,r=F_){let[s,o]=$u(e-i,t-i),[a,l]=$u(e+i,t+i),[c,u]=Zu(n,s,l),[h,d]=Zu(n,a,o),[m,y]=Zu(n,...$u(e,t)),w=2**n,g=[];for(let p=Math.max(0,Math.floor(c));p<=Math.min(w-1,Math.floor(h));p++)for(let A=Math.max(0,Math.floor(u));A<=Math.min(w-1,Math.floor(d));A++)g.push({tile:[p,A],distance:Math.hypot(p+.5-m,A+.5-y)});return g.sort((p,A)=>p.distance-A.distance).slice(0,r).map(p=>p.tile)}var El=class{constructor(e){Ue(this,"options",e);Ue(this,"patches",new Map);Ue(this,"wanted",new Set);Ue(this,"running",0);Ue(this,"dark",!1);Ue(this,"visible",!0);Ue(this,"generation",0);Ue(this,"clock",0);Ue(this,"disposed",!1)}update(e,t,i,r){if(this.disposed||!this.visible)return;let s=H_(i),o=G_(s,e,t,Math.min(r,s===13?7e3:r));this.wanted=new Set(o.map(([l,c])=>`${s}/${l}/${c}`)),this.clock++;let a=!1;for(let[l,c]of this.patches){let u=this.wanted.has(l);c.mesh&&c.mesh.visible!==u&&(c.mesh.visible=u,a=!0),u&&(c.used=this.clock)}for(let[l,c]of o)this.request(s,l,c);this.evict(),a&&this.options.changed()}setDark(e){e!==this.dark&&(this.dark=e,this.clear())}setVisible(e){this.visible=e;for(let t of this.patches.values())t.mesh&&(t.mesh.visible=e&&this.wanted.has(t.key));this.options.changed()}reshape(){for(let e of this.patches.values()){if(!e.mesh)continue;let[t,i,r]=e.key.split("/").map(Number);e.mesh.geometry.dispose(),e.mesh.geometry=this.geometry(t,i,r)}this.options.changed()}clear(){this.generation++;for(let e of[...this.patches.keys()])this.drop(e);this.options.changed()}dispose(){this.disposed=!0,this.clear()}request(e,t,i){let r=`${e}/${t}/${i}`;if(this.patches.has(r)||this.running>=B_)return;let s={key:r,mesh:null,texture:null,loading:!0,failed:!1,used:this.clock};this.patches.set(r,s),this.running++;let o=this.generation;this.options.load(e,t,i,this.dark).then(async a=>{let l=await this.options.win.createImageBitmap(new Blob([new Uint8Array(a).slice()]));if(this.disposed||o!==this.generation||this.patches.get(r)!==s){l.close();return}let c=new $t(l);c.colorSpace=nn,c.flipY=!1,c.anisotropy=4,c.needsUpdate=!0;let u=new Pt(this.geometry(e,t,i),new Rn({map:c,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,...Xu}));u.matrixAutoUpdate=!1,u.renderOrder=-1,u.visible=this.visible&&this.wanted.has(r),s.mesh=u,s.texture=c,this.options.scene.add(u)}).catch(()=>{s.failed=!0}).finally(()=>{if(s.loading=!1,this.running--,!(this.disposed||o!==this.generation)){for(let a of this.wanted)if(!this.patches.has(a)){let[l,c,u]=a.split("/").map(Number);this.request(l,c,u);break}this.options.changed()}})}geometry(e,t,i){let r=new Float32Array((an+1)*(an+1)*3),s=new Float32Array((an+1)*(an+1)*2);for(let c=0;c<=an;c++)for(let u=0;u<=an;u++){let h=u/an,d=c/an,[m,y]=V_(e,t+h,i+d),[w,g]=er(y,m),p=this.options.toScene(w,g,this.options.height(w,g)-.6),A=c*(an+1)+u;r.set([p.x,p.y,p.z],A*3),s.set([h,d],A*2)}let o=new Uint16Array(an*an*6),a=0;for(let c=0;c<an;c++)for(let u=0;u<an;u++){let h=c*(an+1)+u,d=h+1,m=h+an+1,y=m+1;o.set([h,m,d,d,m,y],a),a+=6}let l=new Rt;return l.setAttribute("position",new ft(r,3)),l.setAttribute("uv",new ft(s,2)),l.setIndex(new ft(o,1)),l.computeBoundingSphere(),l}drop(e){let t=this.patches.get(e);t&&(t.mesh&&(this.options.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()),t.texture?.dispose(),t.texture?.image?.close?.(),this.patches.delete(e))}evict(){for(let[t,i]of this.patches)i.failed&&!this.wanted.has(t)&&this.drop(t);if(this.patches.size<=Sf)return;let e=[...this.patches.values()].filter(t=>!t.loading&&!this.wanted.has(t.key)).sort((t,i)=>t.used-i.used);for(let t of e.slice(0,this.patches.size-Sf))this.drop(t.key)}};function qs(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?{minX:e,minY:t,maxX:i,maxY:r}:null}var Tl=(n,e)=>n.minX<=e.maxX&&n.maxX>=e.minX&&n.minY<=e.maxY&&n.maxY>=e.minY;function W_(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function Ef(n){let e=0;for(let t=0,i=n.length-1;t<n.length;i=t++)e+=(n[i][0]-n[t][0])*(n[i][1]+n[t][1]);return Math.abs(e/2)}var Z_=n=>n.reduce((e,[t,...i])=>e+(t?Ef(t)-i.reduce((r,s)=>r+Ef(s),0):0),0);function $_(n,e,t,i,r){let s=Math.min(Math.max(Math.ceil(Math.sqrt(i/2)),1),24),o=0;for(let a=0;a<s;a++)for(let l=0;l<s-a;l++)for(let c=1;c<=(l<s-a-1?2:1);c++){let u=(a+c/3)/s,h=(l+c/3)/s,d=[n[0]+(e[0]-n[0])*u+(t[0]-n[0])*h,n[1]+(e[1]-n[1])*u+(t[1]-n[1])*h];r.some(m=>W_(d,m))&&o++}return o/(s*s)}function X_(n,e,t){let i=qs(t),r=Z_(t),s=[0,0,0],o=[0,0,0];for(let l=n[1];l<n[1]+n[2];l++){let c=e.indices[l*3],u=e.kinds[c];if(u!==1&&u!==2)continue;let h=e.point(c),d=e.point(e.indices[l*3+1]),m=e.point(e.indices[l*3+2]),y=Math.abs((d[0]-h[0])*(m[1]-h[1])-(m[0]-h[0])*(d[1]-h[1]))/2;if(y<.01)continue;s[u]+=y,i&&Tl(i,{minX:Math.min(h[0],d[0],m[0]),minY:Math.min(h[1],d[1],m[1]),maxX:Math.max(h[0],d[0],m[0]),maxY:Math.max(h[1],d[1],m[1])})&&(o[u]+=y*$_(h,d,m,y,t))}let a=s[2]>0?2:1;return{share:s[a]?o[a]/s[a]:0,cover:r?o[a]/r:0,inside:o[a]}}var q_=n=>n.inside>=1&&(n.share>=.5||n.cover>=.3);function Tf(n,e,t){let i=qs(t);return i?n.filter(r=>Tl(i,{minX:r[3],minY:r[4],maxX:r[6],maxY:r[7]})&&q_(X_(r,e,t))):[]}var qu=220,Y_=6,ri=400,Yu={east:2683250,north:1247900,distance:1600},j_=new sn().setFromAxisAngle(new G(1,0,0),-Math.PI/2);function K_(n,e){let[t,i,r]=n.origin,[s,o,a]=n.step,l=new xt().compose(new G(t-e[0],r-ri,e[1]-i),j_,new G(s,o,a)),c=new Uint16Array(n.vertexCount*4);for(let h=0,d=0;h<c.length;h+=4,d+=3)c[h]=n.positions[d],c[h+1]=n.positions[d+1],c[h+2]=n.positions[d+2];let u=new Rt;return u.setAttribute("position",new Vi(new Cr(c,4),3,0)),u.setAttribute("color",new ft(new Uint8Array(n.vertexCount*4).fill(255),4,!0)),u.setIndex(new ft(n.indices,1)),u.computeBoundingSphere(),{geometry:u,matrix:l}}function ju(n,e){return n.matrixAutoUpdate=!1,n.matrix.copy(e),n.matrixWorld.copy(e),n}function J_(n,e){let t=n.trim(),i=t.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);if(i)return new Pe(Number(i[1]),Number(i[2]),Number(i[3]));let r=t.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);return r?new Pe(Number(r[1])/255,Number(r[2])/255,Number(r[3])/255):/^#[0-9a-f]{3,8}$/i.test(t)?new Pe(t.slice(0,7)):new Pe(e)}function Q_(n){return .2126*n.r+.7152*n.g+.0722*n.b}var Al=class{constructor(e,t,i){Ue(this,"container",e);Ue(this,"events",t);Ue(this,"doc");Ue(this,"win");Ue(this,"canvas");Ue(this,"renderer");Ue(this,"scene",new xs);Ue(this,"camera",new Jt(45,1,1,2e4));Ue(this,"controls");Ue(this,"material",new ni({vertexColors:!0,flatShading:!0,side:Vt}));Ue(this,"groundMaterial",new ni({side:Vt,...Xu}));Ue(this,"highlightMaterial",new ni({flatShading:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));Ue(this,"ghostMaterial",new ni({flatShading:!0,side:Vt,transparent:!0,opacity:.16,depthWrite:!1}));Ue(this,"hiddenMaterial",new Rn({visible:!1}));Ue(this,"floorMaterial",new ni({vertexColors:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));Ue(this,"floorLineMaterial",new Pr({transparent:!0,opacity:.55}));Ue(this,"floorMaskMaterial",new Rn({colorWrite:!1,depthWrite:!1,depthTest:!1,side:Vt,stencilWrite:!0,stencilRef:1,stencilZPass:du}));Ue(this,"area",null);Ue(this,"areaMeshes",new Map);Ue(this,"floorMeshes",[]);Ue(this,"tiles",new Map);Ue(this,"loading",new Set);Ue(this,"failed",new Set);Ue(this,"raycaster",new Wi);Ue(this,"observers",[]);Ue(this,"palette");Ue(this,"index",null);Ue(this,"origin",[2683e3,1247e3]);Ue(this,"ground",null);Ue(this,"colorMode","surfaces");Ue(this,"highlight",null);Ue(this,"frame",0);Ue(this,"lastTileUpdate",0);Ue(this,"fly",null);Ue(this,"cameraTimer",0);Ue(this,"disposed",!1);Ue(this,"pointerDown",null);Ue(this,"groundMap");Ue(this,"pendingCamera");Ue(this,"groundVisible",!0);Ue(this,"groundReady",!1);Ue(this,"pendingPlace",null);Ue(this,"schedule",()=>{this.frame||this.disposed||(this.frame=this.win.requestAnimationFrame(this.tick))});Ue(this,"tick",e=>{if(this.frame=0,this.disposed)return;let t=!1;if(this.fly){let o=Math.min((e-this.fly.start)/this.fly.duration,1),a=o<.5?4*o*o*o:1-(-2*o+2)**3/2;this.camera.position.lerpVectors(this.fly.from,this.fly.to,a),this.controls.target.lerpVectors(this.fly.fromTarget,this.fly.toTarget,a),o>=1&&(this.fly=null,this.saveCameraSoon()),t=!0}t=this.controls.update()||t;let i=this.camera.position.distanceTo(this.controls.target),r=this.viewRadius(i);this.camera.near=Math.max(.5,i/800),this.camera.far=r*1.6+i*2,this.camera.updateProjectionMatrix();let s=this.scene.fog;s.near=r*.55+i*.5,s.far=r*1.05+i,this.renderer.render(this.scene,this.camera),(e-this.lastTileUpdate>200||!t)&&(this.lastTileUpdate=e,this.updateTiles(r)),t&&this.schedule()});Ue(this,"selectedKey",null);Ue(this,"selectedBuilding",null);Ue(this,"saveCameraSoon",()=>{this.win.clearTimeout(this.cameraTimer),this.cameraTimer=this.win.setTimeout(()=>{this.disposed||!this.index||this.events.onCamera({position:this.fromScene(this.camera.position),target:this.fromScene(this.controls.target)})},800)});this.doc=e.ownerDocument,this.win=this.doc.defaultView??window;let r=t.tile;this.groundMap=r?new El({scene:this.scene,win:this.win,load:r,changed:()=>this.schedule(),toScene:(a,l,c)=>this.toScene(a,l,c),height:(a,l)=>this.groundHeight(a,l)}):null,this.canvas=this.doc.createElement("canvas"),this.canvas.className="z3d-canvas",e.appendChild(this.canvas),this.renderer=new xl({canvas:this.canvas,antialias:!0,stencil:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(this.win.devicePixelRatio||1,2)),this.controls=new Sl(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!1,this.controls.zoomToCursor=!0,this.controls.minDistance=15,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.48,this.controls.addEventListener("change",this.schedule),this.controls.addEventListener("end",this.saveCameraSoon);let s=new Ns(16777215,9077880,1.6),o=new Ds(16777215,1.9);o.position.set(-.45,.8,.35),this.scene.add(s,o),this.scene.fog=new ys(0,3e3,8e3),this.readTheme(),this.pendingCamera=i,this.listen(),this.resize()}setIndex(e){if(this.index===e)return;if(this.clearTiles(),this.groundMap?.clear(),this.index=e,!e){this.schedule();return}this.origin=[Math.round((e.bounds[0]+e.bounds[3])/2),Math.round((e.bounds[1]+e.bounds[4])/2)];let t=this.pendingCamera;this.pendingCamera=null,t?(this.camera.position.copy(this.toScene(t.position[0],t.position[1],t.position[2])),this.controls.target.copy(this.toScene(t.target[0],t.target[1],t.target[2]))):this.place(Yu.east,Yu.north,Yu.distance,!1),this.controls.update(),this.groundReady=!1,this.loadGround(e),this.schedule()}setColorMode(e){if(this.colorMode!==e){this.colorMode=e;for(let t of this.tiles.values())this.paint(t);this.schedule()}}setShowGround(e){this.groundVisible=e,this.ground&&(this.ground.mesh.visible=e&&!this.groundMap),this.groundMap?.setVisible(e),this.lastTileUpdate=0,this.schedule()}flyTo(e,t,i){this.place(e,t,i,!0)}zoomBy(e){let t=this.controls.target.clone(),i=this.camera.position.clone().sub(t),r=Math.min(Math.max(i.length()*(e>0?.6:1/.6),this.controls.minDistance),this.controls.maxDistance),s=t.clone().add(i.normalize().multiplyScalar(r));this.fly={from:this.camera.position.clone(),to:s,fromTarget:t.clone(),toTarget:t,start:this.win.performance.now(),duration:350},this.schedule()}clearSelection(){this.select(null)}setArea(e){if(this.clearArea(),this.area=e,e)for(let t of this.tiles.values())this.applyArea(t);this.syncHighlight(),this.buildFloor(),this.schedule()}flyToArea(e,t=!1){let i=1/0,r=1/0,s=-1/0,o=-1/0;for(let l of e)for(let[c,u]of l[0]??[])i=Math.min(i,c),r=Math.min(r,u),s=Math.max(s,c),o=Math.max(o,u);if(!Number.isFinite(i))return;let a=Math.max(s-i,o-r);this.place((i+s)/2,(r+o)/2,Math.min(Math.max(a*(t?2:2.4),t?90:140),1600),!0)}areaBuildings(){return[...this.areaMeshes.values()].flatMap(e=>e.userData.buildings)}applyArea(e){if(!this.area||this.areaMeshes.has(e.entry.key))return!1;let t=e.mesh.geometry,i=t.getIndex();if(!i||!this.tileReaches(e.entry,this.area.polygons))return!1;let r=i.array,s=t.getAttribute("position"),[o,a]=e.origin,[l,c]=e.step,u=Tf(e.buildings,{indices:r,kinds:e.kinds,point:p=>[o+s.getX(p)*l,a+s.getY(p)*c]},this.area.polygons);if(!u.length)return!1;let h=u.map(p=>[p[1]*3,p[2]*3]).sort((p,A)=>p[0]-A[0]),d=new r.constructor(h.reduce((p,[,A])=>p+A,0)),m=0;for(let[p,A]of h)d.set(r.subarray(p,p+A),m),m+=A;let y=new Rt;y.setAttribute("position",t.getAttribute("position")),y.setIndex(new ft(d,1));let w=!!this.area.floor,g=ju(new Pt(y,w?this.ghostMaterial:this.highlightMaterial),e.matrix);if(g.renderOrder=w?2:0,g.userData.buildings=u,this.areaMeshes.set(e.entry.key,g),this.scene.add(g),w){t.clearGroups();let p=0;for(let[A,R]of h)A>p&&t.addGroup(p,A-p,0),t.addGroup(A,R,1),p=A+R;p<r.length&&t.addGroup(p,r.length-p,0),e.mesh.material=[this.material,this.hiddenMaterial]}return!0}tileReaches(e,t){let i=qs(t);return!!i&&Tl(i,{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[3],maxY:e.bounds[4]})}syncHighlight(){if(!this.highlight)return;let{key:e,building:t}=this.highlight,i=this.area?.floor?this.areaMeshes.get(e)?.userData.buildings:void 0;this.highlight.mesh.visible=!i?.some(r=>r[1]===t[1])}removeAreaMesh(e){let t=this.areaMeshes.get(e);if(!t)return;this.scene.remove(t),t.geometry.dispose(),this.areaMeshes.delete(e);let i=this.tiles.get(e);i&&(i.mesh.geometry.clearGroups(),i.mesh.material=this.material)}clearArea(){for(let e of[...this.areaMeshes.keys()])this.removeAreaMesh(e);this.clearFloor()}clearFloor(){for(let e of this.floorMeshes){this.scene.remove(e);let t=e.userData.dispose;t?t():e.geometry.dispose()}this.floorMeshes=[]}hatchTexture(){let e=this.doc.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.strokeStyle=`#${this.palette.accent.getHexString()}`,t.lineWidth=16;for(let r of[-64,0,64])t.beginPath(),t.moveTo(r,64),t.lineTo(r+64,0),t.stroke();let i=new Nr(e);return i.wrapS=i.wrapT=_r,i}labelSprite(e,t){let i=this.doc.createElement("canvas"),r=i.getContext("2d"),s=`700 56px ${this.win.getComputedStyle(this.container).fontFamily||"system-ui, sans-serif"}`;r.font=s,i.width=Math.ceil(r.measureText(e).width+40),i.height=84,r.font=s,r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=12,r.strokeStyle="rgba(0, 0, 0, 0.75)",r.fillStyle="#ffffff",r.strokeText(e,i.width/2,i.height/2),r.fillText(e,i.width/2,i.height/2);let o=new Nr(i),a=new Ir({map:o,depthTest:!1,transparent:!0}),l=new _s(a);return l.scale.set(t*i.width/i.height,t,1),l.renderOrder=4,l.userData.dispose=()=>{o.dispose(),a.dispose()},l}floorBase(e){let t=this.areaBuildings();if(t.length)return Math.min(...t.map(s=>s[5]));let i=qs(e);if(!i||!this.groundReady)return null;let r=this.index?.tiles.filter(s=>this.tileReaches(s,e))??[];return!r.length||r.some(s=>!this.tiles.has(s.key)&&!this.failed.has(s.key))?null:this.groundHeight((i.minX+i.maxX)/2,(i.minY+i.maxY)/2)}buildFloor(){this.clearFloor();let e=this.area?.floor,t=e?this.floorBase(this.area.polygons):null;if(!e||t===null){this.schedule();return}let i=t+e.elevation+.2,r=[],s=[],o=[],a=[],l=null,c=new Pe;for(let u of e.rooms){if(c.set(u.color),u.picked&&u.label){let h=u.polygons[0]?.[0]??[],d=h.map(([g])=>g-this.origin[0]),m=h.map(([,g])=>g-this.origin[1]),y=Math.max(...d)-Math.min(...d),w=Math.max(...m)-Math.min(...m);h.length&&(l={text:u.label,x:(Math.max(...d)+Math.min(...d))/2,y:(Math.max(...m)+Math.min(...m))/2,size:Math.min(Math.max(Math.min(y,w)*.35,2.5),7)})}for(let h of u.polygons){let d=h.map(g=>{let p=g.map(([A,R])=>new ke(A-this.origin[0],R-this.origin[1]));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(g=>g.length>=3);if(!d.length)continue;let[m,...y]=d,w=[m,...y].flat();for(let[g,p,A]of Cs.triangulateShape(m,y))for(let R of[g,p,A]){let M=w[R];r.push(M.x,i-ri,-M.y),s.push(c.r,c.g,c.b),u.picked&&a.push(M.x,i-ri+.08,-M.y)}for(let g of d)for(let p=0;p<g.length;p++){let A=g[p],R=g[(p+1)%g.length];o.push(A.x,i-ri+.05,-A.y,R.x,i-ri+.05,-R.y)}}}if(r.length){let u=new Rt;u.setAttribute("position",new ft(new Float32Array(r),3)),u.setAttribute("color",new ft(new Float32Array(s),3)),u.computeVertexNormals();let h=new Pt(u,this.floorMaterial);h.renderOrder=1;let d=new Pt(u,this.floorMaskMaterial);d.renderOrder=-2,d.userData.dispose=()=>{},this.floorMeshes.push(h,d)}if(o.length){let u=new Rt;u.setAttribute("position",new ft(new Float32Array(o),3));let h=new ws(u,this.floorLineMaterial);h.renderOrder=1,this.floorMeshes.push(h)}if(a.length){let u=new Rt;u.setAttribute("position",new ft(new Float32Array(a),3));let h=new Float32Array(a.length/3*2);for(let w=0,g=0;w<a.length;w+=3,g+=2)h[g]=a[w]/1.5,h[g+1]=-a[w+2]/1.5;u.setAttribute("uv",new ft(h,2));let d=this.hatchTexture(),m=new Rn({map:d,transparent:!0,depthWrite:!1,side:Vt,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),y=new Pt(u,m);y.renderOrder=3,y.userData.dispose=()=>{u.dispose(),d.dispose(),m.dispose()},this.floorMeshes.push(y)}if(l){let u=this.labelSprite(l.text,l.size);u.position.set(l.x,i-ri+l.size*.6+.5,-l.y),this.floorMeshes.push(u)}for(let u of this.floorMeshes)this.scene.add(u);this.schedule()}dispose(){this.disposed=!0,this.frame&&this.win.cancelAnimationFrame(this.frame),this.win.clearTimeout(this.cameraTimer);for(let e of this.observers)e();this.controls.dispose(),this.clearTiles(),this.ground&&(this.ground.mesh.geometry.dispose(),this.ground=null),this.material.dispose(),this.groundMaterial.dispose(),this.groundMap?.dispose(),this.highlightMaterial.dispose(),this.clearArea();for(let e of[this.ghostMaterial,this.hiddenMaterial,this.floorMaterial,this.floorLineMaterial,this.floorMaskMaterial])e.dispose();this.renderer.dispose(),this.canvas.remove()}toScene(e,t,i){return new G(e-this.origin[0],i-ri,-(t-this.origin[1]))}fromScene(e){return[Math.round((e.x+this.origin[0])*100)/100,Math.round((this.origin[1]-e.z)*100)/100,Math.round((e.y+ri)*100)/100]}groundHeight(e,t){let i=this.ground;if(!i)return this.index?Math.max(this.index.bounds[2],400):410;let r=Math.min(Math.max((e-i.originX)/i.cell,0),i.columns-1),s=Math.min(Math.max((t-i.originY)/i.cell,0),i.rows-1),o=Math.floor(r),a=Math.floor(s),l=Math.min(o+1,i.columns-1),c=Math.min(a+1,i.rows-1),u=r-o,h=s-a,d=(y,w)=>i.heights[w*i.columns+y],m=(d(o,a)*(1-u)+d(l,a)*u)*(1-h)+(d(o,c)*(1-u)+d(l,c)*u)*h;return Number.isNaN(m)?Math.max(this.index?.bounds[2]??400,400):m}groundSettled(){this.groundReady=!0,this.area?.floor&&this.buildFloor();let e=this.pendingPlace;this.pendingPlace=null,e&&this.place(e[0],e[1],e[2],!0)}place(e,t,i,r){if(r&&this.index&&!this.groundReady){this.pendingPlace=[e,t,i];return}let s=this.toScene(e,t,this.groundHeight(e,t)),o=this.camera.position.clone().sub(this.controls.target);(o.lengthSq()<1||o.y/o.length()>.95||o.y/o.length()<.25)&&o.set(.35,.75,.55),o.normalize().multiplyScalar(i);let a=s.clone().add(o);if(!r){this.camera.position.copy(a),this.controls.target.copy(s),this.schedule();return}this.fly={from:this.camera.position.clone(),to:a,fromTarget:this.controls.target.clone(),toTarget:s,start:this.win.performance.now(),duration:1200},this.schedule()}viewRadius(e){return Math.min(Math.max(e*2.6,1300),7500)}updateTiles(e){let t=this.index;if(!t)return;let i=this.controls.target,r=i.x+this.origin[0],s=this.origin[1]-i.z;this.groundMap?.update(r,s,this.camera.position.distanceTo(i),e);let o=t.tileSize/2,a=c=>Math.hypot(c.x*t.tileSize+o-r,c.y*t.tileSize+o-s),l=t.tiles.map(c=>({entry:c,distance:a(c)})).filter(c=>c.distance<=e).sort((c,u)=>c.distance-u.distance);for(let[c,u]of this.tiles)a(u.entry)>e*1.4&&this.unload(c);if(this.tiles.size>qu){let c=[...this.tiles.values()].sort((u,h)=>a(h.entry)-a(u.entry));for(let u of c.slice(0,this.tiles.size-qu))this.unload(u.entry.key)}for(let{entry:c}of l){if(this.loading.size>=Y_)break;if(!(this.tiles.has(c.key)||this.loading.has(c.key)||this.failed.has(c.key))){if(this.tiles.size+this.loading.size>=qu)break;this.load(c)}}this.events.onTiles(this.tiles.size,this.loading.size)}async load(e){let t=this.index;this.loading.add(e.key);try{let[i,r]=await Promise.all([this.events.read(`tiles/${e.key}.bin.gz`,e.bytes),this.events.read(`tiles/${e.key}.json`)]);if(this.disposed||this.index!==t)return;let s=Qd(await nh(i)),o=JSON.parse(new TextDecoder().decode(r));if(this.disposed||this.index!==t)return;let{geometry:a,matrix:l}=K_(s,this.origin),c=ju(new Pt(a,this.material),l),u={entry:e,mesh:c,buildings:o,kinds:s.kinds,matrix:l,origin:[s.origin[0],s.origin[1]],step:[s.step[0],s.step[1]]};this.paint(u),this.tiles.set(e.key,u),this.scene.add(c),this.selectedKey===e.key&&this.selectedBuilding&&this.showHighlight(u,this.selectedBuilding);let h=this.applyArea(u);this.syncHighlight(),this.area?.floor&&(h||!this.areaMeshes.size)&&this.buildFloor()}catch(i){this.failed.add(e.key),this.events.onError(i instanceof Error?i.message:String(i)),this.area?.floor&&!this.areaMeshes.size&&this.buildFloor()}finally{this.loading.delete(e.key),this.lastTileUpdate=0,this.schedule()}}unload(e){let t=this.tiles.get(e);t&&(this.highlight?.key===e&&this.removeHighlight(),this.removeAreaMesh(e),this.scene.remove(t.mesh),t.mesh.geometry.dispose(),this.tiles.delete(e))}clearTiles(){for(let e of[...this.tiles.keys()])this.unload(e);this.failed.clear(),this.events.onTiles(0,this.loading.size)}paint(e){let t=e.mesh.geometry.getAttribute("color"),i=t.array,{kinds:r}=e,s=this.palette,o=this.colorMode==="height",a=(u,h)=>{i[u*4]=h.r*255,i[u*4+1]=h.g*255,i[u*4+2]=h.b*255},l=o?this.ramp(0,!1,new Pe):s.wall,c=o?this.ramp(0,!0,new Pe):s.roof;for(let u=0;u<r.length;u++)a(u,r[u]===1?c:r[u]===2?s.footprint:l);if(o){let u=e.mesh.geometry.getIndex().array,h=new Pe,d=new Pe;for(let m of e.buildings){let y=m[8]-m[5];this.ramp(y,!1,h),this.ramp(y,!0,d);let w=(m[1]+m[2])*3;for(let g=m[1]*3;g<w;g++){let p=u[g],A=r[p];A!==2&&a(p,A===1?d:h)}}}t.needsUpdate=!0}ramp(e,t,i){let r=this.palette.ramp,s=Math.min(Math.max(e/60,0),1)*(r.length-1),o=Math.floor(s);return i.copy(r[o]).lerp(r[Math.min(o+1,r.length-1)],s-o),t&&i.offsetHSL(0,0,.05),i}async loadGround(e){let t=e.ground;if(!t){this.groundSettled();return}try{let i=await this.events.read(t.file,t.columns*t.rows*4);if(this.disposed||this.index!==e)return;let r=new Float32Array(i.slice(0,t.columns*t.rows*4)),s=new Float32Array(t.columns*t.rows*3);for(let u=0;u<t.rows;u++)for(let h=0;h<t.columns;h++){let d=u*t.columns+h;s[d*3]=t.originX+h*t.cell-this.origin[0],s[d*3+1]=Number.isNaN(r[d])?0:r[d]-ri-.4,s[d*3+2]=this.origin[1]-(t.originY+u*t.cell)}let o=new Uint32Array((t.columns-1)*(t.rows-1)*6),a=0;for(let u=0;u<t.rows-1;u++)for(let h=0;h<t.columns-1;h++){let d=u*t.columns+h,m=d+1,y=d+t.columns,w=y+1;Number.isNaN(r[d])||Number.isNaN(r[m])||Number.isNaN(r[y])||Number.isNaN(r[w])||(o[a++]=d,o[a++]=y,o[a++]=m,o[a++]=m,o[a++]=y,o[a++]=w)}let l=new Rt;l.setAttribute("position",new ft(s,3)),l.setIndex(new ft(o.subarray(0,a),1)),l.computeVertexNormals();let c=new Pt(l,this.groundMaterial);c.matrixAutoUpdate=!1,c.visible=this.groundVisible&&!this.groundMap,c.renderOrder=-1,this.ground={mesh:c,heights:r,...t},this.groundMap?.reshape(),this.scene.add(c),this.schedule(),this.groundSettled()}catch(i){this.events.onError(i instanceof Error?i.message:String(i)),this.groundSettled()}}select(e){this.removeHighlight(),this.selectedKey=e?.tile.entry.key??null,this.selectedBuilding=e?.building??null,e&&this.showHighlight(e.tile,e.building);let t=e?.building;this.events.onSelect(t?{egid:t[0],ground:t[5],roof:t[8],height:Math.round((t[8]-t[5])*10)/10,triangles:t[2],center:[(t[3]+t[6])/2,(t[4]+t[7])/2]}:null,e?.at),this.schedule()}showHighlight(e,t){let i=e.mesh.geometry,r=i.getIndex();if(!r)return;let s=new Rt;s.setAttribute("position",i.getAttribute("position")),s.setIndex(new ft(r.array.slice(t[1]*3,(t[1]+t[2])*3),1));let o=ju(new Pt(s,this.highlightMaterial),e.matrix);this.highlight={mesh:o,key:e.entry.key,building:t},this.syncHighlight(),this.scene.add(o)}removeHighlight(){this.highlight&&(this.scene.remove(this.highlight.mesh),this.highlight.mesh.geometry.dispose(),this.highlight=null)}pick(e,t){let i=this.canvas.getBoundingClientRect(),r=new ke((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let s=[...this.tiles.values()].map(h=>h.mesh),[o]=this.raycaster.intersectObjects(s,!1);if(!o||o.faceIndex==null){this.select(null);return}let a=[...this.tiles.values()].find(h=>h.mesh===o.object),l=a?th(a.buildings,o.faceIndex):null,[c,u]=this.fromScene(o.point.addScaledVector(this.raycaster.ray.direction,1));this.select(a&&l?{tile:a,building:l,at:[c,u]}:null)}readTheme(){let e=this.doc.createElement("span");e.style.display="none",this.container.appendChild(e);let t=(o,a)=>(e.style.color=`var(${o}, ${a})`,J_(this.win.getComputedStyle(e).color,a)),i=t("--pane-bg","#181818"),r=t("--accent-color","#3b82f6");e.remove();let s=Q_(i)<.4;this.groundMap?.setDark(s),this.palette=s?{background:i,accent:r,wall:new Pe("#8f8d88"),roof:new Pe("#a77561"),footprint:new Pe("#4a4946"),ground:new Pe("#2b2b2a"),ramp:["#56657a","#6f8a8c","#a3a07c","#c08b63","#c9665a"].map(o=>new Pe(o))}:{background:i,accent:r,wall:new Pe("#d9d6d0"),roof:new Pe("#b97a5f"),footprint:new Pe("#b5b2ab"),ground:new Pe("#e4e1da"),ramp:["#8ea2bd","#97b7b3","#d0c896","#dda57a","#d9756a"].map(o=>new Pe(o))},this.renderer.setClearColor(i),this.scene.fog.color.copy(i),this.groundMaterial.color.copy(this.palette.ground),this.highlightMaterial.color.copy(r),this.ghostMaterial.color.copy(r),this.floorLineMaterial.color.copy(s?new Pe("#d6d3cc"):new Pe("#3a3a38"));for(let o of this.tiles.values())this.paint(o);this.schedule()}listen(){let e=this.win.ResizeObserver??ResizeObserver,t=new e(()=>this.resize());t.observe(this.container),this.observers.push(()=>t.disconnect());let i=this.win.MutationObserver??MutationObserver,r=new i(()=>this.readTheme());r.observe(this.doc.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.doc.body&&r.observe(this.doc.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.observers.push(()=>r.disconnect());let s=this.win.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>this.readTheme();s?.addEventListener("change",o),this.observers.push(()=>s?.removeEventListener("change",o));let a=h=>{h.button===0&&(this.pointerDown={x:h.clientX,y:h.clientY,time:h.timeStamp})},l=h=>{let d=this.pointerDown;this.pointerDown=null,!(!d||h.button!==0)&&Math.hypot(h.clientX-d.x,h.clientY-d.y)<4&&h.timeStamp-d.time<500&&this.pick(h.clientX,h.clientY)},c=h=>{h.preventDefault(),this.events.onError("WebGL context lost")},u=()=>this.schedule();this.canvas.addEventListener("pointerdown",a),this.canvas.addEventListener("pointerup",l),this.canvas.addEventListener("webglcontextlost",c),this.canvas.addEventListener("webglcontextrestored",u),this.observers.push(()=>{this.canvas.removeEventListener("pointerdown",a),this.canvas.removeEventListener("pointerup",l),this.canvas.removeEventListener("webglcontextlost",c),this.canvas.removeEventListener("webglcontextrestored",u)})}resize(){let e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.schedule()}};function Cl(){return N.createElement(N.Fragment,null,N.createElement("strong",null,Qe("model.missingTitle")),N.createElement("span",null,Qe("model.missingText")),N.createElement("code",null,"npm run update-model && npm run build"))}var Il=null;function Af(n){Il?.zoomBy(n)}function ew(){let n=qe.settings.get().camera;return n&&Array.isArray(n.position)&&Array.isArray(n.target)?n:null}function Cf({area:n,focus:e,onPick:t}){let i=Ri(),r=N.useRef(null),s=N.useRef(null),[o,a]=N.useState(null),l=N.useRef(t);l.current=t,N.useEffect(()=>{ho()},[]),N.useEffect(()=>{let u=r.current;if(!u)return;let h;try{h=new Al(u,{read:lh,onTiles:(d,m)=>{let y=Ii();(y.loadedTiles!==d||y.loadingTiles!==m)&&Mn({loadedTiles:d,loadingTiles:m})},onSelect:(d,m)=>{Mn({selected:d}),l.current?.(d?[...m?[m]:[],d.center]:[])},onCamera:d=>{qe.settings.set("camera",d)},onError:d=>a(d),tile:(d,m,y,w)=>qe.backend.call("campus.tile",{z:d,x:m,y,dark:w},{encoding:"bytes"})},ew())}catch(d){a(d instanceof Error?d.message:String(d));return}return s.current=h,Il=h,()=>{Il===h&&(Il=null),s.current=null,h.dispose()}},[]),N.useEffect(()=>{s.current?.setIndex(i.status==="ready"?i.index:null)},[i.status,i.index]),N.useEffect(()=>{s.current?.setColorMode(i.colorMode)},[i.colorMode]),N.useEffect(()=>{s.current?.setShowGround(i.showGround)},[i.showGround]),N.useEffect(()=>{s.current?.setArea(n)},[n]);let c=N.useRef(0);return N.useEffect(()=>{!e||e===c.current||!n||i.status!=="ready"||(c.current=e,s.current?.flyToArea(n.focus??n.polygons,!!n.floor))},[e,i.status,n?1:0]),N.useEffect(()=>{let u=Ii().flyTarget;i.flyRequest&&u&&s.current?.flyTo(u.east,u.north,u.distance)},[i.flyRequest]),N.useEffect(()=>{let u=d=>{d.key==="Escape"&&Ii().selected&&s.current?.clearSelection()},h=r.current?.ownerDocument;return h?.addEventListener("keydown",u),()=>h?.removeEventListener("keydown",u)},[]),N.createElement("div",{className:"z3d-stage",ref:r},i.status==="loading"&&N.createElement("div",{className:"z3d-message"},Qe("model.loading")),i.status==="missing"&&N.createElement("div",{className:"z3d-message"},N.createElement(Cl,null)),i.status==="error"&&N.createElement("div",{className:"z3d-message"},N.createElement("strong",null,Qe("model.errorTitle")),N.createElement("span",{className:"z3d-error"},i.error)),o&&i.status==="ready"&&i.loadedTiles===0&&N.createElement("div",{className:"z3d-message"},N.createElement("strong",null,Qe("view.failed")),N.createElement("span",{className:"z3d-error"},o)),i.status==="ready"&&i.loadingTiles>0&&N.createElement("div",{className:"z3d-status",role:"status"},Qe("view.loadingTiles",{count:i.loadingTiles})))}var js={teaching:"#4a90d9",lab:"#9a6dd7",office:"#4caf72",circulation:"#b9bdc2",toilet:"#3fb8c6",service:"#8d9298",other:"#e09a3e"},tw="#f1f0ec",nw=["teaching","lab","office","circulation","toilet","service","other"],Nl=null,Rl=new WeakMap;function iw(n){let e=Rl.get(n);if(e)return e;let t=new Promise((i,r)=>{let s=n.createElement("script");s.type="module",s.src=qe.assets.url("campus-map.js"),s.onload=()=>{let o=n.defaultView?.valleyPolyCampusMap;o?i(o):(Rl.delete(n),s.remove(),r(new Error("mapUnavailable")))},s.onerror=()=>{Rl.delete(n),s.remove(),r(new Error("mapUnavailable"))},n.head.appendChild(s)});return Rl.set(n,t),t}var Ys=n=>n.map(e=>e.map(t=>t.map(([i,r])=>er(r,i))));function rw(n,e){return e.find(t=>t.polygons.some(i=>qd(n,i)))?.code??null}function sw(n){let e=lo.filter(r=>r.campus===n),t=e.map(r=>r.center[0]),i=e.map(r=>r.center[1]);return[Math.min(...t),Math.min(...i),Math.max(...t),Math.max(...i)]}function ow({outlines:n,selected:e,rooms:t,room:i,focus:r,place:s}){let o=N.useRef(null),a=N.useRef(null),[l,c]=N.useState("loading"),u=N.useRef({outlines:n,selected:e,rooms:t});return u.current={outlines:n,selected:e,rooms:t},N.useEffect(()=>{let h=o.current;if(!h)return;let d=!0,m=null;iw(h.ownerDocument).then(p=>{if(!d)return;m=p.createCampusMap({container:h,camera:po,roomColors:js,tile:(R,M,E,C)=>qe.backend.call("campus.tile",{z:R,x:M,y:E,dark:C},{encoding:"bytes"}),onSelect:R=>Di(R,Me("title"),!1),onRoom:R=>Wt({room:R}),onCamera:hh}),a.current=m,Nl=m;let A=u.current;A.outlines&&m.setOutlines(A.outlines),m.setSelected(A.selected),m.setRooms(A.rooms),c("ready")},()=>{d&&c("error")});let y=h.ownerDocument,w=y.defaultView?.MutationObserver,g=w?new w(()=>a.current?.refreshTheme()):null;return g?.observe(y.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),y.body&&g?.observe(y.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),()=>{d=!1,g?.disconnect(),Nl===m&&(Nl=null),m?.dispose(),a.current=null}},[]),N.useEffect(()=>{n&&a.current?.setOutlines(n)},[n,l]),N.useEffect(()=>{a.current?.setSelected(e)},[e,l]),N.useEffect(()=>{a.current?.setRooms(t)},[t,l]),N.useEffect(()=>{a.current?.setRoom(i?.id??null)},[i,t,l]),N.useEffect(()=>{s&&l==="ready"&&a.current?.flyTo({center:s.center,zoom:s.zoom})},[s?.request,l]),N.useEffect(()=>{if(!r||l!=="ready")return;let h=i?Kl(i.polygons):null;if(h){a.current?.fit(h,19.5);return}let d=e?n?.find(w=>w.code===e):null,m=d?Kl(d.polygons):null,y=Qi(e);m?a.current?.fit(m):y?a.current?.flyTo({center:y.center,zoom:17.5}):a.current?.fit(sw("zentrum"),16.5)},[r,l,n?1:0]),N.createElement("div",{className:"poly-map-stage",ref:o},l==="loading"&&N.createElement("div",{className:"z3d-message"},Me("map.loading")),l==="error"&&N.createElement("div",{className:"z3d-message"},N.createElement("span",{className:"z3d-error"},Me("map.failed"))))}var Pl=n=>N.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},n.map(e=>N.createElement("path",{key:e,d:e})));function aw({view:n}){let e=Ri(),t=l=>n==="3d"?Af(l):Nl?.zoomBy(l),i=e.colorMode==="height",r=`${Qe("display.color")}: ${Qe(i?"display.height":"display.surfaces")}`,s=`${Qe("display.ground")} \xB7 ${Qe("display.groundHint")}`,o=n==="3d"?"map":"3d",a=Me(o==="3d"?"view.show3d":"view.show2d");return N.createElement("div",{className:"poly-map-controls","data-tooltip-placement":"left"},N.createElement("button",{type:"button",className:"poly-round-btn",title:Me("map.zoomIn"),"aria-label":Me("map.zoomIn"),onClick:()=>t(1)},Pl(["M12 5v14","M5 12h14"])),N.createElement("button",{type:"button",className:"poly-round-btn",title:Me("map.zoomOut"),"aria-label":Me("map.zoomOut"),onClick:()=>t(-1)},Pl(["M5 12h14"])),N.createElement("button",{type:"button",className:"poly-round-btn poly-round-text",title:a,"aria-label":a,"data-view":o,onClick:()=>yh(o)},o==="3d"?"3D":"2D"),n==="3d"&&N.createElement(N.Fragment,null,N.createElement("button",{type:"button",className:`poly-round-btn ${i?"active":""}`,"data-control":"colour","aria-pressed":i,title:r,"aria-label":r,onClick:()=>ch(i?"surfaces":"height")},Pl(["M5 20V12","M10 20V7","M15 20V10","M20 20V4","M3 20h18"])),N.createElement("button",{type:"button",className:`poly-round-btn ${e.showGround?"active":""}`,"data-control":"ground","aria-pressed":e.showGround,title:s,"aria-label":Qe("display.ground"),onClick:()=>uh(!e.showGround)},Pl(["M3 17l5-6 4 4 3-3 6 5","M3 20h18"]))))}function lw({levels:n,level:e,code:t}){return n.length?N.createElement("div",{className:"poly-floors",role:"group","aria-label":Me("floors.label",{code:t})},n.map(i=>N.createElement("button",{key:i.id,type:"button",className:i.id===e?"active":"","aria-pressed":i.id===e,title:Me("floors.show",{floor:i.name}),onClick:()=>mh(i.id===e?"":i.id)},i.name))):null}function cw({room:n}){return N.createElement("div",{className:"z3d-card poly-room-card",role:"dialog","aria-label":n.name},N.createElement("div",{className:"z3d-card-head"},N.createElement("span",null,n.name),N.createElement("button",{type:"button",className:"z3d-card-close",title:Me("room.close"),"aria-label":Me("room.close"),onClick:()=>Wt({room:null})},N.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true"},N.createElement("path",{d:"M18 6 6 18"}),N.createElement("path",{d:"m6 6 12 12"})))),N.createElement("dl",{className:"z3d-facts"},n.type&&N.createElement(N.Fragment,null,N.createElement("dt",null,Me("room.type")),N.createElement("dd",{title:n.type},n.type)),n.use&&N.createElement(N.Fragment,null,N.createElement("dt",null,Me("room.use")),N.createElement("dd",{title:n.use},n.use))))}function uw(){return N.createElement("div",{className:"poly-legend","aria-label":Me("legend.label")},nw.map(n=>N.createElement("span",{key:n},N.createElement("i",{style:{background:js[n]}}),Me(`room.kind.${n}`))))}function If(){let n=Li(),e=Ni();N.useEffect(()=>{ph(),fo()},[]);let t=n.building,i=t?.code??null,r=N.useRef(0);e.focusOn===i&&(r.current=e.focus);let s=i?e.outlines?.find(w=>w.code===i)??null:null,o=i&&e.levels?.get(i)||[],a=o.some(w=>w.id===n.level)?n.level:"";N.useEffect(()=>{a&&mo(a)},[a]);let l=a?e.rooms.get(a)??null:null,c=a?e.roomsStatus.get(a):void 0,u=N.useMemo(()=>(e.outlines??[]).map(w=>({code:w.code,polygons:Ys(w.polygons)})),[e.outlines]),h=N.useMemo(()=>{if(!s)return null;let w=u.find(A=>A.code===s.code)?.polygons??Ys(s.polygons),g=a?Xd(o).get(a):void 0,p=e.room&&e.room.level===a?e.room:null;return{polygons:w,floor:l&&g!==void 0?{elevation:g,rooms:l.map(A=>A.id===p?.id?{color:tw,polygons:Ys(A.polygons),picked:!0,label:jd(A.name,i??"")}:{color:js[A.kind],polygons:Ys(A.polygons)})}:null,focus:p?Ys(p.polygons):null}},[s,u,a,l,o,e.room]),d=Ri(),m=t?`${t.code} \xB7 ${$n(t)}`:Me("title"),y=n.view==="3d"&&t&&t.city!=="Z\xFCrich";return N.createElement("div",{className:"poly-page poly-campus-page"},N.createElement("div",{className:"poly-bar poly-page-head"},N.createElement("h1",{className:"poly-page-title",title:m},m)),N.createElement("div",{className:"poly-campus-body"},n.view==="map"?N.createElement(ow,{outlines:e.outlines,selected:i,rooms:l,room:e.room,focus:r.current,place:e.place}):N.createElement(Cf,{area:h,focus:r.current,onPick:w=>{let g=w.map(p=>rw(p,u)).find(Boolean);g&&g!==i&&Di(g,Me("title"),!1)}}),i&&N.createElement(lw,{levels:o,level:a,code:i}),N.createElement(aw,{view:n.view}),N.createElement("div",{className:"poly-notes",role:"status"},a&&c==="loading"&&N.createElement("span",null,Me("floors.loading")),a&&c==="error"&&N.createElement("span",{className:"z3d-error"},Me("floors.failed")),e.outlinesStatus==="error"&&N.createElement("span",{className:"z3d-error"},Me("outlines.failed")),y&&N.createElement("span",null,Me("view.outside"))),N.createElement("div",{className:"poly-map-foot"},l&&l.length>0&&N.createElement(uw,null),(n.view==="map"||d.status==="ready")&&N.createElement("div",{className:"z3d-attribution"},n.view==="map"?Me("map.attribution"):`${Qe("model.attribution")} \xB7 ${Me("map.attribution")}`)),e.room&&N.createElement(cw,{room:e.room})))}var Ku={zentrum:"8591123",haldenegg:"8591174",hoengg:"8591122",hb:"8587348",hbQuai:"8587349"},XA=[Ku.zentrum,Ku.hoengg,Ku.hb];var dw=/^\d{4}-\d{2}-\d{2}$/,Rf=n=>typeof n=="string"&&dw.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),Ju=n=>{let e=new Date(`${n}T00:00:00Z`).getUTCDay();return e===0||e===6};function Qu(n,e,t=new Date){let[i,r,s]=n.split("-").map(Number),[o,a]=e.time.split(":").map(Number),l=new Date(i,r-1,s,o,a+(e.delay??0));return Math.floor((l.getTime()-t.getTime())/6e4)}var ed=(n,e,t=new Date)=>e.filter(i=>Qu(n,i,t)>=0);function Pf(n){let e=[];for(let t of n)t.stops.length>e.length&&(e=t.stops.map(i=>i.name));return e}var td="elink",Nf=n=>n===td;var Df=["M5 16V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z","M5 11h14","M9 6h6","M8 14h.01","M16 14h.01","M7 17v3","M17 17v3"],kf=`
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
`,hw=5,pw=["M15 6l-6 6 6 6"],fw=["M9 6l6 6-6 6"],Lf=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],$r=(n=new Date)=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,Ll=(n,e)=>{let t=new Date(`${n}T00:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)},mw=n=>{let e=Ll(n,1);for(;Ju(e);)e=Ll(e,1);return e},gw=(n,e=new Date)=>Rf(n)&&n>=$r(e)?n:$r(e);function Of(n,e){let t=n.React,i=t.createElement,r=({shapes:S})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...S.map(L=>i("path",{key:L,d:L}))),s=(S,L)=>Object.entries(L).reduce((U,[H,Z])=>U.replace(`{${H}}`,String(Z)),S),o=S=>{let L=`elink.error.${S instanceof Error?S.message:""}`;return e(L)===L?e("elink.error.serviceError"):e(L)},a=S=>S===1?e("elink.runs.one"):s(e("elink.runs.other"),{count:S}),l=()=>n.ui.language()||"en",c=(S,L)=>new Intl.DateTimeFormat(l(),{...L,timeZone:"UTC"}).format(new Date(`${S}T00:00:00Z`)),u=S=>c(S,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),h=(S=!1)=>n.workspace.openMainTab({instanceId:td,title:e("elink.title"),newTab:S}),d=S=>{n.settings.set("elinkDate",S)};function m(){let[,S]=t.useState(0);t.useEffect(()=>{let U=()=>S(k=>k+1),H=[n.ui.onLanguageChanged(U),n.settings.subscribe(U)],Z=setInterval(U,2e4);return()=>{for(let k of H)k();clearInterval(Z)}},[]);let L=new Date;return{date:gw(n.settings.get().elinkDate,L),now:L}}function y(S,L){let[U,H]=t.useState({key:"",data:null,error:"",loading:!0});return t.useEffect(()=>{let Z=!0;return H(k=>({key:S,data:k.key===S?k.data:null,error:"",loading:!0})),n.backend.call("elink.day",{date:S,fresh:L>0}).then(k=>{Z&&H({key:S,data:k,error:"",loading:!1})},k=>{Z&&H({key:S,data:null,error:o(k),loading:!1})}),()=>{Z=!1}},[S,L]),U}function w(){let[S,L]=t.useState(0),[U,H]=t.useState(!1);return{revision:S,refreshing:U,refresh:()=>{H(!0),L(k=>k+1),setTimeout(()=>H(!1),600)}}}let g=S=>(S?.directions??[]).filter(L=>L.departures.length>0),p=S=>s(e("elink.firstLast"),{first:S[0].time,last:S.at(-1).time});function A({run:S,date:L,now:U,isToday:H,next:Z,arrival:k}){let W=S.stops.at(-1),J=H?Qu(L,S,U):null,Q=J!==null&&J>=0&&J<60,ce=S.stops.map(K=>K.time?`${K.name} ${K.time}`:K.name).join(" \xB7 ");return i("div",{className:`elink-row${J!==null&&J<0?" past":""}${Z?" next":""}`,"data-trip":S.trip,title:ce},i("span",{className:"elink-line"},S.line),i("span",{className:"elink-to"},W.name),i("span",{className:"elink-time"},S.time,S.delay&&S.delay>0?i("span",{className:"elink-delay",title:s(e("elink.delay"),{minutes:S.delay})},`+${S.delay}`):null),k?i("span",{className:"elink-arrival",title:s(e("elink.arrival"),{time:W.time,stop:W.name})},W.time?`\u2192 ${W.time}`:""):null,i("span",{className:"elink-minutes","aria-label":Q?s(e("elink.in"),{minutes:J}):void 0},Q?`${J}'`:""))}function R({date:S}){let L=mw(S);return i("div",{className:"elink-empty",role:"status"},i("strong",null,e(Ju(S)?"elink.weekend":"elink.noService")),i("span",null,i("button",{type:"button",className:"elink-link",onClick:()=>d(L)},s(e("elink.showDay"),{day:c(L,{weekday:"long",day:"numeric",month:"long"})}))))}function M({direction:S,date:L,now:U,isToday:H}){let Z=S.departures,k=(H?ed(L,Z,U):Z).slice(0,hw);return i("section",{className:"elink-group","data-direction":S.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${S.id}`)),i("span",{className:"elink-span",title:p(Z)},`${Z[0].time}\u2013${Z.at(-1).time}`)),k.length?k.map((W,J)=>i(A,{key:`${W.trip}:${W.time}`,run:W,date:L,now:U,isToday:H,next:H&&J===0})):i("div",{className:"elink-note"},`${e("elink.ended")} `,i("button",{type:"button",className:"elink-link",onClick:W=>h(n.ui.hasModKey(W))},e("elink.showTimetable"))))}function E({date:S,refresh:L,refreshing:U}){let H=S===$r(),Z=`${c(S,{weekday:"short"})} ${c(S,{day:"numeric"})}`;return i("div",{className:"poly-bar"},i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("day.previous"),"aria-label":e("day.previous"),disabled:H,onClick:()=>d(Ll(S,-1))},i(r,{shapes:pw})),i("button",{type:"button",className:`poly-day-label${H?" today":""}`,title:`${u(S)} \xB7 ${e(H?"day.today":"day.backToToday")}`,"aria-current":H?"date":void 0,onClick:()=>d($r())},Z),i("button",{type:"button",className:"poly-icon-btn",title:e("day.next"),"aria-label":e("day.next"),onClick:()=>d(Ll(S,1))},i(r,{shapes:fw}))),i("button",{type:"button",className:`poly-icon-btn${U?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:L},i(r,{shapes:Lf})))}function C(){let{date:S,now:L}=m(),{revision:U,refreshing:H,refresh:Z}=w(),k=y(S,U),W=g(k.data),J=S===$r(L),Q=k.error?i("div",{className:"poly-note error",role:"alert"},k.error):k.data?W.length?i(t.Fragment,null,...W.map(ce=>i(M,{key:ce.id,direction:ce,date:S,now:L,isToday:J}))):i(R,{date:S}):i("div",{className:"poly-note"},e("elink.loading"));return i(t.Fragment,null,i(E,{date:S,refresh:Z,refreshing:H}),i("div",{className:"elink-list"},Q,i("div",{className:"elink-credit"},e("elink.credit"))))}function D({direction:S,date:L,now:U,isToday:H}){let Z=S.departures,k=H?ed(L,Z,U)[0]:void 0;return i("section",{className:"elink-group","data-direction":S.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${S.id}`)),i("span",{className:"elink-span"},`${a(Z.length)} \xB7 ${p(Z)}`)),i("div",{className:"elink-route"},Pf(Z).join(" \xB7 ")),Z.map(W=>i(A,{key:`${W.trip}:${W.time}`,run:W,date:L,now:U,isToday:H,next:W===k,arrival:!0})))}function v({instanceId:S}){let{date:L,now:U}=m(),{revision:H,refreshing:Z,refresh:k}=w(),W=y(L,H),J=g(W.data),Q=L===$r(U);t.useEffect(()=>{n.workspace.setMainTabTitle(e("elink.title"),S)},[S,n.ui.language()]);let ce=W.error?i("div",{className:"poly-note error",role:"alert"},W.error):W.data?J.length?i("div",{className:"elink-columns"},J.map(K=>i(D,{key:K.id,direction:K,date:L,now:U,isToday:Q}))):i(R,{date:L}):i("div",{className:"poly-note"},e("elink.loading"));return i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:"poly-bar-balance","aria-hidden":!0}),i("h1",{className:"poly-page-title"},`${e("elink.title")} \xB7 ${u(L)}`),i("button",{type:"button",className:`poly-icon-btn${Z?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:k},i(r,{shapes:Lf}))),i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},ce,i("div",{className:"elink-credit"},e("elink.credit")))))}return{ElinkPanelBody:C,ElinkPage:v,openElink:h}}var Ks=["news","zukunftsblog","globe","media"];var yw=n=>Ks.includes(n),Uf=n=>yw(n)?n:"news";var xw=/^https:\/\/ethz\.ch\/(en|de)\/news-(?:and-events|und-veranstaltungen)\/eth-news\/news\/\d{4}\/\d{2}\/[A-Za-z0-9._%-]+\.html$/,nd=n=>typeof n=="string"&&xw.test(n);var id="news",zf=n=>n===id||rd(n)!==null,Dl=n=>`news:${n}`,rd=n=>typeof n=="string"&&n.startsWith("news:")&&nd(n.slice(5))?n.slice(5):null;var kl=["M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V18a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z","M16 9h2.5A1.5 1.5 0 0 1 20 10.5V18a2 2 0 0 1-4 0","M7 8h6","M7 11.5h6","M7 15h3.5"],bw={news:kl,zukunftsblog:["M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16z","M13.5 6.5l4 4","M14 20h6"],globe:["M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0","M3.6 9h16.8","M3.6 15h16.8","M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9","M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9"],media:["M4 10v4a1 1 0 0 0 1 1h2.5L13 19V5L7.5 9H5a1 1 0 0 0-1 1z","M16.5 9a4 4 0 0 1 0 6","M19 6.5a7.5 7.5 0 0 1 0 11","M7.5 15l1 4.5"]},Ff={news:"palette:primary-blue",zukunftsblog:"palette:orange",globe:"palette:teal",media:"palette:rose"},vw=["M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13","M20 20l-4.8-4.8"],_w=["M6 6l12 12","M18 6L6 18"],Bf=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],Hf=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],ww=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],Mw=["M9 7.5v9l7.5-4.5z"],Sw=["M9 6l6 6-6 6"],Ew=["M3.5 4.5v6.3a1 1 0 0 0 .3.7l8.7 8.7a1.5 1.5 0 0 0 2.1 0l5.3-5.3a1.5 1.5 0 0 0 0-2.1L11.2 4.1a1 1 0 0 0-.7-.3H4.3a.8.8 0 0 0-.8.7z","M8 8.5h.01"],Tw=7*864e5,Zf=`
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
/* The four feed tags share the row equally so they always fit the sidebar (27 Nov: with counts they overflowed it). */
.poly-bar.news-tags { overflow: hidden; }
.news-tags .poly-tile { flex: 1 1 0; min-width: 0; justify-content: center; gap: 5px; padding: 0 5px; }
.news-tags .poly-tile > span:last-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.poly-panel .poly-bar.news-search-bar { padding: 0 var(--space-2, 8px); }
.news-search-bar .search-field-row { flex: 1; min-width: 0; }
.news-search-bar { gap: 4px; }
.news-topic { border: 0; font-family: inherit; cursor: pointer; }
.news-topic:hover { background: color-mix(in srgb, var(--title-color) 12%, var(--hover-bg)); color: var(--text-color); }
.news-topic.on { background: var(--accent-tint-bg); color: var(--accent-color); }
.news-topic:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 1px; }
.poly-icon-btn.filtered:not(.active) { color: var(--accent-color); }
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
`,Js=(n,e,t)=>{let i=Date.parse(n);return Number.isNaN(i)?"":new Intl.DateTimeFormat(e,{timeZone:"Europe/Zurich",...t}).format(new Date(i))},Vf=(n,e=Date.now())=>{let t=Date.parse(n);return!Number.isNaN(t)&&e-t<Tw&&t<=e+864e5};function Aw(n,e){let t=e.toLocaleLowerCase().split(/\s+/).filter(Boolean);return t.length?n.filter(i=>{let r=[i.title,i.summary,i.author,...i.topics].join(" ").toLocaleLowerCase();return t.every(s=>r.includes(s))}):n}var Gf=(n,e)=>e.length?n.filter(t=>e.some(i=>t.topics.includes(i))):n;function Cw(n,e="en"){let t=new Map;for(let i of n)for(let r of i.topics)t.set(r,(t.get(r)??0)+1);return[...t].map(([i,r])=>({tag:i,count:r})).sort((i,r)=>r.count-i.count||i.tag.localeCompare(r.tag,e))}var Wf=n=>Array.isArray(n)?[...new Set(n.filter(e=>typeof e=="string"&&e.length>0))]:[];function $f(n,e){let t=n.React,i=t.createElement,r=({shapes:T})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...T.map(x=>i("path",{key:x,d:x}))),s=(T,x)=>Object.entries(x).reduce(($,[X,b])=>$.replace(`{${X}}`,String(b)),T),o=T=>{let x=`news.error.${T instanceof Error?T.message:""}`;return e(x)===x?e("news.error.serviceError"):e(x)},a=()=>(n.ui.language()||"en").toLowerCase().startsWith("de")?"de":"en",l=()=>n.ui.language()||"en",c=T=>e(`news.feed.${T}`);function u(T){let x=Date.parse(T);if(Number.isNaN(x))return"";let $=f=>Js(new Date(f).toISOString(),"en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}),X=Date.now();if($(x)===$(X))return e("day.today");if($(x)===$(X-864e5))return e("news.yesterday");let b=Js(T,"en",{year:"numeric"})===Js(new Date(X).toISOString(),"en",{year:"numeric"});return Js(T,l(),b?{day:"numeric",month:"short"}:{day:"numeric",month:"short",year:"numeric"})}let h=T=>Js(T,l(),{day:"numeric",month:"long",year:"numeric"});function d(){let[,T]=t.useState(0);t.useEffect(()=>{let $=()=>T(b=>b+1),X=[n.ui.onLanguageChanged($),n.settings.subscribe($)];return()=>{for(let b of X)b()}},[]);let x=n.settings.get();return{feed:Uf(x.newsFeed),tags:Wf(x.newsTags),language:a()}}let m=T=>{let x=Wf(n.settings.get().newsTags);n.settings.set("newsTags",x.includes(T)?x.filter($=>$!==T):[...x,T].slice(-20))},y=()=>{n.settings.set("newsTags",[])},w=new Map,g=new Map,p=new Map,A=new Map,R=new Map,M=(T,x)=>{let $=R.get(T);if($)return $;let X=x().finally(()=>R.delete(T));return R.set(T,X),X},E=(T,x,$,X)=>{for(T.delete(x),T.set(x,$);T.size>X;)T.delete(T.keys().next().value)},C=(T,x,$)=>M(`feed:${x}:${T}:${$}`,()=>n.backend.call("news.feed",{feed:T,language:x,fresh:$}).then(X=>{E(w,`${x}:${T}`,X,8);for(let b of X)E(A,b.url,b,1e3);return X})),D=(T,x)=>M(`article:${T}:${x}`,()=>n.backend.call("news.article",{url:T,fresh:x}).then($=>(E(g,T,$,60),$))),v=T=>M(`picture:${T}`,()=>n.backend.call("image",{url:T}).then(x=>(E(p,T,x,80),x))),S=T=>{g.has(T)&&p.has(g.get(T).picture?.src??"")||D(T,!1).then(x=>x.picture?v(x.picture.src):void 0).catch(()=>{})};function L(T,x,$,X){let b=T!==null&&x===0?X?.get(T):void 0,[f,I]=t.useState(()=>b!==void 0?{key:T,data:b,error:"",loading:!1}:{key:null,data:null,error:"",loading:T!==null});return t.useEffect(()=>{if(T===null)return;let O=x===0?X?.get(T):void 0;if(O!==void 0){I({key:T,data:O,error:"",loading:!1});return}let V=!0;return I(re=>({key:T,data:re.key===T?re.data:null,error:"",loading:!0})),$(x>0).then(re=>{V&&I({key:T,data:re,error:"",loading:!1})},re=>{V&&I({key:T,data:null,error:o(re),loading:!1})}),()=>{V=!1}},[T,x]),f.key===T?f:b!==void 0?{data:b,error:"",loading:!1}:{data:null,error:"",loading:T!==null}}function U(T=350){let[x,$]=t.useState(!1);return t.useEffect(()=>{let X=setTimeout(()=>$(!0),T);return()=>clearTimeout(X)},[]),x}function H(){let[T,x]=t.useState(0),[$,X]=t.useState(!1);return{revision:T,refreshing:$,refresh:()=>{X(!0),x(f=>f+1),setTimeout(()=>X(!1),600)}}}let Z=(T,x,$)=>L(`${x}:${T}`,$,X=>C(T,x,X),w);function k(T,x,$){let X=()=>Object.fromEntries(Ks.flatMap(O=>w.has(`${x}:${O}`)?[[O,w.get(`${x}:${O}`)]]:[])),b=`${x}:${$}`,[f,I]=t.useState(()=>({key:b,byFeed:$===0?X():{}}));return t.useEffect(()=>{let O=!0;I(V=>V.key===b?V:{key:b,byFeed:$===0?X():{}});for(let V of[T,...Ks.filter(re=>re!==T)])$===0&&w.has(`${x}:${V}`)||C(V,x,$>0).then(re=>{O&&I(le=>({key:b,byFeed:{...le.key===b?le.byFeed:{},[V]:re}}))},()=>{});return()=>{O=!1}},[b]),f.key===b?f.byFeed:{}}function W(T){let[x,$]=t.useState(!1);return t.useEffect(()=>{let X=T.current,b=X?.ownerDocument.defaultView?.IntersectionObserver;if(!X||x)return;if(!b){$(!0);return}let f=new b(I=>{I.at(-1)?.isIntersecting&&($(!0),f.disconnect())},{rootMargin:"300px"});return f.observe(X),()=>f.disconnect()},[x]),x}let J=T=>L(T,0,()=>v(T),p);function Q(){let T=()=>{let X=n.getState().activePluginTab;return X?.pluginId===n.pluginId?X.instanceId:void 0},[x,$]=t.useState(T);return t.useEffect(()=>n.subscribe(()=>$(T())),[]),x}let ce=(T=!1)=>n.workspace.openMainTab({instanceId:id,title:e("news.title"),newTab:T}),K=(T,x,$=!1)=>n.workspace.openMainTab({instanceId:Dl(T),title:x,newTab:$}),oe=(T,x,$=!1)=>nd(T)?K(T,x,$):void n.links.open(T),ue=async(T,x,$)=>{T.preventDefault();let X=await n.ui.openMenu([{id:"tab",label:e("openInNewTab"),icon:i(r,{shapes:ww})},{id:"website",label:e("news.openWebsite"),icon:i(r,{shapes:Hf})},...$?[{type:"separator"},{id:"refresh",label:e("refresh"),icon:i(r,{shapes:Bf})}]:[]],{x:T.clientX,y:T.clientY});X==="tab"&&K(x.url,x.title,!0),X==="website"&&n.links.open(x.url),X==="refresh"&&$?.()},Oe=(T,x)=>({onPointerEnter:()=>S(T.url),onFocus:()=>S(T.url),onClick:$=>K(T.url,T.title,n.ui.hasModKey($)),onAuxClick:$=>{$.button===1&&($.preventDefault(),K(T.url,T.title,!0))},onContextMenu:$=>{ue($,T,x)}});function Ce({chosen:T,byFeed:x}){let $=Date.now();return i("nav",{className:"poly-bar poly-tiles news-tags","aria-label":e("news.feeds")},Ks.map(X=>{let b=x[X],f=b?b.filter(O=>Vf(O.published,$)).length:null,I=f===null?c(X):`${c(X)} \xB7 ${f===1?e("news.recent.one"):s(e("news.recent.other"),{count:f})}`;return i("button",{key:X,type:"button",className:`poly-tile${X===T?" active":""}`,"aria-pressed":X===T,"data-feed":X,title:I,"aria-label":I,style:{"--poly-tile-color":ro(Ff[X]),"--poly-tile-on":so(Ff[X])},onClick:()=>{n.settings.set("newsFeed",X)}},i("span",{className:"poly-tile-icon"},i(r,{shapes:bw[X]})),i("span",null,e(`news.tag.${X}`)))}))}function lt({open:T,chosen:x,toggle:$}){let X=T?e("news.tags.hide"):x.length?`${e("news.tags.show")} \xB7 ${x.join(", ")}`:e("news.tags.show");return i("button",{type:"button",className:`poly-icon-btn${T?" active":""}${x.length?" filtered":""}`,title:X,"aria-label":X,"aria-pressed":T,"data-tag-view":!0,onClick:$},i(r,{shapes:Ew}))}function Ke({entries:T,chosen:x,query:$}){let X=$.toLocaleLowerCase().split(/\s+/).filter(Boolean),b=Cw(T,l()),f=x.filter(V=>!b.some(re=>re.tag===V)).map(V=>({tag:V,count:0})),I=[...b,...f].filter(V=>X.every(re=>V.tag.toLocaleLowerCase().includes(re))),O=Gf(T,x).length;return i("div",{className:"news-tag-view news-appear"},i("div",{className:"news-tag-head"},i("span",null,x.length?O===1?e("news.tags.articles.one"):s(e("news.tags.articles.other"),{count:O}):s(e("news.tags.count"),{count:b.length})),x.length?i("button",{type:"button",className:"news-text-btn",onClick:y},e("news.tags.clear")):null),I.length?i("div",{className:"news-cloud",role:"group","aria-label":e("news.tags.show")},I.map(V=>{let re=x.includes(V.tag);return i("button",{key:V.tag,type:"button",className:`news-topic${re?" on":""}`,"aria-pressed":re,"data-tag":V.tag,title:s(e(re?"news.tags.remove":"news.tags.add"),{tag:V.tag}),onClick:()=>m(V.tag)},i("span",null,V.tag),i("span",{className:"news-cloud-count"},String(V.count)))})):i("div",{className:"poly-note"},e($?"news.tags.noMatch":"news.tags.none")))}function nt({query:T,setQuery:x,tagView:$,chosen:X,toggleTags:b}){let f=e($?"news.tags.search":"news.search");return i("div",{className:"poly-bar news-search-bar"},i("div",{className:"search-field-row"},i("div",{className:"search-field"},i("span",{className:"search-field-icon"},i(r,{shapes:vw})),i("input",{className:"search-field-input",value:T,placeholder:f,"aria-label":f,onChange:I=>x(I.target.value),onKeyDown:I=>{I.key==="Escape"&&x("")}}),T?i("button",{type:"button",className:"search-field-action",title:e("news.search.clear"),"aria-label":e("news.search.clear"),onClick:()=>x("")},i(r,{shapes:_w})):null)),i(lt,{open:$,chosen:X,toggle:b}))}let te=({topics:T,line:x,chosen:$})=>T.length?i("span",{className:x?"news-tags-line":"news-topics"},T.map(X=>{let b=$.includes(X),f=s(e(b?"news.tags.remove":"news.tags.add"),{tag:X});return x?i("span",{key:X,className:`news-topic${b?" on":""}`,title:f,onClick:I=>{I.stopPropagation(),m(X)}},X):i("button",{key:X,type:"button",className:`news-topic${b?" on":""}`,title:f,"aria-pressed":b,onClick:()=>m(X)},X)})):null;function ae({entry:T,active:x,refresh:$,chosen:X}){return i("button",{type:"button",className:`news-row${x?" active":""}`,"data-article":T.url,"aria-current":x?"page":void 0,title:T.author?`${T.title}
${T.author}`:T.title,...Oe(T,$)},i("span",{className:"news-row-title"},T.title),i("span",{className:`news-row-date${Vf(T.published)?" new":""}`,title:h(T.published)},u(T.published)),T.summary?i("span",{className:"news-row-summary"},T.summary):null,i(te,{topics:T.topics,line:!0,chosen:X}))}function Se(){return U()?i("div",{className:"news-placeholders","aria-busy":!0,"aria-label":e("news.loading")},...[0,1,2,3,4].map(x=>i("div",{key:x,className:"news-row news-placeholder"},i("span",{className:"news-bar title"}),i("span",{className:"news-bar date"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar short"})))):null}function Ve(){let{feed:T,tags:x,language:$}=d(),{revision:X,refresh:b}=H(),[f,I]=t.useState(""),[O,V]=t.useState(!1),[re,le]=t.useState(""),ee=k(T,$,X),ne=Z(T,$,X),de=Q(),ve=ne.data??[],pe=Aw(Gf(ve,x),f),fe=f?e("news.empty.search"):x.length?e("news.empty.tags"):e("news.empty"),Ae=ne.error?i("div",{className:"poly-note error",role:"alert"},ne.error):ne.data?O?i(Ke,{entries:ve,chosen:x,query:re}):pe.length?i("div",{className:"news-appear"},...pe.map(Le=>i(ae,{key:Le.id,entry:Le,active:de===Dl(Le.url),refresh:b,chosen:x}))):i("div",{className:"poly-note"},fe,x.length?i(t.Fragment,null," ",i("button",{type:"button",className:"news-text-btn",onClick:y},e("news.tags.clear"))):null):i(Se,null);return i(t.Fragment,null,i(Ce,{chosen:T,byFeed:ee}),i(nt,{query:O?re:f,setQuery:O?le:I,tagView:O,chosen:x,toggleTags:()=>V(Le=>!Le)}),i("div",{className:"news-list"},Ae,i("div",{className:"poly-credit"},e("news.credit"))))}function we({entry:T,active:x,revision:$,chosen:X}){let b=t.useRef(null),f=W(b),I=L(f?T.url:null,$,V=>D(T.url,V),g),O=J(I.data?.picture?.src??null);return i("button",{ref:b,type:"button",className:`news-card${x?" active":""}`,"data-article":T.url,...Oe(T)},i("span",{className:"news-card-image"},i(r,{shapes:kl}),O.data?i("img",{src:O.data,alt:I.data?.picture?.alt??"",draggable:!1}):null),i("span",{className:"news-card-body"},i("span",{className:"news-card-top"},i("span",{className:"news-card-author"},T.author),i("span",{className:"news-card-date",title:h(T.published)},u(T.published))),i("span",{className:"news-card-title"},T.title),T.summary?i("span",{className:"news-card-summary"},T.summary):null,i(te,{topics:T.topics,line:!0,chosen:X})))}function Xe(){return U()?i("div",{className:"news-cards","aria-busy":!0,"aria-label":e("news.loading")},...[0,1,2,3,4].map(x=>i("div",{key:x,className:"news-card news-placeholder"},i("span",{className:"news-card-image"}),i("span",{className:"news-card-body"},i("span",{className:"news-bar date"}),i("span",{className:"news-bar title"}),i("span",{className:"news-bar text"}))))):null}let At=({title:T,actions:x})=>i("div",{className:"poly-bar poly-page-head"},i("span",{className:`poly-bar-balance${x.length>1?" double":""}`,"aria-hidden":!0}),i("h1",{className:"poly-page-title"},T),...x),Ge=(T,x)=>i("button",{key:"refresh",type:"button",className:`poly-icon-btn${T?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:x},i(r,{shapes:Bf}));function rt({instanceId:T}){let{feed:x,tags:$,language:X}=d(),{revision:b,refreshing:f,refresh:I}=H(),O=Z(x,X,b),V=Q();t.useEffect(()=>{n.workspace.setMainTabTitle(e("news.title"),T)},[T,n.ui.language()]);let re=O.error?i("div",{className:"poly-note error",role:"alert"},O.error):O.data?O.data.length?i("div",{className:"news-cards news-appear"},O.data.map(le=>i(we,{key:le.id,entry:le,active:V===Dl(le.url),revision:b,chosen:$}))):i("div",{className:"poly-note"},e("news.empty")):i(Xe,null);return i("div",{className:"poly-page"},i(At,{title:c(x),actions:[Ge(f,I)]}),i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},re,i("div",{className:"poly-credit"},e("news.credit")))))}function at({parts:T}){return i(t.Fragment,null,...T.map((x,$)=>{let X=x.strong?i("strong",null,x.text):x.text;if(!x.href)return i(t.Fragment,{key:$},X);let b=x.href;return i("a",{key:$,className:"news-inline-link",href:b,title:b,onClick:f=>{f.preventDefault(),oe(b,x.text,n.ui.hasModKey(f))},onAuxClick:f=>{f.button===1&&(f.preventDefault(),oe(b,x.text,!0))}},X)}))}function je({picture:T}){let x=t.useRef(null),$=W(x),X=J($?T.src:null);return i("figure",{ref:x,className:"news-figure"},i("div",{className:`news-figure-frame${X.data?"":" empty"}`},X.data?i("img",{src:X.data,alt:T.alt,draggable:!1}):null),T.caption?i("figcaption",null,T.caption):null)}function gt({block:T}){let x=t.useRef(null),$=W(x),X=J($&&T.preview?T.preview:null),b=T.caption?`${e("news.video")}: ${T.caption}`:e("news.video");return i("button",{ref:x,type:"button",className:"news-video",title:T.url,"aria-label":b,onClick:()=>{n.links.open(T.url)}},i("span",{className:"news-figure-frame"},X.data?i("img",{src:X.data,alt:"",draggable:!1}):null,i("span",{className:"news-play"},i(r,{shapes:Mw}))),i("span",{className:"news-video-caption"},T.caption||e("news.video")))}function P({blocks:T}){return i(t.Fragment,null,...T.map((x,$)=>{switch(x.type){case"heading":return i(x.level===2?"h2":"h3",{key:$},x.text);case"paragraph":return i("p",{key:$},i(at,{parts:x.parts}));case"quote":return i("blockquote",{key:$,className:"news-quote"},i(at,{parts:x.parts}));case"list":return i("ul",{key:$,className:"news-bullets"},x.items.map((X,b)=>i("li",{key:b},i(at,{parts:X}))));case"figure":return i(je,{key:$,picture:x.picture});case"video":return i(gt,{key:$,block:x});case"box":return i("aside",{key:$,className:"news-box"},i(P,{blocks:x.blocks}));case"links":return i("div",{key:$,className:"news-links"},x.title?i("div",{className:"news-links-title"},x.title):null,x.items.map((X,b)=>i("button",{key:b,type:"button",className:"news-link",title:X.href,onClick:f=>oe(X.href,X.text,n.ui.hasModKey(f))},i(r,{shapes:Sw}),i("span",null,X.text))))}}))}function B({instanceId:T,url:x}){let{revision:$,refreshing:X,refresh:b}=H(),{tags:f}=d(),I=L(x,$,de=>D(x,de),g),O=I.data,V=A.get(x),re=U(),le=O??(V?{title:V.title,lead:V.summary,date:V.published,author:V.author,topics:V.topics,picture:null}:null);t.useEffect(()=>{n.workspace.setMainTabTitle(le?.title||e("news.title"),T)},[T,le?.title,n.ui.language()]);let ee=i("button",{key:"website",type:"button",className:"poly-icon-btn",title:e("news.openWebsite"),"aria-label":e("news.openWebsite"),onClick:()=>{n.links.open(x)}},i(r,{shapes:Hf})),ne=!le&&I.error?i("div",{className:"poly-note error",role:"alert"},I.error):le?i("article",{className:"news-article",lang:/^https:\/\/ethz\.ch\/de\//.test(x)?"de":"en","aria-busy":O?void 0:!0},i("h2",{className:"news-title"},le.title),le.lead?i("p",{className:"news-lead"},le.lead):null,i(te,{topics:le.topics,chosen:f}),i("div",{className:"news-meta"},le.date?i("span",null,h(le.date)):null,le.author?i("span",null,s(e("news.by"),{author:le.author})):null),I.error?i("div",{className:"poly-note error",role:"alert"},I.error):O?i("div",{className:"news-appear"},O.picture?i(je,{picture:O.picture}):null,i(P,{blocks:O.blocks}),i("div",{className:"news-source"},e("news.source")," ",i("a",{className:"news-inline-link",href:x,onClick:de=>{de.preventDefault(),n.links.open(x)}},new URL(x).host))):i("div",{className:"news-figure"},i("div",{className:"news-figure-frame empty"}))):re?i("div",{className:"news-article","aria-busy":!0,"aria-label":e("news.loading")},i("div",{className:"news-placeholder"},i("span",{className:"news-bar heading"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar text"}),i("span",{className:"news-bar short"}))):null;return i("div",{className:"poly-page"},i(At,{title:e("news.title"),actions:[ee,Ge(X,b)]}),i("div",{className:"poly-list"},ne))}function ie({instanceId:T}){let x=rd(T);return x?i(B,{instanceId:T,url:x,key:x}):i(rt,{instanceId:T})}return{NewsPanelBody:Ve,NewsPage:ie,openNews:ce}}var Jf=`
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
`,Iw=["M15 6l-6 6 6 6"],Rw=["M9 6l6 6-6 6"],Xf=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],Pw=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],Nw=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],Qf=["M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3","M8 3v18","M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17"],Lw=["M3.5 11.5h17a8.5 6.5 0 0 1-17 0z","M9 20.5h6","M12 11.5c0-3.6 2.1-6.2 6.3-6.8 0 3.9-2.5 6.4-6.3 6.8","M12 11.5l3.2-3.2","M9.6 11.5c-.3-2.1-1.7-3.5-3.8-3.8"],Dw={students:["M2.5 9.5L12 5.5l9.5 4-9.5 4z","M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4","M21.5 9.5v5"],internal:["M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z","M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2","M3 13h18"],external:["M8.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0","M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"]},qf="M4 4l16 16",kw={vegetarian:["M5 19c0-8 5-13.5 14-14 0 9-5 14-13 14","M5 19l7.5-7.5"],vegan:["M12 20v-8","M12 12c0-3.3-2.7-6-6-6H4v1c0 3.3 2.7 6 6 6h2","M12 10c0-3.3 2.7-6 6-6h2v1c0 3.3-2.7 6-6 6h-2"],glutenFree:["M12 21V8","M12 8c-1.7-.8-2.8-2.4-2.8-4.5 1.7.8 2.8 2.4 2.8 4.5z","M12 8c1.7-.8 2.8-2.4 2.8-4.5-1.7.8-2.8 2.4-2.8 4.5z","M12 13.5c-1.9-.6-3.3-2.1-3.5-4.2 1.9.6 3.3 2.1 3.5 4.2z","M12 13.5c1.9-.6 3.3-2.1 3.5-4.2-1.9.6-3.3 2.1-3.5 4.2z",qf],lactoseFree:["M8.5 3h7","M9 3v3L7 9.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5L15 6V3","M7 12.5h10",qf]},em={eth:["M1 18.5h22","M1.75 18.5v-5.5h5.75","M16.5 13h5.75v5.5","M7.5 18.5V10h9v8.5","M6.5 10h11","M12 10V6","M10.5 18.5v-2a1.5 1.5 0 0 1 3 0v2","M9.75 12.75h.01","M12 12.75h.01","M14.25 12.75h.01","M3.6 15.75h.01","M5.75 15.75h.01","M18.25 15.75h.01","M20.4 15.75h.01"],hoengg:["M3 19h18","M3 19l6-9 4 5 3-3 5 7","M15 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0"],uzh:["M2 20h20","M3 20v-6l1.5-2h4","M15.5 12h4l1.5 2v6","M8.5 20v-9h7v9","M8.5 11a3.5 3.5 0 0 1 7 0","M12 7.5V6","M10.5 20v-2.5a1.5 1.5 0 0 1 3 0V20","M5.5 16.5h.01","M18.5 16.5h.01"]},sd=["elink","menu","campus","news"],Ow={elink:Df,menu:Qf,campus:em.eth,news:kl};function Uw(n){let e=Array.isArray(n)?n.filter(i=>sd.includes(i)):[],t=[...new Set(e)];return[...t,...sd.filter(i=>!t.includes(i))]}function Yf(n,e,t){let i=n.filter(r=>r!==e);return i.splice(Math.max(0,Math.min(t,i.length)),0,e),i}var zw=n=>n==="elink"||n==="news"?n:n==="campus"||n==="city"?"campus":"menu",tm=["M12 3.6l2.6 5.25 5.8.85-4.2 4.1 1 5.8L12 16.85 6.8 19.6l1-5.8-4.2-4.1 5.8-.85z"],jf=["favorites",...Pd],Fw={favorites:tm,...em},Kf={favorites:"palette:yellow",eth:"palette:primary-blue",hoengg:"palette:green",uzh:"palette:violet"},Bw=["all","students","internal","external"],Ol=[["vegetarian","onlyVegetarian"],["vegan","onlyVegan"],["glutenFree","onlyGlutenFree"],["lactoseFree","onlyLactoseFree"]];function nm(n,{t:e}){let t=n.React,i=t.createElement,r=({shapes:P})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...P.map(B=>i("path",{key:B,d:B}))),s=P=>{let B=`error.${P instanceof Error?P.message:""}`;return e(B)===B?e("error.serviceError"):e(B)},o=(P,B)=>Object.entries(B).reduce((ie,[T,x])=>ie.replace(`{${T}}`,String(x)),P),a=P=>Array.isArray(P)?P.filter(B=>typeof B=="string"):[],l=P=>P===1?e("menus.one"):o(e("menus.other"),{count:P});function c(P){let B=P&&typeof P=="object"?P:{},ie=oo();return!Dd(B.date)||B.date<Ai(ie)?{date:ie,service:Od()}:{date:B.date,service:B.service==="dinner"?"dinner":"lunch"}}function u(){let[,P]=t.useState(0);t.useEffect(()=>{let ie=()=>P(x=>x+1),T=[n.ui.onLanguageChanged(ie),n.settings.subscribe(ie)];return()=>{for(let x of T)x()}},[]);let B=n.settings.get();return{language:Ud(n.ui.language()),locale:n.ui.language()||"en",mode:zw(B.mode),tabOrder:Uw(B.tabOrder),campus:jf.includes(B.campus)?B.campus:"hoengg",favorites:a(B.favorites),prices:Bw.includes(B.prices)?B.prices:"all",filters:{vegetarian:B.onlyVegetarian===!0,vegan:B.onlyVegan===!0,glutenFree:B.onlyGlutenFree===!0,lactoseFree:B.onlyLactoseFree===!0},...c(B.day)}}let h=P=>{n.settings.set("day",P)};function d(P,B,ie){let[T,x]=t.useState({data:null,error:"",loading:P!==null});return t.useEffect(()=>{if(P===null)return;let $=!0;return x(X=>({data:X.data,error:"",loading:!0})),ie(B>0).then(X=>{$&&x({data:X,error:"",loading:!1})},X=>{$&&x({data:null,error:s(X),loading:!1})}),()=>{$=!1}},[P,B]),T}function m(P){let[B,ie]=t.useState(!1);return t.useEffect(()=>{let T=P.current,x=T?.ownerDocument.defaultView?.IntersectionObserver;if(!T||B)return;if(!x){ie(!0);return}let $=new x(X=>{X.at(-1)?.isIntersecting&&(ie(!0),$.disconnect())},{rootMargin:"300px"});return $.observe(T),()=>$.disconnect()},[B]),B}let y=(P,B,ie=!0)=>{let T=Ai(P.date);return d(ie?`${P.language}:${T}`:null,B,x=>n.backend.call("eth.week",{monday:T,language:P.language,fresh:x}))};function w(P,B){let ie=Ai(P.date),T=d(P.language,B,I=>n.backend.call("uzh.outlets",{language:P.language,fresh:I})),[x,$]=t.useState({key:"",byPath:new Map}),X=`${P.language}:${ie}:${B}`;t.useEffect(()=>{let I=T.data;if(!I)return;let O=!0;$({key:X,byPath:new Map(I.map(V=>[V.path,{data:null,error:"",loading:!0}]))});for(let V of I)n.backend.call("uzh.week",{path:V.path,monday:ie,language:P.language,fresh:B>0,background:!0}).then(re=>({data:re,error:"",loading:!1}),re=>({data:null,error:s(re),loading:!1})).then(re=>{O&&$(le=>le.key===X?{key:X,byPath:new Map(le.byPath).set(V.path,re)}:le)});return()=>{O=!1}},[T.data,X]);let b=x.key===X?x.byPath:new Map,f=T.data?b.size<T.data.length||[...b.values()].some(I=>I.loading):!T.error;return{outlets:T,byPath:b,pending:f}}let g=(P,B,ie)=>new Intl.DateTimeFormat(B,{...ie,timeZone:"UTC"}).format(new Date(`${P}T00:00:00Z`)),p=(P,B)=>g(P,B,{weekday:"long",day:"numeric",month:"long",year:"numeric"});function A(P){return[...P.diet?[{key:P.diet,label:e(`diet.${P.diet}`)}]:[],...P.gluten===!1?[{key:"glutenFree",label:e("filter.glutenFree")}]:[],...P.lactose===!1?[{key:"lactoseFree",label:e("filter.lactoseFree")}]:[],...P.classes.map(B=>({key:"",label:B})),...P.climate?[{key:P.climate,label:e(`climate.${P.climate}`)}]:[]]}function R(P,B){let ie=B==="all"?void 0:Ld(P,B),T=B==="all"?Nd(P):ie?[ie]:[];return{short:T.length?`CHF ${T.map(x=>x.price.toFixed(2)).join(" / ")}`:"",long:T.map(x=>`${e(`price.${x.group}`)} ${Hd(x.price)}`).join(" \xB7 ")}}let M=({dish:P})=>{let B=A(P);return B.length?i("span",{className:"poly-tags"},B.map(ie=>i("span",{key:`${ie.key}:${ie.label}`,className:`poly-tag ${ie.key}`},ie.label))):null};function E({dish:P,shown:B,revision:ie}){let T=t.useRef(null),x=m(T),$=d(x&&P.detail?P.detail:null,ie,O=>n.backend.call("uzh.dish",{url:P.detail,fresh:O})),X=P.image||$.data?.image||"",b=d(x&&X?X:null,0,()=>n.backend.call("image",{url:X})),f=P.prices.length?P.prices:$.data?.prices??[],I=R(f,B);return i("div",{ref:T,className:"poly-card","data-dish":P.id},i("span",{className:"poly-card-image"},i(r,{shapes:Qf}),b.data?i("img",{src:b.data,alt:P.name,draggable:!1}):null),i("span",{className:"poly-card-body"},i("span",{className:"poly-dish-top"},i("span",{className:"poly-dish-line"},P.line),I.short?i("span",{className:"poly-dish-price",title:I.long,"aria-label":I.long},I.short):null),i("span",{className:"poly-dish-name"},P.name),P.description?i("span",{className:"poly-dish-description"},P.description):null,i("span",{className:"poly-dish-allergens"},P.allergens.length?`${e("allergens")}: ${P.allergens.join(", ")}`:e("allergens.none")),i(M,{dish:P})))}function C({location:P,date:B,service:ie}){let T=$l(P,B,ie);if(!T)return null;let x=`${T.from}\u2013${T.to}`,$=Fd(T,B);return $==="open"?i("span",{className:"poly-open"},o(e("hours.openNow"),{hours:x})):$==="closed"?i("span",{className:"poly-closed"},o(e("hours.closed"),{hours:x})):i("span",null,o(e("hours.open"),{hours:x}))}let D=P=>[P.area,P.place].filter(Boolean).join(" \xB7 "),v=(P,B)=>n.workspace.openMainTab({instanceId:Xl(P.id),title:P.name,newTab:B}),S=async(P,B,ie)=>{P.preventDefault();let T=await n.ui.openMenu([{id:"tab",label:e("openInNewTab"),icon:i(r,{shapes:Nw})},{id:"website",label:e("openWebsite"),icon:i(r,{shapes:Pw}),enabled:!!B.url},{type:"separator"},{id:"refresh",label:e("refresh"),icon:i(r,{shapes:Xf})}],{x:P.clientX,y:P.clientY});T==="tab"&&v(B,!0),T==="website"&&B.url&&n.links.open(B.url),T==="refresh"&&ie()};function L({preferences:P}){return i("div",{className:"poly-groups",role:"group","aria-label":e("prices")},...["students","internal","external"].map(B=>{let ie=P.prices===B,T=`${e("prices")} \xB7 ${e(`price.${B}`)}`;return i("button",{key:B,type:"button",className:`poly-icon-btn${ie?" active":""}`,title:T,"aria-label":T,"aria-pressed":ie,onClick:()=>{n.settings.set("prices",ie?"all":B)}},i(r,{shapes:Dw[B]}))}))}function U({preferences:P}){let B=zd(P.filters),ie=async x=>{let $=await n.ui.openMenu([...Ol.flatMap(([b],f)=>[...f===2?[{type:"separator"}]:[],{id:b,type:"checkbox",label:e(`filter.${b}`),icon:i(r,{shapes:kw[b]}),checked:P.filters[b]}]),...B?[{type:"separator"},{id:"clear",label:e("filter.clear")}]:[]],{anchor:x.currentTarget,align:"end"});if(!$)return;if($==="clear"){for(let[,b]of Ol)n.settings.set(b,!1);return}let X=Ol.find(([b])=>b===$);X&&n.settings.set(X[1],!P.filters[X[0]])},T=B?`${e("filter")} \xB7 ${Ol.filter(([x])=>P.filters[x]).map(([x])=>e(`filter.${x}`)).join(", ")}`:e("filter");return i("button",{type:"button",className:`poly-icon-btn${B?" active":""}`,title:T,"aria-label":T,"aria-haspopup":"menu",onClick:ie},i(r,{shapes:Lw}))}let H=(P,B,ie,T)=>i("button",{key:P,type:"button",className:P===B?"active":"","aria-pressed":P===B,onClick:()=>T(P)},ie),Z=({preferences:P})=>i("div",{className:"poly-seg",role:"group","aria-label":e("service.label")},H("lunch",P.service,e("service.lunch"),B=>h({date:P.date,service:B})),H("dinner",P.service,e("service.dinner"),B=>h({date:P.date,service:B})));function k({preferences:P}){let{date:B,service:ie,locale:T}=P,x=oo(),$=Ai(B),X=$<=Ai(x);return i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("week.previous"),"aria-label":e("week.previous"),disabled:X,onClick:()=>{let b=Kr(B,-7);h({date:b<x?x:b,service:ie})}},i(r,{shapes:Iw})),i("div",{className:"poly-week-days",role:"group","aria-label":e("week.label")},...Array.from({length:7},(b,f)=>{let I=Kr($,f),O=I===x;return i("button",{key:I,type:"button",className:`poly-week-day${O?" today":""}${I===B?" selected":""}`,title:O?`${p(I,T)} \xB7 ${e("day.today")}`:p(I,T),"aria-label":p(I,T),"aria-pressed":I===B,"aria-current":O?"date":void 0,onClick:()=>h({date:I,service:ie})},i("span",{className:"poly-week-name"},g(I,T,{weekday:"short"})),i("span",{className:"poly-week-date"},g(I,T,{day:"numeric"})))})),i("button",{type:"button",className:"poly-icon-btn",title:e("week.next"),"aria-label":e("week.next"),onClick:()=>h({date:Kr(B,7),service:ie})},i(r,{shapes:Rw})))}function W(){let[P,B]=t.useState(0),[ie,T]=t.useState(!1);return{revision:P,refreshing:ie,refresh:()=>{T(!0),B($=>$+1),setTimeout(()=>T(!1),600)}}}function J(P,B){let ie=y(P,B),T=w(P,B),{date:x,service:$,filters:X}=P,b=de=>!!Ji(de,x,$),f=(ie.data??[]).filter(b).sort((de,ve)=>de.name.localeCompare(ve.name,P.locale)),I=(T.outlets.data??[]).flatMap(de=>{let ve=T.byPath.get(de.path)?.data;return ve&&b(ve)?[ve]:[]}),V={favorites:[...f,...I].filter(de=>P.favorites.includes(de.id)).sort((de,ve)=>de.name.localeCompare(ve.name,P.locale)),eth:f.filter(de=>de.campus==="eth"),hoengg:f.filter(de=>de.campus==="hoengg"),uzh:I},re=de=>ao(de,x,$,X).length,le=ie.loading&&!ie.data,ee={favorites:le||T.pending,eth:le,hoengg:le,uzh:T.pending},ne={favorites:"",eth:ie.error,hoengg:ie.error,uzh:T.outlets.error};return{byTag:V,count:re,pending:ee,error:ne,hasFavorites:P.favorites.length>0}}function Q(P,B){let ie=jf.filter(x=>x==="favorites"?P.hasFavorites:P.pending[x]||P.byTag[x].length>0),T=ie.length?ie:[B];return{visible:T,active:T.includes(B)?B:T[0]}}function ce({places:P,visible:B,active:ie}){return i("nav",{className:"poly-bar poly-tiles","aria-label":e("campus.label")},B.map(T=>{let x=P.byTag[T].filter(X=>P.count(X)>0).length,$=e(`campus.${T}`);return i("button",{key:T,type:"button",className:`poly-tile${T===ie?" active":""}`,"aria-pressed":T===ie,title:e(`campus.${T}.title`),"aria-label":`${e(`campus.${T}.title`)} ${x}`,style:{"--poly-tile-color":ro(Kf[T]),"--poly-tile-on":so(Kf[T])},onClick:()=>{n.settings.set("campus",T)}},i("span",{className:"poly-tile-icon"},i(r,{shapes:Fw[T]})),i("span",null,$),i("span",{className:"poly-tile-count"},P.pending[T]&&!x?"\u2026":String(x)))}))}function K(){let P=()=>{let T=n.getState().activePluginTab;return T?.pluginId===n.pluginId?T.instanceId:void 0},[B,ie]=t.useState(P);return t.useEffect(()=>n.subscribe(()=>ie(P())),[]),B}let oe=(P,B)=>{n.settings.set("favorites",P.favorites.includes(B)?P.favorites.filter(ie=>ie!==B):[...P.favorites,B].slice(-200))};function ue({location:P,preferences:B}){let ie=B.favorites.includes(P.id),T=o(e(ie?"favorite.remove":"favorite.add"),{name:P.name});return i("button",{type:"button",className:`poly-star${ie?" on":""}`,"aria-pressed":ie,title:T,"aria-label":T,onClick:()=>oe(B,P.id)},i(r,{shapes:tm}))}function Oe({location:P,preferences:B,count:ie,active:T,tag:x,refresh:$}){let X=i(C,{location:P,date:B.date,service:B.service}),b=[x==="favorites"&&P.source==="eth"?e(`campus.${P.campus}`):"",D(P)].filter(Boolean).join(" \xB7 ");return i("div",{className:"poly-place-item"},i("button",{type:"button",className:`poly-place${T?" active":""}`,"data-place":P.id,"aria-current":T?"page":void 0,onClick:f=>v(P,n.ui.hasModKey(f)),onAuxClick:f=>{f.button===1&&(f.preventDefault(),v(P,!0))},onContextMenu:f=>{S(f,P,$)}},i("span",{className:"poly-place-name"},P.name),i("span",{className:"poly-place-count"},l(ie)),i("span",{className:"poly-place-meta"},b,b&&$l(P,B.date,B.service)?" \xB7 ":null,X)),i(ue,{location:P,preferences:B}))}function Ce(P,B,ie,T){return P.pending[B]&&!ie.length?e(B==="uzh"?"loading.uzh":"loading"):ie.length?P.pending[B]?e("loading.uzh"):"":P.byTag[B].length?e("empty.filtered"):e(B==="favorites"?"empty.favorites":`empty.${T.service}`)}function lt({places:P,campus:B,preferences:ie,refresh:T}){let x=K();if(P.error[B])return i("div",{className:"poly-note error",role:"alert"},P.error[B]);let $=P.byTag[B].filter(f=>P.count(f)>0),X=$.map(f=>i(Oe,{key:f.id,location:f,preferences:ie,count:P.count(f),active:x===Xl(f.id),tag:B,refresh:T})),b=Ce(P,B,$,ie);return i(t.Fragment,null,...X,b?i("div",{className:"poly-note"},b):null)}let Ke=P=>e(P==="elink"?"elink.title":P==="campus"?"campusMap.title":P==="news"?"news.title":"menu.title"),nt=Of(n,e),te=$f(n,e);function ae({preferences:P}){let[B,ie]=t.useState(null),T=t.useRef(!1),x=B?.order??P.tabOrder,$=b=>{b.join()!==P.tabOrder.join()&&n.settings.set("tabOrder",b)},X=(b,f)=>{if(b.button!==0)return;let I=b.currentTarget,O=I.parentElement;if(!O)return;let V=b.clientX,re=I.getBoundingClientRect().width+(parseFloat(getComputedStyle(O).columnGap)||0),le=P.tabOrder.indexOf(f),ee=P.tabOrder,ne=!1;T.current=!1;let de=I.ownerDocument.defaultView??window,ve=fe=>{let Ae=fe.clientX-V;if(!ne&&Math.abs(Ae)<4)return;ne||(ne=!0,T.current=!0,I.setPointerCapture?.(fe.pointerId));let Le=Math.max(0,Math.min(sd.length-1,le+Math.round(Ae/re)));ee=Yf(P.tabOrder,f,Le),ie({mode:f,order:ee,offset:Ae-(ee.indexOf(f)-le)*re})},pe=()=>{de.removeEventListener("pointermove",ve),de.removeEventListener("pointerup",pe),de.removeEventListener("pointercancel",pe),ie(null),ne&&$(ee)};de.addEventListener("pointermove",ve),de.addEventListener("pointerup",pe),de.addEventListener("pointercancel",pe)};return i("div",{className:"poly-tabs",role:"tablist","aria-label":e("mode.label")},x.map((b,f)=>i("button",{key:b,type:"button",role:"tab",className:`poly-tab ${b===P.mode?"active":""} ${B?.mode===b?"dragging":""}`,"aria-selected":b===P.mode,tabIndex:b===P.mode?0:-1,title:Ke(b),"aria-label":Ke(b),"data-mode":b,style:B?.mode===b?{transform:`translateX(${B.offset}px)`}:void 0,onPointerDown:I=>X(I,b),onClick:()=>{if(T.current){T.current=!1;return}n.settings.set("mode",b)},onKeyDown:I=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(I.key))return;I.preventDefault();let O=I.key==="Home"?0:I.key==="End"?x.length-1:I.altKey?Math.max(0,Math.min(x.length-1,f+(I.key==="ArrowLeft"?-1:1))):(f+(I.key==="ArrowLeft"?-1:1)+x.length)%x.length,V=I.currentTarget;if(I.altKey){$(Yf(x,b,O)),V.ownerDocument.defaultView?.requestAnimationFrame(()=>V.parentElement?.querySelector(`[data-mode="${b}"]`)?.focus());return}n.settings.set("mode",x[O]),V.parentElement?.children[O]?.focus()}},i(r,{shapes:Ow[b]}))))}function Se({preferences:P}){let B=P.mode,ie=x=>B==="elink"?nt.openElink(x):B==="campus"?zn(e("campusMap.title"),x):B==="news"?te.openNews(x):n.workspace.openMainTab({newTab:x}),T=e(B==="elink"?"elink.openPage":B==="campus"?"campusMap.openPage":B==="news"?"news.openPage":"openPage");return i("div",{className:"panel-header"},i("span",{className:"panel-title"},Ke(P.mode)),i("div",{className:"poly-actions"},i("button",{type:"button",className:"plugin-open-page",title:T,"aria-label":T,onClick:x=>ie(n.ui.hasModKey(x)),onAuxClick:x=>{x.button===1&&(x.preventDefault(),ie(!0))}})))}function Ve({preferences:P}){let{revision:B,refresh:ie}=W(),T=J(P,B),{visible:x,active:$}=Q(T,P.campus);return i(t.Fragment,null,i(ce,{places:T,visible:x,active:$}),i("div",{className:"poly-bar poly-week"},i(k,{preferences:P})),i("div",{className:"poly-bar"},i(Z,{preferences:P}),i("div",{className:"poly-spacer"}),i(L,{preferences:P}),i("div",{className:"poly-divider","aria-hidden":!0}),i(U,{preferences:P})),i("div",{className:"poly-list"},i(lt,{places:T,campus:$,preferences:P,refresh:ie}),i("div",{className:"poly-credit"},e($==="uzh"?"credit.uzh":$==="favorites"?"credit.both":"credit.eth"))))}function we(){let P=u();return t.useEffect(()=>{n.settings.get().mode==="city"&&n.settings.set("mode","campus")},[]),i("div",{className:"poly-panel"},i(Se,{preferences:P}),i(ae,{preferences:P}),P.mode==="elink"?i(nt.ElinkPanelBody,null):P.mode==="campus"?i(vh,null):P.mode==="news"?i(te.NewsPanelBody,null):i(Ve,{preferences:P}))}function Xe({location:P,preferences:B,revision:ie}){let T=ao(P,B.date,B.service,B.filters);return T.length?i("div",{className:"poly-cards"},T.map(x=>i(E,{key:x.id,dish:x,shown:B.prices,revision:ie}))):i("div",{className:"poly-note"},Ji(P,B.date,B.service)?e("empty.filtered"):e("empty.location"))}function At({location:P,preferences:B}){let ie=Ji(P,B.date,B.service),T=ao(P,B.date,B.service,B.filters).length;return i("div",{className:"poly-facts-inner"},D(P)?i("span",{className:"poly-facts-where",title:D(P)},D(P)):null,i(C,{location:P,date:B.date,service:B.service}),ie?.from&&ie.to?i("span",null,o(e(`service.time.${B.service}`),{hours:`${ie.from}\u2013${ie.to}`})):null,ie?i("span",null,l(T)):null)}let Ge=(...P)=>i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},...P));function rt({place:P,preferences:B,revision:ie,onTitle:T,onLocation:x}){let $=Ai(B.date),X=y(B,ie,P.source==="eth"),b=d(P.source==="uzh"?`${B.language}:${P.key}:${$}`:null,ie,V=>n.backend.call("uzh.week",{path:P.key,monday:$,language:B.language,fresh:V})),f=P.source==="eth"?X:b,I=P.source==="eth"?X.data?.find(V=>V.id===P.id)??null:b.data;t.useEffect(()=>{I&&T(I.name),x(I)},[I]);let O=i("div",{className:"poly-bar poly-facts"},I?i(At,{location:I,preferences:B}):null);return f.error?i(t.Fragment,null,O,Ge(i("div",{className:"poly-note error",role:"alert"},f.error))):I?i(t.Fragment,null,O,Ge(i(Xe,{location:I,preferences:B,revision:ie}),i("div",{className:"poly-credit"},e(I.source==="uzh"?"credit.uzh":"credit.eth")))):i(t.Fragment,null,O,Ge(i("div",{className:"poly-note"},f.loading?e("loading"):e("error.notFound"))))}function at({preferences:P,revision:B,refresh:ie,onTitle:T}){let x=J(P,B),{active:$}=Q(x,P.campus),X=e(`campus.${$}.title`);if(t.useEffect(()=>{T(X)},[X]),x.error[$])return Ge(i("div",{className:"poly-note error",role:"alert"},x.error[$]));let b=x.byTag[$].filter(f=>x.count(f)>0);return Ge(...b.map(f=>i("section",{key:f.id,className:"poly-section","data-place":f.id},i("button",{type:"button",className:"poly-place-link",onClick:I=>v(f,n.ui.hasModKey(I)),onAuxClick:I=>{I.button===1&&(I.preventDefault(),v(f,!0))},onContextMenu:I=>{S(I,f,ie)}},i("span",{className:"poly-place-link-name"},f.name),i("span",{className:"poly-place-link-meta"},D(f))),i(Xe,{location:f,preferences:P,revision:B}))),Ce(x,$,b,P)?i("div",{className:"poly-note"},Ce(x,$,b,P)):null,i("div",{className:"poly-credit"},e($==="uzh"?"credit.uzh":$==="favorites"?"credit.both":"credit.eth")))}function je({instanceId:P}){let B=u(),{revision:ie,refreshing:T,refresh:x}=W(),$=Bd(P),[X,b]=t.useState(""),[f,I]=t.useState(null);return t.useEffect(()=>{n.workspace.setMainTabTitle($&&X||e("menu.title"),P)},[P,X,n.ui.language()]),i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:`poly-bar-balance${$?" double":""}`,"aria-hidden":!0}),i("h1",{className:"poly-page-title"},X),$&&f?i(ue,{location:f,preferences:B}):$?i("span",{className:"poly-bar-balance","aria-hidden":!0}):null,i("button",{type:"button",className:`poly-icon-btn${T?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:x},i(r,{shapes:Xf}))),$?i(rt,{place:$,preferences:B,revision:ie,onTitle:b,onLocation:I}):i(at,{preferences:B,revision:ie,refresh:x,onTitle:b}))}n.registerView("poly.panel",we);let gt=P=>Nf(P.instanceId)?i(nt.ElinkPage,P):Pi(P.instanceId)?i(If,null):zf(P.instanceId)?i(te.NewsPage,P):i(je,P);n.registerView("poly.page",gt)}var od="poly-city-styles",Hw=`
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
`;function im(){let n=document.getElementById(od);n||(n=document.createElement("style"),n.id=od,document.head.appendChild(n)),n.textContent=Hw;let e=n;return()=>{document.getElementById(od)===e&&e.remove()}}var Xr="valley";var hC=`.${Xr}`,pC=`app.${Xr}`;var Vw=[`.${Xr}`,".git"],Gw=[".obsidian",".trash"];var gC=new Set(Vw.map(n=>n.toLowerCase()));var yC=new Set(Gw.map(n=>n.toLowerCase()));function Ww(n){return n.trim().replace(/\\/g,"/").replace(/\/{2,}/g,"/").replace(/^\.?\/+/,"").replace(/\/+$/,"")}var Zw=/^[a-zA-Z]:/;function sm(n){if(typeof n!="string")return"";let e=Ww(n);return!e||e==="."||Zw.test(e)||e.split("/").some(t=>t==="..")?"":e}var Lt=`.${Xr}`,$w="plugins",Qs=`${Lt}/${$w}`,Ul=`${Qs}/packages`,MC=`${Ul}/core`,SC=`${Ul}/github`,EC=`${Ul}/local`,TC=`${Ul}/community`,AC=`${Qs}/community.json`,CC=`${Qs}/data`;var IC=`${Qs}/enabled.json`,RC=`${Qs}/sources.json`,PC=`${Lt}/state`,Gt=`${Lt}/settings`,rm=`${Lt}/data`,ad=`${Lt}/recovery`;var ld=`${Lt}/accounts`,qr=`${Lt}/ai`,NC=`${qr}/connections.json`,LC=`${qr}/defaults.json`,DC=`${qr}/budgets.json`,kC=`${qr}/usage.sqlite`,OC=`${qr}/security/guards.json`,UC=`${qr}/security/activity.sqlite`,zC=`${ld}/providers`,FC=`${ld}/providers.lock.json`,Xw=`${Lt}/trash`,BC=`${Xw}/items`,cd=`${Lt}/cache`,HC=`${cd}/accounts`,om=`${cd}/search`,VC=`${cd}/providers`;var GC=`${om}/index.jsonl`,WC=`${om}/content-index.bin`,ZC=`${ad}/drafts`,$C=`${ad}/transactions`,XC=`${ad}/retired`;var si="design",qw="themes",am=`${Lt}/${si}/${qw}`,qC=`${am}/local`,YC=`${am}/community`;var jC={app:`${Gt}/app.json`,appearance:`${Lt}/${si}/appearance.json`,"icon-rail":`${Lt}/${si}/icon-rail.json`,"tab-rail":`${Lt}/${si}/tab-rail.json`,"footer-rail":`${Lt}/${si}/footer-rail.json`,"plugin-startup":`${Lt}/${si}/right-sidebar-startup.json`,"new-tab":`${Lt}/${si}/new-tab.json`,pallette:`${Lt}/${si}/palette.json`,group:`${rm}/groups.json`,units:`${rm}/units.json`,metadata:`${Gt}/file-viewers.json`,notification:`${Gt}/notification-types.json`,"notification-settings":`${Gt}/notification.json`,preferences:`${Gt}/preferences.json`,"link-actions":`${Gt}/link-actions.json`,markdown:`${Gt}/markdown.json`,editor:`${Gt}/editor.json`,"editor-vim":`${Gt}/editor-vim.json`,"markdown-todo":`${Gt}/markdown-todo.json`,"markdown-codeblocks":`${Gt}/markdown-codeblocks.json`,"markdown-template":`${Gt}/markdown-template.json`,"markdown-embeed":`${Gt}/markdown-embeed.json`,files:`${Gt}/file.json`,"file-sorter":`${Gt}/file-sorter.json`,search:`${Gt}/search.json`,"search-tag":`${Gt}/search-tag.json`,"search-content":`${Gt}/search-content.json`,design:`${Lt}/${si}/appearance.json`,accounts:`${ld}/connections.json`};var Yw=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),lm=16384;var cm=new Set(["__proto__","prototype","constructor"]);function um(n){let e=0;for(let t of n){let i=t.codePointAt(0);e+=i<=127?1:i<=2047?2:i<=65535?3:4}return e}function dd(n){let e=new WeakSet,t=0,i=(s,o)=>{if(++t>8192||o>32)throw new Error("Bookmark state is too complex");if(s===null||typeof s=="boolean")return s;if(typeof s=="string"){if(um(s)>lm)throw new Error("Bookmark state is too large");return s}if(typeof s=="number")return Number.isFinite(s)?Object.is(s,-0)?0:s:void 0;if(!s||typeof s!="object"||e.has(s))return;let a=Array.isArray(s),l=Object.getPrototypeOf(s);if(!(!a&&l!==null&&(Object.getPrototypeOf(l)!==null||typeof Object.getOwnPropertyDescriptor(l,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(l,"constructor").value)!=="function Object() { [native code] }"))){e.add(s);try{let c=Reflect.ownKeys(s);if(c.length+t>8192||c.some(d=>typeof d=="string"&&cm.has(d)))throw new Error("Invalid or excessive bookmark state keys");let u=Object.getOwnPropertyDescriptors(s);if(a){let d=u.length?.value;if(!Number.isSafeInteger(d)||d>8192)throw new Error("Bookmark state is too complex");return Array.from({length:d},(m,y)=>{let w=u[String(y)];return w&&"value"in w?i(w.value,o+1)??null:null})}let h={};for(let d of Object.keys(u).sort()){if(cm.has(d))throw new Error("Invalid bookmark state key");let m=u[d];if(!m.enumerable||!("value"in m)){t++;continue}let y=i(m.value,o+1);y!==void 0&&(h[d]=y)}return h}finally{e.delete(s)}}},r=i(n,0);if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Invalid bookmark state");if(um(JSON.stringify(r))>lm)throw new Error("Bookmark state is too large");return r}function pm(n){if(typeof n!="string"||n.length>4096||/[\u0000-\u001f]/.test(n)||/^(?:[\\/]|[A-Za-z]:)/.test(n))throw new Error("Invalid bookmark path");let e=sm(n);if(!e)throw new Error("Invalid bookmark path");return e}function ud(n,e,t){if(typeof n!="string"||n.length>e||/[\u0000-\u001f]/.test(n))throw new Error(`Invalid bookmark ${t}`);return n.trim().normalize("NFC")}function dm(n){let t=(n.target?["path","filePath","file"].flatMap(r=>typeof n.target.state[r]=="string"?[n.target.state[r]]:[]):[n.folderPath]).join(" "),i=/\.[^./]+$/.exec(t)?.[0]??"";return[n.title,n.description,t,i,n.providerName,n.target?.pluginId].filter(Boolean).join(" ").normalize("NFC").toLowerCase()}function hd(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid plugin bookmark");let e=n;if(e.kind!=="plugin"||typeof e.pluginId!="string"||!/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(e.pluginId)||!Yw.has(e.surface))throw new Error("Invalid plugin bookmark target");if(e.instanceId!==void 0&&(typeof e.instanceId!="string"||e.instanceId.length>512))throw new Error("Invalid bookmark instance");if(e.itemId!==void 0&&(typeof e.itemId!="string"||!e.itemId||e.itemId.length>2048||/[\u0000-\u001f]/.test(e.itemId)))throw new Error("Invalid bookmark item");if(!e.state||typeof e.state!="object"||Array.isArray(e.state))throw new Error("Invalid bookmark state");let t=dd(e.state);return t.path!==void 0&&(t.path=pm(t.path)),{kind:"plugin",pluginId:e.pluginId,surface:e.surface,state:t,...e.instanceId===void 0?{}:{instanceId:e.instanceId},...e.itemId===void 0?{}:{itemId:e.itemId}}}var jw=/^[A-Za-z0-9_-]{1,64}$/;function hm(n,e){if(typeof n!="string"||!jw.test(n))throw new Error(`Invalid bookmark ${e}`);return n}function fm(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark");let e=n,t=ud(e.title,512,"title"),i={...e.description===void 0?{}:{description:ud(e.description,1024,"description")},...e.providerName===void 0?{}:{providerName:ud(e.providerName,256,"provider name")},...typeof e.createdAt=="number"&&Number.isSafeInteger(e.createdAt)&&e.createdAt>=0?{createdAt:e.createdAt}:{}},r=e.group===void 0?{}:{group:hm(e.group,"group")};if(e.groupId!==void 0){let a=hm(e.groupId,"group id");if(!t||e.target!==void 0)throw new Error("Invalid bookmark group");return{folderPath:"",title:t,groupId:a,...i}}if(e.target!==void 0){let a={folderPath:"",title:t,target:hd(e.target),...i,...r};return{...a,searchText:dm(a)}}if(typeof e.folderPath!="string")throw new Error("Invalid bookmark path");let o={folderPath:pm(e.folderPath),title:t,...i,...r};return{...o,searchText:dm(o)}}function eo(n){let e=0,t=s=>!!(s&&typeof s=="object"&&!Array.isArray(s)),i=s=>s.length>0&&s.length<=256&&!["__proto__","prototype","constructor"].includes(s),r=(s,o)=>{if(++e>2048||o>32||!t(s)||typeof s.type!="string")return!1;let a=(...l)=>Object.keys(s).every(c=>c==="type"||l.includes(c));return["unknown","null","boolean","number","string","function"].includes(s.type)?a():s.type==="literal"?a("value")&&(s.value===null||["string","boolean"].includes(typeof s.value)||typeof s.value=="number"&&Number.isFinite(s.value)):s.type==="array"?a("items","maxItems")&&(s.maxItems===void 0||Number.isSafeInteger(s.maxItems)&&s.maxItems>=0&&s.maxItems<=1e5)&&r(s.items,o+1):s.type==="tuple"?a("items","minItems")&&Array.isArray(s.items)&&s.items.length<=64&&(s.minItems===void 0||Number.isSafeInteger(s.minItems)&&s.minItems>=0&&s.minItems<=s.items.length)&&s.items.every(l=>r(l,o+1)):s.type==="union"?a("anyOf")&&Array.isArray(s.anyOf)&&s.anyOf.length>0&&s.anyOf.length<=32&&s.anyOf.every(l=>r(l,o+1)):s.type==="object"?a("properties","required","additionalProperties")&&t(s.properties)&&Object.entries(s.properties).every(([l,c])=>i(l)&&r(c,o+1))&&(s.required===void 0||Array.isArray(s.required)&&s.required.every(l=>typeof l=="string"&&Object.hasOwn(s.properties,l)))&&(s.additionalProperties===void 0||typeof s.additionalProperties=="boolean"):!1};return r(n,0)}var Kw=new Map;function bt(n,e,t,i,r,s,o,a,l="owner"){let c=Object.freeze({id:n,kind:e,version:t,cardinality:i,validate:r,identities:s,identityScope:l,serviceCalls:o,serviceMetadata:a});return Kw.set(`${e}:${n}@${t}`,c),c}var fd=256;var He=n=>!!n&&typeof n=="object"&&!Array.isArray(n),Tt=(n,e)=>typeof n[e]=="function",Yi=n=>n===void 0,Yr=n=>typeof n=="boolean",We=n=>typeof n=="string",ln=n=>n===void 0||We(n),Jw=n=>n===void 0||typeof n=="number",Qw=n=>n===void 0||typeof n=="boolean",ht=(n,e)=>n.length===e.length&&e.every((t,i)=>t(n[i])),Xt=n=>He(n)&&typeof n.ok=="boolean"&&(n.error===void 0||typeof n.error=="string"),gm=n=>He(n),xm=n=>He(n)&&We(n.id)&&We(n.title)&&We(n.date)&&(n.documentRef===void 0||He(n.documentRef)&&We(n.documentRef.pluginId)&&We(n.documentRef.sourceId)&&We(n.documentRef.itemId)),eM=n=>He(n)&&We(n.date)&&ln(n.startTime)&&ln(n.endTime)&&ln(n.sourceId)&&ln(n.itemId),tM=n=>He(n)&&We(n.url)&&ln(n.title)&&Qw(n.newTab),nM=n=>He(n)&&We(n.query),bm=n=>He(n)&&We(n.name)&&ln(n.context)&&Number.isFinite(n.lng)&&Number.isFinite(n.lat),iM=n=>Array.isArray(n)&&n.every(bm),rM=n=>n===null||bm(n),sM=n=>n===void 0||He(n)&&ln(n.approvalToken)&&(n.cancellation===void 0||He(n.cancellation)),oM=n=>typeof n=="string"||He(n)&&typeof n.text=="string",aM=n=>He(n)&&typeof n.name=="string"&&n.name.trim().length>0&&typeof n.description=="string"&&He(n.parameters)&&(n.sideEffect==="read"||n.sideEffect==="write")&&ln(n.commandId)&&(n.commandDispatch===void 0||n.commandDispatch==="dynamic")&&(n.timeoutMs===void 0||Number.isSafeInteger(n.timeoutMs)&&Number(n.timeoutMs)>0&&Number(n.timeoutMs)<=3e5),vm=n=>He(n)&&We(n.id)&&We(n.label)&&ln(n.labelKey)&&ln(n.description)&&(n.danger===void 0||typeof n.danger=="boolean")&&(n.enabled===void 0||typeof n.enabled=="boolean")&&(n.submenu===void 0||Array.isArray(n.submenu)&&n.submenu.every(vm)),_m={list:{args:n=>n.length===0,result:n=>Array.isArray(n)&&n.every(xm)},create:{args:n=>ht(n,[We,gm]),result:Yr},update:{args:n=>ht(n,[We,gm]),result:Yr},remove:{args:n=>ht(n,[We]),result:Yr},open:{args:n=>ht(n,[We]),result:Yi},configure:{args:n=>n.length===0,result:Yi},actions:{args:n=>ht(n,[We]),result:n=>Array.isArray(n)&&n.every(vm)},runAction:{args:n=>ht(n,[We,We]),result:Yr}},wm=n=>He(n)&&We(n.name)&&We(n.version)&&ln(n.description)&&ln(n.author)&&(n.localized===void 0||He(n.localized)&&Object.values(n.localized).every(e=>He(e)&&We(e.name)&&ln(e.description))),lM=bt("calendar.itemSource","service","1.3.0","many",n=>He(n)&&Tt(n,"list")&&(n.integration===void 0||wm(n.integration)),void 0,_m,n=>n.integration),zl=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n)&&Number.isFinite(Date.parse(`${n}T00:00:00Z`))&&new Date(`${n}T00:00:00Z`).toISOString().slice(0,10)===n,pd=n=>typeof n=="string"&&n.length>0&&n.length<=8192,cM=n=>He(n)&&zl(n.startDate)&&zl(n.endDate)&&n.startDate<=n.endDate&&typeof n.limit=="number"&&Number.isInteger(n.limit)&&n.limit>0&&n.limit<=fd&&(n.cursor===void 0||pd(n.cursor)),uM=n=>He(n)&&pd(n.revision)&&(n.cursor===void 0||pd(n.cursor))&&Array.isArray(n.items)&&n.items.length<=fd&&n.items.every(e=>xm(e)&&zl(e.date)&&(e.endDate===void 0||zl(e.endDate)&&e.endDate>=e.date))&&new Set(n.items.map(e=>e.id)).size===n.items.length,dM=bt("calendar.itemSource","service","2.0.0","many",n=>He(n)&&Tt(n,"list")&&(n.integration===void 0||wm(n.integration)),void 0,{..._m,list:{args:n=>ht(n,[cM]),result:uM}},n=>n.integration),hM=bt("calendar.itemSourceRevision","state","1.0.0","many",n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0),pM=bt("calendar.navigator","service","1.0.0","one",n=>He(n)&&Tt(n,"openDate"),void 0,{openDate:{args:n=>ht(n,[eM]),result:Yi}}),fM=bt("calendar.panelSelection","state","1.0.0","one",n=>He(n)&&(n.selectedDate===null||typeof n.selectedDate=="string")&&(n.rangeStart===null||typeof n.rangeStart=="string")&&(n.rangeEnd===null||typeof n.rangeEnd=="string")),mM=bt("web.activeContext","state","1.0.0","one",n=>He(n)&&typeof n.instanceId=="string"&&typeof n.url=="string"&&typeof n.title=="string");function ym(n){return He(n)&&typeof n.id=="string"&&typeof n.displayName=="string"&&(n.avatarUrl===void 0||typeof n.avatarUrl=="string")&&Array.isArray(n.emails)&&n.emails.every(e=>He(e)&&typeof e.address=="string"&&(e.label===void 0||typeof e.label=="string"))}var gM=bt("contacts.directory","service","1.0.0","one",n=>He(n)&&["search","resolveEmails","open"].every(e=>Tt(n,e)),void 0,{search:{args:n=>n.length===2&&typeof n[0]=="string"&&n[0].length<=1e3&&Number.isInteger(n[1])&&Number(n[1])>0&&Number(n[1])<=50,result:n=>Array.isArray(n)&&n.length<=50&&n.every(ym)},resolveEmails:{args:n=>n.length===1&&Array.isArray(n[0])&&n[0].length<=200&&n[0].every(e=>typeof e=="string"&&e.length<=1e3),result:n=>Array.isArray(n)&&n.every(e=>He(e)&&typeof e.address=="string"&&Array.isArray(e.contacts)&&e.contacts.every(ym))},open:{args:n=>n.length>=1&&n.length<=2&&typeof n[0]=="string"&&(n[1]===void 0||He(n[1])&&(n[1].newTab===void 0||typeof n[1].newTab=="boolean")),result:Yi}}),yM=bt("contacts.directoryRevision","state","1.0.0","one",n=>Number.isSafeInteger(n)&&Number(n)>=0),xM=bt("web.navigator","service","1.0.0","one",n=>He(n)&&Tt(n,"open"),void 0,{open:{args:n=>ht(n,[tM]),result:Yi}}),bM=bt("selection.textAction","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&typeof n.label=="string"&&Array.isArray(n.surfaces)&&Tt(n,"run"),n=>[n.id]),vM=bt("geo.navigator","service","1.0.0","one",n=>He(n)&&Tt(n,"open"),void 0,{open:{args:n=>ht(n,[nM]),result:Yi}}),_M=bt("geo.search","service","1.0.0","one",n=>He(n)&&Tt(n,"search")&&Tt(n,"reverse"),void 0,{search:{args:n=>ht(n,[We]),result:iM},reverse:{args:n=>ht(n,[e=>Number.isFinite(e),e=>Number.isFinite(e)]),result:rM}}),wM=bt("agent.toolProvider","service","1.0.0","many",n=>He(n)&&Array.isArray(n.tools)&&n.tools.every(aM)&&Tt(n,"execute"),n=>n.tools.map(e=>e.name),{execute:{args:n=>ht(n,[We,He,sM]),result:oM}},n=>({tools:n.tools}),"global"),MM=bt("guard.runtime","service","1.0.0","one",n=>He(n)&&["resolve","requestApproval","consumeToken","audit"].every(e=>Tt(n,e)),void 0,{resolve:{args:n=>ht(n,[He]),result:He},requestApproval:{args:n=>ht(n,[He]),result:Yr},consumeToken:{args:n=>n.length>=1&&n.length<=2&&We(n[0])&&ln(n[1]),result:Yr},audit:{args:n=>ht(n,[He]),result:Yi}}),SM=bt("browser.automation","service","1.0.0","one",n=>He(n)&&["list","open","switch","close","snapshot","readText","readHtml","screenshot","navigate","back","forward","reload","click","type","select","scroll","pressKey"].every(e=>Tt(n,e)),void 0,{list:{args:n=>n.length===0,result:Xt},open:{args:n=>ht(n,[We]),result:Xt},switch:{args:n=>ht(n,[We]),result:Xt},close:{args:n=>ht(n,[We]),result:Xt},snapshot:{args:n=>ht(n,[We]),result:Xt},readText:{args:n=>n.length>=1&&n.length<=2&&We(n[0])&&Jw(n[1]),result:Xt},readHtml:{args:n=>ht(n,[We]),result:Xt},screenshot:{args:n=>ht(n,[We]),result:Xt},click:{args:n=>ht(n,[We,e=>typeof e=="number"]),result:Xt},type:{args:n=>n.length>=3&&n.length<=4&&We(n[0])&&typeof n[1]=="number"&&We(n[2])&&(n[3]===void 0||typeof n[3]=="boolean"),result:Xt},select:{args:n=>ht(n,[We,e=>typeof e=="number",We]),result:Xt},scroll:{args:n=>ht(n,[We,e=>typeof e=="number",e=>typeof e=="number"]),result:Xt},pressKey:{args:n=>ht(n,[We,We]),result:Xt},navigate:{args:n=>ht(n,[We,We]),result:Xt},back:{args:n=>ht(n,[We]),result:Xt},forward:{args:n=>ht(n,[We]),result:Xt},reload:{args:n=>ht(n,[We]),result:Xt}}),EM=bt("fileTree.contextItem","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&typeof n.label=="string"&&ln(n.labelKey)&&Tt(n,"run"),n=>[n.id]),TM=bt("newTab.entry","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&Tt(n,"run"),n=>[n.id]),AM=bt("search.resultAction","extension","1.0.0","many",n=>He(n)&&typeof n.cardKind=="string"&&Tt(n,"open"),n=>[n.cardKind]),CM=bt("search.resultCard","extension","1.0.0","many",n=>He(n)&&typeof n.cardKind=="string"&&Tt(n,"render")&&Tt(n,"open"),n=>[n.cardKind]),Fl=bt("metadataPanel.segment","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&Tt(n,"render"),n=>[n.id]),Mm=bt("workspace.surface","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace","footer"].includes(String(n.surface))&&Tt(n,"getSnapshot")&&Tt(n,"subscribe")&&Tt(n,"restore"),n=>[n.id]),IM=bt("metadata.plugin","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&Tt(n,"facts"),n=>[n.id]),RM=bt("workspace.viewState","extension","1.0.0","many",n=>He(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace"].includes(String(n.surface))&&Tt(n,"capture")&&Tt(n,"restore")&&Tt(n,"subscribe"),n=>[n.id]);var Bl=n=>{if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark data");let e=Object.getPrototypeOf(n);if(e!==null&&(Object.getPrototypeOf(e)!==null||typeof Object.getOwnPropertyDescriptor(e,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(e,"constructor").value)!=="function Object() { [native code] }"))throw new Error("Invalid bookmark prototype");let t=Object.create(null),i=Reflect.ownKeys(n);if(i.length>32)throw new Error("Invalid bookmark descriptor");for(let r of i){if(typeof r!="string")continue;if(["__proto__","prototype","constructor"].includes(r))throw new Error("Invalid bookmark key");let s=Object.getOwnPropertyDescriptor(n,r);s?.enumerable&&"value"in s&&(t[r]=s.value)}return t},md=n=>!!(n&&typeof n=="object"&&!Array.isArray(n)),Sm=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),Em=n=>md(n)&&typeof n.surface=="string"&&Sm.has(n.surface)&&(n.instanceId===void 0||typeof n.instanceId=="string"&&n.instanceId.length<=512&&!/[\u0000-\u001f]/.test(n.instanceId));function gd(n){let e=Bl(n);if(!Em(e))throw new Error("Invalid bookmark descriptor");let t=hd({kind:"plugin",pluginId:"provider",surface:e.surface,instanceId:e.instanceId,itemId:e.itemId,state:e.state}),i=fm({folderPath:"",title:e.title,description:e.description,target:t});if(!i.title||typeof i.description!="string")throw new Error("Bookmark presentation is required");return{surface:t.surface,title:i.title,description:i.description,state:t.state,...t.instanceId===void 0?{}:{instanceId:t.instanceId},...t.itemId===void 0?{}:{itemId:t.itemId}}}function yd(n){try{let e=gd(n),t=Bl(n);return JSON.stringify(e.state)===JSON.stringify(dd(t.state))}catch{return!1}}function PM(n){try{let e=Bl(n);if(e.status==="unavailable"||e.status==="invalid")return{status:e.status};if(e.status==="ready")return{status:"ready",bookmark:gd(e.bookmark)}}catch{}return{status:"invalid"}}var NM=n=>{try{let e=Bl(n);return e.status==="unavailable"||e.status==="invalid"||e.status==="ready"&&yd(e.bookmark)}catch{return!1}},LM=n=>md(n)&&["restored","missing","unavailable","invalid"].includes(String(n.status)),DM=bt("workspace.bookmark","service","1.0.0","many",n=>md(n)&&typeof n.id=="string"&&Sm.has(String(n.surface))&&eo(n.stateSchema)&&(n.itemStateSchema===void 0||eo(n.itemStateSchema))&&typeof n.capture=="function"&&typeof n.restore=="function",n=>[n.surface],{capture:{args:n=>n.length===1&&Em(n[0]),result:NM,sanitizeResult:PM},restore:{args:n=>n.length===1&&yd(n[0]),result:LM}},n=>({surface:n.surface,stateSchema:n.stateSchema,...n.itemStateSchema?{itemStateSchema:n.itemStateSchema}:{}}));var to=n=>!!n&&typeof n=="object"&&!Array.isArray(n),Tm=n=>typeof n=="string"&&/^[a-zA-Z0-9][a-zA-Z0-9._:-]{0,127}$/.test(n);function Am(n){if(!to(n)||!Tm(n.id)||typeof n.label!="string"||!n.label.trim()||n.label.length>256||n.labelKey!==void 0&&typeof n.labelKey!="string"||!Array.isArray(n.items)||n.items.length>128||!Array.isArray(n.defaultItems)||typeof n.getSnapshot!="function"||typeof n.subscribe!="function"||n.invoke!==void 0&&typeof n.invoke!="function"||n.invokeAutomation!==void 0&&typeof n.invokeAutomation!="function"||n.pluginViews!==void 0&&typeof n.pluginViews!="boolean"||n.fileExtensions!==void 0&&(!Array.isArray(n.fileExtensions)||!n.fileExtensions.every(t=>typeof t=="string"&&/^\.[a-zA-Z0-9][a-zA-Z0-9.+_-]{0,63}$/.test(t))))return!1;let e=new Set;for(let t of n.items){if(!to(t)||!Tm(t.id)||e.has(t.id)||typeof t.label!="string"||!t.label.trim()||t.label.length>256||t.labelKey!==void 0&&typeof t.labelKey!="string"||t.available!==void 0&&typeof t.available!="boolean"||!["text","badge","button","select","toggle","range","thumbnail"].includes(String(t.kind)))return!1;e.add(t.id)}if(n.automation!==void 0){if(!to(n.automation)||Object.keys(n.automation).some(t=>t!=="actions")||!to(n.automation.actions)||typeof n.invokeAutomation!="function"||Object.keys(n.automation.actions).length>128)return!1;for(let[t,i]of Object.entries(n.automation.actions))if(!e.has(t)||!to(i)||!["button","number","string","boolean"].includes(String(i.type))||Object.keys(i).some(r=>!["type","integer","maxLength"].includes(r))||i.integer!==void 0&&(i.type!=="number"||typeof i.integer!="boolean")||i.maxLength!==void 0&&(i.type!=="string"||!Number.isSafeInteger(i.maxLength)||Number(i.maxLength)<1||Number(i.maxLength)>65536))return!1}return n.defaultItems.every(t=>typeof t=="string"&&e.has(t))&&new Set(n.defaultItems).size===n.defaultItems.length}var xd=bt("workspace.details","extension","1.0.0","many",Am,n=>[`provider:${n.id}`,...n.items.map(e=>`item:${e.id}`)]);var TI=[Lt,`${Lt}/**/secrets.json`,".git","**/.env","**/.env.*"];var GI=1024*1024;var $I=Object.freeze({activePerBackend:8,retainedPerBackend:32,activePerClient:4,retainedPerClient:16,active:64,retained:256,valueBytes:4190208,retainedBytes:67108864,controlRequests:17,controlTimeoutMs:5e3,pollMs:1e3});var XI=globalThis.Buffer;var UM=Object.freeze({schemaBytes:65536,schemaNodes:4096,schemaDepth:32,valueBytes:10*1024*1024,handles:256,pending:32,timeoutMs:2e3});function yn(n,e=0){return new Intl.NumberFormat(qe.ui.language(),{maximumFractionDigits:e,minimumFractionDigits:e}).format(n)}function jr(n,e=1){return`${yn(n,e)} m`}function Hl(n){let e=new Date(`${n}T12:00:00Z`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat(qe.ui.language(),{dateStyle:"long"}).format(e)}var zM=["building","tiles","buildings","date"],FM=["building","tiles"];function BM(n){let e=n.index,t={},i=n.selected;return t.building=i?{text:`${Qe("footer.building")} \xB7 ${i.egid??"\u2014"} \xB7 ${jr(i.height)}`}:{available:!1},t.tiles=e?{text:`${Qe("footer.tiles")} \xB7 ${yn(n.loadedTiles)} / ${yn(e.stats.tiles)}`}:{available:!1},t.buildings=e?{text:`${Qe("footer.buildings")} \xB7 ${yn(e.stats.buildings)}`}:{available:!1},t.date=e?{text:`${Qe("footer.date")} \xB7 ${Hl(e.source.date)}`}:{available:!1},t}function Cm(n){let e=0,t={id:"poly.city.details",label:"Campus map",labelKey:"campusMap.title",pluginViews:!0,items:zM.map(i=>({id:i,label:Qe(`footer.${i}`),labelKey:`city.footer.${i}`,kind:"text"})),defaultItems:[...FM],subscribe:i=>rc(()=>{e++,i()}),getSnapshot:()=>({items:BM(Ii()),revision:String(e)})};return n.interop.extensions.provide(xd,t)}var Im=`
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
`;var HM="https://www.stadt-zuerich.ch/de/planen-und-bauen/bauvorschriften-und-planerische-grundlagen/planbezug-datenbezug/3d-stadtmodell.html";function Rm(){let n=Ri();N.useEffect(()=>{ho()},[]);let e=n.index;return N.createElement("div",{className:"z3d-options"},n.status==="missing"&&N.createElement("div",{className:"z3d-note"},N.createElement(Cl,null)),n.status==="error"&&N.createElement("div",{className:"z3d-note z3d-error"},n.error),n.selected&&N.createElement("section",null,N.createElement("div",{className:"z3d-section-title"},Qe("building.title")),N.createElement("dl",{className:"z3d-facts"},N.createElement("dt",null,Qe("building.egid")),N.createElement("dd",null,n.selected.egid??"\u2014"),N.createElement("dt",null,Qe("building.height")),N.createElement("dd",null,jr(n.selected.height)),N.createElement("dt",null,Qe("building.ground")),N.createElement("dd",null,jr(n.selected.ground)," ",Qe("unit.asl")),N.createElement("dt",null,Qe("building.roof")),N.createElement("dd",null,jr(n.selected.roof)," ",Qe("unit.asl")),N.createElement("dt",null,Qe("building.position")),N.createElement("dd",null,yn(n.selected.center[0])," / ",yn(n.selected.center[1])),N.createElement("dt",null,Qe("building.triangles")),N.createElement("dd",null,yn(n.selected.triangles)))),e&&N.createElement("section",null,N.createElement("div",{className:"z3d-section-title"},Qe("model.title")),N.createElement("dl",{className:"z3d-facts"},N.createElement("dt",null,Qe("model.date")),N.createElement("dd",null,Hl(e.source.date)),N.createElement("dt",null,Qe("model.buildings")),N.createElement("dd",null,yn(e.stats.buildings)),N.createElement("dt",null,Qe("model.triangles")),N.createElement("dd",null,yn(e.stats.triangles)),N.createElement("dt",null,Qe("model.tiles")),N.createElement("dd",null,yn(n.loadedTiles)," / ",yn(e.stats.tiles))),N.createElement("p",{className:"z3d-note"},Qe("model.groundNote")," ",N.createElement("a",{href:HM,target:"_blank",rel:"noreferrer"},Qe("model.source"))),N.createElement("p",{className:"z3d-note"},Me("map.attribution"))))}var VM=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5"/><path d="M12 12v9"/></svg>')}`,GM=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16"/><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"/><path d="M10.5 21v-4h3v4"/></svg>')}`;function WM(){let n=Li(),e=Ni(),t=n.building;if(!t)return N.createElement("p",{className:"z3d-note poly-properties-note"},Me("properties.none"));let i=e.levels?.get(t.code)??[],r=i.find(l=>l.id===n.level),s=e.room&&e.room.level.split(".")[1]===t.code?e.room:null,o=s?i.find(l=>l.id===s.level):void 0,a=e.levelsStatus==="ready"?i.length?String(i.length):Me("floors.none"):Me("floors.reading");return N.createElement("div",{className:"z3d-options"},N.createElement("section",null,N.createElement("div",{className:"z3d-section-title"},Me("properties.building")),N.createElement("dl",{className:"z3d-facts"},N.createElement("dt",null,Me("properties.code")),N.createElement("dd",null,t.code),N.createElement("dt",null,Me("properties.address")),N.createElement("dd",{title:$n(t)},$n(t)),N.createElement("dt",null,Me("properties.campus")),N.createElement("dd",null,Me(`group.${t.campus}`)),N.createElement("dt",null,Me("properties.floors")),N.createElement("dd",null,a),r&&N.createElement(N.Fragment,null,N.createElement("dt",null,Me("properties.floor")),N.createElement("dd",null,r.name||r.id.split(".").pop()))),t.link&&N.createElement("p",{className:"z3d-note"},N.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer"},Me("building.link")))),s&&N.createElement("section",null,N.createElement("div",{className:"z3d-section-title"},Me("properties.room")),N.createElement("dl",{className:"z3d-facts"},N.createElement("dt",null,Me("properties.room")),N.createElement("dd",null,s.name),N.createElement("dt",null,Me("properties.floor")),N.createElement("dd",null,o?.name||s.level.split(".").pop()),s.type&&N.createElement(N.Fragment,null,N.createElement("dt",null,Me("room.type")),N.createElement("dd",{title:s.type},s.type)),s.use&&N.createElement(N.Fragment,null,N.createElement("dt",null,Me("room.use")),N.createElement("dd",{title:s.use},s.use)),N.createElement("dt",null,Me("properties.kind")),N.createElement("dd",null,N.createElement("span",{className:"poly-properties-kind"},N.createElement("i",{style:{background:js[s.kind]}}),Me(`room.kind.${s.kind}`))))))}function ZM(){return Li().view==="3d"?N.createElement(Rm,null):N.createElement("p",{className:"z3d-note poly-properties-note"},Me("properties.only3d"))}function Pm(n){let e=i=>Pi(i.tab?.instanceId??i.subject?.instanceId),t=[n.interop.extensions.provide(Fl,{id:"poly.building",label:"Building",labelKey:"campusMap.properties.buildingTab",icon:GM,pluginSurfaces:["main_workspace"],render:i=>e(i)?N.createElement(WM,null):null}),n.interop.extensions.provide(Fl,{id:"poly.city3d",label:"3D city",labelKey:"campusMap.properties.tab",icon:VM,pluginSurfaces:["main_workspace"],render:i=>e(i)?N.createElement(ZM,null):null})];return()=>{for(let i of t)i()}}var Nm={"manifest.name":"Poly","manifest.description":"ETH und UZH in Valley: der eLink-Shuttle zwischen ETH Zentrum und H\xF6nggerberg, der Men\xFCplan von ETH Zentrum, ETH H\xF6nggerberg und den UZH-Mensen, ein Campusplan der ETH-Geb\xE4ude mit ihren Geschossen und R\xE4umen, in 2D und im 3D-Stadtmodell der Stadt Z\xFCrich, und die ETH-News mit Zukunftsblog, \xABGlobe\xBB und den Medienmitteilungen, in Valley gelesen.","menu.title":"Men\xFCplan",refresh:"Aktualisieren",openWebsite:"Website \xF6ffnen","day.previous":"Vorheriger Tag","day.next":"N\xE4chster Tag","day.backToToday":"Zur\xFCck zu heute","day.today":"Heute","week.previous":"Vorherige Woche","week.next":"N\xE4chste Woche","week.label":"Woche","service.label":"Mahlzeit","service.lunch":"Mittag","service.dinner":"Abend",loading:"Men\xFCs werden geladen \u2026","empty.lunch":"An diesem Tag gibt es nirgends ein Mittagessen.","empty.dinner":"An diesem Tag gibt es nirgends ein Abendessen.","empty.location":"F\xFCr diese Mahlzeit steht nichts auf dem Men\xFC.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarisch","climate.LOW":"Geringe Klimawirkung","climate.MEDIUM":"Mittlere Klimawirkung","climate.HIGH":"Hohe Klimawirkung","price.students":"Studierende","price.internal":"Mitarbeitende","price.external":"G\xE4ste",allergens:"Allergene","allergens.none":"Keine Allergene angegeben","credit.eth":"Men\xFCs von ETH Z\xFCrich Gastronomie.","credit.uzh":"Men\xFCs der ZFV auf food2050.","error.networkError":"Der Men\xFCdienst ist nicht erreichbar.","error.serviceError":"Der Men\xFCdienst hat mit einem Fehler geantwortet.","error.formatError":"Der Men\xFCdienst hat Daten geschickt, die Poly nicht lesen kann.","error.notFound":"Diese Seite gibt es beim Men\xFCdienst nicht.","error.invalidInput":"Poly hat ein Men\xFC auf eine Art angefragt, die der Dienst nicht kennt.","error.unavailable":"Poly wird neu geladen.",openPage:"Men\xFCplan-Seite \xF6ffnen","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH-Betriebe","menus.one":"1 Men\xFC","menus.other":"{count} Men\xFCs","hours.openNow":"Jetzt ge\xF6ffnet \xB7 {hours}","hours.closed":"Geschlossen \xB7 {hours}","hours.open":"Ge\xF6ffnet {hours}","service.time.lunch":"Mittag {hours}","service.time.dinner":"Abend {hours}",filter:"Filter","filter.vegetarian":"Vegetarisch","filter.vegan":"Vegan","filter.glutenFree":"Glutenfrei","filter.clear":"Filter zur\xFCcksetzen","empty.filtered":"Kein Men\xFC passt zu den Filtern.","loading.uzh":"Die UZH-Betriebe werden gelesen\u2026",openInNewTab:"In neuem Tab \xF6ffnen","settings.onlyVegetarian.title":"Nur vegetarisch","settings.onlyVegetarian.description":"Nur vegetarische und vegane Men\xFCs zeigen, in den Zahlen der Ortsliste und auf der Seite.","settings.onlyVegan.title":"Nur vegan","settings.onlyVegan.description":"Nur vegane Men\xFCs zeigen.","settings.onlyGlutenFree.title":"Nur glutenfrei","settings.onlyGlutenFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene kein glutenhaltiges Getreide enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.","settings.campus.title":"Campus","settings.campus.description":"Der im Men\xFCplan gew\xE4hlte Tag: Favoriten oder ein Campus.","settings.day.title":"Tag","settings.day.description":"Tag und Mahlzeit, die der Men\xFCplan zeigt; ein vergangener Tag wird zu heute.","price.internalStudents":"Mitarbeitende & Studierende","price.all":"Alle Besucher","filter.lactoseFree":"Laktosefrei","settings.onlyLactoseFree.title":"Nur laktosefrei","settings.onlyLactoseFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene keine Milch enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.",prices:"Preise","prices.all":"Alle Preise","settings.prices.title":"Angezeigte Preise","settings.prices.description":"Welche Preise die Men\xFCkarten zeigen: alle, von Studierenden bis G\xE4ste, oder die einer Gruppe.","campus.favorites":"Favoriten","campus.favorites.title":"Lieblingsorte","favorite.add":"{name} zu den Favoriten hinzuf\xFCgen","favorite.remove":"{name} aus den Favoriten entfernen","empty.favorites":"Keiner deiner Lieblingsorte hat an diesem Tag ein Men\xFC f\xFCr diese Mahlzeit.","credit.both":"Men\xFCs von ETH Z\xFCrich Gastronomie und vom ZFV auf food2050.","settings.favorites.title":"Lieblingsorte","settings.favorites.description":"Die im Men\xFCplan mit einem Stern markierten Orte.","mode.label":"Seitenleisten-Tabs","settings.mode.title":"Seitenleisten-Tab","settings.mode.description":"Der gezeigte Tab der Seitenleiste: der eLink-Shuttle, der Men\xFCplan, der Campusplan oder ETH-News.","settings.tabOrder.title":"Reihenfolge der Seitenleisten-Tabs","settings.tabOrder.description":"Die Reihenfolge der Tabs in der Seitenleiste; \xE4ndern durch Ziehen eines Tabs oder mit Wahltaste und Pfeiltaste.","city.display.color":"Farbe","city.display.surfaces":"Fl\xE4chen","city.display.height":"H\xF6he","city.display.ground":"Gel\xE4nde","city.display.groundHint":"Ein angen\xE4hertes Gel\xE4nde aus den Sockelh\xF6hen der Geb\xE4ude","city.building.title":"Geb\xE4ude","city.building.close":"Schliessen","city.building.egid":"EGID","city.building.height":"H\xF6he","city.building.ground":"Terrain","city.building.roof":"Dachfirst","city.building.position":"LV95 E / N","city.building.triangles":"Dreiecke","city.unit.asl":"m \xFC. M.","city.model.title":"Modell","city.model.date":"Datenstand","city.model.buildings":"Geb\xE4ude","city.model.triangles":"Dreiecke","city.model.tiles":"Geladene Kacheln","city.model.groundNote":"Geb\xE4ude: 3D-Stadtmodell der Stadt Z\xFCrich, Dachmodell LoD2, Open Government Data. Das Gel\xE4nde ist aus den Sockelh\xF6hen der Geb\xE4ude angen\xE4hert.","city.model.source":"Quelle","city.model.loading":"Stadtmodell wird geladen \u2026","city.model.errorTitle":"Das Stadtmodell konnte nicht gelesen werden","city.model.errorText":"Poly konnte die Dateien seines 3D-Stadtmodells nicht laden. Aktualisiere Poly oder installiere es neu.","city.model.missingTitle":"Kein Stadtmodell installiert","city.model.missingText":"Diese Kopie von Poly wurde ohne Stadtmodell gebaut. F\xFCge es mit dem Update-Skript im Plugin-Ordner in runtime/assets/model/ des Pakets ein und baue es neu:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"Die 3D-Ansicht konnte nicht starten","city.view.loadingTiles":"{{count}} Kacheln werden geladen \u2026","city.settings.model":"Stadtmodell","city.settings.modelMissing":"Nicht installiert. Das Modell geh\xF6rt nach {{folder}}.","city.settings.colorMode":"Farbe","city.settings.showGround":"Gel\xE4nde","city.settings.camera":"Kamera","city.footer.building":"Geb\xE4ude","city.footer.tiles":"Kacheln","city.footer.buildings":"Geb\xE4ude","city.footer.date":"Datenstand","settings.building.title":"Geb\xE4ude","settings.building.description":"Das im Campusplan gew\xE4hlte ETH-Geb\xE4ude, mit seinem K\xFCrzel.","settings.level.title":"Geschoss","settings.level.description":"Das Geschoss des gew\xE4hlten Geb\xE4udes, dessen R\xE4ume der Campusplan zeigt.","settings.campusView.title":"Campusansicht","settings.campusView.description":"Was die Campusseite zeigt: den 2D-Campusplan oder das 3D-Stadtmodell.","campusMap.title":"Campusplan","campusMap.openPage":"Seite des Campusplans \xF6ffnen","campusMap.command.open":"Campusplan \xF6ffnen","campusMap.map.attribution":"Karte \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap-Mitwirkende \xB7 Geb\xE4ude \xA9 ETH Z\xFCrich","campusMap.map.loading":"Karte wird geladen \u2026","campusMap.map.failed":"Die Karte konnte nicht starten","campusMap.floors.label":"Geschosse von {{code}}","campusMap.floors.show":"Geschoss {{floor}} zeigen","campusMap.floors.loading":"R\xE4ume werden geladen \u2026","campusMap.floors.failed":"Die R\xE4ume konnten nicht gelesen werden","campusMap.floors.one":"1 Geschoss mit R\xE4umen","campusMap.floors.other":"{{count}} Geschosse mit R\xE4umen","campusMap.floors.none":"Keine Geschosspl\xE4ne ver\xF6ffentlicht","campusMap.floors.reading":"Geschosse werden gelesen \u2026","campusMap.room.close":"Schliessen","campusMap.room.type":"Raumtyp","campusMap.room.use":"Nutzung","campusMap.legend.label":"Raumtypen","campusMap.room.kind.teaching":"Lehre","campusMap.room.kind.lab":"Labor","campusMap.room.kind.office":"B\xFCro","campusMap.room.kind.circulation":"Verkehrsfl\xE4che","campusMap.room.kind.toilet":"Toiletten","campusMap.room.kind.service":"Betrieb","campusMap.room.kind.other":"Andere","campusMap.view.label":"Ansicht","campusMap.view.map":"Karte","campusMap.view.3d":"3D","campusMap.view.outside":"Dieses Geb\xE4ude liegt ausserhalb des 3D-Stadtmodells der Stadt Z\xFCrich","campusMap.outlines.failed":"Die Geb\xE4udeumrisse konnten nicht gelesen werden","campusMap.building.link":"Geb\xE4udeseite der ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Weitere Standorte","campusMap.search.placeholder":"Geb\xE4ude, R\xE4ume, Strassen suchen","campusMap.search.clear":"Suche l\xF6schen","campusMap.search.none":"Kein Geb\xE4ude passt.","campusMap.credit":"Geb\xE4ude, Geschosse und R\xE4ume aus dem Campusplan der ETH Z\xFCrich. Grundkarte: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap-Mitwirkende.","campusMap.map.zoomIn":"Vergr\xF6ssern","campusMap.map.zoomOut":"Verkleinern","elink.title":"eLink","elink.openPage":"eLink-Fahrplan \xF6ffnen","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 Fahrt","elink.runs.other":"{count} Fahrten","elink.firstLast":"Erste {first} \xB7 Letzte {last}","elink.in":"in {minutes} Min.","elink.delay":"{minutes} Min. versp\xE4tet","elink.ended":"Heute keine Abfahrten mehr.","elink.weekend":"Am Wochenende f\xE4hrt kein eLink.","elink.noService":"An diesem Tag f\xE4hrt kein eLink.","elink.showDay":"{day} zeigen","elink.loading":"eLink-Fahrplan wird geladen \u2026","elink.credit":"Fahrplandaten von transport.opendata.ch","elink.error.networkError":"transport.opendata.ch ist nicht erreichbar.","elink.error.serviceError":"transport.opendata.ch hat mit einem Fehler geantwortet.","elink.error.formatError":"transport.opendata.ch hat Daten geschickt, die Poly nicht lesen kann.","elink.error.invalidInput":"Poly hat transport.opendata.ch nach einem unbekannten Tag gefragt.","elink.settings.date.title":"eLink-Tag","elink.settings.date.description":"Der Tag, den der eLink-Tab zeigt; ein vergangener Tag wird zu heute.","campusMap.group.rooms":"R\xE4ume","campusMap.rooms.searching":"R\xE4ume werden gesucht \u2026","campusMap.rooms.failed":"Die R\xE4ume konnten nicht gesucht werden","campusMap.rooms.none":"Kein Raum passt.","campusMap.view.show3d":"In 3D zeigen","campusMap.view.show2d":"2D-Karte zeigen","elink.showTimetable":"Fahrplan zeigen","elink.arrival":"Ankunft {stop} um {time}","campusMap.building.clear":"Auswahl aufheben","campusMap.properties.tab":"3D-Stadt","campusMap.properties.only3d":"Die Angaben zur 3D-Stadt erscheinen hier, solange die Campusseite 3D zeigt.","campusMap.properties.buildingTab":"Geb\xE4ude","campusMap.properties.building":"Geb\xE4ude","campusMap.properties.room":"Raum","campusMap.properties.code":"K\xFCrzel","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Geschosse","campusMap.properties.floor":"Geschoss","campusMap.properties.kind":"Art","campusMap.properties.none":"W\xE4hle ein Geb\xE4ude auf der Campuskarte oder in der Seitenleiste, um es hier zu sehen.","campusMap.group.zurich":"Z\xFCrich","news.title":"ETH-News","news.openPage":"ETH-News \xF6ffnen","news.feeds":"News-Feeds","news.feed.news":"ETH-News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Magazin \xABGlobe\xBB","news.feed.media":"Medienmitteilungen","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Medien","news.recent.one":"1 Artikel diese Woche","news.recent.other":"{count} Artikel diese Woche","news.search":"Artikel suchen","news.search.clear":"Suche l\xF6schen","news.loading":"ETH-News werden geladen\u2026","news.empty":"Dieser Feed hat keine Artikel.","news.empty.search":"Kein Artikel passt zur Suche.","news.credit":"News der ETH Z\xFCrich, aus ihren RSS-Feeds auf ethz.ch","news.yesterday":"Gestern","news.openWebsite":"Auf ethz.ch \xF6ffnen","news.video":"Video","news.by":"von {author}","news.source":"Quelle: ETH Z\xFCrich,","news.error.networkError":"ethz.ch ist nicht erreichbar.","news.error.serviceError":"ethz.ch hat mit einem Fehler geantwortet.","news.error.notFound":"ethz.ch hat diesen Artikel nicht mehr.","news.error.formatError":"ethz.ch hat eine Seite geschickt, die Poly nicht lesen kann.","news.error.invalidInput":"Poly hat ethz.ch nach einer unbekannten Adresse gefragt.","news.error.unavailable":"Poly wird neu geladen; bitte gleich noch einmal versuchen.","news.settings.feed.title":"News-Feed","news.settings.feed.description":"Der ETH-News-Feed, den der News-Tab zeigt: alle Artikel, der Zukunftsblog, \xABGlobe\xBB oder die Medienmitteilungen.","news.tags.clear":"Zur\xFCcksetzen","news.tags.none":"Diese Artikel haben keine Tags.","news.tags.add":"{tag} ausw\xE4hlen","news.tags.remove":"{tag} abw\xE4hlen","news.empty.tags":"Kein Artikel hat die gew\xE4hlten Tags.","news.settings.tags.title":"News-Tags","news.settings.tags.description":"Die Tags, nach denen die Artikelliste des News-Tabs gefiltert wird; ein Artikel mit einem davon wird gezeigt.","news.tags.show":"Tags zeigen","news.tags.hide":"Artikel zeigen","news.tags.search":"Tags suchen","news.tags.count":"{count} Tags","news.tags.articles.one":"1 Artikel","news.tags.articles.other":"{count} Artikel","news.tags.noMatch":"Kein Tag passt zur Suche."};var Lm={"manifest.name":"Poly","manifest.description":"ETH y UZH en Valley: la lanzadera eLink entre ETH Zentrum y H\xF6nggerberg, el men\xFA del d\xEDa de ETH Zentrum, ETH H\xF6nggerberg y los comedores de la UZH, un mapa del campus con los edificios de la ETH, sus plantas y salas, en 2D y en el modelo 3D de la ciudad de Z\xFArich, y ETH News con el Zukunftsblog, Globe y los comunicados de prensa, le\xEDdos en Valley.","menu.title":"Men\xFA",refresh:"Actualizar",openWebsite:"Abrir sitio web","day.previous":"D\xEDa anterior","day.next":"D\xEDa siguiente","day.backToToday":"Volver a hoy","day.today":"Hoy","week.previous":"Semana anterior","week.next":"Semana siguiente","week.label":"Semana","service.label":"Comida","service.lunch":"Almuerzo","service.dinner":"Cena",loading:"Cargando men\xFAs\u2026","empty.lunch":"Ning\xFAn lugar sirve almuerzo este d\xEDa.","empty.dinner":"Ning\xFAn lugar sirve cena este d\xEDa.","empty.location":"Nada en el men\xFA para esta comida.","diet.vegan":"Vegano","diet.vegetarian":"Vegetariano","climate.LOW":"Impacto clim\xE1tico bajo","climate.MEDIUM":"Impacto clim\xE1tico medio","climate.HIGH":"Impacto clim\xE1tico alto","price.students":"Estudiantes","price.internal":"Personal","price.external":"Invitados",allergens:"Al\xE9rgenos","allergens.none":"Sin al\xE9rgenos declarados","credit.eth":"Men\xFAs de ETH Zurich Gastronom\xEDa.","credit.uzh":"Men\xFAs de la ZFV en food2050.","error.networkError":"No se pudo contactar con el servicio de men\xFAs.","error.serviceError":"El servicio de men\xFAs respondi\xF3 con un error.","error.formatError":"El servicio de men\xFAs envi\xF3 datos que Poly no puede leer.","error.notFound":"El servicio de men\xFAs no tiene esa p\xE1gina.","error.invalidInput":"Poly pidi\xF3 un men\xFA de una forma que el servicio no conoce.","error.unavailable":"Poly se est\xE1 recargando.",openPage:"Abrir la p\xE1gina del men\xFA","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"Locales de la UZH","menus.one":"1 men\xFA","menus.other":"{count} men\xFAs","hours.openNow":"Abierto ahora \xB7 {hours}","hours.closed":"Cerrado \xB7 {hours}","hours.open":"Abierto {hours}","service.time.lunch":"Almuerzo {hours}","service.time.dinner":"Cena {hours}",filter:"Filtro","filter.vegetarian":"Vegetariano","filter.vegan":"Vegano","filter.glutenFree":"Sin gluten","filter.clear":"Quitar filtros","empty.filtered":"Ning\xFAn men\xFA coincide con los filtros.","loading.uzh":"Leyendo los locales de la UZH\u2026",openInNewTab:"Abrir en una pesta\xF1a nueva","settings.onlyVegetarian.title":"Solo vegetariano","settings.onlyVegetarian.description":"Mostrar solo men\xFAs vegetarianos y veganos, en los recuentos de la lista de lugares y en la p\xE1gina.","settings.onlyVegan.title":"Solo vegano","settings.onlyVegan.description":"Mostrar solo men\xFAs veganos.","settings.onlyGlutenFree.title":"Solo sin gluten","settings.onlyGlutenFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen cereales con gluten. Un men\xFA sin al\xE9rgenos declarados no se muestra.","settings.campus.title":"Campus","settings.campus.description":"La etiqueta elegida en el men\xFA: Favoritos o un campus.","settings.day.title":"D\xEDa","settings.day.description":"El d\xEDa y la comida que muestra el men\xFA; un d\xEDa pasado vuelve a hoy.","price.internalStudents":"Personal y estudiantes","price.all":"Todos los visitantes","filter.lactoseFree":"Sin lactosa","settings.onlyLactoseFree.title":"Solo sin lactosa","settings.onlyLactoseFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen leche. Un men\xFA sin al\xE9rgenos declarados no se muestra.",prices:"Precios","prices.all":"Todos los precios","settings.prices.title":"Precios mostrados","settings.prices.description":"Qu\xE9 precios muestran las tarjetas del men\xFA: todos, de estudiantes a invitados, o los de un grupo.","campus.favorites":"Favoritos","campus.favorites.title":"Lugares favoritos","favorite.add":"A\xF1adir {name} a favoritos","favorite.remove":"Quitar {name} de favoritos","empty.favorites":"Ninguno de tus lugares favoritos tiene men\xFA para esta comida este d\xEDa.","credit.both":"Men\xFAs de ETH Zurich Gastronomy y del ZFV en food2050.","settings.favorites.title":"Lugares favoritos","settings.favorites.description":"Los lugares marcados con estrella en el men\xFA.","mode.label":"Pesta\xF1as de la barra lateral","settings.mode.title":"Pesta\xF1a de la barra lateral","settings.mode.description":"La pesta\xF1a que muestra la barra lateral: la lanzadera eLink, el men\xFA, el mapa del campus o ETH News.","settings.tabOrder.title":"Orden de las pesta\xF1as de la barra lateral","settings.tabOrder.description":"El orden de las pesta\xF1as de la barra lateral; se cambia arrastrando una pesta\xF1a o con Opci\xF3n y una flecha.","city.display.color":"Color","city.display.surfaces":"Superficies","city.display.height":"Altura","city.display.ground":"Terreno","city.display.groundHint":"Un terreno aproximado a partir de las cotas de base de los edificios","city.building.title":"Edificio","city.building.close":"Cerrar","city.building.egid":"EGID","city.building.height":"Altura","city.building.ground":"Suelo","city.building.roof":"Cumbrera","city.building.position":"LV95 E / N","city.building.triangles":"Tri\xE1ngulos","city.unit.asl":"m s. n. m.","city.model.title":"Modelo","city.model.date":"Datos de","city.model.buildings":"Edificios","city.model.triangles":"Tri\xE1ngulos","city.model.tiles":"Teselas cargadas","city.model.groundNote":"Edificios: modelo 3D de la ciudad de Z\xFArich, modelo de tejados LoD2, datos abiertos. El terreno se aproxima a partir de las cotas de base de los edificios.","city.model.source":"Fuente","city.model.loading":"Cargando el modelo de la ciudad\u2026","city.model.errorTitle":"No se pudo leer el modelo de la ciudad","city.model.errorText":"Poly no pudo cargar los archivos de su modelo 3D de la ciudad. Actualiza Poly o vuelve a instalarlo.","city.model.missingTitle":"No hay ning\xFAn modelo de la ciudad instalado","city.model.missingText":"Esta copia de Poly se cre\xF3 sin su modelo de la ciudad. A\xF1\xE1delo a runtime/assets/model/ del paquete con el script de actualizaci\xF3n de la carpeta del plugin y vuelve a compilarlo:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"No se pudo iniciar la vista 3D","city.view.loadingTiles":"Cargando {{count}} teselas\u2026","city.settings.model":"Modelo de la ciudad","city.settings.modelMissing":"No instalado. El modelo va en {{folder}}.","city.settings.colorMode":"Color","city.settings.showGround":"Terreno","city.settings.camera":"C\xE1mara","city.footer.building":"Edificio","city.footer.tiles":"Teselas","city.footer.buildings":"Edificios","city.footer.date":"Datos de","settings.building.title":"Edificio","settings.building.description":"El edificio de la ETH elegido en el mapa del campus, por su c\xF3digo.","settings.level.title":"Planta","settings.level.description":"La planta del edificio elegido cuyas salas muestra el mapa del campus.","settings.campusView.title":"Vista del campus","settings.campusView.description":"Lo que muestra la p\xE1gina del campus: el mapa 2D o el modelo 3D de la ciudad.","campusMap.title":"Mapa del campus","campusMap.openPage":"Abrir la p\xE1gina del mapa del campus","campusMap.command.open":"Abrir el mapa del campus","campusMap.map.attribution":"Mapa \xA9 Esri, HERE, Garmin, \xA9 colaboradores de OpenStreetMap \xB7 Edificios \xA9 ETH Z\xFCrich","campusMap.map.loading":"Cargando el mapa\u2026","campusMap.map.failed":"No se pudo iniciar el mapa","campusMap.floors.label":"Plantas de {{code}}","campusMap.floors.show":"Mostrar la planta {{floor}}","campusMap.floors.loading":"Cargando las salas\u2026","campusMap.floors.failed":"No se pudieron leer las salas","campusMap.floors.one":"1 planta con salas","campusMap.floors.other":"{{count}} plantas con salas","campusMap.floors.none":"No hay planos de plantas publicados","campusMap.floors.reading":"Leyendo las plantas\u2026","campusMap.room.close":"Cerrar","campusMap.room.type":"Tipo de sala","campusMap.room.use":"Uso","campusMap.legend.label":"Tipos de sala","campusMap.room.kind.teaching":"Docencia","campusMap.room.kind.lab":"Laboratorio","campusMap.room.kind.office":"Oficina","campusMap.room.kind.circulation":"Circulaci\xF3n","campusMap.room.kind.toilet":"Aseos","campusMap.room.kind.service":"Servicio","campusMap.room.kind.other":"Otros","campusMap.view.label":"Vista","campusMap.view.map":"Mapa","campusMap.view.3d":"3D","campusMap.view.outside":"Este edificio est\xE1 fuera del modelo 3D de la ciudad de Z\xFArich","campusMap.outlines.failed":"No se pudieron leer los contornos de los edificios","campusMap.building.link":"P\xE1gina del edificio de la ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Otras sedes","campusMap.search.placeholder":"Buscar edificios, salas, calles","campusMap.search.clear":"Borrar la b\xFAsqueda","campusMap.search.none":"Ning\xFAn edificio coincide.","campusMap.credit":"Edificios, plantas y salas del mapa del campus de la ETH Z\xFCrich. Mapa base: Esri Light/Dark Gray Canvas, \xA9 colaboradores de OpenStreetMap.","campusMap.map.zoomIn":"Acercar","campusMap.map.zoomOut":"Alejar","elink.title":"eLink","elink.openPage":"Abrir el horario de eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 viaje","elink.runs.other":"{count} viajes","elink.firstLast":"Primero {first} \xB7 \xDAltimo {last}","elink.in":"en {minutes} min","elink.delay":"{minutes} min de retraso","elink.ended":"Hoy no hay m\xE1s salidas.","elink.weekend":"El eLink no circula los fines de semana.","elink.noService":"El eLink no circula este d\xEDa.","elink.showDay":"Mostrar {day}","elink.loading":"Cargando el horario de eLink\u2026","elink.credit":"Datos de horarios de transport.opendata.ch","elink.error.networkError":"No se pudo acceder a transport.opendata.ch.","elink.error.serviceError":"transport.opendata.ch respondi\xF3 con un error.","elink.error.formatError":"transport.opendata.ch envi\xF3 datos que Poly no puede leer.","elink.error.invalidInput":"Poly pidi\xF3 a transport.opendata.ch un d\xEDa que no conoce.","elink.settings.date.title":"D\xEDa de eLink","elink.settings.date.description":"El d\xEDa que muestra la pesta\xF1a eLink; un d\xEDa pasado vuelve a hoy.","campusMap.group.rooms":"Salas","campusMap.rooms.searching":"Buscando salas\u2026","campusMap.rooms.failed":"No se pudieron buscar las salas","campusMap.rooms.none":"Ninguna sala coincide.","campusMap.view.show3d":"Mostrar en 3D","campusMap.view.show2d":"Mostrar el mapa 2D","elink.showTimetable":"Mostrar horario","elink.arrival":"Llega a {stop} a las {time}","campusMap.building.clear":"Quitar la selecci\xF3n","campusMap.properties.tab":"Ciudad 3D","campusMap.properties.only3d":"Los datos de la ciudad 3D aparecen aqu\xED mientras la p\xE1gina del campus muestra 3D.","campusMap.properties.buildingTab":"Edificio","campusMap.properties.building":"Edificio","campusMap.properties.room":"Sala","campusMap.properties.code":"C\xF3digo","campusMap.properties.address":"Direcci\xF3n","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Plantas","campusMap.properties.floor":"Planta","campusMap.properties.kind":"Tipo","campusMap.properties.none":"Selecciona un edificio en el mapa del campus o en la barra lateral para verlo aqu\xED.","campusMap.group.zurich":"Z\xFArich","news.title":"ETH News","news.openPage":"Abrir ETH News","news.feeds":"Canales de noticias","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Revista Globe","news.feed.media":"Comunicados de prensa","news.tag.news":"Noticias","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Prensa","news.recent.one":"1 art\xEDculo esta semana","news.recent.other":"{count} art\xEDculos esta semana","news.search":"Buscar art\xEDculos","news.search.clear":"Borrar b\xFAsqueda","news.loading":"Cargando ETH News\u2026","news.empty":"Este canal no tiene art\xEDculos.","news.empty.search":"Ning\xFAn art\xEDculo coincide con la b\xFAsqueda.","news.credit":"Noticias de la ETH Z\xFArich, de sus canales RSS en ethz.ch","news.yesterday":"Ayer","news.openWebsite":"Abrir en ethz.ch","news.video":"V\xEDdeo","news.by":"por {author}","news.source":"Fuente: ETH Z\xFArich,","news.error.networkError":"No se pudo acceder a ethz.ch.","news.error.serviceError":"ethz.ch respondi\xF3 con un error.","news.error.notFound":"ethz.ch ya no tiene este art\xEDculo.","news.error.formatError":"ethz.ch envi\xF3 una p\xE1gina que Poly no puede leer.","news.error.invalidInput":"Poly pidi\xF3 a ethz.ch una direcci\xF3n desconocida.","news.error.unavailable":"Poly se est\xE1 recargando; int\xE9ntalo de nuevo en un momento.","news.settings.feed.title":"Canal de noticias","news.settings.feed.description":"El canal de ETH News que muestra la pesta\xF1a News: todos los art\xEDculos, el Zukunftsblog, Globe o los comunicados de prensa.","news.tags.clear":"Borrar","news.tags.none":"Estos art\xEDculos no tienen etiquetas.","news.tags.add":"Seleccionar {tag}","news.tags.remove":"Deseleccionar {tag}","news.empty.tags":"Ning\xFAn art\xEDculo tiene las etiquetas elegidas.","news.settings.tags.title":"Etiquetas de noticias","news.settings.tags.description":"Las etiquetas que filtran la lista de art\xEDculos de la pesta\xF1a News; se muestra un art\xEDculo que lleve alguna.","news.tags.show":"Mostrar etiquetas","news.tags.hide":"Mostrar art\xEDculos","news.tags.search":"Buscar etiquetas","news.tags.count":"{count} etiquetas","news.tags.articles.one":"1 art\xEDculo","news.tags.articles.other":"{count} art\xEDculos","news.tags.noMatch":"Ninguna etiqueta coincide con la b\xFAsqueda."};var Dm={"manifest.name":"Poly","manifest.description":"L'ETH et l'UZH dans Valley : la navette eLink entre l'ETH Zentrum et H\xF6nggerberg, le menu du jour de l'ETH Zentrum, de l'ETH H\xF6nggerberg et des restaurants de l'UZH, un plan du campus des b\xE2timents de l'ETH avec leurs \xE9tages et salles, en 2D et dans la maquette 3D de la ville de Zurich, et ETH News avec le Zukunftsblog, Globe et les communiqu\xE9s de presse, lus dans Valley.","menu.title":"Menu",refresh:"Actualiser",openWebsite:"Ouvrir le site web","day.previous":"Jour pr\xE9c\xE9dent","day.next":"Jour suivant","day.backToToday":"Revenir \xE0 aujourd'hui","day.today":"Aujourd'hui","week.previous":"Semaine pr\xE9c\xE9dente","week.next":"Semaine suivante","week.label":"Semaine","service.label":"Repas","service.lunch":"Midi","service.dinner":"Soir",loading:"Chargement des menus\u2026","empty.lunch":"Aucun lieu ne sert de d\xE9jeuner ce jour-l\xE0.","empty.dinner":"Aucun lieu ne sert de d\xEEner ce jour-l\xE0.","empty.location":"Rien au menu pour ce repas.","diet.vegan":"V\xE9g\xE9talien","diet.vegetarian":"V\xE9g\xE9tarien","climate.LOW":"Faible impact climatique","climate.MEDIUM":"Impact climatique moyen","climate.HIGH":"Fort impact climatique","price.students":"\xC9tudiants","price.internal":"Personnel","price.external":"Invit\xE9s",allergens:"Allerg\xE8nes","allergens.none":"Aucun allerg\xE8ne d\xE9clar\xE9","credit.eth":"Menus d'ETH Zurich Gastronomie.","credit.uzh":"Menus de la ZFV sur food2050.","error.networkError":"Le service des menus est injoignable.","error.serviceError":"Le service des menus a r\xE9pondu par une erreur.","error.formatError":"Le service des menus a envoy\xE9 des donn\xE9es que Poly ne peut pas lire.","error.notFound":"Le service des menus n'a pas cette page.","error.invalidInput":"Poly a demand\xE9 un menu d'une fa\xE7on que le service ne conna\xEEt pas.","error.unavailable":"Poly se recharge.",openPage:"Ouvrir la page du menu","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"\xC9tablissements de l'UZH","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Ouvert \xB7 {hours}","hours.closed":"Ferm\xE9 \xB7 {hours}","hours.open":"Ouvert {hours}","service.time.lunch":"Midi {hours}","service.time.dinner":"Soir {hours}",filter:"Filtre","filter.vegetarian":"V\xE9g\xE9tarien","filter.vegan":"V\xE9gane","filter.glutenFree":"Sans gluten","filter.clear":"Effacer les filtres","empty.filtered":"Aucun menu ne correspond aux filtres.","loading.uzh":"Lecture des \xE9tablissements de l'UZH\u2026",openInNewTab:"Ouvrir dans un nouvel onglet","settings.onlyVegetarian.title":"V\xE9g\xE9tarien uniquement","settings.onlyVegetarian.description":"Afficher uniquement les menus v\xE9g\xE9tariens et v\xE9ganes, dans les comptes de la liste des lieux et sur la page.","settings.onlyVegan.title":"V\xE9gane uniquement","settings.onlyVegan.description":"Afficher uniquement les menus v\xE9ganes.","settings.onlyGlutenFree.title":"Sans gluten uniquement","settings.onlyGlutenFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent aucune c\xE9r\xE9ale avec gluten. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.","settings.campus.title":"Campus","settings.campus.description":"L\u2019\xE9tiquette choisie dans le menu : Favoris ou un campus.","settings.day.title":"Jour","settings.day.description":"Le jour et le repas affich\xE9s ; un jour pass\xE9 revient \xE0 aujourd'hui.","price.internalStudents":"Personnel et \xE9tudiants","price.all":"Tous les visiteurs","filter.lactoseFree":"Sans lactose","settings.onlyLactoseFree.title":"Sans lactose uniquement","settings.onlyLactoseFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent pas de lait. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.",prices:"Prix","prices.all":"Tous les prix","settings.prices.title":"Prix affich\xE9s","settings.prices.description":"Les prix affich\xE9s sur les cartes du menu : tous, des \xE9tudiants aux invit\xE9s, ou ceux d'un groupe.","campus.favorites":"Favoris","campus.favorites.title":"Lieux favoris","favorite.add":"Ajouter {name} aux favoris","favorite.remove":"Retirer {name} des favoris","empty.favorites":"Aucun de vos lieux favoris n'a de menu pour ce repas ce jour-l\xE0.","credit.both":"Menus de la gastronomie de l\u2019ETH Zurich et du ZFV sur food2050.","settings.favorites.title":"Lieux favoris","settings.favorites.description":"Les lieux marqu\xE9s d\u2019une \xE9toile dans le menu.","mode.label":"Onglets de la barre lat\xE9rale","settings.mode.title":"Onglet de la barre lat\xE9rale","settings.mode.description":"L'onglet affich\xE9 dans la barre lat\xE9rale : la navette eLink, le menu, le plan du campus ou ETH News.","settings.tabOrder.title":"Ordre des onglets de la barre lat\xE9rale","settings.tabOrder.description":"L'ordre des onglets de la barre lat\xE9rale, modifi\xE9 en faisant glisser un onglet ou avec Option et une fl\xE8che.","city.display.color":"Couleur","city.display.surfaces":"Surfaces","city.display.height":"Hauteur","city.display.ground":"Terrain","city.display.groundHint":"Un terrain approximatif d\xE9riv\xE9 des altitudes de base des b\xE2timents","city.building.title":"B\xE2timent","city.building.close":"Fermer","city.building.egid":"EGID","city.building.height":"Hauteur","city.building.ground":"Sol","city.building.roof":"Fa\xEEte","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"m","city.model.title":"Mod\xE8le","city.model.date":"Donn\xE9es du","city.model.buildings":"B\xE2timents","city.model.triangles":"Triangles","city.model.tiles":"Tuiles charg\xE9es","city.model.groundNote":"B\xE2timents : mod\xE8le 3D de la ville de Zurich, mod\xE8le de toits LoD2, donn\xE9es publiques ouvertes. Le terrain est approch\xE9 \xE0 partir des altitudes de base des b\xE2timents.","city.model.source":"Source","city.model.loading":"Chargement du mod\xE8le de la ville\u2026","city.model.errorTitle":"Le mod\xE8le de la ville n'a pas pu \xEAtre lu","city.model.errorText":"Poly n'a pas pu charger les fichiers de son mod\xE8le 3D de la ville. Mettez Poly \xE0 jour ou r\xE9installez-le.","city.model.missingTitle":"Aucun mod\xE8le de la ville install\xE9","city.model.missingText":"Cette copie de Poly a \xE9t\xE9 construite sans son mod\xE8le de la ville. Ajoutez-le dans runtime/assets/model/ du paquet avec le script de mise \xE0 jour du dossier du plugin, puis reconstruisez-le :","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"La vue 3D n'a pas pu d\xE9marrer","city.view.loadingTiles":"Chargement de {{count}} tuiles\u2026","city.settings.model":"Mod\xE8le de la ville","city.settings.modelMissing":"Non install\xE9. Le mod\xE8le doit se trouver dans {{folder}}.","city.settings.colorMode":"Couleur","city.settings.showGround":"Terrain","city.settings.camera":"Cam\xE9ra","city.footer.building":"B\xE2timent","city.footer.tiles":"Tuiles","city.footer.buildings":"B\xE2timents","city.footer.date":"Donn\xE9es du","settings.building.title":"B\xE2timent","settings.building.description":"Le b\xE2timent de l'ETH choisi sur le plan du campus, par son code.","settings.level.title":"\xC9tage","settings.level.description":"L'\xE9tage du b\xE2timent choisi dont le plan du campus montre les salles.","settings.campusView.title":"Vue du campus","settings.campusView.description":"Ce que montre la page du campus : le plan 2D ou la maquette 3D de la ville.","campusMap.title":"Plan du campus","campusMap.openPage":"Ouvrir la page du plan du campus","campusMap.command.open":"Ouvrir le plan du campus","campusMap.map.attribution":"Carte \xA9 Esri, HERE, Garmin, \xA9 contributeurs OpenStreetMap \xB7 B\xE2timents \xA9 ETH Z\xFCrich","campusMap.map.loading":"Chargement de la carte\u2026","campusMap.map.failed":"La carte n'a pas pu d\xE9marrer","campusMap.floors.label":"\xC9tages de {{code}}","campusMap.floors.show":"Afficher l'\xE9tage {{floor}}","campusMap.floors.loading":"Chargement des salles\u2026","campusMap.floors.failed":"Les salles n'ont pas pu \xEAtre lues","campusMap.floors.one":"1 \xE9tage avec salles","campusMap.floors.other":"{{count}} \xE9tages avec salles","campusMap.floors.none":"Aucun plan d'\xE9tage publi\xE9","campusMap.floors.reading":"Lecture des \xE9tages\u2026","campusMap.room.close":"Fermer","campusMap.room.type":"Type de salle","campusMap.room.use":"Usage","campusMap.legend.label":"Types de salle","campusMap.room.kind.teaching":"Enseignement","campusMap.room.kind.lab":"Laboratoire","campusMap.room.kind.office":"Bureau","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilettes","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Autres","campusMap.view.label":"Vue","campusMap.view.map":"Carte","campusMap.view.3d":"3D","campusMap.view.outside":"Ce b\xE2timent est hors de la maquette 3D de la ville de Zurich","campusMap.outlines.failed":"Les contours des b\xE2timents n'ont pas pu \xEAtre lus","campusMap.building.link":"Page du b\xE2timent de l'ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Autres sites","campusMap.search.placeholder":"Rechercher b\xE2timents, salles, rues","campusMap.search.clear":"Effacer la recherche","campusMap.search.none":"Aucun b\xE2timent ne correspond.","campusMap.credit":"B\xE2timents, \xE9tages et salles du plan du campus de l'ETH Z\xFCrich. Fond de carte : Esri Light/Dark Gray Canvas, \xA9 contributeurs OpenStreetMap.","campusMap.map.zoomIn":"Zoom avant","campusMap.map.zoomOut":"Zoom arri\xE8re","elink.title":"eLink","elink.openPage":"Ouvrir l\u2019horaire eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 course","elink.runs.other":"{count} courses","elink.firstLast":"Premi\xE8re {first} \xB7 Derni\xE8re {last}","elink.in":"dans {minutes} min","elink.delay":"{minutes} min de retard","elink.ended":"Plus de d\xE9parts aujourd\u2019hui.","elink.weekend":"Pas d\u2019eLink le week-end.","elink.noService":"Pas d\u2019eLink ce jour-l\xE0.","elink.showDay":"Afficher {day}","elink.loading":"Chargement de l\u2019horaire eLink\u2026","elink.credit":"Donn\xE9es horaires de transport.opendata.ch","elink.error.networkError":"transport.opendata.ch est injoignable.","elink.error.serviceError":"transport.opendata.ch a r\xE9pondu par une erreur.","elink.error.formatError":"transport.opendata.ch a envoy\xE9 des donn\xE9es que Poly ne sait pas lire.","elink.error.invalidInput":"Poly a demand\xE9 \xE0 transport.opendata.ch un jour inconnu.","elink.settings.date.title":"Jour eLink","elink.settings.date.description":"Le jour affich\xE9 par l\u2019onglet eLink ; un jour pass\xE9 revient \xE0 aujourd\u2019hui.","campusMap.group.rooms":"Salles","campusMap.rooms.searching":"Recherche des salles\u2026","campusMap.rooms.failed":"Les salles n'ont pas pu \xEAtre recherch\xE9es","campusMap.rooms.none":"Aucune salle ne correspond.","campusMap.view.show3d":"Afficher en 3D","campusMap.view.show2d":"Afficher la carte 2D","elink.showTimetable":"Afficher l\u2019horaire","elink.arrival":"Arriv\xE9e \xE0 {stop} \xE0 {time}","campusMap.building.clear":"Effacer la s\xE9lection","campusMap.properties.tab":"Ville 3D","campusMap.properties.only3d":"Les donn\xE9es de la ville 3D apparaissent ici tant que la page du campus affiche la 3D.","campusMap.properties.buildingTab":"B\xE2timent","campusMap.properties.building":"B\xE2timent","campusMap.properties.room":"Salle","campusMap.properties.code":"Code","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"\xC9tages","campusMap.properties.floor":"\xC9tage","campusMap.properties.kind":"Cat\xE9gorie","campusMap.properties.none":"S\xE9lectionnez un b\xE2timent sur le plan du campus ou dans la barre lat\xE9rale pour le voir ici.","campusMap.group.zurich":"Zurich","news.title":"ETH News","news.openPage":"Ouvrir ETH News","news.feeds":"Flux d'actualit\xE9s","news.feed.news":"ETH News","news.feed.zukunftsblog":"Zukunftsblog","news.feed.globe":"Magazine Globe","news.feed.media":"Communiqu\xE9s de presse","news.tag.news":"News","news.tag.zukunftsblog":"Blog","news.tag.globe":"Globe","news.tag.media":"Presse","news.recent.one":"1 article cette semaine","news.recent.other":"{count} articles cette semaine","news.search":"Rechercher des articles","news.search.clear":"Effacer la recherche","news.loading":"Chargement d'ETH News\u2026","news.empty":"Ce flux n'a aucun article.","news.empty.search":"Aucun article ne correspond \xE0 la recherche.","news.credit":"Actualit\xE9s de l'ETH Zurich, depuis ses flux RSS sur ethz.ch","news.yesterday":"Hier","news.openWebsite":"Ouvrir sur ethz.ch","news.video":"Vid\xE9o","news.by":"par {author}","news.source":"Source : ETH Zurich,","news.error.networkError":"ethz.ch est injoignable.","news.error.serviceError":"ethz.ch a r\xE9pondu par une erreur.","news.error.notFound":"ethz.ch n'a plus cet article.","news.error.formatError":"ethz.ch a envoy\xE9 une page que Poly ne sait pas lire.","news.error.invalidInput":"Poly a demand\xE9 \xE0 ethz.ch une adresse inconnue.","news.error.unavailable":"Poly est en cours de rechargement ; r\xE9essayez dans un instant.","news.settings.feed.title":"Flux d'actualit\xE9s","news.settings.feed.description":"Le flux ETH News affich\xE9 par l'onglet News : tous les articles, le Zukunftsblog, Globe ou les communiqu\xE9s de presse.","news.tags.clear":"Effacer","news.tags.none":"Ces articles n'ont pas de tags.","news.tags.add":"S\xE9lectionner {tag}","news.tags.remove":"D\xE9s\xE9lectionner {tag}","news.empty.tags":"Aucun article n'a les tags choisis.","news.settings.tags.title":"Tags des actualit\xE9s","news.settings.tags.description":"Les tags qui filtrent la liste d'articles de l'onglet News ; un article qui en porte un est affich\xE9.","news.tags.show":"Afficher les tags","news.tags.hide":"Afficher les articles","news.tags.search":"Rechercher des tags","news.tags.count":"{count} tags","news.tags.articles.one":"1 article","news.tags.articles.other":"{count} articles","news.tags.noMatch":"Aucun tag ne correspond \xE0 la recherche."};var km={"manifest.name":"Poly","manifest.description":"Valley \u4E2D\u7684 ETH \u4E0E UZH\uFF1AETH Zentrum \u4E0E H\xF6nggerberg \u4E4B\u95F4\u7684 eLink \u73ED\u8F66\u3001ETH Zentrum\u3001ETH H\xF6nggerberg \u548C UZH \u5404\u9910\u5385\u7684\u4ECA\u65E5\u83DC\u5355\u3001ETH \u5EFA\u7B51\u53CA\u5176\u697C\u5C42\u548C\u623F\u95F4\u7684\u6821\u56ED\u5730\u56FE\uFF08\u53EF\u5728 2D \u548C\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u4E2D\u67E5\u770B\uFF09\uFF0C\u4EE5\u53CA\u5728 Valley \u4E2D\u9605\u8BFB\u7684 ETH \u65B0\u95FB\u3001Zukunftsblog\u3001Globe \u548C\u65B0\u95FB\u7A3F\u3002","menu.title":"\u83DC\u5355",refresh:"\u5237\u65B0",openWebsite:"\u6253\u5F00\u7F51\u7AD9","day.previous":"\u524D\u4E00\u5929","day.next":"\u540E\u4E00\u5929","day.backToToday":"\u56DE\u5230\u4ECA\u5929","day.today":"\u4ECA\u5929","week.previous":"\u4E0A\u4E00\u5468","week.next":"\u4E0B\u4E00\u5468","week.label":"\u5468","service.label":"\u9910\u6B21","service.lunch":"\u5348\u9910","service.dinner":"\u665A\u9910",loading:"\u6B63\u5728\u52A0\u8F7D\u83DC\u5355\u2026","empty.lunch":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u5348\u9910\u3002","empty.dinner":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u665A\u9910\u3002","empty.location":"\u8FD9\u4E00\u9910\u6CA1\u6709\u83DC\u54C1\u3002","diet.vegan":"\u7EAF\u7D20","diet.vegetarian":"\u7D20\u98DF","climate.LOW":"\u6C14\u5019\u5F71\u54CD\u4F4E","climate.MEDIUM":"\u6C14\u5019\u5F71\u54CD\u4E2D\u7B49","climate.HIGH":"\u6C14\u5019\u5F71\u54CD\u9AD8","price.students":"\u5B66\u751F","price.internal":"\u5458\u5DE5","price.external":"\u8BBF\u5BA2",allergens:"\u8FC7\u654F\u539F","allergens.none":"\u672A\u6807\u6CE8\u8FC7\u654F\u539F","credit.eth":"\u83DC\u5355\u6765\u81EA ETH Zurich Gastronomy\u3002","credit.uzh":"\u83DC\u5355\u6765\u81EA food2050 \u4E0A\u7684 ZFV\u3002","error.networkError":"\u65E0\u6CD5\u8FDE\u63A5\u83DC\u5355\u670D\u52A1\u3002","error.serviceError":"\u83DC\u5355\u670D\u52A1\u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","error.formatError":"\u83DC\u5355\u670D\u52A1\u53D1\u9001\u4E86 Poly \u65E0\u6CD5\u8BFB\u53D6\u7684\u6570\u636E\u3002","error.notFound":"\u83DC\u5355\u670D\u52A1\u6CA1\u6709\u8FD9\u4E2A\u9875\u9762\u3002","error.invalidInput":"Poly \u8BF7\u6C42\u83DC\u5355\u7684\u65B9\u5F0F\u4E0D\u88AB\u8BE5\u670D\u52A1\u652F\u6301\u3002","error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\u3002",openPage:"\u6253\u5F00\u83DC\u5355\u9875\u9762","campus.label":"\u6821\u533A","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH \u9910\u5385","menus.one":"1 \u4EFD\u83DC\u5355","menus.other":"{count} \u4EFD\u83DC\u5355","hours.openNow":"\u8425\u4E1A\u4E2D \xB7 {hours}","hours.closed":"\u5DF2\u5173\u95ED \xB7 {hours}","hours.open":"\u8425\u4E1A {hours}","service.time.lunch":"\u5348\u9910 {hours}","service.time.dinner":"\u665A\u9910 {hours}",filter:"\u7B5B\u9009","filter.vegetarian":"\u7D20\u98DF","filter.vegan":"\u7EAF\u7D20","filter.glutenFree":"\u65E0\u9EB8\u8D28","filter.clear":"\u6E05\u9664\u7B5B\u9009","empty.filtered":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u83DC\u5355\u3002","loading.uzh":"\u6B63\u5728\u8BFB\u53D6 UZH \u9910\u5385\u2026",openInNewTab:"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00","settings.onlyVegetarian.title":"\u4EC5\u7D20\u98DF","settings.onlyVegetarian.description":"\u4EC5\u663E\u793A\u7D20\u98DF\u548C\u7EAF\u7D20\u83DC\u5355\uFF0C\u5305\u62EC\u5730\u70B9\u5217\u8868\u7684\u8BA1\u6570\u548C\u9875\u9762\u3002","settings.onlyVegan.title":"\u4EC5\u7EAF\u7D20","settings.onlyVegan.description":"\u4EC5\u663E\u793A\u7EAF\u7D20\u83DC\u5355\u3002","settings.onlyGlutenFree.title":"\u4EC5\u65E0\u9EB8\u8D28","settings.onlyGlutenFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u542B\u9EB8\u8D28\u8C37\u7269\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002","settings.campus.title":"\u6821\u533A","settings.campus.description":"\u83DC\u5355\u4E2D\u9009\u62E9\u7684\u6807\u7B7E\uFF1A\u6536\u85CF\u6216\u67D0\u4E2A\u6821\u533A\u3002","settings.day.title":"\u65E5\u671F","settings.day.description":"\u83DC\u5355\u663E\u793A\u7684\u65E5\u671F\u548C\u9910\u6B21\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","price.internalStudents":"\u5458\u5DE5\u548C\u5B66\u751F","price.all":"\u6240\u6709\u8BBF\u5BA2","filter.lactoseFree":"\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.title":"\u4EC5\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u725B\u5976\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002",prices:"\u4EF7\u683C","prices.all":"\u6240\u6709\u4EF7\u683C","settings.prices.title":"\u663E\u793A\u7684\u4EF7\u683C","settings.prices.description":"\u83DC\u5355\u5361\u7247\u663E\u793A\u7684\u4EF7\u683C\uFF1A\u4ECE\u5B66\u751F\u5230\u8BBF\u5BA2\u7684\u5168\u90E8\u4EF7\u683C\uFF0C\u6216\u67D0\u4E00\u7EC4\u7684\u4EF7\u683C\u3002","campus.favorites":"\u6536\u85CF","campus.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","favorite.add":"\u5C06 {name} \u52A0\u5165\u6536\u85CF","favorite.remove":"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664 {name}","empty.favorites":"\u4F60\u6536\u85CF\u7684\u5730\u70B9\u8FD9\u4E00\u5929\u90FD\u6CA1\u6709\u8FD9\u4E00\u9910\u7684\u83DC\u5355\u3002","credit.both":"\u83DC\u5355\u6765\u81EA ETH Zurich \u9910\u996E\u670D\u52A1\u548C food2050 \u4E0A\u7684 ZFV\u3002","settings.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","settings.favorites.description":"\u83DC\u5355\u4E2D\u52A0\u4E86\u661F\u6807\u7684\u5730\u70B9\u3002","mode.label":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.title":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.description":"\u4FA7\u8FB9\u680F\u663E\u793A\u7684\u6807\u7B7E\uFF1AeLink \u73ED\u8F66\u3001\u83DC\u5355\u3001\u6821\u56ED\u5730\u56FE\u6216 ETH \u65B0\u95FB\u3002","settings.tabOrder.title":"\u4FA7\u8FB9\u680F\u6807\u7B7E\u987A\u5E8F","settings.tabOrder.description":"\u4FA7\u8FB9\u680F\u529F\u80FD\u6807\u7B7E\u7684\u987A\u5E8F\uFF0C\u53EF\u62D6\u52A8\u6807\u7B7E\u6216\u6309 Option \u52A0\u65B9\u5411\u952E\u66F4\u6539\u3002","city.display.color":"\u989C\u8272","city.display.surfaces":"\u8868\u9762","city.display.height":"\u9AD8\u5EA6","city.display.ground":"\u5730\u9762","city.display.groundHint":"\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u7684\u5730\u9762","city.building.title":"\u5EFA\u7B51","city.building.close":"\u5173\u95ED","city.building.egid":"EGID","city.building.height":"\u9AD8\u5EA6","city.building.ground":"\u5730\u9762","city.building.roof":"\u5C4B\u9876\u6700\u9AD8\u70B9","city.building.position":"LV95 E / N","city.building.triangles":"\u4E09\u89D2\u5F62","city.unit.asl":"\u6D77\u62D4","city.model.title":"\u6A21\u578B","city.model.date":"\u6570\u636E\u65E5\u671F","city.model.buildings":"\u5EFA\u7B51","city.model.triangles":"\u4E09\u89D2\u5F62","city.model.tiles":"\u5DF2\u52A0\u8F7D\u56FE\u5757","city.model.groundNote":"\u5EFA\u7B51\uFF1A\u82CF\u9ECE\u4E16\u5E02 3D \u57CE\u5E02\u6A21\u578B\uFF0CLoD2 \u5C4B\u9876\u6A21\u578B\uFF0C\u5F00\u653E\u653F\u5E9C\u6570\u636E\u3002\u5730\u9762\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u3002","city.model.source":"\u6765\u6E90","city.model.loading":"\u6B63\u5728\u52A0\u8F7D\u57CE\u5E02\u6A21\u578B\u2026","city.model.errorTitle":"\u65E0\u6CD5\u8BFB\u53D6\u57CE\u5E02\u6A21\u578B","city.model.errorText":"Poly \u65E0\u6CD5\u52A0\u8F7D\u5176\u4E09\u7EF4\u57CE\u5E02\u6A21\u578B\u7684\u6587\u4EF6\u3002\u8BF7\u66F4\u65B0 Poly \u6216\u91CD\u65B0\u5B89\u88C5\u3002","city.model.missingTitle":"\u672A\u5B89\u88C5\u57CE\u5E02\u6A21\u578B","city.model.missingText":"\u6B64 Poly \u526F\u672C\u6784\u5EFA\u65F6\u672A\u5305\u542B\u57CE\u5E02\u6A21\u578B\u3002\u8BF7\u5728\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\u4F7F\u7528\u66F4\u65B0\u811A\u672C\u5C06\u5176\u6DFB\u52A0\u5230\u8F6F\u4EF6\u5305\u7684 runtime/assets/model/\uFF0C\u7136\u540E\u91CD\u65B0\u6784\u5EFA\uFF1A","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"\u65E0\u6CD5\u542F\u52A8 3D \u89C6\u56FE","city.view.loadingTiles":"\u6B63\u5728\u52A0\u8F7D {{count}} \u4E2A\u56FE\u5757\u2026","city.settings.model":"\u57CE\u5E02\u6A21\u578B","city.settings.modelMissing":"\u672A\u5B89\u88C5\u3002\u6A21\u578B\u5E94\u4F4D\u4E8E {{folder}}\u3002","city.settings.colorMode":"\u989C\u8272","city.settings.showGround":"\u5730\u9762","city.settings.camera":"\u76F8\u673A","city.footer.building":"\u5EFA\u7B51","city.footer.tiles":"\u56FE\u5757","city.footer.buildings":"\u5EFA\u7B51\u6570","city.footer.date":"\u6570\u636E\u65E5\u671F","settings.building.title":"\u5EFA\u7B51","settings.building.description":"\u5728\u6821\u56ED\u5730\u56FE\u4E2D\u9009\u4E2D\u7684 ETH \u5EFA\u7B51\uFF08\u6309\u4EE3\u7801\uFF09\u3002","settings.level.title":"\u697C\u5C42","settings.level.description":"\u6821\u56ED\u5730\u56FE\u663E\u793A\u5176\u623F\u95F4\u7684\u6240\u9009\u5EFA\u7B51\u697C\u5C42\u3002","settings.campusView.title":"\u6821\u56ED\u89C6\u56FE","settings.campusView.description":"\u6821\u56ED\u9875\u9762\u663E\u793A\u7684\u5185\u5BB9\uFF1A2D \u6821\u56ED\u5730\u56FE\u6216 3D \u57CE\u5E02\u6A21\u578B\u3002","campusMap.title":"\u6821\u56ED\u5730\u56FE","campusMap.openPage":"\u6253\u5F00\u6821\u56ED\u5730\u56FE\u9875\u9762","campusMap.command.open":"\u6253\u5F00\u6821\u56ED\u5730\u56FE","campusMap.map.attribution":"\u5730\u56FE \xA9 Esri\u3001HERE\u3001Garmin\u3001\xA9 OpenStreetMap \u8D21\u732E\u8005 \xB7 \u5EFA\u7B51 \xA9 ETH Z\xFCrich","campusMap.map.loading":"\u6B63\u5728\u52A0\u8F7D\u5730\u56FE\u2026","campusMap.map.failed":"\u5730\u56FE\u65E0\u6CD5\u542F\u52A8","campusMap.floors.label":"{{code}} \u7684\u697C\u5C42","campusMap.floors.show":"\u663E\u793A {{floor}} \u5C42","campusMap.floors.loading":"\u6B63\u5728\u52A0\u8F7D\u623F\u95F4\u2026","campusMap.floors.failed":"\u65E0\u6CD5\u8BFB\u53D6\u623F\u95F4","campusMap.floors.one":"1 \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.other":"{{count}} \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.none":"\u672A\u516C\u5E03\u697C\u5C42\u5E73\u9762\u56FE","campusMap.floors.reading":"\u6B63\u5728\u8BFB\u53D6\u697C\u5C42\u2026","campusMap.room.close":"\u5173\u95ED","campusMap.room.type":"\u623F\u95F4\u7C7B\u578B","campusMap.room.use":"\u7528\u9014","campusMap.legend.label":"\u623F\u95F4\u7C7B\u578B","campusMap.room.kind.teaching":"\u6559\u5B66","campusMap.room.kind.lab":"\u5B9E\u9A8C\u5BA4","campusMap.room.kind.office":"\u529E\u516C\u5BA4","campusMap.room.kind.circulation":"\u4EA4\u901A\u7A7A\u95F4","campusMap.room.kind.toilet":"\u536B\u751F\u95F4","campusMap.room.kind.service":"\u8BBE\u5907","campusMap.room.kind.other":"\u5176\u4ED6","campusMap.view.label":"\u89C6\u56FE","campusMap.view.map":"\u5730\u56FE","campusMap.view.3d":"3D","campusMap.view.outside":"\u8BE5\u5EFA\u7B51\u4E0D\u5728\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u8303\u56F4\u5185","campusMap.outlines.failed":"\u65E0\u6CD5\u8BFB\u53D6\u5EFA\u7B51\u8F6E\u5ED3","campusMap.building.link":"ETH \u5EFA\u7B51\u9875\u9762","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"\u5176\u4ED6\u6821\u533A","campusMap.search.placeholder":"\u641C\u7D22\u5EFA\u7B51\u3001\u623F\u95F4\u3001\u8857\u9053","campusMap.search.clear":"\u6E05\u9664\u641C\u7D22","campusMap.search.none":"\u6CA1\u6709\u5339\u914D\u7684\u5EFA\u7B51\u3002","campusMap.credit":"\u5EFA\u7B51\u3001\u697C\u5C42\u548C\u623F\u95F4\u6765\u81EA ETH Z\xFCrich \u6821\u56ED\u5730\u56FE\u3002\u5E95\u56FE\uFF1AEsri Light/Dark Gray Canvas\uFF0C\xA9 OpenStreetMap \u8D21\u732E\u8005\u3002","campusMap.map.zoomIn":"\u653E\u5927","campusMap.map.zoomOut":"\u7F29\u5C0F","elink.title":"eLink","elink.openPage":"\u6253\u5F00 eLink \u65F6\u523B\u8868","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 \u73ED","elink.runs.other":"{count} \u73ED","elink.firstLast":"\u9996\u73ED {first} \xB7 \u672B\u73ED {last}","elink.in":"{minutes} \u5206\u949F\u540E","elink.delay":"\u665A\u70B9 {minutes} \u5206\u949F","elink.ended":"\u4ECA\u5929\u5DF2\u65E0\u73ED\u6B21\u3002","elink.weekend":"\u5468\u672B\u6CA1\u6709 eLink\u3002","elink.noService":"\u8FD9\u4E00\u5929\u6CA1\u6709 eLink\u3002","elink.showDay":"\u67E5\u770B{day}","elink.loading":"\u6B63\u5728\u52A0\u8F7D eLink \u65F6\u523B\u8868\u2026","elink.credit":"\u65F6\u523B\u8868\u6570\u636E\u6765\u81EA transport.opendata.ch","elink.error.networkError":"\u65E0\u6CD5\u8FDE\u63A5 transport.opendata.ch\u3002","elink.error.serviceError":"transport.opendata.ch \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","elink.error.formatError":"transport.opendata.ch \u53D1\u9001\u7684\u6570\u636E Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","elink.error.invalidInput":"Poly \u5411 transport.opendata.ch \u8BF7\u6C42\u4E86\u672A\u77E5\u7684\u65E5\u671F\u3002","elink.settings.date.title":"eLink \u65E5\u671F","elink.settings.date.description":"eLink \u6807\u7B7E\u663E\u793A\u7684\u65E5\u671F\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","campusMap.group.rooms":"\u623F\u95F4","campusMap.rooms.searching":"\u6B63\u5728\u641C\u7D22\u623F\u95F4\u2026","campusMap.rooms.failed":"\u65E0\u6CD5\u641C\u7D22\u623F\u95F4","campusMap.rooms.none":"\u6CA1\u6709\u5339\u914D\u7684\u623F\u95F4\u3002","campusMap.view.show3d":"\u4EE5 3D \u663E\u793A","campusMap.view.show2d":"\u663E\u793A 2D \u5730\u56FE","elink.showTimetable":"\u67E5\u770B\u65F6\u523B\u8868","elink.arrival":"{time} \u5230\u8FBE {stop}","campusMap.building.clear":"\u53D6\u6D88\u9009\u62E9","campusMap.properties.tab":"3D \u57CE\u5E02","campusMap.properties.only3d":"\u6821\u56ED\u9875\u9762\u663E\u793A 3D \u65F6\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A 3D \u57CE\u5E02\u4FE1\u606F\u3002","campusMap.properties.buildingTab":"\u5EFA\u7B51","campusMap.properties.building":"\u5EFA\u7B51","campusMap.properties.room":"\u623F\u95F4","campusMap.properties.code":"\u4EE3\u7801","campusMap.properties.address":"\u5730\u5740","campusMap.properties.campus":"\u6821\u533A","campusMap.properties.floors":"\u697C\u5C42\u6570","campusMap.properties.floor":"\u697C\u5C42","campusMap.properties.kind":"\u7C7B\u522B","campusMap.properties.none":"\u5728\u6821\u56ED\u5730\u56FE\u6216\u4FA7\u8FB9\u680F\u4E2D\u9009\u62E9\u4E00\u680B\u5EFA\u7B51\u5373\u53EF\u5728\u6B64\u67E5\u770B\u3002","campusMap.group.zurich":"\u82CF\u9ECE\u4E16","news.title":"ETH \u65B0\u95FB","news.openPage":"\u6253\u5F00 ETH \u65B0\u95FB","news.feeds":"\u65B0\u95FB\u6E90","news.feed.news":"ETH \u65B0\u95FB","news.feed.zukunftsblog":"Zukunftsblog \u535A\u5BA2","news.feed.globe":"Globe \u6742\u5FD7","news.feed.media":"\u65B0\u95FB\u7A3F","news.tag.news":"\u65B0\u95FB","news.tag.zukunftsblog":"\u535A\u5BA2","news.tag.globe":"Globe","news.tag.media":"\u65B0\u95FB\u7A3F","news.recent.one":"\u672C\u5468 1 \u7BC7\u6587\u7AE0","news.recent.other":"\u672C\u5468 {count} \u7BC7\u6587\u7AE0","news.search":"\u641C\u7D22\u6587\u7AE0","news.search.clear":"\u6E05\u9664\u641C\u7D22","news.loading":"\u6B63\u5728\u52A0\u8F7D ETH \u65B0\u95FB\u2026","news.empty":"\u6B64\u65B0\u95FB\u6E90\u6CA1\u6709\u6587\u7AE0\u3002","news.empty.search":"\u6CA1\u6709\u4E0E\u641C\u7D22\u5339\u914D\u7684\u6587\u7AE0\u3002","news.credit":"\u65B0\u95FB\u6765\u81EA\u82CF\u9ECE\u4E16\u8054\u90A6\u7406\u5DE5\u5B66\u9662\u5728 ethz.ch \u4E0A\u7684 RSS \u6E90","news.yesterday":"\u6628\u5929","news.openWebsite":"\u5728 ethz.ch \u4E0A\u6253\u5F00","news.video":"\u89C6\u9891","news.by":"\u4F5C\u8005\uFF1A{author}","news.source":"\u6765\u6E90\uFF1A\u82CF\u9ECE\u4E16\u8054\u90A6\u7406\u5DE5\u5B66\u9662\uFF0C","news.error.networkError":"\u65E0\u6CD5\u8BBF\u95EE ethz.ch\u3002","news.error.serviceError":"ethz.ch \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","news.error.notFound":"ethz.ch \u4E0A\u5DF2\u6CA1\u6709\u8FD9\u7BC7\u6587\u7AE0\u3002","news.error.formatError":"ethz.ch \u53D1\u9001\u7684\u9875\u9762 Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","news.error.invalidInput":"Poly \u5411 ethz.ch \u8BF7\u6C42\u4E86\u672A\u77E5\u7684\u5730\u5740\u3002","news.error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002","news.settings.feed.title":"\u65B0\u95FB\u6E90","news.settings.feed.description":"News \u6807\u7B7E\u663E\u793A\u7684 ETH \u65B0\u95FB\u6E90\uFF1A\u5168\u90E8\u6587\u7AE0\u3001Zukunftsblog\u3001Globe \u6216\u65B0\u95FB\u7A3F\u3002","news.tags.clear":"\u6E05\u9664","news.tags.none":"\u8FD9\u4E9B\u6587\u7AE0\u6CA1\u6709\u6807\u7B7E\u3002","news.tags.add":"\u9009\u62E9 {tag}","news.tags.remove":"\u53D6\u6D88\u9009\u62E9 {tag}","news.empty.tags":"\u6CA1\u6709\u6587\u7AE0\u5E26\u6709\u6240\u9009\u6807\u7B7E\u3002","news.settings.tags.title":"\u65B0\u95FB\u6807\u7B7E","news.settings.tags.description":"\u7528\u4E8E\u7B5B\u9009 News \u6807\u7B7E\u6587\u7AE0\u5217\u8868\u7684\u6807\u7B7E\uFF1B\u5E26\u6709\u5176\u4E2D\u4EFB\u4E00\u6807\u7B7E\u7684\u6587\u7AE0\u4F1A\u663E\u793A\u3002","news.tags.show":"\u663E\u793A\u6807\u7B7E","news.tags.hide":"\u663E\u793A\u6587\u7AE0","news.tags.search":"\u641C\u7D22\u6807\u7B7E","news.tags.count":"{count} \u4E2A\u6807\u7B7E","news.tags.articles.one":"1 \u7BC7\u6587\u7AE0","news.tags.articles.other":"{count} \u7BC7\u6587\u7AE0","news.tags.noMatch":"\u6CA1\u6709\u4E0E\u641C\u7D22\u5339\u914D\u7684\u6807\u7B7E\u3002"};function jM(n){let e=n.ui.registerCatalogs({en:Jr,de:Nm,es:Lm,fr:Dm,"zh-CN":km}),t=u=>{let h=n.ui.t(u);return h===u?Jr[u]??u:h};Vd(n),Wd(n);let i=im(),r=document.createElement("style");r.id="poly-styles",r.textContent=Jf+Im+kf+Zf,document.getElementById(r.id)?.remove(),document.head.appendChild(r),sc();let s=n.settings.subscribe(sc);nm(n,{t});let o=Cm(n),a=Pm(n),l={type:"object",additionalProperties:!1,required:["shown"],properties:{shown:{type:"boolean"}}},c=[n.commands.register({id:"open",label:"Open the campus map",labelKey:"campusMap.command.open",sideEffect:"read",outputSchema:l,run:()=>(zn(t("campusMap.title")),{shown:!0})})];return()=>{for(let u of c)u();o(),a(),s(),e(),i(),r.remove()}}var KM={register:jM},EP=KM;export{EP as default,jM as register};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
