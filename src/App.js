import logo from './logo.svg';
import './Estilos/App.css';
import BarraDeNavegacion from './BarraNavegacion';
import { CursoContext } from './Providers/CursoProvider.jsx';
import Inicio from './Componentes/Inicio.jsx';
import { BrowserRouter } from 'react-router';
import CursosDisponibles from './Componentes/CursosDisponibles.jsx';
import MaquinasDisponibles from './Componentes/MaquinasDisponibles.jsx';
import { Route, Routes } from 'react-router';
import Footer from './Footer.jsx';
import Boxeo from './Boxeo.js'
import Natacion from './Natacion.js'
import Esgrima from './Esgrima.js'
import Karate from './Karate.js';
import CrearCuenta from './Componentes/CrearCuenta.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BarraDeNavegacion/>
          <Routes>
            <Route index element={<Inicio/>}/>
            <Route path='/' element={<Inicio/>}/>
            <Route path="/cursos-disponibles" element={<CursosDisponibles/>}/>
            <Route path="/maquinas-disponibles" element={<MaquinasDisponibles/>}/>
            <Route path="/cursos-disponibles/natacion" element={<Natacion/>}/>
            <Route path="/cursos-disponibles/esgrima" element={<Esgrima/>}/>
            <Route path="/cursos-disponibles/boxeo" element={<Boxeo/>}/>
            <Route path="/cursos-disponibles/karate" element={<Karate/>}/>
            <Route path='/crear-cuenta' element={<CrearCuenta/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route path="/" element={<Inicio/>}/>
