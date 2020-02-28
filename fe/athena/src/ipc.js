const { ipcMain } = require('electron')

ipcMain.handle('nav-window', (e, windowName) => {
  win.loadFile('src/pages/send_mail/send_mail.html')
})

