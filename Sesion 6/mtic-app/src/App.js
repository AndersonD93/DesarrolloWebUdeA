import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';
import Header from './components/Header';

function presentacion(grupos,year){
  const presentacion=<div>
                      <h3>Desarrollo de aplicaciones Web,{grupos} <br/> Tripulante: Anderson Durán</h3>
                      <h4>{year}</h4> <br/>
                      <h6><MiComponente></MiComponente></h6>
                      <h6><Receta></Receta></h6>
  </div>
  return presentacion;
}


function App() {
  const grupos='21-22';
  
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {presentacion(grupos,2022)}
      
      </header>

      
    
    </div>
  );
}

export default App;
