const { signup } = require("../controller/auth/signup")
const { login } = require("../controller/auth/login")

const {add_healthscore}=require('../controller/healthscore')
const {food}=require('../controller/food')

const router = require("express").Router()

router.post("/signup", signup)
router.post("/login", login)


router.post("/add_healthscore",add_healthscore)
router.get("/food",food)


module.exports = router