const fromBase64 = (Uint8Array as unknown as { fromBase64?: (value: string) => Uint8Array }).fromBase64

/** The bytes of a base64 text: the engine's own decoder where it has one, else one pass over `atob`. */
export function bytesFromBase64(text: string): Uint8Array<ArrayBuffer> {
  if (fromBase64) return fromBase64(text) as Uint8Array<ArrayBuffer>
  const binary = atob(text)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

const utf8 = new TextDecoder()

/** UTF-8 text from a base64 body. */
export const textFromBase64 = (text: string): string => utf8.decode(bytesFromBase64(text))
