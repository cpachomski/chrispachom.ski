import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Amplifier from './'

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

storiesOf('Amplifier', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <Amplifier />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <Amplifier isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
