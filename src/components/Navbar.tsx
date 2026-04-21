import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import "../styles/components/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  const isHeroPage = location.pathname === "/";

  return (
    <header
      className={[
        "nav",
        isHeroPage && !scrolled ? "nav--transparent" : "nav--solid",
        scrolled ? "nav--scrolled" : "",
        menuOpen ? "nav--open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="nav__inner">
        {/* Brand */}
        <NavLink to="/" className="nav__brand">
          <span className="nav__brand-name">Rocio Ortiz</span>
          <span className="nav__brand-sub">Studio</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="nav__links" aria-label="Main navigation">
          <NavLink to="/" className="nav__link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/gallery" className="nav__link">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="nav__link nav__link--cta">
            Contact
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className="nav__hamburger"
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
      <div className="nav__drawer" aria-hidden={!menuOpen}>
        <nav className="nav__drawer-links" aria-label="Mobile navigation">
          <NavLink to="/" className="nav__drawer-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="nav__drawer-link">
            About
          </NavLink>
          <NavLink to="/gallery" className="nav__drawer-link">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="nav__drawer-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
