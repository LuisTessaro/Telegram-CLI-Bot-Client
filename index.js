const bot = require('./app/configs/config')
const recieve = require('./app/routes/receive')
const send = require('./app/routes/send')

recieve(bot)
send(bot)