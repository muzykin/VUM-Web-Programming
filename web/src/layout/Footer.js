import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>NovaPets</strong><br/>
          <span>Adoption support, shelter partners, and happy endings.</span>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <Link to="/">Home</Link>
          <Link to="/about">How it works</Link>
          <Link to="/pets">Pets</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <span>© 2026 NovaPets</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;