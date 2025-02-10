import { Card, Col, Button } from "react-bootstrap";

function Maquina({data}) {
    return (
        <Col md={4} lg={4} className="mt-4">
            <Card className="h-100">
                <Card.Img variant="top" src={data.imagen} alt={data.nombre}/>
                <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>
                    <Card.Text>
                        {data.descripcion}
                        <br/>
                        <p>{data.disponibilidad}</p>
                    </Card.Text>
                    <Button variant="primary" href={data.enlace}>
                        Leer más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Maquina;
