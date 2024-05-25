const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const path = require('path')
const multer = require('multer')

mongoose.connect(`mongodb+srv://root:d19KQlNDbg1bWhR0@root.k7ankso.mongodb.net/?retryWrites=true&w=majority&appName=root`)
.then(()=>{
    console.log(`Connected to mongo DB`)
})
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.get('/', (req, res)=>{
    res.sendFile('public', 'index.html')
})
app.listen(PORT, ()=>{
    console.log(`Server work on PORT: ${PORT}`)
})