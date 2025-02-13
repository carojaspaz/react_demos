import React from "react";

type ListProps = {
  items: string[];
};

const ComponenteA : React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ComponenteA;
