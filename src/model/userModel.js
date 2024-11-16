let database = require("../database/config");

function authentication(email, password) {
  let sqlInstruction = `
  SELECT id, username, email FROM userRegister WHERE email = '${email}' AND password = '${password}';
  `;

  console.log("Executando a instrução SQL: \n" + sqlInstruction);
  return database.execute(sqlInstruction);
}

function register(username, email, password) {
  let sqlInstruction = `
    INSERT INTO userRegister (username, email, password) VALUES ('${username}', '${email}', '${password}');
  `;

  console.log("Executando a instrução SQL: \n" + sqlInstruction);
  return database.execute(sqlInstruction);
}

module.exports = {
  authentication,
  register,
};
