import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="foo">
      <div className="foo__inner">
        <div className="foo__brand">
          <p className="foo__name">Rocio Ortiz Studio</p>
          <p className="foo__tagline">
            Faith-inspired art for the heart and home
          </p>
        </div>
        <div className="foo__links">
          <h4>Gallery</h4>
          <a href="/prints">Prints</a>
          <a href="/originals">Originals</a>
          <a href="/faith">Faith Series</a>
        </div>
        <div className="foo__links">
          <h4>Studio</h4>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/process">My Process</a>
        </div>
        {/* <div className="foo__links">
          <h4>Info</h4>
          <a href="/shipping">Shipping Policy</a>
          <a href="/returns">Returns</a>
          <a href="/privacy">Privacy Policy</a>
        </div> */}
        <div className="foo__social">
          <h4>Follow Along</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="foo__ig"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.5"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            @rocioortizstudio
          </a>
        </div>
      </div>
      <div className="foo__bottom">
        <p>
          © {new Date().getFullYear()} Rocio Ortiz Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
