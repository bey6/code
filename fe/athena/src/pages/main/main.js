const { ipcRenderer } = require('electron')

function handleNav (e) {
  ipcRenderer.invoke('nav-window', e)
}