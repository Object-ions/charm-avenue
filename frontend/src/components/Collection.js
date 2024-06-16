import { Container } from 'react-bootstrap';
import earrings1 from '../assets/images/earrings1.png';
import earrings2 from '../assets/images/earrings2.png';
import earrings3 from '../assets/images/earrings3.png';
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <Container className="Collection">
      <h2>Lorem ipsum dolor</h2>
      <div className="images">
        <div className="item-wrapper">
          <div className="image-container">
            <img src={earrings1} alt="necklaces" />
          </div>
          <Link to="#">
            <h4>YELLOW GOLD HOOP EARRINGS</h4>
            <p>Selene - $170</p>
          </Link>
        </div>
        <div className="item-wrapper">
          <div className="image-container">
            <img src={earrings2} alt="rings" />
          </div>
          <Link to="#">
            <h4>GOLD DROP EARRINGS</h4>
            <p>Dione - $200</p>
          </Link>
        </div>
        <div className="item-wrapper">
          <div className="image-container">
            <img src={earrings3} alt="limited edition" />
          </div>
          <Link to="#">
            <h4>TWO-TONE GOLD LOOP EARRINGS</h4>
            <p>Rhea - $210</p>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
