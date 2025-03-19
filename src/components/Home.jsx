import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Image, Button, Row } from 'react-bootstrap';
import TourPlace from "./TourPlace";
import '../Styles/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Container>
                        <div className="jumbotron">
                            <h2>Experience Pakistan's Winter Magic</h2>
                            <h3>From snow-capped peaks to cultural treasures, discover the heart of Pakistan</h3>
                            <Link to="/services">
                                <Button variant="primary">Explore Tours</Button>
                            </Link>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="banner text-center">
                        <h2>Your Premier Travel Partner in Pakistan</h2>
                        <p>We combine local expertise with years of experience to create unforgettable journeys through Pakistan's most stunning destinations.</p>
                    </div>

                    <TourPlace />

                    <Row className="show-grid text-center">
                        <div className="testimonial">
                            <h1 className="text-center">What Our Travelers Say</h1>
                            <h5 className="text-center">Real experiences from our satisfied clients exploring Pakistan</h5>
                        </div>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p1.jpg" roundedCircle className="profile-pic" />
                            <h3>Sarah Khan</h3>
                            <p>"The winter tour to Hunza Valley was absolutely magical. The snow-covered peaks and local hospitality made it an unforgettable experience."</p>
                        </Col>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p2.jpg" roundedCircle className="profile-pic" />
                            <h3>Mohammed Ali</h3>
                            <p>"Our family trip to Naran Kaghan was perfectly organized. The winter activities and cultural experiences were exactly what we were looking for."</p>
                        </Col>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p3.jpg" roundedCircle className="profile-pic" />
                            <h3>Fatima Ahmed</h3>
                            <p>"The guided tour through the historic streets of Lahore was incredible. The winter weather made it perfect for exploring the city's rich heritage."</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}