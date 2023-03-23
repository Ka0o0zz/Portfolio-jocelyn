import nodemailer from "nodemailer";
import hbs from "nodemailer-handlebars";
import path from "path";

let options = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: "./../views/",
    defaultLayout: "",
  },
  viewPath: "./../views/",
  extName: ".hbs",
};

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "nehasada@hotmail.com",
    pass: "5205439",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

//Use template configuration
transporter.use("compile", hbs(options));

function sendMail(options) {
  let _op = options;
  _op["from"] = {
    name: "Joselin",
    address: "nehasada@hotmail.com",
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(_op, function (err, data) {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

export default transporter;
