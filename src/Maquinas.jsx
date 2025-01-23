import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BarraDeNavegacion from "./BarraNavegacion";
import './BarraNavegacion.css'
import "./Card.jsx";
import { useState , useEffect} from "react";


function Maquinas() {
    const [maquinas, setMaquinas] = useState([])


    useEffect(() => {
        const fetchMaquinas = async () => {
          const response = await fetch('../public/maquinas.json');
          const data = await response.json();
          setMaquinas(data);
        };
        fetchMaquinas();
      }, []);
    
    
    return (
        <>
        <BarraDeNavegacion/>
        <Container>
            {maquinas.map((maquinas, index) => (
                <Card key={index} maquina={maquinas}/>
            ))}
        </Container>
        </>
    )
};

export default Maquinas;