import React, { useState, handleSubmit } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@material-ui/core/Button';

import MenuAdmin from '../../../components/menu-admin'
import { Container } from '@mui/material';
import api from '../../../services/api' 


export default function CadastrarAgendamentos(){
    
    const [nome_cliente, setNomeCliente] = useState('');
    const [data_agendamento , setData] = useState('');
    const [horario, setHorario] = useState('');
    const [procedimento, setProcedimento] = useState('');
    const [valor_age, setValor] = useState('');
    const [obs, setObs] = useState('');
    const [atendida, setAtendida] = useState('');

    // let dataInicio = new Date(data_agendamento)
    // const dataFim = ((dataInicio.getDate() )) + "/" +(((dataInicio.getMonth() < 10 ? "0" + (dataInicio.getMonth() + 1) : dataInicio.getMonth() + 1))) + "/" + dataInicio.getFullYear()

    async function handleSubmit(){
        const data = {
            nome_cliente: nome_cliente,
            data_agendamento: data_agendamento,
            horario_agendamento: horario,
            nome_procedimento: procedimento,
            valor: valor_age,
            observacao_agendamento: obs,
            foiAtendida: atendida
        }
        //api
        const response = await api.post('/api/agendamento', data)

        if(response.status == 200){
            window.location.href = '/admin/agendamentos'
        }else{
            alert('Houve um erro ao tentar cadastrar o agendamento!')
        }
    }
    
    return(
        <>
        <MenuAdmin title={'Cadastrar Agendamentos'}/>  
        <Container maxWidth="lg" sx={{ mt: -25, mb: 4}}>
            <Typography variant="h6" gutterBottom>
            Cadastro de Agendamentos
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    required
                    id="nome_cliente"
                    name="cliente"
                    label="Nome da cliente"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={nome_cliente}
                    onChange={ e => setNomeCliente(e.target.value)}             
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    type="date"
                    required
                    id="data_agendamento"
                    name="data"
                    label=" "
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={data_agendamento}
                    onChange={ e => setData(e.target.value)} 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="horario_agendamento"
                    name="horario"
                    label="Horário do Agendamento"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={horario}
                    onChange={ e => setHorario(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="nome_procedimento"
                    name="procedimento"
                    label="Procedimento"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    value={procedimento}
                    onChange={ e => setProcedimento(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    type="number"
                    id="valor"
                    name="valor"
                    label="Valor"
                    valor={<InputAdornment position="start">$</InputAdornment>}
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    value={valor_age}
                    onChange={ e => setValor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField
                    required
                    id="obervacao"
                    name="observacao"
                    label="Observação"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    value={obs}
                    onChange={ e => setObs(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField                   
                    id="atendida"
                    name="atendida"
                    label="Foi atendida?"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    value={atendida}
                    onChange={ e => setAtendida(e.target.value)}
                    />
                </Grid>
                <Grid item sx={12} sm={12}>
                    <Button 
                    variant="contained"
                    onClick={handleSubmit}
                    color="primary">
                      Salvar
                    </Button>
                    <Button 
                    variant="contained"
                    href={'/admin/agendamentos'}
                    color="primary">
                      Voltar
                    </Button>
                  </Grid>      
            </Grid>
        </Container>
      </>
    )
}