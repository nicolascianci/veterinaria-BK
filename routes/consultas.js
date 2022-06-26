const express = require('express')
const router = express.Router();

const { createConsulta, buscarConsulta } = require('../controllers/consultas')

router
    .post('/', createConsulta)
    .get('/', buscarConsulta)

    module.exports = router;