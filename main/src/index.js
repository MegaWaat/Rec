import React from 'react'
import ReactDOM from 'react-dom'
import './include/bootstrap'
import './include/jquery'
import './include/popper'
import './index.css'
import App from './App'
import Hello from './pages/Hello/Hello'
import Login from './pages/Login/Login'
import Menu from './pages/Menu/Menu'
import AtividadeMenu from './pages/AtividadeMenu/AtividadeMenu'
import CriancaMenu from './pages/CriancaMenu/CriancaMenu'
import AdicionarCrianca  from './pages/AdicionarCrianca/AdicionarCrianca'
import AdicionarAtividade  from './pages/AdicionarAtividade/AdicionarAtividade'
import AssociaImagemPalavra  from './pages/AssociaImagemPalavra/AssociaImagemPalavra'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {App}/>
            <Route exact path='/Hello' component = {Hello}/>
            <Route exact path='/Login' component = {Login}/>
            <Route exact path='/Menu' component = {Menu}/>
            <Route exact path='/CriancaMenu' component = {CriancaMenu}/>
            <Route exact path='/AtividadeMenu' component = {AtividadeMenu}/>
            <Route exact path='/AdicionarCrianca' component = {AdicionarCrianca}/>
            <Route exact path='/AdicionarAtividade' component = {AdicionarAtividade}/>
            <Route exact path='/AssociaImagemPalavra' component = {AssociaImagemPalavra}/>
        </Switch>
    </BrowserRouter>,
    
 
    document.getElementById('root')
)
