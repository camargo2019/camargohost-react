import React from 'react';
import './Footer.css';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';

export default Footer => 
    <div>
        <div class="footer-area">
            <Container>
                <Row>
                    <Col sm={5}>

                        <div className="footer__text-about">
                            <div className="footer__logo">
                                <a href="./home"><img src="/assets/img/logo_site.png" alt="logo" className="logoImgFooter" /></a>
                            </div>
                            <p>
                                CamargoHost foi fundada em 2021 por Gabriel Camargo (CEO), e passou por grandes evoluções, como inicio no mercado de games, e também aumento da sua quantidade de servidores, iniciando parcerias de servidores para fornecer uma qualidade de hospedagem brasileira e canadense!
                            </p>
                            <div className="footer__social">
                                <a href="//fb.com/EuUsoCamargoHost"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.youtube.com/channel/UCvbjoNKL-2qrLFFfkjOGBmQ"><i class="fa fa-youtube-play"></i></a>
                                <a href="//instagram.com/camargoHost"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </Col>


                    <Col sm={2}></Col>


                    <Col sm>
                        <div class="footer__text-widget">
                            <h5>Área do Cliente</h5>
                            <ul>
                                <li><a href="https://sac.camargohost.com.br/">Tickets e Comprovantes</a></li>
                                <li><a href="https://sac.camargohost.com.br/">Faturas Abertas</a></li>
                                <li><a href="https://sac.camargohost.com.br/">Afiliados</a></li>
                                <li><a href="https://sac.camargohost.com.br/">Meus Serviços</a></li>
                            </ul>
                        </div>
                    </Col>


                    <Col sm>
                        <div class="footer__text-widget">
                            <h5>Outros</h5>
                            <ul>
                                <li><a href="./streaming">Streaming</a></li>
                                <li><a href="./hospedagem">Hospedagem</a></li>
                                <li><a href="./vps">Virtual Private Server</a></li>
                                <li><a href="./mta">Multi Theft Auto</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="discord" onclick="window.open('https://discord.gg/bDJCN6z7EA');"></div>
        <div className="footer">
            <div className="footer-mensagem">Copyright ©2021 Todos os Direitos Reservados | Desenvolvido Por GabrielCMR Desenvolvimentos</div>
        </div>
    </div>