import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import MeAtWork from './'

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

storiesOf('MeAtWork', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <MeAtWork />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <MeAtWork isAnimating={boolean('isAnimating', false)} />
    </Container>
  ))
