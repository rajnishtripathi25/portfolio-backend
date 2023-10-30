const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const { name, email, phone, subject, body } = req.body; // Destructure values from req

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    </style>
    </head>
    <body>
        <h4> Got A Message from your portfolio .</h4>
        <p>Following are the details </p>
        <p> <strong>Name : </strong> ${name} </p>
        <p> <strong>Email : </strong> ${email} </p>
        <p> <strong>Phone : </strong> ${phone} </p>
        <p> <strong>Message : </strong></p>
        <p>${body}</p>
    </body>
    </html>
    `;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rajnish.tripathi@unthinkable.co',
                pass: 'Rajnish@25',
            },
        });

        const info = await transporter.sendMail({
            from: 'rajnish.tripathi@unthinkable.co',
            to: 'tripathirajnish1999@gmail.com',
            subject: subject, // Use the subject parameter
            html: html,
        });

        console.log("Message sent: %s", info.messageId);
        res.send({message : 'Thankyou , Your message has been sent ...'})

    } catch (err) {
        console.error(err);
        res.status(400).send({message : 'Something went Wrong please try again later .'})

    }
};

module.exports = sendMail;
