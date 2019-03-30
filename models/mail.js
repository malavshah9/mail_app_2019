const nodemailer = require("nodemailer");
var obj = {
    sendMail: async function (callback) {
        console.log("sendMail() called");
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "medskyy@gmail.com", // generated ethereal user
                pass: "nopassword1234" // generated ethereal password
            }
        });
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "mdshah9574@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };
        let info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
};
module.exports = obj;