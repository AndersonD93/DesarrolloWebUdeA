import React, {Component} from "react";
import Micomponente from './Micomponente'
import Peliculas from './Peliculas';
import MostrarCarrito from "./MostarCarrito";

class SeccionPruebas extends Component{

    contador=0;

    constructor(props){
        super(props);
        this.state={contador:0};  
    }

    sumar(){
        this.setState ({contador:(this.state.contador+1)});
    }

    restar(){
        this.setState ({contador:(this.state.contador-1)});
    }

    render(){
        return(
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                <MostrarCarrito></MostrarCarrito>
                 <h2 className="subheader">Funciones y JSX basico</h2>
                 <h2 className="subheader">Componentes</h2>    
        <section className='componentes'>
          <Micomponente></Micomponente>
          <Peliculas></Peliculas>
        </section>
            <h2 className="subheader">Estado</h2>
            <p>
                Contado:{this.state.contador}
            </p>
            <p>
                <input type="button" value="Sumar" onClick={this.sumar.bind(this)}></input>
                <input type="button" value="Restar" onClick={this.restar.bind(this)}></input>
            </p>
        </section>

        );
    }
}

export default SeccionPruebas;