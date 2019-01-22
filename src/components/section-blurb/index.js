import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'

const P = styled.p`
  font-family: monospace;
  font-size: 18px;
  margin-bottom: 45px;

  @media (max-width: 1199px) {
    font-size: 16px;
    margin-bottom: 35px;
  }

  @media (max-width: 999px) {
    font-size: 14px;
    margin-bottom: 25px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
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
