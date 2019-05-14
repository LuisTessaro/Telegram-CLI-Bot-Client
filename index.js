process.env["NTBA_FIX_319"] = 1;
const bot = require('./app/conf/config')
const recieve = require('./app/routes/receive')
const send = require('./app/routes/send')

recieve(bot)
send(bot)

console.log('Bot listening for all messages and sending to PLACEHOLDER')