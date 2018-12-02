import React from 'react'
import PropTypes from 'prop-types'
import { Svg } from './styled'

const Speaker = ({ attributionId, attributionText, animating }) => (
  <Svg
    aria-labelledby={attributionId}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 96 120"
    enable-background="new 0 0 96 96"
    animating={animating}
  >
    <g>
      <path d="M48,96C21.533,96,0,74.467,0,48S21.533,0,48,0s48,21.533,48,48S74.467,96,48,96z M48,4   C23.738,4,4,23.738,4,48s19.738,44,44,44s44-19.738,44-44S72.262,4,48,4z" />
    </g>
    <g>
      <path d="M48,87C26.495,87,9,69.505,9,48S26.495,9,48,9s39,17.495,39,39S69.505,87,48,87z M48,13   c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S67.299,13,48,13z" />
    </g>
    <g>
      <path d="M48,59c-6.065,0-11-4.935-11-11s4.935-11,11-11s11,4.935,11,11S54.065,59,48,59z M48,41   c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S51.86,41,48,41z" />
    </g>
    <text id={attributionId}>{attributionText}</text>
  </Svg>
)

Speaker.propTypes = {
  attributionId: PropTypes.string,
  attributionText: PropTypes.string,
  animating: PropTypes.bool,
}

Speaker.defaultProps = {
  attributionId: 'speaker-attribution',
  attributionText: 'Created by Yaroslav Samoylov from the noun project.',
  animating: true,
}

export default Speaker
