import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Header from '../components/header'
import Amplifier from '../components/amplifier'
import ComputerDesktop from '../components/computer-desktop'
import MeAtWork from '../components/me-at-work'

const PageLayout = styled.div`
  display: flex;
  overflow: hidden;
`

const PageContent = styled.div`
  width: calc(100vw - 75px);
  height: 100vh;
  padding: 0 15px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const IndexPage = () => (
  <PageLayout>
    <Header siteTitle="Chris Pachomski" />
    <PageContent>
      <Amplifier />
      <ComputerDesktop />
      <MeAtWork />
      <Link to="/page-2/">Go to page 2</Link>
    </PageContent>
  </PageLayout>
)

export default IndexPage
