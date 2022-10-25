import React, {Component} from "react";

class Receta extends Component{
    render(){
        const receta={
            nombre:'Arroz costeño',
            ingredientes:['Arroz','Cebolla Morada','Cebolla blanca','Cebolla larga','Pimenton rojo', 'Pimenton verde', 'Pimenton Amarillo','Pollo'],
            calorias:750
        }

        return(
            <div>
                <h2>{`Receta: ${receta.nombre}`}</h2>
                <h2>{`Calorias: ${receta.calorias}`}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i)=>{
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                        }
                    
                </ol>
            </div>
        )
    }
}

export default Receta;