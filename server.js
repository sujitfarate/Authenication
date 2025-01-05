
const express=require('express');
const Router = require('./routes/version');
const cors=require('cors')
const app=express()
require('dotenv').config()
const port=process.env.PORT||4001
app.use(cors())
app.use(express.json())

app.use('/api/v1',Router)


app.listen(port,()=>{
    console.log(`lisening port ${port}`);
})