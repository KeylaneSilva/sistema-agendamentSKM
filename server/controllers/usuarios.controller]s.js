const Usuarios = require('../models/usuario.model');

module.exports = {
    async index(req, res){
        const usuario = await Usuarios.find();
        return res.json(usuario);
    },
    async create(req, res){
        const { nome_usuario, senha_usuario } = req.body;

        let data = {}
        let usuario = await Usuarios.findOne({nome_usuario})

        if(!usuario){
            data = {nome_usuario, senha_usuario};
            usuario = await Usuarios.create(data);

            return res.status(200).json(usuario)
        }else{
            return res.status(500).json(usuario)
        }
    },
    async details(req, res){
        const { _id } = req.params;
        const usuario = await Usuarios.findById({_id})
        return res.json(usuario)
    },
    async delete(req, res){
        const { _id } = req.params;
        const usuario = await Usuarios.findByIdAndDelete({_id});
        return res.json(usuario)
    },
    async update(req, res){
        const { _id, nome_usuario, senha_usuario } = req.body
        const data = {_id, nome_usuario, senha_usuario};

        const usuario = await Usuarios.findByIdAndUpdate({_id}, data, {new:true})

        return res.json(usuario)
    }
}