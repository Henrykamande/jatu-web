
const nodemailer = require('nodemailer');
//  const senderEmail = 'info@apnest.net';

const emailUser = 'info@softcloudtech.co.ke';
const emailPass = 'Exit.1963!';


export function SendEmail(data) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  const mainOptions = {
    from: `"${data.title}" ${emailUser}`,
    to: "info@hotmax.co.ke",
    subject: data.subject,
    text: data.content
  };
  //  console.log('html data ======================>', mainOptions.html)
   transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

};
