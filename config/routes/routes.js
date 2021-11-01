const express = require('express')

const routes = express.Router()

const ConsultaCliente = require('../controllers/consultaCliente')
const CadastroCliente = require('../controllers/cadastroCliente')
const RemoveCliente = require('../controllers/removeCliente')

routes.get('/consultaCliente', ConsultaCliente.consultarCliente)
routes.post('/cadastroCliente', CadastroCliente.cadastrarCliente)
routes.delete('/removeCliente/:cpf', RemoveCliente.removeCliente)

module.exports = routes