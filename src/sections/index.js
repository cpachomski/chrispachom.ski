import React from 'react'
import { Trail, Transition, config } from 'react-spring'
import sections from './sections'
import { Content, Gradient } from './styled'

import SectionItem from '../components/section-item'
import SectionHeading from '../components/section-heading'
import SectionBlurb from '../components/section-blurb'

const SectionItems = ({ items, delay }) => {
  return (
    <Trail
      items={items}
      keys={item => item.key}
      from={{ opacity: 0, transform: 'translate3d(0, 10px, 0)' }}
      to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      config={{ ...config.fast, delay }}
    >
      {item => trailStyles => <SectionItem style={trailStyles} {...item} />}
    </Trail>
  )
}

const Sections = ({ section, delay }) => {
  return (
    <Transition
      items={sections[section] || null}
      keys={section => (section ? section.sectionName : '')}
      from={{ opacity: 0 }}
      enter={[{ opacity: 1 }]}
      leave={[{ opacity: 0 }]}
      config={{ ...config.fast, precision: 0.01 }}
      trail={delay}
    >
      {section => ({ opacity }) => {
        return (
          section && (
            <>
              <Gradient position="top" />
              <Content style={{ opacity }}>
                <div>
                  <SectionHeading delay={500}>
                    {section.sectionName}
                  </SectionHeading>
                  <SectionBlurb delay={600}>{section.blurb}</SectionBlurb>
                  <SectionItems delay={700} items={section.items} />
                </div>
              </Content>
              <Gradient position="bottom" />
            </>
          )
        )
      }}
    </Transition>
  )
}

export default Sections
