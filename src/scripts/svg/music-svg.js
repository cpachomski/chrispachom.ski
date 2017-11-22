import $ from 'jquery'

class Music {
  constructor(el) {
    this.svgContainer = $(el).find('#music-svg')
    this.speakerPaths = $(el).find('#speaker path')
    this.ampPath = $(el).find('#amplifier')
    this.ampLight = $(el).find('#amp-light')

    this.ampLight.css({
      fill: '#ff0000'
    })

    setInterval(() => {
      this.simulateSpeakerVibration()
    }, 50)

    setInterval(() => {
      this.simulateAmplifierShaking()
    }, 100)
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

  handleMouseEnter(ev) {}

  handleMouseLeave(ev) {
    this.ampLight.css({
      fill: '#000000'
    })
    window.clearInterval(this.ampInterval)
    window.clearInterval(this.speakerInterval)
  }
}

module.exports = Music
