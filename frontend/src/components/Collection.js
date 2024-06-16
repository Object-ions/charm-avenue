import { Container, Image } from 'react-bootstrap';
import limitedEdition from '../assets/images/limited_edition.png';
import necklaces from '../assets/images/necklaces.png';
import rings from '../assets/images/rings.png';
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <Container className="Collection">
      <h2>Lorem ipsum dolor.</h2>
      <div className="images">
        <div className="item-wrapper">
          <img src={necklaces} alt="necklaces" />
          <Link>
            <h4>Necklaces</h4>
          </Link>
        </div>
        <div className="item-wrapper">
          <img src={rings} alt="rings" />
          <Link>
            <h4>Rings</h4>
          </Link>
        </div>
        <div className="item-wrapper">
          <img src={limitedEdition} alt="limited edition" />
          <Link>
            <h4>Limited Edition</h4>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
