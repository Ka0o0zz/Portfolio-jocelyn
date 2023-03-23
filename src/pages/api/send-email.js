// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendEmail } from "@/helpers/transporter";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastName, email, message } = req.body;
    const year = new Date().getFullYear();

    try {
      await sendEmail(
        ["davidbate5025@gmail.com", "jocelynnvargas1019@gmail.com"],
        "New Message From Portfolio | Joselin",
        `Name: ${name}, Last Name:${lastName}, Email: ${email}, Message:${message}`
      );
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
