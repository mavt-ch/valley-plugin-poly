import { React } from './runtime'
import { uiText } from './localization'

export function MissingModel() {
  return (
    <>
      <strong>{uiText('model.missingTitle')}</strong>
      <span>{uiText('model.missingText')}</span>
      <code>npm run update-model &amp;&amp; npm run build</code>
    </>
  )
}
