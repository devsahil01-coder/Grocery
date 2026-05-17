import React from "react";
import Button from "../Button/Button";

import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20 mt-8">
      <div className="max-w-[1400px] mx-auto px-10 flex ">
        <div className="flex-1">
          <a href="#" className="text-3xl font-semibold">
            Gr<span className="text-orange-500 font-bold">O</span>cery
          </a>
          <p className="max-w-[350px] mt-6 text-zinc-800">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="mt-6">2026 &Copy;all rights reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              About
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Support Center
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Feedback
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Contact Us{" "}
            </a>
          </li>
        </ul>

        <div>
          <h5 className="text-2xl font-bold">Stay Connected</h5>
          <p>
            Questions or feedback?<br />
            we'd love to hear from you.
          </p>
          <div className="flex gap-x-2 rounded-lg px-3 bg-white py-1">
            <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter Address" className="focus:outline-none" />
            <button className="py-2  flex justify-center items-center px-3 text-xl text-white cursor-pointer  bg-orange-500 rounded"><IoIosArrowForward /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
