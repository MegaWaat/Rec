import React from 'react'
import { Link } from 'react-router-dom'
import './CriancaMenu.css'
export default (props) => (
  <div>
    <nav class="navbar navbar-light bg-light">
    <button type="button" class="btn btn-primary">Voltar</button>
      <h5 class="navbar-brand">Crianças </h5>

      <form class="form-inline">
        <Link to="/AdicionarCrianca">
          <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 flat-center">Adicionar</button>
        </Link>
        <input class="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
        <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>
        

      </form>
    </nav>
    <h1> </h1>
    <div class="chip">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
  Kevin Cavalheiro

</div>


  </div>
);