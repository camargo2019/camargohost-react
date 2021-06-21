import React from 'react';
import './Vps.css';
import MenuOthers from '../../others/MenuOthers';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
 import Footer from '../../others/Footer';

function Vps(){
    return (
        <div>
            <MenuOthers tipo="vps"></MenuOthers>
            <div className="fundoVPS">
                <Container>
                    <Row>
                        <Col sm>
                        <h3 class="titleClassFundoHead">Virtual Private Server</h3>
                        <div className="subClassFundoHead">
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '} Painel de controle.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}1Gbps de Uplink.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Tráfego Ilimitado</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Proteção DDoS/Dos.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Hospedado no Brasil.</p>
                        </div>
                        </Col>
                        <Col sm>
                            <img
                                alt="Virtual Private Server"
                                src="/assets/img/hero-vps-hosting.svg"
                                className="d-inline-block imgLogoServer"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="bg-color-container">
                <Container>
                    <div className="section-title">
                        <h3>Planos de VPS</h3>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started</h4>
                                <h3>R$74.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>1 núcleo Ryzen/Xeon</li>
                                    <li>2GB de Memória RAM</li>
                                    <li>30GB de disco SSD </li>
                                    <li>Proteção DDoS/DoS</li>
                                    <li>
                                        <img
                                            alt="Sistema Operacional"
                                            src="/assets/img/sistemas-operacionais.png"
                                        />
                                    </li>
                                    

                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=23" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Business</h4>
                                <h3>R$149.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>2 núcleo Ryzen/Xeon</li>
                                    <li>4GB de Memória RAM</li>
                                    <li>40GB de disco SSD </li>
                                    <li>Proteção DDoS/DoS</li>
                                    <li>
                                        <img
                                            alt="Sistema Operacional"
                                            src="/assets/img/sistemas-operacionais.png"
                                        />
                                    </li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=24" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Premium</h4>
                                <h3>R$224.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>3 núcleo Ryzen/Xeon</li>
                                    <li>6GB de Memória RAM</li>
                                    <li>50GB de disco SSD </li>
                                    <li>Proteção DDoS/DoS</li>
                                    <li>
                                        <img
                                            alt="Sistema Operacional"
                                            src="/assets/img/sistemas-operacionais.png"
                                        />
                                    </li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=25" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated</h4>
                                <h3>R$299.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>4 núcleo Ryzen/Xeon</li>
                                    <li>8GB de Memória RAM</li>
                                    <li>60GB de disco SSD </li>
                                    <li>Proteção DDoS/DoS</li>
                                    <li>
                                        <img
                                            alt="Sistema Operacional"
                                            src="/assets/img/sistemas-operacionais.png"
                                        />
                                    </li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=26" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  

            <Footer />
        </div>
        );
}

export default Vps;