const { app, BrowserWindow, Menu } = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 1024,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  Menu.setApplicationMenu(null)
  win.webContents.openDevTools()
  // win.loadFile('src/pages/index.html')
  win.loadURL('http://127.0.0.1:8080')
})