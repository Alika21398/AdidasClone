import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Flag from "../assets/flag.png";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Details from "../pages/Details";
import LoginModel from "./LoginModel";
import Logo from "../assets/Logo.jpg";

function Header() {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState("");

  useEffect(() => {
    const handlescroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [lastScrollY]);
  return (
    <>
     <Routes>
        <Route path="/" element={<Home showNavbar={showNavbar} />} />
        <Route path="/cat/:cid" element={<Category  />} />
        <Route path="/details/:cid/:id" element={<Details  />} />
      </Routes>
    <div className={` w-full bg-[#ffffff] fixed ${showNavbar ? 'top-0' : '-top-36'} duration-300 transition-all`}>
      {/* toppest black part */}
      <div className="bg-black py-2">
        <p className="text-[#fff] text-[13px] text-center semi-bold">
          FREE STANDARD SHIPPING WITH ADICLUB
        </p>
      </div>

      {/* Top right section  */}
      <ul className="flex justify-end gap-5 text-[10px] px-16 py-2">
        <li>
          <Link to="/">help</Link>
        </li>
        <li>
          <Link to="/">orders and returns</Link>
        </li>
        <li>
          <Link to="/">join adiClub</Link>
        </li>
        <li className="w-[20px]">
          <Link to="/">
            <img className="w-full" src={Flag} alt="" />{" "}
          </Link>
        </li>
      </ul>

      {/* navbar starts  */}
      <nav className={`flex px-16 py-2 justify-between border-b-2 align-middle `}>
        <div className="w-[75px] ">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="flex text-[black] gap-8 pb-0 text-center">
          <li className=" font-bold text-[18px]">
            <Link to="/cat/Men's">Men</Link>
          </li>
          <li className="font-bold text-[18px]">
            <Link to="/cat/Women's">Women</Link>
          </li>
          <li className="font-bold text-[18px]">
            <Link to="/cat/Kid's">Kids</Link>
          </li>
          <li>
            <Link to="/">Sale</Link>
          </li>
          <li>
            <Link to="/">New and Trending</Link>
          </li>
        </ul>

        <div className="flex gap-5 align-middle">
          <form className="relative" action="">
            <input
              className="border p-1 bg-[#EAEEEF] "
              placeholder="Search"
              type="text"
            />
            <button className="absolute right-1 top-1 bold text-xl">
              <i class="bi bi-search"></i>
            </button>
          </form>
          <button
            className="bold text-2xl"
            onClick={() => {
              setShow(!show);
            }}
          >
            <i className=" font-bold text-xl" class="bi bi-person"></i>
          </button>
          <LoginModel show={show} setShow={setShow} />

          <div className="bold text-xl">
            <i class="bi bi-suit-heart"></i>
          </div>
          <div className="bold text-xl">
            <i class="bi bi-bag"></i>
          </div>
        </div>
      </nav>
      </div>

     
    </>
  );
}

export default Header;
