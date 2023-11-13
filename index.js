const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();
const rutaImpresora = require("./routes/impresora3d");

mongoose.set("strictQuery",false);

async function main(){
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Base de datos conectada");
}
main().catch(err => console.log(err));

app.use(express.json());
app.use(morgan("tiny"));
app.use("/impresoras3d",rutaImpresora);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("El servidor está escuchando por el puerto " + PORT);
})
