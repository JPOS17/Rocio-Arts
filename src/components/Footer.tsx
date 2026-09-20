import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Rocio Ortiz Studio</p>
          <p className="site-footer__tagline">
            Faith-inspired art for the heart and home
          </p>
        </div>
        {/* <div className="site-footer__links">
          <h4>Gallery</h4>
          <Link to="/prints">Prints</Link>
          <Link to="/originals">Originals</Link>
          <Link to="/faith">Faith Series</Link>
        </div> */}
        <div className="site-footer__links">
          <h4>Studio</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        {/* <div className="site-footer__links">
          <h4>Info</h4>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Returns</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div> */}
        <div className="site-footer__social">
          <h4>Follow Along</h4>
          <a
            href="https://www.instagram.com/rocioortiz.art"
            target="_blank"
            rel="noreferrer"
            className="site-footer__ig"
          >
            <FaInstagram size={20} />
            @rocioortizstudio
          </a>

          <a
            href="https://www.facebook.com/rocioortiz.art"
            target="_blank"
            rel="noreferrer"
            className="site-footer__ig"
          >
            <FaFacebookF size={20} />
            @rocioortizstudio
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>
          © {new Date().getFullYear()} Rocio Ortiz Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
