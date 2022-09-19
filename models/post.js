const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, required: true, maxLength: 100 },
  user: {type: String, required: true, maxLength:30}
}, {timestamps:true});

module.exports = mongoose.model("Post", PostSchema);