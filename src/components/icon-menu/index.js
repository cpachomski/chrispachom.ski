import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import { Column } from './styled'

const IconMenu = ({ iconSize = 35 }) => (
  <Column>
    <Icon
      size={iconSize}
      company="github"
      url="https://www.github.com/cpachomski/"
    />
    <Icon
      size={iconSize}
      company="linkedin"
      url="https://www.linkedin.com/in/chrispachomski/"
    />
  </Column>
)

IconMenu.propTypes = {
  iconSize: PropTypes.number,
}

export default IconMenu
