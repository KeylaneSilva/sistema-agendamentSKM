const express = require('express');
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_cliente: String,
    data_agedamento: {type: Date, default: Date.now()},
    horario_agendamento: String,
    nome_procedimento: String,
    valor: Number,
    observacao_agendamento: String,
    foiAtendida: Boolean
},{
    timestamps:true
});

const agendamentos = mongoose.model('Agendamentos', DataSchema);
module.exports = agendamentos;

