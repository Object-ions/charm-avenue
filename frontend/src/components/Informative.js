import { Container } from 'react-bootstrap';
import promise1 from '../assets/images/promise1.png';
import promise2 from '../assets/images/promise2.png';

const Informative = () => {
  return (
    <Container className="Informative">
      <div className="item-wrapper" style={{ background: `url(${promise1})` }}>
        <h3> Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nostrum
          est aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="item-wrapper" style={{ background: `url(${promise2})` }}>
        <h3> Lorem Ipsum</h3>
        <p>
          rem ea sunt hic consequatur distinctio animi non accusamus vitae!
          Eaque, deserunt consequuntur illum exercitationem ut in nisi. Lorem,
        </p>
      </div>
    </Container>
  );
};

export default Informative;
