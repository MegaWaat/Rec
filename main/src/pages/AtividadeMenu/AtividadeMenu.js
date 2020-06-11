import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AtividadeMenu.css"
import { Link } from 'react-router-dom'
export default (props) => (
  <div>
    {/* Barra de Nav */}
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
    {/* ------------ */}



    <div class="container-atividade-menu">
      <div class="menu-atividade-box">
        {/* coluna de Atividades */}

        <div class="atividades-box">
        </div>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Atividade Feliz 1</h5>
            <h6 class="card-subtitle mb-2 text-muted">Leve</h6>
            <p class="card-text">associação de imagem</p>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Chebox para permitir input text"></input>
              </div>
            </div>
            <a href="#" class="card-link">Visualizar</a>

          </div>
        </div>
        {/* ------------------------ */}
        {/* Coluna de Vincular com criança */}
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <Link to="/Menu">
          <button type="button" class="btn btn-primary ">Adicionar nova atividade</button>
        </Link>


      </div>
      <div class="form-group col-md-4">

        <select id="inputState" class="form-control">
          <option selected>Kevin Cavalheiro</option>
          <option selected>Matheus Cavalheiro</option>
          <option>...</option>
        </select>
        <Link to="/Menu">
          <button type="button" class="btn btn-primary">Vincular</button>
        </Link>
      </div>

    </div>



  </div>


);