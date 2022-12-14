import React from 'react'
import {Link} from 'react-router-dom'
import imagenRegistro from '../../assets/imagen-registro.png'
import cajaCarton from '../../assets/caja-de-carton.png'

const Registro =()=>{
    return(
        <div className='flex w-full'>   
            <div className='flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row'>
                <img src={cajaCarton} alt="imagen" className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"></img>
                <div>
                    <h1 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto">Registrate y disfruta de los <span className="text-sky-700">productos</span></h1>
                        <from className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md">

                            <div className="mb-5">
                                <label htmlFor='nombre' className='font-medium'>Nombre</label>
                                <input type="text" id="nombre" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej:Juan Jose Perez Alvarez'></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor='email' className='font-medium'>Email</label>
                                <input type="text" id="email" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej:admin@gmail.com'></input>
                            </div>

                            <div className="mb-5">
                                <label htmlFor='direccion' className='font-medium'>Direccion</label>
                                <input type="text" id="direccion" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: calle 72 5a'></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor='telefono' className='font-medium'>Telefono</label>
                                <input type="number" id="telefono" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: 3185229307'></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor='password' className='font-medium'>Password</label>
                                <input type="password" id="password" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: contraseña123'></input>
                            </div>

                            <input type="submit" value="Ingresar" className='uppercase bg-sky-700 text-white p-2 rounded-md w-full'></input>
                            <div className='flex justify-between px-4 mt-5 text-slate-500'>
                                <Link to="/" className=''>Ya tengo cuenta</Link>
                                <Link to="/olvide-password" className=''>Olvide mi password</Link>
                            </div>
                        </from>
                </div>

            </div>
            <div className='h-full w-0 lg:w-full'>
                <img src={imagenRegistro} alt="imagen login" className='h-screen w-screen'></img>
            </div>
        </div>
    )
}

export default Registro;