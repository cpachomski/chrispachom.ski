import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  new Promise(resolve => {
    const sheet = new ServerStyleSheet()
    const appHtml = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    )

    replaceBodyHTMLString(appHtml)
    setHeadComponents([sheet.getStyleElement()])
    resolve()
  })
}
