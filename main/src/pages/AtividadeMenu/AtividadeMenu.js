import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AtividadeMenu.css"
import { Link } from 'react-router-dom'
export default (props) => (
  <div>
  <nav class="navbar navbar-light bg-light">
  <Link to="/Menu">
  <button type="button" class="btn btn-primary">Voltar</button>
  </Link>
    <h5 class="navbar-brand">Menu atividades </h5>

    <form class="form-inline">
      
      <input class="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
      <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>
      

    </form>
  </nav>
  


</div>


);