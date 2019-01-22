import styled from 'styled-components'

export const Scene = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  overflow: hidden;

  @media (max-width: 640px) {
    display: none;
  }
`
