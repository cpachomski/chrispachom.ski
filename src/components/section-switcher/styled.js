import styled from 'styled-components'

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

  @media (pointer: fine) {
    &:hover {
      cursor: pointer;
    }
  }

  &:active {
    color: #aaa;
  }

  @media (max-width: 640px) {
    padding-right: 0px;
  }
`
