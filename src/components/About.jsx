import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import '../Styles/about.css'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <Image src="/assets/img/winter.jpg" />
                    <h2 className="heading">Winter Adventures in Pakistan</h2>
                </div>
                <Container>
                    <Row>
                        <Col xs={12} sm={{ span: 8, offset: 2 }}>
                            <Image src="/assets/img/travel.jpg" className="about-pc" rounded />
                            <h3>Discover Pakistan's Winter Wonderland</h3>

                            <p>Welcome to Pakistan's premier travel agency, where we specialize in showcasing the breathtaking beauty and rich cultural heritage of our beloved country. From the majestic peaks of the Karakoram to the ancient ruins of Mohenjo-daro, we're here to help you explore every corner of Pakistan.</p>

                            <p>Our team of experienced travel experts is passionate about sharing the authentic Pakistani experience with travelers from around the world. We believe in sustainable tourism that benefits local communities while preserving our natural and cultural heritage.</p>

                            <p>Whether you're planning to trek through the snow-covered Hunza Valley, explore the historic streets of Lahore, or experience the vibrant culture of Karachi, we're here to make your journey unforgettable. Our carefully curated packages ensure you get the most out of your Pakistani adventure while experiencing the warm hospitality that our country is known for.</p>
                        </Col>
                    </Row>
                </Container>

                <div className="team">
                    <Container>
                        <h1 className="text-center">Our Team</h1>
                        <h5 className="text-center">Meet the passionate team behind your Pakistani adventures</h5>
                        <Row className="show-grid text-center">
                            <Col xs={12} sm={4} className="person-wrapper">
                                <Image src="/assets/img/person1.jpg" roundedCircle className="profile-pic" />
                                <h3>Ahmed Khan</h3>
                                <h5>Founder and Director</h5>
                                <p>"With over 15 years of experience in Pakistan's tourism industry, I'm passionate about showcasing our country's incredible diversity and helping travelers create unforgettable memories."</p>
                            </Col>

                            <Col xs={12} sm={4} className="person-wrapper">
                                <Image src="/assets/img/person3.jpg" roundedCircle className="profile-pic" />
                                <h3>Fatima Ali</h3>
                                <h5>Senior Travel Consultant</h5>
                                <p>"As a certified mountain guide and travel expert, I specialize in creating authentic experiences in Northern Pakistan, from the Karakoram to the Himalayas."</p>
                            </Col>

                            <Col xs={12} sm={4} className="person-wrapper">
                                <Image src="/assets/img/person2.jpg" roundedCircle className="profile-pic" />
                                <h3>Zainab Hassan</h3>
                                <h5>Cultural Experience Specialist</h5>
                                <p>"My focus is on cultural tourism and heritage sites. I love helping travelers understand Pakistan's rich history and diverse cultural traditions."</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}