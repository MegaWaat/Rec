import React from 'react'
/* import { Link } from 'react-router-dom' */
import "./AssociaImagemPalavra.css"
import { Link } from 'react-router-dom'
export default (props) => (
  <div>
    {/* Nav */}
    <nav class="navbar navbar-light bg-light">
      <Link to="/AtividadeMenu">
        <button type="button" class="btn btn-primary">Voltar</button>

      </Link>
      <h1 class="navbar-brand">Adicionar ativividade</h1>
      <form class="form-inline">
      </form>
    </nav>
    {/* Fim Nav */}



    <div class="container-associa-imagem-palavra">
      <div class="associa-imagem-box">
        
          <div class="row">
          <div class ="card">
            <div class="col-8">
              <form>
                <div class="form-row">
                  <div class="form-group col-4">
                    <label for="inputEmail4">TELA 1</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Mensagem"></input>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-6">
                  <div class="form-group col-md-4">
                    <input type="file" name="file" />
                  </div>
                </div>
                <div class="col-6">
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 1"></input>
                  <h1> </h1>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 2"></input>
                  <h1> </h1>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Palavra 3"></input>

                </div>
              </div>
            </div>{/* Coluna */}
            </div>
            <div class="col-4">
              <div class=" col-md-4" >

                <Link to="/AtividadeMenu">
                  <button type="button" class="btn btn-primary ">Banco de Imagens</button>

                </Link>
                <p></p>
                <Link to="/AtividadeMenu">
                  <button type="button" class="btn btn-primary">Visualizar</button>

                </Link>
                <p></p>
                <Link to="/AtividadeMenu">
                  <button type="button" class="btn btn-primary">Recompensa</button>

                </Link>
                <p></p>
                <Link to="/AtividadeMenu">
                  <button type="button" class="btn btn-primary">Proximo</button>

                </Link>
              </div>

            </div>
            
    </div>{/* linha */}

        {/* Selecionar Imagem */}



        {/*  */}
        <h1> </h1>

        
      </div>
    </div>
  </div >
)