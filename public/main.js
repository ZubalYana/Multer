$('#send').click(()=>{
    let data = {
        photo: $('#file').val()
    }
    console.log(data)
    axios.post('/upload', data)
})