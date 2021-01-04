import React from 'react';

export default function ListItem({ item }) {
  const { done, name } = item;

  if (done) {
    return <div className="custom-control custom-checkbox">
  <input type="checkbox" className="custom-control-input" id="customCheck1" checked/>
  <label className="custom-control-label" htmlFor="customCheck1" >{name}</label>
</div>;
  }
  return <div className="custom-control custom-checkbox">
  <input type="checkbox" className="custom-control-input" id="customCheck1" unchecked/>
  <label className="custom-control-label" htmlFor="customCheck1" >{name}</label>
</div>;
}