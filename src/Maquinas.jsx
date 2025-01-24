import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BarraDeNavegacion from "./BarraNavegacion";
import './BarraNavegacion.css'
import Carta from "./Card.jsx";
import { useState , useEffect} from "react";


function Maquinas() {
    const [maquinas, setMaquinas] = useState([])


    useEffect(() => {
        const fetchMaquinas = async () => {
            const response = await fetch('/maquinas.json');
          const data = await response.json();
          setMaquinas(data.maquinas);
        };
        fetchMaquinas();
      }, []);
    
    
    return (
        <>
        <BarraDeNavegacion/>
        <Container>
            {maquinas.length === 0 ? (
                <p>No te está cogiendo el json</p>
            ): maquinas.map((maquina, index) => (
                <Carta key={index} maquina={maquina}/>
            ))}
        </Container>
        </>
    )
};

export default Maquinas;