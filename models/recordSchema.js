const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    tema: {
      type: String,
      required: true,
      unique: true,
    },
    comment: [
      {
        type: String,
        maxlength: 500,
      },
    ],
    etiquetas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    votes: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "Record",
  },
);

module.exports = mongoose.model("Record", recordSchema);
