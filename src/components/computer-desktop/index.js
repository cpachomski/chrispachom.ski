import React from 'react'
import styled from 'styled-components'
import { Scene } from './styled'
import Keyboard from '../keyboard'
import Monitor from '../monitor'

const ComputerDestkop = ({ isAnimating }) => {
  return (
    <Scene>
      <Monitor isAnimating={isAnimating} />
      <Keyboard isAnimating={isAnimating} />
    </Scene>
  )
}

export default ComputerDestkop
