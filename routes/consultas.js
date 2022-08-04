const express = require('express')
const router = express.Router();

const { createConsulta, buscarConsultaText, buscarTodasConsultas, deleteConsulta, ResponderConsulta } = require('../controllers/consultas');
const { jwtValidator } = require('../middleware/jwtValidator');

router
    .post('/', createConsulta)
    .get('/text', buscarConsultaText)
    .get('/', buscarTodasConsultas)
    .delete('/', deleteConsulta)
    .put('/actualizar', ResponderConsulta)

    module.exports = router;