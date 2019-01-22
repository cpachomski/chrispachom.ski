import React from 'react'
import PropTypes from 'prop-types'
import { Scene } from './styled'
import CoffeeDrip from './coffee-drip'
import CoffeePot from './coffee-pot'
import SillySillyMan from './silly-man'

const MeAtWork = ({ isAnimating }) => (
  <div
    id="sup"
    style={{
      position: 'relative',
      paddingBottom: '100%',
      width: '100%',
      overflow: 'hidden',
    }}
  >
    <CoffeeDrip isAnimating={isAnimating} inScene />
    <CoffeePot inScene />
    <SillySillyMan isAnimating={isAnimating} inScene />
  </div>
)

MeAtWork.propTypes = {
  isAnimating: PropTypes.bool,
}

MeAtWork.defaultProps = {
  isAnimating: false,
}

export default MeAtWork
