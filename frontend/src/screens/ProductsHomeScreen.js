import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import TagFilterOffcanvas from '../components/TagFilterOffcanvas';
import { MdOutlineFilterList } from 'react-icons/md';

const ProductsHomeScreen = () => {
  const { keyword, pageNumber, tag } = useParams();
  const [show, setShow] = useState(false);

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    tag,
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const applyFilter = () => {};

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Our Jewelry Collection</h1>
        <Button variant="link" onClick={handleShow}>
          <MdOutlineFilterList size={24} />
        </Button>
      </div>
      <TagFilterOffcanvas
        show={show}
        handleClose={handleClose}
        applyFilter={applyFilter}
      />

      {!keyword && !tag ? (
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
