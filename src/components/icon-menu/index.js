import React from 'react'
import Icon from '../icon'
import { Column } from './styled'

const IconMenu = () => (
  <Column>
    <Icon size={30} company="github" url="https://www.github.com/cpachomski/" />
    <Icon
      size={30}
      company="linkedin"
      url="https://www.linkedin.com/in/chrispachomski/"
    />
  </Column>
)

export default IconMenu
