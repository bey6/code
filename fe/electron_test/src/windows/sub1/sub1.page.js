const { BrowserWindow, ipcRenderer } = require('electron')

function handleCreateWindow (e) {
  if (e === 1) {
    let win = new BrowserWindow({
      width: 500,
      height: 500
    })
    win.loadURL('https://www.baidu.com')
  } else {
    ipcRenderer.invoke('open-window', 'sub2')
  }
}

function handleProxyComunicateSub2 () {
  ipcRenderer.invoke('proxy-comunicate-sub2', '我也可以！')
}

let num = document.querySelector('#num')

ipcRenderer.on('increase', (e, ...args) => {
  num.textContent = args[0]
})

ipcRenderer.on('append-li', (e, msg) => {
  let li = document.createElement('li')
  li.textContent = msg
  document.querySelector('body').appendChild(li)
})