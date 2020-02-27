const { send } = require('../../mail')

const btn_send = document.querySelector('#send')

let mailOptions = {
  from: '刘备', // 发件地址
  to: 'liub@docimax.com.cn', // 收件列表
  subject: '工作周报', // 标题
  html: `
  <ul>
    <li>1. xxx</li>
    <li>2. xxx</li>
    <li>3. xxx</li>
    <li>4. xxx</li>
  </ul>
  `
};

btn_send.addEventListener('click', e => {
  mailOptions.subject = document.querySelector('#subject').value
  send(mailOptions)
})