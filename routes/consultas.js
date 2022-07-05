const express = require('express')
const router = express.Router();

const { createConsulta, buscarConsultaText, buscarTodasConsultas, deleteConsulta } = require('../controllers/consultas')

router
    .post('/', createConsulta)
    .get('/text', buscarConsultaText)
    .get('/', buscarTodasConsultas)
    .delete('/', deleteConsulta)

    module.exports = router;