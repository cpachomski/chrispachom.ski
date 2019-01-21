import styled, { keyframes, css } from 'styled-components'

const moveEyeAnimation = keyframes`
  0% {
    transform: translate(1px, 2px) scale(1);
  }

  5% {
    transform: translate(-3px, -2px) scale(1);;
  }

  15% {
    transform: translate(-3px, -2px) scale(1);;
  }

  20% {
    transform: translate(-1px, 1px) scale(1);;
  }

  30% {
    transform: translate(-46px, -22px) scale(1.7);
  }

  35% {
    transform: translate(-48px, -22px) scale(1.7);
  }

  38% {
    transform: translate(-49px, -24px) scale(1.7);
  }

  41% {
    transform: translate(-50px, -22px) scale(1.7);
  }

  44% {
    transform: translate(-45px, -24px) scale(1.7);
  }

  47% {
    transform: translate(-43px, -22px) scale(1.7);
  }

  50% {
    transform: translate(-45px, -20px) scale(1.7);
  }

  52% {
    transform: translate(-43px, -21px) scale(1.7);
  }

  55% {
    transform: translate(-45px, -24px) scale(1.7);
  }

  60% {
    transform: translate(-43px, -20px) scale(1.7);
  }

  90% {
    transform: translate(1px, 2px) scale(1);
  }

  100% {
    transform: translate(1px, 2px) scale(1);
  }
`

export const Svg = styled.svg`
  path {
    fill: black;
  }

  #eyeball {
    transition: transform 0.3s ease-in;
    animation: ${props =>
      props.isAnimating
        ? css`
            ${moveEyeAnimation} 10s ease-in infinite;
          `
        : ''};
  }
`
export const HiddenText = styled.span`
  visibility: hidden;
  transform: scale(0);
`
