'use strict'

const { countDocuments } = require("../models/clientes");

var controller={
    datosCurso:(req,res)=>{
        return res.status(200).send({
            curso:"Grupo 21-22",
            tema: "servidor Express",
            basedaros:"MongoDB"
        });
    },

    test:(req,res)=>{
        return res.status(200).send({
            mesagge:"Soy la accion test de mi controlador de consultas"
        });
    },

    crear:(req,res)=>{
        var params= req.body;
        console.log(params);
        try {
            var validate_nombre=!validator.isEmpty(params.nombre);
            var validate_direccion=!validator.isEmpty(params.direccion);
            var validate_ciudad=!validator.isEmpty(params.ciudad);
            var validate_telefono=!validator.isEmpty(params.telefono);
            console.log(validate_nombre,validate_direccion,validate_ciudad,validate_telefono);
        } catch (error) {
            console.log(validate_nombre,validate_direccion,validate_ciudad,validate_telefono);
            return res.status(200).send({
                status:'Error',
                message:'Faltan datos por enviar'
            });
        }
            if(validate_nombre && validate_direccion && validate_ciudad && validate_telefono){
                var cliente= new Cliente();
                cliente.nombre= params.nombre;
                cliente.direccion= params.direccion;
                cliente.ciudad=params.ciudad;
                cliente.telefono=params.telefono;

                cliente.save((error,contMes)=>{
                    if(error || !cliente){
                        return res.status(404).send({
                            status:'Error',
                            message:'El cliente no ha sido guadrado'
                        });
                    }
                    return res.status(200).send({
                        status:'Exitoso',
                        cliente: contMes
                    });
                    
                })
            }
            else{
                return res.status(200).send({
                    status:'Error',
                    mesagge:'Los datos no son validos'
                });
            }
        
    }
}

module.exports= controller;