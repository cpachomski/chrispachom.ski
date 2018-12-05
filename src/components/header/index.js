import React from 'react'
import VerticalText from '../vertical-text'
import { Column, Row } from './styled'
import IconMenu from '../icon-menu'

const Header = () => (
  <Column>
    <Row>
      <VerticalText text="Chris" />
      <VerticalText text="Pachomski" />
    </Row>
    <IconMenu />
  </Column>
)

export default Header
