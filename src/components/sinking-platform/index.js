import React from 'react'
import PropTypes from 'prop-types'
import { Exterior } from './styled'

const SinkingPlatform = ({ children, isSunken }) => (
  <Exterior isSunken={isSunken}>{children}</Exterior>
)

SinkingPlatform.propTypes = {
  isSunken: PropTypes.bool,
}

SinkingPlatform.defaultProps = {
  isSunken: true,
}

export default SinkingPlatform
