import React from 'react'
import './Hello.css'
import { Link } from 'react-router-dom'

function App() {
  return (

    <div className="App">
     
<div>
<div class="container">
        <div class="box">
        <div class="col  login-sec">
        {/* Elemento centralizador */}
        <h2 class="text-center">Reconhecimento de Imagens para Crianças</h2>
        <form class="login-form">
          <div class="form-group">
            <h3 for="exampleInputEmail1" class="text-center">Entre</h3>
          </div>
          <div class="form-group">

            <input type="password" class="form-control" placeholder="Código de Acesso"></input>
          </div>


          <div class="form-check">
            <label class="form-check-label float-left" >
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Lembrar</label></label>

            <button type="submit" class="btn btn-primary float-right">Entrar</button>
            <h1>

            </h1>

          </div>

        </form>

      </div>
      <Link to="/Login">
      <button type="submit" class="btn btn-primary float-center">Entrada Psicologo</button>
   </Link>
        </div>
        
      </div>
  

    
    
    


  </div>

    </div>
  );
}

export default App;