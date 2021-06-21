import React from 'react';
import './Hospedagem.css';
import MenuOthers from '../../others/MenuOthers';
import Footer from '../../others/Footer';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';

function Hospedagem(){
    return (
        <div>
            <MenuOthers tipo="hospedagem"></MenuOthers>
            <div className="fundoHost">
                <Container>
                    <Row>
                        <Col sm>
                        <h3 class="titleClassFundoHead">Hospedagem de Sites</h3>
                        <div className="subClassFundoHead">
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '} Painel de Controle cPanel</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}+1Gbps de Uplink.</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Tráfego Ilimitado</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Hospedado no Brasil.</p>
                            
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Proteção DDoS/Dos/Flood.</p>
                        </div>
                        </Col>
                        <Col sm>
                            <img
                                alt="Painel de Controle cPanel"
                                src="/assets/img/cpanel-img.png"
                                className="d-inline-block imgLogoHospedagem"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="bg-color-container">
                <Container>
                    <div className="section-title">
                        <h3>Planos de Hospedagem de sites</h3>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started</h4>
                                <h3>R$9.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>2GB de disco</li>
                                    <li>2TB de Trafego</li>
                                    <li>2 Banco de Dados</li>
                                    <li>Proteção Ddos/Dos</li>
                                    <li>5 contas de email</li>
                                    <li>3 contas de FTP</li>
                                    <li>Backup Automatico</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=17" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Business</h4>
                                <h3>R$19.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>8GB de disco</li>
                                    <li>10TB de Trafego</li>
                                    <li>5 Banco de Dados</li>
                                    <li>Proteção Ddos/Dos</li>
                                    <li>10 contas de email</li>
                                    <li>7 contas de FTP</li>
                                    <li>Backup Automatico</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=18" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Premium</h4>
                                <h3>R$34.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>15GB de disco</li>
                                    <li>20TB de Trafego</li>
                                    <li>15 Banco de Dados</li>
                                    <li>Proteção Ddos/Dos</li>
                                    <li>20 contas de email</li>
                                    <li>15 contas de FTP</li>
                                    <li>Backup Automatico</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=19" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated</h4>
                                <h3>R$49.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>40GB de disco</li>
                                    <li>Trafego Ilimitado</li>
                                    <li>Banco de Dados Ilimitado</li>
                                    <li>Proteção Ddos/Dos</li>
                                    <li>Contas de email Ilimitado</li>
                                    <li>Contas de FTP Ilimitado</li>
                                    <li>Backup Automatico</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=20" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  

            <Footer />
        </div>
        );
}

export default Hospedagem;