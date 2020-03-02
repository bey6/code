const { BrowserWindow, Menu } = require('electron')

module.exports.createWindow = page => {
  let win = new BrowserWindow({
    width: 1024,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  Menu.setApplicationMenu(null)
  win.webContents.openDevTools()
  win.loadFile(page)
  return win
}