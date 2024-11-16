let express = require("express");
let router = express.Router();

let userController = require("../controller/userController");

router.post("/register", function (require, response) {
  userController.register(require, response);
});

router.post("/authentication", function (require, response) {
  userController.authentication(require, response);
});

module.exports = router;
