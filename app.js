const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const path = require('path')
const multer = require('multer')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.get('/', (req, res)=>{
    res.sendFile('public', 'index.html')
})
app.listen(PORT, ()=>{
    console.log(`Server work on PORT: ${PORT}`)
})