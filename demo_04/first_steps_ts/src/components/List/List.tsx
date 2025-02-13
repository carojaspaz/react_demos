import React from 'react';
import './List.css';

type ListProps = {
  items: string[];
};

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


export default List;