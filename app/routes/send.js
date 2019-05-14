const parseMsg = require('../helpers/parseMsg')

module.exports = (bot) => {
  const chatIdConf = -140082192
  const chatIdTestes = -203726056

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readLine()

  function readLine() {
    readline.question(``, (msg) => {
      const message = parseMsg(msg)
      if (message.cmd) {
        if (message.type == 'img') {
          bot.sendPhoto(chatIdTestes, message.msg);
        }
        if (message.type == 'sticker') {
          bot.sendSticker(chatIdTestes, message.msg)
        }
      }
      else
        if (message.msg)
          bot.sendMessage(chatIdTestes, message.msg)
      readLine()
    })
  }
}