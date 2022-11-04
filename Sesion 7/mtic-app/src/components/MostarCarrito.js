import carrito from "../data/carrito";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css" 

const MostrarCarrito = () => {
    return (
            
                <table class="table table-dark table-hover" align="center"> 
                    <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">cantidad</th>
                      <th scope="col">calorias</th>
                      <th scope="col">precio</th>
                    </tr>
                    </thead>
                    <tbody>
					{carrito.map(celda=>(
                        <tr>
                            <td>{celda.id}</td>
                            <td>{celda.producto}</td>
                            <td>{celda.cantidad}</td>
                            <td>{celda.calorias}</td>
                            <td>$ {celda.precio}</td>
                        </tr>
					))}
                    </tbody>
                </table>
            );   
}


export default MostrarCarrito;