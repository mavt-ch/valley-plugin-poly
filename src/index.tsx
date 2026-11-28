import type { ValleyPluginApi, ValleyPluginModule } from '@valley/plugin-sdk'
import { VIEWS_CSS, registerPolyViews } from './views'
import { initRuntime } from './city/runtime'
import { initLocalization } from './city/localization'
import { injectStyles } from './city/styles'
import { readSettings } from './city/store'
import { registerFooter } from './city/footer'
import { openCampus } from './campus/store'
import { CAMPUS_CSS } from './campus/styles'
import { registerCampusProperties } from './campus/properties'
import { ELINK_CSS } from './elink/views'
import { NEWS_CSS } from './news/views'
import { POLYBOX_CSS } from './polybox/views'
import en from '../locales/en.json'
import de from '../locales/de.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import zh from '../locales/zh-CN.json'

/**
 * Poly: ETH and UZH in Valley. One left-sidebar panel (Icon Rail) with five tabs: the eLink shuttle,
 * the menu plan of ETH Zentrum, ETH Hönggerberg and the UZH outlets, the campus map (ETH's buildings
 * in 2D and in the Stadt Zürich 3D model), ETH News and the user's Polybox links; one page shows a place's menus or, with instance
 * `elink`, the eLink timetable of the day, with instance `campus` the campus map, with `news` the news
 * feed, with `news:<article>` one article and with `polybox` the table of subjects and Polybox links.
 */
export function register(api: ValleyPluginApi) {
  const offCatalogs = api.ui.registerCatalogs({ en, de, es, fr, 'zh-CN': zh })
  const t = (key: string) => { const result = api.ui.t(key); return result === key ? (en as Record<string, string>)[key] ?? key : result }
  initRuntime(api)
  initLocalization(api)
  const disposeCityStyles = injectStyles()
  const style = document.createElement('style')
  style.id = 'poly-styles'
  style.textContent = VIEWS_CSS + CAMPUS_CSS + ELINK_CSS + NEWS_CSS + POLYBOX_CSS
  document.getElementById(style.id)?.remove()
  document.head.appendChild(style)
  readSettings()
  const offSettings = api.settings.subscribe(readSettings)
  registerPolyViews(api, { t })
  const offFooter = registerFooter(api)
  const offProperties = registerCampusProperties(api)
  const shown = { type: 'object', additionalProperties: false, required: ['shown'], properties: { shown: { type: 'boolean' } } }
  const offCommands = [
    api.commands.register<void, { shown: boolean }>({
      id: 'open', label: 'Open the campus map', labelKey: 'campusMap.command.open', sideEffect: 'read', outputSchema: shown,
      run: () => { openCampus(t('campusMap.title')); return { shown: true } },
    }),
  ]
  return () => {
    for (const off of offCommands) off()
    offFooter()
    offProperties()
    offSettings()
    offCatalogs()
    disposeCityStyles()
    style.remove()
  }
}
const plugin: ValleyPluginModule = { register }
export default plugin
