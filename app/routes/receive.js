const stickerParser = require('../helpers/stickerParser')

module.exports = (bot) => {
  bot.onText(/\/chatId/, (msg) => {
    console.log(msg.chat.id)
  })

  bot.on('message', (msg) => {
    let d = new Date()
    const message = '   ' + d.getHours() + ':' + d.getMinutes() + ' ' + (msg.from.username || 'Anonymous') + ':'
    if (msg.animation)
      console.log(message, 'GIF/VIDEO')

    if (msg.photo)
      console.log(message, 'FOTO')

    if (msg.text)
      console.log(message, msg.text)

    if (msg.sticker)
      console.log(message, msg.sticker.emoji, '  Sticker', stickerParser.idToName(msg.sticker.file_id) ? stickerParser.idToName(msg.sticker.file_id) : msg.sticker.file_id)
  })
}