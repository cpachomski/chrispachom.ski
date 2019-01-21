import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'

const H2 = styled.h2`
  margin-top: 0px;
  font-size: 40px;
  text-align: right;
  font-family: montserrat;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0px;
  letter-spacing: 2px;
`

const SectionHeading = ({ children, delay }) => (
  <Spring
    from={{ opacity: 0, transform: 'translate3d(0, 10px, 0)' }}
    to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
    config={{ ...config.gentle, delay }}
  >
    {springStyles => <H2 style={springStyles}>{children}</H2>}
  </Spring>
)

SectionHeading.propTypes = {
  children: PropTypes.string,
  delay: PropTypes.number,
}

export default SectionHeading
