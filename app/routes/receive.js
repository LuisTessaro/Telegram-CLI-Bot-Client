module.exports = (bot) => {
  bot.onText(/\/chatId/, (msg) => {
    console.log(msg.chat.id)
  })

  bot.on('message', (msg) => {
    if (msg.text)
      console.log(msg.from.username || 'Anonymous', 'on', msg.chat.title, ':', msg.text)

    if (msg.sticker)
      console.log(msg.from.username || 'Anonymous', 'on', 'sticker', msg.chat.title, ':', msg.sticker.file_id)
  })
}