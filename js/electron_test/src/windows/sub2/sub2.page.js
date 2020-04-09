const renderer = require('electron').ipcRenderer

let sub1Id

// 获取 sub1 webContentsId 的代码
async function handleGetSub1Id () {
  sub1Id = await renderer.invoke('get-process-id', 'sub1')
}


function handleComunicateSub1 () {
  renderer.sendTo(sub1Id, 'append-li', 'from sub2')
}

renderer.on('append-p', (e, msg) => {
  let p = document.createElement('p')
  p.textContent = `from sub1: ${msg}`
  document.body.appendChild(p)
})