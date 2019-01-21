import React from 'react'
import PropTypes from 'prop-types'
import { Svg, HiddenText } from './styled'

const CoffeeDrip = ({
  attributionId,
  attributionText,
  isAnimating,
  inScene,
}) => (
  <Svg
    aria-labelledby={attributionId}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    isAnimating={isAnimating}
    inScene={inScene}
  >
    <path d="M 0 0 L 0 125" />
    <HiddenText id={attributionId}>{attributionText}</HiddenText>
  </Svg>
)

CoffeeDrip.propTypes = {
  attributionId: PropTypes.string,
  attributionText: PropTypes.string,
  isAnimating: PropTypes.bool,
}

CoffeeDrip.defaultProps = {
  attributionId: 'coffee-drip-attribution',
  attributionText: 'Coffee Drip',
  isAnimating: false,
}

export default CoffeeDrip
