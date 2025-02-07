import logo from './logo.svg';
import './App.css';
import BarraDeNavegacion from './BarraNavegacion';
import Maquinas from './Maquinas.jsx';
import { CursoContext } from './Providers/CursoProvider.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CursoContext>
          <Maquinas/>
        </CursoContext>
      </header>
    </div>
  );
}

export default App;
