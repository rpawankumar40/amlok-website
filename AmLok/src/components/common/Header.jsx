import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/siteData';
import logoImage from '../../assets/images/logo2.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="AmLok home">
          {/* <span className="brand-mark">AL</span>
          <span className="brand-text">AmLok</span> */}
          <img src={logoImage} alt='AL' />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary header-cta">
            Contact Us
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
