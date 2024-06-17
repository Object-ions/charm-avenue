import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Badge,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
  Button,
  CloseButton,
} from 'react-bootstrap';
import { LuShoppingCart, LuUser, LuMenu, LuUserCog } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import SearchBox from '../SearchBox';
import { resetCart } from '../../slices/cartSlice';
import { useState } from 'react';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <Button variant="link" onClick={handleShow} className="menu-icon">
            <LuMenu size={24} />
          </Button>

          <LinkContainer to="/">
            <Navbar.Brand className="mx-auto">
              Charm Avenue Jewelry
            </Navbar.Brand>
          </LinkContainer>

          <Nav>
            {userInfo ? (
              <NavDropdown title={<LuUser size={24} />} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <LuUser size={24} /> Sign In
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title={<LuUserCog size={24} />} id="adminmenu">
                <LinkContainer to="/admin/product-list">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/user-list">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/order-list">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

            {!userInfo.isAdmin && (
              <LinkContainer to="/cart">
                <Nav.Link>
                  <LuShoppingCart size={24} />
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className="off-canvas">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <h3>
              <b>Menu</b>
            </h3>
          </Offcanvas.Title>
          <CloseButton
            aria-label="Close"
            onClick={handleClose}
            style={{ background: '#303f3c !important' }}
          >
            <IoMdClose />
          </CloseButton>
        </Offcanvas.Header>

        <Offcanvas.Header>
          <SearchBox handleClose={handleClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column" style={{ fontFamily: 'Crimson Text' }}>
            <LinkContainer to="/products" style={{ fontSize: '1.3rem' }}>
              <Nav.Link onClick={handleClose}>Jewelry Collection</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" style={{ fontSize: '1.3rem' }}>
              <Nav.Link onClick={handleClose}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" style={{ fontSize: '1.3rem' }}>
              <Nav.Link onClick={handleClose}>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
