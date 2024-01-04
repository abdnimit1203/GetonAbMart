const express  = require("express")
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// middleware

app.use(cors())
app.use(express.json())



app.get('/', (req,res)=>{
    res.send("My product information coming soon... Has come")
})
app.get('/data', (req,res)=>{
    res.send("product 1,product 2 ,Just kidding")
})

app.listen(port, ()=>{
    console.log(`My GetOnAbMart server running on port: ${port}`);
})