import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import dados from '../datasets/paraiba_top30.json';

function Top3Cards() {

    const top3 = [...dados]
        .sort((a, b) => b.qt_mat_bas - a.qt_mat_bas)
        .slice(0, 3);

    return (

        <Row className="mt-5 justify-content-center">

            {top3.map((ie) => (

                <Col md={4} key={ie.co_entidade}>

                    <Card className="mb-3 shadow text-center">

                        <Card.Body>

                            <Card.Title>
                                {ie.no_entidade}
                            </Card.Title>

                            <Card.Text>
                                Município: {ie.no_municipio}
                            </Card.Text>

                            <Card.Text>
                                Matrículas: {ie.qt_mat_bas}
                            </Card.Text>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    );
}

export default Top3Cards;