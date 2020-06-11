import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AtividadeMenu.css"
export default (props) => (
  <div>
  <nav class="navbar navbar-light bg-light">
  <button type="button" class="btn btn-primary">Voltar</button>
    <h5 class="navbar-brand">Menu atividades </h5>

    <form class="form-inline">
      
      <input class="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
      <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>
      

    </form>
  </nav>
  


</div>


);