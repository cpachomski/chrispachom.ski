import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const dripAnimation = keyframes`
  0% {
    stroke-dashoffset: 106;
  }
  100% {
    stroke-dashoffset: -106;
  }
`

const CoffeeDripSvg = styled.svg`
  text {
    visibility: hidden;
    transform: scale(0);
  }

  path {
    stroke-width: 5px;
    stroke: black;
    stroke-dasharray: 107;
    stroke-dashoffset: 106;
    animation: ${props =>
      props.animate ? `${dripAnimation} 2s ease-in-out infinite;` : ''};
  }
`

class CoffeeDrip extends React.Component {
  static propTypes = {
    attributionId: PropTypes.string,
    attributionText: PropTypes.string,
    animate: PropTypes.bool,
  }

  static defaultProps = {
    attributionId: 'coffee-drip-attribution',
    attributionText: 'Coffee Drip',
    animate: false,
  }

  render() {
    const { attributionId, attributionText, animate } = this.props

    return (
      <CoffeeDripSvg
        aria-labelledby={attributionId}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        animate={animate}
      >
        <path d="M 0 0 L 0 125" />
        <text id={attributionId}>{attributionText}</text>
      </CoffeeDripSvg>
    )
  }
}

export default CoffeeDrip
