import React from 'react';

export default function Nav({ filters, filter, onChangeFilter }) {
  const handleClick = (e) => onChangeFilter(e.target.className);
  
  return (
    <nav>
      <ul>
        {filters.map((filter, i) => (
          <li key={i} className={filter} onClick={handleClick}>{filter}</li>
        ))}
      </ul>
    </nav>
  );
}

