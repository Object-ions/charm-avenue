import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addCommas } from '../utils/addCommas';

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-3"
      style={{ borderRadius: '0', borderColor: '#303f3c' }}
    >
      <Link to={`/products/${product._id}`} alt={product.name}>
        <Card.Img src={product.image} variant="top" className="card-img-top" />
      </Link>
      <Card.Body className="card-body" style={{ color: '#303f3c' }}>
        <Link to={`/products/${product._id}`} alt={product.name}>
          <Card.Title
            as="div"
            className="product-title"
            style={{ color: '#303f3c' }}
          >
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text as="h4">${addCommas(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
