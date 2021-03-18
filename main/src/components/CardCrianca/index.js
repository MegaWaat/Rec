import React from 'react';

// import { Container } from './styles';

function CardCrianca({
  val : {idcri,
  nomecri,
  observacaocri,
  responsavelcri,
  graucri,
  nascimentocri,
}, handleDeletar 
}) {
  return (
    <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="https://www.w3schools.com/howto/img_avatar.png" alt="Imagem de capa do card" width="96" height="96"></img>
      <div class="card-body">
        <h5 class="card-title">ID: {idcri}</h5>
        <p>Nome: {nomecri}</p>
        <p>Observações: {observacaocri} </p>
        <p>Responsável: {responsavelcri} |
        Grau: {graucri} |
        Ano de Nascimento: {nascimentocri} </p>
      </div>
      <button onClick={() => handleDeletar(idcri)}>Deletar</button>
    </div>

  </div>
  );
}

export default CardCrianca;