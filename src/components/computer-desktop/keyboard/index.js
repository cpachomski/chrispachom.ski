import React from 'react'
import PropTypes from 'prop-types'
import { Svg, HiddenText } from './styled'

class Keyboard extends React.Component {
  static propTypes = {
    attributionId: PropTypes.string,
    attributionText: PropTypes.string,
    isAnimating: PropTypes.bool,
  }

  static defaultProps = {
    attributionId: 'speaker-attribution',
    attributionText: 'Created by Bakunetsu Kaito from the noun project.',
    isAnimating: false,
  }

  constructor() {
    super()
    this.svg = React.createRef()
    this.typingInterval = null
  }

  componentDidUpdate() {
    this.props.isAnimating ? this.startTyping() : this.stopTyping()
  }

  simulateTyping = () => {
    const keys = this.svg.current.querySelectorAll('g g path.key')
    const pressedKey = keys[Math.floor(Math.random() * keys.length)]

    pressedKey.style.transform = 'translateY(1px)'
    setTimeout(() => {
      pressedKey.style.transform = 'translateY(-0px)'
    }, 50)
  }

  startTyping = () => {
    this.typingInterval = setInterval(this.simulateTyping, 50)
  }

  stopTyping = () => clearInterval(this.typingInterval)

  render() {
    const { attributionId, attributionText } = this.props

    return (
      <Svg
        aria-labelledby={attributionId}
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 114 54.7"
        ref={this.svg}
      >
        <g>
          <g>
            <path
              className="board"
              fill="none"
              stroke="#20221D"
              id="keyboard-outline"
              d="M4.1,0.9c0,0-3.2,0-3.2,3.2v46.4
                            c0,0,0,3.2,3.2,3.2h105.7c0,0,3.2,0,3.2-3.2V4.1c0,0,0-3.2-3.2-3.2C109.9,0.9,4.1,0.9,4.1,0.9z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M28,39.5c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h57.7c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6C85.7,39.5,28,39.5,28,39.5z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M90.5,39.5c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h14.8c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6C105.3,39.5,90.5,39.5,90.5,39.5z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M8.6,39.5c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h14.9c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6C23.4,39.5,8.6,39.5,8.6,39.5z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M38.6,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H38.6z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M28.2,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H28.2z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M8.6,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h14.9c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H8.6z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M48.9,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H48.9z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M59.3,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H59.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M69.7,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H69.7z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M80.1,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H80.1z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M90.5,29.1c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h15c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H90.5z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M33.9,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H33.9z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M23.6,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H23.6z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M8.6,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h10.2c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H8.6z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M44.3,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H44.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M54.7,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H54.7z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M65.1,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H65.1z"
            />
          </g>
          <g>
            <path
              className={'key'}
              d="M75.5,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
            v-5.6c0,0,0-0.6-0.6-0.6H75.5z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M85.8,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H85.8z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M96.2,18.7c0,0-0.6,0-0.6,0.6V25c0,0,0,0.6,0.6,0.6h9.2c0,0,0.6,0,0.6-0.6
                            v-5.6c0,0,0-0.6-0.6-0.6H96.2z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M59.1,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C64.7,8.3,59.1,8.3,59.1,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M49,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C54.6,8.3,49,8.3,49,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M38.9,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C44.5,8.3,38.9,8.3,38.9,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M28.8,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C34.4,8.3,28.8,8.3,28.8,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M18.7,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C24.3,8.3,18.7,8.3,18.7,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M8.6,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C14.2,8.3,8.6,8.3,8.6,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M69.2,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C74.8,8.3,69.2,8.3,69.2,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M79.3,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C84.9,8.3,79.3,8.3,79.3,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M89.4,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6H95c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C95,8.3,89.4,8.3,89.4,8.3z"
            />
          </g>
          <g>
            <path
              className={'key'}
              fill="#20221D"
              d="M99.5,8.3c0,0-0.6,0-0.6,0.6v5.6c0,0,0,0.6,0.6,0.6h5.6c0,0,0.6,0,0.6-0.6V9
                            c0,0,0-0.6-0.6-0.6C105.1,8.3,99.5,8.3,99.5,8.3z"
            />
          </g>
        </g>

        <HiddenText id={attributionId}>{attributionText}</HiddenText>
      </Svg>
    )
  }
}

export default Keyboard
