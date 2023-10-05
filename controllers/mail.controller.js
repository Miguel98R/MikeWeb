const transporter = require("../helpers/conf_mail")


const sendMail = async (req, res) => {

    let {name, email, subject, message} = req.body


    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)


    try {

        const mailOptions = {
            from: email, // Tu dirección de correo electrónico
            to: process.env.MAIL_USER, // Dirección de correo electrónico del destinatario
            subject: subject,
            html: `
        <html>
            <head>
                <style>
              
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                 
                    header {
                        background-color: #0073e6;
                        color: #fff;
                        padding: 20px;
                        text-align: center;
                    }
                   
                    .content {
                        padding: 20px;
                        background-color: #fff;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>¡Nuevo mensaje de contacto!</h1>
                </header>
                <div class="content">
                    <p>Se ha contactado ${name} con el siguiente mensaje:</p>
                    <p>${message}</p>
                    <p>Puedes responder a ${email}.</p>
                </div>
            </body>
        </html>
    `
        };


        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
                res.redirect("/email_error")

            }else{
                res.redirect("/email_success")
            }
        });





    } catch (e) {
        res.redirect("/email_error")
        console.error(e)
        return
    }
}

module.exports = {
    sendMail,
}