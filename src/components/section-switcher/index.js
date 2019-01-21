import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './styled'

class SectionSwitcher extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
  }

  state = {
    isHovered: false,
  }

  render() {
    const { isActive } = this.props

    return (
      <Button
        isActive={isActive}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        {this.props.children(this.state)}
      </Button>
    )
  }
}

export default SectionSwitcher
