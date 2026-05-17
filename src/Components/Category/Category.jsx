import React from "react";
import Heading from "../Heading/Heading";

import fruitsCat from "../../assets/fruits-and-veggies.png";
import dairyCat from "../../assets/dairy-and-eggs.png";
import seafoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const RenderCards = category.map((cat, i) => (

    <div key={i} className="flex-1 pt-4 basis-[300px]  ">
      {/* Card image  */}

      <div className="w-full min-h-[30vh] relative -mb-5">
        <img src={cat.image} alt="" className="absolute bottom-0 "  />
      </div>
      {/* Card content */}
      <div className="text-zinc-800 p-10 rounded shadow-xl bg-zinc-100">
        <h3 className="font-bold">{cat.title}</h3>
        <p className="pb-4">{cat.description}</p>

        <Link to={`${cat.path}`} className='bg-gradient-to-b from-orange-400 to-orange-500 md:px-8 md:py-3 px-6 py-2 md:text-lg text:sm text-white rounded-3xl hover:scale-105 transition-all duration-100 cursor-pointer'>See All</Link>
      </div>
    </div>
  ));
  return (
    <section>
      <div className=" max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Shop" heading={" by Category"} />

        {/* Cards */}
        <div className="flex gap-10 flex-wrap md:mt-8 mt-2">{RenderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitsCat,
    path:"fruits"
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses",
    image: dairyCat,
    path:"dairy"
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: seafoodCat,
    path:'seafood'
  },
];
