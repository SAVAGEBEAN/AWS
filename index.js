const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to home page.")
    res.send("Welcum")
})
app.use(express.json())
app.listen(process.env.PORT || 5000)

module.exports = app
