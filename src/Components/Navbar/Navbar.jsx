import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener(`scroll`, handleScroll);
  }, []);

  return (
    <header className="">
      <nav
        className={`max-w-[1400px] z-99 bg-white fixed left-0 right-0 top-0 mx-auto h-[10vh]  md:h-[10vh] px-2 items-center flex justify-between ${isScroll ? "shadow-lg" : null}`}
      >
        <a href="#" className="text-3xl font-semibold">
          Gr<span className="text-orange-500 font-bold">O</span>cery
        </a>
        {/* Desktop menu */}
        <ul className="md:flex hidden gap-x-10 items-center font-semibold">
          <li>
            <a href="#" className="font-semibold tracking-wide text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* nav action */}
        <div className="flex gap-x-3 items-center">
          {/* input field */}

          <div className="md:flex hidden items-center gap-3 border p-1 rounded-full border-[2px] border-amber-300">
            <input
              className="flex-1 focus:outline-none px-1 h-[30px] "
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
            />
            <button className="bg-orange-300 rounded-full w-10 h-10  flex justify-center items-center cursor-pointer">
              <FaSearch />
            </button>
          </div>

          <a href="" className="text-zicn-800 text-2xl">
            <FaHeart />
          </a>
          <a href="" className="text-zicn-800 text-2xl">
            <IoBag />
          </a>
          <a
            href="#"
            className="text-zicn-800 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* mobile menu */}
        <div>
          <ul
            className={`flex flex-col shadow-xl top-full  gap-y-6 bg-amber-500/15 backdrop-blur-xl rounded-xl p-10 md:hidden gap-x-10 items-center font-semibold absolute duration-500 transition-all  transform -translate-x-1/2 ${showMenu ? "left-1/2" : "-left-1/2"}`}
          >
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 duration-100"
              >
                Contact us
              </a>
            </li>
            <li className="flex md:hidden items-center gap-3 border p-1 rounded-full border-[2px] border-amber-300">
              <input
                className="flex-1 focus:outline-none px-1 h-[30px] "
                type="text"
                name="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className="bg-orange-300 rounded-full w-10 h-10  flex justify-center items-center cursor-pointer">
                <FaSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
