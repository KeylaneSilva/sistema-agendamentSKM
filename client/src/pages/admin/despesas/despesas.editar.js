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

export default function EditarDespesas(){
    
    const [nome_despesa, setDespesa] = useState('')
    const [valor_despesa, setValor] = useState('')
    const [obs_despesa, setObs] = useState('')
    const [data_despesa, setDataDespesa] = useState('')

    const { idDespesa } = useParams();

    useEffect(() => {
        async function getDespesas(){
            var response = await api.get('/api/despesas/details/' + idDespesa);
            // console.log(response);
            setDespesa(response.data.titulo_despesa)
            setValor(response.data.valor_despesa)
            setObs(response.data.obs_despesa)
            setDataDespesa(response.data.data_despesa)
        }
        getDespesas();
    }, [])

    async function handleSubmit(){
        const data = {
            titulo_despesa: nome_despesa,
            valor_despesa: valor_despesa,
            obs_despesa: obs_despesa,
            data_despesa: data_despesa,
            _id: idDespesa
        }

        //api
        const response = await api.put('/api/despesas/update', data)

        if(response.status == 200){
            window.location.href = '/admin/despesas'
        }else{
            alert('Erro ao tentar atualizar a despesa!')
        }
    }

    return(
        <>
        <MenuAdmin title={'Cadastrar Despesas'}/>  
        <Container maxWidth="lg" sx={{ mt: -25, mb: 4}}>
            <Typography variant="h6" gutterBottom>
            Editar Despesa
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={9}>
                    <TextField
                    required
                    id="nome_despesa"
                    name="despesa"
                    label="Despesa"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={nome_despesa}
                    onChange={e => setDespesa(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                    type="number"
                    required
                    id="valor_despesa"
                    name="valor"
                    label="Valor da despesa"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={valor_despesa}
                    onChange={e => setValor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField
                    id="obs_despesa"
                    name="observacao"
                    label="Observação da despesa"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={obs_despesa}
                    onChange={e => setObs(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                    type="date"
                    required
                    id="data_despesa"
                    name="data"
                    label="  "
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    value={data_despesa}
                    onChange={e => setDataDespesa(e.target.value)}
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
                        color="primary"
                        href='/admin/despesas'
                        >
                        Voltar
                    </Button>
                </Grid>
               
            </Grid>
        </Container>
      </>
    )
}