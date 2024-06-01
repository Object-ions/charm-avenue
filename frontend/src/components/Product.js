import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`} alt={product.name}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} alt={product.name}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>

        <Card.Title as="div" className="product-title">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Title>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
