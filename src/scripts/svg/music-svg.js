import jQuery from 'jquery';

class Music {
  constructor(el) {
    this.svgContainer = jQuery(el).find('#music-svg');
    this.speakerPaths = jQuery(el).find('#speaker path');
    this.ampPath = jQuery(el).find('#amplifier');
    this.ampLight = jQuery(el).find("#amp-light");


    jQuery(el).mouseenter(() => {
      this.handleMouseEnter();
    });

    jQuery(el).mouseleave(() => {
      this.handleMouseLeave();
    })
  }

  simulateSpeakerVibration() {
    let scaleFactor = 1.0 + (Math.random() * .05);
    this.speakerPaths.each((i, speaker) => {
      jQuery(speaker).css({
        'transform': 'scale(' + scaleFactor + ')'
      }, 50);
    });

  }

  simulateAmplifierShaking() {
    this.ampPath.css({
      'transform': 'rotate(-1deg)'
    })
    window.setTimeout(() => {
      this.ampPath.css({
        'transform': 'rotate(1deg)'
      });
    }, 10)
  }

  handleMouseEnter(ev) {
    this.ampLight.css({
      fill: "#ff0000"
    });

    this.speakerInterval = window.setInterval(() => {
      this.simulateSpeakerVibration();
    }, 50);

    this.ampInterval = window.setInterval(() => {
      this.simulateAmplifierShaking();
    }, 100)

  }

  handleMouseLeave(ev) {
    this.ampLight.css({
      fill: "#000000"
    });
    window.clearInterval(this.ampInterval);
    window.clearInterval(this.speakerInterval);
  };

}

module.exports = Music;
