var _m=Object.defineProperty;var Mm=(n,e,t)=>e in n?_m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var De=(n,e,t)=>Mm(n,typeof e!="symbol"?e+"":e,t);var Ze="#12120f",bt="#ffffff",Vl=[{id:"green",family:"semantic",labelKey:"color.green",light:"#549c83",dark:"#549c83",onLight:Ze,onDark:Ze},{id:"red",family:"semantic",labelKey:"color.red",light:"#d33542",dark:"#d33542",onLight:bt,onDark:bt},{id:"amber",family:"semantic",labelKey:"color.amber",light:"#ff9f0a",dark:"#ff9f0a",onLight:Ze,onDark:Ze},{id:"blue",family:"semantic",labelKey:"color.blue",light:"#0075b2",dark:"#90cfff",onLight:bt,onDark:Ze},{id:"yellow",family:"semantic",labelKey:"color.yellow",light:"#ad8500",dark:"#e6c45c",onLight:Ze,onDark:Ze},{id:"orange",family:"semantic",labelKey:"color.orange",light:"#bf5200",dark:"#fc8c50",onLight:bt,onDark:Ze},{id:"purple",family:"semantic",labelKey:"color.purple",light:"#8149c0",dark:"#c095fc",onLight:bt,onDark:Ze},{id:"pink",family:"semantic",labelKey:"color.pink",light:"#c52f9a",dark:"#da3aaa",onLight:bt,onDark:Ze},{id:"brown",family:"semantic",labelKey:"color.brown",light:"#78490b",dark:"#c7925c",onLight:bt,onDark:Ze},{id:"black",family:"semantic",labelKey:"color.black",light:"#0d0d0f",dark:"#3a3a3c",onLight:bt,onDark:bt},{id:"white",family:"semantic",labelKey:"color.white",light:"#fbfbfd",dark:"#f4f4f6",onLight:Ze,onDark:Ze},{id:"gray",family:"semantic",labelKey:"color.gray",light:"#717881",dark:"#c3cbd5",onLight:bt,onDark:Ze},{id:"violet",family:"semantic",labelKey:"color.violet",light:"#873aa6",dark:"#c17fde",onLight:bt,onDark:Ze},{id:"cyan",family:"semantic",labelKey:"color.cyan",light:"#008e9b",dark:"#68dfed",onLight:Ze,onDark:Ze},{id:"magenta",family:"semantic",labelKey:"color.magenta",light:"#b02184",dark:"#ec7bc0",onLight:bt,onDark:Ze},{id:"indigo",family:"semantic",labelKey:"color.indigo",light:"#5140b4",dark:"#9b97f7",onLight:bt,onDark:Ze},{id:"muted-green",family:"muted",labelKey:"color.mutedGreen",light:"#325c4c",dark:"#99ccaa",onLight:bt,onDark:Ze},{id:"muted-red",family:"muted",labelKey:"color.mutedRed",light:"#9f5c54",dark:"#e4a197",onLight:bt,onDark:Ze},{id:"muted-gold",family:"muted",labelKey:"color.mutedGold",light:"#918349",dark:"#ddce93",onLight:Ze,onDark:Ze},{id:"muted-blue",family:"muted",labelKey:"color.mutedBlue",light:"#5a7ea3",dark:"#84acd6",onLight:Ze,onDark:Ze},{id:"muted-violet",family:"muted",labelKey:"color.mutedViolet",light:"#826299",dark:"#c7aade",onLight:bt,onDark:Ze},{id:"primary-blue",family:"accent",labelKey:"color.primaryBlue",light:"#2a66db",dark:"#90b7ff",onLight:bt,onDark:Ze},{id:"teal",family:"accent",labelKey:"color.teal",light:"#007066",dark:"#5dcdbf",onLight:bt,onDark:Ze},{id:"gold",family:"accent",labelKey:"color.gold",light:"#866200",dark:"#d8b262",onLight:bt,onDark:Ze},{id:"rose",family:"accent",labelKey:"color.rose",light:"#861a50",dark:"#dd7aa1",onLight:bt,onDark:Ze},{id:"maroon",family:"categorical",labelKey:"color.maroon",light:"#75061c",dark:"#e66d71",onLight:bt,onDark:Ze},{id:"coral",family:"categorical",labelKey:"color.coral",light:"#d6673f",dark:"#ffad90",onLight:Ze,onDark:Ze},{id:"sand",family:"categorical",labelKey:"color.sand",light:"#a8885e",dark:"#f2d6b1",onLight:Ze,onDark:Ze},{id:"olive",family:"categorical",labelKey:"color.olive",light:"#636d11",dark:"#b0be60",onLight:bt,onDark:Ze},{id:"lime",family:"categorical",labelKey:"color.lime",light:"#5b9a25",dark:"#a8eb7a",onLight:Ze,onDark:Ze},{id:"forest",family:"categorical",labelKey:"color.forest",light:"#215e29",dark:"#6caa71",onLight:bt,onDark:Ze},{id:"mint",family:"categorical",labelKey:"color.mint",light:"#00856d",dark:"#a4f0dc",onLight:bt,onDark:Ze},{id:"sky",family:"categorical",labelKey:"color.sky",light:"#3397c7",dark:"#aae0ff",onLight:Ze,onDark:Ze},{id:"navy",family:"categorical",labelKey:"color.navy",light:"#223f94",dark:"#6f92e5",onLight:bt,onDark:Ze},{id:"plum",family:"categorical",labelKey:"color.plum",light:"#a552a3",dark:"#f1a6ee",onLight:bt,onDark:Ze},{id:"slate",family:"categorical",labelKey:"color.slate",light:"#50627a",dark:"#aab9cc",onLight:bt,onDark:Ze}],Sm=["semantic","muted","accent","categorical"];var xS=new Map(Vl.map(n=>[n.id,n])),wm={semantic:"Semantic",muted:"Muted",accent:"Accent & brand",categorical:"Categorical"},Em=new Map(Vl.map(n=>[n.id,n.labelKey.replace(/^color\./,"").replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())])),Tm=/^[a-z][a-z0-9-]{0,47}$/,Am={version:4,families:Sm.map(n=>({id:n,name:wm[n]})),colors:Vl.map(n=>({id:n.id,familyId:n.family,name:Em.get(n.id)??n.id,light:n.light,dark:n.dark})),archived:[]},Cm=n=>({version:4,families:n.families.map(e=>({...e})),colors:n.colors.map(e=>({...e})),archived:n.archived.map(e=>({...e}))});var vS=Cm(Am);var Hl="palette:";function Im(n){return n.startsWith(Hl)&&Tm.test(n.slice(Hl.length))}function bd(n){return Im(n)?n.slice(Hl.length):void 0}function _d(n){let e=bd(n);return e?`var(--color-${e})`:n}function Md(n){let e=bd(n);return e?`var(--color-${e}-on)`:"var(--title-color)"}var wd=["eth","hoengg","uzh"],Sd=["students","internalStudents","internal","external","all"],Ed=n=>[...n].sort((e,t)=>Sd.indexOf(e.group)-Sd.indexOf(t.group)),Rm={students:["students"],internal:["internal"],external:["external"],internalStudents:["internal","students"],all:["students","internal","external"]},Td=(n,e)=>n.find(t=>t.group===e)??n.find(t=>Rm[t.group].includes(e)),Pm="idapps.ethz.ch",_S=`https://${Pm}/cookpit-pub-services/v1`;var Lm=/^\d{4}-\d{2}-\d{2}$/,Ad=n=>typeof n=="string"&&Lm.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),Cd=n=>new Date(`${n}T00:00:00Z`),Nm=n=>n.toISOString().slice(0,10),jr=(n,e)=>{let t=Cd(n);return t.setUTCDate(t.getUTCDate()+e),Nm(t)},Dm=n=>Cd(n).getUTCDay()||7,Ai=n=>jr(n,1-Dm(n));function io(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var Id=(n=new Date)=>n.getHours()*60+n.getMinutes()>=870?"dinner":"lunch",Rd=n=>n.toLowerCase().startsWith("de")?"de":"en";var km=n=>typeof n=="string"&&/^universitat-zurich(,[a-z0-9-]+)*\/[a-z0-9-]+$/.test(n);var Pd=n=>n.vegetarian||n.vegan||n.glutenFree||n.lactoseFree;function Om(n,e){return!(e.vegan&&n.diet!=="vegan"||e.vegetarian&&!n.diet||e.glutenFree&&n.gluten!==!1||e.lactoseFree&&n.lactose!==!1)}var Ki=(n,e,t)=>n.days.find(i=>i.date===e)?.services.find(i=>i.service===t),ro=(n,e,t,i)=>(Ki(n,e,t)?.dishes??[]).filter(r=>Om(r,i));function Gl(n,e,t){let i=n.days.find(s=>s.date===e);if(!i?.hours.length)return null;let r=Ki(n,e,t)?.from??"";return i.hours.find(s=>r&&s.from<=r&&r<s.to)??i.hours[0]}function Ld(n,e,t=new Date){if(e!==io(t))return null;let i=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`;return n.from<=i&&i<n.to?"open":"closed"}var Wl=n=>`place:${n}`;function Nd(n){let e=/^place:(eth|uzh):(.+)$/.exec(n??"");if(!e)return null;let t=e[1],i=e[2];return(t==="eth"?!/^\d+$/.test(i):!km(i))?null:{source:t,key:i,id:`${t}:${i}`}}function Dd(n){return`CHF ${n.toFixed(2)}`}var P,$e;function kd(n){$e=n,P=n.React}var Kr={"manifest.name":"Poly","manifest.description":"ETH and UZH in Valley: the eLink shuttle between ETH Zentrum and H\xF6nggerberg, today's menu plan of ETH Zentrum, ETH H\xF6nggerberg and the UZH outlets, and a campus map of ETH's buildings with their floors and rooms, in 2D and in the Stadt Z\xFCrich 3D model.","menu.title":"Menu plan",refresh:"Refresh",openWebsite:"Open website","day.previous":"Previous day","day.next":"Next day","day.backToToday":"Back to today","day.today":"Today","week.previous":"Previous week","week.next":"Next week","week.label":"Week","service.label":"Meal","service.lunch":"Lunch","service.dinner":"Dinner",loading:"Loading menus\u2026","empty.lunch":"No place serves lunch on this day.","empty.dinner":"No place serves dinner on this day.","empty.location":"Nothing on the menu for this meal.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarian","climate.LOW":"Low climate impact","climate.MEDIUM":"Medium climate impact","climate.HIGH":"High climate impact","price.students":"Students","price.internal":"Staff","price.external":"Guests",allergens:"Allergens","allergens.none":"No allergens declared","credit.eth":"Menus from ETH Zurich Gastronomy.","credit.uzh":"Menus from the ZFV on food2050.","error.networkError":"The menu service could not be reached.","error.serviceError":"The menu service answered with an error.","error.formatError":"The menu service sent data Poly could not read.","error.notFound":"The menu service has no such page.","error.invalidInput":"Poly asked for a menu in a way the service does not know.","error.unavailable":"Poly is reloading.",openPage:"Open the menu plan page","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH outlets","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Open now \xB7 {hours}","hours.closed":"Closed \xB7 {hours}","hours.open":"Open {hours}","service.time.lunch":"Lunch {hours}","service.time.dinner":"Dinner {hours}",filter:"Filter","filter.vegetarian":"Vegetarian","filter.vegan":"Vegan","filter.glutenFree":"Gluten-free","filter.clear":"Clear filters","empty.filtered":"No menu matches the filters.","loading.uzh":"Reading the UZH outlets\u2026",openInNewTab:"Open in new tab","settings.onlyVegetarian.title":"Only vegetarian","settings.onlyVegetarian.description":"Show only vegetarian and vegan menus, in the place list counts and on the page.","settings.onlyVegan.title":"Only vegan","settings.onlyVegan.description":"Show only vegan menus.","settings.onlyGlutenFree.title":"Only gluten-free","settings.onlyGlutenFree.description":"Show only menus whose declared allergens contain no gluten cereal. A menu without declared allergens is not shown.","settings.campus.title":"Campus","settings.campus.description":"The tag chosen in the menu plan: Favorites or a campus.","settings.day.title":"Day","settings.day.description":"The day and meal the menu plan shows; a past day falls back to today.","price.internalStudents":"Staff & students","price.all":"All visitors","filter.lactoseFree":"Lactose-free","settings.onlyLactoseFree.title":"Only lactose-free","settings.onlyLactoseFree.description":"Show only menus whose declared allergens contain no milk. A menu without declared allergens is not shown.",prices:"Prices","prices.all":"All prices","settings.prices.title":"Prices shown","settings.prices.description":"Which prices the menu cards show: all of them from students to guests, or one group's.","campus.favorites":"Favorites","campus.favorites.title":"Favorite places","favorite.add":"Add {name} to favorites","favorite.remove":"Remove {name} from favorites","empty.favorites":"None of your favorite places has a menu for this meal on this day.","credit.both":"Menus from ETH Zurich Gastronomy and from the ZFV on food2050.","settings.favorites.title":"Favorite places","settings.favorites.description":"The places starred in the menu plan.","mode.label":"Sidebar tabs","settings.mode.title":"Sidebar tab","settings.mode.description":"The sidebar tab shown: the eLink shuttle, the menu plan or the campus map.","city.display.color":"Colour","city.display.surfaces":"Surfaces","city.display.height":"Height","city.display.ground":"Ground","city.display.groundHint":"An approximate ground surface derived from the base heights of the buildings","city.building.title":"Building","city.building.close":"Close","city.building.egid":"EGID","city.building.height":"Height","city.building.ground":"Ground","city.building.roof":"Roof top","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"a.s.l.","city.model.title":"Model","city.model.date":"Data as of","city.model.buildings":"Buildings","city.model.triangles":"Triangles","city.model.tiles":"Tiles loaded","city.model.groundNote":"Buildings: Stadt Z\xFCrich 3D city model, LoD2 roof model, open government data. The ground is approximated from the buildings' base heights.","city.model.source":"Source","city.model.loading":"Loading the city model\u2026","city.model.errorTitle":"The city model could not be read","city.model.errorText":"Poly could not load the files of its 3D city model. Update Poly or install it again.","city.model.missingTitle":"No city model installed","city.model.missingText":"This copy of Poly was built without its city model. Add it to the package's runtime/assets/model/ with the update script in the plugin's folder, then build again:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"The 3D view could not start","city.view.loadingTiles":"Loading {{count}} tiles\u2026","city.settings.model":"City model","city.settings.modelInstalled":"Installed: data as of {{date}}, {{buildings}} buildings.","city.settings.modelMissing":"Not installed. The model belongs in {{folder}}.","city.settings.update":"Update","city.settings.source":"Source","city.settings.sourceText":"3D city model (Dachmodell LoD2, CityGML) of Stadt Z\xFCrich, open government data without usage restrictions:","city.settings.colorMode":"Colour","city.settings.showGround":"Ground","city.settings.camera":"Camera","city.footer.building":"Building","city.footer.tiles":"Tiles","city.footer.buildings":"Buildings","city.footer.date":"Data as of","settings.building.title":"Building","settings.building.description":"The ETH building selected on the campus map, by its code.","settings.level.title":"Floor","settings.level.description":"The floor of the selected building whose rooms the campus map shows.","settings.campusView.title":"Campus view","settings.campusView.description":"What the campus page shows: the 2D campus map or the 3D city model.","campusMap.title":"Campus map","campusMap.openPage":"Open the campus map page","campusMap.command.open":"Open the campus map","campusMap.map.attribution":"Map \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap contributors \xB7 Buildings \xA9 ETH Z\xFCrich","campusMap.map.loading":"Loading the map\u2026","campusMap.map.failed":"The map could not start","campusMap.floors.label":"Floors of {{code}}","campusMap.floors.show":"Show floor {{floor}}","campusMap.floors.loading":"Loading the rooms\u2026","campusMap.floors.failed":"The rooms could not be read","campusMap.floors.one":"1 floor with rooms","campusMap.floors.other":"{{count}} floors with rooms","campusMap.floors.none":"No floor plans published","campusMap.floors.reading":"Reading the floors\u2026","campusMap.room.close":"Close","campusMap.room.type":"Room type","campusMap.room.use":"Use","campusMap.legend.label":"Room types","campusMap.room.kind.teaching":"Teaching","campusMap.room.kind.lab":"Lab","campusMap.room.kind.office":"Office","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilets","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Other","campusMap.view.label":"View","campusMap.view.map":"Map","campusMap.view.3d":"3D","campusMap.view.outside":"This building is outside the Stadt Z\xFCrich 3D model","campusMap.outlines.failed":"The building outlines could not be read","campusMap.building.link":"ETH building page","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Other sites","campusMap.search.placeholder":"Search buildings, rooms, streets","campusMap.search.clear":"Clear the search","campusMap.search.none":"No building matches.","campusMap.credit":"Buildings, floors and rooms from ETH Z\xFCrich's campus map. Base map: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap contributors.","campusMap.map.zoomIn":"Zoom in","campusMap.map.zoomOut":"Zoom out","elink.title":"eLink","elink.openPage":"Open the eLink timetable","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 run","elink.runs.other":"{count} runs","elink.firstLast":"First {first} \xB7 Last {last}","elink.in":"in {minutes} min","elink.delay":"{minutes} min late","elink.ended":"No more departures today.","elink.weekend":"No eLink on weekends.","elink.noService":"No eLink runs on this day.","elink.showDay":"Show {day}","elink.loading":"Loading the eLink timetable\u2026","elink.credit":"Timetable data by transport.opendata.ch","elink.error.networkError":"transport.opendata.ch could not be reached.","elink.error.serviceError":"transport.opendata.ch answered with an error.","elink.error.formatError":"transport.opendata.ch sent data Poly could not read.","elink.error.invalidInput":"Poly asked transport.opendata.ch for a day it does not know.","elink.settings.date.title":"eLink day","elink.settings.date.description":"The day the eLink tab shows; a past day falls back to today.","campusMap.group.rooms":"Rooms","campusMap.rooms.searching":"Searching rooms\u2026","campusMap.rooms.failed":"The rooms could not be searched","campusMap.rooms.none":"No room matches.","campusMap.view.show3d":"Show in 3D","campusMap.view.show2d":"Show the 2D map","elink.showTimetable":"Show timetable","elink.arrival":"Arrives at {stop} at {time}","campusMap.building.clear":"Clear the selection","campusMap.properties.tab":"3D city","campusMap.properties.only3d":"The 3D city facts show here while the campus page shows 3D.","campusMap.properties.buildingTab":"Building","campusMap.properties.building":"Building","campusMap.properties.room":"Room","campusMap.properties.code":"Code","campusMap.properties.address":"Address","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Floors","campusMap.properties.floor":"Floor","campusMap.properties.kind":"Kind","campusMap.properties.none":"Select a building on the campus map or in the sidebar to see it here.","campusMap.group.zurich":"Z\xFCrich"};function Od(n,e){return(Kr[n]??n).replace(/\{\{([^}]+)\}\}/g,(i,r)=>String(e?.[r]??""))}var Zl=Od;function Ud(n){Zl=(e,t)=>{let i=n.ui.t(e,t);return i===e?Od(e,t):i}}function Ke(n,e){return Zl(`city.${n}`,e)}function _e(n,e){return Zl(`campusMap.${n}`,e)}var Fd=[{code:"AGS",street:"Streulistrasse 74 a",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AGS",campus:"other",center:[8.564558,47.36295]},{code:"AMA",street:"Auf der Mauer 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AMA",campus:"zentrum",center:[8.544891,47.378357]},{code:"AND",street:"Andreasstrasse 15",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AND",campus:"other",center:[8.548765,47.413209]},{code:"AUA",street:"Austrasse 54",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUA",campus:"other",center:[8.519441,47.364088]},{code:"AUB",street:"Austrasse 56",zip:"8045",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AUB",campus:"other",center:[8.51929,47.363856]},{code:"AWA",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWA",campus:"other",center:[9.800295,46.581909]},{code:"AWC",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWC",campus:"other",center:[9.800547,46.581267]},{code:"AWD",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWD",campus:"other",center:[9.799927,46.581795]},{code:"AWS",street:"Alp Weissenstein",zip:"7482",city:"Berg\xFCn/GR",canton:"GR",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=AWS",campus:"other",center:[9.800964,46.581634]},{code:"BAA",street:"Lengghalde 5",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BAA",campus:"other",center:[8.574235,47.352412]},{code:"BEA",street:"Im Ergel 1 (Partnerhaus)",zip:"5404",city:"Baden",canton:"AG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEA",campus:"other",center:[8.278762,47.455668]},{code:"BEF",street:"Effingerstr. 6a",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BEF",campus:"other",center:[7.43645,46.946003]},{code:"BGU",street:"Gutenbergstrasse 31",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BGU",campus:"other",center:[7.434804,46.943831]},{code:"BHA",street:"Hirschengraben 3",zip:"3011",city:"Bern",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BHA",campus:"other",center:[7.438359,46.946886]},{code:"BIR",street:"Kasernenstrasse",zip:"8903",city:"Birmensdorf ZH",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BIR",campus:"other",center:[8.430662,47.358831]},{code:"BOT",street:"Zollikerstrasse 107",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BOT",campus:"other",center:[8.56009,47.3589]},{code:"BRA",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRA",campus:"other",center:[8.494936,46.497495]},{code:"BRB",street:"Bedrettostollen",zip:"6781",city:"Bedretto",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BRB",campus:"other",center:[8.49545,46.496919]},{code:"BSS",street:"Klingelbergstrasse 48",zip:"4056",city:"Basel",canton:"BS",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BSS",campus:"other",center:[7.580967,47.562894]},{code:"BUC",street:"Stationsstrasse 1",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=BUC",campus:"other",center:[8.438246,47.452837]},{code:"CAB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CAB",campus:"zentrum",center:[8.54893,47.378346]},{code:"CHN",street:"Universit\xE4tstrasse 16",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CHN",campus:"zentrum",center:[8.548577,47.379266]},{code:"CLA",street:"Tannenstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLA",campus:"zentrum",center:[8.546735,47.377744]},{code:"CLD",street:"Clausiusstrasse 37",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLD",campus:"zentrum",center:[8.545901,47.378759]},{code:"CLE",street:"Clausiusstrasse 32",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLE",campus:"zentrum",center:[8.546581,47.378801]},{code:"CLF",street:"Clausiusstrasse 34",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLF",campus:"zentrum",center:[8.546526,47.378973]},{code:"CLG",street:"Clausiusstrasse 36",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLG",campus:"zentrum",center:[8.546486,47.379051]},{code:"CLI",street:"Clausiusstrasse 72",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLI",campus:"zentrum",center:[8.544858,47.381803]},{code:"CLP",street:"Clausiusstrasse 45",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLP",campus:"other",center:[8.545641,47.379597]},{code:"CLT",street:"Clausiusstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLT",campus:"zentrum",center:[8.546114,47.378782]},{code:"CLX",street:"Clausiusstrasse 35",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CLX",campus:"zentrum",center:[8.546059,47.378901]},{code:"CNB",street:"Universit\xE4tstrasse 6",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNB",campus:"zentrum",center:[8.549656,47.37822]},{code:"CNS",street:"Sp\xF6ndlistrasse",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=CNS",campus:"other",center:[8.549561,47.378535]},{code:"DEB",street:"Kriesbachstrasse 42",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEB",campus:"other",center:[8.614968,47.40313]},{code:"DEC",street:"\xDCberlandstrasse 129",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DEC",campus:"other",center:[8.612018,47.403841]},{code:"DFA",street:"Wangenstrasse 72",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFA",campus:"other",center:[8.631796,47.405875]},{code:"DFB",street:"Wangenstrasse 64",zip:"8600",city:"D\xFCbendorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DFB",campus:"other",center:[8.629443,47.404471]},{code:"DUA",street:"Ueberlandstrasse 17",zip:"8953",city:"Dietikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=DUA",campus:"other",center:[8.406183,47.408228]},{code:"EBW",street:"Breitweg 4",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EBW",campus:"other",center:[8.580077,47.369226]},{code:"EEA",street:"Embraport 3",zip:"8424",city:"Embrach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EEA",campus:"other",center:[8.591135,47.517744]},{code:"EHA",street:"Eschikon 35",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHA",campus:"other",center:[8.680582,47.4486]},{code:"EHB",street:"Eschikon 27",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHB",campus:"other",center:[8.681123,47.448075]},{code:"EHC",street:"Eschikon 29",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHC",campus:"other",center:[8.680477,47.447699]},{code:"EHD",street:"Eschikon 37",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHD",campus:"other",center:[8.679805,47.448099]},{code:"EHG",street:"Eschikon 43",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=EHG",campus:"other",center:[8.679018,47.448675]},{code:"ELA",street:"Luegetenstrasse 11",zip:"8840",city:"Einsiedeln",canton:"SZ",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ELA",campus:"other",center:[8.747629,47.125113]},{code:"ERA",street:"Rapier-Platz Kanzel 1",zip:"4952",city:"Eriswil",canton:"BE",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ERA",campus:"other",center:[7.873167,47.070999]},{code:"ETA",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETA",campus:"zentrum",center:[8.552969,47.377838]},{code:"ETF",street:"Sternwartstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETF",campus:"zentrum",center:[8.552291,47.377401]},{code:"ETL",street:"Physikstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETL",campus:"zentrum",center:[8.552492,47.378517]},{code:"ETZ",street:"Gloriastrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ETZ",campus:"zentrum",center:[8.552758,47.377657]},{code:"FDA",street:"Fr\xFCeb\xFCel",zip:"8318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FDA",campus:"other",center:[8.537501,47.113629]},{code:"FGH",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGH",campus:"other",center:[8.682228,47.449217]},{code:"FGP",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGP",campus:"other",center:[8.681846,47.449879]},{code:"FGS",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FGS",campus:"other",center:[8.681435,47.449489]},{code:"FHE",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FHE",campus:"other",center:[8.536285,47.112711]},{code:"FMG",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FMG",campus:"other",center:[8.682371,47.449489]},{code:"FRB",street:"Freudenbergstrasse 112",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRB",campus:"other",center:[8.555466,47.38549]},{code:"FRL",street:"Eschikon 32.2",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRL",campus:"other",center:[8.683034,47.449169]},{code:"FRM",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRM",campus:"other",center:[8.537,47.113446]},{code:"FRN",street:"Freudenbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FRN",campus:"other",center:[8.555417,47.385]},{code:"FSA",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSA",campus:"other",center:[8.535987,47.113121]},{code:"FSS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FSS",campus:"other",center:[8.536474,47.11358]},{code:"FST",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FST",campus:"other",center:[8.68292,47.44996]},{code:"FTL",street:"Eschikon 33",zip:"8315",city:"Lindau",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FTL",campus:"other",center:[8.682639,47.449909]},{code:"FUA",street:"Furtbachstrasse 22",zip:"8107",city:"Buchs",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FUA",campus:"other",center:[8.432826,47.449463]},{code:"FVG",street:"Fr\xFCeb\xFCel 4",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVG",campus:"other",center:[8.536165,47.112334]},{code:"FVS",street:"Fr\xFCeb\xFCel",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FVS",campus:"other",center:[8.536572,47.112973]},{code:"FWM",street:"Fr\xFCeb\xFCel 3",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWM",campus:"other",center:[8.536719,47.112487]},{code:"FWN",street:"Fr\xFCeb\xFCel 1",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWN",campus:"other",center:[8.53711,47.112681]},{code:"FWO",street:"Fr\xFCeb\xFCel 2",zip:"6318",city:"Walchwil",canton:"ZG",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=FWO",campus:"other",center:[8.537255,47.112404]},{code:"GEP",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GEP",campus:"zentrum",center:[8.546412,47.376638]},{code:"GLC",street:"Gloriastrasse 37/ 39",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLC",campus:"zentrum",center:[8.553365,47.377698]},{code:"GLO",street:"Gloriastrasse 82",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GLO",campus:"other",center:[8.558339,47.375201]},{code:"GMA",street:"Adlisbergstrasse 110",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=GMA",campus:"other",center:[8.588216,47.371575]},{code:"HAA",street:"H\xE4ldeliweg 15/17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAA",campus:"zentrum",center:[8.554284,47.377102]},{code:"HAC",street:"H\xE4ldeliweg 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAC",campus:"zentrum",center:[8.554498,47.377278]},{code:"HAD",street:"Haldenbachstrasse 44",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAD",campus:"zentrum",center:[8.550852,47.381008]},{code:"HAW",street:"Haldeneggsteig 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HAW",campus:"zentrum",center:[8.54462,47.380745]},{code:"HCA",street:"Hochstrasse 56",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCA",campus:"zentrum",center:[8.554793,47.378652]},{code:"HCB",street:"Hochstrasse 58",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCB",campus:"zentrum",center:[8.555052,47.37849]},{code:"HCI",street:"Vladimir-Prelog-Weg 1-5 / 10",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCI",campus:"hoengg",center:[8.508295,47.406936]},{code:"HCP",street:"Leopold-Ruzicka-Weg 4",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HCP",campus:"hoengg",center:[8.508242,47.406012]},{code:"HDB",street:"H\xF6nggerbergring 37",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HDB",campus:"hoengg",center:[8.508765,47.410919]},{code:"HEA",street:"Heinrichstrasse 237",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEA",campus:"other",center:[8.522586,47.388643]},{code:"HEZ",street:"Schafmattstrasse 23",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HEZ",campus:"hoengg",center:[8.511873,47.410632]},{code:"HG",street:"R\xE4mistrasse 101",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HG",campus:"zentrum",center:[8.547737,47.376369]},{code:"HGP",street:"H\xF6nggerbergring 47",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HGP",campus:"hoengg",center:[8.509611,47.410434]},{code:"HIA",street:"H\xF6nggerbergring 26",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIA",campus:"hoengg",center:[8.505659,47.410106]},{code:"HIB",street:"Stefano-Franscini-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIB",campus:"hoengg",center:[8.50588,47.408789]},{code:"HIF",street:"Laura-Hezner-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIF",campus:"hoengg",center:[8.506263,47.409783]},{code:"HIG",street:"H\xF6nggerbergring 20",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIG",campus:"other",center:[8.50516,47.408977]},{code:"HIL",street:"Stefano-Franscini-Platz 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIL",campus:"hoengg",center:[8.506855,47.408691]},{code:"HIN",street:"Othmar-Amman-Weg 11",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIN",campus:"hoengg",center:[8.505418,47.409054]},{code:"HIT",street:"Wolfgang-Pauli-Strasse 27",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HIT",campus:"hoengg",center:[8.508131,47.41034]},{code:"HKK",street:"H\xF6nggerbergring 39",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HKK",campus:"hoengg",center:[8.50908,47.410855]},{code:"HOA",street:"Hottingerstrasse 10",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HOA",campus:"other",center:[8.550108,47.370104]},{code:"HPF",street:"Otto-Stern-Weg 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPF",campus:"hoengg",center:[8.509324,47.40971]},{code:"HPG",street:"John-von-Neumann-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPG",campus:"other",center:[8.50925,47.408515]},{code:"HPH",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPH",campus:"hoengg",center:[8.509252,47.407606]},{code:"HPI",street:"Wolfgang-Pauli-Strasse 14",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPI",campus:"hoengg",center:[8.507994,47.408381]},{code:"HPK",street:"Otto-Stern-Weg 5",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPK",campus:"hoengg",center:[8.510944,47.409199]},{code:"HPL",street:"Otto-Stern-Weg 7",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPL",campus:"hoengg",center:[8.511481,47.408993]},{code:"HPM",street:"Otto-Stern-Weg 3",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPM",campus:"hoengg",center:[8.51031,47.409529]},{code:"HPP",street:"H\xF6nggerbergring 64",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPP",campus:"hoengg",center:[8.510958,47.407812]},{code:"HPR",street:"Joseph-von-Deschwanden-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPR",campus:"hoengg",center:[8.509779,47.407833]},{code:"HPS",street:"Robert-Gnehm-Platz 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPS",campus:"hoengg",center:[8.511216,47.406826]},{code:"HPT",street:"Auguste-Piccard-Hof 1",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPT",campus:"hoengg",center:[8.50866,47.40879]},{code:"HPV",street:"Robert-Gnehm-Weg 15",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPV",campus:"hoengg",center:[8.510216,47.407307]},{code:"HPW",street:"H\xF6nggerbergring 62",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPW",campus:"hoengg",center:[8.511248,47.408548]},{code:"HPY",street:"H\xF6nggerbergring 62b",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPY",campus:"hoengg",center:[8.511166,47.408382]},{code:"HPZ",street:"John-von-Neumann-Weg 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HPZ",campus:"hoengg",center:[8.510196,47.408303]},{code:"HRG",street:"Hirschengraben 62",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HRG",campus:"zentrum",center:[8.545944,47.375119]},{code:"HSA",street:"Z\xFCrichbergstrasse 196",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HSA",campus:"other",center:[8.574021,47.383471]},{code:"HWA",street:"Paul-Feyerabend-Hof 1",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWA",campus:"hoengg",center:[8.505263,47.407062]},{code:"HWB",street:"Paul-Feyerabend-Hof 5",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWB",campus:"hoengg",center:[8.506032,47.40685]},{code:"HWC",street:"Paul-Feyerabend-Hof 3",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWC",campus:"hoengg",center:[8.505782,47.407249]},{code:"HWW",street:"Peter-Debye-Weg 13/15/17",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HWW",campus:"hoengg",center:[8.504474,47.407489]},{code:"HXE",street:"Wolfgang-Pauli-Strasse 9",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HXE",campus:"hoengg",center:[8.506307,47.407468]},{code:"HZA",street:"Schauenbergstrasse 94",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZA",campus:"hoengg",center:[8.505177,47.4121]},{code:"HZB",street:"Schauenbergstrasse 92",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZB",campus:"hoengg",center:[8.50549,47.412218]},{code:"HZC",street:"Schauenbergstrasse 90",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZC",campus:"hoengg",center:[8.505645,47.412415]},{code:"HZD",street:"Schauenbergstrasse 96",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=HZD",campus:"hoengg",center:[8.505702,47.411686]},{code:"IFW",street:"Haldeneggsteig 4",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=IFW",campus:"zentrum",center:[8.544592,47.380252]},{code:"KO2",street:"Karl Schmid-Strasse 4",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KO2",campus:"other",center:[8.548079,47.375049]},{code:"KOL",street:"R\xE4mistrasse 71",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KOL",campus:"other",center:[8.548613,47.374526]},{code:"KUB",street:"K\xFCrbergstrasse 20",zip:"8049",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=KUB",campus:"other",center:[8.507093,47.399458]},{code:"LCA",street:"Via Trevano 131",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCA",campus:"other",center:[8.959782,46.02485]},{code:"LCP",street:"Via Chiosso 7a",zip:"6948",city:"Porza",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LCP",campus:"other",center:[8.963449,46.027021]},{code:"LEE",street:"Leonhardstrasse 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEE",campus:"zentrum",center:[8.546148,47.378121]},{code:"LEH",street:"Leonhardshalde 21",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEH",campus:"zentrum",center:[8.545592,47.376736]},{code:"LEO",street:"Leonhardstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LEO",campus:"zentrum",center:[8.546534,47.377552]},{code:"LFG",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFG",campus:"zentrum",center:[8.548705,47.377824]},{code:"LFH",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFH",campus:"zentrum",center:[8.549125,47.377872]},{code:"LFO",street:"Schmelzbergstrasse 9",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFO",campus:"zentrum",center:[8.550172,47.377801]},{code:"LFV",street:"Schmelzbergstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFV",campus:"zentrum",center:[8.549823,47.37772]},{code:"LFW",street:"Universit\xE4tstrasse 2",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LFW",campus:"zentrum",center:[8.549048,47.377497]},{code:"LGA",street:"Lengghalde 2",zip:"8008",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LGA",campus:"other",center:[8.573685,47.351348]},{code:"LHT",street:"Lerchenhalde 37",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHT",campus:"other",center:[8.509426,47.413229]},{code:"LHV",street:"Lerchenhalde 39",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHV",campus:"other",center:[8.509283,47.413385]},{code:"LHX",street:"Lerchenhalde 41",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHX",campus:"other",center:[8.509199,47.413555]},{code:"LHZ",street:"Lerchenhalde 43",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LHZ",campus:"other",center:[8.509049,47.41367]},{code:"LRA",street:"Lerchenrain 1",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRA",campus:"other",center:[8.508515,47.413787]},{code:"LRG",street:"Lerchenrain 7",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRG",campus:"other",center:[8.50803,47.413942]},{code:"LRI",street:"Lerchenrain 9",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRI",campus:"other",center:[8.507888,47.414105]},{code:"LRL",street:"Lerchenrain 11",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRL",campus:"other",center:[8.50768,47.414174]},{code:"LRN",street:"Lerchenrain 13",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRN",campus:"other",center:[8.507528,47.414276]},{code:"LRO",street:"Lerchenrain bei 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRO",campus:"other",center:[8.506916,47.414388]},{code:"LRR",street:"Lerchenrain 19",zip:"8046",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LRR",campus:"other",center:[8.507127,47.414553]},{code:"LSH",street:"Limmerenfirn",zip:"8783",city:"Linthal",canton:"GL",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LSH",campus:"other",center:[8.992092,46.817011]},{code:"LUI",street:"Via Giuseppe Buffi 13",zip:"6900",city:"Lugano",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=LUI",campus:"other",center:[8.957668,46.01016]},{code:"M2R",street:"Moussonstrasse 2/4",zip:"8044",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=M2R",campus:"other",center:[8.554328,47.375433]},{code:"ML",street:"Sonneggstrasse 3",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ML",campus:"zentrum",center:[8.547569,47.377744]},{code:"MM",street:"Leonhardstrasse 34",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MM",campus:"zentrum",center:[8.546799,47.376105]},{code:"MVA",street:"Strada Collina",zip:"6612",city:"Ascona",canton:"TI",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=MVA",campus:"other",center:[8.762855,46.15857]},{code:"NEL",street:"Nelkenstrasse 11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NEL",campus:"zentrum",center:[8.546435,47.382079]},{code:"NID",street:"Niederdorfstr. 88",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NID",campus:"other",center:[8.544131,47.376163]},{code:"NMA",street:"Murzlenstrasse 80",zip:"8166",city:"Niederweningen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NMA",campus:"other",center:[8.367587,47.510676]},{code:"NO",street:"Sonneggstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NO",campus:"zentrum",center:[8.547062,47.378469]},{code:"NW",street:"Clausiusstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=NW",campus:"zentrum",center:[8.546351,47.378457]},{code:"OAT",street:"Andreasstrasse 5",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OAT",campus:"other",center:[8.547248,47.413042]},{code:"OCT",street:"Binzm\xFChlestrasse 130",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=OCT",campus:"other",center:[8.537076,47.413426]},{code:"ODA",street:"D\xF6rflistrasse 120",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ODA",campus:"other",center:[8.547325,47.411173]},{code:"ONA",street:"Neunbrunnenstrasse 50",zip:"8093",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ONA",campus:"other",center:[8.539774,47.417441]},{code:"PFA",street:"Technopark-Strasse 1",zip:"8005",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PFA",campus:"other",center:[8.515598,47.38984]},{code:"PLB",street:"Plattenstrasse 28",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=PLB",campus:"zentrum",center:[8.55315,47.373692]},{code:"RDA",street:"Althardstrasse 257",zip:"8105",city:"Regensdorf",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RDA",campus:"other",center:[8.46102,47.44373]},{code:"RIA",street:"Rickenstrasse 18/ 20",zip:"8050",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RIA",campus:"other",center:[8.539964,47.417874]},{code:"RSA",street:"S\xE4umerstrasse 4/ Postfach 9000",zip:"8803",city:"R\xFCschlikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RSA",campus:"other",center:[8.544512,47.3102]},{code:"RZ",street:"Clausiusstrasse 59",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=RZ",campus:"zentrum",center:[8.545116,47.380301]},{code:"SEC",street:"Scheuchzerstrasse 7",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEC",campus:"zentrum",center:[8.545095,47.382667]},{code:"SEI",street:"Seilergraben 45/ 49",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEI",campus:"other",center:[8.545321,47.375224]},{code:"SEL",street:"Seilergraben 53/ 55",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEL",campus:"other",center:[8.545129,47.375482]},{code:"SEW",street:"Scheuchzerstrasse 68/70",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SEW",campus:"other",center:[8.545392,47.38666]},{code:"SLA",street:"Schorenstrasse 16",zip:"8603",city:"Schwerzenbach",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SLA",campus:"other",center:[8.655288,47.384651]},{code:"SOH",street:"Sonneggstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOH",campus:"zentrum",center:[8.546828,47.379161]},{code:"SOI",street:"Sonneggstrasse 28",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOI",campus:"zentrum",center:[8.546662,47.380056]},{code:"SOK",street:"Sonneggstrasse 23",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOK",campus:"zentrum",center:[8.546647,47.379332]},{code:"SOL",street:"Sonneggstrasse 33",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOL",campus:"zentrum",center:[8.546222,47.379983]},{code:"SON",street:"Sonneggstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SON",campus:"zentrum",center:[8.546437,47.379603]},{code:"SOP",street:"Sonneggstrasse 27",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOP",campus:"zentrum",center:[8.546536,47.379555]},{code:"SOQ",street:"Sonneggstrasse 17",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOQ",campus:"zentrum",center:[8.546945,47.378943]},{code:"SOR",street:"Sonneggstrasse 19",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOR",campus:"zentrum",center:[8.546923,47.379179]},{code:"SOX",street:"Sonneggstrasse 74",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SOX",campus:"zentrum",center:[8.544958,47.382388]},{code:"SSA",street:"S\xFCdstrasse 1",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SSA",campus:"other",center:[8.464873,47.400131]},{code:"STB",street:"Stampfenbachstrasse 69",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STB",campus:"zentrum",center:[8.541664,47.381525]},{code:"STC",street:"Stampfenbachstrasse 67",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STC",campus:"zentrum",center:[8.541796,47.381361]},{code:"STD",street:"Stampfenbachstrasse 48",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STD",campus:"zentrum",center:[8.543144,47.38049]},{code:"STF",street:"Stampfenbachstrasse 114",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STF",campus:"other",center:[8.540807,47.383945]},{code:"STW",street:"Schmelzbergstrasse 25",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=STW",campus:"zentrum",center:[8.550542,47.378049]},{code:"SWS",street:"Wagistrasse 18",zip:"8952",city:"Schlieren",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=SWS",campus:"other",center:[8.458623,47.398947]},{code:"TAN",street:"Tannenstrasse 1",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TAN",campus:"zentrum",center:[8.546721,47.377174]},{code:"TUS",street:"Turnerstrasse 21",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=TUS",campus:"other",center:[8.543935,47.38474]},{code:"UNG",street:"Universit\xE4tstrasse 19",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNG",campus:"zentrum",center:[8.547909,47.378866]},{code:"UNH",street:"Universit\xE4tstrasse 25",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNH",campus:"zentrum",center:[8.547906,47.379247]},{code:"UNO",street:"Universit\xE4tstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=UNO",campus:"zentrum",center:[8.547904,47.380407]},{code:"USM",street:"R\xE4mistrasse 92",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=USM",campus:"other",center:[8.550852,47.376134]},{code:"VOG",street:"Vogelsangstrasse 11",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=VOG",campus:"zentrum",center:[8.55006,47.381992]},{code:"WEC",street:"Weinbergstrasse 9/11",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEC",campus:"zentrum",center:[8.54407,47.377957]},{code:"WEG",street:"Weinbergstrasse 29",zip:"8006",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEG",campus:"other",center:[8.544066,47.379059]},{code:"WEH",street:"Weinbergstrasse 35",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEH",campus:"zentrum",center:[8.54396,47.379469]},{code:"WEP",street:"Weinbergstrasse 109",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEP",campus:"other",center:[8.541884,47.385775]},{code:"WES",street:"Weinbergstrasse 41",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WES",campus:"zentrum",center:[8.543881,47.380217]},{code:"WET",street:"Weinbergstrasse 43",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WET",campus:"other",center:[8.543834,47.380345]},{code:"WEV",street:"Weinbergstrasse 56/ 58",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WEV",campus:"zentrum",center:[8.544162,47.381703]},{code:"WHA",street:"Hertistrasse 23",zip:"8304",city:"Wallisellen",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WHA",campus:"other",center:[8.576675,47.414567]},{code:"WIL",street:"Wilfriedstrasse 6",zip:"8032",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WIL",campus:"other",center:[8.554042,47.370092]},{code:"WKA",street:"Klosterstrasse 40",zip:"8406",city:"Winterthur",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WKA",campus:"other",center:[8.707646,47.486436]},{code:"WPW",street:"Walcheplatz 12",zip:"8001",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WPW",campus:"zentrum",center:[8.543095,47.378453]},{code:"WWA",street:"Wasserwerkstrasse 10 / 12",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=WWA",campus:"zentrum",center:[8.540735,47.383]},{code:"Y15",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y15",campus:"other",center:[8.549866,47.397466]},{code:"Y17",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y17",campus:"other",center:[8.550605,47.397252]},{code:"Y21",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y21",campus:"other",center:[8.548226,47.397106]},{code:"Y27",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y27",campus:"other",center:[8.550137,47.396578]},{code:"Y32",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y32",campus:"other",center:[8.549131,47.398237]},{code:"Y35",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y35",campus:"other",center:[8.550185,47.397922]},{code:"Y36",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y36",campus:"other",center:[8.55052,47.397815]},{code:"Y55",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y55",campus:"other",center:[8.550489,47.398428]},{code:"Y59",street:"Winterthurerstrasse 190",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y59",campus:"other",center:[8.551939,47.398172]},{code:"Y63",street:"Strickhofstrasse 35",zip:"8057",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=Y63",campus:"other",center:[8.549895,47.395513]},{code:"ZAL",street:"Alte Landstrasse 98",zip:"8702",city:"Zollikon",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZAL",campus:"other",center:[8.575287,47.33708]},{code:"ZLA",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLA",campus:"other",center:[8.64507,47.308061]},{code:"ZLB",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLB",campus:"other",center:[8.645534,47.308093]},{code:"ZLC",street:"Wolfsgruebweg 50",zip:"8704",city:"Herrliberg",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZLC",campus:"other",center:[8.644606,47.308051]},{code:"ZUE",street:"Z\xFCrichbergstrasse 18",zip:"8092",city:"Z\xFCrich",canton:"ZH",link:"https://ethz.ch/staffnet/de/service/raeume-gebaeude/orientierung/gebaeude.html?args0=ZUE",campus:"zentrum",center:[8.552801,47.373184]}];var zd=/^[A-Z0-9]{1,6}$/,Xl=/^ETH\.[A-Z0-9]{1,6}\.[A-Z0-9]{1,6}$/,zm="arcgis-prd-web.ethz.ch",$l=`https://${zm}/server/rest/services`,CS=`${$l}/EGDB_EN/Facilities_EN/FeatureServer/5/query`,IS=`${$l}/EGDB_EN/Levels_EN/FeatureServer/2/query`,RS=`${$l}/EGDB_EN/Units_EN/FeatureServer/1/query`;function Bd(n){let e=[...n].sort((s,o)=>s.order-o.order),t=new Map,i=0;for(let s of e.filter(o=>o.order>=0))t.set(s.id,i),i+=s.height;let r=0;for(let s of e.filter(o=>o.order<0).reverse())r-=s.height,t.set(s.id,r);return t}function Hd(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function Yl(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?[e,t,i,r]:null}function Vd(n,e){let t=n.normalize("NFC").toUpperCase().replace(/[^A-Z0-9ÄÖÜ. ]+/g," ").trim().replace(/\s+/g," ");if(!t)return null;let i=/^(?:([A-Z0-9]{1,6}) )?([A-Z]{1,2}) ?([0-9][0-9.]{0,9})?$/.exec(t);if(i){let a=i[1]??e??"";if(zd.test(a)&&(i[1]||i[3]))return{building:a,floor:i[2],number:i[3]??""}}let[r,...s]=t.split(" "),o=s.filter(a=>/^[A-ZÄÖÜ]{3,20}$/.test(a));return zd.test(r)&&o.length&&o.length===s.length?{building:r,words:o}:null}var Gd=(n,e)=>n.startsWith(`${e} `)?n.slice(e.length+1):n;var Bm=["zentrum","hoengg","other"],so=Fd,Hm=new Map(so.map(n=>[n.code,n])),Ji=n=>typeof n=="string"?Hm.get(n)??null:null,Xn=n=>[n.street,[n.zip,n.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");function Ci(n){return n.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase().replace(/([aou])e/g,"$1")}function Wd(n,e=so){let t=Ci(n).split(/[\s,]+/).filter(Boolean);if(!t.length)return e;let i=[];for(let r of e){let s=Ci(r.code),o=`${s} ${Ci(Xn(r))} ${Ci(r.canton)}`;if(!t.every(l=>o.includes(l)))continue;let a=t[0];i.push({building:r,score:s===a?0:s.startsWith(a)?1:s.includes(a)?2:3})}return i.sort((r,s)=>r.score-s.score||r.building.code.localeCompare(s.building.code)).map(r=>r.building)}function Zd(n){return Bm.map(e=>({group:e,buildings:n.filter(t=>t.campus===e)})).filter(e=>e.buildings.length)}function Qi(n,e){let t=(n*3600-169028.66)/1e4,i=(e*3600-26782.5)/1e4,r=260007237e-2+211455.93*i-10938.51*i*t-.36*i*t*t-44.54*i**3,s=120014707e-2+308807.95*t+3745.25*i*i+76.63*t*t-194.56*i*i*t+119.79*t**3;return[r,s]}var ql=[{id:"hb",name:"Z\xFCrich HB",latitude:47.37818,longitude:8.54019,distance:900},{id:"lindenhof",name:"Lindenhof",latitude:47.37292,longitude:8.54083,distance:600},{id:"grossmuenster",name:"Grossm\xFCnster",latitude:47.3701,longitude:8.54405,distance:450},{id:"fraumuenster",name:"Fraum\xFCnster",latitude:47.36985,longitude:8.54107,distance:450},{id:"bellevue",name:"Bellevue / Opernhaus",latitude:47.36532,longitude:8.54683,distance:700},{id:"eth",name:"ETH Zentrum",latitude:47.37635,longitude:8.54786,distance:650},{id:"uzh",name:"Universit\xE4t Z\xFCrich",latitude:47.3745,longitude:8.54855,distance:650},{id:"kunsthaus",name:"Kunsthaus",latitude:47.37017,longitude:8.54817,distance:500},{id:"prime",name:"Prime Tower",latitude:47.3861,longitude:8.51713,distance:800},{id:"letzigrund",name:"Letzigrund",latitude:47.38277,longitude:8.5041,distance:800},{id:"hoengg",name:"ETH H\xF6nggerberg",latitude:47.40828,longitude:8.5076,distance:900},{id:"oerlikon",name:"Bahnhof Oerlikon",latitude:47.4118,longitude:8.54396,distance:800},{id:"hallenstadion",name:"Hallenstadion",latitude:47.41162,longitude:8.55194,distance:800},{id:"altstetten",name:"Bahnhof Altstetten",latitude:47.3913,longitude:8.489,distance:800},{id:"zuerichhorn",name:"Z\xFCrichhorn",latitude:47.3546,longitude:8.5522,distance:900}];function Xd(n){let e=new DataView(n);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="Z3DT")throw new Error("Not a Z\xFCrich 3D tile");let i=e.getUint32(4,!0);if(i!==1&&i!==2)throw new Error(`Unsupported tile version ${i}`);let r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getUint32(16,!0),a=[e.getFloat64(24,!0),e.getFloat64(32,!0),e.getFloat64(40,!0)],l=[e.getFloat32(48,!0),e.getFloat32(52,!0),e.getFloat32(56,!0)];if(i===2)return{vertexCount:r,indexCount:s,origin:a,step:l,...Vm(new Uint8Array(n),r,s,o,e.getUint32(20,!0))};let c=new Uint16Array(n,64,r*3),d=Math.ceil(r*6/4)*4,h=new Uint8Array(n,64+d,r),u=64+d+Math.ceil(r/4)*4,p=o===4?new Uint32Array(n,u,s):new Uint16Array(n,u,s);return{vertexCount:r,indexCount:s,origin:a,step:l,positions:c,kinds:h,indices:p}}function Vm(n,e,t,i,r){if(n.length<64+e*7+r)throw new Error("Truncated Z\xFCrich 3D tile");let s=new Uint16Array(e*3),o=64;for(let h=0;h<3;h++){let u=0;for(let p=0;p<e;p++){let y=n[o+p]|n[o+e+p]<<8;u+=y>>>1^-(y&1),s[p*3+h]=u}o+=e*2}let a=n.slice(o,o+e);o+=e;let l=o+r,c=i===4?new Uint32Array(t):new Uint16Array(t),d=0;for(let h=0;h<t;h++){let u=0;for(let y=0;;y+=7){if(o>=l)throw new Error("Truncated Z\xFCrich 3D tile");let x=n[o++];if(u+=(x&127)*2**y,x<128)break}let p=d-u;if(p<0||p>=e)throw new Error("Invalid Z\xFCrich 3D tile");c[h]=p,u===0&&d++}return{positions:s,kinds:a,indices:c}}function $d(n){let e=n;return!!e&&e.format==="zurich3d-tiles"&&(e.version===1||e.version===2)&&Array.isArray(e.tiles)&&Array.isArray(e.bounds)}function Yd(n,e){let t=0,i=n.length-1;for(;t<=i;){let r=t+i>>1,s=n[r];if(e<s[1])i=r-1;else if(e>=s[1]+s[2])t=r+1;else return s}return null}async function qd(n){let e=new Response(n).body;if(!e)throw new Error("Empty tile");return new Response(e.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}var jd="valleyPolyModel",Gm=/^(?:index\.json|ground\.bin|tiles\/-?\d{1,6}_-?\d{1,6}\.(?:bin\.gz|json))$/,Jr=class extends Error{};function Wm(n){let e=Uint8Array.fromBase64;if(e)return e(n).buffer;let t=atob(n),i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i.buffer}var Kl=new Map,jl=new Map;function Zm(n){let e=n;typeof e[jd]!="function"&&(e[jd]=(t,i)=>{typeof t=="string"&&typeof i=="string"&&Kl.get(t)?.(i)})}function Jl(n,e=document){if(!Gm.test(n))return Promise.reject(new Error("invalidPath"));let t=jl.get(n);if(t)return t;let i=new Promise((r,s)=>{e.defaultView&&Zm(e.defaultView);let o=null;Kl.set(n,c=>{o=c});let a=e.createElement("script"),l=()=>{Kl.delete(n),jl.delete(n),a.remove()};a.onload=()=>{if(l(),o===null){s(new Error(`${n}: not a packaged model file`));return}try{r(Wm(o))}catch(c){s(c)}},a.onerror=()=>{l(),s(new Jr(n))},a.src=$e.assets.url(`model/${n}.js`),(e.head??e.documentElement).appendChild(a)});return jl.set(n,i),i}var Ql=new Set,ao={status:"loading",error:null,folder:"plugins/data/poly/model/",index:null,selected:null,loadedTiles:0,loadingTiles:0,colorMode:"surfaces",showGround:!0,flyRequest:0,flyTarget:null};function Ii(){return ao}function Sn(n){ao={...ao,...n};for(let e of Ql)e()}function tc(n){return Ql.add(n),()=>Ql.delete(n)}function Ri(){return $e.React.useSyncExternalStore(tc,Ii)}var ec="package";async function Kd(n,e){let t=[],i=0;for(;;){let o=await $e.backend.call("model.read",{path:n,offset:i},{encoding:"bytes"});if(!o.byteLength||(t.push(new Uint8Array(o)),i+=o.byteLength,e!==void 0?i>=e:o.byteLength<2*1024*1024))break}if(t.length===1)return t[0].buffer;let r=new Uint8Array(i),s=0;for(let o of t)r.set(o,s),s+=o.byteLength;return r.buffer}function Jd(n){return console.warn("Poly: the city model could not be read",n),new Error(Ke("model.errorText"))}async function Qd(n,e){try{return ec==="realm"?await Kd(n,e):await Jl(n)}catch(t){throw Jd(t)}}var oo=null;function lo(n=!1){return oo&&!n||(Sn({status:"loading",error:null}),oo=(async()=>{try{let e=await $e.backend.call("model.status").catch(()=>null);ec=e?.installed?"realm":"package";let t=e?.installed?e.folder:"runtime/assets/model/",i;try{i=ec==="realm"?await Kd("index.json"):await Jl("index.json")}catch(s){if(s instanceof Jr){Sn({status:"missing",folder:t,index:null});return}throw s}let r=JSON.parse(new TextDecoder().decode(i));if(!$d(r))throw new Error("index.json is not a Z\xFCrich 3D model index");Sn({status:"ready",index:r,folder:t})}catch(e){Sn({status:"error",error:Jd(e).message})}})()),oo}function nc(){let n=$e.settings.get();Sn({colorMode:n.colorMode==="height"?"height":"surfaces",showGround:n.showGround!==!1})}function eh(n){Sn({colorMode:n}),$e.settings.set("colorMode",n)}function th(n){Sn({showGround:n}),$e.settings.set("showGround",n)}function nh(n,e,t){Sn({flyTarget:{east:n,north:e,distance:t},flyRequest:ao.flyRequest+1}),$e.settings.get().campusView!=="3d"&&$e.settings.set("campusView","3d");let i=$e.getState().activePluginTab;(i?.pluginId!==$e.pluginId||!Pi(i.instanceId))&&Fn(_e("title"))}var ic=new Set,Xm=()=>({outlines:null,outlinesStatus:"idle",levels:null,levelsStatus:"idle",rooms:new Map,roomsStatus:new Map,room:null,focus:0,focusOn:null,place:null}),qt=Xm();var co={center:[8.5485,47.3768],zoom:15.6},ih=n=>{co=n},$m=()=>qt;function Wt(n){qt={...qt,...n};for(let e of ic)e()}function Ym(n){return ic.add(n),()=>ic.delete(n)}var Li=()=>$e.React.useSyncExternalStore(Ym,$m);function rc(n=$e.settings.get()){let e=Ji(n.building),t=typeof n.level=="string"&&Xl.test(n.level)&&e&&n.level.split(".")[1]===e.code?n.level:"";return{building:e,level:t,view:n.campusView==="3d"?"3d":"map"}}function Ni(){let n=$e.React,[e,t]=n.useState(()=>rc());return n.useEffect(()=>$e.settings.subscribe(()=>t(i=>{let r=rc();return r.building===i.building&&r.level===i.level&&r.view===i.view?i:r})),[]),e}var sc=n=>{console.warn(`[poly] campus: ${n instanceof Error?n.message:String(n)}`)};function rh(n=!1){!n&&qt.outlinesStatus!=="idle"&&qt.outlinesStatus!=="error"||(Wt({outlinesStatus:"loading"}),$e.backend.call("campus.outlines",{fresh:n}).then(e=>Wt({outlines:e,outlinesStatus:"ready"}),e=>{sc(e),Wt({outlinesStatus:"error"})}))}function uo(n=!1){!n&&qt.levelsStatus!=="idle"&&qt.levelsStatus!=="error"||(Wt({levelsStatus:"loading"}),$e.backend.call("campus.levels",{fresh:n}).then(e=>{let t=new Map;for(let i of e)t.set(i.code,[...t.get(i.code)??[],i]);Wt({levels:t,levelsStatus:"ready"})},e=>{sc(e),Wt({levelsStatus:"error"})}))}function ho(n){let e=qt.roomsStatus.get(n);e==="loading"||e==="ready"||(Wt({roomsStatus:new Map(qt.roomsStatus).set(n,"loading")}),$e.backend.call("campus.rooms",{level:n}).then(t=>Wt({rooms:new Map(qt.rooms).set(n,t),roomsStatus:new Map(qt.roomsStatus).set(n,"ready")}),t=>{sc(t),Wt({roomsStatus:new Map(qt.roomsStatus).set(n,"error")})}))}var Pi=n=>n==="campus"||n==="city"||!!(n?.startsWith("campus-")||n?.startsWith("city-"));function po(){let n=$e.getState().activePluginTab;return n?.pluginId===$e.pluginId&&Pi(n.instanceId)}function Fn(n,e=!1){$e.workspace.openMainTab({instanceId:e?`campus-${Date.now().toString(36)}`:"campus",title:n,newTab:e})}function Di(n,e,t=!0){n===($e.settings.get().building||null)&&!t||($e.settings.set("building",n??""),$e.settings.set("level",""),Wt({room:null,...t?{focus:qt.focus+1,focusOn:n}:{}}),t&&n&&!po()&&Fn(e))}function oc(n,e){let t=n.level.split(".")[1]??"";!Xl.test(n.level)||!t||($e.settings.set("building",t),$e.settings.set("level",n.level),Wt({room:n,focus:qt.focus+1,focusOn:t}),ho(n.level),po()||Fn(e))}var er=new Map;function sh(n){let e=JSON.stringify(n),t=er.get(e);return t||(t=$e.backend.call("campus.searchRooms",{query:n}),er.set(e,t),t.catch(()=>er.delete(e)),er.size>100&&er.delete(er.keys().next().value)),t}function oh(n){$e.settings.set("level",n),Wt({room:null}),n&&ho(n)}var qm=n=>Math.min(Math.max(17-Math.log2(Math.max(n,50)/450),13),19);function ah(n,e,t){if(t==="3d"){let[s,o]=Qi(n.latitude,n.longitude);nh(s,o,n.distance);return}let i=[n.longitude,n.latitude],r=qm(n.distance);co={center:i,zoom:r},Wt({place:{center:i,zoom:r,request:(qt.place?.request??0)+1}}),po()||Fn(e)}function lh(n,e){$e.settings.set("campusView",n),Wt({focus:qt.focus+1,focusOn:rc().building?.code??null}),e&&!po()&&Fn(e)}var ci=(n,e)=>P.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...e},n.map(t=>P.createElement("path",{key:t,d:t}))),fo=["M19 10c0 4.6-7 11-7 11s-7-6.4-7-11a7 7 0 0 1 14 0Z","M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0"],jm=["M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13","M20 20l-4.8-4.8"],ch=["M18 6 6 18","M6 6l12 12"],Km=["M9 6l6 6-6 6"],Jm=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],Qm=["M4 21h16","M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17","M14.5 12.5v.01"],eg=250;function tg({building:n}){let e=Li(),t=e.levels?.get(n.code)?.length??0;return P.createElement("section",{className:"poly-building","aria-label":n.code},P.createElement("div",{className:"poly-building-code"},n.code),P.createElement("button",{type:"button",className:"poly-icon-btn poly-building-close",title:_e("building.clear"),"aria-label":_e("building.clear"),onClick:()=>Di(null,_e("title"),!1)},ci(ch)),P.createElement("div",{className:"poly-building-address"},Xn(n)),P.createElement("div",{className:"poly-building-meta"},_e(`group.${n.campus}`)," \xB7 ",e.levelsStatus==="ready"?t?_e(t===1?"floors.one":"floors.other",{count:t}):_e("floors.none"):_e("floors.reading")),P.createElement("a",{className:"poly-building-link",href:n.link,target:"_blank",rel:"noreferrer"},ci(Jm),P.createElement("span",null,_e("building.link"))))}function uh(){let n=Ni(),e=Li(),[t,i]=P.useState(""),[r,s]=P.useState(()=>new Set(["other","zurich"])),[o,a]=P.useState(null),l=P.useRef(null);P.useEffect(()=>{uo()},[]);let c=P.useMemo(()=>Wd(t),[t]),d=P.useMemo(()=>{let S=Vd(t,n.building?.code);return S&&Ji(S.building)?S:null},[t,n.building]),h=d?JSON.stringify(d):"";P.useEffect(()=>{if(!d){a(null);return}let S=!0;a(R=>({key:h,status:"loading",rooms:R?.rooms??[]}));let E=setTimeout(()=>{sh(d).then(R=>{S&&a({key:h,status:"ready",rooms:R})},()=>{S&&a({key:h,status:"error",rooms:[]})})},eg);return()=>{S=!1,clearTimeout(E)}},[h]);let u=Zd(c),p=P.useMemo(()=>{let S=Ci(t.trim());return S?ql.filter(E=>Ci(E.name).includes(S)):ql},[t]),y=t.trim().length>0,x=_e("title"),m=o?.key===h?o:null,f=S=>s(E=>{let R=new Set(E);return R.has(S)?R.delete(S):R.add(S),R}),T=S=>y||!r.has(S),C=(S,E)=>P.createElement("button",{type:"button",className:`poly-group-head ${T(S)?"open":""}`,"aria-expanded":T(S),onClick:()=>f(S)},P.createElement("span",{className:"poly-group-chevron"},ci(Km)),P.createElement("span",{className:"poly-group-name"},_e(`group.${S}`)),E!==void 0&&P.createElement("span",{className:"poly-group-count"},E)),_=()=>{let S=m?.rooms[0];S?oc(S,x):c[0]&&Di(c[0].code,x)};return P.createElement(P.Fragment,null,P.createElement("div",{className:"poly-bar poly-search-bar"},P.createElement("div",{className:"search-field-row"},P.createElement("div",{className:"search-field"},P.createElement("span",{className:"search-field-icon"},ci(jm)),P.createElement("input",{ref:l,className:"search-field-input",value:t,placeholder:_e("search.placeholder"),"aria-label":_e("search.placeholder"),onChange:S=>i(S.target.value),onKeyDown:S=>{S.key==="Enter"&&_(),S.key==="Escape"&&i("")}}),t&&P.createElement("button",{type:"button",className:"search-field-action",title:_e("search.clear"),"aria-label":_e("search.clear"),onClick:()=>i("")},ci(ch))))),P.createElement("div",{className:"poly-list poly-campus-list"},d&&P.createElement("div",{className:"poly-group","data-group":"rooms"},C("rooms",m?.status==="ready"?m.rooms.length:void 0),m?.status==="loading"&&!m.rooms.length&&P.createElement("div",{className:"poly-note"},_e("rooms.searching")),m?.status==="error"&&P.createElement("div",{className:"poly-note error"},_e("rooms.failed")),m?.status==="ready"&&!m.rooms.length&&P.createElement("div",{className:"poly-note"},_e("rooms.none")),m?.rooms.map(S=>P.createElement("button",{key:S.id,type:"button","data-room":S.id,className:`poly-building-row ${S.id===e.room?.id?"active":""}`,onClick:()=>oc(S,x)},P.createElement("span",{className:"poly-building-icon"},ci(Qm)),P.createElement("span",{className:"poly-building-row-meta"},P.createElement("span",{className:"poly-building-row-code"},S.name),P.createElement("span",{className:"poly-building-row-sub"},[S.type,S.use].filter((E,R,v)=>E&&v.indexOf(E)===R).join(" \xB7 ")))))),u.map(({group:S,buildings:E})=>P.createElement("div",{key:S,className:"poly-group","data-group":S},C(S,E.length),T(S)&&E.map(R=>P.createElement("button",{key:R.code,type:"button","data-building":R.code,className:`poly-building-row ${R.code===n.building?.code?"active":""}`,onClick:()=>Di(R.code,x)},P.createElement("span",{className:"poly-building-icon"},ci(fo)),P.createElement("span",{className:"poly-building-row-meta"},P.createElement("span",{className:"poly-building-row-code"},R.code),P.createElement("span",{className:"poly-building-row-sub"},Xn(R))))))),p.length>0&&P.createElement("div",{className:"poly-group","data-group":"zurich"},C("zurich",p.length),T("zurich")&&p.map(S=>P.createElement("button",{key:S.id,type:"button","data-place":S.id,className:"poly-building-row",onClick:()=>ah(S,x,n.view)},P.createElement("span",{className:"poly-building-icon"},ci(fo)),P.createElement("span",{className:"poly-building-row-meta"},P.createElement("span",{className:"poly-building-row-code"},S.name))))),!c.length&&!d&&!p.length&&P.createElement("div",{className:"poly-note"},_e("search.none")),P.createElement("div",{className:"poly-credit"},_e("credit"))),n.building&&P.createElement(tg,{building:n.building}))}var bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,Hc=1,Zh=2;var Os=1,Xh=2,kr=3,_i=0,sn=1,Vt=2,Gn=0,Or=1,Vc=2,Gc=3,Wc=4,$h=5;var Wi=100,Yh=101,qh=102,jh=103,Kh=104,Jh=200,Qh=201,ep=202,tp=203,Zc=204,Xc=205,np=206,ip=207,rp=208,sp=209,op=210,ap=211,lp=212,cp=213,up=214,Go=0,Wo=1,Zo=2,vr=3,Xo=4,$o=5,Yo=6,qo=7,wa=0,dp=1,hp=2,Ln=0,$c=1,Yc=2,qc=3,jc=4,Kc=5,Jc=6,Qc=7;var eu=300,Mi=301,Zi=302,Ea=303,Ta=304,Us=306,br=1e3,Bn=1001,jo=1002,Bt=1003,pp=1004;var Fs=1005;var Zt=1006,Aa=1007;var Si=1008;var un=1009,tu=1010,nu=1011,Ur=1012,Ca=1013,Nn=1014,Dn=1015,kn=1016,Ia=1017,Ra=1018,Fr=1020,iu=35902,ru=35899,su=1021,ou=1022,_n=1023,Hn=1026,wi=1027,au=1028,Pa=1029,Ei=1030,La=1031;var Na=1033,zs=33776,Bs=33777,Hs=33778,Vs=33779,Da=35840,ka=35841,Oa=35842,Ua=35843,Fa=36196,za=37492,Ba=37496,Ha=37488,Va=37489,Gs=37490,Ga=37491,Wa=37808,Za=37809,Xa=37810,$a=37811,Ya=37812,qa=37813,ja=37814,Ka=37815,Ja=37816,Qa=37817,el=37818,tl=37819,nl=37820,il=37821,rl=36492,sl=36494,ol=36495,al=36283,ll=36284,Ws=36285,cl=36286;var us=2300,Ko=2301,Ho=2302,Rc=2303,Pc=2400,Lc=2401,Nc=2402;var fp=3200;var ul=0,mp=1,ii="",nn="srgb",ds="srgb-linear",hs="linear",ut="srgb";var Vo=7680,lu=7681;var cu=517;var gp=519,yp=512,xp=513,vp=514,dl=515,bp=516,_p=517,hl=518,Mp=519,uu=35044;var du="300 es",Cn=2e3,_r=2001;function ng(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ig(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){let n=ps("canvas");return n.style.display="block",n}var dh={},Mr=null;function fs(...n){let e="THREE."+n.shift();Mr?Mr("log",e,...n):console.log(e,...n)}function wp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ze(...n){n=wp(n);let e="THREE."+n.shift();if(Mr)Mr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=wp(n);let e="THREE."+n.shift();if(Mr)Mr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bi(...n){let e=n.join(" ");e in dh||(dh[e]=!0,ze(...n))}function Ep(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Tp={[Go]:Wo,[Zo]:Yo,[Xo]:qo,[vr]:$o,[Wo]:Go,[Yo]:Zo,[qo]:Xo,[$o]:vr},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,ls=Math.PI/180,Sr=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function hu(n,e){return(n%e+e)%e}function rg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sg(n,e,t){return n!==e?(t-n)/(e-n):0}function cs(n,e,t){return(1-t)*n+t*e}function og(n,e,t,i){return cs(n,e,1-Math.exp(-t*i))}function ag(n,e=1){return e-Math.abs(hu(n,e*2)-e)}function lg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ug(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dg(n,e){return n+Math.random()*(e-n)}function hg(n){return n*(.5-Math.random())}function pg(n){n!==void 0&&(hh=n);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(n){return n*ls}function mg(n){return n*Sr}function gg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vg(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*h,l*u,a*c);break;case"YZY":n.set(l*u,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*u,a*d,a*c);break;case"XZX":n.set(a*d,l*y,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*y,a*c);break;case"ZYZ":n.set(l*y,l*p,a*d,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pu={DEG2RAD:ls,RAD2DEG:Sr,generateUUID:Qn,clamp:nt,euclideanModulo:hu,mapLinear:rg,inverseLerp:sg,lerp:cs,damp:og,pingpong:ag,smoothstep:lg,smootherstep:cg,randInt:ug,randFloat:dg,randFloatSpread:hg,seededRandom:pg,degToRad:fg,radToDeg:mg,isPowerOfTwo:gg,ceilPowerOfTwo:yg,floorPowerOfTwo:xg,setQuaternionFromProperEuler:vg,normalize:pt,denormalize:An},xu=class xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xu.prototype.isVector2=!0;var Pe=xu,fn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],y=s[o+2],x=s[o+3];if(h!==x||l!==u||c!==p||d!==y){let m=l*u+c*p+d*y+h*x;m<0&&(u=-u,p=-p,y=-y,x=-x,m=-m);let f=1-a;if(m<.9995){let T=Math.acos(m),C=Math.sin(T);f=Math.sin(f*T)/C,a=Math.sin(a*T)/C,l=l*f+u*a,c=c*f+p*a,d=d*f+y*a,h=h*f+x*a}else{l=l*f+u*a,c=c*f+p*a,d=d*f+y*a,h=h*f+x*a;let T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],u=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+d*h+l*p-c*u,e[t+1]=l*y+d*u+c*h-a*p,e[t+2]=c*y+d*p+a*u-l*h,e[t+3]=d*y-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*p*y,this._y=c*p*h-u*d*y,this._z=c*d*y+u*p*h,this._w=c*d*h-u*p*y;break;case"YXZ":this._x=u*d*h+c*p*y,this._y=c*p*h-u*d*y,this._z=c*d*y-u*p*h,this._w=c*d*h+u*p*y;break;case"ZXY":this._x=u*d*h-c*p*y,this._y=c*p*h+u*d*y,this._z=c*d*y+u*p*h,this._w=c*d*h-u*p*y;break;case"ZYX":this._x=u*d*h-c*p*y,this._y=c*p*h+u*d*y,this._z=c*d*y-u*p*h,this._w=c*d*h+u*p*y;break;case"YZX":this._x=u*d*h+c*p*y,this._y=c*p*h+u*d*y,this._z=c*d*y-u*p*h,this._w=c*d*h-u*p*y;break;case"XZY":this._x=u*d*h-c*p*y,this._y=c*p*h-u*d*y,this._z=c*d*y+u*p*h,this._w=c*d*h+u*p*y;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vu=class vu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vu.prototype.isVector3=!0;var B=vu,ac=new B,ph=new fn,bu=class bu{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],y=i[8],x=r[0],m=r[3],f=r[6],T=r[1],C=r[4],_=r[7],S=r[2],E=r[5],R=r[8];return s[0]=o*x+a*T+l*S,s[3]=o*m+a*C+l*E,s[6]=o*f+a*_+l*R,s[1]=c*x+d*T+h*S,s[4]=c*m+d*C+h*E,s[7]=c*f+d*_+h*R,s[2]=u*x+p*T+y*S,s[5]=u*m+p*C+y*E,s[8]=u*f+p*_+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,p=c*s-o*l,y=t*h+i*u+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bu.prototype.isMatrix3=!0;var Xe=bu,lc=new Xe,fh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){let n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:e,whitePoint:i,transfer:hs,toXYZ:fh,fromXYZ:mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:fh,fromXYZ:mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var rt=bg();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,Jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=ps("canvas")),tr.width=e.width,tr.height=e.height;let r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cc(r[o].image)):s.push(cc(r[o]))}else s=cc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Mg=0,uc=new B,Xt=class n extends In{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bn,r=Bn,s=Zt,o=Si,a=_n,l=un,c=n.DEFAULT_ANISOTROPY,d=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Qn(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=eu;Xt.DEFAULT_ANISOTROPY=1;var _u=class _u{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],y=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,_=(p+1)/2,S=(f+1)/2,E=(d+u)/4,R=(h+x)/4,v=(y+m)/4;return C>_&&C>S?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=E/i,s=R/i):_>S?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=E/r,s=v/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=v/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-y)*(m-y)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(m-y)/T,this.y=(h-x)/T,this.z=(u-d)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_u.prototype.isVector4=!0;var Ct=_u,Qo=class extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Xt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Qo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ms=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sa=class Sa{constructor(e,t,i,r,s,o,a,l,c,d,h,u,p,y,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,h,u,p,y,x,m)}set(e,t,i,r,s,o,a,l,c,d,h,u,p,y,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=y,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=o*d,p=o*h,y=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+y*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=y+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*d,p=l*h,y=c*d,x=c*h;t[0]=u+x*a,t[4]=y*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-y,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*d,p=l*h,y=c*d,x=c*h;t[0]=u-x*a,t[4]=-o*h,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*d,p=o*h,y=a*d,x=a*h;t[0]=l*d,t[4]=y*c-p,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=p*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,y=a*l,x=a*c;t[0]=l*d,t[4]=x-u*h,t[8]=y*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*h+y,t[10]=u-x*h}else if(e.order==="XZY"){let u=o*l,p=o*c,y=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=o*d,t[9]=p*h-y,t[2]=y*h-p,t[6]=a*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,wg)}lookAt(e,t,i){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ui.crossVectors(i,hn),ui.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ui.crossVectors(i,hn)),ui.normalize(),mo.crossVectors(hn,ui),r[0]=ui.x,r[4]=mo.x,r[8]=hn.x,r[1]=ui.y,r[5]=mo.y,r[9]=hn.y,r[2]=ui.z,r[6]=mo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],y=i[2],x=i[6],m=i[10],f=i[14],T=i[3],C=i[7],_=i[11],S=i[15],E=r[0],R=r[4],v=r[8],M=r[12],L=r[1],k=r[5],z=r[9],V=r[13],N=r[2],H=r[6],$=r[10],K=r[14],se=r[3],Y=r[7],re=r[11],oe=r[15];return s[0]=o*E+a*L+l*N+c*se,s[4]=o*R+a*k+l*H+c*Y,s[8]=o*v+a*z+l*$+c*re,s[12]=o*M+a*V+l*K+c*oe,s[1]=d*E+h*L+u*N+p*se,s[5]=d*R+h*k+u*H+p*Y,s[9]=d*v+h*z+u*$+p*re,s[13]=d*M+h*V+u*K+p*oe,s[2]=y*E+x*L+m*N+f*se,s[6]=y*R+x*k+m*H+f*Y,s[10]=y*v+x*z+m*$+f*re,s[14]=y*M+x*V+m*K+f*oe,s[3]=T*E+C*L+_*N+S*se,s[7]=T*R+C*k+_*H+S*Y,s[11]=T*v+C*z+_*$+S*re,s[15]=T*M+C*V+_*K+S*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],y=e[3],x=e[7],m=e[11],f=e[15],T=l*p-c*u,C=a*p-c*h,_=a*u-l*h,S=o*p-c*d,E=o*u-l*d,R=o*h-a*d;return t*(x*T-m*C+f*_)-i*(y*T-m*S+f*E)+r*(y*C-x*S+f*R)-s*(y*_-x*E+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return t*(o*d-a*c)-i*(s*d-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],y=e[12],x=e[13],m=e[14],f=e[15],T=t*a-i*o,C=t*l-r*o,_=t*c-s*o,S=i*l-r*a,E=i*c-s*a,R=r*c-s*l,v=d*x-h*y,M=d*m-u*y,L=d*f-p*y,k=h*m-u*x,z=h*f-p*x,V=u*f-p*m,N=T*V-C*z+_*k+S*L-E*M+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return e[0]=(a*V-l*z+c*k)*H,e[1]=(r*z-i*V-s*k)*H,e[2]=(x*R-m*E+f*S)*H,e[3]=(u*E-h*R-p*S)*H,e[4]=(l*L-o*V-c*M)*H,e[5]=(t*V-r*L+s*M)*H,e[6]=(m*_-y*R-f*C)*H,e[7]=(d*R-u*_+p*C)*H,e[8]=(o*z-a*L+c*v)*H,e[9]=(i*L-t*z-s*v)*H,e[10]=(y*E-x*_+f*T)*H,e[11]=(h*_-d*E-p*T)*H,e[12]=(a*M-o*k-l*v)*H,e[13]=(t*k-i*M+r*v)*H,e[14]=(x*C-y*S-m*T)*H,e[15]=(d*S-h*C+u*T)*H,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,u=s*c,p=s*d,y=s*h,x=o*d,m=o*h,f=a*h,T=l*c,C=l*d,_=l*h,S=i.x,E=i.y,R=i.z;return r[0]=(1-(x+f))*S,r[1]=(p+_)*S,r[2]=(y-C)*S,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(u+f))*E,r[6]=(m+T)*E,r[7]=0,r[8]=(y+C)*R,r[9]=(m-T)*R,r[10]=(1-(u+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=nr.set(r[0],r[1],r[2]).length(),a=nr.set(r[4],r[5],r[6]).length(),l=nr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),wn.copy(this);let c=1/o,d=1/a,h=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=d,wn.elements[5]*=d,wn.elements[6]*=d,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Cn,l=!1){let c=this.elements,d=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),y,x;if(l)y=s/(o-s),x=o*s/(o-s);else if(a===Cn)y=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===_r)y=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Cn,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r),y,x;if(l)y=1/(o-s),x=o/(o-s);else if(a===Cn)y=-2/(o-s),x=-(o+s)/(o-s);else if(a===_r)y=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sa.prototype.isMatrix4=!0;var St=Sa,nr=new B,wn=new St,Sg=new B(0,0,0),wg=new B(1,1,1),ui=new B,mo=new B,hn=new B,gh=new St,yh=new fn,ti=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eg=0,xh=new B,ir=new fn,$n=new St,go=new B,Qr=new B,Tg=new B,Ag=new fn,vh=new B(1,0,0),bh=new B(0,1,0),_h=new B(0,0,1),Mh={type:"added"},Cg={type:"removed"},rr={type:"childadded",child:null},dc={type:"childremoved",child:null},Ht=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new ti,i=new fn,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Xe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Qr,go,this.up):$n.lookAt(go,Qr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ir.setFromRotationMatrix($n),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),rr.child=e,this.dispatchEvent(rr),rr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new B(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,y=.005;c.inputState.pinching&&u>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},yo={h:0,s:0,l:0};function hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=hu(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hc(o,s,e+1/3),this.g=hc(o,s,e),this.b=hc(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return rt.workingToColorSpace(Kt.copy(this),e),Math.round(nt(Kt.r*255,0,255))*65536+Math.round(nt(Kt.g*255,0,255))*256+Math.round(nt(Kt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=nn){rt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(yo);let i=cs(di.h,yo.h,t),r=cs(di.s,yo.s,t),s=cs(di.l,yo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Le;Le.NAMES=Ap;var gs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ys=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new B,Yn=new B,pc=new B,qn=new B,sr=new B,or=new B,Sh=new B,fc=new B,mc=new B,gc=new B,yc=new Ct,xc=new Ct,vc=new Ct,Jn=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Yn.subVectors(i,t),pc.subVectors(e,t);let o=En.dot(En),a=En.dot(Yn),l=En.dot(pc),c=Yn.dot(Yn),d=Yn.dot(pc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,p=(c*l-a*d)*u,y=(o*d-a*l)*u;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return yc.setScalar(0),xc.setScalar(0),vc.setScalar(0),yc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,i),vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yc,s.x),o.addScaledVector(xc,s.y),o.addScaledVector(vc,s.z),o}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Yn.subVectors(e,t),En.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;sr.subVectors(r,i),or.subVectors(s,i),fc.subVectors(e,i);let l=sr.dot(fc),c=or.dot(fc);if(l<=0&&c<=0)return t.copy(i);mc.subVectors(e,r);let d=sr.dot(mc),h=or.dot(mc);if(d>=0&&h<=d)return t.copy(r);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(sr,o);gc.subVectors(e,s);let p=sr.dot(gc),y=or.dot(gc);if(y>=0&&p<=y)return t.copy(s);let x=p*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(or,a);let m=d*y-p*h;if(m<=0&&h-d>=0&&p-y>=0)return Sh.subVectors(s,r),a=(h-d)/(h-d+(p-y)),t.copy(r).addScaledVector(Sh,a);let f=1/(m+x+u);return o=x*f,a=u*f,t.copy(i).addScaledVector(sr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),vo.subVectors(this.max,es),ar.subVectors(e.a,es),lr.subVectors(e.b,es),cr.subVectors(e.c,es),hi.subVectors(lr,ar),pi.subVectors(cr,lr),ki.subVectors(ar,cr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-ki.z,ki.y,hi.z,0,-hi.x,pi.z,0,-pi.x,ki.z,0,-ki.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-ki.y,ki.x,0];return!bc(t,ar,lr,cr,vo)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,ar,lr,cr,vo))?!1:(bo.crossVectors(hi,pi),t=[bo.x,bo.y,bo.z],bc(t,ar,lr,cr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new B,new B,new B,new B,new B,new B,new B,new B],Tn=new B,xo=new mi,ar=new B,lr=new B,cr=new B,hi=new B,pi=new B,ki=new B,es=new B,vo=new B,bo=new B,Oi=new B;function bc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Oi.fromArray(n,s);let a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),d=i.dot(Oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var kt=new B,_o=new Pe,Rg=0,dt=class extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vs=class extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ln=class extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pg=new mi,ts=new B,_c=new B,Hi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);let t=ts.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(_c)),this.expandByPoint(ts.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lg=0,vn=new St,Mc=new Ht,ur=new B,pn=new mi,ns=new mi,zt=new B,Rt=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?vs:xs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(pn.min,ns.min),pn.expandByPoint(zt),zt.addVectors(pn.max,ns.max),pn.expandByPoint(zt)):(pn.expandByPoint(ns.min),pn.expandByPoint(ns.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)zt.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),zt.add(ur)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new B,l[v]=new B;let c=new B,d=new B,h=new B,u=new Pe,p=new Pe,y=new Pe,x=new B,m=new B;function f(v,M,L){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,L),u.fromBufferAttribute(s,v),p.fromBufferAttribute(s,M),y.fromBufferAttribute(s,L),d.sub(c),h.sub(c),p.sub(u),y.sub(u);let k=1/(p.x*y.y-y.x*p.y);isFinite(k)&&(x.copy(d).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(k),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(k),a[v].add(x),a[M].add(x),a[L].add(x),l[v].add(m),l[M].add(m),l[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,M=T.length;v<M;++v){let L=T[v],k=L.start,z=L.count;for(let V=k,N=k+z;V<N;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let C=new B,_=new B,S=new B,E=new B;function R(v){S.fromBufferAttribute(r,v),E.copy(S);let M=a[v];C.copy(M),C.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(E,M);let k=_.dot(l[v])<0?-1:1;o.setXYZW(v,C.x,C.y,C.z,k)}for(let v=0,M=T.length;v<M;++v){let L=T[v],k=L.start,z=L.count;for(let V=k,N=k+z;V<N;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,d=new B,h=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){let y=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d),p=0,y=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)u[y++]=c[p++]}return new dt(u,d,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){let u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},tn=new B,bs=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){fs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sc=new B,Ng=new B,Dg=new Xe,rn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Sc.subVectors(i,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Sc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dg.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kg=0,Vn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Or,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Xc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ar=class extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,is=new B,hr=new B,pr=new B,fr=new Pe,rs=new Pe,Cp=new St,Mo=new B,ss=new B,So=new B,wh=new Pe,wc=new Pe,Eh=new Pe,_s=class extends Ht{constructor(e=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ta(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new bs(i,3,0,!1)),dr.setAttribute("uv",new bs(i,2,3,!1))}this.geometry=dr,this.material=e,this.center=new Pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-pr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;wo(Mo.set(-.5,-.5,0),pr,o,hr,r,s),wo(ss.set(.5,-.5,0),pr,o,hr,r,s),wo(So.set(.5,.5,0),pr,o,hr,r,s),wh.set(0,0),wc.set(1,0),Eh.set(1,1);let a=e.ray.intersectTriangle(Mo,ss,So,!1,is);if(a===null&&(wo(ss.set(-.5,.5,0),pr,o,hr,r,s),wc.set(0,1),a=e.ray.intersectTriangle(Mo,So,ss,!1,is),a===null))return;let l=e.ray.origin.distanceTo(is);l<e.near||l>e.far||t.push({distance:l,point:is.clone(),uv:Jn.getInterpolation(is,Mo,ss,So,wh,wc,Eh,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wo(n,e,t,i,r,s){fr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(rs.x=s*fr.x-r*fr.y,rs.y=r*fr.x+s*fr.y):rs.copy(fr),n.copy(e),n.x+=rs.x,n.y+=rs.y,n.applyMatrix4(Cp)}var Kn=new B,Ec=new B,Eo=new B,To=new B,gi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ec.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(Ec);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=To.dot(this.direction),l=-To.dot(Eo),c=To.lengthSq(),d=Math.abs(1-o*o),h,u,p,y;if(d>0)if(h=o*l-a,u=o*a-l,y=s*d,h>=0)if(u>=-y)if(u<=y){let x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-y?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=y?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ec).addScaledVector(Eo,u),p}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,h=e.x-o.x,u=e.y-o.y,p=e.z-o.z,y=t.x-o.x,x=t.y-o.y,m=t.z-o.z,f=i.x-o.x,T=i.y-o.y,C=i.z-o.z,_=Math.abs(l),S=Math.abs(c),E=Math.abs(d),R,v,M,L,k,z,V,N,H,$,K,se;if(_>=S&&_>=E?(M=l,z=h,H=y,se=f,l>=0?(R=c,v=d,L=u,k=p,V=x,N=m,$=T,K=C):(R=d,v=c,L=p,k=u,V=m,N=x,$=C,K=T)):S>=E?(M=c,z=u,H=x,se=T,c>=0?(R=d,v=l,L=p,k=h,V=m,N=y,$=C,K=f):(R=l,v=d,L=h,k=p,V=y,N=m,$=f,K=C)):(M=d,z=p,H=m,se=C,d>=0?(R=l,v=c,L=h,k=u,V=y,N=x,$=f,K=T):(R=c,v=l,L=u,k=h,V=x,N=y,$=T,K=f)),M===0)return null;let Y=R/M,re=v/M,oe=1/M,Fe=L-Y*z,Ce=k-re*z,mt=V-Y*H,et=N-re*H,st=$-Y*se,Q=K-re*se,ne=st*et-Q*mt,we=Fe*Q-Ce*st,Ge=mt*Ce-et*Fe;if(r){if(ne<0||we<0||Ge<0)return null}else if((ne<0||we<0||Ge<0)&&(ne>0||we>0||Ge>0))return null;let be=ne+we+Ge;if(be===0)return null;let qe=oe*(ne*z+we*H+Ge*se);return(be>0?qe<0:qe>0)?null:this.at(qe/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new St,Ui=new gi,Ao=new Hi,Ah=new B,Co=new B,Io=new B,Ro=new B,Tc=new B,Po=new B,Ch=new B,Lo=new B,Pt=class extends Ht{constructor(e=new Rt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],h=s[l];d!==0&&(Tc.fromBufferAttribute(h,e),o?Po.addScaledVector(Tc,d):Po.addScaledVector(Tc.sub(t),d))}t.add(Po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Ao.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Ao,Ah)===null||Ui.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=u.length;y<x;y++){let m=u[y],f=o[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,S=C;_<S;_+=3){let E=a.getX(_),R=a.getX(_+1),v=a.getX(_+2);r=No(this,f,e,i,c,d,h,E,R,v),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let y=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=y,f=x;m<f;m+=3){let T=a.getX(m),C=a.getX(m+1),_=a.getX(m+2);r=No(this,o,e,i,c,d,h,T,C,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=u.length;y<x;y++){let m=u[y],f=o[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,S=C;_<S;_+=3){let E=_,R=_+1,v=_+2;r=No(this,f,e,i,c,d,h,E,R,v),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let y=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=y,f=x;m<f;m+=3){let T=m,C=m+1,_=m+2;r=No(this,o,e,i,c,d,h,T,C,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Og(n,e,t,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:n}}function No(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Io),n.getVertexPosition(c,Ro);let d=Og(n,e,t,i,Co,Io,Ro,Ch);if(d){let h=new B;Jn.getBarycoord(Ch,Co,Io,Ro,h),r&&(d.uv=Jn.getInterpolatedAttribute(r,a,l,c,h,new Pe)),s&&(d.uv1=Jn.getInterpolatedAttribute(s,a,l,c,h,new Pe)),o&&(d.normal=Jn.getInterpolatedAttribute(o,a,l,c,h,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};Jn.getNormal(Co,Io,Ro,u.normal),d.face=u,d.barycoord=h}return d}var na=class extends Xt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Bt,d=Bt,h,u){super(null,o,a,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=new Hi,Ug=new Pe(.5,.5),Do=new B,Cr=class{constructor(e=new rn,t=new rn,i=new rn,r=new rn,s=new rn,o=new rn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],y=s[8],x=s[9],m=s[10],f=s[11],T=s[12],C=s[13],_=s[14],S=s[15];if(r[0].setComponents(c-o,p-d,f-y,S-T).normalize(),r[1].setComponents(c+o,p+d,f+y,S+T).normalize(),r[2].setComponents(c+a,p+h,f+x,S+C).normalize(),r[3].setComponents(c-a,p-h,f-x,S-C).normalize(),i)r[4].setComponents(l,u,m,_).normalize(),r[5].setComponents(c-l,p-u,f-m,S-_).normalize();else if(r[4].setComponents(c-l,p-u,f-m,S-_).normalize(),t===Cn)r[5].setComponents(c+l,p+u,f+m,S+_).normalize();else if(t===_r)r[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);let t=Ug.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ia=new B,ra=new B,Ih=new St,os=new gi,ko=new Hi,Ac=new B,Rh=new B,sa=class extends Ht{constructor(e=new Rt,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ia.fromBufferAttribute(t,r-1),ra.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ia.distanceTo(ra);e.setAttribute("lineDistance",new ln(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;Ih.copy(r).invert(),os.copy(e.ray).applyMatrix4(Ih);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let p=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let x=p,m=y-1;x<m;x+=c){let f=d.getX(x),T=d.getX(x+1),C=Oo(this,e,os,l,f,T,x);C&&t.push(C)}if(this.isLineLoop){let x=d.getX(y-1),m=d.getX(p),f=Oo(this,e,os,l,x,m,y-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let x=p,m=y-1;x<m;x+=c){let f=Oo(this,e,os,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){let x=Oo(this,e,os,l,y-1,p,y-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Oo(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(ia.fromBufferAttribute(a,r),ra.fromBufferAttribute(a,s),t.distanceSqToSegment(ia,ra,Ac,Rh)>i)return;Ac.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ac);if(!(c<e.near||c>e.far))return{distance:c,point:Rh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ph=new B,Lh=new B,Ms=class extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ph.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ph.distanceTo(Lh);e.setAttribute("lineDistance",new ln(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ss=class extends Xt{constructor(e=[],t=Mi,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rr=class extends Xt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Xt{constructor(e,t,i=Nn,r,s,o,a=Bt,l=Bt,c,d=Hn,h=1){if(d!==Hn&&d!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends yi{constructor(e,t=Nn,i=Mi,r,s,o=Bt,a=Bt,l,c=Hn){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ws=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pr=class n extends Rt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function y(x,m,f,T,C,_,S,E,R,v,M){let L=_/R,k=S/v,z=_/2,V=S/2,N=E/2,H=R+1,$=v+1,K=0,se=0,Y=new B;for(let re=0;re<$;re++){let oe=re*k-V;for(let Fe=0;Fe<H;Fe++){let Ce=Fe*L-z;Y[x]=Ce*T,Y[m]=oe*C,Y[f]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(Fe/R),h.push(1-re/v),K+=1}}for(let re=0;re<v;re++)for(let oe=0;oe<R;oe++){let Fe=u+oe+H*re,Ce=u+oe+H*(re+1),mt=u+(oe+1)+H*(re+1),et=u+(oe+1)+H*re;l.push(Fe,Ce,et),l.push(Ce,mt,et),se+=6}a.addGroup(p,se,M),p+=se,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fg(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Ip(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Gg(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let d=a,h=l;for(let u=t;u<r;u+=t){let p=n[u],y=n[u+1];p<a&&(a=p),y<l&&(l=y),p>d&&(d=p),y>h&&(h=y)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return Es(s,o,t,a,l,c,0),o}function Ip(n,e,t,i,r){let s;if(r===ey(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Nh(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Nh(o/i|0,n[o],n[o+1],s);return s&&Lr(s,s.next)&&(As(s),s=s.next),s}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Lr(t,t.next)||It(t.prev,t,t.next)===0)){if(As(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Es(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Yg(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Bg(n,i,r,s):zg(n)){e.push(l.i,n.i,c.i),As(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Hg(Vi(n),e),Es(n,e,t,i,r,s,2)):o===2&&Vg(n,e,t,i,r,s):Es(Vi(n),e,t,i,r,s,1);break}}}function zg(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(r,s,o),h=Math.min(a,l,c),u=Math.max(r,s,o),p=Math.max(a,l,c),y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=u&&y.y>=h&&y.y<=p&&as(r,a,s,l,o,c,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Bg(n,e,t,i){let r=n.prev,s=n,o=n.next;if(It(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,u=o.y,p=Math.min(a,l,c),y=Math.min(d,h,u),x=Math.max(a,l,c),m=Math.max(d,h,u),f=Dc(p,y,e,t,i),T=Dc(x,m,e,t,i),C=n.prevZ,_=n.nextZ;for(;C&&C.z>=f&&_&&_.z<=T;){if(C.x>=p&&C.x<=x&&C.y>=y&&C.y<=m&&C!==r&&C!==o&&as(a,d,l,h,c,u,C.x,C.y)&&It(C.prev,C,C.next)>=0||(C=C.prevZ,_.x>=p&&_.x<=x&&_.y>=y&&_.y<=m&&_!==r&&_!==o&&as(a,d,l,h,c,u,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;C&&C.z>=f;){if(C.x>=p&&C.x<=x&&C.y>=y&&C.y<=m&&C!==r&&C!==o&&as(a,d,l,h,c,u,C.x,C.y)&&It(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;_&&_.z<=T;){if(_.x>=p&&_.x<=x&&_.y>=y&&_.y<=m&&_!==r&&_!==o&&as(a,d,l,h,c,u,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hg(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Lr(i,r)&&Pp(i,t,t.next,r)&&Ts(i,r)&&Ts(r,i)&&(e.push(i.i,t.i,r.i),As(t),As(t.next),t=n=r),t=t.next}while(t!==n);return Vi(t)}function Vg(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kg(o,a)){let l=Lp(o,a);o=Vi(o,o.next),l=Vi(l,l.next),Es(o,e,t,i,r,s,0),Es(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Gg(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Ip(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(jg(c))}r.sort(Wg);for(let s=0;s<r.length;s++)t=Zg(r[s],t);return t}function Wg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Zg(n,e){let t=Xg(n,e);if(!t)return e;let i=Lp(t,n);return Vi(i,i.next),Vi(t,t.next)}function Xg(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(Lr(n,t))return t;do{if(Lr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Rp(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);Ts(t,n)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&$g(o,t)))&&(o=t,d=h)}t=t.next}while(t!==a);return o}function $g(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Yg(n,e,t,i){let r=n;do r.z===0&&(r.z=Dc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,qg(r)}function qg(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Dc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function jg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rp(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function as(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Rp(n,e,t,i,r,s,o,a)}function Kg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jg(n,e)&&(Ts(n,e)&&Ts(e,n)&&Qg(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Lr(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Lr(n,e){return n.x===e.x&&n.y===e.y}function Pp(n,e,t,i){let r=Fo(It(n,e,t)),s=Fo(It(n,e,i)),o=Fo(It(t,i,n)),a=Fo(It(t,i,e));return!!(r!==s&&o!==a||r===0&&Uo(n,t,e)||s===0&&Uo(n,i,e)||o===0&&Uo(t,n,i)||a===0&&Uo(t,e,i))}function Uo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fo(n){return n>0?1:n<0?-1:0}function Jg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ts(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Qg(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lp(n,e){let t=kc(n.i,n.x,n.y),i=kc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nh(n,e,t,i){let r=kc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function As(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ey(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Oc=class{static triangulate(e,t,i=2){return Fg(e,t,i)}},Cs=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Dh(e),kh(i,e);let o=e.length;t.forEach(Dh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,kh(i,t[l]);let a=Oc.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Dh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Is=class n extends Rt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,u=t/l,p=[],y=[],x=[],m=[];for(let f=0;f<d;f++){let T=f*u-o;for(let C=0;C<c;C++){let _=C*h-s;y.push(_,-T,0),x.push(0,0,1),m.push(C/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){let C=T+c*f,_=T+c*(f+1),S=T+1+c*(f+1),E=T+1+c*f;p.push(C,_,E),p.push(_,S,E)}this.setIndex(p),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Xi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Oh(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Oh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=Xi(n[t]);for(let r in i)e[r]=i[r]}return e}function Oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ty(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Np={clone:Xi,merge:Qt},ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},aa=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ni=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ca=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends xi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:s=e,a=2*t-i;break;case Nc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=e,l=2*i-t;break;case Nc:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,y=(i-t)/(r-t),x=y*y,m=x*y,f=-u*m+2*u*x-u*y,T=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*y+1,C=(-1-p)*m+(1.5+p)*x+.5*y,_=p*m-p*x;for(let S=0;S!==a;++S)s[S]=f*o[d+S]+T*o[c+S]+C*o[l+S]+_*o[h+S];return s}},da=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(r-t),h=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*d;return s}},ha=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends xi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.inTangents,h=this.outTangents;if(!d||!h){let y=(i-t)/(r-t),x=1-y;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*y;return s}let u=a*2,p=e-1;for(let y=0;y!==a;++y){let x=o[c+y],m=o[l+y],f=p*u+y*2,T=h[f],C=h[f+1],_=e*u+y*2,S=d[_],E=d[_+1],R=sy(i,t,T,S,r);s[y]=Dp(R,x,C,E,m)}return s}};function Dp(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function ry(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function sy(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Dp(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=ry(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var gn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Cc(e.settings)&&(i.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case Rc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Cc(this.settings)&&(Uh(this.settings.inTangents,e),Uh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ig(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,u=h-i,p=h+i;for(let y=0;y!==i;++y){let x=t[h+y];if(x!==t[u+y]||x!==t[p+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Cc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ko;var vi=class extends gn{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=us;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};fa.prototype.ValueTypeName="color";var ma=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};ma.prototype.ValueTypeName="number";var ga=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)fn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Rs=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends gn{constructor(e,t,i){super(e,t,i)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=us;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends gn{constructor(e,t,i,r){super(e,t,i,r)}};ya.prototype.ValueTypeName="vector";var xa=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],y=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new xa,va=class{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ls=class extends Ps{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ic=new St,Fh=new B,zh=new B,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ic,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zo=new B,Bo=new fn,zn=new B,Ns=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,Bo,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Bo,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zo,Bo,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Bo,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new B,Bh=new Pe,Hh=new Pe,Jt=class extends Ns{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,Hh),t.subVectors(Hh,Bh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nr=class extends Ns{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends ba{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gr=-90,yr=1,_a=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(gr,yr,e,t);r.layers=this.layers,this.add(r);let s=new Jt(gr,yr,e,t);s.layers=this.layers,this.add(s);let o=new Jt(gr,yr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(gr,yr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(gr,yr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(gr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Ma=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mu="\\[\\]\\.:\\/",oy=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",ay="[^"+mu.replace("\\.","")+"]",ly=/((?:WC+[\/:])*)/.source.replace("WC",gu),cy=/(WCOD+)?/.source.replace("WCOD",ay),uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),hy=new RegExp("^"+ly+cy+uy+dy+"$"),py=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(e){let t=hy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);py.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Fc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sw=new Float32Array(1);var Vh=new St,Gi=class{constructor(e,t,i=0,r=1/0){this.ray=new gi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,i=[]){return zc(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zc(e[r],this,i,t);return i.sort(Gh),i}};function Gh(n,e){return n.distance-e.distance}function zc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)zc(s[o],e,t,!0)}}var Dr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Mu=class Mu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Mu.prototype.isMatrix2=!0;var Bc=Mu;var ks=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function yu(n,e,t,i){let r=fy(i);switch(t){case su:return n*e;case au:return n*e/r.components*r.byteLength;case Pa:return n*e/r.components*r.byteLength;case Ei:return n*e*2/r.components*r.byteLength;case La:return n*e*2/r.components*r.byteLength;case ou:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Na:return n*e*4/r.components*r.byteLength;case zs:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case Da:case Oa:return Math.max(n,8)*Math.max(e,8)/2;case Fa:case za:case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Gs:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case sl:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16;case al:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ws:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(n){switch(n){case un:case tu:return{byteLength:1,components:1};case Ur:case nu:case kn:return{byteLength:2,components:1};case Ia:case Ra:return{byteLength:2,components:4};case Nn:case Ca:case Dn:return{byteLength:4,components:1};case iu:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rf(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gy(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,y)=>p.start-y.start);let u=0;for(let p=1;p<h.length;p++){let y=h[u],x=h[p];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,y=h.length;p<y;p++){let x=h[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,My=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
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
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Py=`#ifdef USE_BUMPMAP
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vy=`vec3 transformedNormal = objectNormal;
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
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,m0=`uniform sampler2D dfgLUT;
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
}`,g0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nx=`float getShadowMask() {
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,wx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,Hx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Gx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,Zx=`uniform float size;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:yy,alphahash_pars_fragment:xy,alphamap_fragment:vy,alphamap_pars_fragment:by,alphatest_fragment:_y,alphatest_pars_fragment:My,aomap_fragment:Sy,aomap_pars_fragment:wy,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Ay,beginnormal_vertex:Cy,bsdfs:Iy,iridescence_fragment:Ry,bumpmap_pars_fragment:Py,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Ny,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:ky,color_fragment:Oy,color_pars_fragment:Uy,color_pars_vertex:Fy,color_vertex:zy,common:By,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:Vy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Wy,emissivemap_fragment:Zy,emissivemap_pars_fragment:Xy,colorspace_fragment:$y,colorspace_pars_fragment:Yy,envmap_fragment:qy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Ky,envmap_pars_vertex:Jy,envmap_physical_pars_fragment:c0,envmap_vertex:Qy,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:h0,lights_phong_pars_fragment:p0,lights_physical_fragment:f0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:y0,lights_fragment_end:x0,lightprobes_pars_fragment:v0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:S0,map_fragment:w0,map_pars_fragment:E0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:I0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:N0,morphtarget_vertex:D0,normal_fragment_begin:k0,normal_fragment_maps:O0,normal_pars_fragment:U0,normal_pars_vertex:F0,normal_vertex:z0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:Z0,packing:X0,premultiplied_alpha_fragment:$0,project_vertex:Y0,dithering_fragment:q0,dithering_pars_fragment:j0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:rx,skinning_vertex:sx,skinnormal_vertex:ox,specularmap_fragment:ax,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:ux,transmission_fragment:dx,transmission_pars_fragment:hx,uv_pars_fragment:px,uv_pars_vertex:fx,uv_vertex:mx,worldpos_vertex:gx,background_vert:yx,background_frag:xx,backgroundCube_vert:vx,backgroundCube_frag:bx,cube_vert:_x,cube_frag:Mx,depth_vert:Sx,depth_frag:wx,distance_vert:Ex,distance_frag:Tx,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Ix,linedashed_frag:Rx,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Nx,meshlambert_frag:Dx,meshmatcap_vert:kx,meshmatcap_frag:Ox,meshnormal_vert:Ux,meshnormal_frag:Fx,meshphong_vert:zx,meshphong_frag:Bx,meshphysical_vert:Hx,meshphysical_frag:Vx,meshtoon_vert:Gx,meshtoon_frag:Wx,points_vert:Zx,points_frag:Xx,shadow_vert:$x,shadow_frag:Yx,sprite_vert:qx,sprite_frag:jx},ge={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Zn={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Le(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zn.physical={uniforms:Qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var pl={r:0,b:0,g:0},Kx=new St,sf=new Xe;sf.set(-1,0,0,0,1,0,0,0,1);function Jx(n,e,t,i,r,s){let o=new Le(0),a=r===!0?0:1,l,c,d=null,h=0,u=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let _=T.backgroundBlurriness>0;C=e.get(C,_)}return C}function y(T){let C=!1,_=p(T);_===null?m(o,a):_&&_.isColor&&(m(_,1),C=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,C){let _=p(C);_&&(_.isCubeTexture||_.mapping===Us)?(c===void 0&&(c=new Pt(new Pr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Xi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sf),c.material.toneMapped=rt.getTransfer(_.colorSpace)!==ut,(d!==_||h!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Is(2,2),new mn({name:"BackgroundMaterial",uniforms:Xi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=rt.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,C){T.getRGB(pl,fu(n)),t.buffers.color.setClear(pl.r,pl.g,pl.b,C,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),a=C,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,m(o,a)},render:y,addToRenderList:x,dispose:f}}function Qx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,o=!1;function a(k,z,V,N,H){let $=!1,K=h(k,N,V,z);s!==K&&(s=K,c(s.object)),$=p(k,N,V,H),$&&y(k,N,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(k,z,V,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function d(k){return n.deleteVertexArray(k)}function h(k,z,V,N){let H=N.wireframe===!0,$=i[z.id];$===void 0&&($={},i[z.id]=$);let K=k.isInstancedMesh===!0?k.id:0,se=$[K];se===void 0&&(se={},$[K]=se);let Y=se[V.id];Y===void 0&&(Y={},se[V.id]=Y);let re=Y[H];return re===void 0&&(re=u(l()),Y[H]=re),re}function u(k){let z=[],V=[],N=[];for(let H=0;H<t;H++)z[H]=0,V[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:N,object:k,attributes:{},index:null}}function p(k,z,V,N){let H=s.attributes,$=z.attributes,K=0,se=V.getAttributes();for(let Y in se)if(se[Y].location>=0){let oe=H[Y],Fe=$[Y];if(Fe===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Fe=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Fe=k.instanceColor)),oe===void 0||oe.attribute!==Fe||Fe&&oe.data!==Fe.data)return!0;K++}return s.attributesNum!==K||s.index!==N}function y(k,z,V,N){let H={},$=z.attributes,K=0,se=V.getAttributes();for(let Y in se)if(se[Y].location>=0){let oe=$[Y];oe===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));let Fe={};Fe.attribute=oe,oe&&oe.data&&(Fe.data=oe.data),H[Y]=Fe,K++}s.attributes=H,s.attributesNum=K,s.index=N}function x(){let k=s.newAttributes;for(let z=0,V=k.length;z<V;z++)k[z]=0}function m(k){f(k,0)}function f(k,z){let V=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;V[k]=1,N[k]===0&&(n.enableVertexAttribArray(k),N[k]=1),H[k]!==z&&(n.vertexAttribDivisor(k,z),H[k]=z)}function T(){let k=s.newAttributes,z=s.enabledAttributes;for(let V=0,N=z.length;V<N;V++)z[V]!==k[V]&&(n.disableVertexAttribArray(V),z[V]=0)}function C(k,z,V,N,H,$,K){K===!0?n.vertexAttribIPointer(k,z,V,H,$):n.vertexAttribPointer(k,z,V,N,H,$)}function _(k,z,V,N){x();let H=N.attributes,$=V.getAttributes(),K=z.defaultAttributeValues;for(let se in $){let Y=$[se];if(Y.location>=0){let re=H[se];if(re===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){let oe=re.normalized,Fe=re.itemSize,Ce=e.get(re);if(Ce===void 0)continue;let mt=Ce.buffer,et=Ce.type,st=Ce.bytesPerElement,Q=et===n.INT||et===n.UNSIGNED_INT||re.gpuType===Ca;if(re.isInterleavedBufferAttribute){let ne=re.data,we=ne.stride,Ge=re.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<Y.locationSize;be++)f(Y.location+be,ne.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<Y.locationSize;be++)m(Y.location+be);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let be=0;be<Y.locationSize;be++)C(Y.location+be,Fe/Y.locationSize,et,oe,we*st,(Ge+Fe/Y.locationSize*be)*st,Q)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)f(Y.location+ne,re.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ne=0;ne<Y.locationSize;ne++)C(Y.location+ne,Fe/Y.locationSize,et,oe,Fe*st,Fe/Y.locationSize*ne*st,Q)}}else if(K!==void 0){let oe=K[se];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(Y.location,oe);break;case 3:n.vertexAttrib3fv(Y.location,oe);break;case 4:n.vertexAttrib4fv(Y.location,oe);break;default:n.vertexAttrib1fv(Y.location,oe)}}}}T()}function S(){M();for(let k in i){let z=i[k];for(let V in z){let N=z[V];for(let H in N){let $=N[H];for(let K in $)d($[K].object),delete $[K];delete N[H]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let z=i[k.id];for(let V in z){let N=z[V];for(let H in N){let $=N[H];for(let K in $)d($[K].object),delete $[K];delete N[H]}}delete i[k.id]}function R(k){for(let z in i){let V=i[z];for(let N in V){let H=V[N];if(H[k.id]===void 0)continue;let $=H[k.id];for(let K in $)d($[K].object),delete $[K];delete H[k.id]}}}function v(k){for(let z in i){let V=i[z],N=k.isInstancedMesh===!0?k.id:0,H=V[N];if(H!==void 0){for(let $ in H){let K=H[$];for(let se in K)d(K[se].object),delete K[se];delete H[$]}delete V[N],Object.keys(V).length===0&&delete i[z]}}}function M(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function ev(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function tv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&R!==Dn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:_,maxSamples:S,samples:E}}function nv(n){let e=this,t=null,i=0,r=!1,s=!1,o=new rn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){let y=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||y===null||y.length===0||s&&!m)s?d(null):c();else{let T=s?0:i,C=T*4,_=f.clippingState||null;l.value=_,_=d(y,u,C,p);for(let S=0;S!==C;++S)_[S]=t[S];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,y){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,y!==!0||m===null){let f=p+x*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,_=p;C!==x;++C,_+=4)o.copy(h[C]).applyMatrix4(T,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Br=4,iv=6,rv=20,sv=256,Zs=new Nr,Op=new Le,Su=null,wu=0,Eu=0,Tu=!1,ov=new B,$i=new B,ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=ov}=s;Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,wu,Eu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:kn,format:_n,colorSpace:ds,depthBuffer:!1},r=Up(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=av(s)),this._blurMaterial=cv(s,e,t),this._ggxMaterial=lv(s,e,t)}return r}_compileMaterial(e){let t=new Pt(new Rt,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r,s){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Op),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Pr,new Rn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,f=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(Op),f=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[C],s.y,s.z)):_===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[C]));let S=this._cubeSize;zr(r,_*S,C>2?S:0,S,S),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Mi||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,p=h*u,{_lodMax:y}=this,x=this._sizeLods[i],m=3*x*(i>y-Br?i-y+Br:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=y-t,zr(s,m,f,3*x,2*x),r.setRenderTarget(s),r.render(a,Zs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,zr(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(a,Zs)}_blur(e,t,i,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[r],h=3*d*(r>this._lodMax-Br?r-this._lodMax+Br:0),u=4*(this._cubeSize-d);zr(t,h,u,3*d,2*d),o.setRenderTarget(t),o.render(l,Zs)}};function av(n){let e=[],t=[],i=n,r=n-Br+1+iv;for(let s=0;s<r;s++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,y=new Float32Array(p*u*h),x=new Float32Array(p*u*h);for(let f=0;f<h;f++){let T=f%3*2/3-1,C=f>2?0:-1,_=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(_,p*u*f);for(let S=0;S<u;S++){let E=d[S*2]*2-1,R=d[S*2+1]*2-1;f===0?$i.set(1,R,E):f===1?$i.set(-E,1,-R):f===2?$i.set(-E,R,1):f===3?$i.set(-1,R,-E):f===4?$i.set(-E,-1,R):$i.set(E,R,-1),$i.toArray(x,(f*u+S)*p)}}let m=new Rt;m.setAttribute("position",new dt(y,p)),m.setAttribute("outputDirection",new dt(x,p)),t.push(new Pt(m,null)),i>Br&&i--}return{lodMeshes:t,sizeLods:e}}function Up(n,e,t){let i=new cn(n,e,t);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lv(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function cv(n,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Fp(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function zp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gl=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ss(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Gn});s.uniforms.tEquirect.value=t;let o=new Pt(r,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Zt),new _a(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function uv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ea||p===Ta)if(e.has(u)){let y=e.get(u).texture;return a(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let x=new gl(y.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,y=p===Ea||p===Ta,x=p===Mi||p===Zi;if(y||x){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new ml(n)),m=y?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return y&&T&&T.height>0||x&&T&&l(T)?(i===null&&(i=new ml(n)),m=y?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===Ea?u.mapping=Mi:p===Ta&&(u.mapping=Zi),u}function l(u){let p=0,y=6;for(let x=0;x<y;x++)u[x]!==void 0&&p++;return p===y}function c(u){let p=u.target;p.removeEventListener("dispose",c);let y=e.get(p);y!==void 0&&(e.delete(p),y.dispose())}function d(u){let p=u.target;p.removeEventListener("dispose",d);let y=t.get(p);y!==void 0&&(t.delete(p),y.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function dv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Bi("WebGLRenderer: "+i+" extension not supported."),r}}}function hv(n,e,t,i){let r={},s=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let y in u.attributes)e.remove(u.attributes[y]);u.removeEventListener("dispose",o),delete r[u.id];let p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(h){let u=[],p=h.index,y=h.attributes.position,x=0;if(y===void 0)return;if(p!==null){let T=p.array;x=p.version;for(let C=0,_=T.length;C<_;C+=3){let S=T[C+0],E=T[C+1],R=T[C+2];u.push(S,E,E,R,R,S)}}else{let T=y.array;x=y.version;for(let C=0,_=T.length/3-1;C<_;C+=3){let S=C+0,E=C+1,R=C+2;u.push(S,E,E,R,R,S)}}let m=new(y.count>=65535?vs:xs)(u,1);m.version=x;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){let u=s.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function pv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){n.drawElements(i,u,s,h*o),t.update(u,i,1)}function c(h,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,h*o,p),t.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let x=0;for(let m=0;m<p;m++)x+=u[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function fv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mv(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(a);if(u===void 0||u.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],C=0;p===!0&&(C=1),y===!0&&(C=2),x===!0&&(C=3);let _=a.attributes.position.count*C,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*S*4*h),R=new ms(E,_,S,h);R.type=Dn,R.needsUpdate=!0;let v=C*4;for(let L=0;L<h;L++){let k=m[L],z=f[L],V=T[L],N=_*S*4*L;for(let H=0;H<k.count;H++){let $=H*v;p===!0&&(r.fromBufferAttribute(k,H),E[N+$+0]=r.x,E[N+$+1]=r.y,E[N+$+2]=r.z,E[N+$+3]=0),y===!0&&(r.fromBufferAttribute(z,H),E[N+$+4]=r.x,E[N+$+5]=r.y,E[N+$+6]=r.z,E[N+$+7]=0),x===!0&&(r.fromBufferAttribute(V,H),E[N+$+8]=r.x,E[N+$+9]=r.y,E[N+$+10]=r.z,E[N+$+11]=V.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new Pe(_,S)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function gv(n,e,t,i,r){let s=new WeakMap;function o(c){let d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var yv={[$c]:"LINEAR_TONE_MAPPING",[Yc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function xv(n,e,t,i,r,s){let o=new cn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Rt;c.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ln([0,2,0,0,2,0],2));let d=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(c,d),u=new Nr(-1,1,1,-1,0,1),p=null,y=null,x=!1,m,f=null,T=[],C=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let E=0;E<T.length;E++){let R=T[E];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){T=_,C=T.length>0&&T[0].isRenderPass===!0;let S=o.width,E=o.height;T.length>0&&a===null&&(a=new cn(S,E,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(S,E,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let v=T[R];v.setSize&&v.setSize(S,E)}},this.begin=function(_,S){if(x||_.toneMapping===Ln&&T.length===0)return!1;if(f=S,S!==null){let E=S.width,R=S.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return C===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Ln,!0},this.hasRenderPass=function(){return C},this.end=function(_,S){_.toneMapping=m,x=!0;let E=o,R=a;for(let v=0;v<T.length;v++){let M=T[v];M.enabled!==!1&&(M.render(_,R,E,S),M.needsSwap!==!1&&(E=R,R=R===a?l:a))}if(p!==_.outputColorSpace||y!==_.toneMapping){p=_.outputColorSpace,y=_.toneMapping,d.defines={},rt.getTransfer(p)===ut&&(d.defines.SRGB_TRANSFER="");let v=yv[y];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(f),_.render(h,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var of=new Xt,Iu=new yi(1,1),af=new ms,lf=new ea,cf=new Ss,Bp=[],Hp=[],Vp=new Float32Array(16),Gp=new Float32Array(9),Wp=new Float32Array(4);function Vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Bp[r];if(s===void 0&&(s=new Float32Array(r),Bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Sv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;Wp.set(i),n.uniformMatrix2fv(this.addr,!1,Wp),Ut(t,i)}}function wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;Gp.set(i),n.uniformMatrix3fv(this.addr,!1,Gp),Ut(t,i)}}function Ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;Vp.set(i),n.uniformMatrix4fv(this.addr,!1,Vp),Ut(t,i)}}function Tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Dv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?hl:dl,s=Iu):s=of,t.setTexture2D(e||s,r)}function kv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lf,r)}function Ov(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cf,r)}function Uv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||af,r)}function Fv(n){switch(n){case 5126:return vv;case 35664:return bv;case 35665:return _v;case 35666:return Mv;case 35674:return Sv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Cv;case 35669:case 35673:return Iv;case 5125:return Rv;case 36294:return Pv;case 36295:return Lv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Uv}}function zv(n,e){n.uniform1fv(this.addr,e)}function Bv(n,e){let t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hv(n,e){let t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vv(n,e){let t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Gv(n,e){let t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wv(n,e){let t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zv(n,e){let t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xv(n,e){n.uniform1iv(this.addr,e)}function $v(n,e){n.uniform2iv(this.addr,e)}function Yv(n,e){n.uniform3iv(this.addr,e)}function qv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Kv(n,e){n.uniform2uiv(this.addr,e)}function Jv(n,e){n.uniform3uiv(this.addr,e)}function Qv(n,e){n.uniform4uiv(this.addr,e)}function eb(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Iu:o=of;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function tb(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lf,s[o])}function nb(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cf,s[o])}function ib(n,e,t){let i=this.cache,r=e.length,s=vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||af,s[o])}function rb(n){switch(n){case 5126:return zv;case 35664:return Bv;case 35665:return Hv;case 35666:return Vv;case 35674:return Gv;case 35675:return Wv;case 35676:return Zv;case 5124:case 35670:return Xv;case 35667:case 35671:return $v;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return jv;case 36294:return Kv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}var Ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}},Pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rb(t.type)}},Lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Zp(n,e){n.seq.push(e),n.map[e.id]=e}function sb(n,e,t){let i=n.name,r=i.length;for(Au.lastIndex=0;;){let s=Au.exec(i),o=Au.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zp(t,c===void 0?new Ru(a,n,e):new Pu(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Lu(a),Zp(t,h)),t=h}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);sb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Xp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ob=37297,ab=0;function lb(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var $p=new Xe;function cb(n){rt._getMatrix($p,rt.workingColorSpace,n);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case hs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+lb(n.getShaderSource(e),a)}else return s}function ub(n,e){let t=cb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var db={[$c]:"Linear",[Yc]:"Reinhard",[qc]:"Cineon",[jc]:"ACESFilmic",[Jc]:"AgX",[Qc]:"Neutral",[Kc]:"Custom"};function hb(n,e){let t=db[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new B;function pb(){rt.getLuminanceCoefficients(fl);let n=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function mb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $s(n){return n!==""}function qp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(n){return n.replace(yb,vb)}var xb=new Map;function vb(n,e){let t=Je[e];if(t===void 0){let i=xb.get(e);if(i!==void 0)t=Je[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nu(t)}var bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(n){return n.replace(bb,_b)}function _b(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Mb={[Os]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Sb(n){return Mb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wb={[Mi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function Eb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":wb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tb={[Zi]:"ENVMAP_MODE_REFRACTION"};function Ab(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Tb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cb={[wa]:"ENVMAP_BLENDING_MULTIPLY",[dp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function Ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Cb[n.combine]||"ENVMAP_BLENDING_NONE"}function Rb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Pb(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sb(t),c=Eb(t),d=Ab(t),h=Ib(t),u=Rb(t),p=fb(t),y=mb(s),x=r.createProgram(),m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter($s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter($s).join(`
`),f.length>0&&(f+=`
`)):(m=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),f=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ln?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Nu(o),o=qp(o,t),o=jp(o,t),a=Nu(a),a=qp(a,t),a=jp(a,t),o=Kp(o),a=Kp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=T+m+o,_=T+f+a,S=Xp(r,r.VERTEX_SHADER,C),E=Xp(r,r.FRAGMENT_SHADER,_);r.attachShader(x,S),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(k){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(E)||"",H=z.trim(),$=V.trim(),K=N.trim(),se=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,S,E);else{let re=Yp(r,S,"vertex"),oe=Yp(r,E,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+H+`
`+re+`
`+oe)}else H!==""?ze("WebGLProgram: Program Info Log:",H):($===""||K==="")&&(Y=!1);Y&&(k.diagnostics={runnable:se,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(S),r.deleteShader(E),v=new Hr(r,x),M=gb(r,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,ob)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}var Lb=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ku(e),t.set(e,i)),i}},ku=class{constructor(e){this.id=Lb++,this.code=e,this.usedTimes=0}};function Nb(n){return n===Ei||n===Gs||n===Ws}function Db(n,e,t,i,r,s){let o=new Er,a=new Du,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,M,L,k,z,V){let N=k.fog,H=z.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||$,K),Y=se&&se.mapping===Us?se.image.height:null,re=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Fe=oe!==void 0?oe.length:0,Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let mt,et,st,Q;if(re){let _t=Zn[re];mt=_t.vertexShader,et=_t.fragmentShader}else{mt=v.vertexShader,et=v.fragmentShader;let _t=a.getVertexShaderStage(v),lt=a.getFragmentShaderStage(v);a.update(v,_t,lt),st=_t.id,Q=lt.id}let ne=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ge=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,qe=!!v.map,wt=!!v.matcap,Qe=!!se,ot=!!v.aoMap,gt=!!v.lightMap,tt=!!v.bumpMap&&v.wireframe===!1,I=!!v.normalMap,U=!!v.displacementMap,ie=!!v.emissiveMap,j=!!v.metalnessMap,ae=!!v.roughnessMap,A=v.anisotropy>0,Ne=v.clearcoat>0,Me=v.dispersion>0,w=v.retroreflectivity>0,g=v.iridescence>0,F=v.sheen>0,G=v.transmission>0,q=A&&!!v.anisotropyMap,ce=Ne&&!!v.clearcoatMap,de=Ne&&!!v.clearcoatNormalMap,ee=Ne&&!!v.clearcoatRoughnessMap,J=g&&!!v.iridescenceMap,ue=g&&!!v.iridescenceThicknessMap,ke=F&&!!v.sheenColorMap,me=F&&!!v.sheenRoughnessMap,he=!!v.specularMap,Oe=!!v.specularColorMap,Be=!!v.specularIntensityMap,Ye=G&&!!v.transmissionMap,O=G&&!!v.thicknessMap,pe=!!v.gradientMap,te=!!v.alphaMap,fe=v.alphaTest>0,ve=!!v.alphaHash,le=!!v.extensions,Ue=Ln;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=n.toneMapping);let Ie={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:mt,fragmentShader:et,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&z.instanceColor!==null,instancingMorph:Ge&&z.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:wt,envMap:Qe,envMapMode:Qe&&se.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:gt,bumpMap:tt,normalMap:I,displacementMap:U,emissiveMap:ie,normalMapObjectSpace:I&&v.normalMapType===mp,normalMapTangentSpace:I&&v.normalMapType===ul,packedNormalMap:I&&v.normalMapType===ul&&Nb(v.normalMap.format),metalnessMap:j,roughnessMap:ae,anisotropy:A,anisotropyMap:q,clearcoat:Ne,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ee,dispersion:Me,retroreflection:w,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:ue,sheen:F,sheenColorMap:ke,sheenRoughnessMap:me,specularMap:he,specularColorMap:Oe,specularIntensityMap:Be,transmission:G,transmissionMap:Ye,thicknessMap:O,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Or&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:ve,combine:v.combine,mapUv:qe&&y(v.map.channel),aoMapUv:ot&&y(v.aoMap.channel),lightMapUv:gt&&y(v.lightMap.channel),bumpMapUv:tt&&y(v.bumpMap.channel),normalMapUv:I&&y(v.normalMap.channel),displacementMapUv:U&&y(v.displacementMap.channel),emissiveMapUv:ie&&y(v.emissiveMap.channel),metalnessMapUv:j&&y(v.metalnessMap.channel),roughnessMapUv:ae&&y(v.roughnessMap.channel),anisotropyMapUv:q&&y(v.anisotropyMap.channel),clearcoatMapUv:ce&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&y(v.sheenRoughnessMap.channel),specularMapUv:he&&y(v.specularMap.channel),specularColorMapUv:Oe&&y(v.specularColorMap.channel),specularIntensityMapUv:Be&&y(v.specularIntensityMap.channel),transmissionMapUv:Ye&&y(v.transmissionMap.channel),thicknessMapUv:O&&y(v.thicknessMap.channel),alphaMapUv:te&&y(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(I||A),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(qe||te),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&I===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ce,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:ie&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(f(M,v),T(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function f(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function C(v){let M=p[v.type],L;if(M){let k=Zn[M];L=Np.clone(k.uniforms)}else L=v.uniforms;return L}function _(v,M){let L=d.get(M);return L!==void 0?++L.usedTimes:(L=new Pb(n,M,v,r),c.push(L),d.set(M,L)),L}function S(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:C,acquireProgram:_,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function kb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Qp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,y,x,m,f){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:y,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=y,T.materialVariant=o(u),T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=m,T.group=f),e++,T}function l(u,p,y,x,m,f,T){T.reversedDepth===!0&&(m=-m);let C=a(u,p,y,x,m,f);y.transmission>0?i.push(C):y.transparent===!0?r.push(C):t.push(C)}function c(u,p,y,x,m,f){let T=a(u,p,y,x,m,f);y.transmission>0?i.unshift(T):y.transparent===!0?r.unshift(T):t.unshift(T)}function d(u,p){t.length>1&&t.sort(u||Ob),i.length>1&&i.sort(p||Qp),r.length>1&&r.sort(p||Qp)}function h(){for(let u=e,p=n.length;u<p;u++){let y=n[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function Ub(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new ef,n.set(i,[o])):r>=s.length?(o=new ef,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Le};break;case"SpotLight":t={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function zb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Bb=0;function Hb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vb(n){let e=new Fb,t=zb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let r=new B,s=new St,o=new St;function a(c){let d=0,h=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,y=0,x=0,m=0,f=0,T=0,C=0,_=0,S=0,E=0,R=0,v=0,M=0,L=0;c.sort(Hb);for(let z=0,V=c.length;z<V;z++){let N=c[z],H=N.color,$=N.intensity,K=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ei?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=H.r*$,h+=H.g*$,u+=H.b*$;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],$);L++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let re=N.shadow,oe=t.get(N);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),i.sunShadow[y]=oe,i.sunShadowMap[y]=se;let Fe=re.getViewportCount();for(let Ce=0;Ce<Fe;Ce++)i.sunShadowMatrix[x+Ce]=re.getMatrix(Ce),i.sunShadowCascade[x+Ce]=re._cascadeData[Ce];x+=Fe,y++}i.sun[p]=Y,p++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let re=N.shadow,oe=t.get(N);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,i.directionalShadow[m]=oe,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=Y,m++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar($),Y.distance=K,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[T]=Y;let re=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,re.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[T]=re.matrix,N.castShadow){let oe=t.get(N);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,i.spotShadow[T]=oe,i.spotShadowMap[T]=se,R++}T++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(H).multiplyScalar($),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[C]=Y,C++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let re=N.shadow,oe=t.get(N);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,oe.shadowCameraNear=re.camera.near,oe.shadowCameraFar=re.camera.far,i.pointShadow[f]=oe,i.pointShadowMap[f]=se,i.pointShadowMatrix[f]=N.shadow.matrix,E++}i.point[f]=Y,f++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar($),Y.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[_]=Y,_++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let k=i.hash;(k.sunLength!==p||k.directionalLength!==m||k.pointLength!==f||k.spotLength!==T||k.rectAreaLength!==C||k.hemiLength!==_||k.numSunShadows!==y||k.numDirectionalShadows!==S||k.numPointShadows!==E||k.numSpotShadows!==R||k.numSpotMaps!==v||k.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=m,i.spot.length=T,i.rectArea.length=C,i.point.length=f,i.hemi.length=_,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=L,k.sunLength=p,k.directionalLength=m,k.pointLength=f,k.spotLength=T,k.rectAreaLength=C,k.hemiLength=_,k.numSunShadows=y,k.numDirectionalShadows=S,k.numPointShadows=E,k.numSpotShadows=R,k.numSpotMaps=v,k.numLightProbes=L,i.version=Bb++)}function l(c,d){let h=0,u=0,p=0,y=0,x=0,m=0,f=d.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){let _=c[T];if(_.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),h++}else if(_.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(_.isSpotLight){let S=i.spot[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),y++}else if(_.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(_.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function tf(n){let e=new Vb(n),t=[],i=[],r=[];function s(u){h.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Gb(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new tf(n),e.set(r,[a])):s>=o.length?(a=new tf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`,Xb=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],$b=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],nf=new St,Xs=new B,Cu=new B;function Yb(n,e,t){let i=new Cr,r=new Pe,s=new Pe,o=new Ct,a=new la,l=new ca,c={},d=t.maxTextureSize,h={[_i]:sn,[sn]:_i,[Vt]:Vt},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Wb,fragmentShader:Zb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let y=new Rt;y.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(y,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let f=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Xh&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let M=n.getRenderTarget(),L=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Gn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=f!==this.type;V&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=E.length;N<H;N++){let $=E[N],K=$.shadow;if(K===void 0){ze("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let se=K.getFrameExtents();r.multiply(se),s.copy(K.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/se.x),r.x=s.x*se.x,K.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/se.y),r.y=s.y*se.y,K.mapSize.y=s.y));let Y=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===kr){if($.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new cn(r.x,r.y,{format:Ei,type:kn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new yi(r.x,r.y,Dn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Hn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bt,K.map.depthTexture.magFilter=Bt}else $.isPointLight?(K.map=new gl(r.x),K.map.depthTexture=new oa(r.x,Nn)):(K.map=new cn(r.x,r.y),K.map.depthTexture=new yi(r.x,r.y,Nn)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Hn,this.type===Os?(K.map.depthTexture.compareFunction=Y?hl:dl,K.map.depthTexture.minFilter=Zt,K.map.depthTexture.magFilter=Zt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bt,K.map.depthTexture.magFilter=Bt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);let re=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,v);for(let oe=0;oe<re;oe++){let Fe=K.getCamera(oe);if($.isPointLight){let Ce=K.camera,mt=K.matrix,et=$.distance||Ce.far;et!==Ce.far&&(Ce.far=et,Ce.updateProjectionMatrix()),Xs.setFromMatrixPosition($.matrixWorld),Ce.position.copy(Xs),Cu.copy(Ce.position),Cu.add(Xb[oe]),Ce.up.copy($b[oe]),Ce.lookAt(Cu),Ce.updateMatrixWorld(),mt.makeTranslation(-Xs.x,-Xs.y,-Xs.z),nf.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),K._frustum.setFromProjectionMatrix(nf,Ce.coordinateSystem,Ce.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(K.map),n.clear());let Ce=K.getViewport(oe);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),z.viewport(o)}i=K.getFrustum(oe),_(R,v,Fe,$,this.type)}K.isPointLightShadow!==!0&&this.type===kr&&T(K,v),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,L,k)};function T(E,R){let v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new cn(r.x,r.y,{format:Ei,type:kn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,v,p,x,null)}function C(E,R,v,M){let L=null,k=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)L=k;else if(L=v.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=L.uuid,V=R.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let H=N[V];H===void 0&&(H=L.clone(),N[V]=H,R.addEventListener("dispose",S)),L=H}if(L.visible=R.visible,L.wireframe=R.wireframe,M===kr?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:h[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=n.properties.get(L);z.light=v}return L}function _(E,R,v,M,L){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===kr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let V=e.update(E),N=E.material;if(Array.isArray(N)){let H=V.groups;for(let $=0,K=H.length;$<K;$++){let se=H[$],Y=N[se.materialIndex];if(Y&&Y.visible){let re=C(E,Y,M,L);E.onBeforeShadow(n,E,R,v,V,re,se),n.renderBufferDirect(v,null,V,re,E,se),E.onAfterShadow(n,E,R,v,V,re,se)}}}else if(N.visible){let H=C(E,N,M,L);E.onBeforeShadow(n,E,R,v,V,H,null),n.renderBufferDirect(v,null,V,H,E,null),E.onAfterShadow(n,E,R,v,V,H,null)}}let z=E.children;for(let V=0,N=z.length;V<N;V++)_(z[V],R,v,M,L)}function S(E){E.target.removeEventListener("dispose",S);for(let v in c){let M=c[v],L=E.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function qb(n,e){function t(){let O=!1,pe=new Ct,te=null,fe=new Ct(0,0,0,0);return{setMask:function(ve){te!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){O=ve},setClear:function(ve,le,Ue,Ie,_t){_t===!0&&(ve*=Ie,le*=Ie,Ue*=Ie),pe.set(ve,le,Ue,Ie),fe.equals(pe)===!1&&(n.clearColor(ve,le,Ue,Ie),fe.copy(pe))},reset:function(){O=!1,te=null,fe.set(-1,0,0,0)}}}function i(){let O=!1,pe=!1,te=null,fe=null,ve=null;return{setReversed:function(le){if(pe!==le){let Ue=e.get("EXT_clip_control");le?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=le;let Ie=ve;ve=null,this.setClear(Ie)}},getReversed:function(){return pe},setTest:function(le){le?ne(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(le){te!==le&&!O&&(n.depthMask(le),te=le)},setFunc:function(le){if(pe&&(le=Tp[le]),fe!==le){switch(le){case Go:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=le}},setLocked:function(le){O=le},setClear:function(le){ve!==le&&(ve=le,pe&&(le=1-le),n.clearDepth(le))},reset:function(){O=!1,te=null,fe=null,ve=null,pe=!1}}}function r(){let O=!1,pe=null,te=null,fe=null,ve=null,le=null,Ue=null,Ie=null,_t=null;return{setTest:function(lt){O||(lt?ne(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!O&&(n.stencilMask(lt),pe=lt)},setFunc:function(lt,Mn,On){(te!==lt||fe!==Mn||ve!==On)&&(n.stencilFunc(lt,Mn,On),te=lt,fe=Mn,ve=On)},setOp:function(lt,Mn,On){(le!==lt||Ue!==Mn||Ie!==On)&&(n.stencilOp(lt,Mn,On),le=lt,Ue=Mn,Ie=On)},setLocked:function(lt){O=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){O=!1,pe=null,te=null,fe=null,ve=null,le=null,Ue=null,Ie=null,_t=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,d={},h={},u={},p=new WeakMap,y=[],x=null,m=!1,f=null,T=null,C=null,_=null,S=null,E=null,R=null,v=new Le(0,0,0),M=0,L=!1,k=null,z=null,V=null,N=null,H=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,se=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=se>=2);let re=null,oe={},Fe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),mt=new Ct().fromArray(Fe),et=new Ct().fromArray(Ce);function st(O,pe,te,fe){let ve=new Uint8Array(4),le=n.createTexture();n.bindTexture(O,le),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<te;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(pe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return le}let Q={};Q[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(vr),tt(!1),I(Hc),ne(n.CULL_FACE),ot(Gn);function ne(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function we(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Ge(O,pe){return u[O]!==pe?(n.bindFramebuffer(O,pe),u[O]=pe,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(O,pe){let te=y,fe=!1;if(O){te=p.get(pe),te===void 0&&(te=[],p.set(pe,te));let ve=O.textures;if(te.length!==ve.length||te[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ue=ve.length;le<Ue;le++)te[le]=n.COLOR_ATTACHMENT0+le;te.length=ve.length,fe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,fe=!0);fe&&n.drawBuffers(te)}function qe(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let wt={[Wi]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};wt[jh]=n.MIN,wt[Kh]=n.MAX;let Qe={[Jh]:n.ZERO,[Qh]:n.ONE,[ep]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[op]:n.SRC_ALPHA_SATURATE,[rp]:n.DST_COLOR,[np]:n.DST_ALPHA,[tp]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[sp]:n.ONE_MINUS_DST_COLOR,[ip]:n.ONE_MINUS_DST_ALPHA,[ap]:n.CONSTANT_COLOR,[lp]:n.ONE_MINUS_CONSTANT_COLOR,[cp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(O,pe,te,fe,ve,le,Ue,Ie,_t,lt){if(O===Gn){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),O!==$h){if(O!==f||lt!==L){if((T!==Wi||S!==Wi)&&(n.blendEquation(n.FUNC_ADD),T=Wi,S=Wi),lt)switch(O){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",O);break}else switch(O){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",O);break}C=null,_=null,E=null,R=null,v.set(0,0,0),M=0,f=O,L=lt}return}ve=ve||pe,le=le||te,Ue=Ue||fe,(pe!==T||ve!==S)&&(n.blendEquationSeparate(wt[pe],wt[ve]),T=pe,S=ve),(te!==C||fe!==_||le!==E||Ue!==R)&&(n.blendFuncSeparate(Qe[te],Qe[fe],Qe[le],Qe[Ue]),C=te,_=fe,E=le,R=Ue),(Ie.equals(v)===!1||_t!==M)&&(n.blendColor(Ie.r,Ie.g,Ie.b,_t),v.copy(Ie),M=_t),f=O,L=!1}function gt(O,pe){O.side===Vt?we(n.CULL_FACE):ne(n.CULL_FACE);let te=O.side===sn;pe&&(te=!te),tt(te),O.blending===Or&&O.transparent===!1?ot(Gn):ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let fe=O.stencilWrite;a.setTest(fe),fe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){k!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),k=O)}function I(O){O!==Wh?(ne(n.CULL_FACE),O!==z&&(O===Hc?n.cullFace(n.BACK):O===Zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),z=O}function U(O){O!==V&&(K&&n.lineWidth(O),V=O)}function ie(O,pe,te){O?(ne(n.POLYGON_OFFSET_FILL),(N!==pe||H!==te)&&(N=pe,H=te,o.getReversed()&&(pe=-pe),n.polygonOffset(pe,te))):we(n.POLYGON_OFFSET_FILL)}function j(O){O?ne(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ae(O){O===void 0&&(O=n.TEXTURE0+$-1),re!==O&&(n.activeTexture(O),re=O)}function A(O,pe,te){te===void 0&&(re===null?te=n.TEXTURE0+$-1:te=re);let fe=oe[te];fe===void 0&&(fe={type:void 0,texture:void 0},oe[te]=fe),(fe.type!==O||fe.texture!==pe)&&(re!==te&&(n.activeTexture(te),re=te),n.bindTexture(O,pe||Q[O]),fe.type=O,fe.texture=pe)}function Ne(){let O=oe[re];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Me(){try{n.compressedTexImage2D(...arguments)}catch(O){He("WebGLState:",O)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(O){He("WebGLState:",O)}}function g(){try{n.texSubImage2D(...arguments)}catch(O){He("WebGLState:",O)}}function F(){try{n.texSubImage3D(...arguments)}catch(O){He("WebGLState:",O)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(O){He("WebGLState:",O)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(O){He("WebGLState:",O)}}function ce(){try{n.texStorage2D(...arguments)}catch(O){He("WebGLState:",O)}}function de(){try{n.texStorage3D(...arguments)}catch(O){He("WebGLState:",O)}}function ee(){try{n.texImage2D(...arguments)}catch(O){He("WebGLState:",O)}}function J(){try{n.texImage3D(...arguments)}catch(O){He("WebGLState:",O)}}function ue(O){return h[O]!==void 0?h[O]:n.getParameter(O)}function ke(O,pe){h[O]!==pe&&(n.pixelStorei(O,pe),h[O]=pe)}function me(O){mt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),mt.copy(O))}function he(O){et.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Oe(O,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let fe=te.get(O);fe===void 0&&(fe=n.getUniformBlockIndex(pe,O.name),te.set(O,fe))}function Be(O,pe){let fe=c.get(pe).get(O);l.get(pe)!==fe&&(n.uniformBlockBinding(pe,fe,O.__bindingPointIndex),l.set(pe,fe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},re=null,oe={},u={},p=new WeakMap,y=[],x=null,m=!1,f=null,T=null,C=null,_=null,S=null,E=null,R=null,v=new Le(0,0,0),M=0,L=!1,k=null,z=null,V=null,N=null,H=null,mt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:we,bindFramebuffer:Ge,drawBuffers:be,useProgram:qe,setBlending:ot,setMaterial:gt,setFlipSided:tt,setCullFace:I,setLineWidth:U,setPolygonOffset:ie,setScissorTest:j,activeTexture:ae,bindTexture:A,unbindTexture:Ne,compressedTexImage2D:Me,compressedTexImage3D:w,texImage2D:ee,texImage3D:J,pixelStorei:ke,getParameter:ue,updateUBOMapping:Oe,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:de,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:me,viewport:he,reset:Ye}}function jb(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,d=new WeakMap,h=new Set,u,p=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,g){return y?new OffscreenCanvas(w,g):ps("canvas")}function m(w,g,F){let G=1,q=Me(w);if((q.width>F||q.height>F)&&(G=F/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ce=Math.floor(G*q.width),de=Math.floor(G*q.height);u===void 0&&(u=x(ce,de));let ee=g?x(ce,de):u;return ee.width=ce,ee.height=de,ee.getContext("2d").drawImage(w,0,0,ce,de),ze("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ce+"x"+de+")."),ee}else return"data"in w&&ze("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function f(w){return w.generateMipmaps}function T(w){n.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,g,F,G,q,ce=!1){if(w!==null){if(n[w]!==void 0)return n[w];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;G&&(de=e.get("EXT_texture_norm16"),de||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=g;if(g===n.RED&&(F===n.FLOAT&&(ee=n.R32F),F===n.HALF_FLOAT&&(ee=n.R16F),F===n.UNSIGNED_BYTE&&(ee=n.R8),F===n.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),F===n.SHORT&&de&&(ee=de.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.R8UI),F===n.UNSIGNED_SHORT&&(ee=n.R16UI),F===n.UNSIGNED_INT&&(ee=n.R32UI),F===n.BYTE&&(ee=n.R8I),F===n.SHORT&&(ee=n.R16I),F===n.INT&&(ee=n.R32I)),g===n.RG&&(F===n.FLOAT&&(ee=n.RG32F),F===n.HALF_FLOAT&&(ee=n.RG16F),F===n.UNSIGNED_BYTE&&(ee=n.RG8),F===n.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),F===n.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RG8UI),F===n.UNSIGNED_SHORT&&(ee=n.RG16UI),F===n.UNSIGNED_INT&&(ee=n.RG32UI),F===n.BYTE&&(ee=n.RG8I),F===n.SHORT&&(ee=n.RG16I),F===n.INT&&(ee=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),F===n.UNSIGNED_INT&&(ee=n.RGB32UI),F===n.BYTE&&(ee=n.RGB8I),F===n.SHORT&&(ee=n.RGB16I),F===n.INT&&(ee=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),F===n.UNSIGNED_INT&&(ee=n.RGBA32UI),F===n.BYTE&&(ee=n.RGBA8I),F===n.SHORT&&(ee=n.RGBA16I),F===n.INT&&(ee=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),F===n.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),g===n.RGBA){let J=ce?hs:rt.getTransfer(q);F===n.FLOAT&&(ee=n.RGBA32F),F===n.HALF_FLOAT&&(ee=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ee=J===ut?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),F===n.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(w,g){let F;return w?g===null||g===Nn||g===Fr?F=n.DEPTH24_STENCIL8:g===Dn?F=n.DEPTH32F_STENCIL8:g===Ur&&(F=n.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Nn||g===Fr?F=n.DEPTH_COMPONENT24:g===Dn?F=n.DEPTH_COMPONENT32F:g===Ur&&(F=n.DEPTH_COMPONENT16),F}function E(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){let g=w.target;g.removeEventListener("dispose",R),M(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&h.delete(g)}function v(w){let g=w.target;g.removeEventListener("dispose",v),k(g)}function M(w){let g=i.get(w);if(g.__webglInit===void 0)return;let F=w.source,G=p.get(F);if(G){let q=G[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(w),Object.keys(G).length===0&&p.delete(F)}i.remove(w)}function L(w){let g=i.get(w);n.deleteTexture(g.__webglTexture);let F=w.source,G=p.get(F);delete G[g.__cacheKey],o.memory.textures--}function k(w){let g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let q=0;q<g.__webglFramebuffer[G].length;q++)n.deleteFramebuffer(g.__webglFramebuffer[G][q]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=w.textures;for(let G=0,q=F.length;G<q;G++){let ce=i.get(F[G]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(w)}let z=0;function V(){z=0}function N(){return z}function H(w){z=w}function $(){let w=z;return w>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,w}function K(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function se(w,g){let F=i.get(w);if(w.isVideoTexture&&A(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let G=w.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function Y(w,g){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){we(F,w,g);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function re(w,g){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){we(F,w,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function oe(w,g){let F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ge(F,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}let Fe={[br]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},Ce={[Bt]:n.NEAREST,[pp]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},mt={[yp]:n.NEVER,[Mp]:n.ALWAYS,[xp]:n.LESS,[dl]:n.LEQUAL,[vp]:n.EQUAL,[hl]:n.GEQUAL,[bp]:n.GREATER,[_p]:n.NOTEQUAL};function et(w,g){if(g.type===Dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Zt||g.magFilter===Aa||g.magFilter===Fs||g.magFilter===Si||g.minFilter===Zt||g.minFilter===Aa||g.minFilter===Fs||g.minFilter===Si)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Fe[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Fe[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Fe[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ce[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ce[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,mt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Fs&&g.minFilter!==Si||g.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function st(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));let G=g.source,q=p.get(G);q===void 0&&(q={},p.set(G,q));let ce=K(g);if(ce!==w.__cacheKey){q[ce]===void 0&&(q[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),q[ce].usedTimes++;let de=q[w.__cacheKey];de!==void 0&&(q[w.__cacheKey].usedTimes--,de.usedTimes===0&&L(g)),w.__cacheKey=ce,w.__webglTexture=q[ce].texture}return F}function Q(w,g,F){return Math.floor(Math.floor(w/F)/g)}function ne(w,g,F,G){let ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{ce.sort((ke,me)=>ke.start-me.start);let de=0;for(let ke=1;ke<ce.length;ke++){let me=ce[de],he=ce[ke],Oe=me.start+me.count,Be=Q(he.start,g.width,4),Ye=Q(me.start,g.width,4);he.start<=Oe+1&&Be===Ye&&Q(he.start+he.count-1,g.width,4)===Be?me.count=Math.max(me.count,he.start+he.count-me.start):(++de,ce[de]=he)}ce.length=de+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ke=0,me=ce.length;ke<me;ke++){let he=ce[ke],Oe=Math.floor(he.start/4),Be=Math.ceil(he.count/4),Ye=Oe%g.width,O=Math.floor(Oe/g.width),pe=Be,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ye,O,pe,te,F,G,g.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function we(w,g,F){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);let q=st(w,g),ce=g.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);let de=i.get(ce);if(ce.version!==de.__version||q===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let te=rt.getPrimaries(rt.workingColorSpace),fe=g.colorSpace===ii?null:rt.getPrimaries(g.colorSpace),ve=g.colorSpace===ii||te===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,r.maxTextureSize);J=Ne(g,J);let ue=s.convert(g.format,g.colorSpace),ke=s.convert(g.type),me=_(g.internalFormat,ue,ke,g.normalized,g.colorSpace,g.isVideoTexture);et(G,g);let he,Oe=g.mipmaps,Be=g.isVideoTexture!==!0,Ye=de.__version===void 0||q===!0,O=ce.dataReady,pe=E(g,J);if(g.isDepthTexture)me=S(g.format===wi,g.type),Ye&&(Be?t.texStorage2D(n.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,ue,ke,null));else if(g.isDataTexture)if(Oe.length>0){Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,pe,me,Oe[0].width,Oe[0].height);for(let te=0,fe=Oe.length;te<fe;te++)he=Oe[te],Be?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,ue,ke,he.data):t.texImage2D(n.TEXTURE_2D,te,me,he.width,he.height,0,ue,ke,he.data);g.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(n.TEXTURE_2D,pe,me,J.width,J.height),O&&ne(g,J,ue,ke)):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,ue,ke,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,me,Oe[0].width,Oe[0].height,J.depth);for(let te=0,fe=Oe.length;te<fe;te++)if(he=Oe[te],g.format!==_n)if(ue!==null)if(Be){if(O)if(g.layerUpdates.size>0){let ve=yu(he.width,he.height,g.format,g.type);for(let le of g.layerUpdates){let Ue=he.data.subarray(le*ve/he.data.BYTES_PER_ELEMENT,(le+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,le,he.width,he.height,1,ue,Ue)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,J.depth,ue,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,me,he.width,he.height,J.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,J.depth,ue,ke,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,me,he.width,he.height,J.depth,0,ue,ke,he.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,pe,me,Oe[0].width,Oe[0].height);for(let te=0,fe=Oe.length;te<fe;te++)he=Oe[te],g.format!==_n?ue!==null?Be?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(n.TEXTURE_2D,te,me,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,ue,ke,he.data):t.texImage2D(n.TEXTURE_2D,te,me,he.width,he.height,0,ue,ke,he.data)}else if(g.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,me,J.width,J.height,J.depth),O)if(g.layerUpdates.size>0){let te=yu(J.width,J.height,g.format,g.type);for(let fe of g.layerUpdates){let ve=J.data.subarray(fe*te/J.data.BYTES_PER_ELEMENT,(fe+1)*te/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ue,ke,ve)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,ke,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,ue,ke,J.data);else if(g.isData3DTexture)Be?(Ye&&t.texStorage3D(n.TEXTURE_3D,pe,me,J.width,J.height,J.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,ke,J.data)):t.texImage3D(n.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,ue,ke,J.data);else if(g.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(n.TEXTURE_2D,pe,me,J.width,J.height);else{let te=J.width,fe=J.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,me,te,fe,0,ue,ke,null),te>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),J.parentNode!==te){te.appendChild(J),h.add(g),te.onpaint=fe=>{let ve=fe.changedElements;for(let le of h)ve.includes(le.image)&&(le.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let ve=n.RGBA,le=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,le,Ue,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Be&&Ye){let te=Me(Oe[0]);t.texStorage2D(n.TEXTURE_2D,pe,me,te.width,te.height)}for(let te=0,fe=Oe.length;te<fe;te++)he=Oe[te],Be?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue,ke,he):t.texImage2D(n.TEXTURE_2D,te,me,ue,ke,he);g.generateMipmaps=!1}else if(Be){if(Ye){let te=Me(J);t.texStorage2D(n.TEXTURE_2D,pe,me,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,ke,J)}else t.texImage2D(n.TEXTURE_2D,0,me,ue,ke,J);f(g)&&T(G),de.__version=ce.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ge(w,g,F){if(g.image.length!==6)return;let G=st(w,g),q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let ce=i.get(q);if(q.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let de=rt.getPrimaries(rt.workingColorSpace),ee=g.colorSpace===ii?null:rt.getPrimaries(g.colorSpace),J=g.colorSpace===ii||de===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ue=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,me=[];for(let le=0;le<6;le++)!ue&&!ke?me[le]=m(g.image[le],!0,r.maxCubemapSize):me[le]=ke?g.image[le].image:g.image[le],me[le]=Ne(g,me[le]);let he=me[0],Oe=s.convert(g.format,g.colorSpace),Be=s.convert(g.type),Ye=_(g.internalFormat,Oe,Be,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,pe=ce.__version===void 0||G===!0,te=q.dataReady,fe=E(g,he);et(n.TEXTURE_CUBE_MAP,g);let ve;if(ue){O&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,he.width,he.height);for(let le=0;le<6;le++){ve=me[le].mipmaps;for(let Ue=0;Ue<ve.length;Ue++){let Ie=ve[Ue];g.format!==_n?Oe!==null?O?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Ie.width,Ie.height,Oe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,Ye,Ie.width,Ie.height,0,Ie.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Ie.width,Ie.height,Oe,Be,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,Ye,Ie.width,Ie.height,0,Oe,Be,Ie.data)}}}else{if(ve=g.mipmaps,O&&pe){ve.length>0&&fe++;let le=Me(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,le.width,le.height)}for(let le=0;le<6;le++)if(ke){O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,me[le].width,me[le].height,Oe,Be,me[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ye,me[le].width,me[le].height,0,Oe,Be,me[le].data);for(let Ue=0;Ue<ve.length;Ue++){let _t=ve[Ue].image[le].image;O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,_t.width,_t.height,Oe,Be,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,Ye,_t.width,_t.height,0,Oe,Be,_t.data)}}else{O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Be,me[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ye,Oe,Be,me[le]);for(let Ue=0;Ue<ve.length;Ue++){let Ie=ve[Ue];O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,Oe,Be,Ie.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,Ye,Oe,Be,Ie.image[le])}}}f(g)&&T(n.TEXTURE_CUBE_MAP),ce.__version=q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function be(w,g,F,G,q,ce){let de=s.convert(F.format,F.colorSpace),ee=s.convert(F.type),J=_(F.internalFormat,de,ee,F.normalized,F.colorSpace),ue=i.get(g),ke=i.get(F);if(ke.__renderTarget=g,!ue.__hasExternalTextures){let me=Math.max(1,g.width>>ce),he=Math.max(1,g.height>>ce);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,ce,J,me,he,g.depth,0,de,ee,null):t.texImage2D(q,ce,J,me,he,0,de,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,q,ke.__webglTexture,0,j(g)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,q,ke.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(w,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){let G=g.depthTexture,q=G&&G.isDepthTexture?G.type:null,ce=S(g.stencilBuffer,q),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(g),ce,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(g),ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ce,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,w)}else{let G=g.textures;for(let q=0;q<G.length;q++){let ce=G[q],de=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),J=_(ce.internalFormat,de,ee,ce.normalized,ce.colorSpace);ae(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(g),J,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(g),J,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,J,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(w,g,F){let G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),et(n.TEXTURE_CUBE_MAP,g.depthTexture);let ue=s.convert(g.depthTexture.format),ke=s.convert(g.depthTexture.type),me;g.depthTexture.format===Hn?me=n.DEPTH_COMPONENT24:g.depthTexture.format===wi&&(me=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,me,g.width,g.height,0,ue,ke,null)}}else se(g.depthTexture,0);let ce=q.__webglTexture,de=j(g),ee=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,J=g.depthTexture.format===wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Hn)ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,ce,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,ce,0);else if(g.depthTexture.format===wi)ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,ce,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(w){let g=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let G=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=G}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)wt(g.__webglFramebuffer[G],w,G);else{let G=w.texture.mipmaps;G&&G.length>0?wt(g.__webglFramebuffer[0],w,0):wt(g.__webglFramebuffer,w,0)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),qe(g.__webglDepthbuffer[G],w,!1);else{let q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ce)}}else{let G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),qe(g.__webglDepthbuffer,w,!1);else{let q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,g,F){let G=i.get(w);g!==void 0&&be(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Qe(w)}function gt(w){let g=w.texture,F=i.get(w),G=i.get(g);w.addEventListener("dispose",v);let q=w.textures,ce=w.isWebGLCubeRenderTarget===!0,de=q.length>1;if(de||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,o.memory.textures++),ce){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[ee][J]=n.createFramebuffer()}else F.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<g.mipmaps.length;ee++)F.__webglFramebuffer[ee]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(de)for(let ee=0,J=q.length;ee<J;ee++){let ue=i.get(q[ee]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ae(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){let J=q[ee];F.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);let ue=s.convert(J.format,J.colorSpace),ke=s.convert(J.type),me=_(J.internalFormat,ue,ke,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),he=j(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),et(n.TEXTURE_CUBE_MAP,g);for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(F.__webglFramebuffer[ee][J],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,J);else be(F.__webglFramebuffer[ee],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,J=q.length;ee<J;ee++){let ue=q[ee],ke=i.get(ue),me=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ke.__webglTexture),et(me,ue),be(F.__webglFramebuffer,w,ue,n.COLOR_ATTACHMENT0+ee,me,0),f(ue)&&T(me)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),et(ee,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(F.__webglFramebuffer[J],w,g,n.COLOR_ATTACHMENT0,ee,J);else be(F.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,ee,0);f(g)&&T(ee),t.unbindTexture()}w.depthBuffer&&Qe(w)}function tt(w){let g=w.textures;for(let F=0,G=g.length;F<G;F++){let q=g[F];if(f(q)){let ce=C(w),de=i.get(q).__webglTexture;t.bindTexture(ce,de),T(ce),t.unbindTexture()}}}let I=[],U=[];function ie(w){if(w.samples>0){if(ae(w)===!1){let g=w.textures,F=w.width,G=w.height,q=n.COLOR_BUFFER_BIT,ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),ee=g.length>1;if(ee)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let J=w.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let ke=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,q,n.NEAREST),l===!0&&(I.length=0,U.length=0,I.push(n.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(I.push(ce),U.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let ke=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function j(w){return Math.min(r.maxSamples,w.samples)}function ae(w){let g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function A(w){let g=o.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function Ne(w,g){let F=w.colorSpace,G=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ds&&F!==ii&&(rt.getTransfer(F)===ut?(G!==_n||q!==un)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",F)),g}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=se,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kb(n,e){function t(i,r=ii){let s,o=rt.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===Ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ru)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tu)return n.BYTE;if(i===nu)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===Nn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===ou)return n.RGB;if(i===_n)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===au)return n.RED;if(i===Pa)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Na)return n.RGBA_INTEGER;if(i===zs||i===Bs||i===Hs||i===Vs)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Da||i===ka||i===Oa||i===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===za||i===Ba||i===Ha||i===Va||i===Gs||i===Ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fa||i===za)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ba)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ha)return s.COMPRESSED_R11_EAC;if(i===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return s.COMPRESSED_RG11_EAC;if(i===Ga)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wa||i===Za||i===Xa||i===$a||i===Ya||i===qa||i===ja||i===Ka||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===sl||i===ol)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ll||i===Ws||i===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ws)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
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

}`,Ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:Jb,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends In{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,y=null,x=typeof XRWebGLBinding<"u",m=new Ou,f={},T=t.getContextAttributes(),C=null,_=null,S=[],E=[],R=new Pe,v=null,M=null,L=new Jt;L.viewport=new Ct;let k=new Jt;k.viewport=new Ct;let z=[L,k],V=new Ma,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=S[Q];return ne===void 0&&(ne=new Tr,S[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=S[Q];return ne===void 0&&(ne=new Tr,S[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=S[Q];return ne===void 0&&(ne=new Tr,S[Q]=ne),ne.getHandSpace()};function $(Q){let ne=E.indexOf(Q.inputSource);if(ne===-1)return;let we=S[ne];we!==void 0&&(we.update(Q.inputSource,Q.frame,c||o),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",se);for(let Q=0;Q<S.length;Q++){let ne=E[Q];ne!==null&&(E[Q]=null,S[Q].disconnect(ne))}N=null,H=null,m.reset();for(let Q in f)delete f[Q];if(e.setRenderTarget(C),p=null,u=null,h=null,r=null,_=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),M!==null){let Q=M.camera;Q.fov=M.fov,Q.zoom=M.zoom,Q.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",K),r.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,be=null;T.depth&&(be=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=T.stencil?wi:Hn,Ge=T.stencil?Fr:Nn);let qe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(qe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new cn(u.textureWidth,u.textureHeight,{format:_n,type:un,depthTexture:new yi(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new cn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Q){for(let ne=0;ne<Q.removed.length;ne++){let we=Q.removed[ne],Ge=E.indexOf(we);Ge>=0&&(E[Ge]=null,S[Ge].disconnect(we))}for(let ne=0;ne<Q.added.length;ne++){let we=Q.added[ne],Ge=E.indexOf(we);if(Ge===-1){for(let qe=0;qe<S.length;qe++)if(qe>=E.length){E.push(we),Ge=qe;break}else if(E[qe]===null){E[qe]=we,Ge=qe;break}if(Ge===-1)break}let be=S[Ge];be&&be.connect(we)}}let Y=new B,re=new B;function oe(Q,ne,we){Y.setFromMatrixPosition(ne.matrixWorld),re.setFromMatrixPosition(we.matrixWorld);let Ge=Y.distanceTo(re),be=ne.projectionMatrix.elements,qe=we.projectionMatrix.elements,wt=be[14]/(be[10]-1),Qe=be[14]/(be[10]+1),ot=(be[9]+1)/be[5],gt=(be[9]-1)/be[5],tt=(be[8]-1)/be[0],I=(qe[8]+1)/qe[0],U=wt*tt,ie=wt*I,j=Ge/(-tt+I),ae=j*-tt;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(j),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let A=wt+j,Ne=Qe+j,Me=U-ae,w=ie+(Ge-ae),g=ot*Qe/Ne*A,F=gt*Qe/Ne*A;Q.projectionMatrix.makePerspective(Me,w,g,F,A,Ne),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Fe(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,we=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(we=m.depthFar)),V.near=k.near=L.near=ne,V.far=k.far=L.far=we,(N!==V.near||H!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,H=V.far),V.layers.mask=Q.layers.mask|6,L.layers.mask=V.layers.mask&-5,k.layers.mask=V.layers.mask&-3;let Ge=Q.parent,be=V.cameras;Fe(V,Ge);for(let qe=0;qe<be.length;qe++)Fe(be[qe],Ge);be.length===2?oe(V,L,k):V.projectionMatrix.copy(L.projectionMatrix),M===null&&Q.isPerspectiveCamera&&(M={camera:Q,fov:Q.fov,zoom:Q.zoom}),Ce(Q,V,Ge)};function Ce(Q,ne,we){we===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return f[Q]};let mt=null;function et(Q,ne){if(d=ne.getViewerPose(c||o),y=ne,d!==null){let we=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ge=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Ge=!0);for(let Qe=0;Qe<we.length;Qe++){let ot=we[Qe],gt=null;if(p!==null)gt=p.getViewport(ot);else{let I=h.getViewSubImage(u,ot);gt=I.viewport,Qe===0&&(e.setRenderTargetTextures(_,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(_))}let tt=z[Qe];tt===void 0&&(tt=new Jt,tt.layers.enable(Qe),tt.viewport=new Ct,z[Qe]=tt),tt.matrix.fromArray(ot.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ot.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(gt.x,gt.y,gt.width,gt.height),Qe===0&&(V.matrix.copy(tt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ge===!0&&V.cameras.push(tt)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Qe=h.getDepthInformation(we[0]);Qe&&Qe.isValid&&Qe.texture&&m.init(Qe,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Qe=0;Qe<we.length;Qe++){let ot=we[Qe].camera;if(ot){let gt=f[ot];gt||(gt=new ws,f[ot]=gt);let tt=h.getCameraImage(ot);gt.sourceTexture=tt}}}}for(let we=0;we<S.length;we++){let Ge=E[we],be=S[we];Ge!==null&&be!==void 0&&be.update(Ge,ne,c||o)}mt&&mt(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),y=null}let st=new rf;st.setAnimationLoop(et),this.setAnimationLoop=function(Q){mt=Q},this.dispose=function(){}}},e_=new St,uf=new Xe;uf.set(-1,0,0,0,1,0,0,0,1);function t_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,fu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,C,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=e.get(f),C=T.envMap,_=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function n_(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let E=S.program;i.uniformBlockBinding(_,E)}function c(_,S){let E=r[_.id];E===void 0&&(m(_),E=d(_),r[_.id]=E,_.addEventListener("dispose",T));let R=S.program;i.updateUBOMapping(_,R);let v=e.render.frame;s[_.id]!==v&&(u(_),s[_.id]=v)}function d(_){let S=h();_.__bindingPointIndex=S;let E=n.createBuffer(),R=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=r[_.id],E=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,M=E.length;v<M;v++){let L=E[v];if(Array.isArray(L))for(let k=0,z=L.length;k<z;k++)p(L[k],v,k,R);else p(L,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,S,E,R){if(x(_,S,E,R)===!0){let v=_.__offset,M=_.value;if(Array.isArray(M)){let L=0;for(let k=0;k<M.length;k++){let z=M[k],V=f(z);y(z,_.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(M,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function y(_,S,E){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,E)}function x(_,S,E,R){let v=_.value,M=S+"_"+E;if(R[M]===void 0)return typeof v=="number"||typeof v=="boolean"?R[M]=v:ArrayBuffer.isView(v)?R[M]=v.slice():R[M]=v.clone(),!0;{let L=R[M];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(_){let S=_.uniforms,E=0,R=16;for(let M=0,L=S.length;M<L;M++){let k=Array.isArray(S[M])?S[M]:[S[M]];for(let z=0,V=k.length;z<V;z++){let N=k[z],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,K=H.length;$<K;$++){let se=H[$],Y=f(se),re=E%R,oe=re%Y.boundary,Fe=re+oe;E+=oe,Fe!==0&&R-Fe<Y.storage&&(E+=R-Fe),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=Y.storage}}}let v=E%R;return v>0&&(E+=R-v),_.__size=E,_.__cache={},this}function f(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",_),S}function T(_){let S=_.target;S.removeEventListener("dispose",T);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function C(){for(let _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:C}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function r_(){return Wn===null&&(Wn=new na(i_,16,16,Ei,kn),Wn.name="DFG_LUT",Wn.minFilter=Zt,Wn.magFilter=Zt,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var yl=class{constructor(e={}){let{canvas:t=Sp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=un}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;let x=p,m=new Set([Na,La,Pa]),f=new Set([un,Nn,Ur,Fr,Ia,Ra]),T=new Uint32Array(4),C=new Int32Array(4),_=new B,S=null,E=null,R=[],v=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1,z=null,V=null,N=null,H=null;this._outputColorSpace=nn;let $=0,K=0,se=null,Y=-1,re=null,oe=new Ct,Fe=new Ct,Ce=null,mt=new Le(0),et=0,st=t.width,Q=t.height,ne=1,we=null,Ge=null,be=new Ct(0,0,st,Q),qe=new Ct(0,0,st,Q),wt=!1,Qe=new Cr,ot=!1,gt=!1,tt=new St,I=new B,U=new Ct,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function ae(){return se===null?ne:1}let A=i;function Ne(b,D){return t.getContext(b,D)}let Me,w,g,F,G,q,ce,de,ee,J,ue,ke,me,he,Oe,Be,Ye,O,pe,te,fe,ve,le;try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),A===null){let D="webgl2";if(A=Ne(D,b),A===null)throw Ne(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(b){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),He("WebGLRenderer: "+b.message),b}function Ue(){Me=new dv(A),Me.init(),fe=new Kb(A,Me),w=new tv(A,Me,e,fe),g=new qb(A,Me),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=A.createFramebuffer(),N=A.createFramebuffer(),H=A.createFramebuffer(),F=new fv(A),G=new kb,q=new jb(A,Me,g,G,w,fe,F),ce=new uv(L),de=new gy(A),ve=new Qx(A,de),ee=new hv(A,de,F,ve),J=new gv(A,ee,de,ve,F),O=new mv(A,w,q),Oe=new nv(G),ue=new Db(L,ce,Me,w,ve,Oe),ke=new t_(L,G),me=new Ub,he=new Gb(Me),Ye=new Jx(L,ce,g,J,y,l),Be=new Yb(L,J,w),le=new n_(A,F,w,g),pe=new ev(A,Me,F),te=new pv(A,Me,F),F.programs=ue.programs,L.capabilities=w,L.extensions=Me,L.properties=G,L.renderLists=me,L.shadowMap=Be,L.state=g,L.info=F}x!==un&&(M=new xv(x,t.width,t.height,a,r,s));let Ie=new Uu(L,A);this.xr=Ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(st,Q,!1))},this.getSize=function(b){return b.set(st,Q)},this.setSize=function(b,D,X=!0){if(Ie.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}st=b,Q=D,t.width=Math.floor(b*ne),t.height=Math.floor(D*ne),X===!0&&(t.style.width=b+"px",t.style.height=D+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(st*ne,Q*ne).floor()},this.setDrawingBufferSize=function(b,D,X){st=b,Q=D,ne=X,t.width=Math.floor(b*X),t.height=Math.floor(D*X),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===un){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(oe)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,D,X,W){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,D,X,W),g.viewport(oe.copy(be).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(qe)},this.setScissor=function(b,D,X,W){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,D,X,W),g.scissor(Fe.copy(qe).multiplyScalar(ne).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(b){g.setScissorTest(wt=b)},this.setOpaqueSort=function(b){we=b},this.setTransparentSort=function(b){Ge=b},this.getClearColor=function(b){return b.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,X=!0){let W=0;if(b){let Z=!1;if(se!==null){let xe=se.texture.format;Z=m.has(xe)}if(Z){let xe=se.texture.type,Ee=f.has(xe),ye=Ye.getClearColor(),Te=Ye.getClearAlpha(),Re=ye.r,je=ye.g,it=ye.b;Ee?(T[0]=Re,T[1]=je,T[2]=it,T[3]=Te,A.clearBufferuiv(A.COLOR,0,T)):(C[0]=Re,C[1]=je,C[2]=it,C[3]=Te,A.clearBufferiv(A.COLOR,0,C))}else W|=A.COLOR_BUFFER_BIT}D&&(W|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Ye.dispose(),me.dispose(),he.dispose(),G.dispose(),ce.dispose(),J.dispose(),ve.dispose(),le.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",dd),Ie.removeEventListener("sessionend",hd),Ti.stop()};function _t(b){b.preventDefault(),fs("WebGLRenderer: Context Lost."),k=!0}function lt(){fs("WebGLRenderer: Context Restored."),k=!1;let b=F.autoReset,D=Be.enabled,X=Be.autoUpdate,W=Be.needsUpdate,Z=Be.type;Ue(),F.autoReset=b,Be.enabled=D,Be.autoUpdate=X,Be.needsUpdate=W,Be.type=Z}function Mn(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function On(b){let D=b.target;D.removeEventListener("dispose",On),fm(D)}function fm(b){mm(b),G.remove(b)}function mm(b){let D=G.get(b).programs;D!==void 0&&(D.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,X,W,Z,xe){D===null&&(D=ie);let Ee=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,ye=xm(b,D,X,W,Z);g.setMaterial(W,Ee);let Te=X.index,Re=1;if(W.wireframe===!0){if(Te=ee.getWireframeAttribute(X),Te===void 0)return;Re=2}let je=X.drawRange,it=X.attributes.position,Ae=je.start*Re,ct=(je.start+je.count)*Re;xe!==null&&(Ae=Math.max(Ae,xe.start*Re),ct=Math.min(ct,(xe.start+xe.count)*Re)),Te!==null?(Ae=Math.max(Ae,0),ct=Math.min(ct,Te.count)):it!=null&&(Ae=Math.max(Ae,0),ct=Math.min(ct,it.count));let Dt=ct-Ae;if(Dt<0||Dt===1/0)return;ve.setup(Z,W,ye,X,Te);let Et,vt=pe;if(Te!==null&&(Et=de.get(Te),vt=te,vt.setIndex(Et)),Z.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*ae()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(Z.isLine){let Yt=W.linewidth;Yt===void 0&&(Yt=1),g.setLineWidth(Yt*ae()),Z.isLineSegments?vt.setMode(A.LINES):Z.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else Z.isPoints?vt.setMode(A.POINTS):Z.isSprite&&vt.setMode(A.TRIANGLES);if(Z.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))vt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Yt=Z._multiDrawStarts,Se=Z._multiDrawCounts,en=Z._multiDrawCount,at=Te?de.get(Te).bytesPerElement:1,xn=G.get(W).currentProgram.getUniforms();for(let Un=0;Un<en;Un++)xn.setValue(A,"_gl_DrawID",Un),vt.render(Yt[Un]/at,Se[Un])}else if(Z.isInstancedMesh)vt.renderInstances(Ae,Dt,Z.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,Yt);vt.renderInstances(Ae,Dt,Se)}else vt.render(Ae,Dt)};function ud(b,D,X,W){z!==null&&b.isNodeMaterial&&z.setObject(W,b),ot===!0&&Oe.setState(b,X,!1),b.transparent===!0&&b.side===Vt&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,no(b,D,W),b.side=_i,b.needsUpdate=!0,no(b,D,W),b.side=Vt):no(b,D,W)}this.compile=function(b,D,X=null){X===null&&(X=b),z!==null&&z.renderStart(b,D,X),E=he.get(X),E.init(D),v.push(E),X.traverseVisible(function(Z){Z.isLight&&Z.layers.test(D.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),b!==X&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(D.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),gt=this.localClippingEnabled,ot=Oe.init(this.clippingPlanes,gt),ot===!0&&Oe.setGlobalState(this.clippingPlanes,D),z!==null&&Be.render(E.state.shadowsArray,X,D);let W=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let xe=Z.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let ye=xe[Ee];ud(ye,X,D,Z),W.add(ye)}else ud(xe,X,D,Z),W.add(xe)}),E=v.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(b,D,X=null){let W=this.compile(b,D,X);return new Promise(Z=>{function xe(){if(W.forEach(function(Ee){let Te=G.get(Ee).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Ee)}),W.size===0){Z(b);return}setTimeout(xe,10)}Me.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let zl=null;function gm(b){zl&&zl(b)}function dd(){Ti.stop()}function hd(){Ti.start()}let Ti=new rf;Ti.setAnimationLoop(gm),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){zl=b,Ie.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},Ie.addEventListener("sessionstart",dd),Ie.addEventListener("sessionend",hd),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;z!==null&&z.renderStart(b,D);let X=Ie.enabled===!0&&Ie.isPresenting===!0,W=M!==null&&(se===null||X)&&M.begin(L,se);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(D),D=Ie.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,D,se),E=he.get(b,v.length),E.init(D),E.state.textureUnits=q.getTextureUnits(),v.push(E),tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(tt,Cn,D.reversedDepth),gt=this.localClippingEnabled,ot=Oe.init(this.clippingPlanes,gt),S=me.get(b,R.length),S.init(),R.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let Ee=L.xr.getDepthSensingMesh();Ee!==null&&Bl(Ee,D,-1/0,L.sortObjects)}Bl(b,D,0,L.sortObjects),S.finish(),z!==null&&z.updateLights(E.state.lightsArray),L.sortObjects===!0&&S.sort(we,Ge),j=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,j&&Ye.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Oe.beginShadows();let Z=E.state.shadowsArray;if(Be.render(Z,b,D),ot===!0&&Oe.endShadows(),(W&&M.hasRenderPass())===!1){let Ee=S.opaque,ye=S.transmissive;if(E.setupLights(),D.isArrayCamera){let Te=D.cameras;if(ye.length>0)for(let Re=0,je=Te.length;Re<je;Re++){let it=Te[Re];fd(Ee,ye,b,it)}j&&Ye.render(b);for(let Re=0,je=Te.length;Re<je;Re++){let it=Te[Re];pd(S,b,it,it.viewport)}}else ye.length>0&&fd(Ee,ye,b,D),j&&Ye.render(b),pd(S,b,D)}se!==null&&K===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),W&&M.end(L),b.isScene===!0&&b.onAfterRender(L,b,D),ve.resetDefaultState(),Y=-1,re=null,v.pop(),v.length>0?(E=v[v.length-1],q.setTextureUnits(E.state.textureUnits),ot===!0&&Oe.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,z!==null&&z.renderEnd()};function Bl(b,D,X,W){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Qe)){W&&U.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let Ee=J.update(b),ye=b.material;ye.visible&&S.push(b,Ee,ye,X,U.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Qe))){let Ee=J.update(b),ye=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),U.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),U.copy(Ee.boundingSphere.center)),U.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(ye)){let Te=Ee.groups;for(let Re=0,je=Te.length;Re<je;Re++){let it=Te[Re],Ae=ye[it.materialIndex];Ae&&Ae.visible&&S.push(b,Ee,Ae,X,U.z,it,D)}}else ye.visible&&S.push(b,Ee,ye,X,U.z,null,D)}}let xe=b.children;for(let Ee=0,ye=xe.length;Ee<ye;Ee++)Bl(xe[Ee],D,X,W)}function pd(b,D,X,W){let{opaque:Z,transmissive:xe,transparent:Ee}=b;E.setupLightsView(X),ot===!0&&Oe.setGlobalState(L.clippingPlanes,X),W&&g.viewport(oe.copy(W)),Z.length>0&&to(Z,D,X),xe.length>0&&to(xe,D,X),Ee.length>0&&to(Ee,D,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function fd(b,D,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ae=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:Ae?kn:un,minFilter:Si,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let xe=E.state.transmissionRenderTarget[W.id],Ee=W.viewport||oe;xe.setSize(Ee.z*L.transmissionResolutionScale,Ee.w*L.transmissionResolutionScale);let ye=L.getRenderTarget(),Te=L.getActiveCubeFace(),Re=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(mt),et=L.getClearAlpha(),et<1&&L.setClearColor(16777215,.5),L.clear(),j&&Ye.render(X);let je=L.toneMapping;L.toneMapping=Ln;let it=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ot===!0&&Oe.setGlobalState(L.clippingPlanes,W),to(b,X,W),q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ct=0,Dt=D.length;ct<Dt;ct++){let Et=D[ct],{object:vt,geometry:Yt,material:Se,group:en}=Et;if(Se.side===Vt&&vt.layers.test(W.layers)){let at=Se.side;Se.side=sn,Se.needsUpdate=!0,md(vt,X,W,Yt,Se,en),Se.side=at,Se.needsUpdate=!0,Ae=!0}}Ae===!0&&(q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe))}L.setRenderTarget(ye,Te,Re),L.setClearColor(mt,et),it!==void 0&&(W.viewport=it),L.toneMapping=je}function to(b,D,X){let W=D.isScene===!0?D.overrideMaterial:null;for(let Z=0,xe=b.length;Z<xe;Z++){let Ee=b[Z],{object:ye,geometry:Te,group:Re}=Ee,je=Ee.material;je.allowOverride===!0&&W!==null&&(je=W),ye.layers.test(X.layers)&&md(ye,D,X,Te,je,Re)}}function md(b,D,X,W,Z,xe){z!==null&&Z.isNodeMaterial&&z.setObject(b,Z),b.onBeforeRender(L,D,X,W,Z,xe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(L,D,X,W,b,xe),Z.transparent===!0&&Z.side===Vt&&Z.forceSinglePass===!1?(Z.side=sn,Z.needsUpdate=!0,L.renderBufferDirect(X,D,W,Z,b,xe),Z.side=_i,Z.needsUpdate=!0,L.renderBufferDirect(X,D,W,Z,b,xe),Z.side=Vt):L.renderBufferDirect(X,D,W,Z,b,xe),b.onAfterRender(L,D,X,W,Z,xe)}function no(b,D,X){D.isScene!==!0&&(D=ie);let W=G.get(b),Z=E.state.lights,xe=E.state.shadowsArray,Ee=Z.state.version,ye=ue.getParameters(b,Z.state,xe,D,X,E.state.lightProbeGridArray),Te=ue.getProgramCacheKey(ye),Re=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,W.fog=D.fog;let je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=ce.get(b.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",On),Re=new Map,W.programs=Re);let it=Re.get(Te);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===Ee)return yd(b,ye),it}else ye.uniforms=ue.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,X,ye),b.onBeforeCompile(ye,L),it=ue.acquireProgram(ye,Te),Re.set(Te,it),W.uniforms=ye.uniforms;let Ae=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=Oe.uniform),yd(b,ye),W.needsLights=bm(b),W.lightsStateVersion=Ee,W.needsLights&&(Ae.ambientLightColor.value=Z.state.ambient,Ae.lightProbe.value=Z.state.probe,Ae.sunLights.value=Z.state.sun,Ae.sunLightShadows.value=Z.state.sunShadow,Ae.directionalLights.value=Z.state.directional,Ae.directionalLightShadows.value=Z.state.directionalShadow,Ae.spotLights.value=Z.state.spot,Ae.spotLightShadows.value=Z.state.spotShadow,Ae.rectAreaLights.value=Z.state.rectArea,Ae.ltc_1.value=Z.state.rectAreaLTC1,Ae.ltc_2.value=Z.state.rectAreaLTC2,Ae.pointLights.value=Z.state.point,Ae.pointLightShadows.value=Z.state.pointShadow,Ae.hemisphereLights.value=Z.state.hemi,Ae.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ae.sunShadowCascade.value=Z.state.sunShadowCascade,Ae.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=Z.state.spotLightMatrix,Ae.spotLightMap.value=Z.state.spotLightMap,Ae.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=it,W.uniformsList=null,it}function gd(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Hr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function yd(b,D){let X=G.get(b);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function ym(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let X=0,W=b.length;X<W;X++){let Z=b[X];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function xm(b,D,X,W,Z){D.isScene!==!0&&(D=ie),q.resetTextureUnits();let xe=D.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?D.environment:null,ye=se===null?L.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rt.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=ce.get(W.envMap||Ee,Te),je=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,it=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color,Et=Ln;W.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Et=L.toneMapping);let vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=vt!==void 0?vt.length:0,Se=G.get(W),en=E.state.lights;if(ot===!0&&(gt===!0||b!==re)){let Mt=b===re&&W.id===Y;Oe.setState(W,b,Mt)}let at=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==en.state.version||Se.outputColorSpace!==ye||Z.isBatchedMesh&&Se.batching===!1||!Z.isBatchedMesh&&Se.batching===!0||Z.isBatchedMesh&&Se.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Se.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Se.instancing===!1||!Z.isInstancedMesh&&Se.instancing===!0||Z.isSkinnedMesh&&Se.skinning===!1||!Z.isSkinnedMesh&&Se.skinning===!0||Z.isInstancedMesh&&Se.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Se.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Se.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Se.instancingMorph===!1&&Z.morphTexture!==null||Se.envMap!==Re||W.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Oe.numPlanes||Se.numIntersection!==Oe.numIntersection)||Se.vertexAlphas!==je||Se.vertexTangents!==it||Se.morphTargets!==Ae||Se.morphNormals!==ct||Se.morphColors!==Dt||Se.toneMapping!==Et||Se.morphTargetsCount!==Yt||!!Se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=W.version);let xn=Se.currentProgram;at===!0&&(xn=no(W,D,Z),z&&W.isNodeMaterial&&z.onUpdateProgram(W,xn,Se));let Un=!1,oi=!1,qi=!1,yt=xn.getUniforms(),Lt=Se.uniforms;if(g.useProgram(xn.program)&&(Un=!0,oi=!0,qi=!0),W.id!==Y&&(Y=W.id,oi=!0),Se.needsLights){let Mt=ym(E.state.lightProbeGridArray,Z);Se.lightProbeGrid!==Mt&&(Se.lightProbeGrid=Mt,oi=!0)}if(Un||re!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),yt.setValue(A,"projectionMatrix",b.projectionMatrix),yt.setValue(A,"viewMatrix",b.matrixWorldInverse);let li=yt.map.cameraPosition;li!==void 0&&li.setValue(A,I.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&yt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),re!==b&&(re=b,oi=!0,qi=!0)}if(Se.needsLights&&(en.state.sunShadowMap.length>0&&yt.setValue(A,"sunShadowMap",en.state.sunShadowMap,q),en.state.directionalShadowMap.length>0&&yt.setValue(A,"directionalShadowMap",en.state.directionalShadowMap,q),en.state.spotShadowMap.length>0&&yt.setValue(A,"spotShadowMap",en.state.spotShadowMap,q),en.state.pointShadowMap.length>0&&yt.setValue(A,"pointShadowMap",en.state.pointShadowMap,q)),Z.isSkinnedMesh){yt.setOptional(A,Z,"bindMatrix"),yt.setOptional(A,Z,"bindMatrixInverse");let Mt=Z.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(A,"boneTexture",Mt.boneTexture,q))}Z.isBatchedMesh&&(yt.setOptional(A,Z,"batchingTexture"),yt.setValue(A,"batchingTexture",Z._matricesTexture,q),yt.setOptional(A,Z,"batchingIdTexture"),yt.setValue(A,"batchingIdTexture",Z._indirectTexture,q),yt.setOptional(A,Z,"batchingColorTexture"),Z._colorsTexture!==null&&yt.setValue(A,"batchingColorTexture",Z._colorsTexture,q));let ai=X.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&O.update(Z,X,xn),(oi||Se.receiveShadow!==Z.receiveShadow)&&(Se.receiveShadow=Z.receiveShadow,yt.setValue(A,"receiveShadow",Z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=r_()),oi){if(yt.setValue(A,"toneMappingExposure",L.toneMappingExposure),Se.needsLights&&vm(Lt,qi),xe&&W.fog===!0&&ke.refreshFogUniforms(Lt,xe),ke.refreshMaterialUniforms(Lt,W,ne,Q,E.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.lightProbeGrid){let Mt=Se.lightProbeGrid;Lt.probesSH.value=Mt.texture,Lt.probesMin.value.copy(Mt.boundingBox.min),Lt.probesMax.value.copy(Mt.boundingBox.max),Lt.probesResolution.value.copy(Mt.resolution)}Hr.upload(A,gd(Se),Lt,q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hr.upload(A,gd(Se),Lt,q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(A,"center",Z.center),yt.setValue(A,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(A,"normalMatrix",Z.normalMatrix),yt.setValue(A,"modelMatrix",Z.matrixWorld),W.uniformsGroups!==void 0){let Mt=W.uniformsGroups;for(let li=0,ji=Mt.length;li<ji;li++){let vd=Mt[li];le.update(vd,xn),le.bind(vd,xn)}}return xn}function vm(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function bm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(b,D,X){let W=G.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let X=G.get(b);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,X=0){se=b,$=D,K=X;let W=null,Z=!1,xe=!1;if(b){let ye=G.get(b);if(ye.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(A.FRAMEBUFFER,ye.__webglFramebuffer),oe.copy(b.viewport),Fe.copy(b.scissor),Ce=b.scissorTest,g.viewport(oe),g.scissor(Fe),g.setScissorTest(Ce),Y=-1;return}else if(ye.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(ye.__hasExternalTextures)q.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let je=b.depthTexture;if(ye.__boundDepthTexture!==je){if(je!==null&&G.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);let Re=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?W=Re[D][X]:W=Re[D],Z=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?W=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[X]:W=Re,oe.copy(b.viewport),Fe.copy(b.scissor),Ce=b.scissorTest}else oe.copy(be).multiplyScalar(ne).floor(),Fe.copy(qe).multiplyScalar(ne).floor(),Ce=wt;if(X!==0&&(W=V),g.bindFramebuffer(A.FRAMEBUFFER,W)&&g.drawBuffers(b,W),g.viewport(oe),g.scissor(Fe),g.setScissorTest(Ce),Z){let ye=G.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,X)}else if(xe){let ye=D;for(let Te=0;Te<b.textures.length;Te++){let Re=G.get(b.textures[Te]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,Re.__webglTexture,X,ye)}}else if(b!==null&&X!==0){let ye=G.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ye.__webglTexture,X)}Y=-1};function xd(b){let D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=w.textureFormatReadable(b.format),D.__typeReadable=w.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,X,W,Z,xe,Ee,ye=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){g.bindFramebuffer(A.FRAMEBUFFER,Te);try{let Re=b.textures[ye],je=Re.format,it=Re.type;b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ye);let Ae=xd(Re);if(Ae.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-W&&X>=0&&X<=b.height-Z&&A.readPixels(D,X,W,Z,fe.convert(je),fe.convert(it),xe)}finally{let Re=se!==null?G.get(se).__webglFramebuffer:null;g.bindFramebuffer(A.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,D,X,W,Z,xe,Ee,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(D>=0&&D<=b.width-W&&X>=0&&X<=b.height-Z){g.bindFramebuffer(A.FRAMEBUFFER,Te);let Re=b.textures[ye],je=Re.format,it=Re.type;b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ye);let Ae=xd(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ct),A.bufferData(A.PIXEL_PACK_BUFFER,xe.byteLength,A.STREAM_READ),A.readPixels(D,X,W,Z,fe.convert(je),fe.convert(it),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let Dt=se!==null?G.get(se).__webglFramebuffer:null;g.bindFramebuffer(A.FRAMEBUFFER,Dt);let Et=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ep(A,Et,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ct),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,xe),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(ct),A.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,X=0){let W=Math.pow(2,-X),Z=Math.floor(b.image.width*W),xe=Math.floor(b.image.height*W),Ee=D!==null?D.x:0,ye=D!==null?D.y:0;q.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,Ee,ye,Z,xe),g.unbindTexture()},this.copyTextureToTexture=function(b,D,X=null,W=null,Z=0,xe=0){let Ee,ye,Te,Re,je,it,Ae,ct,Dt,Et=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(X!==null)Ee=X.max.x-X.min.x,ye=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,je=X.min.y,it=X.isBox3?X.min.z:0;else{let Lt=Math.pow(2,-Z);Ee=Math.floor(Et.width*Lt),ye=Math.floor(Et.height*Lt),b.isDataArrayTexture?Te=Et.depth:b.isData3DTexture?Te=Math.floor(Et.depth*Lt):Te=1,Re=0,je=0,it=0}W!==null?(Ae=W.x,ct=W.y,Dt=W.z):(Ae=0,ct=0,Dt=0);let vt=fe.convert(D.format),Yt=fe.convert(D.type),Se;D.isData3DTexture?(q.setTexture3D(D,0),Se=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),Se=A.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),Se=A.TEXTURE_2D),g.activeTexture(A.TEXTURE0),g.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);let en=g.getParameter(A.UNPACK_ROW_LENGTH),at=g.getParameter(A.UNPACK_IMAGE_HEIGHT),xn=g.getParameter(A.UNPACK_SKIP_PIXELS),Un=g.getParameter(A.UNPACK_SKIP_ROWS),oi=g.getParameter(A.UNPACK_SKIP_IMAGES);g.pixelStorei(A.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(A.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(A.UNPACK_SKIP_ROWS,je),g.pixelStorei(A.UNPACK_SKIP_IMAGES,it);let qi=b.isDataArrayTexture||b.isData3DTexture,yt=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Lt=G.get(b),ai=G.get(D),Mt=G.get(Lt.__renderTarget),li=G.get(ai.__renderTarget);g.bindFramebuffer(A.READ_FRAMEBUFFER,Mt.__webglFramebuffer),g.bindFramebuffer(A.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ji=0;ji<Te;ji++)qi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,G.get(b).__webglTexture,Z,it+ji),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,G.get(D).__webglTexture,xe,Dt+ji)),A.blitFramebuffer(Re,je,Ee,ye,Ae,ct,Ee,ye,A.DEPTH_BUFFER_BIT,A.NEAREST);g.bindFramebuffer(A.READ_FRAMEBUFFER,null),g.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||G.has(b)){let Lt=G.get(b),ai=G.get(D);g.bindFramebuffer(A.READ_FRAMEBUFFER,N),g.bindFramebuffer(A.DRAW_FRAMEBUFFER,H);for(let Mt=0;Mt<Te;Mt++)qi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Lt.__webglTexture,Z,it+Mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Lt.__webglTexture,Z),yt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ai.__webglTexture,xe,Dt+Mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ai.__webglTexture,xe),Z!==0?A.blitFramebuffer(Re,je,Ee,ye,Ae,ct,Ee,ye,A.COLOR_BUFFER_BIT,A.NEAREST):yt?A.copyTexSubImage3D(Se,xe,Ae,ct,Dt+Mt,Re,je,Ee,ye):A.copyTexSubImage2D(Se,xe,Ae,ct,Re,je,Ee,ye);g.bindFramebuffer(A.READ_FRAMEBUFFER,null),g.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else yt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Se,xe,Ae,ct,Dt,Ee,ye,Te,vt,Yt,Et.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(Se,xe,Ae,ct,Dt,Ee,ye,Te,vt,Et.data):A.texSubImage3D(Se,xe,Ae,ct,Dt,Ee,ye,Te,vt,Yt,Et):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,xe,Ae,ct,Ee,ye,vt,Yt,Et.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,xe,Ae,ct,Et.width,Et.height,vt,Et.data):A.texSubImage2D(A.TEXTURE_2D,xe,Ae,ct,Ee,ye,vt,Yt,Et);g.pixelStorei(A.UNPACK_ROW_LENGTH,en),g.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(A.UNPACK_SKIP_PIXELS,xn),g.pixelStorei(A.UNPACK_SKIP_ROWS,Un),g.pixelStorei(A.UNPACK_SKIP_IMAGES,oi),xe===0&&D.generateMipmaps&&A.generateMipmap(Se),g.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){$=0,K=0,se=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var df={type:"change"},zu={type:"start"},pf={type:"end"},bl=new gi,hf=new rn,s_=Math.cos(70*pu.DEG2RAD),Ft=new B,dn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fu=1e-6,_l=class extends ks{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new fn,this._lastTargetPosition=new B,this._quat=new fn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new B,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new B,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a_.bind(this),this._onPointerDown=o_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=m_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=h_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=c_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=g_.bind(this),this._interceptControlUp=y_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(df),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),r<-Math.PI?r+=dn:r>Math.PI&&(r-=dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bl.origin.copy(this.object.position),bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bl.direction))<s_?this.object.lookAt(this.target):(hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),bl.intersectPlane(hf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fu||this._lastTargetPosition.distanceToSquared(this.target)>Fu?(this.dispatchEvent(df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function o_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function a_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function l_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pf),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function c_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case bn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case bn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(zu)}function u_(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function d_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(zu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pf))}function h_(n){this.enabled!==!1&&this._handleKeyDown(n)}function p_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(zu)}function f_(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function m_(n){this.enabled!==!1&&n.preventDefault()}function g_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bu=new rn,Ml=new Gi,Gr=new Pe,Hu=new B,Sl=class extends _l{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:bn.PAN,MIDDLE:bn.DOLLY,RIGHT:bn.ROTATE},this.touches={ONE:Pn.PAN,TWO:Pn.DOLLY_ROTATE},this._panWorldStart=new B}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target);let i=this.domElement.getBoundingClientRect();Gr.x=(e.clientX-i.left)/i.width*2-1,Gr.y=-((e.clientY-i.top)/i.height)*2+1,Ml.setFromCamera(Gr,this.object),Ml.ray.intersectPlane(Bu,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let i=this.domElement.getBoundingClientRect();Gr.x=(e.clientX-i.left)/i.width*2-1,Gr.y=-((e.clientY-i.top)/i.height)*2+1,Ml.setFromCamera(Gr,this.object),Ml.ray.intersectPlane(Bu,Hu)&&(Hu.sub(this._panWorldStart),this._panOffset.copy(Hu).negate(),this.update())}};var Wu={stencilWrite:!0,stencilRef:1,stencilFunc:cu},on=8,ff=96,x_=64,v_=4;function b_(n){return n<450?16:n<1300?15:n<3600?14:13}function __(n,e,t){let i=2**n;return[e/i*360-180,Math.atan(Math.sinh(Math.PI*(1-2*t/i)))*180/Math.PI]}function Vu(n,e,t){let i=2**n,r=t*Math.PI/180;return[(e+180)/360*i,(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i]}function Gu(n,e){let t=(n-26e5)/1e6,i=(e-12e5)/1e6,r=2.6779094+4.728982*t+.791484*t*i+.1306*t*i*i-.0436*t**3,s=16.9023892+3.238272*i-.270978*t*t-.002528*i*i-.0447*t*t*i-.014*i**3;return[r*100/36,s*100/36]}function M_(n,e,t,i,r=x_){let[s,o]=Gu(e-i,t-i),[a,l]=Gu(e+i,t+i),[c,d]=Vu(n,s,l),[h,u]=Vu(n,a,o),[p,y]=Vu(n,...Gu(e,t)),x=2**n,m=[];for(let f=Math.max(0,Math.floor(c));f<=Math.min(x-1,Math.floor(h));f++)for(let T=Math.max(0,Math.floor(d));T<=Math.min(x-1,Math.floor(u));T++)m.push({tile:[f,T],distance:Math.hypot(f+.5-p,T+.5-y)});return m.sort((f,T)=>f.distance-T.distance).slice(0,r).map(f=>f.tile)}var wl=class{constructor(e){De(this,"options",e);De(this,"patches",new Map);De(this,"wanted",new Set);De(this,"running",0);De(this,"dark",!1);De(this,"visible",!0);De(this,"generation",0);De(this,"clock",0);De(this,"disposed",!1)}update(e,t,i,r){if(this.disposed||!this.visible)return;let s=b_(i),o=M_(s,e,t,Math.min(r,s===13?7e3:r));this.wanted=new Set(o.map(([l,c])=>`${s}/${l}/${c}`)),this.clock++;let a=!1;for(let[l,c]of this.patches){let d=this.wanted.has(l);c.mesh&&c.mesh.visible!==d&&(c.mesh.visible=d,a=!0),d&&(c.used=this.clock)}for(let[l,c]of o)this.request(s,l,c);this.evict(),a&&this.options.changed()}setDark(e){e!==this.dark&&(this.dark=e,this.clear())}setVisible(e){this.visible=e;for(let t of this.patches.values())t.mesh&&(t.mesh.visible=e&&this.wanted.has(t.key));this.options.changed()}reshape(){for(let e of this.patches.values()){if(!e.mesh)continue;let[t,i,r]=e.key.split("/").map(Number);e.mesh.geometry.dispose(),e.mesh.geometry=this.geometry(t,i,r)}this.options.changed()}clear(){this.generation++;for(let e of[...this.patches.keys()])this.drop(e);this.options.changed()}dispose(){this.disposed=!0,this.clear()}request(e,t,i){let r=`${e}/${t}/${i}`;if(this.patches.has(r)||this.running>=v_)return;let s={key:r,mesh:null,texture:null,loading:!0,failed:!1,used:this.clock};this.patches.set(r,s),this.running++;let o=this.generation;this.options.load(e,t,i,this.dark).then(async a=>{let l=await this.options.win.createImageBitmap(new Blob([new Uint8Array(a).slice()]));if(this.disposed||o!==this.generation||this.patches.get(r)!==s){l.close();return}let c=new Xt(l);c.colorSpace=nn,c.flipY=!1,c.anisotropy=4,c.needsUpdate=!0;let d=new Pt(this.geometry(e,t,i),new Rn({map:c,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,...Wu}));d.matrixAutoUpdate=!1,d.renderOrder=-1,d.visible=this.visible&&this.wanted.has(r),s.mesh=d,s.texture=c,this.options.scene.add(d)}).catch(()=>{s.failed=!0}).finally(()=>{if(s.loading=!1,this.running--,!(this.disposed||o!==this.generation)){for(let a of this.wanted)if(!this.patches.has(a)){let[l,c,d]=a.split("/").map(Number);this.request(l,c,d);break}this.options.changed()}})}geometry(e,t,i){let r=new Float32Array((on+1)*(on+1)*3),s=new Float32Array((on+1)*(on+1)*2);for(let c=0;c<=on;c++)for(let d=0;d<=on;d++){let h=d/on,u=c/on,[p,y]=__(e,t+h,i+u),[x,m]=Qi(y,p),f=this.options.toScene(x,m,this.options.height(x,m)-.6),T=c*(on+1)+d;r.set([f.x,f.y,f.z],T*3),s.set([h,u],T*2)}let o=new Uint16Array(on*on*6),a=0;for(let c=0;c<on;c++)for(let d=0;d<on;d++){let h=c*(on+1)+d,u=h+1,p=h+on+1,y=p+1;o.set([h,p,u,u,p,y],a),a+=6}let l=new Rt;return l.setAttribute("position",new dt(r,3)),l.setAttribute("uv",new dt(s,2)),l.setIndex(new dt(o,1)),l.computeBoundingSphere(),l}drop(e){let t=this.patches.get(e);t&&(t.mesh&&(this.options.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()),t.texture?.dispose(),t.texture?.image?.close?.(),this.patches.delete(e))}evict(){for(let[t,i]of this.patches)i.failed&&!this.wanted.has(t)&&this.drop(t);if(this.patches.size<=ff)return;let e=[...this.patches.values()].filter(t=>!t.loading&&!this.wanted.has(t.key)).sort((t,i)=>t.used-i.used);for(let t of e.slice(0,this.patches.size-ff))this.drop(t.key)}};function Ys(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(let s of n)for(let[o,a]of s[0]??[])e=Math.min(e,o),t=Math.min(t,a),i=Math.max(i,o),r=Math.max(r,a);return Number.isFinite(e)?{minX:e,minY:t,maxX:i,maxY:r}:null}var El=(n,e)=>n.minX<=e.maxX&&n.maxX>=e.minX&&n.minY<=e.maxY&&n.maxY>=e.minY;function S_(n,e){let t=!1;for(let i of e)for(let r=0,s=i.length-1;r<i.length;s=r++){let[o,a]=i[r],[l,c]=i[s];a>n[1]!=c>n[1]&&n[0]<(l-o)*(n[1]-a)/(c-a)+o&&(t=!t)}return t}function mf(n){let e=0;for(let t=0,i=n.length-1;t<n.length;i=t++)e+=(n[i][0]-n[t][0])*(n[i][1]+n[t][1]);return Math.abs(e/2)}var w_=n=>n.reduce((e,[t,...i])=>e+(t?mf(t)-i.reduce((r,s)=>r+mf(s),0):0),0);function E_(n,e,t,i,r){let s=Math.min(Math.max(Math.ceil(Math.sqrt(i/2)),1),24),o=0;for(let a=0;a<s;a++)for(let l=0;l<s-a;l++)for(let c=1;c<=(l<s-a-1?2:1);c++){let d=(a+c/3)/s,h=(l+c/3)/s,u=[n[0]+(e[0]-n[0])*d+(t[0]-n[0])*h,n[1]+(e[1]-n[1])*d+(t[1]-n[1])*h];r.some(p=>S_(u,p))&&o++}return o/(s*s)}function T_(n,e,t){let i=Ys(t),r=w_(t),s=[0,0,0],o=[0,0,0];for(let l=n[1];l<n[1]+n[2];l++){let c=e.indices[l*3],d=e.kinds[c];if(d!==1&&d!==2)continue;let h=e.point(c),u=e.point(e.indices[l*3+1]),p=e.point(e.indices[l*3+2]),y=Math.abs((u[0]-h[0])*(p[1]-h[1])-(p[0]-h[0])*(u[1]-h[1]))/2;if(y<.01)continue;s[d]+=y,i&&El(i,{minX:Math.min(h[0],u[0],p[0]),minY:Math.min(h[1],u[1],p[1]),maxX:Math.max(h[0],u[0],p[0]),maxY:Math.max(h[1],u[1],p[1])})&&(o[d]+=y*E_(h,u,p,y,t))}let a=s[2]>0?2:1;return{share:s[a]?o[a]/s[a]:0,cover:r?o[a]/r:0,inside:o[a]}}var A_=n=>n.inside>=1&&(n.share>=.5||n.cover>=.3);function gf(n,e,t){let i=Ys(t);return i?n.filter(r=>El(i,{minX:r[3],minY:r[4],maxX:r[6],maxY:r[7]})&&A_(T_(r,e,t))):[]}var Zu=220,C_=6,ri=400,Wr={east:2683250,north:1247900,distance:1600};function I_(n,e){let t=n.trim(),i=t.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);if(i)return new Le(Number(i[1]),Number(i[2]),Number(i[3]));let r=t.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);return r?new Le(Number(r[1])/255,Number(r[2])/255,Number(r[3])/255):/^#[0-9a-f]{3,8}$/i.test(t)?new Le(t.slice(0,7)):new Le(e)}function R_(n){return .2126*n.r+.7152*n.g+.0722*n.b}var Tl=class{constructor(e,t,i){De(this,"container",e);De(this,"events",t);De(this,"doc");De(this,"win");De(this,"canvas");De(this,"renderer");De(this,"scene",new ys);De(this,"camera",new Jt(45,1,1,2e4));De(this,"controls");De(this,"material",new ni({vertexColors:!0,flatShading:!0,side:Vt}));De(this,"groundMaterial",new ni({side:Vt,...Wu}));De(this,"highlightMaterial",new ni({flatShading:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));De(this,"ghostMaterial",new ni({flatShading:!0,side:Vt,transparent:!0,opacity:.16,depthWrite:!1}));De(this,"hiddenMaterial",new Rn({visible:!1}));De(this,"floorMaterial",new ni({vertexColors:!0,side:Vt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));De(this,"floorLineMaterial",new Ir({transparent:!0,opacity:.55}));De(this,"floorMaskMaterial",new Rn({colorWrite:!1,depthWrite:!1,depthTest:!1,side:Vt,stencilWrite:!0,stencilRef:1,stencilZPass:lu}));De(this,"area",null);De(this,"areaMeshes",new Map);De(this,"floorMeshes",[]);De(this,"tiles",new Map);De(this,"loading",new Set);De(this,"failed",new Set);De(this,"raycaster",new Gi);De(this,"observers",[]);De(this,"palette");De(this,"index",null);De(this,"origin",[2683e3,1247e3]);De(this,"ground",null);De(this,"colorMode","surfaces");De(this,"highlight",null);De(this,"frame",0);De(this,"lastTileUpdate",0);De(this,"fly",null);De(this,"cameraTimer",0);De(this,"disposed",!1);De(this,"pointerDown",null);De(this,"groundMap");De(this,"pendingCamera");De(this,"groundVisible",!0);De(this,"groundReady",!1);De(this,"pendingPlace",null);De(this,"schedule",()=>{this.frame||this.disposed||(this.frame=this.win.requestAnimationFrame(this.tick))});De(this,"tick",e=>{if(this.frame=0,this.disposed)return;let t=!1;if(this.fly){let o=Math.min((e-this.fly.start)/this.fly.duration,1),a=o<.5?4*o*o*o:1-(-2*o+2)**3/2;this.camera.position.lerpVectors(this.fly.from,this.fly.to,a),this.controls.target.lerpVectors(this.fly.fromTarget,this.fly.toTarget,a),o>=1&&(this.fly=null,this.saveCameraSoon()),t=!0}t=this.controls.update()||t;let i=this.camera.position.distanceTo(this.controls.target),r=this.viewRadius(i);this.camera.near=Math.max(.5,i/800),this.camera.far=r*1.6+i*2,this.camera.updateProjectionMatrix();let s=this.scene.fog;s.near=r*.55+i*.5,s.far=r*1.05+i,this.renderer.render(this.scene,this.camera),(e-this.lastTileUpdate>200||!t)&&(this.lastTileUpdate=e,this.updateTiles(r)),t&&this.schedule()});De(this,"selectedKey",null);De(this,"selectedBuilding",null);De(this,"saveCameraSoon",()=>{this.win.clearTimeout(this.cameraTimer),this.cameraTimer=this.win.setTimeout(()=>{this.disposed||!this.index||this.events.onCamera({position:this.fromScene(this.camera.position),target:this.fromScene(this.controls.target)})},800)});this.doc=e.ownerDocument,this.win=this.doc.defaultView??window;let r=t.tile;this.groundMap=r?new wl({scene:this.scene,win:this.win,load:r,changed:()=>this.schedule(),toScene:(a,l,c)=>this.toScene(a,l,c),height:(a,l)=>this.groundHeight(a,l)}):null,this.canvas=this.doc.createElement("canvas"),this.canvas.className="z3d-canvas",e.appendChild(this.canvas),this.renderer=new yl({canvas:this.canvas,antialias:!0,stencil:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(this.win.devicePixelRatio||1,2)),this.controls=new Sl(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!1,this.controls.zoomToCursor=!0,this.controls.minDistance=15,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.48,this.controls.addEventListener("change",this.schedule),this.controls.addEventListener("end",this.saveCameraSoon);let s=new Ls(16777215,9077880,1.6),o=new Ds(16777215,1.9);o.position.set(-.45,.8,.35),this.scene.add(s,o),this.scene.fog=new gs(0,3e3,8e3),this.readTheme(),this.pendingCamera=i,this.listen(),this.resize()}setIndex(e){if(this.index===e)return;if(this.clearTiles(),this.groundMap?.clear(),this.index=e,!e){this.schedule();return}this.origin=[Math.round((e.bounds[0]+e.bounds[3])/2),Math.round((e.bounds[1]+e.bounds[4])/2)];let t=this.pendingCamera;this.pendingCamera=null,t?(this.camera.position.copy(this.toScene(t.position[0],t.position[1],t.position[2])),this.controls.target.copy(this.toScene(t.target[0],t.target[1],t.target[2]))):this.place(Wr.east,Wr.north,Wr.distance,!1),this.controls.update(),this.groundReady=!1,this.loadGround(e),this.schedule()}setColorMode(e){if(this.colorMode!==e){this.colorMode=e;for(let t of this.tiles.values())this.paint(t);this.schedule()}}setShowGround(e){this.groundVisible=e,this.ground&&(this.ground.mesh.visible=e&&!this.groundMap),this.groundMap?.setVisible(e),this.lastTileUpdate=0,this.schedule()}flyTo(e,t,i){this.place(e,t,i,!0)}resetView(){this.place(Wr.east,Wr.north,Wr.distance,!0)}zoomBy(e){let t=this.controls.target.clone(),i=this.camera.position.clone().sub(t),r=Math.min(Math.max(i.length()*(e>0?.6:1/.6),this.controls.minDistance),this.controls.maxDistance),s=t.clone().add(i.normalize().multiplyScalar(r));this.fly={from:this.camera.position.clone(),to:s,fromTarget:t.clone(),toTarget:t,start:this.win.performance.now(),duration:350},this.schedule()}clearSelection(){this.select(null)}setArea(e){if(this.clearArea(),this.area=e,e)for(let t of this.tiles.values())this.applyArea(t);this.syncHighlight(),this.buildFloor(),this.schedule()}flyToArea(e,t=!1){let i=1/0,r=1/0,s=-1/0,o=-1/0;for(let l of e)for(let[c,d]of l[0]??[])i=Math.min(i,c),r=Math.min(r,d),s=Math.max(s,c),o=Math.max(o,d);if(!Number.isFinite(i))return;let a=Math.max(s-i,o-r);this.place((i+s)/2,(r+o)/2,Math.min(Math.max(a*(t?2:2.4),t?90:140),1600),!0)}areaBuildings(){return[...this.areaMeshes.values()].flatMap(e=>e.userData.buildings)}applyArea(e){if(!this.area||this.areaMeshes.has(e.entry.key))return!1;let t=e.mesh.geometry,i=t.getIndex();if(!i||!this.tileReaches(e.entry,this.area.polygons))return!1;let r=i.array,s=t.getAttribute("position").array,[o,a]=this.origin,l=gf(e.buildings,{indices:r,kinds:e.kinds,point:x=>[s[x*3]+o,a-s[x*3+2]]},this.area.polygons);if(!l.length)return!1;let c=l.map(x=>[x[1]*3,x[2]*3]).sort((x,m)=>x[0]-m[0]),d=new r.constructor(c.reduce((x,[,m])=>x+m,0)),h=0;for(let[x,m]of c)d.set(r.subarray(x,x+m),h),h+=m;let u=new Rt;u.setAttribute("position",t.getAttribute("position")),u.setIndex(new dt(d,1));let p=!!this.area.floor,y=new Pt(u,p?this.ghostMaterial:this.highlightMaterial);if(y.matrixAutoUpdate=!1,y.renderOrder=p?2:0,y.userData.buildings=l,this.areaMeshes.set(e.entry.key,y),this.scene.add(y),p){t.clearGroups();let x=0;for(let[m,f]of c)m>x&&t.addGroup(x,m-x,0),t.addGroup(m,f,1),x=m+f;x<r.length&&t.addGroup(x,r.length-x,0),e.mesh.material=[this.material,this.hiddenMaterial]}return!0}tileReaches(e,t){let i=Ys(t);return!!i&&El(i,{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[3],maxY:e.bounds[4]})}syncHighlight(){if(!this.highlight)return;let{key:e,building:t}=this.highlight,i=this.area?.floor?this.areaMeshes.get(e)?.userData.buildings:void 0;this.highlight.mesh.visible=!i?.some(r=>r[1]===t[1])}removeAreaMesh(e){let t=this.areaMeshes.get(e);if(!t)return;this.scene.remove(t),t.geometry.dispose(),this.areaMeshes.delete(e);let i=this.tiles.get(e);i&&(i.mesh.geometry.clearGroups(),i.mesh.material=this.material)}clearArea(){for(let e of[...this.areaMeshes.keys()])this.removeAreaMesh(e);this.clearFloor()}clearFloor(){for(let e of this.floorMeshes){this.scene.remove(e);let t=e.userData.dispose;t?t():e.geometry.dispose()}this.floorMeshes=[]}hatchTexture(){let e=this.doc.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.strokeStyle=`#${this.palette.accent.getHexString()}`,t.lineWidth=16;for(let r of[-64,0,64])t.beginPath(),t.moveTo(r,64),t.lineTo(r+64,0),t.stroke();let i=new Rr(e);return i.wrapS=i.wrapT=br,i}labelSprite(e,t){let i=this.doc.createElement("canvas"),r=i.getContext("2d"),s=`700 56px ${this.win.getComputedStyle(this.container).fontFamily||"system-ui, sans-serif"}`;r.font=s,i.width=Math.ceil(r.measureText(e).width+40),i.height=84,r.font=s,r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=12,r.strokeStyle="rgba(0, 0, 0, 0.75)",r.fillStyle="#ffffff",r.strokeText(e,i.width/2,i.height/2),r.fillText(e,i.width/2,i.height/2);let o=new Rr(i),a=new Ar({map:o,depthTest:!1,transparent:!0}),l=new _s(a);return l.scale.set(t*i.width/i.height,t,1),l.renderOrder=4,l.userData.dispose=()=>{o.dispose(),a.dispose()},l}floorBase(e){let t=this.areaBuildings();if(t.length)return Math.min(...t.map(s=>s[5]));let i=Ys(e);if(!i||!this.groundReady)return null;let r=this.index?.tiles.filter(s=>this.tileReaches(s,e))??[];return!r.length||r.some(s=>!this.tiles.has(s.key)&&!this.failed.has(s.key))?null:this.groundHeight((i.minX+i.maxX)/2,(i.minY+i.maxY)/2)}buildFloor(){this.clearFloor();let e=this.area?.floor,t=e?this.floorBase(this.area.polygons):null;if(!e||t===null){this.schedule();return}let i=t+e.elevation+.2,r=[],s=[],o=[],a=[],l=null,c=new Le;for(let d of e.rooms){if(c.set(d.color),d.picked&&d.label){let h=d.polygons[0]?.[0]??[],u=h.map(([m])=>m-this.origin[0]),p=h.map(([,m])=>m-this.origin[1]),y=Math.max(...u)-Math.min(...u),x=Math.max(...p)-Math.min(...p);h.length&&(l={text:d.label,x:(Math.max(...u)+Math.min(...u))/2,y:(Math.max(...p)+Math.min(...p))/2,size:Math.min(Math.max(Math.min(y,x)*.35,2.5),7)})}for(let h of d.polygons){let u=h.map(m=>{let f=m.map(([T,C])=>new Pe(T-this.origin[0],C-this.origin[1]));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(m=>m.length>=3);if(!u.length)continue;let[p,...y]=u,x=[p,...y].flat();for(let[m,f,T]of Cs.triangulateShape(p,y))for(let C of[m,f,T]){let _=x[C];r.push(_.x,i-ri,-_.y),s.push(c.r,c.g,c.b),d.picked&&a.push(_.x,i-ri+.08,-_.y)}for(let m of u)for(let f=0;f<m.length;f++){let T=m[f],C=m[(f+1)%m.length];o.push(T.x,i-ri+.05,-T.y,C.x,i-ri+.05,-C.y)}}}if(r.length){let d=new Rt;d.setAttribute("position",new dt(new Float32Array(r),3)),d.setAttribute("color",new dt(new Float32Array(s),3)),d.computeVertexNormals();let h=new Pt(d,this.floorMaterial);h.renderOrder=1;let u=new Pt(d,this.floorMaskMaterial);u.renderOrder=-2,u.userData.dispose=()=>{},this.floorMeshes.push(h,u)}if(o.length){let d=new Rt;d.setAttribute("position",new dt(new Float32Array(o),3));let h=new Ms(d,this.floorLineMaterial);h.renderOrder=1,this.floorMeshes.push(h)}if(a.length){let d=new Rt;d.setAttribute("position",new dt(new Float32Array(a),3));let h=new Float32Array(a.length/3*2);for(let x=0,m=0;x<a.length;x+=3,m+=2)h[m]=a[x]/1.5,h[m+1]=-a[x+2]/1.5;d.setAttribute("uv",new dt(h,2));let u=this.hatchTexture(),p=new Rn({map:u,transparent:!0,depthWrite:!1,side:Vt,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),y=new Pt(d,p);y.renderOrder=3,y.userData.dispose=()=>{d.dispose(),u.dispose(),p.dispose()},this.floorMeshes.push(y)}if(l){let d=this.labelSprite(l.text,l.size);d.position.set(l.x,i-ri+l.size*.6+.5,-l.y),this.floorMeshes.push(d)}for(let d of this.floorMeshes)this.scene.add(d);this.schedule()}dispose(){this.disposed=!0,this.frame&&this.win.cancelAnimationFrame(this.frame),this.win.clearTimeout(this.cameraTimer);for(let e of this.observers)e();this.controls.dispose(),this.clearTiles(),this.ground&&(this.ground.mesh.geometry.dispose(),this.ground=null),this.material.dispose(),this.groundMaterial.dispose(),this.groundMap?.dispose(),this.highlightMaterial.dispose(),this.clearArea();for(let e of[this.ghostMaterial,this.hiddenMaterial,this.floorMaterial,this.floorLineMaterial,this.floorMaskMaterial])e.dispose();this.renderer.dispose(),this.canvas.remove()}toScene(e,t,i){return new B(e-this.origin[0],i-ri,-(t-this.origin[1]))}fromScene(e){return[Math.round((e.x+this.origin[0])*100)/100,Math.round((this.origin[1]-e.z)*100)/100,Math.round((e.y+ri)*100)/100]}groundHeight(e,t){let i=this.ground;if(!i)return this.index?Math.max(this.index.bounds[2],400):410;let r=Math.min(Math.max((e-i.originX)/i.cell,0),i.columns-1),s=Math.min(Math.max((t-i.originY)/i.cell,0),i.rows-1),o=Math.floor(r),a=Math.floor(s),l=Math.min(o+1,i.columns-1),c=Math.min(a+1,i.rows-1),d=r-o,h=s-a,u=(y,x)=>i.heights[x*i.columns+y],p=(u(o,a)*(1-d)+u(l,a)*d)*(1-h)+(u(o,c)*(1-d)+u(l,c)*d)*h;return Number.isNaN(p)?Math.max(this.index?.bounds[2]??400,400):p}groundSettled(){this.groundReady=!0,this.area?.floor&&this.buildFloor();let e=this.pendingPlace;this.pendingPlace=null,e&&this.place(e[0],e[1],e[2],!0)}place(e,t,i,r){if(r&&this.index&&!this.groundReady){this.pendingPlace=[e,t,i];return}let s=this.toScene(e,t,this.groundHeight(e,t)),o=this.camera.position.clone().sub(this.controls.target);(o.lengthSq()<1||o.y/o.length()>.95||o.y/o.length()<.25)&&o.set(.35,.75,.55),o.normalize().multiplyScalar(i);let a=s.clone().add(o);if(!r){this.camera.position.copy(a),this.controls.target.copy(s),this.schedule();return}this.fly={from:this.camera.position.clone(),to:a,fromTarget:this.controls.target.clone(),toTarget:s,start:this.win.performance.now(),duration:1200},this.schedule()}viewRadius(e){return Math.min(Math.max(e*2.6,1300),7500)}updateTiles(e){let t=this.index;if(!t)return;let i=this.controls.target,r=i.x+this.origin[0],s=this.origin[1]-i.z;this.groundMap?.update(r,s,this.camera.position.distanceTo(i),e);let o=t.tileSize/2,a=c=>Math.hypot(c.x*t.tileSize+o-r,c.y*t.tileSize+o-s),l=t.tiles.map(c=>({entry:c,distance:a(c)})).filter(c=>c.distance<=e).sort((c,d)=>c.distance-d.distance);for(let[c,d]of this.tiles)a(d.entry)>e*1.4&&this.unload(c);if(this.tiles.size>Zu){let c=[...this.tiles.values()].sort((d,h)=>a(h.entry)-a(d.entry));for(let d of c.slice(0,this.tiles.size-Zu))this.unload(d.entry.key)}for(let{entry:c}of l){if(this.loading.size>=C_)break;if(!(this.tiles.has(c.key)||this.loading.has(c.key)||this.failed.has(c.key))){if(this.tiles.size+this.loading.size>=Zu)break;this.load(c)}}this.events.onTiles(this.tiles.size,this.loading.size)}async load(e){let t=this.index;this.loading.add(e.key);try{let[i,r]=await Promise.all([this.events.read(`tiles/${e.key}.bin.gz`,e.bytes),this.events.read(`tiles/${e.key}.json`)]);if(this.disposed||this.index!==t)return;let s=Xd(await qd(i)),o=JSON.parse(new TextDecoder().decode(r));if(this.disposed||this.index!==t)return;let a=new Float32Array(s.vertexCount*3),[l,c,d]=s.origin,[h,u,p]=s.step,y=l-this.origin[0],x=d-ri,m=this.origin[1]-c;for(let E=0,R=0;E<s.vertexCount;E++,R+=3)a[R]=y+s.positions[R]*h,a[R+1]=x+s.positions[R+2]*p,a[R+2]=m-s.positions[R+1]*u;let f=new Float32Array(s.vertexCount);for(let E of o){let R=E[8]-E[5],v=(E[1]+E[2])*3;for(let M=E[1]*3;M<v;M++)f[s.indices[M]]=R}let T=new Rt;T.setAttribute("position",new dt(a,3)),T.setAttribute("color",new dt(new Uint8Array(s.vertexCount*3),3,!0)),T.setIndex(new dt(s.indices,1)),T.computeBoundingSphere();let C=new Pt(T,this.material);C.matrixAutoUpdate=!1;let _={entry:e,mesh:C,buildings:o,kinds:s.kinds,heights:f};this.paint(_),this.tiles.set(e.key,_),this.scene.add(C),this.selectedKey===e.key&&this.selectedBuilding&&this.showHighlight(_,this.selectedBuilding);let S=this.applyArea(_);this.syncHighlight(),this.area?.floor&&(S||!this.areaMeshes.size)&&this.buildFloor()}catch(i){this.failed.add(e.key),this.events.onError(i instanceof Error?i.message:String(i)),this.area?.floor&&!this.areaMeshes.size&&this.buildFloor()}finally{this.loading.delete(e.key),this.lastTileUpdate=0,this.schedule()}}unload(e){let t=this.tiles.get(e);t&&(this.highlight?.key===e&&this.removeHighlight(),this.removeAreaMesh(e),this.scene.remove(t.mesh),t.mesh.geometry.dispose(),this.tiles.delete(e))}clearTiles(){for(let e of[...this.tiles.keys()])this.unload(e);this.failed.clear(),this.events.onTiles(0,this.loading.size)}paint(e){let t=e.mesh.geometry.getAttribute("color"),i=t.array,r=this.palette,s=new Le;for(let o=0;o<e.kinds.length;o++){let a=e.kinds[o],l;this.colorMode==="height"&&a!==2?l=this.ramp(e.heights[o],a===1,s):l=a===1?r.roof:a===2?r.footprint:r.wall,i[o*3]=l.r*255,i[o*3+1]=l.g*255,i[o*3+2]=l.b*255}t.needsUpdate=!0}ramp(e,t,i){let r=this.palette.ramp,s=Math.min(Math.max(e/60,0),1)*(r.length-1),o=Math.floor(s);return i.copy(r[o]).lerp(r[Math.min(o+1,r.length-1)],s-o),t&&i.offsetHSL(0,0,.05),i}async loadGround(e){let t=e.ground;if(!t){this.groundSettled();return}try{let i=await this.events.read(t.file,t.columns*t.rows*4);if(this.disposed||this.index!==e)return;let r=new Float32Array(i.slice(0,t.columns*t.rows*4)),s=new Float32Array(t.columns*t.rows*3);for(let d=0;d<t.rows;d++)for(let h=0;h<t.columns;h++){let u=d*t.columns+h;s[u*3]=t.originX+h*t.cell-this.origin[0],s[u*3+1]=Number.isNaN(r[u])?0:r[u]-ri-.4,s[u*3+2]=this.origin[1]-(t.originY+d*t.cell)}let o=new Uint32Array((t.columns-1)*(t.rows-1)*6),a=0;for(let d=0;d<t.rows-1;d++)for(let h=0;h<t.columns-1;h++){let u=d*t.columns+h,p=u+1,y=u+t.columns,x=y+1;Number.isNaN(r[u])||Number.isNaN(r[p])||Number.isNaN(r[y])||Number.isNaN(r[x])||(o[a++]=u,o[a++]=y,o[a++]=p,o[a++]=p,o[a++]=y,o[a++]=x)}let l=new Rt;l.setAttribute("position",new dt(s,3)),l.setIndex(new dt(o.subarray(0,a),1)),l.computeVertexNormals();let c=new Pt(l,this.groundMaterial);c.matrixAutoUpdate=!1,c.visible=this.groundVisible&&!this.groundMap,c.renderOrder=-1,this.ground={mesh:c,heights:r,...t},this.groundMap?.reshape(),this.scene.add(c),this.schedule(),this.groundSettled()}catch(i){this.events.onError(i instanceof Error?i.message:String(i)),this.groundSettled()}}select(e){this.removeHighlight(),this.selectedKey=e?.tile.entry.key??null,this.selectedBuilding=e?.building??null,e&&this.showHighlight(e.tile,e.building);let t=e?.building;this.events.onSelect(t?{egid:t[0],ground:t[5],roof:t[8],height:Math.round((t[8]-t[5])*10)/10,triangles:t[2],center:[(t[3]+t[6])/2,(t[4]+t[7])/2]}:null,e?.at),this.schedule()}showHighlight(e,t){let i=e.mesh.geometry,r=i.getIndex();if(!r)return;let s=new Rt;s.setAttribute("position",i.getAttribute("position")),s.setIndex(new dt(r.array.slice(t[1]*3,(t[1]+t[2])*3),1));let o=new Pt(s,this.highlightMaterial);o.matrixAutoUpdate=!1,this.highlight={mesh:o,key:e.entry.key,building:t},this.syncHighlight(),this.scene.add(o)}removeHighlight(){this.highlight&&(this.scene.remove(this.highlight.mesh),this.highlight.mesh.geometry.dispose(),this.highlight=null)}pick(e,t){let i=this.canvas.getBoundingClientRect(),r=new Pe((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let s=[...this.tiles.values()].map(h=>h.mesh),[o]=this.raycaster.intersectObjects(s,!1);if(!o||o.faceIndex==null){this.select(null);return}let a=[...this.tiles.values()].find(h=>h.mesh===o.object),l=a?Yd(a.buildings,o.faceIndex):null,[c,d]=this.fromScene(o.point.addScaledVector(this.raycaster.ray.direction,1));this.select(a&&l?{tile:a,building:l,at:[c,d]}:null)}readTheme(){let e=this.doc.createElement("span");e.style.display="none",this.container.appendChild(e);let t=(o,a)=>(e.style.color=`var(${o}, ${a})`,I_(this.win.getComputedStyle(e).color,a)),i=t("--pane-bg","#181818"),r=t("--accent-color","#3b82f6");e.remove();let s=R_(i)<.4;this.groundMap?.setDark(s),this.palette=s?{background:i,accent:r,wall:new Le("#8f8d88"),roof:new Le("#a77561"),footprint:new Le("#4a4946"),ground:new Le("#2b2b2a"),ramp:["#56657a","#6f8a8c","#a3a07c","#c08b63","#c9665a"].map(o=>new Le(o))}:{background:i,accent:r,wall:new Le("#d9d6d0"),roof:new Le("#b97a5f"),footprint:new Le("#b5b2ab"),ground:new Le("#e4e1da"),ramp:["#8ea2bd","#97b7b3","#d0c896","#dda57a","#d9756a"].map(o=>new Le(o))},this.renderer.setClearColor(i),this.scene.fog.color.copy(i),this.groundMaterial.color.copy(this.palette.ground),this.highlightMaterial.color.copy(r),this.ghostMaterial.color.copy(r),this.floorLineMaterial.color.copy(s?new Le("#d6d3cc"):new Le("#3a3a38"));for(let o of this.tiles.values())this.paint(o);this.schedule()}listen(){let e=this.win.ResizeObserver??ResizeObserver,t=new e(()=>this.resize());t.observe(this.container),this.observers.push(()=>t.disconnect());let i=this.win.MutationObserver??MutationObserver,r=new i(()=>this.readTheme());r.observe(this.doc.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.doc.body&&r.observe(this.doc.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),this.observers.push(()=>r.disconnect());let s=this.win.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>this.readTheme();s?.addEventListener("change",o),this.observers.push(()=>s?.removeEventListener("change",o));let a=h=>{h.button===0&&(this.pointerDown={x:h.clientX,y:h.clientY,time:h.timeStamp})},l=h=>{let u=this.pointerDown;this.pointerDown=null,!(!u||h.button!==0)&&Math.hypot(h.clientX-u.x,h.clientY-u.y)<4&&h.timeStamp-u.time<500&&this.pick(h.clientX,h.clientY)},c=h=>{h.preventDefault(),this.events.onError("WebGL context lost")},d=()=>this.schedule();this.canvas.addEventListener("pointerdown",a),this.canvas.addEventListener("pointerup",l),this.canvas.addEventListener("webglcontextlost",c),this.canvas.addEventListener("webglcontextrestored",d),this.observers.push(()=>{this.canvas.removeEventListener("pointerdown",a),this.canvas.removeEventListener("pointerup",l),this.canvas.removeEventListener("webglcontextlost",c),this.canvas.removeEventListener("webglcontextrestored",d)})}resize(){let e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.schedule()}};function Al(){return P.createElement(P.Fragment,null,P.createElement("strong",null,Ke("model.missingTitle")),P.createElement("span",null,Ke("model.missingText")),P.createElement("code",null,"npm run update-model && npm run build"))}var Cl=null;function yf(n){Cl?.zoomBy(n)}function P_(){let n=$e.settings.get().camera;return n&&Array.isArray(n.position)&&Array.isArray(n.target)?n:null}function xf({area:n,focus:e,onPick:t}){let i=Ri(),r=P.useRef(null),s=P.useRef(null),[o,a]=P.useState(null),l=P.useRef(t);l.current=t,P.useEffect(()=>{lo()},[]),P.useEffect(()=>{let d=r.current;if(!d)return;let h;try{h=new Tl(d,{read:Qd,onTiles:(u,p)=>{let y=Ii();(y.loadedTiles!==u||y.loadingTiles!==p)&&Sn({loadedTiles:u,loadingTiles:p})},onSelect:(u,p)=>{Sn({selected:u}),l.current?.(u?[...p?[p]:[],u.center]:[])},onCamera:u=>{$e.settings.set("camera",u)},onError:u=>a(u),tile:(u,p,y,x)=>$e.backend.call("campus.tile",{z:u,x:p,y,dark:x},{encoding:"bytes"})},P_())}catch(u){a(u instanceof Error?u.message:String(u));return}return s.current=h,Cl=h,()=>{Cl===h&&(Cl=null),s.current=null,h.dispose()}},[]),P.useEffect(()=>{s.current?.setIndex(i.status==="ready"?i.index:null)},[i.status,i.index]),P.useEffect(()=>{s.current?.setColorMode(i.colorMode)},[i.colorMode]),P.useEffect(()=>{s.current?.setShowGround(i.showGround)},[i.showGround]),P.useEffect(()=>{s.current?.setArea(n)},[n]);let c=P.useRef(0);return P.useEffect(()=>{!e||e===c.current||!n||i.status!=="ready"||(c.current=e,s.current?.flyToArea(n.focus??n.polygons,!!n.floor))},[e,i.status,n?1:0]),P.useEffect(()=>{let d=Ii().flyTarget;i.flyRequest&&d&&s.current?.flyTo(d.east,d.north,d.distance)},[i.flyRequest]),P.useEffect(()=>{let d=u=>{u.key==="Escape"&&Ii().selected&&s.current?.clearSelection()},h=r.current?.ownerDocument;return h?.addEventListener("keydown",d),()=>h?.removeEventListener("keydown",d)},[]),P.createElement("div",{className:"z3d-stage",ref:r},i.status==="loading"&&P.createElement("div",{className:"z3d-message"},Ke("model.loading")),i.status==="missing"&&P.createElement("div",{className:"z3d-message"},P.createElement(Al,null)),i.status==="error"&&P.createElement("div",{className:"z3d-message"},P.createElement("strong",null,Ke("model.errorTitle")),P.createElement("span",{className:"z3d-error"},i.error)),o&&i.status==="ready"&&i.loadedTiles===0&&P.createElement("div",{className:"z3d-message"},P.createElement("strong",null,Ke("view.failed")),P.createElement("span",{className:"z3d-error"},o)),i.status==="ready"&&i.loadingTiles>0&&P.createElement("div",{className:"z3d-status",role:"status"},Ke("view.loadingTiles",{count:i.loadingTiles})))}var js={teaching:"#4a90d9",lab:"#9a6dd7",office:"#4caf72",circulation:"#b9bdc2",toilet:"#3fb8c6",service:"#8d9298",other:"#e09a3e"},L_="#f1f0ec",N_=["teaching","lab","office","circulation","toilet","service","other"],Pl=null,Il=new WeakMap;function D_(n){let e=Il.get(n);if(e)return e;let t=new Promise((i,r)=>{let s=n.createElement("script");s.type="module",s.src=$e.assets.url("campus-map.js"),s.onload=()=>{let o=n.defaultView?.valleyPolyCampusMap;o?i(o):(Il.delete(n),s.remove(),r(new Error("mapUnavailable")))},s.onerror=()=>{Il.delete(n),s.remove(),r(new Error("mapUnavailable"))},n.head.appendChild(s)});return Il.set(n,t),t}var qs=n=>n.map(e=>e.map(t=>t.map(([i,r])=>Qi(r,i))));function k_(n,e){return e.find(t=>t.polygons.some(i=>Hd(n,i)))?.code??null}function O_(n){let e=so.filter(r=>r.campus===n),t=e.map(r=>r.center[0]),i=e.map(r=>r.center[1]);return[Math.min(...t),Math.min(...i),Math.max(...t),Math.max(...i)]}function U_({outlines:n,selected:e,rooms:t,room:i,focus:r,place:s}){let o=P.useRef(null),a=P.useRef(null),[l,c]=P.useState("loading"),d=P.useRef({outlines:n,selected:e,rooms:t});return d.current={outlines:n,selected:e,rooms:t},P.useEffect(()=>{let h=o.current;if(!h)return;let u=!0,p=null;D_(h.ownerDocument).then(f=>{if(!u)return;p=f.createCampusMap({container:h,camera:co,roomColors:js,tile:(C,_,S,E)=>$e.backend.call("campus.tile",{z:C,x:_,y:S,dark:E},{encoding:"bytes"}),onSelect:C=>Di(C,_e("title"),!1),onRoom:C=>Wt({room:C}),onCamera:ih}),a.current=p,Pl=p;let T=d.current;T.outlines&&p.setOutlines(T.outlines),p.setSelected(T.selected),p.setRooms(T.rooms),c("ready")},()=>{u&&c("error")});let y=h.ownerDocument,x=y.defaultView?.MutationObserver,m=x?new x(()=>a.current?.refreshTheme()):null;return m?.observe(y.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),y.body&&m?.observe(y.body,{attributes:!0,attributeFilter:["class","style","data-theme"]}),()=>{u=!1,m?.disconnect(),Pl===p&&(Pl=null),p?.dispose(),a.current=null}},[]),P.useEffect(()=>{n&&a.current?.setOutlines(n)},[n,l]),P.useEffect(()=>{a.current?.setSelected(e)},[e,l]),P.useEffect(()=>{a.current?.setRooms(t)},[t,l]),P.useEffect(()=>{a.current?.setRoom(i?.id??null)},[i,t,l]),P.useEffect(()=>{s&&l==="ready"&&a.current?.flyTo({center:s.center,zoom:s.zoom})},[s?.request,l]),P.useEffect(()=>{if(!r||l!=="ready")return;let h=i?Yl(i.polygons):null;if(h){a.current?.fit(h,19.5);return}let u=e?n?.find(x=>x.code===e):null,p=u?Yl(u.polygons):null,y=Ji(e);p?a.current?.fit(p):y?a.current?.flyTo({center:y.center,zoom:17.5}):a.current?.fit(O_("zentrum"),16.5)},[r,l,n?1:0]),P.createElement("div",{className:"poly-map-stage",ref:o},l==="loading"&&P.createElement("div",{className:"z3d-message"},_e("map.loading")),l==="error"&&P.createElement("div",{className:"z3d-message"},P.createElement("span",{className:"z3d-error"},_e("map.failed"))))}var Rl=n=>P.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},n.map(e=>P.createElement("path",{key:e,d:e})));function F_({view:n}){let e=Ri(),t=l=>n==="3d"?yf(l):Pl?.zoomBy(l),i=e.colorMode==="height",r=`${Ke("display.color")}: ${Ke(i?"display.height":"display.surfaces")}`,s=`${Ke("display.ground")} \xB7 ${Ke("display.groundHint")}`,o=n==="3d"?"map":"3d",a=_e(o==="3d"?"view.show3d":"view.show2d");return P.createElement("div",{className:"poly-map-controls","data-tooltip-placement":"left"},P.createElement("button",{type:"button",className:"poly-round-btn",title:_e("map.zoomIn"),"aria-label":_e("map.zoomIn"),onClick:()=>t(1)},Rl(["M12 5v14","M5 12h14"])),P.createElement("button",{type:"button",className:"poly-round-btn",title:_e("map.zoomOut"),"aria-label":_e("map.zoomOut"),onClick:()=>t(-1)},Rl(["M5 12h14"])),P.createElement("button",{type:"button",className:"poly-round-btn poly-round-text",title:a,"aria-label":a,"data-view":o,onClick:()=>lh(o)},o==="3d"?"3D":"2D"),n==="3d"&&P.createElement(P.Fragment,null,P.createElement("button",{type:"button",className:`poly-round-btn ${i?"active":""}`,"data-control":"colour","aria-pressed":i,title:r,"aria-label":r,onClick:()=>eh(i?"surfaces":"height")},Rl(["M5 20V12","M10 20V7","M15 20V10","M20 20V4","M3 20h18"])),P.createElement("button",{type:"button",className:`poly-round-btn ${e.showGround?"active":""}`,"data-control":"ground","aria-pressed":e.showGround,title:s,"aria-label":Ke("display.ground"),onClick:()=>th(!e.showGround)},Rl(["M3 17l5-6 4 4 3-3 6 5","M3 20h18"]))))}function z_({levels:n,level:e,code:t}){return n.length?P.createElement("div",{className:"poly-floors",role:"group","aria-label":_e("floors.label",{code:t})},n.map(i=>P.createElement("button",{key:i.id,type:"button",className:i.id===e?"active":"","aria-pressed":i.id===e,title:_e("floors.show",{floor:i.name}),onClick:()=>oh(i.id===e?"":i.id)},i.name))):null}function B_({room:n}){return P.createElement("div",{className:"z3d-card poly-room-card",role:"dialog","aria-label":n.name},P.createElement("div",{className:"z3d-card-head"},P.createElement("span",null,n.name),P.createElement("button",{type:"button",className:"z3d-card-close",title:_e("room.close"),"aria-label":_e("room.close"),onClick:()=>Wt({room:null})},P.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true"},P.createElement("path",{d:"M18 6 6 18"}),P.createElement("path",{d:"m6 6 12 12"})))),P.createElement("dl",{className:"z3d-facts"},n.type&&P.createElement(P.Fragment,null,P.createElement("dt",null,_e("room.type")),P.createElement("dd",{title:n.type},n.type)),n.use&&P.createElement(P.Fragment,null,P.createElement("dt",null,_e("room.use")),P.createElement("dd",{title:n.use},n.use))))}function H_(){return P.createElement("div",{className:"poly-legend","aria-label":_e("legend.label")},N_.map(n=>P.createElement("span",{key:n},P.createElement("i",{style:{background:js[n]}}),_e(`room.kind.${n}`))))}function vf(){let n=Ni(),e=Li();P.useEffect(()=>{rh(),uo()},[]);let t=n.building,i=t?.code??null,r=P.useRef(0);e.focusOn===i&&(r.current=e.focus);let s=i?e.outlines?.find(x=>x.code===i)??null:null,o=i&&e.levels?.get(i)||[],a=o.some(x=>x.id===n.level)?n.level:"";P.useEffect(()=>{a&&ho(a)},[a]);let l=a?e.rooms.get(a)??null:null,c=a?e.roomsStatus.get(a):void 0,d=P.useMemo(()=>(e.outlines??[]).map(x=>({code:x.code,polygons:qs(x.polygons)})),[e.outlines]),h=P.useMemo(()=>{if(!s)return null;let x=d.find(T=>T.code===s.code)?.polygons??qs(s.polygons),m=a?Bd(o).get(a):void 0,f=e.room&&e.room.level===a?e.room:null;return{polygons:x,floor:l&&m!==void 0?{elevation:m,rooms:l.map(T=>T.id===f?.id?{color:L_,polygons:qs(T.polygons),picked:!0,label:Gd(T.name,i??"")}:{color:js[T.kind],polygons:qs(T.polygons)})}:null,focus:f?qs(f.polygons):null}},[s,d,a,l,o,e.room]),u=Ri(),p=t?`${t.code} \xB7 ${Xn(t)}`:_e("title"),y=n.view==="3d"&&t&&t.city!=="Z\xFCrich";return P.createElement("div",{className:"poly-page poly-campus-page"},P.createElement("div",{className:"poly-bar poly-page-head"},P.createElement("h1",{className:"poly-page-title",title:p},p)),P.createElement("div",{className:"poly-campus-body"},n.view==="map"?P.createElement(U_,{outlines:e.outlines,selected:i,rooms:l,room:e.room,focus:r.current,place:e.place}):P.createElement(xf,{area:h,focus:r.current,onPick:x=>{let m=x.map(f=>k_(f,d)).find(Boolean);m&&m!==i&&Di(m,_e("title"),!1)}}),i&&P.createElement(z_,{levels:o,level:a,code:i}),P.createElement(F_,{view:n.view}),P.createElement("div",{className:"poly-notes",role:"status"},a&&c==="loading"&&P.createElement("span",null,_e("floors.loading")),a&&c==="error"&&P.createElement("span",{className:"z3d-error"},_e("floors.failed")),e.outlinesStatus==="error"&&P.createElement("span",{className:"z3d-error"},_e("outlines.failed")),y&&P.createElement("span",null,_e("view.outside"))),P.createElement("div",{className:"poly-map-foot"},l&&l.length>0&&P.createElement(H_,null),(n.view==="map"||u.status==="ready")&&P.createElement("div",{className:"z3d-attribution"},n.view==="map"?_e("map.attribution"):`${Ke("model.attribution")} \xB7 ${_e("map.attribution")}`)),e.room&&P.createElement(B_,{room:e.room})))}var Xu={zentrum:"8591123",haldenegg:"8591174",hoengg:"8591122",hb:"8587348",hbQuai:"8587349"},cA=[Xu.zentrum,Xu.hoengg,Xu.hb];var V_=/^\d{4}-\d{2}-\d{2}$/,bf=n=>typeof n=="string"&&V_.test(n)&&!Number.isNaN(Date.parse(`${n}T00:00:00Z`)),$u=n=>{let e=new Date(`${n}T00:00:00Z`).getUTCDay();return e===0||e===6};function Yu(n,e,t=new Date){let[i,r,s]=n.split("-").map(Number),[o,a]=e.time.split(":").map(Number),l=new Date(i,r-1,s,o,a+(e.delay??0));return Math.floor((l.getTime()-t.getTime())/6e4)}var qu=(n,e,t=new Date)=>e.filter(i=>Yu(n,i,t)>=0);function _f(n){let e=[];for(let t of n)t.stops.length>e.length&&(e=t.stops.map(i=>i.name));return e}var ju="elink",Mf=n=>n===ju;var wf=["M5 16V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z","M5 11h14","M9 6h6","M8 14h.01","M16 14h.01","M7 17v3","M17 17v3"],Ef=`
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
`,G_=5,W_=["M15 6l-6 6 6 6"],Z_=["M9 6l6 6-6 6"],Sf=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],Zr=(n=new Date)=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,Ll=(n,e)=>{let t=new Date(`${n}T00:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)},X_=n=>{let e=Ll(n,1);for(;$u(e);)e=Ll(e,1);return e},$_=(n,e=new Date)=>bf(n)&&n>=Zr(e)?n:Zr(e);function Tf(n,e){let t=n.React,i=t.createElement,r=({shapes:M})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...M.map(L=>i("path",{key:L,d:L}))),s=(M,L)=>Object.entries(L).reduce((k,[z,V])=>k.replace(`{${z}}`,String(V)),M),o=M=>{let L=`elink.error.${M instanceof Error?M.message:""}`;return e(L)===L?e("elink.error.serviceError"):e(L)},a=M=>M===1?e("elink.runs.one"):s(e("elink.runs.other"),{count:M}),l=()=>n.ui.language()||"en",c=(M,L)=>new Intl.DateTimeFormat(l(),{...L,timeZone:"UTC"}).format(new Date(`${M}T00:00:00Z`)),d=M=>c(M,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),h=(M=!1)=>n.workspace.openMainTab({instanceId:ju,title:e("elink.title"),newTab:M}),u=M=>{n.settings.set("elinkDate",M)};function p(){let[,M]=t.useState(0);t.useEffect(()=>{let k=()=>M(N=>N+1),z=[n.ui.onLanguageChanged(k),n.settings.subscribe(k)],V=setInterval(k,2e4);return()=>{for(let N of z)N();clearInterval(V)}},[]);let L=new Date;return{date:$_(n.settings.get().elinkDate,L),now:L}}function y(M,L){let[k,z]=t.useState({key:"",data:null,error:"",loading:!0});return t.useEffect(()=>{let V=!0;return z(N=>({key:M,data:N.key===M?N.data:null,error:"",loading:!0})),n.backend.call("elink.day",{date:M,fresh:L>0}).then(N=>{V&&z({key:M,data:N,error:"",loading:!1})},N=>{V&&z({key:M,data:null,error:o(N),loading:!1})}),()=>{V=!1}},[M,L]),k}function x(){let[M,L]=t.useState(0),[k,z]=t.useState(!1);return{revision:M,refreshing:k,refresh:()=>{z(!0),L(N=>N+1),setTimeout(()=>z(!1),600)}}}let m=M=>(M?.directions??[]).filter(L=>L.departures.length>0),f=M=>s(e("elink.firstLast"),{first:M[0].time,last:M.at(-1).time});function T({run:M,date:L,now:k,isToday:z,next:V,arrival:N}){let H=M.stops.at(-1),$=z?Yu(L,M,k):null,K=$!==null&&$>=0&&$<60,se=M.stops.map(Y=>Y.time?`${Y.name} ${Y.time}`:Y.name).join(" \xB7 ");return i("div",{className:`elink-row${$!==null&&$<0?" past":""}${V?" next":""}`,"data-trip":M.trip,title:se},i("span",{className:"elink-line"},M.line),i("span",{className:"elink-to"},H.name),i("span",{className:"elink-time"},M.time,M.delay&&M.delay>0?i("span",{className:"elink-delay",title:s(e("elink.delay"),{minutes:M.delay})},`+${M.delay}`):null),N?i("span",{className:"elink-arrival",title:s(e("elink.arrival"),{time:H.time,stop:H.name})},H.time?`\u2192 ${H.time}`:""):null,i("span",{className:"elink-minutes","aria-label":K?s(e("elink.in"),{minutes:$}):void 0},K?`${$}'`:""))}function C({date:M}){let L=X_(M);return i("div",{className:"elink-empty",role:"status"},i("strong",null,e($u(M)?"elink.weekend":"elink.noService")),i("span",null,i("button",{type:"button",className:"elink-link",onClick:()=>u(L)},s(e("elink.showDay"),{day:c(L,{weekday:"long",day:"numeric",month:"long"})}))))}function _({direction:M,date:L,now:k,isToday:z}){let V=M.departures,N=(z?qu(L,V,k):V).slice(0,G_);return i("section",{className:"elink-group","data-direction":M.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${M.id}`)),i("span",{className:"elink-span",title:f(V)},`${V[0].time}\u2013${V.at(-1).time}`)),N.length?N.map((H,$)=>i(T,{key:`${H.trip}:${H.time}`,run:H,date:L,now:k,isToday:z,next:z&&$===0})):i("div",{className:"elink-note"},`${e("elink.ended")} `,i("button",{type:"button",className:"elink-link",onClick:H=>h(n.ui.hasModKey(H))},e("elink.showTimetable"))))}function S({date:M,refresh:L,refreshing:k}){let z=M===Zr(),V=`${c(M,{weekday:"short"})} ${c(M,{day:"numeric"})}`;return i("div",{className:"poly-bar"},i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("day.previous"),"aria-label":e("day.previous"),disabled:z,onClick:()=>u(Ll(M,-1))},i(r,{shapes:W_})),i("button",{type:"button",className:`poly-day-label${z?" today":""}`,title:`${d(M)} \xB7 ${e(z?"day.today":"day.backToToday")}`,"aria-current":z?"date":void 0,onClick:()=>u(Zr())},V),i("button",{type:"button",className:"poly-icon-btn",title:e("day.next"),"aria-label":e("day.next"),onClick:()=>u(Ll(M,1))},i(r,{shapes:Z_}))),i("button",{type:"button",className:`poly-icon-btn${k?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:L},i(r,{shapes:Sf})))}function E(){let{date:M,now:L}=p(),{revision:k,refreshing:z,refresh:V}=x(),N=y(M,k),H=m(N.data),$=M===Zr(L),K=N.error?i("div",{className:"poly-note error",role:"alert"},N.error):N.data?H.length?i(t.Fragment,null,...H.map(se=>i(_,{key:se.id,direction:se,date:M,now:L,isToday:$}))):i(C,{date:M}):i("div",{className:"poly-note"},e("elink.loading"));return i(t.Fragment,null,i(S,{date:M,refresh:V,refreshing:z}),i("div",{className:"elink-list"},K,i("div",{className:"elink-credit"},e("elink.credit"))))}function R({direction:M,date:L,now:k,isToday:z}){let V=M.departures,N=z?qu(L,V,k)[0]:void 0;return i("section",{className:"elink-group","data-direction":M.id},i("div",{className:"elink-head"},i("span",{className:"elink-title"},e(`elink.direction.${M.id}`)),i("span",{className:"elink-span"},`${a(V.length)} \xB7 ${f(V)}`)),i("div",{className:"elink-route"},_f(V).join(" \xB7 ")),V.map(H=>i(T,{key:`${H.trip}:${H.time}`,run:H,date:L,now:k,isToday:z,next:H===N,arrival:!0})))}function v({instanceId:M}){let{date:L,now:k}=p(),{revision:z,refreshing:V,refresh:N}=x(),H=y(L,z),$=m(H.data),K=L===Zr(k);t.useEffect(()=>{n.workspace.setMainTabTitle(e("elink.title"),M)},[M,n.ui.language()]);let se=H.error?i("div",{className:"poly-note error",role:"alert"},H.error):H.data?$.length?i("div",{className:"elink-columns"},$.map(Y=>i(R,{key:Y.id,direction:Y,date:L,now:k,isToday:K}))):i(C,{date:L}):i("div",{className:"poly-note"},e("elink.loading"));return i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:"poly-bar-balance","aria-hidden":!0}),i("h1",{className:"poly-page-title"},`${e("elink.title")} \xB7 ${d(L)}`),i("button",{type:"button",className:`poly-icon-btn${V?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:N},i(r,{shapes:Sf}))),i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},se,i("div",{className:"elink-credit"},e("elink.credit")))))}return{ElinkPanelBody:E,ElinkPage:v,openElink:h}}var Pf=`
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
`,Y_=["M15 6l-6 6 6 6"],q_=["M9 6l6 6-6 6"],Af=["M20 11a8 8 0 0 0-14.9-3.9L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4","M20 20v-4.5h-4.5"],j_=["M14 4h6v6","M20 4l-9 9","M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],K_=["M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z","M4 9h16","M10 4v5"],Lf=["M6 3v7a2 2 0 0 0 2 2a2 2 0 0 0 2-2V3","M8 3v18","M17 21V3c-2.2 1.2-3.5 3.8-3.5 7.2V13a1 1 0 0 0 1 1H17"],J_=["M3.5 11.5h17a8.5 6.5 0 0 1-17 0z","M9 20.5h6","M12 11.5c0-3.6 2.1-6.2 6.3-6.8 0 3.9-2.5 6.4-6.3 6.8","M12 11.5l3.2-3.2","M9.6 11.5c-.3-2.1-1.7-3.5-3.8-3.8"],Q_={students:["M2.5 9.5L12 5.5l9.5 4-9.5 4z","M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4","M21.5 9.5v5"],internal:["M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z","M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2","M3 13h18"],external:["M8.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0","M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"]},Cf="M4 4l16 16",eM={vegetarian:["M5 19c0-8 5-13.5 14-14 0 9-5 14-13 14","M5 19l7.5-7.5"],vegan:["M12 20v-8","M12 12c0-3.3-2.7-6-6-6H4v1c0 3.3 2.7 6 6 6h2","M12 10c0-3.3 2.7-6 6-6h2v1c0 3.3-2.7 6-6 6h-2"],glutenFree:["M12 21V8","M12 8c-1.7-.8-2.8-2.4-2.8-4.5 1.7.8 2.8 2.4 2.8 4.5z","M12 8c1.7-.8 2.8-2.4 2.8-4.5-1.7.8-2.8 2.4-2.8 4.5z","M12 13.5c-1.9-.6-3.3-2.1-3.5-4.2 1.9.6 3.3 2.1 3.5 4.2z","M12 13.5c1.9-.6 3.3-2.1 3.5-4.2-1.9.6-3.3 2.1-3.5 4.2z",Cf],lactoseFree:["M8.5 3h7","M9 3v3L7 9.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5L15 6V3","M7 12.5h10",Cf]},tM={eth:["M2 20h20","M3 20v-7h5","M16 13h5v7","M8 20V8h8v12","M7 8h10","M12 8V4","M10.5 10.5V14","M13.5 10.5V14","M10.5 20v-2.5a1.5 1.5 0 0 1 3 0V20","M5.5 16.5h.01","M18.5 16.5h.01"],hoengg:["M3 19h18","M3 19l6-9 4 5 3-3 5 7","M15 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0"],uzh:["M2 20h20","M3 20v-6l1.5-2h4","M15.5 12h4l1.5 2v6","M8.5 20v-9h7v9","M8.5 11a3.5 3.5 0 0 1 7 0","M12 7.5V6","M10.5 20v-2.5a1.5 1.5 0 0 1 3 0V20","M5.5 16.5h.01","M18.5 16.5h.01"]},Ks=["elink","menu","campus"],nM={elink:wf,menu:Lf,campus:fo},iM=n=>n==="elink"?"elink":n==="campus"||n==="city"?"campus":"menu",Nf=["M12 3.6l2.6 5.25 5.8.85-4.2 4.1 1 5.8L12 16.85 6.8 19.6l1-5.8-4.2-4.1 5.8-.85z"],If=["favorites",...wd],rM={favorites:Nf,...tM},Rf={favorites:"palette:yellow",eth:"palette:primary-blue",hoengg:"palette:green",uzh:"palette:violet"},sM=["all","students","internal","external"],Nl=[["vegetarian","onlyVegetarian"],["vegan","onlyVegan"],["glutenFree","onlyGlutenFree"],["lactoseFree","onlyLactoseFree"]];function Df(n,{t:e}){let t=n.React,i=t.createElement,r=({shapes:I})=>i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},...I.map(U=>i("path",{key:U,d:U}))),s=I=>{let U=`error.${I instanceof Error?I.message:""}`;return e(U)===U?e("error.serviceError"):e(U)},o=(I,U)=>Object.entries(U).reduce((ie,[j,ae])=>ie.replace(`{${j}}`,String(ae)),I),a=I=>Array.isArray(I)?I.filter(U=>typeof U=="string"):[],l=I=>I===1?e("menus.one"):o(e("menus.other"),{count:I});function c(I){let U=I&&typeof I=="object"?I:{},ie=io();return!Ad(U.date)||U.date<Ai(ie)?{date:ie,service:Id()}:{date:U.date,service:U.service==="dinner"?"dinner":"lunch"}}function d(){let[,I]=t.useState(0);t.useEffect(()=>{let ie=()=>I(ae=>ae+1),j=[n.ui.onLanguageChanged(ie),n.settings.subscribe(ie)];return()=>{for(let ae of j)ae()}},[]);let U=n.settings.get();return{language:Rd(n.ui.language()),locale:n.ui.language()||"en",mode:iM(U.mode),campus:If.includes(U.campus)?U.campus:"hoengg",favorites:a(U.favorites),prices:sM.includes(U.prices)?U.prices:"all",filters:{vegetarian:U.onlyVegetarian===!0,vegan:U.onlyVegan===!0,glutenFree:U.onlyGlutenFree===!0,lactoseFree:U.onlyLactoseFree===!0},...c(U.day)}}let h=I=>{n.settings.set("day",I)};function u(I,U,ie){let[j,ae]=t.useState({data:null,error:"",loading:I!==null});return t.useEffect(()=>{if(I===null)return;let A=!0;return ae(Ne=>({data:Ne.data,error:"",loading:!0})),ie(U>0).then(Ne=>{A&&ae({data:Ne,error:"",loading:!1})},Ne=>{A&&ae({data:null,error:s(Ne),loading:!1})}),()=>{A=!1}},[I,U]),j}function p(I){let[U,ie]=t.useState(!1);return t.useEffect(()=>{let j=I.current,ae=j?.ownerDocument.defaultView?.IntersectionObserver;if(!j||U)return;if(!ae){ie(!0);return}let A=new ae(Ne=>{Ne.at(-1)?.isIntersecting&&(ie(!0),A.disconnect())},{rootMargin:"300px"});return A.observe(j),()=>A.disconnect()},[U]),U}let y=(I,U,ie=!0)=>{let j=Ai(I.date);return u(ie?`${I.language}:${j}`:null,U,ae=>n.backend.call("eth.week",{monday:j,language:I.language,fresh:ae}))};function x(I,U){let ie=Ai(I.date),j=u(I.language,U,g=>n.backend.call("uzh.outlets",{language:I.language,fresh:g})),[ae,A]=t.useState({key:"",byPath:new Map}),Ne=`${I.language}:${ie}:${U}`;t.useEffect(()=>{let g=j.data;if(!g)return;let F=!0;A({key:Ne,byPath:new Map(g.map(G=>[G.path,{data:null,error:"",loading:!0}]))});for(let G of g)n.backend.call("uzh.week",{path:G.path,monday:ie,language:I.language,fresh:U>0,background:!0}).then(q=>({data:q,error:"",loading:!1}),q=>({data:null,error:s(q),loading:!1})).then(q=>{F&&A(ce=>ce.key===Ne?{key:Ne,byPath:new Map(ce.byPath).set(G.path,q)}:ce)});return()=>{F=!1}},[j.data,Ne]);let Me=ae.key===Ne?ae.byPath:new Map,w=j.data?Me.size<j.data.length||[...Me.values()].some(g=>g.loading):!j.error;return{outlets:j,byPath:Me,pending:w}}let m=(I,U,ie)=>new Intl.DateTimeFormat(U,{...ie,timeZone:"UTC"}).format(new Date(`${I}T00:00:00Z`)),f=(I,U)=>m(I,U,{weekday:"long",day:"numeric",month:"long",year:"numeric"});function T(I){return[...I.diet?[{key:I.diet,label:e(`diet.${I.diet}`)}]:[],...I.gluten===!1?[{key:"glutenFree",label:e("filter.glutenFree")}]:[],...I.lactose===!1?[{key:"lactoseFree",label:e("filter.lactoseFree")}]:[],...I.classes.map(U=>({key:"",label:U})),...I.climate?[{key:I.climate,label:e(`climate.${I.climate}`)}]:[]]}function C(I,U){let ie=U==="all"?void 0:Td(I,U),j=U==="all"?Ed(I):ie?[ie]:[];return{short:j.length?`CHF ${j.map(ae=>ae.price.toFixed(2)).join(" / ")}`:"",long:j.map(ae=>`${e(`price.${ae.group}`)} ${Dd(ae.price)}`).join(" \xB7 ")}}let _=({dish:I})=>{let U=T(I);return U.length?i("span",{className:"poly-tags"},U.map(ie=>i("span",{key:`${ie.key}:${ie.label}`,className:`poly-tag ${ie.key}`},ie.label))):null};function S({dish:I,shown:U,revision:ie}){let j=t.useRef(null),ae=p(j),A=u(ae&&I.detail?I.detail:null,ie,F=>n.backend.call("uzh.dish",{url:I.detail,fresh:F})),Ne=I.image||A.data?.image||"",Me=u(ae&&Ne?Ne:null,0,()=>n.backend.call("image",{url:Ne})),w=I.prices.length?I.prices:A.data?.prices??[],g=C(w,U);return i("div",{ref:j,className:"poly-card","data-dish":I.id},i("span",{className:"poly-card-image"},i(r,{shapes:Lf}),Me.data?i("img",{src:Me.data,alt:I.name,draggable:!1}):null),i("span",{className:"poly-card-body"},i("span",{className:"poly-dish-top"},i("span",{className:"poly-dish-line"},I.line),g.short?i("span",{className:"poly-dish-price",title:g.long,"aria-label":g.long},g.short):null),i("span",{className:"poly-dish-name"},I.name),I.description?i("span",{className:"poly-dish-description"},I.description):null,i("span",{className:"poly-dish-allergens"},I.allergens.length?`${e("allergens")}: ${I.allergens.join(", ")}`:e("allergens.none")),i(_,{dish:I})))}function E({location:I,date:U,service:ie}){let j=Gl(I,U,ie);if(!j)return null;let ae=`${j.from}\u2013${j.to}`,A=Ld(j,U);return A==="open"?i("span",{className:"poly-open"},o(e("hours.openNow"),{hours:ae})):A==="closed"?i("span",{className:"poly-closed"},o(e("hours.closed"),{hours:ae})):i("span",null,o(e("hours.open"),{hours:ae}))}let R=I=>[I.area,I.place].filter(Boolean).join(" \xB7 "),v=(I,U)=>n.workspace.openMainTab({instanceId:Wl(I.id),title:I.name,newTab:U}),M=async(I,U,ie)=>{I.preventDefault();let j=await n.ui.openMenu([{id:"tab",label:e("openInNewTab"),icon:i(r,{shapes:K_})},{id:"website",label:e("openWebsite"),icon:i(r,{shapes:j_}),enabled:!!U.url},{type:"separator"},{id:"refresh",label:e("refresh"),icon:i(r,{shapes:Af})}],{x:I.clientX,y:I.clientY});j==="tab"&&v(U,!0),j==="website"&&U.url&&n.links.open(U.url),j==="refresh"&&ie()};function L({preferences:I}){return i("div",{className:"poly-groups",role:"group","aria-label":e("prices")},...["students","internal","external"].map(U=>{let ie=I.prices===U,j=`${e("prices")} \xB7 ${e(`price.${U}`)}`;return i("button",{key:U,type:"button",className:`poly-icon-btn${ie?" active":""}`,title:j,"aria-label":j,"aria-pressed":ie,onClick:()=>{n.settings.set("prices",ie?"all":U)}},i(r,{shapes:Q_[U]}))}))}function k({preferences:I}){let U=Pd(I.filters),ie=async ae=>{let A=await n.ui.openMenu([...Nl.flatMap(([Me],w)=>[...w===2?[{type:"separator"}]:[],{id:Me,type:"checkbox",label:e(`filter.${Me}`),icon:i(r,{shapes:eM[Me]}),checked:I.filters[Me]}]),...U?[{type:"separator"},{id:"clear",label:e("filter.clear")}]:[]],{anchor:ae.currentTarget,align:"end"});if(!A)return;if(A==="clear"){for(let[,Me]of Nl)n.settings.set(Me,!1);return}let Ne=Nl.find(([Me])=>Me===A);Ne&&n.settings.set(Ne[1],!I.filters[Ne[0]])},j=U?`${e("filter")} \xB7 ${Nl.filter(([ae])=>I.filters[ae]).map(([ae])=>e(`filter.${ae}`)).join(", ")}`:e("filter");return i("button",{type:"button",className:`poly-icon-btn${U?" active":""}`,title:j,"aria-label":j,"aria-haspopup":"menu",onClick:ie},i(r,{shapes:J_}))}let z=(I,U,ie,j)=>i("button",{key:I,type:"button",className:I===U?"active":"","aria-pressed":I===U,onClick:()=>j(I)},ie),V=({preferences:I})=>i("div",{className:"poly-seg",role:"group","aria-label":e("service.label")},z("lunch",I.service,e("service.lunch"),U=>h({date:I.date,service:U})),z("dinner",I.service,e("service.dinner"),U=>h({date:I.date,service:U})));function N({preferences:I}){let{date:U,service:ie,locale:j}=I,ae=io(),A=Ai(U),Ne=A<=Ai(ae);return i("div",{className:"poly-day"},i("button",{type:"button",className:"poly-icon-btn",title:e("week.previous"),"aria-label":e("week.previous"),disabled:Ne,onClick:()=>{let Me=jr(U,-7);h({date:Me<ae?ae:Me,service:ie})}},i(r,{shapes:Y_})),i("div",{className:"poly-week-days",role:"group","aria-label":e("week.label")},...Array.from({length:7},(Me,w)=>{let g=jr(A,w),F=g===ae;return i("button",{key:g,type:"button",className:`poly-week-day${F?" today":""}${g===U?" selected":""}`,title:F?`${f(g,j)} \xB7 ${e("day.today")}`:f(g,j),"aria-label":f(g,j),"aria-pressed":g===U,"aria-current":F?"date":void 0,onClick:()=>h({date:g,service:ie})},i("span",{className:"poly-week-name"},m(g,j,{weekday:"short"})),i("span",{className:"poly-week-date"},m(g,j,{day:"numeric"})))})),i("button",{type:"button",className:"poly-icon-btn",title:e("week.next"),"aria-label":e("week.next"),onClick:()=>h({date:jr(U,7),service:ie})},i(r,{shapes:q_})))}function H(){let[I,U]=t.useState(0),[ie,j]=t.useState(!1);return{revision:I,refreshing:ie,refresh:()=>{j(!0),U(A=>A+1),setTimeout(()=>j(!1),600)}}}function $(I,U){let ie=y(I,U),j=x(I,U),{date:ae,service:A,filters:Ne}=I,Me=J=>!!Ki(J,ae,A),w=(ie.data??[]).filter(Me).sort((J,ue)=>J.name.localeCompare(ue.name,I.locale)),g=(j.outlets.data??[]).flatMap(J=>{let ue=j.byPath.get(J.path)?.data;return ue&&Me(ue)?[ue]:[]}),G={favorites:[...w,...g].filter(J=>I.favorites.includes(J.id)).sort((J,ue)=>J.name.localeCompare(ue.name,I.locale)),eth:w.filter(J=>J.campus==="eth"),hoengg:w.filter(J=>J.campus==="hoengg"),uzh:g},q=J=>ro(J,ae,A,Ne).length,ce=ie.loading&&!ie.data,de={favorites:ce||j.pending,eth:ce,hoengg:ce,uzh:j.pending},ee={favorites:"",eth:ie.error,hoengg:ie.error,uzh:j.outlets.error};return{byTag:G,count:q,pending:de,error:ee,hasFavorites:I.favorites.length>0}}function K(I,U){let ie=If.filter(ae=>ae==="favorites"?I.hasFavorites:I.pending[ae]||I.byTag[ae].length>0),j=ie.length?ie:[U];return{visible:j,active:j.includes(U)?U:j[0]}}function se({places:I,visible:U,active:ie}){return i("nav",{className:"poly-bar poly-tiles","aria-label":e("campus.label")},U.map(j=>{let ae=I.byTag[j].filter(Ne=>I.count(Ne)>0).length,A=e(`campus.${j}`);return i("button",{key:j,type:"button",className:`poly-tile${j===ie?" active":""}`,"aria-pressed":j===ie,title:e(`campus.${j}.title`),"aria-label":`${e(`campus.${j}.title`)} ${ae}`,style:{"--poly-tile-color":_d(Rf[j]),"--poly-tile-on":Md(Rf[j])},onClick:()=>{n.settings.set("campus",j)}},i("span",{className:"poly-tile-icon"},i(r,{shapes:rM[j]})),i("span",null,A),i("span",{className:"poly-tile-count"},I.pending[j]&&!ae?"\u2026":String(ae)))}))}function Y(){let I=()=>{let j=n.getState().activePluginTab;return j?.pluginId===n.pluginId?j.instanceId:void 0},[U,ie]=t.useState(I);return t.useEffect(()=>n.subscribe(()=>ie(I())),[]),U}let re=(I,U)=>{n.settings.set("favorites",I.favorites.includes(U)?I.favorites.filter(ie=>ie!==U):[...I.favorites,U].slice(-200))};function oe({location:I,preferences:U}){let ie=U.favorites.includes(I.id),j=o(e(ie?"favorite.remove":"favorite.add"),{name:I.name});return i("button",{type:"button",className:`poly-star${ie?" on":""}`,"aria-pressed":ie,title:j,"aria-label":j,onClick:()=>re(U,I.id)},i(r,{shapes:Nf}))}function Fe({location:I,preferences:U,count:ie,active:j,tag:ae,refresh:A}){let Ne=i(E,{location:I,date:U.date,service:U.service}),Me=[ae==="favorites"&&I.source==="eth"?e(`campus.${I.campus}`):"",R(I)].filter(Boolean).join(" \xB7 ");return i("div",{className:"poly-place-item"},i("button",{type:"button",className:`poly-place${j?" active":""}`,"data-place":I.id,"aria-current":j?"page":void 0,onClick:w=>v(I,n.ui.hasModKey(w)),onAuxClick:w=>{w.button===1&&(w.preventDefault(),v(I,!0))},onContextMenu:w=>{M(w,I,A)}},i("span",{className:"poly-place-name"},I.name),i("span",{className:"poly-place-count"},l(ie)),i("span",{className:"poly-place-meta"},Me,Me&&Gl(I,U.date,U.service)?" \xB7 ":null,Ne)),i(oe,{location:I,preferences:U}))}function Ce(I,U,ie,j){return I.pending[U]&&!ie.length?e(U==="uzh"?"loading.uzh":"loading"):ie.length?I.pending[U]?e("loading.uzh"):"":I.byTag[U].length?e("empty.filtered"):e(U==="favorites"?"empty.favorites":`empty.${j.service}`)}function mt({places:I,campus:U,preferences:ie,refresh:j}){let ae=Y();if(I.error[U])return i("div",{className:"poly-note error",role:"alert"},I.error[U]);let A=I.byTag[U].filter(w=>I.count(w)>0),Ne=A.map(w=>i(Fe,{key:w.id,location:w,preferences:ie,count:I.count(w),active:ae===Wl(w.id),tag:U,refresh:j})),Me=Ce(I,U,A,ie);return i(t.Fragment,null,...Ne,Me?i("div",{className:"poly-note"},Me):null)}let et=I=>e(I==="elink"?"elink.title":I==="campus"?"campusMap.title":"menu.title"),st=Tf(n,e);function Q({preferences:I}){return i("div",{className:"poly-tabs",role:"tablist","aria-label":e("mode.label")},Ks.map((U,ie)=>i("button",{key:U,type:"button",role:"tab",className:`poly-tab ${U===I.mode?"active":""}`,"aria-selected":U===I.mode,tabIndex:U===I.mode?0:-1,title:et(U),"aria-label":et(U),"data-mode":U,onClick:()=>{n.settings.set("mode",U)},onKeyDown:j=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(j.key))return;j.preventDefault();let ae=j.key==="Home"?0:j.key==="End"?Ks.length-1:(ie+(j.key==="ArrowLeft"?-1:1)+Ks.length)%Ks.length;n.settings.set("mode",Ks[ae]),j.currentTarget.parentElement?.children[ae]?.focus()}},i(r,{shapes:nM[U]}))))}function ne({preferences:I}){let U=I.mode,ie=ae=>U==="elink"?st.openElink(ae):U==="campus"?Fn(e("campusMap.title"),ae):n.workspace.openMainTab({newTab:ae}),j=e(U==="elink"?"elink.openPage":U==="campus"?"campusMap.openPage":"openPage");return i("div",{className:"panel-header"},i("span",{className:"panel-title"},et(I.mode)),i("div",{className:"poly-actions"},i("button",{type:"button",className:"plugin-open-page",title:j,"aria-label":j,onClick:ae=>ie(n.ui.hasModKey(ae)),onAuxClick:ae=>{ae.button===1&&(ae.preventDefault(),ie(!0))}})))}function we({preferences:I}){let{revision:U,refresh:ie}=H(),j=$(I,U),{visible:ae,active:A}=K(j,I.campus);return i(t.Fragment,null,i(se,{places:j,visible:ae,active:A}),i("div",{className:"poly-bar poly-week"},i(N,{preferences:I})),i("div",{className:"poly-bar"},i(V,{preferences:I}),i("div",{className:"poly-spacer"}),i(L,{preferences:I}),i("div",{className:"poly-divider","aria-hidden":!0}),i(k,{preferences:I})),i("div",{className:"poly-list"},i(mt,{places:j,campus:A,preferences:I,refresh:ie}),i("div",{className:"poly-credit"},e(A==="uzh"?"credit.uzh":A==="favorites"?"credit.both":"credit.eth"))))}function Ge(){let I=d();return t.useEffect(()=>{n.settings.get().mode==="city"&&n.settings.set("mode","campus")},[]),i("div",{className:"poly-panel"},i(ne,{preferences:I}),i(Q,{preferences:I}),I.mode==="elink"?i(st.ElinkPanelBody,null):I.mode==="campus"?i(uh,null):i(we,{preferences:I}))}function be({location:I,preferences:U,revision:ie}){let j=ro(I,U.date,U.service,U.filters);return j.length?i("div",{className:"poly-cards"},j.map(ae=>i(S,{key:ae.id,dish:ae,shown:U.prices,revision:ie}))):i("div",{className:"poly-note"},Ki(I,U.date,U.service)?e("empty.filtered"):e("empty.location"))}function qe({location:I,preferences:U}){let ie=Ki(I,U.date,U.service),j=ro(I,U.date,U.service,U.filters).length;return i("div",{className:"poly-facts-inner"},R(I)?i("span",{className:"poly-facts-where",title:R(I)},R(I)):null,i(E,{location:I,date:U.date,service:U.service}),ie?.from&&ie.to?i("span",null,o(e(`service.time.${U.service}`),{hours:`${ie.from}\u2013${ie.to}`})):null,ie?i("span",null,l(j)):null)}let wt=(...I)=>i("div",{className:"poly-list"},i("div",{className:"poly-page-inner"},...I));function Qe({place:I,preferences:U,revision:ie,onTitle:j,onLocation:ae}){let A=Ai(U.date),Ne=y(U,ie,I.source==="eth"),Me=u(I.source==="uzh"?`${U.language}:${I.key}:${A}`:null,ie,G=>n.backend.call("uzh.week",{path:I.key,monday:A,language:U.language,fresh:G})),w=I.source==="eth"?Ne:Me,g=I.source==="eth"?Ne.data?.find(G=>G.id===I.id)??null:Me.data;t.useEffect(()=>{g&&j(g.name),ae(g)},[g]);let F=i("div",{className:"poly-bar poly-facts"},g?i(qe,{location:g,preferences:U}):null);return w.error?i(t.Fragment,null,F,wt(i("div",{className:"poly-note error",role:"alert"},w.error))):g?i(t.Fragment,null,F,wt(i(be,{location:g,preferences:U,revision:ie}),i("div",{className:"poly-credit"},e(g.source==="uzh"?"credit.uzh":"credit.eth")))):i(t.Fragment,null,F,wt(i("div",{className:"poly-note"},w.loading?e("loading"):e("error.notFound"))))}function ot({preferences:I,revision:U,refresh:ie,onTitle:j}){let ae=$(I,U),{active:A}=K(ae,I.campus),Ne=e(`campus.${A}.title`);if(t.useEffect(()=>{j(Ne)},[Ne]),ae.error[A])return wt(i("div",{className:"poly-note error",role:"alert"},ae.error[A]));let Me=ae.byTag[A].filter(w=>ae.count(w)>0);return wt(...Me.map(w=>i("section",{key:w.id,className:"poly-section","data-place":w.id},i("button",{type:"button",className:"poly-place-link",onClick:g=>v(w,n.ui.hasModKey(g)),onAuxClick:g=>{g.button===1&&(g.preventDefault(),v(w,!0))},onContextMenu:g=>{M(g,w,ie)}},i("span",{className:"poly-place-link-name"},w.name),i("span",{className:"poly-place-link-meta"},R(w))),i(be,{location:w,preferences:I,revision:U}))),Ce(ae,A,Me,I)?i("div",{className:"poly-note"},Ce(ae,A,Me,I)):null,i("div",{className:"poly-credit"},e(A==="uzh"?"credit.uzh":A==="favorites"?"credit.both":"credit.eth")))}function gt({instanceId:I}){let U=d(),{revision:ie,refreshing:j,refresh:ae}=H(),A=Nd(I),[Ne,Me]=t.useState(""),[w,g]=t.useState(null);return t.useEffect(()=>{n.workspace.setMainTabTitle(A&&Ne||e("menu.title"),I)},[I,Ne,n.ui.language()]),i("div",{className:"poly-page"},i("div",{className:"poly-bar poly-page-head"},i("span",{className:`poly-bar-balance${A?" double":""}`,"aria-hidden":!0}),i("h1",{className:"poly-page-title"},Ne),A&&w?i(oe,{location:w,preferences:U}):A?i("span",{className:"poly-bar-balance","aria-hidden":!0}):null,i("button",{type:"button",className:`poly-icon-btn${j?" spinning":""}`,title:e("refresh"),"aria-label":e("refresh"),onClick:ae},i(r,{shapes:Af}))),A?i(Qe,{place:A,preferences:U,revision:ie,onTitle:Me,onLocation:g}):i(ot,{preferences:U,revision:ie,refresh:ae,onTitle:Me}))}n.registerView("poly.panel",Ge);let tt=I=>Mf(I.instanceId)?i(st.ElinkPage,I):Pi(I.instanceId)?i(vf,null):i(gt,I);n.registerView("poly.page",tt)}var Ku="poly-city-styles",oM=`
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
`;function kf(){let n=document.getElementById(Ku);n||(n=document.createElement("style"),n.id=Ku,document.head.appendChild(n)),n.textContent=oM;let e=n;return()=>{document.getElementById(Ku)===e&&e.remove()}}var Xr="valley";var MA=`.${Xr}`,SA=`app.${Xr}`;var aM=[`.${Xr}`,".git"],lM=[".obsidian",".trash"];var TA=new Set(aM.map(n=>n.toLowerCase()));var AA=new Set(lM.map(n=>n.toLowerCase()));function cM(n){return n.trim().replace(/\\/g,"/").replace(/\/{2,}/g,"/").replace(/^\.?\/+/,"").replace(/\/+$/,"")}var uM=/^[a-zA-Z]:/;function Uf(n){if(typeof n!="string")return"";let e=cM(n);return!e||e==="."||uM.test(e)||e.split("/").some(t=>t==="..")?"":e}var Nt=`.${Xr}`,dM="plugins",Js=`${Nt}/${dM}`,Dl=`${Js}/packages`,NA=`${Dl}/core`,DA=`${Dl}/github`,kA=`${Dl}/local`,OA=`${Dl}/community`,UA=`${Js}/community.json`,FA=`${Js}/data`;var zA=`${Js}/enabled.json`,BA=`${Js}/sources.json`,HA=`${Nt}/state`,Gt=`${Nt}/settings`,Of=`${Nt}/data`,Ju=`${Nt}/recovery`;var Qu=`${Nt}/accounts`,$r=`${Nt}/ai`,VA=`${$r}/connections.json`,GA=`${$r}/defaults.json`,WA=`${$r}/budgets.json`,ZA=`${$r}/usage.sqlite`,XA=`${$r}/security/guards.json`,$A=`${$r}/security/activity.sqlite`,YA=`${Qu}/providers`,qA=`${Qu}/providers.lock.json`,hM=`${Nt}/trash`,jA=`${hM}/items`,ed=`${Nt}/cache`,KA=`${ed}/accounts`,Ff=`${ed}/search`,JA=`${ed}/providers`;var QA=`${Ff}/index.jsonl`,eC=`${Ff}/content-index.bin`,tC=`${Ju}/drafts`,nC=`${Ju}/transactions`,iC=`${Ju}/retired`;var si="design",pM="themes",zf=`${Nt}/${si}/${pM}`,rC=`${zf}/local`,sC=`${zf}/community`;var oC={app:`${Gt}/app.json`,appearance:`${Nt}/${si}/appearance.json`,"icon-rail":`${Nt}/${si}/icon-rail.json`,"tab-rail":`${Nt}/${si}/tab-rail.json`,"footer-rail":`${Nt}/${si}/footer-rail.json`,"plugin-startup":`${Nt}/${si}/right-sidebar-startup.json`,"new-tab":`${Nt}/${si}/new-tab.json`,pallette:`${Nt}/${si}/palette.json`,group:`${Of}/groups.json`,units:`${Of}/units.json`,metadata:`${Gt}/file-viewers.json`,notification:`${Gt}/notification-types.json`,"notification-settings":`${Gt}/notification.json`,preferences:`${Gt}/preferences.json`,"link-actions":`${Gt}/link-actions.json`,markdown:`${Gt}/markdown.json`,editor:`${Gt}/editor.json`,"editor-vim":`${Gt}/editor-vim.json`,"markdown-todo":`${Gt}/markdown-todo.json`,"markdown-codeblocks":`${Gt}/markdown-codeblocks.json`,"markdown-template":`${Gt}/markdown-template.json`,"markdown-embeed":`${Gt}/markdown-embeed.json`,files:`${Gt}/file.json`,"file-sorter":`${Gt}/file-sorter.json`,search:`${Gt}/search.json`,"search-tag":`${Gt}/search-tag.json`,"search-content":`${Gt}/search-content.json`,design:`${Nt}/${si}/appearance.json`,accounts:`${Qu}/connections.json`};var fM=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),Bf=16384;var Hf=new Set(["__proto__","prototype","constructor"]);function Vf(n){let e=0;for(let t of n){let i=t.codePointAt(0);e+=i<=127?1:i<=2047?2:i<=65535?3:4}return e}function nd(n){let e=new WeakSet,t=0,i=(s,o)=>{if(++t>8192||o>32)throw new Error("Bookmark state is too complex");if(s===null||typeof s=="boolean")return s;if(typeof s=="string"){if(Vf(s)>Bf)throw new Error("Bookmark state is too large");return s}if(typeof s=="number")return Number.isFinite(s)?Object.is(s,-0)?0:s:void 0;if(!s||typeof s!="object"||e.has(s))return;let a=Array.isArray(s),l=Object.getPrototypeOf(s);if(!(!a&&l!==null&&(Object.getPrototypeOf(l)!==null||typeof Object.getOwnPropertyDescriptor(l,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(l,"constructor").value)!=="function Object() { [native code] }"))){e.add(s);try{let c=Reflect.ownKeys(s);if(c.length+t>8192||c.some(u=>typeof u=="string"&&Hf.has(u)))throw new Error("Invalid or excessive bookmark state keys");let d=Object.getOwnPropertyDescriptors(s);if(a){let u=d.length?.value;if(!Number.isSafeInteger(u)||u>8192)throw new Error("Bookmark state is too complex");return Array.from({length:u},(p,y)=>{let x=d[String(y)];return x&&"value"in x?i(x.value,o+1)??null:null})}let h={};for(let u of Object.keys(d).sort()){if(Hf.has(u))throw new Error("Invalid bookmark state key");let p=d[u];if(!p.enumerable||!("value"in p)){t++;continue}let y=i(p.value,o+1);y!==void 0&&(h[u]=y)}return h}finally{e.delete(s)}}},r=i(n,0);if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Invalid bookmark state");if(Vf(JSON.stringify(r))>Bf)throw new Error("Bookmark state is too large");return r}function Zf(n){if(typeof n!="string"||n.length>4096||/[\u0000-\u001f]/.test(n)||/^(?:[\\/]|[A-Za-z]:)/.test(n))throw new Error("Invalid bookmark path");let e=Uf(n);if(!e)throw new Error("Invalid bookmark path");return e}function td(n,e,t){if(typeof n!="string"||n.length>e||/[\u0000-\u001f]/.test(n))throw new Error(`Invalid bookmark ${t}`);return n.trim().normalize("NFC")}function Gf(n){let t=(n.target?["path","filePath","file"].flatMap(r=>typeof n.target.state[r]=="string"?[n.target.state[r]]:[]):[n.folderPath]).join(" "),i=/\.[^./]+$/.exec(t)?.[0]??"";return[n.title,n.description,t,i,n.providerName,n.target?.pluginId].filter(Boolean).join(" ").normalize("NFC").toLowerCase()}function id(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid plugin bookmark");let e=n;if(e.kind!=="plugin"||typeof e.pluginId!="string"||!/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(e.pluginId)||!fM.has(e.surface))throw new Error("Invalid plugin bookmark target");if(e.instanceId!==void 0&&(typeof e.instanceId!="string"||e.instanceId.length>512))throw new Error("Invalid bookmark instance");if(e.itemId!==void 0&&(typeof e.itemId!="string"||!e.itemId||e.itemId.length>2048||/[\u0000-\u001f]/.test(e.itemId)))throw new Error("Invalid bookmark item");if(!e.state||typeof e.state!="object"||Array.isArray(e.state))throw new Error("Invalid bookmark state");let t=nd(e.state);return t.path!==void 0&&(t.path=Zf(t.path)),{kind:"plugin",pluginId:e.pluginId,surface:e.surface,state:t,...e.instanceId===void 0?{}:{instanceId:e.instanceId},...e.itemId===void 0?{}:{itemId:e.itemId}}}var mM=/^[A-Za-z0-9_-]{1,64}$/;function Wf(n,e){if(typeof n!="string"||!mM.test(n))throw new Error(`Invalid bookmark ${e}`);return n}function Xf(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark");let e=n,t=td(e.title,512,"title"),i={...e.description===void 0?{}:{description:td(e.description,1024,"description")},...e.providerName===void 0?{}:{providerName:td(e.providerName,256,"provider name")},...typeof e.createdAt=="number"&&Number.isSafeInteger(e.createdAt)&&e.createdAt>=0?{createdAt:e.createdAt}:{}},r=e.group===void 0?{}:{group:Wf(e.group,"group")};if(e.groupId!==void 0){let a=Wf(e.groupId,"group id");if(!t||e.target!==void 0)throw new Error("Invalid bookmark group");return{folderPath:"",title:t,groupId:a,...i}}if(e.target!==void 0){let a={folderPath:"",title:t,target:id(e.target),...i,...r};return{...a,searchText:Gf(a)}}if(typeof e.folderPath!="string")throw new Error("Invalid bookmark path");let o={folderPath:Zf(e.folderPath),title:t,...i,...r};return{...o,searchText:Gf(o)}}function Qs(n){let e=0,t=s=>!!(s&&typeof s=="object"&&!Array.isArray(s)),i=s=>s.length>0&&s.length<=256&&!["__proto__","prototype","constructor"].includes(s),r=(s,o)=>{if(++e>2048||o>32||!t(s)||typeof s.type!="string")return!1;let a=(...l)=>Object.keys(s).every(c=>c==="type"||l.includes(c));return["unknown","null","boolean","number","string","function"].includes(s.type)?a():s.type==="literal"?a("value")&&(s.value===null||["string","boolean"].includes(typeof s.value)||typeof s.value=="number"&&Number.isFinite(s.value)):s.type==="array"?a("items","maxItems")&&(s.maxItems===void 0||Number.isSafeInteger(s.maxItems)&&s.maxItems>=0&&s.maxItems<=1e5)&&r(s.items,o+1):s.type==="tuple"?a("items","minItems")&&Array.isArray(s.items)&&s.items.length<=64&&(s.minItems===void 0||Number.isSafeInteger(s.minItems)&&s.minItems>=0&&s.minItems<=s.items.length)&&s.items.every(l=>r(l,o+1)):s.type==="union"?a("anyOf")&&Array.isArray(s.anyOf)&&s.anyOf.length>0&&s.anyOf.length<=32&&s.anyOf.every(l=>r(l,o+1)):s.type==="object"?a("properties","required","additionalProperties")&&t(s.properties)&&Object.entries(s.properties).every(([l,c])=>i(l)&&r(c,o+1))&&(s.required===void 0||Array.isArray(s.required)&&s.required.every(l=>typeof l=="string"&&Object.hasOwn(s.properties,l)))&&(s.additionalProperties===void 0||typeof s.additionalProperties=="boolean"):!1};return r(n,0)}var gM=new Map;function xt(n,e,t,i,r,s,o,a,l="owner"){let c=Object.freeze({id:n,kind:e,version:t,cardinality:i,validate:r,identities:s,identityScope:l,serviceCalls:o,serviceMetadata:a});return gM.set(`${e}:${n}@${t}`,c),c}var sd=256;var Ve=n=>!!n&&typeof n=="object"&&!Array.isArray(n),At=(n,e)=>typeof n[e]=="function",Yi=n=>n===void 0,Yr=n=>typeof n=="boolean",We=n=>typeof n=="string",an=n=>n===void 0||We(n),yM=n=>n===void 0||typeof n=="number",xM=n=>n===void 0||typeof n=="boolean",ht=(n,e)=>n.length===e.length&&e.every((t,i)=>t(n[i])),$t=n=>Ve(n)&&typeof n.ok=="boolean"&&(n.error===void 0||typeof n.error=="string"),Yf=n=>Ve(n),jf=n=>Ve(n)&&We(n.id)&&We(n.title)&&We(n.date)&&(n.documentRef===void 0||Ve(n.documentRef)&&We(n.documentRef.pluginId)&&We(n.documentRef.sourceId)&&We(n.documentRef.itemId)),vM=n=>Ve(n)&&We(n.date)&&an(n.startTime)&&an(n.endTime)&&an(n.sourceId)&&an(n.itemId),bM=n=>Ve(n)&&We(n.url)&&an(n.title)&&xM(n.newTab),_M=n=>Ve(n)&&We(n.query),Kf=n=>Ve(n)&&We(n.name)&&an(n.context)&&Number.isFinite(n.lng)&&Number.isFinite(n.lat),MM=n=>Array.isArray(n)&&n.every(Kf),SM=n=>n===null||Kf(n),wM=n=>n===void 0||Ve(n)&&an(n.approvalToken)&&(n.cancellation===void 0||Ve(n.cancellation)),EM=n=>typeof n=="string"||Ve(n)&&typeof n.text=="string",TM=n=>Ve(n)&&typeof n.name=="string"&&n.name.trim().length>0&&typeof n.description=="string"&&Ve(n.parameters)&&(n.sideEffect==="read"||n.sideEffect==="write")&&an(n.commandId)&&(n.commandDispatch===void 0||n.commandDispatch==="dynamic")&&(n.timeoutMs===void 0||Number.isSafeInteger(n.timeoutMs)&&Number(n.timeoutMs)>0&&Number(n.timeoutMs)<=3e5),Jf=n=>Ve(n)&&We(n.id)&&We(n.label)&&an(n.labelKey)&&an(n.description)&&(n.danger===void 0||typeof n.danger=="boolean")&&(n.enabled===void 0||typeof n.enabled=="boolean")&&(n.submenu===void 0||Array.isArray(n.submenu)&&n.submenu.every(Jf)),Qf={list:{args:n=>n.length===0,result:n=>Array.isArray(n)&&n.every(jf)},create:{args:n=>ht(n,[We,Yf]),result:Yr},update:{args:n=>ht(n,[We,Yf]),result:Yr},remove:{args:n=>ht(n,[We]),result:Yr},open:{args:n=>ht(n,[We]),result:Yi},configure:{args:n=>n.length===0,result:Yi},actions:{args:n=>ht(n,[We]),result:n=>Array.isArray(n)&&n.every(Jf)},runAction:{args:n=>ht(n,[We,We]),result:Yr}},em=n=>Ve(n)&&We(n.name)&&We(n.version)&&an(n.description)&&an(n.author)&&(n.localized===void 0||Ve(n.localized)&&Object.values(n.localized).every(e=>Ve(e)&&We(e.name)&&an(e.description))),AM=xt("calendar.itemSource","service","1.3.0","many",n=>Ve(n)&&At(n,"list")&&(n.integration===void 0||em(n.integration)),void 0,Qf,n=>n.integration),kl=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n)&&Number.isFinite(Date.parse(`${n}T00:00:00Z`))&&new Date(`${n}T00:00:00Z`).toISOString().slice(0,10)===n,rd=n=>typeof n=="string"&&n.length>0&&n.length<=8192,CM=n=>Ve(n)&&kl(n.startDate)&&kl(n.endDate)&&n.startDate<=n.endDate&&typeof n.limit=="number"&&Number.isInteger(n.limit)&&n.limit>0&&n.limit<=sd&&(n.cursor===void 0||rd(n.cursor)),IM=n=>Ve(n)&&rd(n.revision)&&(n.cursor===void 0||rd(n.cursor))&&Array.isArray(n.items)&&n.items.length<=sd&&n.items.every(e=>jf(e)&&kl(e.date)&&(e.endDate===void 0||kl(e.endDate)&&e.endDate>=e.date))&&new Set(n.items.map(e=>e.id)).size===n.items.length,RM=xt("calendar.itemSource","service","2.0.0","many",n=>Ve(n)&&At(n,"list")&&(n.integration===void 0||em(n.integration)),void 0,{...Qf,list:{args:n=>ht(n,[CM]),result:IM}},n=>n.integration),PM=xt("calendar.itemSourceRevision","state","1.0.0","many",n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0),LM=xt("calendar.navigator","service","1.0.0","one",n=>Ve(n)&&At(n,"openDate"),void 0,{openDate:{args:n=>ht(n,[vM]),result:Yi}}),NM=xt("calendar.panelSelection","state","1.0.0","one",n=>Ve(n)&&(n.selectedDate===null||typeof n.selectedDate=="string")&&(n.rangeStart===null||typeof n.rangeStart=="string")&&(n.rangeEnd===null||typeof n.rangeEnd=="string")),DM=xt("web.activeContext","state","1.0.0","one",n=>Ve(n)&&typeof n.instanceId=="string"&&typeof n.url=="string"&&typeof n.title=="string");function qf(n){return Ve(n)&&typeof n.id=="string"&&typeof n.displayName=="string"&&(n.avatarUrl===void 0||typeof n.avatarUrl=="string")&&Array.isArray(n.emails)&&n.emails.every(e=>Ve(e)&&typeof e.address=="string"&&(e.label===void 0||typeof e.label=="string"))}var kM=xt("contacts.directory","service","1.0.0","one",n=>Ve(n)&&["search","resolveEmails","open"].every(e=>At(n,e)),void 0,{search:{args:n=>n.length===2&&typeof n[0]=="string"&&n[0].length<=1e3&&Number.isInteger(n[1])&&Number(n[1])>0&&Number(n[1])<=50,result:n=>Array.isArray(n)&&n.length<=50&&n.every(qf)},resolveEmails:{args:n=>n.length===1&&Array.isArray(n[0])&&n[0].length<=200&&n[0].every(e=>typeof e=="string"&&e.length<=1e3),result:n=>Array.isArray(n)&&n.every(e=>Ve(e)&&typeof e.address=="string"&&Array.isArray(e.contacts)&&e.contacts.every(qf))},open:{args:n=>n.length>=1&&n.length<=2&&typeof n[0]=="string"&&(n[1]===void 0||Ve(n[1])&&(n[1].newTab===void 0||typeof n[1].newTab=="boolean")),result:Yi}}),OM=xt("contacts.directoryRevision","state","1.0.0","one",n=>Number.isSafeInteger(n)&&Number(n)>=0),UM=xt("web.navigator","service","1.0.0","one",n=>Ve(n)&&At(n,"open"),void 0,{open:{args:n=>ht(n,[bM]),result:Yi}}),FM=xt("selection.textAction","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&typeof n.label=="string"&&Array.isArray(n.surfaces)&&At(n,"run"),n=>[n.id]),zM=xt("geo.navigator","service","1.0.0","one",n=>Ve(n)&&At(n,"open"),void 0,{open:{args:n=>ht(n,[_M]),result:Yi}}),BM=xt("geo.search","service","1.0.0","one",n=>Ve(n)&&At(n,"search")&&At(n,"reverse"),void 0,{search:{args:n=>ht(n,[We]),result:MM},reverse:{args:n=>ht(n,[e=>Number.isFinite(e),e=>Number.isFinite(e)]),result:SM}}),HM=xt("agent.toolProvider","service","1.0.0","many",n=>Ve(n)&&Array.isArray(n.tools)&&n.tools.every(TM)&&At(n,"execute"),n=>n.tools.map(e=>e.name),{execute:{args:n=>ht(n,[We,Ve,wM]),result:EM}},n=>({tools:n.tools}),"global"),VM=xt("guard.runtime","service","1.0.0","one",n=>Ve(n)&&["resolve","requestApproval","consumeToken","audit"].every(e=>At(n,e)),void 0,{resolve:{args:n=>ht(n,[Ve]),result:Ve},requestApproval:{args:n=>ht(n,[Ve]),result:Yr},consumeToken:{args:n=>n.length>=1&&n.length<=2&&We(n[0])&&an(n[1]),result:Yr},audit:{args:n=>ht(n,[Ve]),result:Yi}}),GM=xt("browser.automation","service","1.0.0","one",n=>Ve(n)&&["list","open","switch","close","snapshot","readText","readHtml","screenshot","navigate","back","forward","reload","click","type","select","scroll","pressKey"].every(e=>At(n,e)),void 0,{list:{args:n=>n.length===0,result:$t},open:{args:n=>ht(n,[We]),result:$t},switch:{args:n=>ht(n,[We]),result:$t},close:{args:n=>ht(n,[We]),result:$t},snapshot:{args:n=>ht(n,[We]),result:$t},readText:{args:n=>n.length>=1&&n.length<=2&&We(n[0])&&yM(n[1]),result:$t},readHtml:{args:n=>ht(n,[We]),result:$t},screenshot:{args:n=>ht(n,[We]),result:$t},click:{args:n=>ht(n,[We,e=>typeof e=="number"]),result:$t},type:{args:n=>n.length>=3&&n.length<=4&&We(n[0])&&typeof n[1]=="number"&&We(n[2])&&(n[3]===void 0||typeof n[3]=="boolean"),result:$t},select:{args:n=>ht(n,[We,e=>typeof e=="number",We]),result:$t},scroll:{args:n=>ht(n,[We,e=>typeof e=="number",e=>typeof e=="number"]),result:$t},pressKey:{args:n=>ht(n,[We,We]),result:$t},navigate:{args:n=>ht(n,[We,We]),result:$t},back:{args:n=>ht(n,[We]),result:$t},forward:{args:n=>ht(n,[We]),result:$t},reload:{args:n=>ht(n,[We]),result:$t}}),WM=xt("fileTree.contextItem","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&typeof n.label=="string"&&an(n.labelKey)&&At(n,"run"),n=>[n.id]),ZM=xt("newTab.entry","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"run"),n=>[n.id]),XM=xt("search.resultAction","extension","1.0.0","many",n=>Ve(n)&&typeof n.cardKind=="string"&&At(n,"open"),n=>[n.cardKind]),$M=xt("search.resultCard","extension","1.0.0","many",n=>Ve(n)&&typeof n.cardKind=="string"&&At(n,"render")&&At(n,"open"),n=>[n.cardKind]),Ol=xt("metadataPanel.segment","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"render"),n=>[n.id]),tm=xt("workspace.surface","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace","footer"].includes(String(n.surface))&&At(n,"getSnapshot")&&At(n,"subscribe")&&At(n,"restore"),n=>[n.id]),YM=xt("metadata.plugin","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&typeof n.labelKey=="string"&&At(n,"facts"),n=>[n.id]),qM=xt("workspace.viewState","extension","1.0.0","many",n=>Ve(n)&&typeof n.id=="string"&&["left_sidebar","right_sidebar","main_workspace"].includes(String(n.surface))&&At(n,"capture")&&At(n,"restore")&&At(n,"subscribe"),n=>[n.id]);var Ul=n=>{if(!n||typeof n!="object"||Array.isArray(n))throw new Error("Invalid bookmark data");let e=Object.getPrototypeOf(n);if(e!==null&&(Object.getPrototypeOf(e)!==null||typeof Object.getOwnPropertyDescriptor(e,"constructor")?.value!="function"||Function.prototype.toString.call(Object.getOwnPropertyDescriptor(e,"constructor").value)!=="function Object() { [native code] }"))throw new Error("Invalid bookmark prototype");let t=Object.create(null),i=Reflect.ownKeys(n);if(i.length>32)throw new Error("Invalid bookmark descriptor");for(let r of i){if(typeof r!="string")continue;if(["__proto__","prototype","constructor"].includes(r))throw new Error("Invalid bookmark key");let s=Object.getOwnPropertyDescriptor(n,r);s?.enumerable&&"value"in s&&(t[r]=s.value)}return t},od=n=>!!(n&&typeof n=="object"&&!Array.isArray(n)),nm=new Set(["main_workspace","left_sidebar","right_sidebar","footer"]),im=n=>od(n)&&typeof n.surface=="string"&&nm.has(n.surface)&&(n.instanceId===void 0||typeof n.instanceId=="string"&&n.instanceId.length<=512&&!/[\u0000-\u001f]/.test(n.instanceId));function ad(n){let e=Ul(n);if(!im(e))throw new Error("Invalid bookmark descriptor");let t=id({kind:"plugin",pluginId:"provider",surface:e.surface,instanceId:e.instanceId,itemId:e.itemId,state:e.state}),i=Xf({folderPath:"",title:e.title,description:e.description,target:t});if(!i.title||typeof i.description!="string")throw new Error("Bookmark presentation is required");return{surface:t.surface,title:i.title,description:i.description,state:t.state,...t.instanceId===void 0?{}:{instanceId:t.instanceId},...t.itemId===void 0?{}:{itemId:t.itemId}}}function ld(n){try{let e=ad(n),t=Ul(n);return JSON.stringify(e.state)===JSON.stringify(nd(t.state))}catch{return!1}}function jM(n){try{let e=Ul(n);if(e.status==="unavailable"||e.status==="invalid")return{status:e.status};if(e.status==="ready")return{status:"ready",bookmark:ad(e.bookmark)}}catch{}return{status:"invalid"}}var KM=n=>{try{let e=Ul(n);return e.status==="unavailable"||e.status==="invalid"||e.status==="ready"&&ld(e.bookmark)}catch{return!1}},JM=n=>od(n)&&["restored","missing","unavailable","invalid"].includes(String(n.status)),QM=xt("workspace.bookmark","service","1.0.0","many",n=>od(n)&&typeof n.id=="string"&&nm.has(String(n.surface))&&Qs(n.stateSchema)&&(n.itemStateSchema===void 0||Qs(n.itemStateSchema))&&typeof n.capture=="function"&&typeof n.restore=="function",n=>[n.surface],{capture:{args:n=>n.length===1&&im(n[0]),result:KM,sanitizeResult:jM},restore:{args:n=>n.length===1&&ld(n[0]),result:JM}},n=>({surface:n.surface,stateSchema:n.stateSchema,...n.itemStateSchema?{itemStateSchema:n.itemStateSchema}:{}}));var eo=n=>!!n&&typeof n=="object"&&!Array.isArray(n),rm=n=>typeof n=="string"&&/^[a-zA-Z0-9][a-zA-Z0-9._:-]{0,127}$/.test(n);function sm(n){if(!eo(n)||!rm(n.id)||typeof n.label!="string"||!n.label.trim()||n.label.length>256||n.labelKey!==void 0&&typeof n.labelKey!="string"||!Array.isArray(n.items)||n.items.length>128||!Array.isArray(n.defaultItems)||typeof n.getSnapshot!="function"||typeof n.subscribe!="function"||n.invoke!==void 0&&typeof n.invoke!="function"||n.invokeAutomation!==void 0&&typeof n.invokeAutomation!="function"||n.pluginViews!==void 0&&typeof n.pluginViews!="boolean"||n.fileExtensions!==void 0&&(!Array.isArray(n.fileExtensions)||!n.fileExtensions.every(t=>typeof t=="string"&&/^\.[a-zA-Z0-9][a-zA-Z0-9.+_-]{0,63}$/.test(t))))return!1;let e=new Set;for(let t of n.items){if(!eo(t)||!rm(t.id)||e.has(t.id)||typeof t.label!="string"||!t.label.trim()||t.label.length>256||t.labelKey!==void 0&&typeof t.labelKey!="string"||t.available!==void 0&&typeof t.available!="boolean"||!["text","badge","button","select","toggle","range","thumbnail"].includes(String(t.kind)))return!1;e.add(t.id)}if(n.automation!==void 0){if(!eo(n.automation)||Object.keys(n.automation).some(t=>t!=="actions")||!eo(n.automation.actions)||typeof n.invokeAutomation!="function"||Object.keys(n.automation.actions).length>128)return!1;for(let[t,i]of Object.entries(n.automation.actions))if(!e.has(t)||!eo(i)||!["button","number","string","boolean"].includes(String(i.type))||Object.keys(i).some(r=>!["type","integer","maxLength"].includes(r))||i.integer!==void 0&&(i.type!=="number"||typeof i.integer!="boolean")||i.maxLength!==void 0&&(i.type!=="string"||!Number.isSafeInteger(i.maxLength)||Number(i.maxLength)<1||Number(i.maxLength)>65536))return!1}return n.defaultItems.every(t=>typeof t=="string"&&e.has(t))&&new Set(n.defaultItems).size===n.defaultItems.length}var cd=xt("workspace.details","extension","1.0.0","many",sm,n=>[`provider:${n.id}`,...n.items.map(e=>`item:${e.id}`)]);var OC=[Nt,`${Nt}/**/secrets.json`,".git","**/.env","**/.env.*"];var QC=1024*1024;var nI=Object.freeze({activePerBackend:8,retainedPerBackend:32,activePerClient:4,retainedPerClient:16,active:64,retained:256,valueBytes:4190208,retainedBytes:67108864,controlRequests:17,controlTimeoutMs:5e3,pollMs:1e3});var iI=globalThis.Buffer;var nS=Object.freeze({schemaBytes:65536,schemaNodes:4096,schemaDepth:32,valueBytes:10*1024*1024,handles:256,pending:32,timeoutMs:2e3});function yn(n,e=0){return new Intl.NumberFormat($e.ui.language(),{maximumFractionDigits:e,minimumFractionDigits:e}).format(n)}function qr(n,e=1){return`${yn(n,e)} m`}function Fl(n){let e=new Date(`${n}T12:00:00Z`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat($e.ui.language(),{dateStyle:"long"}).format(e)}var iS=["building","tiles","buildings","date"],rS=["building","tiles"];function sS(n){let e=n.index,t={},i=n.selected;return t.building=i?{text:`${Ke("footer.building")} \xB7 ${i.egid??"\u2014"} \xB7 ${qr(i.height)}`}:{available:!1},t.tiles=e?{text:`${Ke("footer.tiles")} \xB7 ${yn(n.loadedTiles)} / ${yn(e.stats.tiles)}`}:{available:!1},t.buildings=e?{text:`${Ke("footer.buildings")} \xB7 ${yn(e.stats.buildings)}`}:{available:!1},t.date=e?{text:`${Ke("footer.date")} \xB7 ${Fl(e.source.date)}`}:{available:!1},t}function om(n){let e=0,t={id:"poly.city.details",label:"Campus map",labelKey:"campusMap.title",pluginViews:!0,items:iS.map(i=>({id:i,label:Ke(`footer.${i}`),labelKey:`city.footer.${i}`,kind:"text"})),defaultItems:[...rS],subscribe:i=>tc(()=>{e++,i()}),getSnapshot:()=>({items:sS(Ii()),revision:String(e)})};return n.interop.extensions.provide(cd,t)}var am=`
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
`;var oS="https://www.stadt-zuerich.ch/de/planen-und-bauen/bauvorschriften-und-planerische-grundlagen/planbezug-datenbezug/3d-stadtmodell.html";function lm(){let n=Ri();P.useEffect(()=>{lo()},[]);let e=n.index;return P.createElement("div",{className:"z3d-options"},n.status==="missing"&&P.createElement("div",{className:"z3d-note"},P.createElement(Al,null)),n.status==="error"&&P.createElement("div",{className:"z3d-note z3d-error"},n.error),n.selected&&P.createElement("section",null,P.createElement("div",{className:"z3d-section-title"},Ke("building.title")),P.createElement("dl",{className:"z3d-facts"},P.createElement("dt",null,Ke("building.egid")),P.createElement("dd",null,n.selected.egid??"\u2014"),P.createElement("dt",null,Ke("building.height")),P.createElement("dd",null,qr(n.selected.height)),P.createElement("dt",null,Ke("building.ground")),P.createElement("dd",null,qr(n.selected.ground)," ",Ke("unit.asl")),P.createElement("dt",null,Ke("building.roof")),P.createElement("dd",null,qr(n.selected.roof)," ",Ke("unit.asl")),P.createElement("dt",null,Ke("building.position")),P.createElement("dd",null,yn(n.selected.center[0])," / ",yn(n.selected.center[1])),P.createElement("dt",null,Ke("building.triangles")),P.createElement("dd",null,yn(n.selected.triangles)))),e&&P.createElement("section",null,P.createElement("div",{className:"z3d-section-title"},Ke("model.title")),P.createElement("dl",{className:"z3d-facts"},P.createElement("dt",null,Ke("model.date")),P.createElement("dd",null,Fl(e.source.date)),P.createElement("dt",null,Ke("model.buildings")),P.createElement("dd",null,yn(e.stats.buildings)),P.createElement("dt",null,Ke("model.triangles")),P.createElement("dd",null,yn(e.stats.triangles)),P.createElement("dt",null,Ke("model.tiles")),P.createElement("dd",null,yn(n.loadedTiles)," / ",yn(e.stats.tiles))),P.createElement("p",{className:"z3d-note"},Ke("model.groundNote")," ",P.createElement("a",{href:oS,target:"_blank",rel:"noreferrer"},Ke("model.source"))),P.createElement("p",{className:"z3d-note"},_e("map.attribution"))))}var aS=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5"/><path d="M12 12v9"/></svg>')}`,lS=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16"/><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"/><path d="M10.5 21v-4h3v4"/></svg>')}`;function cS(){let n=Ni(),e=Li(),t=n.building;if(!t)return P.createElement("p",{className:"z3d-note poly-properties-note"},_e("properties.none"));let i=e.levels?.get(t.code)??[],r=i.find(l=>l.id===n.level),s=e.room&&e.room.level.split(".")[1]===t.code?e.room:null,o=s?i.find(l=>l.id===s.level):void 0,a=e.levelsStatus==="ready"?i.length?String(i.length):_e("floors.none"):_e("floors.reading");return P.createElement("div",{className:"z3d-options"},P.createElement("section",null,P.createElement("div",{className:"z3d-section-title"},_e("properties.building")),P.createElement("dl",{className:"z3d-facts"},P.createElement("dt",null,_e("properties.code")),P.createElement("dd",null,t.code),P.createElement("dt",null,_e("properties.address")),P.createElement("dd",{title:Xn(t)},Xn(t)),P.createElement("dt",null,_e("properties.campus")),P.createElement("dd",null,_e(`group.${t.campus}`)),P.createElement("dt",null,_e("properties.floors")),P.createElement("dd",null,a),r&&P.createElement(P.Fragment,null,P.createElement("dt",null,_e("properties.floor")),P.createElement("dd",null,r.name||r.id.split(".").pop()))),t.link&&P.createElement("p",{className:"z3d-note"},P.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer"},_e("building.link")))),s&&P.createElement("section",null,P.createElement("div",{className:"z3d-section-title"},_e("properties.room")),P.createElement("dl",{className:"z3d-facts"},P.createElement("dt",null,_e("properties.room")),P.createElement("dd",null,s.name),P.createElement("dt",null,_e("properties.floor")),P.createElement("dd",null,o?.name||s.level.split(".").pop()),s.type&&P.createElement(P.Fragment,null,P.createElement("dt",null,_e("room.type")),P.createElement("dd",{title:s.type},s.type)),s.use&&P.createElement(P.Fragment,null,P.createElement("dt",null,_e("room.use")),P.createElement("dd",{title:s.use},s.use)),P.createElement("dt",null,_e("properties.kind")),P.createElement("dd",null,P.createElement("span",{className:"poly-properties-kind"},P.createElement("i",{style:{background:js[s.kind]}}),_e(`room.kind.${s.kind}`))))))}function uS(){return Ni().view==="3d"?P.createElement(lm,null):P.createElement("p",{className:"z3d-note poly-properties-note"},_e("properties.only3d"))}function cm(n){let e=i=>Pi(i.tab?.instanceId??i.subject?.instanceId),t=[n.interop.extensions.provide(Ol,{id:"poly.building",label:"Building",labelKey:"campusMap.properties.buildingTab",icon:lS,pluginSurfaces:["main_workspace"],render:i=>e(i)?P.createElement(cS,null):null}),n.interop.extensions.provide(Ol,{id:"poly.city3d",label:"3D city",labelKey:"campusMap.properties.tab",icon:aS,pluginSurfaces:["main_workspace"],render:i=>e(i)?P.createElement(uS,null):null})];return()=>{for(let i of t)i()}}var um={"manifest.name":"Poly","manifest.description":"ETH und UZH in Valley: der eLink-Shuttle zwischen ETH Zentrum und H\xF6nggerberg, der Men\xFCplan von ETH Zentrum, ETH H\xF6nggerberg und den UZH-Mensen und ein Campusplan der ETH-Geb\xE4ude mit ihren Geschossen und R\xE4umen, in 2D und im 3D-Stadtmodell der Stadt Z\xFCrich.","menu.title":"Men\xFCplan",refresh:"Aktualisieren",openWebsite:"Website \xF6ffnen","day.previous":"Vorheriger Tag","day.next":"N\xE4chster Tag","day.backToToday":"Zur\xFCck zu heute","day.today":"Heute","week.previous":"Vorherige Woche","week.next":"N\xE4chste Woche","week.label":"Woche","service.label":"Mahlzeit","service.lunch":"Mittag","service.dinner":"Abend",loading:"Men\xFCs werden geladen \u2026","empty.lunch":"An diesem Tag gibt es nirgends ein Mittagessen.","empty.dinner":"An diesem Tag gibt es nirgends ein Abendessen.","empty.location":"F\xFCr diese Mahlzeit steht nichts auf dem Men\xFC.","diet.vegan":"Vegan","diet.vegetarian":"Vegetarisch","climate.LOW":"Geringe Klimawirkung","climate.MEDIUM":"Mittlere Klimawirkung","climate.HIGH":"Hohe Klimawirkung","price.students":"Studierende","price.internal":"Mitarbeitende","price.external":"G\xE4ste",allergens:"Allergene","allergens.none":"Keine Allergene angegeben","credit.eth":"Men\xFCs von ETH Z\xFCrich Gastronomie.","credit.uzh":"Men\xFCs der ZFV auf food2050.","error.networkError":"Der Men\xFCdienst ist nicht erreichbar.","error.serviceError":"Der Men\xFCdienst hat mit einem Fehler geantwortet.","error.formatError":"Der Men\xFCdienst hat Daten geschickt, die Poly nicht lesen kann.","error.notFound":"Diese Seite gibt es beim Men\xFCdienst nicht.","error.invalidInput":"Poly hat ein Men\xFC auf eine Art angefragt, die der Dienst nicht kennt.","error.unavailable":"Poly wird neu geladen.",openPage:"Men\xFCplan-Seite \xF6ffnen","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH-Betriebe","menus.one":"1 Men\xFC","menus.other":"{count} Men\xFCs","hours.openNow":"Jetzt ge\xF6ffnet \xB7 {hours}","hours.closed":"Geschlossen \xB7 {hours}","hours.open":"Ge\xF6ffnet {hours}","service.time.lunch":"Mittag {hours}","service.time.dinner":"Abend {hours}",filter:"Filter","filter.vegetarian":"Vegetarisch","filter.vegan":"Vegan","filter.glutenFree":"Glutenfrei","filter.clear":"Filter zur\xFCcksetzen","empty.filtered":"Kein Men\xFC passt zu den Filtern.","loading.uzh":"Die UZH-Betriebe werden gelesen\u2026",openInNewTab:"In neuem Tab \xF6ffnen","settings.onlyVegetarian.title":"Nur vegetarisch","settings.onlyVegetarian.description":"Nur vegetarische und vegane Men\xFCs zeigen, in den Zahlen der Ortsliste und auf der Seite.","settings.onlyVegan.title":"Nur vegan","settings.onlyVegan.description":"Nur vegane Men\xFCs zeigen.","settings.onlyGlutenFree.title":"Nur glutenfrei","settings.onlyGlutenFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene kein glutenhaltiges Getreide enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.","settings.campus.title":"Campus","settings.campus.description":"Der im Men\xFCplan gew\xE4hlte Tag: Favoriten oder ein Campus.","settings.day.title":"Tag","settings.day.description":"Tag und Mahlzeit, die der Men\xFCplan zeigt; ein vergangener Tag wird zu heute.","price.internalStudents":"Mitarbeitende & Studierende","price.all":"Alle Besucher","filter.lactoseFree":"Laktosefrei","settings.onlyLactoseFree.title":"Nur laktosefrei","settings.onlyLactoseFree.description":"Nur Men\xFCs zeigen, deren angegebene Allergene keine Milch enthalten. Ein Men\xFC ohne angegebene Allergene wird nicht gezeigt.",prices:"Preise","prices.all":"Alle Preise","settings.prices.title":"Angezeigte Preise","settings.prices.description":"Welche Preise die Men\xFCkarten zeigen: alle, von Studierenden bis G\xE4ste, oder die einer Gruppe.","campus.favorites":"Favoriten","campus.favorites.title":"Lieblingsorte","favorite.add":"{name} zu den Favoriten hinzuf\xFCgen","favorite.remove":"{name} aus den Favoriten entfernen","empty.favorites":"Keiner deiner Lieblingsorte hat an diesem Tag ein Men\xFC f\xFCr diese Mahlzeit.","credit.both":"Men\xFCs von ETH Z\xFCrich Gastronomie und vom ZFV auf food2050.","settings.favorites.title":"Lieblingsorte","settings.favorites.description":"Die im Men\xFCplan mit einem Stern markierten Orte.","mode.label":"Seitenleisten-Tabs","settings.mode.title":"Seitenleisten-Tab","settings.mode.description":"Der gezeigte Tab der Seitenleiste: der eLink-Shuttle, der Men\xFCplan oder der Campusplan.","city.display.color":"Farbe","city.display.surfaces":"Fl\xE4chen","city.display.height":"H\xF6he","city.display.ground":"Gel\xE4nde","city.display.groundHint":"Ein angen\xE4hertes Gel\xE4nde aus den Sockelh\xF6hen der Geb\xE4ude","city.building.title":"Geb\xE4ude","city.building.close":"Schliessen","city.building.egid":"EGID","city.building.height":"H\xF6he","city.building.ground":"Terrain","city.building.roof":"Dachfirst","city.building.position":"LV95 E / N","city.building.triangles":"Dreiecke","city.unit.asl":"m \xFC. M.","city.model.title":"Modell","city.model.date":"Datenstand","city.model.buildings":"Geb\xE4ude","city.model.triangles":"Dreiecke","city.model.tiles":"Geladene Kacheln","city.model.groundNote":"Geb\xE4ude: 3D-Stadtmodell der Stadt Z\xFCrich, Dachmodell LoD2, Open Government Data. Das Gel\xE4nde ist aus den Sockelh\xF6hen der Geb\xE4ude angen\xE4hert.","city.model.source":"Quelle","city.model.loading":"Stadtmodell wird geladen \u2026","city.model.errorTitle":"Das Stadtmodell konnte nicht gelesen werden","city.model.errorText":"Poly konnte die Dateien seines 3D-Stadtmodells nicht laden. Aktualisiere Poly oder installiere es neu.","city.model.missingTitle":"Kein Stadtmodell installiert","city.model.missingText":"Diese Kopie von Poly wurde ohne Stadtmodell gebaut. F\xFCge es mit dem Update-Skript im Plugin-Ordner in runtime/assets/model/ des Pakets ein und baue es neu:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"Die 3D-Ansicht konnte nicht starten","city.view.loadingTiles":"{{count}} Kacheln werden geladen \u2026","city.settings.model":"Stadtmodell","city.settings.modelInstalled":"Installiert: Datenstand {{date}}, {{buildings}} Geb\xE4ude.","city.settings.modelMissing":"Nicht installiert. Das Modell geh\xF6rt nach {{folder}}.","city.settings.update":"Aktualisieren","city.settings.source":"Quelle","city.settings.sourceText":"3D-Stadtmodell (Dachmodell LoD2, CityGML) der Stadt Z\xFCrich, Open Government Data ohne Nutzungseinschr\xE4nkungen:","city.settings.colorMode":"Farbe","city.settings.showGround":"Gel\xE4nde","city.settings.camera":"Kamera","city.footer.building":"Geb\xE4ude","city.footer.tiles":"Kacheln","city.footer.buildings":"Geb\xE4ude","city.footer.date":"Datenstand","settings.building.title":"Geb\xE4ude","settings.building.description":"Das im Campusplan gew\xE4hlte ETH-Geb\xE4ude, mit seinem K\xFCrzel.","settings.level.title":"Geschoss","settings.level.description":"Das Geschoss des gew\xE4hlten Geb\xE4udes, dessen R\xE4ume der Campusplan zeigt.","settings.campusView.title":"Campusansicht","settings.campusView.description":"Was die Campusseite zeigt: den 2D-Campusplan oder das 3D-Stadtmodell.","campusMap.title":"Campusplan","campusMap.openPage":"Seite des Campusplans \xF6ffnen","campusMap.command.open":"Campusplan \xF6ffnen","campusMap.map.attribution":"Karte \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap-Mitwirkende \xB7 Geb\xE4ude \xA9 ETH Z\xFCrich","campusMap.map.loading":"Karte wird geladen \u2026","campusMap.map.failed":"Die Karte konnte nicht starten","campusMap.floors.label":"Geschosse von {{code}}","campusMap.floors.show":"Geschoss {{floor}} zeigen","campusMap.floors.loading":"R\xE4ume werden geladen \u2026","campusMap.floors.failed":"Die R\xE4ume konnten nicht gelesen werden","campusMap.floors.one":"1 Geschoss mit R\xE4umen","campusMap.floors.other":"{{count}} Geschosse mit R\xE4umen","campusMap.floors.none":"Keine Geschosspl\xE4ne ver\xF6ffentlicht","campusMap.floors.reading":"Geschosse werden gelesen \u2026","campusMap.room.close":"Schliessen","campusMap.room.type":"Raumtyp","campusMap.room.use":"Nutzung","campusMap.legend.label":"Raumtypen","campusMap.room.kind.teaching":"Lehre","campusMap.room.kind.lab":"Labor","campusMap.room.kind.office":"B\xFCro","campusMap.room.kind.circulation":"Verkehrsfl\xE4che","campusMap.room.kind.toilet":"Toiletten","campusMap.room.kind.service":"Betrieb","campusMap.room.kind.other":"Andere","campusMap.view.label":"Ansicht","campusMap.view.map":"Karte","campusMap.view.3d":"3D","campusMap.view.outside":"Dieses Geb\xE4ude liegt ausserhalb des 3D-Stadtmodells der Stadt Z\xFCrich","campusMap.outlines.failed":"Die Geb\xE4udeumrisse konnten nicht gelesen werden","campusMap.building.link":"Geb\xE4udeseite der ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Weitere Standorte","campusMap.search.placeholder":"Geb\xE4ude, R\xE4ume, Strassen suchen","campusMap.search.clear":"Suche l\xF6schen","campusMap.search.none":"Kein Geb\xE4ude passt.","campusMap.credit":"Geb\xE4ude, Geschosse und R\xE4ume aus dem Campusplan der ETH Z\xFCrich. Grundkarte: Esri Light/Dark Gray Canvas, \xA9 OpenStreetMap-Mitwirkende.","campusMap.map.zoomIn":"Vergr\xF6ssern","campusMap.map.zoomOut":"Verkleinern","elink.title":"eLink","elink.openPage":"eLink-Fahrplan \xF6ffnen","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 Fahrt","elink.runs.other":"{count} Fahrten","elink.firstLast":"Erste {first} \xB7 Letzte {last}","elink.in":"in {minutes} Min.","elink.delay":"{minutes} Min. versp\xE4tet","elink.ended":"Heute keine Abfahrten mehr.","elink.weekend":"Am Wochenende f\xE4hrt kein eLink.","elink.noService":"An diesem Tag f\xE4hrt kein eLink.","elink.showDay":"{day} zeigen","elink.loading":"eLink-Fahrplan wird geladen \u2026","elink.credit":"Fahrplandaten von transport.opendata.ch","elink.error.networkError":"transport.opendata.ch ist nicht erreichbar.","elink.error.serviceError":"transport.opendata.ch hat mit einem Fehler geantwortet.","elink.error.formatError":"transport.opendata.ch hat Daten geschickt, die Poly nicht lesen kann.","elink.error.invalidInput":"Poly hat transport.opendata.ch nach einem unbekannten Tag gefragt.","elink.settings.date.title":"eLink-Tag","elink.settings.date.description":"Der Tag, den der eLink-Tab zeigt; ein vergangener Tag wird zu heute.","campusMap.group.rooms":"R\xE4ume","campusMap.rooms.searching":"R\xE4ume werden gesucht \u2026","campusMap.rooms.failed":"Die R\xE4ume konnten nicht gesucht werden","campusMap.rooms.none":"Kein Raum passt.","campusMap.view.show3d":"In 3D zeigen","campusMap.view.show2d":"2D-Karte zeigen","elink.showTimetable":"Fahrplan zeigen","elink.arrival":"Ankunft {stop} um {time}","campusMap.building.clear":"Auswahl aufheben","campusMap.properties.tab":"3D-Stadt","campusMap.properties.only3d":"Die Angaben zur 3D-Stadt erscheinen hier, solange die Campusseite 3D zeigt.","campusMap.properties.buildingTab":"Geb\xE4ude","campusMap.properties.building":"Geb\xE4ude","campusMap.properties.room":"Raum","campusMap.properties.code":"K\xFCrzel","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Geschosse","campusMap.properties.floor":"Geschoss","campusMap.properties.kind":"Art","campusMap.properties.none":"W\xE4hle ein Geb\xE4ude auf der Campuskarte oder in der Seitenleiste, um es hier zu sehen.","campusMap.group.zurich":"Z\xFCrich"};var dm={"manifest.name":"Poly","manifest.description":"ETH y UZH en Valley: la lanzadera eLink entre ETH Zentrum y H\xF6nggerberg, el men\xFA del d\xEDa de ETH Zentrum, ETH H\xF6nggerberg y los comedores de la UZH, y un mapa del campus con los edificios de la ETH, sus plantas y salas, en 2D y en el modelo 3D de la ciudad de Z\xFArich.","menu.title":"Men\xFA",refresh:"Actualizar",openWebsite:"Abrir sitio web","day.previous":"D\xEDa anterior","day.next":"D\xEDa siguiente","day.backToToday":"Volver a hoy","day.today":"Hoy","week.previous":"Semana anterior","week.next":"Semana siguiente","week.label":"Semana","service.label":"Comida","service.lunch":"Almuerzo","service.dinner":"Cena",loading:"Cargando men\xFAs\u2026","empty.lunch":"Ning\xFAn lugar sirve almuerzo este d\xEDa.","empty.dinner":"Ning\xFAn lugar sirve cena este d\xEDa.","empty.location":"Nada en el men\xFA para esta comida.","diet.vegan":"Vegano","diet.vegetarian":"Vegetariano","climate.LOW":"Impacto clim\xE1tico bajo","climate.MEDIUM":"Impacto clim\xE1tico medio","climate.HIGH":"Impacto clim\xE1tico alto","price.students":"Estudiantes","price.internal":"Personal","price.external":"Invitados",allergens:"Al\xE9rgenos","allergens.none":"Sin al\xE9rgenos declarados","credit.eth":"Men\xFAs de ETH Zurich Gastronom\xEDa.","credit.uzh":"Men\xFAs de la ZFV en food2050.","error.networkError":"No se pudo contactar con el servicio de men\xFAs.","error.serviceError":"El servicio de men\xFAs respondi\xF3 con un error.","error.formatError":"El servicio de men\xFAs envi\xF3 datos que Poly no puede leer.","error.notFound":"El servicio de men\xFAs no tiene esa p\xE1gina.","error.invalidInput":"Poly pidi\xF3 un men\xFA de una forma que el servicio no conoce.","error.unavailable":"Poly se est\xE1 recargando.",openPage:"Abrir la p\xE1gina del men\xFA","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"Locales de la UZH","menus.one":"1 men\xFA","menus.other":"{count} men\xFAs","hours.openNow":"Abierto ahora \xB7 {hours}","hours.closed":"Cerrado \xB7 {hours}","hours.open":"Abierto {hours}","service.time.lunch":"Almuerzo {hours}","service.time.dinner":"Cena {hours}",filter:"Filtro","filter.vegetarian":"Vegetariano","filter.vegan":"Vegano","filter.glutenFree":"Sin gluten","filter.clear":"Quitar filtros","empty.filtered":"Ning\xFAn men\xFA coincide con los filtros.","loading.uzh":"Leyendo los locales de la UZH\u2026",openInNewTab:"Abrir en una pesta\xF1a nueva","settings.onlyVegetarian.title":"Solo vegetariano","settings.onlyVegetarian.description":"Mostrar solo men\xFAs vegetarianos y veganos, en los recuentos de la lista de lugares y en la p\xE1gina.","settings.onlyVegan.title":"Solo vegano","settings.onlyVegan.description":"Mostrar solo men\xFAs veganos.","settings.onlyGlutenFree.title":"Solo sin gluten","settings.onlyGlutenFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen cereales con gluten. Un men\xFA sin al\xE9rgenos declarados no se muestra.","settings.campus.title":"Campus","settings.campus.description":"La etiqueta elegida en el men\xFA: Favoritos o un campus.","settings.day.title":"D\xEDa","settings.day.description":"El d\xEDa y la comida que muestra el men\xFA; un d\xEDa pasado vuelve a hoy.","price.internalStudents":"Personal y estudiantes","price.all":"Todos los visitantes","filter.lactoseFree":"Sin lactosa","settings.onlyLactoseFree.title":"Solo sin lactosa","settings.onlyLactoseFree.description":"Mostrar solo men\xFAs cuyos al\xE9rgenos declarados no incluyen leche. Un men\xFA sin al\xE9rgenos declarados no se muestra.",prices:"Precios","prices.all":"Todos los precios","settings.prices.title":"Precios mostrados","settings.prices.description":"Qu\xE9 precios muestran las tarjetas del men\xFA: todos, de estudiantes a invitados, o los de un grupo.","campus.favorites":"Favoritos","campus.favorites.title":"Lugares favoritos","favorite.add":"A\xF1adir {name} a favoritos","favorite.remove":"Quitar {name} de favoritos","empty.favorites":"Ninguno de tus lugares favoritos tiene men\xFA para esta comida este d\xEDa.","credit.both":"Men\xFAs de ETH Zurich Gastronomy y del ZFV en food2050.","settings.favorites.title":"Lugares favoritos","settings.favorites.description":"Los lugares marcados con estrella en el men\xFA.","mode.label":"Pesta\xF1as de la barra lateral","settings.mode.title":"Pesta\xF1a de la barra lateral","settings.mode.description":"La pesta\xF1a que muestra la barra lateral: la lanzadera eLink, el men\xFA o el mapa del campus.","city.display.color":"Color","city.display.surfaces":"Superficies","city.display.height":"Altura","city.display.ground":"Terreno","city.display.groundHint":"Un terreno aproximado a partir de las cotas de base de los edificios","city.building.title":"Edificio","city.building.close":"Cerrar","city.building.egid":"EGID","city.building.height":"Altura","city.building.ground":"Suelo","city.building.roof":"Cumbrera","city.building.position":"LV95 E / N","city.building.triangles":"Tri\xE1ngulos","city.unit.asl":"m s. n. m.","city.model.title":"Modelo","city.model.date":"Datos de","city.model.buildings":"Edificios","city.model.triangles":"Tri\xE1ngulos","city.model.tiles":"Teselas cargadas","city.model.groundNote":"Edificios: modelo 3D de la ciudad de Z\xFArich, modelo de tejados LoD2, datos abiertos. El terreno se aproxima a partir de las cotas de base de los edificios.","city.model.source":"Fuente","city.model.loading":"Cargando el modelo de la ciudad\u2026","city.model.errorTitle":"No se pudo leer el modelo de la ciudad","city.model.errorText":"Poly no pudo cargar los archivos de su modelo 3D de la ciudad. Actualiza Poly o vuelve a instalarlo.","city.model.missingTitle":"No hay ning\xFAn modelo de la ciudad instalado","city.model.missingText":"Esta copia de Poly se cre\xF3 sin su modelo de la ciudad. A\xF1\xE1delo a runtime/assets/model/ del paquete con el script de actualizaci\xF3n de la carpeta del plugin y vuelve a compilarlo:","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"No se pudo iniciar la vista 3D","city.view.loadingTiles":"Cargando {{count}} teselas\u2026","city.settings.model":"Modelo de la ciudad","city.settings.modelInstalled":"Instalado: datos de {{date}}, {{buildings}} edificios.","city.settings.modelMissing":"No instalado. El modelo va en {{folder}}.","city.settings.update":"Actualizar","city.settings.source":"Fuente","city.settings.sourceText":"Modelo 3D de la ciudad de Z\xFArich (modelo de tejados LoD2, CityGML), datos abiertos sin restricciones de uso:","city.settings.colorMode":"Color","city.settings.showGround":"Terreno","city.settings.camera":"C\xE1mara","city.footer.building":"Edificio","city.footer.tiles":"Teselas","city.footer.buildings":"Edificios","city.footer.date":"Datos de","settings.building.title":"Edificio","settings.building.description":"El edificio de la ETH elegido en el mapa del campus, por su c\xF3digo.","settings.level.title":"Planta","settings.level.description":"La planta del edificio elegido cuyas salas muestra el mapa del campus.","settings.campusView.title":"Vista del campus","settings.campusView.description":"Lo que muestra la p\xE1gina del campus: el mapa 2D o el modelo 3D de la ciudad.","campusMap.title":"Mapa del campus","campusMap.openPage":"Abrir la p\xE1gina del mapa del campus","campusMap.command.open":"Abrir el mapa del campus","campusMap.map.attribution":"Mapa \xA9 Esri, HERE, Garmin, \xA9 colaboradores de OpenStreetMap \xB7 Edificios \xA9 ETH Z\xFCrich","campusMap.map.loading":"Cargando el mapa\u2026","campusMap.map.failed":"No se pudo iniciar el mapa","campusMap.floors.label":"Plantas de {{code}}","campusMap.floors.show":"Mostrar la planta {{floor}}","campusMap.floors.loading":"Cargando las salas\u2026","campusMap.floors.failed":"No se pudieron leer las salas","campusMap.floors.one":"1 planta con salas","campusMap.floors.other":"{{count}} plantas con salas","campusMap.floors.none":"No hay planos de plantas publicados","campusMap.floors.reading":"Leyendo las plantas\u2026","campusMap.room.close":"Cerrar","campusMap.room.type":"Tipo de sala","campusMap.room.use":"Uso","campusMap.legend.label":"Tipos de sala","campusMap.room.kind.teaching":"Docencia","campusMap.room.kind.lab":"Laboratorio","campusMap.room.kind.office":"Oficina","campusMap.room.kind.circulation":"Circulaci\xF3n","campusMap.room.kind.toilet":"Aseos","campusMap.room.kind.service":"Servicio","campusMap.room.kind.other":"Otros","campusMap.view.label":"Vista","campusMap.view.map":"Mapa","campusMap.view.3d":"3D","campusMap.view.outside":"Este edificio est\xE1 fuera del modelo 3D de la ciudad de Z\xFArich","campusMap.outlines.failed":"No se pudieron leer los contornos de los edificios","campusMap.building.link":"P\xE1gina del edificio de la ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Otras sedes","campusMap.search.placeholder":"Buscar edificios, salas, calles","campusMap.search.clear":"Borrar la b\xFAsqueda","campusMap.search.none":"Ning\xFAn edificio coincide.","campusMap.credit":"Edificios, plantas y salas del mapa del campus de la ETH Z\xFCrich. Mapa base: Esri Light/Dark Gray Canvas, \xA9 colaboradores de OpenStreetMap.","campusMap.map.zoomIn":"Acercar","campusMap.map.zoomOut":"Alejar","elink.title":"eLink","elink.openPage":"Abrir el horario de eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 viaje","elink.runs.other":"{count} viajes","elink.firstLast":"Primero {first} \xB7 \xDAltimo {last}","elink.in":"en {minutes} min","elink.delay":"{minutes} min de retraso","elink.ended":"Hoy no hay m\xE1s salidas.","elink.weekend":"El eLink no circula los fines de semana.","elink.noService":"El eLink no circula este d\xEDa.","elink.showDay":"Mostrar {day}","elink.loading":"Cargando el horario de eLink\u2026","elink.credit":"Datos de horarios de transport.opendata.ch","elink.error.networkError":"No se pudo acceder a transport.opendata.ch.","elink.error.serviceError":"transport.opendata.ch respondi\xF3 con un error.","elink.error.formatError":"transport.opendata.ch envi\xF3 datos que Poly no puede leer.","elink.error.invalidInput":"Poly pidi\xF3 a transport.opendata.ch un d\xEDa que no conoce.","elink.settings.date.title":"D\xEDa de eLink","elink.settings.date.description":"El d\xEDa que muestra la pesta\xF1a eLink; un d\xEDa pasado vuelve a hoy.","campusMap.group.rooms":"Salas","campusMap.rooms.searching":"Buscando salas\u2026","campusMap.rooms.failed":"No se pudieron buscar las salas","campusMap.rooms.none":"Ninguna sala coincide.","campusMap.view.show3d":"Mostrar en 3D","campusMap.view.show2d":"Mostrar el mapa 2D","elink.showTimetable":"Mostrar horario","elink.arrival":"Llega a {stop} a las {time}","campusMap.building.clear":"Quitar la selecci\xF3n","campusMap.properties.tab":"Ciudad 3D","campusMap.properties.only3d":"Los datos de la ciudad 3D aparecen aqu\xED mientras la p\xE1gina del campus muestra 3D.","campusMap.properties.buildingTab":"Edificio","campusMap.properties.building":"Edificio","campusMap.properties.room":"Sala","campusMap.properties.code":"C\xF3digo","campusMap.properties.address":"Direcci\xF3n","campusMap.properties.campus":"Campus","campusMap.properties.floors":"Plantas","campusMap.properties.floor":"Planta","campusMap.properties.kind":"Tipo","campusMap.properties.none":"Selecciona un edificio en el mapa del campus o en la barra lateral para verlo aqu\xED.","campusMap.group.zurich":"Z\xFArich"};var hm={"manifest.name":"Poly","manifest.description":"L'ETH et l'UZH dans Valley : la navette eLink entre l'ETH Zentrum et H\xF6nggerberg, le menu du jour de l'ETH Zentrum, de l'ETH H\xF6nggerberg et des restaurants de l'UZH, et un plan du campus des b\xE2timents de l'ETH avec leurs \xE9tages et salles, en 2D et dans la maquette 3D de la ville de Zurich.","menu.title":"Menu",refresh:"Actualiser",openWebsite:"Ouvrir le site web","day.previous":"Jour pr\xE9c\xE9dent","day.next":"Jour suivant","day.backToToday":"Revenir \xE0 aujourd'hui","day.today":"Aujourd'hui","week.previous":"Semaine pr\xE9c\xE9dente","week.next":"Semaine suivante","week.label":"Semaine","service.label":"Repas","service.lunch":"Midi","service.dinner":"Soir",loading:"Chargement des menus\u2026","empty.lunch":"Aucun lieu ne sert de d\xE9jeuner ce jour-l\xE0.","empty.dinner":"Aucun lieu ne sert de d\xEEner ce jour-l\xE0.","empty.location":"Rien au menu pour ce repas.","diet.vegan":"V\xE9g\xE9talien","diet.vegetarian":"V\xE9g\xE9tarien","climate.LOW":"Faible impact climatique","climate.MEDIUM":"Impact climatique moyen","climate.HIGH":"Fort impact climatique","price.students":"\xC9tudiants","price.internal":"Personnel","price.external":"Invit\xE9s",allergens:"Allerg\xE8nes","allergens.none":"Aucun allerg\xE8ne d\xE9clar\xE9","credit.eth":"Menus d'ETH Zurich Gastronomie.","credit.uzh":"Menus de la ZFV sur food2050.","error.networkError":"Le service des menus est injoignable.","error.serviceError":"Le service des menus a r\xE9pondu par une erreur.","error.formatError":"Le service des menus a envoy\xE9 des donn\xE9es que Poly ne peut pas lire.","error.notFound":"Le service des menus n'a pas cette page.","error.invalidInput":"Poly a demand\xE9 un menu d'une fa\xE7on que le service ne conna\xEEt pas.","error.unavailable":"Poly se recharge.",openPage:"Ouvrir la page du menu","campus.label":"Campus","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"\xC9tablissements de l'UZH","menus.one":"1 menu","menus.other":"{count} menus","hours.openNow":"Ouvert \xB7 {hours}","hours.closed":"Ferm\xE9 \xB7 {hours}","hours.open":"Ouvert {hours}","service.time.lunch":"Midi {hours}","service.time.dinner":"Soir {hours}",filter:"Filtre","filter.vegetarian":"V\xE9g\xE9tarien","filter.vegan":"V\xE9gane","filter.glutenFree":"Sans gluten","filter.clear":"Effacer les filtres","empty.filtered":"Aucun menu ne correspond aux filtres.","loading.uzh":"Lecture des \xE9tablissements de l'UZH\u2026",openInNewTab:"Ouvrir dans un nouvel onglet","settings.onlyVegetarian.title":"V\xE9g\xE9tarien uniquement","settings.onlyVegetarian.description":"Afficher uniquement les menus v\xE9g\xE9tariens et v\xE9ganes, dans les comptes de la liste des lieux et sur la page.","settings.onlyVegan.title":"V\xE9gane uniquement","settings.onlyVegan.description":"Afficher uniquement les menus v\xE9ganes.","settings.onlyGlutenFree.title":"Sans gluten uniquement","settings.onlyGlutenFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent aucune c\xE9r\xE9ale avec gluten. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.","settings.campus.title":"Campus","settings.campus.description":"L\u2019\xE9tiquette choisie dans le menu : Favoris ou un campus.","settings.day.title":"Jour","settings.day.description":"Le jour et le repas affich\xE9s ; un jour pass\xE9 revient \xE0 aujourd'hui.","price.internalStudents":"Personnel et \xE9tudiants","price.all":"Tous les visiteurs","filter.lactoseFree":"Sans lactose","settings.onlyLactoseFree.title":"Sans lactose uniquement","settings.onlyLactoseFree.description":"Afficher uniquement les menus dont les allerg\xE8nes d\xE9clar\xE9s ne contiennent pas de lait. Un menu sans allerg\xE8nes d\xE9clar\xE9s n'est pas affich\xE9.",prices:"Prix","prices.all":"Tous les prix","settings.prices.title":"Prix affich\xE9s","settings.prices.description":"Les prix affich\xE9s sur les cartes du menu : tous, des \xE9tudiants aux invit\xE9s, ou ceux d'un groupe.","campus.favorites":"Favoris","campus.favorites.title":"Lieux favoris","favorite.add":"Ajouter {name} aux favoris","favorite.remove":"Retirer {name} des favoris","empty.favorites":"Aucun de vos lieux favoris n'a de menu pour ce repas ce jour-l\xE0.","credit.both":"Menus de la gastronomie de l\u2019ETH Zurich et du ZFV sur food2050.","settings.favorites.title":"Lieux favoris","settings.favorites.description":"Les lieux marqu\xE9s d\u2019une \xE9toile dans le menu.","mode.label":"Onglets de la barre lat\xE9rale","settings.mode.title":"Onglet de la barre lat\xE9rale","settings.mode.description":"L'onglet affich\xE9 dans la barre lat\xE9rale : la navette eLink, le menu ou le plan du campus.","city.display.color":"Couleur","city.display.surfaces":"Surfaces","city.display.height":"Hauteur","city.display.ground":"Terrain","city.display.groundHint":"Un terrain approximatif d\xE9riv\xE9 des altitudes de base des b\xE2timents","city.building.title":"B\xE2timent","city.building.close":"Fermer","city.building.egid":"EGID","city.building.height":"Hauteur","city.building.ground":"Sol","city.building.roof":"Fa\xEEte","city.building.position":"LV95 E / N","city.building.triangles":"Triangles","city.unit.asl":"m","city.model.title":"Mod\xE8le","city.model.date":"Donn\xE9es du","city.model.buildings":"B\xE2timents","city.model.triangles":"Triangles","city.model.tiles":"Tuiles charg\xE9es","city.model.groundNote":"B\xE2timents : mod\xE8le 3D de la ville de Zurich, mod\xE8le de toits LoD2, donn\xE9es publiques ouvertes. Le terrain est approch\xE9 \xE0 partir des altitudes de base des b\xE2timents.","city.model.source":"Source","city.model.loading":"Chargement du mod\xE8le de la ville\u2026","city.model.errorTitle":"Le mod\xE8le de la ville n'a pas pu \xEAtre lu","city.model.errorText":"Poly n'a pas pu charger les fichiers de son mod\xE8le 3D de la ville. Mettez Poly \xE0 jour ou r\xE9installez-le.","city.model.missingTitle":"Aucun mod\xE8le de la ville install\xE9","city.model.missingText":"Cette copie de Poly a \xE9t\xE9 construite sans son mod\xE8le de la ville. Ajoutez-le dans runtime/assets/model/ du paquet avec le script de mise \xE0 jour du dossier du plugin, puis reconstruisez-le :","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"La vue 3D n'a pas pu d\xE9marrer","city.view.loadingTiles":"Chargement de {{count}} tuiles\u2026","city.settings.model":"Mod\xE8le de la ville","city.settings.modelInstalled":"Install\xE9 : donn\xE9es du {{date}}, {{buildings}} b\xE2timents.","city.settings.modelMissing":"Non install\xE9. Le mod\xE8le doit se trouver dans {{folder}}.","city.settings.update":"Mettre \xE0 jour","city.settings.source":"Source","city.settings.sourceText":"Mod\xE8le 3D de la ville de Zurich (mod\xE8le de toits LoD2, CityGML), donn\xE9es publiques ouvertes sans restriction d'utilisation :","city.settings.colorMode":"Couleur","city.settings.showGround":"Terrain","city.settings.camera":"Cam\xE9ra","city.footer.building":"B\xE2timent","city.footer.tiles":"Tuiles","city.footer.buildings":"B\xE2timents","city.footer.date":"Donn\xE9es du","settings.building.title":"B\xE2timent","settings.building.description":"Le b\xE2timent de l'ETH choisi sur le plan du campus, par son code.","settings.level.title":"\xC9tage","settings.level.description":"L'\xE9tage du b\xE2timent choisi dont le plan du campus montre les salles.","settings.campusView.title":"Vue du campus","settings.campusView.description":"Ce que montre la page du campus : le plan 2D ou la maquette 3D de la ville.","campusMap.title":"Plan du campus","campusMap.openPage":"Ouvrir la page du plan du campus","campusMap.command.open":"Ouvrir le plan du campus","campusMap.map.attribution":"Carte \xA9 Esri, HERE, Garmin, \xA9 contributeurs OpenStreetMap \xB7 B\xE2timents \xA9 ETH Z\xFCrich","campusMap.map.loading":"Chargement de la carte\u2026","campusMap.map.failed":"La carte n'a pas pu d\xE9marrer","campusMap.floors.label":"\xC9tages de {{code}}","campusMap.floors.show":"Afficher l'\xE9tage {{floor}}","campusMap.floors.loading":"Chargement des salles\u2026","campusMap.floors.failed":"Les salles n'ont pas pu \xEAtre lues","campusMap.floors.one":"1 \xE9tage avec salles","campusMap.floors.other":"{{count}} \xE9tages avec salles","campusMap.floors.none":"Aucun plan d'\xE9tage publi\xE9","campusMap.floors.reading":"Lecture des \xE9tages\u2026","campusMap.room.close":"Fermer","campusMap.room.type":"Type de salle","campusMap.room.use":"Usage","campusMap.legend.label":"Types de salle","campusMap.room.kind.teaching":"Enseignement","campusMap.room.kind.lab":"Laboratoire","campusMap.room.kind.office":"Bureau","campusMap.room.kind.circulation":"Circulation","campusMap.room.kind.toilet":"Toilettes","campusMap.room.kind.service":"Service","campusMap.room.kind.other":"Autres","campusMap.view.label":"Vue","campusMap.view.map":"Carte","campusMap.view.3d":"3D","campusMap.view.outside":"Ce b\xE2timent est hors de la maquette 3D de la ville de Zurich","campusMap.outlines.failed":"Les contours des b\xE2timents n'ont pas pu \xEAtre lus","campusMap.building.link":"Page du b\xE2timent de l'ETH","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"Autres sites","campusMap.search.placeholder":"Rechercher b\xE2timents, salles, rues","campusMap.search.clear":"Effacer la recherche","campusMap.search.none":"Aucun b\xE2timent ne correspond.","campusMap.credit":"B\xE2timents, \xE9tages et salles du plan du campus de l'ETH Z\xFCrich. Fond de carte : Esri Light/Dark Gray Canvas, \xA9 contributeurs OpenStreetMap.","campusMap.map.zoomIn":"Zoom avant","campusMap.map.zoomOut":"Zoom arri\xE8re","elink.title":"eLink","elink.openPage":"Ouvrir l\u2019horaire eLink","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 course","elink.runs.other":"{count} courses","elink.firstLast":"Premi\xE8re {first} \xB7 Derni\xE8re {last}","elink.in":"dans {minutes} min","elink.delay":"{minutes} min de retard","elink.ended":"Plus de d\xE9parts aujourd\u2019hui.","elink.weekend":"Pas d\u2019eLink le week-end.","elink.noService":"Pas d\u2019eLink ce jour-l\xE0.","elink.showDay":"Afficher {day}","elink.loading":"Chargement de l\u2019horaire eLink\u2026","elink.credit":"Donn\xE9es horaires de transport.opendata.ch","elink.error.networkError":"transport.opendata.ch est injoignable.","elink.error.serviceError":"transport.opendata.ch a r\xE9pondu par une erreur.","elink.error.formatError":"transport.opendata.ch a envoy\xE9 des donn\xE9es que Poly ne sait pas lire.","elink.error.invalidInput":"Poly a demand\xE9 \xE0 transport.opendata.ch un jour inconnu.","elink.settings.date.title":"Jour eLink","elink.settings.date.description":"Le jour affich\xE9 par l\u2019onglet eLink ; un jour pass\xE9 revient \xE0 aujourd\u2019hui.","campusMap.group.rooms":"Salles","campusMap.rooms.searching":"Recherche des salles\u2026","campusMap.rooms.failed":"Les salles n'ont pas pu \xEAtre recherch\xE9es","campusMap.rooms.none":"Aucune salle ne correspond.","campusMap.view.show3d":"Afficher en 3D","campusMap.view.show2d":"Afficher la carte 2D","elink.showTimetable":"Afficher l\u2019horaire","elink.arrival":"Arriv\xE9e \xE0 {stop} \xE0 {time}","campusMap.building.clear":"Effacer la s\xE9lection","campusMap.properties.tab":"Ville 3D","campusMap.properties.only3d":"Les donn\xE9es de la ville 3D apparaissent ici tant que la page du campus affiche la 3D.","campusMap.properties.buildingTab":"B\xE2timent","campusMap.properties.building":"B\xE2timent","campusMap.properties.room":"Salle","campusMap.properties.code":"Code","campusMap.properties.address":"Adresse","campusMap.properties.campus":"Campus","campusMap.properties.floors":"\xC9tages","campusMap.properties.floor":"\xC9tage","campusMap.properties.kind":"Cat\xE9gorie","campusMap.properties.none":"S\xE9lectionnez un b\xE2timent sur le plan du campus ou dans la barre lat\xE9rale pour le voir ici.","campusMap.group.zurich":"Zurich"};var pm={"manifest.name":"Poly","manifest.description":"Valley \u4E2D\u7684 ETH \u4E0E UZH\uFF1AETH Zentrum \u4E0E H\xF6nggerberg \u4E4B\u95F4\u7684 eLink \u73ED\u8F66\u3001ETH Zentrum\u3001ETH H\xF6nggerberg \u548C UZH \u5404\u9910\u5385\u7684\u4ECA\u65E5\u83DC\u5355\uFF0C\u4EE5\u53CA ETH \u5EFA\u7B51\u53CA\u5176\u697C\u5C42\u548C\u623F\u95F4\u7684\u6821\u56ED\u5730\u56FE\uFF0C\u53EF\u5728 2D \u548C\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u4E2D\u67E5\u770B\u3002","menu.title":"\u83DC\u5355",refresh:"\u5237\u65B0",openWebsite:"\u6253\u5F00\u7F51\u7AD9","day.previous":"\u524D\u4E00\u5929","day.next":"\u540E\u4E00\u5929","day.backToToday":"\u56DE\u5230\u4ECA\u5929","day.today":"\u4ECA\u5929","week.previous":"\u4E0A\u4E00\u5468","week.next":"\u4E0B\u4E00\u5468","week.label":"\u5468","service.label":"\u9910\u6B21","service.lunch":"\u5348\u9910","service.dinner":"\u665A\u9910",loading:"\u6B63\u5728\u52A0\u8F7D\u83DC\u5355\u2026","empty.lunch":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u5348\u9910\u3002","empty.dinner":"\u8FD9\u4E00\u5929\u6CA1\u6709\u5730\u65B9\u4F9B\u5E94\u665A\u9910\u3002","empty.location":"\u8FD9\u4E00\u9910\u6CA1\u6709\u83DC\u54C1\u3002","diet.vegan":"\u7EAF\u7D20","diet.vegetarian":"\u7D20\u98DF","climate.LOW":"\u6C14\u5019\u5F71\u54CD\u4F4E","climate.MEDIUM":"\u6C14\u5019\u5F71\u54CD\u4E2D\u7B49","climate.HIGH":"\u6C14\u5019\u5F71\u54CD\u9AD8","price.students":"\u5B66\u751F","price.internal":"\u5458\u5DE5","price.external":"\u8BBF\u5BA2",allergens:"\u8FC7\u654F\u539F","allergens.none":"\u672A\u6807\u6CE8\u8FC7\u654F\u539F","credit.eth":"\u83DC\u5355\u6765\u81EA ETH Zurich Gastronomy\u3002","credit.uzh":"\u83DC\u5355\u6765\u81EA food2050 \u4E0A\u7684 ZFV\u3002","error.networkError":"\u65E0\u6CD5\u8FDE\u63A5\u83DC\u5355\u670D\u52A1\u3002","error.serviceError":"\u83DC\u5355\u670D\u52A1\u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","error.formatError":"\u83DC\u5355\u670D\u52A1\u53D1\u9001\u4E86 Poly \u65E0\u6CD5\u8BFB\u53D6\u7684\u6570\u636E\u3002","error.notFound":"\u83DC\u5355\u670D\u52A1\u6CA1\u6709\u8FD9\u4E2A\u9875\u9762\u3002","error.invalidInput":"Poly \u8BF7\u6C42\u83DC\u5355\u7684\u65B9\u5F0F\u4E0D\u88AB\u8BE5\u670D\u52A1\u652F\u6301\u3002","error.unavailable":"Poly \u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\u3002",openPage:"\u6253\u5F00\u83DC\u5355\u9875\u9762","campus.label":"\u6821\u533A","campus.eth":"ETH","campus.hoengg":"H\xF6ngg","campus.uzh":"UZH","campus.eth.title":"ETH Zentrum","campus.hoengg.title":"ETH H\xF6nggerberg","campus.uzh.title":"UZH \u9910\u5385","menus.one":"1 \u4EFD\u83DC\u5355","menus.other":"{count} \u4EFD\u83DC\u5355","hours.openNow":"\u8425\u4E1A\u4E2D \xB7 {hours}","hours.closed":"\u5DF2\u5173\u95ED \xB7 {hours}","hours.open":"\u8425\u4E1A {hours}","service.time.lunch":"\u5348\u9910 {hours}","service.time.dinner":"\u665A\u9910 {hours}",filter:"\u7B5B\u9009","filter.vegetarian":"\u7D20\u98DF","filter.vegan":"\u7EAF\u7D20","filter.glutenFree":"\u65E0\u9EB8\u8D28","filter.clear":"\u6E05\u9664\u7B5B\u9009","empty.filtered":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u83DC\u5355\u3002","loading.uzh":"\u6B63\u5728\u8BFB\u53D6 UZH \u9910\u5385\u2026",openInNewTab:"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00","settings.onlyVegetarian.title":"\u4EC5\u7D20\u98DF","settings.onlyVegetarian.description":"\u4EC5\u663E\u793A\u7D20\u98DF\u548C\u7EAF\u7D20\u83DC\u5355\uFF0C\u5305\u62EC\u5730\u70B9\u5217\u8868\u7684\u8BA1\u6570\u548C\u9875\u9762\u3002","settings.onlyVegan.title":"\u4EC5\u7EAF\u7D20","settings.onlyVegan.description":"\u4EC5\u663E\u793A\u7EAF\u7D20\u83DC\u5355\u3002","settings.onlyGlutenFree.title":"\u4EC5\u65E0\u9EB8\u8D28","settings.onlyGlutenFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u542B\u9EB8\u8D28\u8C37\u7269\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002","settings.campus.title":"\u6821\u533A","settings.campus.description":"\u83DC\u5355\u4E2D\u9009\u62E9\u7684\u6807\u7B7E\uFF1A\u6536\u85CF\u6216\u67D0\u4E2A\u6821\u533A\u3002","settings.day.title":"\u65E5\u671F","settings.day.description":"\u83DC\u5355\u663E\u793A\u7684\u65E5\u671F\u548C\u9910\u6B21\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","price.internalStudents":"\u5458\u5DE5\u548C\u5B66\u751F","price.all":"\u6240\u6709\u8BBF\u5BA2","filter.lactoseFree":"\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.title":"\u4EC5\u65E0\u4E73\u7CD6","settings.onlyLactoseFree.description":"\u4EC5\u663E\u793A\u5DF2\u58F0\u660E\u8FC7\u654F\u539F\u4E2D\u4E0D\u542B\u725B\u5976\u7684\u83DC\u5355\u3002\u672A\u58F0\u660E\u8FC7\u654F\u539F\u7684\u83DC\u5355\u4E0D\u663E\u793A\u3002",prices:"\u4EF7\u683C","prices.all":"\u6240\u6709\u4EF7\u683C","settings.prices.title":"\u663E\u793A\u7684\u4EF7\u683C","settings.prices.description":"\u83DC\u5355\u5361\u7247\u663E\u793A\u7684\u4EF7\u683C\uFF1A\u4ECE\u5B66\u751F\u5230\u8BBF\u5BA2\u7684\u5168\u90E8\u4EF7\u683C\uFF0C\u6216\u67D0\u4E00\u7EC4\u7684\u4EF7\u683C\u3002","campus.favorites":"\u6536\u85CF","campus.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","favorite.add":"\u5C06 {name} \u52A0\u5165\u6536\u85CF","favorite.remove":"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664 {name}","empty.favorites":"\u4F60\u6536\u85CF\u7684\u5730\u70B9\u8FD9\u4E00\u5929\u90FD\u6CA1\u6709\u8FD9\u4E00\u9910\u7684\u83DC\u5355\u3002","credit.both":"\u83DC\u5355\u6765\u81EA ETH Zurich \u9910\u996E\u670D\u52A1\u548C food2050 \u4E0A\u7684 ZFV\u3002","settings.favorites.title":"\u6536\u85CF\u7684\u5730\u70B9","settings.favorites.description":"\u83DC\u5355\u4E2D\u52A0\u4E86\u661F\u6807\u7684\u5730\u70B9\u3002","mode.label":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.title":"\u4FA7\u8FB9\u680F\u6807\u7B7E","settings.mode.description":"\u4FA7\u8FB9\u680F\u663E\u793A\u7684\u6807\u7B7E\uFF1AeLink \u73ED\u8F66\u3001\u83DC\u5355\u6216\u6821\u56ED\u5730\u56FE\u3002","city.display.color":"\u989C\u8272","city.display.surfaces":"\u8868\u9762","city.display.height":"\u9AD8\u5EA6","city.display.ground":"\u5730\u9762","city.display.groundHint":"\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u7684\u5730\u9762","city.building.title":"\u5EFA\u7B51","city.building.close":"\u5173\u95ED","city.building.egid":"EGID","city.building.height":"\u9AD8\u5EA6","city.building.ground":"\u5730\u9762","city.building.roof":"\u5C4B\u9876\u6700\u9AD8\u70B9","city.building.position":"LV95 E / N","city.building.triangles":"\u4E09\u89D2\u5F62","city.unit.asl":"\u6D77\u62D4","city.model.title":"\u6A21\u578B","city.model.date":"\u6570\u636E\u65E5\u671F","city.model.buildings":"\u5EFA\u7B51","city.model.triangles":"\u4E09\u89D2\u5F62","city.model.tiles":"\u5DF2\u52A0\u8F7D\u56FE\u5757","city.model.groundNote":"\u5EFA\u7B51\uFF1A\u82CF\u9ECE\u4E16\u5E02 3D \u57CE\u5E02\u6A21\u578B\uFF0CLoD2 \u5C4B\u9876\u6A21\u578B\uFF0C\u5F00\u653E\u653F\u5E9C\u6570\u636E\u3002\u5730\u9762\u6839\u636E\u5EFA\u7B51\u5E95\u90E8\u9AD8\u7A0B\u8FD1\u4F3C\u751F\u6210\u3002","city.model.source":"\u6765\u6E90","city.model.loading":"\u6B63\u5728\u52A0\u8F7D\u57CE\u5E02\u6A21\u578B\u2026","city.model.errorTitle":"\u65E0\u6CD5\u8BFB\u53D6\u57CE\u5E02\u6A21\u578B","city.model.errorText":"Poly \u65E0\u6CD5\u52A0\u8F7D\u5176\u4E09\u7EF4\u57CE\u5E02\u6A21\u578B\u7684\u6587\u4EF6\u3002\u8BF7\u66F4\u65B0 Poly \u6216\u91CD\u65B0\u5B89\u88C5\u3002","city.model.missingTitle":"\u672A\u5B89\u88C5\u57CE\u5E02\u6A21\u578B","city.model.missingText":"\u6B64 Poly \u526F\u672C\u6784\u5EFA\u65F6\u672A\u5305\u542B\u57CE\u5E02\u6A21\u578B\u3002\u8BF7\u5728\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\u4F7F\u7528\u66F4\u65B0\u811A\u672C\u5C06\u5176\u6DFB\u52A0\u5230\u8F6F\u4EF6\u5305\u7684 runtime/assets/model/\uFF0C\u7136\u540E\u91CD\u65B0\u6784\u5EFA\uFF1A","city.model.attribution":"\xA9 Stadt Z\xFCrich, 3D-Stadtmodell (OGD)","city.view.failed":"\u65E0\u6CD5\u542F\u52A8 3D \u89C6\u56FE","city.view.loadingTiles":"\u6B63\u5728\u52A0\u8F7D {{count}} \u4E2A\u56FE\u5757\u2026","city.settings.model":"\u57CE\u5E02\u6A21\u578B","city.settings.modelInstalled":"\u5DF2\u5B89\u88C5\uFF1A\u6570\u636E\u65E5\u671F {{date}}\uFF0C{{buildings}} \u5EA7\u5EFA\u7B51\u3002","city.settings.modelMissing":"\u672A\u5B89\u88C5\u3002\u6A21\u578B\u5E94\u4F4D\u4E8E {{folder}}\u3002","city.settings.update":"\u66F4\u65B0","city.settings.source":"\u6765\u6E90","city.settings.sourceText":"\u82CF\u9ECE\u4E16\u5E02 3D \u57CE\u5E02\u6A21\u578B\uFF08LoD2 \u5C4B\u9876\u6A21\u578B\uFF0CCityGML\uFF09\uFF0C\u65E0\u4F7F\u7528\u9650\u5236\u7684\u5F00\u653E\u653F\u5E9C\u6570\u636E\uFF1A","city.settings.colorMode":"\u989C\u8272","city.settings.showGround":"\u5730\u9762","city.settings.camera":"\u76F8\u673A","city.footer.building":"\u5EFA\u7B51","city.footer.tiles":"\u56FE\u5757","city.footer.buildings":"\u5EFA\u7B51\u6570","city.footer.date":"\u6570\u636E\u65E5\u671F","settings.building.title":"\u5EFA\u7B51","settings.building.description":"\u5728\u6821\u56ED\u5730\u56FE\u4E2D\u9009\u4E2D\u7684 ETH \u5EFA\u7B51\uFF08\u6309\u4EE3\u7801\uFF09\u3002","settings.level.title":"\u697C\u5C42","settings.level.description":"\u6821\u56ED\u5730\u56FE\u663E\u793A\u5176\u623F\u95F4\u7684\u6240\u9009\u5EFA\u7B51\u697C\u5C42\u3002","settings.campusView.title":"\u6821\u56ED\u89C6\u56FE","settings.campusView.description":"\u6821\u56ED\u9875\u9762\u663E\u793A\u7684\u5185\u5BB9\uFF1A2D \u6821\u56ED\u5730\u56FE\u6216 3D \u57CE\u5E02\u6A21\u578B\u3002","campusMap.title":"\u6821\u56ED\u5730\u56FE","campusMap.openPage":"\u6253\u5F00\u6821\u56ED\u5730\u56FE\u9875\u9762","campusMap.command.open":"\u6253\u5F00\u6821\u56ED\u5730\u56FE","campusMap.map.attribution":"\u5730\u56FE \xA9 Esri\u3001HERE\u3001Garmin\u3001\xA9 OpenStreetMap \u8D21\u732E\u8005 \xB7 \u5EFA\u7B51 \xA9 ETH Z\xFCrich","campusMap.map.loading":"\u6B63\u5728\u52A0\u8F7D\u5730\u56FE\u2026","campusMap.map.failed":"\u5730\u56FE\u65E0\u6CD5\u542F\u52A8","campusMap.floors.label":"{{code}} \u7684\u697C\u5C42","campusMap.floors.show":"\u663E\u793A {{floor}} \u5C42","campusMap.floors.loading":"\u6B63\u5728\u52A0\u8F7D\u623F\u95F4\u2026","campusMap.floors.failed":"\u65E0\u6CD5\u8BFB\u53D6\u623F\u95F4","campusMap.floors.one":"1 \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.other":"{{count}} \u4E2A\u6709\u623F\u95F4\u7684\u697C\u5C42","campusMap.floors.none":"\u672A\u516C\u5E03\u697C\u5C42\u5E73\u9762\u56FE","campusMap.floors.reading":"\u6B63\u5728\u8BFB\u53D6\u697C\u5C42\u2026","campusMap.room.close":"\u5173\u95ED","campusMap.room.type":"\u623F\u95F4\u7C7B\u578B","campusMap.room.use":"\u7528\u9014","campusMap.legend.label":"\u623F\u95F4\u7C7B\u578B","campusMap.room.kind.teaching":"\u6559\u5B66","campusMap.room.kind.lab":"\u5B9E\u9A8C\u5BA4","campusMap.room.kind.office":"\u529E\u516C\u5BA4","campusMap.room.kind.circulation":"\u4EA4\u901A\u7A7A\u95F4","campusMap.room.kind.toilet":"\u536B\u751F\u95F4","campusMap.room.kind.service":"\u8BBE\u5907","campusMap.room.kind.other":"\u5176\u4ED6","campusMap.view.label":"\u89C6\u56FE","campusMap.view.map":"\u5730\u56FE","campusMap.view.3d":"3D","campusMap.view.outside":"\u8BE5\u5EFA\u7B51\u4E0D\u5728\u82CF\u9ECE\u4E16\u5E02 3D \u6A21\u578B\u8303\u56F4\u5185","campusMap.outlines.failed":"\u65E0\u6CD5\u8BFB\u53D6\u5EFA\u7B51\u8F6E\u5ED3","campusMap.building.link":"ETH \u5EFA\u7B51\u9875\u9762","campusMap.group.zentrum":"ETH Zentrum","campusMap.group.hoengg":"ETH H\xF6nggerberg","campusMap.group.other":"\u5176\u4ED6\u6821\u533A","campusMap.search.placeholder":"\u641C\u7D22\u5EFA\u7B51\u3001\u623F\u95F4\u3001\u8857\u9053","campusMap.search.clear":"\u6E05\u9664\u641C\u7D22","campusMap.search.none":"\u6CA1\u6709\u5339\u914D\u7684\u5EFA\u7B51\u3002","campusMap.credit":"\u5EFA\u7B51\u3001\u697C\u5C42\u548C\u623F\u95F4\u6765\u81EA ETH Z\xFCrich \u6821\u56ED\u5730\u56FE\u3002\u5E95\u56FE\uFF1AEsri Light/Dark Gray Canvas\uFF0C\xA9 OpenStreetMap \u8D21\u732E\u8005\u3002","campusMap.map.zoomIn":"\u653E\u5927","campusMap.map.zoomOut":"\u7F29\u5C0F","elink.title":"eLink","elink.openPage":"\u6253\u5F00 eLink \u65F6\u523B\u8868","elink.direction.toHoengg":"Zentrum \u2192 H\xF6nggerberg","elink.direction.toZentrum":"H\xF6nggerberg \u2192 Zentrum","elink.direction.fromHb":"HB \u2192 H\xF6nggerberg","elink.direction.toHb":"H\xF6nggerberg \u2192 HB","elink.runs.one":"1 \u73ED","elink.runs.other":"{count} \u73ED","elink.firstLast":"\u9996\u73ED {first} \xB7 \u672B\u73ED {last}","elink.in":"{minutes} \u5206\u949F\u540E","elink.delay":"\u665A\u70B9 {minutes} \u5206\u949F","elink.ended":"\u4ECA\u5929\u5DF2\u65E0\u73ED\u6B21\u3002","elink.weekend":"\u5468\u672B\u6CA1\u6709 eLink\u3002","elink.noService":"\u8FD9\u4E00\u5929\u6CA1\u6709 eLink\u3002","elink.showDay":"\u67E5\u770B{day}","elink.loading":"\u6B63\u5728\u52A0\u8F7D eLink \u65F6\u523B\u8868\u2026","elink.credit":"\u65F6\u523B\u8868\u6570\u636E\u6765\u81EA transport.opendata.ch","elink.error.networkError":"\u65E0\u6CD5\u8FDE\u63A5 transport.opendata.ch\u3002","elink.error.serviceError":"transport.opendata.ch \u8FD4\u56DE\u4E86\u9519\u8BEF\u3002","elink.error.formatError":"transport.opendata.ch \u53D1\u9001\u7684\u6570\u636E Poly \u65E0\u6CD5\u8BFB\u53D6\u3002","elink.error.invalidInput":"Poly \u5411 transport.opendata.ch \u8BF7\u6C42\u4E86\u672A\u77E5\u7684\u65E5\u671F\u3002","elink.settings.date.title":"eLink \u65E5\u671F","elink.settings.date.description":"eLink \u6807\u7B7E\u663E\u793A\u7684\u65E5\u671F\uFF1B\u8FC7\u53BB\u7684\u65E5\u671F\u4F1A\u56DE\u5230\u4ECA\u5929\u3002","campusMap.group.rooms":"\u623F\u95F4","campusMap.rooms.searching":"\u6B63\u5728\u641C\u7D22\u623F\u95F4\u2026","campusMap.rooms.failed":"\u65E0\u6CD5\u641C\u7D22\u623F\u95F4","campusMap.rooms.none":"\u6CA1\u6709\u5339\u914D\u7684\u623F\u95F4\u3002","campusMap.view.show3d":"\u4EE5 3D \u663E\u793A","campusMap.view.show2d":"\u663E\u793A 2D \u5730\u56FE","elink.showTimetable":"\u67E5\u770B\u65F6\u523B\u8868","elink.arrival":"{time} \u5230\u8FBE {stop}","campusMap.building.clear":"\u53D6\u6D88\u9009\u62E9","campusMap.properties.tab":"3D \u57CE\u5E02","campusMap.properties.only3d":"\u6821\u56ED\u9875\u9762\u663E\u793A 3D \u65F6\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A 3D \u57CE\u5E02\u4FE1\u606F\u3002","campusMap.properties.buildingTab":"\u5EFA\u7B51","campusMap.properties.building":"\u5EFA\u7B51","campusMap.properties.room":"\u623F\u95F4","campusMap.properties.code":"\u4EE3\u7801","campusMap.properties.address":"\u5730\u5740","campusMap.properties.campus":"\u6821\u533A","campusMap.properties.floors":"\u697C\u5C42\u6570","campusMap.properties.floor":"\u697C\u5C42","campusMap.properties.kind":"\u7C7B\u522B","campusMap.properties.none":"\u5728\u6821\u56ED\u5730\u56FE\u6216\u4FA7\u8FB9\u680F\u4E2D\u9009\u62E9\u4E00\u680B\u5EFA\u7B51\u5373\u53EF\u5728\u6B64\u67E5\u770B\u3002","campusMap.group.zurich":"\u82CF\u9ECE\u4E16"};function mS(n){let e=n.ui.registerCatalogs({en:Kr,de:um,es:dm,fr:hm,"zh-CN":pm}),t=d=>{let h=n.ui.t(d);return h===d?Kr[d]??d:h};kd(n),Ud(n);let i=kf(),r=document.createElement("style");r.id="poly-styles",r.textContent=Pf+am+Ef,document.getElementById(r.id)?.remove(),document.head.appendChild(r),nc();let s=n.settings.subscribe(nc);Df(n,{t});let o=om(n),a=cm(n),l={type:"object",additionalProperties:!1,required:["shown"],properties:{shown:{type:"boolean"}}},c=[n.commands.register({id:"open",label:"Open the campus map",labelKey:"campusMap.command.open",sideEffect:"read",outputSchema:l,run:()=>(Fn(t("campusMap.title")),{shown:!0})})];return()=>{for(let d of c)d();o(),a(),s(),e(),i(),r.remove()}}var gS={register:mS},kR=gS;export{kR as default,mS as register};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
