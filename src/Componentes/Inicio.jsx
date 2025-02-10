import BarraDeNavegacion from "../BarraNavegacion";
import Footer from "../Footer";
import { CursoProvider } from "../Providers/CursoProvider";
import CursoLista from '../Cursos/CursoLista'
import { MaquinaProvider } from "../Providers/MaquinasProvider";
import MaquinaLista from "../Maquinas/MaquinasLista";

export default function Inicio() {
    return (
        <>
            <BarraDeNavegacion/>
                <CursoProvider>
                    <CursoLista/>
                </CursoProvider>
            <Footer/>
        </>
    )
}

//<MaquinaProvider>
//<MaquinaLista/>
//</MaquinaProvider>