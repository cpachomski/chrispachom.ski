import React from 'react'
import { storiesOf } from '@storybook/react'
import IconMenu from './'

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: '500px',
      minHeight: '500px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)

storiesOf('IconMenu', module).add('with defaultProps', () => (
  <Container>
    <IconMenu />
  </Container>
))
