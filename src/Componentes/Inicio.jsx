import BarraDeNavegacion from "../BarraNavegacion";
import Footer from "../Footer";
import { CursoProvider } from "../Providers/CursoProvider";
import CursoLista from '../Cursos/CursoLista'

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