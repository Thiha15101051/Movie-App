import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import Menu from "./menu/Menu";
import Menu_Search from "./menu/Menu_Search";
import { ActionToggle } from "./menu/DarkMode";
import { Context } from "../content/StateContent";
import { Button } from "@mantine/core";

const Navbar = ({ products, filterFoods, setProducts }) => {
  const {
    slowTransitionOpened,
    setSlowTransitionOpened,
    slowSearchBar,
    setSlowSearchBar,
  } = Context();
  const resMenu = document.getElementsByClassName("responsiveMenu");
  const search = document.getElementsByClassName("search");
  const showMenu = (el) => {
    if (el[0].classList.contains("responsiveNav")) {
      el[0].classList.add("showMenu");
      el[0].classList.remove("responsiveNav");
    } else if (el[0].classList.contains("showMenu")) {
      el[0].classList.add("responsiveNav");
      el[0].classList.remove("showMenu");
    }
  };
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <div className="flex justify-between lg:justify-between lg:rounded-b-lg bg-slate-600 lg:opacity-90 px-5 lg:px-10 z-10  items-center None:container  w-full lg:fixed top-0 py-2">
          <div>
            <NavLink to={"/"}>
              <RiMovie2Fill className="text-5xl text-black p-0" />
            </NavLink>
          </div>
          <div>
            <nav className="w-full  nav">
              <ul className="flex mx-auto bg-transparent">
                <Menu />
              </ul>
            </nav>
          </div>
          <div>
            <div className="flex items-center ">
              <div className="h-11 flex items-center mx-1 p-2">
                <ActionToggle />
              </div>
              <Link to={"/ordered"}>
                <button className="  mx-1 p-2">
                  <FiHeart className="text-2xl text-black " />
                </button>
              </Link>
              <BsSearch
                size={"2.50rem"}
                className=" mx-1 p-2 searchBtn  text-black cursor-pointer"
                onClick={() => setSlowSearchBar(true)}
              />

              <button
                className="hamburger"
                onClick={() => setSlowTransitionOpened(true)}
              >
                <GiHamburgerMenu className="text-3xl text-black mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
