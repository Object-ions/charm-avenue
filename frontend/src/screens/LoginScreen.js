import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {
  useResetDataDestroyMutation,
  useResetDataImportMutation,
} from '../slices/resetSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPreparing, setIsPreparing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [resetDataDestroy] = useResetDataDestroyMutation();
  const [resetDataImport] = useResetDataImportMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp /*search params */ = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const handleAdminLogin = async () => {
    setEmail('admin@gmail.com');
    setPassword('ABC123!@#');
    setIsPreparing(true);
    await runDatabaseReset();
    setTimeout(() => {
      setIsPreparing(false);
    }, 3000);
  };

  const handleGuestLogin = () => {
    setEmail('guest@gmail.com');
    setPassword('ABC123!@#');
    setIsPreparing(true);
    setTimeout(() => {
      setIsPreparing(false);
    }, 3000);
    toast.success("Click 'Sign in'");
  };

  const runDatabaseReset = async () => {
    try {
      await resetDataDestroy().unwrap();
      await resetDataImport().unwrap();
      // toast.success('Database reset successfully');
      toast.success("Click 'Sign in'");
    } catch (error) {
      toast.error('Failed to reset database');
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {isPreparing ? (
          <Loader />
        ) : (
          <Button
            type="submit"
            variant="primary"
            className="mt-2"
            disabled={isLoading}
          >
            Sign In
          </Button>
        )}
        {isLoading && <Loader />}
      </Form>
      <Button
        variant="secondary"
        className="mt-3"
        onClick={handleAdminLogin}
        disabled={isPreparing || isLoading}
      >
        Use as Admin
      </Button>
      <Button
        variant="secondary"
        className="mt-3"
        onClick={handleGuestLogin}
        disabled={isPreparing || isLoading}
      >
        Use as Guest
      </Button>
      <Row className="py-3">
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register here
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
