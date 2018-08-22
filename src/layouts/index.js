import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>chrispachom.ski</title>
      <meta name="description" content="Portfolio site for Chris Pachomski" />
      <meta
        name="keywords"
        content="Front End Developer, Development, React, Node, Javascript, New York, NYC, Greenpoint, Brooklyn"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Share+Tech+Mono"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>

    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
