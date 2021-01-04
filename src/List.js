import React from 'react';
import ListItemCon from './ListItemCon';

export default function List({ list, setDone, clearDone }) {
  return (
    <div >
      {list.map(listItem => (
        <ListItemCon
          item={listItem}
          setDone={setDone}
          key={listItem.id}
        />
      ))}
  <button type="button" className="btn btn-outline-danger" onClick={clearDone}>Delete</button>
</div>
  );
}