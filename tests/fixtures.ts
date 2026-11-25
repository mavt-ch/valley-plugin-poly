/** Small synthetic answers shaped like Cookpit and food2050; names and dishes are invented. */

const price = (code: number, amount: number) => ({ price: amount, 'customer-group-code': code })
const line = (name: string, id: number, dish: string, description: string, classCode: number, extra: Record<string, unknown> = {}) => ({
  name,
  meal: { 'line-id': id, name: dish, description, 'meal-price-array': [price(10, 7.5), price(11, 10.5), price(13, 13.5)], 'meal-class-array': [{ code: classCode, desc: classCode === 16 ? 'Vegan' : classCode === 17 ? 'Vegetarian' : 'Meat' }], 'allergen-array': [{ desc: 'celery' }], ...extra }
})

export const ETH_FACILITIES = {
  'facility-array': [
    { 'facility-id': 1, 'facility-name': 'Test Hall', building: 'HXX', floor: 'E', 'room-nr': '1', 'address-line-3': '8093 Zürich', 'facility-url': 'https://example.test/hall' },
    { 'facility-id': 2, 'facility-name': 'City Bar', building: 'ZZ', floor: 'D', 'address-line-3': '8092 Zürich', 'facility-url': 'https://example.test/bar' },
    { 'facility-id': 3, 'facility-name': 'Ring Bistro', building: 'HYY', floor: 'D', 'address-line-3': '8049 Zürich', 'facility-url': 'https://example.test/bistro' },
    { 'facility-id': 4, 'facility-name': 'North Deli', building: 'NN', floor: 'E', 'address-line-3': '8050 Oerlikon', 'facility-url': 'https://example.test/deli' },
    { 'facility-id': 5, 'facility-name': 'Rhine Lounge', building: 'BB', floor: 'K', 'address-line-3': '4056 Basel', 'facility-url': 'https://example.test/lounge' }
  ]
}

export const ETH_ROTAS = {
  'weekly-rota-array': [
    {
      'facility-id': 1, 'valid-from': '2026-11-23', 'valid-to': '2026-11-29',
      'day-of-week-array': [
        { 'day-of-week-code': 3, 'opening-hour-array': [{ 'time-from': '11:00', 'time-to': '20:00', 'meal-time-array': [
          { name: 'Mittag', 'time-from': '11:00', 'time-to': '13:30', 'line-array': [
            line('Garden', 101, 'Lentil curry', 'Rice | Coriander', 16, { 'image-url': 'https://idapps.ethz.ch/cookpit-pub-services/v1/images/5001' }),
            line('Grill', 102, 'novalue', 'novalue', 11, { 'allergen-array': [{ code: 10, desc: 'gluten wheat' }, { code: 18, desc: 'celery' }] }),
            { name: 'Closed line' }
          ] },
          { name: 'Abend', 'time-from': '17:30', 'time-to': '19:30', 'line-array': [line('Evening', 103, 'Pasta al forno', 'Tomato | Basil', 17)] }
        ] }] },
        { 'day-of-week-code': 6 }
      ]
    },
    {
      'facility-id': 2, 'valid-from': '2026-11-16', 'valid-to': '2026-11-29',
      'day-of-week-array': [{ 'day-of-week-code': 3, 'opening-hour-array': [{ 'time-from': '11:00', 'time-to': '14:00', 'meal-time-array': [
        { name: 'Mittag', 'time-from': '11:30', 'time-to': '13:30', 'line-array': [
          line('Soup', 201, 'Pumpkin soup', '', 16, { 'allergen-array': [] }),
          line('Bowl', 202, 'Tofu bowl', 'Rice | Greens', 16)
        ] }
      ] }] }]
    },
    { 'facility-id': 4, 'valid-from': '2026-11-23', 'valid-to': '2026-11-29', 'day-of-week-array': [{ 'day-of-week-code': 3, 'opening-hour-array': [{ 'time-from': '11:00', 'time-to': '14:00', 'meal-time-array': [
      { 'time-from': '11:00', 'time-to': '13:30', 'line-array': [line('Deli', 401, 'Sandwich', '', 11)] }
    ] }] }] },
    { 'facility-id': 3, 'valid-from': '2026-09-14', 'valid-to': '2026-12-20', 'day-of-week-array': [{ 'day-of-week-code': 3, 'opening-hour-array': [{ 'time-from': '07:00', 'time-to': '16:00' }] }] }
  ]
}

export const ETH_ROTAS_DE = {
  'weekly-rota-array': [{ 'facility-id': 1, 'valid-from': '2026-11-23', 'valid-to': '2026-11-29', 'day-of-week-array': [{ 'day-of-week-code': 3, 'opening-hour-array': [{ 'meal-time-array': [{ 'line-array': [
    { name: 'Grill', meal: { 'line-id': 102, name: 'Bratwurst', description: 'Zwiebelsauce | Rösti' } }
  ] }] }] }] }]
}

/** A page whose payload is streamed in chunks the way food2050 serves it. */
export function flightPage(props: unknown, prefix = '2a:["$","$L34",null,'): string {
  const payload = `0:{"b":"x"}\n${prefix}${JSON.stringify(props)}]\n`
  const half = Math.floor(payload.length / 2)
  const chunk = (text: string) => `<script>self.__next_f.push([1,${JSON.stringify(text)}])</script>`
  return `<!doctype html><html><body>${chunk(payload.slice(0, half))}${chunk(payload.slice(half))}</body></html>`
}

export const UZH_ORG = flightPage({
  organisation: {
    name: 'Universität Zürich',
    organisationChildren: [
      { name: 'Campus Zentrum', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum', organisationChildren: [] },
      { name: 'Campus Irchel', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-irchel', organisationChildren: [] }
    ],
    outlets: [
      { name: 'Obere Mensa', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa' },
      { name: 'Seerose', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-irchel/seerose' },
      { name: 'Elsewhere', detailUrl: 'https://example.test/other' }
    ]
  }
})

export const UZH_OUTLET = flightPage({
  outlet: {
    name: 'Obere Mensa',
    location: { address: { addressLine1: 'Teststrasse 1' } },
    menuCategories: [
      { name: 'Lunch', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/lunch' },
      { name: 'Abend', detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/abendverpflegung' }
    ]
  }
}, '14:["$","$L35",null,')

const gluten = { allergen: { externalId: 'cerealsContainingGluten' } }
export const UZH_LUNCH = flightPage({
  outlet: {
    name: 'Obere Mensa',
    menuCategory: { name: 'Lunch', calendar: { week: { daily: [
      { from: { dateLocal: '2026-11-25T00:00:00+01:00' }, menuItems: [
        { id: 'a', category: { name: 'Menu 1' }, detailUrl: 'https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/lunch,menu-1/2026-11-25', dish: { name: 'COUSCOUS BOWL', description: 'Lentils, corn', isVegan: false, isVegetarian: true, allergens: [gluten], stats: { food2050climateImpact: { rating: 'LOW' } } } },
        { id: 'b', category: { name: 'Menu 2' }, dish: { name: 'PASTA', description: 'Daily creation', isVegan: true, isVegetarian: true, allergens: [{ allergen: '$14:props:outlet:menuCategory:calendar:week:daily:0:menuItems:0:dish:allergens:0:allergen' }], stats: { food2050climateImpact: { rating: 'MEDIUM' } } } }
      ] },
      { from: { dateLocal: '2026-11-26T00:00:00+01:00' }, menuItems: [] }
    ] } } }
  },
  messages: { factsheet: { allergens: { allergyInformation: 'Allergikerinformationen', cerealsContainingGluten: 'Glutenhaltiges Getreide' } } }
}, '14:["$","$L35",null,')

export const UZH_DINNER = flightPage({
  outlet: { name: 'Obere Mensa', menuCategory: { name: 'Abend', calendar: { week: { daily: [
    { from: { dateLocal: '2026-11-25T00:00:00+01:00' }, menuItems: [{ id: 'c', category: { name: 'farm' }, dish: { name: 'DUMPLINGS', description: '', allergens: [] } }] }
  ] } } } }
}, '14:["$","$L35",null,')

export const DISH_IMAGE = 'https://storage.googleapis.com/dish-images-prod/dish-media%2Fzfv%2Ftest%2F2026-11-25-lunch-menu-1%2F1-abc'
export const UZH_DISH = flightPage({
  menuItem: {
    id: 'a',
    dish: { name: 'COUSCOUS BOWL', imageUrl: DISH_IMAGE },
    prices: [
      { amount: '6.1', currency: 'CHF', priceCategory: { name: 'Studierende' } },
      { amount: '9', currency: 'CHF', priceCategory: { name: 'Mitarbeitende' } },
      { amount: '13', currency: 'CHF', priceCategory: { name: 'Externe' } },
      { amount: 'x', currency: 'CHF', priceCategory: { name: 'Kinder' } }
    ]
  }
}, '18:["$","$L3d",null,')
