import styled from 'styled-components'

export const Svg = styled.svg`
  text {
    visibility: hidden;
    transform: scale(0);
  }

  path {
    fill: black;
  }

  .key {
    fill: white;
  }

  .board {
    fill: black;
  }
`

export const HiddenText = styled.span`
  text {
    visibility: hidden;
    transform: scale(0);
  }
`
