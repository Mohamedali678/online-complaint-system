const complaintController = require("../controllers/compaintController")

const express = require("express")
const router = express.Router()

router.post("/register/complaint", complaintController.registerCompaint)
router.get("/complaints", complaintController.displayComplaint)

module.exports = router