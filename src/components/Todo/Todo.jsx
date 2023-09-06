import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

// todo - 걸린 시간 나타내보기
export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status, startTime, endTime } = todo;

  const handleDelete = () => {onDelete(todo)}

  const handleChecked = (e) => {
    const status = e.target.checked ? 'completed' : 'todo';
    if (startTime && e.target.checked) {
      let endTime = checkTime();
      onUpdate({...todo, status, endTime});
    } else{
      onUpdate({...todo, status});
    }
  }

  const handleStartTime = () => {
    const startTime = checkTime();
    onUpdate({...todo, startTime});
  }

  return (
    <li>
      <div>
        <input id={id} type="checkbox" checked={status === 'completed'} onChange={handleChecked} />
        <label htmlFor={id}>{text}</label>
        <button onClick={handleDelete}><IoClose /></button>
      </div>
      <div>
        {!!startTime || <button onClick={handleStartTime}>시작 시간 저장</button>}
        {!!startTime && <span>시작 시간 <strong>{`${startTime}`}</strong></span>}
        {(status === 'completed') && <span>완료 시간 <strong>{`${endTime}`}</strong></span>}
      </div>
    </li>
  );    
}

function checkTime() {
  const time = new Date();

  let hour = time.getHours();
  hour = hour < 10 ? `0${hour}` : hour;

  let minutes = time.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hour} : ${minutes}`;
}

