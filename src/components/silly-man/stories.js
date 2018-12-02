import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import SillyMan from './'

const Container = ({ children }) => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>{children}</div>
)

storiesOf('SillyMan', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <SillyMan />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <SillyMan isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
