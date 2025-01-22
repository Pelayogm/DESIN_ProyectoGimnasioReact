import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BarraDeNavegacion from "./BarraNavegacion";
import './BarraNavegacion.css'

function Maquinas() {
    
    return (
        <>
        <BarraDeNavegacion/>
        <Container>
        <Row>
            <Col>
                <div>Maquinas compatibles con las reservas</div>
            </Col>
        </Row>
        <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Row>
        </Container>
        </>
    )
};

export default Maquinas;