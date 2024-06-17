import { Link } from 'react-router-dom';
import footerImage from '../../assets/images/footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ background: `url(${footerImage})` }}>
      <div className="footer-main">
        <div className="footer-text">
          <h2>Charm Avenue Jewelry</h2>
          <div className="visit-us">
            <h4>Location</h4>
            <p>
              1612 Main St, Ste B
              <br />
              San Francisco, CA 94114
            </p>
            <p>(415) 783-9974</p>
            <p>
              Sun - Fri : 10 AM - 6 PM
              <br />
              Sat - Sun : Closed
            </p>
          </div>
          <div className="footer-policies">
            <h4>Policies</h4>
            <Link to={'/privacy-policy'}>Privacy Policy</Link>
            <Link to={'/shipping-policy'}>Shipping Policy</Link>
            <Link to={'/return-policy'}>Return Policy</Link>
            <Link to={'/store-hours'}>Store Hours</Link>
          </div>
          <div className="navigation">
            <h4>Menu</h4>
            <Link to={'/profile'}>User Profile</Link>
            <Link to={'/collections'}>Jewelry Collection</Link>
            <Link to={'/treatments'}>Treatments</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact US</Link>
          </div>
          <div className="news-letter">
            <h4>Join Our News Letter!</h4>
            <label>Email Address:</label>
            <input type="email" />
            <button>Subscribe</button>
          </div>
          <p className="copy">Charm Avenue Jewelry &copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
