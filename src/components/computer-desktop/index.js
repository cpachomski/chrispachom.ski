import React from 'react'
import { Scene } from './styled'
import Keyboard from './keyboard'
import Monitor from './monitor'

const ComputerDestkop = ({ isAnimating }) => {
  return (
    <Scene>
      <Monitor isAnimating={isAnimating} />
      <Keyboard isAnimating={isAnimating} />
    </Scene>
  )
}

export default ComputerDestkop
