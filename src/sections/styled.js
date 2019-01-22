import styled from 'styled-components'

export const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: black;
  width: calc(100% + 25px);
  height: 100%;
  overflow-y: scroll;
  padding: 25px 60px 25px 35px;

  @media (max-width: 641px) {
    width: calc(100% + 15px);
    padding: 20px 25px 25px 15px;
  }
`

export const Gradient = styled.div`
  position: absolute;
  z-index: 50;
  width: 100%;
  ${props => (props.position === 'top' ? 'top: 0px;' : 'bottom: 0px;')}
  left: 0px;
  height: 50px;
  background: linear-gradient(
    to ${props => (props.position === 'top' ? 'bottom' : 'top')},
    rgba(255, 255, 255, 1),
    50%,
    rgba(255, 255, 255, 0)
  );
`
