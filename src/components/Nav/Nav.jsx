import styles from './Nav.module.css'
import React from 'react';

export default function Nav({ filters, onChangeFilter }) {
  const handleClick = (e) => onChangeFilter(e.target.dataset.filter);

  const setSelected = (e) => {
    if (e.target.localName !== 'li') return;
    document.querySelector(`.${styles.selected}`).classList.remove(styles.selected);
    e.target.classList.add(styles.selected);
  }
  
  return (
    <nav>
      <ul className={styles.filterGroup} onClick={setSelected}>
        {filters.map((filter, i) => (
          filter === 'all' ? 
            <li className={`${styles.filterMenu} ${styles.selected}`}  key={i} data-filter={filter} onClick={handleClick}>{filter}</li> :
            <li className={`${styles.filterMenu}`}  key={i} data-filter={filter} onClick={handleClick}>{filter}</li>
        ))}
      </ul>
    </nav>
  );
}

