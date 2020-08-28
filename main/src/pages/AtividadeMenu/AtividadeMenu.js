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

<p> </p>
    </nav>
    {/* ------------ */}



    <div class="container-atividade-menu">
      <div class="menu-atividade-box">{/* BOX BRANCA NO MEIO DA TELA */}
        {/* coluna de Atividades */}


        <div class="row">
          <div class="col-6">{/* Coluna 1  */}
            {/* Card */}
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Emoção</th>
      <th scope="col">Tipo</th>
      <th scope="col">Selecione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>At1 Menina</td>
      <td>Felicidade</td>
      <td>Associação Imagens</td>
      <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" ></input>
                  <label class="custom-control-label" for="customCheck1"></label>
              </div>
            </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>At2 Idoso</td>
      <td>Tristeza</td>
      <td>Associação imagem-palavras</td>
      <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2" ></input>
                  <label class="custom-control-label" for="customCheck2"></label>
              </div>
            </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>At3 Menino</td>
      <td>Raiva</td>
      <td>Apresentação</td>
      <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3" ></input>
                  <label class="custom-control-label" for="customCheck3"></label>
              </div>
            </td>
    </tr>
  </tbody>
</table>
            {/*  Fim card */}
          </div>{/* Fim da Coluna 1 */}
          <div class="col-sm-2">{/* Coluna 2 */}

          </div>{/* Fim coluna 2 */}
          <div class="col-sm-4 ">{/* Coluna 3 */}
            
            <form class="form-inline">

              <input class="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
              <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>


            </form>
            <p> </p>
            <form class="form-inline">
            
  
              <select id="inputState" class="form-control mr-sm-2">
                <option selected>Kevin Cavalheiro</option>
                <option selected>Matheus Cavalheiro</option>
                <option>...</option>
              </select>
              <p> </p>
              <Link to="/Menu">
                <button type="submit" class="btn btn-outline-success my-2 my-sm-0 flat-center">Vincular</button>
              </Link>
            
            
            </form>
            <p> </p>
            <Link to="/AdicionarAtividade">
              <button type="button" class="btn btn-success ">Adicionar nova atividade </button>
            </Link>

          </div>{/* Fim coluna 3 */}

        </div>
        {/* ------------------------ */}

        {/* -------------------- */}






      </div>{/* Container */}
    </div>{/* box */}
  </div>
);