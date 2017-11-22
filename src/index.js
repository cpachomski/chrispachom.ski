import $ from 'jquery'

//import styles
import './styles/lib/normalize.scss'
import './styles/svg/web-svg.scss'
import './styles/svg/music-svg.scss'
import './styles/svg/work-svg.scss'
import './styles/content-overlay.scss'
import './styles/home.scss'
import './styles/title.scss'
import './styles/links.scss'

//import svg scripts
import WebSvg from './scripts/svg/web-svg'
import MusicSvg from './scripts/svg/music-svg'
import Work from './scripts/svg/work-svg'
import ContentOverlay from './scripts/content-overlay'

//runner
let $webBox = $('#web-svg')
let $musicBox = $('#music-svg')
let $workBox = $('#work-svg')
let $contentOverlays = $('.content-overlay')

$(document).ready(() => {
  const web = new WebSvg($webBox)
  const music = new MusicSvg($musicBox)
  const work = new Work($workBox)
  //oo thats nice

  setTimeout(() => {
    $('body').fadeIn(500)

    if (window.innerWidth > 580) {
      setTimeout(() => {
        $('#home').addClass('active')
      }, 500)
    }
  }, 1000)

  $(window).resize(() => {
    if (window.innerWidth < 580) {
      $('#home').removeClass('active')
    } else {
      $('#home').addClass('active')
    }
  })
})

function isScrolledIntoView($el) {
  const windowTop = $(window).scrollTop() - 25
  const windowBottom = windowTop + $(window).height()

  const elTop = $el.offset().top
  const elBottom = elTop + $el.height()

  console.log($el, elBottom <= windowBottom && elTop >= windowTop)
  return elBottom <= windowBottom && elTop >= windowTop
}
