import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenu(false);

  // Kontrollon nëse je në landing page
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <img src="" alt="Logo" className="logo" />

      <button className="hamburger" onClick={() => setMenu(!menu)}>
        ☰
      </button>

      <div className={`menu ${menu ? "open" : ""}`}>
        <ul className="list">
          {/* Home */}
          <li>
            {isHome ? (
              <ScrollLink
                className="nav-link"
                to="hero"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            ) : (
              <Link className="nav-link" to="/#hero" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>

          {/* About */}
          <li>
            {isHome ? (
              <ScrollLink
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
              >
                About
              </ScrollLink>
            ) : (
              <Link className="nav-link" to="/#about" onClick={closeMenu}>
                About
              </Link>
            )}
          </li>

          {/* Services / Strehim */}
          <li>
            {isHome ? (
              <ScrollLink
                className="nav-link"
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
              >
                Services
              </ScrollLink>
            ) : (
              <Link className="nav-link" to="/#services" onClick={closeMenu}>
                Services
              </Link>
            )}
          </li>

          {/* Contact */}
          <li>
            {isHome ? (
              <ScrollLink
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
              >
                Contact
              </ScrollLink>
            ) : (
              <Link className="nav-link" to="/#contact" onClick={closeMenu}>
                Contact
              </Link>
            )}
          </li>

          {/* Strehim / Projects */}
          <li>
            <Link className="nav-link" to="/projects" onClick={closeMenu}>
              Strehim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
