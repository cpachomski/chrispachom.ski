import styled from 'styled-components'

export const Scene = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > *:nth-child(2) {
    position: relative;
    top: -10px;
    width: 60%;
  }
`
