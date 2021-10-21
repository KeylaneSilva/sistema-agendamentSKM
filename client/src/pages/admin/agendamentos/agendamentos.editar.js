import  React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@material-ui/core/Button';

import MenuAdmin from '../../../components/menu-admin'
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

export default function EditarAgendamentos(){
    
    const [nome_cliente, setNomeCliente] = useState('');
    const [data_agendamento , setData] = useState('');
    const [horario, setHorario] = useState('');
    const [procedimento, setProcedimento] = useState('');
    const [valor_age, setValor] = useState('');
    const [obs, setObs] = useState('');
    const [atendida, setAtendida] = useState('');

    const { idAgendamento } = useParams();

    useEffect(() => {
        async function getAgendamento(){
            var response = await api.get('/api/agendamento/details/' + idAgendamento);
            // console.log(response)
            setNomeCliente(response.data.nome_cliente)
            setData(response.data.data_agendamento)
            setHorario(response.data.horario_agendamento)
            setProcedimento(response.data.nome_procedimento)
            setValor(response.data.valor)
            setObs(response.data.observacao_agendamento)
            setAtendida(response.data.foiAtendida)
        }
        getAgendamento()
    }, [])

    async function handleSubmit(){
        const data = {
            nome_cliente: nome_cliente,
            data_agendamento: data_agendamento,
            horario_agendamento: horario,
            nome_procedimento: procedimento,
            valor: valor_age,
            observacao_agendamento: obs,
            foiAtendida: atendida,
            _id: idAgendamento
        }

        //api
        const response = await api.put('/api/agendamento/update', data)

        if(response.status == 200){
            window.location.href="/admin/agendamentos"
        }else{
            alert('Erro ao cadastrar o produto!')
        }
    }

    return(
        <>
        <MenuAdmin title={'Editar Agendamentos'}/>  
        <Container maxWidth="lg" sx={{ mt: -25, mb: 4}}>
            <Typography variant="h6" gutterBottom>
            Editar Agendamento
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
                    onChange={e => setNomeCliente(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="data_agendamento"
                    name="data"
                    label="Data do Agendamento"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={data_agendamento}
                    onChange={e => setData(e.target.value)}
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
                    onChange={e => setHorario(e.target.value)}
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
                    onChange={e => setProcedimento(e.target.value)}
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
                    variant="standard"
                    autoComplete="shipping address-line2"
                    value={valor_age}
                    onChange={e => setValor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField
                    required
                    id="obervacao"
                    name="observacao"
                    label="Observação"
                    fullWidth
                    variant="standard"
                    autoComplete="shipping address-level2"
                    value={obs}
                    onChange={e => setObs(e.target.value)}
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
                    onChange={e => setAtendida(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
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