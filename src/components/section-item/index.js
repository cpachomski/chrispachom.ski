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
  Links,
  Link,
} from './styled'

const SectionItem = ({ style, title, subtitle, duration, bullets, links }) => {
  return (
    <Item style={style}>
      <Heading>{title && <Title>{title}</Title>}</Heading>
      <SubTitle>{subtitle}</SubTitle>
      <Duration>{duration}</Duration>
      {bullets && (
        <Bullets>
          {bullets.map(b => (
            <Bullet key={`${title}${-subtitle}-${b.slice(1, 30)}`}>{b}</Bullet>
          ))}
        </Bullets>
      )}
      {links && (
        <Links>
          {links.map(({ title, url }) => (
            <Link key={url} href={url}>
              {title}
            </Link>
          ))}
        </Links>
      )}
    </Item>
  )
}

SectionItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  duration: PropTypes.string,
  bullets: PropTypes.array,
  links: PropTypes.array,
}

export default SectionItem
