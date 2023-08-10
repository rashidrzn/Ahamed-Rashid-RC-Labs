import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import useFetch from "../useFetch";

const Home = () => {
  const { data } = useFetch("http://157.245.61.32:7979/vehicles");

  return <div className="home-content">{data && <Cart data={data} />}</div>;
};

export default Home;
