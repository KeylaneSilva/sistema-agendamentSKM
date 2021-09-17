const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    titulo_despesa: String,
    valor_despesa: Number,
    obs_despesa: String,
    data_despesa: {type:Date, default: Date.now() }
},{
    timestamps: true
});

const despesas = mongoose.model('Desepesas', DataSchema);
module.exports = despesas;