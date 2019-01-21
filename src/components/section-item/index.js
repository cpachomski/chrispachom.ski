import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.div`
  display: flex;
`

const Item = styled.div``

const SectionItem = ({ style, title, subtitle, duration, bullets }) => {
  return (
    <Item style={style}>
      <Heading>
        {title && <h3>{title}</h3>}
        {subtitle && <h3>{subtitle}</h3>}
      </Heading>
      {duration && <h3>{duration}</h3>}
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
