import styled from 'styled-components'

export const Svg = styled.svg`
  path {
    fill: black;
  }

  .key {
    fill: white;
  }

  .board {
    fill: black;
  }

  ${props =>
    props.inScene
      ? `position: relative;
        top: -10px;
        width: 60%;`
      : ''}
`

export const HiddenText = styled.span`
  visibility: hidden;
  transform: scale(0);
`
