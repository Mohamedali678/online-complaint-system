const adminController = require("../controllers/adminController")

const express = require("express")
const router = express.Router()

router.post("/create/admin", adminController.createAdmin)
router.post("/login/admin", adminController.loginAdmin)


module.exports = router