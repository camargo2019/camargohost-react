import React from 'react';
import './MenuOthers.css';
import { 
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Button } from 'react-bootstrap';

export default props =>
        <div>
            <div class="topMenu">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp svgWhatsApp" viewBox="0 0 25 25">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        (45) 9 9153-7449
                        </Col>
                        <Col sm={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mailbox svgWhatsApp" viewBox="0 0 25 25">
                                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            suporte@camargohost.com.br
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="background-transparent-navbar">
                    <Col className="displayFlex-Navbar" sm={4}>
                        <Navbar.Brand href="/home">
                        <img
                            alt="Logo"
                            src="/assets/img/logo.png"
                            width="220"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        </Navbar.Brand>
                        <Navbar.Toggle className="background-transparent-color-navbar" aria-controls="responsive-navbar-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-menu-button-wide" viewBox="0 0 16 16">
                            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
                            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </Navbar.Toggle>
                    </Col>
                    <Col className="justify-content-end" sm>
                        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
                            <Nav className="mr-auto menuHome">
                                {props.tipo === "home"
                                ? <Nav.Link href="/" className="active">Home</Nav.Link>
                                : <Nav.Link href="/" >Home</Nav.Link>
                                }
                                {props.tipo === "hospedagem"
                                ? <Nav.Link href="/hospedagem" className="active">Hospedagem</Nav.Link>
                                : <Nav.Link href="/hospedagem" >Hospedagem</Nav.Link>
                                }
                                {props.tipo === "streaming"
                                ? <Nav.Link href="/streaming" className="active">Streaming</Nav.Link>
                                : <Nav.Link href="/streaming" >Streaming</Nav.Link>
                                }
                                {props.tipo === "vps"
                                ? <Nav.Link href="/vps" className="active">VPS</Nav.Link>
                                : <Nav.Link href="/vps" >VPS</Nav.Link>
                                }
                                {props.tipo === "mta"
                                ? <Nav.Link href="/mta" className="active">Multi Theft Auto</Nav.Link>
                                : <Nav.Link href="/mta" >Multi Theft Auto</Nav.Link>
                                }

                                <Nav.Link href="https://sac.camargohost.com.br">
                                    <Button variant="primary" className="areadocliente-navbar-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>{' '}Área do Cliente
                                        </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
                </Row>
            </Container>
        </div>