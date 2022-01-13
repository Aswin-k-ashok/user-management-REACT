const express = require("express")
const {SignUpUser, authUser} = require("../controller/userController")

const router = express.Router()

router.route("/").post(SignUpUser)
router.route('/login').post(authUser)


module.exports = router 