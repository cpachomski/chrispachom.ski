import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'
import styled from 'styled-components'

import IconLink from './icon-link'
import VerticalText from './vertical-text'

const HeaderContainer = styled.div`
  height: calc(100vh - 28px);
  min-height: 500px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid #333;
  padding: 10px 15px;
  width: 75px;
  background-color: white;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat';

  > * {
    margin-right: 0.7rem;

    &:last-child {
      margin-right: 0px;
    }
  }
`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 1rem;
  }
`

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    const columns = siteTitle.split(' ')

    return (
      <HeaderContainer>
        <Title>
          {columns.map(colText => <VerticalText key={uuid()} text={colText} />)}
        </Title>
        <Icons>
          {['email', 'linkedin', 'github'].map(property => (
            <IconLink key={uuid()} property={property} />
          ))}
        </Icons>
      </HeaderContainer>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
