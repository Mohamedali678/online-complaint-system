const complaintController = require("../controllers/compaintController")

const express = require("express")
const router = express.Router()

router.post("/register/complaint", complaintController.registerCompaint)
router.get("/complaints", complaintController.displayComplaint)
router.get("/single/complaint/:id", complaintController.getSingleComplaint)
router.delete("/delete/complaint/:id", complaintController.deleteComplaint)
router.get("/count/complaints", complaintController.getTotalComplaints)

module.exports = router
