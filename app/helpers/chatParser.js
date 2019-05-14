const fs = require('fs')
const chats = require('../data/chatIds.json')

function parseNameToId(name) {
  let id = 0
  Object.keys(chats).find(key => {
    if (key === name)
      id = chats[key].id
  })
  return id
}

function addNewChat(chat) {
  const chatParsed = chat.split(' ')
  const name = chatParsed[0] || 'Chat'
  const id = chatParsed[1] || -123123
  const description = chatParsed[2] || 'Description'
  chats[name] = {
    id: id,
    desc: description
  }
  fs.writeFile('./app/data/chatIds.json', JSON.stringify(chats), (err) => {
    if (err) throw err;
    console.log('Added to the list!');
  });
}

function listAllChats() {
  console.log(chats)
}

module.exports.parseNameToId = parseNameToId
module.exports.addNewChat = addNewChat
module.exports.listAllChats = listAllChats