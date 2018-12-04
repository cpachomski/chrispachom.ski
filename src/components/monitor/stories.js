import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Monitor from './'

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

storiesOf('Monitor', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <Monitor />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <Monitor isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
