import { describe, expect, it } from 'vitest'
import { commandAsControl } from '../src/campus/mapGestures'

const press = (init: MouseEventInit, type = 'mousedown') => new MouseEvent(type, { bubbles: true, clientX: 40, clientY: 70, buttons: 1, ...init })

describe('2D map gestures', () => {
  it('hands a Command press on as a Control press at the same spot', () => {
    const handed = commandAsControl(press({ button: 0, metaKey: true, shiftKey: true }))
    expect(handed).toMatchObject({ type: 'mousedown', button: 0, buttons: 1, ctrlKey: true, metaKey: false, shiftKey: true, clientX: 40, clientY: 70, bubbles: true })
  })

  it.each([
    ['a plain press', { button: 0 }],
    ['a Control press', { button: 0, ctrlKey: true }],
    ['a Command press with the right button', { button: 2, metaKey: true }],
  ])('leaves %s to MapLibre', (_, init) => {
    expect(commandAsControl(press(init))).toBeNull()
  })

  it('ignores anything but the press', () => {
    expect(commandAsControl(press({ button: 0, metaKey: true }, 'mousemove'))).toBeNull()
  })
})
