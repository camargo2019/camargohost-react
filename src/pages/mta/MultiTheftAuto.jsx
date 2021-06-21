import React from 'react';
import './MultiTheftAuto.css';
import MenuOthers from '../../others/MenuOthers';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
 import Footer from '../../others/Footer';

function MultiTheftAuto(){
    return (
        <div>
            <MenuOthers tipo="mta"></MenuOthers>
            <div className="fundo">
                <Container>
                    <Row>
                        <Col sm>
                        <h3 class="titleClassFundoHead">Multi Theft Auto</h3>
                        <div className="subClassFundoHead">
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}100% Sem Lag.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}+1Gbps de Uplink.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Proteção Anti Ddos/Dos</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Servidores Linux (Ubuntu).</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Servidores Brasileiros e Canadense.</p>
                        </div>
                        </Col>
                        <Col sm>
                            <img
                                alt="Multi Theft Auto logo"
                                src="/assets/img/mta_logo.png"
                                className="d-inline-block imgLogoMta"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="bg-color-container">
                <Container>
                    <div className="section-title">
                        <h3>Planos de Multi Theft Auto!</h3>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$9.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>50 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=7" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$9.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>50 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=1" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>


                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Business - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$19.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>100 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=8" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Business - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$14.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>100 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=2" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Premium - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$29.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>150 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=9" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Premium - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$19.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>150 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=3" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$34.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>200 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=10" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$24.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>200 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=4" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated Diamante - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$44.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>250 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=11" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated Diamante - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$29.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>250 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=5" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated Rubi - BR {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do brasil"
                                        src="/assets/img/flag-br.png"
                                    />
                                </h4>
                                <h3>R$59.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>300 Slots</li>
                                    <li>Ping 10~40ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Brasileiro</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=12" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated Rubi - CA {" "}
                                    <img
                                        width="30"
                                        alt="Bandeira do Canadá"
                                        src="/assets/img/flag-can.png"
                                    />
                                </h4>
                                <h3>R$34.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>300 Slots</li>
                                    <li>Ping 120~180ms</li>
                                    <li>Proteção DDos/Dos/Flood</li>
                                    <li>Armazenamento SSD</li>
                                    <li>FTP Web/FileZilla</li>
                                    <li>Acelerador & Compactador</li>
                                    <li>Banco de Dados Mysql</li>
                                    <li>Ativação Imediata</li>
                                    <li>Ping Estável</li>
                                    <li>Servidor Canadense</li>

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=5" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  

            <Footer />
        </div>
        );
}

export default MultiTheftAuto;