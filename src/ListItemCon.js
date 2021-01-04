import React from 'react';
import ListItem from './ListItem';

export default function ListItemContainer({ item, setDone }) {
  const { id, done } = item;
  return (
    <div onClick={() => setDone(id, !done)}>
      <ListItem item={item} />
    </div>
  );
}