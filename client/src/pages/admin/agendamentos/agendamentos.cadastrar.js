import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@material-ui/core/Button';

import MenuAdmin from '../../../components/menu-admin'
import { Container } from '@mui/material';

export default function CadastrarAgendamentos(){
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    type="date"
                    required
                    id="data_agendamento"
                    name="data"
                    label="Data do Agendamento"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
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
                    />
                </Grid>
                <Grid item sx={12} sm={12}>
                    <Button 
                    variant="contained"
                    // onClick={handleSubmit}
                    color="primary">
                      Salvar
                    </Button>
                  </Grid>      
            </Grid>
        </Container>
      </>
    )
}