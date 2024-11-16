let userModel = require("../model/userModel");

function authentication(req, res) {
  let email = req.body.serverEmail;
  let password = req.body.serverPassword;

  if (email == undefined) {
    res.status(400).send("Seu e-mail está undefined!");
  } else if (password == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    userModel
      .authentication(email, password)
      .then(function (resultAuthentication) {
        if (resultAuthentication.length == 1) {
          console.log(resultAuthentication);
          res.json({
            id: resultAuthentication[0].id,
            email: resultAuthentication[0].email,
            username: resultAuthentication[0].username,
            password: resultAuthentication[0].password,
          });
        } else if (resultAuthentication.length == 0) {
          res.status(403).send("E-mail e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha");
        }
      })
      .catch(function (err) {
        console.log(
          "Houve um erro ao realizar o login! Erro: ",
          err.sqlMessage
        );
        res.status(500).json(err.sqlMessage);
      });
  }
}

function register(req, res) {
  let username = req.body.serverUsername;
  let email = req.body.serverEmail;
  let password = req.body.serverPassword;

  if (username == undefined) {
    res.status(400).send("Seu username está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu e-mail está undefined!");
  } else if (password == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    userModel
      .register(username, email, password)
      .then(function (resultRegister) {
        res.json(resultRegister);
      })
      .catch(function (err) {
        console.log(
          "Houve um erro ao realizar o cadastro! Erro: ",
          err.sqlMessage
        );
        res.status(500).json(err.sqlMessage);
      });
  }
}

module.exports = {
  authentication,
  register,
};
