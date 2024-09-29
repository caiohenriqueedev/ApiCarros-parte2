const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroControllers');

router.get('/carros', CarroController.buscarTodos);
router.get('/carros: codigo', CarroController.buscarUm);
router.post('/carro', CarroController.buscarInserir);

module.exports = router;