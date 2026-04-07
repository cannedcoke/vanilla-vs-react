const mongoose = require("mongoose")
// esquema para los recordos
const recordSchema = new mongoose.Schema({
    tema:{
        type:String,
        required:true,
        unique:true
    },
    comment:{
        type:String,
        default:"",
        maxlenght:500

    }
});

module.exports = mongoose.model("Record",recordSchema)