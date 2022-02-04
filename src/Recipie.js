import React from "react";
import "./App.css";

const Recipie = ({ recipie }) => {
  const nut = recipie.nutrition.nutrients;

  return (
    <div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src={recipie.image} alt="recipie" />
          </div>
          <div className="card_title title-black">
            <h3>{recipie.title}</h3>
            {nut.map((nut) => (
              // console.log(item.name, item.amount, item.unit);
              <div key={nut.amount}>
                <h5> {nut.name}</h5>
                <p> {nut.amount}</p>
                <p> {nut.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipie;
