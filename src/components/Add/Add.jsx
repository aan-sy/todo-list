import styles from './Add.module.css';
import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

export default function Add({ onAdd }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: uuidv4(),
      text: value,
      status: 'todo',
      startTime: '',
      endTime: '',
      elapsed: '',
    })

    setValue('');
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" value={value} onChange={handleChange} />
      <button className={styles.btnAdd}><BsPlusLg /></button>
    </form>
  );
}

