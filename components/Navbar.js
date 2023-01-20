import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-2xl font-bold font-sans z-[100]  bg-slate-100">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
        <Image src="/../public/logo.png" width="125" height="50" alt="elwersa logo" />
        </Link>
        <div className="mx-10 ">
          <ul className=" uppercase hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">HOME</li>
            </Link>
            <Link href="/movies">
              <li className="ml-10 text-sm  hover:border-b">MOVIES</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm hover:border-b">ABOUT</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 mr-[100px] text-sm hover:border-b">
                CONTACT
              </li>
            </Link>
            <div className="flex items-center justify-center bg-white rounded p-1">
              <input
                className="p-1 rounded outline-0 px-4"
                type="search"
                placeholder="Search"
              />
              <AiOutlineSearch className="cursor-pointer"/>
            </div>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image src="/../public/logo.png" width="87" height="35" alt="elwersa logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                with elwersa enjoy each and every moment of your life
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">HOME</li>
              </Link>
              <Link href="/movies">
                <li className="py-4 text-sm">MOVIES</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">ABOUT</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm">CONTACT</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
