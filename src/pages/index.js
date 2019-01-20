import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import styled from 'styled-components'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
`

export const Shell = styled.div`
  max-width: 1100px;
  height: 100vh;

  display: grid;
  grid-template-columns: 100px 50px repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 50px;

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  > *:nth-child(3) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  > *:nth-child(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }
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
        <Shell>
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
        </Shell>
      </Page>
    )
  }
}

export default IndexPage
