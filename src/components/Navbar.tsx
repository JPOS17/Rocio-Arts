import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import "../styles/components/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll to toggle solid background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Hero pages where navbar starts transparent
  const isHeroPage = location.pathname === "/";

  return (
    <header
      className={[
        "navbar",
        isHeroPage && !scrolled ? "navbar--transparent" : "navbar--solid",
        scrolled ? "navbar--scrolled" : "",
        menuOpen ? "navbar--open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="navbar__inner container">
        {/* Brand */}
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__brand-name">Rocio Ortiz</span>
          <span className="navbar__brand-sub">Studio</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink to="/" className="navbar__link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            About
          </NavLink>
          <NavLink to="/gallery" className="navbar__link">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="navbar__link navbar__link--cta">
            Contact
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="navbar__drawer" aria-hidden={!menuOpen}>
        <nav className="navbar__drawer-links" aria-label="Mobile navigation">
          <NavLink to="/" className="navbar__drawer-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__drawer-link">
            About
          </NavLink>
          <NavLink to="/gallery" className="navbar__drawer-link">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="navbar__drawer-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
