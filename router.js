const express = require('express');

const exphbs = require('express-handlebars');

const carroController = require('./controllers/carro_controller.js');

const app = express();

/*app.get('/', (request, response)=>{
    response.render('primero', {name: 'Kevin'}, (err, html)=>{
        response.send(html);
    });
});

app.get('/1/2/3',(req, res)=>{
    res.send('Ventana de Kevin');
});*/

app.get('/carro', carroController.index);

app.get('/carro/:id/', carroController.findOne);

exports.app = app; 