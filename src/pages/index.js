import './fonts.css'

import React, { Component } from 'react'
import styled from 'styled-components'
import SinkingPlatform from '../components/sinking-platform'
import Header from '../components/header'

const Page = styled.div`
  display: flex;
  margin: 50px 0px;
  justify-content: center;
  align-items: center;
`

class IndexPage extends Component {
  state = {
    platformIsSunken: true,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ platformIsSunken: false }), 500)
  }

  render() {
    return (
      <Page>
        <SinkingPlatform isSunken={this.state.platformIsSunken}>
          <Header />
        </SinkingPlatform>
      </Page>
    )
  }
}

export default IndexPage
