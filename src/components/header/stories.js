import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './'

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: '700px',
      height: '768px',
      margin: '25px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)

storiesOf('Header', module).add('with defaultProps', () => (
  <Container>
    <Header style={{ height: '700px' }} />
  </Container>
))
