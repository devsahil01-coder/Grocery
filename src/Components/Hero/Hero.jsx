import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center pt-10 md:pt-25">
        {/* hero contact */}
        <div className="flex-1 max-w-[620px]">
          <span className="bg-orange-200 text-orange-400 px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/19 text-5xl/14 font-bold mt-5 mb-5">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> <br /> In Your City
          </h1>
          <p className="text-zinc-600 text-lg mb-4">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content={"Shop Now"} />
        </div>

        {/* hero image */}
        <div className="flex-1">
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
