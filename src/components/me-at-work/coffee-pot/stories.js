import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import CoffeePot from './'

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

storiesOf('CoffePot', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <CoffeePot />
    </Container>
  ))
