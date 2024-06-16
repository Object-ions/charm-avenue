import { Container } from 'react-bootstrap';
import asset1 from '../assets/images/asset1.png';
import asset2 from '../assets/images/asset2.png';
import asset3 from '../assets/images/asset3.png';
import asset4 from '../assets/images/asset4.png';

const PromiseComponent = () => {
  return (
    <Container className="Promise">
      <h1>Our Promise</h1>
      <div className="promise-grid">
        <div className="promise-item">
          <div className="image-wrapper">
            <img src={asset1} alt="promise" />
            <h6>Free worldwide shipping & returns</h6>
          </div>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={asset2} alt="promise" />
          </div>
          <h6>Ethically sourced and crafted</h6>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={asset3} alt="promise" />
          </div>
          <h6>Recycled post-consumer gold</h6>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={asset4} alt="promise" />
          </div>
          <h6>Sustainable lab-grown diamonds</h6>
        </div>
      </div>
    </Container>
  );
};

export default PromiseComponent;
