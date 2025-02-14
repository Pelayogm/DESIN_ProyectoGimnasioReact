import BarraDeNavegacion from "../BarraNavegacion";
import Footer from "../Footer";
import { CursoProvider } from "../Providers/CursoProvider";
import CursoLista from '../Cursos/CursoLista'
import { MaquinaProvider } from "../Providers/MaquinasProvider";
import MaquinaLista from "../Maquinas/MaquinasLista";
import Carrousel from "./Carrousel";

export default function Inicio() {
    return (
        <>
            <Carrousel/>

            <CursoProvider>
                <CursoLista/>
            </CursoProvider>
        </>
    )
}

//<MaquinaProvider>
//<MaquinaLista/>
//</MaquinaProvider>