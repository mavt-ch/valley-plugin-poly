import { describe, expect, it } from 'vitest'
import {
  addDays, defaultService, ethHasGaps, ethMealsById, flightPayload, isHoenggerberg, isoWeek, mondayOf, outletPath, parseEthFacilities, parseEthWeek,
  ethImage, isDishUrl, isImageUrl, parseUzhDish, priceGroupOf, parseUzhAllergenNames, parseUzhOutlet, parseUzhOutlets, parseUzhWeek, payloadProps, sourceLanguage, uzhLocation, weekday
} from '../src/model'
import { DISH_IMAGE, ETH_FACILITIES, ETH_ROTAS, ETH_ROTAS_DE, UZH_DINNER, UZH_DISH, UZH_LUNCH, UZH_ORG, UZH_OUTLET } from './fixtures'

describe('dates', () => {
  it('finds weekdays, Mondays and ISO weeks', () => {
    expect(weekday('2026-11-25')).toBe(3)
    expect(weekday('2026-11-29')).toBe(7)
    expect(mondayOf('2026-11-29')).toBe('2026-11-23')
    expect(mondayOf('2026-11-23')).toBe('2026-11-23')
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
    expect(isoWeek('2026-11-25')).toEqual({ week: 48, year: 2026 })
    expect(isoWeek('2027-01-01')).toEqual({ week: 53, year: 2026 })
  })
  it('picks dinner from half past two and the source language', () => {
    expect(defaultService(new Date(2026, 10, 25, 14, 29))).toBe('lunch')
    expect(defaultService(new Date(2026, 10, 25, 14, 30))).toBe('dinner')
    expect(sourceLanguage('de-CH')).toBe('de')
    expect(sourceLanguage('fr')).toBe('en')
  })
})

describe('ETH Cookpit', () => {
  const facilities = parseEthFacilities(ETH_FACILITIES).filter(isHoenggerberg)
  it('keeps the Hönggerberg facilities by postcode', () => {
    expect(facilities.map(row => row.name)).toEqual(['Test Hall', 'Ring Bistro'])
    expect(facilities[0].place).toBe('HXX E 1')
  })
  it('reads a week into lunch and dinner by meal time, fills "novalue" from German', () => {
    expect(ethHasGaps(ETH_ROTAS)).toBe(true)
    const [hall, bistro] = parseEthWeek(ETH_ROTAS, facilities, '2026-11-23', ethMealsById(ETH_ROTAS_DE))
    expect(hall.days).toHaveLength(7)
    const wednesday = hall.days[2]
    expect(wednesday.date).toBe('2026-11-25')
    expect(wednesday.services.map(row => [row.service, row.from, row.to, row.dishes.length])).toEqual([['lunch', '11:00', '13:30', 2], ['dinner', '17:30', '19:30', 1]])
    const [curry, grill] = wednesday.services[0].dishes
    expect(curry).toMatchObject({ line: 'Garden', name: 'Lentil curry', description: 'Rice · Coriander', diet: 'vegan', classes: [], allergens: ['celery'] })
    expect(curry.image).toBe('https://idapps.ethz.ch/cookpit-pub-services/v1/images/5001?client-id=ethz-wcms')
    expect(grill.image).toBe('')
    expect(curry.prices).toEqual([{ group: 'students', price: 7.5 }, { group: 'internal', price: 10.5 }, { group: 'external', price: 13.5 }])
    expect(grill).toMatchObject({ name: 'Bratwurst', description: 'Zwiebelsauce · Rösti', diet: null, classes: ['Meat'] })
    expect(wednesday.services[1].dishes[0].diet).toBe('vegetarian')
    expect(hall.days[5].services).toEqual([])
    expect(bistro.days.every(day => !day.services.length)).toBe(true)
  })
  it('survives answers of the wrong shape', () => {
    expect(parseEthFacilities(null)).toEqual([])
    expect(parseEthWeek({ 'weekly-rota-array': 'x' }, facilities, '2026-11-23')[0].days[0].services).toEqual([])
  })
})

describe('UZH food2050', () => {
  it('joins the streamed chunks and resolves references', () => {
    const payload = flightPayload(UZH_LUNCH)
    expect(payload).toContain('COUSCOUS BOWL')
    const props = payloadProps(payload, 'outlet') as { outlet: { menuCategory: { calendar: { week: { daily: { menuItems: { dish: { allergens: { allergen: { externalId: string } }[] } }[] }[] } } } } }
    expect(props.outlet.menuCategory.calendar.week.daily[0].menuItems[1].dish.allergens[0].allergen.externalId).toBe('cerealsContainingGluten')
    expect(payloadProps(payload, 'missing')).toBeNull()
    expect(flightPayload('<html></html>')).toBe('')
  })
  it('lists the outlets with their campus', () => {
    expect(parseUzhOutlets(UZH_ORG)).toEqual([
      { path: 'universitat-zurich,campus-zentrum/obere-mensa', name: 'Obere Mensa', campus: 'Campus Zentrum' },
      { path: 'universitat-zurich,campus-irchel/seerose', name: 'Seerose', campus: 'Campus Irchel' }
    ])
    expect(outletPath('https://app.food2050.ch/de/zfv/universitat-zurich,campus-irchel/mensa/lunch')).toBe('universitat-zurich,campus-irchel/mensa')
  })
  it('reads an outlet, its categories and a week', () => {
    const page = parseUzhOutlet(UZH_OUTLET)!
    expect(page).toEqual({ name: 'Obere Mensa', place: 'Teststrasse 1', categories: [{ slug: 'lunch', service: 'lunch' }, { slug: 'abendverpflegung', service: 'dinner' }] })
    const lunch = parseUzhWeek(UZH_LUNCH)
    expect(lunch.get('2026-11-25')!.map(dish => [dish.line, dish.name, dish.diet, dish.climate])).toEqual([['Menu 1', 'COUSCOUS BOWL', 'vegetarian', 'LOW'], ['Menu 2', 'PASTA', 'vegan', 'MEDIUM']])
    const names = parseUzhAllergenNames(UZH_LUNCH)
    expect(names).toEqual({ cerealsContainingGluten: 'Glutenhaltiges Getreide' })
    const outlet = parseUzhOutlets(UZH_ORG)[0]
    const location = uzhLocation(outlet, page, [{ service: 'lunch', days: lunch }, { service: 'dinner', days: parseUzhWeek(UZH_DINNER) }], '2026-11-23', 'de', names)
    expect(location.url).toBe('https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa')
    expect(location.days[2].services.map(row => [row.service, row.dishes.length])).toEqual([['lunch', 2], ['dinner', 1]])
    expect(location.days[2].services[0].dishes[0].allergens).toEqual(['Glutenhaltiges Getreide'])
    expect(location.days[3].services).toEqual([])
  })
})

describe('pictures and dish pages', () => {
  it('accepts only the two services’ picture addresses', () => {
    expect(ethImage('https://idapps.ethz.ch/cookpit-pub-services/v1/images/12')).toBe('https://idapps.ethz.ch/cookpit-pub-services/v1/images/12?client-id=ethz-wcms')
    expect(ethImage('https://elsewhere.test/images/12')).toBe('')
    expect(isImageUrl(ethImage('https://idapps.ethz.ch/cookpit-pub-services/v1/images/12'))).toBe(true)
    expect(isImageUrl(DISH_IMAGE)).toBe(true)
    expect(isImageUrl('https://storage.googleapis.com/other-bucket/x')).toBe(false)
    expect(isImageUrl('https://idapps.ethz.ch/cookpit-pub-services/v1/weeklyrotas?client-id=ethz-wcms')).toBe(false)
    expect(isDishUrl('https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/lunch,menu-1/2026-11-25')).toBe(true)
    expect(isDishUrl('https://app.food2050.ch/de/zfv/universitat-bern,unis/x/lunch/2026-11-25')).toBe(false)
  })
  it('reads a UZH dish page’s picture and prices', () => {
    expect(priceGroupOf('Studierende')).toBe('students')
    expect(priceGroupOf('Employees')).toBe('internal')
    expect(priceGroupOf('Externe')).toBe('external')
    expect(priceGroupOf('Kinder')).toBeNull()
    expect(parseUzhDish(UZH_DISH)).toEqual({ image: DISH_IMAGE, prices: [{ group: 'students', price: 6.1 }, { group: 'internal', price: 9 }, { group: 'external', price: 13 }] })
    expect(parseUzhDish('<html></html>')).toBeNull()
    expect(parseUzhWeek(UZH_LUNCH).get('2026-11-25')![0].detail).toBe('https://app.food2050.ch/de/zfv/universitat-zurich,campus-zentrum/obere-mensa/lunch,menu-1/2026-11-25')
  })
})
