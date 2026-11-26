import type { ValleyPluginApi } from '@valley/plugin-sdk'

export let React!: typeof import('react')
export let api!: ValleyPluginApi

export function initRuntime(value: ValleyPluginApi): void {
  api = value
  React = value.React
}
