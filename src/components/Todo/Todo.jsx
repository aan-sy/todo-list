import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status, startTime, endTime, elapsed } = todo;

  const handleDelete = () => {onDelete(todo)}

  const handleStartTime = () => {
    const startTime = checkTime();
    onUpdate({...todo, startTime});
  }

  const handleChecked = (e) => {
    const status = e.target.checked ? 'completed' : 'todo';
    if (startTime && e.target.checked) {
      const endTime = checkTime();
      const elapsed = calcElapsed(startTime, endTime);
      onUpdate({...todo, status, endTime, elapsed});
    } else{
      onUpdate({...todo, status});
    }
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
        {!!startTime && <span>시작 시간 <strong>{`${startTime[0]}`}</strong></span>}
        {(!!endTime && status === 'completed') && <span>완료 시간 <strong>{`${endTime[0]}`}</strong></span>}
        {(!!elapsed && status === 'completed') && <span>걸린 시간 <strong>{`${elapsed}`}</strong></span>}
      </div>
    </li>
  );    
}

function checkTime() {
  const time = new Date();
  const elpasedTime = time.getTime();

  let hour = time.getHours();
  hour = hour < 10 ? `0${hour}` : hour;

  let minutes = time.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return [`${hour} : ${minutes}`, elpasedTime];
}

function calcElapsed(startTime, endTime) {
  const start = startTime[1];
  const end = endTime[1];
  const elapsedInMin = Math.floor((end - start) / 1000 / 60);
  
  let hour = Math.floor(elapsedInMin / 60);
  hour = (hour === 0) ? `` : `${hour}시간`;

  let min = elapsedInMin % 60;
  min = (min === 0) ? `` : `${min}분`;

  return hour+min;
}

