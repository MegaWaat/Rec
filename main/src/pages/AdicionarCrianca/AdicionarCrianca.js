import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import './AdicionarCrianca.css'
import Axios from 'axios'



export default (props) => {
    const [criNome,setCriNome] = useState("");
    const [criObservacao,setCriObservacao] = useState("");
    const [criResponsavel,setCriResponsavel] = useState("");
    const [criNascimento,setCriNascimento] = useState("");
    const [criGrau,setCrigrau] = useState(""); 
    
    //------------
    const inserir = async(event)=>{
      event.preventDefault()
      // procurar sobre false e falsy no javascriptyy
      if(criNome && criObservacao && criResponsavel && criNascimento && criGrau){
        await Axios.post(
          'http://localhost:3001/create',
          {criNome, criObservacao, criResponsavel, criNascimento, criGrau},
          
          window.alert('Cadastrado')
        )
      } else {
        window.alert('Prencha todos os campos')
      }     
    }
     //-------------------------
        
    //-------------
  return(<div>

    <nav class="navbar navbar-light bg-light">
      <Link to="/CriancaMenu">
      <button type="button" class="btn btn-primary">Voltar</button>
      </Link>
      <h5 class="navbar-brand float-center">Adicionando Criança </h5>
      <h1> </h1>
    </nav>
    <div class="container2">

      <div class="adicionar-crianca-box">

        {/* Elemento centralizador */}
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4" >Nome</label>
              <input onChange={(e)=>{setCriNome(e.target.value)}} 
              type="text" class="form-control" id="inputEmail4" name="criNome" placeholder="Nome">
              </input>
            </div>
            <div class="form-group col-md-8">
              <label for="inputPassword4">Código de Acesso</label>
              <input type="text" class="form-control" id="inputPassword4" placeholder="Codigo de Acesso"></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputobservacoes">Observações</label>
            <input onChange={(e)=>{setCriObservacao(e.target.value)}}type="text" class="form-control" id="inputObservacoes" placeholder="Detalhar Criança"></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputMae">Nome do Responsável</label>
              <input onChange={(e)=>{setCriResponsavel(e.target.value)}}type="text" class="form-control" id="inputMae"></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Grau</label>
              <select onChange={(e)=>{setCrigrau(e.target.value)}} value={criGrau} id="inputState" class="form-control">
                <option>...</option>
                <option value = "severo" selected>Severo</option>
                <option value = "moderado"selected>Moderado</option>
                <option value = "leve"selected>Leve</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Nascimento</label>
              <input onChange={(e)=>{setCriNascimento(e.target.value)}}type="text" class="form-control" id="inputZip"></input>
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
                Criança com ativo tratamento
      </label>
            </div>
          </div>
          <button  Ontype="submit" class="btn btn-primary" onClick ={(evt) => inserir(evt)} >Adicionar</button>
          <p></p>
          
          <div class="input-group mb-3">

          </div>
        </form>
      </div>
    </div>




  </div>)};