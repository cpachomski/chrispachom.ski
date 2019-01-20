import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  height: 100%;
  max-width: 100px;
  box-sizing: border-box;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Row = styled.div`
  display: flex;

  > *:first-child {
    margin-right: 20px;
  }
`
