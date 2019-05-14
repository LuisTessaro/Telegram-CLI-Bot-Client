const TelegramBot = require('node-telegram-bot-api')
const token = 'TOKEN HERE'

module.exports = new TelegramBot(token, { polling: true })  