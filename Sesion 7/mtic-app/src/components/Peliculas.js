import React, {Component} from "react";
import MensajeEstatico from "./MensajEstatico";

class Peliculas extends Component{
    render(){
        return(
            <div id="peliculas">
            <h4>Soy el componente de Peliculas</h4>
            <MensajeEstatico></MensajeEstatico>
            </div>
        );
    }
}

export default Peliculas;