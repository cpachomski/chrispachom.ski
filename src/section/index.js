import React from 'react'
import { Transition, config } from 'react-spring'
import sections from './sections'
import { Content } from './styled'

const Section = ({ section }) => (
  <Transition
    style={{ height: '100%', width: '100%' }}
    items={sections[section]}
    keys={item => item.sectionName}
    from={{ transform: 'scaleX(0) scaleY(0)' }}
    enter={[{ transform: 'scaleX(1) scaleY(1)' }]}
    leave={[{ transform: 'scaleX(0) scaleY(0)' }]}
    config={{ ...config.fast, precision: 0.01 }}
  >
    {item => props => {
      return <Content style={props}>{JSON.stringify(item)}</Content>
    }}
  </Transition>
)

export default Section
