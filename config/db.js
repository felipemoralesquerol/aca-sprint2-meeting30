const { QueryTypes, DataTypes, Sequelize } = require('sequelize');

// TODO: Usar parametros de configuración
const sequelize = new Sequelize('aca_demo_desde_cero', 'root', 'felipote', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(
        console.log('conectado a la base de datos')
    )
    .catch(err => console.log('error: ' + err.message));

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada correctamente');
});


module.exports = sequelize;