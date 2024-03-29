// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import transporter from "@/helpers/transporter";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastName, email, message } = req.body;
    const year = new Date().getFullYear();

    try {
      const mailOptions = {
        from: "nehasada@hotmail.com",
        to: ["davidbate5025@gmail.com", "jocelynnvargas1019@gmail.com"],
        subject: "New Message From Portfolio | Joselin",
        text: "Holaaa",
      };

      transporter.sendMail(mailOptions, function (err, data) {
        console.log({ data });
        if (err) {
          console.log(err);
        } else {
        }
      });
      res.status(200).json({
        ok: true,
        name,
        lastName,
        email,
        message,
      });
    } catch (error) {
      res.status(200).json({
        ok: false,
        error,
      });
    }
  }
}
