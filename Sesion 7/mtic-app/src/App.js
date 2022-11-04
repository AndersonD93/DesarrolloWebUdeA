import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import MostrarCarrito from './components/MostarCarrito';

function presentacion(grupos,year){
  const presentacion=<div>
          <h3>Desarrollo de aplicaciones web {grupos} <br/></h3>
          
  </div>
}
/*Importar los componentes que vamos a desarrollar */


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>

      <div className="center">
      <SeccionPruebas></SeccionPruebas>
      <Sidebar></Sidebar>
      
        
      </div> {/*Finaliza DIV CENTER */}
      <Footer></Footer>
    </div>
  );
  
}

export default App;
