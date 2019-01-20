import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:first-child {
    margin-bottom: 10px;
  }
`
