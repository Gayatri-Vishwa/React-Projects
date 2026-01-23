import React from "react";
import Card from "../components/Card";
import foodData from "../../data";

function Breakfast() {
  // Filter breakfast items
  const filteredData = foodData.filter((item) => item.type === "breakfast");

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center overflow-x-hidden"
      style={{ backgroundImage: `url('./bg.png')` }}
    >
      <div
        className="
          w-full
          max-w-7xl
          px-4
          py-6
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-4
          gap-y-6
        "
      >
        {filteredData.map((item, idx) => (
          <Card
            key={idx}
            img={item.image}
            name={item.name}
            price={item.price}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Breakfast;
