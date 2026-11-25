import type { ValleyPluginApi, ValleyPluginModule } from '@valley/plugin-sdk'
import { VIEWS_CSS, registerStudyViews } from './views'
import en from '../locales/en.json'
import de from '../locales/de.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import zh from '../locales/zh-CN.json'

/** Study: the menu plan of ETH Hönggerberg and the UZH outlets, in the left sidebar (Icon Rail) and as a page. */
export function register(api: ValleyPluginApi) {
  const offCatalogs = api.ui.registerCatalogs({ en, de, es, fr, 'zh-CN': zh })
  const t = (key: string) => { const result = api.ui.t(key); return result === key ? (en as Record<string, string>)[key] ?? key : result }
  const style = document.createElement('style')
  style.id = 'study-styles'
  style.textContent = VIEWS_CSS
  document.getElementById(style.id)?.remove()
  document.head.appendChild(style)
  registerStudyViews(api, { t })
  return () => { offCatalogs(); style.remove() }
}
const plugin: ValleyPluginModule = { register }
export default plugin
