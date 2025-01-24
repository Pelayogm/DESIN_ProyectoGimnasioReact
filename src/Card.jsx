import { Card, Col, Button } from "react-bootstrap";

function Carta( {maquina} ) {
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Img
                    variant="top"
                    src={maquina.imagen}
                    alt={maquina.nombre}
                />
                <Card.Body>
                    <Card.Title>{maquina.nombre}</Card.Title>
                    <Card.Text>
                        {maquina.descripcion}
                        <br/>
                        <p>{maquina.disponibilidad}</p>
                    </Card.Text>
                    <Button variant="primary" href={maquina.enlace}>
                        Leer más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Carta;
