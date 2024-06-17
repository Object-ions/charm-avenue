import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/images/bg.png';

const AboutScreen = () => {
  return (
    <Container className="about-us">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>About Charm Avenue Jewelry</h2>
          <p style={{ fontFamily: 'Crimson Tex' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
          <p style={{ fontFamily: 'Crimson Tex' }}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
            dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
            quam. In scelerisque sem at dolor. Maecenas mattis.
          </p>
          <Button>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </Col>
        <Col md={6}>
          <Image src={aboutImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
