import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AssociaImagemPalavra.css"
import { Link } from 'react-router-dom'
export default (props) => (
  <div>
    <nav class="navbar navbar-light bg-light">
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Voltar</button>

      </Link>
      <h1 class="navbar-brand">Adicionar atividade Associa Imagem Palavra</h1>
      <form class="form-inline">
      </form>
    </nav>
    <div class="container-associa-imagem-palavra">
      <div class="associa-imagem-box">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4">TELA 1</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Mensagem"></input>
            </div>
          </div>
        </form>
        {/* Card */}
        <div class="card" >
          <div class="card-body">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01"></input>
              <label class="custom-file-label" for="inputGroupFile01">Imagem↑ </label>
            </div>

          </div>
        </div>
        {/*  */}
        <h1> </h1>
        <div class="form-group col-md-4">

          <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 1"></input>
          <h1> </h1>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 2"></input>
          <h1> </h1>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 3"></input>
        </div>
      

    </div>
    <div class="form-group col-md-4">
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Banco de Imagens</button>

      </Link>
      <h1> </h1>
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Visualizar</button>

      </Link>
      <h1> </h1>
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Recompensa</button>

      </Link>
      <h1> </h1>
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Proximo</button>

      </Link>
    </div>

  </div>
  </div >
)