const express = require('express');
const app = express();
const port = 5000;

//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DbTest')
    .then(function(){
        console.log('connect database success');
    })
    .catch(function(error){
        console.log('connect fail', error);
    })
//route for app
app.get('/', function(req, res){
    abc = `<div>Page Home</div>
            <h2>Xin chao Lion</h2>`
    res.send(abc);
})

app.get('/api/auth/login', function(req, res){
    res.send('Login page');
})

app.get('/api/auth/register', function(req, res){
    res.send('Register page');
})

//listen 
app.listen(port, function(){
    console.log(`Server listen on port ${port}`);
});
