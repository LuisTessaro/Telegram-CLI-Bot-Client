const parseMsg = require('../helpers/parseMsg')
const chatParser = require('../helpers/chatParser')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let currentChat = -203726056

module.exports = (bot) => {
  readLine(bot)
}

function readLine(bot) {
  readline.question(``, (msg) => {
    const message = parseMsg(msg)
    if (message.cmd) {
      if (message.type == 'img') {
        if (message.msg == ' ')
          console.log('invalid path')
        else
          bot.sendPhoto(currentChat, message.msg);
      }
      if (message.type == 'sticker') {

        if (message.msg == ' ')
          console.log('invalid path')
        else
          bot.sendSticker(currentChat, message.msg)
      }

      if (message.type == 'chatlist') {
        chatParser.listAllChats()
      }

      if (message.type == 'chat') {
        currentChat = message.msg
      }
    }
    else {
      if (message.msg) {
        bot.sendMessage(currentChat, message.msg)
      }
    }
    readLine(bot)
  })
}