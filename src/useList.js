import {useState} from 'react';

export default function useCheckoutList() {
  const [index, setIndex] = useState(1);
  const [list, setList] = useState([]);

  function addItem(itemName) {
    const item = {
      id: index,
      name: itemName
    };
    setIndex(prevIndex => prevIndex + 1);

    setList(prevList => [...prevList, item]);
  }

  function setDone(id, done) {
    setList(prevList => {
      return prevList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done
          };
        } else {
          return item;
        }
      });
    });
  }

  function clearDone() {
    setList(prevList => prevList.filter(item => !item.done));
  }

  return { list, addItem, setDone, clearDone };
}