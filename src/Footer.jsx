import { useState , useEffect } from "react";
import { Container } from "react-bootstrap";

function Footer() {
    const [datosFooter, setDatosFooter] = useState([])

    useEffect(() => {
        const fetchFooter = async () => {
            const response = await fetch('/footer.json');                                   
          const data = await response.json();
          setDatosFooter(data.footer);
        };
        fetchFooter();
      }, []);

    return(
        <>
            {datosFooter.length === 0 ? (
                <p>No esta cogiendo el json</p>
            ): (
        <Container fluid>
            <footer className="bg-dark pt-5 mt-5">
                <div className="row justify-content-lg-center">
                    <div className="col-12 col-md-12 col-lg-4" style={{ marginLeft: "20px" }}>
                        <img src={datosFooter.logo.src} alt={datosFooter.logo.alt} style={{ borderRadius: "15%" }} width="200px" height="194px" />
                        <p style={{ color: "white" }}>{datosFooter.copyright}</p>
                    </div>
                </div>

                <div className="row">
                    {datosFooter.secciones.map((seccion, index) => (
                        <div key={index} className="col-lg-4" style={{ marginBottom: "20px" }}>
                            <h5 style={{ borderBottom: "1px solid white", color: "white" }}>
                                {seccion.titulo}
                            </h5>
                            <ul className="nav flex-column">
                                {seccion.links.map((enlace, index) => (
                                    <li key={index} className="nav-item mb-2">
                                        <a href={enlace.link} className="nav-link text-white">
                                            {enlace.nombre}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
        </Container>
            )}
        </>
    );
}

export default Footer;