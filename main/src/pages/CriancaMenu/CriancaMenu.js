import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './CriancaMenu.css'
import Axios from 'axios'
import CardCrianca from '../../components/CardCrianca'

export default (props) => {
  const [criLista, setCriLista] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/crianca').then((response) => {
      setCriLista(response.data)
    });
  },[]);
  //----------------------------

  const handleDeletar = useCallback(async (criId) => {
    try {
     await Axios.delete(`http://localhost:3001/delete/${criId}`)
    
     setCriLista( old => [...old.filter((val) => val.id !== criId)] );
    } catch (error) {
      window.alert(error)
    }
  },[])

  return (<div>
    <nav class="navbar navbar-light bg-light">
      <Link to="/Menu">
        <button type="button" class="btn btn-primary">Voltar</button>

      </Link>
      <h1 class="navbar-brand">Menu Crianças</h1>
      <form class="form-inline">

        <input class="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
        <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>


      </form>
    </nav>
    <h1> </h1>
    <div class="chip">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
  Nayara

</div>

    <Link to="/AdicionarCrianca">
      <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 ">+</button>
    </Link>


    {criLista.map((val) => {
      return (
       //<CardCrianca val={val} handleDeletar={handleDeletar}/>
         <div class="table-crianca">
          
           <table class="table table-striped table-dark">
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">Nome</th>
               <th scope="col">Observações</th>
               <th scope="col">Responsável</th>
               <th scope="col">Grau</th>
               <th scope="col">Nascimento</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row">{val.idcri}</th>
               <td>{val.nomecri} </td>
               <td>{val.observacaocri} </td>
               <td>{val.responsavelcri} </td>
               <td>{val.graucri} </td>
               <td>{val.nascimentocri} </td>
               <div >
               
               <button type="button" class="btn btn-primary">Deletar</button>
                  </div>
             </tr>
             </tbody>
             </table>
           </div> 

      )
    }

    )}

  </div>
  )
};