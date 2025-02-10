import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDeNavegacion from "./BarraNavegacion";

const Natacion = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/natacion.json");
      const data = await response.json();
      setDatos(data);
    };

    fetchDatos();
  }, []);

  if (!datos) {
    return <div>Cargando contenido...</div>;
  }

  return (
    <>
    <div>
      <div className="container-fluid containerPrincipal">
        <div className="row bg-dark">
          <div className="col col-3 col-md-3 col-lg-3 d-flex align-items-center">
            <div className="barra-container w-100 pt-5">
              {datos.cursos.map((curso, idx) => (
                <div key={idx} className="Curso">
                  <a href={curso.href} className="dropdown-item">
                    {curso.nombre}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col col-9 col-md-9 col-9 border text-white">
            <div className="container-fluid mt-5 text-white">
              <div className="row">
                <div className="col col-lg-4 col-md-4 col-4">
                  <img
                    className="img-responsive"
                    src={datos.contenidoPrincipal.imagenPrincipal}
                    style={{ borderRight: "2px solid white", paddingRight: "20px" }}
                    width="400px"
                    alt="Curso"
                  />
                </div>
                <div className="col col-8 col-md-8 col-lg-8 d-flex flex-column">
                  <h2
                    style={{
                      borderBottom: "1px solid white",
                      paddingBottom: "10px",
                    }}
                  >
                    {datos.contenidoPrincipal.titulo}
                  </h2>
                  <br />
                  {datos.contenidoPrincipal.descripcion.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col col-8 col-md-8 col-lg-8 d-flex flex-column">
                  <br />
                  {datos.contenidoPrincipal.horario.map((hora, index) => (
                    <p key={index}>{hora}</p>
                  ))}
                  <br />
                  {datos.contenidoPrincipal.torneos.map((torneo, index) => (
                    <p key={index}>{torneo}</p>
                  ))}
                </div>
                <div className="col col-lg-4 col-md-4 col-4">
                  <img
                    className="img-responsive"
                    src={datos.contenidoPrincipal.imagenTorneo}
                    style={{ borderLeft: "2px solid white", paddingLeft: "20px" }}
                    width="400px"
                    alt="Torneo Natación"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Natacion;