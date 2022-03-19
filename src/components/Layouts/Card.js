import React from "react";

const Card = ({ image, title, year }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="info">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default Card;
