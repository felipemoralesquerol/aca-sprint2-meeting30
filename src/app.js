const express = require('express')
const morgan = require('morgan')

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mssql'
});


const app = express();
app.use(morgan('short'));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})