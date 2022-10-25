import React, {Component} from 'react';
import logo from '../assets/images/airbnb.png';
/*import logo1 from '../assets/images/logomintic.png';*/
/*import {Navlink} from 'react-router-dom';*/

class Header extends Component{
   
    render(){
        return(
            <header id='header'>
                <div className='center'>
                {/*LOGO */}

                <div id='logo'>
                    <div>
                        <img src={logo} className="app-logo" alt="logotipo"></img>
                    </div>
                    <div>
                        <span id="brand">
                            <strong>Blog Deportivo</strong>
                        </span>
                    </div>
                </div>
                {/*Menu*/}
                <nav>
                    <ul>

                        <li><a href='/home' activeClassName="active">Inicio</a></li>
                        <li><a href='blog' activeClassName="active">Blog</a></li>
                        <li><a href='formulario' activeClassName="active">Formulario</a></li>
                        <li><a href='peliculas' activeClassName="active">Peliculas</a></li>
                        {/*Link para pruebas*/}
                        <li><a href='receta' activeClassName="active">Pagina 2</a></li>

                    </ul>
                    <div className='clearfix'>

                    </div>
                </nav>
                </div>
            </header>
        )
    }
}

export default Header;