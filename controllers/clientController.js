import Client from "../models/Client.js";
import mongoose from "mongoose";

const getClients = async(req,res)=>{

    const clients = await Client.find()
    res.json(clients)
 }

 const getClient = async(req,res)=>{
   const {id} = req.params
   console.log(id)

   const client = await Client.findById(id);
   if(!client){
      const error = new Error("No enontrado")
      return res.status(404).json({msg:error.message})
   }
   res.json({
     client
   })

}

 const newClient = async(req,res)=>{

    const client = new Client(req.body);

    try{
       const clientAlmacenado = await client.save();
       res.json(clientAlmacenado)
    }catch(error){
       console.log(error)
    }

}

const editClient = async(req,res)=>{
    const {id} = req.params
    console.log(id)
  
    const client = await Client.findById(id);
    if(!client){
       const error = new Error("No enontrado")
       return res.status(404).json({msg:error.message})
    }

    client.nameComplete = req.body.nameComplete || client.nameComplete;
    client.edad = req.body.age || client.age;
    client.dateBorn = req.body.dateBorn || client.dateBorn;
    client.dateInscription = req.body.dateIncription || client.dateInscription;
    client.cost = req.body.cost || client.cost 

    try{
       const clientAlmacenado = await client.save()
       res.json(clientAlmacenado)
 
    }catch(error){
       console.log(error)
    }
    
 }
 
 const deleteClient = async(req,res)=>{
    const {id} = req.params
    console.log(id)
 
    const client = await Client.findById(id);
    if(!client){
       const error = new Error("No enontrado")
       return res.status(404).json({msg:error.message})
    }

    try{
       await client.deleteOne()
       res.json({msg:"Proyect eliminado"})
 
    }catch(error){
       console.log(error)
    }
 }

 export{
    getClients,
    newClient,
    editClient,
    deleteClient,
    getClient
 }
