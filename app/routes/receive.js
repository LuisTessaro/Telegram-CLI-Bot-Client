module.exports = (bot) => {
  bot.onText(/\/chatId/, (msg) => {
    console.log(msg.chat.id)
  })

  bot.on('message', (msg) => {
    if (msg.text)
      console.log(msg.from.username, 'on', msg.chat.id, ':', msg.text)

    if (msg.sticker)
      console.log('Sticker from:', msg.from.username, msg.sticker.file_id)
  })

}