import $ from 'jquery'

const init = () => {
  $('.link-box').each((i, link) => {
    $(link).on('click', e => {
      const type = $(link).data('type')

      $('#home').removeClass('active')
      setTimeout(() => {
        $(`#${type}-overlay`).addClass('active')
        $(`#${type}-overlay .close-button`).attr('tab-index', 1)
      }, 400)
    })
  })

  $('.close-button').on('click', () => {
    $('.content-overlay.active').removeClass('active')
    setTimeout(() => {
      $('.close-button').attr('tab-index', -1)
      $('#home').addClass('active')
    }, 400)
  })
}

init()
