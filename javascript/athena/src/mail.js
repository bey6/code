const mailer = require('nodemailer')

const transporter = mailer.createTransport({
  host: 'smtp.exmail.qq.com',
  port: 465, // SMTP 端口
  secureConnection: true, // 使用 SSL
  auth: {
    user: 'liub@docimax.com.cn',//发邮件邮箱
    pass: 'SXfb2hZeH9Py4GDW'//此处不是qq密码是
  }
})

var mailOptions = {
  from: 'liub@docimax.com.cn', // 发件地址
  to: 'bey.liu@outlook.com', // 收件列表
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

module.exports = {
  send (mailOption) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }
}