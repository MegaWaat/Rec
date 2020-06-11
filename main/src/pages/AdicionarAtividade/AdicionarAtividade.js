import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AdicionarAtividade.css"
import { Link } from 'react-router-dom'
export default (props) => (
  <div>
    <nav class="navbar navbar-light bg-light">
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Voltar</button>

      </Link>
      <h1 class="navbar-brand">Adicionar atividade</h1>
      <form class="form-inline">
      </form>
    </nav>
    {/* --------------------- */}
    <div class="container-atividade">
      <div class="adicionar-atividade-box">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Título</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome da atividade"></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Tipo:</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="opcao1" checked></input>
              <label class="form-check-label" for="exampleRadios1">
                Apresentação
  </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="opcao2"></input>
              <label class="form-check-label" for="exampleRadios2">
                Associação imagem com palavra
  </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="opcao2"></input>
              <label class="form-check-label" for="exampleRadios2">
                Associação de imagens
  </label>
            </div>
          </div>

        </form>


        {/*  */}
        <label for="formGroupExampleInput2">Emoção Trabalhada:</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios2">
            Feliz
  </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios2">
            Tristeza
  </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios2">
            Medo
  </label>
        </div>
        <Link to="/Menu">
          <button type="button" class="btn btn-primary">Proximo</button>
        </Link>
      </div>
    </div>
  </div>
);