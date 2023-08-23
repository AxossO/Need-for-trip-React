import React, { useState } from "react";

const Item = ({ items, setArrayNumber, arrayNumber }) => {
  const deleteHandler = () => {
    const updatedItems = arrayNumber.filter((e) => e !== items);
    setArrayNumber(updatedItems);
  };
  const [checkbox, setCheckBox] = useState(false);

  const checkBoxHandler = () => {
    setCheckBox(!checkbox);
  };
  return (
    <div className="items">
      <input onClick={checkBoxHandler} type="checkbox"></input>
      <div
        className="holder"
        style={{ textDecoration: checkbox ? "line-through" : "" }}
      >
        {items}
      </div>
      
      <button onClick={deleteHandler} className="delete">
        X
      </button>
    </div>
  );
};

export default Item;
