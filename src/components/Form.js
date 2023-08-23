import React, { useState } from "react";
import PackList from "./PackList";

const Form = ({ arrayNumber, setArrayNumber }) => {
  const [number, setNumber] = useState("");
  const [itemText, setItemText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const textHandleInputChange = (e) => {
    setItemText(e.target.value);
  };
  const numberHandleInputChange = (e) => {
    setNumber(e.target.value);
  };
  const addItemsToArray = () => {
    if (!number.trim() || !itemText.trim()) {
      return;
    }
    const combine = `${number}- ${itemText} `;
    setArrayNumber([...arrayNumber, combine]);
    setNumber("");
    setItemText("");
    setErrorMessage("");
  };

  return (
    <div className="form">
      <div className="box">
        <div>What Do you Need For Your Trip</div>
        <input
          className="num"
          type="number"
          min={1}
          max={20}
          value={number}
          onChange={numberHandleInputChange}
        />
        <input
          className="text"
          type="text"
          value={itemText}
          onChange={textHandleInputChange}
        />
        <button className="buton" onClick={addItemsToArray}>
          Add
        </button>
      </div>
      <PackList arrayNumber={arrayNumber} setArrayNumber={setArrayNumber} />
    </div>
  );
};

export default Form;
