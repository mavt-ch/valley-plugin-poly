import type { ValleyPluginApi } from '@valley/plugin-sdk'
import en from '../../locales/en.json'

type Params = Parameters<ValleyPluginApi['ui']['t']>[1]

/** Zürich 3D's strings live under `city.` in Poly's catalogs, which `src/index.tsx` registers. */
function english(key: string, params?: Params): string {
  const fallback = (en as Record<string, string>)[key] ?? key
  return fallback.replace(/\{\{([^}]+)\}\}/g, (_match: string, name: string) => String(params?.[name] ?? ''))
}

let translate: (key: string, params?: Params) => string = english

export function initLocalization(api: ValleyPluginApi): void {
  translate = (key, params) => {
    const value = api.ui.t(key, params)
    return value === key ? english(key, params) : value
  }
}

export function uiText(key: string, params?: Params): string {
  return translate(`city.${key}`, params)
}

/** The campus map's strings live under `campusMap.` in the same catalogs. */
export function campusText(key: string, params?: Params): string {
  return translate(`campusMap.${key}`, params)
}
