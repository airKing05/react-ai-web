import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

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
    pathName: 'Timer',
    path: '/layout/timer',
  },
  {
    pathName: 'Agents',
    path: '/layout/agents',
  },
  // {
  //   pathName: 'Page-4',
  //   path: '/layout/page-4',
  // },
  // {
  //   pathName: 'Page-5',
  //   path: '/layout/page-5',
  // },
  // {
  //   pathName: 'Page-6',
  //   path: '/layout/page-6',
  // },
  // {
  //   pathName: 'Page-7',
  //   path: '/layout/page-7',
  // },
  // {
  //   pathName: 'Page-8',
  //   path: '/layout/page-8',
  // },
  //   {
  //   pathName: 'Page-9',
  //   path: '/layout/page-9',
  // },
  // {
  //   pathName: 'Page-10',
  //   path: '/layout/page-10',
  // },
  // {
  //   pathName: 'Page-11',
  //   path: '/layout/page-11',
  // },
  // {
  //   pathName: 'Page-12',
  //   path: '/layout/page-12',
  // },
  // {
  //   pathName: 'Page-13',
  //   path: '/layout/page-13',
  // },
  // {
  //   pathName: 'Page-14',
  //   path: '/layout/page-14',
  // },
  // {
  //   pathName: 'Page-15',
  //   path: '/layout/page-15',
  // }
]

export default function Header() {
  const [userData, setUserData] = useState(() => {
    const userFromSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    return userFromSessionStorage || null;
  });
  const { pathname } = useLocation();
  console.log("location", pathname)
  const handleSignOut = () => {
    sessionStorage.removeItem('user');
    setUserData(null)
  }

  console.log("userData", userData)

  useEffect(() => {
    const userFromSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    setUserData(userFromSessionStorage);
  }, []);
  
  return (
    <nav className={`${pathname === '/' ? 'header__container-bg' : ''} header__container header__container-bg`}>
      <div className='header__logo'>
        <Link to="/">
          <h3>React-AI-Web</h3>
        </Link>
      </div>
      <div className='header__links'>
        {
          navigationPath.map((nav) => (
            <React.Fragment key={nav.pathName}>
              <NavLink
                to={nav.path}
                className={
                `${({ isActive }) => (isActive ? "active" : "inactive")} 
                nav-link 
                `
                }
                exact="true"
              >
                <span className='nav_text'>{nav.pathName}</span>
              </NavLink>
            </React.Fragment>
          ))
        }
      </div>
      <div className='header__auth_section'>
        <NavLink
          // to='/sign-in'
          to={userData?.email ? '/' : '/sign-in'} 
          className={`${({ isActive }) => (isActive ? "active" : "inactive")} nav-link`}
          exact="true"
        >
          {
            userData?.email ? <span className='nav_text' onClick={handleSignOut}>Sign Out</span> : <span className='nav_text'>Sign In</span>
          }
        </NavLink>
        <NavLink
          to='/sign-up'
          className={`${({ isActive }) => (isActive ? "active" : "inactive")} nav-link`}
          exact="true"
        >
          <span className='nav_text'>Sign Up</span>
        </NavLink>
      </div>
    </nav>
  );
}
