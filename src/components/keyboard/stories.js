import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Keyboard from './'

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

storiesOf('Keyboard', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <Keyboard />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <Keyboard isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
