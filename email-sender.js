var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'work.formation00@gmail.com',
    pass: 'P@ss123456'
  }
});

var mailOptions = {
  from: 'work.formation00@gmail.com',
  to: 'work.formation00@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
 transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })




