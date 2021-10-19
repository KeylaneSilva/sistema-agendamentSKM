import * as React from 'react'; 


import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import MenuAdmin from '../../../components/menu-admin'
import Copyright from '../../../components/footer-admin';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function Agendamentos(){
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
                                <TableCell align="center">Nome da Cliente</TableCell>
                                <TableCell align="right">Data do Agendamento</TableCell>
                                <TableCell align="center">Horário</TableCell>
                                <TableCell align="center">Procedimento</TableCell>
                                <TableCell align="center">Valor</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
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

