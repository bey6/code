const { app } = require('electron')
const { createWindow } = require('./windows/common.js')
require('./ipc')

app.on('ready', () => createWindow('src/pages/main/main.html'))

