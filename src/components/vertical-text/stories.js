import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import VerticalText from './'

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

storiesOf('VerticalText', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <VerticalText />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <VerticalText text={text('Text', 'Words')} />
    </Container>
  ))
