import express, { urlencoded } from "express";
import {createServer} from "node:http"
import mongoose from "mongoose"
import cors from "cors"
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app=express()
const server=createServer(app)
const io=connectToSocket(server)

const PORT=process.env.PORT || 8000
app.use(cors())
app.use(express.json({limit:"40kb"}))   
app.use(urlencoded({limit:"40kb",extended:true}))
app.use("/api/v1/users",userRoutes)


const start=async ()=>{
    const connectDB=await mongoose.connect("mongodb+srv://kingofkings9119976773_db_user:VOIzpVFQWiuMdbxx@zoomappcluster.myvgu7k.mongodb.net/?appName=ZoomAppCluster")
    // console.log(`MONGO host ${connectDB.connection.host}`)
    server.listen(PORT,()=>{
        console.log("Listening on port 8000")
    })
}
start();