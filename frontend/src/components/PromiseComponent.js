import { Container } from 'react-bootstrap';
import img1 from '../assets/images/1.png';

const PromiseComponent = () => {
  return (
    <Container className="Promise">
      <h1>Our Promise</h1>
      <div className="promise-grid">
        <div className="promise-item">
          <div className="image-wrapper">
            <img src={img1} alt="promise" />
            <h6>Free worldwide shipping & returns</h6>
          </div>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={img1} alt="promise" />
          </div>
          <h6>Ethically sourced and crafted</h6>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={img1} alt="promise" />
          </div>
          <h6>Recycled post-consumer gold</h6>
        </div>

        <div className="promise-item">
          <div className="image-wrapper">
            <img src={img1} alt="promise" />
          </div>
          <h6>Sustainable lab-grown diamonds</h6>
        </div>
      </div>
    </Container>
  );
};

export default PromiseComponent;
