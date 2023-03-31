import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <li className="bg-blend-difference select-none text-black mx-5 text-lg">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="bg-blend-difference select-none text-black mx-5 text-lg">
        <NavLink to={"/movies"}>Movie</NavLink>
      </li>
      <li className="bg-blend-difference select-none text-black mx-5 text-lg">
        <NavLink to={"/tvSeries"}>Tv Series</NavLink>
      </li>
      <li className="bg-blend-difference select-none text-black mx-5 text-lg">
        <NavLink to={"/contactUs"}>contact us</NavLink>
      </li>
    </>
  );
};

export default Menu;
