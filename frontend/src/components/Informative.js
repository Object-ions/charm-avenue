import { Container } from 'react-bootstrap';
import model1 from '../assets/images/model1.png';
import model2 from '../assets/images/model2.png';

const Informative = () => {
  return (
    <Container className="Informative">
      <div className="item-wrapper" style={{ background: `url(${model1})` }}>
        <h3> Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nostrum
          est aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi voluptate dolorem natus! Sunt enim dicta quibusdam ut quia
          fugiat mollitia.
        </p>
      </div>

      <div className="item-wrapper" style={{ background: `url(${model2})` }}>
        <h3> Lorem Ipsum</h3>
        <p>
          rem ea sunt hic consequatur distinctio animi non accusamus vitae!
          Eaque, deserunt consequuntur illum exercitationem ut in nisi. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          necessitatibus?
        </p>
      </div>
    </Container>
  );
};

export default Informative;
