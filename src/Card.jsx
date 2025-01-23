import { Card, Col, Button } from "react-bootstrap";

function Carta({ maquina }) {
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Img
                    variant="top"
                    src={maquina.imagen}
                    alt={maquina.nombre}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title>{maquina.nombre}</Card.Title>
                    <Card.Text>
                        {maquina.descripcion}
                        <br />
                        <strong>{maquina.disponibilidad}</strong>
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
