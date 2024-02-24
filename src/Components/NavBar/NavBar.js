// NavBar.js

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { AuthContext, FirebaseContext } from '../../Store/Contex';

function NavBar() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <div className='nav-right'>
        {user ? (
          <span className='user-info'>
            Welcome, <strong>{user.displayName}</strong>
          </span>
        ) : (
          <span className='login-btn' onClick={() => navigate('/login')}>
            Login
          </span>
        )}
        <img
          className='avatar'
          src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
          alt='User Avatar'
        />
        {user && (
          <span
            className='logout-btn'
            onClick={() => {
              firebase.auth().signOut();
              navigate('/');
            }}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
}

export default NavBar;



