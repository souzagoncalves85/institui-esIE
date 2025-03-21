import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Sobre o Projeto</h5>
                        <p>
                            Este é um projeto acadêmico desenvolvido com ReactJS, usando React-Bootstrap e Formik para gestão de Instituições de Ensino.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5>Links Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/instituicoes" className="text-white text-decoration-none">Instituições</a></li>
                            <li><a href="/sobre" className="text-white text-decoration-none">Sobre</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contato</h5>
                        <p>
                            <i className="fas fa-envelope me-2"></i> contato@universidade.com
                            <br />
                            <i className="fas fa-phone me-2"></i> (83) 99999-0000
                        </p>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <p className="text-center mb-0">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </Container>
        </footer>
    );
};

export default Footer;
