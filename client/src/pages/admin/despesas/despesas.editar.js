// import  React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import InputAdornment from '@mui/material/InputAdornment';
// import Button from '@material-ui/core/Button';

// import MenuAdmin from '../../../components/menu-admin'
// import { Container } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import api from '../../../services/api';

// export default function EditarDespesas(){
    
//     const [nome_despesa, setDespesa] = useState('')
//     const [valor_despesa, setValor] = useState('')
//     const [obs_despesa, setObs] = useState('')
//     const [data_despesa, setDataDespesa] = useState('')

//     const { idDespesa } = useParams();

//     useEffect(() => {
//         async function getDespesas(){
//             var response = await api.get('/api/despesas/details/' + idDespesa);
//             console.log(response);
//             setDespesa(response.data.titulo_despesa)
//             setValor(response.data.valor_despesa)
//             setObs(response.data.obs_despesa)
//             setDataDespesa(response.data.data_despesa)
//         }
//         getDespesas();
//     }, [])

//     async function handleSubmit(){
//         const data = {
//             titulo_despesa: nome_despesa,
//             valor_despesa: valor_despesa,
//             obs_despesa: obs_despesa,
//             data_despesa: data_despesa,
//             _id: idDespesa
//         }

//         //api
//         const response = await api.put('/api/despesas/update', data)

//         if(response.status == 200){
//             window.location.href = '/admin/despesas'
//         }else{
//             alert('Erro ao tentar atualizar a despesa!')
//         }
//     }

//     return(
//         <>
//         <MenuAdmin title={'Editar Despesas'}/>  
//         <Container maxWidth="lg" sx={{ mt: -25, mb: 4}}>
//             <Typography variant="h6" gutterBottom>
//             Editar Despesas
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} sm={12}>
//                     <TextField
//                     required
//                     id="nome_cliente"
//                     name="cliente"
//                     label="Nome da cliente"
//                     fullWidth
//                     autoComplete="given-name"
//                     variant="standard"
//                     value={nome_despesa}
//                     onChange={e => setDespesa(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                     required
//                     id="data_agendamento"
//                     name="data"
//                     label="Data do Agendamento"
//                     fullWidth
//                     autoComplete="family-name"
//                     variant="standard"
//                     value={valor}
//                     onChange={e => setData(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                     required
//                     id="horario_agendamento"
//                     name="horario"
//                     label="Horário do Agendamento"
//                     fullWidth
//                     autoComplete="family-name"
//                     variant="standard"
//                     value={horario}
//                     onChange={e => setHorario(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                     required
//                     id="nome_procedimento"
//                     name="procedimento"
//                     label="Procedimento"
//                     fullWidth
//                     autoComplete="shipping address-line1"
//                     variant="standard"
//                     value={procedimento}
//                     onChange={e => setProcedimento(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                     type="number"
//                     id="valor"
//                     name="valor"
//                     label="Valor"
//                     valor={<InputAdornment position="start">$</InputAdornment>}
//                     fullWidth
//                     variant="standard"
//                     autoComplete="shipping address-line2"
//                     value={valor_age}
//                     onChange={e => setValor(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={9}>
//                     <TextField
//                     required
//                     id="obervacao"
//                     name="observacao"
//                     label="Observação"
//                     fullWidth
//                     variant="standard"
//                     autoComplete="shipping address-level2"
//                     value={obs}
//                     onChange={e => setObs(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={3}>
//                     <TextField                    
//                     id="atendida"
//                     name="atendida"
//                     label="Foi atendida?"
//                     fullWidth
//                     autoComplete="shipping address-level2"
//                     variant="standard"
//                     value={atendida}
//                     onChange={e => setAtendida(e.target.value)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                     <Button 
//                     variant="contained"
//                     onClick={handleSubmit}
//                     color="primary">
//                       Salvar
//                     </Button>
//                     <Button 
//                     variant="contained"
//                     href={'/admin/agendamentos'}
//                     color="primary">
//                       Voltar
//                     </Button>
//                   </Grid>
               
//             </Grid>
//         </Container>
//       </>
//     )
// }