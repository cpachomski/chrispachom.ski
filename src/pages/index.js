import React from 'react'
import styled from 'styled-components'
import SinkingPlatform from '../components/sinking-platform'

const Page = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Page>
    <SinkingPlatform />
  </Page>
)

export default IndexPage
