import mongoose from 'mongoose';
import express from 'express';
const app = express();

export const connectdb=async()=>{
    try{
        await mongoose.connect("");
        app.on("error",()=>{
            console.log("idfk")
        })
    }catch(e){
        console.log("idk");
        throw err
    }
};


