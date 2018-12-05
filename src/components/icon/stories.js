import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import Icon from './'

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

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('with defaultProps', () => (
    <Container>
      <Icon />
    </Container>
  ))
  .add('with knobs', () => (
    <Container>
      <Icon
        size={number('size (px)', 50)}
        company={select(
          'company',
          { linkedin: 'linkedin', github: 'github' },
          'linkedin'
        )}
        url={text('url', 'https://github.com')}
      />
    </Container>
  ))
