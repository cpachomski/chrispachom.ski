import $ from 'jquery'
import { isMobile } from '../util'

const messages = [
  'var funForYou = function() {',
  '    while(true) { ',
  '    alert("YOLO!")',
  '    }',
  '};',
  'funForYou();'
]

class Web {
  constructor(el) {
    this.jQuerykeyboard = $('svg#keyboard')
    this.jQuerycodeBox = $('#code-box')
    this.containingButton = $(el).parent()
    this.codeText = ''
    this.currentLine = 0
    this.currentChar = 0
    this.currentMessage = 0
    this.keys = $('#keyboard path:not(#keyboard-outline)')

    this.containingButton.mouseenter(() => {
      if (isMobile) return

      this.typingInterval = window.setInterval(() => {
        this.simulateTyping()
      }, 75)
    })

    this.containingButton.mouseleave(() => {
      if (isMobile) return
      window.clearInterval(this.typingInterval)
    })
  }

  simulatingDeleting() {}

  simulateTyping() {
    if (messages.length - 1 < this.currentLine) {
      window.clearInterval(this.typingInterval)
      return
    }

    this.clickKey(this.keys)

    let line = messages[this.currentLine]
    let char = line.split('')[this.currentChar]

    if (line.length === this.currentChar) {
      this.appendNextChar('<br/>')
      this.currentLine += 1
      this.currentChar = 0

      //add indentations for some serious zazz
      if (this.currentLine === 1 && this.currentLine === 3) {
        this.appendNextChar('&nbsp;&nbsp;&nbsp;&nbsp;')
        this.appendNextChar('&nbsp;&nbsp;&nbsp;&nbsp;')
      } else if (this.currentLine === 2) {
        this.appendNextChar('&nbsp;&nbsp;&nbsp;&nbsp;')
        this.appendNextChar('&nbsp;&nbsp;&nbsp;&nbsp;')
      }

      return
    }
    this.appendNextChar(char)
    // if last letter in line move to next line and first char

    this.currentChar += 1
  }

  appendNextChar(char) {
    this.codeText += char
    this.jQuerycodeBox.html(this.codeText)
  }

  clickKey(keys) {
    let length = keys.length
    let idx = Math.floor(Math.random() * length)
    $(keys[idx]).css('transform', 'translateY(2px)')
    window.setTimeout(() => {
      $(keys[idx]).css('transform', 'translateY(0px)')
    }, 100)
  }
}

module.exports = Web
