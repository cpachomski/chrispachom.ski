import $ from 'jquery'
import { isMobile } from '../util'

class Work {
  constructor(el) {
    console.log(isMobile)
    this.jQueryeyeball = $('#eyeball')
    this.jQuerycoffeeDrip = $('#coffee-drip > path')
    this.containingButton = $(el).parent()

    this.containingButton.mouseenter(() => {
      if (isMobile) return
      this.jQueryeyeball.addClass('moving')
      this.jQuerycoffeeDrip.addClass('dripping')
    })

    this.containingButton.mouseleave(() => {
      if (isMobile) return
      this.jQueryeyeball.removeClass('moving')
      this.jQuerycoffeeDrip.removeClass('dripping')
    })
  }
}

module.exports = Work
