const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to hoe page")
})
app.use(express.json())
app.listen(5000, ()=>{
    console.log(`server is running`)
})