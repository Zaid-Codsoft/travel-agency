import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../Styles/formcontact.css';

export default class FormContact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', this.state);
    }

    render() {
        return (
            <Form className="form-element" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        );
    }
}