import React, { Component } from 'react'
import { A, Button } from './styled'

class Link extends Component {
  state = {
    isHovered: false,
  }

  render() {
    const { to } = this.props

    return (
      <A
        to={to}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Button>{this.props.children(this.state)}</Button>
      </A>
    )
  }
}

export default Link
