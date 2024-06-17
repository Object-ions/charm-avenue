import { Container } from 'react-bootstrap';
import earring from '../assets/images/earring.png';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  return (
    <Container className="Upcoming" style={{ background: `url(${earring})` }}>
      <Link to="/products">
        <h2>New Collection</h2>
      </Link>
      <Link to="/products">
        <h2>Spring 2024</h2>
      </Link>
    </Container>
  );
};

export default Upcoming;
