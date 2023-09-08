import styles from './Header.module.css'
import React from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth() + 1;
  const currDate = new Date().getDate();
  let currDay = new Date().getDay();
  switch(currDay) {
    case 0:
      currDay = '일';
      break;
    case 1:
      currDay = '월';
      break;
    case 2:
      currDay = '화';
      break;
    case 3:
      currDay = '수';
      break;
    case 4:
      currDay = '목';
      break;
    case 5:
      currDay = '금';
      break;
    case 6:
      currDay = '토';
  }

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>1 Day Planner</h1>
        <h2 className={styles.date}>{`${currYear}년 ${currMonth}월 ${currDate}일 ${currDay}요일`}</h2>
      </div>
      <button className={styles.btnMode} onClick={toggleDarkMode}>
        {darkMode ? <BiSolidSun /> : <BiSolidMoon />}
      </button>
    </header>
  );
}

