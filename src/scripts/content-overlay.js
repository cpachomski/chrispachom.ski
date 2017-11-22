import $ from 'jquery'

const init = () => {
  console.log('init these bad boiz....')

  $('.link-box').each((i, link) => {
    $(link).on('click', e => {
      const type = $(link).data('type')

      $('#home').removeClass('active')
      setTimeout(() => {
        $(`.${type}`).addClass('active')
      }, 400)
    })
  })

  $('.close-button').each((i, button) => {
    $(button).on('click', e => {
      $(e.target)
        .parent()
        .removeClass('active')
      setTimeout(() => {
        $('#home').addClass('active')
      }, 400)
    })
  })
}

init()
