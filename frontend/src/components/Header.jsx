
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Header = ({ setShowLogin }) => {
  const { getTotalCartItems, token, setToken } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [header, setHeader] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollYPos = window.addEventListener("scroll", () => {
        window.scrollY > 20 ? setHeader(true) : setHeader(false);
      });
    };
  });

  return (
    <header
      className={`${
        header ? "!py-3 bg-white shadow-sm" : ""
      } fixed w-full mx-auto top-0 left-0 right-0 py-4 z-30 transition-all max-w-[1440px] px-6 lg:px-12 flex items-center justify-between`}
    >
      <Link to={"/"}>
        <img src={logo} alt="logoImg" height={100} width={100} />
      </Link>
      <div className="flex items-center justify-between gap-x-20">
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transition-all w-64 duration-300"
              : "flex items-start flex-col w-64 gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        <div className="flex items-center justify-between gap-x-3 sm:gap-x-8">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
          <Link to={"/cart"} className="flex relative">
            <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl " />
            <span className="bg-white text-sm -top-2 -right-3 w-5 rounded-full shadow-md flex items-center justify-center absolute">
              {getTotalCartItems()}
            </span>
          </Link>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="rounded-full medium-15 px-7 py-2.5 border border-tertiary"
            >
              Login
            </button>
          ) : (
            <div className="group relative">
              <FaCircleUser className="text-2xl" />
              <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden ">
                <li className="flex items-center justify-center gap-x-2 cursor-pointer">
                  <FiPackage className="text-[19px]" />
                  <p>Orders</p>
                </li>
                <hr className="my-2" />
                <li onClick={logout} className="flex items-center justify-center gap-x-2 cursor-pointer">
                  <TbLogout className="text-[19px]" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
