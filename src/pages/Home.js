import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Home = () => {
  const [data, setData] = useState(null);
  //   const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://157.245.61.32:7979/vehicles")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //   setIsPending(false);
          setData(data);
          console.log(data);
        });
    }, 1000);
  }, []);

  return <div className="home-content">{data && <Cart data={data} />}</div>;
};

export default Home;
