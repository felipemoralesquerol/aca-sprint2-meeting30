const express = require('express')
const morgan = require('morgan')

const app = express();
app.use(morgan('short'));

routerProductos = require('./routes/productos');

app.use('/api', routerProductos);
app.use('/', (req, res) => res.json({ status: 'Hello World' }));

app.listen(4000, () => {
    console.log('listening on port 3000');
})