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

export default function Despesas(){

  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
      //listar despesas
    async function loadDespesas(){
      const response = await api.get('/api/despesas');
      //console.log(response.data);
      setDespesas(response.data)
    }
    loadDespesas();
  }, [])

  // excliuir despesas
  async function handleDelete(id){
    if(window.confirm('Deseja realmente excluir esse agendamento?')){
      var result = await api.delete('/api/despesas/delete/'+id)
      window.location.href = '/admin/despesas'
    }
  }

    return (
      <>
          <MenuAdmin title={'DESPESAS'}/>  
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}> 
              <Grid item xs={0}>
                <Paper sx={{
                  p:2,
                  marginTop: -45,
                  boxShadow: 'none',
                }}>
                <Button 
                  variant="contained" 
                  color="success"
                  href='\admin\despesas\cadastrar'>
                  nova despesa
                </Button>
                </Paper>
              </Grid>
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
                                <TableCell align="center"><strong>Despesa</strong></TableCell>
                                <TableCell align="center"><strong>Valor</strong></TableCell>
                                <TableCell align="center"><strong>Observa????o</strong></TableCell>
                                <TableCell align="center"><strong>Data</strong></TableCell>
                                <TableCell align="center"><strong>Op????es</strong></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {despesas.map((row) => (
                                <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="center">{row.titulo_despesa}</TableCell>
                                <TableCell align="center">{row.valor_despesa}</TableCell>
                                <TableCell align="center">{row.obs_despesa}</TableCell>
                                <TableCell align="center">{row.data_despesa}</TableCell>
                                <TableCell align="right">
                                  <ButtonGroup aria-label="outlined secondary button group">
                                    <Button 
                                      color="primary"
                                      href={'/admin/despesas/editar/' + row._id}
                                    >
                                    Atualizar
                                    </Button>
                                    <Button 
                                      color="secondary"      
                                      onClick={() => handleDelete(row._id)}             
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

