import React from "react";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <h2>Brand</h2>
          <select>
            <option value="Select brand " defaultChecked>
              hfhf
            </option>
            <option value="defaulf">hfhf</option>
          </select>
        </div>
        <div className="nav-right">
          <BsBagHeartFill />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
