import { Carousel } from "react-bootstrap"

export default function Carrousel() {
    return (
        <>
        <Carousel className="mb-4">
        <Carousel.Item>
          <img className="d-block w-100" src="./Carousel/Mancuernas.jpg" alt="First slide"/>
          <Carousel.Caption className="bg-dark">
            <h3>Gran espacio.</h3>
            <p>Disfruta de la sensación del ejercicio sin agobios de espacio.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className="d-block w-100" src="./Carousel/Piscina.jpg" alt="Second slide"/>
          <Carousel.Caption className="bg-dark">
            <h3>Piscina Royal</h3>
            <p>Piscina de más de 50m3 de agua climatizada</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className="d-block w-100" src="./Carousel/Paddle.jpg" alt="Third slide"/>
          <Carousel.Caption className="bg-dark">
            <h3>Pista de padel</h3>
            <p>Premium sensation</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}