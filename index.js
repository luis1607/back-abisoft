import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import clientRoutes from './routes/clientRoutes.js';
import cors from 'cors'

const app = express();
app.use(express.json())

dotenv.config()

conectarDB()

//configurar cors
console.log("esta toamndo este envio",process.env.FRONTEND_URL)
const whiteList = [process.env.FRONTEND_URL]
const corsOption = {
    origin: function(origin,callback){
        if(whiteList.includes(origin)){
            //Puede consultar la API
            callback(null, true)
        }else{
            //No esta permitido 
            callback(new Error("Error de cors"))
        }
    }
}
app.use(cors(corsOption))

//ROUTING
app.use('/api/clients',clientRoutes)


const PORT = process.env.port || 4000;

app.listen(4000,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})