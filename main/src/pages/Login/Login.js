import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default (props) => (

  <div className="App">

    <div class="container-hello ">
      {/* Conteiner branco do login */}

      <div class="col  login-sec">
        {/* Elemento centralizador */}
        <h2 class="text-center">Reconhecimento de Imagens para Crianças</h2>
        <form class="login-form">
          <div class="form-group">
            <h3 for="exampleInputEmail1" class="text-uppercase">Entre</h3>
          </div>
          <div class="form-group">

            <input type="password" class="form-control" placeholder="Nome"></input>
            <h1> </h1>
            <input type="password" class="form-control" placeholder="Senha"></input>
          </div>


          <div class="form-check">
            <label class="form-check-label float-left" >
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Lembrar</label></label>
              <Link to="/Menu">
            <button type="submit" class="btn btn-login float-right">Entrar</button>
            </Link>
            <h1>

            </h1>

          </div>

        </form>

      </div>

    </div>



  </div>);