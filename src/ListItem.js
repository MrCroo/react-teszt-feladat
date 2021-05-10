import React from 'react';

export default function ListItem({ item }) {
  const { done, name } = item;

  if (done) {
    return (
      <div>
        <input type="checkbox" id="customCheck1" checked />
        <label htmlFor="customCheck1">{name}</label>
      </div>
    );
  }
  return (
    <div>
      <input type="checkbox" id="customCheck1" unchecked />
      <label htmlFor="customCheck1">{name}</label>
    </div>
  );
}
