import styled from 'styled-components'

export const Exterior = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 15px;
  border: 4px solid #000;
  display: grid;
  grid-template-columns: 100px 25px repeat(5, 1fr) 25px;
  grid-template-rows: repeat(3, 1fr);

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    grid-column: 4 / 7;
    grid-row: 1;
  }

  > *:nth-child(3) {
    grid-column: 4 / 7;
    grid-row: 2 / 3;
  }

  > *:nth-child(4) {
    grid-column: 4 / 7;
    grid-row: 3 / 4;
  }

  box-shadow: ${props =>
    props.isSunken
      ? ''
      : `1px 1px #000, 2px 2px #000, 3px 3px #000, 4px 4px #000,
    5px 5px #000, 6px 6px #000, 7px 7px #000, 8px 8px #000, 9px 9px #000,
    10px 10px #000, 11px 11px #000, 12px 12px #000, 13px 13px #000,
    14px 14px #000`};

  transform: ${props =>
    props.isSunken
      ? 'translate3d(14px, 14px, 0px)'
      : 'translate3d(0px, 0px, 0px)'};

  transition: all 0.5s cubic-bezier(0.7, 0, 0, 0.7);
`
