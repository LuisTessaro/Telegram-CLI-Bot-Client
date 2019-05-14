const fs = require('fs')
const chats = require('../data/chatIds.json')

function parseIdToName(id) {

}

function parseNameToId(name) {

}

function addNewChat(id, name, description) {

}

function listAllChats (){
  console.log(chats)
}

module.exports.parseIdToName = parseIdToName
module.exports.parseNameToId = parseNameToId
module.exports.addNewChat = addNewChat
module.exports.listAllChats = listAllChats