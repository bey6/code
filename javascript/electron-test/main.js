const { app, ipcMain } = require('electron')
const { createMainWindow } = require('./src/windows/main/main')
const { createSub1Window } = require('./src/windows/sub1/sub1')
const { createSub2Window } = require('./src/windows/sub2/sub2')

app.on('ready', () => createMainWindow())

let sub1, sub2

ipcMain.handle('open-window', (event, ...args) => {
  switch (args[0]) {
    case 'sub1':
      sub1 = createSub1Window()
      break;
    case 'sub2':
      sub2 = createSub2Window()
      break;
    default:
      break;
  }
})

ipcMain.handle('get-process-id', (event, processName) => {
  switch (processName) {
    case 'main':
      return 0; // 偷懒一下
    case 'sub1':
      return sub1.webContents.id;
    case 'sub2':
      return sub2.webContents.id;
    default:
      break;
  }
})

ipcMain.handle('proxy-comunicate-sub2', (event, msg) => {
  sub2.webContents.send('append-p', msg)
})

let num = 0, intervalId = setInterval(() => {
  try {
    if (sub1) {
      sub1.webContents.send('increase', num)
      num++
    }
  } catch (error) {
    sub1 = undefined
  }
}, 1000);