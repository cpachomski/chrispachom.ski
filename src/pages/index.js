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
  width: 100%;
  height: 100%;
  max-height: 250px;
  max-width: 250px;
  padding-right: 25px;
  outline: none;
  display: flex;
  align-items: center;
  justify-self: end;
  border: 4px solid transparent;
  transition: border-color;

  > *:first-child {
    margin-right: 25px;
  }

  &:hover {
    cursor: pointer;
    border-color: black;
  }
`

export const Shell = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 100px 1fr 250px;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  align-items: center;
  justify-items: center;

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  > *:nth-child(3) {
    grid-column: 3;
    grid-row: 1 / 2;
    align-self: start;
  }

  > *:nth-child(4) {
    grid-column: 3;
    grid-row: 2 / 3;
  }

  > *:nth-child(5) {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
  }
`

const Content = styled.div`
  border: 4px solid black;
  height: 100%;
  width: 100%;
`

class IndexPage extends Component {
  state = {
    platformIsSunken: true,
    hovered: null,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ platformIsSunken: false }), 500)
  }

  render() {
    return (
      <Page>
        <Shell>
          <Header />
          <Content />
          <Button
            onMouseEnter={() => this.setState({ hovered: 'work' })}
            onMouseLeave={() => this.setState({ hovered: false })}
          >
            <MeAtWork isAnimating={this.state.hovered === 'work'} />
            <VerticalText size={25} text="Work" />
          </Button>
          <Button
            onMouseEnter={() => this.setState({ hovered: 'code' })}
            onMouseLeave={() => this.setState({ hovered: false })}
          >
            <ComputerDesktop isAnimating={this.state.hovered === 'code'} />
            <VerticalText size={25} text="Code" />
          </Button>
          <Button
            onMouseEnter={() => this.setState({ hovered: 'music' })}
            onMouseLeave={() => this.setState({ hovered: false })}
          >
            <Amplifier isAnimating={this.state.hovered === 'music'} />
            <VerticalText size={25} text="Music" />
          </Button>
        </Shell>
      </Page>
    )
  }
}

export default IndexPage
