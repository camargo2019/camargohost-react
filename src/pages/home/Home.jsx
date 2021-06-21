import React from 'react';
import './Home.css';
import { 
    Container,
    Row,
    Col,
    Card,
    Button
 } from 'react-bootstrap';
import MenuOthers from '../../others/MenuOthers';
import Footer from '../../others/Footer';

function Home(){
    return (
        <div>
            <MenuOthers tipo="home"></MenuOthers>
            <div className="fundo">
                <Container>
                    <Row>
                        <Col sm>
                        <h3 class="titleClassFundoHead">Multi Theft Auto</h3>
                        <div className="subClassFundoHead">
                            {/*<p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle checkVerde" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>{' '}100% Sem Lag.</p>*/}
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
                            <p>
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=22" class="primary-btn">Teste Grátis</a>
                            </p>
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
                        <h3>Nossos Principais Serviços</h3>
                    </div>
                    <Row>                        
                    <Col sm>
                        <Card className="boxCard text-center">
                            <Card.Body>
                                <Card.Img variant="top" src="/assets/img/mta_logo.png" />
                                <hr />
                                <Card.Title className="titleCard">Multi Theft Auto</Card.Title>
                                <Card.Text>
                                    Evestimos em servidores de alta qualidade brasileiro e canadense,
                                    para você melhor jogar com seus colegas com 100% sem lag.
                                </Card.Text>
                                <Button variant="primary" href="/mta">Ver Planos</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card className="boxCard text-center">
                            <Card.Body>
                                <Card.Img variant="top" src="/assets/img/hero-vps-hosting.svg" />
                                <hr />
                                <Card.Title className="titleCard">Virtual Private Server</Card.Title>
                                <Card.Text>
                                    Evestimos em servidores de alta qualidade brasileiro e canadense,
                                    para você melhor jogar com seus colegas com 100% sem lag.
                                </Card.Text>
                                <Button variant="primary" href="/vps">Ver Planos</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card className="boxCard text-center">
                            <Card.Body>
                                <Card.Img variant="top" src="/assets/img/cmrstreaming.png" />
                                <hr />
                                <Card.Title className="titleCard">Streaming de Áudio</Card.Title>
                                <Card.Text>
                                    Evestimos em servidores de alta qualidade brasileiro e canadense,
                                    para você melhor jogar com seus colegas com 100% sem lag.
                                </Card.Text>
                                <Button variant="primary" href="/streaming">Ver Planos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    </Row>
                </Container>
            </div>

            <div className="fundoClientes">
                <Container>
                    <Row className="itensHome">
                        <Col>
                            <div className="itemHome">
                                <div className="icone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </div>
                                <div className="title-counter">134</div>
                                <div className="subtitleItem">Clientes</div>
                            </div>
                        </Col>

                        <Col>
                            <div className="itemHome">
                                <div className="icone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                                    </svg>
                                </div>
                                <div className="title-counter">34</div>
                                <div className="subtitleItem">Domínios</div>
                            </div>
                        </Col>

                        <Col>
                            <div className="itemHome">
                                <div className="icone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                                    </svg>
                                </div>
                                <div className="title-counter">14</div>
                                <div className="subtitleItem">Servidores</div>
                            </div>
                        </Col>

                        <Col>
                            <div className="itemHome">
                                <div className="icone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                                    </svg>
                                </div>
                                <div className="title-counter">217</div>
                                <div className="subtitleItem">Instalações</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="bg-color-container">
                <Container>
                    <div className="section-title">
                        <h3>Planos mais vendidos!</h3>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Started - Multi Theft Auto</h4>
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
                                <h4>Business - Streaming</h4>
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
                                <h4>Premium - Multi Theft Auto (BR)</h4>
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
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=9" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="planoItem">
                                <h4>Dedicated Rubi - Multi Theft Auto (BR)</h4>
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
                                <a href="https://sac.camargohost.com.br/cart.php?a=add&amp;pid=12" class="primary-btn">Assinar Plano</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>            

            <Footer />
        </div>
    );
}

export default Home;
