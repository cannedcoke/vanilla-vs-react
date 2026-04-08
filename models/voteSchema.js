const mongoose = require("mongoose");
// esquema para los voteos
const voteSchema = new mongoose.Schema({
  recordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Record",
    required: true,
  },
  enlace: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Vote", voteSchema);
