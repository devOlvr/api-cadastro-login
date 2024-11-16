let process_ambient = "development";

let env_path = process_ambient === "production" ? ".env" : ".env.dev";

require("dotenv").config({ path: env_path });

let express = require("express");
let cors = require("cors");
let path = require("path");
let APP_PORT = process.env.APP_PORT;
let APP_HOST = process.env.APP_HOST;

let app = express();

let appRouter = require("./src/routes/app");
let userRouter = require("./src/routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", appRouter);
app.use("/user", userRouter);

app.listen(APP_PORT, function () {
  console.log(`Servidor do site já está rodando! Acesse: http://${APP_HOST}:${APP_PORT} :. \n\n
    Você está rodando em ambiente de .:${process.env.PROCESS_AMBIENT}:.`);
});
