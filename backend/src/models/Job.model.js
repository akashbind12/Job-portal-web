const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title: { type: String ,required: true},
    maxApplicants: { type: Number },
    maxPositions: {type: Number},
    jobType: {type: String, required: true },
    salary: {type: String, required: true },
    skillsets: {type: String, required: true },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("jobs", schema);