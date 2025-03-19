import React, { Component } from 'react';
import { Container, Col, Image, Button, Row, Card } from 'react-bootstrap';
import '../Styles/services.css'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <Image src="/assets/img/services.jpg" />
                    <h2 className="heading">Our services</h2>
                    <h5 className="sub-heading">With us you'll find a perfect destination among hundreds available.</h5>
                </div>
                <Container>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={3} className="place">
                            <Card>
                                <Card.Body>
                                    <i className="fas fa-plane-departure fa-7x"></i>
                                    <h3>AIR TICKETS</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={3} className="place">
                            <Card>
                                <Card.Body>
                                    <i className="fas fa-ship fa-7x"></i>
                                    <h3>VOYAGES & CRUISES</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={3} className="place">
                            <Card>
                                <Card.Body>
                                    <i className="fas fa-hotel fa-7x"></i>
                                    <h3>HOTEL BOOKINGS</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={3} className="place">
                            <Card>
                                <Card.Body>
                                    <i className="fas fa-sun fa-7x"></i>
                                    <h3>SUMMER TOURS</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}