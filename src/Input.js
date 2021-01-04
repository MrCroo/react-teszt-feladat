import React, {useState} from 'react';

export default function Input({ onSetTodo }) {
  const [ todo, setTodo] = useState("");

  function add() {
    onSetTodo(todo);
    setTodo("");
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type="button" className="btn btn-outline-success" onClick={add}>Add</button>
    </div>
  );
}