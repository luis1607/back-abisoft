import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    nameComplete: {
        type: String,
        trim: true,
        required:true
    },
    age: {
        type:Number,
        trim: true,
        required:true
    },
    dateBorn:{
        type:Date,
        default: Date.now()
    },
    dateInscription:{
        type:Date,
        default: Date.now()
    },
    cost: {
        type:Number,
        trim:true,
        required:true
    },
},
{
    timestamps: true
})

const Client = mongoose.model("Client",clientSchema);
export default Client;