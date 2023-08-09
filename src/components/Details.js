import React from "react";
import { Link } from "react-router-dom";

const Details = ({ data }) => {
  return (
    <div className="detail-container">
      <div className="back-btn">
        <Link to={`/`}>
          <p> 🔙Back</p>
        </Link>
      </div>
      <div className="ori-details">
        <div className="single-img">
          <img src={data.details.image} alt="" />
        </div>
        <div className="single-description">
          <h1>
            {data.details.brand}
            {data.name}
            {data.details.manufactureYear}
          </h1>
          <h3>Description: </h3>
          <p>{data.details.description}</p>
          <h3>
            Color:
            <div
              style={{
                width: 30,
                height: 30,
                padding: 20,
                display: "inline",
                color: `{data.details.color}`,
              }}
            >
              -
            </div>
          </h3>
          <form className="input-fields">
            <div className="input-1">
              <input
                type="number"
                placeholder="amount"
                onChange={(e) => {
                  //   setAmount(e.target.value);
                }}
              />
              <span style={{ marginLeft: 10 }}>LKR</span>
            </div>
            <div className="btn">
              <button className="gre">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
