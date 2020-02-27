const { ipcRenderer } = require('electron')

const btn_navto_send = document.querySelector('#navto_send')
btn_navto_send.addEventListener('click', e => {
  ipcRenderer.invoke('nav-window', 'mail')
})