// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// CASE 1
// function connectDB(){}

// connectDB()

// CASE 2 -- EFI

// import express from "express";
// const app = express()

// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("MONGODB IS CONNECTED!!")
//         app.on('ERROR',(error)=>{
//             console.log("ERROR ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`MONGODB is listing on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()


// this is also good approach but polluted the index.js file 
// why not make a db connection file seperate and import that in this index.js file directly??

// CASE 3 -db folder to connectDB

