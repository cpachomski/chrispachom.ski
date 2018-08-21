import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManger } from 'styled-components'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const styleSheet = new ServerStyleSheet()

  const App = (
    <StyleSheetManger shee={styleSheet.instance}>
      {bodyComponent}
    </StyleSheetManger>
  )

  replaceBodyHTMLString(renderToString(App))
  setHeadComponents([styleSheet.getStyleElement()])
}
