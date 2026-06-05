import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

const Carrossel = (props) => {
    let itensCarrosel = props.itensCarrosel;

    return (
        <Carousel>
            {itensCarrosel.map(({ legenda, img, titulo, descricao }, i) => {
                return (
                    <Carousel.Item key={i}>
                        <Image
                            className="carousel-img"
                            alt={legenda}
                            src={img}
                        />

                        <Carousel.Caption>
                            <h3>{titulo}</h3>
                            <p>{descricao}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default Carrossel;