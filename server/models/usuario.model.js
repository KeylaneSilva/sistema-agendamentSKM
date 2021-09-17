const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    senha_usuario: String,

},{
    timestamps: true
});

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;