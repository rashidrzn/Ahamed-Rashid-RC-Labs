import React from "react";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import DropDown from "./DropDown";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const { data } = useFetch("http://157.245.61.32:7979/vehicles");

  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <h2>Brand</h2>
          {data && <DropDown data={data} />}
        </div>
        <div className="nav-right">
          <BsBagHeartFill />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
