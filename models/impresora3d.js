const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Impresora3dSchema = new Schema({
    nombre:String,
    modelo:String,
    precio:Number
})

module.exports = mongoose.model("Impresora3d",Impresora3dSchema);