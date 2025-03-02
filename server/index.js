import express from "express";
import {config} from 'dotenv';
config();

const app = express()
console.log(process.env.PORT);

app.use (express.json())

app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`);
    
})