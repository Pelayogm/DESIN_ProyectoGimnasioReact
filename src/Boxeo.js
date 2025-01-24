import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Boxeo = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/boxeo.json");
      const data = await response.json();
      setDatos(data);
    };

    fetchDatos();
  }, []);

  if (!datos) {
    return <div>Cargando contenido...</div>;
  }

  return (
    <div>
      {/* CONTENIDO PRINCIPAL */}
      <div className="container-fluid containerPrincipal">
        <div className="row bg-dark">
          {/* Barra izquierda */}
          <div className="col col-3 col-md-3 col-lg-3 d-flex align-items-center text-white">
            <div className="barra-container w-100 pt-5">
              {datos.cursos.map((curso, idx) => (
                <div key={idx} className="Curso" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  <a href={curso.href} className="dropdown-item" style={{ color: "white", textDecoration: "none" }}>
                    {curso.nombre}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contenido principal */}
          <div className="col col-9 col-md-9 col-9 border text-white">
            <div className="container-fluid mt-5 text-white">
              <div className="row">
                <div className="col col-lg-4 col-md-4 col-4">
                  <img
                    className="img-responsive"
                    src={datos.contenidoPrincipal.imagenPrincipal}
                    style={{ borderRight: "2px solid white", paddingRight: "20px" }}
                    width="400px"
                    alt="Curso Boxeo"
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
                    alt="Torneo Boxeo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxeo;
