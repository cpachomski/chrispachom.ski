import React from 'react'
import MediaQuery from 'react-responsive'
import VerticalText from '../vertical-text'
import { Column, Row } from './styled'
import IconMenu from '../icon-menu'

const Header = () => (
  <Column>
    <Row>
      <VerticalText text="Chris" />
      <VerticalText text="Pachomski" />
    </Row>
    <MediaQuery query="(min-width: 641px)">
      <IconMenu iconSize={50} />
    </MediaQuery>
    <MediaQuery query="(max-width: 640px)">
      <IconMenu iconSize={30} />
    </MediaQuery>
  </Column>
)

export default Header
