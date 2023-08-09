import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";

const ShoppingCard = () => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/savedData")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setStoredData(data);
        });
    }, 1000);
  }, []);

  return <div>{storedData && <Cart data={storedData} />}</div>;
};

export default ShoppingCard;
