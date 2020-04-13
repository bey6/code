const { BrowserWindow } = require('electron')

let sub1Window

module.exports.createSub1Window = () => {
  if (sub1Window) {
    sub1Window.show()
  } else {
    sub1Window = new BrowserWindow({
      width: 800,
      height: 500,
      webPreferences: {
        nodeIntegration: true
      }
    })
    sub1Window.on('closed', () => {
      sub1Window = undefined
    })
    sub1Window.webContents.openDevTools()
    sub1Window.loadFile('src/windows/sub1/sub1.html')
  }

  return sub1Window
}
