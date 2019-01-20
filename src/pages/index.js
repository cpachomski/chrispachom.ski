import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Grid, Flex, Content } from './styled'
import Link from '../components/link'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'
import VerticalText from '../components/vertical-text'
import Section from '../section'

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
            <Section section="work" path="work" />
            <Section section="code" path="code" />
            <Section section="music" path="music" />
          </Content>
        </Layout>
      </Router>
    )
  }
}

export default IndexPage
