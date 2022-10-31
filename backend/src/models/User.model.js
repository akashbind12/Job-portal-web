const mongoose = require("mongoose")
require("mongoose-type-email");

const userSchema = new mongoose.Schema(
    {
      name: {type: String, required: true},
      email: { type: String , required: true},
      password: { type: String, required: true },
      education: { type: String, required: true },
      skill : { type: String, required: true },
      type: {type: String,
          enum: ["recruiter", "applicant"],
          required: true,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports=mongoose.model("user",userSchema)