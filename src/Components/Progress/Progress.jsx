import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Progress = () => {
  const renderSteps = steps.map((item) => (
    <div>
      {/* left box */}
      <div className={`flex-1  ${item.id%2==0 ?'-mt-40':""} `}>
        <span className="flex mb-4 w-18 h-18 outline-[3px] text-8xl text-white justify-center items-center outline-dotted  rounded-full bg-zinc-800 outline-offset-7 outline-zinc-800 ">
          {item.number}
        </span>
        <div className="flex items-center gap-x-3">
            <span className= "text-3xl flex bg-orange-500 p-3 rounded-full text-white">{item.icon}</span>
 
          <div>
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p>{item.para}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-20 py-20">
        <Heading highlight={"Our"} heading={" Progress"} />
        <div className=" mt-20 py-20 p-3 flex ">{renderSteps}</div>
      </div>
    </section>
  );
};

export default Progress;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
