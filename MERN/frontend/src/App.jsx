import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LayoutAuth from "./Layout/LayoutAuth";

import Login from './pages/Login'
import Registro from "./pages/usuario/Registro";
import OlvidePassword from "./pages/usuario/OlvidePassword"
import Confirmar from "./pages/usuario/Confirmar";

function App(){
  return (
    <Router>
      <Routes>
        {/*Rutas Publicas*/}
        <Route path="/" element={<LayoutAuth></LayoutAuth>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="registro" element={<Registro></Registro>}></Route>
          <Route path="olvide-password" element={<OlvidePassword></OlvidePassword>}></Route>
          <Route path="confirmar/:id" element={<Confirmar></Confirmar>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App