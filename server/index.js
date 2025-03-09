import express from "express";
import {config} from 'dotenv';
import cors from "cors";
import acessToken from './Routes/Token.route.js'
config();

const app = express()
app.use(cors({ origin: "http://localhost:5173" }));

app.use (express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", acessToken)
app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`);
    
})