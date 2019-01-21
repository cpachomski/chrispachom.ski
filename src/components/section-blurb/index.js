import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'

const P = styled.p`
  font-family: monospace;
  font-size: 18px;
  text-align: justify;
`

const SectionBlurb = ({ children, delay }) => {
  return (
    <Spring
      from={{ opacity: 0, transform: 'translate3d(0, 10px, 0)' }}
      to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      config={{ ...config.gentle, delay }}
    >
      {springStyles => <P style={springStyles}>{children}</P>}
    </Spring>
  )
}

SectionBlurb.propTypes = {
  children: PropTypes.string,
  delay: PropTypes.number,
}

export default SectionBlurb
