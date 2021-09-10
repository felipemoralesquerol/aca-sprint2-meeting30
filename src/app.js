const express = require('express')
const morgan = require('morgan')

const { QueryTypes, DataTypes, Sequelize } = require('sequelize');

// TODO: Usar parametros de configuración
const sequelize = new Sequelize('aca_demo_desde_cero', 'root', 'felipote', {
    host: 'localhost',
    dialect: 'mysql'
});

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


const app = express();
app.use(morgan('short'));

// TODO: Usar routes
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/now', async function (req, res) {
    // TODO: Usar un controller
    const data = await sequelize.query("select now()", { type: QueryTypes.SELECT });
    res.json(data);
});

app.get('/productos', async function (req, res) {
    Producto.sync();
    // TODO: Usar un controller
    const data = await Producto.findAll();
    res.json(data);
});

app.get('/productos/sample', async function (req, res) {
    Producto.sync();
    // TODO: Usar un controller
    const data = await Producto.create({
        nombre: 'sample',
        descripcion: 'sample',
        precio: 100
    });
    const dataSaved = await data.save();
    res.json({ data, dataSaved });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
    sequelize.authenticate()
        .then(
            console.log('conectado a la base de datos')
        )
        .catch(err => console.log('error: ' + err.message));

})