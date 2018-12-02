import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import CoffeePot from './'

const Container = ({ children }) => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>{children}</div>
)

storiesOf('CoffePot', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <CoffeePot />
    </Container>
  ))
