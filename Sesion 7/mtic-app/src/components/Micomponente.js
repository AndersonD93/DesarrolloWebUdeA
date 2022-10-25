import React, {Component} from 'react'

class Micomponente extends React.Component{
    render(){
        let receta={
            nombre:'Pizza',
            ingredientes:['Tomate','Queso'],
            calorias:400
        };



        return(
            <div className='mi-componente'>
            <h1>{'Recetta :'+receta.nombre}</h1>
            <h2>{'Calorias:'+receta.calorias}</h2>
            <ol>
            {
                receta.ingredientes.map((ingrediente,i)=>{
                console.log(ingrediente);
                    return(
                        <li key={i}>
                            {ingrediente}
                        </li>
                    );

                })
            }
            </ol>
            </div>
            );
               
    }

}

export default Micomponente;

