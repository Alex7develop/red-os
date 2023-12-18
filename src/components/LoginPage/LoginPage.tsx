import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsAuthenticated } from '../../features/authSlice';
import { Navigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogin = () => {
    dispatch(login());
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>ВОЙТИ ПО ЛОГИНУ</h2>
        <button className={styles.loginButton} onClick={handleLogin}>
          ВОЙТИ
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
