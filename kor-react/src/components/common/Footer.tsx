import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <h3>KOR &copy; 2022 - Mason Tuft</h3>
        <h3>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </h3>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="FB Icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
