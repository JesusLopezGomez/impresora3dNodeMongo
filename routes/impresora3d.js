const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const {getImpresoras3d,addImpresora3d,getImpresoras3dById,deleteImpresora3d,updateImpresora3d} = require("../controllers/impresora3d");

const {validateFields} = require("../middlewares/validateFields");

router
.route("/")
.get(getImpresoras3d)
.post([
    check("nombre","El nombre es un campo obligatorio").not().isEmpty(),
    check("modelo","El modelo es un campo obligatorio").not().isEmpty(),
    check("precio","El precio es un campo obligatirio de tipo númerico").isNumeric(),
    validateFields
],addImpresora3d);

router
.route("/:id")
.get(getImpresoras3dById)
.delete(deleteImpresora3d)
.put([
    check("nombre","El nombre es un campo obligatorio").not().isEmpty(),
    check("modelo","El modelo es un campo obligatorio").not().isEmpty(),
    check("precio","El precio es un campo obligatirio de tipo númerico").isNumeric(),
    validateFields
],updateImpresora3d);

module.exports = router;