import React from 'react'
import PropTypes from 'prop-types'
import { Exterior, Svg } from './styled'
import Speaker from '../speaker'

const Amplifier = ({ attributionId, attributionText, isAnimating }) => (
  <Exterior isAnimating={isAnimating}>
    <Svg
      aria-labelledby={attributionId}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <g>
        <path d="M90,26.938C90,23.659,88.028,21,85.596,21H15.404C12.972,21,11,23.659,11,26.938v56.123C11,86.341,12.972,89,15.404,89   h70.191C88.028,89,90,86.341,90,83.062V26.938z M88,33.486C88,34.041,85.983,34,83.691,34H17.148C14.858,34,13,34.041,13,33.486   v-7.649C13,25.281,14.858,23,17.148,23h66.543C85.983,23,88,24.998,88,25.554V33.486z" />
        <circle cx="21.694" cy="28.984" r="2.016" />
        <circle cx="40.922" cy="28.984" r="2.016" />
        <circle cx="47.434" cy="28.984" r="2.016" />
        <circle cx="53.985" cy="28.984" r="2.016" />
        <circle cx="60.032" cy="28.984" r="2.016" />
        <circle id="statusLight" cx="72.941" cy="28.984" r="2.016" />
        <rect x="31.947" y="27.298" width="1.977" height="3.372" />
        <rect x="65.905" y="27.298" width="1.977" height="3.372" />
        <circle cx="16.153" cy="29.161" r="0.618" />
        <circle cx="83.382" cy="29.255" r="0.618" />
        <circle cx="78.02" cy="29.255" r="0.618" />
        <circle cx="27.78" cy="28.984" r="2.016" />
        <path d="M64.892,19.271c0,0.956-0.774,1.729-1.729,1.729c0.034,0.016-2.65-4.176-12.929-4.151   C41.325,16.872,37.553,20.986,37.521,21c-0.955,0-1.729-0.774-1.729-1.729l0,0c0-0.955,0.774-1.729,1.729-1.729   c0.031-0.014,3.804-4.128,12.712-4.151c10.273-0.025,12.969,4.167,12.929,4.151C64.117,17.541,64.892,18.315,64.892,19.271   L64.892,19.271z" />
        <path d="M20.067,91.429c0,0.624-0.688,0.646-1.534,0.646l0,0c-0.847,0-1.533-0.022-1.533-0.646v-2.905   c0-0.624,0.686-0.646,1.533-0.646l0,0c0.847,0,1.534,0.021,1.534,0.646V91.429z" />
        <path d="M84.364,91.832c0,0.624-0.687,0.646-1.534,0.646l0,0c-0.846,0-1.532-0.021-1.532-0.646v-2.904   c0-0.625,0.687-0.646,1.532-0.646l0,0c0.848,0,1.534,0.021,1.534,0.646V91.832z" />
      </g>
      <text id={attributionId}>{attributionText}</text>
    </Svg>
    <Speaker isAnimating={isAnimating} />
  </Exterior>
)

Amplifier.propTypes = {
  attributionId: PropTypes.string,
  attributionText: PropTypes.string,
  isAnimating: PropTypes.bool,
}

Amplifier.defaultProps = {
  attributionId: 'amplifier-attribution',
  attributionText: 'Created by Deo Marco Beltran from the noun project.',
  isAnimating: false,
}

export default Amplifier
