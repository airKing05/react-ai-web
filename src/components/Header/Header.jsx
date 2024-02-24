import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const navigationPath = [
  {
    pathName: 'Chat',
    path: '/layout/chat',
  },
  {
    pathName: 'Calendar',
    path: '/layout/calendar',
  },
  {
    pathName: 'Page-3',
    path: '/layout/page-3',
  },
  {
    pathName: 'Page-4',
    path: '/layout/page-4',
  },
  {
    pathName: 'Page-5',
    path: '/layout/page-5',
  },
  {
    pathName: 'Page-6',
    path: '/layout/page-6',
  },
  {
    pathName: 'Page-7',
    path: '/layout/page-7',
  },
]

export default function Header() {
  return (
    <nav className='header__container'>
      {
        navigationPath.map((nav) => (
          <React.Fragment key={nav.pathName}>
            <NavLink
              to={nav.path}
              className={`${({ isActive }) => (isActive ? "active" : "inactive")} nav-link`}
              exact="true"
            > 
              <span className='nav_text'>{nav.pathName}</span>
            </NavLink>
          </React.Fragment>
        ))
      }
    </nav>
  );
}
