import React from 'react'
import styled from 'styled-components'

import Keyboard from './keyboard'
import Monitor from './monitor'

const Wrapper = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > *:nth-child(2) {
    position: relative;
    top: -10px;
    width: 60%;
  }
`

const ComputerDestkop = ({ animate }) => {
  return (
    <Wrapper>
      <Monitor animate={animate} />
      <Keyboard amimate={animate} />
    </Wrapper>
  )
}

export default ComputerDestkop
