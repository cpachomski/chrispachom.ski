import React from 'react'
import { Transition, config } from 'react-spring'
import sections from './sections'
import { Content } from './styled'

const Sections = ({ section, delay }) => {
  return (
    <Transition
      style={{ height: '100%', width: '100%' }}
      items={sections[section] || null}
      keys={item => (item ? item.sectionName : 'nil')}
      from={{ transform: 'scale(0)' }}
      enter={[{ transform: 'scale(1)' }]}
      leave={[{ transform: 'scaleX(0)' }]}
      config={{ ...config.fast, precision: 0.01 }}
      trail={delay}
    >
      {item => props => {
        return item && <Content style={props}>{JSON.stringify(item)}</Content>
      }}
    </Transition>
  )
}

export default Sections
