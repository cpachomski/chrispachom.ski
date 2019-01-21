import styled from 'styled-components'

export const Svg = styled.svg`
  ${props =>
    props.inScene
      ? ` height: 62%;
          position: absolute;
          left: 50%;
          top: 15%;`
      : ''}

  path {
    stroke-width: 5px;
    stroke: black;
    stroke-dasharray: 107;
    stroke-dashoffset: ${props => (props.isAnimating ? '0' : '107')};
    transition: stroke-dashoffset ${props => (props.isAnimating ? '1s' : '0s')}
      ease-in-out;
  }
`

export const HiddenText = styled.span`
  visibility: hidden;
  transform: scale(0);
`
