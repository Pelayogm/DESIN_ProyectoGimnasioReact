import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BarraNavegacion.css'
import Maquinas from './Maquinas';

function BarraDeNavegacion() {

    return (
        <>
        <Navbar bg="dark" fixed="top" expand="sm">
        <Container className="d-flex justify-content-between align-items-center general">
            <Navbar.Brand className="navLogo">
                <img src='/Toro_fondo_Negro.png' alt="Logo Gimnasio" className="logoGimnasio"/>
            </Navbar.Brand>

            <Navbar.Text className='tituloGimnasio text-light' >Gimnasio Proyecto DESIN 2</Navbar.Text>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Actividades" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Maquinas.jsx">Maquinas</NavDropdown.Item>
              <NavDropdown.Item href="/Maquinas.jsx">Cursos</NavDropdown.Item>
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