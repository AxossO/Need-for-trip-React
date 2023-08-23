import React from "react";
import Item from "./Item";

const PackList = ({ arrayNumber, setArrayNumber }) => {
  const clearListHandler = (e) => {
    e.preventDefault();
    setArrayNumber([]);
  };
  return (
    <div className="pack-list">
      <div className="container">
        {arrayNumber.map((items, id) => (
          <Item
            key={id}
            items={items}
            setArrayNumber={setArrayNumber}
            arrayNumber={arrayNumber}
          />
        ))}
        <form>
          <button onClick={clearListHandler} className="clear-list">
            Clear List
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackList;
