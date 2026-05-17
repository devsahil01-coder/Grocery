import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import vegitables from "../../assets/basket-full-vegetables.png";
const Values = () => {
  
  const leftValues = value.slice(0,2).map((item,i) => (
    
    <div key={i} className="flex gap-4 flex-1 flex-row-reverse items-center">
      <div className="w-15 h-15 text-2xl text-white rounded-full bg-orange-500 flex justify-center items-center shrink-0">
        <span>{item.icon}</span>
      </div>
      <div  className="md:text-right">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.para}</p> 
      </div>
    </div>
  ));

  const rightValues = value.slice(2).map((item,i) => (
    <div key={i} className="flex  gap-6  flex-1 items-center">
      <div className="w-15 h-15 text-2xl text-white rounded-full bg-orange-500 flex justify-center items-center shrink-0">
        <span>{item.icon}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.para}</p> 
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight={"Our"} heading={" Values"} />
        <div className="flex md:flex-row-reverse flex-col justify-between  gap-6 ">
          
          {/* left content */} 
          <div className="min-h-100 flex flex-col justify-between">
          {leftValues}
          </div>

          {/* image  */}
          <div className="md:flex w-1/2 hidden">
            <img src={vegitables} alt="" />
          </div>

          {/* right content  */}
          <div className="min-h-100 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
