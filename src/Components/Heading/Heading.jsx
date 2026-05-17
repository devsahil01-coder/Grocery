import React from "react";

const Heading = ({heading,highlight}) => {
  return (
    <div className="mx-auto w-fit">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-orange-500">{highlight}</span>{heading}
      </h2>
      <div
        className="w-25 h-1 ml-auto
           md:mt-4 mt-3 bg-orange-500"
      ></div>
    </div>
  );
};

export default Heading;
