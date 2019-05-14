const TelegramBot = require('node-telegram-bot-api')
const token = 'USE YOUR TOKEN HERE'

module.exports = new TelegramBot(token, { polling: true })