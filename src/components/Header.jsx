import { NavLink } from 'react-router-dom';
import PulseMark from './PulseMark';
import './Header.css';

const NAV_LINKS = [
  { to: '/f1', label: 'F1', accent: 'f1' },
  { to: '/nba', label: 'NBA', accent: 'nba' },
];

export default function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        <PulseMark size={26} />
        <span className="brand-name">
          STAT<span className="brand-pulse">PULSE</span>
        </span>
      </NavLink>

      <nav className="primary-nav">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-pill nav-pill--${link.accent}${isActive ? ' nav-pill--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <NavLink to="/about" className="icon-link" title="About">
          About
        </NavLink>
        <NavLink to="/contact" className="icon-link" title="Contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
