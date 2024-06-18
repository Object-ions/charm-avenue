import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <Container fluid className="CTA">
      <h2>Check out our Jewelry collection</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et, nisi
        optio quod tenetur, distinctio labore beatae voluptatibus molestiae
        excepturi laboriosam ipsa libero nihil quam. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Inventore, facere minus eum aperiam aut
        reprehenderit.
      </p>
      <button className="button">
        <Link to={'/products'}>Jewelry Collection</Link>
      </button>
    </Container>
  );
};

export default CTA;
