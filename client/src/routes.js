import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT ADMIN

import Dasboard from './pages/admin/dashboard'
import Login from './pages/admin/login'

import Agendamentos from './pages/admin/agendamentos'
import CadastrarAgendamentos from './pages/admin/agendamentos/agendamentos.cadastrar'
import EditarAgendamentos from './pages/admin/agendamentos/agendamentos.editar'

import Despesas from './pages/admin/despesas'
import CadastrarDespesas from './pages/admin/despesas/despesas.cadastrar'
import EditarDespesas from './pages/admin/despesas/despesas.editar'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* Rota Admin */}
                <Route path="/admin/" exact component={Dasboard} />
                <Route path="/login/" exact component={Login} />

                <Route path="/admin/agendamentos" exact component={Agendamentos}/>
                <Route path="/admin/agendamentos/cadastrar" exact component={CadastrarAgendamentos}/>
                <Route path="/admin/agendamentos/editar/:idAgendamento" exact component={EditarAgendamentos}/>

                <Route path="/admin/despesas" exact component={Despesas}/>
                <Route path="/admin/despesas/cadastrar" exact component={CadastrarDespesas}/>
                <Route path="/admin/despesas/editar/:idDespesa" exact component={EditarDespesas}/>
                
            </Switch>

        </BrowserRouter>
    )
}
