import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const icons = {
  github: {
    className: 'fa fa-github',
    url: 'https://github.com/cpachomski',
  },
  email: {
    className: 'fa fa-at',
    url: 'mailto:cpachomski@gmail.com',
  },
  linkedin: {
    className: 'fa fa-linkedin-square',
    url: 'https://www.linkedin.com/in/chrispachomski',
  },
}

const Link = styled.a`
  font-size: 30px !important;
  color: #333;
  text-decoration: none;
`

const IconLink = ({ property }) => {
  return (
    <Link className={icons[property].className} href={icons[property].url} />
  )
}

IconLink.propTypes = {
  property: PropTypes.oneOf(Object.keys(icons)),
}

export default IconLink
