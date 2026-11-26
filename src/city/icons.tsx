import type { ReactNode } from 'react'
import { React } from './runtime'

const svg = (children: ReactNode) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>

export const PinIcon = () => svg(<><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>)
export const HomeIcon = () => svg(<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></>)
export const CloseIcon = () => svg(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>)
export const CityIcon = () => <svg viewBox="0 0 256 256" fill="currentColor" fillRule="evenodd" aria-hidden="true"><path d="M24,216H232v16H24Z" /><path d="M40,112l56-24V208H40ZM56,128v16H80V128Zm0,32v16H80V160Z" /><path d="M104,48l64-24V208H104Zm16,24v16h32V72Zm0,32v16h32V104Zm0,32v16h32V136Zm0,32v16h32V168Z" /><path d="M176,120h48v88H176Zm12,16v16h24V136Zm0,32v16h24V168Z" /></svg>
