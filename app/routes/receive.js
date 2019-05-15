const stickerParser = require('../helpers/stickerParser')

module.exports = (bot) => {
  bot.onText(/\/chatId/, (msg) => {
    console.log(msg.chat.id)
  })

  bot.on('message', (msg) => {
    let d = new Date()
    if (msg.animation)
      console.log('   ', d.getHours() + ':' + d.getMinutes(), msg.from.username || 'Anonymous', ':', 'GIF/VIDEO')

    if (msg.photo)
      console.log('   ', d.getHours() + ':' + d.getMinutes(), msg.from.username || 'Anonymous', ':', 'FOTO')

    if (msg.text)
      console.log('   ', d.getHours() + ':' + d.getMinutes(), msg.from.username || 'Anonymous', ':', msg.text)

    if (msg.sticker)
      console.log('   ', d.getHours() + ':' + d.getMinutes(), msg.from.username || 'Anonymous', ':', msg.sticker.emoji, '  Sticker', stickerParser.idToName(msg.sticker.file_id) ? stickerParser.idToName(msg.sticker.file_id) : msg.sticker.file_id)
  })
}