import { useContext } from "react";
import { ScrollContext } from "../Providers/ScrollspyProvider";
import {Navbar, Container, Nav, Col, Button, Row} from 'react-bootstrap'

export default function Scrollspy() {
    const {scrollMaquina} = useContext(ScrollContext)

    return (
        <>
            <Navbar bg="success" variant="dark" expand="sm" sticky="top" className="mt-4">
                <Container>
                    <Nav className="mx-auto">
                        {scrollMaquina.map((item) => (
                            <Nav.Link key={item.id} href={`#${item.id}`} className="text-light">
                                {item.titulo}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>

            <Container fluid style={{ height: "600px", overflowY: "scroll" }}>
                {scrollMaquina.map((item) => (
                    <Row key={item.id} className={`container-fluid bg-dark text-white p-5`}>
                        <Col lg={6} className="text-center">
                            <h1>{item.titulo}</h1>
                            <img src={item.imagen} className="img-fluid" alt={item.titulo} />
                        </Col>
                        <Col lg={6} className="mt-5">
                            <h2 className="border-bottom pb-3">{item.subtitulo}</h2>
                            <p>{item.descripcion}</p>
                            <h3>DISPONIBILIDAD: HOY MISMO</h3>
                            <Button variant="primary" className="mt-3">
                                Leer más
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}