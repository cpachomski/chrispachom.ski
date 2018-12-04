import React from 'react'
import PropTypes from 'prop-types'
import { HiddenText } from './styled'

class Monitor extends React.Component {
  static propTypes = {
    attributionId: PropTypes.string,
    attributionText: PropTypes.string,
    isAnimating: PropTypes.boolean,
  }

  static defaultProps = {
    attributionId: 'speaker-attribution',
    attributionText: 'Created by Bakunetsu Kaito from the noun project.',
    isAnimating: false,
  }

  render() {
    const { attributionId, attributionText } = this.props

    return (
      <svg
        aria-labelledby={attributionId}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
      >
        <path d="M75.411,84.922c1.39,0,2.521,1.131,2.521,2.521s-1.131,2.521-2.521,2.521h-50.82c-1.39,0-2.521-1.131-2.521-2.521  s1.131-2.521,2.521-2.521h18.118h14.584H75.411z" />
        <rect x="44.216" y="71.846" width="11.57" height="11.57" />
        <g>
          <polygon points="9.229,64.727 90.773,64.716 90.773,15.65 9.217,15.661  " />
          <path d="M90.785,10.037H9.217c-3.096,0-5.613,2.518-5.613,5.613v49.076c0,3.095,2.518,5.613,5.613,5.613h33.492h14.584h33.492   c3.095,0,5.612-2.519,5.612-5.613V15.65C96.397,12.555,93.88,10.037,90.785,10.037z M92.279,64.727c0,0.824-0.67,1.495-1.494,1.495   H9.217c-0.825,0-1.495-0.671-1.495-1.495V15.65c0-0.825,0.67-1.495,1.495-1.495h81.568c0.824,0,1.494,0.67,1.494,1.495V64.727z" />
        </g>
        <HiddenText id={attributionId}>{attributionText}</HiddenText>
      </svg>
    )
  }
}

export default Monitor
