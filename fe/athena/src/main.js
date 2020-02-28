const { app, BrowserWindow, Menu } = require('electron')
require('./ipc')

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1024,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  Menu.setApplicationMenu(null)
  win.webContents.openDevTools()
  win.loadFile('src/pages/main/main.html')
  // win.loadURL('http://127.0.0.1:8080')
})

