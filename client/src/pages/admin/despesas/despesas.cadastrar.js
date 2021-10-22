import React, {useState, handleSubmit} from 'react';
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

export default function CadastrarDespesas(){

    const [nome_despesa, setDespesa] = useState('')
    const [valor_despesa, setValor] = useState('')
    const [obs_despesa, setObs] = useState('')
    const [data_despesa, setDataDespesa] = useState('')

    async function handleSubmit(){
        const data = {
           titulo_despesa: nome_despesa,
           valor_despesa: valor_despesa,
           obs_despesa: obs_despesa,
           data_despesa: data_despesa
        }

        //api
        const response = await api.post('/api/despesas', data)

        if(response.status == 200){
            window.location.href = '/admin/despesas'
        }else{
            alert('Houve um erro ao tentar cadastrar a despesa!')
        }

    }

    return(
        <>
        <MenuAdmin title={'Cadastrar Despesas'}/>  
        <Container maxWidth="lg" sx={{ mt: -25, mb: 4}}>
            <Typography variant="h6" gutterBottom>
            Cadastro de Despesas
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
                    />
                </Grid>
                <Grid item sx={12} sm={12}>
                    <Button 
                    variant="contained"
                    onClick={handleSubmit}
                    color="primary">
                      Salvar
                    </Button>
                  </Grid>
               
            </Grid>
        </Container>
      </>
    )
}