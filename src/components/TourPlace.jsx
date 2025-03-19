import React, { Component } from 'react';
import { Container, Col, Button, Row, Card } from 'react-bootstrap';
import '../Styles/home.css'

export default class TourPlace extends Component {
    render() {
        return (
            <Container>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="place">
                        <Card>
                            <Card.Img variant="top" src="/assets/img/places/spain.jpg" alt="Spain" />
                            <Card.Body>
                                <Card.Title>Spain</Card.Title>
                                <Card.Text>
                                    Madrid, Barcelona • 9 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you'll be able to take a guided tour through the city's places of interests and museums.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={4} className="place">
                        <Card>
                            <Card.Img variant="top" src="/assets/img/places/england.jpg" alt="United Kingdom" />
                            <Card.Body>
                                <Card.Title>United Kingdom</Card.Title>
                                <Card.Text>
                                    England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you'll be able to take a guided tour through the city's places of interests and museums.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={4} className="place">
                        <Card>
                            <Card.Img variant="top" src="/assets/img/places/turkey.jpg" alt="Turkey" />
                            <Card.Body>
                                <Card.Title>Turkey</Card.Title>
                                <Card.Text>
                                    Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you'll be able to take a guided tour through the city's places of interests and museums.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}