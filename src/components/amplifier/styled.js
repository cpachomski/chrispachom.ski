import styled, { keyframes, css } from 'styled-components'

const amplifierAnimation = keyframes`
  0% {
    transform: rotate(1deg);
  50% {
    transform: rotate(-1deg);
  }
`

const speakerAnimation = keyframes`
  0% {
    transform: scale(.98) translate(-50%, -50%);
  }
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
`

export const Exterior = styled.div`
  position: relative;

  > *:first-child {
    animation: ${props =>
      props.isAnimating
        ? css`
            ${amplifierAnimation} .1s linear infinite
          `
        : ''};
  }

  > *:nth-child(2) {
    position: absolute;
    left: 50%;
    z-index: 100;
    top: 63%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    width: 50%;
    height: 50%;

    animation: ${props =>
      props.isAnimating
        ? css`
            ${speakerAnimation} .1s linear infinite
          `
        : ''};
  }

  #statusLight {
    fill: ${props => (props.isAnimating ? 'red' : '')};
  }
`

export const Svg = styled.svg`
  z-index: 1;

  > text {
    visibility: hidden;
    transform: scale(0);
  }
`
