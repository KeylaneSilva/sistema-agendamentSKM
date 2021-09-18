const express = require('express');
const { env } = require('process');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./server/routes')

const PORT = process.env.PORT || 8997;

// CONEXÃO MONGOOSE
mongoose.connect('mongodb://localhost:27017/system-agendamento', {
    useUnifiedTopology: true,
    useNewUrlParser: true
},(err) => {
    if(err){
        console.log('Houve um erro: '+err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})