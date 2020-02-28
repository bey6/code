const PicGo = require('picgo')
const pg = new PicGo()

document.querySelector('#upload').addEventListener('change', e => {
  try {
    pg.upload([e.target.files[0].path]).then(e => {
      console.log(e);
    })

  } catch (error) {
    alert(error)
  }
})

onload = function () {
  console.log(Notification.permission);

  let notification = new Notification('NOTE', {
    tag: 'Warning',
    icon: 'https://s2.ax1x.com/2020/02/28/3DBURf.png',
    body: 'Function that upload picture to the picture-bed server was not supported now.',
    requireInteraction: true
  })
}