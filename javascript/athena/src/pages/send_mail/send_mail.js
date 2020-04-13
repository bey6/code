const { send } = require('../../mail')
const path = require('path')

const btn_send = document.querySelector('#send')
  , btn_back = document.querySelector('#back')

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

function validity () {
  let res = document.querySelector('form').reportValidity()
  console.log(res);
  // let valid = document.querySelector('input').validity.valid
  // alert(valid)
}

btn_send.addEventListener('click', e => {
  validity()
  // mailOptions.subject = document.querySelector('#subject').value
  // send(mailOptions)
})

btn_back.addEventListener('click', e => {
  location.href = path.resolve(__dirname, '../main/main.html')
})

