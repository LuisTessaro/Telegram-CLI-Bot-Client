const stickerParser = require('../helpers/stickerParser')

module.exports = (bot) => {
  bot.onText(/\/chatId/, (msg) => {
    console.log(msg.chat.id)
  })

  bot.on('message', (msg) => {
    if (msg.animation)
      console.log('   ', msg.from.username || 'Anonymous', ':', 'GIF/VIDEO')

    if (msg.photo)
      console.log('   ', msg.from.username || 'Anonymous', ':', 'FOTO')

    if (msg.text)
      console.log('   ', msg.from.username || 'Anonymous', ':', msg.text)

    if (msg.sticker)
      console.log('   ', msg.from.username || 'Anonymous', ':', msg.sticker.emoji, '  Sticker', stickerParser.idToName(msg.sticker.file_id) ? stickerParser.idToName(msg.sticker.file_id) : msg.sticker.file_id)
  })
}