const Record = require("../models/recordSchema");
const Tag = require("../models/tagSchema");


// se obtiene el tag y se busca en la db todos los registros con ese tag
exports.filter = async (req, res) => {

  const { tag } = req.body;
  if (tag === "Todos") {
    const records = await Record.find({}).populate("etiquetas");
    return res.json({ records });
  }
  
  const tagDoc = await Tag.findOne({ name: tag }); 
  if (!tagDoc) return res.json({ records: [] }); 

  const records = await Record.find({
    etiquetas: { $in: [tagDoc._id] },
  }).populate("etiquetas");
  return res.json({ records });
};

// recibe el link y los tags seleccionados y los guarda en la base de datos
exports.addLink = async (req, res) => {
  const { link, selectedTags } = req.body; // selectedTags is an array

  // 
  const tagDocs = await Promise.all(
    selectedTags.map(async (name) => {
      let tag = await Tag.findOne({ name });
      if (!tag) tag = await Tag.create({ name });
      return tag;
    }),
  );

  const tagIds = tagDocs.map((t) => t._id);

  // crea un nuevp registro con el array de tags
  const newRecord = new Record({
    tema: link,
    etiquetas: tagIds, // store as array
  });
  await newRecord.save();
  res.json({ success: true });
};

// obtiene el tag y lo guarda en la bd
exports.addTag = async (req, res) => {
  const { tag } = req.body; // selectedTags is an array

  // Create record with multiple tags
  const newTag = new Tag({ name: tag });
  await newTag.save();
  res.json({ success: true });
};

// obtiene los detalles de un registro especifico por su id
exports.details = async (req, res) => {
  const { id } = req.body;
  const details = await Record.findById(id).populate("etiquetas");
  if (!details) {
    res.json({ error: "no data" });
  }

  res.json({ details });
};

// agrega un voto a un registro por su id
exports.addVote = async (req, res) => {
  const { id } = req.body;
  const voted = await Record.updateOne({ _id: id }, { $inc: { votes: 1 } });

  if (!voted) {
    res.json({ error: "error" });
  }

  res.json({ status: "success" });
};

// obtiene todos los tags para llenar el select
exports.populateSelect = async (req, res) => {
  const tags = await Tag.find({}, "name");

  if (!tags) {
    res.json({ error: "error" });
  }

  res.json({ tags });
};

// agrega comentario a la base de datos
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
