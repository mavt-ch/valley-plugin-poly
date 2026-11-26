/**
 * Command-drag turns the 2D map like the 3D view (26 Nov, on request). MapLibre rotates on Control-drag (and a
 * right-button drag), so a Command press with the left button is handed on as the same press with Control instead;
 * MapLibre then rotates, snaps back to north within 7°, and does not count the drag as a click. Null for any other press.
 */
export function commandAsControl(event: MouseEvent): MouseEvent | null {
  if (event.type !== 'mousedown' || event.button !== 0 || !event.metaKey || event.ctrlKey) return null
  const Event = (event.view as (Window & typeof globalThis) | null)?.MouseEvent ?? MouseEvent
  return new Event('mousedown', {
    bubbles: true, cancelable: true, composed: true, view: event.view, detail: event.detail,
    screenX: event.screenX, screenY: event.screenY, clientX: event.clientX, clientY: event.clientY,
    button: 0, buttons: event.buttons, ctrlKey: true, metaKey: false, shiftKey: event.shiftKey, altKey: event.altKey,
  })
}
