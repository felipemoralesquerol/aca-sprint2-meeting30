const sequelize = require('../../config/db');
const { QueryTypes } = require('sequelize');
const Producto = require('../models/productos');


exports.Now = async function (req, res, next) {
    try {
        // TODO: Usar un controller
        const data = await sequelize.query("select now()", { type: QueryTypes.SELECT });
        res.json(data);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ 'status': 'Error interno' })
    }
};

exports.List = async function (req, res) {
    try {
        //Producto.sync();
        // TODO: Usar un controller
        const data = await Producto.findAll();
        res.json(data);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ 'status': 'Error interno' })
    }
}

exports.Sample = async function (req, res) {
    try {
        // Producto.sync();
        // TODO: Usar un controller
        const data = await Producto.create({
            nombre: 'sample',
            descripcion: 'sample',
            precio: 100
        });
        const dataSaved = await data.save();
        res.json({ data, dataSaved });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ 'status': 'Error interno' })
    }
}