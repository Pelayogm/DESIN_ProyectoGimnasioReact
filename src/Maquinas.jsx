import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BarraDeNavegacion from "./BarraNavegacion";
import './BarraNavegacion.css'
import Carta from "./Card.jsx";
import { useState , useEffect} from "react";
import Footer from "./Footer.jsx";


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
            <Row>
            {maquinas.length === 0 ? (
                <p>No te está cogiendo el json</p>
            ): maquinas.map((maquina, index) => (
                <Carta key={index} maquina={maquina}/>
            ))}
            </Row>
        </Container>
        <Footer/>
        </>
    )
};

export default Maquinas;