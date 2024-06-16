import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
