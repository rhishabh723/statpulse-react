import { NavLink } from 'react-router-dom';
import './SubHeader.css';

/**
 * items: [{ to: string, label: string }]
 * accent: 'f1' | 'nba'
 */
export default function SubHeader({ items, accent = 'f1' }) {
  return (
    <div className={`sub-header sub-header--${accent}`}>
      <div className="sub-header-scroll">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sub-header-link${isActive ? ' sub-header-link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
