import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Amplifier from '../components/amplifier'
import ComputerDesktop from '../components/computer-desktop'
import Header from '../components/header'
import Page from '../components/page'
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
  <Page>
    <PageLayout>
      <Header siteTitle="Chris Pachomski" />
      <PageContent>
        <Amplifier animate />
        <ComputerDesktop />
        <MeAtWork animate />
        <Link to="/page-2/">Go to page 2</Link>
      </PageContent>
    </PageLayout>
  </Page>
)

export default IndexPage
