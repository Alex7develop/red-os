import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated } from '../../features/authSlice';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/browse">Информация сервиса</Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Выйти</button>
          ) : (
            <Link to="/login">Войти</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
