import React from "react";

export default function FoodCard({ food }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      marginBottom: "1rem",
      borderRadius: "0.5rem"
    }}>
      <h3>{food.name}</h3>
      <p>{food.description}</p>
    </div>
  );
}