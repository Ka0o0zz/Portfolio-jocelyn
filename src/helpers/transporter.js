import nodemailer from "nodemailer";
import hbs from "nodemailer-handlebars";
import path from "path";

// let options = {
//   viewEngine: {
//     extname: ".hbs",
//     layoutsDir: path.resolve(__dirname, "../views/"),
//     defaultLayout: "",
//   },
//   viewPath: path.resolve(__dirname, "../views/"),
//   extName: ".hbs",
// };

// //Use template configuration
// transporter.use("compile", hbs(options));

// function sendMail(options) {
//   let _op = options;
//   _op["from"] = {
//     name: "Joselin",
//     address: "nehasada@hotmail.com",
//   };
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(_op, function (err, data) {
//       if (err) {
//         return reject(err);
//       }

//       return resolve(data);
//     });
//   });
// }

// export default transporter;

let transporter = nodemailer.createTransport({
  host: "smtp.live.com",
  port: 587,
  secure: false,
  auth: {
    user: "nehasada@hotmail.com",
    pass: "5205439",
  },
});

export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: "nehasada@hotmail.com",
      to: to,
      subject: subject,
      text: text,
    });
    console.log("Correo electrónico enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
