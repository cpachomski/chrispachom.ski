import React from 'react'
import Link from 'gatsby-link'
import uuid from 'uuid/v1'

const vals = new Array(10).fill('x').map(() => (
  <div key={uuid()}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
))
const IndexPage = () => <div>{vals}</div>

export default IndexPage
