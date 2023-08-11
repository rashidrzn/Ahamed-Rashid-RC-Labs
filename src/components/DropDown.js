import React from "react";

const DropDown = ({ data }) => {
  return (
    <select>
      {data.map((dt) => (
        <option value={dt.details.brand}>{dt.details.brand}</option>
      ))}
    </select>
  );
};

export default DropDown;
