import styled from 'styled-components'

export const Svg = styled.svg`
  ${props =>
    props.inScene
      ? ` position: absolute;
          left: 45%;
          width: 40%;`
      : ''}

  path {
    fill: black;
    stroke: black;
  }
`

export const HiddenText = styled.span`
  visibility: hidden;
  transform: scale(0);
`
