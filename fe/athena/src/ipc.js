const { ipcMain, } = require('electron')
const { createWindow } = require('./windows/common.js')

ipcMain.handle('nav-window', (e, windowName) => {
  let page = ''
  switch (windowName) {
    case 'share':
      page = 'src/pages/share/share.html'
      break;
    case 'send_mail':
      page = 'src/pages/send_mail/send_mail.html'
      break;
    case 'send_mail':
      page = 'src/pages/work_items/work_items.html'
      break;
    default:
      break;
  }
  createWindow(page)
})

