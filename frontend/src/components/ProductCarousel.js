import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { addCommas } from '../utils/addCommas';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="carousel-container">
          <h3>Out most loved pieces</h3>
          <Carousel pause="hover" className="mb-4">
            {products.map((product) => (
              <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <Image src={product.imageUrl} alt={product.name} fluid />
                  <Carousel.Caption className="carousel-caption">
                    <h2 className="text-white text-right">
                      {product.name} (${addCommas(product.price)})
                    </h2>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ProductCarousel;
