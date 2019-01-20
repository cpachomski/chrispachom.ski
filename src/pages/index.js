import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'
import Link from '../components/link'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'
import VerticalText from '../components/vertical-text'
import Section from '../section'

const Content = styled.div`
  height: 100%;
  width: 100%;

  > div {
    height: 100%;
    width: 100%;
  }
`

const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const Grid = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 100px 1fr 250px;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 25px;
  align-items: center;
  justify-items: center;

  > * {
    height: 100%;
    width: 100%;
  }

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1;
  }

  > *:nth-child(3) {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: start;
  }
`

const Layout = ({ children }) => (
  <Grid>
    <Header />
    {children}
    <Flex>
      <Link to="/work">
        {({ isHovered }) => [
          <MeAtWork isAnimating={isHovered} />,
          <VerticalText size={25} text="Work" />,
        ]}
      </Link>
      <Link to="/code">
        {({ isHovered }) => [
          <ComputerDesktop isAnimating={isHovered} />,
          <VerticalText size={25} text="Code" />,
        ]}
      </Link>
      <Link to="/music">
        {({ isHovered }) => [
          <Amplifier isAnimating={isHovered} />,
          <VerticalText size={25} text="Music" />,
        ]}
      </Link>
    </Flex>
  </Grid>
)

class IndexPage extends Component {
  static routes = [
    {
      key: 'code',
      path: '/code',
      component: () => <Content />,
    },
  ]

  state = {
    platformIsSunken: true,
    hovered: null,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ platformIsSunken: false }), 500)
  }

  render() {
    return (
      <Router>
        <Layout path="/">
          <Content path="/">
            <Section section="work" exact path="work" />
            <Section section="code" exact path="code" />
            <Section section="music" exact path="music" />
          </Content>
        </Layout>
      </Router>
    )
  }
}

export default IndexPage
