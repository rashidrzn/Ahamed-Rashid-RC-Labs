import React, { useState } from "react";
// import myImage from "../assets/Ahamed Rashid.png";

const Cart = ({ data }) => {
  const [amount, setAmount] = useState("");
  //   const [imageId, setImageId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    amount === ""
      ? alert("Please enter an amount")
      : console.log("Amount:", amount);
  };

  return (
    <section className="container-1">
      {data.map((d) => {
        return (
          <div className="card" key={d.id}>
            <div className="card-image">
              {d.details.image !== null ? (
                <img src={d.details.image} alt="image" />
              ) : (
                <img src={d.details.image} alt="image" />
              )}
            </div>
            <div className="card-details">
              <h2>
                {d.details.brand}
                {d.name}
                {d.details.manufactureYear}
              </h2>
              {/* <h3>{d.details.color}</h3> */}
              <p>{d.details.description}</p>
            </div>
            <form onSubmit={handleSubmit} className="input-fields">
              <div className="input-1">
                <input
                  type="number"
                  placeholder="amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                LKR
              </div>
              <div className="btn">
                <button
                  onClick={() => {
                    console.log(d.id);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
