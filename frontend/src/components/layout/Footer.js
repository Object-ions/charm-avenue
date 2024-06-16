import { Link } from 'react-router-dom';
import footerImage from '../../assets/images/footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ background: `url(${footerImage})` }}>
      <div className="footer-text">
        <h2>Charm Avenue </h2>
        <div className="visit-us">
          <h4>Location</h4>
          <p>
            208 W San Francisco St, Ste B
            <br />
            Santa Fe, NM 87501
          </p>
          <p>(505) 983-9774</p>
          <p>
            Sun - Fri : 10 AM - 6 PM
            <br />
            Saturday : Closed
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
          <Link to={'/collections'}>Skincare Collection</Link>
          <Link to={'/technology'}>Technology</Link>
          <Link to={'/treatments'}>Treatments</Link>
          <Link to={'/about'}>About</Link>
        </div>
        <div className="news-letter">
          <h4>Join Our News Letter!</h4>
          <label>Email Address:</label>
          <input type="email" />
          <button>Subscribe</button>
        </div>
        <p className="copy">Charm Avenue Jewelry &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
