var process_ambient = "development";
// var process_ambient = "production";

var env_path = process_ambient === "production" ? ".env" : ".env.dev";

require("dotenv").config({ path: env_path });

var express = require("express");
var cors = require("cors");
var path = require("path");
var APP_PORT = process.env.APP_PORT;
var APP_HOST = process.env.APP_HOST;

var app = express();
var appRouter = require("./src/routes/app");
var userRouter = require("./src/routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", appRouter);
app.use("/users", userRouter);
app.listen(APP_PORT, function () {
  console.log(
    "Servidor do site j\u00E1 est\u00E1 rodando! Acesse: http://"
      .concat(APP_HOST, ":")
      .concat(
        APP_PORT,
        " :. \n\n\n    Voc\u00EA est\u00E1 rodando em ambiente de .:"
      )
      .concat(process.env.PROCESS_AMBIENT, ":.")
  );
});
