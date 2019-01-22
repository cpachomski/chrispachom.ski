import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'
import { Character } from './styled'

const VerticalText = ({ text = 'Words' }) => (
  <div>
    {text.split('').map(character => (
      <Character key={uuid()}>{character}</Character>
    ))}
  </div>
)

VerticalText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
}

export default VerticalText
