import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3>{name} -----</h3>
        <p>{recipe}</p>
      </div>
      <p className="flex text-[#BB8506]">
        <span>$</span> {price}
      </p>
    </div>
  );
};

export default MenuItem;
