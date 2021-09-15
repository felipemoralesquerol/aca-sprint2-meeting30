const sequelize = require('../../config/db');
const { QueryTypes, DataTypes, Sequelize } = require('sequelize');

// Definición de un modelo de ejemplo
const Producto = sequelize.define('productos', {
    // Model attributes are defined here
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    // Other model options go here
});

module.exports = Producto;