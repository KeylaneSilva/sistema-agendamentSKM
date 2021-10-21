import React, { useEffect, useState } from 'react'; 

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import MenuAdmin from '../../../components/menu-admin'
import Copyright from '../../../components/footer-admin';
import api from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Agendamentos(){

  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function loadAgendamentos(){
      const response = await api.get('/api/agendamento');
      //console.log(response.data);
      setAgendamentos(response.data)
    }
    loadAgendamentos();
  }, [])

  async function handleDelete(id){
    if(window.confirm('Deseja realmente excluir esse agendamento?')){
      var result = await api.delete('/api/agendamento/delete/'+id)
      window.location.href = '/admin/agendamentos'
    }
  }

    return (
      <>
          <MenuAdmin title={'AGENDAMENTOS'}/>  
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ 
                  p: 2, 
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: -35,
                  }} >
                
                    {/* table */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center"><strong>Nome da Cliente</strong></TableCell>
                                <TableCell align="center"><strong>Data do Agendamento</strong></TableCell>
                                <TableCell align="center"><strong>Horário</strong></TableCell>
                                <TableCell align="center"><strong>Procedimento</strong></TableCell>
                                <TableCell align="center"><strong>Valor</strong></TableCell>
                                <TableCell align="center"><strong>Opções</strong></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {agendamentos.map((row) => (
                                <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="center">{row.nome_cliente}</TableCell>
                                <TableCell align="center">{row.data_agedamento}</TableCell>
                                <TableCell align="center">{row.horario_agendamento}</TableCell>
                                <TableCell align="center">{row.nome_procedimento}</TableCell>
                                <TableCell align="center">{row.valor}</TableCell>
                                <TableCell align="right">
                                  <ButtonGroup aria-label="outlined secondary button group">
                                    <Button color="primary"
                                  href={'/admin/agendamentos/editar/' + row._id}
                                  >
                                    Atualizar
                                    </Button>
                                  <Button 
                                  color="secondary"      onClick={() => handleDelete(row._id)}             
                                  >
                                    Excluir
                                  </Button>
                                </ButtonGroup>
                            </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </>
      )
}

