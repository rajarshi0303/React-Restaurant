import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function active({ isActive }) {
    return isActive
      ? "py-2 px-3 md:p-0  text-[#B49383] cursor-pointer"
      : "py-2 px-3 md:p-0  hover:text-[#B49383] cursor-pointer";
  }

  //Scroll To Top
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //Navbar Animation Code
  const { scrollYProgress } = useScroll();
  const [color, setColor] = useState("bg-gray-950 md:bg-transparent");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (scrollYProgress.get() < 0.02 || current === 1) {
      setColor("bg-gray-950 md:bg-transparent");
    } else {
      setColor("bg-gray-950");
    }
  });

  return (
    <>
      <motion.nav
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={`fixed w-full top-0 z-10 ${color}`}
      >
        <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <a className="px-4 flex items-center space-x-3 rtl:space-x-reverse">
            <div>
              <span className="self-center tracking-tight text-3xl font-base whitespace-nowrap text-white">
                The Venue
              </span>
              <p className="tracking-[6.5px] uppercase text-sm text-white">
                Restruant
              </p>
            </div>
          </a>

          <div className="px-4 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white border-2 font-medium text-sm px-4 py-2 text-center hover:text-[#B49383] hover:border-[#B49383]"
            >
              Reservations
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-12 h-11 md:hidden text-white bg-gray-700 flex items-center justify-center font-medium text-sm p-2.5 text-center me-2 focus:outline-none"
            >
              <div className="w-full">
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : " -translate-y-2"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : " translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } absolute top-[87px] transition-transform duration-300 ease-in-out z-20 w-full bg-gray-950 md:relative md:top-0 md:flex md:w-auto md:order-1  md:${color} md:translate-x-0`}
          >
            <ul className="flex flex-col font-medium uppercase p-4 md:p-0 lg:mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-white">
              <li>
                <NavLink to="/" className={active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={active}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={active}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={active}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={active}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
