import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const A = styled(RouterLink)`
  width: 100%;
  text-decoration: none;
  height: 250px;
`

export const Button = styled.button`
  text-align: center;
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  max-height: 250px;
  max-width: 250px;
  padding-right: 25px;
  outline: none;
  display: flex;
  align-items: center;
  justify-self: end;
  border: 4px solid transparent;
  transition: border-color;

  > *:first-child {
    margin-right: 25px;
  }

  &:hover {
    cursor: pointer;
    border-color: black;
  }
`
