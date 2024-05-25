const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const path = require('path')
const multer = require('multer')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

mongoose.connect(`mongodb+srv://root:d19KQlNDbg1bWhR0@root.k7ankso.mongodb.net/?retryWrites=true&w=majority&appName=root`)
.then(()=>{
    console.log(`Connected to mongo DB`)
})

//Photo saving model
const photoSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
})
const Photo = mongoose.model('Photo', photoSchema);

//Multer settings
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

//Photo uploading way
app.post('/upload', upload.single('photo'), async (req,res)=>{
    console.log(req.file)
    const newPhoto = new Photo({
        data: req.file.buffer,
        contentType: req.file.mimetype,
    });
    try{
        await newPhoto.save();
        res.redirect('/gallery')
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
})

//getting all the photos
app.post('/photos', async (req,res)=>{
    try{
        const photos = await Photo.find();
        res.json(photos);
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

//gallery way
app.get('/gallery', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server work on PORT: ${PORT}`)
})