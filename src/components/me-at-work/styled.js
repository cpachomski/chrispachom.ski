import styled from 'styled-components'

export const Scene = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  overflow: hidden;
  background-color: red;

  > *:first-child {
    height: 62%;
    position: absolute;
    left: 50%;
    top: 15%;
  }

  > *:nth-child(2) {
    position: absolute;
    left: 45%;
    width: 40%;
  }

  > *:nth-child(3) {
    position: absolute;
    left: 4%;
    bottom: 20px;
    width: 60%;
    transform: rotate(-45deg);
  }
`
