import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BarraNavegacion.css'
import { Link } from 'react-router';

function BarraDeNavegacion() {

    return (
        <>
    <Navbar expand="sm" className="bg-black navbar-dark mb-4">
      <Container fluid>
        <Navbar.Brand>
          <img src="/Toro_fondo_Negro.png"alt="LogoToro"className="logoGimnasio"/>
        </Navbar.Brand>

        <Container fluid className="text-light text-center">
          <h1 className="tituloGimnasio">Gimnasio Proyecto DESIN</h1>
        </Container>

        <Navbar.Toggle aria-controls="collapsibleNavbar" />
        <Navbar.Collapse id="collapsibleNavbar" className="menuOpciones">
          <Nav>
            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
            <NavDropdown title="Actividades" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/maquinas-disponibles"}>Maquinas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/cursos-disponibles"}>Cursos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="login.html">Iniciar Sesion</Nav.Link>
            <Nav.Link href="crearCuenta.html">Crear cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
        </>
    )
}

export default BarraDeNavegacion;