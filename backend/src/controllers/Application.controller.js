
const express = require("express")
const Application = require("../models/Applications.model")

const jwtAuth = require("../middleware/jwtAuth");
const router = express.Router();

// apply for a job or give job application
router.post("/jobs/:id/applications", jwtAuth, async (req, res) => {
    const user = req.user;
    if (user.type !== "applicant") {
      res.status(401).json({
        message: "You don't have permissions to apply for a job",
      });
      return;
    }
    const data = req.body;
    const jobId = req.params.id;
    console.log(jobId)

    const application = new Application({
        applicantId: user._id,
        jobId: jobId,
      });

      try{
        const saveApplication = await application.save()
        res.status(200).json({ message: "Job application successful", application : saveApplication});

      }catch(err){
        res.status(400).json({err : err});
      }

})


// recruiter and applicant gets applications for a particular job [pagination] [todo: test: done]

router.get("/jobs/:id/applications", jwtAuth, async (req, res) => {
    const user = req.user;
    const jobId = req.params.id;

    let findParams = {};
    if (user.type === "recruiter") {
        findParams = { jobId : jobId };
        // findParams = { jobId: jobId, recruiterId: user._id};
    }else{
        findParams = { applicantId : user._id };
    }

    try{
        const jobs = await Application.find(findParams).populate('jobId').populate('applicantId').sort().lean().exec();

        return res.status(200).send(jobs)
    } catch (err) {
        return res.status(200).send({ err: err })
    }

})


router.put("/applications/:id", jwtAuth, async (req, res) => {
  
    const user = req.user;
    console.log("req.body",req.body)
  
    if (user.type !== "recruiter") {
      res.status(401).json({
        message: "only recuiter can approve or reject application",
      });
      return;
    }

    try {
        const updatedProduct = await Application.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
      return res.status(200).json(updatedProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
 
});


module.exports = router;