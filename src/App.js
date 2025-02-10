import logo from './logo.svg';
import './Estilos/App.css';
import BarraDeNavegacion from './BarraNavegacion';
import { CursoContext } from './Providers/CursoProvider.jsx';
import Inicio from './Componentes/Inicio.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Inicio/>
      </header>
    </div>
  );
}

export default App;
