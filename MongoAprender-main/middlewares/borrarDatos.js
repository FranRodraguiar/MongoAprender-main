require('dotenv').config();
const { MongoClient } = require("mongodb");
const url = process.env.URLMONGO;
const client = new MongoClient(url);
const database = process.env.BBDD;
const coleccion = process.env.COLECCION;

//BORRAR DATOS

async function fBorrarDatos(req,res){
    try {
        await client.connect();
        // BBDD y coleccion van aqui
        const db = client.db(database);
        const coll = db.collection(coleccion);
        // find va aqui
        const dbDelete = await coll.deleteMany(doc);

    } finally {
        //asegurar q el cliente cierra cuando acaba/error
        await client.close();
    }
}
module.exports = {fBorrarDatos};
