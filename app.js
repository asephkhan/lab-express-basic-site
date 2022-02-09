// npm i express

const express = require('express');
const app = express();

app.use(express.static('public'));

//Routes

//home

app.get('/home', (request, response, next) =>{
    response.sendFile(__dirname + '/public/views/home.html');
})

//about

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/about.html');
})

app.get('/contact-me', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/contact-me.html');
})

app.listen(3000);

