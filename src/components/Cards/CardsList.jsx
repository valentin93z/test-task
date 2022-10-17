import React from "react";
import Card from "./Card";
import "./CardList.css";
import { data } from "./data";

const CardsList = () => {
  return (
    <div className="card-list">
      {data.map((card, index) => <Card key={index} card={card} />)}
    </div>
  );
};

export default CardsList;