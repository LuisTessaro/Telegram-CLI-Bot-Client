const TelegramBot = require('node-telegram-bot-api')
const token = ''

module.exports = new TelegramBot(token, { polling: true })  