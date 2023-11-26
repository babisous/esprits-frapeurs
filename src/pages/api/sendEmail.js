// pages/api/mail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL, // Votre adresse Gmail
				pass: process.env.PASSWORD, // Votre mot de passe Gmail
			},
		});

		try {
			await transporter.sendMail({
				from: process.env.EMAIL,
				to: "ema.collectif@gmail.com", // L'adresse où vous souhaitez recevoir les mails
				subject: "Nouveau message depuis le site de " + req.body.email,
				text: req.body.message,
			});

			res.status(200).send("Email sent successfully");
		} catch (error) {
			console.error(error);
			res.status(500).send("Error sending email ");
		}
	} else {
		res.status(405).send("Method not allowed");
	}
}
