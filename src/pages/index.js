import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import { Spring } from 'react-spring'
import SectionSwitcher from '../components/section-switcher'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'
import VerticalText from '../components/vertical-text'
import Sections from '../sections'
import { Content, Flex, Layout } from '../components/layout'

class IndexPage extends Component {
  state = {
    hovered: null,
    activeSection: '',
  }

  setNextSection = nextSection => {
    const { activeSection } = this.state

    if (activeSection !== nextSection) {
      this.setState({ activeSection: '' }, () => {
        setTimeout(() => this.setState({ activeSection: nextSection }))
      })
    }
  }

  render() {
    const { activeSection } = this.state

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 300 }}>
        {springStyles => {
          return (
            <Layout style={springStyles}>
              <Header />
              <Content>
                <Sections section={activeSection} />
              </Content>
              <Flex>
                <SectionSwitcher
                  onClick={() => this.setNextSection('work')}
                  isActive={activeSection === 'work'}
                >
                  {({ isHovered }) => (
                    <>
                      <MeAtWork
                        isAnimating={isHovered || activeSection === 'work'}
                      />
                      <VerticalText size={25} text="Work" />
                    </>
                  )}
                </SectionSwitcher>
                <SectionSwitcher
                  onClick={() => this.setNextSection('code')}
                  isActive={activeSection === 'code'}
                >
                  {({ isHovered }) => (
                    <>
                      <ComputerDesktop
                        isAnimating={isHovered || activeSection === 'code'}
                      />
                      <VerticalText size={25} text="Code" />
                    </>
                  )}
                </SectionSwitcher>
                <SectionSwitcher
                  onClick={() => this.setNextSection('music')}
                  isActive={activeSection === 'music'}
                >
                  {({ isHovered }) => (
                    <>
                      <Amplifier
                        isAnimating={isHovered || activeSection === 'music'}
                      />
                      <VerticalText size={25} text="Music" />
                    </>
                  )}
                </SectionSwitcher>
              </Flex>
            </Layout>
          )
        }}
      </Spring>
    )
  }
}

export default IndexPage
