import './fonts.css'

import React, { Component } from 'react'
import styled from 'styled-components'
import SinkingPlatform from '../components/sinking-platform'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'

const Page = styled.div`
  display: flex;
  margin: 50px 0px;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
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
          <Button>
            <h1>Work</h1>
            <MeAtWork isAnimating={true} />
          </Button>
          <Button>
            <h1>Side Projects</h1>
            <ComputerDesktop />
          </Button>
          <Button>
            <h1>Music</h1>
            <Amplifier />
          </Button>
        </SinkingPlatform>
      </Page>
    )
  }
}

export default IndexPage
