require('dotenv').config()
const express = require('express');
const routes = express.Router();

routes.get('/:nome', (req,res) => {
    console.log(req.params.nome)
    return res.status(200).json({success:true, message:`Hello World`})
});

routes.post('/', (req,res) => {
    console.log(req.body.nome)
    return res.status(200).json({success:true, message:`Hello ${req.body.nome}`})
});

module.exports = routes;
