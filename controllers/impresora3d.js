const Impresora3d = require("../models/impresora3d");

const getImpresoras3d = async(req,res) => {
    try{
        const impresoras = await Impresora3d.find();
        res.status(200).json(impresoras);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const getImpresoras3dById = async(req,res) => {
    const id = req.params.id
    try{
        const impresoras = await Impresora3d.findById(id);
        res.status(200).json(impresoras);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const addImpresora3d = async(req,res) => {
    try{
        const nuevaImpresora = new Impresora3d(req.body);
        await nuevaImpresora.save();
        res.status(201).json(nuevaImpresora);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const deleteImpresora3d = async(req,res) => {
    const id = req.params.id;
    try{
        const impresora = await Impresora3d.findByIdAndDelete(id);
        res.status(200).json(impresora);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const updateImpresora3d = async(req,res) => {
    const id = req.params.id;
    const impresoraActualizada = req.body;
    try{
        await Impresora3d.findByIdAndUpdate(id,impresoraActualizada);
        const impresora = await Impresora3d.findById(id);
        res.status(200).json(impresora);
    }catch(err){
        res.status(500).json({message:err});
    }
}

module.exports = {getImpresoras3d,addImpresora3d,getImpresoras3dById,deleteImpresora3d,updateImpresora3d};