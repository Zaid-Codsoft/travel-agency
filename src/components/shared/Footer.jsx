import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../Styles/footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} sm={12} className="icons">
                                <div className="social-icons">
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/logo_facebook.png'} className="social-icon" />
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/logo_twiter.png'} className="social-icon" />
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/logo_google+.png'} className="social-icon" />
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/logo_linkedin.png'} className="social-icon" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="show-grid text-center">
                            <Col xs={12} sm={4} className="icons">
                                <Image src={process.env.PUBLIC_URL + '/assets/img/logo_place.png'} className="social-icon" />
                                <div className="info-footer">
                                    <h4>ADDRESS</h4>
                                    <p>123/21 First Street, Manchester, King Street</p>
                                    <p>Kingston, United Kingdom</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={4} className="icons">
                                <Image src={process.env.PUBLIC_URL + '/assets/img/logo_email.png'} className="social-icon" />
                                <div className="info-footer">
                                    <h4>EMAIL</h4>
                                    <p>info@company.com</p>
                                    <p>support@company.com</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={4} className="icons">
                                <Image src={process.env.PUBLIC_URL + '/assets/img/logo_phone.png'} className="social-icon" />
                                <div className="info-footer">
                                    <h4>PHONE</h4>
                                    <p>+345-677-554</p>
                                    <p>+345-677-554</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}