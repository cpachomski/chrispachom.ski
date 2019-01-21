import styled, { keyframes, css } from 'styled-components'

const dripAnimation = keyframes`
  0% {
    stroke-dashoffset: 106;
  }
  100% {
    stroke-dashoffset: -106;
  }
`

export const Svg = styled.svg`
  path {
    stroke-width: 5px;
    stroke: black;
    stroke-dasharray: 107;
    stroke-dashoffset: 107;
    animation: ${props =>
      props.isAnimating
        ? css`
            ${dripAnimation} 2s ease-in-out infinite;
          `
        : ''};
  }
`

export const HiddenText = styled.span`
  visibility: hidden;
  transform: scale(0);
`
