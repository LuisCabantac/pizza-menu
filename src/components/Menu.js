import React from "react";
import { pizzaData } from "../App";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}
