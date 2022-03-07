const express = require('express');
const app = express();

app.get('/Home', (req,res)=>{
    res.json("Welcome to hoe page")
})
app.use(express.json())
app.listen(9000, ()=>{
    console.log(`server is running`)
})