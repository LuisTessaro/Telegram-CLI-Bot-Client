const fs = require('fs')
const stickers = require('../data/stickers.json')

function parseNameToId(name) {
  let id = 0
  Object.keys(stickers).find(key => {
    if (key === name)
      id = stickers[key].id
  })
  return id
}

function idToName(id) {
  let name = ''
  Object.keys(stickers).find(key => {
    if (stickers[key].id === id)
      name = key
  })
  return name
}

function addNewSticker(sticker) {
  const chatParsed = chat.split(' ')
  const name = chatParsed[0] || 'Chat'
  const id = chatParsed[1] || -123123
  const description = chatParsed[2] || 'Description'
  stickers[name] = {
    id: id,
    desc: description
  }
  fs.writeFile('./app/data/chatIds.json', JSON.stringify(stickers), (err) => {
    if (err) throw err;
    console.log('Added to the list!');
  });
}

function listAllStickers() {
  console.log(stickers)
}

module.exports.parseNameToId = parseNameToId
module.exports.listAllStickers = listAllStickers
module.exports.idToName = idToName