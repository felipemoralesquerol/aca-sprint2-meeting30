const express = require('express')
const { Router } = express();
const router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/now', productosController.Now);
router.get('/productos', productosController.List);
router.get('/productos/sample', productosController.Sample);

module.exports = router;