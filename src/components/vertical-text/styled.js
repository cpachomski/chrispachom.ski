import styled from 'styled-components'

export const Character = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;
  font-family: Montserrat;
  text-transform: uppercase;

  @media (max-width: 999px) {
    font-size: 25px;
  }

  @media (max-width: 641px) {
    font-size: 20px;
  }
`
