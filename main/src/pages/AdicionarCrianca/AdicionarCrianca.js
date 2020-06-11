import React from 'react'
import { Link } from 'react-router-dom' 
import './AdicionarCrianca.css'
export default (props) =>(
    <div>




<div class="col  ">
<nav class="navbar navbar-light bg-light">
<button type="button" class="btn btn-primary">Voltar</button>
  <h5 class="navbar-brand">Adicionando Criança </h5>
  <form class="form-inline">
    
    
  </form>
</nav>
<div class="container ">
  
<div class="adicionar-crianca-box">

  {/* Elemento centralizador */}
  <form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Nome</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Nome"></input>
    </div>
    <div class="form-group col-md-8">
      <label for="inputPassword4">Codigo de Acesso</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Codigo de Acesso"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputobservacoes">Observações</label>
    <input type="text" class="form-control" id="inputObservacoes" placeholder="Detalhar Criança"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputMae">Nome do Responsável</label>
      <input type="text" class="form-control" id="inputMae"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Grau</label>
      <select id="inputState" class="form-control">
        <option selected>Severo</option>
        <option selected>Moderado</option>
        <option selected>Leve</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Idade</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
 
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01"></input> 
    <label class="custom-file-label" for="inputGroupFile01">Selecione um arquivo para foto</label>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Criança com tratamento ativo
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Adicionar</button>
  <div class="input-group mb-3">
  
  
</div>
</form>
</div>
</div>
</div>



</div>);