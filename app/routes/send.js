const parseMsg = require('../helpers/parseMsg')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


module.exports = (bot) => {
  readLine(bot)
}

function readLine(bot) {
  readline.question(``, (msg) => {
    const message = parseMsg(msg)
    if (message.cmd) {
      if (message.type == 'img') {
        bot.sendPhoto(chatId, message.msg);
      }
      if (message.type == 'sticker') {
        bot.sendSticker(chatId, message.msg)
      }
    }
    else
      if (message.msg)
        bot.sendMessage(chatId, message.msg)
    readLine()
  })
}