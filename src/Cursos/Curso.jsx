import {Card, Button, CardBody, CardTitle, Col} from 'react-bootstrap'

const Curso = ({data}) => {

    return (
        <>
        <Col md={3}>
            <Card className='h-100'>
                <Card.Img src={data.imagen} variant='top'/>
                <CardBody>
                    <CardTitle>{data.titulo}</CardTitle>
                    <Card.Text>{data.categoria}</Card.Text>
                    <Card.Text>{data.descripcion}</Card.Text>
                </CardBody>
                <Button>Ver detalles</Button>
            </Card>
        </Col>
        </>
    )

}

export default Curso;
