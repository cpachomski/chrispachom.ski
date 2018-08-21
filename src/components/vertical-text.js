import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'
import styled from 'styled-components'

const Character = styled.div`
  font-size: 1.6rem;
  text-transform: uppercase;
`

const VerticalText = ({ text }) => (
  <div>
    {text
      .split('')
      .map(character => <Character key={uuid()}>{character}</Character>)}
  </div>
)

VerticalText.propTypes = {
  text: PropTypes.string,
}

export default VerticalText
