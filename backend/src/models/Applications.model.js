const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
      required: true
    },
    status: { type: String, default: "applied"},
    shortlist : { type: String, default: "false"},
    dateOfApplication: {type: Date, default: Date.now },
  },
  {
    timestamps:true,
    versionKey:false
  }
);


module.exports = mongoose.model("applications", schema);


// var conversationSchema = new Schema({
//   created: { type: Date, default: Date.now },
//   updated: { type: Date, default: Date.now },
//   recipients: [{ type: Schema.ObjectId, ref: 'User' }],
//   messages: [ conversationMessageSchema ]
// });

// Conversation.findOne({ _id: myConversationId})
// .populate('recipients') // <==
// .exec(function(err, conversation){
//     //do stuff
// });