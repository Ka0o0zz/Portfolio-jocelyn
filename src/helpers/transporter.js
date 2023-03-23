import nodemailer from "nodemailer";
import hbs from "nodemailer-handlebars";

let options = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: "views/",
    defaultLayout: "",
  },
  viewPath: "views/",
  extName: ".hbs",
};

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "davidbate5025@gmail.com",
    pass: "snnfecsndcggsqge",
  },

  debug: true,
});

//Use template configuration
transporter.use("compile", hbs(options));

function sendMail(options) {
  let _op = options;
  _op["from"] = {
    name: "Oncater",
    address: "info@Oncater.com",
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
