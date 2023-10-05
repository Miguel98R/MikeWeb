const nodemailer = require('nodemailer');

// Configurar el transporte SMTP
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER, // Tu dirección de correo electrónico
        pass: process.env.MAIL_PASSWORD, // Contraseña de aplicación generada
    },
});

module.exports = transporter;
