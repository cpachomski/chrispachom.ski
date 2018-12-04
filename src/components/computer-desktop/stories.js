import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import ComputerDesktop from './'

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: '300px',
      margin: '200px auto',
    }}
  >
    {children}
  </div>
)

storiesOf('ComputerDesktop', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <ComputerDesktop />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <ComputerDesktop isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
