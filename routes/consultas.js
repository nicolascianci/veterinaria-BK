const express = require('express')
const router = express.Router();

const { createConsulta, buscarConsultaText, buscarTodasConsultas } = require('../controllers/consultas')

router
    .post('/', createConsulta)
    .get('/text', buscarConsultaText)
    .get('/', buscarTodasConsultas)

    module.exports = router;