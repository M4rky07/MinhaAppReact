import { Row, Container, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "./Carrossel";

const Main = () => {

    let item = [
        {
            titulo: "Criança uniformizada",
            legenda: "Estudo no IFPB desde cedo!",
            img: "https://images.unsplash.com/photo-1698993082050-19ca94c62fb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "criança com usa prova nas mãos"
        },
        {
            titulo: "Menino sorridente",
            legenda: "Estudo no Antenor desde cedo!",
            img: "https://images.unsplash.com/photo-1727553957801-75bb27e98075?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "criança sorridente"
        },
        {
            titulo: "Criança com sinal de V",
            legenda: "Estudo na Dom Marcelo desde cedo!",
            img: "https://images.unsplash.com/photo-1620969910995-4bbe4eaa32c1?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "crianças sentadas em carteiras em uma sala de aula"
        }
    ];

    return (
        <main>
            <Container>

                <Carrossel itensCarrosel={item} />

                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

            </Container>
        </main>
    );
};

export default Main;