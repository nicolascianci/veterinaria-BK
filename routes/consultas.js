const express = require('express')
const router = express.Router();

const { createConsulta } = require('../controllers/consultas')

router
    .post('/', createConsulta);

    module.exports = router;