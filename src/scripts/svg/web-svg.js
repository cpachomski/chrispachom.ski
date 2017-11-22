import $ from 'jquery'

const messages = [
  'const funForYou = () => {',
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
    this.codeText = ''
    this.currentLine = 0
    this.currentChar = 0
    this.keys = $('#keyboard path:not(#keyboard-outline)')

    setInterval(() => {
      this.simulateTyping()
    }, 150)
  }

  simulateTyping() {
    if (messages.length - 1 < this.currentLine) {
      window.clearInterval(this.typingInteval)
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
        this.appendNextChar('&nbsp;&nbsp;')
        this.appendNextChar('&nbsp;&nbsp;')
      } else if (this.currentLine === 2) {
        this.appendNextChar('&nbsp;&nbsp;')
        this.appendNextChar('&nbsp;&nbsp;')
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
    }, 150)
  }
}

module.exports = Web
