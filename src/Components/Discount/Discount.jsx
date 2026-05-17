import React from "react";
import Button from "../Button/Button";
import bgFruit from "../../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section
  className="my-10 w-full bg-no-repeat bg-right bg-cover"
  style={{ backgroundImage: `url(${bgFruit})` }}
>
  <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-10">
    
    <div className="max-w-[900px] flex items-center gap-6 bg-zinc-100/90 p-10 rounded-2xl">
      
      <span className="text-7xl md:text-9xl text-orange-500 -rotate-90 font-bold leading-none">
        20%
      </span>

      <div>
        <h3 className="text-3xl md:text-5xl font-bold">
          First Order Discount!
        </h3>

        <p className="my-4 text-zinc-600 leading-7">
          Enjoy an exclusive first order discount on our grocery website!
          Shop fresh essentials and save big on your first purchase.
        </p>

        <Button content={"Get a Discount"} />
      </div>

    </div>

  </div>
</section>
  );
};

export default Discount;
