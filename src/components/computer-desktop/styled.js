import styled from 'styled-components'

export const Scene = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 640px) {
    display: none;
  }
`
