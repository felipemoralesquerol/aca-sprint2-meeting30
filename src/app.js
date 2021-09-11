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
const { Router } = express();
app.use(morgan('short'));

const routes = express.Router();


// TODO: Usar routes
routes.get('/', function (req, res) {
    res.send('Hello World')
});

routes.get('/now', async function (req, res) {
    try {
        // TODO: Usar un controller
        const data = await sequelize.query("select now()", { type: QueryTypes.SELECT });
        res.json(data);
    }
    catch (err) {
        console.log(err.message);
        res.json({ 'status': 'Error interno' })
    }
});

routes.get('/productos', async function (req, res) {
    try {
        Producto.sync();
        // TODO: Usar un controller
        const data = await Producto.findAll();
        res.json(data);
    }
    catch (err) {
        console.log(err.message);
        res.json({ 'status': 'Error interno' })
    }
});

routes.get('/productos/sample', async function (req, res) {
    try {
        Producto.sync();
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
        res.json({ 'status': 'Error interno' })
    }
});

app.use('/api', routes);

app.listen(3000, () => {
    console.log('listening on port 3000');
    sequelize.authenticate()
        .then(
            console.log('conectado a la base de datos')
        )
        .catch(err => console.log('error: ' + err.message));

})