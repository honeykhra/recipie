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
            {nut.forEach(function (item, index, array) {
              console.log(item.name, item.amount, item.unit);
            })}
            <h3>Nutrition is </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipie;
