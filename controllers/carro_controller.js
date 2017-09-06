const exphbs = require('express-handlebars');

const carro = require('../models/carro');

exports.index = (req, res)=>{

    var context ={
        carros: carro.showAll()
    }
    
    res.render('carro', context, (err, html)=>{
        res.send(html);
    });
    //res.send(carro.showAll());
};

exports.findOne = (req, res)=>{
    var context = carro.getOne(req.params.id);
    res.render('onecar', context, (err, html)=>{
        res.send(html);
    });
};
