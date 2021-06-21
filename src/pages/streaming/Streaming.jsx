import React from 'react';
import './Streaming.css';
import MenuOthers from '../../others/MenuOthers';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
import Footer from '../../others/Footer';

function Streaming(){
    return (
        <div>
            <MenuOthers tipo="streaming"></MenuOthers>
            <div className="fundoStreaming">
                <Container>
                    <Row>
                        <Col sm>
                        <h3 class="titleClassFundoHead">Streaming de Áudio</h3>
                        <div className="subClassFundoHead">
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '} Painel CmrStreaming</p>
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
                            </svg>{' '}Delay de 5seg.</p>
                            
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}Proteção DDoS/Dos/Flood.</p>
                        </div>
                        </Col>
                        <Col sm>
                            <img
                                alt="CmrStreaming"
                                src="/assets/img/cmrstreaming.png"
                                className="d-inline-block imgLogoStreaming"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="bg-color-container">
                <Container>
                    <div className="section-title">
                        <h3>Planos de streaming de áudio</h3>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started</h4>
                                <h3>R$9.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>2GB de disco</li>
                                    <li>200 Ouvintes</li>
                                    <li>Painel CmrStreaming</li>
                                    <li>Trafego Ilimitado</li>
                                    <li>Bitrate 320 Kbps</li>
                                    <li>AACPlus e MP3</li>
                                    <li>App Android</li>
                                    <li>Proteção contra Flood</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=13" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Business</h4>
                                <h3>R$19.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>5GB de disco</li>
                                    <li>700 Ouvintes</li>
                                    <li>Painel CmrStreaming</li>
                                    <li>Trafego Ilimitado</li>
                                    <li>Bitrate 320 Kbps</li>
                                    <li>AACPlus e MP3</li>
                                    <li>App Android</li>
                                    <li>Proteção contra Flood</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=14" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Premium</h4>
                                <h3>R$34.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>20GB de disco</li>
                                    <li>Ilimitados Ouvintes</li>
                                    <li>Painel CmrStreaming</li>
                                    <li>Trafego Ilimitado</li>
                                    <li>Bitrate 320 Kbps</li>
                                    <li>AACPlus e MP3</li>
                                    <li>App Android</li>
                                    <li>Proteção contra Flood</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=15" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated</h4>
                                <h3>R$49.99 <span>/ mês</span></h3>
                                <ul>
                                    <li>40GB de disco</li>
                                    <li>Ilimitados Ouvintes</li>
                                    <li>Painel CmrStreaming</li>
                                    <li>Trafego Ilimitado</li>
                                    <li>Bitrate 320 Kbps</li>
                                    <li>AACPlus e MP3</li>
                                    <li>App Android</li>
                                    <li>Proteção contra Flood</li>
                                </ul>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=16" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  


            <Footer />
        </div>
        );
}

export default Streaming;