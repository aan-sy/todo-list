import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function Todo({ todo, onDelete }) {
  const [checked, setChecked] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { id, text } = todo;

  const handleDelete = () => {onDelete(id)}

  const handleChecked = () => {
    setChecked(checked => !checked);
    !checked && startTime !== '' && addEndTime();
  }

  const addStartTime = () => {
    const startTime = checkTime();
    setStartTime(startTime);
  }

  const addEndTime = () => {
    const endTime = checkTime();
    setEndTime(endTime);
  }

  const checkTime = () => {
    const time = new Date();
    let hours = time.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = time.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours} : ${minutes}`
  }

  return (
    <li>
      <div>
        <input id={id} type="checkbox" checked={checked} onChange={handleChecked} />
        <label htmlFor={id}>{text}</label>
        <button onClick={handleDelete}>
          <IoClose />
        </button>
      </div>
      <div>
        {startTime === '' && <button onClick={addStartTime}>Add Start Time</button>}
        {startTime !== '' && <span>{`시작 시간: ${startTime}`}</span> }
        {endTime !== '' && <span>{`완료 시간: ${endTime}`} </span>}
      </div>
    </li>
  );    
}

