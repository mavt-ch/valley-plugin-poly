// esbuild loads `.css` as text (build.mjs and the plugin build), so the stylesheet arrives as a string.
declare module 'maplibre-gl/dist/maplibre-gl.css' {
  const css: string
  export default css
}
