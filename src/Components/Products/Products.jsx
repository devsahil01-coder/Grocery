import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { productsLists } from "../ProductLists/ProductsLists";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productsLists
      : productsLists.filter((item) => {
          return item.category === activeTab;
        });

  const renderCards = filteredProducts
    .slice(0, 8)
    .map((product) => (
      <Card image={product.image} name={product.name} price={product.price} />
    ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight={"Our"} heading={" Products"} />
        <div className="flex gap-3 justify-center mt-10">
          {categories.map((item, i) => (
            <button
              key={i}
              className={` rounded px-6 py-2 text-lg duration-600 transition-all cursor-pointer ${activeTab === item ? "bg-orange-500 text-white" : "bg-zinc-100"}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 py-10 ">
          {renderCards}
        </div>
        <div className="mx-auto mt-8 w-fit">
        <Link to={`/allproducts`} className='bg-gradient-to-b from-orange-400 to-orange-500 md:px-8 md:py-3 px-6 py-2 md:text-lg text:sm text-white rounded-3xl hover:scale-105 transition-all duration-100 cursor-pointer'>View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
