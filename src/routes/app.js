let express = require("express");
const { ModuleDetectionKind } = require("typescript");
let router = express.Router();

router.get("/", function (require, response) {
  response.render("app");
});

module.exports = router;
