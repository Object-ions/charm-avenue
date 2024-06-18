import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice'; // use a single query hook
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import TagsFilter from '../components/TagsFilter'; // import TagsFilter

const ProductsHomeScreen = () => {
  const { keyword, pageNumber, tag } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    tag,
  });

  return (
    <>
      <TagsFilter /> {/* add TagsFilter component */}
      {!keyword && !tag ? ( // conditionally show ProductCarousel based on keyword and tag
        <ProductCarousel />
      ) : (
        <Link to="/products" className="btn mb-4">
          Back to Jewelry Collection
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Our Jewelry Collection</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
            tag={tag} // pass tag to Paginate
          />
        </>
      )}
    </>
  );
};

export default ProductsHomeScreen;
