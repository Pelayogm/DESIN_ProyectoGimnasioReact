import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BarraNavegacion.css'

function BarraDeNavegacion() {

    return (
        <>
        <Navbar bg="light" fixed="top">
        <Container>
            <Navbar.Brand>
                <img src='./Toro_fondo_Negro.png'/>
            </Navbar.Brand>

            <Navbar.Text>Gimnasio Proyecto DESIN 2</Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Actividades" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Maquinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cursos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#home">Inciar Sesión</Nav.Link>
            <Nav.Link href="#pricing">Crear Cuenta</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>        
        </>
    )
}

export default BarraDeNavegacion;