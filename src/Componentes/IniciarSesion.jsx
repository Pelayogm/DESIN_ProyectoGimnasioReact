import { Col, Container, Form, FormLabel, FormControl, FormGroup, Button } from "react-bootstrap";

export default function IniciarSesion () {
    return (
        <div className="bg-dark" style={{padding:"16px"}}>
        <Container>
            <Col md={4} style={{color:"white"}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <Button type="submit" className="w-100">Entrar</Button>
            </Form>
            </Col>
            
            <Col md={8} style={{backgroundImage:"url('./login-imagenes/fondoLogin.jpg')"}}>
            </Col>
        </Container>
        </div>
    )
}