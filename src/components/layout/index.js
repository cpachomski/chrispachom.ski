import styled from 'styled-components'

export const Content = styled.div`
  height: 100%;
  width: 100%;

  @media (max-width: 640px) {
    height: calc(100% + 18px);
  }
`

export const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding: 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 100px 100px 1fr 250px;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 25px;
  align-items: center;
  justify-items: center;

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    position: relative;
    overflow: hidden;
    grid-column: 3 / 4;
    grid-row: 1;
  }

  > *:nth-child(3) {
    grid-column: 4;
    grid-row: 1 / 3;
    align-self: start;
  }

  @media (max-width: 1199px) {
    grid-template-columns: 100px 0px 1fr 225px;
    padding: 20px 10px 20px 20px;
  }

  @media (max-width: 999px) {
    grid-column-gap: 0px;
    grid-template-columns: 75px 0px 1fr 200px;
    min-height: 500px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 65px 0px 1fr 35px;
    padding: 10px;
  }
`
