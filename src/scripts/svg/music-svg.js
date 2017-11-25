import $ from 'jquery'
import { isMobile } from '../util'

class Music {
  constructor(el) {
    this.svgContainer = $(el).find('#music-svg')
    this.speakerPaths = $(el).find('#speaker path')
    this.containingButton = $(el).parent()
    this.ampPath = $(el).find('#amplifier')
    this.ampLight = $(el).find('#amp-light')

    this.containingButton.mouseenter(() => {
      if (isMobile) return
      this.handleMouseEnter()
    })

    this.containingButton.mouseleave(() => {
      if (isMobile) return
      this.handleMouseLeave()
    })
  }

  handleMouseEnter() {
    this.speakerInterval = window.setInterval(() => {
      this.simulateSpeakerVibration()
    }, 50)

    this.amplifierInterval = window.setInterval(() => {
      this.simulateAmplifierShaking()
    }, 100)

    this.ampLight.css({
      fill: '#ff0000'
    })
  }

  handleMouseLeave() {
    window.clearInterval(this.speakerInterval)
    window.clearInterval(this.amplifierInterval)
    this.ampLight.css({
      fill: '#333'
    })
  }

  simulateSpeakerVibration() {
    let scaleFactor = 1.0 + Math.random() * 0.05
    this.speakerPaths.each((i, speaker) => {
      $(speaker).css(
        {
          transform: 'scale(' + scaleFactor + ')'
        },
        50
      )
    })
  }

  simulateAmplifierShaking() {
    this.ampPath.css({
      transform: 'rotate(-1deg)'
    })
    window.setTimeout(() => {
      this.ampPath.css({
        transform: 'rotate(1deg)'
      })
    }, 10)
  }
}

module.exports = Music
