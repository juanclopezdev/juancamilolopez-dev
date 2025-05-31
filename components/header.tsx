"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ThemeSwitch from "@/components/ThemeSwitch";

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // New state to manage the background color transparency
  const [bgTransparent, setBgTransparent] = useState(true);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavFalse = () => {
    setNav(false);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Technologies" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Education" },
    { id: 5, text: "Work Experience" },
    { id: 6, text: "Contact" },
  ];

  // Handle scroll position and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        (currentScrollPos >= -10 && currentScrollPos <= 200) ||
        prevScrollPos > currentScrollPos;
      // Update the background transparency based on scroll position
      setBgTransparent(currentScrollPos >= 0 && currentScrollPos <= 200);

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`z-20 fixed w-full transition-transform  duration-200 ease-in-out ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div
        className={
          nav
            ? " backdrop-filter z-10 left-0 top-0 ease-in-out duration-500  w-[100vw] h-[100vh] inset-0   bg-text dark:bg-slate-200 bg-opacity-70  backdrop-blur-lg fixed flex justify-center items-center md:justify-normal md:items-normal mt-24 "
            : "ease-in-out w-[100vw] h-[100vh]  duration-500 fixed top-0 left-[-100vw]  "
        }
      >
        <div
          className={` ease-in-out  transition-all h-[90vh]   flex md:flex-wrap md:flex-row flex-col justify-start md:justify-between  items-center   ${
            visible ? " -mt-24 " : " mt-0 "
          }`}
        >
          <ul className="flex  md:flex-wrap md:flex-row flex-col md:w-[70vw] w-[90vw] py-4 md:py-10  justify-center border-b-2 md:border-b-0 border-details dark:border-darkdetails">
            {navItems.map((item) => (
              <Link
                href={`/#${item.text.replace(/\s+/g, "-")}`}
                key={item.id}
                onClick={handleNav}
              >
                <li className=" text-xl md:text-3xl p-2 md:p-4 rounded-xl  cursor-pointer transition-all ease-in-out duration-200 text-details dark:text-darkdetails hover:scale-105 hover:text-background hover:dark:text-darkbackground text-left md:text-center">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>

          <div className=" md:w-[30vw] flex flex-col  w-[90vw] py-5 md:py-10    ">
            <h2 className="font-bold  text-2xl md:text-3xl p-2 md:p-4 rounded-xl    text-details dark:text-darkdetails text-left">
              Social
            </h2>

            <a
              href="https://www.linkedin.com/in/juanlopez-rodriguez/"
              rel="noreferrer"
              target="_blank"
              className=" text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details dark:text-darkdetails text-left"
            >
              <div className="flex  justify-start  items-center gap-2 ">
                <FaLinkedin
                  size={30}
                  className="fill-details dark:fill-darkdetails"
                />
                Juan Camilo
              </div>
            </a>

            <a
              href="https://github.com/juanclopezdev"
              rel="noreferrer"
              target="_blank"
              className=" text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details dark:text-darkdetails text-left"
            >
              <div className="flex  justify-start items-center gap-2 ">
                <FaGithubAlt
                  size={30}
                  className="fill-details dark:fill-darkdetails"
                />
                juanclopezdev
              </div>
            </a>

            <h2 className="font-bold text-2xl md:text-3xl p-2 md:p-4 rounded-xl    text-details dark:text-darkdetails text-left">
              Contact
            </h2>

            <a
              href="mailto:juannk1232@hotmail.com"
              className=" text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details dark:text-darkdetails text-left"
            >
              <div className={`flex justify-start  items-center gap-2 `}>
                <FaEnvelope
                  size={25}
                  className="fill-details dark:fill-darkdetails"
                />
                <p className="flex ">juannk1232@hotmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/573122586774"
              rel="noreferrer"
              target="_blank"
              className=" text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details dark:text-darkdetails text-left"
            >
              <div className="flex  justify-start  items-center gap-2 ">
                <FaPhoneAlt
                  size={25}
                  className="fill-details dark:fill-darkdetails"
                />
                (+57) 312 258 6774
              </div>
            </a>
            <div className="flex w-[90vw] h-20 -ml-[5vw] p-2  md:hidden cursor-pointer text-details dark:text-darkdetails">
              <button className="" type="button" onClick={handleNav}>
                <ThemeSwitch />
              </button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`font-bold transition ease-in-out duration-300  ${
          bgTransparent && nav
            ? " bg-text dark:bg-slate-200 bg-opacity-70 backdrop-filter backdrop-blur-lg text-details dark:text-darkdetails"
            : bgTransparent
            ? " bg-transparent text-text dark:text-darktext"
            : "bg-text dark:bg-darktext shadow-lg shadow-black/[0.03] bg-opacity-95 text-details dark:text-darkdetails"
        }  flex justify-between items-center h-24 mx-auto px-10 md:px-32  text-lg top-0 w-full `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Logo */}
        <Link href={"/"} className="z-30" onClick={handleNavFalse}>
          <Image
            src={bgTransparent ? "/Images/icon2.png" : "/Images/icon2.png"}
            alt="Logo GoBig"
            width={80}
            height={80}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex gap-4 hidden ">
          <ThemeSwitch />
          <button
            className={` z-30 hidden md:flex items-center  text-xl font-semibold  px-4 py-2 rounded-xl duration-300 ${
              bgTransparent && nav
                ? "hover:bg-details hover:dark:bg-darkdetails hover:text-text hover:dark:text-darktext"
                : bgTransparent
                ? "hover:bg-text hover:dark:bg-darktext  hover:text-details hover:dark:text-darkdetails"
                : "hover:bg-details hover:dark:bg-darkdetails hover:text-text hover:dark:text-darktext"
            } `}
            type="button"
            onClick={handleNav}
          >
            {" "}
            Menu{" "}
          </button>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          onKeyDown={handleNav}
          className="block md:hidden cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose
              size={30}
              className="transition-all ease-in-out duration-200"
              color={
                bgTransparent
                  ? "bg-text dark:bg-darktext  "
                  : " bg-details dark:bg-darkdetails "
              }
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="transition-all ease-in-out duration-200"
              color={
                bgTransparent
                  ? "bg-text dark:bg-darktext"
                  : "bg-details dark:bg-darkdetails"
              }
            />
          )}
        </div>

        {/* Mobile Navigation Menu */}
      </motion.div>
    </header>
  );
};

export default Header;
