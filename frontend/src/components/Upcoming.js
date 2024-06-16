import { Container } from 'react-bootstrap';
import earring from '../assets/images/earring.png';

const Upcoming = () => {
  return (
    <Container className="Upcoming" style={{ background: `url(${earring})` }}>
      <h2>New Collection</h2>
      <h2>September 2024</h2>
    </Container>
  );
};

export default Upcoming;
