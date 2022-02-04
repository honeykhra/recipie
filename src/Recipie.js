import React from "react";
import { Card, Button } from "react-bootstrap";
import "./App.css";

const Recipie = ({ recipie }) => {
  const nut = recipie.nutrition.nutrients;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipie.image} alt="recipie" />
        <Card.Body>
          <Card.Title>{recipie.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      {nut.map((nut) => (
        // console.log(item.name, item.amount, item.unit);
        <div key={nut.amount}>
          <h5> {nut.name}</h5>
          <p> {nut.amount}</p>
          <p> {nut.unit}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipie;
