const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ht016746@gmail.com',
        subject: 'Thanks for joining us',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ht016746@gmail.com',
        subject: `Oh no... Please Don't go...`,
        html: `<h1>Don't Go Away!!!</h1><p>Dear ${name}</p><p>Please give us a 2nd chance...</p>`,
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail,
};