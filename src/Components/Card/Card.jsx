import React from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa";
import Button from "../Button/Button";
const Card = ({image,name,price}) => {
  return (
    <div className="bg-zinc-100 shadow-xl  px-8 py-4">
      {/* card icons */}
      <div className="flex justify-between text-2xl">
        <span className="cursor-pointer">
          <FaRegHeart />
        </span>
        <button className="cursor-pointer">
          <FaPlus />
        </button>
      </div>

      {/* card image */}
      <div className="w-full h-50">
        <img src={image}  alt="" className="w-full h-full object-contain " />
      </div>

      {/* card content */}
      <div className="p-2 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="m-2 text-[20px] font-bold">${price.toFixed(2)}</p>
        <Button content={"Shop Now"} />
      </div>

    </div>
  );
};

export default Card;
