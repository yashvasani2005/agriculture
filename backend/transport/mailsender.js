const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {                            // with the help of this function we send mail of otp;      
    try{
            let transporter = nodemailer.createTransport({                    // we send mail with the help of transporter and here MAIL_USER , MAIL_PASS contain app password of that email which send email 
                host:process.env.MAIL_HOST,  
                port : process.env.MAIL_PORT,                             
                auth:{  
                    user: process.env.MAIL_USER,                           
                    pass: process.env.MAIL_PASS,
                }
            })
            console.log(body);
            
            let info = await transporter.sendMail({
              from: 'CrickDelight - by Nishant Kathrotiya',
              to:`${email}`,
              subject: `${title}`,
              html: `${body}`,
          })
        return info;
            
    }
    catch(error) {
        console.log("printing Error", error.message) ;
    }
}


module.exports = mailSender;