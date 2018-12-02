import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Amplifier from './'

const Container = ({ children }) => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>{children}</div>
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
      <Amplifier isAnimating={boolean('isAnimating', true)} />
    </Container>
  ))