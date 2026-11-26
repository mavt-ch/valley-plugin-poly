import { api } from './runtime'

export function formatNumber(value: number, digits = 0): string {
  return new Intl.NumberFormat(api.ui.language(), { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value)
}

export function formatMetres(value: number, digits = 1): string {
  return `${formatNumber(value, digits)} m`
}

export function formatDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00Z`)
  return Number.isNaN(date.getTime()) ? iso : new Intl.DateTimeFormat(api.ui.language(), { dateStyle: 'long' }).format(date)
}
