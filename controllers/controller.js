const Record = require("../models/recordSchema");
const Tag = require("../models/tagSchema");

exports.filter = async (req, res) => {

  const { tag } = req.body;
  if (tag === "Todos") {
    const records = await Record.find({}).populate("etiquetas");
    return res.json({ records });
  }
  
  const tagDoc = await Tag.findOne({ name: tag }); // find the tag document first
  if (!tagDoc) return res.json({ records: [] }); // no records if tag doesn't exist

  const records = await Record.find({
    etiquetas: { $in: [tagDoc._id] },
  }).populate("etiquetas");
  return res.json({ records });
};

exports.addLink = async (req, res) => {
  const { link, selectedTags } = req.body; // selectedTags is an array

  // Find all tag documents that match any of the selected tags
  const tagDocs = await Promise.all(
    selectedTags.map(async (name) => {
      let tag = await Tag.findOne({ name });
      if (!tag) tag = await Tag.create({ name });
      return tag;
    }),
  );

  const tagIds = tagDocs.map((t) => t._id);

  // Create record with multiple tags
  const newRecord = new Record({
    tema: link,
    etiquetas: tagIds, // store as array
  });
  await newRecord.save();
  res.json({ success: true });
};

exports.addTag = async (req, res) => {
  const { tag } = req.body; // selectedTags is an array

  // Create record with multiple tags
  const newTag = new Tag({ name: tag });
  await newTag.save();
  res.json({ success: true });
};

exports.details = async (req, res) => {
  const { id } = req.body;
  const details = await Record.findById(id).populate("etiquetas");
  if (!details) {
    res.json({ error: "no data" });
  }

  res.json({ details });
};

exports.addVote = async (req, res) => {
  const { id } = req.body;
  const voted = await Record.updateOne({ _id: id }, { $inc: { votes: 1 } });

  if (!voted) {
    res.json({ error: "error" });
  }

  res.json({ status: "success" });
};

exports.pupulateSelect = async (req, res) => {
  const tags = await Tag.find({}, "name");

  if (!tags) {
    res.json({ error: "error" });
  }

  res.json({ tags });
};

exports.addComment = async (req, res) => {
  const { id, input } = req.body;

  const comment = await Record.findByIdAndUpdate(id, {
    $push: { comment: input },
  });

  if (!comment) {
    res.json({ error: "can't" });
  }
  res.json({ status: "success" });
};
