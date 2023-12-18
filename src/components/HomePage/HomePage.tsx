import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>РЕД ОС</h1>
        <h2>
          Российская операционная система общего назначения для серверов и
          рабочих станций
        </h2>
        <hr />
        <h2>Тестовое задание выполнил Кирильчук Александр</h2>
      </div>
      <img src="./laptops-icons.svg" alt="Laptops Icon" />
    </div>
  );
};

export default HomePage;
