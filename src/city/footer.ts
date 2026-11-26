import { WORKSPACE_DETAILS_V1, type ValleyPluginApi, type WorkspaceDetailValue, type WorkspaceDetailsProvider } from '@valley/plugin-sdk'
import { uiText } from './localization'
import { getState, subscribe, type CityState } from './store'
import { formatDate, formatMetres, formatNumber } from './format'

export const FOOTER_ITEMS = ['building', 'tiles', 'buildings', 'date'] as const
export const FOOTER_DEFAULTS = ['building', 'tiles']

export function footerItems(state: CityState): Record<string, WorkspaceDetailValue> {
  const index = state.index
  const items: Record<string, WorkspaceDetailValue> = {}
  const selected = state.selected
  items.building = selected
    ? { text: `${uiText('footer.building')} · ${selected.egid ?? '—'} · ${formatMetres(selected.height)}` }
    : { available: false }
  items.tiles = index ? { text: `${uiText('footer.tiles')} · ${formatNumber(state.loadedTiles)} / ${formatNumber(index.stats.tiles)}` } : { available: false }
  items.buildings = index ? { text: `${uiText('footer.buildings')} · ${formatNumber(index.stats.buildings)}` } : { available: false }
  items.date = index ? { text: `${uiText('footer.date')} · ${formatDate(index.source.date)}` } : { available: false }
  return items
}

export function registerFooter(api: ValleyPluginApi): () => void {
  let revision = 0
  const provider: WorkspaceDetailsProvider = {
    id: 'poly.city.details',
    label: 'Campus map',
    labelKey: 'campusMap.title',
    pluginViews: true,
    items: FOOTER_ITEMS.map(id => ({ id, label: uiText(`footer.${id}`), labelKey: `city.footer.${id}`, kind: 'text' as const })),
    defaultItems: [...FOOTER_DEFAULTS],
    subscribe: listener => subscribe(() => { revision++; listener() }),
    getSnapshot: () => ({ items: footerItems(getState()), revision: String(revision) }),
  }
  return api.interop.extensions.provide(WORKSPACE_DETAILS_V1, provider)
}
