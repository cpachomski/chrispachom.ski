import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import styled from 'styled-components'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'
import VerticalText from '../components/vertical-text'

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
  height: 200px;
  width: 200px;
  display: flex;
  align-items: flex-end;

  > *:first-child {
    margin-right: 25px;
  }
`

export const Shell = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;

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
    grid-row: 1 / 2;
  }

  > *:nth-child(3) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  > *:nth-child(4) {
    grid-column: 5 / 6;
    grid-row: 3;
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
            <VerticalText size={25} text="Work" />
            <MeAtWork isAnimating={true} />
          </Button>
          <Button>
            <VerticalText size={25} text="Code" />
            <ComputerDesktop />
          </Button>
          <Button>
            <VerticalText size={25} text="Music" />
            <Amplifier />
          </Button>
        </Shell>
      </Page>
    )
  }
}

export default IndexPage
