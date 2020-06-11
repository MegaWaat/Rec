import React from 'react'

import { Link } from 'react-router-dom'


export default (props) =>(
  <div>
 <section class = "menu-block">
 <div class="container-h">
  {/* Conteiner branco do login */}
 <div class="box">
<div class="row justify-content-center">
    <div class="col  login-sec">
  {/* Elemento centralizador */}
  
        <h1>Por onde quer começar?</h1>
     <form class="menu-form">
        <Link  to = "/CriancaMenu">
          <button type="submit" class="btn btn-primary btn-lg btn-block float-center">Crianças</button>
        </Link>
        <h1> </h1>
        <Link  to = "/AtividadeMenu">
          <button type="submit" class="btn btn-primary btn-lg btn-block float-center">Atividades</button>
        </Link>

</form>

     </div>
     
</div>
</div>
</div>
 </section>


</div>
);
