import React from 'react';
import {Link} from 'react-router-dom'
import imagenOlvide from '../../assets/imagen-olvide.png'
import fondoOlvide from '../../assets/candado.png'

const OlvidePassword =()=>{
    return(
        <div className='flex w-full'>
            <div>
                <img src={fondoOlvide} alt="imagen login" className='relative w-0 md:w-1/2 lg:w-0 sm:w-0'></img>
                    <div>
                        <h3 className='font-bold text-6x1 uppercase text-center md:w-2/3 mx-auto'>Recupera y disfruta de los <span className='text-sky-700'>Productos</span></h3>
                    <from className="p-4 mx-auto w-96 sm:96 mt-8 shadow-md">
                        <div className='mb-5'>
                            <label htmlFor='email' className='font-medium'>Email</label>
                            <input type="text" id="email" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: admin@gmail.com'></input>
                        </div>
                        <input type="submit" value="Ingresar" className='uppercase bg-sky-700 text-white p-2 rounded-md w-full'></input>

                        <div className='flex justify-between px-4 mt-5 text-slate-500'>
                            <Link to="/registro" className=''>No tengo cuenta</Link>
                            <Link to="/" className=''>Ya tengo cuenta</Link>
                        </div>

                    </from>
                    </div>
            
            </div>
                <div className='h-screen w-0 lg:w-full'>
                    <img src={imagenOlvide} alt="imagen login" className='h-full w-screen'></img>

                </div>
        </div>
    )

}

export default OlvidePassword