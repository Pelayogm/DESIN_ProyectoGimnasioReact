import logo from './logo.svg';
import './App.css';
import BarraDeNavegacion from './BarraNavegacion';
import Maquinas from './Maquinas.jsx';
import Natacion from './Natacion.js';
import Boxeo from './Boxeo.js';
import Esgrima from './Esgrima.js';
import Karate from './Karate.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Maquinas/>
      </header>
    </div>
  );
}

export default App;
