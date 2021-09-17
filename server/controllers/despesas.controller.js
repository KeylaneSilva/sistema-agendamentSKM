const Despesas = require('../models/despesa.model');

module.exports = {
    async index(req, res){
        const despesas = await Despesas.find();
        return res.json(despesas); 
    },
    async create(req, res){
        const {titulo_despesa, valor_despesa, obs_despesa, data_despesa} = req.body;
        let data = {}
        let despesas = await Despesas.findOne({titulo_despesa});

        if(!despesas){
            data = {titulo_despesa, valor_despesa, obs_despesa, data_despesa};

            despesas = await Despesas.create(data);

            return res.status(200).json(despesas);
        }else{
            return res.status(500).json(despesas);
        }
    },
    async details(req, res){
        const{ _id } = req.params;
        const despesas = await Despesas.findOne({_id});
        return res.json(despesas);
    },
    async delete(req, res){
        const { _id } = req.params;
        const despesas = await Despesas.findByIdAndDelete({_id});
        return res.json(despesas);
    },
    async update(req, res){
        const {_id, titulo_despesa, valor_despesa, obs_despesa, data_despesa} = req.body;
        const data = {titulo_despesa, valor_despesa, obs_despesa, data_despesa};
        const despesas = await Despesas.findByIdAndUpdate({_id}, data, {new: true});
        return res.json(despesas);
    }
}