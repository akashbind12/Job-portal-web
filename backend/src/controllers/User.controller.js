const express = require("express");

const User = require("../models/User.model");

const jwtAuth = require("../middleware/jwtAuth");
const router = express.Router();



// to get all the jobs [for recruiter personal and for everyone]
router.get("/", jwtAuth, async (req, res) => {
    try {

        const users = await User.find().lean().exec();

        return res.status(200).send(users)
    } catch (err) {
        return res.status(200).send({ err: err })
    }
});


module.exports = router;