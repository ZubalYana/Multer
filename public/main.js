$('#send').click(()=>{
    let data = {
        photo: $('#file').val()
    }
    console.log(data)
    axios.post('/upload', data)
})

// axios.get('http://localhost:3000/photos')
// .then(()=>{

// })