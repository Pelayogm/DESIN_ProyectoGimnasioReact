import { Card, Col, Container, Form } from "react-bootstrap";

export default function CrearCuenta() {

    return (
        <>
            <Container>
                <Col>
                    <Card>
                        <Card.Body>
                        <form className="bg-black" style={{ color: 'white'}}>
                            <h2 className="text-center">CREAR NUEVA CUENTA</h2>
                            <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="nombre"> Nombre </label>
                              <input type="text" id="nombre" className="form-control" required />
                            </div>
                            <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="apellido"> Apellido </label>
                              <input type="text" id="apellido" className="form-control" required />
                            </div>
                            <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="email"> Correo Electrónico </label>
                              <input type="email" id="email" className="form-control" required />
                            </div>
                            <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="password"> Contraseña </label>
                              <input type="password" id="password" className="form-control" required />
                            </div>
                            <div style={{justifyContent: 'center', marginTop: '50px'}}>
                              <button type="submit" className="btn btn-primary btn-block"> Registrarme </button>
                            </div>
                        </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    )

}