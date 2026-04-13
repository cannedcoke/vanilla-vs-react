const mongoose = require("mongoose");
// schema of the tag collection
const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { collection: "Tag" },
);

module.exports = mongoose.model("Tag", tagSchema);
