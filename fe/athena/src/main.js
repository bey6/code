const { app, BrowserWindow, Menu, ipcMain } = require('electron')

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
  win.loadFile('src/pages/main/main_window.html')
  // win.loadURL('http://127.0.0.1:8080')
})

ipcMain.handle('nav-window', (e, windowName) => {
  win.loadFile('src/pages/send_mail/send_mail.html')
})