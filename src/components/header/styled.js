import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  height: 100%;
  max-width: 100px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const Row = styled.div`
  display: flex;

  > *:first-child {
    margin-right: 20px;
  }
`
