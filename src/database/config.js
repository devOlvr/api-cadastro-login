let sql = require("mysql2");

let sqlConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

function execute(instruction) {
  if (
    process.env.PROCESS_AMBIENT !== "production" &&
    process.env.PROCESS_AMBIENT !== "development"
  ) {
    console.log(
      "\nO AMBIENTE NÃO FOI DEFINIDO EM .env OU .env.dev OU index.js\n"
    );
    return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
  }

  return new Promise(function (resolve, reject) {
    let connection = sql.createConnection(sqlConfig);
    connection.connect();
    connection.query(instruction, function (err, result) {
      connection.end();
      if (err) {
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
    connection.on("error", function (err) {
      return "ERRO NO MySQL Server: ", err.sqlMessage;
    });
  });
}

module.exports = {
  execute,
};
