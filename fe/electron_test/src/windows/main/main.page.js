const renderer = require('electron').ipcRenderer

function handleOpenSub1 () {
  renderer.invoke('open-window', 'sub1')
}
