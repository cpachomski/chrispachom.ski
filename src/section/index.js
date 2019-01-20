import React from 'react'
import sections from './sections'
import { Content } from './styled'

const Section = ({ section }) => {
  return <Content>{JSON.stringify(sections[section])}</Content>
}

export default Section
