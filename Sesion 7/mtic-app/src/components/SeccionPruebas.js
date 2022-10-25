import React, {Component} from "react";
import Micomponente from './Micomponente'
import Peliculas from './Peliculas';

class SeccionPruebas extends Component{


    render(){
        return(
            <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>

        <section className='componentes'>
          <Micomponente></Micomponente>
          <Peliculas></Peliculas>
        </section>

        </section>

        );
    }
}

export default SeccionPruebas;