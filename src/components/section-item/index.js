import React from 'react'
import PropTypes from 'prop-types'
import {
  Item,
  Heading,
  Title,
  SubTitle,
  Duration,
  Bullets,
  Bullet,
} from './styled'

const SectionItem = ({ style, title, subtitle, duration, bullets }) => {
  return (
    <Item style={style}>
      <Heading>{title && <Title>{title}</Title>}</Heading>
      <SubTitle>{subtitle}</SubTitle>
      <Duration>{duration}</Duration>
      <Bullets>
        {bullets && bullets.length && bullets.map(b => <Bullet>{b}</Bullet>)}
      </Bullets>
    </Item>
  )
}

SectionItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  duration: PropTypes.string,
  bullets: PropTypes.array,
}

export default SectionItem
