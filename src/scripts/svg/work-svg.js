import $ from 'jquery'

class Work {
  constructor(el) {
    this.jQueryeyeball = $('#eyeball')
    this.jQuerycoffeeDrip = $('#coffee-drip > path')

    this.jQueryeyeball.addClass('moving')
    this.jQuerycoffeeDrip.addClass('dripping')
  }
}

module.exports = Work
