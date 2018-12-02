import React from 'react'
import PropTypes from 'prop-types'
import { Svg, HiddenText } from './styled'

const SillyMan = ({ attributionId, attributionText, isAnimating }) => (
  <Svg
    isAnimating={isAnimating}
    aria-labelledby={attributionId}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    x="0px"
    y="0px"
  >
    <path
      d="M 50.231841,5 C 34.053238,5 24.034761,17.065043 23,33.198947 L 23,95 l 54.463681,0 0,-23.517296 c -8.041143,-0.05921 -17.39439,-5.36129 -17.472117,-13.20727 l 4.081964,0 0,4.402423 3.714544,0 0,-4.402423 3.026116,0 0,4.402423 3.714544,0 0,-4.402423 2.934949,0 0,-25.076487 C 77.463681,17.031895 66.410443,5 50.231841,5 z m 11.089622,23.796524 c 4.052318,0 7.337372,3.285053 7.337372,7.337372 0,4.052319 -3.285054,7.337372 -7.337372,7.337372 -4.052319,0 -7.337372,-3.285053 -7.337372,-7.337372 0,-4.052319 3.285053,-7.337372 7.337372,-7.337372 z"
      color="#000"
    />
    <path
      id="eyeball"
      d="m 66.482495,34.579368 c 0,1.620927 -1.314022,2.934947 -2.934949,2.934947 -1.620926,0 -2.934948,-1.31402 -2.934948,-2.934947 0,-1.620929 1.314022,-2.934951 2.934948,-2.934951 1.620927,0 2.934949,1.314022 2.934949,2.934951 z"
      color="#000"
    />
    <HiddenText id={attributionId}>{attributionText}</HiddenText>
  </Svg>
)

SillyMan.propTypes = {
  attributionId: PropTypes.string,
  attributionText: PropTypes.string,
  isAnimating: PropTypes.bool,
}

SillyMan.defaultProps = {
  attributionId: 'speaker-attribution',
  attributionText: 'Created by Yaroslav Samoylov from the noun project.',
  isAnimating: false,
}

export default SillyMan
