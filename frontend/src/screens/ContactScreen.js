import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import aboutImage from '../assets/images/bg.png';

const ContactScreen = () => {
  return (
    <Container className="contact-screen">
      <Row className="align-items-center" style={{ fontFamily: 'Crimson Tex' }}>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
          </p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={6}>
          <img src={aboutImage} alt="Contact Us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
