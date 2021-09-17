const express = require('express')
const routes = express.Router()

const Despesas = require('./controllers/despesas.controller')
const Agendamentos = require('./controllers/agendamentos.controller')
const Usuarios = require('./controllers/usuarios.controller]s')

// Rota Despesas

routes.get('/api/despesas', Despesas.index)
routes.post('/api/despesas', Despesas.create)
routes.get('/api/despesas/details/:_id', Despesas.details)
routes.delete('/api/despesas/delete/:_id', Despesas.delete)
routes.put('/api/despesas/update', Despesas.update)

// Rota Agendamento

routes.get('/api/agendamento', Agendamentos.index)
routes.post('/api/agendamento', Agendamentos.create)
routes.get('/api/agendamento/details/:_id', Agendamentos.details)
routes.delete('/api/agendamento/delete/:_id', Agendamentos.delete)
routes.put('/api/agendamento/update', Agendamentos.update)

// Rota Usuário

routes.get('/api/usuarios', Usuarios.index)
routes.post('/api/usuarios', Usuarios.create)
routes.get('/api/usuarios/details/:_id', Usuarios.details)
routes.delete('/api/usuarios/delete/:_id', Usuarios.delete)
routes.put('/api/usuarios/update', Usuarios.update)


module.exports = routes