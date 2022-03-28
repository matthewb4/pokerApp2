const express = require('express')
const router = express.Router()
var {validateBody, schemas} = require("../helpers/routeHelpers.js")

router.post("/signup", validateBody(schemas.authSchema), );

module.exports = router;