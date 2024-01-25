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
        const { id } = req.params;
        console.log('id: ', id)
        const db = client.db(database);
        const coll = db.collection(coleccion);
        const dato = {
            _id:id
        }

        await coll.deleteOne(dato);
        
        let datosACliente = {
            mensaxe: "chega a fBorrarDatos"
        }
        res.send(datosACliente)
    } finally {
        //asegurar q el cliente cierra cuando acaba/error
        await client.close();

  
    } 
}
module.exports = {fBorrarDatos};
