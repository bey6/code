const { BrowserWindow } = require('electron')

let mainWindow

module.exports.createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('src/windows/main/main.html')
}