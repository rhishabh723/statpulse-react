import { NavLink } from 'react-router-dom';
import './Sidebar.css';

/**
 * items: [{ to: string, label: string }]
 * accent: 'f1' | 'nba'
 */
export default function Sidebar({ items, accent = 'f1', title }) {
  return (
    <nav className={`sidebar sidebar--${accent}`} aria-label={title || 'Section navigation'}>
      {title && <div className="sidebar-title">{title}</div>}
      <ul className="sidebar-list">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' sidebar-link--active' : ''}`
              }
              end
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
