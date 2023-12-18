import React from 'react';
import styles from './SortButton.module.css';

interface SortButtonProps {
  sortOrder: 'asc' | 'desc';
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, onClick }) => {
  return (
    <button className={styles.sortButton} onClick={onClick}>
      Сортировать {sortOrder === 'asc' ? 'А-Я' : 'Я-А'}
    </button>
  );
};

export default SortButton;
