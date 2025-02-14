import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import BarraDeNavegacion from "./BarraNavegacion";
import { Link } from "react-router";

const Esgrima = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/esgrima.json");
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
          <div className="col-3 d-flex align-items-center">
            <div className="barra-container w-100 pt-5">
              {datos.cursos.map((curso, idx) => (
                <div key={idx} className="Curso">
                      <Link to={`/cursos-disponibles/${curso.nombre}`} className="dropdown-item" style={{ color: "white", textDecoration: "none" }}>
                        {curso.nombre}
                      </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-9 border text-white">
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={datos.contenidoPrincipal.imagenPrincipal}
                    className="img-fluid border-end border-white pe-3"
                    alt="Clases de esgrima"
                  />
                </div>
                <div className="col-lg-8">
                  <h2 className="border-bottom border-white pb-3">
                    {datos.contenidoPrincipal.titulo}
                  </h2>
                  {datos.contenidoPrincipal.descripcion.map((linea, index) => (
                    <p key={index} className="mt-3">{linea}</p>
                  ))}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-8">
                  <div className="mb-4">
                    {datos.contenidoPrincipal.horario.map((horario, index) => (
                      <p key={index}>{horario}</p>
                    ))}
                  </div>
                  <div>
                    {datos.contenidoPrincipal.torneos.map((torneo, index) => (
                      <p key={index}>{torneo}</p>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    src={datos.contenidoPrincipal.imagenTorneo}
                    className="img-fluid border-start border-white ps-3"
                    alt="Competiciones de esgrima"
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

export default Esgrima;