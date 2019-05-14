module.exports = (msg) => {
  const initialParse = msg.split(' ')
  if (initialParse[0] === 'cmd') {
    return {
      cmd: true,
      type: initialParse[1],
      msg: initialParse[2] || ' '
    }
  }
  else return {
    cmd: false,
    msg: msg
  }
}