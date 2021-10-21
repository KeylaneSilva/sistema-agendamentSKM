const Agendamentos = require('../models/agendamento.model');

module.exports = {
    async index(req ,res){
        const agend = await Agendamentos.find();
        return res.json(agend);
    },
    async create(req, res){
        const { nome_cliente, data_agendamento, horario_agendamento, nome_procedimento, valor, observacao_agendamento, foiAtendida } = req.body;

        let data = {}
        let agend = await Agendamentos.findOne({nome_cliente});

        if(!agend){
           data = { nome_cliente, data_agendamento, horario_agendamento, nome_procedimento, valor, observacao_agendamento, foiAtendida }

           agend = await Agendamentos.create(data); 

           return res.status(200).json(agend);
        }else{
            return res.status(500).json(agend);
        }

    },

    async details(req, res){
        const { _id } = req.params;
        const agend = await Agendamentos.findById({_id});
        return res.json(agend);
    },

    async delete(req, res){
        const { _id } = req.params;
        const agend = await Agendamentos.findByIdAndDelete({_id});
        return res.json(agend);
    },
    async update(req, res){
        const { _id, nome_cliente, data_agendamento, horario_agendamento, nome_procedimento, valor, observacao_agendamento, foiAtendida } = req.body;
        
        const data = {_id, nome_cliente, data_agendamento, horario_agendamento, nome_procedimento, valor, observacao_agendamento, foiAtendida};

        const agend = await Agendamentos.findByIdAndUpdate({_id}, data, {new: true});
        return res.json(agend)
    }
}