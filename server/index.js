import express from "express";
import {config} from 'dotenv';
import acessToken from './Routes/Token.route.js'
config();

const app = express()
console.log(process.env.PORT);

app.use (express.json())
app.use("/api", acessToken)
app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`);
    
})