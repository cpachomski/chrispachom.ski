import styled from 'styled-components'

export const Content = styled.div`
  height: 100%;
  width: 100%;

  > div {
    height: 100%;
    width: 100%;
  }
`

export const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Grid = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 100px 1fr 250px;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 25px;
  align-items: center;
  justify-items: center;

  > * {
    height: 100%;
    width: 100%;
  }

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1;
  }

  > *:nth-child(3) {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: start;
  }
`
