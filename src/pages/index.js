import './fonts.css'
import React from 'react'
import styled from 'styled-components'
import SinkingPlatform from '../components/sinking-platform'
import Header from '../components/header'

const Page = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => {
  return (
    <Page>
      <SinkingPlatform isSunken={false}>
        <Header />
      </SinkingPlatform>
    </Page>
  )
}

export default IndexPage
