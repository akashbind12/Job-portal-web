const express = require("express");

const Job = require("../models/Job.model");

const jwtAuth = require("../middleware/jwtAuth");
const router = express.Router();


// To add new job
router.post("/", jwtAuth, (req, res) => {
  // console.log("req :", req)
  const user = req.user;
  // console.log("user :", user)

  if (user.type != "recruiter") {
    res.status(401).json({
      message: "You don't have permissions to add jobs",
    });
    return;
  }

  const data = req.body;

  let job = new Job({
    userId: user._id,
    title: data.title,
    maxApplicants: data.maxApplicants ,
    maxPositions: data.maxPositions ,
    jobType: data.jobType,
    salary: data.salary,
    skillsets: data.skillsets,
  });

    job.save().then(() => {
      res.json({ message: "Job added successfully to the database" , job : job });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


// to get all the jobs [for recruiter personal and for everyone]
router.get("/", jwtAuth, async (req, res) => {
    try {
        let user = req.user;

        let findParams = {};
        let sortParams = {};

        if (user.type === "recruiter") {
            findParams = { ...findParams, userId: user._id };
        }

        if (req.query.q) {
            findParams = {
                ...findParams,
                title: {
                    $regex: new RegExp(req.query.q, "i"),
                },
            };
        }

        const jobs = await Job.find(findParams).populate('userId').sort(sortParams).lean().exec();;

        return res.status(200).send(jobs)
    } catch (err) {
        return res.status(404).send({ err: err })
    }
});


module.exports = router;