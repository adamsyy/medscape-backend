const {medicines_doctor} = require("../controller/medicines/doctor")
const {medicines_patient} = require("../controller/medicines/patient")

const router = require("express").Router()

router.post("/doctor", medicines_doctor)
router.post("/patient", medicines_patient)

module.exports = router