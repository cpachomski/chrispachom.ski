import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import SinkingPlatform from './'
import Amplifier from '../amplifier'

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: '500px',
      minHeight: '500px',
      margin: '50px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)

storiesOf('SinkingPlatform', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <SinkingPlatform />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <SinkingPlatform isSunken={boolean('isSunken', false)} />
    </Container>
  ))
