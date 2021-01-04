import React from "react";
import "./style.css";
import Input from './Input';
import List from './List';
import useList from './useList';

export default function App() {
  const {list, addItem, setDone, clearDone} = useList();
  return (
    <div>
        <h3>Todo App</h3>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col-sm">
                <Input onSetTodo={addItem} />
                <List list={list} setDone={setDone} clearDone={clearDone}/>
              </div>
            </div>
        </div>
    </div>
  );
}
