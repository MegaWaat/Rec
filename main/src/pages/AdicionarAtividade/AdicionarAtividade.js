import React from 'react'
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
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="opcao1" ></input>
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
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="opcao3"></input>
              <label class="form-check-label" for="exampleRadios3">
                Associação de imagens
  </label>
            </div>
          </div>

        </form>


        {/*  */}
        <label for="formGroupExampleInput2">Emoção Trabalhada:</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios4">
            Felicidade
  </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios5">
            Tristeza
  </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios6">
            Raiva
  </label>
  </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="opcao2"></input>
          <label class="form-check-label" for="exampleRadios7">
            Medo
  </label>
  
        </div>
        <Link to="/AssociaImagemPalavra">
          <button type="button" class="btn btn-primary">Proximo</button>
        </Link>
      </div>
    </div>
  </div>
);