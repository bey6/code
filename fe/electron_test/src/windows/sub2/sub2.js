const { BrowserWindow } = require('electron')

let sub2Window

module.exports.createSub2Window = () => {

  if (sub2Window) {
    sub2Window.show()
    return
  }

  sub2Window = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  sub2Window.webContents.openDevTools()
  sub2Window.loadFile('src/windows/sub2/sub2.html')

  return sub2Window
}